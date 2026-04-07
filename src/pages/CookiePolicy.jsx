import React, { useEffect } from 'react';
import { Navbar, Footer, SectionTitle, BackToTop } from '../components/SharedLayout';

const CookiePolicy = ({ onContactClick, onCookieClick }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const sTitle = { color: 'var(--white)', marginBottom: '1rem', fontSize: '1.5rem', fontWeight: 800 };
    const pStyle = { marginBottom: '0.8rem' };

    return (
        <div style={{ background: 'var(--dark)', minHeight: '100vh', color: 'var(--muted)' }}>
            <Navbar onContactClick={onContactClick} />

            <main style={{ padding: '120px 5% 80px 5%', maxWidth: '1000px', margin: '0 auto' }}>
                <SectionTitle
                    badge="Compliance"
                    title="Cookie Policy"
                    subtitle="Informativa sull'uso dei cookie"
                />

                <div className="policy-content" style={{ color: 'var(--muted)', lineHeight: 1.8, display: 'grid', gap: '2.5rem' }}>
                    <p style={pStyle}>
                        La presente Cookie Policy fornisce informazioni dettagliate sull'uso dei cookie sul sito web https://www.b2vibe.com (di seguito, il "Sito"), gestito da B2Vibe S.r.l. (di seguito, il "Titolare").
                    </p>

                    <section>
                        <h3 style={sTitle}>1. Cosa sono i cookie</h3>
                        <p style={pStyle}>
                            I cookie sono piccoli file di testo che i siti web visitati inviano al terminale dell'utente (solitamente al browser), dove vengono memorizzati per essere poi ritrasmessi agli stessi siti alla successiva visita del medesimo utente. I cookie possono essere utilizzati per diverse finalità: esecuzione di autenticazioni informatiche, monitoraggio di sessioni, memorizzazione di informazioni su specifiche configurazioni riguardanti gli utenti che accedono al server, facilitazione nella fruizione dei contenuti online, etc.
                        </p>
                    </section>

                    <section>
                        <h3 style={sTitle}>2. Tipologie di cookie utilizzati dal Sito</h3>
                        <p style={pStyle}>
                            Il Sito utilizza diverse tipologie di cookie, suddivise nelle seguenti categorie:
                        </p>

                        <h4 style={{ color: 'var(--white)', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.5rem' }}>2.1 Cookie tecnici necessari (sempre attivi)</h4>
                        <p style={pStyle}>
                            Questi cookie sono essenziali per il funzionamento del sito web. Garantiscono la navigazione, il mantenimento della sessione e la memorizzazione delle preferenze cookie dell'utente. Non possono essere disattivati e, in conformità alle disposizioni del Garante per la protezione dei dati personali, non richiedono il preventivo consenso dell'utente.
                        </p>

                        <h4 style={{ color: 'var(--white)', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.5rem' }}>2.2 Cookie analitici (opzionali)</h4>
                        <p style={pStyle}>
                            Questi cookie, attivabili solo con il consenso dell'utente, permettono di raccogliere informazioni in forma anonima su come i visitatori utilizzano il Sito. Servono a migliorare l'esperienza di navigazione e le funzionalità offerte.
                        </p>

                        <h4 style={{ color: 'var(--white)', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.5rem' }}>2.3 Cookie di marketing (opzionali)</h4>
                        <p style={pStyle}>
                            Questi cookie, attivabili solo con il consenso dell'utente, possono essere utilizzati per mostrare annunci pertinenti e misurare l'efficacia delle campagne pubblicitarie. Possono essere impostati da partner pubblicitari attraverso il nostro Sito.
                        </p>
                    </section>

                    <section>
                        <h3 style={sTitle}>3. Elenco dei cookie utilizzati</h3>
                        <p style={pStyle}>Di seguito l'elenco dei cookie utilizzati dal Sito:</p>
                        
                        <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                                <thead>
                                    <tr style={{ background: 'var(--surface)', borderBottom: '2px solid var(--border)' }}>
                                        <th style={{ padding: '12px', fontWeight: 700, color: 'var(--white)' }}>Nome Cookie</th>
                                        <th style={{ padding: '12px', fontWeight: 700, color: 'var(--white)' }}>Categoria</th>
                                        <th style={{ padding: '12px', fontWeight: 700, color: 'var(--white)' }}>Finalità</th>
                                        <th style={{ padding: '12px', fontWeight: 700, color: 'var(--white)' }}>Durata</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style={{ borderBottom: '1px solid var(--border)' }}>
                                        <td style={{ padding: '12px' }}><code>b2vibe-cookie-consent</code></td>
                                        <td style={{ padding: '12px' }}>Tecnico necessario</td>
                                        <td style={{ padding: '12px' }}>Memorizzazione delle preferenze cookie dell'utente (localStorage)</td>
                                        <td style={{ padding: '12px' }}>Persistente</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p style={pStyle}>
                            Le preferenze dell'utente vengono salvate nel browser tramite localStorage e persistono fino alla cancellazione manuale dei dati del browser o alla modifica delle preferenze tramite il pannello di gestione cookie del Sito.
                        </p>
                    </section>

                    <section>
                        <h3 style={sTitle}>4. Cookie di terze parti</h3>
                        <p style={pStyle}>
                            Allo stato attuale, il Sito non installa cookie di terze parti per finalità di marketing o pubblicitarie. Qualora in futuro venissero introdotti cookie analitici o di marketing di terze parti, essi saranno attivati solo previo consenso esplicito dell'utente, modificabile in qualsiasi momento tramite il pannello "Preferenze Cookie" accessibile dal pulsante presente in ogni pagina del Sito.
                        </p>
                    </section>

                    <section>
                        <h3 style={sTitle}>5. Come gestire i cookie</h3>
                        <p style={pStyle}>
                            Sebbene i cookie tecnici siano essenziali per il corretto funzionamento del Sito, l'utente può comunque gestire le proprie preferenze attraverso le impostazioni del proprio browser.
                        </p>
                        <p style={pStyle}>
                            La maggior parte dei browser è configurata per accettare automaticamente i cookie, ma l'utente può modificare tali impostazioni per bloccare i cookie o per essere avvisato quando un cookie viene inviato al proprio dispositivo. Si tenga presente che la disabilitazione dei cookie tecnici potrebbe compromettere o impedire l'accesso a determinate funzionalità del Sito.
                        </p>
                        <p style={pStyle}>Di seguito i link alle guide per la gestione dei cookie nei principali browser:</p>
                        <ul style={{ paddingLeft: '20px', marginBottom: '1rem', wordBreak: 'break-all' }}>
                            <li>Google Chrome: <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)' }}>https://support.google.com/chrome/answer/95647</a></li>
                            <li>Mozilla Firefox: <a href="https://support.mozilla.org/it/kb/Gestione%20dei%20cookie" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)' }}>https://support.mozilla.org/it/kb/Gestione%20dei%20cookie</a></li>
                            <li>Safari: <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)' }}>https://support.apple.com/it-it/guide/safari/sfri11471/mac</a></li>
                            <li>Microsoft Edge: <a href="https://support.microsoft.com/it-it/microsoft-edge" target="_blank" rel="noreferrer" style={{ color: 'var(--primary)' }}>https://support.microsoft.com/it-it/microsoft-edge</a></li>
                        </ul>
                    </section>

                    <section>
                        <h3 style={sTitle}>6. Riferimenti normativi</h3>
                        <p style={pStyle}>La presente Cookie Policy è redatta in conformità a:</p>
                        <ul style={{ paddingLeft: '20px', marginBottom: '1rem' }}>
                            <li>Regolamento UE 2016/679 (GDPR);</li>
                            <li>D.Lgs. 196/2003 (Codice Privacy) come modificato dal D.Lgs. 101/2018;</li>
                            <li>Provvedimento del Garante per la protezione dei dati personali dell'8 maggio 2014 pubblicato sulla G.U. n. 126 del 3 giugno 2014;</li>
                            <li>Linee guida cookie e altri strumenti di tracciamento del 10 giugno 2021 del Garante per la protezione dei dati personali.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 style={sTitle}>7. Aggiornamenti della Cookie Policy</h3>
                        <p style={pStyle}>
                            La presente Cookie Policy può essere aggiornata periodicamente. Si invita l'utente a consultare regolarmente questa pagina per prendere visione di eventuali modifiche o aggiornamenti.
                        </p>
                    </section>

                    <section>
                        <h3 style={sTitle}>8. Contatti</h3>
                        <p style={pStyle}>
                            Per qualsiasi informazione relativa alla presente Cookie Policy o per esercitare i diritti previsti dalla normativa applicabile, l'utente può contattare il Titolare del trattamento all'indirizzo email: <strong>privacy@b2vibe.com</strong>.
                        </p>
                        <p style={pStyle}>
                            Per ulteriori informazioni sul trattamento dei dati personali, si rimanda all'Informativa Privacy disponibile sul Sito.
                        </p>
                    </section>
                </div>
            </main>

            <style>{`
                .policy-content li {
                    margin-top: 0px !important;
                    margin-bottom: 0px !important;
                    padding-top: 0px !important;
                    padding-bottom: 0px !important;
                    line-height: 1.3 !important;
                }
                .policy-content ul {
                    margin-top: 4px;
                }
            `}</style>

            <BackToTop />
            <Footer onCookieClick={onCookieClick} onContactClick={onContactClick} />
        </div>
    );
};

export default CookiePolicy;
