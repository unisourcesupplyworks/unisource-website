import { useRef, useState } from 'react';
import Modal from './Modal.jsx';
import Icon from './Icon.jsx';
import { CONTACT } from '../data.js';
import { copyText, gmailUrl, mailtoUrl, whatsappUrl } from '../message.js';

// Shown for "Send by email" (and as a fallback if WhatsApp couldn't open a new tab).
// Every option is a real link that opens in a new tab, so this page never goes blank.
export default function SendModal({ send, onClose }) {
  const [copied, setCopied] = useState(false);
  const box = useRef(null);
  if (!send) return <Modal open={false} onClose={onClose} title="" />;

  const { via, subject, body } = send;
  const isMail = via === 'mail';

  const copy = async () => {
    const ok = await copyText(isMail ? `To: ${CONTACT.email}\nSubject: ${subject}\n\n${body}` : body, box.current);
    setCopied(ok);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Modal
      open
      onClose={onClose}
      title={isMail ? 'Send your request by email' : 'Send your request on WhatsApp'}
      subtitle={isMail ? `To ${CONTACT.email}` : `To ${CONTACT.phones[0].label}`}
    >
      <div className="send-options">
        {isMail ? (
          <>
            <a className="btn btn-primary btn-lg btn-block" href={gmailUrl(subject, body)} target="_blank" rel="noopener noreferrer" onClick={onClose}>
              <Icon name="mail" size={18} /> Open in Gmail
            </a>
            <a className="btn btn-outline btn-lg btn-block" href={mailtoUrl(subject, body)} target="_blank" rel="noopener noreferrer">
              Open my email app
            </a>
          </>
        ) : (
          <a className="btn btn-primary btn-lg btn-block" href={whatsappUrl(body)} target="_blank" rel="noopener noreferrer" onClick={onClose}>
            <Icon name="chat" size={18} /> Open WhatsApp
          </a>
        )}
      </div>

      <div className="send-preview">
        <div className="row-between">
          <b className="small">Your message</b>
          <button type="button" className="text-btn" onClick={copy}>{copied ? 'Copied' : 'Copy message'}</button>
        </div>
        <textarea ref={box} readOnly rows={8} value={body} aria-label="Message to send" />
        {isMail && (
          <p className="muted small">
            No email app? Copy the message and send it to <span className="selectable">{CONTACT.email}</span> from any mail account.
          </p>
        )}
      </div>
    </Modal>
  );
}
