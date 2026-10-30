import { ART } from './Illustrations.jsx';
import { PHOTOS } from '../data.js';

// Shows your own photo when one is set in PHOTOS (src/data.js), otherwise the illustration.
export default function Visual({ name, alt, className = '' }) {
  const src = PHOTOS[name];
  if (src) {
    return <img src={src} alt={alt || ''} className={`photo ${className}`} loading="lazy" />;
  }
  const Art = ART[name];
  return Art ? <Art /> : null;
}
