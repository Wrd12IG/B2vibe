import React, { useEffect, useState } from 'react';
import { X, ArrowRight, MoveRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { BrowserRouter, Routes, Route, Link as RouterLink } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import SEO from './components/SEO';
import {
  Hero, Ticker, DNASection,
  ServicesSection, CompareSection, FinalCTA,
  ScrollToTop, ProblemSolutionSection, GrowthPartnerSection,
  ManagedChannelsSection, CalculatorSection
} from './components/PageSections';
import { Navbar, Footer } from './components/SharedLayout';

import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import MerchantOfRecordGuide from './pages/MerchantOfRecordGuide';

const ModalWrap = ({ onClose, children, maxW = '520px' }) => (
  <AnimatePresence>
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
      style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(8px)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}>
      <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        style={{ background: 'var(--dark2)', width: '100%', maxWidth: maxW, borderRadius: '24px', padding: 'clamp(32px, 5vw, 56px)', position: 'relative', maxHeight: '90vh', overflowY: 'auto', border: '1px solid var(--border)', boxShadow: '0 40px 100px rgba(0,0,0,0.5)' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '24px', right: '24px', background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer', fontSize: '24px' }}>
          <X size={24} />
        </button>
        {children}
      </motion.div>
    </motion.div>
  </AnimatePresence>
);

const ContactModal = ({ isOpen, onClose }) => {
  const [success, setSuccess] = useState(false);
  if (!isOpen) return null;

  const inputS = { width: '100%', background: 'var(--dark3)', border: '1px solid var(--border)', borderRadius: '10px', padding: '13px 16px', fontSize: '15px', color: '#fff', outline: 'none' };
  const labelS = { fontSize: '12px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: '8px', display: 'block', textTransform: 'uppercase', letterSpacing: '0.08em' };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    // In a real app, send data here
  };

  return (
    <ModalWrap onClose={() => { onClose(); setSuccess(false); }}>
      {!success ? (
        <>
          <h3 style={{ fontSize: '26px', fontWeight: 800, marginBottom: '8px', color: '#fff', fontFamily: 'Raleway' }}>Prenota la tua call</h3>
          <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '28px' }}>Compila il form e ti ricontatteremo entro 24 ore per fissare la call strategica di 30 minuti.</p>

          <form style={{ display: 'grid', gap: '18px' }} onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div><label style={labelS}>Nome *</label><input type="text" required style={inputS} placeholder="Mario" /></div>
              <div><label style={labelS}>Cognome *</label><input type="text" required style={inputS} placeholder="Rossi" /></div>
            </div>

            <div><label style={labelS}>Ragione sociale *</label><input type="text" required style={inputS} placeholder="La tua azienda S.r.l." /></div>
            <div><label style={labelS}>Email aziendale *</label><input type="email" required style={inputS} placeholder="mario.rossi@azienda.com" /></div>

            <div><label style={labelS}>Note (opzionale)</label><textarea style={{ ...inputS, height: '80px', resize: 'none' }} placeholder="Raccontaci brevemente il tuo business o i canali su cui vendi..." /></div>

            <div>
              <label style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', cursor: 'pointer', fontSize: '12px', color: 'var(--muted)' }}>
                <input type="checkbox" required style={{ marginTop: '4px', width: '18px', height: '18px', accentColor: 'var(--primary)' }} />
                <span>Ho letto e accetto la <RouterLink to="/privacy-policy" style={{ color: 'var(--primary)' }}>Privacy Policy</RouterLink>. Acconsento al trattamento dei miei dati personali per essere ricontattato.</span>
              </label>
            </div>

            <button className="primary" style={{ padding: '15px', borderRadius: '10px', justifyContent: 'center', width: '100%', fontSize: '15px', fontWeight: 800 }}>
              Invia richiesta <MoveRight size={18} />
            </button>
          </form>
        </>
      ) : (
        <div style={{ textAlign: 'center', padding: '20px 0' }}>
          <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
          <h4 style={{ fontSize: '22px', fontWeight: 800, color: '#fff', marginBottom: '10px', fontFamily: 'Raleway' }}>Richiesta inviata!</h4>
          <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.6 }}>Grazie per il tuo interesse. Verrai ricontattato entro 24 ore per fissare la call strategica di 30 minuti con il nostro team.</p>
          <button className="btn-ghost" onClick={() => { onClose(); setSuccess(false); }} style={{ marginTop: '24px' }}>Chiudi</button>
        </div>
      )}
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
  const inputS = { width: '100%', background: 'var(--dark3)', border: '1px solid var(--border)', borderRadius: '12px', padding: '12px 16px', fontSize: '15px', color: '#fff', outline: 'none' };
  const labelS = { fontSize: '13px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', marginBottom: '8px', display: 'block' };

  const mktOptions = ['Amazon', 'eBay', 'Decathlon', 'ManoMano', 'Leroy Merlin', 'Altro'];

  return (
    <ModalWrap onClose={onClose}>
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '16px' }}>
          {[1, 2, 3, 4, 5].map(s => (
            <div key={s} style={{ width: '40px', height: '4px', background: step >= s ? 'var(--primary)' : '#333', borderRadius: '2px' }} />
          ))}
        </div>
        <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#fff' }}>Analisi di Risparmio</h3>
      </div>

      {step === 1 && (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <p style={{ marginBottom: '24px', color: 'var(--muted)', textAlign: 'center' }}>Partiamo dal tuo attuale E-commerce di proprietà.</p>
          <div style={{ display: 'grid', gap: '20px' }}>
            <div><label style={labelS}>Ordini medi al giorno</label><input type="number" style={inputS} placeholder="es. 20" value={data.ecoOrders} onChange={e => setData({ ...data, ecoOrders: e.target.value })} /></div>
            <div><label style={labelS}>AOV (Valore medio carrello)</label><input type="number" style={inputS} placeholder="es. 85 €" value={data.ecoAov} onChange={e => setData({ ...data, ecoAov: e.target.value })} /></div>
            <button className="primary" onClick={next} style={{ width: '100%', justifyContent: 'center' }}>Prosegui <ArrowRight size={18} /></button>
          </div>
        </motion.div>
      )}

      {step === 2 && (
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          <p style={{ marginBottom: '24px', color: 'var(--muted)', textAlign: 'center' }}>Presenza sui Marketplace.</p>
          <div style={{ display: 'grid', gap: '20px' }}>
            <div><label style={labelS}>Su quanti marketplace vendi?</label><input type="number" style={inputS} value={data.mktCount} onChange={e => setData({ ...data, mktCount: e.target.value })} /></div>
            <div>
              <label style={labelS}>Quali canali?</label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {mktOptions.map(m => (
                  <button key={m} onClick={() => {
                    const next = data.mktSelected.includes(m) ? data.mktSelected.filter(x => x !== m) : [...data.mktSelected, m];
                    setData({ ...data, mktSelected: next });
                  }} style={{ padding: '8px 12px', borderRadius: '20px', border: '1px solid', borderColor: data.mktSelected.includes(m) ? 'var(--primary)' : 'var(--border)', background: data.mktSelected.includes(m) ? 'var(--primary-glow)' : 'transparent', color: data.mktSelected.includes(m) ? 'var(--primary)' : 'var(--muted)', fontSize: '13px', cursor: 'pointer', transition: 'all 0.2s' }}>{m}</button>
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
          <p style={{ marginBottom: '24px', color: 'var(--muted)', textAlign: 'center' }}>Gestione Logistica.</p>
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
              <label style={labelS}>Interesse a passare ad una logistica 3PL?</label>
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
          <p style={{ marginBottom: '24px', color: 'var(--muted)', textAlign: 'center' }}>Dati Statistici.</p>
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
          <p style={{ marginBottom: '24px', color: 'var(--muted)', textAlign: 'center' }}>Abbiamo elaborato il tuo profilo di risparmio.</p>
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

const CookieBanner = ({ isVisible, onAccept }) => {
  if (!isVisible) return null;
  return (
    <div style={{ position: 'fixed', bottom: '24px', left: '24px', right: '24px', background: 'var(--dark2)', border: '1px solid var(--border)', padding: '24px', borderRadius: '16px', zIndex: 9999, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px', boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}>
      <p style={{ fontSize: '14px', color: 'var(--muted)', flex: '1' }}>Utilizziamo cookie per migliorare la tua esperienza sul sito. <RouterLink to="/cookie-policy" style={{ color: 'var(--white)' }}>Cookie Policy</RouterLink>.</p>
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

  const handleOpenContact = () => setModal(true);
  const handleOpenCalc = () => setCalc(true);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Helmet>
          <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%332EFFA0;stop-opacity:1' /%3E%3Cstop offset='100%25' style='stop-color:%2300ffa6;stop-opacity:1' /%3E%3C/linearGradient%3E%3C/defs%3E%3Ctext y='75' x='10' font-family='Outfit, sans-serif' font-weight='800' font-size='80' fill='url(%23g)'%3EB%3C/text%3E%3C/svg%3E" />
          <title>B2Vibe | Making Sales Effectively Simple</title>
        </Helmet>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={
            <>
              <Navbar onContactClick={handleOpenContact} />
              <SEO title="E-commerce Full Outsourcing & Merchant of Record" />
              <main>
                <Hero onContactClick={handleOpenContact} />
                <Ticker />

                {/* 1. Il problema */}
                <ProblemSolutionSection />

                {/* 2. Il nostro DNA */}
                <DNASection />

                {/* 3. Il partner ideale per chi vuole crescere */}
                <GrowthPartnerSection />

                {/* 4. I Nostri Servizi */}
                <ServicesSection />

                {/* 5. Compare Section */}
                <CompareSection />

                {/* 6. Calcolatore */}
                <CalculatorSection onCalcClick={handleOpenCalc} />

                {/* 7. Managed Channels */}
                <ManagedChannelsSection />

                {/* 8. Final CTA */}
                <FinalCTA onContactClick={handleOpenContact} />
              </main>
              <Footer />
            </>
          } />
          <Route path="/privacy-policy" element={<PrivacyPolicy onContactClick={handleOpenContact} />} />
          <Route path="/cookie-policy" element={<CookiePolicy onContactClick={handleOpenContact} />} />
          <Route path="/merchant-of-record-guida" element={<MerchantOfRecordGuide onContactClick={handleOpenContact} />} />
        </Routes>
        <ContactModal isOpen={modal} onClose={() => setModal(false)} />
        <SavingsCalculator isOpen={calc} onClose={() => setCalc(false)} />
        <CookieBanner isVisible={cookie} onAccept={() => { setCookie(false); localStorage.setItem('cookie-consent', 'true'); }} />
      </BrowserRouter>
    </HelmetProvider>
  );
}
