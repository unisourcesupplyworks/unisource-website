import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Stats from './components/Stats.jsx';
import Categories from './components/Categories.jsx';
import Why from './components/Why.jsx';
import Sectors from './components/Sectors.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import CtaBand from './components/CtaBand.jsx';
import QuoteForm from './components/QuoteForm.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import CategoryModal from './components/CategoryModal.jsx';
import QuoteDrawer from './components/QuoteDrawer.jsx';
import Toast from './components/Toast.jsx';
import { itemById } from './data.js';

const STORE_KEY = 'unisource-quote';

function loadQuote() {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY)) || {};
  } catch {
    return {};
  }
}

export default function App() {
  const [quote, setQuote] = useState(loadQuote); // { [itemId]: qty }
  const [category, setCategory] = useState(null); // open category modal
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [sector, setSector] = useState('');
  const [toast, setToast] = useState('');
  const toastTimer = useRef();

  useEffect(() => {
    try {
      localStorage.setItem(STORE_KEY, JSON.stringify(quote));
    } catch {
      /* storage unavailable — list still works for this visit */
    }
  }, [quote]);

  const notify = useCallback((msg) => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(''), 2400);
  }, []);

  const setQty = useCallback((id, qty) => {
    setQuote((q) => {
      const next = { ...q };
      if (qty <= 0) delete next[id];
      else next[id] = Math.min(qty, 9999);
      return next;
    });
  }, []);

  const addMany = useCallback(
    (entries, msg) => {
      setQuote((q) => {
        const next = { ...q };
        entries.forEach(({ id, qty }) => {
          next[id] = (next[id] || 0) + qty;
        });
        return next;
      });
      notify(msg);
    },
    [notify]
  );

  const clear = useCallback(() => setQuote({}), []);

  const lines = useMemo(
    () =>
      Object.entries(quote)
        .map(([id, qty]) => ({ item: itemById(Number(id)), qty }))
        .filter((l) => l.item),
    [quote]
  );

  const goTo = useCallback((hash) => {
    const el = document.querySelector(hash);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <Stats />
        <Categories onOpen={setCategory} />
        <Why />
        <Sectors />
        <HowItWorks onStart={() => goTo('#categories')} />
        <CtaBand />
        <QuoteForm
          lines={lines}
          setQty={setQty}
          clear={clear}
          sector={sector}
          setSector={setSector}
          onBrowse={() => goTo('#categories')}
          onAddEssentials={(entries) => addMany(entries, `Added ${entries.length} essentials to your quote list`)}
          notify={notify}
        />
        <Contact />
      </main>
      <Footer onOpenCategory={setCategory} />

      <CategoryModal
        category={category}
        onClose={() => setCategory(null)}
        quote={quote}
        setQty={setQty}
        onViewList={() => { setCategory(null); setDrawerOpen(true); }}
      />
      <QuoteDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        lines={lines}
        setQty={setQty}
        clear={clear}
        onBrowse={() => { setDrawerOpen(false); goTo('#categories'); }}
        onContinue={() => { setDrawerOpen(false); goTo('#quote'); }}
      />
      <Toast message={toast} />
    </>
  );
}
