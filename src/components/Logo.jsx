export default function Logo({ tagline = true, dark = false }) {
  return (
    <span className={`logo${dark ? ' logo-dark' : ''}`}>
      <span className="logo-mark" aria-hidden="true">U</span>
      <span className="logo-text">
        <b>UniSource</b>
        {tagline && <small>Office supplies, one vendor</small>}
      </span>
    </span>
  );
}
