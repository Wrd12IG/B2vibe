import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { B2VibeLogo } from './Logo';
import { Linkedin, Instagram, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(progress);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (!isHome) {
            setActiveSection('');
            return;
        }

        const sections = ['problema', 'chi-siamo', 'partner', 'presidio', 'vantaggi', 'calcolatore', 'servizi'];
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
        { name: 'Sfida', id: 'problema' },
        { name: 'DNA', id: 'chi-siamo' },
        { name: 'Target', id: 'partner' },
        { name: 'Global', id: 'presidio' },
        { name: 'Vantaggi', id: 'vantaggi' },
        { name: 'Savings', id: 'calcolatore' },
        { name: 'Pilastri', id: 'servizi' },
        { name: 'Guida MoR', path: '/merchant-of-record-guida' },
    ];

    return (
        <div style={{
            position: 'fixed',
            top: '20px',
            left: 0,
            width: '100%',
            zIndex: 1000,
            padding: '0 clamp(16px, 4vw, 24px)'
        }}>
            <nav className="navbar-container" style={{
                maxWidth: '1300px',
                margin: '0 auto',
                padding: '10px clamp(16px, 3vw, 28px)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'rgba(255, 255, 255, 0.85)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid var(--border)',
                borderRadius: '24px',
                boxShadow: '0 8px 32px rgba(0,0,0,0.06)',
                width: '100%',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Scroll Progress Bar */}
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, var(--primary), transparent)',
                    width: `${scrollProgress}%`,
                    transition: 'width 0.1s linear',
                    opacity: 0.8
                }} />

                <RouterLink to="/" onClick={closeMobileMenu} style={{ display: 'flex', alignItems: 'center', flexShrink: 0, textDecoration: 'none', zIndex: 10 }}>
                    <B2VibeLogo height={20} style={{ color: '#000' }} />
                </RouterLink>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <div style={{ display: 'flex', gap: '12px' }} className="nav-desktop-links">
                        {links.map(link => (
                            link.path ? (
                                <RouterLink
                                    key={link.path}
                                    to={link.path}
                                    className="nav-link"
                                    style={{
                                        textDecoration: 'none',
                                        color: location.pathname === link.path ? 'var(--primary)' : 'var(--dark)',
                                        fontSize: '10.5px',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        transition: 'all 0.3s',
                                        letterSpacing: '0.05em'
                                    }}
                                >
                                    {link.name}
                                </RouterLink>
                            ) : (
                                <a
                                    key={link.id}
                                    href={`/#${link.id}`}
                                    className="nav-link"
                                    style={{
                                        textDecoration: 'none',
                                        color: activeSection === link.id ? 'var(--primary)' : 'var(--dark)',
                                        fontSize: '10.5px',
                                        fontWeight: 700,
                                        textTransform: 'uppercase',
                                        transition: 'all 0.3s',
                                        letterSpacing: '0.05em'
                                    }}
                                >
                                    {link.name}
                                </a>
                            )
                        ))}
                    </div>

                    <button
                        className="primary"
                        onClick={onContactClick}
                        style={{
                            boxShadow: 'none',
                            padding: '10px 18px',
                            fontSize: '10px',
                            fontWeight: 800,
                            whiteSpace: 'nowrap',
                            borderRadius: '14px'
                        }}
                        id="nav-cta-desktop"
                    >
                        Parla con un esperto
                    </button>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        style={{
                            background: 'var(--primary-glow)',
                            border: '1px solid rgba(7,235,166,0.2)',
                            borderRadius: '12px',
                            width: '40px',
                            height: '40px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            color: 'var(--dark)',
                            zIndex: 11
                        }}
                        className="nav-mobile-toggle"
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: 'easeOut' }}
                        style={{
                            position: 'absolute',
                            top: '80px',
                            left: '24px',
                            right: '24px',
                            background: '#fff',
                            borderRadius: '24px',
                            padding: '32px',
                            boxShadow: '0 20px 50px rgba(0,0,0,0.15)',
                            border: '1px solid var(--border)',
                            zIndex: 999
                        }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            {links.map((link, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                >
                                    {link.path ? (
                                        <RouterLink
                                            to={link.path}
                                            onClick={closeMobileMenu}
                                            style={{
                                                textDecoration: 'none',
                                                fontSize: '16px',
                                                fontWeight: 700,
                                                color: location.pathname === link.path ? 'var(--primary)' : 'var(--dark)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between'
                                            }}
                                        >
                                            {link.name} <ArrowRight size={16} opacity={0.5} />
                                        </RouterLink>
                                    ) : (
                                        <a
                                            href={`/#${link.id}`}
                                            onClick={closeMobileMenu}
                                            style={{
                                                textDecoration: 'none',
                                                fontSize: '16px',
                                                fontWeight: 700,
                                                color: activeSection === link.id ? 'var(--primary)' : 'var(--dark)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'space-between'
                                            }}
                                        >
                                            {link.name} <ArrowRight size={16} opacity={0.5} />
                                        </a>
                                    )}
                                </motion.div>
                            ))}
                            <div style={{ height: '1px', background: 'var(--border)', margin: '10px 0' }} />
                            <button className="primary" onClick={() => { onContactClick(); closeMobileMenu(); }} style={{ width: '100%', justifyContent: 'center', padding: '16px' }}>
                                Parla con un esperto
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export const Footer = ({ onCookieClick, onContactClick }) => (
    <footer style={{ background: '#f8f9fa', borderTop: '1px solid var(--border)', marginTop: 'auto' }}>
        <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '48px', padding: '80px 0 56px' }} className="footer-main">

                {/* Col 1 — Brand */}
                <div>
                    <B2VibeLogo height={25} />
                    <p style={{ color: 'var(--muted)', fontSize: '13px', fontWeight: 600, marginTop: '12px', letterSpacing: '0.05em' }}>
                        Making sales effectively simple
                    </p>
                    <div style={{ display: 'flex', gap: '15px', marginTop: '32px' }}>
                        <a href="https://linkedin.com/company/b2vibe" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', transition: 'color 0.3s', display: 'flex' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}><Linkedin size={20} /></a>
                        <a href="https://instagram.com/b2vibe" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--muted)', transition: 'color 0.3s', display: 'flex' }} onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'} onMouseLeave={e => e.currentTarget.style.color = 'var(--muted)'}><Instagram size={20} /></a>
                    </div>
                </div>

                {/* Col 2 — Servizi */}
                <div>
                    <h5 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--dark)', marginBottom: '24px' }}>Servizi</h5>
                    <ul style={{ listStyle: 'none', padding: 0, fontSize: '13px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                        <li><a href="/#servizi" style={{ textDecoration: 'none', color: 'var(--muted)', transition: 'color 0.3s' }}>Ecommerce Management</a></li>
                        <li><a href="/#servizi" style={{ textDecoration: 'none', color: 'var(--muted)', transition: 'color 0.3s' }}>Merchant of Record</a></li>
                        <li><a href="/#servizi" style={{ textDecoration: 'none', color: 'var(--muted)', transition: 'color 0.3s' }}>Logistica e Magazzino</a></li>
                        <li><a href="/#servizi" style={{ textDecoration: 'none', color: 'var(--muted)', transition: 'color 0.3s' }}>Customer Care Multilingua</a></li>
                        <li><button onClick={onContactClick} style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0, textDecoration: 'none', color: 'var(--primary)', fontWeight: 600, fontSize: '13px' }}>Parla con un esperto ↗</button></li>
                    </ul>
                </div>

                {/* Col 3 — Contatti */}
                <div>
                    <h5 style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--dark)', marginBottom: '24px' }}>Contatti & Sede</h5>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '13px', color: 'var(--muted)' }}>
                        <div>
                            <p style={{ fontWeight: 600, color: 'var(--dark)', marginBottom: '4px' }}>Sede Legale & Info Societarie</p>
                            <p style={{ lineHeight: 1.5 }}>Via Ferdinando Santi 11/13, 20037 Paderno Dugnano (MI)</p>
                            <p>P.IVA 14234560960 | Cap. Soc. € 1.000.000</p>
                        </div>
                        <div>
                            <p style={{ fontWeight: 600, color: 'var(--dark)', marginBottom: '4px' }}>Contatti</p>
                            <p><strong>E.</strong> info@b2vibe.com</p>
                        </div>
                        <div>
                            <button onClick={onContactClick} className="btn-ghost" style={{ padding: '8px 16px', fontSize: '12px' }}>Parla con un esperto</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid var(--glass-border)', padding: '24px 0', fontSize: '11px', color: 'var(--muted)' }}>
            <div className="container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '15px' }}>
                <span>© {new Date().getFullYear()} B2Vibe S.r.l.</span>
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
