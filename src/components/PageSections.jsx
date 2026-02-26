import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { B2VibeLogo } from './Logo';
import { Linkedin, Instagram, Menu, X, ArrowRight, CheckCircle2, Globe, ShieldCheck, Box, Headset } from 'lucide-react';

/* ── UTILS ──────────────────────────────────────────────── */
export const SectionTitle = ({ badge, title, subtitle, align = 'left' }) => (
    <div style={{ textAlign: align, marginBottom: '48px' }}>
        <span className="section-label">{badge}</span>
        <h2 className="section-title">{title}</h2>
        {subtitle && <p className="section-sub" style={{ margin: align === 'center' ? '0 auto' : '0' }}>{subtitle}</p>}
    </div>
);

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
const SERVICES = [
    {
        num: '01',
        Icon: Box,
        title: 'Ecommerce & Marketing Management',
        desc: 'Gestiamo le vendite dei tuoi prodotti su tutti i canali online, definiamo strategie di prodotto, attività promozionali e miglioramento dei contenuti.',
        items: [
            'Analisi e strategia presidio canali',
            'Sviluppo marketing multicanale (Amazon, eBay, etc.)',
            'Pricing dinamico e sync real-time magazzino',
            'Definizione promozioni e advertising',
            'SEO e ottimizzazione contenuti prodotto',
        ],
        badge: { text: 'Amazon Ads Partner', img: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg', imgStyle: { height: '16px' } },
    },
    {
        num: '02',
        Icon: Globe,
        title: 'Merchant of Record & Cross Border',
        desc: 'Assumiamo la responsabilità finanziaria e fiscale delle vendite globali. Gestiamo compliance, IVA estera e burocrazia doganale.',
        items: [
            'Registrazione e gestione IVA in tutta Europa',
            'Gestione pagamenti, dispute e rimborsi',
            'Compliance legale e fiscale internazionale',
            'Logistica doganale e import/export',
            'Prevenzione frodi e risk management',
        ],
        badge: null,
    },
    {
        num: '03',
        Icon: ShieldCheck,
        title: 'Logistica & Magazzino',
        desc: 'Magazzino certificato Prime in Italia. Gestiamo ricezione, stoccaggio, picking e spedizioni veloci in tutto il mondo.',
        items: [
            'Spedizioni Amazon Prime certificate',
            'Picking, imballaggio e controllo qualità',
            'Gestione resi e inventario ciclico',
            'Tariffe corrieri premium ottimizzate',
        ],
        badge: { text: 'Prime Fulfillment', img: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.svg', imgStyle: { height: '18px' }, textColor: '#00A8E1' },
    },
    {
        num: '04',
        Icon: Headset,
        title: 'Customer Care Multilingua',
        desc: "Team dedicato interno con supporto in 5 lingue (IT, EN, DE, FR, ES) per garantire un'esperienza cliente d'eccellenza.",
        items: [
            'Assistenza pre e post vendita via Mail/Chat',
            'Gestione ticket Zendesk Enterprise',
            'Monitoraggio SLA e First Contact Resolution',
            'Team madrelingua specializzato ecommerce',
        ],
        badge: null,
    },
];

export const ServicesSection = ({ onContactClick, onCalcClick }) => (
    <section id="servizi">
        <span className="section-label">I Pilastri del Servizio</span>
        <h2 className="section-title">Ecosistema integrato per la vendita globale.</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginTop: '48px' }} className="services-grid">
            {SERVICES.map(({ num, Icon, title, desc, items, badge }) => (
                <div key={num} className="service-card">
                    {/* Top row: icona + numero */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                        <div style={{
                            width: '48px', height: '48px', borderRadius: '12px',
                            background: 'var(--primary-glow)', border: '1px solid rgba(7,235,166,0.3)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}>
                            <Icon size={22} color="var(--primary)" />
                        </div>
                        <span style={{
                            fontSize: '28px', fontWeight: 900, color: 'rgba(0,0,0,0.06)',
                            fontFamily: 'Raleway, sans-serif', letterSpacing: '-1px', lineHeight: 1
                        }}>{num}</span>
                    </div>

                    {/* Titolo e descrizione */}
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--dark)', marginBottom: '10px', lineHeight: 1.3 }}>{title}</h3>
                    <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '20px' }}>{desc}</p>

                    {/* Separatore */}
                    <div style={{ height: '1px', background: 'var(--border)', marginBottom: '16px' }} />

                    {/* Lista punti */}
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '9px', flex: 1 }}>
                        {items.map(item => (
                            <li key={item} style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '13px', color: 'var(--muted)' }}>
                                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--primary)', flexShrink: 0 }} />
                                {item}
                            </li>
                        ))}
                    </ul>

                    {/* Badge & CTA */}
                    <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
                        {badge ? (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--surface)', padding: '5px 11px', borderRadius: '20px', border: '1px solid var(--border)' }}>
                                <img src={badge.img} alt={badge.text} style={badge.imgStyle} />
                                <span style={{ fontSize: '10px', fontWeight: 700, color: badge.textColor || 'var(--muted)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{badge.text}</span>
                            </div>
                        ) : <div />}
                        <button className="btn-ghost" onClick={onContactClick} style={{ padding: '8px 16px', fontSize: '13px' }}>
                            Scopri di più <ArrowRight size={13} />
                        </button>
                    </div>
                </div>
            ))}
        </div>

        {/* CTA calcolatore */}
        <div id="risparmio" style={{ marginTop: '56px', textAlign: 'center' }}>
            <button className="primary" onClick={onCalcClick} style={{ background: 'var(--surface)', border: '1px solid var(--border)', color: 'var(--text)' }}>
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
    <footer style={{ background: '#f8f9fa', borderTop: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '72px clamp(20px,5vw,48px) 0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '48px', paddingBottom: '56px' }} className="footer-main">

                {/* Col 1 — Brand */}
                <div>
                    <B2VibeLogo />
                    <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.7, maxWidth: '340px', marginTop: '16px' }}>
                        Gestiamo la complessità dell'ecommerce multicanale — amministrazione, fiscalità, logistica e customer care — per far scalare il tuo brand.
                    </p>
                    <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
                        <a href="https://linkedin.com/company/b2vibe" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', display: 'flex' }}><Linkedin size={18} /></a>
                        <a href="https://instagram.com/b2vibe" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', display: 'flex' }}><Instagram size={18} /></a>
                    </div>
                </div>

                {/* Col 2 — Servizi */}
                <div>
                    <h5 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--dark)', marginBottom: '20px' }}>Servizi</h5>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <li><RouterLink to="/merchant-of-record-guida" style={{ textDecoration: 'none', color: 'var(--primary)', fontWeight: 600 }}>Guida MoR 2026 ↗</RouterLink></li>
                        <li style={{ color: 'var(--muted)' }}>Merchant of Record</li>
                        <li style={{ color: 'var(--muted)' }}>Logistica & Magazzino</li>
                        <li style={{ color: 'var(--muted)' }}>Customer Care Multilingua</li>
                        <li style={{ color: 'var(--muted)' }}>Marketplace Management</li>
                        <li style={{ color: 'var(--muted)' }}>Ecommerce & Marketing</li>
                    </ul>
                </div>

                {/* Col 3 — Contatti */}
                <div>
                    <h5 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--dark)', marginBottom: '20px' }}>Contatti</h5>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: 'var(--muted)' }}>
                        <p>sales@b2vibe.com</p>
                        <p>+39 02 80016631</p>
                        <p style={{ lineHeight: 1.5 }}>Via Ferdinando Santi 11/13,<br />20037 Paderno Dugnano (MI)</p>
                        <p>P.IVA 14234560960</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--border)', padding: '20px clamp(20px,5vw,48px)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px', fontSize: '11px', color: 'var(--muted)' }}>
            <span>© {new Date().getFullYear()} B2Vibe S.r.l. — Capitale sociale € 1.000.000</span>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                <RouterLink to="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</RouterLink>
                <RouterLink to="/cookie-policy" style={{ color: 'inherit', textDecoration: 'none' }}>Cookie Policy</RouterLink>
                <button onClick={onCookieClick} style={{ background: 'none', border: 'none', fontSize: 'inherit', color: 'inherit', cursor: 'pointer', padding: 0 }}>Cookie Settings</button>
            </div>
        </div>
    </footer>
);

export const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
};
export const BackToTop = () => null; // Semplificato
