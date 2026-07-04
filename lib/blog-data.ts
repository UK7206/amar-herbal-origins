/**
 * Blog article data — 10 export-focused B2B articles
 * Based on SEO strategy: target commercial buyer search intent
 * Pattern: same as news page (hardcoded TS arrays, no CMS needed)
 */

export interface BlogFaq {
  q: string;
  a: string;
}

export interface BlogRelatedLink {
  label: string;
  href: string; // relative path, e.g. '/en/manufacturer'
  description: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: 'Export Guide' | 'Market Intelligence' | 'Quality & Certs' | 'Packaging' | 'Sourcing';
  keywords: string[];
  body: string; // full article body in plain text paragraphs (separated by \n\n)
  faqs?: BlogFaq[]; // optional: powers FAQPage JSON-LD rich results on blog posts
  relatedLinks?: BlogRelatedLink[]; // optional: internal links rendered as "Explore Further" section
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'psyllium-husk-supplier-germany',
    title: 'Psyllium Husk Supplier Germany: EU Organic, HS Code & Import Guide (2026)',
    excerpt:
      'Looking to import psyllium husk from India to Germany? This guide covers EU Organic certification, EUR 1 documentation, HS code 1211.90.90, import duties, and how to choose a compliant Indian supplier for the German and EU market.',
    date: 'June 2026',
    readTime: '7 min read',
    category: 'Market Intelligence',
    keywords: ['psyllium husk supplier germany', 'isabgol import germany', 'psyllium husk germany bulk', 'psyllium husk eu organic germany'],
    body: `Germany is one of the largest importers of psyllium husk in Europe, driven by a strong nutraceutical industry, growing demand for natural dietary fiber, and a highly developed organic food sector. If you are a German supplement manufacturer, food company, or distributor looking to source psyllium husk directly from India, this guide explains everything you need to know.

**Why Germany Imports Psyllium Husk from India**

India — specifically Gujarat and Rajasthan — produces over 85% of the world's psyllium husk (Isabgol). There are no significant commercial cultivators of Plantago ovata in Europe. German buyers therefore depend entirely on Indian exporters for their supply. Direct sourcing from Gujarat is the most cost-effective approach, typically saving 20–40% compared to buying through European traders.

**HS Code for Psyllium Husk Imports into Germany**

Psyllium husk is classified under HS Code 1211.90.90 (Plants and plant parts used in pharmacy — other). For German customs (Zollverfahren), this falls under the EU Combined Nomenclature (CN) 1211 90 90. The standard EU import duty rate is 0% for psyllium husk from India — making direct import very economically attractive.

Key customs documentation required for German customs clearance:
- Commercial invoice (in EUR or USD)
- Packing list
- Bill of Lading / Air Waybill
- Certificate of Origin (issued by FIEO or APEDA, India)
- Phytosanitary Certificate (issued by Plant Protection Organisation, India)
- EUR 1 Movement Certificate (for preferential tariff treatment under EU-India GSP — check current GSP status)
- COA (Certificate of Analysis) — required by German buyers
- EU Organic Certificate (for organic psyllium — issued by USDA-accredited or EU-accredited certifier)

**EU Organic Certification Requirements for Germany**

Germany has one of the most developed organic markets in Europe. If you are sourcing organic psyllium husk for products sold as "bio" (organic) in Germany, your Indian supplier must hold:

1. EU Organic certification under Regulation 2018/848 (or its predecessor 834/2007)
2. The certificate must cover both the farming operation and the processing facility
3. The processing must be done in an EU-recognized certified facility
4. Annual inspection by an EU-accredited control body

Amar Herbal Origins holds EU Organic certification covering both farm sourcing and processing operations. Our organic psyllium is processed in a dedicated organic-certified production line. Certificate documentation is provided with every shipment.

**Quality Standards for German Pharmaceutical Buyers**

German pharmaceutical and supplement companies (under LFGB and EU regulations) require psyllium husk to meet specific quality parameters:

- Psyllium husk purity: minimum 99% (EU Pharmacopoeia standard)
- Swelling factor: ≥40 ml/g (whole husk); ≥50 ml/g (powder)
- Heavy metals: below EU Regulation 1881/2006 limits (Pb ≤0.1 mg/kg, Cd ≤0.05 mg/kg)
- Pesticide residues: screened against EU Regulation 396/2005 pesticide MRL database
- Microbiology: Total Plate Count ≤100,000 CFU/g, Salmonella absent in 25g, E. coli absent in 1g
- Third-party lab testing from an accredited German or EU lab is recommended for first orders

**Logistics from India to Germany**

Shipping route: FOB Mundra (INMUN) or Nhava Sheva (INJNP) → Hamburg (DEHAM) or Bremerhaven (DEBRV)
Typical transit time: 18–22 days via direct service; 22–28 days via transhipment
Freight forwarders with regular India-Germany service: DB Schenker, Kuehne+Nagel, Rhenus, DHL Global Forwarding

MOQ from Amar Herbal Origins for Germany: 1 MT (standard); 500 kg (organic); FCL orders (25 MT+) receive priority pricing.

Payment terms: T/T (30% advance + 70% against shipping documents) or LC at sight.

**Why Source Directly from Amar Herbal Origins?**

Amar Herbal Origins is an APEDA-registered, GST-certified Indian exporter of psyllium husk with direct experience supplying to German and EU supplement manufacturers. We provide: EU Organic certificate, EUR 1, Phytosanitary, COA from in-house and third-party labs, full heavy metals and pesticide screening, and German-language product documentation on request. Contact us for current FOB pricing and a free sample shipment.`,
  },
  {
    slug: 'psyllium-husk-supplier-usa',
    title: 'Psyllium Husk Supplier USA: FDA, USDA NOP & Bulk Import Guide (2026)',
    excerpt:
      'Importing psyllium husk from India to the USA? Learn about FDA compliance, USDA NOP organic certification, import duties, HS codes, and how to find a reliable Indian supplier that meets US regulatory requirements.',
    date: 'June 2026',
    readTime: '7 min read',
    category: 'Market Intelligence',
    keywords: ['psyllium husk supplier usa', 'psyllium husk importer usa', 'bulk psyllium husk usa', 'organic psyllium usa usda', 'psyllium husk fda compliant india'],
    body: `The United States is the world's largest single-country importer of psyllium husk, driven by the massive dietary supplement industry (worth $55+ billion), natural food manufacturing, and pharmaceutical-grade fiber product demand. Virtually all US psyllium supply comes from India. This guide is written for US supplement manufacturers, food companies, and wholesale distributors looking to source psyllium husk directly from an Indian exporter.

**US Import Classification & Duties**

Psyllium husk is classified under HTS Code 1211.90.9040 for US customs purposes. Current import duty: 0% (duty-free under the US tariff schedule). This makes Indian psyllium extremely competitive once landed in the USA.

Required US import documentation:
- Commercial invoice (in USD)
- Packing list
- Bill of Lading / Air Waybill
- Certificate of Origin
- Phytosanitary Certificate
- COA (Certificate of Analysis) — FDA expects this to be available on request
- USDA NOP Organic Certificate (for organic claims)
- Importer of Record (IOR) — the US-based company importing the goods registers with FDA

**FDA Compliance for Psyllium Husk**

Psyllium husk enters the US either as a dietary supplement ingredient or a food ingredient. Both paths have specific FDA requirements:

As a Dietary Supplement Ingredient: Your US company (the IOR) must be registered with FDA as a facility. The ingredient must comply with 21 CFR Part 111 (Current Good Manufacturing Practice in Manufacturing, Packaging, Labeling, or Holding Operations for Dietary Supplements). You need a Supplier Qualification Program — your Indian supplier should be able to provide: COA, MSDS, specification sheets, facility audit reports or third-party GMP audit certificates.

As a Food Ingredient: Must comply with 21 CFR 101 labeling and GRAS (Generally Recognized as Safe) status. Psyllium husk is GRAS for use as a dietary fiber.

FDA Prior Notice: All food shipments to the USA require Prior Notice filing through FDA's Prior Notice System Interface (PNSI). Your freight forwarder or customs broker handles this.

**USDA NOP Organic Certification**

For psyllium husk marketed as "USDA Organic" in the USA:
- Your Indian supplier must hold a current USDA National Organic Program (NOP) certificate
- The certificate must cover both farming AND processing
- The product must be handled through an organic system plan
- Annual review and inspection by an NOP-accredited certifying agent is required

Amar Herbal Origins holds current USDA NOP certification. Our organic psyllium is processed in a dedicated organic production line with zero cross-contamination. We provide full NOP certificates with every organic shipment — verifiable through the USDA Organic Integrity database.

**Quality Parameters US Buyers Require**

US pharmaceutical and supplement buyers typically require psyllium husk meeting USP (United States Pharmacopeia) monograph standards:
- Identification: Meets USP Psyllium Husk monograph
- Purity: ≥99% husks (USP standard)
- Swelling power: ≥9 (USP method)
- Loss on drying: ≤12%
- Heavy metals: Compliant with USP <232> (Pb ≤5 ppm, Cd ≤1 ppm, As ≤1.5 ppm, Hg ≤1.5 ppm)
- Pesticides: Screened against EPA/FDA limits
- Microbiology: Per USP <2021> / <2023>

**Logistics: India to USA**

FOB Mundra / Nhava Sheva → Los Angeles (USLAX) or New York (USNYC)
Transit time: 20–25 days to West Coast; 23–28 days to East Coast
Major freight forwarders: Expeditors, CEVA Logistics, Flexport, DB Schenker

Amar Herbal Origins regularly ships to US ports. We have experience with FDA prior notice, USDA organic import documentation, and US customs clearance coordination.

**Why US Buyers Choose Amar Herbal Origins**

We supply US supplement brands, food manufacturers, and distributors with: USDA NOP organic certificates, full USP-specification COA, third-party lab test reports from US-accredited labs on request, SDS/MSDS documentation, and complete FDA-required supplier qualification documentation packages. Contact us for current USD FOB pricing, free sample, and a full documentation preview.`,
  },
  {
    slug: 'psyllium-husk-supplier-uae',
    title: 'Psyllium Husk Supplier UAE & GCC: Halal, Dubai Imports & Bulk Guide (2026)',
    excerpt:
      'Sourcing psyllium husk for the UAE and GCC market? This guide covers Halal certification, Dubai port logistics, GCC import requirements, price ranges in AED/USD, and how to find a reliable Indian exporter for the Middle East.',
    date: 'June 2026',
    readTime: '6 min read',
    category: 'Market Intelligence',
    keywords: ['psyllium husk supplier uae', 'isabgol supplier dubai', 'psyllium husk halal uae', 'isabgol dubai import', 'psyllium husk gcc bulk'],
    body: `The UAE — particularly Dubai — is a major regional hub for psyllium husk distribution across the GCC (Gulf Cooperation Council) countries including Saudi Arabia, Kuwait, Qatar, Bahrain, and Oman. Indian psyllium husk (locally known as "Isabgol") has strong brand recognition in the UAE market, with Indian and Pakistani expat communities familiar with the product and a growing natural health supplement sector.

**UAE Market for Psyllium Husk**

Psyllium husk (Isabgol) is widely consumed in the UAE for digestive health — it is available in UAE pharmacies, health stores, and supermarkets. For B2B buyers, UAE import of psyllium husk serves multiple channels:

1. Pharmaceutical companies and pharmacies (laxative/fiber supplement products)
2. Food manufacturers (fiber-enriched bakery, health foods)
3. Regional distributors re-exporting to Saudi Arabia, Kuwait, Qatar, Oman
4. Supplement brand owners (private label products)

**Halal Certification Requirements**

In the UAE and GCC market, Halal certification is generally expected for food ingredients. For psyllium husk, which is a natural plant product, the Halal concern is primarily around:
- Processing conditions (no cross-contamination with non-Halal substances)
- Additives or processing aids (none used in pure psyllium husk)
- Certificate issued by an ESMA-recognized Halal certifier

Amar Herbal Origins holds Halal certification from a recognized certification body. Our psyllium husk processing facilities maintain strict Halal compliance throughout production. Halal certificates are provided with every shipment.

**UAE Import Requirements**

Dubai Customs classification: HS Code 1211.90 (Plants and parts of plants used in pharmacy)
UAE import duty: Generally 5% GCC Common External Tariff (CET) for most product categories. Check current rates as some food/pharmaceutical ingredients may have exemptions.

Required documentation for UAE/Dubai import:
- Commercial invoice (attested if required by specific buyer)
- Packing list
- Bill of Lading
- Certificate of Origin (attested by UAE Embassy in India for some shipments)
- Halal Certificate
- COA (Certificate of Analysis)
- Phytosanitary Certificate
- Municipality/ESMA product registration (for retail products — handled by UAE importer)

**Dubai as a Re-Export Hub**

Many buyers in Dubai import psyllium husk for re-export to Saudi Arabia, Kuwait, Qatar, and Oman. Jebel Ali Free Zone (JAFZA) provides excellent re-export facilities. For JAFZA-based operations, specific free zone documentation applies. Amar Herbal Origins has experience with JAFZA import/re-export documentation.

**Logistics: India to UAE**

FOB Mundra / Nhava Sheva → Jebel Ali (AEJEA), Dubai
Transit time: 7–10 days (one of the shortest routes from India)
Direct vessel services are available multiple times per week

This short transit time makes the UAE route extremely cost-efficient for LCL (Less than Container Load) shipments — especially for buyers placing first orders or smaller trial quantities.

**Price Range in UAE Context**

Current FOB India price range for psyllium husk: USD 1,800–2,800/MT
Add UAE freight and insurance: approximately USD 150–250/MT to Jebel Ali
UAE import duty (5% CET): on CIF value
Total landed cost estimate: USD 2,100–3,300/MT (depending on grade and market conditions)

**Arabic Language Support**

Amar Herbal Origins provides product documentation in English and Arabic on request — including Arabic-language specification sheets, Halal certificates, and COA. This facilitates smooth customs clearance and end-customer communication in GCC markets.

Contact us for current UAE-ready pricing, Halal certificate copies, and free samples shipped directly to your Dubai address.`,
  },
  {
    slug: 'private-label-psyllium-husk-manufacturer-india',
    title: 'Private Label Psyllium Husk Manufacturer India: White Label Guide (2026)',
    excerpt:
      'Want your own brand of psyllium husk supplements? India is the world\'s #1 source for private label and white label psyllium husk manufacturing. Learn about MOQ, packaging options, custom formulations, and how to launch your brand from an Indian manufacturer.',
    date: 'May 2026',
    readTime: '6 min read',
    category: 'Export Guide',
    keywords: ['private label psyllium husk', 'white label psyllium husk manufacturer india', 'custom label isabgol india', 'psyllium husk oem india', 'private label isabgol manufacturer'],
    body: `Private label psyllium husk has become one of the fastest-growing segments in the Indian herbal export industry. Supplement brands in the USA, UK, Germany, Australia, and the UAE are increasingly launching their own branded psyllium husk fiber products, sourced from Indian manufacturers who handle production, quality certification, and custom packaging under the buyer's brand.

**What is Private Label Psyllium Husk?**

Private label (also called white label) psyllium husk means: the Indian manufacturer produces the psyllium husk to your specifications, packages it with your brand name and design, and ships it ready for your market. You sell it under your brand — the manufacturer remains behind the scenes as your production partner.

This is different from: buying bulk psyllium husk in large bags (bulk commodity trade) or OEM manufacturing for major brands.

**What Can Be Private Labeled?**

Amar Herbal Origins offers private label services for:

Product Forms:
- Psyllium Husk Powder (fine-ground, 40–100 mesh) — most popular for supplement brands
- Whole Psyllium Husk — for fiber supplement brands, Metamucil-style products
- Organic Psyllium Husk (USDA / EU Organic) — for premium organic brands
- Blonde Psyllium Husk — for premium aesthetic appeal
- Psyllium Husk Capsules (coming soon — inquire)

Pack Sizes:
- 100g, 200g, 250g retail sachets/jars
- 500g, 1kg family-size retail packs
- 5kg, 10kg wholesale/club store packs
- 25kg bulk bags (plain or labeled)

**Minimum Order Quantity (MOQ)**

Private label MOQ: Starting from 100 kg (minimum order for custom-branded packaging)
Standard white label MOQ: 500 kg
Organic private label MOQ: 500 kg
Custom formulation projects (with added ingredients): enquire for specific MOQ

**Packaging Options**

We support a wide range of packaging formats:
- Stand-up pouches (resealable zip-lock)
- HDPE jars with induction-sealed lids
- Glass jars (premium tier)
- Paper/recyclable packaging (for eco-brand positioning)
- Custom box packaging for retail shelf display

Label printing: We can work with your design files (PDF/AI format) or refer you to our label printing partners. Multilingual labeling (English + German, French, Arabic, etc.) is available.

**Quality and Certifications for Private Label**

Your private label product needs to meet the regulatory requirements of your target market. We provide:

For USA brands: COA meeting USP monograph, USDA NOP organic certificate, SDS/MSDS, FDA supplier documentation package
For EU/Germany brands: COA with EU Pharmacopoeia parameters, EU Organic certificate, heavy metals + pesticide screening
For UAE/GCC brands: Halal certificate, COA, Arabic documentation

Certifications we hold: ISO 22000, FSSAI, APEDA, USDA NOP Organic, EU Organic, Halal, Kosher

**NDA and Confidentiality**

We sign NDAs (Non-Disclosure Agreements) with all private label clients. Your brand identity, formulation specifics, and market positioning are kept strictly confidential.

**Lead Time for Private Label Orders**

Standard lead time (existing stock, custom label): 10–15 business days
Custom packaging (new mould or design): 20–30 business days for first order
Repeat orders: 7–12 business days

**How to Get Started**

Step 1: Share your target market, desired product form, pack size, and estimated monthly volume
Step 2: We send you product specification sheet + pricing + sample
Step 3: Approve sample and specifications
Step 4: Share your brand artwork files
Step 5: Production, quality check, and shipment

Contact Amar Herbal Origins via the inquiry form or WhatsApp (+91 94084 65040) with your private label requirements. We will respond within 24 hours with pricing and sample availability.`,
  },
  {
    slug: 'psyllium-husk-manufacturer-india-fob-price',
    title: 'Psyllium Husk Manufacturer India: FOB Price, Grades & MOQ Guide 2026',
    excerpt:
      'Complete buyer\'s guide to sourcing psyllium husk directly from Indian manufacturers. Understand the different product grades (85%, 95%, 98%, 99%), current FOB prices from Mundra, MOQ requirements, and what to look for in a verified manufacturer.',
    date: 'May 2026',
    readTime: '6 min read',
    category: 'Export Guide',
    keywords: ['psyllium husk manufacturer india', 'isabgol manufacturer india', 'psyllium husk fob price india', 'psyllium husk grades india', 'bulk psyllium husk india price'],
    body: `India is the world's primary manufacturer of psyllium husk (Isabgol), accounting for over 85% of global production. The manufacturing belt is centered in North Gujarat (Unjha, Mehsana, Sidhpur) and parts of Rajasthan (Jodhpur, Barmer). For global importers, sourcing directly from an Indian manufacturer — rather than through European or American trading intermediaries — typically saves 20–40% on product cost.

This guide explains the product grades available, current FOB pricing from Indian ports, minimum order quantities, and what to verify when selecting a manufacturer.

**Psyllium Husk Grades Available from India**

Psyllium husk is graded primarily by purity (percentage of husks vs. other plant matter):

85% Grade: Lowest commercial grade. Contains 15% foreign matter. Used in low-cost consumer products and some animal feed applications. Not suitable for pharmaceutical or supplement applications.

95% Grade: Mid-grade. Some manufacturers offer this for food applications where 99% purity is not required. Increasingly rare as buyers move toward higher purity standards.

98% Grade: Standard commercial grade for most food and supplement applications. Swelling factor ≥40 ml/g (whole husk), ≥50 ml/g (powder). Suitable for regulated dietary supplement markets.

99% Grade (Pharmaceutical Grade): The premium standard. Required for most EU, US, and Japanese pharmaceutical applications. Meets BP (British Pharmacopoeia) and USP specifications. Swelling factor ≥40 ml/g. This is the standard Amar Herbal Origins supplies by default.

Blonde Grade: A color-selection of 99% purity psyllium with a lighter, more uniform golden color. Preferred by supplement brands for aesthetic appeal in transparent packaging.

Organic Grade: 99% purity, USDA NOP or EU Organic certified. No synthetic pesticides or fertilizers used in farming. Processing in dedicated organic-certified lines.

**FOB Price Guide — India 2026**

Prices below are indicative FOB (Free on Board) Mundra or Nhava Sheva (Mumbai). Actual prices fluctuate based on Unjha APMC mandi rates, season, and global demand. Contact us for live pricing.

| Grade | FOB Price Range (USD/MT) |
|---|---|
| Whole Psyllium Husk 99% | USD 1,800 – 2,400 |
| Psyllium Husk Powder 98–99% | USD 1,900 – 2,500 |
| Blonde Psyllium Husk 99% | USD 2,200 – 2,800 |
| Organic Psyllium Husk (USDA/EU) | USD 2,800 – 3,500 |
| Psyllium Seeds | USD 700 – 1,000 |

Price drivers: Unjha mandi spot rate, crop season (harvest Feb–April), global order volume, USD/INR exchange rate. Prices above are as of mid-2026.

**Minimum Order Quantities**

Standard psyllium husk (any grade): 1 Metric Ton (MT)
Organic psyllium husk: 500 kg
Private label / custom packaging: 100 kg
Psyllium seeds: 1 MT

For FCL (Full Container Load — 25 MT in a 20-ft container), pricing is typically 5–12% lower than LCL rates.

**How to Verify an Indian Psyllium Manufacturer**

Before placing an order with any Indian manufacturer, verify:

1. IEC (Import Export Code): Every legitimate Indian exporter must hold an IEC issued by DGFT. Ask for the IEC number and verify on the DGFT portal.

2. APEDA Registration: The Agricultural and Processed Food Products Export Development Authority (APEDA) registers psyllium exporters. An APEDA registration number confirms the exporter is registered for agri-commodity exports.

3. GST Registration: All registered Indian businesses hold a GST number (15-character alphanumeric). Verify on the GST portal.

4. FSSAI License: Required for food product processing in India. Verify at fssai.gov.in.

5. Certifications: Request original PDF copies of ISO 22000, USDA Organic, EU Organic, Halal/Kosher as applicable. Verify certificate numbers with the issuing body.

6. COA Sample: Ask for a sample COA before ordering — it shows exactly what testing is done and the lab that performs it.

Amar Herbal Origins: GST 24ICIPP6678D1Z4, Udyam UDYAM-GJ-02-0036891, APEDA registered, FSSAI licensed, ISO 22000 certified. All documentation is provided upfront on first contact — no pressure, no hidden information.

Contact us for current FOB pricing, grade specifications, and a free sample (courier charges extra). We respond within 24 hours.`,
  },
  {
    slug: 'top-psyllium-husk-exporters-india',
    title: 'Top 5 Psyllium Husk Exporters in India (2025)',
    excerpt:
      'India supplies 85%+ of the world\'s psyllium husk. Here\'s what separates the top exporters — certifications, quality controls, export experience, and how to evaluate the right supplier for your business.',
    date: 'June 2025',
    readTime: '6 min read',
    category: 'Export Guide',
    keywords: ['top psyllium husk exporters india', 'best psyllium husk supplier india', 'psyllium husk exporter india'],
    body: `India is the world's dominant supplier of psyllium husk (Isabgol), accounting for over 85% of global production. The primary growing regions are Gujarat (Unjha, Mehsana, Sidhpur) and Rajasthan (Jodhpur, Barmer). With hundreds of exporters operating out of these regions, how do you identify who the top suppliers are?

The best psyllium husk exporters from India share several defining characteristics that separate them from smaller traders or intermediaries.

**1. Farm-Direct Sourcing vs. Trader Aggregation**

The top exporters maintain direct relationships with farmers or have their own contracted farming networks. This gives them control over raw material quality, traceability, and pricing stability. Traders who buy from multiple sources often cannot guarantee consistent quality across batches.

Amar Herbal Origins sources directly from contracted farms in Gujarat and Rajasthan, allowing us to provide batch-specific traceability documentation — critical for pharmaceutical and organic buyers.

**2. In-House Quality Control Laboratories**

Serious psyllium exporters operate their own in-house QC labs. This means every batch is tested before dispatch — not relying on third-party testing alone. Parameters tested include purity grade (98–99%), swelling factor (≥40 ml/g for whole husk), moisture content, total ash, acid insoluble ash, heavy metals, and microbial counts.

**3. International Certifications**

The minimum standard for any credible psyllium exporter is FSSAI certification and an IEC (Import Export Code). Leading exporters additionally hold ISO 22000 (food safety management), HACCP, and for organic grades — USDA NOP and EU Organic certifications. Halal and Kosher certifications are essential for Middle Eastern and Jewish market buyers.

**4. Export Documentation Expertise**

Professional exporters provide full documentation packages: COA (Certificate of Analysis), MSDS, phytosanitary certificate, country of origin certificate (FIEO/APEDA), EUR 1 for EU markets, and Halal/Kosher/organic certificates as applicable. Delays in documentation cause costly port holds for buyers.

**5. Packaging and Product Range**

Top exporters offer multiple packaging formats (25kg PP bags, HDPE drums, consumer pouches) and multiple product grades (whole husk, powder, organic, seeds, blonde husk) under one roof. This saves buyers the hassle of managing multiple vendor relationships.

**Evaluating an Exporter — Your Due Diligence Checklist**

Before placing your first order, verify: (a) Request their IEC certificate number, (b) Ask for a sample with a full COA from an accredited lab, (c) Verify their organic certificate from the certifying body's website, (d) Check their APEDA registration, (e) Request customer references from buyers in your target market.

At Amar Herbal Origins, we welcome due diligence and provide all documentation upfront. Our export track record covers buyers in USA, Germany, UK, UAE, Australia, Canada, Japan, France, Netherlands, and 20+ other countries.`,
  },
  {
    slug: 'how-to-import-psyllium-husk-from-india',
    title: 'How to Import Psyllium Husk from India: Step-by-Step Guide',
    excerpt:
      'A practical step-by-step guide for importers: how to find a supplier, what documents you need, how to handle customs clearance, and what to expect from your first psyllium husk import from India.',
    date: 'June 2025',
    readTime: '8 min read',
    category: 'Export Guide',
    keywords: ['how to import psyllium husk from india', 'import psyllium husk india', 'psyllium husk import process'],
    body: `Importing psyllium husk from India for the first time can feel complex — but the process is well-established and straightforward once you understand the steps. India is the world's largest producer, and thousands of successful shipments leave Indian ports every year destined for USA, Europe, Middle East, and Asia.

**Step 1: Identify Your Requirements**

Before contacting suppliers, define: (a) Grade needed (whole husk, powder, organic, seeds), (b) Quantity (trial order 500kg – 1 MT, or full container FCL 18–20 MT), (c) Purity specification (98% or 99%), (d) Packaging format (25kg PP bags, HDPE drums, consumer packs), (e) Certifications required (USDA Organic, Halal, Kosher, ISO 22000), (f) Destination port.

**Step 2: Shortlist Suppliers**

Search on directories like IndiaMART, Alibaba, TradeIndia, or directly approach companies like Amar Herbal Origins. Evaluate suppliers based on certifications, export experience, COA quality, and responsiveness. Always request a sample before placing a bulk order.

**Step 3: Request Samples and COA**

A credible supplier will send a 100–500g sample with a full Certificate of Analysis from an accredited laboratory. Test the sample in your own lab to verify purity, swelling factor, moisture, ash content, and any market-specific parameters (e.g., pesticide residues per Japan's Positive List).

**Step 4: Negotiate Price and Terms**

Standard pricing is quoted FOB (Free on Board) from Mundra or Nhava Sheva port. CIF (Cost, Insurance, Freight) to your destination port is also available. Payment terms for first orders are typically 30% advance + 70% against Bill of Lading. Established buyers may negotiate Net 30 credit terms.

**Step 5: Confirm the Order and Prepare Documentation**

Once you confirm the order, the supplier will prepare: COA, phytosanitary certificate, MSDS, commercial invoice, packing list, Bill of Lading. For EU buyers: EUR 1 movement certificate. For USA: FDA facility registration number. For organic: valid organic certificate.

**Step 6: Arrange Import Clearance**

Work with your customs broker in the destination country. HS code for psyllium husk is 1211.90 (plants and plant parts). Import duties vary by country — check with your broker. In most cases, psyllium husk imports are straightforward food/ingredient imports.

**Step 7: Quality Check on Arrival**

On receipt, verify the shipment against the COA. Check for any damage, moisture, or off-odor. If purchasing organic grade, verify the organic certificate accompanies the shipment.

**Common Mistakes to Avoid**

(1) Ordering large quantities without sampling first, (2) Not verifying the supplier's certifications from source (check organic certificates on the certifying body's database), (3) Not checking import duty rates before placing order, (4) Not specifying packaging requirements clearly upfront.

At Amar Herbal Origins, we guide first-time importers through every step. Our export team responds within 24 hours and provides all documentation required for smooth customs clearance in your country.`,
  },
  {
    slug: 'psyllium-husk-supplier-usa',
    title: 'Why USA Imports 60% of Its Psyllium from India: A Buyer\'s Guide',
    excerpt:
      'The US is the world\'s largest psyllium consumer. Understand why US supplement brands, pharma companies, and nutraceutical manufacturers source bulk psyllium husk from India — and how to find the right supplier.',
    date: 'May 2025',
    readTime: '5 min read',
    category: 'Market Intelligence',
    keywords: ['psyllium husk supplier usa', 'bulk psyllium husk usa', 'import psyllium husk from india to usa'],
    body: `The United States is the world's largest consumer of psyllium husk, driving billions in annual supplement, functional food, and pharmaceutical sales. Metamucil, the most recognizable psyllium brand, sells in pharmacies across the country — and virtually all of its raw material comes from India.

**Why India Dominates Psyllium Supply to the USA**

India accounts for over 85% of global psyllium production. The primary growing region — Unjha district in Gujarat — has a unique agro-climatic advantage: the cool, dry winters perfect for growing Plantago ovata (psyllium). No other country produces psyllium at this scale, quality, or price point.

For US buyers, this means there's no real alternative to Indian psyllium. The question isn't whether to source from India, but who to source from.

**What US Buyers Need from an Indian Supplier**

FDA Compliance: Any psyllium husk entering the USA must comply with FDA 21 CFR regulations. Suppliers should have FDA-registered facilities (check at fda.gov). For pharmaceutical grade, the product must meet USP monograph specifications for Psyllium Husk.

USDA Organic: The US organic supplement market is valued at billions annually. US brands launching organic psyllium products need suppliers with valid USDA NOP certification. Verify the organic certificate on the USDA organic integrity database (ams.usda.gov).

Non-GMO Verification: Psyllium (Plantago ovata) is inherently non-GMO, but US brands often require a non-GMO declaration letter for their own labeling compliance.

COA Requirements: US buyers typically require COA results for: purity (swelling factor, ash content), heavy metals (lead, arsenic, cadmium, mercury), microbiological analysis (total plate count, E. coli, Salmonella, yeast, mold), and pesticide residues.

**Logistics to the USA**

FOB Mundra to Los Angeles: 18–22 days. FOB Nhava Sheva to New York: 22–28 days. Standard container: 20ft FCL holds approximately 18–20 MT. LCL (Less than Container Load) available for smaller orders.

**Finding the Right Supplier**

US buyers should prioritize suppliers with: (1) FDA-registered facility, (2) USDA Organic for organic grade, (3) Consistent quality documented over multiple shipments, (4) Clear communication and 24-hour response time, (5) Ability to provide samples quickly.

Amar Herbal Origins exports regularly to US buyers across the nutraceutical, supplement, and functional food industries. We provide full FDA-compliant documentation with every shipment.`,
  },
  {
    slug: 'organic-psyllium-husk-market-guide',
    title: 'Organic Psyllium Husk: Market Growth & Supplier Selection Guide 2025',
    excerpt:
      'The organic psyllium husk segment is growing 2.5x faster than conventional. Understand the market dynamics, certification requirements, and how to find a reliable USDA/EU organic certified supplier from India.',
    date: 'May 2025',
    readTime: '6 min read',
    category: 'Market Intelligence',
    keywords: ['organic psyllium husk supplier', 'organic psyllium husk market', 'usda organic psyllium india'],
    body: `The organic psyllium husk market is growing significantly faster than the conventional segment, driven by rising clean-label demand across North American and European supplement markets.

According to Mordor Intelligence market research, the organic psyllium segment is growing 2.5x faster than conventional grades. The primary driver: supplement and functional food brands are reformulating products to meet "organic," "clean label," and "non-GMO" consumer expectations.

**What Makes Psyllium Husk Organic?**

Organic psyllium husk is grown without synthetic pesticides, herbicides, or fertilizers. The farming, harvesting, storage, processing, and packaging must all comply with organic standards. For the US market, this means USDA National Organic Program (NOP) certification. For Europe: EU Organic Regulation (EU) 2018/848. For Australia: ACO recognition (which accepts USDA/EU equivalency).

**India's Organic Psyllium Advantage**

India's organic psyllium production has expanded 40% in the past three years. Gujarat and Rajasthan farmers are increasingly converting to organic practices to meet international demand and obtain premium pricing. India's certified organic psyllium is cost-competitive versus organic psyllium from any other origin.

**The Certification Hierarchy**

For serious organic buyers: (1) Ask to see the supplier's valid organic certificate (not just a claim), (2) Verify the certificate on the certifying body's database, (3) Check whether the processing facility is also certified organic (not just the farm), (4) Ensure the certificate covers the specific product form you need (whole husk, powder, etc.).

**Separate Processing Lines Are Non-Negotiable**

A credible organic psyllium supplier must have dedicated, separate processing lines for organic grades. Without this, cross-contamination from conventional grades is a real risk. Ask suppliers directly: "Do you have separate lines?" and request documentation from their certification audit.

**Market Pricing Premium**

Organic psyllium husk commands a 20–40% premium over conventional grade depending on certification type and market destination. For supplement brands selling organic products at retail premiums of 50–100%, this margin is well worth paying.

**Selecting Your Organic Psyllium Supplier**

Evaluation criteria: (1) Valid USDA NOP and/or EU Organic certificate, (2) Separate organic processing lines, (3) Detailed COA including pesticide residue testing, (4) Traceability documentation, (5) References from other organic buyers.

Amar Herbal Origins supplies USDA NOP and EU Organic certified psyllium husk with full certification documentation, third-party tested COA, and complete traceability.`,
  },
  {
    slug: 'psyllium-husk-packaging-guide-b2b',
    title: 'Psyllium Husk Packaging Guide: PP Bags vs HDPE Drums vs IBC Totes',
    excerpt:
      'Choosing the right packaging format for bulk psyllium husk impacts quality preservation, shipping costs, and end-user convenience. Here\'s a complete guide for B2B buyers.',
    date: 'April 2025',
    readTime: '5 min read',
    category: 'Packaging',
    keywords: ['psyllium husk packaging b2b', 'bulk psyllium husk packaging', 'psyllium husk shipping packaging'],
    body: `Selecting the right packaging for your psyllium husk import affects product quality preservation, shipping costs, unloading ease, and compliance with your facility's intake processes. Here's a practical guide to the most common packaging formats used for bulk psyllium husk exports from India.

**25 kg PP Woven Bags (Most Common)**

The standard packaging for bulk psyllium husk exports. Food-grade polypropylene woven bags with inner PE liner provide excellent moisture protection. A 20ft FCL container holds approximately 650–750 bags (≈18–19 MT). Pros: lowest per-unit cost, easy to handle, widely accepted. Cons: manual handling of individual bags for large quantities.

**50 kg PP Woven Bags**

Common for larger manufacturing operations. A 20ft FCL holds approximately 320–360 bags. Requires forklift or mechanical handling. Reduces per-bag cost but limits flexibility for smaller production runs.

**HDPE Drums (25 kg or 50 kg)**

High-density polyethylene drums are preferred by pharmaceutical and nutraceutical manufacturers for their superior moisture barrier and tamper-evident properties. Meets GMP handling requirements. More expensive than PP bags but provides better product protection. Often required by pharma-grade buyers in Europe and USA.

**IBC Totes (500 kg or 1000 kg)**

Intermediate Bulk Containers are used by large-scale manufacturers processing psyllium directly in bulk. Excellent for operations with pneumatic conveying systems. Cost-efficient for large volumes but requires specialized handling equipment.

**Consumer Retail Packs (for Private Label)**

For private label products: 200g, 500g, and 1 kg pouches or jars in custom branding. These are produced on demand and typically shipped as full pallets on LCL or FCL.

**Key Factors in Packaging Selection**

(1) Destination Regulatory Requirements: EU pharmaceutical buyers often require HDPE drums; US food-grade buyers commonly use PP bags; Japanese buyers require specific labeling on each unit.

(2) Moisture Sensitivity: Psyllium husk is hygroscopic — it absorbs moisture readily. All packaging must include inner PE liner or equivalent moisture barrier.

(3) Shelf Life: Properly packaged psyllium husk has a shelf life of 2 years from manufacturing date under recommended storage (cool, dry, below 25°C).

(4) Shipping Cost Impact: 25 kg PP bags offer the best volume/weight efficiency for standard FCL shipments.

At Amar Herbal Origins, we accommodate all standard packaging formats and can customize packaging specifications to your facility's requirements. Discuss your packaging needs with our export team.`,
  },
  {
    slug: 'psyllium-husk-supplier-germany',
    title: 'Psyllium Husk Supplier Germany: Why Indian Origin Wins for German Pharma',
    excerpt:
      'German pharma and supplement brands source psyllium husk (ispaghula husk) from India under Ph. Eur. monograph, EU Organic, and EUR 1 certificate. This guide covers documentation requirements, heavy metal limits, pesticide MRL compliance, and how to find a Germany-compliant Indian psyllium supplier.',
    date: 'June 2026',
    readTime: '5 min read',
    category: 'Market Intelligence',
    keywords: ['psyllium husk supplier germany', 'psyllium husk germany import', 'isabgol supplier germany', 'ispaghula husk germany', 'psyllium husk eu organic germany', 'isabgol lieferant deutschland', 'psyllium hs code eu import'],
    relatedLinks: [
      { label: 'View Certifications', href: '/en/quality', description: 'ISO 22000, EU Organic, Halal — full certificate portfolio' },
      { label: 'HS Code & Import Duties', href: '/en/blog/psyllium-husk-hs-code-import-duties', description: 'HS code 1211.90, EU import duty rates, EUR 1 certificate explained' },
      { label: 'Psyllium COA Guide', href: '/en/blog/psyllium-husk-coa-guide', description: 'How to verify COA parameters for EU market compliance' },
      { label: 'Request EU-Compliant Quote', href: '/en/contact', description: 'Get Ph. Eur. spec COA, EUR 1, EU Organic documentation' },
    ],
    body: `Germany is Europe's largest pharmaceutical and natural health products market, and one of the highest per-capita consumers of psyllium husk globally. German pharma companies, nutraceutical brands, and natural remedy distributors rely on Indian psyllium suppliers for their raw material supply.

**Why Germany Sources Psyllium from India**

India's dominance in global psyllium production is unrivaled. German importers have no domestic alternative — psyllium (Plantago ovata) requires a specific agro-climate found only in Gujarat and Rajasthan. India's competitive FOB pricing, consistent quality, and ability to supply EU-certified organic grades make Indian suppliers the natural choice for German buyers.

**What German Buyers Require**

German buyers — particularly in the pharmaceutical sector — have among the highest quality requirements globally. Key requirements:

European Pharmacopoeia (Ph. Eur.) Compliance: German pharma companies require psyllium husk that meets the Ph. Eur. monograph for Ispaghula Husk. This includes a swelling index of minimum 40 ml/g for whole husk and specific microbiological limits.

EU Organic Certification: Germany has the largest organic market in Europe. German supplement and functional food brands specifically require EU Organic certified psyllium under Regulation (EU) 2018/848.

Heavy Metal Testing: German buyers require testing below EU Regulation (EC) No 1881/2006 limits for lead, cadmium, mercury, and arsenic. Third-party testing from accredited labs is preferred.

EUR 1 Movement Certificate: Required for preferential customs duty rates for shipments from India under EU-India trade frameworks.

Pesticide Residue Testing: EU Maximum Residue Limits (MRLs) under Regulation (EC) 396/2005 are strictly enforced. German buyers require comprehensive pesticide residue testing reports.

**Logistics to Germany**

FOB Mundra to Hamburg (DEHAM): 20–24 days. Rotterdam alternative as EU gateway: 18–22 days. Full documentation: COA, EUR 1, phytosanitary certificate, organic certificate.

**Finding a Compliant Supplier**

For German pharmaceutical buyers, the verification checklist includes: (1) ISO 22000 certification, (2) GMP compliance documentation, (3) Ph. Eur. compliant COA, (4) EU Organic certificate (for organic grade), (5) Heavy metals and pesticide residue reports, (6) EUR 1 certificate issuance capability.

Amar Herbal Origins supplies regularly to European buyers including those in Germany and the wider EU. We provide full EU-compliant documentation with every shipment.`,
  },
  {
    slug: 'psyllium-husk-fob-price-guide',
    title: 'Psyllium Husk FOB Price Guide: What Affects Psyllium Export Pricing from India?',
    excerpt:
      '2026 psyllium husk FOB price from Mundra: USD 1,100–2,100/MT depending on grade. Understand how Unjha APMC mandi rates set global prices, when to buy for lowest cost (April–July post-harvest), and how grade, quantity, and season affect your landed cost.',
    date: 'June 2026',
    readTime: '6 min read',
    category: 'Market Intelligence',
    keywords: ['psyllium husk fob price india', 'psyllium husk price india', 'isabgol export price', 'psyllium husk price 2026', 'unjha mandi psyllium rate', 'psyllium husk bulk price india', 'isabgol price india'],
    relatedLinks: [
      { label: 'Get Current Live Price', href: '/en/contact', description: 'Prices updated weekly — get a current FOB quotation for your grade' },
      { label: 'Wholesale Procurement Guide', href: '/en/blog/wholesale-bulk-psyllium-husk-india', description: 'FCL vs LCL pricing tiers and blanket order strategy' },
      { label: 'Psyllium Price 2026 Guide', href: '/en/blog/psyllium-husk-price-2026-india', description: 'Full 2026 price breakdown by grade with landed cost calculator' },
      { label: 'Psyllium Husk Exporter', href: '/en/exporter', description: 'Export capabilities, port details, and logistics information' },
    ],
    body: `Psyllium husk export pricing from India can vary significantly based on season, crop yield, grade, quantity, and market conditions. Understanding what drives FOB prices helps buyers plan procurement more effectively and negotiate from a position of knowledge.

**The Unjha Mandi Benchmark**

Unjha (Gujarat) is the global pricing benchmark for psyllium husk. The Unjha APMC (Agricultural Produce Market Committee) mandi sets daily spot prices for psyllium husk based on supply and demand. FOB export prices from Mundra or Nhava Sheva are derived from Unjha mandi rates with processing, packaging, and freight margin added.

**Key Factors That Affect FOB Price**

Crop Yield: Psyllium is a Rabi (winter) crop harvested in February–April. Post-harvest (May–July), prices typically soften as fresh stock enters the market. Pre-harvest (November–January), prices often rise due to tight supply. Poor monsoon withdrawal or harvest disruption can cause significant price spikes.

Grade Premium: Whole Psyllium Husk 99% is the baseline grade. Psyllium Husk Powder (fine mesh) commands a 10–20% premium. Organic grades command a further 20–40% premium depending on certification.

Quantity Discount: FCL orders (20ft ≈ 18–20 MT) receive significantly better pricing per MT than LCL orders. Large regular buyers can negotiate annual supply agreements with fixed quarterly pricing.

Freight Component: FOB pricing excludes freight. CIF pricing (Cost, Insurance, Freight) includes freight to your destination port. Freight rates fluctuate with global shipping conditions — the Asia-Europe corridor in particular has seen significant volatility.

USD/INR Exchange Rate: Since psyllium is traded internationally in USD, INR depreciation against USD makes Indian psyllium relatively cheaper for foreign buyers, while USD/INR appreciation increases effective cost.

**Indicative FOB Price Ranges (2025)**

Whole Psyllium Husk 99%: USD 1,100–1,450 per MT FOB Mundra (varies by season and quantity). Psyllium Husk Powder 99%: USD 1,300–1,650 per MT. Organic Psyllium Husk 99%: USD 1,600–2,100 per MT. These are indicative — contact us for current pricing.

**Procurement Strategy Tips**

(1) Build in 2–3 months of safety stock given typical 4–6 week supply chain lead times, (2) Consider locking in forward contracts during harvest season (April–June) when prices are often lowest, (3) Monitor Unjha mandi arrivals and prices via market reports, (4) Factor in freight rate volatility into landed cost calculations.

Contact our export team for current FOB pricing and to discuss supply agreements tailored to your procurement cycle.`,
  },
  {
    slug: 'psyllium-husk-certifications-export',
    title: 'ISO 22000 vs FSSAI vs Halal — Which Certifications Matter for Psyllium Husk Export?',
    excerpt:
      'Different international markets require different certifications. This guide explains which psyllium husk export certifications matter for each major market — USA, EU, UAE, Australia, Japan, and more.',
    date: 'March 2025',
    readTime: '7 min read',
    category: 'Quality & Certs',
    keywords: ['psyllium husk certifications export', 'psyllium husk quality certifications', 'iso 22000 psyllium husk'],
    faqs: [
      {
        q: 'What certifications are required to export psyllium husk from India?',
        a: 'At minimum: FSSAI license and IEC (Import Export Code). For international B2B trade: ISO 22000 is the gold standard. For USA: FDA facility registration and USDA Organic (for organic grade). For EU: ISO 22000 and EU Organic. For UAE/GCC: Halal certification from an ESMA-recognized body. For Japan: comprehensive pesticide testing per the Japan Positive List.',
      },
      {
        q: 'Is ISO 22000 mandatory for psyllium husk export?',
        a: 'ISO 22000 is not legally mandatory but is practically required by most serious international buyers — especially in the USA, EU, Japan, and Australia. It demonstrates that the manufacturer operates a rigorous food safety management system covering HACCP principles and GMP. Buyers use it as a key supplier qualification criterion.',
      },
      {
        q: 'Do I need Halal certified psyllium husk for UAE and Middle East?',
        a: 'Yes. For the UAE specifically, ESMA (Emirates Authority for Standardization and Metrology) requires Halal-certified food ingredients. For Saudi Arabia (SFDA), Malaysia (JAKIM), and Singapore (MUIS), Halal certification is also required or strongly preferred. The certifying body must be recognized by the destination country\'s Halal authority.',
      },
      {
        q: 'What does USDA Organic certification mean for psyllium husk?',
        a: 'USDA NOP (National Organic Program) certification confirms that the psyllium husk was grown without synthetic pesticides or fertilizers, processed in dedicated organic facilities, and audited by an accredited certifying agent. US brands selling organic psyllium products must source from USDA NOP certified suppliers. Verify certificates at ams.usda.gov.',
      },
    ],
    body: `When importing psyllium husk from India, the certifications held by your supplier determine which markets you can sell in, what health claims you can make, and what regulatory obstacles you'll face at customs.

Here's a market-by-market breakdown of which certifications matter most.

**FSSAI (India Food Safety) — The Baseline**

The Food Safety and Standards Authority of India (FSSAI) license is the minimum standard for any credible Indian food/supplement exporter. Without FSSAI, a supplier cannot legally process or export food ingredients in India. Always verify your supplier's FSSAI license number at food.gov.in.

**IEC (Import Export Code) — Required for Export**

The Import Export Code issued by DGFT (Directorate General of Foreign Trade) is mandatory for any Indian exporter. Verify the supplier's IEC number at the DGFT website.

**ISO 22000 — International Food Safety Standard**

ISO 22000 certification demonstrates that the manufacturer's food safety management system meets international standards. Required or strongly preferred by buyers in USA, Europe, Japan, Australia, and most developed markets. It covers HACCP principles, good manufacturing practices, and systematic food safety risk management.

**Halal Certification — Essential for Middle East and Muslim Markets**

For exports to UAE, Saudi Arabia, Malaysia, Indonesia, Singapore, and other Muslim-majority markets, Halal certification is mandatory or strongly preferred. The certifying body must be recognized by the destination market's Halal authority (ESMA for UAE, SFDA for Saudi Arabia, JAKIM for Malaysia, MUIS for Singapore).

**Kosher Certification — Jewish and Premium Markets**

Kosher certification is required by Jewish buyers and preferred by some premium natural supplement brands. Less critical than Halal for volume but important for certain market segments.

**USDA Organic — USA Organic Market**

For US buyers importing psyllium for organic-labeled products, USDA NOP certification of the supplier is mandatory. Verify at the USDA organic integrity database (ams.usda.gov). The processing facility must also be certified organic, not just the farm.

**EU Organic — European Organic Market**

For EU buyers (Germany, France, Netherlands, Italy, etc.), EU Organic certification under Regulation (EU) 2018/848 is required. Certificate is valid across all 27 EU member states.

**Non-GMO Verification**

Psyllium (Plantago ovata) has no commercialized GMO variety — it is naturally non-GMO. However, US and EU organic brands often require a formal non-GMO declaration letter from the supplier for their own labeling compliance.

**Certifications by Market**

USA: FSSAI, IEC, ISO 22000, FDA registration, USDA Organic (for organic grade), Non-GMO declaration.
Germany/EU: FSSAI, IEC, ISO 22000, EU Organic (for organic), EUR 1 movement certificate.
UAE/Saudi Arabia: FSSAI, IEC, ISO 22000, Halal (ESMA/SFDA recognized).
Australia: FSSAI, IEC, ISO 22000, TGA documentation support.
Japan: FSSAI, IEC, ISO 22000, comprehensive pesticide residue testing per Japan Positive List.

Amar Herbal Origins holds all major export certifications including ISO 22000, FSSAI, USDA Organic, EU Organic, Halal, and Kosher. Full documentation provided with every shipment.`,
  },
  {
    slug: 'psyllium-husk-coa-guide',
    title: 'How to Read a Psyllium Husk COA (Certificate of Analysis)',
    excerpt:
      'The Certificate of Analysis is the most critical document in any psyllium husk purchase. Learn exactly what parameters to check, what the numbers mean, and what red flags to watch for.',
    date: 'February 2025',
    readTime: '6 min read',
    category: 'Quality & Certs',
    keywords: ['psyllium husk coa certificate', 'certificate of analysis psyllium husk', 'psyllium husk quality testing'],
    faqs: [
      {
        q: 'What is a COA for psyllium husk and why is it important?',
        a: 'A Certificate of Analysis (COA) is a laboratory document that certifies the test results for a specific batch of psyllium husk. It confirms purity, moisture, ash content, heavy metals, microbiology, and pesticide residues. Every reputable psyllium husk supplier should provide a batch-specific COA from a third-party accredited laboratory with every shipment.',
      },
      {
        q: 'What swelling factor should psyllium husk have on a COA?',
        a: 'For whole psyllium husk: minimum swelling factor of 40 ml/g per USP/Ph. Eur. standards. For psyllium husk powder: minimum 50 ml/g. Higher swelling factor = higher purity and better fiber functionality. Premium grades from Amar Herbal Origins typically show 45–55 ml/g for whole husk.',
      },
      {
        q: 'What heavy metal limits should be on a psyllium husk COA?',
        a: 'EU Regulation (EC) 1881/2006 requires: Lead ≤0.1 mg/kg, Cadmium ≤0.05 mg/kg, Mercury ≤0.1 mg/kg, Arsenic ≤0.1 mg/kg for supplement ingredients. A complete psyllium husk COA must show results for all four heavy metals below these limits. US buyers should also check USP General Chapter <232> limits.',
      },
      {
        q: 'Should I request an in-house or third-party COA from a psyllium husk supplier?',
        a: 'For first orders, always request BOTH: the supplier\'s in-house COA AND a third-party COA from an accredited external lab (SGS, Intertek, Bureau Veritas, or equivalent). This eliminates conflict of interest and verifies the results independently. For ongoing relationships, in-house COA with periodic third-party verification is standard.',
      },
    ],
    body: `The Certificate of Analysis (COA) is the single most important document in a psyllium husk import transaction. It tells you exactly what is in the product, verifies it meets your specifications, and provides the documentation your regulatory team needs. Here's how to read one correctly.

**What Is a COA?**

A COA is a document issued by a qualified laboratory that certifies the test results for a specific batch of product. A credible COA will show: product name, batch number, manufacturing date, test methods, results, and pass/fail status against specifications.

**Key Parameters to Check**

Purity / Swelling Factor: This is the most critical parameter for psyllium husk. The swelling factor (swelling volume in ml/g) measures how much water the psyllium absorbs — this is what makes it effective as a dietary fiber supplement. USP specifies: not less than 9 ml/g for psyllium husk powder and not less than 40 ml/g for whole psyllium husk. Higher is better.

Moisture Content: Should be ≤10%. High moisture indicates improper drying or storage, which leads to caking, degradation, and microbial risk.

Total Ash: Should be ≤4.0%. High ash indicates contamination with sand or soil — a sign of poor quality raw material.

Acid Insoluble Ash: Should be ≤1.0%. This measures silica/sand content specifically. Values above 1% indicate significant contamination.

Heavy Metals: EU regulations (EC 1881/2006) specify maximum limits for Lead (≤0.1 mg/kg for supplements), Cadmium (≤0.05 mg/kg), Mercury (≤0.1 mg/kg), Arsenic (≤0.1 mg/kg). A COA must show results below these limits.

Microbiology: Essential parameters include Total Plate Count (≤100,000 CFU/g for food grade), Yeast & Mold (≤1,000 CFU/g), E. coli (absent in 1g), Salmonella (absent in 25g). Pharmaceutical grade has stricter limits.

Pesticide Residues: EU requires comprehensive pesticide screening per Regulation (EC) 396/2005. Japan requires testing against the Japan Positive List. US buyers should verify against EPA/FDA limits.

**What to Watch For — Red Flags**

(1) COA from the supplier's own lab without third-party verification — always request third-party lab COA for first orders, (2) Missing parameters — a COA missing heavy metals or pesticide data is incomplete, (3) No batch number — batch-specific COA is essential; generic "spec sheet" COAs are inadequate, (4) Old dates — COA should be from the specific batch you're ordering, not a historical sample.

**Third-Party vs. In-House COA**

For first orders, always request both the in-house COA (from the supplier's lab) and a third-party COA from an accredited external laboratory (SGS, Intertek, Bureau Veritas, or equivalent). This eliminates any conflict of interest.

At Amar Herbal Origins, we provide in-house COA with every shipment and can arrange third-party testing through accredited labs at the buyer's request.`,
  },
  {
    slug: 'isabgol-vs-psyllium-husk-difference',
    title: 'Isabgol vs Psyllium Husk: Are They the Same? Complete B2B Sourcing Guide',
    excerpt:
      'Isabgol and psyllium husk are 100% the same product — isabgol is the Hindi/Gujarati name for psyllium husk (Plantago ovata). Learn the difference between isabgol husk, psyllium seeds, and ispaghula husk, plus how to source bulk psyllium from India with full COA and certifications.',
    date: 'June 2026',
    readTime: '5 min read',
    category: 'Sourcing',
    keywords: ['isabgol vs psyllium husk', 'difference between isabgol and psyllium husk', 'is isabgol same as psyllium husk', 'isabgol and psyllium husk are same', 'psyllium husk isabgol', 'isabgol psyllium husk difference', 'is isabgol same as metamucil', 'psyllium husk in gujarati', 'isabgol in english'],
    relatedLinks: [
      { label: 'Psyllium Husk Products & Grades', href: '/en/psyllium/products', description: 'Whole husk, powder, organic & blonde grades — full spec sheet' },
      { label: 'How to Read a Psyllium COA', href: '/en/blog/psyllium-husk-coa-guide', description: 'Swelling factor, heavy metals, microbiology — what numbers to check' },
      { label: 'Psyllium Certifications Guide', href: '/en/blog/psyllium-husk-certifications-export', description: 'ISO 22000, USDA Organic, Halal, Kosher — which market needs what' },
      { label: 'Request a Free Sample', href: '/en/contact', description: 'Get a 100–500g sample with full COA within 24 hours' },
      { label: 'FOB Price Guide 2026', href: '/en/blog/psyllium-husk-fob-price-guide', description: 'Current psyllium husk pricing from India, Unjha mandi rates explained' },
    ],
    body: `If you've searched for psyllium husk suppliers from India, you'll have noticed that Indian sellers often use the term "Isabgol" interchangeably. The short answer: isabgol and psyllium husk are the same thing — different names for the same plant product.

**Are Isabgol and Psyllium Husk the Same?**

Yes. Isabgol and psyllium husk are 100% the same product. Isabgol is the Hindi/Urdu/Gujarati name for Plantago ovata — the plant species from which psyllium husk is derived. "Psyllium" comes from Greek (psyllion = flea), a reference to the appearance of the seeds. "Isabgol" translates roughly as "horse's ear" in Persian/Urdu, describing the shape of the seed.

In trade, "isabgol" and "psyllium husk" refer to identical product from identical botanical origin. Indian exporters typically use "isabgol" in domestic market references and "psyllium husk" in international documentation.

**Is Isabgol the Same as Metamucil?**

Metamucil is a brand name for a psyllium husk supplement — the raw material used in Metamucil is the same psyllium husk (isabgol) exported from India. The plant, the husk, and the fiber content are identical. Metamucil simply adds flavouring and branding. From a raw ingredient perspective, Metamucil's active ingredient = isabgol = psyllium husk.

**What Is the Difference Between Isabgol and Isabgol Husk?**

Strictly speaking: "Isabgol" or "psyllium" refers to the whole seed, while "Isabgol husk" or "psyllium husk" refers only to the outer seed coat (husk) after it has been separated from the seed. The husk is the commercially important part — it contains the highest concentration of soluble fiber (mucilage). The terms are often used interchangeably in trade, but technically: husk = the fiber-rich outer coat; seed = the whole seed before dehusking.

**Product Forms to Understand**

Whole Psyllium Husk (Isabgol Husk): The outer husk (seed coat) separated from the seed. This is the most commercially important form — it's what's in Metamucil and similar products. Purity is measured by swelling factor (≥40 ml/g for 99% grade).

Psyllium Husk Powder (Isabgol Powder): The whole husk milled to a fine powder (40–100 mesh). Used in tablet/capsule formulations and functional foods where the whole husk texture isn't desired. Swelling factor ≥50 ml/g.

Psyllium Seeds (Isabgol Seeds): The whole seed before husk separation. Used in the extraction of seed oil and in some traditional medicine preparations. Lower fiber content than the husk.

Blonde Psyllium Husk: Premium grade with very light color — preferred for supplement products where white/light color is important for aesthetic reasons.

Organic Psyllium Husk / Organic Isabgol: Certified organic (USDA, EU) whole husk or powder.

**Which Term Should You Use in Your Import Documents?**

For clarity and international standardization, use "Psyllium Husk" in your purchase orders, letter of credit, and customs documentation. The HS code is 1211.90.90 (plants and plant parts of a kind primarily used in perfumery, pharmacy, or for insecticidal, fungicidal, or similar purposes — other).

Indian suppliers will understand both terms, but international documentation in English should use "Psyllium Husk" to avoid any customs classification ambiguity.

**Quality Hierarchy**

From highest to lowest commercial value: (1) Organic Psyllium Husk Powder 99%, (2) Organic Whole Psyllium Husk 99%, (3) Conventional Psyllium Husk Powder 99%, (4) Conventional Whole Psyllium Husk 99%, (5) Psyllium Husk 98%, (6) Psyllium Seeds.

At Amar Herbal Origins, we supply all grades and product forms of psyllium husk / isabgol with full documentation. Contact us to specify your exact grade and application requirements.`,
    faqs: [
      {
        q: 'Are isabgol and psyllium husk the same thing?',
        a: 'Yes. Isabgol and psyllium husk are exactly the same product. Isabgol is the Hindi/Urdu/Gujarati name for Plantago ovata seeds and their husk. Psyllium husk is the same product referred to by its international English name. Both terms refer to the fiber-rich outer seed coat of the Plantago ovata plant grown in Gujarat and Rajasthan, India.',
      },
      {
        q: 'Is isabgol the same as psyllium husk powder?',
        a: 'Isabgol husk and psyllium husk are the same ingredient. Psyllium husk powder is isabgol husk that has been finely milled to 40–100 mesh. The whole husk and powder form have the same botanical origin — only the particle size differs. Psyllium husk powder is used in capsules and tablets; whole isabgol husk is used in fiber drinks and direct supplements.',
      },
      {
        q: 'What is the difference between isabgol and isabgol husk?',
        a: 'Technically, "isabgol" refers to the whole Plantago ovata seed, while "isabgol husk" refers to the outer seed coat separated from the seed. The husk contains the highest concentration of soluble fiber (psyllium mucilage). In commercial trade and everyday usage, both terms are often used interchangeably to refer to the processed husk product.',
      },
      {
        q: 'Is psyllium husk the same as ispaghula husk?',
        a: 'Yes. Ispaghula husk is the British Pharmacopoeia and European Pharmacopoeia name for psyllium husk. All three names — isabgol, psyllium husk, and ispaghula husk — refer to the same product: the husk of Plantago ovata seeds. European pharmaceutical companies use "ispaghula" while American companies use "psyllium" — the product is identical.',
      },
      {
        q: 'Where is the best psyllium husk (isabgol) produced?',
        a: 'India produces over 85% of the world supply of psyllium husk. The primary growing regions are Unjha, Mehsana, and Sidhpur in Gujarat, and Jodhpur district in Rajasthan. Gujarat\'s cool, dry winter climate creates ideal growing conditions for Plantago ovata. Amar Herbal Origins sources directly from these farming regions.',
      },
    ],
  },
  {
    slug: 'psyllium-husk-supplier-uae',
    title: 'Psyllium Husk Supplier UAE & GCC: How Dubai Importers Source from India',
    excerpt:
      'The UAE is the gateway for psyllium husk distribution across the Gulf. Understand how Dubai importers source from India, what Halal and ESMA certifications are needed, and why the India-UAE route is the fastest psyllium supply chain.',
    date: 'June 2025',
    readTime: '5 min read',
    category: 'Market Intelligence',
    keywords: ['psyllium husk supplier uae', 'psyllium husk dubai', 'isabgol supplier uae', 'halal psyllium husk uae'],
    body: `The UAE — particularly Dubai and Jebel Ali — is the world's most strategically positioned hub for psyllium husk distribution into the Gulf Cooperation Council (GCC) and wider MENA region. Dubai-based traders, food manufacturers, and pharma companies are among the highest-volume psyllium buyers from India globally.

**Why UAE is the Hub for GCC Psyllium Supply**

Dubai's Jebel Ali Free Zone (JAFZA) and its world-class port infrastructure make it the ideal regional distribution center. Psyllium husk arriving from India at Jebel Ali can be rapidly redistributed to Saudi Arabia, Kuwait, Qatar, Bahrain, Oman, and beyond — often within 24–48 hours by road.

The India-UAE trade lane is also one of the fastest in the world. FOB Mundra to Jebel Ali takes just 7–10 days sea freight — compared to 20+ days for European ports.

**India-UAE CEPA: Zero Import Duty**

The India-UAE Comprehensive Economic Partnership Agreement (CEPA), signed in 2022, grants zero import duty on psyllium husk (HS code 1211.90) imported from India into the UAE. This makes Indian psyllium significantly more competitive versus other origins for UAE buyers.

**Halal Certification — Mandatory for UAE**

For food-grade psyllium entering the UAE, Halal certification is non-negotiable. The Emirates Authority for Standardization and Metrology (ESMA) requires Halal-certified ingredients. The certifying body must be recognized by ESMA.

Amar Herbal Origins provides Halal-certified psyllium husk from an ESMA-recognized body with every shipment to UAE.

**Documentation for UAE Import**

- Halal certificate (ESMA recognized)
- Certificate of Origin (COO) from FIEO/APEDA
- Certificate of Analysis (COA)
- Commercial invoice and packing list
- Phytosanitary certificate

**Private Label for UAE Market**

Dubai-based supplement brands increasingly require Arabic/English bilingual packaging. We offer private label psyllium husk products with Arabic label design support compliant with UAE labeling regulations (GSO 9/2013).

For GCC distribution, our psyllium products meet requirements for all six GCC countries through UAE gateway imports. Contact our export team for UAE-specific pricing and documentation.`,
  },
  {
    slug: 'psyllium-husk-supplier-canada',
    title: 'Psyllium Husk Supplier Canada: Health Canada NPN & NHP Documentation Guide',
    excerpt:
      'Canada regulates psyllium husk as a Natural Health Product (NHP) requiring an NPN license. This guide explains what Canadian supplement brands need from their Indian psyllium supplier to successfully register and sell psyllium products in Canada.',
    date: 'June 2026',
    readTime: '6 min read',
    category: 'Export Guide',
    keywords: ['psyllium husk supplier canada', 'psyllium husk canada nhp', 'import psyllium canada', 'health canada psyllium', 'bulk psyllium husk canada', 'buy psyllium husk canada'],
    faqs: [
      {
        q: 'Can I import psyllium husk from India to Canada?',
        a: 'Yes. Canada imports significant quantities of psyllium husk from India. There is 0% import duty under Canada\'s MFN tariff rate for HS code 1211.90. If you are selling psyllium husk as a consumer supplement product in Canada, it must be licensed as a Natural Health Product (NHP) with a Natural Product Number (NPN) from Health Canada.',
      },
      {
        q: 'What is the MOQ for psyllium husk shipments to Canada?',
        a: 'Amar Herbal Origins ships to Canada from 500 kg (LCL/consolidated shipment) to full FCL container loads of 18–20 MT. FOB pricing from Mundra port. Transit time to Vancouver (West Coast): 18–22 days; to Toronto via Halifax: 24–28 days. Free samples available before bulk order.',
      },
      {
        q: 'Does psyllium husk imported to Canada need to be Halal or Organic certified?',
        a: 'Halal certification is not mandatory for Canadian market entry but is preferred by Muslim-majority communities. For organic claims: Canada\'s CFIA recognizes USDA Organic under the Canada-US organic equivalency arrangement — our USDA NOP certified psyllium husk can be sold as organic in Canada. EU Organic is also recognized.',
      },
      {
        q: 'What documentation do Canadian importers need for psyllium husk from India?',
        a: 'Key documents: Certificate of Analysis (COA) from accredited lab, phytosanitary certificate, Certificate of Origin (APEDA/FIEO), commercial invoice, packing list, MSDS/SDS, and non-GMO declaration. For NPN applications: full technical dossier including stability data, GMP certificate, and botanical specification sheet.',
      },
    ],
    body: `Canada's Natural Health Products Regulations (NHPR) make it one of the world's most regulated markets for psyllium husk products. Unlike the USA where psyllium supplements are dietary supplements under DSHEA, Canadian products require a Natural Product Number (NPN) — a full product license from Health Canada.

**What Is an NPN and Why Does It Matter?**

A Natural Product Number is required for any psyllium husk product sold in Canada as a natural health product. The NPN license is product-specific and requires documentation about the product's ingredients, dosage form, recommended conditions of use, and evidence of safety and efficacy.

Your Indian psyllium supplier plays a critical role in NPN applications — they must provide comprehensive technical documentation about the raw material.

**What Documentation Does Your Supplier Need to Provide?**

For a successful NPN application, your psyllium husk supplier from India must provide:

(1) Product Specifications: Detailed specification sheet including botanical name (Plantago ovata), plant part used (seed husk), form (whole husk, powder), purity grades, and testing parameters.

(2) Certificate of Analysis (COA): From an accredited third-party laboratory. Parameters must include: swelling factor/index, moisture content, total ash, acid insoluble ash, heavy metals (lead, cadmium, mercury, arsenic), microbiology (TPC, E. coli, Salmonella, yeast, mold), and pesticide residue panel.

(3) Good Manufacturing Practice (GMP) Evidence: Certificate of compliance with GMP standards (ISO 22000 or equivalent).

(4) Stability Data: Evidence that the product maintains specification over its claimed shelf life under recommended storage conditions.

(5) Non-GMO Declaration: Psyllium is inherently non-GMO, but Health Canada requires formal documentation.

**Organic Psyllium for Canadian Market**

Canada's CFIA recognizes both USDA Organic (under the Canada-US organic equivalency arrangement) and EU Organic certification. Canadian brands launching organic psyllium NHPs can use our USDA/EU certified organic psyllium with CFIA-recognized organic equivalency.

**Bilingual Labelling**

Canadian regulations require bilingual (English/French) product labelling under the Food and Drugs Act. We offer private label services with French-language label design support for Canadian brands.

**Logistics to Canada**

FOB Mundra to Vancouver (West Coast): 18–22 days. Toronto via Halifax: 24–28 days. Canadian Food Inspection Agency (CFIA) import permit documentation is provided with every shipment.

Amar Herbal Origins has supported Canadian NHP manufacturers with complete technical documentation packages. Contact us to discuss your NPN documentation requirements.`,
  },
  {
    slug: 'psyllium-husk-bulk-procurement-guide',
    title: 'Bulk Psyllium Husk Procurement Guide: FCL vs LCL, MOQ & Lead Times',
    excerpt:
      'A practical procurement guide for B2B buyers: when to order FCL vs LCL, how to negotiate MOQ, realistic lead times from India, and how to plan your psyllium husk supply chain for the year.',
    date: 'May 2025',
    readTime: '7 min read',
    category: 'Sourcing',
    keywords: ['bulk psyllium husk procurement', 'psyllium husk moq', 'fcl lcl psyllium', 'psyllium husk lead time india'],
    body: `Procuring bulk psyllium husk from India requires understanding container logistics, order minimums, and lead times that differ significantly from domestic purchasing. This guide gives you the practical knowledge to plan your psyllium supply chain effectively.

**FCL vs LCL: Which Shipping Option is Right for You?**

Full Container Load (FCL): A 20ft container holds approximately 18–20 MT of psyllium husk in 25 kg PP bags, or 15–17 MT in HDPE drums. FCL is the most cost-effective option per MT — freight is priced per container, not per kg. For regular buyers consuming 15+ MT per order, FCL is always the better choice.

Less than Container Load (LCL): For quantities under 3–5 MT, LCL consolidation is more economical than booking a full container. Your cargo shares a container with other shippers. LCL is ideal for trial orders, smaller supplement brands starting a new product, or buyers in markets with lower demand.

**MOQ (Minimum Order Quantity) Reality Check**

Standard MOQ from most Indian psyllium exporters is 1 MT. At Amar Herbal Origins:
- Sample orders: 100g–500g (free of charge for qualified buyers)
- Trial orders: 100–500 kg (LCL shipment)
- Regular commercial: 1 MT (minimum)
- FCL pricing: 15+ MT for optimal per-MT cost

For private label orders, MOQ is 500 kg. Organic grade MOQ is 500 kg.

**Lead Times: What to Realistically Expect**

Many buyers underestimate total lead time. Here's the realistic breakdown:
- Sample dispatch: 2–3 business days after sample approval
- Production lead time: 7–10 business days (for standard grades in stock), up to 14 days for custom specifications
- Quality testing: 2–3 days (in-house), 5–7 days (third-party lab, if required)
- Export documentation: 2–3 business days
- Sea freight: 7–28 days depending on destination

Total from order to port of origin: 12–17 business days. Add sea freight for total landed time.

**Safety Stock Strategy**

For consistent supply, buyers should maintain 2–3 months of safety stock. The psyllium market has seasonal price fluctuations and supply variations based on harvest cycles. Building safety stock during the post-harvest season (April–July) when prices are typically lowest is a smart procurement strategy.

**Blanket Order Agreements**

For buyers requiring 50+ MT annually, we offer blanket supply agreements with quarterly delivery schedules, fixed pricing for the agreement period, and priority production scheduling. Contact our export team to discuss annual supply agreements.`,
  },
  {
    slug: 'psyllium-husk-hs-code-import-duties',
    title: 'Psyllium Husk HS Code & Import Duties by Country (2026) — India Exporter Guide',
    excerpt:
      'Complete 2026 reference: psyllium husk HS code (1211.90), import duty rates for USA, EU, UAE, Germany, Australia & more. India-UAE CEPA = 0% duty. Request a quote from a GST-registered Gujarat exporter.',
    date: 'June 2026',
    readTime: '5 min read',
    category: 'Export Guide',
    keywords: ['psyllium husk hs code', 'psyllium husk import duty', 'isabgol customs tariff', 'psyllium husk import tax'],
    body: `Understanding the correct HS code classification and applicable import duties is essential for psyllium husk buyers to calculate accurate landed costs and leverage trade agreement preferences.

**Psyllium Husk HS Code**

The international HS code for psyllium husk (Isabgol) is:

- HS Code: 1211.90 (Plants and parts of plants, including seeds and fruits, of a kind used primarily in perfumery, in pharmacy or for insecticidal, fungicidal or similar purposes — Other)
- More specifically: 1211.90.90 in many countries' tariff schedules
- Indian Export Code (ITC-HS): 12119099 (covers psyllium husk, seeds, and powder)

Always confirm with your customs broker for the exact local tariff sub-heading in your country.

**Import Duty Rates by Country (2025 Reference)**

USA: Most Favored Nation (MFN) rate for psyllium husk is 0% — no import duty under HS 1211.90.

European Union: MFN rate 0% under CN code 1211 90 86. India does not currently have an FTA with EU, but the 0% MFN rate means no duty advantage is missed.

UAE: 0% under India-UAE CEPA (signed 2022). Psyllium husk has been granted zero duty preference, a significant cost advantage.

United Kingdom: 0% MFN rate post-Brexit under HS 1211 90.

Canada: 0% MFN rate. India-Canada Comprehensive Economic Partnership Agreement (CETA) negotiations ongoing — no current preferential rate needed as MFN is already 0%.

Japan: Under India-Japan CEPA, psyllium husk enjoys preferential tariff. Base MFN rate is approximately 3% — CEPA reduces this to 0–1.5%.

Australia: 0% under India-Australia Economic Cooperation and Trade Agreement (ECTA), signed 2022.

Saudi Arabia: GCC common external tariff of 5% MFN. No current India-GCC FTA, but India-UAE CEPA may be leveraged via UAE hub imports for some buyers.

**Documentation for Duty Preferences**

For countries where India has trade agreements (UAE, Australia, Japan), you need a Certificate of Origin from APEDA or Chamber of Commerce (in the format required by the agreement) to claim preferential duties.

**Important Note**

Tariff rates change. Always verify current rates with your import customs broker before finalizing your cost calculations. This information is provided for guidance only.`,
  },
  {
    slug: 'pharmaceutical-grade-psyllium-husk-guide',
    title: 'Pharmaceutical Grade Psyllium Husk: USP, BP & Ph. Eur. Standards Explained',
    excerpt:
      'Pharma companies require psyllium husk that meets USP, BP, or European Pharmacopoeia specifications. Learn what "pharma grade" means for psyllium, what testing is required, and how to verify compliance.',
    date: 'March 2025',
    readTime: '8 min read',
    category: 'Quality & Certs',
    keywords: ['pharmaceutical grade psyllium husk', 'psyllium husk usp grade', 'psyllium husk bp grade', 'pharmacopoeia psyllium'],
    body: `Psyllium husk is an official pharmacopoeial ingredient with monographs in the United States Pharmacopeia (USP), British Pharmacopoeia (BP), and European Pharmacopoeia (Ph. Eur.). Pharmaceutical manufacturers require psyllium that meets these specifications — not just food-grade quality standards.

**What Does "Pharma Grade" Mean for Psyllium Husk?**

Pharma grade psyllium husk meets specifications set by recognized pharmacopoeias and is manufactured under GMP (Good Manufacturing Practice) conditions. It requires stricter quality controls, lower microbial limits, tighter assay specifications, and GMP facility documentation compared to food-grade product.

**USP Monograph (United States Pharmacopeia)**

The USP Psyllium Husk monograph specifies:
- Identification test confirming Plantago ovata origin
- Swelling power: Not less than 9 mL/g for powder; not less than 40 mL/g for whole husk (per USP method)
- Acid insoluble ash: Not more than 1.0%
- Total ash: Not more than 4.0%
- Microbial limits: Stricter than food grade — total aerobic count ≤ 10,000 CFU/g; E. coli absent in 10g; Salmonella absent in 25g
- Heavy metals: Per USP <231> or <2232> limits

**BP Monograph (British Pharmacopoeia)**

The BP uses the name "Ispaghula Husk" (the official BP name for psyllium husk). Key specifications:
- Swelling index: Not less than 40 mL/g
- Foreign matter: Not more than 3.0%
- Total ash: Not more than 5.0%
- Complete microbial testing per BP 2.6.12

**European Pharmacopoeia (Ph. Eur.) — "Ispaghula Husk"**

The Ph. Eur. monograph 0858 for Ispaghula Husk is used by European pharmaceutical manufacturers including in Germany, France, Italy, Spain, Netherlands, and all EU member states. Key requirement: Swelling index ≥ 40.

**What Documentation Do Pharma Buyers Need?**

For pharma applications, suppliers must provide:
(1) Batch-specific COA showing pharmacopoeial compliance with all test results
(2) GMP certificate or ISO 22000 certification
(3) Reference to specific pharmacopoeia tested against
(4) Microbial testing per pharmacopoeial limits
(5) Heavy metals per pharmacopoeial specifications
(6) Residual solvents declaration (if applicable)
(7) TSE/BSE statement (confirming no animal-derived materials)

Amar Herbal Origins supplies pharma-grade psyllium husk tested against USP, BP, and Ph. Eur. specifications. Our COA includes all pharmacopoeial test parameters with test methods cited. Full pharma-grade documentation package provided on request.`,
  },
  {
    slug: 'psyllium-husk-vs-inulin-comparison',
    title: 'Psyllium Husk vs Inulin vs Guar Gum: Which Fiber for Your Product?',
    excerpt:
      'Comparing psyllium husk with other popular dietary fibers for supplement and food formulations. Understand the functional differences, cost comparison, and best application for each ingredient.',
    date: 'February 2025',
    readTime: '6 min read',
    category: 'Sourcing',
    keywords: ['psyllium husk vs inulin', 'psyllium husk fiber comparison', 'dietary fiber ingredient comparison', 'psyllium vs guar gum'],
    body: `Supplement formulators and food product developers often evaluate psyllium husk against other dietary fiber options: inulin, guar gum, methylcellulose, and oat fiber. Here's a functional comparison to help you choose the right ingredient for your application.

**Psyllium Husk — The Benchmark Soluble Fiber**

Psyllium husk is the gold standard dietary fiber ingredient for bowel regularity, cholesterol management, and blood sugar control. Its unique gel-forming properties come from the arabinoxylans in the seed husk of Plantago ovata.

FDA-approved health claims for psyllium husk:
- "May reduce the risk of heart disease" (via cholesterol reduction)
- European EFSA: Reduction of blood cholesterol levels (if ≥7g/day psyllium seed husk)
- Japan FOSHU: Cholesterol management

**vs. Inulin (Chicory Root Fiber)**

Inulin is a prebiotic fiber fermented by gut bacteria. Key differences versus psyllium:
- Mechanism: Prebiotic (feeds gut bacteria) vs. psyllium's gel-forming (mechanical effect)
- Applications: Psyllium is better for laxative effect and cholesterol; inulin is better for microbiome support
- Price: Inulin (especially short-chain FOS) is typically 2–3x the cost of psyllium husk
- Tolerability: Inulin can cause bloating/gas at higher doses; psyllium is generally better tolerated
- Health claims: Different claims — inulin for prebiotic/microbiome, psyllium for cholesterol/bowel

**vs. Guar Gum**

Guar gum is derived from the endosperm of guar beans grown in India and Pakistan. Comparison:
- Source: Guar (Cyamopsis tetragonoloba) vs. Psyllium (Plantago ovata)
- Function: Both soluble fibers; guar has strong thickening/gelling for food applications
- Applications: Guar is more used as a food thickener; psyllium is better for supplement fiber applications
- Price: Guar gum is generally cheaper than psyllium husk per kg
- Health claims: Psyllium has significantly more regulatory-approved health claims than guar

**vs. Oat Fiber**

Oat fiber (beta-glucan from oat bran) is another soluble fiber with heart health claims. Psyllium advantages: more concentrated fiber, better swelling index, lower doses needed for efficacy.

**Best Application Guide**

| Application | Best Fiber |
|-------------|------------|
| Bowel regularity/laxative | Psyllium Husk |
| Cholesterol reduction | Psyllium Husk |
| Blood sugar management | Psyllium Husk |
| Prebiotic/gut microbiome | Inulin |
| Food thickening/stabilization | Guar Gum |
| Baked goods fiber enrichment | Oat Fiber |

For B2B bulk supply of psyllium husk for supplement and food applications, contact Amar Herbal Origins for pricing and samples.`,
  },
  {
    slug: 'psyllium-husk-seeds-export-india',
    title: 'Psyllium Seeds vs Psyllium Husk: Export Guide for Raw Material Buyers',
    excerpt:
      'Psyllium seeds (Isabgol seeds) and psyllium husk are different products with different uses and buyers. This guide explains the difference, who buys seeds, and how to source psyllium seeds from India.',
    date: 'January 2025',
    readTime: '5 min read',
    category: 'Sourcing',
    keywords: ['psyllium seeds exporter india', 'isabgol seeds export', 'psyllium seeds vs husk', 'plantago ovata seeds export'],
    body: `Psyllium seeds (Isabgol seeds or Plantago ovata seeds) are the whole seeds of the psyllium plant before the husk has been separated. They are a different commercial product from psyllium husk and serve different applications and markets.

**What Are Psyllium Seeds?**

Psyllium seeds are the complete seed of Plantago ovata, including both the husk (outer seed coat) and the seed kernel. The seed is approximately 1.5–3.5 mm in length, oval/boat-shaped, and ranges in color from pale pink to reddish-brown. The husk accounts for approximately 30% of the seed weight — the rest is the seed kernel (endosperm).

**Why Would Someone Buy Psyllium Seeds Instead of Husk?**

Several applications require whole psyllium seeds:

(1) Seed Oil Extraction: The psyllium seed kernel contains approximately 5–6% fixed oil (Plantago ovata seed oil), rich in fatty acids. This oil has applications in cosmetics, pharmaceuticals, and specialty food products. Seed oil extractors purchase psyllium seeds in bulk.

(2) Traditional Medicine: Psyllium seeds are used in Ayurvedic and traditional medicine formulations (particularly in India and the Middle East) where the whole seed is the specified form.

(3) Germination/Agricultural Use: Seeds for growing psyllium plants (for research or commercial farming) require whole seeds.

(4) Seed Separation Plants: Some processors purchase psyllium seeds to extract/separate the husk in their own facilities.

**Quality Parameters for Psyllium Seeds**

Unlike husk (which is graded mainly by swelling factor), psyllium seeds are graded by:
- Germination percentage (for agricultural use)
- Purity (% pure seeds)
- Moisture content (max 8%)
- Oil content (for extraction purposes)
- Color (pale/uniform seeds command premium)

**Export Volume and Pricing**

Psyllium seeds are exported from India in significantly smaller volumes than psyllium husk. The main buyer countries are Iran (largest buyer of Indian psyllium seeds), Saudi Arabia, UAE, and select European extraction companies.

Pricing for psyllium seeds is typically 30–40% lower per MT than psyllium husk, reflecting the difference in processing and fiber content.

Amar Herbal Origins supplies both psyllium husk and psyllium seeds from Gujarat. Contact us to discuss seed specifications and pricing for your specific application.`,
  },
  {
    slug: 'organic-psyllium-certification-verification-guide',
    title: 'How to Verify Your Organic Psyllium Supplier\'s Certifications',
    excerpt:
      'Fraudulent organic certificates are a real risk in the psyllium trade. This guide shows you exactly how to verify USDA NOP, EU Organic, and India Organic certificates before placing your order.',
    date: 'December 2024',
    readTime: '6 min read',
    category: 'Quality & Certs',
    keywords: ['verify organic psyllium supplier', 'organic psyllium certification verification', 'fake organic certificate india', 'usda organic supplier india verification'],
    body: `One of the most important due diligence steps for organic psyllium buyers is verifying that your supplier's organic certificates are genuine, current, and cover the specific product and scope you're purchasing. Certificate fraud is a documented problem in the organic ingredient trade.

**Why Certificate Verification Matters**

A fraudulent or expired organic certificate exposes your business to: (1) regulatory non-compliance — your organic product labels become false claims; (2) financial loss — you paid organic premium pricing for conventional product; (3) brand damage — organic product recalls are highly public events.

**Verifying USDA NOP Certification**

The USDA maintains a public Organic Integrity Database at ams.usda.gov/organic-integrity. To verify a USDA NOP certificate:
1. Go to ams.usda.gov/organic-integrity
2. Search by company/certificate number
3. Confirm the operation name matches your supplier
4. Check the certificate expiration date (must be current)
5. Verify the scope includes the specific product and processing/handling activities

A valid USDA NOP certificate lists the specific operations covered (farming, processing, handling) and specific products. If the certificate doesn't specifically cover psyllium husk processing, the product cannot legally be sold as USDA Organic in the USA.

**Verifying EU Organic Certification**

EU Organic certificates are issued by national certification bodies (e.g., ECOCERT, Soil Association, Bioagricert, Control Union). To verify:
1. Ask the supplier for the full certificate (not just a logo/statement)
2. Note the certifying body name and certificate number
3. Search the certifying body's online certificate database
4. Check certificate validity period and scope
5. For Indian exporters, the certificate should be issued under EU Regulation (EU) 2018/848

**Red Flags — Signs of Certificate Fraud**

- Low-resolution PDF that appears scanned multiple times
- Certificate date doesn't match current year
- Scope vague — doesn't specifically mention the product form you're buying
- Certifying body is unfamiliar or not accredited
- Supplier refuses to share the full original certificate
- Certificate number doesn't match when you search the database

**Processing Certificate vs. Farm Certificate**

A common oversight: buyers verify the farm's organic certificate but not the processor's organic certificate. The processing facility must also be certified organic. The farm and processing operations can have separate certificates from the same certifying body.

At Amar Herbal Origins, we provide current USDA NOP and EU Organic certificates covering our processing facility. Both are verifiable on the respective certifying body databases and provided upfront with any sample request. Encourage any buyer to verify ours before committing.`,
  },
  {
    slug: 'psyllium-husk-supplier-australia',
    title: 'Psyllium Husk Supplier Australia: TGA, ACO & FSANZ Requirements Guide',
    excerpt:
      'Australia\'s psyllium husk market is regulated by TGA for therapeutic products and FSANZ for food applications. This guide explains exactly what Australian buyers need from their Indian psyllium supplier.',
    date: 'November 2024',
    readTime: '6 min read',
    category: 'Market Intelligence',
    keywords: ['psyllium husk supplier australia', 'psyllium husk tga australia', 'organic psyllium aco australia', 'bulk psyllium australia'],
    body: `Australia is a premium market for psyllium husk, with strong demand from both the therapeutic goods sector (TGA-regulated) and the natural food industry (FSANZ-regulated). Australian buyers have among the highest quality expectations globally, making supplier selection critical.

**Two Regulatory Streams in Australia**

Unlike many countries, Australia has a clear bifurcation for psyllium husk applications:

Stream 1 — Therapeutic Goods (TGA): Psyllium husk used in listed medicines (ARTG listed complementary medicines) is regulated by the Therapeutic Goods Administration (TGA). These include fiber supplements, laxative preparations, and cholesterol management supplements sold in pharmacies and health stores.

Stream 2 — Food Standard (FSANZ): Psyllium used as a food ingredient or in functional foods follows the Australia New Zealand Food Standards Code.

**TGA Requirements for Psyllium Husk Suppliers**

For TGA-listed medicines, the active ingredient (psyllium husk) must meet specific quality standards:

- Meet BP (British Pharmacopoeia) or USP specifications for Ispaghula Husk
- GMP-compliant manufacturing — Evidence of GMP compliance
- Full COA including all pharmacopoeial test parameters
- Batch-specific testing with specific reference to TGA-required tests
- Certificates of Conformity from an accredited laboratory

Australian TGA sponsors (product license holders) need their psyllium supplier to provide a Manufacturer's Certificate of Conformity and willingness to undergo TGA facility audits or desk-based quality system assessment.

**ACO (Australian Certified Organic) for Organic Psyllium**

Australia's leading organic certification body is ACO (Australian Certified Organic). For organic psyllium husk claims in Australia:

Under ACO's International Recognition Programme, USDA NOP and EU Organic certified products are recognized. This means our USDA and EU certified organic psyllium can be used by ACO-certified Australian operators for their organic products.

When importing, the importer must be ACO certified and declare the foreign-certified organic ingredient through their ACO certification. The supplier's foreign organic certificate must be current and verifiable.

**AQIS (Australian Border Force) Import Requirements**

Psyllium husk imported into Australia must undergo biosecurity inspection by the Australian Border Force:
- Phytosanitary certificate from India's National Plant Protection Organisation
- Commodity must meet biosecurity import conditions
- BICON (Biosecurity Import Conditions) requirements apply

**Logistics to Australia**

FOB Mundra to Melbourne (AUMEL): 14–18 days. Sydney (AUSYD): 15–19 days. These are among the shorter transit times for Indian exports — closer than Europe.

Amar Herbal Origins exports to Australian TGA-licensed manufacturers and organic supplement brands. We provide the complete TGA and ACO documentation package on request.`,
  },
  {
    slug: 'sustainable-psyllium-sourcing-guide',
    title: 'Sustainable Psyllium Husk Sourcing: Farm Practices, Fair Trade & ESG for B2B Buyers',
    excerpt:
      'ESG-conscious supplement and food brands need more than just certifications. Learn about sustainable farming practices for psyllium in India, fair trade sourcing, water usage, and how to evaluate a supplier\'s sustainability credentials.',
    date: 'October 2024',
    readTime: '7 min read',
    category: 'Sourcing',
    keywords: ['sustainable psyllium husk sourcing', 'psyllium husk fair trade india', 'esg psyllium supplier', 'sustainable isabgol india'],
    body: `As ESG (Environmental, Social, and Governance) requirements intensify for consumer brands, supplement companies are increasingly asking about the sustainability credentials of their psyllium husk supply chain. Here's what sustainability looks like in the Gujarat psyllium farming ecosystem.

**Gujarat's Psyllium Farming — An Environmentally Suited Crop**

Psyllium (Plantago ovata) is inherently a sustainable crop for the Gujarat agro-climate:

Water efficiency: Psyllium is a Rabi (winter/dry season) crop harvested in February–April when irrigation need is low. The Gujarat farming belt requires significantly less water than summer crops. Compared to crops like cotton or sugarcane, psyllium has a lower water footprint per kg of output.

Minimal pesticide input: Psyllium is relatively pest-resistant compared to many commercial crops. In organic farming practice, zero synthetic pesticides are used — organic psyllium from Gujarat represents an authentically low-input production system.

Soil health: Psyllium is a rotation crop. Many Gujarat farmers rotate psyllium with wheat or cumin, which helps maintain soil health and reduces pest pressure naturally.

**Farm-Direct Sourcing vs. Spot Market**

Sustainability in psyllium sourcing starts with traceability. Traders who buy from the spot market (Unjha mandi auction) cannot guarantee which farm the product came from, farming practices, or whether fair price was paid to farmers.

At Amar Herbal Origins, we maintain contracted farming relationships with farmers in Gujarat and Rajasthan. This allows us to:
- Provide farm-origin traceability documentation
- Verify farming practices at source
- Ensure farmers receive fair, pre-agreed pricing — not spot market uncertainty

**What Sustainability Documentation Can We Provide?**

For ESG-conscious buyers, we can provide:
- Farm-direct sourcing declaration with farm location details
- Farming practice statement (pesticide/fertilizer usage for each season)
- Non-GMO declaration
- Organic certification (USDA NOP / EU Organic) — the most verifiable sustainability standard
- Water usage declaration
- Carbon footprint estimation (on request, based on farming, processing, and transport data)

**Social Sustainability — Farmer Welfare**

The Gujarat psyllium farming community is predominantly small-scale family farmers. Contracted farming provides:
- Price stability — farmers receive agreed floor prices regardless of market fluctuations
- Technical support on organic transition where applicable
- Direct income without middleman deductions from multiple trading layers

**What to Ask Your Psyllium Supplier About Sustainability**

When evaluating suppliers: (1) Can you provide farm-origin traceability? (2) Do you have contracted farming or spot market purchases? (3) What certifications do you hold for organic production? (4) Can you provide a non-GMO declaration? (5) What is your approach to farmer fair price?

We welcome sustainability audits and can arrange virtual or physical farm visits for qualified buyers committed to supply chain transparency.`,
  },
  // ── NEW: targets "wholesale psyllium" (pos 54), "bulk psyllium husk" (pos 27) ──
  {
    slug: 'wholesale-bulk-psyllium-husk-india',
    title: 'Wholesale Psyllium Husk from India: Bulk Pricing, MOQ & Supplier Guide 2026',
    excerpt:
      'Everything wholesale buyers need to know about sourcing bulk psyllium husk from India. FCL pricing tiers, minimum order quantities, how the Unjha wholesale market sets global prices, and what separates a genuine wholesale supplier from a trader.',
    date: 'June 2026',
    readTime: '7 min read',
    category: 'Sourcing',
    keywords: ['wholesale psyllium husk india', 'bulk psyllium husk supplier', 'psyllium husk wholesale price', 'buy psyllium husk in bulk india', 'psyllium husk bulk order india'],
    relatedLinks: [
      { label: 'Request a Wholesale Quote', href: '/en/contact', description: 'Get current FOB pricing for your quantity and grade' },
      { label: 'Bulk Procurement Guide', href: '/en/blog/psyllium-husk-bulk-procurement-guide', description: 'FCL vs LCL, lead times, and safety stock strategy' },
      { label: 'FOB Price Guide', href: '/en/blog/psyllium-husk-fob-price-guide', description: 'How Unjha mandi rates drive global psyllium prices' },
      { label: 'Psyllium Husk Manufacturer', href: '/en/manufacturer', description: 'ISO 22000 certified manufacturing facility in Gujarat' },
    ],
    faqs: [
      {
        q: 'What is the wholesale price of psyllium husk from India?',
        a: 'Wholesale psyllium husk FOB price from Mundra port (India) ranges from USD 1,100–1,450 per metric ton for conventional grade (99%) and USD 1,600–2,100 per MT for USDA/EU organic grade, depending on quantity, grade, and current Unjha APMC mandi rates. For FCL orders (18–20 MT), pricing is significantly better than LCL. Contact Amar Herbal Origins for a current wholesale quotation.',
      },
      {
        q: 'What is the minimum order quantity (MOQ) for wholesale psyllium husk from India?',
        a: 'Standard wholesale MOQ is 1 Metric Ton (1,000 kg) for conventional psyllium husk. For organic grade, MOQ is 500 kg. For the best per-MT wholesale pricing, FCL orders of 15–20 MT are optimal. Amar Herbal Origins also accommodates trial orders from 100 kg (LCL) before wholesale commitment.',
      },
      {
        q: 'How does the Unjha mandi set wholesale psyllium husk prices?',
        a: 'The Unjha APMC (Agricultural Produce Market Committee) in Gujarat is the global wholesale price benchmark for psyllium husk. Daily mandi arrivals and auction prices directly influence FOB export prices. Post-harvest (April–July), when new crop arrives at Unjha, wholesale prices typically soften. Pre-harvest (October–January), tight supply pushes prices higher.',
      },
      {
        q: 'What is the difference between buying wholesale from a manufacturer vs a trader?',
        a: 'A manufacturer like Amar Herbal Origins owns and operates its own processing facility — we are the source. A trader buys from multiple manufacturers and marks up the price. Buying wholesale direct from a Gujarat manufacturer gives you: better pricing (no trader margin), batch-specific traceability, direct access to certifications, and consistent quality control.',
      },
      {
        q: 'Can I get annual wholesale supply agreements for psyllium husk?',
        a: 'Yes. Amar Herbal Origins offers annual blanket supply agreements for buyers consuming 50+ MT per year. Benefits include: quarterly fixed pricing (partially hedging against Unjha mandi fluctuations), priority production scheduling, guaranteed delivery windows, and a dedicated export coordinator. Contact our team to discuss annual terms.',
      },
    ],
    body: `Sourcing wholesale psyllium husk from India is the most cost-effective way for supplement manufacturers, pharma companies, and food producers to secure their fiber ingredient supply. India produces over 85% of global psyllium and offers the most competitive wholesale pricing in the world.

**Understanding the Unjha Wholesale Market — Where Psyllium Prices Are Set**

The Unjha APMC (Agricultural Produce Market Committee) in Unjha, Mehsana district, Gujarat is the world's largest psyllium husk wholesale market. Every day, farmers bring their harvest to Unjha for auction. These mandi prices directly set the benchmark that all Indian psyllium exporters use for their FOB export quotes.

Wholesale buyers who understand Unjha mandi cycles get significantly better pricing. The key seasonal pattern:

Post-harvest (April–July): New crop floods the Unjha mandi, wholesale prices soften. Best time to buy in volume or sign forward contracts.

Pre-harvest (October–February): Old crop stock runs low, wholesale prices typically rise. Build safety stock before this window if possible.

**Wholesale Pricing Tiers — FCL vs LCL**

Wholesale pricing for psyllium husk from India operates in quantity tiers:

LCL (Less than Container Load): 100 kg – 3 MT. Higher per-MT price; suitable for first-time buyers or smaller brands.

Part Container: 5–14 MT. Mid-range pricing; cost-effective for growing supplement brands.

Full Container Load (FCL): 15–20 MT in a 20ft container. Best per-MT wholesale pricing; recommended for regular buyers.

Multi-Container: 20+ MT across multiple FCLs. Significant volume discount; negotiate annual supply agreements.

**Wholesale Grades Available**

Conventional Whole Psyllium Husk 99%: Most widely traded wholesale grade globally. Used in OTC fiber supplements, pharmaceutical formulations, functional foods.

Conventional Psyllium Husk Powder 99% (40-100 mesh): For capsule/tablet manufacturers. Commands 10–20% premium over whole husk.

Organic Psyllium Husk 99% (USDA NOP / EU Organic): For brands selling certified organic products. 20–40% premium over conventional. Separate wholesale supply from dedicated organic processing lines.

Blonde Psyllium Husk: Premium grade with lighter color, for visual-grade supplement products.

**What to Verify Before Buying Wholesale**

Before committing to a wholesale order: (1) Request batch-specific COA — not a generic spec sheet, (2) Verify the supplier's IEC (Import Export Code) is valid, (3) Confirm certifications on the issuing body's database, (4) Ask for client references in your target market, (5) Order a 100–500g sample before any wholesale commitment.

Amar Herbal Origins is a Gujarat-based wholesale psyllium husk manufacturer and exporter. We supply FCL and LCL wholesale orders to buyers across USA, Germany, Canada, UAE, Australia, Japan, and 25+ other markets. Contact us for current FOB wholesale pricing.`,
  },
  // ── NEW: targets "psyllium husk suppliers in india" (pos 76), "best psyllium supplier india" ──
  {
    slug: 'how-to-find-verify-psyllium-husk-suppliers-india',
    title: 'How to Find & Verify Psyllium Husk Suppliers in India — Due Diligence Guide 2026',
    excerpt:
      'Finding a genuine psyllium husk supplier in India requires more than a Google search. This due diligence guide shows you how to verify IEC codes, check APEDA registration, validate organic certificates, and test samples before committing to any Indian supplier.',
    date: 'June 2026',
    readTime: '8 min read',
    category: 'Sourcing',
    keywords: ['psyllium husk suppliers in india', 'how to find psyllium husk supplier india', 'verify psyllium supplier india', 'best psyllium husk supplier india', 'psyllium husk exporter india list'],
    relatedLinks: [
      { label: 'About Amar Herbal Origins', href: '/en/about', description: 'Our company credentials, certifications, and founding story' },
      { label: 'Quality & Certifications', href: '/en/quality', description: 'Our full certification portfolio and QC process' },
      { label: 'How to Import from India', href: '/en/blog/how-to-import-psyllium-husk-from-india', description: 'Step-by-step import process for first-time buyers' },
      { label: 'COA Reading Guide', href: '/en/blog/psyllium-husk-coa-guide', description: 'How to verify the Certificate of Analysis from any supplier' },
    ],
    faqs: [
      {
        q: 'How do I find genuine psyllium husk suppliers in India?',
        a: 'Start with B2B directories (Alibaba, IndiaMART, TradeIndia) for discovery, then verify each supplier independently: (1) Check IEC (Import Export Code) at DGFT website, (2) Verify APEDA registration for agricultural exporters, (3) Validate organic certificates on the certifying body database, (4) Request a sample with batch-specific COA before any purchase, (5) Ask for customer references in your market.',
      },
      {
        q: 'What is IEC and how do I verify an Indian psyllium supplier\'s IEC?',
        a: 'The Import Export Code (IEC) is a mandatory registration number issued by India\'s DGFT (Directorate General of Foreign Trade) to any entity legally exporting from India. You can verify any supplier\'s IEC at the DGFT website (dgft.gov.in). A supplier without a valid IEC cannot legally export psyllium husk.',
      },
      {
        q: 'How do I check if an Indian psyllium supplier is APEDA registered?',
        a: 'APEDA (Agricultural and Processed Food Products Export Development Authority) registers Indian agricultural exporters. You can verify APEDA registration at apeda.gov.in. APEDA registration is a credibility indicator for psyllium husk exporters — it indicates they are known to the Indian government\'s agricultural export authority.',
      },
      {
        q: 'What are the red flags when evaluating psyllium husk suppliers in India?',
        a: 'Key red flags: (1) Unwilling to share IEC or FSSAI license number, (2) Cannot provide batch-specific COA (only a generic "spec sheet"), (3) Organic certificate not verifiable on certifying body database, (4) No physical address or factory photos, (5) Price dramatically below market rate — often signals adulteration or grade mismatch, (6) Very slow response time or generic email templates.',
      },
    ],
    body: `India has thousands of psyllium husk exporters — ranging from genuine manufacturers with full certification to small traders with no processing capacity. This guide helps you navigate supplier discovery and verification efficiently.

**Step 1: Discovery — Where to Find Indian Psyllium Suppliers**

B2B Directories: Alibaba.com, IndiaMART.com, TradeIndia.com, and ExportersIndia.com list hundreds of Indian psyllium suppliers. These are starting points only — listings are self-reported and unverified.

Google Search: Search "[product] manufacturer exporter india" to find company websites directly. Companies with detailed websites, certifications pages, and blog content are more likely to be genuine manufacturers than pure traders.

Trade Events: Food Ingredients Asia, Natural Products Expo (USA), Biofach (Germany) — Indian psyllium exporters attend these events. Meeting in person accelerates due diligence.

APEDA Export Data: India's APEDA publishes export data that can be used to identify active exporters by product.

**Step 2: Verification — The 5-Point Check**

(1) IEC Verification: Every Indian exporter must have an Import Export Code (IEC) from DGFT. Verify at dgft.gov.in → Services → IEC Online. Enter the IEC number and confirm it matches the company name. No valid IEC = cannot legally export.

(2) FSSAI License: Verify at fssai.gov.in. Every food ingredient processor/exporter must be FSSAI licensed. The license number should be on their letterhead and COA.

(3) APEDA Registration: Verify at apeda.gov.in. Relevant for agricultural commodity exporters including psyllium husk.

(4) Organic Certification Verification: If the supplier claims USDA Organic: verify at ams.usda.gov/organic-integrity. If they claim EU Organic: verify with the named certifying body (EcoCert, Bioagricert, Control Union, etc.) directly.

(5) GST Registration: Verify at gstin.in. A legitimate Indian business has a valid GST registration (format: 2 digits state code + 10 digits PAN + 3 digits). Amar Herbal Origins GST: 24ICIPP6678D1Z4.

**Step 3: Sample Request and COA Evaluation**

Never commit to a bulk order without a sample. A credible supplier will:
- Provide a 100–500g sample free of charge for qualified buyers
- Include a batch-specific COA with the sample (from their in-house lab)
- Offer to arrange third-party testing at an accredited lab (SGS, Intertek, Bureau Veritas)

Test the sample in your own facility for: swelling factor, moisture, ash content, heavy metals, and microbiology.

**Step 4: Factory Visit or Virtual Tour**

For orders above $20,000, request a factory visit or virtual factory walkthrough (via video call). A genuine manufacturer will welcome this. Ask to see: raw material intake area, processing lines, QC lab, finished goods storage, and packaging area.

**Why Amar Herbal Origins?**

Amar Herbal Origins is a FSSAI, ISO 22000, APEDA, USDA Organic, EU Organic, Halal, and Kosher certified psyllium husk manufacturer in Amreli, Gujarat. Our IEC, FSSAI, APEDA, and organic certificates are all verifiable through official government and certifying body databases. We welcome due diligence — contact us to start the process.`,
  },
  // ── NEW: targets "psyllium husk price" (high commercial buyer intent) ──
  {
    slug: 'psyllium-husk-price-2026-india',
    title: 'Psyllium Husk Price 2026: Current Rates from India (Unjha Mandi Guide)',
    excerpt:
      'Current psyllium husk price reference for B2B buyers in 2026. Understand how Unjha mandi rates translate to FOB export prices, what grade premiums apply, and when is the best time of year to buy psyllium husk from India.',
    date: 'June 2026',
    readTime: '6 min read',
    category: 'Market Intelligence',
    keywords: ['psyllium husk price 2026', 'psyllium husk price india 2026', 'isabgol price today', 'psyllium husk current price india', 'unjha psyllium husk rate', 'psyllium husk market price'],
    relatedLinks: [
      { label: 'Request Current Pricing', href: '/en/contact', description: 'Get a live FOB quotation for your grade and quantity' },
      { label: 'FOB Price Factors Guide', href: '/en/blog/psyllium-husk-fob-price-guide', description: 'Deep dive on every factor that affects psyllium export pricing' },
      { label: 'Bulk Procurement Guide', href: '/en/blog/psyllium-husk-bulk-procurement-guide', description: 'FCL vs LCL, safety stock strategy, blanket orders' },
      { label: 'Psyllium Husk Exporter India', href: '/en/exporter', description: 'Export capabilities, certifications, and shipping information' },
    ],
    faqs: [
      {
        q: 'What is the price of psyllium husk from India in 2026?',
        a: 'Indicative psyllium husk FOB price from Mundra port, India in 2026: Conventional Whole Psyllium Husk 99% — USD 1,100–1,450/MT; Psyllium Husk Powder 99% — USD 1,300–1,650/MT; Organic Psyllium Husk 99% — USD 1,600–2,100/MT. These are indicative ranges — actual price depends on quantity, current Unjha mandi rates, and grade specifications. Contact Amar Herbal Origins for a live quotation.',
      },
      {
        q: 'What is the current isabgol price at Unjha mandi?',
        a: 'Unjha APMC mandi sets the daily benchmark price for psyllium husk (isabgol) in India. Spot prices at Unjha fluctuate based on crop arrivals, demand, and season. FOB export prices are derived from Unjha mandi rates plus processing, packaging, and freight margin. Contact us for the current Unjha mandi rate and corresponding FOB export price.',
      },
      {
        q: 'When is the best time to buy psyllium husk from India to get the lowest price?',
        a: 'The best time to buy psyllium husk from India for lowest price is April–July, immediately post-harvest. The psyllium Rabi crop is harvested in February–April in Gujarat. As fresh stock enters the Unjha mandi in April–May, prices typically soften. Buyers who place orders or forward contracts during this window get the season\'s best pricing. Avoid buying in October–January when old stock is tight and prices peak.',
      },
      {
        q: 'What causes psyllium husk prices to increase?',
        a: 'Psyllium husk prices increase due to: (1) Poor monsoon withdrawal causing low crop yields, (2) Excessive rain during harvest damaging the crop, (3) Export demand surge from USA, Europe, or Middle East, (4) INR appreciation against USD making Indian goods more expensive, (5) Global freight rate increases (shipping container costs), (6) Low carryforward stock from previous season.',
      },
      {
        q: 'How much does it cost to import psyllium husk from India to USA or Europe?',
        a: 'Landed cost calculation: FOB price (USD 1,100–1,650/MT) + sea freight (USD 80–150/MT to USA, USD 100–200/MT to Europe, varies by route and market conditions) + import duty (0% for USA, UK, EU for HS 1211.90) + customs clearance and inland freight. Total CIF landed cost typically ranges from USD 1,200–1,900/MT for conventional grade depending on destination and quantity.',
      },
    ],
    body: `Psyllium husk prices from India in 2026 are driven by the Unjha APMC mandi — the world's largest psyllium trading hub in Gujarat. Understanding how prices are set helps B2B buyers make better procurement decisions and time their orders for maximum cost efficiency.

**2026 Indicative Price Ranges — FOB Mundra, India**

Conventional Whole Psyllium Husk 99%: USD 1,100–1,450 per MT
Conventional Psyllium Husk Powder 99% (40-100 mesh): USD 1,300–1,650 per MT
Organic Whole Psyllium Husk 99% (USDA NOP / EU Organic): USD 1,600–2,000 per MT
Organic Psyllium Husk Powder 99%: USD 1,800–2,100 per MT
Psyllium Seeds (raw): USD 700–1,000 per MT
Blonde Psyllium Husk (premium grade): USD 1,400–1,700 per MT

Important: These are 2026 mid-year indicative ranges. Prices change weekly based on Unjha mandi conditions. Always contact us for the current live quotation before procurement planning.

**How the Unjha Mandi Sets Global Psyllium Prices**

The Unjha APMC (Agricultural Produce Market Committee) in Unjha, Mehsana, Gujarat is the world's psyllium price benchmark. Every working day, farmers and aggregators bring psyllium husk to Unjha for auction. The auction prices — called "mandi rates" — are public and updated daily.

India's FOB export prices for psyllium husk are calculated as: Unjha mandi rate + processing and cleaning costs + packaging + transport to port + exporter margin = FOB price.

When Unjha mandi rates rise, FOB export prices rise within days. When mandi rates fall, exporters can offer better pricing to international buyers.

**Seasonal Price Pattern — When to Buy**

Psyllium is a Rabi (winter) crop in Gujarat:

Sowing: October–November
Growing season: November–February
Harvest: February–April
Unjha arrival peak: April–June

Best buying window (lowest prices): April–July — fresh crop floods the mandi, prices soften.
Higher price period: October–January — old crop stock depletes, new crop not yet arrived.

Experienced procurement managers place forward contracts in May–June to lock in harvest-season pricing for Q3/Q4 delivery.

**Grade Premium Structure**

Starting from conventional whole husk as the base price:

- Psyllium Husk Powder: +10–20% (additional milling cost)
- Organic Grade: +20–40% (farming premium + certification cost)
- Blonde Grade: +10–15% (additional processing for lighter color)
- Private Label: +15–25% (custom packaging, design, and smaller runs)

**Landed Cost Calculation — Full Example**

For a US buyer importing 20 MT conventional psyllium husk 99%:

FOB Mundra: USD 1,250/MT × 20 MT = USD 25,000
Sea freight (FCL Mundra–Los Angeles): ~USD 2,500–3,000 per container
Import duty (USA): 0% (HS 1211.90)
Customs clearance: ~USD 300–500
Inland freight to warehouse: varies

Total CIF Los Angeles: approximately USD 27,000–28,500 for 20 MT = USD 1,350–1,425/MT landed.

Contact Amar Herbal Origins for current live pricing. We update our FOB quotations weekly based on current Unjha mandi rates.`,
  },
  // ── NEW: targets "castor oil manufacturer" (11 impressions @ pos 72) ──
  {
    slug: 'castor-oil-manufacturer-india',
    title: 'Castor Oil Manufacturer India: Cold-Pressed, Pharmaceutical & Cosmetic Grade Guide',
    excerpt:
      'India is the world\'s largest castor oil producer (60%+ of global supply). Amar Herbal Origins manufactures cold-pressed castor oil in pharmaceutical BP/USP grade, cosmetic grade, and industrial grade from Gujarat. MOQ 200L. ISO 22000, FSSAI certified.',
    date: 'June 2026',
    readTime: '6 min read',
    category: 'Export Guide',
    keywords: ['castor oil manufacturer india', 'castor oil manufacturer gujarat', 'cold pressed castor oil india', 'castor oil exporter india', 'bulk castor oil supplier india', 'pharmaceutical grade castor oil india', 'castor oil supplier india', 'ricinus communis oil manufacturer'],
    relatedLinks: [
      { label: 'View Castor Oil Products', href: '/en/oils/castor-oil', description: 'BP/USP pharmaceutical, cosmetic & industrial grade castor oil' },
      { label: 'Request a Quote', href: '/en/contact', description: 'Get FOB pricing for 200L+ bulk castor oil orders' },
      { label: 'Herbal Oils Export', href: '/en/oils', description: 'Castor oil and karanja oil — cold-pressed from Gujarat' },
      { label: 'White Label Oils', href: '/en/oils/white-label', description: 'Custom branded castor oil for your brand' },
    ],
    faqs: [
      {
        q: 'Which country is the largest producer of castor oil?',
        a: 'India is the world\'s largest producer and exporter of castor oil, accounting for over 60% of global production. The primary growing region is Gujarat, particularly the districts of Mehsana, Banaskantha, Sabarkantha, and Kutch. India\'s castor seed (Ricinus communis) cultivation benefits from the state\'s semi-arid climate and long growing season.',
      },
      {
        q: 'What is the difference between pharmaceutical grade and cosmetic grade castor oil?',
        a: 'Pharmaceutical grade castor oil (BP/USP) meets British Pharmacopoeia or United States Pharmacopeia standards for purity, acid value, iodine value, and saponification value. It is used as an excipient and active ingredient in oral and topical pharmaceutical formulations. Cosmetic grade castor oil meets cosmetic ingredient standards — typically very similar purity but without the full pharmacopoeial documentation package. Industrial grade is less refined and used in lubricants, biofuels, and bioplastics.',
      },
      {
        q: 'What is the MOQ for bulk castor oil from India?',
        a: 'Amar Herbal Origins supplies bulk castor oil from 200 litres (approximately 200 kg) as the minimum order. Full ISO tank or IBC tote orders (1,000L+) receive better per-litre pricing. For pharmaceutical grade: 200L drums (HDPE or stainless steel). Full flexi-tank container: approximately 20,000 litres. Contact us for current FOB pricing from Kandla or Mundra port.',
      },
      {
        q: 'What certifications does castor oil from India need for export?',
        a: 'Key certifications for castor oil export from India: FSSAI (for food/cosmetic grade), ISO 22000 (food safety management), COA from accredited lab (acid value, iodine value, ricinoleic acid content, heavy metals, moisture). For pharmaceutical use: BP/USP specification COA. For organic: USDA NOP or EU Organic certificate. For Halal markets: Halal certificate.',
      },
    ],
    body: `India is the world's dominant castor oil producer, accounting for over 60% of global supply. Gujarat's unique agro-climate — semi-arid with long growing seasons — is ideal for Ricinus communis (castor plant) cultivation. The result: India exports thousands of tonnes of castor oil annually to pharmaceutical companies, cosmetic brands, and industrial manufacturers across the world.

**Why Indian Castor Oil Dominates Global Supply**

The Ricinus communis plant thrives in Gujarat's districts of Mehsana, Banaskantha, Sabarkantha, and Kutch. These regions produce high-yield castor seed with consistent ricinoleic acid content (85–90%) — the key active fatty acid that makes castor oil commercially valuable.

India's castor oil advantages over other origins: (1) Scale — Gujarat processes more castor seed than any other region globally, (2) Technology — modern cold-press and solvent extraction facilities, (3) Competitive pricing — volume and proximity to raw material keeps costs low, (4) Export infrastructure — Kandla and Mundra ports are optimized for bulk oil exports.

**Castor Oil Grades — What Each Means**

Pharmaceutical BP/USP Grade: Meets British Pharmacopoeia or United States Pharmacopeia monograph specifications. Parameters: ricinoleic acid ≥85%, acid value ≤2.0 mg KOH/g, iodine value 82–90, specific gravity 0.953–0.965. Used as oral laxative, excipient, emollient, solvent in injectable formulations.

Cosmetic Grade: High purity castor oil for skin care, hair care, lip products (lipstick, gloss), mascara, and other personal care formulations. Slightly less stringent documentation than pharmaceutical but same purity level.

Food Grade: For use in food applications — castor oil as a mould-release agent, coating agent, and in certain food preservation applications. Must meet food safety standards.

Industrial Grade: For industrial applications including lubricants, hydraulic fluids, bioplastics, paints, and biofuel. Lower cost per litre, less refined.

**Applications of Castor Oil by Sector**

Pharmaceutical: Oral laxative (stimulant cathartic), IV solubility enhancer, emollient in ointments, excipient in capsule formulations, injection vehicle (when ultra-purified).

Cosmetics/Personal Care: The global castor oil cosmetics market is growing rapidly. Key applications: hair oil/serum, brow and lash growth products, lip gloss base, moisturizer, body oil, shampoo conditioner formulation.

Industrial: Castor oil-based polyols for polyurethane (PU) foam manufacturing, hydraulic fluids, greases, bio-lubricants, corrosion-resistant coatings, and as a plasticizer.

Biopesticide/Agriculture: Castor oil as a biopesticide carrier and emulsifier in organic farming.

**Karanja Oil — Complementary Industrial and Cosmetic Oil**

Amar Herbal Origins also supplies Karanja oil (Pongamia pinnata) alongside castor oil. Karanja oil contains unique insecticidal compounds (karanjin, pongamol) making it valuable for biopesticide formulations, mosquito repellents, and traditional hair care.

**Packaging and Logistics**

Standard packaging: 200L HDPE drums, 1,000L IBC totes, ISO flexitank. Export port: Kandla or Mundra. Transit to Rotterdam: 18–20 days. Transit to Los Angeles: 20–24 days. Transit to Jebel Ali (UAE): 7–10 days.

Amar Herbal Origins manufactures and exports cold-pressed castor oil and karanja oil from Gujarat, India. Contact us for current pricing and COA.`,
  },
  // ── NEW: targets "moringa powder exporter india" + herb export queries ──
  {
    slug: 'moringa-powder-exporter-india',
    title: 'Moringa Powder Exporter India: Spray-Dried Leaf Powder B2B Supplier Guide',
    excerpt:
      'India\'s moringa leaf powder (Moringa oleifera) is the world\'s leading source for superfood brands, supplement manufacturers, and nutraceutical companies. Amar Herbal Origins exports spray-dried moringa powder with 25–28% protein from Gujarat. ISO 22000, Organic certified.',
    date: 'June 2026',
    readTime: '5 min read',
    category: 'Export Guide',
    keywords: ['moringa powder exporter india', 'moringa leaf powder supplier india', 'bulk moringa powder india', 'moringa powder manufacturer india', 'organic moringa powder india', 'moringa oleifera powder export', 'moringa powder b2b supplier'],
    relatedLinks: [
      { label: 'View Herbs Catalogue', href: '/en/herbs', description: 'Moringa, amla, mint, oregano — dried herbs export from India' },
      { label: 'White Label Herbs', href: '/en/herbs/white-label', description: 'Custom branded moringa powder for your supplement brand' },
      { label: 'Request a Sample', href: '/en/contact', description: 'Free 50–100g moringa powder sample with COA' },
      { label: 'Amla Powder Export', href: '/en/herbs/amla', description: 'High-Vitamin C Indian gooseberry powder from Gujarat' },
    ],
    faqs: [
      {
        q: 'Which country is the largest exporter of moringa powder?',
        a: 'India is the world\'s largest producer and exporter of moringa powder (Moringa oleifera leaf powder). India accounts for approximately 80% of global moringa production, with key growing regions in Rajasthan, Gujarat, Andhra Pradesh, Tamil Nadu, and Maharashtra. Indian moringa powder is exported to USA, Europe, Japan, Australia, and Southeast Asia for use in superfood supplements and functional foods.',
      },
      {
        q: 'What is the protein content of moringa leaf powder from India?',
        a: 'Spray-dried moringa leaf powder from India typically contains 25–28% protein (dry weight basis). Moringa oleifera leaves contain all 9 essential amino acids, making it a complete plant protein source. Additionally, moringa powder contains high levels of iron (28 mg/100g), calcium (2000 mg/100g), Vitamin A, Vitamin C, and Vitamin E — all contributing to its "superfood" positioning.',
      },
      {
        q: 'What is the difference between spray-dried and freeze-dried moringa powder?',
        a: 'Spray-dried moringa powder: hot air is used to remove moisture rapidly. More affordable, widely available. Slight reduction in heat-sensitive nutrients (Vitamin C) but protein and mineral content is largely preserved. Freeze-dried moringa powder: moisture removed through sublimation at very low temperatures. Better nutrient retention, especially for Vitamin C and enzymes. Significantly more expensive — premium supplement applications. Amar Herbal Origins supplies spray-dried moringa powder as standard, with freeze-dried available on request.',
      },
    ],
    body: `Moringa oleifera — known as the "miracle tree" or "drumstick tree" in India — has become one of the world's fastest-growing superfood ingredients. India produces approximately 80% of global moringa supply, with Gujarat and Rajasthan being major processing hubs for export-grade moringa leaf powder.

**Why India is the Global Hub for Moringa Export**

Moringa oleifera grows prolifically in India's tropical and semi-arid climates. Key advantages of Indian-origin moringa powder:

1. Volume and consistency: India's large-scale moringa cultivation ensures year-round supply in export quantities
2. Cost competitiveness: India offers the lowest cost per kg of moringa powder globally
3. Processing infrastructure: Modern spray-drying and freeze-drying facilities in Gujarat and Rajasthan
4. Certification availability: USDA Organic, EU Organic, and ISO 22000 certified moringa from India

**Moringa Powder Nutritional Profile (per 100g spray-dried)**

Protein: 25–28%
Dietary Fiber: 20–25%
Iron: 28 mg (per Indian Government FSSAI data)
Calcium: ~2,000 mg
Vitamin A: ~9,000 IU
Vitamin C: 17–50 mg (varies by processing method — freeze-dried retains more)
Potassium: ~1,300 mg
Amino acids: all 9 essential amino acids present

**Applications**

Supplement industry: Green superfood powders, protein blends, detox formulas, multivitamin capsules
Functional food: Moringa-fortified pasta, bread, snack bars, tea
Cosmetics: Moringa seed oil (separate product) in skin care; moringa powder as face mask ingredient
Animal nutrition: Moringa as a livestock feed supplement in organic farming

**Quality Parameters for Export-Grade Moringa Powder**

Moisture: ≤8%
Protein: ≥25%
Ash: ≤10%
Heavy metals (lead ≤3 ppm, cadmium ≤0.5 ppm, arsenic ≤1 ppm per NLT standards)
Pesticide residues: EU MRL compliant
Microbiology: Total plate count ≤100,000 CFU/g, E. coli absent in 1g, Salmonella absent in 25g
Color: Dark green to olive green
Mesh: 80–100 mesh (fine powder)

**Packaging for Export**

Standard: 25 kg paper bags with inner PE liner, or 25 kg HDPE drums
Retail: 100g, 250g, 500g pouches for private label
MOQ: 100 kg bulk; 50 kg for private label

Amar Herbal Origins exports spray-dried moringa leaf powder from Gujarat, India. Organic certified grades available. Contact us for current pricing and COA.`,
  },
  // ── NEW: targets "turmeric exporter india", "cumin exporter india" ──
  {
    slug: 'indian-spices-exporter-india',
    title: 'Indian Spices Exporter: Turmeric, Cumin, Coriander & Fenugreek B2B Guide 2026',
    excerpt:
      'India exports 75%+ of the world\'s spices. This guide covers bulk spice sourcing from Gujarat — turmeric (2–5% curcumin), cumin seeds, coriander, fenugreek, and ajwain. ISO 22000, FSSAI certified. MOQ 500 kg. FOB Mundra. Free sample available.',
    date: 'June 2026',
    readTime: '7 min read',
    category: 'Export Guide',
    keywords: ['indian spices exporter india', 'turmeric exporter india', 'cumin seeds exporter india', 'coriander exporter india', 'fenugreek exporter india', 'bulk spices supplier india', 'spice exporter gujarat', 'ajwain exporter india'],
    relatedLinks: [
      { label: 'View Spices Catalogue', href: '/en/spices', description: 'Turmeric, cumin, coriander, fenugreek, ajwain — bulk B2B export' },
      { label: 'Turmeric Export Details', href: '/en/spices/turmeric', description: 'Alleppey, Rajapore, Salem turmeric — 2–5% curcumin guaranteed' },
      { label: 'Fenugreek Seeds Export', href: '/en/spices/fenugreek', description: 'Bulk fenugreek seeds from Gujarat and Rajasthan' },
      { label: 'White Label Spices', href: '/en/spices/white-label', description: 'Custom branded spice products for your brand' },
      { label: 'Request a Free Sample', href: '/en/contact', description: 'Get 50–100g samples of any spice with full COA' },
    ],
    faqs: [
      {
        q: 'Which state in India exports the most spices?',
        a: 'Gujarat, Rajasthan, Andhra Pradesh, and Kerala are India\'s top spice-producing and exporting states. Gujarat is particularly dominant for cumin seeds (jeera), fenugreek (methi), ajwain (carom seeds), and fennel. Rajasthan also produces large quantities of cumin and coriander. Kerala dominates black pepper and cardamom. For bulk spice export to international markets, Gujarat and Rajasthan are the primary sourcing regions for Amar Herbal Origins.',
      },
      {
        q: 'What is the curcumin content in Indian turmeric for export?',
        a: 'Indian turmeric varieties have different curcumin content: Alleppey variety (Kerala origin): 4–5% curcumin — premium grade for supplement and nutraceutical use. Rajapore variety (Maharashtra/Rajasthan): 3–4% curcumin — food grade standard. Salem variety (Tamil Nadu): 2–3% curcumin — food industry standard. Buyers requiring high curcumin content (4–5%) for supplement applications should specify Alleppey variety. All grades are tested by HPLC for curcumin content in the COA.',
      },
      {
        q: 'What is the HS code for cumin seeds export from India?',
        a: 'HS codes for Indian spice exports: Cumin seeds (whole): 0909.21.00. Cumin seeds (ground): 0909.22.00. Coriander seeds: 0909.21.00. Turmeric (whole): 0910.30.00. Turmeric (powder): 0910.30.00. Fenugreek seeds: 0909.61.00. Ajwain/carom seeds: 0909.21.00. Import duty: Most developed markets (USA, EU, UK, Australia) have 0% import duty on these HS codes for Indian spices under MFN tariff rates.',
      },
      {
        q: 'How do I buy bulk turmeric from India?',
        a: 'To buy bulk turmeric from India: (1) Specify the variety (Alleppey for high curcumin, Rajapore for food grade), (2) Specify form — whole fingers, slices, or powder, (3) Specify quantity — MOQ 500 kg for turmeric from Amar Herbal Origins, (4) Request a sample with COA showing curcumin content by HPLC, (5) Confirm certifications (organic if needed), (6) Receive proforma invoice and arrange payment. Amar Herbal Origins exports turmeric with full COA documentation from Gujarat, India.',
      },
    ],
    body: `India is the world's largest producer, consumer, and exporter of spices. The Indian spice trade dates back millennia — and today India exports approximately 4 million tonnes of spices annually worth over USD 4 billion. For B2B buyers worldwide, India remains the unrivaled source for authentic, high-quality spices at competitive prices.

**India's Spice Export Dominance**

India accounts for: 75% of global turmeric supply, 70% of global cumin supply, 30% of global coriander supply, 75% of global fenugreek supply, 90% of global ajwain supply. For buyers seeking authentic Indian spices, Gujarat and Rajasthan are the primary sourcing regions for cumin, fenugreek, ajwain, and coriander — while Kerala is dominant for turmeric and black pepper.

**Turmeric (Curcuma longa)**

Turmeric is India's most exported spice by value. Key applications: food coloring and flavoring, curcumin-based supplements and nutraceuticals, cosmetics and personal care, Ayurvedic formulations, functional food and beverage.

Grades by curcumin content:
- Alleppey Finger: 4–5% curcumin (premium supplement grade)
- Rajapore: 3–4% curcumin (standard food industry)
- Salem: 2–3% curcumin (economy food grade)

Forms available: whole fingers, slices, powder (80–100 mesh), spray-dried extract (95% curcumin standardized extract — separate product)

**Cumin Seeds (Cuminum cyminum — Jeera)**

India's Gujarat and Rajasthan produce the world's finest cumin seeds. Gujarat cumin (Bold and Eagle varieties) is globally preferred for its aroma, essential oil content (2.5–4%), and low defects. Key applications: food seasoning, essential oil distillation, Ayurvedic formulations, animal feed additives.

Cumin HS code: 0909.21.00 (whole), 0909.22.00 (ground)
MOQ: 500 kg | Export port: Mundra | Transit to EU: 18–24 days

**Coriander (Coriandrum sativum)**

Rajasthan produces the majority of India's coriander (dhania). Available forms: whole seeds, split seeds, powder. Applications: food seasoning, essential oil, pharmaceutical (digestive formulations).

**Fenugreek Seeds (Trigonella foenum-graecum — Methi)**

Gujarat's fenugreek is exported for supplement applications (blood sugar management, testosterone support) and food. Key compound: 4-hydroxyisoleucine. Indian fenugreek seed extract is a major nutraceutical ingredient.

**Ajwain / Carom Seeds (Trachyspermum ammi)**

Gujarat and Rajasthan are the primary producers. Ajwain contains thymol (40–50% of essential oil) — making it valuable for essential oil production, digestive supplement formulations, and traditional medicine.

**Documentation for Spice Export**

For any Indian spice export, we provide: COA (certificate of analysis), phytosanitary certificate, fumigation certificate, FSSAI certificate, COO (country of origin — FIEO/APEDA), organic certificate (where applicable), non-GMO declaration.

Amar Herbal Origins exports Indian spices — turmeric, cumin, coriander, fenugreek, and ajwain — from Gujarat, India. ISO 22000, FSSAI, and APEDA certified. Contact us for current pricing and samples.`,
  },
  // ── NEW: targets "psyllium husk hs code" (3–10 impressions near top-10) ──
  {
    slug: 'psyllium-husk-hs-code-import-duties',
    title: 'Psyllium Husk HS Code & Import Duties: Complete Guide for Global Buyers',
    excerpt:
      'Psyllium husk HS code is 1211.90.90. Import duty is 0% in USA, EU, UK, Canada, and Australia. This complete guide covers HS code classification, EUR 1 certificate for EU, customs documentation, and import duty rates in 20+ destination countries for psyllium husk and isabgol.',
    date: 'June 2026',
    readTime: '6 min read',
    category: 'Export Guide',
    keywords: ['psyllium husk hs code', 'isabgol hs code', 'psyllium husk import duty', 'ispaghula husk hs code', 'psyllium husk customs classification', 'psyllium husk hs code india', 'psyllium husk powder hs code', 'isabgol hs code india'],
    relatedLinks: [
      { label: 'Psyllium Husk Supplier Germany', href: '/en/blog/psyllium-husk-supplier-germany', description: 'EU compliance: EUR 1, Ph. Eur., EU Organic, pesticide MRL' },
      { label: 'How to Import from India', href: '/en/blog/how-to-import-psyllium-husk-from-india', description: 'Step-by-step guide: supplier, documentation, customs clearance' },
      { label: 'Certifications Guide', href: '/en/blog/psyllium-husk-certifications-export', description: 'Market-by-market certification requirements for psyllium export' },
      { label: 'Get Import Documentation', href: '/en/contact', description: 'Request full export documentation for your customs clearance' },
    ],
    faqs: [
      {
        q: 'What is the HS code for psyllium husk?',
        a: 'Psyllium husk HS code: 1211.90.90 (Chapter 12 — Oil seeds and oleaginous fruits; miscellaneous grains, seeds and fruit; industrial or medicinal plants; straw and fodder. Subheading: Plants and parts of plants — other). This HS code applies to both whole psyllium husk and psyllium husk powder. India export HS code: 1211 90 90. EU import CN code: 1211 90 86.',
      },
      {
        q: 'What is the import duty for psyllium husk in the USA?',
        a: 'USA import duty for psyllium husk (HS code 1211.90.90): 0% under MFN (Most Favored Nation) tariff. India is a beneficiary under GSP (Generalized System of Preferences — check current status as GSP has been subject to renewal). There are no anti-dumping duties on psyllium husk from India to USA. Import process: FDA Prior Notice is required for all food ingredient shipments to the USA.',
      },
      {
        q: 'What is the EU import duty for psyllium husk from India?',
        a: 'EU import duty for psyllium husk from India (HS code 1211.90.86 under EU Combined Nomenclature): 0% MFN tariff rate. The EUR 1 movement certificate (Form EUR 1) enables preferential duty treatment for qualifying Indian exports under EU-India GSP preferences. Indian psyllium exporters can issue EUR 1 certificates to support preferential duty entry into all 27 EU member states.',
      },
      {
        q: 'What is the HS code for psyllium husk powder?',
        a: 'Psyllium husk powder uses the same HS code as whole psyllium husk: 1211.90.90 (India HTS) / 1211.90.86 (EU CN). The powder form is classified identically to whole husk because it is derived from the same plant part. Import duty is also 0% in USA, EU, UK, Canada, and Australia for psyllium husk powder.',
      },
      {
        q: 'Does psyllium husk from India have any restrictions on import?',
        a: 'Psyllium husk imports are generally unrestricted in most markets. Key customs requirements: (1) Phytosanitary certificate from India NPPO, (2) Commercial invoice, packing list, bill of lading, (3) COA from accredited lab, (4) Organic certificate (if claiming organic), (5) Halal certificate (for UAE/GCC markets), (6) FDA Prior Notice (USA), (7) EUR 1 (for EU preferential tariff). Psyllium husk does not require import licenses or quota in USA, EU, UK, Canada, or Australia.',
      },
    ],
    body: `Understanding the HS code for psyllium husk and the applicable import duties in your destination country is essential for accurate landed cost calculation and customs clearance planning. This guide covers everything importers need to know.

**Psyllium Husk HS Code Classification**

The Harmonized System (HS) code for psyllium husk internationally is based on HS Chapter 12:

**HS Code: 1211.90.90** (India export HTS code)

Breaking down the classification:
- Chapter 12: Oil seeds and oleaginous fruits; miscellaneous grains, seeds and fruit; industrial or medicinal plants
- Heading 1211: Plants and parts of plants (including seeds and fruits), primarily used in perfumery, pharmacy, or for insecticidal, fungicidal, or similar purposes
- Subheading 1211.90: Other (not fresh/chilled, not liquorice root, not ginseng, not other specified)
- Final digit: 90 = other

This HS code applies to: whole psyllium husk, psyllium husk powder, blonde psyllium husk, organic psyllium husk, psyllium seeds, isabgol husk — all forms are classified under 1211.90.

**Import Duty Rates by Country (2026)**

| Destination | HS Code Used | MFN Duty Rate | Notes |
|---|---|---|---|
| USA | 1211.90.9090 | 0% | FDA Prior Notice required |
| EU (all 27 countries) | 1211 90 86 | 0% | EUR 1 enables GSP preference |
| United Kingdom | 1211 90 90 | 0% | Post-Brexit UK Global Tariff |
| Canada | 1211.90.90.00 | 0% | MFN rate for HS 1211.90 |
| Australia | 1211.90.90 | 0% | FTA with India not yet in force |
| UAE | 1211.90 | 0% | India-UAE CEPA (signed 2022) |
| Japan | 1211.90 | 0% | Under Japan-India CEPA |
| South Korea | 1211.90 | 0% | Under CEPA |
| Saudi Arabia | 1211.90 | 5% | GCC Unified Customs Tariff |

*Note: Verify current duty rates with your customs broker before import — tariff classifications and rates can change.*

**EUR 1 Certificate — For EU Buyers**

The EUR 1 movement certificate enables Indian exporters to claim preferential duty treatment for eligible products under EU-India GSP (Generalized System of Preferences). For psyllium husk:

1. Amar Herbal Origins issues the EUR 1 certificate with each EU-bound shipment
2. The certificate must be presented at EU customs entry
3. Preferential origin: India (IND)
4. Valid for 10 months from issue date

Even though the MFN duty is already 0%, having the EUR 1 provides additional documentation for origin declaration — important for compliance records and potential future tariff changes.

**India Customs Export Documentation (From India)**

Required for any psyllium husk export from India:
1. Shipping Bill (filed with Indian Customs)
2. Phytosanitary Certificate (from National Plant Protection Organisation, India)
3. COA (Certificate of Analysis) — from accredited lab
4. MSDS (Material Safety Data Sheet)
5. Commercial Invoice and Packing List
6. Bill of Lading (sea freight) or Airway Bill (air freight)
7. COO (Country of Origin certificate) — from FIEO or APEDA
8. Organic Certificate (if claiming organic grade)
9. Halal Certificate (for UAE/GCC markets)

**Japan Import — Positive List System**

Japan's Positive List System for pesticide residues requires comprehensive pesticide residue testing for all food ingredient imports. Psyllium husk imported into Japan must be tested against the Japan Positive List. Amar Herbal Origins provides Japan Positive List-compliant COA with comprehensive pesticide screening on request.

**USA — FDA Prior Notice**

All food ingredient shipments to the USA must be filed with the FDA via Prior Notice at least 2 hours before arrival by air or 8 hours before arrival by sea. Your customs broker typically files this. Amar Herbal Origins provides all FDA-required documentation (COA, country of origin, manufacturer details) to support your Prior Notice filing.

Contact Amar Herbal Origins for complete customs documentation packages for any destination market.`,
  },
];

export const BLOG_CATEGORIES = ['All', 'Export Guide', 'Market Intelligence', 'Quality & Certs', 'Packaging', 'Sourcing'] as const;
export type BlogCategory = typeof BLOG_CATEGORIES[number];

