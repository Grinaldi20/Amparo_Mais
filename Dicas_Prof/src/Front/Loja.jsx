import { useState } from 'react'
import './Loja.css'


/* =========================================================
   ÍCONES (SVG simples, sem dependências externas)
   ========================================================= */
const IconSearch = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const IconMenu = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const IconWhatsapp = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.42 1.26 4.86L2 22l5.32-1.4a9.9 9.9 0 0 0 4.72 1.2h.01c5.5 0 9.95-4.46 9.95-9.96 0-2.66-1.03-5.16-2.92-7.04A9.9 9.9 0 0 0 12.04 2Zm0 18.2h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.24 8.24 0 1 1 6.99 3.87Zm4.52-6.16c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.12-.16.25-.63.8-.78.96-.14.16-.29.18-.53.06-.25-.12-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.15.16-.25.24-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.23.25-.85.83-.85 2.03s.87 2.36 1 2.52c.12.16 1.7 2.6 4.13 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z" />
  </svg>
);

const IconArrowRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const IconStar = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.5l2.9 6.2 6.8.7-5.1 4.6 1.5 6.7L12 17.6 5.9 20.7l1.5-6.7-5.1-4.6 6.8-.7Z" />
  </svg>
);

const IconBook = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 5.5c2-1 5-1 8 0 3-1 6-1 8 0v13c-2-1-5-1-8 0-3-1-6-1-8 0Z" />
    <path d="M12 5.5v13" />
  </svg>
);

const IconPencil = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20l1-4.5L15.5 5 19 8.5 8.5 19 4 20Z" />
    <path d="M13 7l4 4" />
  </svg>
);

const IconBlocks = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <circle cx="17.5" cy="17.5" r="3.5" />
  </svg>
);

const IconAbc = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 17V9.5a2.5 2.5 0 0 1 5 0V17" />
    <path d="M3 13.5h5" />
    <path d="M10.5 7v10h3a3 3 0 0 0 0-6 3 3 0 0 0 0-6h-3Z" />
    <path d="M17.5 12a2.7 2.7 0 1 1 0 5c-1.2 0-2-.6-2.2-1" />
  </svg>
);

const IconMath = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="11" />
    <line x1="9" y1="8" x2="15" y2="8" />
    <line x1="4" y1="17" x2="10" y2="17" />
    <line x1="14" y1="17" x2="20" y2="17" />
  </svg>
);

const IconPuzzle = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 4h4v2.2a1.6 1.6 0 0 0 2.8 1.1c.5-.5 1.2-.8 1.9-.6 1 .3 1.6 1.3 1.3 2.3-.2.7-.8 1.2-1.5 1.4A1.6 1.6 0 0 0 16.4 14H20v4h-4v-2.2a1.6 1.6 0 0 0-2.8-1.1c-.5.5-1.2.8-1.9.6-1-.3-1.6-1.3-1.3-2.3.2-.7.8-1.2 1.5-1.4A1.6 1.6 0 0 0 10.4 8.4 1.6 1.6 0 0 0 9 6.2Z" />
  </svg>
);

const IconCalendarStar = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3.5" y="5" width="17" height="15" rx="2" />
    <line x1="3.5" y1="9.5" x2="20.5" y2="9.5" />
    <line x1="8" y1="3" x2="8" y2="6.5" />
    <line x1="16" y1="3" x2="16" y2="6.5" />
    <path d="M12 12l.8 1.7 1.9.2-1.4 1.3.4 1.9-1.7-1-1.7 1 .4-1.9-1.4-1.3 1.9-.2Z" fill="currentColor" stroke="none" />
  </svg>
);

const IconBulb = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 18h6" />
    <path d="M10 21h4" />
    <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.9V16h5v-.2c0-.8.4-1.5 1-1.9A6 6 0 0 0 12 3Z" />
  </svg>
);

const IconClock = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <polyline points="12 7 12 12 15.5 14" />
  </svg>
);

const IconHeart = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20.5s-7.5-4.6-9.7-9.2C.7 8 2.3 4.8 5.6 4.2c1.9-.3 3.7.6 4.9 2.2 1.2-1.6 3-2.5 4.9-2.2 3.3.6 4.9 3.8 3.3 7.1-2.2 4.6-9.7 9.2-9.7 9.2Z" />
  </svg>
);

const IconCloudDown = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 17.5A4.5 4.5 0 0 1 8 8.6 5.5 5.5 0 0 1 18.6 10 4 4 0 0 1 18 17.5H7Z" />
    <line x1="12" y1="11" x2="12" y2="18" />
    <polyline points="9.2 15.5 12 18.3 14.8 15.5" />
  </svg>
);

/* =========================================================
   DADOS ESTÁTICOS
   ========================================================= */
const categorias = [
  { nome: "Educação Infantil", Icon: IconBlocks },
  { nome: "Alfabetização", Icon: IconAbc },
  { nome: "Matemática", Icon: IconMath },
  { nome: "Português", Icon: IconBook },
  { nome: "Jogos Educativos", Icon: IconPuzzle },
  { nome: "Datas Comemorativas", Icon: IconCalendarStar },
];

const produtos = [
  { nome: "Alfabeto Ilustrado", categoria: "Alfabetização", preco: "R$ 19,90" },
  { nome: "Jogo da Memória dos Números", categoria: "Matemática", preco: "R$ 24,90" },
  { nome: "Atividades de Coordenação Motora", categoria: "Educação Infantil", preco: "R$ 15,90" },
  { nome: "Caça-Palavras Divertido", categoria: "Português", preco: "R$ 12,90" },
  { nome: "Bingo das Vogais", categoria: "Alfabetização", preco: "R$ 18,90" },
  { nome: "Tabuada Ilustrada", categoria: "Matemática", preco: "R$ 16,90" },
  { nome: "Kit Festa Junina", categoria: "Datas Comemorativas", preco: "R$ 22,90" },
  { nome: "Quebra-Cabeça dos Bichos", categoria: "Educação Infantil", preco: "R$ 21,90" },
  { nome: "Dominó de Sílabas", categoria: "Português", preco: "R$ 17,90" },
  { nome: "Formas Geométricas", categoria: "Matemática", preco: "R$ 14,90" },
  { nome: "Memória das Profissões", categoria: "Jogos Educativos", preco: "R$ 19,90" },
  { nome: "Calendário Escolar Ilustrado", categoria: "Datas Comemorativas", preco: "R$ 13,90" },
  { nome: "Trilha da Leitura", categoria: "Alfabetização", preco: "R$ 20,90" },
];

const beneficios = [
  {
    Icon: IconBulb,
    titulo: "Materiais criativos",
    texto: "Atividades pensadas para tornar as aulas mais interessantes e envolventes.",
  },
  {
    Icon: IconClock,
    titulo: "Prontos para usar",
    texto: "Economize tempo com materiais completos e preparados para aplicar em sala.",
  },
  {
    Icon: IconHeart,
    titulo: "Feitos para professores",
    texto: "Conteúdos desenvolvidos pensando nas necessidades reais da sala de aula.",
  },
  {
    Icon: IconCloudDown,
    titulo: "Acesso digital",
    texto: "Receba seus materiais de forma prática, rápida e segura.",
  },
];

/* =========================================================
   APP
   ========================================================= */
function Loja() {
  return (
    <>

    <div className="site">
      {/* ============ HEADER ============ */}
      <header className="header">
        <div className="container header-inner">
          <a href="#" className="logo">
            <span className="logo-icone">
              <IconPencil />
            </span>
            <span className="logo-texto">
              Dicas<span className="logo-destaque">Prof</span>
            </span>
          </a>

          <nav className="nav-desktop">
            <a href="#inicio">Início</a>
            <a href="#produtos">Materiais</a>
            <a href="#categorias">Categorias</a>
            <a href="#sobre">Sobre nós</a>
          </nav>

          <div className="header-acoes">
            <button className="icone-busca" aria-label="Buscar">
              <IconSearch />
            </button>
            <a href="#" className="botao botao-amarelo botao-whatsapp">
              <IconWhatsapp />
              <span>WhatsApp</span>
            </a>
            <button className="botao-menu" aria-label="Abrir menu">
              <IconMenu />
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* ============ HERO ============ */}
        <section className="hero" id="inicio">
          <div className="container hero-inner">
            <div className="hero-conteudo">
              <span className="hero-eyebrow">
                <IconStar className="hero-eyebrow-star" />
                Feito para professoras como você
              </span>
              <h1 className="hero-titulo">
                Materiais que <span className="destaque-laranja">transformam</span> o jeito de{" "}
                <span className="destaque-amarelo">ensinar</span>.
              </h1>
              <p className="hero-descricao">
                Atividades, jogos e recursos pedagógicos preparados para deixar suas aulas mais
                criativas e divertidas.
              </p>
              <div className="hero-botoes">
                <a href="#produtos" className="botao botao-amarelo">
                  Ver materiais
                  <IconArrowRight />
                </a>
                <a href="#sobre" className="botao botao-contorno">
                  Conheça a Dicas Da Prof
                </a>
              </div>
            </div>

            <div className="hero-ilustracao">
              <div className="hero-ilustracao-fundo">
                <IconStar className="ilustracao-estrela estrela-1" />
                <IconStar className="ilustracao-estrela estrela-2" />
                <IconStar className="ilustracao-estrela estrela-3" />
                <div className="ilustracao-caderno">
                  <div className="caderno-linha" />
                  <div className="caderno-linha" />
                  <div className="caderno-linha curta" />
                </div>
                <div className="ilustracao-livro">
                  <IconBook className="livro-icone" />
                </div>
                <div className="ilustracao-lapis">
                  <IconPencil className="lapis-icone" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============ CATEGORIAS ============ */}
        <section className="categorias" id="categorias">
          <div className="container">
            <h2 className="titulo-secao">Encontre o material ideal para sua aula</h2>
            <div className="categorias-grid">
              {categorias.map((cat) => (
                <a href="#produtos" className="categoria-card" key={cat.nome}>
                  <span className="categoria-icone">
                    <cat.Icon />
                  </span>
                  <span className="categoria-nome">{cat.nome}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ============ PRODUTOS ============ */}
        <section className="produtos" id="produtos">
          <div className="container">
            <div className="produtos-cabecalho">
              <h2 className="titulo-secao">Nossos materiais em destaque</h2>
              <a href="#" className="link-ver-todos">
                Ver todos os materiais
                <IconArrowRight />
              </a>
            </div>

            <div className="produtos-grid">
              {produtos.map((produto) => (
                <div className="produto-card" key={produto.nome}>
                  <div className="produto-imagem">
                    {/* Substituir por <img src="/caminho-da-imagem.jpg" alt={produto.nome} /> */}
                    <IconBook className="produto-imagem-icone" />
                  </div>
                  <div className="produto-info">
                    <span className="produto-categoria">{produto.categoria}</span>
                    <h3 className="produto-nome">{produto.nome}</h3>
                    <div className="produto-rodape">
                      <span className="produto-preco">{produto.preco}</span>
                      <button className="botao botao-amarelo botao-comprar">Comprar</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ BENEFÍCIOS ============ */}
        <section className="beneficios" id="sobre">
          <div className="container">
            <h2 className="titulo-secao titulo-secao-centro">Por que escolher a Dicas Da Prof?</h2>
            <div className="beneficios-grid">
              {beneficios.map((b) => (
                <div className="beneficio-card" key={b.titulo}>
                  <span className="beneficio-icone">
                    <b.Icon />
                  </span>
                  <h3 className="beneficio-titulo">{b.titulo}</h3>
                  <p className="beneficio-texto">{b.texto}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ CTA FINAL ============ */}
        <section className="cta-final">
          <div className="cta-decoracao">
            <IconStar className="cta-estrela cta-estrela-1" />
            <IconStar className="cta-estrela cta-estrela-2" />
            <IconBook className="cta-icone-decor cta-livro" />
            <IconPencil className="cta-icone-decor cta-lapis" />
          </div>
          <div className="container cta-conteudo">
            <h2 className="cta-titulo">Pronta para deixar suas aulas ainda mais especiais?</h2>
            <p className="cta-texto">
              Encontre atividades e materiais preparados com muito carinho para você.
            </p>
            <a href="#produtos" className="botao botao-amarelo">
              Ver todos os materiais
              <IconArrowRight />
            </a>
          </div>
        </section>
      </main>

      {/* ============ FOOTER ============ */}
      <footer className="footer">
        <div className="container footer-topo">
          <div className="footer-coluna footer-marca">
            <a href="#" className="logo logo-footer">
              <span className="logo-icone">
                <IconPencil />
              </span>
              <span className="logo-texto">
                Dicas<span className="logo-destaque">Prof</span>
              </span>
            </a>
            <p className="footer-descricao">
              Materiais pedagógicos criados com carinho para tornar o seu ensino mais leve,
              criativo e divertido.
            </p>
          </div>

          <div className="footer-coluna">
            <h4 className="footer-titulo">Navegação</h4>
            <ul className="footer-lista">
              <li><a href="#inicio">Início</a></li>
              <li><a href="#produtos">Materiais</a></li>
              <li><a href="#categorias">Categorias</a></li>
              <li><a href="#sobre">Sobre nós</a></li>
            </ul>
          </div>

          <div className="footer-coluna">
            <h4 className="footer-titulo">Categorias</h4>
            <ul className="footer-lista">
              <li><a href="#produtos">Educação Infantil</a></li>
              <li><a href="#produtos">Alfabetização</a></li>
              <li><a href="#produtos">Matemática</a></li>
              <li><a href="#produtos">Português</a></li>
              <li><a href="#produtos">Jogos Educativos</a></li>
              <li><a href="#produtos">Datas Comemorativas</a></li>
            </ul>
          </div>

          <div className="footer-coluna">
            <h4 className="footer-titulo">Contato</h4>
            <ul className="footer-lista">
              <li><a href="#">WhatsApp</a></li>
              <li><a href="#">Instagram</a></li>
              <li><a href="#">Email</a></li>
            </ul>
          </div>

          <div className="footer-coluna footer-newsletter">
            <h4 className="footer-titulo">Receba novidades</h4>
            <p className="footer-newsletter-texto">
              Novidades e materiais exclusivos direto no seu email.
            </p>
            <form className="footer-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Seu melhor email" className="footer-input" />
              <button type="submit" className="botao botao-amarelo footer-botao">
                Enviar
              </button>
            </form>
          </div>
        </div>

        <div className="footer-base">
          <div className="container">
            <p>© 2026 Dicas Da Prof. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
    </>
  )
}

export default Loja
