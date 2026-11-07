import Icon from './Icon.jsx';
import { LOW_STOCK, ORDER_STEPS } from '../data.js';

const FEATURES = [
  { icon: 'bell', t: 'Low-stock alerts' },
  { icon: 'chart', t: 'Usage by staff' },
  { icon: 'truck', t: 'Live order tracking' },
  { icon: 'users', t: 'Team roles' },
];

export default function AppShowcase({ onReorder, onGetApp }) {
  return (
    <section id="app" className="section section-white">
      <div className="container split">
        <div className="split-copy">
          <span className="eyebrow eyebrow-plain">The UniSupply app</span>
          <h2>Stock, usage and orders in one place.</h2>
          <ul className="feature-chips">
            {FEATURES.map((f) => (
              <li key={f.t}><Icon name={f.icon} size={18} />{f.t}</li>
            ))}
          </ul>
          <div className="btn-row">
            <button type="button" className="btn btn-primary" onClick={onGetApp}>Get app access</button>
            <a href="#contact" className="btn btn-outline">Talk to us</a>
          </div>
        </div>

        <div className="app-panel">
          <div className="mini-card">
            <div className="row-between">
              <b>Running low</b>
              <span className="pill pill-warn">{LOW_STOCK.length} items</span>
            </div>
            {LOW_STOCK.map((s) => (
              <div key={s.name}>
                <div className="row-between small">
                  <span>{s.name}</span>
                  <span className="muted">{s.days} days left</span>
                </div>
                <div className="bar" role="img" aria-label={`${s.name}: ${s.pct}% of stock left`}>
                  <i style={{ width: `${s.pct}%` }} />
                </div>
              </div>
            ))}
            <button
              type="button"
              className="btn btn-soft btn-block"
              onClick={() => onReorder(LOW_STOCK.map((s) => ({ id: s.id, qty: 1 })))}
            >
              Reorder these
            </button>
          </div>

          <div className="mini-card">
            <div className="row-between">
              <b>Order tracking</b>
              <span className="pill">On the way</span>
            </div>
            <ol className="timeline">
              {ORDER_STEPS.map((s) => (
                <li key={s.t} className={s.state}>
                  <b>{s.t}</b>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
