import Logo from './Logo.jsx';
import { CATEGORIES, CONTACT, mapsUrl } from '../data.js';

export default function Footer({ onOpenCategory }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" aria-label="UniSupply home"><Logo tagline={false} dark /></a>
            <p>B2B office supply for corporate offices, coworking spaces, hospitality and campuses in {CONTACT.city}.</p>
          </div>
          <nav aria-label="Company">
            <b>Company</b>
            <a href="#top">Home</a>
            <a href="#why">Why UniSupply</a>
            <a href="#app">The app</a>
            <a href="#sectors">Who we serve</a>
            <a href="#contact">Contact</a>
          </nav>
          <nav aria-label="Categories">
            <b>Categories</b>
            {CATEGORIES.map((c) => (
              <button key={c.id} type="button" className="footer-link" onClick={() => onOpenCategory(c.id)}>{c.id}</button>
            ))}
          </nav>
          <div>
            <b>Office &amp; warehouse</b>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer">{CONTACT.address}</a>
            {CONTACT.phones.map((p) => <a key={p.raw} href={`tel:${p.raw}`}>{p.label}</a>)}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
            <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} UniSupply. All rights reserved.</span>
          <span>Brand names referenced belong to their respective owners. Availability and pricing are confirmed at the time of order.</span>
        </div>
      </div>
    </footer>
  );
}
