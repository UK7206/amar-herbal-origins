// ============================================================
// lib/category-data.ts
// Central data store for all product categories
// ============================================================

export type ProductSpec = {
  label: string;
  value: string;
};

export type PackagingOption = {
  type: string;
  sizes: string;
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  botanicalName: string;
  description: string;
  image: string; // path in /public/images/products/
  specifications: ProductSpec[];
  moq: {
    quantity: string;
    samplePolicy: string;
    leadTime: string;
    paymentTerms: string;
  };
  packaging: PackagingOption[];
  applications: string[];
  keywords: string[];
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  colorTheme: string;
  colorLight: string;
  emoji: string;
  heroImage: string;
  products: Product[];
  whitelabelBenefits: string[];
  certifications: string[];
};

// ============================================================
// PSYLLIUM CATEGORY
// ============================================================
const psylliumCategory: Category = {
  id: 'psyllium',
  name: 'Psyllium',
  slug: 'psyllium',
  tagline: 'Premium Psyllium Husk & Isabgol Exporter from India',
  description:
    'Gujarat-grown Plantago ovata — pharmaceutical, food & nutraceutical grade. Lab-certified purity, bulk B2B supply to 30+ countries.',
  colorTheme: '#92400e',
  colorLight: '#fef3c7',
  emoji: '🌾',
  heroImage: '/images/categories/psyllium-hero.jpg',
  certifications: ['ISO 22000', 'FSSAI', 'USDA Organic', 'EU Organic', 'Halal', 'Kosher', 'GMP'],
  whitelabelBenefits: [
    'Custom branding & packaging',
    'Retail-ready pouches (100g–1kg)',
    'MOQ from 500 kg',
    'Lab COA with every batch',
    'USDA / EU Organic options',
    'Worldwide shipping',
  ],
  products: [
    {
      id: 'psyllium-husk',
      name: 'Psyllium Husk',
      slug: 'products',
      botanicalName: 'Plantago ovata Forsk.',
      description:
        'Whole psyllium husk (Isabgol) with high swell factor. Pharmaceutical and food grade. 99% purity, ideal for fiber supplements and OTC products.',
      image: '/images/products/psyllium/psyllium-husk.jpg',
      specifications: [
        { label: 'Botanical Name', value: 'Plantago ovata Forsk.' },
        { label: 'Part Used', value: 'Seed Husk' },
        { label: 'Form', value: 'Whole Husk' },
        { label: 'Color', value: 'Creamy White to Off-White' },
        { label: 'Purity', value: '99%, 98%, 95%, 85%' },
        { label: 'Moisture', value: 'Max 10%' },
        { label: 'Swell Volume', value: 'Min 40 ml/g' },
        { label: 'Ash Content', value: 'Max 4%' },
        { label: 'HS Code', value: '1211.90.90' },
        { label: 'Origin', value: 'Gujarat & Rajasthan, India' },
        { label: 'Certifications', value: 'FSSAI, ISO 22000, Halal, Kosher, GMP' },
      ],
      moq: {
        quantity: '1 Metric Ton (MT)',
        samplePolicy: 'Free sample available (courier charges extra)',
        leadTime: '7–14 working days',
        paymentTerms: 'T/T, LC at sight',
      },
      packaging: [
        { type: 'PP Woven Bags', sizes: '25 kg, 50 kg' },
        { type: 'HDPE Liner Bags', sizes: '25 kg' },
        { type: 'Private Label Pouches', sizes: '100g, 200g, 500g, 1 kg' },
        { type: 'Bulk Container', sizes: 'As per requirement' },
      ],
      applications: [
        'Pharmaceutical (laxative formulations)',
        'Food & Beverage (fiber enrichment)',
        'Nutraceutical supplements',
        'Animal Feed',
        'Cosmetics & Personal Care',
        'Export / Trading',
      ],
      keywords: [
        'psyllium husk exporter India',
        'isabgol exporter Gujarat',
        'psyllium husk manufacturer India',
        'bulk psyllium husk supplier',
        'psyllium husk wholesale India',
        'psyllium husk 99% purity',
        'ispaghula husk supplier',
        'psyllium husk B2B export',
        'plantago ovata exporter',
        'psyllium husk pharmaceutical grade',
      ],
    },
    {
      id: 'psyllium-husk-powder',
      name: 'Psyllium Husk Powder',
      slug: 'products',
      botanicalName: 'Plantago ovata Forsk.',
      description:
        'Fine milled psyllium husk powder, 40–100 mesh. Food and pharmaceutical grade. Used in gluten-free baking, fiber supplements, and health drinks.',
      image: '/images/products/psyllium/psyllium-husk-powder.jpg',
      specifications: [
        { label: 'Botanical Name', value: 'Plantago ovata Forsk.' },
        { label: 'Part Used', value: 'Seed Husk (milled)' },
        { label: 'Form', value: 'Powder' },
        { label: 'Mesh Size', value: '40, 60, 80, 100 mesh' },
        { label: 'Color', value: 'Creamy White to Light Beige' },
        { label: 'Purity', value: '99%, 98%, 95%' },
        { label: 'Moisture', value: 'Max 10%' },
        { label: 'Swell Volume', value: 'Min 35 ml/g' },
        { label: 'HS Code', value: '1211.90.90' },
        { label: 'Origin', value: 'Gujarat, India' },
        { label: 'Certifications', value: 'FSSAI, ISO 22000, Halal, Kosher, GMP, USDA Organic' },
      ],
      moq: {
        quantity: '500 kg',
        samplePolicy: 'Free sample available (courier charges extra)',
        leadTime: '7–14 working days',
        paymentTerms: 'T/T, LC at sight',
      },
      packaging: [
        { type: 'PP Woven Bags', sizes: '25 kg' },
        { type: 'Kraft Paper Bags', sizes: '25 kg' },
        { type: 'Private Label Pouches', sizes: '100g, 200g, 500g, 1 kg' },
        { type: 'Bulk Container', sizes: 'As per requirement' },
      ],
      applications: [
        'Fiber supplement capsules & tablets',
        'Gluten-free baking',
        'Health drinks & smoothies',
        'Pharmaceutical excipient',
        'Nutraceutical powder blends',
        'Food thickening agent',
      ],
      keywords: [
        'psyllium husk powder exporter India',
        'isabgol powder supplier',
        'psyllium powder bulk supplier',
        'psyllium husk powder manufacturer',
        'psyllium fiber powder export',
        'organic psyllium powder India',
        'psyllium husk powder 100 mesh',
        'ispaghula husk powder supplier',
      ],
    },
    {
      id: 'organic-psyllium',
      name: 'Organic Psyllium Husk',
      slug: 'organic',
      botanicalName: 'Plantago ovata Forsk.',
      description:
        'USDA NOP & EU Organic certified psyllium husk. Zero synthetic pesticides, dedicated organic processing lines, full traceability from Gujarat farms.',
      image: '/images/products/psyllium/psyllium-husk.jpg',
      specifications: [
        { label: 'Botanical Name', value: 'Plantago ovata Forsk.' },
        { label: 'Certification', value: 'USDA NOP, EU Organic (2018/848)' },
        { label: 'Form', value: 'Whole Husk / Powder' },
        { label: 'Purity', value: '99%' },
        { label: 'Moisture', value: 'Max 10%' },
        { label: 'Swell Volume', value: 'Min 40 ml/g' },
        { label: 'HS Code', value: '1211.90.90' },
        { label: 'Origin', value: 'Gujarat, India (certified organic farms)' },
        { label: 'Certifications', value: 'USDA Organic, EU Organic, FSSAI, ISO 22000' },
      ],
      moq: {
        quantity: '500 kg',
        samplePolicy: 'Free sample available (courier charges extra)',
        leadTime: '10–21 working days',
        paymentTerms: 'T/T, LC at sight',
      },
      packaging: [
        { type: 'Organic Certified PP Bags', sizes: '25 kg' },
        { type: 'Private Label Organic Pouches', sizes: '100g, 200g, 500g, 1 kg' },
        { type: 'Bulk Container', sizes: 'As per requirement' },
      ],
      applications: [
        'Certified organic supplements',
        'Organic food & beverage',
        'Natural health stores',
        'Organic private label brands',
        'EU & US organic retail',
      ],
      keywords: [
        'organic psyllium husk exporter India',
        'USDA organic psyllium husk supplier',
        'EU organic isabgol exporter',
        'certified organic psyllium husk',
        'organic psyllium husk bulk supplier',
        'organic ispaghula husk India',
      ],
    },
  ],
};

// ============================================================
// HERBS CATEGORY
// ============================================================
const herbsCategory: Category = {
  id: 'herbs',
  name: 'Herbs',
  slug: 'herbs',
  tagline: 'Premium Indian Herbs Exporter — Farm-Direct from Gujarat',
  description:
    'Moringa, oregano, mint, curry leaves, amla — quality-certified dried herbs in bulk for global buyers.',
  colorTheme: '#16a34a',
  colorLight: '#f0fdf4',
  emoji: '🌿',
  heroImage: '/images/categories/herbs.jpg',
  certifications: ['FSSAI', 'ISO 22000', 'GMP', 'USDA Organic (select)', 'Halal'],
  whitelabelBenefits: [
    'Custom herb blends available',
    'Retail-ready branded pouches',
    'MOQ from 100 kg per herb',
    'Lab COA with every batch',
    'Organic options available',
    'Worldwide shipping',
  ],
  products: [
    {
      id: 'moringa-powder',
      name: 'Moringa Powder',
      slug: 'moringa',
      botanicalName: 'Moringa oleifera',
      description:
        'Premium dried moringa leaf powder, rich in vitamins, minerals, and antioxidants. Used in health supplements, green drinks, and food fortification.',
      image: '/images/products/herbs/moringa.jpg',
      specifications: [
        { label: 'Botanical Name', value: 'Moringa oleifera Lam.' },
        { label: 'Part Used', value: 'Dried Leaf' },
        { label: 'Form', value: 'Powder / Dried Leaf' },
        { label: 'Color', value: 'Bright to Olive Green' },
        { label: 'Moisture', value: 'Max 8%' },
        { label: 'Mesh Size', value: '60–80 mesh (powder)' },
        { label: 'HS Code', value: '2106.90.99' },
        { label: 'Origin', value: 'Gujarat & Rajasthan, India' },
        { label: 'Certifications', value: 'FSSAI, ISO 22000, GMP, Halal' },
      ],
      moq: {
        quantity: '100 kg',
        samplePolicy: 'Free sample available (courier charges extra)',
        leadTime: '7–14 working days',
        paymentTerms: 'T/T, LC at sight',
      },
      packaging: [
        { type: 'Kraft Paper Bags', sizes: '25 kg' },
        { type: 'PP Woven Bags', sizes: '25 kg, 50 kg' },
        { type: 'Private Label Pouches', sizes: '100g, 200g, 500g' },
      ],
      applications: [
        'Health supplements & capsules',
        'Green smoothie blends',
        'Food fortification',
        'Nutraceuticals',
        'Cosmetics & skincare',
        'Animal feed',
      ],
      keywords: [
        'moringa powder exporter India',
        'moringa leaf powder bulk supplier',
        'moringa powder manufacturer Gujarat',
        'dried moringa powder wholesale',
        'organic moringa powder India',
        'moringa oleifera powder export',
      ],
    },
    {
      id: 'oregano',
      name: 'Dried Oregano',
      slug: 'oregano',
      botanicalName: 'Origanum vulgare',
      description:
        'Sun-dried oregano herb with strong aroma and flavor. Used in food processing, pizza seasonings, herbal teas, and pharmaceuticals.',
      image: '/images/products/herbs/oregano.jpg',
      specifications: [
        { label: 'Botanical Name', value: 'Origanum vulgare L.' },
        { label: 'Part Used', value: 'Dried Leaves & Flowers' },
        { label: 'Form', value: 'Whole / Crushed / Powder' },
        { label: 'Color', value: 'Grayish-green to Olive Green' },
        { label: 'Moisture', value: 'Max 10%' },
        { label: 'Volatile Oil', value: 'Min 1.5%' },
        { label: 'HS Code', value: '0910.99.90' },
        { label: 'Origin', value: 'India' },
        { label: 'Certifications', value: 'FSSAI, ISO 22000, Halal' },
      ],
      moq: {
        quantity: '100 kg',
        samplePolicy: 'Free sample available (courier charges extra)',
        leadTime: '7–14 working days',
        paymentTerms: 'T/T, LC at sight',
      },
      packaging: [
        { type: 'Kraft Paper Bags', sizes: '25 kg' },
        { type: 'PP Woven Bags', sizes: '25 kg' },
        { type: 'Private Label Pouches', sizes: '50g, 100g, 200g' },
      ],
      applications: [
        'Food seasoning & spice blends',
        'Pizza & pasta seasoning',
        'Herbal tea blends',
        'Pharmaceutical formulations',
        'Essential oil extraction',
        'Organic food industry',
      ],
      keywords: [
        'oregano herb exporter India',
        'dried oregano bulk supplier India',
        'oregano leaves exporter Gujarat',
        'oregano powder manufacturer India',
        'wholesale oregano supplier India',
      ],
    },
    {
      id: 'mint',
      name: 'Dried Mint',
      slug: 'mint',
      botanicalName: 'Mentha spicata / Mentha piperita',
      description:
        'Dried spearmint and peppermint leaves — bold menthol aroma. Used in teas, confectionery, pharmaceuticals, and personal care products.',
      image: '/images/products/herbs/mint.jpg',
      specifications: [
        { label: 'Botanical Name', value: 'Mentha spicata / Mentha piperita' },
        { label: 'Part Used', value: 'Dried Leaves' },
        { label: 'Form', value: 'Whole Leaf / Crushed / Powder' },
        { label: 'Color', value: 'Dark Green' },
        { label: 'Moisture', value: 'Max 10%' },
        { label: 'Volatile Oil', value: 'Min 1.0%' },
        { label: 'HS Code', value: '1211.90.50' },
        { label: 'Origin', value: 'Uttar Pradesh & Gujarat, India' },
        { label: 'Certifications', value: 'FSSAI, ISO 22000, Halal, GMP' },
      ],
      moq: {
        quantity: '100 kg',
        samplePolicy: 'Free sample available (courier charges extra)',
        leadTime: '7–14 working days',
        paymentTerms: 'T/T, LC at sight',
      },
      packaging: [
        { type: 'Kraft Paper Bags', sizes: '25 kg' },
        { type: 'PP Woven Bags', sizes: '25 kg' },
        { type: 'Private Label Pouches', sizes: '50g, 100g, 200g' },
      ],
      applications: [
        'Herbal tea & infusions',
        'Confectionery & chewing gum',
        'Toothpaste & oral care',
        'Pharmaceutical formulations',
        'Essential oil (menthol)',
        'Food flavoring',
      ],
      keywords: [
        'dried mint leaves exporter India',
        'spearmint supplier India bulk',
        'peppermint leaves wholesale India',
        'mint powder exporter Gujarat',
        'mentha leaves supplier India',
      ],
    },
    {
      id: 'curry-leaves',
      name: 'Curry Leaves',
      slug: 'curry-leaves',
      botanicalName: 'Murraya koenigii',
      description:
        'Fresh-dried curry leaves with intense aroma. Rich in antioxidants and alkaloids. Used in food, Ayurveda, and hair care products.',
      image: '/images/products/herbs/curry-leaves.jpg',
      specifications: [
        { label: 'Botanical Name', value: 'Murraya koenigii (L.) Spreng.' },
        { label: 'Part Used', value: 'Dried Leaves' },
        { label: 'Form', value: 'Whole Leaf / Powder' },
        { label: 'Color', value: 'Dark Green' },
        { label: 'Moisture', value: 'Max 8%' },
        { label: 'HS Code', value: '0910.99.90' },
        { label: 'Origin', value: 'South India & Gujarat, India' },
        { label: 'Certifications', value: 'FSSAI, GMP, Halal' },
      ],
      moq: {
        quantity: '50 kg',
        samplePolicy: 'Free sample available (courier charges extra)',
        leadTime: '7–14 working days',
        paymentTerms: 'T/T, LC at sight',
      },
      packaging: [
        { type: 'Kraft Paper Bags', sizes: '10 kg, 25 kg' },
        { type: 'Private Label Pouches', sizes: '50g, 100g' },
      ],
      applications: [
        'Indian food & curry seasoning',
        'Ayurvedic formulations',
        'Hair oil & haircare products',
        'Health supplements',
        'Essential oil extraction',
      ],
      keywords: [
        'curry leaves exporter India',
        'dried curry leaves bulk supplier',
        'curry leaf powder exporter',
        'murraya koenigii supplier India',
        'curry leaves wholesale India',
      ],
    },
    {
      id: 'amla',
      name: 'Amla (Indian Gooseberry)',
      slug: 'amla',
      botanicalName: 'Phyllanthus emblica',
      description:
        'Dried amla (Indian gooseberry) — one of the richest natural sources of Vitamin C. Available as dried fruit, powder, and extract for pharma and nutraceutical use.',
      image: '/images/products/herbs/amla.jpg',
      specifications: [
        { label: 'Botanical Name', value: 'Phyllanthus emblica L. (syn. Emblica officinalis)' },
        { label: 'Part Used', value: 'Dried Fruit / Powder / Extract' },
        { label: 'Form', value: 'Whole Dried / Powder / Extract' },
        { label: 'Color', value: 'Light Brown to Greenish Brown (dried)' },
        { label: 'Moisture', value: 'Max 8%' },
        { label: 'Vitamin C', value: 'Min 400 mg/100g (natural)' },
        { label: 'HS Code', value: '0813.40.90' },
        { label: 'Origin', value: 'Madhya Pradesh & Gujarat, India' },
        { label: 'Certifications', value: 'FSSAI, ISO 22000, GMP, Halal, Kosher' },
      ],
      moq: {
        quantity: '100 kg',
        samplePolicy: 'Free sample available (courier charges extra)',
        leadTime: '7–14 working days',
        paymentTerms: 'T/T, LC at sight',
      },
      packaging: [
        { type: 'PP Woven Bags', sizes: '25 kg, 50 kg' },
        { type: 'Kraft Paper Bags', sizes: '25 kg' },
        { type: 'Private Label Pouches', sizes: '100g, 200g, 500g' },
      ],
      applications: [
        'Ayurvedic medicine (Triphala, Chyawanprash)',
        'Vitamin C supplements',
        'Hair oil & haircare',
        'Skincare & cosmetics',
        'Nutraceutical blends',
        'Food & beverage fortification',
      ],
      keywords: [
        'amla powder exporter India',
        'Indian gooseberry powder supplier',
        'amla exporter Gujarat',
        'emblica officinalis supplier',
        'dried amla bulk exporter India',
        'amla extract manufacturer India',
      ],
    },
  ],
};

// ============================================================
// SPICES CATEGORY
// ============================================================
const spicesCategory: Category = {
  id: 'spices',
  name: 'Spices & Seeds',
  slug: 'spices',
  tagline: 'Premium Indian Spices Exporter — Authentic Gujarat Flavors',
  description:
    'Turmeric, ajwain, fenugreek, cumin, coriander — lab-certified, cleanly processed, bulk B2B export worldwide.',
  colorTheme: '#b45309',
  colorLight: '#fffbeb',
  emoji: '🌶️',
  heroImage: '/images/categories/spices.jpg',
  certifications: ['FSSAI', 'ISO 22000', 'GMP', 'USDA Organic (select)', 'Halal', 'Kosher'],
  whitelabelBenefits: [
    'Custom spice blends available',
    'Branded retail packaging',
    'MOQ from 100 kg per spice',
    'Lab COA with every batch',
    'Organic & conventional options',
    'Worldwide shipping',
  ],
  products: [
    {
      id: 'turmeric',
      name: 'Turmeric Powder',
      slug: 'turmeric',
      botanicalName: 'Curcuma longa',
      description:
        'Premium turmeric powder with high curcumin content (3–5%). Bright yellow, finely ground, used in food, pharmaceuticals, and cosmetics.',
      image: '/images/products/spices/turmeric.jpg',
      specifications: [
        { label: 'Botanical Name', value: 'Curcuma longa L.' },
        { label: 'Part Used', value: 'Rhizome (dried & ground)' },
        { label: 'Form', value: 'Powder / Whole Fingers' },
        { label: 'Color', value: 'Bright Yellow-Orange' },
        { label: 'Curcumin Content', value: '3–5%' },
        { label: 'Moisture', value: 'Max 10%' },
        { label: 'Mesh Size', value: '40, 60, 80 mesh' },
        { label: 'HS Code', value: '0910.30.00' },
        { label: 'Origin', value: 'Gujarat & Andhra Pradesh, India' },
        { label: 'Certifications', value: 'FSSAI, ISO 22000, Halal, Kosher, GMP' },
      ],
      moq: {
        quantity: '500 kg',
        samplePolicy: 'Free sample available (courier charges extra)',
        leadTime: '7–14 working days',
        paymentTerms: 'T/T, LC at sight',
      },
      packaging: [
        { type: 'PP Woven Bags', sizes: '25 kg, 50 kg' },
        { type: 'Kraft Paper Bags', sizes: '25 kg' },
        { type: 'Private Label Pouches', sizes: '100g, 200g, 500g, 1 kg' },
        { type: 'Bulk Container', sizes: 'As per requirement' },
      ],
      applications: [
        'Food industry (curry, spice blends)',
        'Pharmaceutical (anti-inflammatory)',
        'Nutraceutical supplements',
        'Cosmetics & skincare',
        'Natural dyes & colorants',
        'Ayurvedic medicines',
      ],
      keywords: [
        'turmeric powder exporter India',
        'turmeric powder bulk supplier Gujarat',
        'curcumin rich turmeric exporter',
        'turmeric manufacturer India',
        'organic turmeric powder exporter',
        'haldi powder exporter India',
      ],
    },
    {
      id: 'ajwain',
      name: 'Ajwain Seeds',
      slug: 'ajwain',
      botanicalName: 'Trachyspermum ammi',
      description:
        'Carom seeds (ajwain) with strong thymol content. Used in food, pharmaceuticals, and traditional medicine worldwide.',
      image: '/images/products/spices/ajwain.jpg',
      specifications: [
        { label: 'Botanical Name', value: 'Trachyspermum ammi (L.) Sprague' },
        { label: 'Part Used', value: 'Seeds (fruits)' },
        { label: 'Form', value: 'Whole Seeds / Powder' },
        { label: 'Color', value: 'Grayish-Green to Brown' },
        { label: 'Thymol Content', value: '35–60%' },
        { label: 'Moisture', value: 'Max 10%' },
        { label: 'HS Code', value: '0909.21.00' },
        { label: 'Origin', value: 'Gujarat & Rajasthan, India' },
        { label: 'Certifications', value: 'FSSAI, ISO 22000, Halal, GMP' },
      ],
      moq: {
        quantity: '500 kg',
        samplePolicy: 'Free sample available (courier charges extra)',
        leadTime: '7–14 working days',
        paymentTerms: 'T/T, LC at sight',
      },
      packaging: [
        { type: 'PP Woven Bags', sizes: '25 kg, 50 kg' },
        { type: 'Private Label Pouches', sizes: '100g, 200g, 500g' },
      ],
      applications: [
        'Food seasoning & spice blends',
        'Traditional medicine (digestive aid)',
        'Pharmaceutical formulations',
        'Essential oil extraction (thymol)',
        'Herbal tea blends',
      ],
      keywords: [
        'ajwain seeds exporter India',
        'carom seeds bulk supplier Gujarat',
        'trachyspermum ammi exporter',
        'ajwain wholesale India',
        'carom seeds manufacturer India',
      ],
    },
    {
      id: 'fenugreek',
      name: 'Fenugreek Seeds',
      slug: 'fenugreek',
      botanicalName: 'Trigonella foenum-graecum',
      description:
        'Premium fenugreek seeds — bold aroma, high saponin content. Used in food, pharma, and nutraceuticals globally.',
      image: '/images/products/spices/fenugreek.jpg',
      specifications: [
        { label: 'Botanical Name', value: 'Trigonella foenum-graecum L.' },
        { label: 'Part Used', value: 'Seeds / Dried Leaves' },
        { label: 'Form', value: 'Whole Seeds / Powder / Dried Leaves (kasuri methi)' },
        { label: 'Color', value: 'Yellow-Brown' },
        { label: 'Moisture', value: 'Max 9%' },
        { label: 'HS Code', value: '1207.50.00' },
        { label: 'Origin', value: 'Gujarat & Rajasthan, India' },
        { label: 'Certifications', value: 'FSSAI, ISO 22000, Halal, GMP' },
      ],
      moq: {
        quantity: '500 kg',
        samplePolicy: 'Free sample available (courier charges extra)',
        leadTime: '7–14 working days',
        paymentTerms: 'T/T, LC at sight',
      },
      packaging: [
        { type: 'PP Woven Bags', sizes: '25 kg, 50 kg' },
        { type: 'Private Label Pouches', sizes: '100g, 200g, 500g, 1 kg' },
      ],
      applications: [
        'Food & spice blends',
        'Blood sugar management supplements',
        'Lactation support products',
        'Nutraceutical formulations',
        'Pharmaceutical excipient',
        'Hair care (fenugreek oil)',
      ],
      keywords: [
        'fenugreek seeds exporter India',
        'methi seeds bulk supplier Gujarat',
        'fenugreek powder exporter India',
        'trigonella foenum-graecum supplier',
        'fenugreek seeds wholesale India',
      ],
    },
    {
      id: 'cumin',
      name: 'Cumin Seeds',
      slug: 'cumin',
      botanicalName: 'Cuminum cyminum',
      description:
        'Gujarat-grown cumin seeds — bold, earthy aroma, rich in essential oils. Premium export quality for food, pharma, and wellness.',
      image: '/images/products/spices/cumin.jpg',
      specifications: [
        { label: 'Botanical Name', value: 'Cuminum cyminum L.' },
        { label: 'Part Used', value: 'Seeds (fruits)' },
        { label: 'Form', value: 'Whole Seeds / Ground Powder' },
        { label: 'Color', value: 'Yellowish-Brown to Dark Brown' },
        { label: 'Volatile Oil', value: 'Min 2.5%' },
        { label: 'Moisture', value: 'Max 9%' },
        { label: 'HS Code', value: '0909.31.00' },
        { label: 'Origin', value: 'Gujarat & Rajasthan, India' },
        { label: 'Certifications', value: 'FSSAI, ISO 22000, Halal, Kosher, GMP' },
      ],
      moq: {
        quantity: '500 kg',
        samplePolicy: 'Free sample available (courier charges extra)',
        leadTime: '7–14 working days',
        paymentTerms: 'T/T, LC at sight',
      },
      packaging: [
        { type: 'PP Woven Bags', sizes: '25 kg, 50 kg' },
        { type: 'Kraft Paper Bags', sizes: '25 kg' },
        { type: 'Private Label Pouches', sizes: '100g, 200g, 500g, 1 kg' },
      ],
      applications: [
        'Food industry (spice blends, curry)',
        'Essential oil extraction',
        'Pharmaceutical (digestive aid)',
        'Health supplements',
        'Nutraceuticals',
      ],
      keywords: [
        'cumin seeds exporter India',
        'jeera exporter Gujarat',
        'cumin seeds bulk supplier India',
        'cuminum cyminum exporter',
        'cumin powder wholesale India',
        'whole cumin exporter India',
      ],
    },
    {
      id: 'coriander',
      name: 'Coriander Seeds',
      slug: 'coriander',
      botanicalName: 'Coriandrum sativum',
      description:
        'Clean, sun-dried coriander seeds with citrusy aroma. Available whole or ground. Export-quality processing for food and pharma industries.',
      image: '/images/products/spices/coriander.jpg',
      specifications: [
        { label: 'Botanical Name', value: 'Coriandrum sativum L.' },
        { label: 'Part Used', value: 'Seeds (fruits)' },
        { label: 'Form', value: 'Whole Seeds / Powder' },
        { label: 'Color', value: 'Light Brown to Beige' },
        { label: 'Volatile Oil', value: 'Min 0.5%' },
        { label: 'Moisture', value: 'Max 9%' },
        { label: 'HS Code', value: '0909.21.00' },
        { label: 'Origin', value: 'Gujarat & Rajasthan, India' },
        { label: 'Certifications', value: 'FSSAI, ISO 22000, Halal, GMP' },
      ],
      moq: {
        quantity: '500 kg',
        samplePolicy: 'Free sample available (courier charges extra)',
        leadTime: '7–14 working days',
        paymentTerms: 'T/T, LC at sight',
      },
      packaging: [
        { type: 'PP Woven Bags', sizes: '25 kg, 50 kg' },
        { type: 'Kraft Paper Bags', sizes: '25 kg' },
        { type: 'Private Label Pouches', sizes: '100g, 200g, 500g, 1 kg' },
      ],
      applications: [
        'Food seasoning & spice blends',
        'Culinary & restaurant supply',
        'Essential oil extraction',
        'Digestive health supplements',
        'Pharmaceutical formulations',
      ],
      keywords: [
        'coriander seeds exporter India',
        'dhania exporter Gujarat',
        'coriander powder supplier India',
        'coriandrum sativum exporter',
        'coriander seeds wholesale India',
      ],
    },
  ],
};

// ============================================================
// OILS CATEGORY
// ============================================================
const oilsCategory: Category = {
  id: 'oils',
  name: 'Herbal Oils',
  slug: 'oils',
  tagline: 'Cold Pressed Herbal Oils — Pure, Natural, Export Quality',
  description:
    'Castor oil, karanja oil — cold pressed, pharmaceutical and cosmetic grade, bulk B2B supply from India.',
  colorTheme: '#4d7c0f',
  colorLight: '#f7fee7',
  emoji: '🫙',
  heroImage: '/images/categories/herbal-oils.jpg',
  certifications: ['FSSAI', 'ISO 22000', 'GMP', 'Halal', 'Kosher'],
  whitelabelBenefits: [
    'Custom label design',
    'Retail-ready glass & HDPE bottles',
    'MOQ from 100 liters',
    'Lab COA with every batch',
    'Organic cold-pressed options',
    'Worldwide shipping',
  ],
  products: [
    {
      id: 'castor-oil',
      name: 'Castor Oil',
      slug: 'castor-oil',
      botanicalName: 'Ricinus communis',
      description:
        'Cold-pressed castor oil (Ricinus communis) — pale yellow, pharmaceutical and cosmetic grade. High ricinoleic acid content. Used in pharma, cosmetics, and industrial applications.',
      image: '/images/products/oils/castor-oil.jpg',
      specifications: [
        { label: 'Botanical Name', value: 'Ricinus communis L.' },
        { label: 'Extraction Method', value: 'Cold Pressed / Solvent Extracted' },
        { label: 'Form', value: 'Oil (liquid)' },
        { label: 'Color', value: 'Pale Yellow to Colorless' },
        { label: 'Ricinoleic Acid', value: 'Min 85%' },
        { label: 'Acid Value', value: 'Max 2.0 mg KOH/g' },
        { label: 'Moisture', value: 'Max 0.3%' },
        { label: 'Grade', value: 'Pharmaceutical / Cosmetic / Industrial' },
        { label: 'HS Code', value: '1515.30.00' },
        { label: 'Origin', value: 'Gujarat, India' },
        { label: 'Certifications', value: 'FSSAI, ISO 22000, GMP, Halal, Kosher' },
      ],
      moq: {
        quantity: '200 liters (1 drum)',
        samplePolicy: 'Free sample available (200ml, courier charges extra)',
        leadTime: '7–14 working days',
        paymentTerms: 'T/T, LC at sight',
      },
      packaging: [
        { type: 'HDPE Drums', sizes: '200 liters, 50 liters' },
        { type: 'IBC Tanks', sizes: '1000 liters' },
        { type: 'Private Label Bottles', sizes: '100ml, 200ml, 500ml, 1 liter' },
      ],
      applications: [
        'Cosmetics & personal care (hair, skin)',
        'Pharmaceutical (laxative, excipient)',
        'Lubricants & plasticizers (industrial)',
        'Biodiesel production',
        'Paints & coatings',
      ],
      keywords: [
        'castor oil exporter India',
        'cold pressed castor oil supplier',
        'castor oil manufacturer Gujarat',
        'ricinus communis oil exporter',
        'pharmaceutical grade castor oil India',
        'castor oil bulk supplier India',
        'cosmetic grade castor oil exporter',
      ],
    },
    {
      id: 'karanja-oil',
      name: 'Karanja Oil',
      slug: 'karanja-oil',
      botanicalName: 'Pongamia pinnata',
      description:
        'Natural karanja (pongamia) oil — dark colored, high pongamol content. Used in organic pesticides, fertilizers, cosmetics, and biofuel.',
      image: '/images/products/oils/karanja-oil.jpg',
      specifications: [
        { label: 'Botanical Name', value: 'Pongamia pinnata (L.) Pierre' },
        { label: 'Also Known As', value: 'Pongamia Oil, Honge Oil' },
        { label: 'Extraction Method', value: 'Cold Pressed / Expeller Pressed' },
        { label: 'Form', value: 'Oil (liquid)' },
        { label: 'Color', value: 'Dark Brown to Reddish-Brown' },
        { label: 'Free Fatty Acids', value: 'Max 5%' },
        { label: 'Moisture', value: 'Max 0.5%' },
        { label: 'HS Code', value: '1515.90.40' },
        { label: 'Origin', value: 'Gujarat & Maharashtra, India' },
        { label: 'Certifications', value: 'FSSAI, ISO 22000, GMP' },
      ],
      moq: {
        quantity: '200 liters (1 drum)',
        samplePolicy: 'Free sample available (200ml, courier charges extra)',
        leadTime: '7–14 working days',
        paymentTerms: 'T/T, LC at sight',
      },
      packaging: [
        { type: 'HDPE Drums', sizes: '200 liters, 50 liters' },
        { type: 'IBC Tanks', sizes: '1000 liters' },
        { type: 'Private Label Bottles', sizes: '200ml, 500ml, 1 liter' },
      ],
      applications: [
        'Organic biopesticide base',
        'Natural fertilizer (neem + karanja blend)',
        'Cosmetics & hair care',
        'Soap making',
        'Biofuel / biodiesel',
        'Veterinary uses',
      ],
      keywords: [
        'karanja oil exporter India',
        'pongamia oil supplier India',
        'karanja oil manufacturer Gujarat',
        'honge oil bulk supplier',
        'pongamia pinnata oil exporter',
        'karanja oil biopesticide supplier',
      ],
    },
  ],
};

// ============================================================
// READY-TO-EAT CATEGORY
// ============================================================
const rteCategory: Category = {
  id: 'ready-to-eat',
  name: 'Ready-to-Eat',
  slug: 'ready-to-eat',
  tagline: 'Authentic Gujarati Snacks — White Label & Private Label Exporter',
  description:
    'Traditional khakhra and Indian ready-to-eat snacks — custom branding, export-quality packaging, worldwide delivery.',
  colorTheme: '#c2410c',
  colorLight: '#fff7ed',
  emoji: '🍽️',
  heroImage: '/images/categories/ready-to-eat.jpg',
  certifications: ['FSSAI', 'ISO 22000', 'GMP', 'Halal'],
  whitelabelBenefits: [
    'Full custom branding & packaging',
    'Private label from 500 units',
    'Multiple flavors available',
    'Retail-ready shrink-wrap packing',
    'Long shelf life (6–12 months)',
    'Worldwide export capability',
  ],
  products: [
    {
      id: 'khakhra',
      name: 'Khakhra',
      slug: 'khakhra',
      botanicalName: 'N/A (Processed Food Product)',
      description:
        'Traditional Gujarati khakhra — thin, crispy wheat flatbread snack. Available in multiple flavors: plain, masala, methi, jeera, and more. Perfect for private label export.',
      image: '/images/products/ready-to-eat/khakhra.jpg',
      specifications: [
        { label: 'Product Type', value: 'Ready-to-Eat Snack (Processed Food)' },
        { label: 'Base Ingredient', value: 'Whole Wheat Flour' },
        { label: 'Texture', value: 'Thin, Crispy, Light' },
        { label: 'Shelf Life', value: '6–12 months' },
        { label: 'Storage', value: 'Cool & dry place, away from direct sunlight' },
        { label: 'Available Flavors', value: 'Plain, Masala, Methi (Fenugreek), Jeera (Cumin), Pudina, Garlic, Multi-grain' },
        { label: 'Sizes Available', value: '200g, 400g, custom' },
        { label: 'HS Code', value: '1902.30.90' },
        { label: 'Origin', value: 'Gujarat, India' },
        { label: 'Certifications', value: 'FSSAI, ISO 22000, GMP, Halal' },
      ],
      moq: {
        quantity: '500 units per flavor',
        samplePolicy: 'Sample pack available (shipping charges extra)',
        leadTime: '14–21 working days',
        paymentTerms: 'T/T, advance',
      },
      packaging: [
        { type: 'Shrink-wrap retail pack', sizes: '200g, 400g' },
        { type: 'Bulk carton', sizes: '5 kg, 10 kg' },
        { type: 'Private Label Pack', sizes: 'Custom size & weight' },
      ],
      applications: [
        'Indian diaspora retail markets',
        'Specialty food stores',
        'Online grocery (Amazon, ethnic stores)',
        'Airline & hospitality snacks',
        'Corporate gifting',
        'Health & wellness snack brands',
      ],
      keywords: [
        'khakhra exporter India',
        'gujarati khakhra manufacturer',
        'khakhra private label supplier',
        'khakhra white label exporter',
        'indian snacks exporter India',
        'ready to eat snacks exporter India',
        'khakhra bulk supplier Gujarat',
      ],
    },
  ],
};

// ============================================================
// MASTER EXPORT
// ============================================================
export const allCategories: Category[] = [
  psylliumCategory,
  herbsCategory,
  spicesCategory,
  oilsCategory,
  rteCategory,
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return allCategories.find((c) => c.slug === slug);
}

export function getProductBySlug(categorySlug: string, productSlug: string): Product | undefined {
  const category = getCategoryBySlug(categorySlug);
  return category?.products.find((p) => p.slug === productSlug);
}

export const categoryNavItems = allCategories.map((c) => ({
  id: c.id,
  name: c.name,
  slug: c.slug,
  emoji: c.emoji,
  href: `/${c.slug}/`,
  color: c.colorTheme,
}));
