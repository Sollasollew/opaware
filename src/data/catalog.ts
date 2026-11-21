export type CategoryId =
  | 'loud'
  | 'parents-hate'
  | 'science'
  | 'messy-art'
  | 'outdoor'
  | 'quiet'
  | 'kitchen';

export interface Category {
  id: CategoryId;
  name: string;
  tagline: string;
  accent: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  category: CategoryId;
  blurb: string;
  story: string;
  mischiefLevel: 1 | 2 | 3 | 4 | 5;
  ages: string;
  hue: string;
  motif: 'drum' | 'slime' | 'rocket' | 'paint' | 'kite' | 'book' | 'beaker' | 'whistle' | 'magnet' | 'tent' | 'puzzle' | 'mixer';
  testedOn: string;
}

export const categories: Category[] = [
  {
    id: 'loud',
    name: 'Loud Stuff',
    tagline: 'Decibel diplomacy for the porch.',
    accent: '#B5522A',
  },
  {
    id: 'parents-hate',
    name: 'Stuff Parents Will Hate',
    tagline: 'Grandparent privilege, properly abused.',
    accent: '#8C3B2A',
  },
  {
    id: 'science',
    name: 'Amazing Science Stuff',
    tagline: 'Prototypes that survived the bench.',
    accent: '#3E6B4F',
  },
  {
    id: 'messy-art',
    name: 'Messy Art Supplies',
    tagline: 'Sawdust optional. Pigment not.',
    accent: '#A67C2D',
  },
  {
    id: 'outdoor',
    name: 'Outdoor Adventures',
    tagline: 'Mud is a feature, not a warranty claim.',
    accent: '#4A6B3D',
  },
  {
    id: 'quiet',
    name: 'Quiet Time Treasures',
    tagline: 'Drawer-labeled calm for after the parade.',
    accent: '#5C6B7A',
  },
  {
    id: 'kitchen',
    name: 'Kitchen Lab Experiments',
    tagline: 'Edible R&D. Bring towels.',
    accent: '#9A4E2C',
  },
];

export const products: Product[] = [
  {
    id: 'thunder-tambourine',
    name: 'Thunder Tambourine Duo',
    price: 24,
    category: 'loud',
    blurb: 'Two hardwood frames. Brass jingles. One negotiated ceasefire later.',
    story:
      'Hand-assembled in the back room, then field-tested by a six-year-old who believed “softly” was a suggestion. Includes a spare jingle pack labeled DRAWER 4B — JINGLES (DO NOT EAT).',
    mischiefLevel: 4,
    ages: '3+',
    hue: '#B5522A',
    motif: 'drum',
    testedOn: 'Grandkids, porch dogs, one skeptical uncle',
  },
  {
    id: 'siren-kazoo',
    name: 'Siren Kazoo Orchestra Kit',
    price: 18,
    category: 'loud',
    blurb: 'Five brass-rimmed kazoos. Four of them are honest about being loud.',
    story:
      'Labeled WHISPER, TOOT, WAIL, HONK, and THE FINALE. The Whisper kazoo is a liar. Built like shop tools that happen to make music — or whatever that sound is.',
    mischiefLevel: 5,
    ages: '5+',
    hue: '#C48A3A',
    motif: 'whistle',
    testedOn: 'A living room that deserved it',
  },
  {
    id: 'glitter-cannon',
    name: 'Workshop Glitter Mortar (Washable)',
    price: 32,
    category: 'parents-hate',
    blurb: 'Soft-burst shimmer launcher. Parents will find glitter in July.',
    story:
      'Plant-based sparkle, leather strap, brass trigger. We stamped the crate TESTED ON GRANDKIDS — RESULTS: SPARKLY. Washable eventually. Magical immediately.',
    mischiefLevel: 5,
    ages: '6+',
    hue: '#8C3B2A',
    motif: 'paint',
    testedOn: 'Every carpet within thirty feet',
  },
  {
    id: 'midnight-cookies',
    name: 'Midnight Cookie Conspiracy Kit',
    price: 28,
    category: 'parents-hate',
    blurb: 'Secret recipes, tiny aprons, and a tin stamped DON’T TELL MOM.',
    story:
      'After-hours baking kit with crumb maps and a laminated alibi card. Feels like Santa’s private stockroom met a wry woodworker who believes cookies are infrastructure.',
    mischiefLevel: 3,
    ages: '4+',
    hue: '#6B4423',
    motif: 'mixer',
    testedOn: 'Grandparents with flexible bedtimes',
  },
  {
    id: 'volcano-yes',
    name: 'Definitely-Not-A-Volcano Bench Kit',
    price: 36,
    category: 'science',
    blurb: 'It is a volcano. We just prefer plausible deniability on the label.',
    story:
      'Baking-soda geology with three eruption modes scratched into the lid: polite burp, dramatic fountain, backyard legend. Tray included. Carpet formally uninvited. Adam-Savage-adjacent notes in the margin.',
    mischiefLevel: 4,
    ages: '6+',
    hue: '#3E6B4F',
    motif: 'beaker',
    testedOn: 'The workbench, twice',
  },
  {
    id: 'magnet-river',
    name: 'Invisible River Magnet Track',
    price: 42,
    category: 'science',
    blurb: 'Wooden channels. Steel beads. A river you can feel but cannot see.',
    story:
      'Built like a prototype that escaped the drawer labeled MAGNETS — SERIOUS. Strong enough to invent new physics vocabulary. Grandfather-approved desk clutter.',
    mischiefLevel: 2,
    ages: '7+',
    hue: '#4A6E82',
    motif: 'magnet',
    testedOn: 'Curious makers aged 7–70',
  },
  {
    id: 'rocket-mail',
    name: 'Backyard Bottle Rocket Mail',
    price: 29,
    category: 'science',
    blurb: 'Air-pressure note delivery across the yard. Treaties encouraged.',
    story:
      'Safe launchers, waterproof capsules, and a clipboard for snack negotiations between porch and treehouse. Comes with a brass tag: PROTOTYPE 12 — MOSTLY AIRBORNE.',
    mischiefLevel: 3,
    ages: '8+',
    hue: '#A85A2A',
    motif: 'rocket',
    testedOn: 'Fence posts and triumphant grandkids',
  },
  {
    id: 'sidewalk-symphony',
    name: 'Sidewalk Symphony Chalk Crate',
    price: 22,
    category: 'messy-art',
    blurb: 'Jumbo chalk, comet stencils, and permission to color the driveway.',
    story:
      'Packed in a pine crate that smells faintly of sawdust and ambition. Washes away eventually. The driveway mural does not leave the memory.',
    mischiefLevel: 2,
    ages: '3+',
    hue: '#A67C2D',
    motif: 'paint',
    testedOn: 'Concrete, with applause',
  },
  {
    id: 'finger-galaxy',
    name: 'Fingerpaint Nebula Studio',
    price: 27,
    category: 'messy-art',
    blurb: 'Washable cosmos in a tub. Aprons encouraged. Glory inevitable.',
    story:
      'Six nebula pots, one swirl tray, and a shop note: NAME YOUR PLANETS AFTER PETS. Messy art that still feels handmade, not plastic-aisle.',
    mischiefLevel: 4,
    ages: '2+',
    hue: '#5A6E45',
    motif: 'paint',
    testedOn: 'Small hands, large imaginations',
  },
  {
    id: 'kite-circus',
    name: 'Workshop Stripe Giant Kite',
    price: 38,
    category: 'outdoor',
    blurb: 'Canvas flyer, leather grips, a tail longer than a tall tale.',
    story:
      'Built for windy Saturdays and grandparents who still know how to run a little. Dual handles. Brass grommets. No corporate logo anywhere it matters.',
    mischiefLevel: 2,
    ages: '5+',
    hue: '#B5522A',
    motif: 'kite',
    testedOn: 'Parks, hills, one stubborn breeze',
  },
  {
    id: 'bug-hotel',
    name: 'Deluxe Bug Hotel Blueprint Kit',
    price: 34,
    category: 'outdoor',
    blurb: 'Pre-cut wood and a guest book for beetles. Five-star insect lodging.',
    story:
      'Pine, bamboo tubes, pinecones, and labeled compartments like a mad toyshop stockroom. Science and hospitality finally shake hands.',
    mischiefLevel: 1,
    ages: '5+',
    hue: '#4A6B3D',
    motif: 'tent',
    testedOn: 'Beetles with high standards',
  },
  {
    id: 'story-lantern',
    name: 'Pocket Story Lantern',
    price: 31,
    category: 'quiet',
    blurb: 'Warm workshop glow for chapter books and whispered cliffhangers.',
    story:
      'Three dim settings, brass trim, leather loop. Makes every page feel like reading in Santa’s private workshop after closing time.',
    mischiefLevel: 1,
    ages: '4+',
    hue: '#5C6B7A',
    motif: 'book',
    testedOn: 'Tents, headboards, sleepy conspirators',
  },
  {
    id: 'wooden-mysteries',
    name: 'Grandpa’s Wooden Mysteries Box',
    price: 45,
    category: 'quiet',
    blurb: 'Twelve pocket puzzles that reward patience and smug grins.',
    story:
      'Sliding knots, secret drawers, and one lock that only opens if you ask nicely. Handmade wryness in walnut and maple. Sofa diplomacy equipment.',
    mischiefLevel: 2,
    ages: '6+',
    hue: '#6B4423',
    motif: 'puzzle',
    testedOn: 'Grandpas who refuse to give hints',
  },
  {
    id: 'soda-geyser',
    name: 'Kitchen Geyser Chemistry Set',
    price: 26,
    category: 'kitchen',
    blurb: 'Measured mayhem with adult supervision and a splash tray.',
    story:
      'Tablets, funnels, and a “who cleans up” brass coin. Labeled like a bench experiment that escaped into the kitchen. Towels are not optional.',
    mischiefLevel: 4,
    ages: '7+',
    hue: '#9A4E2C',
    motif: 'beaker',
    testedOn: 'The sink, mostly',
  },
  {
    id: 'slime-snack',
    name: 'Edible Galaxy Slime Lab',
    price: 23,
    category: 'kitchen',
    blurb: 'Stretchy, sparkly, snackable science — apron required, lab coat optional.',
    story:
      'Food-grade powders and star sprinkles packed like workshop samples. The only credential you need is curiosity and a clean counter.',
    mischiefLevel: 3,
    ages: '5+',
    hue: '#5A7A8C',
    motif: 'slime',
    testedOn: 'Taste-testers who wash hands first',
  },
  {
    id: 'pancake-planet',
    name: 'Pancake Planet Stencil Press',
    price: 21,
    category: 'kitchen',
    blurb: 'Breakfast becomes the solar system. Butter is the asteroid belt.',
    story:
      'Heat-safe rings and comet stamps for skillet cartography. Feels like a maker’s jig that wandered into Sunday morning and stayed.',
    mischiefLevel: 2,
    ages: '3+',
    hue: '#C49A2A',
    motif: 'mixer',
    testedOn: 'Skillets and sticky fingers',
  },
];

export function getProduct(id: string) {
  return products.find((p) => p.id === id);
}

export function getCategory(id: string) {
  return categories.find((c) => c.id === id);
}

export function productsByCategory(id: CategoryId) {
  return products.filter((p) => p.category === id);
}
