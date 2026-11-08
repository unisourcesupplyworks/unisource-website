import Icon from './Icon.jsx';
import SectionHead from './SectionHead.jsx';
import { CONTACT, mapsUrl } from '../data.js';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHead
          eyebrow="Contact"
          title="Connect to the UniSupply team."
          lead="Call, email or WhatsApp us — we usually reply the same working day."
        />
        <ul className="contact-cards">
          <li>
            <span className="icon-tile icon-tile-lg"><Icon name="pin" size={24} /></span>
            <b>Office &amp; warehouse</b>
            <a href={mapsUrl} target="_blank" rel="noopener noreferrer">{CONTACT.address}</a>
          </li>
          <li>
            <span className="icon-tile icon-tile-lg"><Icon name="phone" size={24} /></span>
            <b>Call us</b>
            {CONTACT.phones.map((p) => <a key={p.raw} href={`tel:${p.raw}`}>{p.label}</a>)}
          </li>
          <li>
            <span className="icon-tile icon-tile-lg"><Icon name="mail" size={24} /></span>
            <b>Email</b>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </li>
          <li>
            <span className="icon-tile icon-tile-lg"><Icon name="chat" size={24} /></span>
            <b>WhatsApp</b>
            <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer">Chat with us</a>
          </li>
        </ul>
      </div>
    </section>
  );
}
