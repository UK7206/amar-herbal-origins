import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { sendEnquiryNotification, sendAutoReply } from '@/lib/email';

// On Vercel (serverless) use /tmp — on local dev use .data/
const DATA_DIR = process.env.VERCEL
  ? '/tmp/amar-data'
  : path.join(process.cwd(), '.data');
const ENQUIRIES_FILE = path.join(DATA_DIR, 'enquiries.json');

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function readEnquiries() {
  ensureDataDir();
  if (!fs.existsSync(ENQUIRIES_FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(ENQUIRIES_FILE, 'utf-8'));
  } catch {
    return [];
  }
}

function writeEnquiries(data: unknown[]) {
  ensureDataDir();
  fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(data, null, 2));
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const enquiries = readEnquiries();
    const newEnquiry = {
      id: Date.now().toString(),
      ...body,
      timestamp: new Date().toISOString(),
      ip: req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown',
      userAgent: req.headers.get('user-agent') || 'unknown',
      status: 'new',
    };
    enquiries.unshift(newEnquiry);
    // Keep last 500
    if (enquiries.length > 500) enquiries.splice(500);
    writeEnquiries(enquiries);

    // ── Send to Google Sheets & Emails in parallel ──────────────
    const sheetsUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
    const operations: Promise<any>[] = [
      sendEnquiryNotification(newEnquiry),
      sendAutoReply(newEnquiry),
    ];

    if (sheetsUrl) {
      operations.push(
        fetch(sheetsUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
            name: newEnquiry.name || '',
            email: newEnquiry.email || '',
            phone: newEnquiry.phone || '',
            company: newEnquiry.company || '',
            country: newEnquiry.country || '',
            product: newEnquiry.product || '',
            quantity: newEnquiry.quantity || '',
            purity: newEnquiry.purity || '',
            swelling: newEnquiry.swelling || '',
            moisture: newEnquiry.moisture || '',
            application: newEnquiry.application || '',
            annualqty: newEnquiry.annualQty || '',
            incoterms: newEnquiry.incoterms || '',
            certs: newEnquiry.certs || '',
            timeline: newEnquiry.timeline || '',
            sampleneeded: newEnquiry.sampleNeeded || '',
            message: newEnquiry.message || '',
            ip: newEnquiry.ip || '',
            status: newEnquiry.status || 'new',
            id: newEnquiry.id || '',
          }),
        }).then(res => {
          if (!res.ok) throw new Error(`HTTP error ${res.status}`);
          return res.text();
        })
      );
    }

    // Await all operations so Vercel serverless doesn't terminate them before completion
    await Promise.allSettled(operations).then(results => {
      results.forEach((r, i) => {
        const name = i === 0 ? 'admin-notify' : i === 1 ? 'auto-reply' : 'google-sheets';
        if (r.status === 'rejected') {
          console.error(`❌ Operation ${name} failed:`, r.reason);
        } else {
          console.log(`✅ Operation ${name} succeeded`);
        }
      });
    });

    return NextResponse.json({ success: true, id: newEnquiry.id });
  } catch (error) {
    console.error('Enquiry save error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('x-admin-key');
  if (authHeader !== process.env.ADMIN_KEY && authHeader !== 'amar-admin-2024') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // 1. Try fetching from Google Sheets
  const sheetsUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (sheetsUrl) {
    try {
      const res = await fetch(sheetsUrl, { next: { revalidate: 0 } });
      if (res.ok) {
        const data = await res.json();
        if (data && Array.isArray(data.enquiries)) {
          const normalized = data.enquiries.map((e: any) => ({
            id: e.id || Date.now().toString(),
            name: e.name || '',
            email: e.email || '',
            phone: e.phone || '',
            company: e.company || '',
            country: e.country || '',
            product: e.product || '',
            quantity: e.quantity || '',
            purity: e.purity || '',
            swelling: e.swelling || '',
            moisture: e.moisture || '',
            application: e.application || '',
            annualQty: e.annualqty || '',
            incoterms: e.incoterms || '',
            certs: e.certs || '',
            timeline: e.timeline || '',
            sampleNeeded: e.sampleneeded || '',
            message: e.message || '',
            timestamp: e.timestamp || new Date().toISOString(),
            ip: e.ip || '',
            status: e.status || 'new',
          }));
          return NextResponse.json({ enquiries: normalized });
        }
      }
    } catch (err) {
      console.error('Failed to fetch enquiries from Google Sheets:', err);
    }
  }

  // 2. Fallback: local file
  const enquiries = readEnquiries();
  return NextResponse.json({ enquiries });
}

export async function PATCH(req: NextRequest) {
  const authHeader = req.headers.get('x-admin-key');
  if (authHeader !== process.env.ADMIN_KEY && authHeader !== 'amar-admin-2024') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const { id, status } = await req.json();

  const operations: Promise<any>[] = [];

  // Update in Google Sheets
  const sheetsUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  if (sheetsUrl) {
    operations.push(
      fetch(sheetsUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'updateStatus',
          id,
          status,
        }),
      })
    );
  }

  await Promise.allSettled(operations);

  const enquiries = readEnquiries();
  const idx = enquiries.findIndex((e: { id: string }) => e.id === id);
  if (idx !== -1) {
    enquiries[idx].status = status;
    writeEnquiries(enquiries);
  }
  return NextResponse.json({ success: true });
}
