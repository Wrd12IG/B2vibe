import React, { useEffect } from 'react';
import { Navbar, Footer, SectionTitle, BackToTop } from '../components/SharedLayout';

const PrivacyPolicy = ({ onContactClick, onCookieClick }) => {
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
                    badge="Legal Area"
                    title="Informativa Privacy"
                    subtitle="ai sensi degli artt. 13-14 del Regolamento UE 2016/679 (GDPR)"
                />

                <div className="policy-content" style={{ color: 'var(--muted)', lineHeight: 1.8, display: 'grid', gap: '2.5rem' }}>
                    <p style={pStyle}>
                        La presente informativa descrive le modalità di trattamento dei dati personali degli utenti che consultano il sito web https://www.b2vibe.com (di seguito, il "Sito").
                    </p>

                    <section>
                        <h3 style={sTitle}>1. Titolare del trattamento</h3>
                        <p style={pStyle}>
                            Il Titolare del trattamento dei dati personali è B2Vibe S.r.l., con sede legale in Italia. Per esercitare i diritti previsti dalla normativa o per qualsiasi richiesta inerente il trattamento dei dati personali, è possibile contattare il Titolare all'indirizzo email: <strong>privacy@b2vibe.com</strong>.
                        </p>
                    </section>

                    <section>
                        <h3 style={sTitle}>2. Dati raccolti e finalità del trattamento</h3>
                        
                        <h4 style={{ color: 'var(--white)', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.5rem' }}>2.1 Dati di navigazione</h4>
                        <p style={pStyle}>
                            I sistemi informatici e le procedure software preposte al funzionamento del Sito acquisiscono, nel corso del loro normale esercizio, alcuni dati personali la cui trasmissione è implicita nell'uso dei protocolli di comunicazione di Internet. Si tratta di informazioni che non sono raccolte per essere associate a interessati identificati, ma che per loro stessa natura potrebbero, attraverso elaborazioni ed associazioni con dati detenuti da terzi, permettere di identificare gli utenti.
                        </p>
                        <p style={pStyle}>
                            In questa categoria rientrano gli indirizzi IP, gli indirizzi in notazione URI (Uniform Resource Identifier) delle risorse richieste, l'orario della richiesta, il metodo utilizzato nel sottoporre la richiesta al server, la dimensione del file ottenuto in risposta, il codice numerico indicante lo stato della risposta data dal server ed altri parametri relativi al sistema operativo e all'ambiente informatico dell'utente.
                        </p>
                        <ul style={{ paddingLeft: '20px', marginBottom: '1rem' }}>
                            <li><strong>Finalità:</strong> questi dati vengono utilizzati al solo fine di ricavare informazioni statistiche anonime sull'uso del Sito e per controllarne il corretto funzionamento.</li>
                            <li><strong>Base giuridica:</strong> legittimo interesse del Titolare (art. 6, par. 1, lett. f GDPR).</li>
                        </ul>

                        <h4 style={{ color: 'var(--white)', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.5rem' }}>2.2 Cookie</h4>
                        <p style={pStyle}>
                            Il Sito utilizza esclusivamente cookie tecnici, necessari per garantire la normale navigazione e la fruizione del sito web. Tali cookie non richiedono il preventivo consenso dell'utente. Per maggiori informazioni si rimanda alla Cookie Policy disponibile sul Sito.
                        </p>

                        <h4 style={{ color: 'var(--white)', fontWeight: 700, marginTop: '1.5rem', marginBottom: '0.5rem' }}>2.3 Dati forniti volontariamente dall'utente</h4>
                        <p style={pStyle}>
                            L'invio facoltativo, esplicito e volontario di messaggi agli indirizzi di contatto del Titolare, nonché la compilazione e l'invio di form presenti sul Sito, comportano l'acquisizione dei dati di contatto del mittente, necessari a rispondere, nonché di tutti i dati personali inclusi nelle comunicazioni.
                        </p>
                        <ul style={{ paddingLeft: '20px', marginBottom: '1rem' }}>
                            <li><strong>Finalità:</strong> gestione delle richieste di informazioni, assistenza clienti, invio di comunicazioni commerciali (previo consenso ove richiesto).</li>
                            <li><strong>Base giuridica:</strong> esecuzione di misure precontrattuali adottate su richiesta dell'interessato (art. 6, par. 1, lett. b GDPR), consenso (art. 6, par. 1, lett. a GDPR) per finalità di marketing.</li>
                        </ul>
                    </section>

                    <section>
                        <h3 style={sTitle}>3. Modalità del trattamento</h3>
                        <p style={pStyle}>
                            I dati personali sono trattati con strumenti automatizzati per il tempo strettamente necessario a conseguire gli scopi per cui sono stati raccolti. Il Titolare adotta misure di sicurezza tecniche e organizzative adeguate a proteggere i dati da accessi non autorizzati, distruzione, perdita, modifica o divulgazione non autorizzata.
                        </p>
                    </section>

                    <section>
                        <h3 style={sTitle}>4. Periodo di conservazione</h3>
                        <p style={pStyle}>
                            I dati personali saranno conservati per il tempo necessario al perseguimento delle finalità sopra indicate e, comunque, per non oltre 10 anni dalla cessazione del rapporto, salvo diversi obblighi di legge. I dati di navigazione vengono cancellati immediatamente dopo l'elaborazione statistica.
                        </p>
                    </section>

                    <section>
                        <h3 style={sTitle}>5. Comunicazione e diffusione dei dati</h3>
                        <p style={pStyle}>I dati personali potranno essere comunicati a:</p>
                        <ul style={{ paddingLeft: '20px', marginBottom: '1rem' }}>
                            <li>soggetti terzi che forniscono servizi per la gestione del sistema informatico e per la gestione del Sito (hosting provider, fornitori di servizi di manutenzione);</li>
                            <li>consulenti e professionisti esterni (commercialisti, consulenti legali, etc.);</li>
                            <li>autorità pubbliche o di vigilanza, per adempiere a obblighi di legge.</li>
                        </ul>
                        <p style={pStyle}>I dati personali non saranno oggetto di diffusione.</p>
                    </section>

                    <section>
                        <h3 style={sTitle}>6. Trasferimento dei dati verso Paesi extra-UE</h3>
                        <p style={pStyle}>
                            I dati raccolti potranno essere trasferiti verso Paesi situati al di fuori dello Spazio Economico Europeo. In tal caso, il Titolare assicura che il trasferimento avverrà in conformità alle disposizioni normative applicabili, adottando clausole contrattuali standard approvate dalla Commissione Europea o avvalendosi di altre garanzie adeguate.
                        </p>
                    </section>

                    <section>
                        <h3 style={sTitle}>7. Diritti dell'interessato</h3>
                        <p style={pStyle}>
                            Gli interessati hanno il diritto di ottenere dal Titolare, nei casi previsti, l'accesso ai propri dati personali, la rettifica, la cancellazione degli stessi, la limitazione del trattamento che li riguarda o di opporsi al loro trattamento, oltre al diritto alla portabilità dei dati. Tali diritti possono essere esercitati mediante richiesta scritta indirizzata a <strong>privacy@b2vibe.com</strong> in conformità con gli artt. 15-22 del GDPR.
                        </p>
                    </section>

                    <section>
                        <h3 style={sTitle}>8. Modifiche alla presente informativa</h3>
                        <p style={pStyle}>
                            Il Titolare si riserva il diritto di modificare, aggiornare, aggiungere o rimuovere parti della presente informativa a propria discrezione e in qualsiasi momento. L'interessato è tenuto a verificare periodicamente eventuali modifiche. L'uso continuato del Sito in seguito alla pubblicazione di modifiche costituisce accettazione di tali modifiche.
                        </p>
                    </section>
                </div>
            </main>

            <style>{`
                .policy-content li {
                    margin-bottom: 4px;
                    line-height: 1.6;
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

export default PrivacyPolicy;
