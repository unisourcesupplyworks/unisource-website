// ─── Business details — edit here and the whole site updates ───────────
export const CONTACT = {
  city: 'Bengaluru',
  address: '17th A Cross, Tower 1, Wilson Garden, Bengaluru – 560030',
  phones: [
    { label: '+91 95359 07815', raw: '+919535907815' },
  ],
  whatsapp: '919535907815', // number used for WhatsApp quote requests
  email: 'info@unisupply.in',
  minOrder: '₹7,500',
};

// ─── Your own photos (optional) ─────────────────────────────────────
// Put image files in public/images/ and set the path, e.g. pantry: 'images/pantry.jpg'.
// Any slot left empty shows the built-in illustration.
export const PHOTOS = {
  HeroShelf: '',
  Pantry: '',
  Stationery: '',
  Housekeeping: '',
  Gifting: '',
  Office: '',
  Coworking: '',
  Cafe: '',
  Campus: '',
  Van: '',
};

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CONTACT.address)}`;

// ─── Catalogue (category | sub-category | name | pack size) ────────────
const RAW = `Pantry|Tea and coffee|Filter coffee|1 kg
Pantry|Tea and coffee|Tea bags|Box of 200
Pantry|Snacks and biscuits|Biscuits|Carton of 24
Pantry|Snacks and biscuits|Namkeen mix|Pack of 12
Pantry|Dairy and milk|Milk packets|Crate of 20
Pantry|Dairy and milk|Creamer sachets|Box of 100
Pantry|Water and beverages|Water bottles|Case of 24
Pantry|Water and beverages|Juice cartons|Pack of 24
Pantry|Disposables|Food plates|Pack of 100
Pantry|Disposables|Paper cups|Pack of 100
Pantry|Dry groceries|Sugar|5 kg
Pantry|Dry groceries|Instant noodles|Carton of 48
Pantry|Kitchen essentials|Dishwash liquid|5 L can
Pantry|Kitchen essentials|Cutlery set|Pack of 50
Stationery|Paper|A4 paper|Ream of 500
Stationery|Paper|Sticky notes|Pack of 12
Stationery|Writing|Blue pens|Box of 50
Stationery|Writing|Pencils|Box of 100
Stationery|Files and folders|Box files|Pack of 10
Stationery|Files and folders|Document folders|Pack of 25
Stationery|Desk accessories|Stapler|Each
Stationery|Desk accessories|Desk organiser|Each
Stationery|Adhesives and tapes|Glue sticks|Pack of 20
Stationery|Adhesives and tapes|Packing tape|Pack of 6
Stationery|Boards and markers|Whiteboard markers|Pack of 12
Stationery|Boards and markers|Notepads|Pack of 10
Stationery|Printing and labels|Printer toner|Black, 1 unit
Stationery|Printing and labels|Label rolls|Pack of 10
Housekeeping|Cleaning chemicals|Floor cleaner|5 L can
Housekeeping|Cleaning chemicals|Glass cleaner|5 L can
Housekeeping|Washroom supplies|Tissues|Box of 48
Housekeeping|Washroom supplies|Hand wash|5 L can
Housekeeping|Cleaning tools|Mops|Pack of 5
Housekeeping|Cleaning tools|Microfibre cloths|Pack of 20
Housekeeping|Waste management|Garbage bags|Pack of 50
Housekeeping|Waste management|Dustbins|Pack of 4
Housekeeping|Hygiene and PPE|Sanitizer|5 L can
Housekeeping|Hygiene and PPE|Disposable gloves|Box of 100
Housekeeping|Pest control|Pest control kit|Each
Housekeeping|Pest control|Insect repellent|Pack of 6
Housekeeping|Linen and mats|Door mats|Pack of 4
Housekeeping|Linen and mats|Towels|Pack of 12
Gifting|Corporate hampers|Gift hampers|Each
Gifting|Corporate hampers|Premium hamper box|Each
Gifting|Festive gifts|Diwali sweets box|Each
Gifting|Festive gifts|Dry fruit box|Each
Gifting|Employee rewards|Gift vouchers|Pack of 10
Gifting|Employee rewards|Welcome kits|Each
Gifting|Greeting cards|Greeting cards|Pack of 25
Gifting|Greeting cards|Thank-you cards|Pack of 25
Gifting|Branded merchandise|Branded mugs|Pack of 12
Gifting|Branded merchandise|Tote bags|Pack of 50
Gifting|Awards and trophies|Trophies|Each
Gifting|Awards and trophies|Certificate frames|Pack of 10`;

export const ITEMS = RAW.split('\n').map((line, i) => {
  const [cat, sub, name, unit] = line.split('|');
  return { id: i + 1, cat, sub, name, unit };
});

export const itemById = (id) => ITEMS.find((x) => x.id === id);
export const idOf = (name) => ITEMS.find((x) => x.name === name).id;

export const CATEGORIES = [
  { id: 'Pantry', icon: 'cup', desc: 'Tea, coffee, snacks, dairy, water and disposables for office kitchens.', short: 'Tea, coffee, snacks & disposables' },
  { id: 'Stationery', icon: 'pen', desc: 'Paper, writing, files, desk accessories, printing and labels.', short: 'Paper, pens, files & toner' },
  { id: 'Housekeeping', icon: 'spray', desc: 'Cleaning chemicals, washroom supplies, tools, waste and hygiene.', short: 'Cleaning, washroom & hygiene' },
  { id: 'Gifting', icon: 'gift', desc: 'Corporate hampers, festive gifts, welcome kits and branded merchandise.', short: 'Hampers, festive & welcome kits' },
].map((c) => ({
  ...c,
  subs: [...new Set(ITEMS.filter((x) => x.cat === c.id).map((x) => x.sub))],
  count: ITEMS.filter((x) => x.cat === c.id).length,
}));

export const ESSENTIALS = [
  ['Tissues', 2], ['Hand wash', 4], ['Garbage bags', 2], ['Filter coffee', 3],
  ['Tea bags', 2], ['Food plates', 3], ['A4 paper', 5], ['Blue pens', 3],
].map(([name, qty]) => ({ id: idOf(name), qty }));

export const WHY = [
  { icon: 'receipt', t: 'One PO, one GST invoice', d: 'Every category from one vendor.' },
  { icon: 'bell', t: 'Never run out', d: 'Low-stock alerts before shelves empty.' },
  { icon: 'truck', t: 'Tracked delivery', d: 'Quality-checked, followed to sign-off.' },
  { icon: 'users', t: 'One account manager', d: 'Pricing, custom items and schedules.' },
];

export const SECTORS = [
  { art: 'Office', t: 'Corporate offices & tech parks', d: 'Daily pantry and washroom supply' },
  { art: 'Coworking', t: 'Coworking spaces', d: 'Monthly kitchen and stationery cycles' },
  { art: 'Cafe', t: 'Hotels, restaurants & cafés', d: 'Kitchen-safe chemicals and disposables' },
  { art: 'Campus', t: 'Schools & campuses', d: 'High-volume housekeeping on schedule' },
];

export const HOW = [
  { icon: 'search', t: 'Browse', d: 'Pick items from any category' },
  { icon: 'list', t: 'Build your list', d: 'Set quantities in one place' },
  { icon: 'chat', t: 'Get quoted', d: 'Send on WhatsApp, hear back same day' },
];

export const NAV = [
  { href: '#categories', label: 'Categories', icon: 'grid', hint: 'Pantry, stationery, housekeeping, gifting' },
  { href: '#why', label: 'Why UniSupply', icon: 'check', hint: 'One vendor, one invoice' },
  { href: '#sectors', label: 'Who we serve', icon: 'building', hint: 'Offices, coworking, cafés, campuses' },
  { href: '#contact', label: 'Contact', icon: 'chat', hint: 'Call, email or WhatsApp us' },
];
