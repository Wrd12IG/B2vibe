import React from 'react';
import { Navbar, Footer, SectionTitle, BackToTop } from '../components/PageSections';

const CookiePolicy = ({ onContactClick, onCookieClick }) => {
    return (
        <div style={{ background: '#FFF', minHeight: '100vh' }}>
            <Navbar onContactClick={onContactClick} />

            <main style={{ padding: '120px 5% 80px 5%', maxWidth: '1200px', margin: '0 auto' }}>
                <SectionTitle
                    badge="Compliance"
                    title="Cookie Policy"
                    subtitle="Gestione delle preferenze e tracciamento"
                />

                <div className="policy-content" style={{ color: 'var(--muted)', lineHeight: 1.8, display: 'grid', gap: '2.5rem' }}>
                    <p>
                        I cookie sono piccoli file di testo utilizzati per migliorare l'esperienza utente. Questa pagina spiega quali cookie utilizziamo e come gestirli.
                    </p>
                    <section>
                        <h3 style={{ color: 'var(--dark)', marginBottom: '1rem' }}>Gestione delle preferenze</h3>
                        <button className="btn-ghost" onClick={onCookieClick}>Personalizza Cookie</button>
                    </section>
                </div>
            </main>

            <BackToTop />
            <Footer onCookieClick={onCookieClick} />
        </div>
    );
};

export default CookiePolicy;
