import Visual from './Visual.jsx';

export default function CtaBand() {
  return (
    <section className="section section-tight">
      <div className="container">
        <div className="cta-band">
          <div className="cta-copy">
            <h2>Ready to simplify office supplies?</h2>
            <p>Bulk pricing, one invoice, delivered across Bengaluru.</p>
            <div className="btn-row">
              <a href="#quote" className="btn btn-light btn-lg">Request a bulk quote</a>
            </div>
          </div>
          <div className="cta-art"><Visual name="Van" alt="UniSupply delivery van" /></div>
        </div>
      </div>
    </section>
  );
}
