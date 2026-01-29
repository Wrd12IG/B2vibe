import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navbar, Footer, SectionTitle } from '../components/SharedLayout';

const PrivacyPolicy = ({ onCookieClick }) => {
    return (
        <div style={{ background: '#FFF', minHeight: '100vh' }}>
            <Navbar onContactClick={() => { }} />

            <main style={{ padding: '160px 5% 80px 5%', maxWidth: '1200px', margin: '0 auto' }}>
                <SectionTitle
                    badge="Legal Area"
                    title="Informativa sulla Privacy"
                    subtitle="Aggiornata al: Gennaio 2026"
                />

                <div className="glass-card" style={{ padding: '4rem', marginTop: '2rem', background: '#FFF' }}>
                    <div style={{ color: 'var(--muted)', lineHeight: 1.8, display: 'grid', gap: '2.5rem' }}>
                        <section>
                            <p>
                                La presente Informativa sulla Privacy descrive come <strong>B2VIBE</strong> (di seguito, "noi", "nostro" o "B2Vibe") raccoglie, utilizza, condivide e protegge i dati personali degli utenti che visitano il nostro sito web <strong>https://b2vibe.com/</strong> e utilizzano i nostri servizi. Ci impegniamo a proteggere la tua privacy e a trattare i tuoi dati personali in conformità al Regolamento Generale sulla Protezione dei Dati (GDPR) dell'Unione Europea (Regolamento UE 2016/679) e alla normativa italiana applicabile.
                            </p>
                            <p style={{ marginTop: '1rem' }}>
                                Ti invitiamo a leggere attentamente la presente Informativa per comprendere come trattiamo i tuoi dati personali e quali sono i tuoi diritti.
                            </p>
                        </section>

                        <section>
                            <h2 style={{ color: '#000', fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid #EEE', paddingBottom: '10px' }}>1. Titolare del Trattamento dei Dati</h2>
                            <p>Il Titolare del trattamento dei dati personali è:</p>
                            <div style={{ marginTop: '1rem', color: '#000', fontWeight: 600 }}>
                                <p>B2VIBE</p>
                                <p style={{ fontWeight: 400, color: 'var(--muted)' }}>Sede Legale: Via Paradiso 5, 20831 Seregno (MB)</p>
                                <p style={{ fontWeight: 400, color: 'var(--muted)' }}>Sede Operativa: Via Ferdinando Santi 11/13, 20037 Paderno Dugnano (MI)</p>
                                <p style={{ fontWeight: 400, color: 'var(--muted)' }}>Email: <strong>info@b2vibe.com</strong></p>
                                <p style={{ fontWeight: 400, color: 'var(--muted)' }}>Telefono: +39 02 80016631</p>
                            </div>
                        </section>

                        <section>
                            <h2 style={{ color: '#000', fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid #EEE', paddingBottom: '10px' }}>2. Tipologie di Dati Raccolti</h2>
                            <p>Raccogliamo diverse tipologie di dati personali, a seconda dell'utilizzo che fai del nostro sito web e dei nostri servizi:</p>

                            <div style={{ marginTop: '1.5rem' }}>
                                <h3 style={{ color: '#000', fontSize: '1.1rem', marginBottom: '0.5rem' }}>2.1 Dati forniti volontariamente</h3>
                                <p>
                                    Quando compili i nostri moduli di contatto, richiedi informazioni o sottoscrivi i nostri servizi, potresti fornirci: nome e cognome, indirizzo email, numero di telefono, ragione sociale e partita IVA (per aziende), indirizzo postale, altre informazioni che scegli di comunicarci.
                                </p>
                            </div>

                            <div style={{ marginTop: '1.5rem' }}>
                                <h3 style={{ color: '#000', fontSize: '1.1rem', marginBottom: '0.5rem' }}>2.2 Dati raccolti automaticamente</h3>
                                <p>
                                    Durante la navigazione sul nostro sito web, raccogliamo automaticamente alcune informazioni tramite cookie e tecnologie simili: indirizzo IP, tipo di browser e sistema operativo, pagine visitate e durata della visita, sorgente di riferimento, dati di interazione con il sito.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 style={{ color: '#000', fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid #EEE', paddingBottom: '10px' }}>3. Finalità del Trattamento</h2>
                            <p>I tuoi dati vengono utilizzati per:</p>
                            <ul style={{ paddingLeft: '20px', marginTop: '1rem' }}>
                                <li>Fornire e gestire i servizi richiesti.</li>
                                <li>Rispondere a richieste di assistenza o informazioni.</li>
                                <li>Migliorare l'esperienza di navigazione sul sito.</li>
                                <li>Adempiere ad obblighi legali, contabili e fiscali.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 style={{ color: '#000', fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px solid #EEE', paddingBottom: '10px' }}>4. I Tuoi Diritti</h2>
                            <p>
                                In conformità al GDPR, hai il diritto di accedere ai tuoi dati, chiederne la rettifica, la cancellazione ("diritto all'oblio"), la limitazione del trattamento opporti al trattamento stesso. Puoi esercitare tali diritti contattandoci all'indirizzo email: <strong>info@b2vibe.com</strong>.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer onCookieClick={onCookieClick} />
        </div>
    );
};

export default PrivacyPolicy;
