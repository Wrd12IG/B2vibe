import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { B2VibeLogo } from './Logo';
import { Linkedin, Instagram, Menu, X, ArrowRight, Phone, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = ({ onContactClick }) => {
    const location = useLocation();
    const isHome = location.pathname === '/';
    const [activeSection, setActiveSection] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isHome) {
            setActiveSection('');
            return;
        }

        const sections = ['chi-siamo', 'target', 'servizi', 'vantaggi'];
        const observerOptions = {
            root: null,
            rootMargin: '-40% 0px -40% 0px',
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
        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) observer.observe(element);
        });

        return () => observer.disconnect();
    }, [isHome]);

    const closeMobileMenu = () => setIsMobileMenuOpen(false);

    const links = [
        { name: 'Chi siamo', id: 'chi-siamo' },
        { name: 'A chi ci rivolgiamo', id: 'target' },
        { name: 'Servizi', id: 'servizi' },
        { name: 'Vantaggi', id: 'vantaggi' }
    ];

    return (
        <>
            <nav style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0 clamp(16px, 4vw, 48px)',
                height: '64px',
                background: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'rgba(10, 10, 10, 0.8)',
                backdropFilter: 'blur(20px)',
                borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
                transition: 'all 0.3s'
            }}>
                <RouterLink to="/" onClick={closeMobileMenu} style={{ display: 'flex', alignItems: 'center', zIndex: 1010 }}>
                    <B2VibeLogo height={26} style={{ color: 'var(--white)' }} />
                </RouterLink>

                <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }}>
                    <div style={{ display: 'flex', gap: '28px' }} className="nav-desktop-links">
                        {links.map(link => (
                            <a
                                key={link.id}
                                href={`/#${link.id}`}
                                style={{
                                    textDecoration: 'none',
                                    color: activeSection === link.id ? 'var(--white)' : 'var(--muted)',
                                    fontSize: '13px',
                                    fontWeight: 500,
                                    transition: 'color 0.2s',
                                    whiteSpace: 'nowrap'
                                }}
                                onMouseEnter={e => e.currentTarget.style.color = 'var(--white)'}
                                onMouseLeave={e => e.currentTarget.style.color = activeSection === link.id ? 'var(--white)' : 'var(--muted)'}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <button
                        className="primary"
                        onClick={onContactClick}
                        style={{
                            padding: '10px 20px',
                            fontSize: '13px',
                            fontWeight: 700,
                            borderRadius: '6px'
                        }}
                        id="nav-cta-desktop"
                    >
                        Prenota una call
                    </button>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--white)',
                            cursor: 'pointer',
                            display: 'none'
                        }}
                        className="nav-mobile-toggle"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        style={{
                            position: 'fixed',
                            top: '64px',
                            left: 0,
                            right: 0,
                            background: 'var(--dark2)',
                            padding: '32px 20px',
                            borderBottom: '1px solid var(--border)',
                            zIndex: 999,
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '20px'
                        }}
                    >
                        {links.map((link, i) => (
                            <a
                                key={i}
                                href={`/#${link.id}`}
                                onClick={closeMobileMenu}
                                style={{
                                    fontSize: '16px',
                                    fontWeight: 600,
                                    color: activeSection === link.id ? 'var(--primary)' : 'var(--white)',
                                    textDecoration: 'none',
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}
                            >
                                {link.name} <ArrowRight size={18} />
                            </a>
                        ))}
                        <button className="primary" onClick={() => { onContactClick(); closeMobileMenu(); }} style={{ width: '100%', justifyContent: 'center', padding: '16px', marginTop: '10px' }}>
                            Prenota una call
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 1100px) {
                    .nav-mobile-toggle { display: block !important; }
                }
            `}</style>
        </>
    );
};

export const Footer = ({ onCookieClick }) => (
    <footer style={{ background: 'var(--dark)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 2fr', gap: '48px', padding: '72px 0' }} className="footer-main">

                {/* Col 1 — Brand */}
                <div>
                    <B2VibeLogo height={26} style={{ color: 'var(--white)' }} />
                    <p style={{ color: 'var(--muted)', fontSize: '13px', marginTop: '12px' }}>
                        Making sales effectively simple
                    </p>
                    <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                        <a href="https://linkedin.com/company/b2vibe" target="_blank" rel="noopener noreferrer" style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px',
                            border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--muted)'
                        }} className="footer-social-link"><Linkedin size={18} /></a>
                        <a href="https://instagram.com/b2vibe" target="_blank" rel="noopener noreferrer" style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px',
                            border: '1px solid var(--border)', borderRadius: '8px', color: 'var(--muted)'
                        }} className="footer-social-link"><Instagram size={18} /></a>
                    </div>
                </div>

                {/* Col 2 — Links */}
                <div>
                    <h5 style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.28)', marginBottom: '14px' }}>Servizi</h5>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <li><a href="/#servizi" style={{ color: 'var(--muted)' }}>Ecommerce Management</a></li>
                        <li><RouterLink to="/merchant-of-record-guida" style={{ color: 'var(--muted)' }}>Merchant of Record</RouterLink></li>
                        <li><a href="/#servizi" style={{ color: 'var(--muted)' }}>Logistica e Magazzino</a></li>
                        <li><a href="/#servizi" style={{ color: 'var(--muted)' }}>Customer Care</a></li>
                    </ul>
                </div>

                {/* Col 3 — Details */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '32px' }} className="footer-right-grid">
                    <div>
                        <h5 style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.28)', marginBottom: '14px' }}>Azienda</h5>
                        <div style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.9 }}>
                            <p style={{ fontWeight: 600, color: 'var(--white)', marginBottom: '4px' }}>B2VIBE S.R.L.</p>
                            <p>Via Paradiso, 5 — 20831</p>
                            <p>Seregno (MB), Italia</p>
                            <p>P.IVA 14234560960</p>
                            <p>REA MB 2767890</p>
                        </div>
                    </div>
                    <div>
                        <h5 style={{ fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.14em', color: 'rgba(255,255,255,0.28)', marginBottom: '14px' }}>Contatti</h5>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px' }}>
                            <a href="mailto:info@b2vibe.com" style={{ color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '8px' }}><Mail size={14} /> info@b2vibe.com</a>
                            <a href="tel:+390280016631" style={{ color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '8px' }}><Phone size={14} /> +39 02 80016631</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div style={{ borderTop: '1px solid var(--border)', padding: '24px 0' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
                <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.22)' }}>© {new Date().getFullYear()} B2Vibe S.r.l. — Cap. Soc. € 1.000.000</p>
                <div style={{ display: 'flex', gap: '24px' }}>
                    <RouterLink to="/privacy-policy" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>Privacy Policy</RouterLink>
                    <RouterLink to="/cookie-policy" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>Cookie Policy</RouterLink>
                </div>
            </div>
        </div>

        <style>{`
            .footer-social-link:hover { color: var(--primary) !important; border-color: rgba(46, 255, 160, 0.4) !important; }
            @media (max-width: 860px) {
                .footer-main { grid-template-columns: 1fr 1fr !important; }
                .footer-right-grid { grid-column: 1 / -1; }
            }
            @media (max-width: 520px) {
                .footer-main { grid-template-columns: 1fr !important; }
                .footer-right-grid { grid-template-columns: 1fr !important; }
            }
        `}</style>
    </footer>
);

export const SectionTitle = ({ badge, title, subtitle }) => (
    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        {badge && <span className="section-label">{badge}</span>}
        <h1 className="section-title" style={{ color: 'var(--dark)' }}>{title}</h1>
        {subtitle && <p className="section-sub" style={{ margin: '18px auto 0 auto' }}>{subtitle}</p>}
    </div>
);

export const BackToTop = () => null;
