import Icon from './Icon.jsx';
import { ESSENTIALS, itemById } from '../data.js';

export default function QuickStart({ onAdd }) {
  return (
    <section className="container quick" aria-labelledby="quick-title">
      <div className="quick-card">
        <div className="quick-head">
          <span className="icon-tile icon-tile-lg"><Icon name="list" size={24} /></span>
          <div>
            <h2 id="quick-title">Monthly office essentials</h2>
            <p className="muted small">A typical repeat order — edit before you send</p>
          </div>
        </div>
        <ul className="quick-items">
          {ESSENTIALS.map(({ id, qty }) => (
            <li key={id}><span>{itemById(id).name}</span><b>× {qty}</b></li>
          ))}
        </ul>
        <button type="button" className="btn btn-primary btn-lg quick-btn" onClick={() => onAdd(ESSENTIALS)}>
          <Icon name="plus" size={18} /> Add all 8
        </button>
      </div>
    </section>
  );
}
