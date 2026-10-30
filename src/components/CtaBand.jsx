import Visual from './Visual.jsx';

export default function CtaBand({ onGetApp }) {
  return (
    <section className="section section-tight">
      <div className="container">
        <div className="cta-band">
          <div className="cta-copy">
            <h2>Ready to simplify office supplies?</h2>
            <p>Bulk pricing, one invoice, delivered across Bengaluru.</p>
            <div className="btn-row">
              <a href="#contact" className="btn btn-light btn-lg">Request a bulk quote</a>
              <button type="button" className="btn btn-on-dark btn-lg" onClick={onGetApp}>Get the app</button>
            </div>
          </div>
          <div className="cta-art"><Visual name="Van" alt="UniSource delivery van" /></div>
        </div>
      </div>
    </section>
  );
}
