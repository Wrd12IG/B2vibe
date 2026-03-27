import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { B2VibeLogo } from './Logo';
import { Linkedin, Instagram, Menu, X, ArrowRight, CheckCircle2, Globe, ShieldCheck, Box, Headset, Check, MousePointer2, Calculator, MessageSquare, TrendingUp, Sparkles, MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';

/* ── HERO ────────────────────────────────────────────────── */
export const Hero = ({ onContactClick }) => (
    <section className="hero-section">
        <div className="container">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="hero-badge"
                >
                    <span className="dot" style={{ animation: 'pulse 2s infinite' }}></span>
                    E-commerce Service Provider, Full Outsourcing Multicanale
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    style={{ fontSize: 'clamp(38px, 8vw, 88px)', fontWeight: 900, maxWidth: '920px', lineHeight: 1.05, color: 'var(--white)', margin: '0 auto' }}
                >
                    Making sales<br /><span style={{ color: 'var(--primary)' }}>effectively simple.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="section-sub"
                    style={{ margin: '24px auto 40px auto', textAlign: 'center', maxWidth: '600px' }}
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
                        Prenota una call di 30' <MoveRight size={18} />
                    </button>
                    <a href="#servizi" className="btn-ghost" style={{ padding: 'clamp(13px, 2.5vw, 16px) clamp(24px, 4vw, 32px)', borderRadius: '8px' }}>
                        Scopri i servizi
                    </a>
                </motion.div>
            </motion.div>
        </div>

        <style>{`
            @keyframes pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.3; }
            }
        `}</style>
    </section>
);

/* ── TICKER ──────────────────────────────────────────────── */
const MKT = ['Amazon', 'eBay', 'FNAC', 'Kaufland', 'ManoMano', 'Leroy Merlin', 'Stockly', 'Digitec', 'MediaMarkt', 'BricoBravo'];

export const Ticker = () => (
    <div className="logos-strip">
        <p className="logos-label">Vendiamo sui principali marketplace europei</p>
        <div style={{ overflow: 'hidden' }}>
            <div className="logos-track">
                {[...MKT, ...MKT, ...MKT].map((m, i) => (
                    <span key={i}>{m}</span>
                ))}
            </div>
        </div>
    </div>
);

/* ── PROBLEM / SOLUTION ─────────────────────────────────── */
export const ProblemSolutionSection = () => (
    <section id="chi-siamo" style={{ background: 'var(--dark2)' }}>
        <div className="container">
            <div style={{ textAlign: 'left', marginBottom: '56px' }}>
                <span className="section-label">Il problema</span>
                <h2 className="section-title">Vendere online è complesso.<br />Gestire la complessità è il nostro lavoro.</h2>
                <p className="section-sub">Le aziende che vogliono crescere sui marketplace europei si scontrano ogni giorno con ostacoli operativi che rallentano e consumano risorse.</p>
            </div>

            <div className="problem-grid">
                {[
                    {
                        Icon: Globe,
                        title: 'IVA e compliance internazionale',
                        desc: 'Aprire partite IVA estere, gestire operazioni doganali e rispettare la normativa fiscale di ogni paese è un labirinto burocratico costoso e rischioso.'
                    },
                    {
                        Icon: Box,
                        title: 'Logistica frammentata',
                        desc: 'Gestire magazzino, picking, resi e spedizioni Prime su Amazon dall\'interno richiede infrastruttura, personale e costi fissi elevati.'
                    },
                    {
                        Icon: MousePointer2,
                        title: 'Marketplace da gestire in parallelo',
                        desc: 'Ogni canale ha le sue regole, algoritmi e rischi di blocco account. Scalare Amazon, eBay e FNAC in parallelo è operativamente proibitivo senza una struttura dedicata.'
                    },
                    {
                        Icon: MessageSquare,
                        title: 'Customer care multilingua',
                        desc: 'Gestire assistenza pre e post vendita in 5 lingue, con SLA stringenti e strumenti enterprise, distrae dal core business e richiede team dedicati.'
                    }
                ].map((card, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="problem-card"
                    >
                        <div className="icon-wrap">
                            <card.Icon size={22} color="var(--primary)" />
                        </div>
                        <h3>{card.title}</h3>
                        <p>{card.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

/* ── DNA / STATS ─────────────────────────────────────────── */
export const DNASection = () => (
    <section id="dna" style={{ background: 'var(--dark)' }}>
        <div className="container">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ textAlign: 'left' }}
            >
                <span className="section-label">Il nostro DNA</span>
                <h2 className="section-title">Nati ecommerce, non consulenti.</h2>
                <p className="section-sub">Siamo partiti come azienda ecommerce, Yeppon.it, prima di diventare anche un ecommerce service provider. Portiamo ai nostri clienti una decennale esperienza diretta sul campo.</p>
                <div className="stats-grid">
                    {[
                        { n: '57M€', l: 'Fatturato generato nel 2024 a livello globale', featured: true },
                        { n: '+1.200', l: 'Ordini gestiti giornalmente tra eshop e marketplace' },
                        { n: '3.300', l: 'Metri quadri di magazzino certificato Prime a Paderno Dugnano (MB)' }
                    ].map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                            className={`stat-item ${s.featured ? 'featured' : ''}`}
                        >
                            <div className="stat-num">{s.n}</div>
                            <div className="stat-label">{s.l}</div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    </section>
);

/* ── GROWTH PARTNER ──────────────────────────────────────── */
export const GrowthPartnerSection = () => (
    <section id="target" style={{ background: 'var(--dark2)' }}>
        <div className="container">
            <div style={{ textAlign: 'left', marginBottom: '56px' }}>
                <span className="section-label">A chi ci rivolgiamo</span>
                <h2 className="section-title">Il partner ideale per chi vuole crescere online, senza complicazioni.</h2>
                <p className="section-sub">Lavoriamo con brand e aziende che vogliono scalare sui marketplace europei delegando la complessità operativa.</p>
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
                        className="target-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <span className="num">{card.num}</span>
                        <h3>{card.title}</h3>
                        <p>{card.text}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

/* ── SERVICES ────────────────────────────────────────────── */
const SERVICES = [
    {
        num: 'Attività 1',
        Icon: TrendingUp,
        title: 'Ecommerce & Marketplace Management',
        desc: 'Gestiamo le vendite del tuo brand su tutti i canali di vendita online, dal e-shop ai principali marketplace europei, definendo insieme il prezzo, le ottimizzazioni di catalogo e le promozioni.',
        items: [
            'Integrazione multicanale (Amazon, eBay, FNAC, Kaufland...)',
            'Pricing dinamico competitivo e A+ Content',
            'Sincronizzazione real-time stock e prezzi',
            'Advertising e ottimizzazione conversioni',
            'PIM e OMS proprietari integrabili',
        ],
    },
    {
        num: 'Attività 2',
        Icon: Globe,
        title: 'Merchant of Record & Finance',
        desc: 'Diventiamo il rivenditore ufficiale verso il cliente finale: gestiamo tutta la responsabilità finanziaria, fiscale e legale su scala globale.',
        items: [
            'Gestione IVA e compliance fiscale in Europa',
            'Fatturazione e pagamenti internazionali',
            'Prevenzione frodi e risk management',
            'Operazioni doganali veloci e import/export',
            'Reportistica e insights AI-driven',
        ],
    },
    {
        num: 'Attività 3',
        Icon: Box,
        title: 'Logistica & Magazzino',
        desc: 'Magazzino di proprietà in provincia di Milano, certificato Prime per le spedizioni Amazon. Gestiamo l\'intera supply chain dalla ricezione merce alla consegna.',
        items: [
            'Ricezione merce e controllo qualità',
            'Picking, imballaggio e confezionamento',
            'Spedizioni Prime certificate Amazon Europa',
            'Gestione resi e inventario ciclico',
            'Corrieri premium e ottimizzazione costi',
        ],
    },
    {
        num: 'Attività 4',
        Icon: Headset,
        title: 'Customer Care Multilingua',
        desc: 'Team interno dedicato con profonda conoscenza delle tematiche ecommerce, potenziato da AI per gestire l\'assistenza in tutte le lingue europee.',
        items: [
            'Assistenza in 5 lingue: IT, EN, DE, FR, ES',
            'Gestione ticketing con Zendesk Enterprise',
            'First contact resolution al 92%',
            'Supporto pre e post vendita, monitoraggio SLA',
            'Reportistica e analisi dati su misura',
        ],
    },
];

export const ServicesSection = () => (
    <section id="servizi" style={{ background: 'var(--dark)' }}>
        <div className="container">
            <div style={{ textAlign: 'left', marginBottom: '48px' }}>
                <span className="section-label">I nostri servizi</span>
                <h2 className="section-title">Un ecosistema completo<br />per il tuo ecommerce.</h2>
                <p className="section-sub">Quattro pilastri integrati che coprono ogni aspetto della vendita online, dal catalogo alla consegna finale.</p>
            </div>

            <div className="services-grid">
                {SERVICES.map((service, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1, duration: 0.6 }}
                        className="service-card"
                    >
                        <service.Icon size={28} color="var(--primary)" style={{ marginBottom: '22px' }} />
                        <div className="tagline">{service.num}</div>
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>

                        <ul className="service-list">
                            {service.items.map((item, i) => (
                                <li key={i}>
                                    <MoveRight size={14} />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

/* ── COMPARE ─────────────────────────────────────────────── */
export const CompareSection = () => (
    <section id="vantaggi" style={{ background: 'var(--dark2)' }}>
        <div className="container">
            <div style={{ textAlign: 'left', marginBottom: '48px' }}>
                <span className="section-label">Perché B2Vibe</span>
                <h2 className="section-title">Gestione in-house vs.<br />Gestione B2Vibe.</h2>
                <p className="section-sub">Riduzione fino all'80% del carico operativo interno e un forecast più misurabile dei costi da sostenere, delegando in toto aspetti scomodi come la burocrazia, la fiscalità, le regolamentazioni europee, etc.</p>
            </div>

            <div className="compare-table">
                <div className="compare-header">
                    <div></div>
                    <div>In-house</div>
                    <div>B2Vibe ✦</div>
                </div>
                {[
                    ['Apertura e gestione IVA estere', '✕ A vostro carico', '✓ Inclusa'],
                    ['Gestione burocrazia e compliance', '✕ Alta complessità', '✓ Zero burocrazia'],
                    ['Personale amministrativo/logistica', '✕ 2+ FTE interni', '✓ Costi semi-variabili'],
                    ['IT e tech stack multicanale', '✕ Investimento continuo', '✓ Incluso e aggiornato'],
                    ['Spedizioni Amazon Prime', '✕ Fulfilled by Amazon', '✓ Spedizione Prime da magazzino B2Vibe'],
                    ['Rischio blocco account / compliance', '✕ Rischio elevato', '✓ 100% compliant'],
                ].map((row, i) => (
                    <div key={i} className="compare-row">
                        <div>{row[0]}</div>
                        <div>{row[1]}</div>
                        <div>{row[2]}</div>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

/* ── MARKETPLACE ─────────────────────────────────────────── */
export const ManagedChannelsSection = () => (
    <section className="marketplaces" style={{ background: 'var(--dark)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
            <span className="section-label">Canali gestiti</span>
            <h2 className="section-title">Un unico brand,<br />ovunque siano i tuoi clienti.</h2>
            <div className="mp-grid">
                {['Amazon Prime', 'eBay', 'FNAC', 'Kaufland', 'Leroy Merlin', 'ManoMano', 'Stockly', 'Digitec', 'MediaMarkt', 'BricoBravo'].map((m, i) => (
                    <div key={i} className="mp-badge">{m}</div>
                ))}
            </div>
        </div>
    </section>
);

/* ── FINAL CTA ───────────────────────────────────────────── */
export const FinalCTA = ({ onContactClick }) => (
    <section className="final-cta" style={{ background: 'var(--dark2)' }}>
        <div className="container">
            <div className="cta-box">
                <h2 className="section-title" style={{ marginBottom: '18px' }}>Valutiamo insieme<br />l'opportunità di crescita.</h2>
                <p style={{ margin: '0 auto 36px', fontSize: '17px' }}>Valutiamo insieme se esiste un'opportunità reale per il tuo brand. Senza impegno, solo numeri chiari.</p>
                <button className="primary" onClick={onContactClick} style={{ fontSize: '16px', padding: '18px 40px' }}>
                    Prenota la call di 30' <MoveRight size={20} />
                </button>
            </div>
        </div>
    </section>
);

/* ── SAVINGS CALCULATOR SECTION (Added from previous React) ── */
export const CalculatorSection = ({ onCalcClick }) => (
    <section id="calcolatore" style={{ background: 'var(--dark3)', borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
            <span className="section-label">Calcolatore di Risparmio</span>
            <h2 className="section-title">Gestione insourcing o outsourcing?</h2>
            <p className="section-sub" style={{ margin: '18px auto 40px auto' }}>Stima quanto risparmi con una gestione professionale esterna.</p>
            <button className="primary" onClick={onCalcClick} style={{ minWidth: '300px', padding: '18px 40px', background: 'transparent', border: '1px solid var(--primary)', color: 'var(--primary)' }}>
                Calcola quanto risparmi <Calculator size={18} />
            </button>
        </div>
    </section>
);

export const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
};
