import Icon from './Icon.jsx';

export default function Stepper({ value, onChange, name }) {
  return (
    <span className="stepper">
      <button type="button" onClick={() => onChange(value - 1)} aria-label={`Decrease ${name}`}>
        <Icon name={value <= 1 ? 'trash' : 'minus'} size={16} />
      </button>
      <input
        type="number"
        inputMode="numeric"
        min="0"
        value={value}
        aria-label={`${name} quantity`}
        onChange={(e) => onChange(parseInt(e.target.value, 10) || 0)}
      />
      <button type="button" onClick={() => onChange(value + 1)} aria-label={`Increase ${name}`}>
        <Icon name="plus" size={16} />
      </button>
    </span>
  );
}
