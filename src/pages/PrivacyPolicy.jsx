import React from 'react';
import { Navbar, Footer, SectionTitle, BackToTop } from '../components/PageSections';

const PrivacyPolicy = ({ onContactClick, onCookieClick }) => {
    return (
        <div style={{ background: '#FFF', minHeight: '100vh' }}>
            <Navbar onContactClick={onContactClick} />

            <main style={{ padding: '120px 5% 80px 5%', maxWidth: '1200px', margin: '0 auto' }}>
                <SectionTitle
                    badge="Legal Area"
                    title="Informativa sulla Privacy"
                    subtitle="Aggiornata al: Gennaio 2026"
                />

                <div className="policy-content" style={{ color: 'var(--muted)', lineHeight: 1.8, display: 'grid', gap: '2.5rem' }}>
                    <p>
                        La presente Informativa sulla Privacy descrive come <strong>B2VIBE</strong> raccoglie, utilizza, condivide e protegge i dati personali degli utenti.
                    </p>
                    <section>
                        <h3 style={{ color: 'var(--dark)', marginBottom: '1rem' }}>1. Titolare del Trattamento</h3>
                        <p>B2VIBE S.r.l. - Via Ferdinando Santi 11/13, 20037 Paderno Dugnano (MI)</p>
                        <p>Email: sales@b2vibe.com</p>
                    </section>
                    {/* Contenuto semplificato per brevità, ma funzionale */}
                </div>
            </main>

            <BackToTop />
            <Footer onCookieClick={onCookieClick} />
        </div>
    );
};

export default PrivacyPolicy;
