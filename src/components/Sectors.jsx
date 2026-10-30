import Icon from './Icon.jsx';
import Visual from './Visual.jsx';
import SectionHead from './SectionHead.jsx';
import { SECTORS } from '../data.js';

export default function Sectors({ onPick }) {
  return (
    <section id="sectors" className="section">
      <div className="container">
        <SectionHead eyebrow="Who we serve" title="Built around the space you run." />
        <div className="grid grid-4 grid-pair">
          {SECTORS.map((s) => (
            <button key={s.t} type="button" className="sector-card" onClick={() => onPick(s.t)}>
              <span className="sector-art"><Visual name={s.art} alt={s.t} /></span>
              <span className="sector-body">
                <b>{s.t}</b>
                <span className="muted small">{s.d}</span>
                <span className="link-arrow">Get a list <Icon name="arrow" size={16} stroke={2.2} /></span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
