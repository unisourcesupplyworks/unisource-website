import Modal from './Modal.jsx';
import Stepper from './Stepper.jsx';
import Icon from './Icon.jsx';

export default function QuoteDrawer({ open, onClose, lines, setQty, clear, onBrowse, onContinue }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      variant="drawer"
      title="Your quote list"
      subtitle={lines.length ? `${lines.length} item${lines.length === 1 ? '' : 's'} · prices confirmed on quote` : 'Nothing added yet'}
      footer={
        lines.length ? (
          <div className="drawer-actions">
            <button type="button" className="btn btn-primary btn-block" onClick={onContinue}>Continue to request quote</button>
            <div className="row-between">
              <button type="button" className="text-btn" onClick={onBrowse}>Add more items</button>
              <button type="button" className="text-btn danger" onClick={clear}>Clear list</button>
            </div>
          </div>
        ) : (
          <button type="button" className="btn btn-primary btn-block" onClick={onBrowse}>Browse categories</button>
        )
      }
    >
      {lines.length ? (
        <ul className="item-list">
          {lines.map(({ item, qty }) => (
            <li key={item.id} className="item-row">
              <span className="item-body">
                <b>{item.name}</b>
                <span className="muted small">{item.cat} · {item.unit}</span>
              </span>
              <Stepper value={qty} name={item.name} onChange={(v) => setQty(item.id, v)} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="empty-state">
          <span className="icon-tile icon-tile-lg"><Icon name="list" size={24} /></span>
          <p>Add items from any category, or use the monthly essentials list to get started.</p>
        </div>
      )}
    </Modal>
  );
}
