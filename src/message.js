import { CONTACT } from './data.js';

export function buildMessage({ intro, fields, lines = [], notes }) {
  const out = [intro, ''];
  fields.forEach(([k, v]) => v && out.push(`${k}: ${v}`));
  if (lines.length) {
    out.push('', 'Items:');
    lines.forEach(({ item, qty }, i) => out.push(`${i + 1}. ${item.name} (${item.unit}) × ${qty}`));
  }
  if (notes) out.push('', `Notes: ${notes}`);
  return out.join('\n');
}

export const whatsappUrl = (text) =>
  `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`;

export const mailtoUrl = (subject, body) =>
  `mailto:${CONTACT.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

// Gmail's web composer opens in a new tab and works even without an email app installed.
export const gmailUrl = (subject, body) =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

// Opens a web link in a new tab without ever navigating this page away.
// Returns false when the browser blocked the new tab, so the caller can show a fallback.
export function openInNewTab(url) {
  try {
    // No 'noopener' feature here: with it, window.open always returns null and a block can't be detected.
    const w = window.open(url, '_blank');
    if (!w) return false;
    w.opener = null;
    return true;
  } catch {
    return false;
  }
}

export async function copyText(text, fallbackEl) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    if (fallbackEl) {
      fallbackEl.focus();
      fallbackEl.select();
      try {
        return document.execCommand('copy');
      } catch {
        return false;
      }
    }
    return false;
  }
}
