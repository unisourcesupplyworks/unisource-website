import logoFull from '../assets/unisupply-logo.png';
import wordmark from '../assets/unisupply-wordmark.png';

// The icon is the left part of the full logo image. The "UniSupply" lettering
// is drawn as a mask filled with a theme color, so it stays readable on dark
// backgrounds (dark mode, footer) while keeping the logo's exact letterforms.
const wordmarkMask = { WebkitMaskImage: `url(${wordmark})`, maskImage: `url(${wordmark})` };

export default function Logo({ dark = false }) {
  return (
    <span className={`logo${dark ? ' logo-dark' : ''}`}>
      <span className="logo-mark" aria-hidden="true">
        <img src={logoFull} alt="" />
      </span>
      <span className="logo-word" style={wordmarkMask} aria-hidden="true" />
    </span>
  );
}
