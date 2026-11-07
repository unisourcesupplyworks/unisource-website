import Icon from './Icon.jsx';
import Visual from './Visual.jsx';
import { CONTACT } from '../data.js';

export default function Hero() {
  return (
    <section id="top" className="container hero">
      <div className="hero-copy">
        <span className="eyebrow-pill">B2B office supply · {CONTACT.city}</span>
        <h1>
          Everything your office runs on, <span className="accent">from one vendor.</span>
        </h1>
        <p className="lead">Pantry, stationery, housekeeping and gifting — ordered, tracked and invoiced in one place.</p>
        <div className="btn-row">
          <a href="#categories" className="btn btn-primary btn-lg">
            Browse categories <Icon name="arrow" size={18} stroke={2.2} />
          </a>
          <a href="#contact" className="btn btn-outline btn-lg">Request a quote</a>
        </div>
        <ul className="ticks">
          <li><Icon name="check" size={18} stroke={2.4} />GST invoice</li>
          <li><Icon name="check" size={18} stroke={2.4} />Account manager</li>
        </ul>
      </div>

      <div className="hero-visual">
        <Visual name="HeroShelf" alt="Stocked office supply shelf" className="hero-photo" />
        <div className="float-chip chip-a" aria-hidden="true">
          <span className="icon-tile"><Icon name="truck" size={18} /></span>
          <span><b>Out for delivery</b><small>Order · 8 items</small></span>
        </div>
      </div>
    </section>
  );
}
