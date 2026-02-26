import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { B2VibeLogo } from './Logo';
import { Linkedin, Instagram, Menu, X, ArrowRight, CheckCircle2, Globe, ShieldCheck, Box, Headset, Check } from 'lucide-react';
import { motion } from 'framer-motion';




/* ── HERO ────────────────────────────────────────────────── */
export const Hero = ({ onContactClick }) => (
    <section className="hero-section">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ textAlign: 'center' }}
        >
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="section-label"
                style={{ marginBottom: '20px', display: 'inline-block' }}
            >
                E-commerce Full Outsourcing
            </motion.span>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                style={{ fontSize: 'clamp(32px, 8vw, 72px)', fontWeight: 900, maxWidth: '900px', lineHeight: 1.1, color: 'var(--dark)', margin: '0 auto' }}
            >
                Making sales<br /><span style={{ color: 'var(--primary)' }}>effectively simple.</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="section-sub"
                style={{ margin: '24px auto 40px auto', textAlign: 'center', maxWidth: '700px' }}
            >
                Gestiamo la complessità dell'ecommerce multicanale — amministrazione, fiscalità, logistica e customer care — generando entrate costanti così la tua azienda può scalare focalizzandosi sul proprio brand.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}
            >
                <button className="primary" onClick={onContactClick}>
                    Prenota una call di 30'
                </button>
                <a href="#servizi" className="btn-ghost">Scopri i servizi</a>
            </motion.div>
        </motion.div>
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
        badge: { text: 'Prime Fulfillment', img: '/amazon-prime-logo.png', imgStyle: { height: '14px' }, textColor: '#00A8E1' },
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
            {SERVICES.map(({ num, Icon, title, desc, items, badge }, idx) => (
                <motion.div
                    key={num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.6 }}
                    className="service-card"
                >
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
                </motion.div>
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
    <section id="chi-siamo" style={{ background: 'var(--surface)' }}>
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '1200px', margin: '0 auto' }}
        >
            <span className="section-label">Il nostro DNA</span>
            <h2 className="section-title">Nati ecommerce, non consulenti.</h2>
            <p className="section-sub">
                Siamo partiti come azienda ecommerce, Yeppon.it, prima di diventare anche un ecommerce service provider. Portiamo ai nostri clienti una decennale esperienza diretta sul campo.
            </p>
            <div className="stats-grid">
                {[
                    { n: '57M€', l: 'Fatturato generato nel 2024' },
                    { n: '+1.200', l: 'Ordini gestiti giornalmente' },
                    { n: '3.300', l: 'Mq di magazzino certificato Prime' }
                ].map((s, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                        className="stat-item"
                    >
                        <div className="stat-num">{s.n}</div>
                        <div className="stat-lbl">{s.l}</div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    </section>
);

/* ── COMPARE ─────────────────────────────────────────────── */
export const CompareSection = () => (
    <section id="vantaggi" style={{ padding: '100px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="section-label">Perché B2Vibe</span>
            <h2 className="section-title">In-house vs. B2Vibe.</h2>
            <p className="section-sub" style={{ margin: '0 auto' }}>Riduzione del carico operativo ed eliminazione della burocrazia internazionale.</p>
        </div>

        <div style={{ marginTop: '48px', overflowX: 'auto', border: '1px solid var(--border)', borderRadius: '24px', background: '#fff', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                <thead>
                    <tr style={{ background: 'var(--surface)' }}>
                        <th style={{ padding: '24px 32px', fontSize: '14px', fontWeight: 600, color: 'var(--muted)' }}>Caratteristica</th>
                        <th style={{ padding: '24px 32px', fontSize: '15px', fontWeight: 800 }}>Gestione In-house</th>
                        <th style={{ padding: '24px 32px', fontSize: '15px', fontWeight: 800, color: 'var(--primary)', background: 'var(--primary-glow)' }}>B2Vibe ✦</th>
                    </tr>
                </thead>
                <tbody>
                    {[
                        ['Fiscale: IVA & Dogane', 'Complessità Elevata', 'Zero Burocrazia', true],
                        ['Logistica: Amazon Prime', 'Gestione 3PL esterna', 'Certificazione Prime nativa', true],
                        ['Costi Operativi', 'Fissi ed Elevati', 'Modello variabile a successo', true],
                        ['Rischio Compliance', 'Carico del Brand', 'Assunto da B2Vibe (MoR)', true],
                        ['Customer Care (5 lingue)', 'Esterno o rincaro interno', 'Incluso nel workflow', true],
                        ['Tecnologia PIM/OMS', 'Costi licenza & IT', 'Piattaforma proprietaria incl.', true],
                    ].map((r, i) => (
                        <tr key={i} style={{ borderTop: '1px solid var(--border)' }}>
                            <td style={{ padding: '20px 32px', fontSize: '14px', fontWeight: 600, color: 'var(--dark)' }}>{r[0]}</td>
                            <td style={{ padding: '20px 32px', color: 'var(--muted)', fontSize: '14px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ccc' }} />
                                    {r[1]}
                                </div>
                            </td>
                            <td style={{ padding: '20px 32px', fontWeight: 700, fontSize: '14px', color: 'var(--dark)', background: 'var(--primary-glow)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Check size={12} color="#000" />
                                    </div>
                                    {r[2]}
                                </div>
                            </td>
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


export const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
};

