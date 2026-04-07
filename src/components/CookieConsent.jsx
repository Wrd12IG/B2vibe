import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import { X, Shield, Cookie, ChevronDown, ChevronUp, Check } from 'lucide-react';

/* ─── Storage key ─── */
const CONSENT_KEY = 'b2vibe-cookie-consent';

/* ─── Cookie categories ─── */
const CATEGORIES = [
  {
    id: 'necessary',
    label: 'Cookie Tecnici Necessari',
    description: 'Essenziali per il funzionamento del sito. Garantiscono la navigazione, il mantenimento della sessione e la memorizzazione delle preferenze cookie. Non possono essere disattivati.',
    required: true,
  },
  {
    id: 'analytics',
    label: 'Cookie Analitici',
    description: 'Ci permettono di capire come i visitatori interagiscono con il sito, raccogliendo informazioni in forma anonima. Aiutano a migliorare l\'esperienza di navigazione.',
    required: false,
  },
  {
    id: 'marketing',
    label: 'Cookie di Marketing',
    description: 'Utilizzati per mostrare annunci pertinenti e misurare l\'efficacia delle campagne pubblicitarie. Possono essere impostati da partner pubblicitari attraverso il nostro sito.',
    required: false,
  },
];

/* ─── Default consent state ─── */
const getDefaultConsent = () => ({
  necessary: true,
  analytics: false,
  marketing: false,
});

/* ─── Read saved consent ─── */
const getSavedConsent = () => {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed.necessary === 'boolean') return parsed;
  } catch { /* ignore */ }
  return null;
};

/* ─── Save consent ─── */
const saveConsent = (consent) => {
  localStorage.setItem(CONSENT_KEY, JSON.stringify({ ...consent, updatedAt: new Date().toISOString() }));
};

/* ════════════════════════════════════════════
   Toggle Switch
   ════════════════════════════════════════════ */
const Toggle = ({ checked, onChange, disabled }) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    disabled={disabled}
    onClick={() => !disabled && onChange(!checked)}
    style={{
      width: '44px',
      height: '24px',
      borderRadius: '12px',
      border: 'none',
      background: checked ? 'var(--primary)' : 'rgba(255,255,255,0.12)',
      position: 'relative',
      cursor: disabled ? 'not-allowed' : 'pointer',
      transition: 'background 0.25s',
      flexShrink: 0,
      opacity: disabled ? 0.5 : 1,
    }}
  >
    <span style={{
      position: 'absolute',
      top: '2px',
      left: checked ? '22px' : '2px',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      background: '#fff',
      transition: 'left 0.25s cubic-bezier(0.4,0,0.2,1)',
      boxShadow: '0 1px 3px rgba(0,0,0,0.3)',
    }} />
  </button>
);

/* ════════════════════════════════════════════
   Category Row
   ════════════════════════════════════════════ */
const CategoryRow = ({ cat, checked, onChange }) => {
  const [open, setOpen] = useState(false);
  const Icon = open ? ChevronUp : ChevronDown;

  return (
    <div style={{
      background: 'var(--dark3)',
      border: '1px solid var(--border)',
      borderRadius: '12px',
      overflow: 'hidden',
      transition: 'border-color 0.2s',
    }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '14px 16px',
          cursor: 'pointer',
          userSelect: 'none',
        }}
        onClick={() => setOpen(!open)}
      >
        <Icon size={16} style={{ color: 'var(--muted)', flexShrink: 0 }} />
        <span style={{
          flex: 1,
          fontSize: '14px',
          fontWeight: 600,
          color: 'var(--white)',
          fontFamily: "'Raleway', sans-serif",
        }}>
          {cat.label}
        </span>
        {cat.required ? (
          <span style={{
            fontSize: '11px',
            fontWeight: 600,
            color: 'var(--primary)',
            background: 'var(--primary-glow)',
            padding: '3px 10px',
            borderRadius: '20px',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}>
            Sempre attivi
          </span>
        ) : (
          <Toggle checked={checked} onChange={onChange} disabled={cat.required} />
        )}
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{
              padding: '0 16px 14px 44px',
              fontSize: '13px',
              color: 'var(--muted)',
              lineHeight: 1.6,
              margin: 0,
            }}>
              {cat.description}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ════════════════════════════════════════════
   Cookie Banner (initial prompt)
   ════════════════════════════════════════════ */
const Banner = ({ onAcceptAll, onRejectAll, onCustomize }) => (
  <motion.div
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    exit={{ y: 100, opacity: 0 }}
    transition={{ type: 'spring', stiffness: 260, damping: 24 }}
    style={{
      position: 'fixed',
      bottom: '24px',
      left: '24px',
      right: '24px',
      maxWidth: '680px',
      margin: '0 auto',
      background: 'var(--dark2)',
      border: '1px solid var(--border)',
      borderRadius: '20px',
      padding: 'clamp(20px, 4vw, 28px)',
      zIndex: 10000,
      boxShadow: '0 16px 60px rgba(0,0,0,0.6), 0 0 80px rgba(46,255,160,0.04)',
      backdropFilter: 'blur(16px)',
    }}
  >
    {/* Header */}
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
      <div style={{
        width: '36px',
        height: '36px',
        borderRadius: '10px',
        background: 'var(--primary-glow)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        <Shield size={18} style={{ color: 'var(--primary)' }} />
      </div>
      <h4 style={{
        fontSize: '16px',
        fontWeight: 700,
        color: 'var(--white)',
        fontFamily: "'Raleway', sans-serif",
        margin: 0,
      }}>
        La tua privacy è importante
      </h4>
    </div>

    {/* Body */}
    <p style={{
      fontSize: '13px',
      color: 'var(--muted)',
      lineHeight: 1.7,
      marginBottom: '20px',
    }}>
      Utilizziamo cookie tecnici necessari e, con il tuo consenso, cookie analitici e di marketing per migliorare la tua esperienza.
      Puoi scegliere quali accettare.{' '}
      <RouterLink to="/cookie-policy" style={{ color: 'var(--primary)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '2px' }}>
        Cookie Policy
      </RouterLink>
    </p>

    {/* Buttons */}
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '10px',
    }}>
      <button
        className="primary"
        onClick={onAcceptAll}
        style={{
          padding: '11px 22px',
          fontSize: '13px',
          fontWeight: 700,
          borderRadius: '10px',
          flex: '1 1 auto',
          justifyContent: 'center',
          minWidth: '140px',
        }}
      >
        <Check size={16} /> Accetta Tutto
      </button>
      <button
        className="btn-ghost"
        onClick={onRejectAll}
        style={{
          padding: '11px 22px',
          fontSize: '13px',
          fontWeight: 600,
          borderRadius: '10px',
          flex: '1 1 auto',
          justifyContent: 'center',
          minWidth: '140px',
        }}
      >
        Solo Necessari
      </button>
      <button
        onClick={onCustomize}
        style={{
          padding: '11px 22px',
          fontSize: '13px',
          fontWeight: 600,
          borderRadius: '10px',
          background: 'transparent',
          border: '1px solid var(--border)',
          color: 'var(--primary)',
          cursor: 'pointer',
          transition: 'all 0.2s',
          flex: '1 1 auto',
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          minWidth: '140px',
          fontFamily: "'Raleway', sans-serif",
        }}
      >
        Personalizza
      </button>
    </div>
  </motion.div>
);

/* ════════════════════════════════════════════
   Preferences Modal (granular control)
   ════════════════════════════════════════════ */
const PreferencesModal = ({ consent, setConsent, onSave, onClose }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
    style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(0,0,0,0.7)',
      backdropFilter: 'blur(8px)',
      zIndex: 10001,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '16px',
    }}
  >
    <motion.div
      initial={{ scale: 0.92, opacity: 0, y: 30 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      exit={{ scale: 0.92, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 26 }}
      onClick={e => e.stopPropagation()}
      style={{
        width: '100%',
        maxWidth: '520px',
        background: 'var(--dark2)',
        borderRadius: '24px',
        padding: 'clamp(24px, 5vw, 36px)',
        maxHeight: '90vh',
        overflowY: 'auto',
        border: '1px solid var(--border)',
        boxShadow: '0 40px 120px rgba(0,0,0,0.6)',
      }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'none',
          border: 'none',
          color: 'var(--muted)',
          cursor: 'pointer',
        }}
        aria-label="Chiudi"
      >
        <X size={22} />
      </button>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '12px',
          background: 'var(--primary-glow)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Cookie size={20} style={{ color: 'var(--primary)' }} />
        </div>
        <h3 style={{
          fontSize: '20px',
          fontWeight: 800,
          color: 'var(--white)',
          fontFamily: "'Raleway', sans-serif",
          margin: 0,
        }}>
          Preferenze Cookie
        </h3>
      </div>
      <p style={{
        fontSize: '13px',
        color: 'var(--muted)',
        lineHeight: 1.6,
        marginBottom: '24px',
      }}>
        Scegli quali categorie di cookie attivare. I cookie tecnici necessari sono sempre attivi perché fondamentali per il funzionamento del sito.
      </p>

      {/* Categories */}
      <div style={{ display: 'grid', gap: '10px', marginBottom: '24px' }}>
        {CATEGORIES.map(cat => (
          <CategoryRow
            key={cat.id}
            cat={cat}
            checked={consent[cat.id]}
            onChange={val => setConsent(prev => ({ ...prev, [cat.id]: val }))}
          />
        ))}
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <button
          className="primary"
          onClick={onSave}
          style={{
            flex: 2,
            padding: '13px 24px',
            fontSize: '14px',
            fontWeight: 700,
            borderRadius: '10px',
            justifyContent: 'center',
            minWidth: '160px',
          }}
        >
          Salva Preferenze
        </button>
        <button
          className="btn-ghost"
          onClick={onClose}
          style={{
            flex: 1,
            padding: '13px 24px',
            fontSize: '14px',
            borderRadius: '10px',
            justifyContent: 'center',
            minWidth: '100px',
          }}
        >
          Annulla
        </button>
      </div>

      {/* Policy link */}
      <p style={{
        marginTop: '18px',
        fontSize: '12px',
        color: 'rgba(255,255,255,0.3)',
        textAlign: 'center',
      }}>
        Per maggiori dettagli consulta la nostra{' '}
        <RouterLink to="/cookie-policy" style={{ color: 'var(--primary)', textDecoration: 'underline', textUnderlineOffset: '2px' }}>
          Cookie Policy
        </RouterLink>
      </p>
    </motion.div>
  </motion.div>
);

/* ════════════════════════════════════════════
   Floating Settings Button
   ════════════════════════════════════════════ */
const FloatingButton = ({ onClick }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 300, damping: 20 }}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label="Impostazioni Cookie"
      style={{
        position: 'fixed',
        bottom: '24px',
        left: '24px',
        width: hovered ? 'auto' : '44px',
        height: '44px',
        borderRadius: '22px',
        background: 'var(--dark2)',
        border: '1px solid var(--border)',
        color: 'var(--primary)',
        cursor: 'pointer',
        zIndex: 9998,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: hovered ? '8px' : '0px',
        padding: hovered ? '0 16px 0 12px' : '0',
        boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
        transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
      }}
    >
      <Cookie size={18} style={{ flexShrink: 0 }} />
      {hovered && (
        <motion.span
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 'auto' }}
          style={{
            fontSize: '12px',
            fontWeight: 600,
            fontFamily: "'Raleway', sans-serif",
            color: 'var(--white)',
          }}
        >
          Cookie
        </motion.span>
      )}
    </motion.button>
  );
};

/* ════════════════════════════════════════════
   Main CookieConsent Component
   ════════════════════════════════════════════ */
const CookieConsent = () => {
  const [consent, setConsent] = useState(getDefaultConsent);
  const [showBanner, setShowBanner] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const [hasConsented, setHasConsented] = useState(false);

  /* On mount, check if consent was already given */
  useEffect(() => {
    const saved = getSavedConsent();
    if (saved) {
      setConsent(saved);
      setHasConsented(true);
      setShowBanner(false);
    } else {
      setShowBanner(true);
    }
  }, []);

  /* Accept all */
  const handleAcceptAll = useCallback(() => {
    const all = { necessary: true, analytics: true, marketing: true };
    setConsent(all);
    saveConsent(all);
    setShowBanner(false);
    setShowPrefs(false);
    setHasConsented(true);
  }, []);

  /* Reject all optional */
  const handleRejectAll = useCallback(() => {
    const minimal = getDefaultConsent();
    setConsent(minimal);
    saveConsent(minimal);
    setShowBanner(false);
    setShowPrefs(false);
    setHasConsented(true);
  }, []);

  /* Save custom preferences */
  const handleSavePrefs = useCallback(() => {
    saveConsent(consent);
    setShowBanner(false);
    setShowPrefs(false);
    setHasConsented(true);
  }, [consent]);

  /* Open customization modal */
  const handleCustomize = useCallback(() => {
    setShowBanner(false);
    setShowPrefs(true);
  }, []);

  /* Re-open preferences from floating button */
  const handleReopenPrefs = useCallback(() => {
    const saved = getSavedConsent();
    if (saved) setConsent(saved);
    setShowPrefs(true);
  }, []);

  /* Close prefs modal (go back to banner if no prior consent) */
  const handleClosePrefs = useCallback(() => {
    setShowPrefs(false);
    if (!hasConsented) setShowBanner(true);
  }, [hasConsented]);

  return (
    <>
      <AnimatePresence>
        {showBanner && !showPrefs && (
          <Banner
            onAcceptAll={handleAcceptAll}
            onRejectAll={handleRejectAll}
            onCustomize={handleCustomize}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showPrefs && (
          <PreferencesModal
            consent={consent}
            setConsent={setConsent}
            onSave={handleSavePrefs}
            onClose={handleClosePrefs}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {hasConsented && !showBanner && !showPrefs && (
          <FloatingButton onClick={handleReopenPrefs} />
        )}
      </AnimatePresence>
    </>
  );
};

export default CookieConsent;
