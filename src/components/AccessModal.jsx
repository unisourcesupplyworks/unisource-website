import { useState } from 'react';
import Modal from './Modal.jsx';
import Icon from './Icon.jsx';
import { CONTACT } from '../data.js';
import { buildMessage, openInNewTab, whatsappUrl } from '../message.js';

// "Sign in" / "Get the app": app access is set up by the account manager, so this collects a request.
export default function AccessModal({ open, onClose }) {
  const [f, setF] = useState({ name: '', company: '', phone: '' });
  const [err, setErr] = useState('');
  const [link, setLink] = useState(''); // shown if the browser blocked the new tab
  const upd = (k) => (e) => setF((s) => ({ ...s, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!f.name.trim() || !f.company.trim() || f.phone.trim().length < 8) {
      setErr('Please fill in your name, company and phone number.');
      return;
    }
    setErr('');
    const url = whatsappUrl(
      buildMessage({
        intro: 'Hello UniSupply, I would like access to the UniSupply app for my office.',
        fields: [['Name', f.name], ['Company', f.company], ['Phone', f.phone]],
      })
    );
    if (openInNewTab(url)) onClose();
    else setLink(url);
  };

  return (
    <Modal open={open} onClose={onClose} title="Get UniSupply app access" subtitle="Accounts are set up by your account manager for your office.">
      <form className="access-form" onSubmit={submit} noValidate>
        <ul className="ticks ticks-col">
          <li><Icon name="check" size={18} stroke={2.4} />Order and reorder across all four categories</li>
          <li><Icon name="check" size={18} stroke={2.4} />Low-stock alerts and staff usage tracking</li>
          <li><Icon name="check" size={18} stroke={2.4} />Track every PO to delivery</li>
        </ul>
        <label className="field"><span>Your name</span><input value={f.name} onChange={upd('name')} autoComplete="name" /></label>
        <label className="field"><span>Company</span><input value={f.company} onChange={upd('company')} autoComplete="organization" /></label>
        <label className="field"><span>Phone</span><input type="tel" value={f.phone} onChange={upd('phone')} autoComplete="tel" placeholder="+91" /></label>
        {err && <p className="error" role="alert">{err}</p>}
        {link && (
          <a className="btn btn-soft btn-block" href={link} target="_blank" rel="noopener noreferrer" onClick={onClose}>
            Tap here to open WhatsApp
          </a>
        )}
        <button type="submit" className="btn btn-primary btn-block btn-lg">Request access on WhatsApp</button>
        <p className="muted small center">
          Already a customer? Call <a href={`tel:${CONTACT.phones[0].raw}`}>{CONTACT.phones[0].label}</a> for your sign-in link.
        </p>
      </form>
    </Modal>
  );
}
