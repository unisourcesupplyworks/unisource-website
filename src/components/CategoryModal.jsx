import { useEffect, useMemo, useState } from 'react';
import Modal from './Modal.jsx';
import Stepper from './Stepper.jsx';
import Icon from './Icon.jsx';
import { CATEGORIES, ITEMS } from '../data.js';

export default function CategoryModal({ category, onClose, quote, setQty, onViewList }) {
  const [sub, setSub] = useState('All');
  const [q, setQ] = useState('');
  const cat = CATEGORIES.find((c) => c.id === category);

  useEffect(() => {
    setSub('All');
    setQ('');
  }, [category]);

  const items = useMemo(
    () =>
      ITEMS.filter(
        (x) =>
          x.cat === category &&
          (sub === 'All' || x.sub === sub) &&
          x.name.toLowerCase().includes(q.trim().toLowerCase())
      ),
    [category, sub, q]
  );

  const inList = Object.keys(quote).length;

  return (
    <Modal
      open={!!cat}
      onClose={onClose}
      title={cat?.id || ''}
      subtitle={cat?.desc}
      footer={
        <div className="row-between wrap-gap">
          <span className="muted small">{inList} item{inList === 1 ? '' : 's'} in your quote list</span>
          <button type="button" className="btn btn-primary" onClick={onViewList} disabled={!inList}>View quote list</button>
        </div>
      }
    >
      {cat && (
        <>
          <label className="search">
            <Icon name="search" size={18} />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={`Search ${cat.id.toLowerCase()}…`} aria-label="Search items" />
          </label>
          <div className="chips" role="group" aria-label="Filter by type">
            {['All', ...cat.subs].map((s) => (
              <button key={s} type="button" className={`chip${sub === s ? ' on' : ''}`} aria-pressed={sub === s} onClick={() => setSub(s)}>
                {s}
              </button>
            ))}
          </div>
          <ul className="item-list">
            {items.map((it) => {
              const qty = quote[it.id] || 0;
              return (
                <li key={it.id} className="item-row">
                  <span className="item-body">
                    <b>{it.name}</b>
                    <span className="muted small">{it.sub} · {it.unit}</span>
                  </span>
                  {qty ? (
                    <Stepper value={qty} name={it.name} onChange={(v) => setQty(it.id, v)} />
                  ) : (
                    <button type="button" className="btn btn-soft btn-sm" onClick={() => setQty(it.id, 1)}>
                      <Icon name="plus" size={16} /> Add
                    </button>
                  )}
                </li>
              );
            })}
            {!items.length && <li className="muted empty">No items match “{q}”.</li>}
          </ul>
        </>
      )}
    </Modal>
  );
}
