import Icon from './Icon.jsx';
import Visual from './Visual.jsx';
import SectionHead from './SectionHead.jsx';
import { SECTORS } from '../data.js';

export default function Sectors() {
  return (
    <section id="sectors" className="section">
      <div className="container">
        <SectionHead eyebrow="Who we serve" title="Built around the space you run." />
        <ul className="grid grid-4 grid-pair">
          {SECTORS.map((s) => (
            <li key={s.t} className="sector-card">
              <span className="sector-art"><Visual name={s.art} alt={s.t} /></span>
              <span className="sector-body">
                <b>{s.t}</b>
                <span className="muted small">{s.d}</span>
              </span>
            </li>
          ))}
        </ul>
        <div className="btn-row center-row">
          <a href="#quote" className="btn btn-primary btn-lg">
            Get a list <Icon name="arrow" size={18} stroke={2.2} />
          </a>
        </div>
      </div>
    </section>
  );
}
