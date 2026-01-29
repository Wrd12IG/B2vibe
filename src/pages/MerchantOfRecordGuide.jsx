import React, { useEffect } from 'react';
import { Navbar, Footer, SectionTitle, BackToTop } from '../components/SharedLayout';
import { ShieldCheck, Globe, Zap, Scale, ArrowRight, Users, Box, Database, TrendingUp, CheckCircle2, Layout, BarChart3 } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const MerchantOfRecordGuide = ({ onContactClick, onCookieClick }) => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    return (
        <div style={{ background: '#FFF' }}>
            <Navbar onContactClick={onContactClick} />

            {/* Header Content */}
            <header style={{ padding: '150px 5% 60px 5%', textAlign: 'center', background: 'linear-gradient(180deg, rgba(7, 235, 166, 0.05) 0%, rgba(255,255,255,0) 100%)' }}>
                <span className="badge">Pillar Page 2026</span>
                <h1 className="heading-xl" style={{ marginTop: '1rem', marginBottom: '1.5rem', color: '#000' }}>
                    E-commerce Full Outsourcing:<br />La Guida Definitiva
                </h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--muted)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
                    Dalla gestione fiscale (MoR) alla logistica avanzata: tutto il supporto necessario per scalare il tuo brand sui mercati internazionali.
                </p>
            </header>

            <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 5% 100px 5%' }}>

                {/* --- SEZIONE MERCHANT OF RECORD --- */}
                <section id="mor-detail" style={{ padding: '4rem 0', borderBottom: '1px solid var(--glass-border)' }}>
                    <div className="glass-card" style={{ padding: '3rem', marginBottom: '2rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                            <ShieldCheck size={40} color="var(--primary)" />
                            <h2 className="heading-lg" style={{ fontSize: '2.2rem', margin: 0 }}>Merchant of Record (MoR)</h2>
                        </div>
                        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                            Un <strong>Merchant of Record</strong> non è un semplice intermediario di pagamento. È l'entità legale che si assume la piena responsabilità di ogni transazione effettuata sul tuo e-commerce o sui marketplace. Quando utilizzi B2Vibe come MoR, noi diventiamo i venditori legali agli occhi delle autorità fiscali locali.
                        </p>

                        <div className="grid-12" style={{ gap: '2rem' }}>
                            <div className="col-span-6">
                                <h4 style={{ fontWeight: 800, marginBottom: '1rem' }}>Semplificazione Fiscale</h4>
                                <p style={{ color: 'var(--muted)', fontSize: '1rem' }}>
                                    Gestiamo l'apertura delle posizioni IVA nei paesi target, il calcolo delle imposte (Sales Tax, VAT) e il versamento periodico. Non dovrai più preoccuparti delle soglie di vendita intracomunitarie.
                                </p>
                            </div>
                            <div className="col-span-6">
                                <h4 style={{ fontWeight: 800, marginBottom: '1rem' }}>Compliance & Rischio</h4>
                                <p style={{ color: 'var(--muted)', fontSize: '1rem' }}>
                                    Ci occupiamo noi dei chargeback, delle dispute e del monitoraggio delle frodi. Il tuo brand è protetto da sanzioni legali derivanti da normative locali in continua evoluzione.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SEZIONE LOGISTICA --- */}
                <section id="logistica-detail" style={{ padding: '4rem 0', borderBottom: '1px solid var(--glass-border)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <Box size={40} color="var(--primary)" />
                        <h2 className="heading-lg" style={{ fontSize: '2.2rem', margin: 0 }}>Logistica & Magazzino</h2>
                    </div>
                    <p style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '2.5rem' }}>
                        La logistica è il cuore pulsante dell'e-commerce. B2Vibe mette a disposizione un'infrastruttura proprietaria di oltre 3.300 mq certificata per l'eccellenza operativa. Non siamo un semplice centro di smistamento, ma un hub tecnologico che integra stoccaggio, packaging personalizzato e spedizioni last-mile.
                    </p>

                    <div className="grid-12" style={{ gap: '1.5rem' }}>
                        {[
                            { t: "Gestione Amazon Prime", d: "Certificati per il programma Seller Fulfilled Prime, per garantire la massima velocità e affidabilità." },
                            { t: "Packaging Custom", d: "Personalizziamo l'esperienza di unboxing per rafforzare il tuo brand in ogni spedizione." },
                            { t: "Resi Internazionali", d: "Gestione centralizzata della logistica inversa per rendere i resi un punto di forza, non un costo." }
                        ].map((item, i) => (
                            <div key={i} className="col-span-4" style={{ padding: '1.5rem', background: '#F8F9FA', borderRadius: '15px' }}>
                                <CheckCircle2 size={24} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                                <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>{item.t}</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>{item.d}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* --- SEZIONE TECNOLOGIA --- */}
                <section id="tecnologia-detail" style={{ padding: '4rem 0', borderBottom: '1px solid var(--glass-border)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <Database size={40} color="var(--primary)" />
                        <h2 className="heading-lg" style={{ fontSize: '2.2rem', margin: 0 }}>Tecnologia & AI</h2>
                    </div>
                    <p style={{ fontSize: '1.15rem', lineHeight: 1.8, marginBottom: '2rem' }}>
                        La nostra tecnologia proprietaria collega il tuo business a tutto il mondo. Utilizziamo sistemi di PIM (Product Information Management) e OMS (Order Management System) evoluti per garantire che ogni dato sia sincronizzato in tempo reale.
                    </p>

                    <div className="glass-card" style={{ background: '#121212', color: '#FFF', padding: '2.5rem' }}>
                        <div className="grid-12" style={{ gap: '2rem' }}>
                            <div className="col-span-6">
                                <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Automazione AI</h4>
                                <p style={{ opacity: 0.8 }}>
                                    Utilizziamo algoritmi di intelligenza artificiale per l'arricchimento dei cataloghi, la traduzione semantica delle schede prodotto e l'ottimizzazione del pricing dinamico sui marketplace.
                                </p>
                            </div>
                            <div className="col-span-6">
                                <h4 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Integrazione Real-time</h4>
                                <p style={{ opacity: 0.8 }}>
                                    API dirette con i principali corrieri e marketplace per tracciabilità totale, dalle scorte in magazzino alla consegna finale nelle mani del cliente.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- SEZIONE MARKETPLACE --- */}
                <section id="marketplace-detail" style={{ padding: '4rem 0' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
                        <Globe size={40} color="var(--primary)" />
                        <h2 className="heading-lg" style={{ fontSize: '2.2rem', margin: 0 }}>Marketplace Management</h2>
                    </div>
                    <div className="grid-12" style={{ gap: '3rem', alignItems: 'center' }}>
                        <div className="col-span-7">
                            <p style={{ fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                Scalare su Amazon, eBay, ManoMano o Leroy Merlin richiede strategie dedicate per ogni canale. B2Vibe gestisce la creazione dei contenuti, l'ottimizzazione SEO organica e le campagne di advertising (PPC) per massimizzare il ROAS.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {[
                                    "Storefront Design su marketplace",
                                    "Analisi competitiva dei prezzi",
                                    "Gestione promozioni e deal stagionali",
                                    "Monitoraggio performance e rating seller"
                                ].map((li, i) => (
                                    <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                                        <TrendingUp size={18} color="var(--primary)" />
                                        <span>{li}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-span-5">
                            <div style={{ background: 'var(--primary-glow)', padding: '2rem', borderRadius: '30px', textAlign: 'center' }}>
                                <BarChart3 size={60} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>+45%</h3>
                                <p style={{ fontSize: '0.9rem' }}>Incremento medio delle vendite nei primi 6 mesi di gestione.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action Final */}
                <div style={{ marginTop: '5rem', background: '#000', color: '#FFF', padding: '4rem 5%', borderRadius: '40px', textAlign: 'center' }}>
                    <h2 style={{ color: '#FFF', fontSize: '2.5rem', marginBottom: '1.5rem' }}>Pronto a trasformare il tuo E-commerce?</h2>
                    <p style={{ opacity: 0.8, marginBottom: '2.5rem', maxWidth: '700px', margin: '0 auto 2.5rem auto', fontSize: '1.1rem' }}>
                        Pianifica una consulenza gratuita con i nostri specialisti e scopri come il modello Full-Outsourcing di B2Vibe può accelerare la tua crescita internazionale.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button className="primary" onClick={onContactClick} style={{ padding: '15px 40px', fontSize: '1.1rem', display: 'flex', alignItems: 'center', gap: '12px' }}>
                            Richiedi una Demo <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </main>

            <BackToTop />
            <Footer onCookieClick={onCookieClick} />
        </div>
    );
};

export default MerchantOfRecordGuide;
