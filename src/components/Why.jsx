import Icon from './Icon.jsx';
import SectionHead from './SectionHead.jsx';
import { WHY } from '../data.js';

export default function Why() {
  return (
    <section id="why" className="section">
      <div className="container">
        <SectionHead eyebrow="Why UniSupply" title="One vendor. Fewer follow-ups." />
        <ul className="why-strip">
          {WHY.map((w) => (
            <li key={w.t}>
              <span className="icon-tile icon-tile-lg"><Icon name={w.icon} size={24} /></span>
              <span><b>{w.t}</b><span>{w.d}</span></span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
