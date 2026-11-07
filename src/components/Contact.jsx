import { useState } from 'react';
import Icon from './Icon.jsx';
import { CONTACT, SECTORS, mapsUrl } from '../data.js';
import SendModal from './SendModal.jsx';
import { buildMessage, openInNewTab, whatsappUrl } from '../message.js';

const EMPTY = { name: '', company: '', phone: '', email: '', notes: '' };

export default function Contact({ lines, sector, setSector, onEditList, onBrowse, notify }) {
  const [f, setF] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [pending, setPending] = useState(null);
  const upd = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!f.name.trim()) e.name = 'Please enter your name.';
    if (!/^[+\d][\d\s-]{7,}$/.test(f.phone.trim())) e.phone = 'Please enter a valid phone number.';
    if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Please enter a valid email.';
    if (!lines.length && !f.notes.trim()) e.notes = 'Add items to your quote list, or tell us what you need.';
    setErrors(e);
    return !Object.keys(e).length;
  };

  const message = () =>
    buildMessage({
      intro: 'Hello UniSupply, I would like a bulk quote.',
      fields: [['Name', f.name], ['Company', f.company], ['Phone', f.phone], ['Email', f.email], ['Type of space', sector]],
      lines,
      notes: f.notes,
    });

  const send = (via) => (e) => {
    e.preventDefault();
    if (!validate()) {
      notify('Please check the highlighted fields');
      return;
    }
    const body = message();
    const subject = `Quote request – ${f.company || f.name}`;
    if (via === 'wa' && openInNewTab(whatsappUrl(body))) {
      notify('Opening WhatsApp in a new tab');
      return;
    }
    // Email always uses the panel; WhatsApp falls back to it if the new tab was blocked.
    setPending({ via, subject, body });
  };

  return (
    <section id="contact" className="section section-white">
      <div className="container contact">
        <div className="contact-info">
          <span className="eyebrow">Contact</span>
          <h2>Request a bulk quote</h2>
          <p className="lead">Send your list — we reply with pricing the same day.</p>

          <ul className="contact-list">
            <li>
              <span className="icon-tile"><Icon name="pin" /></span>
              <span><b>Office &amp; warehouse</b><a href={mapsUrl} target="_blank" rel="noopener noreferrer">{CONTACT.address}</a></span>
            </li>
            <li>
              <span className="icon-tile"><Icon name="phone" /></span>
              <span><b>Call us</b>{CONTACT.phones.map((p) => <a key={p.raw} href={`tel:${p.raw}`}>{p.label}</a>)}</span>
            </li>
            <li>
              <span className="icon-tile"><Icon name="mail" /></span>
              <span><b>Email</b><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></span>
            </li>
            <li>
              <span className="icon-tile"><Icon name="chat" /></span>
              <span><b>WhatsApp</b><a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer">Chat with us</a></span>
            </li>
          </ul>
        </div>

        <form className="form-card" id="rfq" noValidate onSubmit={send('wa')}>
          <div className="form-grid">
            <Field label="Your name *" error={errors.name}>
              <input value={f.name} onChange={upd('name')} autoComplete="name" />
            </Field>
            <Field label="Company">
              <input value={f.company} onChange={upd('company')} autoComplete="organization" />
            </Field>
            <Field label="Phone *" error={errors.phone}>
              <input type="tel" value={f.phone} onChange={upd('phone')} autoComplete="tel" placeholder="+91" />
            </Field>
            <Field label="Email" error={errors.email}>
              <input type="email" value={f.email} onChange={upd('email')} autoComplete="email" />
            </Field>
            <Field label="Type of space" wide>
              <select value={sector} onChange={(e) => setSector(e.target.value)}>
                <option value="">Select…</option>
                {SECTORS.map((s) => <option key={s.t}>{s.t}</option>)}
                <option>Other</option>
              </select>
            </Field>
          </div>

          <div className="quote-summary">
            <div className="row-between">
              <b>Quote list</b>
              <span className="muted small">{lines.length} item{lines.length === 1 ? '' : 's'}</span>
            </div>
            {lines.length ? (
              <>
                <ul className="summary-list">
                  {lines.slice(0, 4).map(({ item, qty }) => (
                    <li key={item.id}><span>{item.name}</span><span className="muted">× {qty}</span></li>
                  ))}
                  {lines.length > 4 && <li className="muted">+ {lines.length - 4} more</li>}
                </ul>
                <button type="button" className="text-btn" onClick={onEditList}>Edit quote list</button>
              </>
            ) : (
              <p className="muted small">
                Your list is empty. <button type="button" className="text-btn" onClick={onBrowse}>Browse categories</button> or describe what you need below.
              </p>
            )}
          </div>

          <Field label="What do you need? (optional if you built a list)" error={errors.notes} wide>
            <textarea rows={4} value={f.notes} onChange={upd('notes')} placeholder="e.g. monthly pantry supply for 120 people, delivery every Monday" />
          </Field>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary btn-lg"><Icon name="chat" size={18} /> Send on WhatsApp</button>
            <button type="button" className="btn btn-outline btn-lg" onClick={send('mail')}><Icon name="mail" size={18} /> Send by email</button>
          </div>
          <p className="muted small">We usually reply the same working day.</p>
        </form>
      </div>
      <SendModal send={pending} onClose={() => setPending(null)} />
    </section>
  );
}

function Field({ label, error, wide, children }) {
  return (
    <label className={`field${wide ? ' wide' : ''}${error ? ' has-error' : ''}`}>
      <span>{label}</span>
      {children}
      {error && <small className="error">{error}</small>}
    </label>
  );
}
