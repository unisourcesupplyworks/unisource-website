import Icon from './Icon.jsx';
import SectionHead from './SectionHead.jsx';
import { HOW } from '../data.js';

export default function HowItWorks({ onStart }) {
  return (
    <section id="how" className="section section-white">
      <div className="container">
        <SectionHead eyebrow="How it works" title="Catalogue to quote in three steps." />
        <ol className="how-steps">
          {HOW.map((h, i) => (
            <li key={h.t}>
              <span className="how-icon">
                <Icon name={h.icon} size={28} />
                <span className="how-num">{i + 1}</span>
              </span>
              <b>{h.t}</b>
              <span className="muted small">{h.d}</span>
            </li>
          ))}
        </ol>
        <div className="btn-row center-row">
          <button type="button" className="btn btn-primary btn-lg" onClick={onStart}>Start building your list</button>
        </div>
      </div>
    </section>
  );
}
