// ─────────────────────────────────────────────────────────────────────────────
// CategoryCountrySupplierPage.tsx
// Reusable country supplier page for Herbs / Spices / Oils / Ready-to-Eat
// ─────────────────────────────────────────────────────────────────────────────
import Link from 'next/link';
import type { Category } from '@/lib/category-data';
import type { CountryData } from '@/lib/countries-data';

interface Props {
  category: Category;
  country: CountryData;
  locale: string;
}

// ── Category-specific content generators ─────────────────────────────────────
function getCategoryKeywords(cat: Category, country: CountryData): string[] {
  const n = country.name;
  switch (cat.slug) {
    case 'herbs':
      return [
        `Indian herbs supplier ${n}`,
        `moringa powder exporter ${n}`,
        `amla powder supplier ${n}`,
        `dried herbs bulk ${n}`,
        `herbal powder manufacturer India ${n}`,
        `curry leaves supplier ${n}`,
        `dried mint exporter ${n}`,
        `oregano herb supplier ${n}`,
        `Indian herb exporter ${n}`,
        `bulk herb supplier Gujarat`,
      ];
    case 'spices':
      return [
        `Indian spices supplier ${n}`,
        `turmeric powder exporter ${n}`,
        `cumin seeds supplier ${n}`,
        `fenugreek seeds exporter ${n}`,
        `coriander seeds bulk ${n}`,
        `ajwain supplier ${n}`,
        `spice manufacturer India ${n}`,
        `Indian spices bulk export ${n}`,
        `organic spices supplier ${n}`,
        `Gujarat spices exporter`,
      ];
    case 'oils':
      return [
        `castor oil supplier ${n}`,
        `karanja oil exporter ${n}`,
        `cold pressed oil supplier ${n}`,
        `herbal oil bulk exporter India`,
        `castor oil manufacturer ${n}`,
        `industrial castor oil ${n}`,
        `neem karanja oil supplier ${n}`,
        `cold pressed castor oil ${n}`,
        `oil exporter India ${n}`,
        `Gujarat herbal oil exporter`,
      ];
    case 'ready-to-eat':
      return [
        `khakhra exporter ${n}`,
        `Indian snacks supplier ${n}`,
        `gujarati khakhra manufacturer`,
        `ready to eat snacks ${n}`,
        `khakhra private label ${n}`,
        `Indian snacks bulk exporter`,
        `khakhra white label ${n}`,
        `ready to eat food exporter India`,
        `Indian snacks manufacturer Gujarat`,
        `healthy snacks exporter ${n}`,
      ];
    case 'psyllium':
      return [
        `psyllium husk supplier ${n}`,
        `isabgol exporter ${n}`,
        `bulk psyllium husk ${n}`,
        `organic psyllium husk ${n}`,
        `psyllium husk importer ${n}`,
        `psyllium husk manufacturer India`,
        `ispaghula husk supplier ${n}`,
        `psyllium husk 99% purity exporter`,
        `psyllium husk B2B export`,
        `Gujarat psyllium exporter`,
      ];
    default:
      return [];
  }
}

function getCategoryMarketIntro(cat: Category, country: CountryData): string {
  const n = country.name;
  switch (cat.slug) {
    case 'herbs':
      return `${n} is an important market for premium Indian herbs and botanical ingredients. Buyers in ${n} — including nutraceutical brands, food manufacturers, Ayurvedic importers, and health supplement companies — increasingly source moringa powder, amla, curry leaves, mint, and oregano directly from Gujarat, India for competitive pricing and quality-certified supply.`;
    case 'spices':
      return `${n} is a significant importer of premium Indian spices. Buyers ranging from food processors and restaurant chains to spice blenders and health supplement manufacturers in ${n} seek bulk supplies of turmeric, cumin, fenugreek, coriander, and ajwain from Gujarat, India — the world's largest spice-producing region.`;
    case 'oils':
      return `${n} is a key market for cold-pressed herbal oils from India. Industrial users, cosmetic manufacturers, pharmaceutical companies, and specialty chemical buyers in ${n} import bulk castor oil and karanja oil from Gujarat — India's primary oil-seed producing state — for their superior quality and competitive FOB pricing.`;
    case 'ready-to-eat':
      return `${n} represents a growing market for authentic Indian ready-to-eat snacks. Importers, Indian grocery chains, specialty food distributors, and private-label brands in ${n} source premium Gujarati khakhra and healthy snacks directly from certified manufacturers in Gujarat, India.`;
    case 'psyllium':
      return `${n} is one of the key markets for psyllium husk (Isabgol) imported from India. Nutraceutical brands, pharmaceutical manufacturers, private label supplement companies, and food ingredient buyers in ${n} consistently source bulk psyllium husk from Gujarat — the world's largest producing region — for its quality consistency, competitive pricing, and certified supply.`;
    default:
      return '';
  }
}

function getCategoryImportReason(cat: Category, country: CountryData): string {
  const n = country.name;
  switch (cat.slug) {
    case 'herbs':
      return `India is the world's largest producer and exporter of medicinal and aromatic herbs. Buyers in ${n} prefer direct sourcing from Gujarat-based manufacturers like Amar Herbal Origins for guaranteed purity, certified quality (FSSAI, ISO 22000, GMP), competitive bulk pricing, and reliable supply chains with full documentation.`;
    case 'spices':
      return `India accounts for over 75% of global spice production, with Gujarat and Rajasthan being the primary growing regions. Buyers in ${n} benefit from sourcing directly from Indian manufacturers for authentic flavor profiles, price advantages, and certified quality (FSSAI, ISO 22000, Halal, Kosher) unavailable from secondary market suppliers.`;
    case 'oils':
      return `India is the world's largest castor oil producer, supplying over 85% of global demand. ${n}-based buyers choose Indian manufacturers for unmatched supply consistency, competitive FOB pricing, and the ability to source multiple grades (pharmaceutical, cosmetic, industrial) with complete technical documentation from a single certified supplier.`;
    case 'ready-to-eat':
      return `Gujarat is the home of khakhra and authentic Indian ready-to-eat snacks. Importers in ${n} source directly from Gujarati manufacturers for authentic recipes, competitive pricing, private-label flexibility, and export-ready packaging that meets food import standards. Indian snacks are a fast-growing category in global ethnic food markets.`;
    case 'psyllium':
      return `India supplies over 85% of global psyllium husk (Isabgol) demand, with Gujarat and Rajasthan as the primary growing regions. Buyers in ${n} choose direct sourcing from Amar Herbal Origins for consistent 99% purity, certified quality (FDA, USDA Organic, EU Organic, ISO 22000, Halal, Kosher), competitive FOB Mundra pricing, and reliable supply with complete documentation. Farm-to-port traceability and batch-specific COA are standard.`;
    default:
      return '';
  }
}

function getCategoryFaqs(cat: Category, country: CountryData): { q: string; a: string }[] {
  const n = country.name;
  switch (cat.slug) {
    case 'herbs':
      return [
        {
          q: `What Indian herbs do you export to ${n}?`,
          a: `We export moringa powder, amla (Indian gooseberry) powder, dried curry leaves, dried mint leaves, and oregano to ${n}. All products are lab-tested, FSSAI and ISO 22000 certified, with full COA documentation for each shipment.`,
        },
        {
          q: `What is the MOQ for herb exports to ${n}?`,
          a: `Minimum order quantity starts from 100 kg per herb variety. For mixed herb orders, total MOQ is 250 kg. Free samples (courier charges extra) are available for quality evaluation before placing bulk orders.`,
        },
        {
          q: `Are your herbs certified organic for ${n}?`,
          a: `Select herbs including moringa are available in organic certified grades. We provide USDA NOP and EU Organic certification documentation. Please specify organic requirement at time of inquiry.`,
        },
        {
          q: `What certifications do you provide for herb exports to ${n}?`,
          a: `We provide: FSSAI certificate, ISO 22000, GMP, Halal certificate, lab COA (heavy metals, pesticide residues, microbiological), phytosanitary certificate, and certificate of origin — all standard for ${n} import clearance.`,
        },
      ];
    case 'spices':
      return [
        {
          q: `Which Indian spices do you export to ${n}?`,
          a: `We export turmeric powder, cumin seeds, coriander seeds, fenugreek seeds, and ajwain (carom seeds) to ${n}. Available in whole, crushed, and powder forms. All spices are lab-certified for purity, color value, and volatile oil content.`,
        },
        {
          q: `What is the MOQ for spice exports to ${n}?`,
          a: `Standard MOQ is 500 kg per spice variety. For turmeric and cumin (high-volume products), MOQ is 1 MT for FCL pricing. Mixed spice orders with total value above 1 MT are also accommodated with competitive pricing.`,
        },
        {
          q: `Do your spices comply with food safety regulations in ${n}?`,
          a: `Yes. All our spices are tested per international food safety standards — heavy metals, pesticide residues, aflatoxin, microbiological parameters — by accredited third-party labs. Full COA with all test results provided with every shipment.`,
        },
        {
          q: `Can you supply organic spices for ${n}?`,
          a: `Yes. We offer organic certified turmeric powder and cumin seeds in USDA Organic and EU Organic certified grades. Organic fenugreek is also available. Please specify organic requirement in your inquiry for pricing.`,
        },
      ];
    case 'oils':
      return [
        {
          q: `What grades of castor oil do you export to ${n}?`,
          a: `We supply pharmaceutical grade (BP/USP), cosmetic grade, food grade (edible), industrial grade, and hydrogenated castor oil to ${n}. Each grade comes with specific COA, MSDS, and technical data sheet tailored to your application.`,
        },
        {
          q: `What is the MOQ for castor oil exports to ${n}?`,
          a: `Standard MOQ is 1 x 200-liter HDPE drum. For FCL orders (200 drums = ~40 MT), we offer preferential pricing. LCL consolidation is available for smaller trial orders.`,
        },
        {
          q: `Is your castor oil cold-pressed or solvent extracted?`,
          a: `We supply both cold-pressed (first pressing, premium quality) and solvent-extracted (commercial grade) castor oil. Cold-pressed is preferred for pharmaceutical and cosmetic applications; solvent extracted for industrial use. Please specify grade at inquiry.`,
        },
        {
          q: `What documentation is provided for oil exports to ${n}?`,
          a: `Full documentation provided: COA with analytical parameters, MSDS, certificate of origin, phytosanitary certificate, FSSAI/ISO certificates, and packing list — all required for smooth ${n} customs clearance.`,
        },
      ];
    case 'ready-to-eat':
      return [
        {
          q: `What types of khakhra do you export to ${n}?`,
          a: `We export classic plain khakhra, masala khakhra, methi (fenugreek) khakhra, jeera (cumin) khakhra, and multigrain khakhra to ${n}. Available in retail packs (200g, 400g) and food service bulk packs (5 kg). Private label options available.`,
        },
        {
          q: `What is the MOQ for khakhra export to ${n}?`,
          a: `MOQ is 500 kg per variety for standard orders. For private label / white label orders, MOQ is 200 kg with custom packaging design included. Free sample packs available for quality evaluation.`,
        },
        {
          q: `What food safety certifications do your snacks have?`,
          a: `Our ready-to-eat products are FSSAI certified, GMP certified, and Halal certified. All products undergo shelf-life testing, microbiological testing, and nutritional analysis. Full documentation provided for ${n} food import clearance.`,
        },
        {
          q: `Can you supply private-label khakhra for our brand in ${n}?`,
          a: `Yes. We offer complete white-label services including custom recipe development, branded packaging design, retail-ready presentation, and full export documentation. MOQ for white label is 200 kg. Contact us for a private label package quote.`,
        },
      ];
    case 'psyllium':
      return [
        {
          q: `What grades of psyllium husk do you export to ${n}?`,
          a: `We export psyllium husk in 99%, 98%, 95%, and 85% purity grades to ${n}. Available as whole husk, husk powder (40–100 mesh), and organic certified grades. Pharmaceutical-grade (USP/BP compliant) is also available. Full COA provided with every shipment.`,
        },
        {
          q: `What is the MOQ for psyllium husk exports to ${n}?`,
          a: `Standard MOQ is 1 Metric Ton (MT) for regular orders. For first-time buyers, we accommodate trial orders of 500 kg. FCL orders (20-foot container ≈ 18–20 MT) receive preferential FOB pricing. Free samples (courier charges extra) available for quality evaluation.`,
        },
        {
          q: `Is your psyllium husk certified for import into ${n}?`,
          a: `Yes. We provide all certifications required for ${n} market including: FSSAI, ISO 22000, Halal, Kosher, GMP, USDA Organic (for organic grade), EU Organic certification, phytosanitary certificate, and full COA with third-party lab testing for heavy metals, pesticide residues, and microbiological parameters.`,
        },
        {
          q: `What packaging is available for psyllium husk shipped to ${n}?`,
          a: `Standard export packaging: 25 kg PP woven bags with HDPE liner (most common). Also available: 50 kg bags, HDPE drums, and private label retail pouches (100g, 200g, 500g, 1 kg). Custom packaging for private label brands also offered with MOQ from 500 kg.`,
        },
      ];
    default:
      return [];
  }
}

function getCategoryProductList(cat: Category): { name: string; slug: string }[] {
  return cat.products.map((p) => ({ name: p.name, slug: p.slug }));
}

// ── Component ─────────────────────────────────────────────────────────────────
export function CategoryCountrySupplierPage({ category, country, locale }: Props) {
  const { colorTheme, colorLight, emoji, name: catName, slug: catSlug } = category;
  const basePath = `/${locale}/${catSlug}`;

  const keywords = getCategoryKeywords(category, country);
  const marketIntro = getCategoryMarketIntro(category, country);
  const importReason = getCategoryImportReason(category, country);
  const faqs = getCategoryFaqs(category, country);
  const products = getCategoryProductList(category);

  return (
    <main style={{ fontFamily: "'Inter', sans-serif", color: '#1a1a1a', background: '#fff' }}>

      {/* ── Hero ── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${colorTheme}18 0%, ${colorTheme}08 100%)`,
          borderBottom: `3px solid ${colorTheme}22`,
          padding: '3rem 0 2.5rem',
        }}
      >
        <div className="container">
          {/* Breadcrumb */}
          <nav style={{ marginBottom: '1.5rem', fontSize: '0.82rem', color: '#6b7280' }}>
            <Link href={`/${locale}`} style={{ color: '#6b7280', textDecoration: 'none' }}>Home</Link>
            <span style={{ margin: '0 0.4rem' }}>›</span>
            <Link href={basePath} style={{ color: '#6b7280', textDecoration: 'none' }}>{catName}</Link>
            <span style={{ margin: '0 0.4rem' }}>›</span>
            <Link href={`${basePath}/suppliers`} style={{ color: '#6b7280', textDecoration: 'none' }}>Suppliers</Link>
            <span style={{ margin: '0 0.4rem' }}>›</span>
            <span style={{ color: colorTheme, fontWeight: 600 }}>{country.name}</span>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '2.5rem' }}>{country.flag}</span>
            <span style={{ fontSize: '2rem' }}>{emoji}</span>
          </div>

          <h1
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 700,
              color: colorTheme,
              margin: '0 0 0.75rem',
              lineHeight: 1.2,
            }}
          >
            {catName} Supplier {country.name} — Export from India
          </h1>
          <p
            style={{
              fontSize: '1.05rem',
              color: '#4b5563',
              maxWidth: '680px',
              lineHeight: 1.7,
              margin: '0 0 1.5rem',
            }}
          >
            {marketIntro}
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <a
              href="https://wa.me/919408465040"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: colorTheme,
                color: 'white',
                padding: '0.75rem 1.75rem',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.95rem',
                boxShadow: `0 4px 14px ${colorTheme}40`,
              }}
            >
              💬 WhatsApp Inquiry
            </a>
            <Link
              href={`${basePath}/contact`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'white',
                color: colorTheme,
                padding: '0.75rem 1.75rem',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.95rem',
                border: `2px solid ${colorTheme}`,
              }}
            >
              📧 Send Inquiry
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <section style={{ background: colorTheme, padding: '1.25rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '2rem',
            }}
          >
            {[
              { icon: '🏭', label: 'Gujarat, India', sub: 'Manufacturing Base' },
              { icon: '📦', label: 'MOQ Flexible', sub: 'B2B Bulk Orders' },
              { icon: '🌐', label: '30+ Countries', sub: 'Export Experience' },
              { icon: '✅', label: 'ISO 22000 | Halal', sub: 'Certified Quality' },
              { icon: '🚢', label: 'FOB Mundra', sub: `→ ${country.name}` },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center', color: 'white' }}>
                <div style={{ fontSize: '1.4rem', marginBottom: '0.2rem' }}>{stat.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '0.88rem' }}>{stat.label}</div>
                <div style={{ fontSize: '0.75rem', opacity: 0.85 }}>{stat.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products We Export ── */}
      <section style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
              fontWeight: 700,
              color: colorTheme,
              marginBottom: '0.5rem',
            }}
          >
            {emoji} {catName} We Export to {country.name}
          </h2>
          <p style={{ color: '#6b7280', marginBottom: '2rem', fontSize: '0.95rem' }}>
            All products are lab-certified, FSSAI approved, and export-ready with full documentation.
          </p>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
              gap: '1.25rem',
            }}
          >
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`${basePath}/${product.slug}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1.25rem',
                  borderRadius: '12px',
                  border: `1.5px solid ${colorTheme}22`,
                  background: colorLight,
                  textDecoration: 'none',
                  color: '#1a1a1a',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  transition: 'all 0.2s',
                }}
              >
                <span style={{ fontSize: '1.5rem' }}>{emoji}</span>
                <span>{product.name}</span>
                <span style={{ marginLeft: 'auto', color: colorTheme, fontSize: '1.1rem' }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why India / Why Amar Herbal ── */}
      <section style={{ background: '#f9fafb', padding: '3.5rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              alignItems: 'start',
            }}
          >
            <div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: colorTheme,
                  marginBottom: '1rem',
                }}
              >
                Why Source from India?
              </h2>
              <p style={{ color: '#4b5563', lineHeight: 1.8, fontSize: '0.95rem' }}>
                {importReason}
              </p>
            </div>

            <div>
              <h2
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  color: colorTheme,
                  marginBottom: '1rem',
                }}
              >
                Logistics to {country.flag} {country.name}
              </h2>
              <div
                style={{
                  background: 'white',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  border: `1px solid ${colorTheme}22`,
                  fontSize: '0.9rem',
                  color: '#374151',
                  lineHeight: 1.7,
                }}
              >
                <p style={{ margin: 0 }}>
                  <strong>Port of Loading:</strong> Mundra, Nhava Sheva (JNPT), India
                </p>
                <p style={{ margin: '0.5rem 0 0' }}>
                  <strong>Logistics:</strong> {country.logistics}
                </p>
                <p style={{ margin: '0.5rem 0 0' }}>
                  <strong>Incoterms:</strong> FOB, CIF, CNF as per buyer preference
                </p>
                <p style={{ margin: '0.5rem 0 0' }}>
                  <strong>Payment:</strong> T/T, LC at sight, Net 30 (established buyers)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section style={{ padding: '3rem 0' }}>
        <div className="container">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.8rem',
              fontWeight: 700,
              color: colorTheme,
              marginBottom: '1.5rem',
              textAlign: 'center',
            }}
          >
            Certifications Required for {country.name}
          </h2>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              justifyContent: 'center',
            }}
          >
            {country.certifications.map((cert) => (
              <span
                key={cert}
                style={{
                  background: colorLight,
                  color: colorTheme,
                  border: `1px solid ${colorTheme}33`,
                  borderRadius: '8px',
                  padding: '0.5rem 1rem',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                }}
              >
                ✅ {cert}
              </span>
            ))}
            {/* Category-specific certifications */}
            {category.certifications
              .filter((c) => !country.certifications.includes(c))
              .map((cert) => (
                <span
                  key={cert}
                  style={{
                    background: '#f3f4f6',
                    color: '#374151',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    padding: '0.5rem 1rem',
                    fontSize: '0.88rem',
                    fontWeight: 600,
                  }}
                >
                  ✅ {cert}
                </span>
              ))}
          </div>

          {/* Regulatory Note */}
          <div
            style={{
              marginTop: '2rem',
              background: `${colorTheme}10`,
              border: `1px solid ${colorTheme}25`,
              borderRadius: '12px',
              padding: '1.25rem 1.5rem',
              fontSize: '0.9rem',
              color: '#374151',
              maxWidth: '700px',
              margin: '2rem auto 0',
            }}
          >
            <strong style={{ color: colorTheme }}>📋 Regulatory Note ({country.name}):</strong>{' '}
            {country.regulatoryNote}
          </div>
        </div>
      </section>

      {/* ── Buyer Segments ── */}
      <section style={{ background: '#f9fafb', padding: '3rem 0' }}>
        <div className="container">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.8rem',
              fontWeight: 700,
              color: colorTheme,
              marginBottom: '1.5rem',
            }}
          >
            Who Buys from Us in {country.name}?
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
              gap: '1rem',
            }}
          >
            {country.buyerSegments.map((seg) => (
              <div
                key={seg}
                style={{
                  background: 'white',
                  borderRadius: '10px',
                  padding: '1rem 1.25rem',
                  border: `1px solid ${colorTheme}20`,
                  fontSize: '0.88rem',
                  color: '#374151',
                  fontWeight: 500,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span style={{ color: colorTheme }}>▸</span> {seg}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '3.5rem 0' }}>
        <div className="container" style={{ maxWidth: '780px' }}>
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: '1.8rem',
              fontWeight: 700,
              color: colorTheme,
              marginBottom: '1.5rem',
            }}
          >
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: colorLight,
                  borderRadius: '12px',
                  padding: '1.25rem 1.5rem',
                  border: `1px solid ${colorTheme}18`,
                }}
              >
                <div
                  style={{
                    fontWeight: 700,
                    color: colorTheme,
                    fontSize: '0.95rem',
                    marginBottom: '0.5rem',
                  }}
                >
                  Q: {faq.q}
                </div>
                <div style={{ color: '#374151', fontSize: '0.9rem', lineHeight: 1.7 }}>
                  {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEO Keywords ── */}
      <section style={{ background: '#f9fafb', padding: '2rem 0' }}>
        <div className="container">
          <p
            style={{
              fontSize: '0.78rem',
              color: '#9ca3af',
              textAlign: 'center',
              lineHeight: 1.6,
            }}
          >
            {keywords.join(' | ')}
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        style={{
          background: `linear-gradient(135deg, ${colorTheme}, ${colorTheme}cc)`,
          padding: '3rem 0',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              color: 'white',
              marginBottom: '0.75rem',
            }}
          >
            Ready to Import {catName} to {country.name}?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.88)', marginBottom: '1.75rem', fontSize: '0.95rem' }}>
            Contact us for pricing, samples, and full export documentation.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://wa.me/919408465040"
              target="_blank"
              rel="noopener noreferrer"
              id="cta-whatsapp"
              style={{
                background: 'white',
                color: colorTheme,
                padding: '0.875rem 2rem',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.95rem',
              }}
            >
              💬 WhatsApp Now
            </a>
            <a
              href="mailto:amarherbalorigins@gmail.com"
              id="cta-email"
              style={{
                background: 'transparent',
                color: 'white',
                padding: '0.875rem 2rem',
                borderRadius: '10px',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '0.95rem',
                border: '2px solid rgba(255,255,255,0.7)',
              }}
            >
              📧 Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section style={{ padding: '2.5rem 0', borderTop: '1px solid #f3f4f6' }}>
        <div className="container">
          <h3
            style={{
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#9ca3af',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '1rem',
            }}
          >
            Related Pages
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            <Link
              href={basePath}
              style={{
                color: colorTheme,
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: 500,
              }}
            >
              {emoji} {catName} Hub
            </Link>
            <span style={{ color: '#d1d5db' }}>|</span>
            <Link
              href={`${basePath}/white-label`}
              style={{
                color: colorTheme,
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: 500,
              }}
            >
              White Label
            </Link>
            <span style={{ color: '#d1d5db' }}>|</span>
            <Link
              href={`${basePath}/contact`}
              style={{
                color: colorTheme,
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: 500,
              }}
            >
              Contact
            </Link>
            <span style={{ color: '#d1d5db' }}>|</span>
            <Link
              href={`/${locale}/psyllium/suppliers`}
              style={{
                color: '#6b7280',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: 500,
              }}
            >
              Psyllium Suppliers
            </Link>
            <span style={{ color: '#d1d5db' }}>|</span>
            <Link
              href={`/${locale}`}
              style={{
                color: '#6b7280',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: 500,
              }}
            >
              Amar Herbal Origins
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
