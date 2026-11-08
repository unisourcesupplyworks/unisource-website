import logoMark from '../assets/logo-mark.svg';

export default function Logo({ dark = false }) {
  return (
    <span className={`logo${dark ? ' logo-dark' : ''}`}>
      <span className="logo-mark" aria-hidden="true">
        <img src={logoMark} alt="" width="36" height="36" />
      </span>
      <span className="logo-text">
        <b>UniSupply</b>
      </span>
    </span>
  );
}
