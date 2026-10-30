import Icon from './Icon.jsx';
import Visual from './Visual.jsx';
import SectionHead from './SectionHead.jsx';
import { CATEGORIES } from '../data.js';

export default function Categories({ onOpen }) {
  return (
    <section id="categories" className="section section-white">
      <div className="container">
        <SectionHead eyebrow="What we supply" title="Four portfolios. One order." />
        <div className="grid grid-4 grid-pair">
          {CATEGORIES.map((c) => (
            <button key={c.id} type="button" className="cat-card" onClick={() => onOpen(c.id)}>
              <span className="cat-art"><Visual name={c.id} alt={`${c.id} supplies`} /></span>
              <span className="cat-body">
                <b className="cat-name">{c.id}</b>
                <span className="cat-desc">{c.short}</span>
                <span className="link-arrow">{c.count} items <Icon name="arrow" size={16} stroke={2.2} /></span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
