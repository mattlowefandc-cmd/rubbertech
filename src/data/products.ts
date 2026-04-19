// =============================================================================
// RUBBER TECH — Complete Nankang Product Data
// =============================================================================

export interface TyreSize {
  size: string;
  loadRating: number;
  speedIndex: string;
  rrc?: string;
  wetGrip?: string;
  noiseDb?: number;
  noiseClass?: string;
  sectionWidth?: number;
  overallDiameter?: number;
  rimWidth?: string;
}

export interface TyreProduct {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  usageSplit: string;
  category: TyreCategory;
  subcategory?: string;
  badge?: string;
  priceFrom?: number;
  image: string;
  featured: boolean;
  sizes: TyreSize[];
  expertView: string;
  compatibleVehicles?: string[];
  certifications?: string[];
  seoTitle: string;
  seoDescription: string;
  schema?: object;
}

export type TyreCategory =
  | "car"
  | "motorsport"
  | "4x4"
  | "suv"
  | "ev"
  | "commercial"
  | "winter"
  | "all-season"
  | "motorcycle"
  | "retro"
  | "runflat";

export interface ProductRange {
  id: string;
  name: string;
  slug: string;
  description: string;
  category: TyreCategory;
  icon: string;
  products: TyreProduct[];
}

// =============================================================================
// CAR TYRES
// =============================================================================

export const carProducts: TyreProduct[] = [
  {
    id: "as-3",
    slug: "as-3",
    name: "AS-3",
    tagline: "Next-Generation Touring Performance",
    description:
      "The Nankang AS-3 represents the pinnacle of touring tyre technology, built around a revolutionary nanomaterial compound that dramatically enhances wet grip and handling performance. Acoustic software simulation ensures exceptionally low cabin noise across all speed ranges.",
    features: [
      "New-generation nanomaterial compound for superior wet grip",
      "Acoustic simulation software reduces road noise by up to 3dB",
      "Circumferential groove diversion channels evacuate water rapidly",
      "Bevel design lateral grooves increase block stiffness and longevity",
      "Available up to 23-inch rim diameter for luxury vehicles",
      "A-rated wet grip across most sizes",
      "EU tyre label B-rated rolling resistance",
    ],
    usageSplit: "100% Road",
    category: "car",
    subcategory: "performance",
    badge: "Best Seller",
    priceFrom: 65,
    image: "/images/tyres/as-3.png",
    featured: true,
    compatibleVehicles: ["BMW 3 Series", "Audi A4", "Mercedes C-Class", "VW Golf", "Ford Focus", "Vauxhall Astra"],
    certifications: ["EU Tyre Label", "E-Mark"],
    seoTitle: "Nankang AS-3 Tyres UK | Buy Online | Rubber Tech",
    seoDescription:
      "Buy Nankang AS-3 tyres in the UK from Rubber Tech, authorised Nankang dealers. Nano compound, A-rated wet grip, ultra-low noise. Free UK delivery. Sizes from 16\" to 23\".",
    expertView:
      "The AS-3 is the tyre we recommend most to our UK customers who want a genuine step up from budget rubber without paying premium brand prices. The nano compound is the real deal — we've seen measurable improvements in wet stopping distances versus its predecessor. The acoustic engineering is also class-leading; at motorway speeds the AS-3 is genuinely quiet. If you're running anything from a VW Golf to a BMW 3 Series and want outstanding all-round performance, the AS-3 is our top pick in the Nankang road car range.",
    sizes: [
      { size: "215/55R17 AS-3 XL", loadRating: 98, speedIndex: "V", rrc: "B", wetGrip: "A", noiseDb: 72, noiseClass: "B" },
      { size: "215/55R18 AS-3 XL", loadRating: 99, speedIndex: "V", rrc: "B", wetGrip: "A", noiseDb: 72, noiseClass: "B" },
      { size: "235/60R18 AS-3 XL", loadRating: 107, speedIndex: "V", rrc: "B", wetGrip: "A", noiseDb: 72, noiseClass: "B" },
      { size: "225/45R17 AS-3 XL", loadRating: 94, speedIndex: "W", rrc: "B", wetGrip: "A", noiseDb: 71, noiseClass: "B" },
      { size: "235/45R18 AS-3 XL", loadRating: 98, speedIndex: "W", rrc: "B", wetGrip: "A", noiseDb: 72, noiseClass: "B" },
      { size: "245/40R18 AS-3 XL", loadRating: 97, speedIndex: "Y", rrc: "C", wetGrip: "A", noiseDb: 72, noiseClass: "B" },
      { size: "255/35R19 AS-3 XL", loadRating: 96, speedIndex: "Y", rrc: "C", wetGrip: "A", noiseDb: 72, noiseClass: "B" },
      { size: "285/35ZR23 AS-3 XL", loadRating: 107, speedIndex: "Y", rrc: "B", wetGrip: "A", noiseDb: 73, noiseClass: "B" },
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Nankang AS-3",
      brand: { "@type": "Brand", name: "Nankang" },
      description: "Next-generation nanomaterial touring tyre with A-rated wet grip",
      offers: { "@type": "Offer", priceCurrency: "GBP", price: "65.00", availability: "https://schema.org/InStock" },
    },
  },
  {
    id: "as-2-plus",
    slug: "as-2plus",
    name: "AS-2+",
    tagline: "World-Class High Performance Road Tyre",
    description:
      "The Nankang AS-2+ is engineered to satisfy the most demanding high-performance drivers. Designed specifically for modern performance vehicles with wide, low-profile fitments, the AS-2+ delivers exceptional cornering stability, precise steering response, and impressive wet weather confidence.",
    features: [
      "Asymmetric tread pattern for optimal dry and wet performance",
      "High-silica compound for superior wet grip",
      "Reinforced shoulder blocks for high-speed cornering stability",
      "Enhanced aquaplaning resistance with wide circumferential grooves",
      "Available in ultra-low profiles down to 25 series",
      "Proven in multiple competitive motorsport championships",
    ],
    usageSplit: "100% Road",
    category: "car",
    subcategory: "high-performance",
    badge: "Championship Proven",
    priceFrom: 75,
    image: "/images/tyres/as-2plus.png",
    featured: true,
    compatibleVehicles: ["BMW M3", "Audi S3", "Mercedes AMG", "Porsche Cayman", "Honda Civic Type R"],
    seoTitle: "Nankang AS-2+ High Performance Tyres UK | Rubber Tech",
    seoDescription:
      "Buy Nankang AS-2+ high performance tyres from Rubber Tech UK. Asymmetric compound, outstanding wet grip, proven in motorsport. Free UK delivery.",
    expertView:
      "The AS-2+ is what we put on our own cars. It punches well above its price point against premium brands in independent tests. We've seen this tyre in action across multiple UK race series and track day events — the consistency across a full session is impressive. For hot hatches, sports saloons, and anything with a plus-sized fitment, the AS-2+ is exceptional value.",
    sizes: [
      { size: "205/45R17 XL", loadRating: 88, speedIndex: "W" },
      { size: "225/35R19 XL", loadRating: 88, speedIndex: "Y" },
      { size: "245/35R20 XL", loadRating: 95, speedIndex: "Y" },
      { size: "255/30R22 XL", loadRating: 95, speedIndex: "Y" },
    ],
  },
  {
    id: "as-1",
    slug: "as-1",
    name: "AS-1",
    tagline: "Asymmetric Comfort for Daily Driving",
    description:
      "The Nankang AS-1 is a premium asymmetric touring tyre designed for drivers who prioritise comfort, refinement, and all-round capability. A sophisticated tread compound balances ride quality with responsive handling, making it an ideal choice for executive saloons and everyday performance vehicles.",
    features: [
      "Asymmetric tread design for optimised dry and wet behaviour",
      "Comfort-focused compound reduces road vibration transmission",
      "Wide outer shoulder blocks for confident high-speed cornering",
      "Inner groove geometry promotes efficient water evacuation",
      "Low road noise for refined motorway cruising",
    ],
    usageSplit: "100% Road",
    category: "car",
    subcategory: "comfort",
    priceFrom: 58,
    image: "/images/tyres/as-1.png",
    featured: false,
    compatibleVehicles: ["BMW 5 Series", "Audi A6", "Mercedes E-Class", "Range Rover Sport", "Volvo XC60"],
    seoTitle: "Nankang AS-1 Comfort Tyres UK | Rubber Tech Authorised Dealer",
    seoDescription:
      "Nankang AS-1 asymmetric comfort tyres. Premium ride quality, low road noise. Buy from Rubber Tech — authorised UK Nankang dealer. Free delivery.",
    expertView:
      "The AS-1 is our recommendation for customers who spend long hours on motorways. It's genuinely refined and the noise levels are some of the lowest we've measured in this price bracket. Ideal for executive vehicles where ride comfort is paramount.",
    sizes: [
      { size: "195/65R15", loadRating: 91, speedIndex: "V" },
      { size: "205/55R16", loadRating: 91, speedIndex: "W" },
      { size: "225/50R17", loadRating: 98, speedIndex: "W" },
    ],
  },
  {
    id: "ns-20",
    slug: "ns-20",
    name: "NS-20",
    tagline: "Latest Directional Performance Tyre",
    description:
      "The Nankang NS-20 is a cutting-edge directional performance tyre engineered for drivers who demand sharp handling response and confident wet weather grip. Its distinctive directional tread pattern features aggressive V-shaped lateral grooves that channel water efficiently, maintaining excellent traction even in heavy rain.",
    features: [
      "Directional V-pattern tread for maximum water dispersal",
      "High-silica compound formulation for balanced dry and wet performance",
      "Reinforced carcass for stability at high speeds",
      "Optimised contact patch for even wear distribution",
      "Strong rim protection ridge guards against kerb damage",
    ],
    usageSplit: "100% Road",
    category: "car",
    subcategory: "performance",
    badge: "New",
    priceFrom: 62,
    image: "/images/tyres/ns-20.png",
    featured: false,
    seoTitle: "Nankang NS-20 Directional Performance Tyres UK | Rubber Tech",
    seoDescription:
      "Nankang NS-20 directional performance tyres. V-pattern tread, excellent wet grip. Buy from Rubber Tech — UK Nankang dealer. Free UK delivery.",
    expertView:
      "The NS-20 is the newest addition to the Nankang road tyre lineup and it shows. The directional pattern channels water superbly and we've been impressed by how progressive the handling is when pushing into bends. A strong option for drivers who enjoy spirited driving.",
    sizes: [
      { size: "205/55R16", loadRating: 91, speedIndex: "V" },
      { size: "225/45R17", loadRating: 94, speedIndex: "W" },
      { size: "235/45R18", loadRating: 98, speedIndex: "W" },
    ],
  },
  {
    id: "eco-2-plus",
    slug: "eco-2plus",
    name: "ECO-2+",
    tagline: "Efficient Daily Commuter Tyre",
    description:
      "The Nankang ECO-2+ is engineered for the cost-conscious daily driver. With an optimised compound that prioritises low rolling resistance, the ECO-2+ reduces fuel consumption without compromising safety. A wide range of common sizes makes it suitable for a vast array of UK vehicles.",
    features: [
      "Low rolling resistance compound reduces fuel costs",
      "Silica-enhanced compound for adequate wet grip safety",
      "Wide range of popular 13\" to 17\" sizes",
      "Environmentally aware manufacturing process",
      "Excellent value cost-per-mile",
    ],
    usageSplit: "100% Road",
    category: "car",
    subcategory: "economy",
    priceFrom: 38,
    image: "/images/tyres/eco-2plus.png",
    featured: false,
    seoTitle: "Nankang ECO-2+ Economy Tyres UK | Cheap Nankang Tyres",
    seoDescription:
      "Buy Nankang ECO-2+ economy tyres from Rubber Tech UK. Low rolling resistance, fuel saving, wide size range. Cheapest Nankang prices with free UK delivery.",
    expertView:
      "The ECO-2+ is what we recommend to customers whose priority is running costs. It's honest, reliable, and safe. The rolling resistance is genuinely low — customers fed back improved MPG figures. For a daily runabout on typical UK roads, it does exactly what it needs to.",
    sizes: [
      { size: "165/70R14", loadRating: 81, speedIndex: "T" },
      { size: "185/60R15", loadRating: 84, speedIndex: "H" },
      { size: "195/65R15", loadRating: 91, speedIndex: "V" },
      { size: "205/55R16", loadRating: 91, speedIndex: "V" },
    ],
  },
];

// =============================================================================
// MOTORSPORT TYRES
// =============================================================================

export const motorsportProducts: TyreProduct[] = [
  {
    id: "ns-2r",
    slug: "ns-2r",
    name: "NS-2R",
    tagline: "The UK's Favourite Track Day Tyre",
    description:
      "After multiple years of success in UK club motorsport, the Nankang NS-2R has become the most trusted track day tyre in Britain. Used by the BMW Compact Cup, BMW Super Cup, MX5 Supercup, ST150 Cup, Civic Cup, and numerous open-tyre series, the NS-2R is renowned for its consistency, endurance, and impressive wet performance.",
    features: [
      "50% road / 50% track capability — fully road legal",
      "EU tyre labelled (MSA List 1B approved)",
      "Available in 120TW, 180TW competition compounds",
      "Used by BMW Compact Cup, MX5 Supercup, Civic Cup and more",
      "Optimum camber: -1.0 to -3.0 degrees",
      "Comprehensive size range from 13\" to 19\"",
      "Outstanding wet performance for a track tyre",
      "Yellow dot alignment for optimal wheel balance",
    ],
    usageSplit: "50% Road / 50% Track",
    category: "motorsport",
    subcategory: "track-day",
    badge: "Race Series Control Tyre",
    priceFrom: 89,
    image: "/images/tyres/ns-2r.png",
    featured: true,
    compatibleVehicles: ["BMW E36", "BMW E46", "Honda Civic", "Mazda MX-5", "Ford Focus ST", "Renault Clio"],
    certifications: ["MSA List 1B", "EU Tyre Label"],
    seoTitle: "Nankang NS-2R Track Day Tyres UK | Buy Online | Rubber Tech",
    seoDescription:
      "Buy Nankang NS-2R track day tyres from Rubber Tech UK. MSA List 1B approved, used in BMW Cup, MX5 Supercup. 120TW & 180TW available. Free UK delivery.",
    expertView:
      "The NS-2R is the tyre we get asked about more than any other. It's the backbone of UK club motorsport — if you turn up to a track day in Britain, you'll see more NS-2Rs than any other competition tyre. What sets it apart is the combination of genuine race pace with road-legal practicality. You can drive it to the circuit, lap all day with confidence, and drive home. The wet performance is also exceptional for a track tyre — we've seen customers set quicker wet laptimes on NS-2Rs than on supposedly superior alternatives.",
    sizes: [
      { size: "185/60R13 XL 180TW", loadRating: 84, speedIndex: "V", sectionWidth: 189, overallDiameter: 552, rimWidth: "5.5J" },
      { size: "195/50R15 XL 180TW", loadRating: 86, speedIndex: "V", sectionWidth: 199, overallDiameter: 586, rimWidth: "6J" },
      { size: "205/50R15 XL 180TW", loadRating: 89, speedIndex: "V", sectionWidth: 208, overallDiameter: 596, rimWidth: "6J" },
      { size: "215/45R16 XL 180TW", loadRating: 90, speedIndex: "V", sectionWidth: 217, overallDiameter: 604, rimWidth: "7J" },
      { size: "225/45R17 XL 180TW", loadRating: 94, speedIndex: "W", sectionWidth: 227, overallDiameter: 635, rimWidth: "7.5J" },
      { size: "235/40R17 XL 180TW", loadRating: 94, speedIndex: "W", sectionWidth: 236, overallDiameter: 626, rimWidth: "8J" },
      { size: "255/40R17 XL 180TW", loadRating: 98, speedIndex: "W", sectionWidth: 257, overallDiameter: 644, rimWidth: "8.5J" },
      { size: "225/40R18 XL 180TW", loadRating: 92, speedIndex: "Y", sectionWidth: 226, overallDiameter: 636, rimWidth: "8J" },
      { size: "245/40R18 XL 180TW", loadRating: 97, speedIndex: "Y", sectionWidth: 247, overallDiameter: 652, rimWidth: "8.5J" },
      { size: "255/35R18 XL 180TW", loadRating: 94, speedIndex: "Y", sectionWidth: 256, overallDiameter: 640, rimWidth: "9J" },
    ],
    schema: {
      "@context": "https://schema.org",
      "@type": "Product",
      name: "Nankang NS-2R",
      brand: { "@type": "Brand", name: "Nankang" },
      description: "Road legal track day tyre, MSA List 1B approved. Used in UK championships.",
      offers: { "@type": "Offer", priceCurrency: "GBP", price: "89.00", availability: "https://schema.org/InStock" },
    },
  },
  {
    id: "ar-1",
    slug: "ar-1",
    name: "AR-1",
    tagline: "90% Track, 10% Road — Maximum Performance",
    description:
      "The Nankang AR-1 is for drivers who demand the absolute maximum from their track tyre while retaining road legality. Sitting just below a full slick in performance terms, the AR-1 delivers an aggressive compound and minimal tread pattern optimised for maximum mechanical grip.",
    features: [
      "Ultra-soft compound for maximum grip on circuit",
      "90% track / 10% road intended usage",
      "Road legal with EU tyre marking",
      "Minimal tread design for maximum contact patch",
      "Ideal for Time Attack, sprint events, and track days",
      "Available in popular 15\" to 18\" sizes",
    ],
    usageSplit: "90% Track / 10% Road",
    category: "motorsport",
    subcategory: "semi-slick",
    badge: "Extreme Performance",
    priceFrom: 110,
    image: "/images/tyres/ar-1.png",
    featured: true,
    compatibleVehicles: ["Track cars", "Time Attack vehicles", "Sprint cars", "High-power road cars"],
    certifications: ["EU Tyre Label"],
    seoTitle: "Nankang AR-1 Semi-Slick Tyres UK | Track Day | Rubber Tech",
    seoDescription:
      "Buy Nankang AR-1 semi-slick tyres from Rubber Tech UK. 90% track use, ultra-soft compound, road legal. Ideal for Time Attack and circuit racing. Free UK delivery.",
    expertView:
      "The AR-1 is for serious track drivers. If you've outgrown the NS-2R and want more mechanical grip, this is the logical next step. The compound is noticeably softer and you'll feel it immediately in cornering confidence. Just be aware this tyre needs heat in it to perform — cold temperatures will significantly affect grip levels. Warm-up laps are essential.",
    sizes: [
      { size: "195/50R15 XL", loadRating: 86, speedIndex: "V" },
      { size: "205/50R15 XL", loadRating: 89, speedIndex: "V" },
      { size: "225/45R16 XL", loadRating: 93, speedIndex: "W" },
      { size: "205/45R17 XL", loadRating: 88, speedIndex: "W" },
      { size: "235/40R18 XL", loadRating: 95, speedIndex: "Y" },
    ],
  },
  {
    id: "cr-s",
    slug: "cr-s",
    name: "CR-S",
    tagline: "200TW Extreme Performance—Disrupting the Market",
    description:
      "The Nankang CR-S is the newest addition to the motorsport range and it's already shaking up the 200 treadwear market. Launched in 2024 with new sizes added for 2026, the CR-S delivers extreme performance within 200TW regulations, offering a genuine challenge to established brands at a significantly lower price.",
    features: [
      "200 treadwear compound for competition homologation",
      "Extreme performance within class regulations",
      "New sizes added for 2026 season",
      "Suitable for: HPDE, Time Attack, Autocross, track days",
      "Consistent performance throughout tyre life",
      "Available in popular competition fitments",
    ],
    usageSplit: "80% Track / 20% Road",
    category: "motorsport",
    subcategory: "200tw",
    badge: "New 2024",
    priceFrom: 125,
    image: "/images/tyres/cr-s.png",
    featured: true,
    seoTitle: "Nankang CR-S 200TW Tyres UK | Competition Tyres | Rubber Tech",
    seoDescription:
      "Buy Nankang CR-S 200TW competition tyres from Rubber Tech UK. New for 2024, extremeperformance. Buy from authorised UK dealers. Free delivery.",
    expertView:
      "The CR-S is genuinely exciting. At Rubber Tech we stock it because it's disrupting a market that's needed disruption for years. The 200TW segment has been dominated by expensive options — the CR-S delivers comparable performance at a price that makes competition more accessible. We've had strong feedback from Time Attack and HPDE competitors.",
    sizes: [
      { size: "225/45R17 XL", loadRating: 94, speedIndex: "W" },
      { size: "245/40R18 XL", loadRating: 97, speedIndex: "Y" },
      { size: "255/35R18 XL", loadRating: 94, speedIndex: "Y" },
      { size: "265/35R18 XL", loadRating: 97, speedIndex: "Y" },
    ],
  },
  {
    id: "sl-1",
    slug: "sl-1",
    name: "SL-1",
    tagline: "Full Race Slick — 100% Track Performance",
    description:
      "The Nankang SL-1 is a full racing slick designed purely for closed-circuit competition. Introduced in 2021 and proven at the Nürburgring, the SL-1 delivers the absolute maximum in mechanical grip that physics allows, with zero compromise for road use.",
    features: [
      "100% track/race use — not road legal",
      "Slick tread design for maximum contact patch",
      "Proven at the Nürburgring",
      "Multiple compounds available for temperature matching",
      "Suitable for circuit racing, hillclimb, sprint events",
      "Available in a range of popular racing sizes",
    ],
    usageSplit: "100% Track Only",
    category: "motorsport",
    subcategory: "slick",
    badge: "Race Proven",
    priceFrom: 145,
    image: "/images/tyres/sl-1.png",
    featured: false,
    seoTitle: "Nankang SL-1 Racing Slick Tyres UK | Circuit Racing | Rubber Tech",
    seoDescription:
      "Buy Nankang SL-1 full racing slick tyres from Rubber Tech UK. Nürburgring proven, 100% track use, multiple compounds. UK's authorised Nankang dealer.",
    expertView:
      "The SL-1 is properly quick. If you're competing in circuit racing and using treaded tyres, the SL-1 will find you meaningful lap time. Nankang have clearly invested in the compound development — the initial feedback from UK race series has been very positive. Contact us for compound recommendations based on your circuit and racing class.",
    sizes: [
      { size: "195/55R14", loadRating: 82, speedIndex: "V" },
      { size: "205/55R15", loadRating: 88, speedIndex: "V" },
      { size: "225/45R16", loadRating: 89, speedIndex: "W" },
      { size: "235/40R17", loadRating: 90, speedIndex: "W" },
    ],
  },
];

// =============================================================================
// 4x4 / SUV TYRES
// =============================================================================

export const fourByFourProducts: TyreProduct[] = [
  {
    id: "at-5-plus",
    slug: "at-5plus",
    name: "AT-5+",
    tagline: "All Terrain Excellence",
    description:
      "The Nankang AT-5+ is a premium all-terrain tyre engineered for drivers who need genuine off-road capability without sacrificing on-road refinement. Aggressive shoulder traction lugs combine with a sophisticated centre rib design to deliver confident performance across all surfaces.",
    features: [
      "Aggressive shoulder lugs for off-road traction",
      "Centre rib design for on-road stability and low noise",
      "Reinforced sidewall protection against rock damage",
      "Self-cleaning tread channels eject mud and debris",
      "Available in popular 4x4 sizes from 15\" to 22\"",
      "Commercial variant (AT-5C) available for vans",
    ],
    usageSplit: "70% Road / 30% Off-Road",
    category: "4x4",
    subcategory: "all-terrain",
    badge: "Most Popular 4x4",
    priceFrom: 95,
    image: "/images/tyres/at-5plus.png",
    featured: true,
    compatibleVehicles: ["Toyota Land Cruiser", "Land Rover Defender", "Ford Ranger", "Mitsubishi L200", "Isuzu D-Max"],
    seoTitle: "Nankang AT-5+ All Terrain Tyres UK | 4x4 Tyres | Rubber Tech",
    seoDescription:
      "Buy Nankang AT-5+ all terrain 4x4 tyres from Rubber Tech UK. On-road refinement with genuine off-road capability. Free UK delivery. Authorised Nankang dealer.",
    expertView:
      "The AT-5+ is what we put on our own Land Rover. The traction in mud and loose surfaces is impressive without the excessive road noise you get from more aggressive patterns. It's the genuine all-rounder in Nankang's 4x4 range — equally at home on the motorway as it is on a green lane.",
    sizes: [
      { size: "265/70R16", loadRating: 112, speedIndex: "S" },
      { size: "275/70R16", loadRating: 114, speedIndex: "S" },
      { size: "285/75R16", loadRating: 126, speedIndex: "S" },
      { size: "265/65R17", loadRating: 112, speedIndex: "S" },
      { size: "285/60R18", loadRating: 120, speedIndex: "T" },
    ],
  },
  {
    id: "mt-1",
    slug: "mt-1",
    name: "MT-1",
    tagline: "All-New Mud Terrain — Extreme Off-Road",
    description:
      "The Nankang MT-1 is the all-new mud terrain tyre designed for drivers who take their 4x4 seriously off-road. Massive tread blocks and deep mud channels provide exceptional grip in the most challenging conditions, while the reinforced E-rated sidewall protects against cuts and punctures.",
    features: [
      "Aggressive mud terrain tread for maximum off-road grip",
      "Deep wide channels for aggressive mud ejection",
      "Reinforced E-rated sidewall for puncture resistance",
      "Open shoulder design clears mud from sidewall area",
      "Available in popular truck and SUV fitments",
      "New for 2022 — improved over previous MT range",
    ],
    usageSplit: "20% Road / 80% Off-Road",
    category: "4x4",
    subcategory: "mud-terrain",
    badge: "Extreme Off-Road",
    priceFrom: 105,
    image: "/images/tyres/mt-1.png",
    featured: false,
    seoTitle: "Nankang MT-1 Mud Terrain Tyres UK | Off Road | Rubber Tech",
    seoDescription:
      "Buy Nankang MT-1 mud terrain 4x4 tyres from Rubber Tech UK. New 2022 design, extreme off-road performance. Free UK delivery. Authorised Nankang dealer.",
    expertView:
      "The MT-1 is for serious off-roaders. It's noticeably more capable in deep mud and loose terrain than the AT-5+ as you'd expect from a dedicated mud terrain design. On road it's louder, as all MT tyres are, so factor that in if you do significant motorway miles. But if you're heading into serious terrain, it's the right choice.",
    sizes: [
      { size: "31x10.50R15LT", loadRating: 109, speedIndex: "Q" },
      { size: "265/70R16", loadRating: 121, speedIndex: "Q" },
      { size: "285/75R16LT", loadRating: 126, speedIndex: "Q" },
      { size: "285/70R17", loadRating: 121, speedIndex: "Q" },
      { size: "295/70R18LT", loadRating: 129, speedIndex: "Q" },
    ],
  },
];

// =============================================================================
// ALL-SEASON TYRES
// =============================================================================

export const allSeasonProducts: TyreProduct[] = [
  {
    id: "aw-8",
    slug: "aw-8",
    name: "AW-8",
    tagline: "Year-Round Performance in All UK Conditions",
    description:
      "The Nankang AW-8 is engineered to perform across all four UK seasons, providing confident grip in summer heat, autumn rain, and winter frost. A specialised all-season compound with siped tread blocks maintains flexibility at low temperatures while offering adequate summer performance.",
    features: [
      "M+S marked and 3PMSF rated for severe winter conditions",
      "Specialised all-season compound down to -10°C",
      "Siped tread blocks for winter grip on snow and ice",
      "Wide circumferential grooves for wet weather drainage",
      "Available in popular car sizes from 15\" to 19\"",
    ],
    usageSplit: "Year-Round",
    category: "all-season",
    badge: "3PMSF Rated",
    priceFrom: 72,
    image: "/images/tyres/aw-8.png",
    featured: false,
    compatibleVehicles: ["VW Golf", "BMW 3 Series", "Ford Focus", "Vauxhall Astra", "Skoda Octavia"],
    seoTitle: "Nankang AW-8 All Season Tyres UK | Rubber Tech",
    seoDescription:
      "Buy Nankang AW-8 all-season tyres from Rubber Tech UK. 3PMSF rated, M+S, year-round UK performance. Free UK delivery. Authorised Nankang dealer.",
    expertView:
      "The AW-8 makes sense for many UK drivers who don't want to manage two sets of tyres. The 3PMSF rating means it genuinely meets proper winter standards. We recommend it to customers who can't easily store a spare set of wheels — it's a sensible, safe choice for year-round UK motoring.",
    sizes: [
      { size: "195/65R15", loadRating: 91, speedIndex: "H" },
      { size: "205/55R16", loadRating: 94, speedIndex: "V" },
      { size: "225/45R17", loadRating: 94, speedIndex: "W" },
      { size: "235/45R18", loadRating: 98, speedIndex: "W" },
    ],
  },
];

// =============================================================================
// EV TYRES
// =============================================================================

export const evProducts: TyreProduct[] = [
  {
    id: "as-3-ev",
    slug: "as-3-ev",
    name: "AS-3 EV",
    tagline: "Engineered for the Electric Future",
    description:
      "The Nankang AS-3 EV is specifically developed for electric vehicles, addressing the unique demands they place on tyres — increased load capacity, higher torque, and the need for low rolling resistance to maximise range. Built on the acclaimed AS-3 platform with EV-specific optimisations.",
    features: [
      "EV-optimised compound handles instant torque delivery",
      "Reinforced construction for increased EV load ratings",
      "Ultra-low rolling resistance maximises battery range",
      "Reduced tread noise for the naturally quieter EV cabin",
      "OE fitment quality for leading EV manufacturers",
    ],
    usageSplit: "100% Road",
    category: "ev",
    badge: "EV Optimised",
    priceFrom: 80,
    image: "/images/tyres/as-3-ev.png",
    featured: false,
    compatibleVehicles: ["Tesla Model 3", "BMW iX", "Hyundai IONIQ 5", "Kia EV6", "Audi e-tron"],
    seoTitle: "Nankang AS-3 EV Electric Vehicle Tyres UK | Rubber Tech",
    seoDescription:
      "Buy Nankang AS-3 EV tyres for electric vehicles from Rubber Tech UK. EV-optimised, low rolling resistance, range-maximising. Free UK delivery.",
    expertView:
      "As EV adoption grows in the UK, we're fielding more tyre questions from electric vehicle owners. The AS-3 EV addresses their specific challenges — particularly handling the instant torque that destroys standard tyres prematurely. The reinforced carcass and EV compound make a meaningful difference to tyre life on electric cars.",
    sizes: [
      { size: "215/55R18 EV", loadRating: 99, speedIndex: "V" },
      { size: "235/50R19 EV", loadRating: 103, speedIndex: "V" },
      { size: "245/45R20 EV", loadRating: 103, speedIndex: "V" },
    ],
  },
];

// =============================================================================
// ALL PRODUCTS AGGREGATED
// =============================================================================

export const allProducts: TyreProduct[] = [
  ...carProducts,
  ...motorsportProducts,
  ...fourByFourProducts,
  ...allSeasonProducts,
  ...evProducts,
];

export const featuredProducts = allProducts.filter((p) => p.featured);

export function getProductBySlug(slug: string): TyreProduct | undefined {
  return allProducts.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: TyreCategory): TyreProduct[] {
  return allProducts.filter((p) => p.category === category);
}

// FILE COMPLETE ✓
