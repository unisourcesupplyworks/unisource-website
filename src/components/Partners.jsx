import Icon from './Icon.jsx';
import { CONTACT, PARTNER_MESSAGE } from '../data.js';
import { mailtoUrl, whatsappUrl } from '../message.js';

const LOOKING_FOR = [
  'Super-stockists and regional distributors serving Bengaluru',
  'Pantry, stationery, housekeeping, cleaning and gifting lines',
  'Steady stock and clear, consistent pricing',
];

export default function Partners() {
  return (
    <section id="partners" className="section">
      <div className="container">
        <div className="cta-band partner-band">
          <div className="cta-copy">
            <span className="eyebrow eyebrow-light">Supply partners</span>
            <h2>We’re building our supply network in Bengaluru.</h2>
            <p>We supply offices and workplaces. We’re onboarding super-stockists and regional distributors to supply us.</p>
            <p className="partner-next">Send your brands, categories and price list. We reply within {CONTACT.replyTime} to set up a call.</p>
            <div className="btn-row">
              <a href={whatsappUrl(PARTNER_MESSAGE)} className="btn btn-light btn-lg" target="_blank" rel="noopener noreferrer">
                <Icon name="chat" size={18} /> Become a supply partner
              </a>
              <a href={mailtoUrl('Supply partnership – UniSupply', PARTNER_MESSAGE)} className="btn btn-ghost-light btn-lg">
                <Icon name="mail" size={18} /> Email us
              </a>
            </div>
          </div>
          <div className="partner-card">
            <b>Who we’re looking for</b>
            <ul>
              {LOOKING_FOR.map((t) => (
                <li key={t}><Icon name="check" size={18} stroke={2.4} />{t}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
