import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Crown, Drop, EnvelopeSimple, Eye,
  FacebookLogo, Feather, FlowerLotus, InstagramLogo, List, MapPin, PaintBrush, Scissors,
  Sparkle, Star, WhatsappLogo, X,
} from "@phosphor-icons/react";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";

const whatsappUrl = "https://wa.me/558688970006?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20Silvia%27s%20Hair.";
const whatsappForProcedure = (procedure) => `https://wa.me/558688970006?text=${encodeURIComponent(`Olá! Vi no site o procedimento ${procedure} e gostaria de agendar.`)}`;
const whatsappForOffer = (offer) => `https://wa.me/558688970006?text=${encodeURIComponent(`Olá! Vi no site a condição especial ${offer} e gostaria de confirmar a disponibilidade e agendar.`)}`;
const whatsappForDepilation = `https://wa.me/558688970006?text=${encodeURIComponent("Olá! Vi no site o serviço de depilação e gostaria de consultar áreas, valores e agendar.")}`;

const navItems = [
  ["Sobre", "/#sobre"], ["Serviços", "/#servicos"], ["Combos", "/#combos"], ["Resultados", "/#resultados"],
  ["Conteúdos", "/conteudos"], ["Unidades", "/#unidades"],
];

const services = [
  { icon: Scissors, title: "Cabelos", text: "Cortes femininos, masculinos e infantis, finalizações e cuidados para cada tipo de fio." },
  { icon: PaintBrush, title: "Coloração", text: "Coloração, tonalização, mechas e iluminação pensadas para valorizar cada estilo." },
  { icon: Crown, title: "Mega Hair", text: "Alongamentos com acabamento natural, volume e comprimento em perfeita harmonia." },
  { icon: Drop, title: "Tratamentos", text: "Hidratação, reconstrução, nutrição e recuperação da saúde dos fios." },
  { icon: FlowerLotus, title: "Limpeza de pele", text: "Higienização profunda, esfoliação e cuidados para renovar a pele com delicadeza." },
  { icon: Sparkle, title: "Penteados", text: "Criações para eventos, festas, noivas e ocasiões especiais." },
  { icon: Eye, title: "Maquiagem", text: "Maquiagens personalizadas para realçar sua beleza com elegância." },
  { icon: Feather, title: "Depilação", text: "Cuidados para diferentes áreas do corpo, com atendimento delicado e atenção ao conforto." },
];

const featuredCombo = {
  title: "Escova + lavagem + manicure e pedicure",
  price: "R$ 159,90",
  note: "Exceto cabelo extra longo ou com mega hair.",
};

const comboOffers = [
  { title: "Manicure + pedicure", oldPrice: "R$ 80,00", price: "R$ 70,00" },
  { title: "Escova + higienização Wella", price: "R$ 100,00", note: "Exceto cabelo extra longo ou com mega hair." },
  { title: "Sobrancelhas", oldPrice: "R$ 40,00", price: "R$ 30,00" },
  { title: "Alongamento de cílios", detail: "Fio a fio ou brasileiro", oldPrice: "R$ 180,00", price: "R$ 150,00" },
  { title: "Selagem feminina", prefix: "A partir de", price: "R$ 200,00" },
  { title: "Hidratação Wella ou L’Oréal + escova", price: "R$ 180,00", note: "Exceto cabelo extra longo ou com mega hair." },
  { title: "Corte feminino", oldPrice: "R$ 120,00", price: "R$ 100,00" },
  { title: "Mega hair", prefix: "A partir de", price: "R$ 1.000,00" },
];

const depilationOffers = [
  { title: "Buço", price: "R$ 25,00" },
  { title: "Axilas", price: "R$ 40,00" },
  { title: "Meia perna", price: "R$ 40,00" },
  { title: "Perna completa", price: "R$ 90,00" },
  { title: "Costas na cera", prefix: "A partir de", price: "R$ 70,00" },
  { title: "Barriga", prefix: "A partir de", price: "R$ 40,00" },
];

const gallery = [
  { src: "/assets/real/img_3833.webp", alt: "Finalização de cabelo com escova no Silvia's Hair" },
  { src: "/assets/real/img_3807.webp", alt: "Produção de noiva com penteado e maquiagem" },
  { src: "/assets/real/img_3805.webp", alt: "Manicure com francesinha delicada" },
  { src: "/assets/real/img_3830.webp", alt: "Corte infantil realizado na barbearia Silvia's Hair" },
  { src: "/assets/real/procedure-maquiagem-alt.webp", alt: "Maquiagem com acabamento sofisticado" },
  { src: "/assets/real/img_3834.webp", alt: "Cuidado capilar com toalha personalizada do Silvia's Hair" },
  { src: "/assets/real/procedure-penteado-alt.webp", alt: "Penteado com acabamento elaborado realizado no Silvia's Hair" },
  { src: "/assets/real/procedure-limpeza-pele.webp", alt: "Procedimento de limpeza de pele realizado no Silvia's Hair" },
];

const resultServices = [
  { title: "Megahair", message: "de megahair", src: "/assets/real/img_3833.webp", alt: "Cabelo longo com movimento e acabamento natural no Silvia's Hair" },
  { title: "Penteado", message: "de penteado", src: "/assets/real/portfolio-penteado.webp", alt: "Penteado com acabamento elaborado realizado no Silvia's Hair" },
  { title: "Maquiagem", message: "de maquiagem", src: "/assets/real/img_3804.webp", alt: "Maquiagem com acabamento iluminado realizada no Silvia's Hair" },
  { title: "Noiva", message: "para noiva", src: "/assets/real/portfolio-noiva.webp", alt: "Produção de noiva realizada pelo Silvia's Hair" },
  { title: "Nail Design", message: "de nail design", src: "/assets/real/img_3831.webp", alt: "Unhas com nail art em tons nude e terrosos" },
  { title: "Barbearia", message: "da barbearia", src: "/assets/real/img_3838.webp", alt: "Atendimento realizado na barbearia Silvia's Hair" },
];

const reviews = [
  { name: "Pedro Silva", text: "Amei a experiência no salão, profissionais incríveis e atenciosos, super recomendo ❤️", unit: "Teresina Shopping" },
  { name: "Solange Lacerda", text: "Amo fazer minha unha com Sandra, ela é maravilhosa… ela conhece direitinho como é minha unha. Ahh.. sobre o novo espaço da Silvia’s Hair, tá muito confortável, amei!!!!!!", unit: "Teresina Shopping" },
  { name: "Laiana Lopes", text: "Aqui vc encontra tudo que procura em termos de beleza,conforto e segurança.", unit: "Teresina Shopping" },
  { name: "Liliane Mayumi", text: "Primeira vez que faço unha em Teresina e tive a benção de fazer com a Michele. Ela além de muito querida é bastante profissional. Fiz plástica dos pés e mão... amei", unit: "Teresina Shopping", rating: 4 },
  { name: "Joaquina Alves", text: "Atendimento maravilhoso! As meninas todas foram super acolhedoras e gentis. E trabalho foi excelente da Tay.", unit: "Shopping Rio Poty" },
  { name: "Márcia Costa", text: "Bons profissionais, bons produtos, bom atendimento. Cheguei na tarde de um domingo e fui atendida prontamente. Salvou minha semana. Recomendado.", unit: "Shopping Rio Poty" },
  { name: "Pedro Mamede Rodrigues", text: "Eu gosto muito de cortar o cabelo com o Fábio porque ele sabe cortar muito bem, e também gosto do atendimento da dona Sílvia e das funcionárias.", unit: "Shopping Rio Poty" },
];

const journalArticles = [
  {
    category: "Reconhecimento",
    date: "27 de fevereiro de 2026",
    title: "Silvia's Hair está entre as Marcas Inesquecíveis 2025",
    readTime: "3 min de leitura",
    excerpt: "O reconhecimento celebra uma trajetória construída com cuidado, confiança e presença na memória dos piauienses.",
    image: "/assets/news/marcas-inesqueciveis-entrevista.webp",
    alt: "Sílvia Meneses durante entrevista no evento Marcas Inesquecíveis 2025",
    ctaHref: whatsappUrl,
    ctaLabel: "Agendar um horário",
    source: "https://portalodia.com/marcas-inesqueciveis-2025/marcas-inesqueciveis-2025-veja-como-foi-o-evento-que-premiou-as-empresas-mais-lembradas-pelos-piauienses-455146.html",
    gallery: [
      { src: "/assets/news/marcas-inesqueciveis-painel.webp", alt: "Sílvia Meneses diante do painel do Marcas Inesquecíveis 2025" },
      { src: "/assets/news/marcas-inesqueciveis-premiacao.jpg", alt: "Sílvia Meneses recebendo o troféu no evento Marcas Inesquecíveis 2025" },
      { src: "/assets/news/marcas-inesqueciveis-silvia-destaque.webp", alt: "Sílvia Meneses no evento Marcas Inesquecíveis 2025" },
      { src: "/assets/news/marcas-inesqueciveis-palco.webp", alt: "Sílvia Meneses durante a cerimônia do Marcas Inesquecíveis 2025" },
      { src: "/assets/news/marcas-inesqueciveis-recepcao.jpg", alt: "Sílvia Meneses no evento Marcas Inesquecíveis 2025" },
    ],
    photoCredit: "Créditos: Rômulo Piauilino e Assis Fernandes / O Dia.",
    body: [
      "O Silvia's Hair viveu uma noite especial ao ser reconhecido entre as empresas mais lembradas pelos piauienses na 11ª edição do Marcas Inesquecíveis 2025.",
      "Realizada no Theresina Hall, a premiação reuniu 29 marcas de diferentes segmentos, escolhidas a partir do levantamento Top of Mind promovido pelo Sistema O Dia.",
      "Para Sílvia Meneses, o reconhecimento traduz uma história construída diariamente com dedicação, atendimento próximo e a confiança de clientes que acompanham o salão ao longo dos anos.",
      "Mais do que uma celebração, a conquista reforça o compromisso do Silvia's Hair de continuar evoluindo sem perder aquilo que tornou a marca inesquecível: cuidado, técnica e personalidade.",
    ],
  },
  {
    category: "Noivas", title: "Dia de Noiva: como se preparar para o grande momento",
    readTime: "4 min de leitura",
    excerpt: "Planejamento, testes e cuidados que ajudam a viver o grande dia com mais tranquilidade.",
    image: "/assets/real/img_3809.webp", alt: "Produção de noiva realizada pelo Silvia's Hair", message: "para noiva",
    body: [
      "A preparação da noiva começa bem antes da cerimônia. Uma conversa inicial ajuda a alinhar estilo, personalidade, vestido, acessórios e o resultado desejado para cabelo e maquiagem.",
      "Testes prévios e um cronograma de cuidados deixam o dia mais leve. Limpeza de pele, mudanças de cor e escolha dos acessórios devem ser planejadas com antecedência para que cada detalhe converse com o conjunto.",
    ],
  },
  {
    category: "Cabelos", title: "Tesouraterapia: cuidado sem perder o comprimento",
    readTime: "3 min de leitura",
    excerpt: "Uma técnica minuciosa para remover pontas danificadas e preservar o formato dos fios.",
    image: "/assets/real/img_3803.webp", alt: "Sílvia Meneses realizando um corte no Silvia's Hair", message: "de tratamento capilar",
    body: [
      "A tesouraterapia é uma alternativa para quem deseja cuidar das pontas quebradas sem alterar de forma significativa o comprimento ou o desenho do corte.",
      "O procedimento é feito de maneira detalhada, fio a fio, e pode ajudar a devolver uma aparência mais alinhada e luminosa ao cabelo. A indicação ideal depende de uma avaliação profissional.",
    ],
  },
  {
    category: "Mega Hair", title: "Como preservar um Mega Hair bonito e natural",
    readTime: "4 min de leitura",
    excerpt: "Hábitos de manutenção que ajudam a proteger o alongamento e os fios naturais.",
    image: "/assets/real/img_3833.webp", alt: "Cabelo longo com acabamento natural no Silvia's Hair", message: "de megahair",
    body: [
      "Um resultado natural depende tanto da aplicação quanto da rotina de cuidados. Escovação delicada, produtos adequados e atenção à região das emendas fazem parte da manutenção.",
      "O intervalo de retorno varia conforme a técnica e o crescimento do cabelo. A equipe pode orientar a frequência ideal e os tratamentos mais indicados para cada caso.",
    ],
  },
  {
    category: "Unhas", title: "Unhas alongadas: cuidados essenciais no dia a dia",
    readTime: "3 min de leitura",
    excerpt: "Pequenas atitudes para manter o acabamento bonito até a próxima manutenção.",
    image: "/assets/real/img_3831.webp", alt: "Unhas alongadas com acabamento delicado", message: "de nail design",
    body: [
      "Evitar impactos, usar luvas ao manusear produtos de limpeza e não remover o material em casa ajuda a preservar as unhas e o acabamento.",
      "A manutenção deve ser feita no período orientado pela profissional. Assim, é possível acompanhar o crescimento, corrigir eventuais descolamentos e manter as unhas cuidadas com segurança.",
    ],
  },
];

const journalMeta = (article) => [article.category, article.date, article.readTime].filter(Boolean).join(" · ");

const getInitials = (name) => name
  .split(" ")
  .filter(Boolean)
  .slice(0, 2)
  .map((part) => part[0])
  .join("")
  .toUpperCase();

const units = [
  {
    name: "Teresina Shopping", image: "/assets/real/img_3819.webp", imageAlt: "Espaço interno da unidade Teresina Shopping",
    address: "Av. Raul Lopes, 1000 · Lojas 267/268/269 · Teresina — PI",
    hours: "Segunda a sábado, 10h às 22h · Domingos, 14h às 20h",
    maps: "https://www.google.com/maps/search/?api=1&query=Silvia%27s+Hair+Teresina+Shopping",
  },
  {
    name: "Shopping Rio Poty", image: "/assets/real/img_3813.webp", imageAlt: "Espaço de beleza da unidade Shopping Rio Poty",
    address: "Av. Marechal Castelo Branco, 911 · Piso L3 · Teresina — PI",
    hours: "Segunda a sábado, 10h às 22h · Domingos, 15h às 21h",
    maps: "https://www.google.com/maps/search/?api=1&query=Silvia%27s+Hair+Shopping+Rio+Poty",
  },
];

function AppButton({ href, children, light = false, className = "" }) {
  const external = href.startsWith("http");
  return (
    <a className={`button ${light ? "button--light" : ""} ${className}`} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
      <span>{children}</span><ArrowUpRight size={18} aria-hidden="true" />
    </a>
  );
}

function BrandLockup({ variant = "header" }) {
  return (
    <a className={`brand-lockup brand-lockup--${variant}`} href="/" aria-label="Silvia's Hair — Estilo e Personalidade — início">
      <span className="brand-lockup__mark" aria-hidden="true" />
      <span className="brand-lockup__copy">
        <strong>Silvia's Hair</strong>
        <small>Estilo e Personalidade</small>
      </span>
    </a>
  );
}

function shouldShowBrandIntro() {
  if (typeof window === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
  const isPreview = new URLSearchParams(window.location.search).get("intro") === "1";
  return isPreview || window.sessionStorage.getItem("silvias-brand-intro-seen") !== "1";
}

export function App() {
  const journalPath = window.location.pathname.replace(/\/+$/, "");
  const isJournalPage = journalPath === "/conteudos" || journalPath === "/dicas";
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeReview, setActiveReview] = useState(0);
  const [reviewsPaused, setReviewsPaused] = useState(false);
  const [introVisible, setIntroVisible] = useState(() => !isJournalPage && shouldShowBrandIntro());
  const [activeArticle, setActiveArticle] = useState(null);
  const galleryLoopTimer = useRef(null);
  const articleCloseRef = useRef(null);

  useEffect(() => {
    document.title = isJournalPage ? "Conteúdos | Silvia's Hair" : "Silvia's Hair | Estilo e Personalidade";
  }, [isJournalPage]);

  useEffect(() => {
    if (!introVisible) return undefined;

    const isPreview = new URLSearchParams(window.location.search).get("intro") === "1";
    if (!isPreview) window.sessionStorage.setItem("silvias-brand-intro-seen", "1");

    const timer = window.setTimeout(() => setIntroVisible(false), 1850);
    return () => {
      window.clearTimeout(timer);
    };
  }, [introVisible]);

  useEffect(() => {
    const id = window.location.hash.slice(1);
    const target = id ? document.getElementById(id) : null;
    if (!target) return undefined;

    let cancelled = false;
    document.fonts.ready.then(() => {
      if (!cancelled) target.scrollIntoView({ block: "start" });
    });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (reviewsPaused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const timer = window.setInterval(() => setActiveReview((current) => (current + 1) % reviews.length), 4600);
    return () => window.clearInterval(timer);
  }, [reviewsPaused]);

  useEffect(() => () => window.clearTimeout(galleryLoopTimer.current), []);

  useEffect(() => {
    if (!activeArticle) return undefined;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event) => { if (event.key === "Escape") setActiveArticle(null); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    articleCloseRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [activeArticle]);

  const changeReview = (direction) => {
    setActiveReview((current) => (current + direction + reviews.length) % reviews.length);
  };

  const keepGalleryLooping = (event) => {
    if (!window.matchMedia("(max-width: 720px)").matches) return;
    const galleryViewport = event.currentTarget;
    window.clearTimeout(galleryLoopTimer.current);
    galleryLoopTimer.current = window.setTimeout(() => {
      const galleryItems = galleryViewport.querySelectorAll(".marquee__track img");
      const firstRepeatedItem = galleryItems[gallery.length];
      if (!galleryItems[0] || !firstRepeatedItem) return;

      const loopWidth = firstRepeatedItem.offsetLeft - galleryItems[0].offsetLeft;
      if (galleryViewport.scrollLeft >= loopWidth) {
        galleryViewport.scrollTo({ left: galleryViewport.scrollLeft - loopWidth, behavior: "auto" });
      }
    }, 140);
  };

  return (
    <div className={`site-shell ${introVisible ? "site-shell--intro" : ""}`}>
      {introVisible && (
        <div className="brand-intro" aria-hidden="true">
          <div className="brand-intro__lockup">
            <span className="brand-intro__mark" />
            <span className="brand-intro__copy">
              <strong>Silvia's Hair</strong>
              <small>Estilo e Personalidade</small>
            </span>
          </div>
          <span className="brand-intro__rule" />
        </div>
      )}
      <header className="site-header">
        <BrandLockup />
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </nav>
        <a className="header-cta" href={whatsappUrl} target="_blank" rel="noreferrer">Agendar horário</a>
        <button className="menu-trigger" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={26} /> : <List size={27} />}
        </button>
      </header>
      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`}>
        {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        <AppButton href={whatsappUrl} light>Agendar horário</AppButton>
      </div>

      <main>
        {isJournalPage ? (
          <>
            <section className="journal-page-hero" id="top" aria-labelledby="journal-page-title">
              <div className="page-width journal-page-hero__content">
                <a className="journal-page-hero__back" href="/"><ArrowLeft size={17} /> Voltar ao site</a>
                <p className="eyebrow eyebrow--light">Conteúdos Silvia's Hair</p>
                <h1 id="journal-page-title">Beleza em<br />conteúdo.</h1>
                <p>Um espaço com novidades do salão, cuidados, procedimentos e inspirações para acompanhar cada escolha com mais informação.</p>
              </div>
            </section>

            <section className="journal journal-page section section--ivory" aria-labelledby="journal-index-title">
              <div className="page-width">
                <div className="section-heading section-heading--split journal__heading">
                  <div><p className="eyebrow">Conteúdos e novidades</p><h2 id="journal-index-title">Novidades, beleza<br />e cuidado.</h2></div>
                  <p>Artigos da equipe Silvia's Hair para conhecer tendências, entender procedimentos e preservar seus resultados.</p>
                </div>
                <div className="journal__layout">
                  <article className="journal-feature">
                    <img src={journalArticles[0].image} alt={journalArticles[0].alt} />
                    <div className="journal-feature__body">
                      <span className="journal-meta">{journalMeta(journalArticles[0])}</span>
                      <h3>{journalArticles[0].title}</h3>
                      <p>{journalArticles[0].excerpt}</p>
                      <button className="text-link text-link--light" type="button" onClick={() => setActiveArticle(journalArticles[0])}>Ler conteúdo <ArrowRight size={18} /></button>
                    </div>
                  </article>
                  <div className="journal__side" aria-label="Mais conteúdos do Silvia's Hair">
                    {journalArticles.slice(1).map((article) => (
                      <article className="journal-card" key={article.title}>
                        <img src={article.image} alt={article.alt} />
                        <div className="journal-card__body">
                          <span className="journal-meta">{journalMeta(article)}</span>
                          <h3>{article.title}</h3>
                          <p>{article.excerpt}</p>
                          <button className="text-link" type="button" onClick={() => setActiveArticle(article)}>Ler artigo <ArrowRight size={17} /></button>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
                <p className="journal__note">Conteúdos informativos não substituem a avaliação profissional. Procedimentos e recomendações podem variar para cada pessoa.</p>
              </div>
            </section>

            <section className="journal-page-cta section section--beige">
              <div className="page-width journal-page-cta__inner">
                <div><p className="eyebrow">Atendimento personalizado</p><h2>Quer descobrir o cuidado ideal para você?</h2></div>
                <AppButton href={whatsappUrl}>Conversar com a equipe</AppButton>
              </div>
            </section>

            {activeArticle && (
              <div className="article-modal" role="dialog" aria-modal="true" aria-labelledby="article-modal-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setActiveArticle(null); }}>
                <article className="article-modal__panel">
                  <button ref={articleCloseRef} className="article-modal__close" type="button" aria-label="Fechar conteúdo" onClick={() => setActiveArticle(null)}><X size={22} /></button>
                  <img src={activeArticle.image} alt={activeArticle.alt} />
                  <div className="article-modal__body">
                    <span className="journal-meta">{journalMeta(activeArticle)}</span>
                    <h2 id="article-modal-title">{activeArticle.title}</h2>
                    {activeArticle.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    {activeArticle.gallery?.length > 0 && (
                      <div className="article-modal__gallery" aria-label="Fotos da matéria">
                        {activeArticle.gallery.map((photo) => (
                          <figure key={photo.src}><img src={photo.src} alt={photo.alt} /></figure>
                        ))}
                      </div>
                    )}
                    {activeArticle.photoCredit && <p className="article-modal__credit">{activeArticle.photoCredit}</p>}
                    {activeArticle.source && (
                      <a className="article-modal__source" href={activeArticle.source} target="_blank" rel="noreferrer">
                        Ler a cobertura completa no Portal O Dia <ArrowUpRight size={17} />
                      </a>
                    )}
                    <div className="article-modal__footer">
                      <span>Conteúdo assinado pela equipe Silvia's Hair.</span>
                      <AppButton href={activeArticle.ctaHref || whatsappForProcedure(activeArticle.message)}>{activeArticle.ctaLabel || "Agendar este cuidado"}</AppButton>
                    </div>
                  </div>
                </article>
              </div>
            )}
          </>
        ) : (
          <>
        <section className="hero" id="top" aria-labelledby="hero-title">
          <img className="hero__image" src="/assets/hero-silvia.webp" alt="Sílvia Meneses realizando um corte no Silvia's Hair" />
          <div className="hero__veil" />
          <div className="hero__content page-width">
            <p className="eyebrow eyebrow--light">Referência em Teresina</p>
            <h1 id="hero-title">Beleza que revela<br />a sua melhor versão.</h1>
            <p className="hero__lead">Atendimento acolhedor e resultados pensados para você.</p>
            <div className="hero__actions">
              <AppButton href={whatsappUrl} light>Agendar horário</AppButton>
              <a className="text-link text-link--light" href="#sobre">Conheça nossa história <ArrowRight size={18} /></a>
            </div>
          </div>
          <a className="hero__scroll" href="#sobre" aria-label="Ir para a seção sobre"><span>Descubra</span><ArrowRight size={18} /></a>
        </section>

        <section className="about section section--beige" id="sobre">
          <div className="page-width about__grid">
            <div className="about__copy">
              <p className="eyebrow">Sobre a Silvia</p>
              <h2>Uma trajetória dedicada a transformar autoestima.</h2>
              <div className="gold-rule" />
              <p>O Silvia's Hair nasceu da paixão de Sílvia Meneses pelo cuidado, pela beleza e pela transformação.</p>
              <p>Sua carreira foi construída com constante aperfeiçoamento, formação profissional e dedicação a cada cliente.</p>
              <p>Hoje, esse legado se traduz em um salão onde técnica, atendimento e atenção aos detalhes caminham juntos.</p>
              <a className="text-link" href="#servicos">Explore nossos serviços <ArrowRight size={18} /></a>
            </div>
            <figure className="about__media">
              <img src="/assets/silvia-meneses.png" alt="Sílvia Meneses no salão segurando suas tesouras de cabeleireira" />
              <figcaption><span>25+</span> anos de experiência</figcaption>
            </figure>
          </div>
        </section>

        <section className="services section section--ivory" id="servicos">
          <div className="page-width">
            <div className="section-heading section-heading--split">
              <div><p className="eyebrow">Serviços</p><h2>Cuidado pensado<br />para cada momento.</h2></div>
              <p>Do essencial às grandes produções, uma equipe preparada para ouvir, cuidar e transformar.</p>
            </div>
            <div className="services__list">
              {services.map(({ icon: Icon, title, text }, index) => (
                <article className="service" key={title}>
                  <span className="service__number">0{index + 1}</span><Icon className="service__icon" size={30} weight="thin" aria-hidden="true" />
                  <h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
            <a className="text-link services__link" href="#resultados">Conheça nossos resultados <ArrowRight size={18} /></a>
          </div>
        </section>

        <section className="combos section section--beige" id="combos">
          <div className="page-width">
            <div className="section-heading section-heading--split combos__heading">
              <div><p className="eyebrow">Combos especiais</p><h2>Cuidados que<br />combinam com você.</h2></div>
              <p>Condições especiais para reunir seus cuidados favoritos em uma única visita.</p>
            </div>

            <article className="combos__featured">
              <div className="combos__featured-copy">
                <p className="eyebrow eyebrow--light">Destaque da vez</p>
                <h3>{featuredCombo.title}</h3>
                <p>{featuredCombo.note}</p>
              </div>
              <div className="combos__featured-action">
                <div className="combo-price combo-price--featured"><span>Valor especial</span><strong>{featuredCombo.price}</strong></div>
                <AppButton href={whatsappForOffer(featuredCombo.title)} light>Quero este combo</AppButton>
              </div>
            </article>

            <p className="combos__mobile-hint" aria-hidden="true"><span>Deslize para ver os combos</span><ArrowRight size={18} /></p>
            <div className="combos__grid">
              {comboOffers.map((offer, index) => (
                <article className="combo-card" key={offer.title}>
                  <span className="combo-card__number">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{offer.title}</h3>
                  {offer.detail && <p className="combo-card__detail">{offer.detail}</p>}
                  <div className="combo-card__price">
                    {offer.oldPrice && <del>de {offer.oldPrice}</del>}
                    {offer.prefix && <small>{offer.prefix}</small>}
                    <strong>{offer.price}</strong>
                  </div>
                  {offer.note && <p className="combo-card__note">{offer.note}</p>}
                  <a className="text-link" href={whatsappForOffer(offer.title)} target="_blank" rel="noreferrer" aria-label={`Agendar ${offer.title} pelo WhatsApp`}>
                    Agendar <WhatsappLogo size={18} weight="fill" aria-hidden="true" />
                  </a>
                </article>
              ))}
            </div>

            <p className="combos__conditions">Ofertas válidas de segunda a quarta, exceto feriados. Consulte vigência, disponibilidade e formas de pagamento pelo WhatsApp.</p>

            <aside className="combos__depilation" aria-labelledby="depilation-title">
              <div className="combos__depilation-intro">
                <span className="combos__depilation-icon" aria-hidden="true"><Feather size={30} weight="thin" /></span>
                <div>
                  <p className="eyebrow">Depilação</p>
                  <h3 id="depilation-title">Cuidados para cada área, com delicadeza e conforto.</h3>
                  <p>Uma seleção dos procedimentos disponíveis. Consulte a tabela completa e confirme os valores pelo WhatsApp.</p>
                </div>
                <AppButton href={whatsappForDepilation}>Consultar e agendar</AppButton>
              </div>
              <div className="combos__depilation-list">
                {depilationOffers.map((offer) => (
                  <div className="depilation-item" key={offer.title}>
                    <span>{offer.title}</span>
                    <strong>{offer.prefix && <small>{offer.prefix}</small>}{offer.price}</strong>
                  </div>
                ))}
              </div>
              <p className="combos__depilation-note">Valores de referência sujeitos à confirmação de vigência, método e avaliação profissional.</p>
            </aside>
          </div>
        </section>

        <section className="results section section--black" id="resultados">
          <div className="page-width">
            <div className="results__header">
              <div><p className="eyebrow eyebrow--light">Portfólio</p><h2>Resultados que<br />falam por si.</h2></div>
              <div className="results__header-copy">
                <p>Cada transformação começa com uma história diferente. Veja uma seleção assinada pela equipe Silvia's Hair.</p>
                <a className="text-link text-link--light" href="#mais-trabalhos">Explorar mais procedimentos <ArrowRight size={18} /></a>
              </div>
            </div>
            <div className="results__mosaic">
              {resultServices.map((service) => (
                <figure className="result-shot" key={service.title}>
                  <img src={service.src} alt={service.alt} />
                  <figcaption>
                    <span className="result-shot__label">
                      <span>Procedimento</span>
                      <strong>{service.title}</strong>
                    </span>
                    <a className="result-shot__action" href={whatsappForProcedure(service.message)} target="_blank" rel="noreferrer" aria-label={`Agendar ${service.title} pelo WhatsApp`}>
                      <WhatsappLogo size={18} weight="fill" aria-hidden="true" /> Agendar
                    </a>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section className="works section--black" id="mais-trabalhos">
          <div className="page-width works__heading">
            <div><p className="eyebrow eyebrow--light">Inspiração</p><h2>Beleza em movimento.</h2></div><p>Produções recentes que revelam técnica, criatividade e versatilidade.</p>
          </div>
          <p className="page-width swipe-hint" aria-hidden="true">
            <span>Deslize para o lado</span><ArrowRight size={18} />
          </p>
          <div className="marquee" aria-label="Galeria de trabalhos em sequência contínua; no celular, deslize para ver mais" onScroll={keepGalleryLooping}>
            <div className="marquee__track">
              {[...gallery, ...gallery].map((item, index) => <img key={`${item.src}-${index}`} src={item.src} alt={index < gallery.length ? item.alt : ""} aria-hidden={index >= gallery.length} loading={index < gallery.length ? "lazy" : "eager"} />)}
            </div>
          </div>
          <div className="page-width works__footer">
            <a className="text-link text-link--light" href="https://instagram.com/silvias_hair/" target="_blank" rel="noreferrer"><InstagramLogo size={18} /> Acompanhe no Instagram <ArrowUpRight size={18} /></a>
          </div>
        </section>

        <section className="reviews section section--beige" id="avaliacoes">
          <div className="page-width">
            <div className="reviews__top">
              <div><p className="eyebrow">Experiências reais</p><h2>O que dizem sobre<br />o Silvia's Hair.</h2></div>
              <div className="google-context">
                <div className="google-score">
                  <strong>4,7</strong>
                  <div className="stars" aria-label="4,7 de 5 estrelas no Google Maps">
                    {[0,1,2,3].map((n) => <Star key={n} size={20} weight="fill" aria-hidden="true" />)}
                    <span className="star-partial" aria-hidden="true">
                      <Star className="star-partial__base" size={20} weight="fill" />
                      <span className="star-partial__fill"><Star size={20} weight="fill" /></span>
                    </span>
                  </div>
                </div>
                <span>Avaliações no Google</span>
              </div>
            </div>
            <div className="reviews__carousel" onMouseEnter={() => setReviewsPaused(true)} onMouseLeave={() => setReviewsPaused(false)} onFocus={() => setReviewsPaused(true)} onBlur={() => setReviewsPaused(false)}>
              <blockquote key={activeReview} aria-live="polite">
                <div className="review-card__author">
                  <span className="review-card__quote" aria-hidden="true">“</span>
                  <div className="review-person">
                    <span className="review-person__initials" aria-hidden="true">{getInitials(reviews[activeReview].name)}</span>
                    <span className="review-person__copy">
                      <strong>{reviews[activeReview].name}</strong>
                      <small>{reviews[activeReview].unit} · Google Maps</small>
                    </span>
                  </div>
                </div>
                <div className="review-card__content">
                  <div className="review-card__meta">
                    <div className="stars stars--small" aria-label={`${reviews[activeReview].rating ?? 5} de 5 estrelas`}>
                      {[0,1,2,3,4].map((n) => {
                        const isFilled = n < (reviews[activeReview].rating ?? 5);
                        return <Star key={n} className={isFilled ? undefined : "is-empty"} size={17} weight={isFilled ? "fill" : "regular"} aria-hidden="true" />;
                      })}
                    </div>
                    <span className="review-card__counter">{String(activeReview + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}</span>
                  </div>
                  <p>{reviews[activeReview].text}</p>
                  <footer className="review-card__footer">
                    <a className="text-link" href="https://www.google.com/maps/search/Silvia%27s+Hair+Teresina" target="_blank" rel="noreferrer">Conferir no Google <ArrowUpRight size={18} /></a>
                    <div className="reviews__controls" aria-label="Controles das avaliações">
                      <button type="button" aria-label="Avaliação anterior" onClick={() => changeReview(-1)}><ArrowLeft size={18} /></button>
                      <div className="reviews__dots">
                        {reviews.map((review, index) => <button key={`${review.unit}-${index}`} type="button" className={index === activeReview ? "is-active" : ""} aria-label={`Ir para avaliação ${index + 1}`} aria-current={index === activeReview ? "true" : undefined} onClick={() => setActiveReview(index)} />)}
                      </div>
                      <button type="button" aria-label="Próxima avaliação" onClick={() => changeReview(1)}><ArrowRight size={18} /></button>
                    </div>
                  </footer>
                </div>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="journal-teaser section section--ivory" id="conteudos">
          <div className="page-width journal-teaser__inner">
            <img src={journalArticles[0].image} alt={journalArticles[0].alt} />
            <div className="journal-teaser__copy">
              <p className="eyebrow">Reconhecimento</p>
              <h2>Uma marca<br />inesquecível.</h2>
              <p>O Silvia's Hair está entre as Marcas Inesquecíveis 2025. Conheça esse capítulo especial da nossa história.</p>
              <AppButton href="/conteudos">Conhecer a novidade</AppButton>
            </div>
          </div>
        </section>

        <section className="units section section--black" id="unidades">
          <div className="page-width">
            <div className="section-heading section-heading--split section-heading--dark">
              <div><p className="eyebrow eyebrow--light">Unidades</p><h2>O Silvia's Hair<br />perto de você.</h2></div><p>Encontre o endereço mais próximo e confira horários e localização.</p>
            </div>
            <div className="units__grid">
              {units.map((unit) => (
                <article className="unit" key={unit.name}>
                  <img src={unit.image} alt={unit.imageAlt} />
                  <div className="unit__body">
                    <p className="eyebrow eyebrow--light">Teresina · PI</p><h3>{unit.name}</h3>
                    <p><MapPin size={19} weight="thin" /> {unit.address}</p><p>{unit.hours}</p>
                    <div className="unit__actions"><AppButton href={unit.maps} light>Abrir no Google Maps</AppButton><a className="text-link text-link--light" href={whatsappUrl} target="_blank" rel="noreferrer">Agendar nesta unidade <ArrowUpRight size={18} /></a></div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <img src="/assets/real/img_3815.webp" alt="" aria-hidden="true" /><div className="final-cta__overlay" />
          <div className="page-width final-cta__content">
            <p className="eyebrow eyebrow--light">Agende sua visita</p><h2>Seu próximo cuidado começa aqui.</h2>
            <p>Fale com nossa equipe e escolha o melhor horário em uma de nossas unidades.</p>
            <div><AppButton href={whatsappUrl} light>Agendar pelo WhatsApp</AppButton><a className="text-link text-link--light" href="#unidades">Encontrar uma unidade <ArrowRight size={18} /></a></div>
          </div>
        </section>
          </>
        )}
      </main>

      <footer className="footer">
        <div className="page-width footer__grid">
          <div className="footer__brand"><BrandLockup variant="footer" /><p>Beleza, confiança e acolhimento em Teresina.</p></div>
          <div className="footer__nav"><strong>Navegação</strong>{navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
          <div className="footer__contact"><strong>Contato</strong><a href="https://instagram.com/silvias_hair/" target="_blank" rel="noreferrer"><InstagramLogo size={20} /> Instagram</a><a href="https://www.facebook.com/silviashairthe" target="_blank" rel="noreferrer"><FacebookLogo size={20} /> Facebook</a><a href={whatsappUrl} target="_blank" rel="noreferrer"><WhatsappLogo size={20} /> WhatsApp</a><a href="mailto:contato@silviashair.com.br"><EnvelopeSimple size={20} /> E-mail</a></div>
        </div>
        <div className="page-width footer__bottom"><span>© {new Date().getFullYear()} Silvia's Hair. Todos os direitos reservados.</span><a href="#top">Voltar ao topo ↑</a></div>
      </footer>
    </div>
  );
}
