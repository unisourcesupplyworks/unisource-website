import { CATEGORIES, CONTACT, ITEMS } from '../data.js';

export default function Stats() {
  const stats = [
    { v: CATEGORIES.length, l: 'supply categories' },
    { v: `${ITEMS.length}+`, l: 'items in the catalogue' },
    { v: '5-step', l: 'tracked delivery on every PO' },
    { v: CONTACT.minOrder, l: 'minimum order value' },
  ];
  return (
    <section className="container stats-wrap" aria-label="At a glance">
      <dl className="stats">
        {stats.map((s) => (
          <div key={s.l} className="stat">
            <dt>{s.l}</dt>
            <dd>{s.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
