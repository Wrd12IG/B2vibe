import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { B2VibeLogo } from './Logo';
import { Linkedin, Instagram, Menu, X, ArrowRight, CheckCircle2, Globe, ShieldCheck, Box, Headset } from 'lucide-react';

/* ── NAVBAR ─────────────────────────────────────────────── */
export const Navbar = ({ onContactClick }) => {
    const [open, setOpen] = useState(false);
    const links = [
        { label: 'Chi siamo', href: '#chi-siamo' },
        { label: 'A chi ci rivolgiamo', href: '#target' },
        { label: 'Servizi', href: '#servizi' },
        { label: 'Vantaggi', href: '#vantaggi' },
    ];
    return (
        <nav className="navbar-fixed">
            <RouterLink to="/" style={{ textDecoration: 'none' }}>
                <B2VibeLogo />
            </RouterLink>
            <ul className="nav-links">
                {links.map(l => <li key={l.label}><a href={l.href}>{l.label}</a></li>)}
            </ul>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <button className="primary" onClick={onContactClick} style={{ padding: '10px 20px', borderRadius: '6px', fontSize: '13px' }}>
                    Consulenza dedicata
                </button>
                <button className="mobile-menu-btn" onClick={() => setOpen(!open)} style={{ color: 'var(--text)' }}>
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
            {open && (
                <div style={{ position: 'fixed', top: '64px', left: 0, right: 0, background: '#fff', padding: '2rem', borderBottom: '1px solid var(--border)', zIndex: 99 }}>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'center' }}>
                        {links.map(l => <li key={l.label}><a href={l.href} onClick={() => setOpen(false)} style={{ textDecoration: 'none', color: 'var(--text)', fontWeight: 600 }}>{l.label}</a></li>)}
                    </ul>
                </div>
            )}
        </nav>
    );
};

/* ── HERO ────────────────────────────────────────────────── */
export const Hero = ({ onContactClick }) => (
    <section className="hero-section">
        <span className="section-label" style={{ marginBottom: '20px' }}>E-commerce Full Outsourcing</span>
        <h1 style={{ fontSize: 'clamp(32px, 8vw, 72px)', fontWeight: 900, maxWidth: '900px', lineHeight: 1.1, color: 'var(--dark)' }}>
            Making sales<br /><span style={{ color: 'var(--primary)' }}>effectively simple.</span>
        </h1>
        <p className="section-sub" style={{ margin: '24px auto 40px auto', textAlign: 'center' }}>
            Gestiamo la complessità dell'ecommerce multicanale — amministrazione, fiscalità, logistica e customer care — generando entrate costanti così la tua azienda può scalare focalizzandosi sul proprio brand.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="primary" onClick={onContactClick}>
                Prenota una call di 30'
            </button>
            <a href="#servizi" className="btn-ghost">Scopri i servizi</a>
        </div>
    </section>
);

/* ── TICKER ──────────────────────────────────────────────── */
const MKT = ['Amazon', 'eBay', 'FNAC', 'Kaufland', 'ManoMano', 'Leroy Merlin', 'Stockly', 'Digitec', 'MediaMarkt', 'BricoBravo'];
export const Ticker = () => (
    <div className="logos-strip">
        <p className="logos-label">Marketplace & Canali Gestiti</p>
        <div className="logos-track">
            {[...MKT, ...MKT].map((m, i) => <span key={i}>{m}</span>)}
        </div>
    </div>
);

/* ── SERVICES ────────────────────────────────────────────── */
export const ServicesSection = ({ onContactClick, onCalcClick }) => (
    <section id="servizi">
        <span className="section-label">I Pilastri del Servizio</span>
        <h2 className="section-title">Ecosistema integrato per la vendita globale.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginTop: '48px' }}>

            {/* 01 - Ecommerce & Marketing Management */}
            <div className="service-card">
                <Box size={32} color="var(--primary)" style={{ marginBottom: '20px' }} />
                <h3 style={{ marginBottom: '12px' }}>Ecommerce & Marketing Management</h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '20px' }}>
                    Gestiamo le vendite dei tuoi prodotti su tutti i canali online, definiamo strategie di prodotto, attività promozionali e miglioramento dei contenuti.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--muted)', flex: 1 }}>
                    <li style={{ display: 'flex', gap: '8px' }}>• Analisi e strategia presidio canali</li>
                    <li style={{ display: 'flex', gap: '8px' }}>• Sviluppo marketing multicanale (Amazon, eBay, etc.)</li>
                    <li style={{ display: 'flex', gap: '8px' }}>• Pricing dinamico e sync real-time magazzino</li>
                    <li style={{ display: 'flex', gap: '8px' }}>• Definizione promozioni e advertising</li>
                    <li style={{ display: 'flex', gap: '8px' }}>• SEO e ottimizzazione contenuti prodotto</li>
                </ul>
                <div className="partner-logos" style={{ marginTop: '20px', marginBottom: '20px' }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amazon Ads Partner" title="Amazon Ads Partner" style={{ height: '18px' }} />
                    <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--muted)' }}>ADS PARTNER</span>
                </div>
                <button className="btn-ghost" onClick={onContactClick} style={{ marginTop: 'auto' }}>
                    Scopri di più <ArrowRight size={14} />
                </button>
            </div>

            {/* 02 - MoR & Cross Border */}
            <div className="service-card">
                <Globe size={32} color="var(--primary)" style={{ marginBottom: '20px' }} />
                <h3 style={{ marginBottom: '12px' }}>Merchant of Record & Cross Border</h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '20px' }}>
                    Assumiamo la responsabilità finanziaria e fiscale delle vendite globali. Gestiamo compliance, IVA estera e burocrazia doganale.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--muted)', flex: 1 }}>
                    <li style={{ display: 'flex', gap: '8px' }}>• Registrazione e gestione IVA in tutta Europa</li>
                    <li style={{ display: 'flex', gap: '8px' }}>• Gestione pagamenti, dispute e rimborsi</li>
                    <li style={{ display: 'flex', gap: '8px' }}>• Compliance legale e fiscale internazionale</li>
                    <li style={{ display: 'flex', gap: '8px' }}>• Logistica doganale e import/export</li>
                    <li style={{ display: 'flex', gap: '8px' }}>• Prevenzione frodi e risk management</li>
                </ul>
                <button className="btn-ghost" onClick={onContactClick} style={{ marginTop: '20px' }}>
                    Scopri di più <ArrowRight size={14} />
                </button>
            </div>

            {/* 03 - Logistica */}
            <div className="service-card">
                <ShieldCheck size={32} color="var(--primary)" style={{ marginBottom: '20px' }} />
                <h3 style={{ marginBottom: '12px' }}>Logistica & Magazzino</h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '20px' }}>
                    Magazzino certificato Prime in Italia. Gestiamo ricezione, stoccaggio, picking e spedizioni veloci in tutto il mondo.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--muted)', flex: 1 }}>
                    <li style={{ display: 'flex', gap: '8px' }}>• Spedizioni Amazon Prime certificate</li>
                    <li style={{ display: 'flex', gap: '8px' }}>• Picking, imballaggio e controllo qualità</li>
                    <li style={{ display: 'flex', gap: '8px' }}>• Gestione resi e inventario ciclico</li>
                    <li style={{ display: 'flex', gap: '8px' }}>• Tariffe corrieri premium ottimizzate</li>
                </ul>
                <div style={{ marginTop: '20px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.svg" alt="Prime" style={{ height: '20px' }} />
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#00A8E1' }}>Prime Fulfillment</span>
                </div>
                <button className="btn-ghost" onClick={onContactClick} style={{ marginTop: 'auto' }}>
                    Scopri di più <ArrowRight size={14} />
                </button>
            </div>

            {/* 04 - Customer Care */}
            <div className="service-card">
                <Headset size={32} color="var(--primary)" style={{ marginBottom: '20px' }} />
                <h3 style={{ marginBottom: '12px' }}>Customer Care Multilingua</h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '20px' }}>
                    Team dedicato interno con supporto in 5 lingue (IT, EN, DE, FR, ES) per garantire un'esperienza cliente d'eccellenza.
                </p>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', color: 'var(--muted)', flex: 1 }}>
                    <li style={{ display: 'flex', gap: '8px' }}>• Assistenza pre e post vendita via Mail/Chat</li>
                    <li style={{ display: 'flex', gap: '8px' }}>• Gestione ticket Zendesk Enterprise</li>
                    <li style={{ display: 'flex', gap: '8px' }}>• Monitoraggio SLA e First Contact Resolution</li>
                    <li style={{ display: 'flex', gap: '8px' }}>• Team madrelingua specializzato ecommerce</li>
                </ul>
                <button className="btn-ghost" onClick={onContactClick} style={{ marginTop: '20px' }}>
                    Scopri di più <ArrowRight size={14} />
                </button>
            </div>
        </div>

        {/* Bottone Calcolatore sotto i pilastri */}
        <div style={{ marginTop: '64px', textAlign: 'center' }}>
            <button className="primary" onClick={onCalcClick} style={{ background: '#f0f0f0', border: '1px solid var(--border)', color: 'var(--text)' }}>
                🧮 Calcola il tuo risparmio stimato
            </button>
        </div>
    </section>
);

/* ── DNA / STATS ─────────────────────────────────────────── */
export const DNASection = () => (
    <section style={{ background: 'var(--surface)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <span className="section-label">Il nostro DNA</span>
            <h2 className="section-title">Nati ecommerce, non consulenti.</h2>
            <p className="section-sub">
                Siamo partiti come azienda ecommerce, Yeppon.it, prima di diventare anche un ecommerce service provider. Portiamo ai nostri clienti una decennale esperienza diretta sul campo.
            </p>
            <div className="stats-grid">
                <div className="stat-item">
                    <div className="stat-num">57M€</div>
                    <div className="stat-lbl">Fatturato generato nel 2024</div>
                </div>
                <div className="stat-item">
                    <div className="stat-num">+1.200</div>
                    <div className="stat-lbl">Ordini gestiti giornalmente</div>
                </div>
                <div className="stat-item">
                    <div className="stat-num">3.300</div>
                    <div className="stat-lbl">Mq di magazzino certificato Prime</div>
                </div>
            </div>
        </div>
    </section>
);

/* ── COMPARE ─────────────────────────────────────────────── */
export const CompareSection = () => (
    <section id="vantaggi">
        <span className="section-label">Perché B2Vibe</span>
        <h2 className="section-title">In-house vs. B2Vibe.</h2>
        <p className="section-sub">Riduzione del carico operativo ed eliminazione della burocrazia internazionale.</p>
        {/* ... tabella invariata o semplificata per brevità ... */}
        <div style={{ marginTop: '40px', overflowX: 'auto', border: '1px solid var(--border)', borderRadius: '16px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '14px' }}>
                <thead>
                    <tr style={{ background: 'var(--surface)' }}>
                        <th style={{ padding: '20px' }}>Caratteristica</th>
                        <th style={{ padding: '20px' }}>In-house</th>
                        <th style={{ padding: '20px', color: 'var(--primary)' }}>B2Vibe ✦</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        ['IVA estera e Dogane', 'Gestione complessa', 'Inclusa (Zero burocrazia)'],
                        ['Costi operativi', 'Fissi ed elevati', 'Variabili e scalabili'],
                        ['Logistica Prime', 'Costi struttura 3PL', 'Magazzino B2Vibe incluso'],
                        ['Compliance Fiscale', 'Rischio elevato', '100% Garantita'],
                    ].map((r, i) => (
                        <tr key={i} style={{ borderTop: '1px solid var(--border)' }}>
                            <td style={{ padding: '16px 20px', fontWeight: 600 }}>{r[0]}</td>
                            <td style={{ padding: '16px 20px', color: 'var(--muted)' }}>{r[1]}</td>
                            <td style={{ padding: '16px 20px', fontWeight: 700 }}>{r[2]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </section>
);

/* ── FINAL CTA ───────────────────────────────────────────── */
export const FinalCTA = ({ onContactClick }) => (
    <section>
        <div style={{ background: 'var(--dark)', borderRadius: '32px', padding: 'clamp(40px, 8vw, 80px)', textAlign: 'center', color: '#fff' }}>
            <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', color: '#fff', marginBottom: '24px' }}>Valutiamo insieme la tua crescita.</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto 40px auto' }}>Discovery call gratuita di 30 minuti per analizzare i tuoi canali e definire un piano strategico.</p>
            <button className="primary" onClick={onContactClick} style={{ padding: '18px 40px' }}>
                Prenota ora la tua consulenza
            </button>
        </div>
    </section>
);

/* ── FOOTER ──────────────────────────────────────────────── */
export const Footer = ({ onCookieClick }) => (
    <footer style={{ background: '#fff' }}>
        <div className="footer-main">
            <div>
                <B2VibeLogo />
                <p className="footer-tagline">Making sales effectively simple</p>
                <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                    <a href="https://linkedin.com/company/b2vibe" target="_blank" style={{ color: 'var(--muted)' }}><Linkedin size={18} /></a>
                    <a href="https://instagram.com/b2vibe" target="_blank" style={{ color: 'var(--muted)' }}><Instagram size={18} /></a>
                </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }} className="footer-right">
                <div>
                    <h5 style={{ marginBottom: '16px' }}>Servizi</h5>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <li><a href="#servizi" style={{ textDecoration: 'none', color: 'var(--muted)' }}>Global Management</a></li>
                        <li><a href="#servizi" style={{ textDecoration: 'none', color: 'var(--muted)' }}>Merchant of Record</a></li>
                        <li><a href="#servizi" style={{ textDecoration: 'none', color: 'var(--muted)' }}>Logistica Prime</a></li>
                    </ul>
                </div>
                <div>
                    <h5 style={{ marginBottom: '16px' }}>Contatti</h5>
                    <p style={{ fontSize: '13px', color: 'var(--muted)' }}>sales@b2vibe.com</p>
                    <p style={{ fontSize: '13px', color: 'var(--muted)' }}>P.IVA 14234560960</p>
                </div>
            </div>
        </div>
        <div style={{ padding: '24px', textAlign: 'center', borderTop: '1px solid var(--border)', fontSize: '11px', color: 'var(--muted)' }}>
            © {new Date().getFullYear()} B2Vibe S.r.l. — <RouterLink to="/privacy-policy" style={{ color: 'inherit' }}>Privacy Policy</RouterLink> — <button onClick={onCookieClick} style={{ background: 'none', border: 'none', fontSize: 'inherit', color: 'inherit', cursor: 'pointer' }}>Cookie Settings</button>
        </div>
    </footer>
);

export const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
};
export const BackToTop = () => null; // Semplificato
