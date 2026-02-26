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
  if (!isOpen) return null;
  return (
    <ModalWrap onClose={onClose}>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <Calculator size={48} color="var(--primary)" style={{ margin: '0 auto 20px auto' }} />
        <h3>Calcolatore di Risparmio</h3>
        <p style={{ margin: '10px 0 30px 0' }}>Sblocca l'analisi completa dei tuoi costi operativi.</p>
        <div style={{ padding: '20px', border: '1px dashed var(--border)', borderRadius: '12px' }}>
          Modulo in fase di aggiornamento grafico.
        </div>
      </div>
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
    if (!localStorage.getItem('cookie-consent')) setCookie(true);
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Helmet>
          <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2307eba6'%3E%3Cpath d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/%3E%3C/svg%3E" />
          <title>B2Vibe | Making Sales Effectively Simple</title>
        </Helmet>
        <ScrollToTop />
        <Navbar onContactClick={() => setModal(true)} />
        <Routes>
          <Route path="/" element={
            <>
              <SEO title="E-commerce Full Outsourcing & Merchant of Record" />
              <div style={{ background: '#fff' }}>
                <Hero onContactClick={() => setModal(true)} />
                <Ticker />
                <DNASection />
                <ServicesSection onContactClick={() => setModal(true)} onCalcClick={() => setCalc(true)} />
                <CompareSection />
                <FinalCTA onContactClick={() => setModal(true)} />
                <Footer onCookieClick={() => setCookie(true)} />
                <FloatingSupport onContactClick={() => setModal(true)} />
              </div>
            </>
          } />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
        <ContactModal isOpen={modal} onClose={() => setModal(false)} />
        <SavingsCalculator isOpen={calc} onClose={() => setCalc(false)} />
        <CookieBanner isVisible={cookie} onAccept={() => { setCookie(false); localStorage.setItem('cookie-consent', 'true'); }} />
      </BrowserRouter>
    </HelmetProvider>
  );
}
