import React, { useEffect, useRef, useState } from "react";
import "./Loja.css";
import pulseiraAmparo from "../assets/pulseira-amparo.png";

/* ==========================================================================
   HOOK — REVEAL ON SCROLL (IntersectionObserver)
   ========================================================================== */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function Reveal({ children, className = "", as = "div", delay = 0 }) {
  const [ref, visible] = useReveal();
  const Tag = as;
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "active" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ==========================================================================
   ÍCONES — SVG PRÓPRIOS (sem dependências externas)
   ========================================================================== */
function IconBase({ size = 20, children, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {children}
    </svg>
  );
}

function Shield(props) {
  return (
    <IconBase {...props}>
      <path d="M12 2 3 6v6c0 5.4 3.8 9.6 9 11 5.2-1.4 9-5.6 9-11V6l-9-4z" />
    </IconBase>
  );
}

function MapPin(props) {
  return (
    <IconBase {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </IconBase>
  );
}

function Bell(props) {
  return (
    <IconBase {...props}>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </IconBase>
  );
}

function Users(props) {
  return (
    <IconBase {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </IconBase>
  );
}

function Smartphone(props) {
  return (
    <IconBase {...props}>
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </IconBase>
  );
}

function Watch(props) {
  return (
    <IconBase {...props}>
      <circle cx="12" cy="12" r="7" />
      <polyline points="12 9 12 12 13.5 13.5" />
      <path d="M16.51 17.35l.35 3.83a2 2 0 0 1-2 2.17h-5.72a2 2 0 0 1-2-2.17l.35-3.83" />
      <path d="M16.51 6.65l.35-3.83a2 2 0 0 0-2-2.17H9.14a2 2 0 0 0-2 2.17l.35 3.83" />
    </IconBase>
  );
}

function Wifi(props) {
  return (
    <IconBase {...props}>
      <path d="M5 12.55a11 11 0 0 1 14.08 0" />
      <path d="M1.42 9a16 16 0 0 1 21.16 0" />
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0" />
      <line x1="12" y1="20" x2="12.01" y2="20" />
    </IconBase>
  );
}

function Heart(props) {
  return (
    <IconBase {...props}>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </IconBase>
  );
}

function AlertTriangle(props) {
  return (
    <IconBase {...props}>
      <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </IconBase>
  );
}

function Siren(props) {
  return (
    <IconBase {...props}>
      <path d="M12 3a6 6 0 0 1 6 6v6H6v-6a6 6 0 0 1 6-6z" />
      <line x1="4" y1="15" x2="20" y2="15" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="18" x2="12" y2="21" />
      <line x1="4" y1="21" x2="20" y2="21" />
    </IconBase>
  );
}

function Landmark(props) {
  return (
    <IconBase {...props}>
      <line x1="3" y1="22" x2="21" y2="22" />
      <line x1="6" y1="18" x2="6" y2="11" />
      <line x1="10" y1="18" x2="10" y2="11" />
      <line x1="14" y1="18" x2="14" y2="11" />
      <line x1="18" y1="18" x2="18" y2="11" />
      <polygon points="12 2 21 7 3 7" />
    </IconBase>
  );
}

function ChevronDown(props) {
  return (
    <IconBase {...props}>
      <polyline points="6 9 12 15 18 9" />
    </IconBase>
  );
}

function Menu(props) {
  return (
    <IconBase {...props}>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </IconBase>
  );
}

function X(props) {
  return (
    <IconBase {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </IconBase>
  );
}

function Linkedin(props) {
  return (
    <IconBase {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </IconBase>
  );
}

function Github(props) {
  return (
    <IconBase {...props}>
      <path d="M9 19c-4.5 1.4-4.5-2.4-6.5-2.9m13 4.9v-3.6a3.1 3.1 0 0 0-.9-2.4c2.9-.3 6-1.4 6-6.4a4.9 4.9 0 0 0-1.3-3.4 4.6 4.6 0 0 0-.1-3.4s-1.1-.3-3.6 1.3a12.4 12.4 0 0 0-6.4 0C6.7.4 5.6.7 5.6.7a4.6 4.6 0 0 0-.1 3.4A4.9 4.9 0 0 0 4.2 7.5c0 5 3.1 6.1 6 6.4a3.1 3.1 0 0 0-.9 2.3V20" />
    </IconBase>
  );
}

/* ==========================================================================
   DADOS ESTÁTICOS
   ========================================================================== */
const FEATURES = [
  {
    number: "01",
    icon: Watch,
    title: "Pulseira inteligente",
    description:
      "Botão físico de emergência para permitir um acionamento rápido e discreto.",
  },
  {
    number: "02",
    icon: Users,
    title: "Rede de confiança",
    description:
      "Até três contatos escolhidos pela usuária podem receber alertas.",
  },
  {
    number: "03",
    icon: MapPin,
    title: "Localização",
    description:
      "Os alertas podem compartilhar a localização da usuária para facilitar a identificação da situação.",
  },
  {
    number: "04",
    icon: Siren,
    title: "Emergência",
    description:
      "Em situações de risco imediato, o sistema prevê integração com serviços públicos de segurança.",
  },
];

const BRACELET_FEATURES = [
  {
    icon: AlertTriangle,
    title: "Botão de emergência",
    description: "Acionamento físico diretamente pela pulseira.",
  },
  {
    icon: Smartphone,
    title: "Conexão com o aplicativo",
    description: "A pulseira trabalha conectada ao aplicativo AMPARO+.",
  },
  {
    icon: Bell,
    title: "Dois níveis de alerta",
    description: "Diferentes ações de acordo com a gravidade da situação.",
  },
  {
    icon: MapPin,
    title: "Localização",
    description: "Envio da localização juntamente com o alerta.",
  },
  {
    icon: Watch,
    title: "Design discreto",
    description:
      "Formato semelhante a uma pulseira convencional para uso cotidiano.",
  },
];

const APP_FEATURES = [
  {
    icon: Watch,
    title: "Conexão com a pulseira",
    description: "Visualização do status da pulseira.",
  },
  {
    icon: Users,
    title: "Contatos de confiança",
    description: "Cadastro de até três pessoas próximas.",
  },
  {
    icon: MapPin,
    title: "Compartilhamento de localização",
    description: "A localização acompanha o alerta quando necessário.",
  },
  {
    icon: Bell,
    title: "Notificações",
    description: "Os contatos recebem informações sobre o acionamento.",
  },
  {
    icon: Shield,
    title: "Status de segurança",
    description: "Interface simples para facilitar o uso cotidiano.",
  },
];

const TIMELINE_STEPS = [
  {
    number: "1",
    icon: Smartphone,
    title: "Cadastro",
    description: "A usuária realiza seu cadastro no aplicativo AMPARO+.",
  },
  {
    number: "2",
    icon: Wifi,
    title: "Conexão",
    description: "A pulseira é conectada ao aplicativo.",
  },
  {
    number: "3",
    icon: Users,
    title: "Rede de apoio",
    description: "A usuária cadastra até três pessoas de confiança.",
  },
  {
    number: "4",
    icon: Shield,
    title: "Proteção ativa",
    description:
      "O sistema fica preparado para realizar os acionamentos quando necessário.",
  },
];

const ECOSYSTEM_NODES = [
  { label: "Pulseira", icon: Watch, angle: -90 },
  { label: "Aplicativo", icon: Smartphone, angle: -30 },
  { label: "Localização", icon: MapPin, angle: 30 },
  { label: "Serviços de emergência", icon: Siren, angle: 90 },
  { label: "Poder público", icon: Landmark, angle: 150 },
  { label: "Rede de confiança", icon: Users, angle: 210 },
];

const FINANCIAL_SUMMARY = [
  { label: "Receita", value: "R$ 15.299.000" },
  { label: "Custos", value: "R$ 5.700.000" },
  { label: "Impostos", value: "R$ 1.223.920" },
  { label: "Lucro líquido", value: "R$ 8.375.080" },
];

const FINANCIAL_TABLE = [
  { label: "Faturamento anual", value: "R$ 15.299.000,00" },
  { label: "Custos variáveis anuais", value: "R$ 3.000.000,00" },
  { label: "Custos fixos anuais", value: "R$ 2.700.000,00" },
  { label: "Custos totais anuais", value: "R$ 5.700.000,00" },
  { label: "Impostos estimados", value: "R$ 1.223.920,00" },
  { label: "Lucro líquido estimado", value: "R$ 8.375.080,00" },
  { label: "Margem líquida estimada", value: "54,7%" },
  { label: "Ponto de equilíbrio mensal", value: "R$ 310.812,65" },
];

const CREATORS = [
  {
    name: "Nome do Criador 01",
    role: "Co-fundador do AMPARO+",
    bio: "Descrição do integrante e sua atuação no desenvolvimento do projeto.",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Nome do Criador 02",
    role: "Co-fundador do AMPARO+",
    bio: "Descrição do integrante e sua atuação no desenvolvimento do projeto.",
    linkedin: "#",
    github: "#",
  },
];

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Solução", href: "#solucao" },
  { label: "Pulseira", href: "#pulseira" },
  { label: "Aplicativo", href: "#aplicativo" },
  { label: "Funcionamento", href: "#funcionamento" },
  { label: "Financeiro", href: "#financeiro" },
  { label: "Criadores", href: "#criadores" },
];

/* ==========================================================================
   COMPONENTE — NAVBAR
   ========================================================================== */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <div className="navbar__inner">
        <a href="#inicio" className="navbar__brand" aria-label="AMPARO+, início">
          AMPARO<span className="navbar__plus">+</span>
        </a>

        <nav className="navbar__links" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="navbar__toggle"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <nav
        className={`navbar__mobile ${open ? "navbar__mobile--open" : ""}`}
        aria-label="Navegação mobile"
      >
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={handleLinkClick}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

/* ==========================================================================
   COMPONENTE — HERO
   ========================================================================== */
function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__glow" />
        <div className="hero__grid" />
      </div>

      <div className="hero__inner">
        <div className="hero__content">
          <Reveal as="span" className="badge">
            Tecnologia para proteção
          </Reveal>

          <Reveal as="h1" className="hero__title" delay={80}>
            AMPARO<span className="accent-plus">+</span>
          </Reveal>

          <Reveal as="p" className="hero__subtitle" delay={140}>
            Proteção no pulso, <span className="accent-blue">segurança na vida.</span>
          </Reveal>

          <Reveal as="p" className="hero__text" delay={200}>
            Uma solução tecnológica que conecta mulheres, pessoas de confiança
            e serviços de emergência para tornar o pedido de ajuda mais rápido
            e acessível.
          </Reveal>

          <Reveal className="hero__actions" delay={260}>
            <a href="#solucao" className="btn btn--primary">
              Conheça a solução
            </a>
            <a href="#funcionamento" className="btn btn--ghost">
              Como funciona
            </a>
          </Reveal>

          <Reveal className="hero__indicators" delay={320}>
            <div className="indicator">
              <Watch size={18} />
              <span>Pulseira inteligente</span>
            </div>
            <div className="indicator">
              <Users size={18} />
              <span>Rede de confiança</span>
            </div>
            <div className="indicator">
              <MapPin size={18} />
              <span>Localização</span>
            </div>
            <div className="indicator">
              <Bell size={18} />
              <span>Alerta de emergência</span>
            </div>
          </Reveal>
        </div>

        <Reveal className="hero__visual" delay={160}>
          <div className="hero__visual-glow" aria-hidden="true" />
          <div className="hero__visual-ring" aria-hidden="true" />
          <img src={pulseiraAmparo} 
          alt="Pulseira AMPARO+"  
          className="hero__image" />
        
        </Reveal>
      </div>

      <a href="#solucao" className="hero__scroll" aria-label="Rolar para próxima seção">
        <ChevronDown size={22} />
      </a>
    </section>
  );
}

/* ==========================================================================
   COMPONENTE — FEATURE CARD
   ========================================================================== */
function FeatureCard({ number, icon: Icon, title, description, delay = 0 }) {
  return (
    <Reveal className="feature-card" delay={delay}>
      <span className="feature-card__number">{number}</span>
      <div className="feature-card__icon">
        <Icon size={22} />
      </div>
      <h3 className="feature-card__title">{title}</h3>
      <p className="feature-card__text">{description}</p>
    </Reveal>
  );
}

/* ==========================================================================
   SEÇÃO — O AMPARO+ (SOLUÇÃO)
   ========================================================================== */
function SolutionSection() {
  return (
    <section id="solucao" className="section">
      <div className="section__inner">
        <Reveal as="h2" className="section__title">
          Proteção conectada quando cada segundo importa.
        </Reveal>
        <Reveal as="p" className="section__lead" delay={80}>
          O AMPARO+ combina uma pulseira inteligente e um aplicativo para
          facilitar o pedido de ajuda em situações de ameaça. A usuária pode
          cadastrar até três pessoas de confiança e utilizar diferentes
          níveis de alerta de acordo com a situação.
        </Reveal>

        <div className="feature-grid">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.number} {...feature} delay={i * 90} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   SEÇÃO — CONHEÇA A PULSEIRA
   ========================================================================== */
function BraceletSection() {
  return (
    <section id="pulseira" className="section section--split">
      <div className="section__inner split">
        <Reveal className="split__media">
          <div className="split__glow" aria-hidden="true" />
           <img src={pulseiraAmparo} 
          alt="Pulseira AMPARO+"  
          className="hero__image" />
        </Reveal>

        <div className="split__content">
          <Reveal as="h2" className="section__title section__title--left">
            AMPARO+ no seu pulso
          </Reveal>
          <Reveal as="p" className="section__lead section__lead--left" delay={80}>
            Discreta, simples e pensada para situações em que acessar o
            celular pode não ser possível.
          </Reveal>

          <ul className="feature-list">
            {BRACELET_FEATURES.map((item, i) => (
              <Reveal as="li" key={item.title} className="feature-list__item" delay={120 + i * 70}>
                <div className="feature-list__icon">
                  <item.icon size={20} />
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   COMPONENTE — PHONE MOCKUP
   ========================================================================== */
function PhoneMockup() {
  return (
    <div className="phone">
      <div className="phone__notch" aria-hidden="true" />
      <div className="phone__screen">
        <div className="phone__header">
          <span className="phone__logo">AMPARO+</span>
          <span className="phone__status">
            <Wifi size={12} /> Pulseira conectada
          </span>
        </div>

        <p className="phone__safe">Você está protegida</p>

        <div className="phone__block">
          <span className="phone__block-title">Contatos de confiança</span>
          <div className="phone__contacts">
            <span>Contato 01</span>
            <span>Contato 02</span>
            <span>Contato 03</span>
          </div>
        </div>

        <div className="phone__block">
          <span className="phone__block-title">Status de localização</span>
          <div className="phone__location">
            <MapPin size={14} />
            <span>Localização ativa</span>
          </div>
        </div>

        <button className="phone__button" type="button">
          Gerenciar contatos
        </button>
      </div>
    </div>
  );
}

/* ==========================================================================
   SEÇÃO — APLICATIVO AMPARO+
   ========================================================================== */
function AppSection() {
  return (
    <section id="aplicativo" className="section section--split reverse">
      <div className="section__inner split">
        <div className="split__content">
          <Reveal as="h2" className="section__title section__title--left">
            O aplicativo AMPARO+
          </Reveal>
          <Reveal as="p" className="section__lead section__lead--left" delay={80}>
            Uma interface simples para acompanhar a proteção no dia a dia e
            manter a rede de confiança sempre atualizada.
          </Reveal>

          <ul className="feature-list">
            {APP_FEATURES.map((item, i) => (
              <Reveal as="li" key={item.title} className="feature-list__item" delay={120 + i * 70}>
                <div className="feature-list__icon">
                  <item.icon size={20} />
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal className="split__media split__media--phone">
          <div className="split__glow" aria-hidden="true" />
          <PhoneMockup />
        </Reveal>
      </div>
    </section>
  );
}

/* ==========================================================================
   SEÇÃO — COMO FUNCIONA (TIMELINE)
   ========================================================================== */
function HowItWorksSection() {
  return (
    <section id="funcionamento" className="section">
      <div className="section__inner">
        <Reveal as="h2" className="section__title">
          Como funciona
        </Reveal>
        <Reveal as="p" className="section__lead" delay={80}>
          Do cadastro à proteção ativa, o AMPARO+ prepara a usuária e sua
          rede de apoio para agir rapidamente quando for necessário.
        </Reveal>

        <div className="timeline">
          {TIMELINE_STEPS.map((step, i) => (
            <Reveal key={step.number} className="timeline__step" delay={i * 100}>
              <div className="timeline__marker">
                <step.icon size={20} />
              </div>
              <span className="timeline__number">{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   SEÇÃO — NÍVEL 01 (ALERTA DE SEGURANÇA)
   ========================================================================== */
function Level1Section() {
  return (
    <section className="section alert-section alert-section--blue">
      <div className="section__inner">
        <Reveal className="alert-header">
          <span className="alert-tag">Nível 01</span>
          <h2>Alerta para sua rede de confiança</h2>
          <p>
            Ao realizar o primeiro acionamento do botão, o aplicativo envia
            um alerta para os três contatos de confiança cadastrados pela
            usuária. O alerta pode conter identificação da usuária, aviso de
            possível situação de risco, localização e horário do
            acionamento.
          </p>
        </Reveal>

        <div className="alert-body">
          <Reveal className="flow flow--blue" delay={100}>
            <div className="flow__node">
              <Watch size={20} />
              <span>Pulseira</span>
            </div>
            <div className="flow__arrow" />
            <span className="flow__label">acionamento do botão</span>
            <div className="flow__arrow" />
            <div className="flow__node">
              <Smartphone size={20} />
              <span>Aplicativo</span>
            </div>
            <div className="flow__arrow" />
            <div className="flow__branches">
              <div className="flow__node flow__node--small">
                <Users size={16} />
                <span>Contato 01</span>
              </div>
              <div className="flow__node flow__node--small">
                <Users size={16} />
                <span>Contato 02</span>
              </div>
              <div className="flow__node flow__node--small">
                <Users size={16} />
                <span>Contato 03</span>
              </div>
            </div>
          </Reveal>

          <Reveal className="notification-card" delay={200}>
            <div className="notification-card__head">
              <Bell size={16} />
              <span>AMPARO+ · Alerta de segurança</span>
            </div>
            <p>
              <strong>[Nome]</strong> acionou o AMPARO+ e pode precisar de
              ajuda.
            </p>
            <span className="notification-card__meta">
              <MapPin size={13} /> Localização disponível
            </span>
            <button type="button" className="notification-card__btn">
              Ver localização
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   COMPONENTE — ANEL DE PROGRESSO (3 SEGUNDOS)
   ========================================================================== */
function ProgressRing() {
  const circumference = 2 * Math.PI * 54;
  return (
    <div className="progress-ring">
      <svg viewBox="0 0 120 120" width="120" height="120" aria-hidden="true">
        <circle
          className="progress-ring__bg"
          cx="60"
          cy="60"
          r="54"
          fill="none"
          strokeWidth="6"
        />
        <circle
          className="progress-ring__fg"
          cx="60"
          cy="60"
          r="54"
          fill="none"
          strokeWidth="6"
          strokeDasharray={circumference}
          strokeDashoffset={circumference}
          transform="rotate(-90 60 60)"
        />
      </svg>
      <div className="progress-ring__center">
        <AlertTriangle size={22} />
      </div>
    </div>
  );
}

/* ==========================================================================
   SEÇÃO — NÍVEL 02 (EMERGÊNCIA)
   ========================================================================== */
function Level2Section() {
  return (
    <section className="section alert-section alert-section--red">
      <div className="section__inner">
        <Reveal className="alert-header">
          <span className="alert-tag alert-tag--red">Nível 02</span>
          <h2>Emergência</h2>
          <p>
            Caso exista risco imediato à integridade da usuária, manter o
            botão pressionado por 3 segundos ativa o segundo nível de
            proteção. Nesse modelo, o sistema envia um alerta de emergência
            juntamente com a localização da usuária para o serviço policial
            integrado ao AMPARO+. A partir da localização recebida, o
            atendimento poderá ser direcionado à unidade responsável pela
            região, conforme a integração estabelecida com o poder público.
          </p>
        </Reveal>

        <Reveal className="hold-indicator" delay={80}>
          <ProgressRing />
          <span>Segure o botão por 3 segundos</span>
        </Reveal>

        <div className="alert-body">
          <Reveal className="flow flow--red" delay={140}>
            <div className="flow__node">
              <Watch size={20} />
              <span>Pulseira</span>
            </div>
            <div className="flow__arrow" />
            <span className="flow__label">botão pressionado por 3s</span>
            <div className="flow__arrow" />
            <div className="flow__node">
              <Smartphone size={20} />
              <span>App AMPARO+</span>
            </div>
            <div className="flow__arrow" />
            <div className="flow__node">
              <AlertTriangle size={20} />
              <span>Alerta de emergência</span>
            </div>
            <div className="flow__arrow" />
            <div className="flow__node">
              <Siren size={20} />
              <span>Serviço policial integrado</span>
            </div>
          </Reveal>

          <Reveal className="notification-card notification-card--red" delay={220}>
            <div className="notification-card__head">
              <Siren size={16} />
              <span>Emergência · AMPARO+</span>
            </div>
            <p>Alerta de risco imediato recebido.</p>
            <div className="notification-card__details">
              <span>Usuária: [Nome]</span>
              <span>Horário: 22:41</span>
              <span>Localização: disponível</span>
            </div>
            <button type="button" className="notification-card__btn notification-card__btn--red">
              Abrir localização
            </button>
          </Reveal>
        </div>

        <Reveal className="alert-disclaimer" delay={280}>
          Representação do fluxo proposto do sistema. A integração com
          serviços públicos de segurança segue um modelo proposto,
          condicionado a parcerias institucionais.
        </Reveal>
      </div>
    </section>
  );
}

/* ==========================================================================
   SEÇÃO — COMPARAÇÃO DOS DOIS NÍVEIS
   ========================================================================== */
function ComparisonSection() {
  return (
    <section className="section">
      <div className="section__inner">
        <Reveal as="h2" className="section__title">
          Dois níveis, um mesmo objetivo: agir rápido.
        </Reveal>

        <div className="comparison">
          <Reveal className="comparison__card comparison__card--blue">
            <span className="comparison__tag">Nível 01</span>
            <h3>Rede de confiança</h3>
            <dl>
              <div>
                <dt>Acionamento</dt>
                <dd>Pressionar botão</dd>
              </div>
              <div>
                <dt>Destino</dt>
                <dd>3 contatos cadastrados</dd>
              </div>
              <div>
                <dt>Objetivo</dt>
                <dd>
                  Avisar pessoas próximas sobre uma possível situação de
                  risco.
                </dd>
              </div>
            </dl>
          </Reveal>

          <Reveal className="comparison__card comparison__card--red" delay={100}>
            <span className="comparison__tag comparison__tag--red">Nível 02</span>
            <h3>Emergência</h3>
            <dl>
              <div>
                <dt>Acionamento</dt>
                <dd>Segurar por 3 segundos</dd>
              </div>
              <div>
                <dt>Destino</dt>
                <dd>Serviço policial integrado</dd>
              </div>
              <div>
                <dt>Objetivo</dt>
                <dd>
                  Solicitar auxílio em uma situação de risco imediato.
                </dd>
              </div>
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   SEÇÃO — MODELO DE PARCERIA COM O PODER PÚBLICO
   ========================================================================== */
function PublicPartnershipSection() {
  return (
    <section className="section section--muted">
      <div className="section__inner">
        <Reveal as="h2" className="section__title">
          Tecnologia e poder público trabalhando juntos.
        </Reveal>
        <Reveal as="p" className="section__lead" delay={80}>
          A proposta do AMPARO+ prevê um modelo de parceria com o Governo do
          Estado para disponibilizar a solução a mulheres acompanhadas pelo
          poder público em decorrência de situações de violência ou ameaça.
          Nesse modelo, mulheres elegíveis poderiam receber a pulseira e
          utilizar o serviço sem custo direto, enquanto a operação seria
          viabilizada por meio de contratos ou parcerias institucionais.
        </Reveal>

        <Reveal className="partnership" delay={160}>
          <div className="partnership__chain">
            <div className="partnership__node">
              <Landmark size={22} />
              <span>Governo / poder público</span>
            </div>
            <div className="flow__arrow flow__arrow--vertical" />
            <div className="partnership__node partnership__node--highlight">
              <Shield size={22} />
              <span>AMPARO+</span>
            </div>
            <div className="flow__arrow flow__arrow--vertical" />
            <div className="partnership__node">
              <Heart size={22} />
              <span>Mulher protegida</span>
            </div>
          </div>

          <div className="partnership__side">
            <Users size={20} />
            <span>Rede de apoio + serviços de emergência</span>
          </div>
        </Reveal>

        <Reveal as="p" className="section__note" delay={220}>
          Modelo proposto, conforme parceria estabelecida em uma futura
          implementação. Não representa contrato governamental já vigente.
        </Reveal>
      </div>
    </section>
  );
}

/* ==========================================================================
   COMPONENTE — FINANCIAL CARD
   ========================================================================== */
function FinancialCard({ label, value, delay = 0 }) {
  return (
    <Reveal className="financial-card" delay={delay}>
      <span className="financial-card__label">{label}</span>
      <span className="financial-card__value">{value}</span>
    </Reveal>
  );
}

/* ==========================================================================
   SEÇÃO — VIABILIDADE FINANCEIRA
   ========================================================================== */
function FinancialSection() {
  return (
    <section id="financeiro" className="section">
      <div className="section__inner">
        <Reveal as="h2" className="section__title">
          Viabilidade financeira
        </Reveal>
        <Reveal as="p" className="section__lead" delay={80}>
          Projeção anual do modelo AMPARO+
        </Reveal>

        <div className="financial-highlights">
          <Reveal className="financial-highlight" delay={100}>
            <span className="financial-highlight__value">R$ 15,3 MI</span>
            <span className="financial-highlight__label">Faturamento anual</span>
          </Reveal>
          <Reveal className="financial-highlight" delay={160}>
            <span className="financial-highlight__value">R$ 8,37 MI</span>
            <span className="financial-highlight__label">Lucro líquido estimado</span>
          </Reveal>
          <Reveal className="financial-highlight" delay={220}>
            <span className="financial-highlight__value">54,7%</span>
            <span className="financial-highlight__label">Margem líquida estimada</span>
          </Reveal>
        </div>

        <div className="financial-grid">
          {FINANCIAL_SUMMARY.map((item, i) => (
            <FinancialCard key={item.label} {...item} delay={i * 80} />
          ))}
        </div>

        <Reveal className="financial-table" delay={120}>
          <div className="financial-table__head">Plano financeiro — AMPARO+</div>
          {FINANCIAL_TABLE.map((row) => (
            <div className="financial-table__row" key={row.label}>
              <span>{row.label}</span>
              <span>{row.value}</span>
            </div>
          ))}
        </Reveal>

        <Reveal as="p" className="section__note" delay={160}>
          Projeções financeiras do projeto. Os valores representam
          estimativas e não resultados financeiros já realizados.
        </Reveal>
      </div>
    </section>
  );
}

/* ==========================================================================
   SEÇÃO — ECOSSISTEMA
   ========================================================================== */
function EcosystemSection() {
  const radius = 42;
  return (
    <section className="section section--muted">
      <div className="section__inner">
        <Reveal as="h2" className="section__title">
          Uma única solução. Diferentes camadas de proteção.
        </Reveal>

        <Reveal className="ecosystem" delay={100}>
          <svg
            className="ecosystem__lines"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {ECOSYSTEM_NODES.map((node) => {
              const rad = (node.angle * Math.PI) / 180;
              const x = 50 + radius * Math.cos(rad);
              const y = 50 + radius * Math.sin(rad);
              return (
                <line
                  key={node.label}
                  x1="50"
                  y1="50"
                  x2={x}
                  y2={y}
                  className="ecosystem__line"
                />
              );
            })}
          </svg>

          <div className="ecosystem__center">
            <span>AMPARO+</span>
          </div>

          {ECOSYSTEM_NODES.map((node) => {
            const rad = (node.angle * Math.PI) / 180;
            const x = 50 + radius * Math.cos(rad);
            const y = 50 + radius * Math.sin(rad);
            return (
              <div
                key={node.label}
                className="ecosystem__node"
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <node.icon size={18} />
                <span>{node.label}</span>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

/* ==========================================================================
   COMPONENTE — CREATOR CARD
   ========================================================================== */
function CreatorCard({ name, role, bio, linkedin, github, delay = 0 }) {
  return (
    <Reveal className="creator-card" delay={delay}>
      <div className="creator-card__photo" aria-hidden="true">
        <Users size={28} />
      </div>
      <h3>{name}</h3>
      <span className="creator-card__role">{role}</span>
      <p>{bio}</p>
      <div className="creator-card__links">
        <a href={linkedin} aria-label={`LinkedIn de ${name}`}>
          <Linkedin size={18} />
          <span>LinkedIn</span>
        </a>
        <a href={github} aria-label={`GitHub de ${name}`}>
          <Github size={18} />
          <span>GitHub</span>
        </a>
      </div>
    </Reveal>
  );
}

/* ==========================================================================
   SEÇÃO — CRIADORES
   ========================================================================== */
function CreatorsSection() {
  return (
    <section id="criadores" className="section">
      <div className="section__inner">
        <Reveal as="h2" className="section__title">
          Quem está por trás do AMPARO+
        </Reveal>

        <div className="creators-grid">
          {CREATORS.map((creator, i) => (
            <CreatorCard key={creator.name} {...creator} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ==========================================================================
   COMPONENTE — FOOTER
   ========================================================================== */
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">
            AMPARO<span className="accent-blue">+</span>
          </span>
          <p>Proteção no pulso, segurança na vida.</p>
          <p className="footer__note">Projeto acadêmico / proposta tecnológica.</p>
        </div>

        <nav className="footer__links" aria-label="Links do rodapé">
          <a href="#solucao">Solução</a>
          <a href="#funcionamento">Funcionamento</a>
          <a href="#financeiro">Financeiro</a>
          <a href="#criadores">Criadores</a>
        </nav>
      </div>
      <div className="footer__bottom">© 2026 AMPARO+</div>
    </footer>
  );
}

/* ==========================================================================
   APP
   ========================================================================== */
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <SolutionSection />
        <BraceletSection />
        <AppSection />
        <HowItWorksSection />
        <Level1Section />
        <Level2Section />
        <ComparisonSection />
        <PublicPartnershipSection />
        <FinancialSection />
        <EcosystemSection />
        <CreatorsSection />
      </main>
      <Footer />
    </div>
  );
}