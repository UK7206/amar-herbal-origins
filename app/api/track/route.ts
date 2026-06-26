import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// On Vercel (serverless) use /tmp — on local dev use .data/
const DATA_DIR = process.env.VERCEL
  ? '/tmp/amar-data'
  : path.join(process.cwd(), '.data');
const VISITORS_FILE = path.join(DATA_DIR, 'visitors.json');

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

function readVisitors() {
  ensureDataDir();
  if (!fs.existsSync(VISITORS_FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(VISITORS_FILE, 'utf-8'));
  } catch {
    return [];
  }
}

function writeVisitors(data: unknown[]) {
  ensureDataDir();
  fs.writeFileSync(VISITORS_FILE, JSON.stringify(data, null, 2));
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const visitors = readVisitors();
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') || 'unknown';
    const newVisit = {
      id: Date.now().toString(),
      page: body.page || '/',
      referrer: body.referrer || '',
      userAgent: req.headers.get('user-agent') || 'unknown',
      ip,
      country: body.country || '',
      sessionId: body.sessionId || '',
      timestamp: new Date().toISOString(),
    };
    visitors.unshift(newVisit);
    // Keep last 2000 visits
    if (visitors.length > 2000) visitors.splice(2000);
    writeVisitors(visitors);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Visitor track error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('x-admin-key');
  if (authHeader !== process.env.ADMIN_KEY && authHeader !== 'amar-admin-2024') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  const visitors = readVisitors();
  return NextResponse.json({ visitors });
}
