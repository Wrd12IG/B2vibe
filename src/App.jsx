import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import {
  ArrowRight,
  ChevronRight,
  BarChart3,
  Users,
  X,
  Send,
  MessageCircle,
  Phone,
  Mail,
  Calculator,
  MessageSquare,
  HelpCircle,
  ExternalLink,
  Layers,
  Zap,
  TrendingUp,
  ShieldCheck,
  Box,
  Globe,
  Database,
  CheckCircle2,
  Linkedin,
  Instagram
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route, Link as RouterLink, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './components/SEO';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import MerchantOfRecordGuide from './pages/MerchantOfRecordGuide';
import { Navbar, Footer, SectionTitle, BackToTop } from './components/SharedLayout';
import { B2VibeLogo } from './components/Logo';


const FadeInUp = ({ children }) => <>{children}</>;

const Hero = () => (
  <section className="hero-section" style={{
    minHeight: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  }}>
    <FadeInUp>
      <div className="hero-logo-box">
        <B2VibeLogo />
      </div>
      <h1 className="heading-xl" style={{ marginBottom: '2rem', color: '#000' }}>
        Making sales effectively simple
      </h1>
    </FadeInUp>

    <FadeInUp delay={0.2}>
      <div className="hero-desc-box">
        <p style={{ fontSize: 'clamp(1rem, 4vw, 1.4rem)', color: 'var(--muted)', lineHeight: 1.6 }}>
          Siamo un <strong>e-commerce service provider</strong> ed offriamo servizi di <strong>full-outsourcing multicanale</strong> per aziende che vogliono commercializzare i propri prodotti online a livello nazionale ed internazionale.
        </p>
      </div>
    </FadeInUp>
    <div className="heartbeat-wrapper" style={{ margin: '2rem 0', width: '100%', maxWidth: '800px' }}>
      <svg viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ width: '100%', height: '60px' }}>
        <path
          d="M0,50 L440,50 Q450,40 460,50 L475,50 L480,55 L490,10 L500,90 L510,50 L525,50 Q540,35 555,50 L1000,50"
          fill="none"
          stroke="rgba(7, 235, 166, 0.1)"
          strokeWidth="2"
        />
        <path
          className="heartbeat-path"
          d="M0,50 L440,50 Q450,40 460,50 L475,50 L480,55 L490,10 L500,90 L510,50 L525,50 Q540,35 555,50 L1000,50"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  </section>
);

const Stats = () => (
  <section id="mercato">
    <SectionTitle
      badge="Market Intelligence"
      title="Un mercato dinamico e in crescita..."
      subtitle="Analisi del posizionamento e delle opportunità nel panorama e-commerce europeo."
    />
    <div className="grid-12" style={{ gridAutoRows: 'minmax(200px, auto)' }}>
      {/* Card 1: Main Stat */}
      <div className="glass-card col-span-4" style={{
        gridRow: 'span 2',
        background: 'linear-gradient(180deg, #FFF 0%, var(--surface-light) 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '400px'
      }}>
        <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.05 }}>
          <Globe size={180} />
        </div>
        <Globe size={40} color="var(--primary)" style={{ marginBottom: '2rem' }} />
        <h3 className="heading-xl mint-gradient" style={{ fontSize: '4rem', marginBottom: '1rem' }}>+86.000</h3>
        <p style={{ fontWeight: 700, color: 'var(--foreground)', fontSize: '1.1rem', textWrap: 'balance' }}>Seller attivi <span className="no-break">Amazon in Europa</span></p>
        <p style={{ color: 'var(--muted)', fontSize: '0.9rem', marginTop: '10px' }}>Volume di competitività e opportunità cross-border.</p>
      </div>

      {/* Card 2: 70% */}
      <div className="glass-card col-span-4" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        background: '#FFF'
      }}>
        <div style={{ background: 'var(--primary-glow)', padding: '15px', borderRadius: '15px' }}>
          <TrendingUp size={28} color="var(--primary)" />
        </div>
        <div>
          <h3 className="heading-lg" style={{ color: '#000', marginBottom: '0px' }}>70%</h3>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.3 }}>Fatturato e-commerce <br /> cross-border (247,5 mld €)</p>
        </div>
      </div>

      {/* Card 3: 65% */}
      <div className="glass-card col-span-4" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        background: '#FFF'
      }}>
        <div style={{ background: 'rgba(0,0,0,0.03)', padding: '15px', borderRadius: '15px' }}>
          <BarChart3 size={28} color="var(--muted)" />
        </div>
        <div>
          <h3 className="heading-lg" style={{ color: '#000', marginBottom: '0px' }}>65%</h3>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.3 }}>Aziende IT attive su <br /> almeno un marketplace</p>
        </div>
      </div>

      {/* Card 4: Marketplace count */}
      <div className="glass-card col-span-5" style={{
        background: '#121212',
        color: '#FFF',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '10px' }}>
          <Layers size={24} color="var(--primary)" />
          <h3 className="outfit" style={{ fontSize: '2.5rem', fontWeight: 800 }}>+15</h3>
        </div>
        <p style={{ opacity: 0.7, fontSize: '0.95rem', textWrap: 'balance' }}>
          Piattaforme leader gestite <span className="no-break">(Amazon, eBay, Decathlon, FNAC, etc.)</span>
        </p>
      </div>

      {/* Card 5: Media marketplace */}
      <div className="glass-card col-span-3" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        background: 'var(--surface-light)'
      }}>
        <Zap size={24} color="var(--primary)" style={{ margin: '0 auto 10px auto' }} />
        <h3 className="outfit" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#000' }}>2.3</h3>
        <p style={{ color: 'var(--muted)', fontSize: '0.85rem', textWrap: 'balance' }}>Media marketplace <br /> per <span className="no-break">azienda italiana</span></p>
      </div>
    </div>
  </section>
);

const Complexity = () => (
  <section id="complessita" style={{ background: '#FFF' }}>
    <SectionTitle
      badge="Analisi del Problema"
      title="...così come la complessità"
      subtitle="La crescita multicanale porta con sé sfide operative che possono drenare risorse preziose."
    />

    <div className="grid-12" style={{ maxWidth: '1200px', margin: '0 auto' }}>
      {/* Stat 1 */}
      <div className="glass-card col-span-4" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}><TrendingUp size={32} /></div>
        <h3 className="outfit" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#000', marginBottom: '10px' }}>15-20%</h3>
        <p style={{ color: 'var(--muted)', fontSize: '0.95rem', fontWeight: 600 }}>Margini erosi dai resi</p>
      </div>

      {/* Stat 2 */}
      <div className="glass-card col-span-4" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}><ShieldCheck size={32} /></div>
        <h3 className="outfit" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#000', marginBottom: '10px' }}>82%</h3>
        <p style={{ color: 'var(--muted)', fontSize: '0.95rem', fontWeight: 600 }}>Frenate dalla compliance</p>
      </div>

      {/* Stat 3 */}
      <div className="glass-card col-span-4" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ color: 'var(--primary)', marginBottom: '1rem' }}><Users size={32} /></div>
        <h3 className="outfit" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#000', marginBottom: '10px' }}>+1-2 FTE</h3>
        <p style={{ color: 'var(--muted)', fontSize: '0.95rem', fontWeight: 600 }}>Necessari per la gestione</p>
      </div>

      {/* Main Analysis Card */}
      <div className="analysis-card col-span-12" style={{
        padding: '3rem',
        background: '#F8F9FA',
        display: 'grid',
        alignItems: 'center'
      }}>
        <div>
          <h3 className="heading-lg" style={{ marginBottom: '1.5rem' }}>
            I marketplace non devono essere <span className="mint-gradient">pura complessità.</span>
          </h3>
          <p style={{ color: 'var(--muted)', fontSize: '1.1rem', lineHeight: 1.6 }}>
            Per scalare in modo sostenibile, il brand deve focalizzarsi su ciò che conta davvero: il prodotto e la strategia. Lascia a noi la gestione del "caos" operativo.
          </p>
        </div>
        <div style={{ background: '#FFF', padding: '2rem', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
          <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
            {[
              "Ottimizzazione costi di listing e fee",
              "Automazione fatturazione estera e IVA",
              "Logistica integrata per export e resi",
              "Compliance burocratica semplificata"
            ].map((text, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.95rem', color: '#000', fontWeight: 600 }}>
                <CheckCircle2 size={18} color="var(--primary)" /> {text}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const DNA = () => (
  <section id="soluzione" style={{ background: '#F8F9FA' }}>
    <SectionTitle
      badge="Expertise & Vision"
      title={<>Expertise consolidata nel settore <span className="no-break">e-commerce</span></>}
      subtitle="B2Vibe nasce dall'esperienza decennale di Yeppon.it, trasformando la gestione operativa di un leader di mercato in un modello di servizio full-outsourcing ad alte prestazioni."
    />

    <div className="grid-12" style={{ marginBottom: '4rem' }}>
      {[
        { val: "57 Mln €", label: "Fatturato generato nel 2024 a livello globale", icon: TrendingUp },
        { val: "+1.200", label: "Ordini gestiti giornalmente tra eshop e marketplaces", icon: Users },
        { val: "3.300", label: "Metri quadri di magazzino di proprietà a Paderno Dugnano (MI)", icon: Box }
      ].map((item, i) => (
        <div key={i} className="glass-card col-span-4" style={{ background: i === 0 ? 'var(--primary)' : '#FFF', color: i === 0 ? '#000' : 'inherit' }}>
          <item.icon size={32} style={{ marginBottom: '1.5rem', opacity: 0.8 }} />
          <h3 style={{ fontSize: '2.5rem', fontWeight: 800, marginBottom: '0.5rem' }}>{item.val}</h3>
          <p style={{ opacity: 0.8, fontSize: '1rem', lineHeight: 1.4 }}>{item.label}</p>
        </div>
      ))}
    </div>
  </section>
);

const Ecosystem = () => (
  <section id="ecosistema" style={{ textAlign: 'center', background: '#FFF' }}>
    <SectionTitle
      align="center"
      badge="Infrastruttura"
      title="Hub di Servizi Integrati"
      subtitle="Un'architettura completa per la gestione e l'automazione dei processi operativi complessi, progettata per massimizzare la scalabilità dei brand partner."
    />

    <div className="grid-12" style={{ maxWidth: '1000px', margin: '4rem auto' }}>
      {[
        {
          title: "Merchant of Record",
          icon: ShieldCheck,
          desc: "Gestione fiscale e legale completa in Europa e principali mercati esteri.",
          color: 'rgba(7, 235, 166, 0.05)'
        },
        {
          title: "Logistica & Magazzino",
          icon: Box,
          desc: "Magazzino di proprietà certificato Prime per le spedizioni Amazon.",
          color: 'rgba(0, 0, 0, 0.02)'
        },
        {
          title: "Tecnologia Avanzata",
          icon: Database,
          desc: "PIM e OMS proprietari e partnership tech strategiche per il controllo totale.",
          color: 'rgba(0, 0, 0, 0.02)'
        },
        {
          title: "Marketplace Management",
          icon: Globe,
          desc: "Integrazione multicanale con i principali Marketplace globali.",
          color: 'rgba(7, 235, 166, 0.05)'
        }
      ].map((el, i) => (
        <div key={i} className="glass-card col-span-6" style={{
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          background: el.color,
          border: '1px solid var(--glass-border)',
          borderRadius: '30px',
          padding: '3rem'
        }}>
          <div style={{ background: 'var(--primary)', width: '60px', height: '60px', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <el.icon size={30} color="#000" />
          </div>
          <div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '1rem', color: '#000' }}>{el.title}</h3>
            <p style={{ color: 'var(--muted)', fontSize: '1.1rem', lineHeight: 1.5 }}>{el.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const MerchantOfRecordSection = () => (
  <section id="mor" style={{ background: '#F8F9FA' }}>
    <div className="grid-12" style={{ alignItems: 'center', gap: '4rem' }}>
      <div className="glass-card col-span-5" style={{ background: 'var(--primary)', padding: '3rem', borderRadius: '30px', color: '#000' }}>
        <ShieldCheck size={60} style={{ marginBottom: '2rem' }} />
        <h2 className="heading-lg" style={{ marginBottom: '1.5rem', lineHeight: 1.1 }}>Financial & Compliance</h2>
        <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>Merchant of Record: gestione fiscale e legale centralizzata per l'espansione globale.</p>
      </div>
      <div className="col-span-7">
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: 1.6 }}>
          Ci occupiamo di ogni aspetto burocratico e finanziario, permettendoti di vendere in <strong>+150 nazioni</strong> senza dover aprire società locali o gestire la complessità dell'IVA internazionale.
        </p>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
          {[
            { t: "Compliance Globale", d: "Gestione IVA, tasse e regolamentazioni in oltre 150 paesi." },
            { t: "Rappresentanza Fiscale", d: "Supporto doganale e gestione della burocrazia import/export." },
            { t: "Gestione Finanziaria", d: "Incassi, billing e riconciliazioni flussi multicanale." },
            { t: "Risk Management", d: "Protezione dalle frodi e gestione dei chargeback." }
          ].map((item, i) => (
            <li key={i}>
              <CheckCircle2 color="var(--primary)" size={20} style={{ marginBottom: '10px' }} />
              <strong style={{ display: 'block', marginBottom: '5px' }}>{item.t}</strong>
              <span style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>{item.d}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const MarketplaceSection = () => (
  <section id="servizi" style={{ background: '#FFF' }}>
    <SectionTitle
      badge="Global Expansion"
      title="Presidio Multicanale Internazionale"
      subtitle="Definiamo assetti strategici per il posizionamento del brand nei principali marketplace europei e globali, gestendo integralmente il catalogo e le performance di vendita."
    />

    <div className="grid-12" style={{ marginBottom: '4rem' }}>
      {[
        { title: "All-in-one", items: ["Pricing dinamico competitivo", "A+ Content e ottimizzazione catalogo", "Gestione varianti e stock", "Advertising su marketplace"] },
        { title: "Centralizzazione e sincronizzazione", items: ["Sincronizzazione real-time stock e prezzi", "Visione unificata vendite multicanale", "Aggiornamenti automatici su ogni marketplace, riducendo errori manuali"] },
        { title: "Gestione catalogo semplificata", items: ["Creazione e gestione del catalogo prodotti da un'unica piattaforma", "Integrazione con PIM aziendale (se richiesta)", "Automazione flussi di arricchimento dati prodotto tramite tool AI partner"] }
      ].map((card, i) => (
        <div key={i} className="col-span-4" style={{ padding: '2rem', border: '2px solid var(--primary)', borderRadius: '15px' }}>
          <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>{card.title}</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {card.items.map((item, j) => (
              <li key={j} style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '8px', display: 'flex', gap: '10px' }}>
                <span style={{ color: 'var(--primary)' }}>•</span> {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    <div>
      <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2rem' }}>
        <ChevronRight color="var(--primary)" /> Principali canali gestiti
      </h4>
      <div className="channels-grid">
        {["Shopify", "Amazon Prime", "eBay", "FNAC", "Stockly", "Leroy Merlin", "Kaufland", "Decathlon"].map((p, i) => (
          <span key={i} className="channel-item outfit">{p.toUpperCase()}</span>
        ))}
      </div>
    </div>
  </section>
);

const CustomerCareSection = () => (
  <section style={{ background: '#F8F9FA' }}>
    <div className="grid-12" style={{ alignItems: 'start' }}>
      <div className="col-span-7">
        <h2 className="heading-lg" style={{ marginBottom: '2rem' }}>Customer Care</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
          Disponiamo di un <strong>team interno multicanale</strong> con una profonda conoscenza delle tematiche e-commerce, sia sul sito proprietario che su marketplace.
        </p>
        <p style={{ fontSize: '1.1rem', lineHeight: 1.6 }}>
          L'utilizzo dell'<strong>intelligenza artificiale</strong> addestrata ed integrata negli strumenti che utilizziamo regolarmente, ci permette di assistere il cliente in <strong>tutte le lingue</strong>.
        </p>
      </div>
      <div className="col-span-5">
        <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2rem' }}>
          <ChevronRight color="var(--primary)" /> Attività principali
        </h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            "Assistenza 5+ lingue (IT, EN, DE, FR, ES) e altre tramite tool automatizzato e personale dedicato",
            "Gestione ticketing (email, chat) con Zendesk Enterprise",
            "Supporto pre e post vendita",
            "Monitoraggio e gestione SLA (su richiesta)",
            "Reportistica e analisi dati su misura",
            "First contact resolution: 92%"
          ].map((item, i) => (
            <li key={i} style={{ marginBottom: '12px', display: 'flex', gap: '10px', fontSize: '0.95rem', color: 'var(--muted)' }}>
              <span style={{ color: 'var(--primary)' }}>•</span> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className="grid-12" style={{ marginTop: '4rem' }}>
      {/* Dashboard 1: Sales Performance */}
      <div className="glass-card col-span-6" style={{ background: '#FFF', padding: '2rem', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h5 style={{ fontWeight: 800, fontSize: '0.9rem', color: '#000', textTransform: 'uppercase', letterSpacing: '1px' }}>Sales Performance</h5>
          <span style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 800, background: 'rgba(7, 235, 166, 0.1)', padding: '4px 10px', borderRadius: '50px' }}>LIVE</span>
        </div>

        <div className="dashboard-grid" style={{ marginBottom: '2rem' }}>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--muted)', display: 'block', marginBottom: '5px' }}>Total Revenue</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>€ 142,580.00</span>
            <div style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: 700, marginTop: '5px' }}>↑ 12.5% vs prev month</div>
          </div>
          <div>
            <span style={{ fontSize: '0.75rem', color: 'var(--muted)', display: 'block', marginBottom: '5px' }}>Conversion Rate</span>
            <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>3.82%</span>
            <div style={{ color: 'var(--primary)', fontSize: '0.75rem', fontWeight: 700, marginTop: '5px' }}>↑ 0.4% baseline</div>
          </div>
        </div>

        <div style={{ height: '80px', width: '100%', position: 'relative' }}>
          <svg viewBox="0 0 400 100" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
            <path
              d="M0,80 Q50,75 80,60 T140,40 T220,55 T300,30 T400,10"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="4"
              strokeLinecap="round"
            />
            <path
              d="M0,80 Q50,75 80,60 T140,40 T220,55 T300,30 T400,10 L400,100 L0,100 Z"
              fill="url(#gradient-sales)"
              opacity="0.1"
            />
            <defs>
              <linearGradient id="gradient-sales" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="var(--primary)" />
                <stop offset="100%" stopColor="white" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Dashboard 2: Support Hub */}
      <div className="glass-card col-span-6" style={{ background: '#FFF', padding: '2rem', borderRadius: '24px', border: '1px solid var(--glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h5 style={{ fontWeight: 800, fontSize: '0.9rem', color: '#000', textTransform: 'uppercase', letterSpacing: '1px' }}>Support Center Hub</h5>
          <div style={{ display: 'flex', gap: '8px' }}>
            <div style={{ width: '8px', height: '8px', background: 'var(--primary)', borderRadius: '50%' }}></div>
            <div style={{ width: '8px', height: '8px', background: 'rgba(0,0,0,0.1)', borderRadius: '50%' }}></div>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '1.2rem' }}>
          {[
            { label: "Pending Tickets", val: "12", color: "#FF4D4D", percent: 15 },
            { label: "In Resolution", val: "48", color: "var(--primary)", percent: 65 },
            { label: "Resolved Today", val: "124", color: "#000", percent: 100 }
          ].map((item, i) => (
            <div key={i}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.85rem' }}>
                <span style={{ fontWeight: 600 }}>{item.label}</span>
                <span style={{ fontWeight: 800 }}>{item.val}</span>
              </div>
              <div style={{ height: '6px', background: 'rgba(0,0,0,0.05)', borderRadius: '10px', overflow: 'hidden' }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.percent}%` }}
                  transition={{ duration: 1.5, delay: i * 0.2 }}
                  style={{ height: '100%', background: item.color }}
                />
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-around', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '1.5rem' }}>
          <div style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: '1.1rem', fontWeight: 800 }}>98%</span>
            <span style={{ fontSize: '0.65rem', color: 'var(--muted)', textTransform: 'uppercase' }}>CSAT</span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: '1.1rem', fontWeight: 800 }}>45m</span>
            <span style={{ fontSize: '0.65rem', color: 'var(--muted)', textTransform: 'uppercase' }}>Avg Reply</span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ display: 'block', fontSize: '1.1rem', fontWeight: 800 }}>92%</span>
            <span style={{ fontSize: '0.65rem', color: 'var(--muted)', textTransform: 'uppercase' }}>FCR</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const LogisticsSection = () => (
  <section id="logistica" style={{ background: '#F8F9FA' }}>
    <SectionTitle
      badge="Logistica e Magazzino"
      title={<>Soluzioni <span className="no-break">tailor-made</span> per la tua merce</>}
      subtitle="Oltre 3.300 mq di magazzino di proprietà certificato per spedizioni Amazon Prime."
    />
    <div className="grid-12" style={{ gap: '5rem' }}>
      <div className="col-span-6">
        <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2rem' }}>
          <ChevronRight color="var(--primary)" /> Attività principali
        </h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            "Ricezione merce e controllo qualità",
            "Preparazione ordini (picking)",
            "Gestione dei resi",
            "Gestione dell'inventario e stoccaggio",
            "Imballaggio e confezionamento",
            "Conteggio ciclico e inventario fisico",
            "Spedizione verso punti di ritiro e gestione resi"
          ].map((item, i) => (
            <li key={i} style={{ marginBottom: '10px', display: 'flex', gap: '10px', color: 'var(--muted)' }}>
              <span style={{ color: 'var(--primary)' }}>•</span> {item}
            </li>
          ))}
        </ul>
        <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: 'var(--muted)' }}>
          Per i marketplace di <strong>Amazon Europa</strong>, garantiamo il servizio <strong>Prime</strong> nella <strong>spedizione</strong> dal magazzino Italia.
        </p>
      </div>
      <div className="col-span-6">
        <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2rem' }}>
          <ChevronRight color="var(--primary)" /> Servizi taylor-made
        </h4>
        <div style={{ marginBottom: '2rem' }}>
          <strong style={{ display: 'block', marginBottom: '10px' }}>Ottimizzazione supply chain</strong>
          <ul style={{ listStyle: 'none', padding: '0 0 0 10px', borderLeft: '2px solid var(--primary)' }}>
            {["Integrazione sistemi e automazione flussi", "Business intelligence e analisi dati", "Efficientamento operazioni di magazzino", "Coordinamento strategico lato stock"].map((t, i) => (
              <li key={i} style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '5px' }}>{t}</li>
            ))}
          </ul>
        </div>
        <div style={{ marginBottom: '2rem' }}>
          <strong style={{ display: 'block', marginBottom: '10px' }}>Soluzioni di spedizione e consegna</strong>
          <ul style={{ listStyle: 'none', padding: '0 0 0 10px', borderLeft: '2px solid var(--primary)' }}>
            {["Servizi di corriere premium", "Instradamento ottimale basato su costi/tempi", "Procedure doganali e reintroduzione in franchigia"].map((t, i) => (
              <li key={i} style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '5px' }}>{t}</li>
            ))}
          </ul>
        </div>
        <div>
          <strong style={{ display: 'block', marginBottom: '10px' }}>Servizi accessori white-gloves</strong>
          <ul style={{ listStyle: 'none', padding: '0 0 0 10px', borderLeft: '2px solid var(--primary)' }}>
            {["Definizione linee guida imballaggio", "Imballaggi personalizzati con brand"].map((t, i) => (
              <li key={i} style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '5px' }}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const TimelineSection = () => (
  <section id="timeline" style={{ background: '#F8F9FA' }}>
    <h2 className="heading-lg" style={{ marginBottom: '4rem' }}>Partnership Roadmap & Economics</h2>
    <div className="grid-12" style={{ gap: '5rem' }}>
      <div className="col-span-6">
        {[
          {
            step: "1",
            title: "Onboarding & set up (4-5 settimane)",
            items: ["Analisi forecast e KPI per canale", "Configurazione e integrazione B2Vibe Admin", "Set up amministrativo e customer care", "Set up informazioni prodotto per dogane e import/export", "Set up logistico e magazzino"]
          },
          {
            step: "2",
            title: "Go-live e gestione quotidiana (> 12 mesi)",
            items: ["Prodotti live sui marketplace scelti", "Gestione catalogo, pricing e stock", "Promozioni e ottimizzazione schede prodotto", "Customer care di primo livello su tutti i canali attivi", "Gestione spedizioni e resi", "Reportistica periodica e allineamento su KPI"]
          },
          {
            step: "3",
            title: "Evolutive Brand & Marketing",
            items: ["Strategie di prodotto diversificate", "Apertura nuovi mercati e/o canali di vendita", "Attività di advertising e brand building", "Allineamento con aggiornamenti del brand"]
          }
        ].map((t, i) => (
          <div key={i} style={{ display: 'flex', gap: '20px', marginBottom: '3rem', position: 'relative' }}>
            <div style={{ background: 'var(--primary)', width: '40px', height: '40px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', flexShrink: 0 }}>{t.step}</div>
            <div>
              <h4 style={{ marginBottom: '15px' }}>{t.title}</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {t.items.map((item, j) => (
                  <li key={j} style={{ fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '5px' }}>• {item}</li>
                ))}
              </ul>
            </div>
            {i < 2 && <div style={{ position: 'absolute', top: '40px', left: '20px', width: '2px', height: 'calc(100% + 1rem)', background: 'var(--primary)', opacity: 0.3 }}></div>}
          </div>
        ))}
      </div>
      <div className="col-span-6">
        <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2rem' }}>
          <ChevronRight color="var(--primary)" /> Economics
        </h4>
        {[
          { title: "Merchant of Record", items: ["Costo per set up del canale e definizione strategia multicanale", "Costo gestione semi-variabile, con un minimo di gestione e un variabile in funzione del fatturato generato"] },
          { title: "Customer Care", items: ["Costo del set up e formazione", "Costo variabile per customer care di primo livello (email/chat) - rapporto conversazioni/ordini 1:2 inclusi nel variabile", "Gestione tramite operatore inclusa nei marketplace", "Supporto tool AI per gestione conversazioni, traduzione e reportistica multicanale inclusi"] },
          { title: "Logistica e magazzino", items: ["Costo per set up spazio magazzino e flussi in/out", "Apertura account con spedizionieri a seconda delle necessità/mercati incluso nel set up", "Costo semi-variabile per gestione logistica e magazzino"] }
        ].map((eco, i) => (
          <div key={i} style={{ marginBottom: '2.5rem' }}>
            <strong style={{ display: 'block', marginBottom: '10px' }}>{eco.title}</strong>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {eco.items.map((item, j) => (
                <li key={j} style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '8px' }}>• {item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const TechnologySection = () => (
  <section id="tecnologia" style={{ background: '#FFF' }}>
    <div className="grid-12" style={{ alignItems: 'center', gap: '4rem' }}>
      <div className="col-span-7">
        <SectionTitle
          badge="Asset Digitali"
          title={<>B2VIBE ADMIN | <span className="no-break">PIM & OMS & B.I.</span></>}
          subtitle="Il nostro stack tecnologico proprietario per la gestione integrata e scalabile del business multicanale."
        />
        <p style={{ fontSize: '1.1rem', color: 'var(--muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
          Sviluppata internamente, la nostra piattaforma permette di gestire l'intero ciclo di vita del prodotto e dell'ordine:
        </p>
        <div className="grid-12" style={{ gap: '1.5rem', marginTop: '2rem' }}>
          {[
            { t: "PIM Integrato", d: "Centralizzazione dati prodotto e arricchimento AI." },
            { t: "OMS Avanzato", d: "Gestione ordini multicanale e sincronizzazione stock." },
            { t: "Business Intelligence", d: "Reportistica real-time e analisi predittiva." },
            { t: "API Ready", d: "Integrazione nativa con ERP, E-shop e Marketplace." }
          ].map((item, i) => (
            <div key={i} className="col-span-6">
              <div style={{ padding: '1.5rem', background: 'var(--surface)', borderRadius: '15px', height: '100%', border: '1px solid var(--glass-border)' }}>
                <strong style={{ display: 'block', color: '#000', marginBottom: '8px', fontSize: '1rem' }}>{item.t}</strong>
                <span style={{ fontSize: '0.9rem', color: 'var(--muted)', lineHeight: 1.4 }}>{item.d}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-5" style={{ position: 'relative' }}>
        <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '2rem' }}>
          <ChevronRight color="var(--primary)" /> Technology Partners
        </h4>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', alignItems: 'center', justifyContent: 'center', opacity: 0.6 }}>
          {[
            "Amazon Ads", "CommerceClarity", "Poleepo",
            "Qapla", "Zendesk", "Scalapay", "Heres"
          ].map((p, i) => (
            <span key={i} className="outfit" style={{ fontSize: '1.1rem', fontWeight: 800 }}>{p.toUpperCase()}</span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const Comparison = () => (
  <section style={{ background: '#F8F9FA' }}>
    <div className="grid-12" style={{ alignItems: 'start', gap: '6rem' }}>
      <div className="col-span-6">
        <SectionTitle
          badge="Il Vantaggio"
          title="Tu pensi al brand, noi a tutto il resto."
        />
        <div style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="glass-card" style={{ background: '#FFF', padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.2rem', alignItems: 'flex-start', gap: '20px' }}>
              <span style={{ fontWeight: 700, fontSize: '1.1rem', lineHeight: 1.3, flex: 1 }}>
                Riduzione carico <span className="no-break">operativo interno</span>
              </span>
              <div style={{ background: 'var(--primary)', padding: '5px 15px', borderRadius: '50px', fontWeight: 800, fontSize: '1.2rem', whiteSpace: 'nowrap', flexShrink: 0 }}>
                +80%
              </div>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>
              Affidandoti ad un ecommerce service provider <span className="no-break">come B2Vibe</span>
            </p>
          </div>
          <div className="glass-card" style={{ background: '#FFF', padding: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.2rem', alignItems: 'flex-start', gap: '20px' }}>
              <span style={{ fontWeight: 700, fontSize: '1.1rem', lineHeight: 1.3, flex: 1 }}>
                Risparmio rispetto a <span className="no-break">gestione Seller FBA</span>
              </span>
              <div style={{ background: 'var(--primary)', padding: '5px 15px', borderRadius: '50px', fontWeight: 800, fontSize: '1.2rem', whiteSpace: 'nowrap', flexShrink: 0 }}>
                18-25%
              </div>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.5 }}>
              Gestione FBM con magazzino ottimizzato <span className="no-break">"Prime-ready"</span>
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-6">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
          <div style={{ marginBottom: '1rem' }}>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem', marginBottom: '1.5rem', color: '#FF4D4D' }}>
              <Zap size={20} /> Gestione In-House
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {["Apertura e gestione IVA estere", "Costi commercialista per gestione DTC", "2 FTE amministrativo/logistica/c.c.", "Rischio compliance e blocco account", "IT e tech stack per canali di vendita"].map((v, i) => (
                <li key={i} style={{ color: 'var(--muted)', display: 'flex', gap: '10px' }}>• {v}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
              <Zap size={20} /> Gestione B2Vibe
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {["Costi semi-variabili", "Zero burocrazia", "Focus sul core-business", "100% compliant", "Spedizione \"Prime\" per Amazon"].map((v, i) => (
                <li key={i} style={{ fontSize: '1rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <CheckCircle2 color="var(--primary)" size={18} /> {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TeamSection = () => (
  <section id="team" style={{ background: '#FFF' }}>
    <SectionTitle
      badge="Corporate Governance"
      title="Leadership & Strategic Hub"
      subtitle="Un team di esperti con visione strategica e competenze operative decennali nel settore e-commerce."
    />
    <div className="grid-12" style={{ gap: '3rem', marginTop: '4rem' }}>
      {[
        {
          name: "Danilo Longo",
          role: "General Manager",
          email: "danilo.longo@b2vibe.com",
          desc: "Expert e-commerce strategist con oltre 15 anni di esperienza nella scalata di brand internazionali e gestione di marketplace complessi."
        },
        {
          name: "Giulio Stocco",
          role: "Business Unit Manager",
          email: "giulio.stocco@b2vibe.com",
          desc: "Specialista in operations e logistica integrata, focalizzato sull'efficienza dei processi e-commerce e customer satisfaction."
        }
      ].map((member, i) => (
        <div
          key={i}
          className="glass-card col-span-6"
          style={{ background: '#F8F9FA' }}
        >
          <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', fontWeight: 800 }}>
            {member.name.split(' ').map(n => n[0]).join('')}
          </div>
          <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>{member.name}</h3>
          <p style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.9rem', marginBottom: '1rem' }}>{member.role}</p>
          <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>{member.desc}</p>
          <a href={`mailto:${member.email}`} style={{ color: 'var(--foreground)', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            {member.email} <ExternalLink size={14} />
          </a>
        </div>
      ))}
    </div>
  </section>
);

const NextSteps = ({ onContactClick }) => (
  <section style={{ textAlign: 'center', borderTop: '1px solid var(--glass-border)', background: '#F8F9FA' }}>
    <h2 className="heading-lg" style={{ marginBottom: '2rem' }}>Pronto a scalare il tuo business?</h2>
    <p style={{ color: 'var(--muted)', marginBottom: '3rem', fontSize: '1.1rem' }}>Il nostro percorso per il tuo successo internazionale</p>

    <div className="steps-container">
      {[
        { n: "1", t: "Call Strategica", s: "30' di confronto" },
        { n: "2", t: "Analisi Catalogo", s: "GMV forecast" },
        { n: "3", t: "Proposta Commerciale", s: "Modello win-win" }
      ].map((step, i) => (
        <React.Fragment key={i}>
          <div style={{ textAlign: 'left' }}>
            <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>{step.n}.</span>
            <span style={{ color: '#000', fontWeight: 700, display: 'block' }}>{step.t}</span>
            <span style={{ fontSize: '0.8rem', color: 'var(--muted)' }}>{step.s}</span>
          </div>
          {i < 2 && <div className="steps-arrow" style={{ alignSelf: 'center' }}><ChevronRight color="var(--muted)" /></div>}
        </React.Fragment>
      ))}
    </div>

    <div style={{ marginTop: '4rem' }}>
      <button className="primary" onClick={onContactClick} style={{ padding: '18px 45px', fontSize: '1.1rem' }}>Prenota la tua Call Strategica</button>
    </div>
  </section>
);
const QuoteModal = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const nextStep = (e) => {
    e?.preventDefault();
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.8)',
            backdropFilter: 'blur(10px)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            onClick={e => e.stopPropagation()}
            style={{
              background: '#FFF',
              width: '100%',
              maxWidth: '500px',
              borderRadius: '24px',
              padding: '2rem 1.5rem',
              position: 'relative',
              border: '2px solid var(--primary)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
              maxHeight: '90vh',
              overflowY: 'auto'
            }}
          >
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(0, 0, 0, 0.05)',
                border: 'none',
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#000',
                cursor: 'pointer',
                zIndex: 10
              }}
            >
              <X size={18} />
            </button>

            {/* Progress Bar */}
            <div style={{ display: 'flex', gap: '8px', marginBottom: '2rem', marginTop: '10px' }}>
              {[1, 2, 3, 4].map((s) => (
                <div key={s} style={{
                  flex: 1,
                  height: '4px',
                  background: s <= step ? 'var(--primary)' : 'rgba(0,0,0,0.05)',
                  borderRadius: '2px',
                  transition: 'all 0.3s'
                }} />
              ))}
            </div>

            <form onSubmit={nextStep}>
              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.5rem' }}>Dati Richiedente</h2>
                  <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Inserisci i tuoi recapiti aziendali.</p>
                  <div style={{ display: 'grid', gap: '1rem' }}>
                    <div className="grid-12" style={{ gap: '1rem' }}>
                      <input type="text" placeholder="Nome" className="col-span-6" style={inputStyles} required />
                      <input type="text" placeholder="Cognome" className="col-span-6" style={inputStyles} required />
                    </div>
                    <input type="email" placeholder="Email aziendale" style={inputStyles} required />
                    <div>
                      <input type="text" placeholder="Sito Web" style={inputStyles} />
                      <span style={{ fontSize: '0.7rem', color: 'var(--muted)', display: 'block', marginTop: '4px', marginLeft: '5px' }}>* Campo opzionale</span>
                    </div>
                    <button className="primary" style={{ width: '100%', padding: '15px', marginTop: '1rem' }}>Continua</button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.5rem' }}>Tempistiche</h2>
                  <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Quanto è urgente il tuo progetto?</p>
                  <div style={{ display: 'grid', gap: '10px' }}>
                    {["Urgente (subito)", "Entro 3 mesi", "Solo informazioni / Esplorativo"].map((opt) => (
                      <label key={opt} className="glass-card" style={{
                        padding: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px',
                        background: '#F8F9FA', border: '1px solid var(--glass-border)', fontSize: '0.95rem'
                      }}>
                        <input type="radio" name="timing" required /> {opt}
                      </label>
                    ))}
                    <div style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
                      <button type="button" onClick={prevStep} style={{ flex: 1, padding: '15px', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'none', cursor: 'pointer' }}>Indietro</button>
                      <button className="primary" style={{ flex: 2, padding: '15px' }}>Continua</button>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.5rem' }}>Budget</h2>
                  <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Qual è il budget allocato per l'outsourcing?</p>
                  <div style={{ display: 'grid', gap: '10px' }}>
                    {["Non so, consigliami", "5k - 15k / mese", "15k - 50k / mese", "Oltre 50k / mese", "Investimento libero"].map((opt) => (
                      <label key={opt} className="glass-card" style={{
                        padding: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px',
                        background: '#F8F9FA', border: '1px solid var(--glass-border)', fontSize: '0.95rem'
                      }}>
                        <input type="radio" name="budget" required /> {opt}
                      </label>
                    ))}
                    <div style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
                      <button type="button" onClick={prevStep} style={{ flex: 1, padding: '15px', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'none', cursor: 'pointer' }}>Indietro</button>
                      <button className="primary" style={{ flex: 2, padding: '15px' }}>Continua</button>
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                  <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '0.5rem' }}>Contatto</h2>
                  <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>Quando preferisci essere ricontattato?</p>
                  <div style={{ display: 'grid', gap: '10px' }}>
                    {["Mattina (9:00 - 12:30)", "Pomeriggio (14:30 - 18:00)", "Sera (dopo le 18:30)"].map((opt) => (
                      <label key={opt} className="glass-card" style={{
                        padding: '1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px',
                        background: '#F8F9FA', border: '1px solid var(--glass-border)', fontSize: '0.95rem'
                      }}>
                        <input type="radio" name="contact_time" required /> {opt}
                      </label>
                    ))}
                    <div style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
                      <button type="button" onClick={prevStep} style={{ flex: 1, padding: '15px', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'none', cursor: 'pointer' }}>Indietro</button>
                      <button type="button" onClick={() => { alert('Richiesta inviata!'); onClose(); }} className="primary" style={{ flex: 2, padding: '15px' }}>Invia Preventivo</button>
                    </div>
                  </div>
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const inputStyles = {
  background: '#F8F9FA',
  border: '1px solid var(--glass-border)',
  padding: '12px 18px',
  borderRadius: '12px',
  color: '#000',
  fontSize: '0.95rem',
  outline: 'none',
  width: '100%',
  fontFamily: 'Inter, sans-serif'
};

const ContactModal = ({ isOpen, onClose }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
          zIndex: 2000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={e => e.stopPropagation()}
          style={{
            background: '#FFF',
            width: '100%',
            maxWidth: '500px',
            borderRadius: '24px',
            padding: '2rem 1.5rem',
            position: 'relative',
            border: '2px solid var(--primary)',
            boxShadow: '0 30px 60px rgba(0,0,0,0.1)',
            maxHeight: '90vh',
            overflowY: 'auto'
          }}
        >
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'rgba(0, 0, 0, 0.05)',
              border: 'none',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#000',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            <X size={18} />
          </button>

          <h2 className="heading-lg" style={{ color: '#000', marginBottom: '0.5rem', fontSize: '2rem' }}>Parliamo.</h2>
          <p style={{ color: 'var(--muted)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>Raccontaci il tuo progetto e scopriamo come possiamo aiutarti a scalare.</p>

          <form style={{ display: 'grid', gap: '1rem' }}>
            <div className="grid-12" style={{ gap: '1rem' }}>
              <input type="text" placeholder="Nome" className="col-span-6" style={inputStyles} />
              <input type="text" placeholder="Cognome" className="col-span-6" style={inputStyles} />
            </div>
            <input type="email" placeholder="Email aziendale" style={inputStyles} />
            <div>
              <input type="text" placeholder="Sito Web (URL)" style={inputStyles} />
              <span style={{ fontSize: '0.7rem', color: 'var(--muted)', display: 'block', marginTop: '4px', marginLeft: '5px' }}>* Campo opzionale</span>
            </div>
            <select style={inputStyles}>
              <option value="">Servizio di interesse</option>
              <option value="marketplace">Marketplace Management</option>
              <option value="mor">Merchant of Record</option>
              <option value="logistica">Logistica & Magazzino</option>
              <option value="tecnologia">Asset Digitali / PIM</option>
            </select>
            <textarea placeholder="Il tuo obiettivo / messaggio" style={{ ...inputStyles, minHeight: '120px', resize: 'none' }} />

            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <input type="checkbox" id="privacy" style={{ marginTop: '5px' }} />
              <label htmlFor="privacy" style={{ fontSize: '0.75rem', color: 'var(--muted)' }}>
                Accetto la Privacy Policy. I tuoi dati verranno trattati con la massima riservatezza secondo le normative GDPR.
              </label>
            </div>

            <button className="primary" style={{ width: '100%', padding: '18px', fontSize: '1.1rem', marginTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              Invia Richiesta <Send size={18} />
            </button>
          </form>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

const FloatingContact = ({ onContactClick, onQuoteClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 1500 }}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            style={{
              position: 'absolute',
              bottom: '80px',
              right: 0,
              width: '320px',
              background: '#121212',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.3)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            {/* Header */}
            <div style={{ background: '#1a1a1a', padding: '25px', color: '#FFF', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <h4 style={{ fontSize: '1.1rem', fontWeight: 800, marginBottom: '8px', color: 'var(--primary)' }}>Supporto Strategico</h4>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.6)' }}>Il nostro team è a tua disposizione per definire la tua scalata digitale.</p>
            </div>

            {/* List */}
            <div style={{ padding: '10px', display: 'grid', gap: '8px' }}>
              {[
                { icon: Calculator, title: "Calcola Preventivo", sub: "Stima immediata online", badge: "NEW", action: onQuoteClick },
                { icon: MessageSquare, title: "Contattaci", sub: "Modulo rapido", action: onContactClick },
                { icon: MessageCircle, title: "WhatsApp", sub: "Risposta immediata", action: () => window.open('https://wa.me/390280016631', '_blank') },
                { icon: Phone, title: "Chiamaci Ora", sub: "Lun-Ven 9:00-18:00", action: () => window.open('tel:+390280016631') },
                { icon: Mail, title: "Scrivici Email", sub: "Risposta in 24h", action: () => window.open('mailto:info@b2vibe.com') }
              ].map((item, i) => (
                <button
                  key={i}
                  onClick={() => { item.action(); setIsOpen(false); }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '15px',
                    padding: '12px 15px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: 'none',
                    borderRadius: '16px',
                    width: '100%',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'}
                >
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '12px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: item.badge ? 'var(--primary)' : '#FFF'
                  }}>
                    <item.icon size={20} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#FFF', fontWeight: 600, fontSize: '0.9rem' }}>{item.title}</span>
                      {item.badge && <span style={{ background: 'rgba(7, 235, 166, 0.2)', color: 'var(--primary)', fontSize: '0.65rem', padding: '2px 6px', borderRadius: '4px', fontWeight: 800 }}>{item.badge}</span>}
                    </div>
                    <span style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: '0.75rem' }}>{item.sub}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Footer */}
            <div style={{ padding: '15px', textAlign: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.05)', fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.4)' }}>
              ⚡️ Risposta garantita entro 24 ore
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Apri supporto"
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'var(--primary)',
          border: 'none',
          boxShadow: '0 10px 30px var(--primary-glow)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#000'
        }}
      >
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
};



const CookieBanner = ({ isVisible, onAccept, onHide }) => {
  const [view, setView] = useState('simple'); // 'simple' or 'config'
  const [preferences, setPreferences] = useState({
    technical: true,
    analytical: true,
    marketing: false
  });

  useEffect(() => {
    const saved = localStorage.getItem('cookie-preferences');
    if (saved) {
      setPreferences(JSON.parse(saved));
    }
  }, [isVisible]);

  if (!isVisible) return null;

  const handleSave = (all = false) => {
    const finalPrefs = all
      ? { technical: true, analytical: true, marketing: true }
      : preferences;

    localStorage.setItem('cookie-preferences', JSON.stringify(finalPrefs));
    localStorage.setItem('cookie-consent', 'accepted');
    onAccept();
  };

  const togglePref = (key) => {
    if (key === 'technical') return;
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const checkboxStyle = (active) => ({
    width: '40px',
    height: '20px',
    background: active ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
    borderRadius: '20px',
    position: 'relative',
    cursor: 'pointer',
    transition: 'all 0.3s'
  });

  const knobStyle = (active) => ({
    width: '16px',
    height: '16px',
    background: '#FFF',
    borderRadius: '50%',
    position: 'absolute',
    top: '2px',
    left: active ? '22px' : '2px',
    transition: 'all 0.3s'
  });

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      style={{
        position: 'fixed',
        bottom: '30px',
        left: '20px',
        zIndex: 9999,
        background: '#121212',
        color: '#FFF',
        padding: '30px',
        borderRadius: '30px',
        boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
        maxWidth: '480px',
        width: 'calc(100% - 40px)'
      }}
    >
      {view === 'simple' ? (
        <>
          <div>
            <h4 style={{ marginBottom: '12px', fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              🍪 Gestione Privacy & Cookie
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
              Utilizziamo i cookie per ottimizzare il sito e analizzare il traffico. Puoi accettare tutto o configurare le tue preferenze. Leggi la <RouterLink to="/cookie-policy" style={{ color: 'var(--primary)' }}>Cookie Policy</RouterLink>.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            <button onClick={() => handleSave(true)} className="primary" style={{ padding: '14px' }}>Accetta Tutto</button>
            <button onClick={() => setView('config')} style={{ background: 'rgba(255,255,255,0.05)', border: 'none', color: '#FFF', padding: '14px', borderRadius: '12px', cursor: 'pointer', fontWeight: 600 }}>Configura</button>
          </div>
        </>
      ) : (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h4 style={{ fontSize: '1.2rem' }}>Preferenze Cookie</h4>
            <button onClick={() => setView('simple')} style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontSize: '0.85rem' }}>Indietro</button>
          </div>

          <div style={{ display: 'grid', gap: '15px' }}>
            {[
              { id: 'technical', label: 'Necessari', desc: 'Essenziali per il funzionamento del sito.', required: true },
              { id: 'analytical', label: 'Analitici', desc: 'Per statistiche anonime sull\'uso del sito.' },
              { id: 'marketing', label: 'Marketing', desc: 'Per campagne social e marketplace.' }
            ].map((item) => (
              <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', background: 'rgba(255,255,255,0.03)', padding: '15px', borderRadius: '15px' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '4px' }}>{item.label}</div>
                  <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.5)' }}>{item.desc}</div>
                </div>
                <div
                  onClick={() => togglePref(item.id)}
                  style={{ ...checkboxStyle(preferences[item.id]), opacity: item.required ? 0.5 : 1, cursor: item.required ? 'not-allowed' : 'pointer' }}
                >
                  <div style={knobStyle(preferences[item.id])} />
                </div>
              </div>
            ))}
          </div>

          <button onClick={() => handleSave()} className="primary" style={{ padding: '14px', width: '100%' }}>Salva Preferenze</button>
        </>
      )}
    </motion.div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const HomePage = ({ onContactClick, onQuoteClick, onCookieClick }) => (
  <div style={{ background: '#FFF' }}>
    <SEO
      title="E-commerce Full Outsourcing & Merchant of Record"
      description="Scaliamo il tuo business sui marketplace internazionali. B2Vibe è il partner strategico per la gestione completa delle tue vendite online."
      canonical="https://www.b2vibe.com/"
    />
    <Navbar onContactClick={onContactClick} />

    <main role="main">
      <Hero />
      <FadeInUp><Stats /></FadeInUp>
      <FadeInUp><Complexity /></FadeInUp>
      <FadeInUp><DNA /></FadeInUp>
      <FadeInUp><Ecosystem /></FadeInUp>

      <FadeInUp><MerchantOfRecordSection /></FadeInUp>
      <FadeInUp><MarketplaceSection /></FadeInUp>
      <FadeInUp><TechnologySection /></FadeInUp>
      <FadeInUp><LogisticsSection /></FadeInUp>
      <FadeInUp><CustomerCareSection /></FadeInUp>

      <FadeInUp><Comparison /></FadeInUp>
      <FadeInUp><TimelineSection /></FadeInUp>
      <FadeInUp><TeamSection /></FadeInUp>
      <FadeInUp><NextSteps onContactClick={onContactClick} /></FadeInUp>
    </main>

    <Footer onCookieClick={onCookieClick} />
    <BackToTop />
    <FloatingContact onContactClick={onContactClick} onQuoteClick={onQuoteClick} />
  </div >
);

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowCookieBanner(true);
    }
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={
            <HomePage
              onContactClick={() => setIsModalOpen(true)}
              onQuoteClick={() => setIsQuoteOpen(true)}
              onCookieClick={() => setShowCookieBanner(true)}
            />
          } />
          <Route path="/privacy-policy" element={
            <>
              <SEO title="Privacy Policy" description="Informativa sulla privacy di B2Vibe S.r.l." />
              <PrivacyPolicy onContactClick={() => setIsModalOpen(true)} onCookieClick={() => setShowCookieBanner(true)} />
            </>
          } />
          <Route path="/cookie-policy" element={
            <>
              <SEO title="Cookie Policy" description="Informativa sui cookie di B2Vibe S.r.l." />
              <CookiePolicy onContactClick={() => setIsModalOpen(true)} onCookieClick={() => setShowCookieBanner(true)} />
            </>
          } />
          <Route path="/merchant-of-record-guida" element={
            <>
              <SEO
                title="Merchant of Record (MoR) Guida 2026"
                description="Scopri cos'è un Merchant of Record e come può aiutare il tuo e-commerce a vendere all'estero senza complicazioni fiscali."
                canonical="https://www.b2vibe.com/merchant-of-record-guida"
              />
              <MerchantOfRecordGuide onContactClick={() => setIsModalOpen(true)} onCookieClick={() => setShowCookieBanner(true)} />
            </>
          } />
        </Routes>
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <QuoteModal isOpen={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
        <CookieBanner
          isVisible={showCookieBanner}
          onAccept={() => setShowCookieBanner(false)}
          onHide={() => setShowCookieBanner(false)}
        />
      </BrowserRouter>
    </HelmetProvider>
  );
}
