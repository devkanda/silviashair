import { useEffect, useState } from "react";
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Crown, Drop, EnvelopeSimple, Eye,
  FacebookLogo, InstagramLogo, List, MapPin, PaintBrush, Scissors,
  Sparkle, Star, WhatsappLogo, X,
} from "@phosphor-icons/react";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/500.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";

const whatsappUrl = "https://wa.me/558688970006?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20no%20Silvia%27s%20Hair.";
const whatsappForProcedure = (procedure) => `https://wa.me/558688970006?text=${encodeURIComponent(`Olá! Vi no site o procedimento ${procedure} e gostaria de agendar.`)}`;

const navItems = [
  ["Sobre", "#sobre"], ["Serviços", "#servicos"], ["Resultados", "#resultados"],
  ["Unidades", "#unidades"],
];

const services = [
  { icon: Scissors, title: "Cabelos", text: "Cortes femininos, masculinos e infantis, finalizações e cuidados personalizados." },
  { icon: PaintBrush, title: "Coloração", text: "Coloração, tonalização, mechas e iluminação pensadas para valorizar cada estilo." },
  { icon: Crown, title: "Mega Hair", text: "Alongamentos com acabamento natural, volume e comprimento personalizados." },
  { icon: Drop, title: "Tratamentos", text: "Hidratação, reconstrução, nutrição e recuperação da saúde dos fios." },
  { icon: Sparkle, title: "Penteados", text: "Produções para eventos, festas, noivas e ocasiões especiais." },
  { icon: Eye, title: "Maquiagem", text: "Produções personalizadas para realçar sua beleza em diferentes momentos." },
];

const gallery = [
  { src: "/assets/result-feature.png", alt: "Cabelo com balayage caramelo finalizado no Silvia's Hair" },
  { src: "/assets/legacy/daa3807544e63f4ddf72c489711d0693.jpeg", alt: "Resultado de iluminação em cabelo loiro" },
  { src: "/assets/legacy/6757dc1fedf72f02d6776aec842736c3.jpg", alt: "Profissional Silvia's Hair realizando finalização" },
  { src: "/assets/legacy/9ab617e74fae1ae63c25f84eddba2cdc.jpg", alt: "Maquiagem e penteado para ocasião especial" },
  { src: "/assets/legacy/e17705d8e9684e8abe23ee0eb7a11441.jpg", alt: "Produção de maquiagem no Silvia's Hair" },
  { src: "/assets/legacy/f88bedb8df9f2f896e900bbcfbe1687f.jpg", alt: "Produção de noiva realizada pelo Silvia's Hair" },
];

const resultServices = [
  { title: "Megahair", message: "de megahair", src: "/assets/result-feature.png", alt: "Cabelo longo com volume e acabamento natural no Silvia's Hair" },
  { title: "Penteado", message: "de penteado", src: "/assets/legacy/985508fccd05dd881228e50ab4bfe03b.jpg", alt: "Penteado com acabamento elaborado realizado no Silvia's Hair" },
  { title: "Maquiagem", message: "de maquiagem", src: "/assets/legacy/e17705d8e9684e8abe23ee0eb7a11441.jpg", alt: "Maquiagem com acabamento iluminado realizada no Silvia's Hair" },
  { title: "Noiva", message: "para noiva", src: "/assets/legacy/f88bedb8df9f2f896e900bbcfbe1687f.jpg", alt: "Produção de noiva realizada pelo Silvia's Hair" },
  { title: "Nail Design", message: "de nail design", src: "/assets/legacy/2a3c041c96b91dc46572ae9b9911ba4e.jpg", alt: "Unhas com acabamento nude e francesinha delicada realizadas no Silvia's Hair" },
  { title: "Corte Masculino", message: "de corte masculino", src: "/assets/legacy/338032bce431eb7efca48df5d8f744e3.jpg", alt: "Atendimento masculino com máquina realizado no Silvia's Hair" },
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

const units = [
  {
    name: "Teresina Shopping", image: "/assets/legacy/salao-silvia-hair-shopping.jpg", imageAlt: "Fachada da unidade Teresina Shopping",
    address: "Av. Raul Lopes, 1000 · Lojas 267/268/269 · Teresina — PI",
    hours: "Segunda a sábado, 10h às 22h · Domingos, 14h às 20h",
    maps: "https://www.google.com/maps/search/?api=1&query=Silvia%27s+Hair+Teresina+Shopping",
  },
  {
    name: "Shopping Rio Poty", image: "/assets/about-salon.png", imageAlt: "Interior elegante de uma unidade Silvia's Hair",
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

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeReview, setActiveReview] = useState(0);
  const [reviewsPaused, setReviewsPaused] = useState(false);

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

  const changeReview = (direction) => {
    setActiveReview((current) => (current + direction + reviews.length) % reviews.length);
  };
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Silvia's Hair — início">Silvia's Hair</a>
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
        <section className="hero" id="top" aria-labelledby="hero-title">
          <img className="hero__image" src="/assets/hero-salon.png" alt="Interior elegante do Silvia's Hair" />
          <div className="hero__veil" />
          <div className="hero__content page-width">
            <p className="eyebrow eyebrow--light">Beauty Atelier · Teresina</p>
            <h1 id="hero-title">Beleza que revela<br />a sua melhor versão.</h1>
            <p className="hero__lead">Cuidado, técnica e experiência para transformar cada atendimento em um momento especial.</p>
            <div className="hero__actions">
              <AppButton href={whatsappUrl} light>Agendar horário</AppButton>
              <a className="text-link text-link--light" href="#sobre">Conheça o Silvia's Hair <ArrowRight size={18} /></a>
            </div>
          </div>
          <a className="hero__scroll" href="#sobre" aria-label="Ir para a seção sobre"><span>Descubra</span><ArrowRight size={18} /></a>
        </section>

        <section className="about section section--beige" id="sobre">
          <div className="page-width about__grid">
            <div className="about__copy">
              <p className="eyebrow">Sobre a Silvia</p>
              <h2>Uma história construída através da beleza.</h2>
              <div className="gold-rule" />
              <p>O Silvia's Hair nasceu da paixão de Sílvia Meneses pelo cuidado, pela técnica e pela transformação.</p>
              <p>Ao longo de mais de 25 anos de experiência, Sílvia construiu uma trajetória marcada por constante aperfeiçoamento, formação profissional e dedicação a cada cliente.</p>
              <p>Hoje, essa experiência se traduz em um salão onde técnica, atendimento e atenção aos detalhes caminham juntos.</p>
              <a className="text-link" href="#servicos">Conheça nossa história <ArrowRight size={18} /></a>
            </div>
            <figure className="about__media">
              <img src="/assets/silvia-meneses.png" alt="Sílvia Meneses no salão segurando suas tesouras de cabeleireira" />
              <figcaption><span>25+</span> anos cuidando de cada detalhe</figcaption>
            </figure>
          </div>
        </section>

        <section className="services section section--ivory" id="servicos">
          <div className="page-width">
            <div className="section-heading section-heading--split">
              <div><p className="eyebrow">Serviços</p><h2>Cuidado pensado<br />para cada momento.</h2></div>
              <p>Conheça alguns dos principais serviços oferecidos pelo Silvia's Hair, conduzidos por uma equipe preparada para ouvir, cuidar e transformar.</p>
            </div>
            <div className="services__list">
              {services.map(({ icon: Icon, title, text }, index) => (
                <article className="service" key={title}>
                  <span className="service__number">0{index + 1}</span><Icon className="service__icon" size={30} weight="thin" aria-hidden="true" />
                  <h3>{title}</h3><p>{text}</p>
                </article>
              ))}
            </div>
            <a className="text-link services__link" href="#resultados">Conhecer todos os serviços <ArrowRight size={18} /></a>
          </div>
        </section>

        <section className="results section section--black" id="resultados">
          <div className="page-width">
            <div className="results__header">
              <div><p className="eyebrow eyebrow--light">Resultados</p><h2>Resultados que<br />falam por si.</h2></div>
              <div className="results__header-copy">
                <p>Cada transformação começa com uma história diferente. Conheça alguns dos trabalhos realizados pela equipe Silvia's Hair.</p>
                <a className="text-link text-link--light" href="#mais-trabalhos">Ver mais procedimentos <ArrowRight size={18} /></a>
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
            <div><p className="eyebrow eyebrow--light">Mais trabalhos</p><h2>Beleza em movimento.</h2></div><p>Uma seleção de trabalhos realizados pela equipe Silvia's Hair.</p>
          </div>
          <p className="page-width swipe-hint" aria-hidden="true">
            <span>Deslize para o lado</span><ArrowRight size={18} />
          </p>
          <div className="marquee" aria-label="Galeria de trabalhos; no celular, deslize para ver mais">
            <div className="marquee__track">
              {[...gallery, ...gallery].map((item, index) => <img key={`${item.src}-${index}`} src={item.src} alt={index < gallery.length ? item.alt : ""} aria-hidden={index >= gallery.length} loading="lazy" />)}
            </div>
          </div>
          <div className="page-width works__footer">
            <a className="text-link text-link--light" href="https://instagram.com/silvias_hair/" target="_blank" rel="noreferrer"><InstagramLogo size={18} /> Ver mais no Instagram <ArrowUpRight size={18} /></a>
          </div>
        </section>

        <section className="reviews section section--beige" id="avaliacoes">
          <div className="page-width">
            <div className="reviews__top">
              <div><p className="eyebrow">Avaliações do Google</p><h2>O que dizem sobre<br />o Silvia's Hair.</h2></div>
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
                <div className="stars stars--small" aria-label={`${reviews[activeReview].rating ?? 5} de 5 estrelas`}>
                  {[0,1,2,3,4].map((n) => {
                    const isFilled = n < (reviews[activeReview].rating ?? 5);
                    return <Star key={n} className={isFilled ? undefined : "is-empty"} size={15} weight={isFilled ? "fill" : "regular"} aria-hidden="true" />;
                  })}
                </div>
                <p>“{reviews[activeReview].text}”</p>
                <footer><span>{reviews[activeReview].name}<small>{reviews[activeReview].unit} · Google Maps</small></span></footer>
              </blockquote>
              <div className="reviews__controls" aria-label="Controles das avaliações">
                <button type="button" aria-label="Avaliação anterior" onClick={() => changeReview(-1)}><ArrowLeft size={18} /></button>
                <div className="reviews__dots">
                  {reviews.map((review, index) => <button key={`${review.unit}-${index}`} type="button" className={index === activeReview ? "is-active" : ""} aria-label={`Ir para avaliação ${index + 1}`} aria-current={index === activeReview ? "true" : undefined} onClick={() => setActiveReview(index)} />)}
                </div>
                <button type="button" aria-label="Próxima avaliação" onClick={() => changeReview(1)}><ArrowRight size={18} /></button>
              </div>
            </div>
            <a className="text-link" href="https://www.google.com/maps/search/Silvia%27s+Hair+Teresina" target="_blank" rel="noreferrer">Ver avaliações no Google <ArrowUpRight size={18} /></a>
          </div>
        </section>

        <section className="units section section--black" id="unidades">
          <div className="page-width">
            <div className="section-heading section-heading--split section-heading--dark">
              <div><p className="eyebrow eyebrow--light">Unidades</p><h2>O Silvia's Hair<br />perto de você.</h2></div><p>Escolha a unidade mais conveniente para viver a experiência Silvia's Hair.</p>
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
          <img src="/assets/about-salon.png" alt="" aria-hidden="true" /><div className="final-cta__overlay" />
          <div className="page-width final-cta__content">
            <p className="eyebrow eyebrow--light">Seu momento</p><h2>Seu próximo momento de cuidado começa aqui.</h2>
            <p>Escolha sua unidade, reserve seu horário e deixe o restante com a gente.</p>
            <div><AppButton href={whatsappUrl} light>Agendar pelo WhatsApp</AppButton><a className="text-link text-link--light" href="#unidades">Encontrar uma unidade <ArrowRight size={18} /></a></div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="page-width footer__grid">
          <div className="footer__brand"><a className="wordmark" href="#top">Silvia's Hair</a><span>Beauty Atelier</span><p>Experiência, técnica e cuidado em cada detalhe.</p></div>
          <div className="footer__nav"><strong>Navegação</strong>{navItems.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
          <div className="footer__contact"><strong>Contato</strong><a href="https://instagram.com/silvias_hair/" target="_blank" rel="noreferrer"><InstagramLogo size={20} /> Instagram</a><a href="https://www.facebook.com/silviashairthe" target="_blank" rel="noreferrer"><FacebookLogo size={20} /> Facebook</a><a href={whatsappUrl} target="_blank" rel="noreferrer"><WhatsappLogo size={20} /> WhatsApp</a><a href="mailto:contato@silviashair.com.br"><EnvelopeSimple size={20} /> E-mail</a></div>
        </div>
        <div className="page-width footer__bottom"><span>© {new Date().getFullYear()} Silvia's Hair. Todos os direitos reservados.</span><a href="#top">Voltar ao topo ↑</a></div>
      </footer>
    </div>
  );
}
