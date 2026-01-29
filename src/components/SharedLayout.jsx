import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { B2VibeLogo } from './Logo';
import { Linkedin, Instagram } from 'lucide-react';

export const SectionTitle = ({ badge, title, subtitle, align = 'left' }) => (
    <div style={{ marginBottom: '3rem', textAlign: align }}>
        <span className="badge">{badge}</span>
        <h2 className="heading-lg" style={{ marginBottom: '1rem', color: '#000' }}>{title}</h2>
        {subtitle && <p style={{ color: 'var(--muted)', fontSize: '1.2rem', maxWidth: '800px', margin: align === 'center' ? '0 auto' : '0' }}>{subtitle}</p>}
    </div>
);

export const Navbar = ({ onContactClick }) => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [activeSection, setActiveSection] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        if (!isHome) return;

        const handleScroll = () => {
            const sections = ['soluzione', 'mor', 'servizi', 'tecnologia', 'timeline'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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
            <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
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
    <footer style={{ padding: '80px 5% 20px 5%', borderTop: '1px solid var(--glass-border)', background: '#F8F9FA' }}>
        <div className="footer-grid">
            <div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <B2VibeLogo height={25} style={{ color: '#000' }} />
                </div>
                <p style={{ color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.6, maxWidth: '400px' }}>
                    Diamo vita alle tue idee digitali con passione, creatività e competenza tecnica.
                </p>
                <div style={{ display: 'flex', gap: '15px', marginTop: '2rem' }}>
                    <a href="#" style={{ color: 'var(--muted)', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}><Linkedin size={20} /></a>
                    <a href="#" style={{ color: 'var(--muted)', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}><Instagram size={20} /></a>
                </div>
            </div>
            <div>
                <h4 style={{ marginBottom: '25px', fontSize: '1.1rem', fontWeight: 800 }}>Servizi</h4>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem', color: 'var(--muted)' }}>
                    <li><RouterLink to="/merchant-of-record-guida" style={{ textDecoration: 'none', color: 'var(--primary)', fontWeight: 600 }}>Guida MoR 2026</RouterLink></li>
                    <li>Merchant of Record (MoR)</li>
                    <li>Logistica per E-Commerce</li>
                    <li>Customer Care per E-Commerce</li>
                    <li>E-Commerce Management Team</li>
                    <li>Marketplace Management</li>
                    <li>Digital Marketing</li>
                </ul>
            </div>
            <div>
                <h4 style={{ marginBottom: '25px', fontSize: '1.1rem', fontWeight: 800 }}>Contatti</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '0.95rem', color: 'var(--muted)' }}>
                    <p style={{ lineHeight: 1.5 }}>Via Ferdinando Santi 11/13,<br /> 20037 Paderno Dugnano (MI)</p>
                    <p><strong>T.</strong> +39 02 80016631</p>
                    <p><strong>E.</strong> info@b2vibe.com</p>
                </div>
            </div>
        </div>

        <div style={{ borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '30px', textAlign: 'center', fontSize: '0.75rem', color: 'var(--muted)', lineHeight: 1.8 }}>
            <p style={{ marginBottom: '5px' }}>
                | Sede Legale: Via Paradiso 5, Seregno 20831 | Sede Operativa: Via Ferdinando Santi 11/13, 20037 Paderno Dugnano (MI) |
            </p>
            <p>
                | info@b2vibe.com | 02 80016631 | P.IVA 14234560960 | Capitale sociale € 1.000.000 |
            </p>
            <p style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '10px' }}>
                <RouterLink to="/privacy-policy" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Privacy Policy</RouterLink>
                <RouterLink to="/cookie-policy" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Cookie Policy</RouterLink>
                <button onClick={onCookieClick} style={{ background: 'none', border: 'none', padding: 0, color: 'var(--muted)', cursor: 'pointer', fontSize: '0.75rem' }}>Personalizza Cookie</button>
            </p>
            <p style={{ marginTop: '15px', opacity: 0.6 }}>© 2024 B2Vibe S.r.l. All rights reserved.</p>
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
