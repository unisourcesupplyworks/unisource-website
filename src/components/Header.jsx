import { useEffect, useRef, useState } from 'react';
import Icon from './Icon.jsx';
import Logo from './Logo.jsx';
import { CONTACT, NAV } from '../data.js';

// Which nav section is currently in view, for the active-link highlight.
function useActiveSection(ids) {
  const [active, setActive] = useState('');
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length || !('IntersectionObserver' in window)) return undefined;
    const visible = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => visible.set(e.target.id, e.isIntersecting));
        setActive(ids.find((id) => visible.get(id)) || '');
      },
      // A section counts as current while it crosses the band just under the header.
      { rootMargin: '-90px 0px -55% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);
  return active;
}

const SECTION_IDS = NAV.map((n) => n.href.slice(1));

export default function Header({ count, onOpenQuote }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const menuBtn = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu when the layout switches to desktop.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 961px)');
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // While the menu is open: lock page scroll and close on Escape.
  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        menuBtn.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const close = () => setOpen(false);
  const isActive = (href) => active === href.slice(1);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}${open ? ' menu-open' : ''}`}>
      <nav className="container nav" aria-label="Main">
        <a href="#top" className="brand" onClick={close} aria-label="UniSupply home">
          <Logo />
        </a>

        <ul className="nav-links">
          {NAV.map((n) => (
            <li key={n.href}>
              <a href={n.href} className={isActive(n.href) ? 'active' : undefined} aria-current={isActive(n.href) ? 'location' : undefined}>
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button type="button" className="quote-btn" onClick={onOpenQuote} aria-label={`Quote list, ${count} ${count === 1 ? 'item' : 'items'}`}>
            <Icon name="list" />
            <span className="quote-btn-label">Quote list</span>
            {count > 0 && <span className="badge-count">{count}</span>}
          </button>
          <a href="#contact" className="btn btn-primary nav-cta">Get a quote</a>
          <button
            ref={menuBtn}
            type="button"
            className="menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span className="menu-bars" aria-hidden="true"><i /><i /><i /></span>
          </button>
        </div>
      </nav>

      <div className="menu-scrim" onClick={close} aria-hidden="true" />
      <div id="mobile-menu" className="mobile-menu" inert={open ? undefined : ''}>
        <div className="container mobile-menu-inner">
          <ul className="mobile-links">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} onClick={close} className={isActive(n.href) ? 'active' : undefined} aria-current={isActive(n.href) ? 'location' : undefined}>
                  <span className="icon-tile"><Icon name={n.icon} size={18} /></span>
                  <span className="mobile-link-text">
                    <b>{n.label}</b>
                    <small>{n.hint}</small>
                  </span>
                  <Icon name="arrow" size={18} />
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-menu-cta">
            <a href="#contact" className="btn btn-primary btn-lg" onClick={close}>Request a quote</a>
            <a href={`https://wa.me/${CONTACT.whatsapp}`} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              <Icon name="chat" size={18} />WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
