export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  sourceLink?: string;
  sourceName?: string;
  seoTitle: string;
  seoDescription: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "NS-2R VS AR-1: WHICH MOTORSPORT COMPOUND DO YOU NEED?",
    slug: "ns2r-vs-ar1-compound-guide",
    date: "MARCH 12, 2026",
    category: "TECHNICAL",
    excerpt: "UNDERSTANDING THE PERFORMANCE GAP BETWEEN THE UK'S FAVOURITE TRACK DAY TYRE AND ITS SEMI-SLICK BIG BROTHER.",
    author: "RUBBER TECH TECHNICAL TEAM",
    seoTitle: "Nankang NS-2R vs AR-1: Track Day Tyre Comparison Guide",
    seoDescription: "A comprehensive technical comparison between the Nankang NS-2R and AR-1 semi-slick tyres. Find out which compound is best for your track day setup.",
    sourceLink: "https://www.nankangtyre.co.uk/",
    sourceName: "Nankang Tyre UK Official Source",
    content: `
      <p class="mb-8">Choosing the right track day tyre is critical for achieving optimal lap times and ensuring your vehicle handles predictably under extreme stress. Two of the most heavily debated tyres in the UK club racing paddock are the <strong>Nankang NS-2R</strong> and the highly aggressive <strong>Nankang AR-1</strong>.</p>
      
      <h3 class="font-display text-2xl uppercase mb-4 mt-12">The Nankang NS-2R: The Everyday Track Warrior</h3>
      <p class="mb-4">The NS-2R is the backbone of British club motorsport. With a treadwear rating of either 120 or 180, it offers an incredible balance between raw performance and longevity. It is fully road legal, handles standing water surprisingly well, and doesn't require aggressive camber setups to function properly.</p>
      <ul class="list-disc pl-6 mb-8 space-y-2">
        <li><strong>Best For:</strong> First-time track day goers, daily driven track cars, and endurance racing protocols.</li>
        <li><strong>Operating Window:</strong> Warms up quickly, very forgiving when pushed past its slip angle.</li>
      </ul>

      <h3 class="font-display text-2xl uppercase mb-4 mt-12">The Nankang AR-1: Maximum Mechanical Grip</h3>
      <p class="mb-4">If the NS-2R is a road tyre built for the track, the AR-1 is a purebred racing slick that happens to have grooves cut into it to pass road legality tests. It features a massive 100 treadwear compound and vast unbroken shoulder blocks for immense lateral grip. Be warned: it is noisy on the road and hydroplanes easily in deep standing water.</p>
      <ul class="list-disc pl-6 mb-8 space-y-2">
        <li><strong>Best For:</strong> Dedicated track cars, Time Attack competitors, and chasing ultimate PB lap times.</li>
        <li><strong>Operating Window:</strong> Requires rigorous heat cycles and precise tyre pressure management (typically 26-30 PSI hot).</li>
      </ul>

      <h3 class="font-display text-2xl uppercase mb-4 mt-12">The Verdict</h3>
      <p class="mb-8">If your car serves daily duties, or you live in areas with frequent unpredictable rainfall, the NS-2R is a no-brainer. However, if your car is trailered to the circuit or you strictly hunt dry laps, upgrading to the AR-1 will likely slice 1.5 to 2 seconds off a standard 2-minute lap.</p>
    `
  },
  {
    title: "PREPARING YOUR EV FOR WINTER: WHY THE NANKANG AS-3 IS VITAL",
    slug: "preparing-ev-winter-nankang-as3",
    date: "FEBRUARY 28, 2026",
    category: "GUIDE",
    excerpt: "HOW COLD TEMPERATURES AFFECT EV RANGE AND WHY PROPER ARCHITECTURAL COMPOUNDING IS A GAME-CHANGER FOR BATTERY EFFICIENCY.",
    author: "RUBBER TECH TECHNICAL TEAM",
    seoTitle: "EV Winter Tyres: Nankang AS-3 Performance Review",
    seoDescription: "Discover how the Nankang AS-3 tyre improves electric vehicle range, reduces cabin noise, and handles the extreme torque of modern EVs in winter conditions.",
    sourceLink: "https://www.nankangtyre.co.uk/products/car/as-3/",
    sourceName: "Nankang AS-3 Technical Specifications",
    content: `
      <p class="mb-8">Electric vehicles present an entirely unique geometrical challenge for modern tyre manufacturers. Heavy battery packs, instantaneous torque delivery, and the lack of an engine to mask road noise require a highly specialized rubber envelope.</p>
      
      <h3 class="font-display text-2xl uppercase mb-4 mt-12">The EV Torque Problem</h3>
      <p class="mb-8">Vehicles like the Tesla Model 3 or Porsche Taycan deliver 100% of their torque from 0 RPM. Standard commuter tyres will physically shear or rapidly degrade within exactly half their expected lifespan when subjected to these loads. The Nankang AS-3 has been structurally reinforced with hyper-rigid sidewalls to resist this deformation.</p>

      <h3 class="font-display text-2xl uppercase mb-4 mt-12">Acoustic Refinement</h3>
      <p class="mb-8">Because EVs lack internal combustion drone, the wind and tyre hum become the most glaring noises in the cabin. The asymmetric tread blocks on the AS-3 are specifically pitched and aligned to cancel out harmonic resonance at highway speeds (70mph+), ensuring a genuinely luxurious, silent cruising experience.</p>
      
      <h3 class="font-display text-2xl uppercase mb-4 mt-12">Winter Range Preservation</h3>
      <p class="mb-8">When the temperature drops below 7 degrees Celsius, standard rubber compounds harden excessively. This drastically increases rolling resistance, essentially forcing your EV battery to rapidly bleed energy. Pushing your EV into winter utilizing an optimized silica-based tread dramatically retains your kWh capacity.</p>
    `
  },
  {
    title: "NANKANG CR-S: THE NEW 200TW TIME ATTACK STANDARD",
    slug: "nankang-crs-200tw-time-attack",
    date: "JANUARY 15, 2026",
    category: "NEWS",
    excerpt: "WE GO DEEP ON THE NEWEST SIZES JOINING THE CR-S LINEUP FOR THE UPCOMING COMPETITION SEASON.",
    author: "RUBBER TECH MOTORSPORT",
    seoTitle: "Nankang CR-S Review: 200TW Time Attack Tyres",
    seoDescription: "Read our deep dive into the new Nankang CR-S extremely performance 200TW tyre. Engineered for Time Attack homologation and unmatched dry grip.",
    sourceLink: "https://www.nankangtyre.co.uk/",
    sourceName: "Nankang Motorsport Authority",
    content: `
      <p class="mb-8">The 200TW (Treadwear) category is currently the most heavily concentrated battleground in global grassroots motorsport. Designed to simulate the grip levels of an illegal racing slick while technically adhering to road-legal homologation rules, the 200TW class has a new undisputed champion: the Nankang CR-S.</p>
      
      <h3 class="font-display text-2xl uppercase mb-4 mt-12">Disrupting the Hierarchy</h3>
      <p class="mb-8">For years, Time Attack series globally have been dominated by Yokohama and Bridgestone offerings. The introduction of the CR-S disrupts this hierarchy emphatically. Engineered specifically to generate extreme friction within a wider thermal window, the CR-S refuses to overheat on heavier front-engine/front-wheel-drive platforms.</p>

      <h3 class="font-display text-2xl uppercase mb-4 mt-12">Consistent Lap Generation</h3>
      <p class="mb-8">Unlike older competition compounds that give you exactly one "Hero Lap" before violently overheating and greasing out, the CR-S's chemical composition stays chemically stable for 4 to 5 flying laps. This allows amateur drivers significantly more leeway to dial in laps and correct mistakes without needing to pit to cool down.</p>
    `
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
