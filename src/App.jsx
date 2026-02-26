import React, { useEffect, useState } from 'react';
import { X, Send, Calculator, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import SEO from './components/SEO';
import {
  Navbar, Hero, Ticker, DNASection,
  ServicesSection, CompareSection, FinalCTA,
  Footer, ScrollToTop
} from './components/PageSections';

import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import MerchantOfRecordGuide from './pages/MerchantOfRecordGuide';

const ModalWrap = ({ onClose, children, maxW = '600px' }) => (
  <AnimatePresence>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', backdropFilter: 'blur(8px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
      <motion.div initial={{ scale: 0.95, opacity: 0, y: 10 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        style={{ background: '#fff', width: '100%', maxWidth: maxW, borderRadius: '24px', padding: 'clamp(32px, 5vw, 56px)', position: 'relative', maxHeight: '90vh', overflowY: 'auto', boxShadow: '0 40px 100px rgba(0,0,0,0.15)' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '24px', right: '24px', background: 'var(--surface)', border: 'none', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--dark)', cursor: 'pointer' }}>
          <X size={20} />
        </button>
        {children}
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const inputS = { width: '100%', background: '#f8f9fa', border: '1px solid #e9ecef', borderRadius: '12px', padding: '14px 18px', fontSize: '15px' };
  const labelS = { fontSize: '13px', fontWeight: 600, color: 'var(--dark)', marginBottom: '8px', display: 'block' };

  return (
    <ModalWrap onClose={onClose}>
      <h3 style={{ fontSize: '32px', fontWeight: 800, marginBottom: '8px' }}>Consulenza dedicata</h3>
      <p style={{ color: 'var(--muted)', fontSize: '15px', marginBottom: '32px' }}>Analizziamo i tuoi canali per definire una strategia di crescita globale.</p>

      <form style={{ display: 'grid', gap: '20px' }} onSubmit={(e) => { e.preventDefault(); alert('Grazie! La tua richiesta è stata inviata a sales@b2vibe.com'); onClose(); }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div><label style={labelS}>Nome</label><input type="text" required style={inputS} placeholder="es. Mario" /></div>
          <div><label style={labelS}>Cognome</label><input type="text" required style={inputS} placeholder="es. Rossi" /></div>
        </div>

        <div><label style={labelS}>Email aziendale</label><input type="email" required style={inputS} placeholder="mario.rossi@azienda.com" /></div>
        <div><label style={labelS}>Sito web (URL)</label><input type="url" required style={inputS} placeholder="www.azienda.com" /></div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div>
            <label style={labelS}>Tempistiche attivazione</label>
            <select style={inputS} required>
              <option value="">Seleziona...</option>
              <option>Entro 3 mesi</option>
              <option>Entro 12 mesi</option>
              <option>Richiesta informazioni / esplorativo</option>
            </select>
          </div>
          <div>
            <label style={labelS}>Fatturato online attuale</label>
            <select style={inputS} required>
              <option value="">Seleziona...</option>
              <option>Niente / Startup</option>
              <option>&gt; 60k Euro</option>
              <option>60k - 150k Euro</option>
              <option>Oltre 150k Euro</option>
            </select>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div>
            <label style={labelS}>Canali di vendita attivi</label>
            <select style={inputS} required>
              <option value="">Seleziona...</option>
              <option>Solo eshop</option>
              <option>Solo marketplace</option>
              <option>Eshop e marketplace</option>
              <option>Nessuno</option>
            </select>
          </div>
          <div>
            <label style={labelS}>Ti affidi già ad un partner?</label>
            <select style={inputS} required>
              <option value="">Seleziona...</option>
              <option>Sì</option>
              <option>No</option>
            </select>
          </div>
        </div>

        <div>
          <label style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', cursor: 'pointer', fontSize: '13px', color: 'var(--muted)' }}>
            <input type="checkbox" required style={{ marginTop: '4px' }} />
            <span>Ho letto e accetto la <RouterLink to="/privacy-policy" style={{ color: 'var(--primary)' }}>Privacy Policy</RouterLink>. Acconsento al trattamento dei dati a sales@b2vibe.com.</span>
          </label>
        </div>

        <button className="primary" style={{ padding: '16px', borderRadius: '12px', justifyContent: 'center', width: '100%' }}>
          Invia richiesta <ArrowRight size={18} />
        </button>
      </form>
    </ModalWrap>
  );
};

const SavingsCalculator = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    ecoOrders: '', ecoAov: '',
    mktCount: '', mktSelected: [], mktOrders: '', mktAov: '',
    logistics: '', interest3PL: '',
    sector: '', email: ''
  });

  if (!isOpen) return null;

  const next = () => setStep(step + 1);
  const back = () => setStep(step - 1);
  const inputS = { width: '100%', background: '#f8f9fa', border: '1px solid #e9ecef', borderRadius: '12px', padding: '12px 16px', fontSize: '15px' };
  const labelS = { fontSize: '13px', fontWeight: 600, color: 'var(--dark)', marginBottom: '8px', display: 'block' };

  const mktOptions = ['Amazon', 'eBay', 'Zalando', 'ManoMano', 'Leroy Merlin', 'Altro'];

  return (
    <ModalWrap onClose={onClose}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '16px' }}>
          {[1, 2, 3, 4, 5].map(s => (
            <div key={s} style={{ width: '40px', height: '4px', background: step >= s ? 'var(--primary)' : '#eee', borderRadius: '2px' }} />
          ))}
        </div>
        <h3 style={{ fontSize: '24px', fontWeight: 800 }}>Analisi di Risparmio</h3>
      </div>

      {step === 1 && (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <p style={{ marginBottom: '24px', color: 'var(--muted)' }}>Partiamo dal tuo attuale E-commerce di proprietà.</p>
          <div style={{ display: 'grid', gap: '20px' }}>
            <div><label style={labelS}>Ordini medi al giorno</label><input type="number" style={inputS} placeholder="es. 20" value={data.ecoOrders} onChange={e => setData({ ...data, ecoOrders: e.target.value })} /></div>
            <div><label style={labelS}>AOV (Valore medio carrello)</label><input type="number" style={inputS} placeholder="es. 85 €" value={data.ecoAov} onChange={e => setData({ ...data, ecoAov: e.target.value })} /></div>
            <button className="primary" onClick={next} style={{ width: '100%', justifyContent: 'center' }}>Prosegui <ArrowRight size={18} /></button>
          </div>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <p style={{ marginBottom: '24px', color: 'var(--muted)' }}>Presenza sui Marketplace.</p>
          <div style={{ display: 'grid', gap: '20px' }}>
            <div><label style={labelS}>Su quanti marketplace vendi?</label><input type="number" style={inputS} value={data.mktCount} onChange={e => setData({ ...data, mktCount: e.target.value })} /></div>
            <div>
              <label style={labelS}>Quali canali?</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {mktOptions.map(m => (
                  <button key={m} onClick={() => {
                    const next = data.mktSelected.includes(m) ? data.mktSelected.filter(x => x !== m) : [...data.mktSelected, m];
                    setData({ ...data, mktSelected: next });
                  }} style={{ padding: '8px 12px', borderRadius: '20px', border: '1px solid', borderColor: data.mktSelected.includes(m) ? 'var(--primary)' : '#eee', background: data.mktSelected.includes(m) ? 'var(--primary-glow)' : '#fff', fontSize: '13px', cursor: 'pointer' }}>{m}</button>
                ))}
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div><label style={labelS}>Ordini/giorno (mkt)</label><input type="number" style={inputS} value={data.mktOrders} onChange={e => setData({ ...data, mktOrders: e.target.value })} /></div>
              <div><label style={labelS}>AOV mkt (€)</label><input type="number" style={inputS} value={data.mktAov} onChange={e => setData({ ...data, mktAov: e.target.value })} /></div>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button className="btn-ghost" onClick={back} style={{ flex: 1, justifyContent: 'center' }}>Indietro</button>
              <button className="primary" onClick={next} style={{ flex: 2, justifyContent: 'center' }}>Avanti</button>
            </div>
          </div>
        </motion.div>
      )}

      {step === 3 && (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <p style={{ marginBottom: '24px', color: 'var(--muted)' }}>Gestione Logistica.</p>
          <div style={{ display: 'grid', gap: '20px' }}>
            <div>
              <label style={labelS}>Attuale tipo di logistica</label>
              <select style={inputS} value={data.logistics} onChange={e => setData({ ...data, logistics: e.target.value })}>
                <option value="">Seleziona...</option>
                <option>Propria (magazzino interno)</option>
                <option>3PL (partner esterno)</option>
                <option>Amazon FBA / MCF</option>
              </select>
            </div>
            <div>
              <label style={labelS}>Interesse a passare ad una logistica 3PL specializzata?</label>
              <select style={inputS} value={data.interest3PL} onChange={e => setData({ ...data, interest3PL: e.target.value })}>
                <option value="">Seleziona...</option>
                <option>Sì, assolutamente</option>
                <option>Valutabile</option>
                <option>No, sono soddisfatto</option>
              </select>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button className="btn-ghost" onClick={back} style={{ flex: 1, justifyContent: 'center' }}>Indietro</button>
              <button className="primary" onClick={next} style={{ flex: 2, justifyContent: 'center' }}>Ultimo Passo</button>
            </div>
          </div>
        </motion.div>
      )}

      {step === 4 && (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <p style={{ marginBottom: '24px', color: 'var(--muted)' }}>Dati Statistici.</p>
          <div style={{ display: 'grid', gap: '20px' }}>
            <div>
              <label style={labelS}>Settore merceologico</label>
              <select style={inputS} value={data.sector} onChange={e => setData({ ...data, sector: e.target.value })}>
                <option value="">Seleziona...</option>
                <option>Elettronica</option>
                <option>Casa e Cucina</option>
                <option>Abbigliamento/Fashion</option>
                <option>Beauty/Pharma</option>
                <option>Alimentare/Wine</option>
                <option>Altro</option>
              </select>
            </div>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button className="btn-ghost" onClick={back} style={{ flex: 1, justifyContent: 'center' }}>Indietro</button>
              <button className="primary" onClick={next} style={{ flex: 2, justifyContent: 'center' }}>Vedi Risultato</button>
            </div>
          </div>
        </motion.div>
      )}

      {step === 5 && (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <p style={{ marginBottom: '24px', color: 'var(--muted)' }}>Abbiamo elaborato il tuo profilo di risparmio.</p>
          <div style={{ background: 'var(--primary-glow)', padding: '24px', borderRadius: '16px', marginBottom: '24px', border: '1px dashed var(--primary)' }}>
            <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--primary)', textAlign: 'center' }}>
              ✅ Analisi Pronta! Inserisci la tua email per sbloccarla.
            </p>
          </div>
          <div style={{ display: 'grid', gap: '20px' }}>
            <div><label style={labelS}>La tua Email aziendale</label><input type="email" style={inputS} placeholder="mario.rossi@azienda.com" value={data.email} onChange={e => setData({ ...data, email: e.target.value })} /></div>
            <button className="primary" onClick={() => { alert('Grazie! Ti abbiamo inviato il report completo a ' + data.email); onClose(); setStep(1); }} style={{ width: '100%', justifyContent: 'center' }}>Ricevi Report Analisi</button>
          </div>
        </motion.div>
      )}
    </ModalWrap>
  );
};

const FloatingSupport = ({ onContactClick }) => (
  <div style={{ position: 'fixed', bottom: '24px', right: '24px', zIndex: 1000 }}>
    <button className="primary" onClick={onContactClick} style={{ borderRadius: '50px', boxShadow: '0 12px 32px rgba(0,0,0,0.1)', padding: '14px 24px', gap: '10px' }}>
      <Mail size={20} /> Prendi un appuntamento
    </button>
  </div>
);

const CookieBanner = ({ isVisible, onAccept }) => {
  if (!isVisible) return null;
  return (
    <div style={{ position: 'fixed', bottom: '24px', left: '24px', right: '24px', background: '#fff', border: '1px solid var(--border)', padding: '24px', borderRadius: '16px', zIndex: 9999, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.05)' }}>
      <p style={{ fontSize: '14px', color: 'var(--muted)', flex: '1' }}>Utilizziamo cookie per migliorare la tua esperienza sul sito. <RouterLink to="/cookie-policy" style={{ color: 'var(--dark)' }}>Cookie Policy</RouterLink>.</p>
      <button className="primary" onClick={onAccept} style={{ padding: '10px 24px' }}>Accetta Tutto</button>
    </div>
  );
};

export default function App() {
  const [modal, setModal] = useState(false);
  const [calc, setCalc] = useState(false);
  const [cookie, setCookie] = useState(false);

  useEffect(() => {
    console.log("B2Vibe App Mounted");
    if (!localStorage.getItem('cookie-consent')) setCookie(true);
  }, []);

  const handleOpenContact = () => setModal(true);
  const handleOpenCalc = () => setCalc(true);
  const handleOpenCookie = () => setCookie(true);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Helmet>
          <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2307eba6'%3E%3Cpath d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/%3E%3C/svg%3E" />
          <title>B2Vibe | Making Sales Effectively Simple</title>
        </Helmet>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={
            <div style={{ background: '#fff' }}>
              <Navbar onContactClick={handleOpenContact} />
              <SEO title="E-commerce Full Outsourcing & Merchant of Record" />
              <Hero onContactClick={handleOpenContact} />
              <Ticker />
              <DNASection />
              <ServicesSection onContactClick={handleOpenContact} onCalcClick={handleOpenCalc} />
              <CompareSection />
              <FinalCTA onContactClick={handleOpenContact} />
              <Footer onCookieClick={handleOpenCookie} />
              <FloatingSupport onContactClick={handleOpenContact} />
            </div>
          } />
          <Route path="/privacy-policy" element={<PrivacyPolicy onContactClick={handleOpenContact} onCookieClick={handleOpenCookie} />} />
          <Route path="/cookie-policy" element={<CookiePolicy onContactClick={handleOpenContact} onCookieClick={handleOpenCookie} />} />
          <Route path="/merchant-of-record-guida" element={<MerchantOfRecordGuide onContactClick={handleOpenContact} onCookieClick={handleOpenCookie} />} />
        </Routes>
        <ContactModal isOpen={modal} onClose={() => setModal(false)} />
        <SavingsCalculator isOpen={calc} onClose={() => setCalc(false)} />
        <CookieBanner isVisible={cookie} onAccept={() => { setCookie(false); localStorage.setItem('cookie-consent', 'true'); }} />
      </BrowserRouter>
    </HelmetProvider>
  );
}
