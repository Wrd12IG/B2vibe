import React from 'react';
import { Navbar, Footer, SectionTitle, BackToTop } from '../components/SharedLayout';
import { ShieldCheck, Globe, Zap, Scale, ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const MerchantOfRecordGuide = ({ onContactClick, onCookieClick }) => {
    return (
        <div style={{ background: '#FFF' }}>
            <Navbar onContactClick={onContactClick} />

            {/* Header Content */}
            <header style={{ padding: '150px 5% 60px 5%', textAlign: 'center', background: 'linear-gradient(180deg, rgba(7, 235, 166, 0.05) 0%, rgba(255,255,255,0) 100%)' }}>
                <span className="badge">Guida Completa 2026</span>
                <h1 className="heading-xl" style={{ marginTop: '1rem', marginBottom: '1.5rem', color: '#000' }}>
                    Merchant of Record (MoR):<br />Tutto quello che devi sapere
                </h1>
                <p style={{ fontSize: '1.2rem', color: 'var(--muted)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
                    Scopri come scalare il tuo e-commerce a livello globale delegando la complessità fiscale, legale e amministrativa.
                </p>
            </header>

            <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 5% 100px 5%' }}>

                {/* Intro Section */}
                <div className="glass-card" style={{ padding: '3rem', marginBottom: '4rem' }}>
                    <h2 className="heading-lg" style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Cos'è un Merchant of Record?</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--muted)' }}>
                        Un <strong>Merchant of Record (MoR)</strong> è l'entità legale autorizzata a processare i pagamenti dei clienti per conto di un'azienda. A differenza di un semplice gateway di pagamento, il MoR si assume la <strong>responsabilità finanziaria e legale</strong> delle transazioni.
                    </p>
                    <p style={{ fontSize: '1.1rem', color: 'var(--muted)' }}>
                        In pratica: quando un cliente acquista dal tuo sito, tecnicamente acquista dal MoR. Sull'estratto conto del cliente apparirà il nome del MoR, che si occuperà poi di trasferire i fondi alla tua azienda, al netto delle tasse e delle commissioni.
                    </p>
                </div>

                {/* Table of Contents-like Grid */}
                <div className="grid-12" style={{ gap: '2rem', marginBottom: '5rem' }}>
                    <div className="col-span-4" style={{ padding: '2rem', borderLeft: '4px solid var(--primary)', background: '#F8F9FA' }}>
                        <ShieldCheck size={32} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 700 }}>Compliance Fiscale</h3>
                        <p style={{ color: 'var(--muted)' }}>Gestione automatica dell'IVA, Sales Tax USA e altre imposte locali in oltre 100 paesi.</p>
                    </div>
                    <div className="col-span-4" style={{ padding: '2rem', borderLeft: '4px solid #000', background: '#F8F9FA' }}>
                        <Scale size={32} color="#000" style={{ marginBottom: '1rem' }} />
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 700 }}>Responsabilità Legale</h3>
                        <p style={{ color: 'var(--muted)' }}>Il MoR gestisce rimborsi, frodi e dispute (chargeback), proteggendo il tuo business.</p>
                    </div>
                    <div className="col-span-4" style={{ padding: '2rem', borderLeft: '4px solid var(--accent)', background: '#F8F9FA' }}>
                        <Globe size={32} color="var(--accent)" style={{ marginBottom: '1rem' }} />
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', fontWeight: 700 }}>Espansione Globale</h3>
                        <p style={{ color: 'var(--muted)' }}>Vendi in nuovi mercati senza dover aprire entità legali locali o conti bancari esteri.</p>
                    </div>
                </div>

                {/* Deep Dive Content */}
                <article style={{ fontSize: '1.1rem', lineHeight: 1.8, color: '#333' }}>
                    <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginTop: '3rem', marginBottom: '1.5rem' }}>MoR vs PSP: Qual è la differenza?</h2>
                    <p>
                        Spesso si confonde il Merchant of Record con i Payment Service Provider (PSP) come Stripe o PayPal. Ecco la differenza sostanziale:
                    </p>
                    <ul style={{ margin: '1.5rem 0', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <li><strong>PSP (es. Stripe):</strong> Processa solo il pagamento. Tu resti responsabile del calcolo delle tasse, della fatturazione e della compliance legale in ogni paese in cui vendi.</li>
                        <li><strong>MoR (es. B2Vibe):</strong> Processa il pagamento E gestisce tutta la parte burocratica. Calcola, raccoglie e versa le tasse alle autorità competenti. Tu ricevi un unico bonifico pulito.</li>
                    </ul>

                    <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginTop: '4rem', marginBottom: '1.5rem' }}>Perché scegliere B2Vibe come tuo MoR?</h2>
                    <p style={{ marginBottom: '1.5rem' }}>
                        B2Vibe non è solo un software, ma un partner strategico. Oltre alla gestione dei pagamenti, offriamo un ecosistema completo per l'e-commerce:
                    </p>

                    <div className="grid-12" style={{ gap: '1.5rem' }}>
                        <div className="glass-card col-span-6" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                            <div style={{ background: 'var(--primary-glow)', padding: '10px', borderRadius: '10px' }}>
                                <Zap size={24} color="var(--primary)" />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>Logistica Integrata</h4>
                                <p style={{ fontSize: '0.95rem', color: 'var(--muted)' }}>Non gestiamo solo i soldi, spostiamo anche i prodotti. I nostri magazzini sono pronti a spedire in tutta Europa.</p>
                            </div>
                        </div>
                        <div className="glass-card col-span-6" style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                            <div style={{ background: 'rgba(0,0,0,0.05)', padding: '10px', borderRadius: '10px' }}>
                                <Users size={24} color="#000" />
                            </div>
                            <div>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem' }}>Customer Care Nativo</h4>
                                <p style={{ fontSize: '0.95rem', color: 'var(--muted)' }}>Gestiamo le richieste dei clienti finali relative a ordini, spedizioni e resi, mantenendo alto il tuo rating sui marketplace.</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '5rem', background: '#000', color: '#FFF', padding: '3rem', borderRadius: '20px', textAlign: 'center' }}>
                        <h2 style={{ color: '#FFF', marginBottom: '1rem' }}>Pronto a vendere senza confini?</h2>
                        <p style={{ opacity: 0.8, marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                            Lascia a noi la burocrazia. Tu concentrati sul prodotto e sul marketing.
                        </p>
                        <button className="primary" onClick={onContactClick} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                            Parla con un esperto <ArrowRight size={18} />
                        </button>
                    </div>
                </article>
            </main>

            <BackToTop />
            <Footer onCookieClick={onCookieClick} />
        </div>
    );
};

export default MerchantOfRecordGuide;
