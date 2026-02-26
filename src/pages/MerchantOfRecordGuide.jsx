import React, { useEffect } from 'react';
import { Navbar, Footer, SectionTitle, BackToTop } from '../components/SharedLayout';
import { ShieldCheck, Globe, Zap, Scale, ArrowRight, Users, Box, Database, TrendingUp, CheckCircle2, Layout, BarChart3, Lock, Cpu, Rocket, Headphones } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const MerchantOfRecordGuide = ({ onContactClick, onCookieClick }) => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    const offset = 80;
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
            <header style={{ padding: '160px 5% 100px 5%', textAlign: 'center', background: 'linear-gradient(180deg, rgba(7, 235, 166, 0.08) 0%, rgba(255,255,255,0) 100%)' }}>
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="badge" style={{ marginBottom: '1.5rem' }}>Pillar Page - Analisi Professionale 2026</span>
                    <h1 className="heading-xl" style={{ marginTop: '0', marginBottom: '2rem', color: '#000', fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
                        E-commerce Full Outsourcing:<br />Guida Strategica alla Crescita
                    </h1>
                    <p style={{ fontSize: '1.3rem', color: 'var(--muted)', maxWidth: '900px', margin: '0 auto', lineHeight: 1.8, fontWeight: 400 }}>
                        In un mercato saturo e complesso, l'efficienza operativa è l'unico vero vantaggio competitivo. Scopri come B2Vibe gestisce ogni aspetto del tuo business online, trasformando la burocrazia in opportunità di vendita.
                    </p>
                </motion.div>
            </header>

            <main style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 5% 150px 5%' }}>

                {/* --- SEZIONE MERCHANT OF RECORD --- */}
                <motion.section id="mor-detail" {...fadeInUp} style={{ padding: '6rem 0', borderBottom: '1px solid #EEE' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
                        <div style={{ background: 'var(--primary)', padding: '15px', borderRadius: '18px' }}>
                            <ShieldCheck size={40} color="#000" />
                        </div>
                        <h2 className="heading-lg" style={{ fontSize: '2.8rem', margin: 0 }}>Merchant of Record (MoR)</h2>
                    </div>

                    <div style={{ fontSize: '1.2rem', lineHeight: 1.9, color: '#444', marginBottom: '3rem' }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Il modello <strong>Merchant of Record</strong> rappresenta la soluzione definitiva per i brand che desiderano espandersi internazionalmente senza l'onere di aprire società locali o gestire la frammentazione fiscale globale. B2Vibe non si limita a processare pagamenti: <strong>diventiamo il venditore legale dei tuoi prodotti</strong>, assumendo su di noi tutte le responsabilità legate a IVA (VAT), dazi doganali e normative locali.
                        </p>
                        <p>
                            Questo significa che il tuo dipartimento amministrativo riceverà un unico pagamento consolidato, libero da ogni complessità di riconciliazione fiscale estera. Gestiamo noi le soglie di vendita in ogni nazione europea e internazionale, garantendo la totale compliance.
                        </p>
                    </div>

                    <div className="grid-12" style={{ gap: '2rem' }}>
                        {[
                            {
                                icon: Lock,
                                t: "Sicurezza Globale",
                                d: "Gestione di chargeback, frodi e normative KYC/AML. Siamo noi a rispondere in caso di dispute finanziarie, tutelando la stabilità del tuo business."
                            },
                            {
                                icon: Scale,
                                t: "Fiscalità Semplificata",
                                d: "Calcolo e versamento automatico di VAT, Sales Tax e Imposte Indirecte in oltre 150 paesi. Eliminiamo il rischio di sanzioni per errori di calcolo fiscale."
                            },
                            {
                                icon: Globe,
                                t: "Espansione Immediata",
                                d: "Vendi in nuovi mercati in soli 4 step. Non serve attendere mesi per l'apertura di branch locali: la nostra licenza MoR è già attiva a livello globale."
                            }
                        ].map((card, i) => (
                            <div key={i} className="col-span-4" style={{ padding: '2.5rem', background: '#F9F9F9', borderRadius: '25px', border: '1px solid #EEE' }}>
                                <card.icon size={28} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
                                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, marginBottom: '1rem' }}>{card.t}</h4>
                                <p style={{ fontSize: '1rem', color: 'var(--muted)', lineHeight: 1.6 }}>{card.d}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ marginTop: '3rem' }}>
                        <button className="btn-ghost" onClick={onContactClick} style={{ fontSize: '1rem', padding: '14px 28px' }}>
                            Scopri di più sul Merchant of Record <ArrowRight size={18} />
                        </button>
                    </div>
                </motion.section>

                {/* --- SEZIONE LOGISTICA --- */}
                <motion.section id="logistica-detail" {...fadeInUp} style={{ padding: '6rem 0', borderBottom: '1px solid #EEE' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
                        <div style={{ background: '#000', padding: '15px', borderRadius: '18px' }}>
                            <Box size={40} color="var(--primary)" />
                        </div>
                        <h2 className="heading-lg" style={{ fontSize: '2.8rem', margin: 0 }}>Logistica & Operations</h2>
                    </div>

                    <div style={{ fontSize: '1.2rem', lineHeight: 1.9, color: '#444', marginBottom: '3rem' }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            La logistica moderna richiede precisione millimetrica. B2Vibe gestisce un hub operativo di oltre <strong>3.300 mq</strong> a Paderno Dugnano, strategicamente posizionato per servire l'intero mercato europeo. La nostra eccellenza è certificata per il programma <strong>Amazon Seller Fulfilled Prime (SFP)</strong>, che permette ai nostri brand partner di godere del badge Prime pur mantenendo la merce nei nostri magazzini.
                        </p>
                        <p>
                            Non offriamo solo stoccaggio: gestiamo picchi stagionali (Black Friday, Saldi) e spedizioni delicate in modalità <strong>White-Glove</strong>, garantendo che l'unboxing sia all'altezza della reputazione del tuo brand.
                        </p>
                    </div>

                    <div className="grid-12" style={{ gap: '2rem' }}>
                        <div className="col-span-8">
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                {[
                                    { t: "Picking & Packing", d: "Efficienza del 99.8% nella preparazione degli ordini entro 24h." },
                                    { t: "Gestione Resi", d: "Controllo qualità immediato e ricondizionamento pack." },
                                    { t: "Tracking Real-time", d: "Aggregazione flussi dati con oltre 15 corrieri europei." },
                                    { t: "Packaging Custom", d: "Progettazione di soluzioni di imballaggio eco-sostenibili e brandizzate." }
                                ].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '15px' }}>
                                        <CheckCircle2 color="var(--primary)" size={24} style={{ flexShrink: 0 }} />
                                        <div>
                                            <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '5px' }}>{item.t}</strong>
                                            <span style={{ fontSize: '0.95rem', color: 'var(--muted)' }}>{item.d}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-4" style={{ background: 'var(--primary-glow)', padding: '2.5rem', borderRadius: '30px', border: '1px solid var(--primary)' }}>
                            <h4 style={{ fontWeight: 800, marginBottom: '1rem' }}>Target: Amazon Prime</h4>
                            <p style={{ fontSize: '0.95rem', lineHeight: 1.6 }}>
                                Ottimizziamo le scorte per evitare stock-out e garantiamo i tempi di consegna richiesti dai marketplace più severi, migliorando il tuo Buy Box win-rate.
                            </p>
                        </div>
                    </div>
                    <div style={{ marginTop: '3rem' }}>
                        <button className="btn-ghost" onClick={onContactClick} style={{ fontSize: '1rem', padding: '14px 28px' }}>
                            Scopri di più sulla Logistica <ArrowRight size={18} />
                        </button>
                    </div>
                </motion.section>

                {/* --- SEZIONE TECNOLOGIA --- */}
                <motion.section id="tecnologia-detail" {...fadeInUp} style={{ padding: '6rem 0', borderBottom: '1px solid #EEE' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
                        <div style={{ background: 'var(--primary)', padding: '15px', borderRadius: '18px' }}>
                            <Cpu size={40} color="#000" />
                        </div>
                        <h2 className="heading-lg" style={{ fontSize: '2.8rem', margin: 0 }}>Tecnologia & Ecosistema AI</h2>
                    </div>

                    <div style={{ fontSize: '1.2rem', lineHeight: 1.9, color: '#444', marginBottom: '4rem' }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Il cuore di B2Vibe è <strong>B2Vibe Admin</strong>, il nostro stack tecnologico proprietario. Si tratta di un'architettura modulare che integra funzioni di <strong>PIM (Product Information Management)</strong> e <strong>OMS (Order Management System)</strong>, permettendo una sincronizzazione perfetta tra il tuo catalogo, i magazzini e i marketplace.
                        </p>
                        <p>
                            Oggi la tecnologia B2Vibe sfrutta l'<strong>Intelligenza Artificiale Generativa</strong> per arricchire automaticamente i cataloghi prodotti, traducendo schede tecniche in descrizioni persuasive in 12 lingue e ottimizzando il pricing attraverso algoritmi predittivi di mercato.
                        </p>
                    </div>

                    <div className="grid-12" style={{ gap: '2.5rem' }}>
                        <div className="col-span-6 glass-card" style={{ background: '#121212', padding: '3rem', color: '#FFF' }}>
                            <Database size={32} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#FFF' }}>Centralizzazione Dati</h3>
                            <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
                                Un solo pannello per controllare Shopify, Amazon, eBay e i marketplace verticali. Fine dei caricamenti manuali e delle discrepanze di magazzino.
                            </p>
                        </div>
                        <div className="col-span-6 glass-card" style={{ background: '#F9F9F9', padding: '3rem' }}>
                            <TrendingUp size={32} color="#000" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Business Intelligence</h3>
                            <p style={{ color: 'var(--muted)', lineHeight: 1.7 }}>
                                Dashboard personalizzate che mostrano il ROAS reale, i costi di spedizione e la profittabilità netta per ogni singolo SKU e mercato.
                            </p>
                        </div>
                    </div>
                    <div style={{ marginTop: '3rem' }}>
                        <button className="btn-ghost" onClick={onContactClick} style={{ fontSize: '1rem', padding: '14px 28px' }}>
                            Scopri di più sulla Tecnologia B2Vibe <ArrowRight size={18} />
                        </button>
                    </div>
                </motion.section>

                {/* --- SEZIONE MARKETPLACE --- */}
                <motion.section id="marketplace-detail" {...fadeInUp} style={{ padding: '6rem 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
                        <div style={{ background: '#000', padding: '15px', borderRadius: '18px' }}>
                            <Rocket size={40} color="var(--primary)" />
                        </div>
                        <h2 className="heading-lg" style={{ fontSize: '2.8rem', margin: 0 }}>Marketplace Management</h2>
                    </div>

                    <div style={{ fontSize: '1.2rem', lineHeight: 1.9, color: '#444', marginBottom: '4rem' }}>
                        <p style={{ marginBottom: '1.5rem' }}>
                            Vendere sui marketplace non significa solo caricare un file CSV. Richiede una cura ossessiva del posizionamento SEO, del rating venditore e delle performance pubblicitarie. B2Vibe gestisce attivamente il tuo presidio su canali come <strong>Amazon, eBay, Veepee, ManoMano, Leroy Merlin e Zalando</strong>.
                        </p>
                        <p>
                            Il nostro team di specialisti ottimizza le immagini (A+ Content), gestisce le campagne PPC (Pay-Per-Click) e monitora i prezzi dei competitor in tempo reale per garantirti la massima visibilità organica e sponsorizzata.
                        </p>
                    </div>

                    <div className="grid-12" style={{ gap: '2rem' }}>
                        {[
                            { t: "SEO Optimization", d: "Ricerca parole chiave localizzate per ogni mercato (DE, FR, ES, UK) per massimizzare il traffico gratuito." },
                            { t: "Ad Management", d: "Gestione budget advertising con focus sul ROAS. Strategie Full Funnel per nuovi lanci prodotto." },
                            { t: "Brand Storefront", d: "Creazione di mini-siti proprietari all'interno dei marketplace per migliorare il Brand Equity." },
                            { t: "Review Management", d: "Monitoraggio attivo delle recensioni e feedback per proteggere la reputazione del brand." }
                        ].map((serv, i) => (
                            <div key={i} className="col-span-6" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', padding: '2rem', border: '1px solid #EEE', borderRadius: '20px' }}>
                                <Zap color="var(--primary)" size={24} style={{ flexShrink: 0, marginTop: '5px' }} />
                                <div>
                                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '0.8rem' }}>{serv.t}</h4>
                                    <p style={{ fontSize: '0.95rem', color: 'var(--muted)', lineHeight: 1.6 }}>{serv.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Customer Care Box */}
                    <div className="glass-card" style={{ marginTop: '5rem', background: 'linear-gradient(135deg, #121212 0%, #222 100%)', color: '#FFF', padding: '4rem', borderRadius: '40px', display: 'flex', alignItems: 'center', gap: '3rem', flexWrap: 'wrap' }}>
                        <div style={{ flex: '1', minWidth: '300px' }}>
                            <Headphones size={48} color="var(--primary)" style={{ marginBottom: '1.5rem' }} />
                            <h3 style={{ fontSize: '2rem', color: '#FFF', marginBottom: '1rem' }}>Customer Care Multilingue</h3>
                            <p style={{ opacity: 0.8, fontSize: '1.1rem', lineHeight: 1.7 }}>
                                Non lasciamo mai solo il tuo cliente. Gestiamo ticket e chat in tempo reale in tutte le principali lingue europee, integrando strumenti AI per risposte immediate e personale dedicato per risolvere le casistiche più complesse.
                            </p>
                        </div>
                        <div style={{ background: 'rgba(255,255,255,0.05)', padding: '2.5rem', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)' }}>
                            <div style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--primary)' }}>92%</div>
                            <div style={{ fontSize: '0.9rem', opacity: 0.6, textTransform: 'uppercase', letterSpacing: '1px' }}>First Call Resolution</div>
                        </div>
                    </div>
                    <div style={{ marginTop: '3rem' }}>
                        <button className="btn-ghost" onClick={onContactClick} style={{ fontSize: '1rem', padding: '14px 28px' }}>
                            Scopri di più sul Marketplace Management <ArrowRight size={18} />
                        </button>
                    </div>
                </motion.section>

                {/* Call to Action Final */}
                <motion.div {...fadeInUp} style={{ marginTop: '8rem', textAlign: 'center', borderTop: '2px solid var(--primary)', paddingTop: '6rem' }}>
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem', fontWeight: 900 }}>Iniziamo il tuo percorso di crescita?</h2>
                    <p style={{ color: 'var(--muted)', fontSize: '1.2rem', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
                        Parla con uno dei nostri esperti di internazionalizzazione. Analizzeremo il tuo catalogo e ti proporremo una roadmap personalizzata.
                    </p>
                    <button className="primary" onClick={onContactClick} style={{ padding: '20px 50px', fontSize: '1.2rem', display: 'inline-flex', alignItems: 'center', gap: '15px' }}>
                        Pianifica una consulenza gratuita <ArrowRight size={22} />
                    </button>
                </motion.div>
            </main>

            <BackToTop />
            <Footer onCookieClick={onCookieClick} />
        </div>
    );
};

export default MerchantOfRecordGuide;
