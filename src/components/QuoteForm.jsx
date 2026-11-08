import { useState } from 'react';
import Icon from './Icon.jsx';
import SectionHead from './SectionHead.jsx';
import SendModal from './SendModal.jsx';
import { CATEGORIES, ESSENTIALS, SECTORS } from '../data.js';
import { buildMessage, openInNewTab, whatsappUrl } from '../message.js';

const EMPTY = { name: '', company: '', phone: '', email: '', notes: '' };
const CAT_ICON = Object.fromEntries(CATEGORIES.map((c) => [c.id, c.icon]));
const plural = (n, word) => `${n} ${word}${n === 1 ? '' : 's'}`;

export default function QuoteForm({ lines, setQty, clear, sector, setSector, onBrowse, onAddEssentials, notify }) {
  const [f, setF] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [pending, setPending] = useState(null);
  const upd = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  const count = lines.length;
  const units = lines.reduce((n, l) => n + l.qty, 0);

  const validate = () => {
    const e = {};
    if (!f.name.trim()) e.name = 'Please enter your name.';
    if (!/^[+\d][\d\s-]{7,}$/.test(f.phone.trim())) e.phone = 'Please enter a valid phone number.';
    if (f.email && !/^\S+@\S+\.\S+$/.test(f.email)) e.email = 'Please enter a valid email.';
    if (!count && !f.notes.trim()) e.notes = 'Add items to your quote list, or tell us what you need.';
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
    <section id="quote" className="section section-white">
      <div className="container">
        <SectionHead eyebrow="Request For Quote" title="Request a bulk quote" lead="Send your list — we reply with pricing the same day." />
        <div className="quote-layout">
          {/* ── Products in the quote list ── */}
          <div className="rfq-card products-card">
            <div className="products-inner">
            <div className="products-head">
              <h3>Products <span className="count-pill">{count}</span></h3>
              {count > 0 && <button type="button" className="text-btn muted-btn" onClick={clear}>Clear all</button>}
            </div>

            {count ? (
              <ul className="product-rows">
                {lines.map(({ item, qty }) => (
                  <li key={item.id} className="product-row">
                    <span className="product-thumb"><Icon name={CAT_ICON[item.cat] || 'list'} size={26} /></span>
                    <span className="product-info">
                      <span className="product-cat">{item.cat}</span>
                      <b>{item.name}</b>
                      <span className="muted small">{item.unit} · {item.sub}</span>
                    </span>
                    <span className="product-actions">
                      <span className="qty-pill">
                        <button type="button" onClick={() => setQty(item.id, qty - 1)} disabled={qty <= 1} aria-label={`Decrease ${item.name}`}>
                          <Icon name="minus" size={16} />
                        </button>
                        <input
                          type="number"
                          inputMode="numeric"
                          min="1"
                          value={qty}
                          aria-label={`${item.name} quantity`}
                          onChange={(e) => setQty(item.id, Math.max(1, parseInt(e.target.value, 10) || 1))}
                        />
                        <button type="button" onClick={() => setQty(item.id, qty + 1)} aria-label={`Increase ${item.name}`}>
                          <Icon name="plus" size={16} />
                        </button>
                      </span>
                      <button type="button" className="row-remove" onClick={() => setQty(item.id, 0)} aria-label={`Remove ${item.name}`}>
                        <Icon name="trash" size={18} />
                      </button>
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="products-empty">
                <span className="icon-tile icon-tile-lg"><Icon name="list" size={24} /></span>
                <b>Your list is empty</b>
                <p className="muted small">Start with a typical monthly order, or pick products from any category.</p>
                <div className="btn-row">
                  <button type="button" className="btn btn-primary" onClick={() => onAddEssentials(ESSENTIALS)}>
                    <Icon name="plus" size={18} /> Add monthly essentials ({ESSENTIALS.length})
                  </button>
                  <button type="button" className="btn btn-outline" onClick={onBrowse}>Browse categories</button>
                </div>
              </div>
            )}

            {count > 0 && (
              <div className="products-foot">
                <button type="button" className="text-btn" onClick={onBrowse}><Icon name="plus" size={16} /> Add more products</button>
                <span className="muted small">{plural(count, 'product')} · <b>{units}</b> units</span>
              </div>
            )}
            </div>
          </div>

          {/* ── Request form ── */}
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
                {count > 0 && <span className="muted small">{plural(count, 'product')} · <b>{units}</b> units</span>}
              </div>
              {!count && (
                <p className="muted small">
                  Your list is empty. <button type="button" className="text-btn" onClick={onBrowse}>Browse categories</button> or describe what you need below.
                </p>
              )}
            </div>

            <Field label={count ? 'Need Anything Else? (Optional)' : 'What do you need? *'} error={errors.notes} wide>
              <textarea rows={4} value={f.notes} onChange={upd('notes')} placeholder="e.g. monthly pantry supply for 120 people, delivery every Monday" />
            </Field>

            <div className="form-actions">
              <button type="submit" className="btn btn-primary btn-lg"><Icon name="chat" size={18} /> Send on WhatsApp</button>
              <button type="button" className="btn btn-outline btn-lg" onClick={send('mail')}><Icon name="mail" size={18} /> Send by email</button>
            </div>
          </form>
        </div>
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
