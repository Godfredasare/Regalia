

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  category: string;
  subcategory: string;
  fabric: string;
  description: string;
  details: string[];
  images: string[];
  featured: boolean;
  newArrival: boolean;
  sizes: string[];
  colors: string[];
  relatedProducts: number[];
  /** Petite only — children's age range (e.g. "1–12 Years"), in place of adult sizes. */
  ageRange?: string;
  /** Petite only — the adult product this piece matches (for future Mini-Me pairing). */
  matchesAdultProductId?: number;
}

export interface Collection {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
  featured: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
  rating: number;
}

export interface Fabric {
  id: number;
  name: string;
  origin: string;
  description: string;
  texture: string;
  properties: string[];
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
}

export interface JournalPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  category: "Style" | "Culture" | "Craft" | "Gentleman" | "Women" | "House";
  author: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
}

export interface TimelineEvent {
  id: number;
  year: string;
  title: string;
  description: string;
}

export interface Founder {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export interface InstagramPost {
  id: number;
  image: string;
  likes: number;
  caption: string;
}

// ---------------------------------------------------------------------------
// Products (26 items across 9 categories)
// ---------------------------------------------------------------------------

export const products: Product[] = [
  // ── Menswear ────────────────────────────────────────────────────────────
  {
    id: 1,
    name: "The Sovereign Suit",
    slug: "the-sovereign-suit",
    price: 2850,
    category: "Menswear",
    subcategory: "Suits",
    fabric: "Italian Super 150s Wool",
    description:
      "A commanding two-piece suit crafted from the finest Italian super 150s wool. The Sovereign is engineered for the gentleman who demands structural precision and effortless sophistication in every thread.",
    details: [
      "Fully canvassed construction with hand-padded shoulders",
      "Horn buttons sourced from Italy",
      "Working buttonhole cuffs",
      "Bespoke lapel width — 3.2 cm",
      "Mother-of-pearl trouser buttons",
      "Inner lining in Bemberg silk",
    ],
    images: [
      "/men/2c8bc693880adb8e4bfe28a43af63a61.jpg",
      "/men/94a74682ebf1c052463f93f89d858fdf.jpg",
      "/men/abc0bdce585b214bc62bee3af1d287d8.jpg",
    ],
    featured: true,
    newArrival: false,
    sizes: ["38R", "40R", "42R", "44R", "46R", "48R", "50R"],
    colors: ["Midnight Navy", "Charcoal", "Slate Grey"],
    relatedProducts: [2, 3, 10, 11],
  },
  {
    id: 2,
    name: "The Diplomat Blazer",
    slug: "the-diplomat-blazer",
    price: 1450,
    category: "Menswear",
    subcategory: "Blazers",
    fabric: "English Worsted Wool",
    description:
      "The Diplomat is a single-breasted blazer that bridges the gap between boardroom authority and evening elegance. Cut from English worsted wool, it drapes with a natural, sculpted shoulder line.",
    details: [
      "Single-breast, two-button closure",
      "Patch pockets with flaps",
      "Half-canvas construction",
      "Side vents",
      "Pick-stitched lapels",
      "Satin-stripe interior piping",
    ],
    images: [
      "/men/94a74682ebf1c052463f93f89d858fdf.jpg",
      "/men/abc0bdce585b214bc62bee3af1d287d8.jpg",
      "/9b892dd1facc01bfe2e4d410c736ef4f.jpg",
    ],
    featured: false,
    newArrival: true,
    sizes: ["38R", "40R", "42R", "44R", "46R", "48R"],
    colors: ["Navy", "Camel", "Forest Green"],
    relatedProducts: [1, 3, 12],
  },
  {
    id: 3,
    name: "The Heritage Trousers",
    slug: "the-heritage-trousers",
    price: 680,
    category: "Menswear",
    subcategory: "Trousers",
    fabric: "Turkish Cotton Twill",
    description:
      "Impeccably tailored trousers with a high-waist silhouette and a beautifully tapered leg. The Heritage Trousers embody a refined masculinity that pairs effortlessly with blazers and shirting alike.",
    details: [
      "High-waisted, double-pleated front",
      "Extended waistband closure",
      "Side adjusters — no belt loops",
      "Turned-up hem (2 cm)",
      "Cotton drill lining to the knee",
      "French seam finishing",
    ],
    images: [
      "/men/abc0bdce585b214bc62bee3af1d287d8.jpg",
      "/9b892dd1facc01bfe2e4d410c736ef4f.jpg",
      "/men/2c8bc693880adb8e4bfe28a43af63a61.jpg",
    ],
    featured: false,
    newArrival: false,
    sizes: ["28", "30", "32", "34", "36", "38", "40"],
    colors: ["Charcoal", "Olive", "Stone", "Black"],
    relatedProducts: [1, 2, 20],
  },

  // ── Womenswear ──────────────────────────────────────────────────────────
  {
    id: 4,
    name: "The Empress Gown",
    slug: "the-empress-gown",
    price: 4200,
    category: "Womenswear",
    subcategory: "Gowns",
    fabric: "Silk Crepe de Chine",
    description:
      "A floor-length gown of arresting beauty, The Empress commands attention with its architectural drape and subtle interplay of light on silk crepe. Designed for galas, state dinners, and the moments that define a legacy.",
    details: [
      "Floor-length with slight train",
      "Sculptural one-shoulder neckline",
      "Concealed side zip with silk-covered buttons",
      "Fully lined in silk habotai",
      "Padded bust and structured bodice",
      "Dry clean only",
    ],
    images: [
      "https://i.pinimg.com/736x/de/9e/23/de9e23d77654d78af8b455807c62ecb1.jpg",
      "https://i.pinimg.com/736x/ec/eb/cf/ecebcf84219b93c9cbc8337358c7278f.jpg",
      "https://i.pinimg.com/736x/89/ec/32/89ec328d75b43508d7bcb85b4e2bbc6d.jpg",
    ],
    featured: true,
    newArrival: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Onyx Black", "Ivory", "Burgundy"],
    relatedProducts: [5, 6, 14],
  },
  {
    id: 5,
    name: "The Majestic Blazer",
    slug: "the-majestic-blazer",
    price: 1680,
    category: "Womenswear",
    subcategory: "Blazers",
    fabric: "Italian Wool Gabardine",
    description:
      "A sharply tailored women's blazer that redefines power dressing. The Majestic features a nipped-in waist and structured shoulders, cut from premium Italian wool gabardine with a flawless hand feel.",
    details: [
      "Peak lapel, single-button closure",
      "Princess seam construction for silhouette",
      "Gold-tone interior buttons",
      "Functional sleeve buttons",
      "Single back vent",
      "Silk-blend lining",
    ],
    images: [
      "https://i.pinimg.com/736x/ec/eb/cf/ecebcf84219b93c9cbc8337358c7278f.jpg",
      "https://i.pinimg.com/736x/89/ec/32/89ec328d75b43508d7bcb85b4e2bbc6d.jpg",
      "https://i.pinimg.com/736x/02/89/04/02890490e4ebe20924823aaa4bbecb35.jpg",
    ],
    featured: false,
    newArrival: false,
    sizes: ["34", "36", "38", "40", "42", "44"],
    colors: ["Navy", "Ivory", "Black"],
    relatedProducts: [4, 6, 12],
  },
  {
    id: 6,
    name: "The Royal Wrap Dress",
    slug: "the-royal-wrap-dress",
    price: 1250,
    category: "Womenswear",
    subcategory: "Dresses",
    fabric: "Swiss Cotton Voile",
    description:
      "Effortlessly elegant and universally flattering, The Royal Wrap Dress is crafted from crisp Swiss cotton voile with hand-finished edges. A wardrobe cornerstone for the woman of discerning taste.",
    details: [
      "Wrap-front construction with concealed snap closure",
      "Three-quarter length sleeves",
      "Self-fabric belt with D-ring buckle",
      "Side seam pockets",
      "Hand-rolled hem",
      "Machine washable on gentle cycle",
    ],
    images: [
      "https://i.pinimg.com/736x/89/ec/32/89ec328d75b43508d7bcb85b4e2bbc6d.jpg",
      "https://i.pinimg.com/736x/02/89/04/02890490e4ebe20924823aaa4bbecb35.jpg",
      "https://i.pinimg.com/736x/4d/ac/c3/4dacc3f44d4aae383997f97be9b4924e.jpg",
    ],
    featured: true,
    newArrival: false,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Emerald", "Terracotta", "Midnight Blue"],
    relatedProducts: [4, 5, 21],
  },

  // ── Native Wear ─────────────────────────────────────────────────────────
  {
    id: 7,
    name: "The Agbada Royale",
    slug: "the-agbada-royale",
    price: 3500,
    category: "Native Wear",
    subcategory: "Agbada",
    fabric: "Handwoven Aso Oke",
    description:
      "A magnificent three-piece Agbada set woven from premium Aso Oke by master weavers in Iseyin, Nigeria. The Agbada Royale is a statement of cultural sovereignty and sartorial excellence, reserved for those who honor tradition with distinction.",
    details: [
      "Three-piece set: Agbada gown, Awosoke inner, and Sokoto trousers",
      "Hand-embroidered geometric motifs at the neckline and cuffs",
      "Traditional wide sleeves with reinforced hems",
      "Premium Aso Oke with metallic thread accents",
      "Matching embroidered cap (Fila) included",
      "Each piece takes 120+ hours of hand-weaving",
    ],
    images: [
      "https://i.pinimg.com/736x/fa/b2/e4/fab2e48120199081accaf3bb1fecc6ec.jpg",
      "https://i.pinimg.com/736x/3c/b6/e6/3cb6e676d25f85b65faa96ce92971fc3.jpg",
      "https://i.pinimg.com/1200x/1d/88/92/1d8892918a9956eba6288b01fc972f88.jpg",
    ],
    featured: true,
    newArrival: false,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Gold & Ivory", "White & Silver", "Burgundy & Gold"],
    relatedProducts: [8, 9, 22],
  },
  {
    id: 8,
    name: "The Senator Ensemble",
    slug: "the-senator-ensemble",
    price: 2100,
    category: "Native Wear",
    subcategory: "Senator",
    fabric: "Lace & Swiss Voile",
    description:
      "A refined Senator set that marries Nigerian cultural heritage with contemporary tailoring sensibilities. Featuring intricate Swiss lace detailing and a beautifully cut kaftan silhouette.",
    details: [
      "Kaftan tunic with mandarin collar",
      "Swiss lace overlay on chest and sleeves",
      "Matching trousers with elasticated waist",
      "Concealed side pockets",
      "Hand-finished embroidery trim",
      "Includes matching embroidered cap",
    ],
    images: [
      "https://i.pinimg.com/736x/3c/b6/e6/3cb6e676d25f85b65faa96ce92971fc3.jpg",
      "https://i.pinimg.com/1200x/1d/88/92/1d8892918a9956eba6288b01fc972f88.jpg",
      "https://i.pinimg.com/736x/fa/b2/e4/fab2e48120199081accaf3bb1fecc6ec.jpg",
    ],
    featured: false,
    newArrival: true,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White & Gold", "Sky Blue", "Wine & Silver"],
    relatedProducts: [7, 9, 22],
  },
  {
    id: 9,
    name: "The Iro & Buba Classic",
    slug: "the-iro-and-buba-classic",
    price: 1950,
    category: "Native Wear",
    subcategory: "Iro & Buba",
    fabric: "Handwoven Kente",
    description:
      "An exquisite two-piece Iro and Buba set handcrafted from authentic Kente cloth woven in Bonwire, Ghana. This ensemble celebrates West African royalty with a modern, flattering cut that honors ancestral artistry.",
    details: [
      "Wrapped skirt (Iro) with custom hem finish",
      "Loose-fitting blouse (Buba) with embellished neckline",
      "Authentic Bonwire Kente cloth — each pattern tells a story",
      "Coordinating Gele head-tie included",
      "Reinforced seams for durability",
      "Dry clean recommended",
    ],
    images: [
      "https://i.pinimg.com/1200x/1d/88/92/1d8892918a9956eba6288b01fc972f88.jpg",
      "https://i.pinimg.com/736x/fa/b2/e4/fab2e48120199081accaf3bb1fecc6ec.jpg",
      "https://i.pinimg.com/736x/3c/b6/e6/3cb6e676d25f85b65faa96ce92971fc3.jpg",
    ],
    featured: false,
    newArrival: false,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Royal Kente", "Green & Gold Kente", "Blue & White Kente"],
    relatedProducts: [7, 8, 23],
  },

  // ── Corporate ───────────────────────────────────────────────────────────
  {
    id: 10,
    name: "The Executive Three-Piece",
    slug: "the-executive-three-piece",
    price: 3200,
    category: "Corporate",
    subcategory: "Suits",
    fabric: "English Super 130s Worsted",
    description:
      "The definitive three-piece suit for the C-suite executive. Cut from English super 130s worsted wool with a weight that travels beautifully and resists wrinkling — because leadership requires unwavering presence.",
    details: [
      "Jacket, waistcoat, and trousers — fully canvassed",
      "Notch lapel with hand-stitched buttonhole",
      "Double back vent",
      "Six-button waistcoat with adjusters",
      "Trousers with double reverse pleats",
      "Travel-friendly wrinkle resistance",
    ],
    images: [
      "https://i.pinimg.com/736x/72/78/ed/7278ed6bf04d5b8766a05971dba4f14e.jpg",
      "https://i.pinimg.com/736x/a1/aa/ba/a1aaba5bbec720058632f834baf6313b.jpg",
      "https://i.pinimg.com/736x/f5/7e/b9/f57eb9c6e5ea498ae6051eae1f10baff.jpg",
    ],
    featured: true,
    newArrival: false,
    sizes: ["38R", "40R", "42R", "44R", "46R", "48R", "50R"],
    colors: ["Charcoal Pinstripe", "Navy Solid", "Dark Grey"],
    relatedProducts: [1, 11, 12],
  },
  {
    id: 11,
    name: "The Boardroom Suit",
    slug: "the-boardroom-suit",
    price: 2750,
    category: "Corporate",
    subcategory: "Suits",
    fabric: "Italian Twill Weave",
    description:
      "A power suit with refined restraint. The Boardroom is constructed from Italian twill with a subtle diagonal pattern that catches light without distraction — designed for those who lead through quiet confidence.",
    details: [
      "Two-piece suit with peak lapels",
      "Half-canvas with horsehair chest piece",
      "Kissing buttons on cuffs",
      "Flap pockets with ticket pocket",
      "Flat-front trousers",
      "YKK Excella zippers",
    ],
    images: [
      "https://i.pinimg.com/736x/a1/aa/ba/a1aaba5bbec720058632f834baf6313b.jpg",
      "https://i.pinimg.com/736x/f5/7e/b9/f57eb9c6e5ea498ae6051eae1f10baff.jpg",
      "https://i.pinimg.com/736x/a6/d8/58/a6d8589d27a7d6bea9447c2e46bc9bef.jpg",
    ],
    featured: false,
    newArrival: true,
    sizes: ["38R", "40R", "42R", "44R", "46R", "48R"],
    colors: ["Navy", "Anthracite", "Brown"],
    relatedProducts: [1, 10, 12],
  },
  {
    id: 12,
    name: "The Power Blazer",
    slug: "the-power-blazer",
    price: 1650,
    category: "Corporate",
    subcategory: "Blazers",
    fabric: "English Flannel",
    description:
      "A double-breasted blazer in premium English flannel that transitions seamlessly from morning meetings to evening engagements. The Power Blazer is the cornerstone of a versatile professional wardrobe.",
    details: [
      "Double-breasted, six-button configuration",
      "Peak lapels in classic proportion",
      "Slanted welt pockets",
      "Full Bemberg lining",
      "Functional sleeve buttonholes",
      "Naturally insulating flannel weight",
    ],
    images: [
      "https://i.pinimg.com/736x/f5/7e/b9/f57eb9c6e5ea498ae6051eae1f10baff.jpg",
      "https://i.pinimg.com/736x/a6/d8/58/a6d8589d27a7d6bea9447c2e46bc9bef.jpg",
      "https://i.pinimg.com/736x/72/78/ed/7278ed6bf04d5b8766a05971dba4f14e.jpg",
    ],
    featured: false,
    newArrival: false,
    sizes: ["38R", "40R", "42R", "44R", "46R", "48R"],
    colors: ["Navy", "Charcoal", "Camel"],
    relatedProducts: [10, 11, 5],
  },

  // ── Wedding ─────────────────────────────────────────────────────────────
  {
    id: 13,
    name: "The Groom's Masterpiece",
    slug: "the-grooms-masterpiece",
    price: 4500,
    category: "Wedding",
    subcategory: "Groom Wear",
    fabric: "Italian Silk-Wool Blend",
    description:
      "The most important suit a man will ever wear deserves the most meticulous craftsmanship. The Groom's Masterpiece is a bespoke three-piece ensemble in a luminous Italian silk-wool blend that photographs with timeless elegance.",
    details: [
      "Bespoke three-piece with matching silk tie and pocket square",
      "Shawl collar jacket — single-button",
      "Double-breasted waistcoat with silk back",
      "Flat-front trousers with satin stripe",
      "Complimentary initial embroidery on inner label",
      "Two complimentary fitting sessions included",
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/African_Fashion_in_Uganda_01.jpg/960px-African_Fashion_in_Uganda_01.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/African_Fashion_in_Uganda_02.jpg/960px-African_Fashion_in_Uganda_02.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/16/Dashiki_and_kufi_%28cropped%29.jpg",
    ],
    featured: true,
    newArrival: false,
    sizes: ["38R", "40R", "42R", "44R", "46R", "48R"],
    colors: ["Ivory", "Pearl Grey", "Midnight Blue"],
    relatedProducts: [14, 15, 10],
  },
  {
    id: 14,
    name: "The Bridal Ensemble",
    slug: "the-bridal-ensemble",
    price: 6800,
    category: "Wedding",
    subcategory: "Bride Wear",
    fabric: "French Silk Mikado",
    description:
      "A breathtaking bridal ensemble in French silk Mikado that captures the light with every movement. Structured yet fluid, traditional yet unmistakably modern — for the bride who writes her own narrative.",
    details: [
      "Structured bodice with corset boning",
      "Full A-line skirt with hidden pockets",
      "Off-the-shoulder neckline with draped detail",
      "Fabric-covered button back closure (42 buttons)",
      "Chapel-length train with bustle loops",
      "Complimentary garment bag and preservation kit",
    ],
    images: [
      "https://i.pinimg.com/736x/02/89/04/02890490e4ebe20924823aaa4bbecb35.jpg",
      "https://i.pinimg.com/736x/4d/ac/c3/4dacc3f44d4aae383997f97be9b4924e.jpg",
      "https://i.pinimg.com/736x/de/9e/23/de9e23d77654d78af8b455807c62ecb1.jpg",
    ],
    featured: true,
    newArrival: true,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Ivory", "Champagne", "Blush"],
    relatedProducts: [13, 15, 4],
  },
  {
    id: 15,
    name: "The Wedding Party Set",
    slug: "the-wedding-party-set",
    price: 1800,
    category: "Wedding",
    subcategory: "Party Wear",
    fabric: "Turkish Wool Blend",
    description:
      "Coordinated wedding party attire that ensures every member of your entourage looks impeccable. Available in a curated palette of wedding-ready tones, with matching accessories and custom sizing.",
    details: [
      "Coordinated suit or dress options for the full party",
      "Matching pocket squares and ties included",
      "Bulk discount for 5+ orders",
      "Custom sizing for every member",
      "Group fitting appointment included",
      "Rush orders available (4-week turnaround)",
    ],
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/African_Fashion_in_Uganda_02.jpg/960px-African_Fashion_in_Uganda_02.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/African_Fashion_in_Uganda_01.jpg/960px-African_Fashion_in_Uganda_01.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/1/16/Dashiki_and_kufi_%28cropped%29.jpg",
    ],
    featured: false,
    newArrival: false,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Sage", "Dusty Rose", "Slate Blue", "Champagne"],
    relatedProducts: [13, 14, 10],
  },

  // ── Luxury Casual ───────────────────────────────────────────────────────
  {
    id: 16,
    name: "The Weekend Linen",
    slug: "the-weekend-linen",
    price: 980,
    category: "Luxury Casual",
    subcategory: "Suits",
    fabric: "Japanese Linen",
    description:
      "A relaxed yet refined linen suit that embodies the art of weekend elegance. Woven from premium Japanese linen, The Weekend Linen softens beautifully with every wear, developing a unique patina over time.",
    details: [
      "Unstructured, deconstructed jacket",
      "Patch pockets with bar-tack reinforcement",
      "No lining for maximum breathability",
      "Matching flat-front trousers",
      "Mother-of-pearl buttons",
      "Pre-washed for a lived-in hand feel",
    ],
    images: [
      "https://i.pinimg.com/1200x/24/c3/1a/24c31a86f610c9e1d150156537cb0eac.jpg",
      "https://i.pinimg.com/736x/34/a6/0f/34a60f7723d5d21f2c14964a3c3b70c0.jpg",
      "https://i.pinimg.com/736x/e5/42/20/e54220c448994346c0edbf3468664d61.jpg",
    ],
    featured: false,
    newArrival: true,
    sizes: ["38R", "40R", "42R", "44R", "46R", "48R"],
    colors: ["Natural", "Sky Blue", "Sage", "Black"],
    relatedProducts: [17, 18, 3],
  },
  {
    id: 17,
    name: "The Casual Royale",
    slug: "the-casual-royale",
    price: 1250,
    category: "Luxury Casual",
    subcategory: "Sets",
    fabric: "Indian Linen-Cotton Blend",
    description:
      "An elevated casual set that blurs the line between lounging and luxury. The Casual Royale pairs a relaxed camp-collar shirt with tapered trousers in a breathable Indian linen-cotton blend.",
    details: [
      "Camp-collar shirt with chest pocket",
      "Relaxed-fit tapered trousers",
      "Drawstring waist with fabric-covered tips",
      "Coconut shell buttons",
      "Side seam pockets and single back pocket",
      "Washed for softness",
    ],
    images: [
      "https://i.pinimg.com/736x/34/a6/0f/34a60f7723d5d21f2c14964a3c3b70c0.jpg",
      "https://i.pinimg.com/736x/e5/42/20/e54220c448994346c0edbf3468664d61.jpg",
      "https://i.pinimg.com/1200x/24/c3/1a/24c31a86f610c9e1d150156537cb0eac.jpg",
    ],
    featured: false,
    newArrival: false,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Ivory", "Olive", "Terracotta", "Indigo"],
    relatedProducts: [16, 18, 21],
  },
  {
    id: 18,
    name: "The Resort Set",
    slug: "the-resort-set",
    price: 1580,
    category: "Luxury Casual",
    subcategory: "Sets",
    fabric: "Swiss Cotton Seersucker",
    description:
      "A resort-ready ensemble in crisp Swiss seersucker that keeps you cool under the sun while looking impeccably put together. The Resort Set is vacation dressing elevated to an art form.",
    details: [
      "Single-breasted, unlined jacket",
      "Short-sleeve shirt with spread collar",
      "Flat-front shorts (7-inch inseam)",
      "All pieces in matching seersucker",
      "Corozo nut buttons",
      "Lightweight and packable",
    ],
    images: [
      "https://i.pinimg.com/736x/e5/42/20/e54220c448994346c0edbf3468664d61.jpg",
      "https://i.pinimg.com/1200x/24/c3/1a/24c31a86f610c9e1d150156537cb0eac.jpg",
      "https://i.pinimg.com/736x/34/a6/0f/34a60f7723d5d21f2c14964a3c3b70c0.jpg",
    ],
    featured: false,
    newArrival: true,
    sizes: ["S", "M", "L", "XL"],
    colors: ["Navy & White", "Pink & White", "Green & White"],
    relatedProducts: [16, 17, 6],
  },

  // ── Ready to Wear ───────────────────────────────────────────────────────
  {
    id: 19,
    name: "The Classic Fit Shirt",
    slug: "the-classic-fit-shirt",
    price: 480,
    category: "Ready to Wear",
    subcategory: "Shirts",
    fabric: "Egyptian Cotton Broadcloth",
    description:
      "The foundation of every well-dressed man's wardrobe. The Classic Fit Shirt is cut from 120-thread-count Egyptian cotton broadcloth with a pleasingly substantial hand and a crisp, clean finish.",
    details: [
      "Spread collar with removable stays",
      "Full-length placket with mother-of-pearl buttons",
      "Back yoke with side pleats for ease",
      "Rounded single-button cuffs",
      "Breast pocket",
      "Shrinkage-controlled fabric",
    ],
    images: [
      "https://i.pinimg.com/736x/f7/41/36/f741369c602d24a0490ebecf68b7bfeb.jpg",
      "https://i.pinimg.com/1200x/10/11/b0/1011b04e90efffe78d58348f498f6007.jpg",
      "https://i.pinimg.com/1200x/21/f9/31/21f93146734665be2a6fc213f548b0b9.jpg",
    ],
    featured: false,
    newArrival: false,
    sizes: [
      "14/32",
      "15/33",
      "15.5/34",
      "16/34",
      "16.5/35",
      "17/35",
      "17.5/36",
    ],
    colors: ["White", "Light Blue", "Ecru", "French Blue"],
    relatedProducts: [20, 21, 1],
  },
  {
    id: 20,
    name: "The Essential Chinos",
    slug: "the-essential-chinos",
    price: 520,
    category: "Ready to Wear",
    subcategory: "Trousers",
    fabric: "Ghanaian Organic Cotton",
    description:
      "Versatile chinos crafted from organic Ghanaian cotton, milled and finished to European standards. The Essential Chinos deliver all-day comfort with a tailored silhouette that works across every occasion.",
    details: [
      "Flat-front with medium rise",
      "Slant front pockets, welt back pockets",
      "YKK zipper fly",
      "Reinforced seams at stress points",
      "Garment-washed for softness",
      "Sustainably sourced and ethically produced",
    ],
    images: [
      "https://i.pinimg.com/1200x/10/11/b0/1011b04e90efffe78d58348f498f6007.jpg",
      "https://i.pinimg.com/1200x/21/f9/31/21f93146734665be2a6fc213f548b0b9.jpg",
      "https://i.pinimg.com/736x/f7/41/36/f741369c602d24a0490ebecf68b7bfeb.jpg",
    ],
    featured: false,
    newArrival: true,
    sizes: ["28", "30", "32", "34", "36", "38", "40"],
    colors: ["Khaki", "Olive", "Navy", "Stone", "Black"],
    relatedProducts: [19, 21, 3],
  },
  {
    id: 21,
    name: "The Merino Polo",
    slug: "the-merino-polo",
    price: 380,
    category: "Ready to Wear",
    subcategory: "Knitwear",
    fabric: "Extra-Fine Merino Wool",
    description:
      "A refined polo knitted from extra-fine 18.5-micron merino wool. The Merino Polo offers the comfort of knitwear with the polish of a collar — the ultimate smart-casual bridge piece.",
    details: [
      "Long-sleeve polo with ribbed collar and cuffs",
      "Three-button placket with horn buttons",
      "Flat-lock seaming throughout",
      "Side vents at hem",
      "Temperature-regulating merino wool",
      "Naturally moisture-wicking and odor-resistant",
    ],
    images: [
      "https://i.pinimg.com/1200x/21/f9/31/21f93146734665be2a6fc213f548b0b9.jpg",
      "https://i.pinimg.com/736x/f7/41/36/f741369c602d24a0490ebecf68b7bfeb.jpg",
      "https://i.pinimg.com/1200x/10/11/b0/1011b04e90efffe78d58348f498f6007.jpg",
    ],
    featured: false,
    newArrival: false,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Charcoal", "Navy", "Burgundy", "Forest Green"],
    relatedProducts: [19, 20, 16],
  },

  // ── Limited Editions ────────────────────────────────────────────────────
  {
    id: 22,
    name: "The Kente Masterpiece",
    slug: "the-kente-masterpiece",
    price: 8500,
    category: "Limited Editions",
    subcategory: "Bespoke",
    fabric: "Heritage Kente & Italian Wool",
    description:
      "A once-in-a-lifetime collaboration between Bonwire master weavers and REGALIA's Italian tailoring atelier. Only 12 pieces will ever be made. The Kente Masterpiece features a full Kente underlay visible through hand-cut window panes in a midnight navy Italian wool shell.",
    details: [
      "Limited to 12 pieces worldwide — each numbered and signed",
      "Hand-cut Kente panels integrated into jacket lining",
      "Full bespoke construction — 60+ hours per suit",
      "Gold thread embroidery by Ghanaian artisans",
      "Custom branded garment bag and certificate of authenticity",
      "Private fitting with the creative director",
    ],
    images: [
      "https://i.pinimg.com/736x/fa/b2/e4/fab2e48120199081accaf3bb1fecc6ec.jpg",
      "https://i.pinimg.com/736x/3c/b6/e6/3cb6e676d25f85b65faa96ce92971fc3.jpg",
      "https://i.pinimg.com/1200x/1d/88/92/1d8892918a9956eba6288b01fc972f88.jpg",
    ],
    featured: true,
    newArrival: true,
    sizes: ["40R", "42R", "44R", "46R", "48R"],
    colors: ["Midnight & Gold", "Black & Silver"],
    relatedProducts: [7, 23, 1],
  },
  {
    id: 23,
    name: "The Gold Thread Collection",
    slug: "the-gold-thread-collection",
    price: 6200,
    category: "Limited Editions",
    subcategory: "Evening Wear",
    fabric: "Silk & 24K Gold Thread",
    description:
      "An evening wear capsule woven with genuine 24-karat gold thread. The Gold Thread Collection represents the pinnacle of textile alchemy — where precious metal meets master craftsmanship in a garment of unparalleled luxury.",
    details: [
      "24K gold thread woven into silk fabric",
      "Evening jacket with satin peak lapels",
      "Matching waistcoat with gold-patterned back",
      "Flat-front evening trousers with silk stripe",
      "Limited to 25 pieces per colorway",
      "Includes lifetime repair guarantee",
    ],
    images: [
      "https://i.pinimg.com/736x/72/78/ed/7278ed6bf04d5b8766a05971dba4f14e.jpg",
      "https://i.pinimg.com/736x/a1/aa/ba/a1aaba5bbec720058632f834baf6313b.jpg",
      "https://i.pinimg.com/736x/f5/7e/b9/f57eb9c6e5ea498ae6051eae1f10baff.jpg",
    ],
    featured: true,
    newArrival: false,
    sizes: ["38R", "40R", "42R", "44R", "46R", "48R"],
    colors: ["Onyx & Gold", "Midnight & Silver", "Burgundy & Gold"],
    relatedProducts: [22, 4, 14],
  },

  // ── Accessories ─────────────────────────────────────────────────────────
  {
    id: 24,
    name: "The Regalia Tie Set",
    slug: "the-regalia-tie-set",
    price: 320,
    category: "Accessories",
    subcategory: "Neckwear",
    fabric: "Italian Silk Twill",
    description:
      "A curated set of three handmade ties in Italian silk twill, each featuring exclusive REGALIA patterns inspired by African geometric motifs. Hand-rolled edges and a bespoke keeper loop complete the finishing.",
    details: [
      "Set of three ties: solid, micro-pattern, and motif print",
      "Hand-rolled edges — seven-fold construction",
      "100% Italian silk with wool interlining",
      "Exclusive REGALIA geometric patterns",
      "Complimentary tie bar with set",
      "Presented in branded gift box",
    ],
    images: [
      "https://i.pinimg.com/736x/4a/63/3c/4a633c65f4d27477349ca55567047df8.jpg",
      "https://i.pinimg.com/736x/d7/47/b0/d747b00b5450b1d27675c723acb7b784.jpg",
      "https://i.pinimg.com/1200x/c1/20/02/c120027e9afa1eda8f36fd8bf3382f3e.jpg",
    ],
    featured: false,
    newArrival: false,
    sizes: ["One Size"],
    colors: ["Navy & Gold", "Burgundy & Silver", "Black & Gold"],
    relatedProducts: [25, 26, 1],
  },
  {
    id: 25,
    name: "The Leather Belt Collection",
    slug: "the-leather-belt-collection",
    price: 450,
    category: "Accessories",
    subcategory: "Belts",
    fabric: "Italian Full-Grain Leather",
    description:
      "Handcrafted from full-grain Italian calfskin with a subtle sheen that deepens with age. The REGALIA belt features a solid brass buckle engraved with the house monogram and hand-stitched edges using waxed linen thread.",
    details: [
      "Full-grain Italian calfskin leather",
      "Solid brass buckle with REGALIA monogram",
      "Hand-stitched edges in waxed linen thread",
      "35mm width — versatile for casual and formal",
      "Five holes with heat-sealed edges",
      "Presented in a linen dust bag",
    ],
    images: [
      "https://i.pinimg.com/736x/d7/47/b0/d747b00b5450b1d27675c723acb7b784.jpg",
      "https://i.pinimg.com/1200x/c1/20/02/c120027e9afa1eda8f36fd8bf3382f3e.jpg",
      "https://i.pinimg.com/736x/4a/63/3c/4a633c65f4d27477349ca55567047df8.jpg",
    ],
    featured: false,
    newArrival: true,
    sizes: ["32", "34", "36", "38", "40", "42"],
    colors: ["Black", "Cognac", "Dark Brown"],
    relatedProducts: [24, 26, 1],
  },
  {
    id: 26,
    name: "The Silk Pocket Square Set",
    slug: "the-silk-pocket-square-set",
    price: 280,
    category: "Accessories",
    subcategory: "Pocket Squares",
    fabric: "Italian Silk Charmeuse",
    description:
      "A set of four hand-rolled pocket squares in Italian silk charmeuse. Each square features an exclusive REGALIA print — from abstract Adinkra symbols to modern geometric compositions — designed to elevate any jacket pocket.",
    details: [
      "Set of four pocket squares",
      "100% Italian silk charmeuse",
      "Hand-rolled edges",
      "Exclusive REGALIA prints per season",
      "40 cm × 40 cm",
      "Machine-rolled hems for consistency",
    ],
    images: [
      "https://i.pinimg.com/1200x/c1/20/02/c120027e9afa1eda8f36fd8bf3382f3e.jpg",
      "https://i.pinimg.com/736x/4a/63/3c/4a633c65f4d27477349ca55567047df8.jpg",
      "https://i.pinimg.com/736x/d7/47/b0/d747b00b5450b1d27675c723acb7b784.jpg",
    ],
    featured: false,
    newArrival: false,
    sizes: ["One Size (40cm x 40cm)"],
    colors: ["Navy", "Burgundy", "Ivory", "Emerald"],
    relatedProducts: [24, 25, 1],
  },
  // ── Petite (children's line) ──────────────────────────────────────────────
  // PLACEHOLDER product — real Petite photography/entries to be supplied.
  {
    id: 27,
    name: "The Little Sovereign Kaftan",
    slug: "the-little-sovereign-kaftan",
    price: 480,
    category: "Petite",
    subcategory: "Kaftans",
    fabric: "Soft breathable cotton",
    description:
      "A junior kaftan in soft, breathable cloth with the REGALIA hand — clean lines, gentle finishing and a touch of gold at the collar. Made for naming ceremonies, weddings, and the days that end up framed on the wall.",
    details: [
      "Soft, breathable fabric",
      "Covered, comfortable seams",
      "Woven Petite label, no metal",
      "Cut to your child's measurements",
      "Room to move, with a little grace to grow",
    ],
    images: [
      "https://i.pinimg.com/736x/1a/ad/2b/1aad2b114c31f04b178dee1e26858f84.jpg",
      "https://i.pinimg.com/736x/cc/84/7c/cc847c0ce5c9f0828e91e0f155fe1f89.jpg",
      "https://i.pinimg.com/736x/11/da/f1/11daf18f60c2954e23c8d9e48910277e.jpg",
    ],
    featured: true,
    newArrival: true,
    sizes: [],
    ageRange: "1\u201312 Years",
    colors: ["Emerald & Gold", "Ivory & Gold", "Midnight & Gold"],
    relatedProducts: [],
    matchesAdultProductId: 1, // pairs with The Sovereign Suit — ready for Mini-Me
  },
];

// ---------------------------------------------------------------------------
// Collections (9 items)
// ---------------------------------------------------------------------------

export const collections: Collection[] = [
  {
    id: 1,
    name: "Menswear",
    slug: "menswear",
    description:
      "Impeccably tailored suits, blazers, and trousers for the modern gentleman. Each piece is a masterclass in precision tailoring, using the world's finest fabrics from Italian mills and English workshops.",
    image:
      "/men/2c8bc693880adb8e4bfe28a43af63a61.jpg",
    productCount: 3,
    featured: true,
  },
  {
    id: 2,
    name: "Womenswear",
    slug: "womenswear",
    description:
      "Powerful silhouettes and sumptuous fabrics define the REGALIA womenswear collection. From commanding blazers to ethereal gowns, every piece is designed for the woman who leads with style.",
    image:
      "https://i.pinimg.com/1200x/8d/3c/cd/8d3ccd15a0fc2535ea7b5330f3807595.jpg",
    productCount: 3,
    featured: true,
  },
  {
    id: 3,
    name: "Native Wear",
    slug: "native-wear",
    description:
      "A celebration of African sartorial heritage, reimagined through the lens of luxury. Agbadas, Senator sets, and Iro & Buba ensembles crafted with ancestral techniques and contemporary refinement.",
    image:
      "https://i.pinimg.com/1200x/1d/88/92/1d8892918a9956eba6288b01fc972f88.jpg",
    productCount: 3,
    featured: true,
  },
  {
    id: 4,
    name: "Corporate",
    slug: "corporate",
    description:
      "Commanding professional attire engineered for the boardroom and beyond. Wrinkle-resistant, travel-friendly, and effortlessly authoritative — because leadership is worn, not spoken.",
    image:
      "https://i.pinimg.com/736x/a6/d8/58/a6d8589d27a7d6bea9447c2e46bc9bef.jpg",
    productCount: 3,
    featured: false,
  },
  {
    id: 5,
    name: "Wedding",
    slug: "wedding",
    description:
      "For the moments that matter most. Bespoke bridal and groom ensembles crafted with devotion, precision, and an unwavering commitment to making your day unforgettable.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/African_Fashion_in_Uganda_01.jpg/960px-African_Fashion_in_Uganda_01.jpg",
    productCount: 3,
    featured: true,
  },
  {
    id: 6,
    name: "Luxury Casual",
    slug: "luxury-casual",
    description:
      "Relaxed elegance for the discerning weekend. Linen suits, resort sets, and elevated separates that prove comfort and luxury are never mutually exclusive.",
    image:
      "https://i.pinimg.com/1200x/24/c3/1a/24c31a86f610c9e1d150156537cb0eac.jpg",
    productCount: 3,
    featured: false,
  },
  {
    id: 7,
    name: "Ready to Wear",
    slug: "ready-to-wear",
    description:
      "Immediate luxury, zero compromise. Our ready-to-wear collection delivers REGALIA's signature quality in versatile, everyday pieces — from perfect shirting to essential chinos.",
    image:
      "https://i.pinimg.com/1200x/10/11/b0/1011b04e90efffe78d58348f498f6007.jpg",
    productCount: 3,
    featured: false,
  },
  {
    id: 8,
    name: "Limited Editions",
    slug: "limited-editions",
    description:
      "Rare, numbered, and extraordinary. Our limited editions fuse African artistry with European craftsmanship in garments that transcend fashion to become collectible works of art.",
    image:
      "https://i.pinimg.com/1200x/24/c3/1a/24c31a86f610c9e1d150156537cb0eac.jpg",
    productCount: 2,
    featured: true,
  },
  {
    id: 9,
    name: "Accessories",
    slug: "accessories",
    description:
      "The finishing touches that distinguish the distinguished. Handcrafted silk ties, Italian leather belts, and printed pocket squares — each a small masterpiece of detail and intention.",
    image:
      "https://i.pinimg.com/1200x/c1/20/02/c120027e9afa1eda8f36fd8bf3382f3e.jpg",
    productCount: 3,
    featured: false,
  },
  {
    id: 10,
    name: "Petite",
    slug: "petite",
    description:
      "Ceremonial and occasion wear for children — crafted with the care of the house, and made for the way children actually move. Distinction begins early.",
    image:
      "https://i.pinimg.com/736x/11/da/f1/11daf18f60c2954e23c8d9e48910277e.jpg",
    productCount: 1,
    featured: true,
  },
];

// ---------------------------------------------------------------------------
// Testimonials (6 items)
// ---------------------------------------------------------------------------

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Chief Adewale Okonkwo",
    title: "Chairman, Okonkwo Holdings",
    quote:
      "REGALIA understands that clothing is not merely worn — it is projected. Every Agbada they have crafted for me has been a statement of identity. The artisanship is simply unmatched on the continent.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Philip_Emeagwali_in_white_%22agbada.%22.jpg/960px-Philip_Emeagwali_in_white_%22agbada.%22.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Amara Osei-Mensah",
    title: "CEO, Meridian Capital Partners",
    quote:
      "I've had suits made in Savile Row, Milan, and Hong Kong. REGALIA by June & Co. stands shoulder to shoulder with the very best. Their attention to cultural detail while maintaining global sophistication is remarkable.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Philip_Emeagwali_in_white_%22agbada.%22.jpg/960px-Philip_Emeagwali_in_white_%22agbada.%22.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Oluwaseun Adeyemi",
    title: "Partner, Adeyemi & Associates",
    quote:
      "The Boardroom Suit has become my uniform of authority. Clients notice. Juries notice. There is an undeniable confidence that comes from wearing something made with such intention and precision.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Philip_Emeagwali_in_white_%22agbada.%22.jpg/960px-Philip_Emeagwali_in_white_%22agbada.%22.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "Ngozi Eze-Okoro",
    title: "Creative Director, Luxe Africa Magazine",
    quote:
      "As someone who reviews luxury fashion for a living, I can say without hesitation that REGALIA's Limited Editions are among the most exciting garments being produced anywhere in the world today. The Kente Masterpiece is a work of art.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Philip_Emeagwali_in_white_%22agbada.%22.jpg/960px-Philip_Emeagwali_in_white_%22agbada.%22.jpg",
    rating: 5,
  },
  {
    id: 5,
    name: "Kofi Asante",
    title: "Ambassador, Republic of Ghana",
    quote:
      "When I represent my country on the world stage, I wear REGALIA. Their ability to weave Ghanaian heritage into a garment that commands respect in any embassy or state house is truly extraordinary.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Philip_Emeagwali_in_white_%22agbada.%22.jpg/960px-Philip_Emeagwali_in_white_%22agbada.%22.jpg",
    rating: 4,
  },
  {
    id: 6,
    name: "Zainab El-Amin",
    title: "Founder, ZEA Interiors",
    quote:
      "From the initial consultation to the final fitting, the REGALIA experience is pure luxury. They didn't just make me a dress — they understood my brand, my body, and my vision. The Empress Gown was perfection.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Philip_Emeagwali_in_white_%22agbada.%22.jpg/960px-Philip_Emeagwali_in_white_%22agbada.%22.jpg",
    rating: 5,
  },
];

// ---------------------------------------------------------------------------
// Fabrics (8 items from 8 countries)
// ---------------------------------------------------------------------------

export const fabrics: Fabric[] = [
  {
    id: 1,
    name: "Super 150s Wool",
    origin: "Italy",
    description:
      "Sourced through REGALIA's direct partnerships with the world's finest mills, this ultra-fine merino wool boasts a thread count of 150s — yielding a fabric of extraordinary softness with a luminous sheen. It drapes like liquid and resists wrinkling, making it the gold standard for REGALIA's signature suits.",
    texture:
      "https://upload.wikimedia.org/wikipedia/commons/5/5b/Kent_wove.jpg",
    properties: [
      "Ultra-fine 150s thread count",
      "Natural breathability",
      "Wrinkle-resistant",
      "Luminous sheen",
      "Lightweight at 240gsm",
      "Color-fast dye process",
    ],
  },
  {
    id: 2,
    name: "Westminster Worsted",
    origin: "England",
    description:
      "A heritage worsted wool from the Huddersfield district, renowned for centuries as the epicenter of premium cloth. The Westminster Worsted has a crisp hand, excellent drape, and a subtle diagonal twill weave that speaks of quiet authority.",
    texture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Stack_of_Adire_%2C_a_local_Fabric_from_Abeoukuta.JPG/960px-Stack_of_Adire_%2C_a_local_Fabric_from_Abeoukuta.JPG",
    properties: [
      "Traditional Huddersfield weave",
      "Firm, crisp hand feel",
      "Excellent shape retention",
      "Medium weight at 300gsm",
      "Moisture-wicking natural fiber",
      "Biodegradable and sustainable",
    ],
  },
  {
    id: 3,
    name: "Aegean Cotton Twill",
    origin: "Turkey",
    description:
      "Grown in the Aegean coastal region and woven in Istanbul's historic textile quarter, this long-staple cotton twill offers remarkable durability with a buttery soft hand. Its diagonal weave creates a subtle texture that elevates any garment.",
    texture:
      "https://upload.wikimedia.org/wikipedia/commons/3/3a/Traditional_mud_cloth.jpg",
    properties: [
      "Extra-long staple cotton",
      "Diagonal twill weave texture",
      "High tensile strength",
      "Softens beautifully with wear",
      "Medium weight at 280gsm",
      "Pre-shrunk during milling",
    ],
  },
  {
    id: 4,
    name: "Royal Kente",
    origin: "Ghana",
    description:
      "Handwoven on traditional looms in Bonwire, the birthplace of Kente cloth. Each pattern carries deep cultural significance — from the Adwenasa (all motifs are exhausted) to the Enea (four-leaf clover for prosperity). Woven with silk and rayon threads for a luxurious drape.",
    texture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Ghanaian_African_Print_Fashion%2C_Dresses.jpg/960px-Ghanaian_African_Print_Fashion%2C_Dresses.jpg",
    properties: [
      "Handwoven on traditional narrow looms",
      "Silk and rayon thread blend",
      "Each pattern has cultural meaning",
      "Vibrant, color-fast dyes",
      "Substantial weight at 350gsm",
      "120+ hours of weaving per strip",
    ],
  },
  {
    id: 5,
    name: "Aso Oke",
    origin: "Nigeria",
    description:
      "The quintessential Yoruba textile, handwoven in Iseyin, Oyo State. Aso Oke (translated as 'top cloth') is traditionally reserved for special occasions. REGALIA sources the finest Alaari (red), Sanyan (brown/beige), and Etu (dark blue) varieties, incorporating metallic thread for contemporary luxury.",
    texture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/The_Regberegbe_Age_Groups.jpg/960px-The_Regberegbe_Age_Groups.jpg",
    properties: [
      "Handwoven on narrow-strip looms",
      "Three traditional colorways: Alaari, Sanyan, Etu",
      "Metallic thread accents available",
      "Open weave for breathability",
      "Weight varies 200–400gsm by style",
      "Cultural heritage textile",
    ],
  },
  {
    id: 6,
    name: "Mysore Silk",
    origin: "India",
    description:
      "From the silk farms of Karnataka, this pure mulberry silk is celebrated for its natural golden sheen and luxurious drape. Mysore Silk carries a Geographical Indication tag, ensuring authenticity and supporting the centuries-old tradition of Indian sericulture.",
    texture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Ewe_kente_stripes%2C_Ghana.jpg/960px-Ewe_kente_stripes%2C_Ghana.jpg",
    properties: [
      "Pure mulberry silk",
      "Natural golden luster",
      "Exceptional drape",
      "Temperature-regulating",
      "Lightweight at 120gsm",
      "Geographical Indication certified",
    ],
  },
  {
    id: 7,
    name: "Swiss Voile",
    origin: "Switzerland",
    description:
      "Pinnacle cotton voile from St. Gallen, the embroidery capital of the world. This ultra-fine, sheer cotton fabric is prized for its exceptional softness, delicate hand, and the subtle crispness that makes it ideal for structured yet feminine garments.",
    texture:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Ewe_kente_2%2C_Ghana.JPG/960px-Ewe_kente_2%2C_Ghana.JPG",
    properties: [
      "Ultra-fine 120-thread-count voile",
      "St. Gallen heritage production",
      "Sheer yet durable",
      "Exceptionally soft hand",
      "Lightweight at 100gsm",
      "Machine washable on gentle cycle",
    ],
  },
  {
    id: 8,
    name: "Niigata Linen",
    origin: "Japan",
    description:
      "Cultivated and woven in Niigata Prefecture, one of Japan's premier textile regions. This premium linen is made from European flax refined using traditional Japanese techniques, resulting in a fabric of extraordinary smoothness, strength, and character that improves with age.",
    texture:
      "https://upload.wikimedia.org/wikipedia/commons/5/5b/Kent_wove.jpg",
    properties: [
      "European flax, Japanese refinement",
      "Natural anti-bacterial properties",
      "Exceptional moisture absorption",
      "Develops unique patina with age",
      "Medium weight at 250gsm",
      "Pre-washed for softness",
    ],
  },
];

// ---------------------------------------------------------------------------
// Services (6 items)
// ---------------------------------------------------------------------------

export const services: Service[] = [
  {
    id: 1,
    title: "Wardrobe Consulting",
    description:
      "A comprehensive wardrobe audit and rebuild designed to align your personal style with your professional aspirations and lifestyle. Our consultants curate a capsule wardrobe that maximizes versatility and impact across every facet of your life.",
    icon: "Shirt",
    features: [
      "In-depth style assessment and lifestyle audit",
      "Existing wardrobe evaluation and editing",
      "Personalized color palette development",
      "Capsule wardrobe curation (20–30 pieces)",
      "Seasonal update recommendations",
      "Digital lookbook for daily outfit planning",
    ],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/African_Fashion_in_the_City.JPG/960px-African_Fashion_in_the_City.JPG",
  },
  {
    id: 2,
    title: "Wedding Styling",
    description:
      "From engagement to reception, our wedding styling service ensures every member of your bridal party looks extraordinary. We manage the complete sartorial vision — from the groom's bespoke suit to coordinated party attire and accessories.",
    icon: "Heart",
    features: [
      "Bridal party style consultation",
      "Bespoke suit design for the groom",
      "Coordinated party attire (5+ guests)",
      "Fabric and accessory selection",
      "Multiple fitting sessions",
      "Day-of emergency styling kit",
    ],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/African_Fashion_in_Uganda_01.jpg/960px-African_Fashion_in_Uganda_01.jpg",
  },
  {
    id: 3,
    title: "Corporate Uniforms",
    description:
      "Elevate your brand's first impression with bespoke corporate uniforms that reflect your company's values, culture, and aesthetic. We design, produce, and maintain uniform programs for luxury hospitality, finance, and executive firms.",
    icon: "Briefcase",
    features: [
      "Brand-aligned design consultation",
      "Custom fabric development",
      "Size-inclusive range (XS–4XL)",
      "Bulk production with quality assurance",
      "Seasonal collection updates",
      "Dedicated account management",
    ],
    image:
      "https://i.pinimg.com/736x/4d/ac/c3/4dacc3f44d4aae383997f97be9b4924e.jpg",
  },
  {
    id: 4,
    title: "VIP Experience",
    description:
      "The ultimate REGALIA experience for our most discerning clients. The VIP package includes private atelier visits, dedicated stylists, priority access to limited editions, and a concierge service that ensures your wardrobe is always event-ready.",
    icon: "Crown",
    features: [
      "Private atelier visits by appointment",
      "Dedicated personal stylist",
      "Priority access to new collections and limited editions",
      "Home or office fitting service",
      "Complimentary garment maintenance (annual)",
      "Exclusive invitations to REGALIA events",
    ],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/African_Fashion_in_the_City_3.JPG/960px-African_Fashion_in_the_City_3.JPG",
  },
  {
    id: 5,
    title: "Image Consulting",
    description:
      "Beyond clothing — we shape how the world perceives you. Our image consulting service integrates wardrobe, grooming, communication, and personal branding into a cohesive strategy for professionals, public figures, and executives.",
    icon: "UserCheck",
    features: [
      "Personal brand assessment",
      "Wardrobe and grooming overhaul",
      "Communication style coaching",
      "Social media presence audit",
      "Public appearance preparation",
      "Ongoing quarterly reviews",
    ],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/Mamadou_Tandja_2005.jpg",
  },
  {
    id: 6,
    title: "Fashion Advisory",
    description:
      "Expert guidance for those navigating significant style transitions — a new role, a new city, a new chapter. Our fashion advisors provide strategic counsel to help you build a wardrobe that reflects who you are becoming.",
    icon: "Compass",
    features: [
      "Life transition style strategy",
      "Investment piece recommendations",
      "Seasonal trend analysis (filtered for your lifestyle)",
      "Shopping companion service",
      "Travel wardrobe planning",
      "Digital wardrobe management app access",
    ],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Philip_Emeagwali_in_white_%22agbada.%22.jpg/960px-Philip_Emeagwali_in_white_%22agbada.%22.jpg",
  },
];

// ---------------------------------------------------------------------------
// Journal Posts (9 items)
// ---------------------------------------------------------------------------

export const journalPosts: JournalPost[] = [
  {
    id: 1,
    title: "The New Rules of Power Dressing: Africa Leading the Conversation",
    slug: "new-rules-of-power-dressing-africa",
    excerpt:
      "How African designers are redefining global power dressing by fusing cultural identity with sartorial excellence — and why the world's most influential leaders are taking notice.",
    category: "Style",
    author: "June Aramide Eyenre",
    date: "2024-11-15",
    readTime: "8 min read",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/16/Dashiki_and_kufi_%28cropped%29.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "The Art of Aso Oke: A Textile Tradition Spanning Centuries",
    slug: "art-of-aso-oke-textile-tradition",
    excerpt:
      "We travel to Iseyin, Nigeria, to meet the master weavers keeping the ancient art of Aso Oke alive — and discover why this fabric is experiencing a global renaissance in luxury fashion.",
    category: "Culture",
    author: "Kwame Asante",
    date: "2024-10-28",
    readTime: "12 min read",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/The_Regberegbe_Age_Groups.jpg/960px-The_Regberegbe_Age_Groups.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "Inside the Atelier: How a REGALIA Suit Is Made",
    slug: "inside-the-atelier-regalia-suit-process",
    excerpt:
      "A step-by-step journey through the creation of a REGALIA bespoke suit — from the initial consultation and fabric selection to the final hand-stitching that transforms cloth into character.",
    category: "Craft",
    author: "June Aramide Eyenre",
    date: "2024-10-10",
    readTime: "15 min read",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/African_Fashion_in_the_City_3.JPG/960px-African_Fashion_in_the_City_3.JPG",
    featured: false,
  },
  {
    id: 4,
    title: "The Gentleman's Guide to Fabric: Knowing Your Wool from Your Worsted",
    slug: "gentlemans-guide-to-fabric",
    excerpt:
      "Understanding fabric is the foundation of sartorial intelligence. This comprehensive guide demystifies thread counts, weaves, and weights — empowering you to make informed decisions about what you wear and why.",
    category: "Gentleman",
    author: "Olumide Ogundimu",
    date: "2024-09-22",
    readTime: "10 min read",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5b/Kent_wove.jpg",
    featured: false,
  },
  {
    id: 5,
    title: "Dressing for Impact: How Women in Leadership Use Fashion as Strategy",
    slug: "women-leadership-fashion-strategy",
    excerpt:
      "From boardrooms to state houses, we explore how Africa's most influential women leverage fashion as a deliberate tool for communication, authority, and cultural pride.",
    category: "Women",
    author: "Ngozi Eze-Okoro",
    date: "2024-09-05",
    readTime: "9 min read",
    image:
      "https://i.pinimg.com/1200x/8d/3c/cd/8d3ccd15a0fc2535ea7b5330f3807595.jpg",
    featured: true,
  },
  {
    id: 6,
    title: "The House of June: Our Philosophy of Luxury",
    slug: "house-of-june-philosophy-of-luxury",
    excerpt:
      "Luxury is not a price point — it is a standard of care. In this founding essay, we share the principles that guide every decision at REGALIA, from fabric sourcing to the way we answer the telephone.",
    category: "House",
    author: "June Aramide Eyenre",
    date: "2024-08-18",
    readTime: "7 min read",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/African_Fashion_in_the_City_3.JPG/960px-African_Fashion_in_the_City_3.JPG",
    featured: false,
  },
  {
    id: 7,
    title: "Kente Beyond Borders: A Ghanaian Cloth Conquers Global Fashion",
    slug: "kente-beyond-borders-global-fashion",
    excerpt:
      "Once reserved for Ashanti royalty, Kente cloth now walks the runways of Paris, Milan, and New York. We trace its journey from Bonwire loom to global icon — and examine the questions of appropriation and appreciation.",
    category: "Culture",
    author: "Kwame Asante",
    date: "2024-08-01",
    readTime: "11 min read",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Ghanaian_African_Print_Fashion%2C_Dresses.jpg/960px-Ghanaian_African_Print_Fashion%2C_Dresses.jpg",
    featured: false,
  },
  {
    id: 8,
    title: "Building a Capsule Wardrobe: The REGALIA Method",
    slug: "building-capsule-wardrobe-regalia-method",
    excerpt:
      "A luxury wardrobe is not about quantity — it is about intention. We break down our proven method for building a capsule wardrobe of 25 pieces that covers every occasion, season, and scenario in a professional's life.",
    category: "Style",
    author: "Olumide Ogundimu",
    date: "2024-07-15",
    readTime: "14 min read",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/African_Fashion_in_the_City.JPG/960px-African_Fashion_in_the_City.JPG",
    featured: false,
  },
  {
    id: 9,
    title: "The Bespoke Process: Why 60 Hours of Handwork Changes Everything",
    slug: "bespoke-process-60-hours-handwork",
    excerpt:
      "In an age of mass production, the art of bespoke tailoring is an act of rebellion. We document the 60-hour journey of a single REGALIA bespoke garment — and explain why every minute matters.",
    category: "Craft",
    author: "June Aramide Eyenre",
    date: "2024-06-28",
    readTime: "13 min read",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Cultural_Fashion_and_Adornment%2C_El_Moez_St.%2C_00_%2870%29.JPG/960px-Cultural_Fashion_and_Adornment%2C_El_Moez_St.%2C_00_%2870%29.JPG",
    featured: false,
  },
];

// ---------------------------------------------------------------------------
// Timeline Events (8 items — brand story)
// ---------------------------------------------------------------------------

export const timelineEvents: TimelineEvent[] = [
  {
    id: 1,
    year: "2014",
    title: "The First Stitch",
    description:
      "REGALIA begins on a busy Tse-Addo roadside in Accra, where Michael Agbenyega and June Aramide Eyenre first join Ghanaian tailoring culture with the finest Nigerian fabrics — driven by a singular vision: to create world-class luxury fashion rooted in African heritage. The first commission sets the standard for everything that follows.",
  },
  {
    id: 2,
    year: "2016",
    title: "Forging Sourcing Partnerships",
    description:
      "Direct sourcing relationships are established with Nigeria's great textile markets — Aba, Lagos, Onitsha and Kano — securing the finest fabrics, the freshest trends, and a deep command of ceremonial dress. Combined with heritage mills abroad, these partnerships give REGALIA access to materials used by the most prestigious houses in the world.",
  },
  {
    id: 3,
    year: "2017",
    title: "The REGALIA Atelier Opens",
    description:
      "The first dedicated REGALIA atelier opens in Accra — a 3,000-square-foot space designed to house the full bespoke experience under one roof: consultation, measurement, fabric selection, fitting, and finishing.",
  },
  {
    id: 4,
    year: "2018",
    title: "Dressing the Nation",
    description:
      "REGALIA is commissioned to design the inaugural wardrobe for a sitting African head of state. The project brings national attention to the brand and cements its reputation as the choice of leaders and dignitaries.",
  },
  {
    id: 5,
    year: "2019",
    title: "The Kente Masterpiece Launch",
    description:
      "The brand's first limited edition — The Kente Masterpiece — launches to critical acclaim. A collaboration between Bonwire weavers and Italian tailors, all 12 pieces sell out within 72 hours, establishing REGALIA's position at the intersection of culture and luxury.",
  },
  {
    id: 6,
    year: "2020",
    title: "Expanding the Vision",
    description:
      "Despite global challenges, REGALIA launches its full womenswear line and Corporate Uniforms division. The brand also begins offering virtual consultations, making its bespoke services accessible to clients across Africa and the diaspora.",
  },
  {
    id: 7,
    year: "2022",
    title: "International Recognition",
    description:
      "REGALIA is featured in Vogue, GQ, and Financial Times as one of Africa's most exciting luxury brands. The brand receives the African Fashion International Award for Excellence in Craftsmanship, and opens a showroom in Lagos, Nigeria — deepening the house's connection to Nigerian sourcing and clientele.",
  },
  {
    id: 8,
    year: "2024",
    title: "The Next Chapter",
    description:
      "REGALIA by June & Co. launches its digital flagship, bringing the full luxury experience online. With a growing team of 45 artisans, partnerships across 6 countries, and a client base spanning three continents, the house enters its most ambitious era yet.",
  },
];

// ---------------------------------------------------------------------------
// Founders (2 items)
// ---------------------------------------------------------------------------

export const founders: Founder[] = [
  {
    id: 1,
    name: "Michael Agbenyega",
    role: "Founder · Majority Shareholder · Executive Chairman & CEO",
    bio: "As Founder, Majority Shareholder, and Executive Chairman & CEO of REGALIA, Michael Agbenyega steers the house with disciplined business leadership. He oversees strategic leadership, corporate governance, investor relations, financial oversight, and business development — while championing technology leadership and regional expansion across the continent. Michael's vision ensures that REGALIA's growth is as considered and precise as the garments it creates.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/Mamadou_Tandja_2005.jpg",
  },
  {
    id: 2,
    name: "June Aramide Eyenre",
    role: "Co-Founder · Shareholder · Creative Director",
    bio: "As Co-Founder, Shareholder, and Creative Director of REGALIA, June Aramide Eyenre is the creative heart of the house. June leads design, product development, and production — setting uncompromising standards in quality assurance and fashion innovation — while nurturing talent and cultivating sourcing relationships with Nigeria's finest textile suppliers. Every collection carries June's signature: African heritage reimagined through the lens of contemporary luxury.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Philip_Emeagwali_in_white_%22agbada.%22.jpg/960px-Philip_Emeagwali_in_white_%22agbada.%22.jpg",
  },
];

// ---------------------------------------------------------------------------
// FAQs (6 items)
// ---------------------------------------------------------------------------

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "How long does the bespoke process take?",
    answer:
      "The complete bespoke process typically takes 6 to 8 weeks from the initial consultation to final delivery. This includes two to three fitting sessions to ensure a flawless result. For wedding orders, we recommend beginning the process at least 12 weeks before the event to allow for any adjustments. Rush orders (4-week turnaround) are available for an additional fee, subject to atelier capacity.",
  },
  {
    id: 2,
    question: "Do you ship internationally?",
    answer:
      "Yes. We ship to over 40 countries worldwide using premium courier services with full insurance and tracking. International orders for ready-to-wear items typically arrive within 5 to 10 business days. For bespoke orders, we can arrange international fittings through our partner ateliers in London, New York, and Dubai, or via our virtual fitting service.",
  },
  {
    id: 3,
    question: "What is your return and exchange policy?",
    answer:
      "Ready-to-wear items may be returned or exchanged within 14 days of delivery, provided they are unworn, unwashed, and in original condition with all tags attached. Bespoke and made-to-measure garments are non-returnable, as they are crafted to your exact measurements. We offer complimentary alterations within 30 days of delivery to ensure the perfect fit.",
  },
  {
    id: 4,
    question: "Can I request custom fabrics or colors not shown on the website?",
    answer:
      "Absolutely. Our fabric library includes over 2,000 textiles from mills in Italy, England, Switzerland, Japan, India, Turkey, Ghana, and Nigeria. If you have a specific fabric or color in mind, our consultants will work to source it for you. Custom fabric requests may extend the production timeline by 2 to 4 weeks.",
  },
  {
    id: 5,
    question: "Do you offer gift cards or corporate gifting?",
    answer:
      "Yes. REGALIA gift cards are available in denominations from ₦50,000 to ₦5,000,000 and can be used toward any product or service. For corporate gifting, we offer curated gift sets, bespoke accessories, and experience packages. Please contact our concierge team for volume pricing and custom packaging options.",
  },
  {
    id: 6,
    question: "How do I care for my REGALIA garments?",
    answer:
      "Each REGALIA garment comes with specific care instructions. As a general rule, we recommend professional dry cleaning for suits, blazers, and structured garments. Our linen and cotton casual pieces may be machine-washed on a gentle cycle. We offer a complimentary annual refresh service for bespoke clients, which includes professional cleaning, pressing, and minor repairs. A detailed care guide is included with every purchase.",
  },
];

// ---------------------------------------------------------------------------
// Instagram Posts (6 items)
// ---------------------------------------------------------------------------

export const instagramPosts: InstagramPost[] = [
  {
    id: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/African_Fashion_in_the_City_4.JPG/960px-African_Fashion_in_the_City_4.JPG",
    likes: 4821,
    caption:
      "The Sovereign Suit. Commanding. Precise. Unapologetic. Cut from Italian Super 150s wool and finished with hand-padded shoulders. This is what authority looks like. #REGALIA #Bespoke #Menswear #AfricanLuxury",
  },
  {
    id: 2,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/African_Fashion_in_the_City_6.JPG/960px-African_Fashion_in_the_City_6.JPG",
    likes: 7234,
    caption:
      "Heritage in every thread. Our Agbada Royale is handwoven by master artisans in Iseyin, Nigeria — each piece takes over 120 hours to complete. When tradition meets luxury, the result is timeless. #AsoOke #Heritage #REGALIA #NigerianFashion",
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/736x/ec/eb/cf/ecebcf84219b93c9cbc8337358c7278f.jpg",
    likes: 5612,
    caption:
      "The Empress Gown — for the woman who enters a room and changes its energy entirely. Silk crepe de Chine, sculptural one-shoulder silhouette, and a train that commands every photographer's lens. #Womenswear #LuxuryFashion #REGALIA",
  },
  {
    id: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/African_Fashion_in_the_City.JPG/960px-African_Fashion_in_the_City.JPG",
    likes: 3945,
    caption:
      "For the moments that define a lifetime. Our Wedding Collection is designed with devotion and crafted with precision — because your day deserves nothing less than perfection. #REGALIAWedding #BridalFashion #GroomStyle",
  },
  {
    id: 5,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/African_Fashion_in_the_City_7.JPG/960px-African_Fashion_in_the_City_7.JPG",
    likes: 6108,
    caption:
      "Behind the scenes at our Lagos atelier. This is where cloth becomes character. Every REGALIA garment passes through the hands of at least 12 artisans before it reaches yours. #Atelier #Craftsmanship #MadeInNigeria #REGALIA",
  },
  {
    id: 6,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/African_Street_Style_Festival_2016_-_Colourful_African_style_clothing_for_sale.png/960px-African_Street_Style_Festival_2016_-_Colourful_African_style_clothing_for_sale.png",
    likes: 4390,
    caption:
      "The Kente Masterpiece — Limited to 12 pieces worldwide. Bonwire heritage meets Italian tailoring in a garment that transcends fashion. Only 4 remaining. Inquire privately. #LimitedEdition #Kente #AfricanLuxury #CollectibleFashion",
  },
];