import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar, Footer, SectionTitle, BackToTop } from '../components/SharedLayout';

const CookiePolicy = ({ onContactClick, onCookieClick }) => {
    return (
        <div style={{ background: '#FFF', minHeight: '100vh' }}>
            <Navbar onContactClick={onContactClick} />

            <main style={{ padding: '160px 5% 80px 5%', maxWidth: '1200px', margin: '0 auto' }}>
                <SectionTitle
                    badge="Compliance"
                    title="Cookie Policy"
                    subtitle="Gestione delle preferenze e tracciamento"
                />

                <div className="glass-card" style={{ padding: '4rem', marginTop: '2rem', background: '#FFF' }}>
                    <div style={{ color: 'var(--muted)', lineHeight: 1.8, display: 'grid', gap: '2.5rem' }}>
                        <section>
                            <h2 style={{ color: '#000', fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid #EEE', paddingBottom: '10px' }}>Cosa sono i cookie?</h2>
                            <p>
                                I cookie sono piccoli file di testo che i siti visitati dagli utenti inviano ai loro terminali, ove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla visita successiva. Questo permette al sito di "ricordare" le tue scelte e preferenze per offrirti un'esperienza migliore.
                            </p>
                        </section>

                        <section>
                            <h2 style={{ color: '#000', fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid #EEE', paddingBottom: '10px' }}>Tipologie di Cookie utilizzati</h2>
                            <div style={{ display: 'grid', gap: '2rem', marginTop: '1rem' }}>
                                <div>
                                    <h3 style={{ color: '#000', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Cookie Tecnici (Necessari)</h3>
                                    <p>Essenziali per il corretto funzionamento del sito e per fornire i servizi richiesti dall'utente. Senza questi cookie, il sito non funzionerebbe correttamente.</p>
                                </div>
                                <div>
                                    <h3 style={{ color: '#000', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Cookie Analitici</h3>
                                    <p>Utilizziamo questi cookie per raccogliere informazioni statistiche anonime sull'utilizzo del sito per migliorarne le prestazioni e la struttura.</p>
                                </div>
                                <div>
                                    <h3 style={{ color: '#000', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Cookie di Marketing</h3>
                                    <p>Utilizzati per monitorare l'efficacia delle nostre campagne pubblicitarie e per mostrarti contenuti pertinenti in base ai tuoi interessi sui marketplace e canali social.</p>
                                </div>
                            </div>
                        </section>

                        <section>
                            <h2 style={{ color: '#000', fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid #EEE', paddingBottom: '10px' }}>Gestione delle preferenze</h2>
                            <p>
                                Puoi gestire le tue preferenze sui cookie in ogni momento cliccando sul tasto "Personalizza Cookie" nel footer di questo sito. Inoltre, puoi configurare il tuo browser per rifiutare i cookie, ma questo potrebbe limitare alcune funzionalità del sito.
                            </p>
                            <div style={{ marginTop: '2rem' }}>
                                <button className="secondary" onClick={onCookieClick}>Riapri Impostazioni Cookie</button>
                            </div>
                        </section>

                        <section>
                            <p style={{ fontSize: '0.9rem', opacity: 0.7 }}>Ultimo aggiornamento: Gennaio 2026</p>
                        </section>
                    </div>
                </div>
            </main>

            <BackToTop />
            <Footer onCookieClick={onCookieClick} />
        </div>
    );
};

export default CookiePolicy;
