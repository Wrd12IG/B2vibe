import React, { useEffect, useState } from 'react';
import { Navbar, Footer, SectionTitle, BackToTop } from '../components/SharedLayout';
import {
    ShieldCheck, Globe, Zap, Scale, ArrowRight, Users, Box, Database,
    TrendingUp, CheckCircle2, Layout, BarChart3, Lock, Cpu, Rocket,
    Headphones, Plus, Minus, Info, ClipboardCheck, Truck, ShieldAlert,
    RotateCcw, Handshake, Check
} from 'lucide-react';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div style={{ borderBottom: '1px solid var(--border)', padding: '24px 0' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
            >
                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, color: 'var(--dark)' }}>{question}</h4>
                {isOpen ? <Minus size={20} color="var(--primary)" /> : <Plus size={20} color="var(--muted)" />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <p style={{ marginTop: '16px', color: 'var(--muted)', lineHeight: 1.7, fontSize: '0.95rem' }}>{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const MerchantOfRecordGuide = ({ onContactClick, onCookieClick }) => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    const offset = 100;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: "-10%" },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    return (
        <div style={{ background: '#FFF' }}>
            <Navbar onContactClick={onContactClick} />

            {/* Header Content */}
            <header style={{ padding: '200px 5% 120px 5%', textAlign: 'center', background: 'linear-gradient(180deg, rgba(7, 235, 166, 0.08) 0%, rgba(255,255,255,0) 100%)' }}>
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="badge" style={{ marginBottom: '1.5rem', background: 'var(--primary-glow)', border: '1px solid var(--primary)', color: 'var(--dark)' }}>Pillar Page - Analisi Professionale 2026</span>
                        <h1 className="heading-xl" style={{ marginTop: '0', marginBottom: '2rem', color: '#000', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.1 }}>
                            E-commerce Full Outsourcing:<br />Guida Strategica alla Crescita
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--muted)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.8, fontWeight: 400 }}>
                            Gestire la complessità operativa è l'unico vero vantaggio competitivo. Scopri come B2Vibe assume la responsabilità del tuo business online, trasformando la burocrazia fiscale in opportunità di vendita globale.
                        </p>
                    </motion.div>
                </div>
            </header>

            <main style={{ paddingBottom: '150px' }}>
                <div className="container" style={{ maxWidth: '1100px' }}>

                    {/* --- SEZIONE 1: CHI È IL MOR --- */}
                    <motion.section id="chi-e-mor" {...fadeInUp} style={{ padding: '80px 0', borderBottom: '1px solid var(--border)' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'center' }}>
                            <div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <span className="section-label" style={{ margin: 0 }}>Definizione</span>
                                </div>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem', color: 'var(--dark)' }}>Chi è il Merchant of Record?</h2>
                                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--muted)', marginBottom: '1.5rem' }}>
                                    Il <strong>Merchant of Record</strong> (MoR) è l'entità legale autorizzata a ricevere pagamenti e a versare le tasse per conto di un brand commerciale. Agisce come il venditore ufficiale per ogni transazione ecommerce, assumendosi la responsabilità finanziaria, amministrativa e della compliance.
                                </p>
                                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--muted)' }}>
                                    Affidandoti a B2Vibe come MoR, mantieni il pieno controllo sulle tue strategie di marketing e sulla proprietà dei dati, mentre noi ci occupiamo del labirinto fiscale di oltre 200 paesi.
                                </p>
                            </div>
                            <div style={{ background: 'var(--surface)', padding: '40px', borderRadius: '32px', border: '1px solid var(--border)' }}>
                                <div style={{ marginBottom: '24px', display: 'flex', gap: '12px', alignItems: 'center' }}>
                                    <div style={{ width: '12px', height: '12px', background: 'var(--primary)', borderRadius: '50%' }}></div>
                                    <h4 style={{ fontWeight: 800, margin: 0 }}>Cosa fa concretamente?</h4>
                                </div>
                                <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '16px' }}>
                                    <li style={{ display: 'flex', gap: '12px', fontSize: '14px', color: 'var(--muted)' }}>
                                        <CheckCircle2 color="var(--primary)" size={20} style={{ flexShrink: 0 }} /> Processa i pagamenti in modo sicuro (anti-frode).
                                    </li>
                                    <li style={{ display: 'flex', gap: '12px', fontSize: '14px', color: 'var(--muted)' }}>
                                        <CheckCircle2 color="var(--primary)" size={20} style={{ flexShrink: 0 }} /> Calcola e versa IVA/GST in tempo reale.
                                    </li>
                                    <li style={{ display: 'flex', gap: '12px', fontSize: '14px', color: 'var(--muted)' }}>
                                        <CheckCircle2 color="var(--primary)" size={20} style={{ flexShrink: 0 }} /> Gestisce adempimenti EPR e doganali.
                                    </li>
                                    <li style={{ display: 'flex', gap: '12px', fontSize: '14px', color: 'var(--muted)' }}>
                                        <CheckCircle2 color="var(--primary)" size={20} style={{ flexShrink: 0 }} /> Emette fatture fiscalmente ineccepibili.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    {/* --- SEZIONE 2: VANTAGGI MOR --- */}
                    <motion.section id="mor-detail" {...fadeInUp} style={{ padding: '80px 0', borderBottom: '1px solid var(--border)' }}>
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <span className="section-label">Semplificazione Operativa</span>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 900 }}>Come B2Vibe potenzia le tue vendite.</h2>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
                            {[
                                {
                                    icon: Scale,
                                    title: "Responsabilità Fiscale",
                                    desc: "Gestiamo IVA e GST in oltre 200 paesi. Il MoR garantisce che ogni imposta locale sia calcolata e versata correttamente alle autorità competenti."
                                },
                                {
                                    icon: ShieldCheck,
                                    title: "Conformità Normativa",
                                    desc: "Assicuriamo che il tuo ecommerce rispetti leggi sulla protezione dei consumatori e normative doganali specifiche per ogni mercato, eliminando il rischio di sanzioni."
                                },
                                {
                                    icon: Lock,
                                    title: "Gestione Transazioni",
                                    desc: "Acquisizione sicura dei pagamenti e protezione antifrode. Semplifichiamo i rimborsi e le dispute finanziarie proteggendo il tuo cash flow."
                                },
                                {
                                    icon: ShieldAlert,
                                    title: "Riduzione dei Rischi",
                                    desc: "In caso di contenziosi legali relativi alle transazioni, è B2Vibe l'entità responsabile. Tu resti focalizzato solo sul valore del tuo brand."
                                },
                                {
                                    icon: Globe,
                                    title: "Espansione Rapida",
                                    desc: "Entra in nuovi mercati internazionali senza aprire branch locali. Utilizza la nostra infrastruttura MoR per iniziare a vendere in 24 ore."
                                },
                                {
                                    icon: Handshake,
                                    title: "Modello Composable",
                                    desc: "L'equilibrio perfetto tra insourcing (attività core) e outsourcing (funzioni operative/No-core) per una crescita sostenibile e controllata."
                                }
                            ].map((item, i) => (
                                <div key={i} style={{ padding: '32px', background: 'var(--surface)', borderRadius: '24px', border: '1px solid var(--border)', transition: 'transform 0.3s' }} onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}>
                                    <item.icon size={32} color="var(--primary)" style={{ marginBottom: '20px' }} />
                                    <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1rem' }}>{item.title}</h4>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.6 }}>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* --- SEZIONE 3: LOGISTICA --- */}
                    <motion.section id="logistica-detail" {...fadeInUp} style={{ padding: '80px 0', borderBottom: '1px solid var(--border)' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'center' }}>
                            <div style={{ order: 2 }}>
                                <span className="section-label">Logistica & Hub</span>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>Efficienza SFP Amazon Prime Certificate.</h2>
                                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--muted)', marginBottom: '1.5rem' }}>
                                    Disponiamo di un hub proprietario di <strong>3.300 mq</strong> a Paderno Dugnano, progettato per gestire ordini multicanale con precisione millimetrica.
                                </p>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    {[
                                        { t: "Picking & Packing", d: "Evasione ordini 99.8% entro 24h." },
                                        { t: "Resi & Controllo", d: "Check qualità immediato e re-pack." },
                                        { t: "Tracking Real-time", d: "Sync con 15+ corrieri premium." },
                                        { t: "White-Glove", d: "Packaging custom per brand equity." }
                                    ].map((s, i) => (
                                        <div key={i}>
                                            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px' }}>
                                                <Check color="var(--primary)" size={16} />
                                                <strong style={{ fontSize: '1rem' }}>{s.t}</strong>
                                            </div>
                                            <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>{s.d}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div style={{ order: 1, position: 'relative' }}>
                                <div style={{ background: 'var(--dark)', padding: '50px', borderRadius: '40px', color: '#fff' }}>
                                    <img src="/amazon-prime-logo.png" alt="Amazon Prime" style={{ height: '30px', marginBottom: '24px' }} />
                                    <h3 style={{ color: '#fff', fontSize: '1.8rem', fontWeight: 900, marginBottom: '1rem' }}>SFP (Seller Fulfilled Prime)</h3>
                                    <p style={{ opacity: 0.8, lineHeight: 1.7, fontSize: '1rem' }}>
                                        I tuoi prodotti godono del badge Prime nel magazzino B2Vibe. Gestiamo noi gli standard rigidi richiesti da Amazon per la consegna veloce, migliorando drasticamente il tuo <strong>Buy Box Win-Rate</strong>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* --- SEZIONE 4: TECNOLOGIA --- */}
                    <motion.section id="tecnologia-detail" {...fadeInUp} style={{ padding: '80px 0', borderBottom: '1px solid var(--border)' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '60px', alignItems: 'center' }}>
                            <div>
                                <span className="section-label">Piattaforma AI</span>
                                <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem' }}>B2Vibe Admin: Il cervello del tuo business.</h2>
                                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'var(--muted)', marginBottom: '1.5rem' }}>
                                    Integriamo PIM e OMS proprietari con algoritmi di AI generativa per l'arricchimento cataloghi e il pricing dinamico.
                                </p>
                                <div style={{ display: 'flex', gap: '32px' }}>
                                    <div>
                                        <Database color="var(--primary)" size={28} style={{ marginBottom: '12px' }} />
                                        <h4 style={{ fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase' }}>Centralizzazione</h4>
                                    </div>
                                    <div>
                                        <TrendingUp color="var(--dark)" size={28} style={{ marginBottom: '12px' }} />
                                        <h4 style={{ fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase' }}>Profit Analysis</h4>
                                    </div>
                                </div>
                            </div>
                            <div style={{ background: 'var(--surface)', padding: '40px', borderRadius: '32px' }}>
                                <div style={{ padding: '24px', background: '#fff', borderRadius: '16px', border: '1px solid var(--border)', marginBottom: '16px' }}>
                                    <span style={{ fontSize: '12px', color: 'var(--primary)', fontWeight: 800, textTransform: 'uppercase' }}>AI Content Generation</span>
                                    <p style={{ margin: '8px 0 0 0', fontSize: '14px', fontStyle: 'italic' }}>Schede prodotto tradotte e ottimizzate SEO in 12 lingue automaticamente.</p>
                                </div>
                                <div style={{ padding: '24px', background: '#fff', borderRadius: '16px', border: '1px solid var(--border)' }}>
                                    <span style={{ fontSize: '12px', color: 'var(--dark)', fontWeight: 800, textTransform: 'uppercase' }}>Dynamic Pricing</span>
                                    <p style={{ margin: '8px 0 0 0', fontSize: '14px', fontStyle: 'italic' }}>Algoritmi predittivi che monitorano i competitor 24/7 per massimizzare il margine.</p>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* --- SEZIONE 5: FAQ --- */}
                    <motion.section id="faq" {...fadeInUp} style={{ padding: '80px 0' }}>
                        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <span className="section-label">Analisi & Risposte</span>
                            <h2 style={{ fontSize: '2.5rem', fontWeight: 900 }}>Domande Frequenti sul MoR e l'Outsourcing.</h2>
                        </div>
                        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                            {[
                                {
                                    q: "Quali sono le politiche dei resi con B2Vibe?",
                                    a: "Il reso è strategico per la fiducia. Offriamo 3 modalità: 1. Reso gratuito (carico B2Vibe), 2. Reso gestito (carico cliente detratto dal rimborso), 3. Reso a totale carico cliente. Gestiamo noi la logistica di rientro e il check qualità entro 14 giorni."
                                },
                                {
                                    q: "In quanti mercati posso spedire realmente?",
                                    a: "Copriamo oltre 200 paesi. Siamo particolarmente forti in Europa (1-2 giorni lavorativi) e Nord America (esenzione dazi fino a $800). Grazie alle nostre certificazioni ADR, IATA e Bio, spediamo anche merci particolari (alcolici, fragili, infiammabili)."
                                },
                                {
                                    q: "Cos'è l'equilibrio tra Insourcing e Outsourcing?",
                                    a: "Non crediamo nel 'Full Outsourcing' cieco. Noi proponiamo un modello 'Composable': tieni in-house le attività core (strategia brand, design) e delega a noi le funzioni operative 'No-Core' (fiscalità, logistica, pagamenti) per non perdere il controllo."
                                },
                                {
                                    q: "Di quali strumenti si avvale il Customer Care?",
                                    a: "Supporto multilingua (IT, EN, DE, FR, ES) via mail, chat Zendesk, telefono e social. Utilizziamo sistemi integrati con il magazzino per dare risposte certe sulla spedizione in tempo reale."
                                },
                                {
                                    q: "Posso vendere in dropshipping con voi?",
                                    a: "Sì. Supportiamo modelli di dropshipping per snellire i processi logistici, risparmiando sui costi di magazzino e ottimizzando l'inventario senza investimenti preventivi in scorte fisiche."
                                }
                            ].map((item, i) => (
                                <FAQItem key={i} question={item.q} answer={item.a} />
                            ))}
                        </div>
                    </motion.section>

                    {/* Call to Action Final */}
                    <motion.div {...fadeInUp} style={{ marginTop: '100px', textAlign: 'center', background: 'var(--dark)', padding: '80px 40px', borderRadius: '40px', color: '#fff' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 900, color: '#fff' }}>Pronto per l'E-commerce Zero Pensieri?</h2>
                        <p style={{ opacity: 0.7, fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
                            Parla con un consulente B2Vibe per definire la strategia ideale per il tuo brand. Analizzeremo il tuo potenziale di crescita internazionale.
                        </p>
                        <button className="primary" onClick={onContactClick} style={{ padding: '20px 50px', fontSize: '1.1rem', gap: '15px' }}>
                            Pianifica una consulenza professionale <ArrowRight size={22} />
                        </button>
                    </motion.div>
                </div>
            </main>

            <BackToTop />
            <Footer onCookieClick={onCookieClick} onContactClick={onContactClick} />
        </div>
    );
};

export default MerchantOfRecordGuide;
