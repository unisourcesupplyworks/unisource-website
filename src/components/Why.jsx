import Icon from './Icon.jsx';
import { WHY } from '../data.js';

export default function Why() {
  return (
    <section id="why" className="section section-tight-top">
      <div className="container">
        <h2 className="visually-hidden">Why UniSupply</h2>
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
