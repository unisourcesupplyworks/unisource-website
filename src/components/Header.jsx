import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import Logo from './Logo.jsx';
import { NAV } from '../data.js';

export default function Header({ count, onOpenQuote, onSignIn }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => window.innerWidth > 960 && setOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const close = () => setOpen(false);

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <nav className="container nav" aria-label="Main">
        <a href="#top" className="brand" onClick={close} aria-label="UniSource home">
          <Logo />
        </a>

        <div className="nav-links">
          {NAV.map((n) => (
            <a key={n.href} href={n.href}>{n.label}</a>
          ))}
        </div>

        <div className="nav-actions">
          <button type="button" className="icon-btn" onClick={onOpenQuote} aria-label={`Quote list, ${count} items`}>
            <Icon name="list" />
            {count > 0 && <span className="badge-count">{count}</span>}
          </button>
          <button type="button" className="btn btn-ghost hide-sm" onClick={onSignIn}>Sign in</button>
          <a href="#contact" className="btn btn-primary hide-xs">Request a quote</a>
          <button
            type="button"
            className="icon-btn menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`mobile-menu${open ? ' open' : ''}`} hidden={!open}>
        <div className="container mobile-menu-inner">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={close}>{n.label}</a>
          ))}
          <div className="mobile-menu-cta">
            <button type="button" className="btn btn-ghost" onClick={() => { close(); onSignIn(); }}>Sign in</button>
            <a href="#contact" className="btn btn-primary" onClick={close}>Request a quote</a>
          </div>
        </div>
      </div>
    </header>
  );
}
