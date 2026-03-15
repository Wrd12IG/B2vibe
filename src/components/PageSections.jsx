import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { B2VibeLogo } from './Logo';
import { Linkedin, Instagram, Menu, X, ArrowRight, CheckCircle2, Globe, ShieldCheck, Box, Headset, Check } from 'lucide-react';
import { motion } from 'framer-motion';




/* ── HERO ────────────────────────────────────────────────── */
export const Hero = ({ onContactClick }) => (
    <section className="hero-section">
        <div className="container">
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
                    className="dot-label"
                    style={{ marginBottom: '28px', color: 'var(--primary)', fontWeight: 600, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                >
                    <span className="dot" style={{ width: '6px', height: '6px', background: 'var(--primary)', borderRadius: '50%' }}></span>
                    E-commerce Full Outsourcing
                </motion.span>


                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    style={{ fontSize: 'clamp(38px, 8vw, 76px)', fontWeight: 900, maxWidth: '900px', lineHeight: 1.05, color: 'var(--dark)', margin: '0 auto' }}
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
                        Parla con un esperto
                    </button>
                </motion.div>
            </motion.div>
        </div>
    </section>
);


/* ── TICKER ──────────────────────────────────────────────── */
const MKT = ['Amazon', 'eBay', 'FNAC', 'Kaufland', 'ManoMano', 'Leroy Merlin', 'Stockly', 'Digitec', 'MediaMarkt', 'BricoBravo', 'Decathlon'];
export const Ticker = () => (
    <div className="container" style={{ marginTop: '20px' }}>
        <div className="logos-strip" style={{ borderRadius: '16px', border: '1px solid var(--border)' }}>
            <p className="logos-label">Marketplace & Canali Gestiti</p>
            <div className="logos-track">
                {[...MKT, ...MKT, ...MKT].map((m, i) => <span key={i}>{m}</span>)}
            </div>
        </div>
    </div>
);

/* ── SERVICES ────────────────────────────────────────────── */
/* ── PROBLEM / SOLUTION ─────────────────────────────────── */
export const ProblemSolutionSection = () => (
    <section id="problema">
        <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                <span className="section-label">La Sfida del Mercato</span>
                <h2 className="section-title">Vendere online è complesso.<br />Gestire la complessità è il nostro lavoro.</h2>
                <p className="section-sub" style={{ margin: '16px auto 0 auto' }}>Le aziende che vogliono crescere sui marketplace europei si scontrano ogni giorno con ostacoli operativi che rallentano e consumano risorse.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
                {[
                    { title: 'IVA e compliance internazionale', desc: 'Gestione fiscale globale e adempimenti burocratici semplificati. Ogni canale ha le sue regole, IVA estera, gestire operazioni doganali e rispettare la normativa fiscale di ogni paese è un labirinto burocratico costoso e macchinoso.' },
                    { title: 'Logistica frammentata', desc: 'Gestire magazzino, picking, resi e spedizioni Prime su Amazon dall\'interno richiede infrastruttura, personale e costi fissi elevati.' },
                    { title: 'Marketplace da gestire in parallelo', desc: 'Ogni canale ha le sue regole, algoritmi e rischi di blocco account. Scalare Amazon, eBay e FNAC in parallelo è operativamente proibitivo senza una struttura dedicata.' },
                    { title: 'Customer care multilingua', desc: 'Gestire assistenza pre e post vendita in 5 lingue, con SLA stringenti e strumenti enterprise, richiede dal core business e team dedicati.' }
                ].map((card, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="service-card"
                        style={{ height: '100%' }}
                    >
                        <h3 style={{ fontSize: '18px', fontWeight: 700, marginBottom: '16px', color: 'var(--dark)' }}>{card.title}</h3>
                        <p style={{ fontSize: '14px', color: 'var(--muted)', flex: 1 }}>{card.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

/* ── GROWTH PARTNER ──────────────────────────────────────── */
export const GrowthPartnerSection = () => (
    <section id="partner" style={{ background: 'var(--surface)' }}>
        <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '64px' }}>
                <span className="section-label">A chi ci rivolgiamo</span>
                <h2 className="section-title">Il partner ideale per chi vuole crescere online, senza complicazioni.</h2>
            </div>

            <div className="growth-cards-grid">
                {[
                    {
                        num: '01',
                        title: 'Aziende alla ricerca di nuove fonti di ricavo',
                        text: 'Hai un brand o prodotti vincenti ma sei attivo solo offline o sul tuo negozio online. Abilitando e gestendo canali di vendita non ancora presidiati, possiamo incrementare il flusso dei ricavi in modo rapido, controllato e scalabile.'
                    },
                    {
                        num: '02',
                        title: 'Aziende già attive su marketplace',
                        text: 'Vendi già su Amazon ma i costi e la gestione sono un problema. B2Vibe offre una gestione integrata con spedizione Prime da magazzino Italia, con un risparmio importante lato marginalità.'
                    },
                    {
                        num: '03',
                        title: 'Chi vuole espandersi in Europa',
                        text: 'Vuoi entrare in Germania, Francia, Spagna o UK ma la complessità fiscale, doganale e logistica ti frena. Noi ci occupiamo di tutto.'
                    },
                    {
                        num: '04',
                        title: 'Brand con prodotti propri',
                        text: 'Hai un catalogo prodotti e vuoi distribuirlo sul tuo sito, su Amazon, eBay e altri marketplace europei senza costruire un\'infrastruttura interna.'
                    }
                ].map((card, i) => (
                    <motion.div
                        key={i}
                        className="growth-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        style={{ background: '#fff', padding: '40px', borderRadius: '24px', border: '1px solid var(--border)', position: 'relative' }}
                    >
                        <span style={{ fontSize: '48px', fontWeight: 900, color: 'var(--primary-glow)', position: 'absolute', top: '24px', right: '32px', fontFamily: 'Raleway' }}>{card.num}</span>
                        <h3 style={{ fontSize: '18px', fontWeight: 800, marginBottom: '20px', color: 'var(--dark)', maxWidth: '80%' }}>{card.title}</h3>
                        <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.7 }}>{card.text}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

/* ── MANAGED CHANNELS ────────────────────────────────────── */
export const ManagedChannelsSection = () => (
    <section id="presidio">
        <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                <span className="section-label">Presidio Globale</span>
                <h2 className="section-title">Un unico brand, ovunque siano i tuoi clienti.</h2>
                <p className="section-sub" style={{ margin: '0 auto' }}>Valutiamo insieme se esiste un'opportunità reale per il tuo brand. Senza impegno, solo numeri chiari.</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '24px', opacity: 0.6, padding: '40px 0' }}>
                {MKT.map((m, i) => (
                    <span key={i} className="outfit" style={{ fontSize: '18px', fontWeight: 800, color: 'var(--dark)', whiteSpace: 'nowrap', border: '1px solid var(--border)', padding: '8px 16px', borderRadius: '12px', background: 'var(--surface)' }}>{m}</span>
                ))}
            </div>
        </div>
    </section>
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
            'Sync real-time magazzino e disponibilità',
            'Definizione promozioni e advertising',
            'SEO e ottimizzazione contenuti prodotto',
        ],
        badge: { text: 'Premium Partner', img: '/amazon-ads-logo.png', imgStyle: { height: '18px' } },
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
        badge: { text: 'Certified', img: '/amazon-prime-logo.png', imgStyle: { height: '14px' }, textColor: '#00A8E1' },
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
        <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                <span className="section-label">I Nostri Servizi</span>
                <h2 className="section-title">Ecosistema integrato per la vendita globale.</h2>
                <p className="section-sub" style={{ margin: '16px auto 0 auto' }}>Quattro pilastri integrati che coprono ogni aspetto della vendita online, dal catalogo alla consegna finale.</p>
            </div>

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
                                fontFamily: 'Raleway, sans-serif', letterSpacing: '-px', lineHeight: 1
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
                            ) : title.toLowerCase().includes('merchant') ? (
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--primary-glow)', padding: '5px 11px', borderRadius: '20px', border: '1px solid var(--primary)' }}>
                                    <span style={{ fontSize: '10px', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Fiscale & Compliance</span>
                                </div>
                            ) : <div />}
                            <button
                                onClick={onContactClick}
                                className="btn-ghost"
                                style={{ padding: '8px 16px', fontSize: '13px', textDecoration: 'none' }}
                            >
                                Scopri di più <ArrowRight size={13} />
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
            {/* CTA calcolatore - spostato in App.jsx sotto compare */}
        </div>
    </section>
);


/* ── DNA / STATS ─────────────────────────────────────────── */
export const DNASection = () => (
    <section id="chi-siamo" style={{ background: 'var(--surface)' }}>
        <div className="container">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'center' }}
            >
                <span className="section-label">Chi siamo</span>
                <h2 className="section-title">Nati ecommerce, non consulenti.</h2>
                <p className="section-sub" style={{ margin: '0 auto' }}>
                    Lavoriamo con brand e aziende che vogliono scalare sui marketplace europei delegando la complessità operativa.
                </p>
                <div className="stats-grid">
                    {[
                        { n: '57M€', l: 'Fatturato generato nel 2024 a livello globale' },
                        { n: '30+', l: 'Paesi in cui operiamo oggi con il nostro MoR' },
                        { n: 'Poche settimane', l: 'Per l\'integrazione e l\'accensione dei canali' }
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
        </div>
    </section>
);

/* ── COMPARE ─────────────────────────────────────────────── */
export const CompareSection = () => (
    <section id="vantaggi" style={{ padding: '100px 0' }}>
        <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
                <span className="section-label">Perché B2Vibe</span>
                <h2 className="section-title">Gestione in-house vs.<br />Gestione B2Vibe.</h2>
                <p className="section-sub" style={{ margin: '0 auto' }}>Riduzione fino all'80% del carico operativo interno e un forecast più misurabile dei costi da sostenere, delegando in toto aspetti scomodi come la burocrazia, la fiscalità, le regolamentazioni europee, etc.</p>
            </div>

            <div style={{ marginTop: '48px', overflowX: 'auto', border: '1px solid var(--border)', borderRadius: '24px', background: '#fff', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                    <thead>
                        <tr style={{ background: 'var(--surface)' }}>
                            <th style={{ padding: '24px 32px', fontSize: '14px', fontWeight: 600, color: 'var(--muted)' }}></th>
                            <th style={{ padding: '24px 32px', fontSize: '15px', fontWeight: 800 }}>In-house</th>
                            <th style={{ padding: '24px 32px', fontSize: '15px', fontWeight: 800, color: 'var(--primary)', background: 'var(--primary-glow)' }}>B2Vibe ✦</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            ['Apertura e gestione IVA estere', 'A vostro carico', 'Inclusa'],
                            ['Gestione burocratica e compliance', 'Alta complessità', 'Zero burocrazia'],
                            ['Personale amministrativo/logistica', '2+ FTE interni', 'Costi semi-variabili'],
                            ['IT e tech stack multicanale', 'Investimento importante', 'Incluso e aggiornato'],
                            ['Spedizioni Amazon Prime', 'Fulfilled by Amazon', 'Spedizione Prime da magazzino B2Vibe'],
                            ['Rischio blocco account / compliance', 'Rischio elevato', '100% compliant'],
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
        </div>
    </section>
);

/* ── FINAL CTA ───────────────────────────────────────────── */
export const FinalCTA = ({ onContactClick }) => (
    <section>
        <div className="container">
            <div style={{ background: 'var(--dark)', borderRadius: '32px', padding: 'clamp(40px, 8vw, 80px)', textAlign: 'center', color: '#fff' }}>
                <h2 style={{ fontSize: 'clamp(28px, 5vw, 48px)', color: '#fff', marginBottom: '24px' }}>Valutiamo insieme la tua crescita.</h2>
                <p style={{ color: 'rgba(255,255,255,0.7)', maxWidth: '600px', margin: '0 auto 40px auto' }}>Discovery call per analizzare i tuoi canali e definire un piano strategico di espansione.</p>
                <button className="primary" onClick={onContactClick} style={{ padding: '18px 40px' }}>
                    Parla con un esperto
                </button>
            </div>
        </div>
    </section>
);


export const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
};

