import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { B2VibeLogo } from './Logo';
import { Linkedin, Instagram } from 'lucide-react';

export const SectionTitle = ({ badge, title, subtitle, align = 'left' }) => (
    <div className={`section-title align-${align}`}>
        <span className="badge">{badge}</span>
        <h2 className="heading-lg" style={{ marginBottom: '1rem', color: '#000' }}>{title}</h2>
        {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
);

export const Navbar = ({ onContactClick }) => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [activeSection, setActiveSection] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (!isHome) return;

        const sections = ['soluzione', 'mor', 'servizi', 'tecnologia', 'timeline'];
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach((section) => {
            const element = document.getElementById(section);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [isHome]);

    const linkStyle = (section) => ({
        color: activeSection === section ? 'var(--primary)' : '#000',
        textDecoration: 'none',
        fontSize: '0.85rem',
        fontWeight: 600,
        transition: 'color 0.3s'
    });

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    return (
        <nav className="navbar-container" style={{
            position: 'fixed',
            top: 0, width: '100%',
            padding: '15px 5%',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(15px)',
            borderBottom: '1px solid var(--glass-border)'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                <RouterLink to="/" onClick={closeMobileMenu} style={{ display: 'flex', alignItems: 'center', gap: '20px', textDecoration: 'none' }}>
                    <B2VibeLogo height={25} style={{ color: '#000' }} />
                </RouterLink>
                <div className="hide-mobile" style={{ width: '1px', height: '24px', background: 'var(--glass-border)', display: 'block' }}></div>
                <span className="outfit hide-mobile" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--muted)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                    Making sales effectively simple
                </span>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu di navigazione">
                {isMobileMenuOpen ? (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                ) : (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                )}
            </button>

            <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
                {isHome ? (
                    <>
                        <a href="#soluzione" onClick={closeMobileMenu} style={linkStyle('soluzione')}>DNA</a>
                        <a href="#mor" onClick={closeMobileMenu} style={linkStyle('mor')}>MoR</a>
                        <a href="#servizi" onClick={closeMobileMenu} style={linkStyle('servizi')}>Marketplace</a>
                        <a href="#tecnologia" onClick={closeMobileMenu} style={linkStyle('tecnologia')}>Tech</a>
                        <a href="#timeline" onClick={closeMobileMenu} style={linkStyle('timeline')}>Timeline</a>
                    </>
                ) : (
                    <RouterLink to="/" onClick={closeMobileMenu} style={{ color: '#000', textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600 }}>Home</RouterLink>
                )}
                <button className="primary" onClick={() => { onContactClick(); closeMobileMenu(); }} style={{ boxShadow: 'none' }}>Contattaci</button>
            </div>
        </nav>
    );
};

export const Footer = ({ onCookieClick }) => (
    <footer style={{ background: '#f8f9fa', borderTop: '1px solid var(--border)', marginTop: 'auto' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 5% 0' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '48px', paddingBottom: '56px' }} className="footer-main">

                {/* Col 1 — Brand */}
                <div>
                    <B2VibeLogo height={25} />
                    <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.7, maxWidth: '340px', marginTop: '16px' }}>
                        Gestiamo la complessità dell'ecommerce multicanale — amministrazione, fiscalità, logistica e customer care — per far scalare il tuo brand.
                    </p>
                    <div style={{ display: 'flex', gap: '15px', marginTop: '24px' }}>
                        <a href="https://linkedin.com/company/b2vibe" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', transition: 'color 0.3s', display: 'flex' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}><Linkedin size={20} /></a>
                        <a href="https://instagram.com/b2vibe" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', transition: 'color 0.3s', display: 'flex' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}><Instagram size={20} /></a>
                    </div>
                </div>

                {/* Col 2 — Servizi */}
                <div>
                    <h5 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--dark)', marginBottom: '24px' }}>Servizi</h5>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <li><RouterLink to="/merchant-of-record-guida" style={{ textDecoration: 'none', color: 'var(--primary)', fontWeight: 600 }}>Guida MoR 2026 ↗</RouterLink></li>
                        <li style={{ color: 'var(--muted)' }}>Merchant of Record</li>
                        <li style={{ color: 'var(--muted)' }}>Logistica & Magazzino</li>
                        <li style={{ color: 'var(--muted)' }}>Customer Care Multilingua</li>
                        <li style={{ color: 'var(--muted)' }}>Marketplace Management</li>
                        <li style={{ color: 'var(--muted)' }}>Ecommerce & Marketing</li>
                    </ul>
                </div>

                {/* Col 3 — Contatti */}
                <div>
                    <h5 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--dark)', marginBottom: '24px' }}>Contatti</h5>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '13px', color: 'var(--muted)' }}>
                        <a
                            href="https://www.google.com/maps/search/?api=1&query=Via+Ferdinando+Santi+11/13+Paderno+Dugnano"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.3s' }}
                            onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                            onMouseLeave={e => e.currentTarget.style.color = 'inherit'}
                        >
                            <p style={{ lineHeight: 1.5 }}>Via Ferdinando Santi 11/13,<br /> 20037 Paderno Dugnano (MI)</p>
                        </a>
                        <p><strong>T.</strong> +39 02 80016631</p>
                        <p><strong>E.</strong> info@b2vibe.com</p>
                        <p>P.IVA 14234560960</p>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--glass-border)', padding: '24px 5%', fontSize: '11px', color: 'var(--muted)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '15px' }}>
                <span>© {new Date().getFullYear()} B2Vibe S.r.l. — Capitale sociale € 1.000.000</span>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                    <RouterLink to="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</RouterLink>
                    <RouterLink to="/cookie-policy" style={{ color: 'inherit', textDecoration: 'none' }}>Cookie Policy</RouterLink>
                    <button onClick={onCookieClick} style={{ background: 'none', border: 'none', fontSize: 'inherit', color: 'inherit', cursor: 'pointer', padding: 0 }}>Cookie Settings</button>
                </div>
            </div>
        </div>
    </footer>
);

export const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    if (!isVisible) return null;

    return (
        <button
            onClick={scrollToTop}
            aria-label="Torna su"
            style={{
                position: 'fixed',
                bottom: '100px',
                right: '25px',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                background: '#FFF',
                border: '1px solid var(--glass-border)',
                boxShadow: '0 5px 20px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                zIndex: 999,
                transition: 'all 0.3s'
            }}
        >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 15l-6-6-6 6" />
            </svg>
        </button>
    );
};
