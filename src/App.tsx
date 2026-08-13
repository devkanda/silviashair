const services = [
  { n: "01", title: "Cortes & Visagismo", text: "Cortes femininos, masculinos e infantis, tesouraterapia, bordado e uma leitura de estilo pensada para você." },
  { n: "02", title: "Cor & Clareamento", text: "Coloração total, retoque de crescimento, tonalização e mechas com técnica e cuidado em cada etapa." },
  { n: "03", title: "Tratamentos", text: "Rituais Kérastase, nanoqueratinização e restaurações para devolver força, brilho e movimento aos fios." },
  { n: "04", title: "Forma & Textura", text: "Texturização, relaxamento, selagem, botox capilar, taninoplastia e outras transformações personalizadas." },
  { n: "05", title: "Beleza Completa", text: "Manicure, pedicure, unhas em fibra de vidro e acrigel, estética, sobrancelhas e maquiagem." },
  { n: "06", title: "Ocasiões Especiais", text: "Penteados exclusivos, produção para debutantes, madrinhas e formandas, além de mega hair." },
];

const results = [
  { src: "/salon/bridal-hair.jpg", alt: "Penteado elaborado realizado no Silvia's Hair", label: "Penteado" },
  { src: "/salon/color-result.jpg", alt: "Resultado de coloração no Silvia's Hair", label: "Cor" },
  { src: "/salon/nails.jpg", alt: "Unhas finalizadas no Silvia's Hair", label: "Nails" },
  { src: "/salon/styling-result.jpg", alt: "Finalização de cabelo no Silvia's Hair", label: "Styling" },
];

const units = [
  { name: "Teresina Shopping", kind: "Silvia’s Hair I", address: "Av. Raul Lopes, 1000 — Loja 267, Teresina–PI", phone: "(86) 3230-1293", tel: "+558632301293", img: "/salon/unit-shopping.jpg" },
  { name: "Shopping Rio Poty", kind: "Silvia’s Hair II", address: "Av. Mal. Castelo Branco, 911 — Piso L3, Teresina–PI", phone: "(86) 3122-5226", tel: "+558631225226", img: "/salon/unit-rio-poty.jpg" },
  { name: "Teresina Shopping", kind: "Barbearia", address: "Av. Raul Lopes, 1000 — Loja 267, Teresina–PI", phone: "(86) 3304-4010", tel: "+558633044010", img: "/salon/salon-hero.jpg" },
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#inicio" aria-label="Silvia's Hair — início">
          <span className="brand-mark">S</span><span>SILVIA’S HAIR<small>BEAUTY ATELIER</small></span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#servicos">Serviços</a><a href="#resultados">Resultados</a><a href="#sobre">Silvia</a><a href="#unidades">Unidades</a>
        </nav>
        <a className="nav-cta" href="https://wa.me/558688970006" target="_blank" rel="noreferrer">Agendar <Arrow /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-photo" role="img" aria-label="Entrada de uma unidade Silvia's Hair" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow">SALÃO DE BELEZA · TERESINA, PIAUÍ</p>
          <h1>Beleza é<br/><em>presença.</em></h1>
          <p className="hero-copy">Técnica, estilo e cuidado se encontram em uma experiência criada para revelar o que há de mais autêntico em você.</p>
          <div className="hero-actions">
            <a className="button light" href="https://wa.me/558688970006" target="_blank" rel="noreferrer">Agende sua experiência <Arrow /></a>
            <a className="text-link" href="#servicos">Conheça os serviços <span>↓</span></a>
          </div>
        </div>
        <div className="hero-note"><span>25+</span><p>anos traduzindo<br/>personalidade em beleza</p></div>
      </section>

      <section className="intro section-pad" aria-label="Manifesto">
        <p className="eyebrow dark">NOSSA ESSÊNCIA</p>
        <h2>Não seguimos padrões.<br/>Criamos <em>assinaturas.</em></h2>
        <p>Uma beleza elegante não precisa falar alto. Ela nasce de uma escuta atenta, de repertório e de mãos que dominam a técnica.</p>
      </section>

      <section className="services section-pad" id="servicos">
        <div className="section-head"><div><p className="eyebrow dark">MENU DE SERVIÇOS</p><h2>Expertise de ponta<br/>a ponta.</h2></div><p>Um portfólio completo para cabelos, unhas, estética e produções especiais. Consulte disponibilidade na unidade de sua preferência.</p></div>
        <div className="service-grid">
          {services.map((service) => <article className="service-card" key={service.n}><span>{service.n}</span><h3>{service.title}</h3><p>{service.text}</p><a href="https://wa.me/558688970006" target="_blank" rel="noreferrer" aria-label={`Consultar ${service.title}`}>Consultar <Arrow /></a></article>)}
        </div>
      </section>

      <section className="editorial section-pad" id="sobre">
        <div className="editorial-image"><img src="/salon/silvia-at-work.jpg" alt="Sílvia Meneses trabalhando em um corte de cabelo"/><span className="vertical-copy">TÉCNICA · VISÃO · IDENTIDADE</span></div>
        <div className="editorial-copy">
          <p className="eyebrow">À FRENTE DO ATELIER</p><h2>Sílvia<br/><em>Meneses</em></h2>
          <p className="lead">Mais de 25 anos de profissão e uma carreira dedicada a transformar técnica em identidade.</p>
          <p>Hair stylist, empresária, designer de moda e especialista em visagismo, Sílvia construiu sua formação em academias como Instituto Llongueras, Vidal Sassoon, TONI&GUY e Pivot Point. Foi semifinalista do Trend Vision e venceu por duas vezes consecutivas o Master WellaStrate.</p>
          <div className="credentials"><span>Formação<br/><b>Internacional</b></span><span>Especialista em<br/><b>Visagismo</b></span><span>2× vencedora<br/><b>Master WellaStrate</b></span></div>
        </div>
      </section>

      <section className="results section-pad" id="resultados">
        <div className="section-head"><div><p className="eyebrow dark">NOSSO OLHAR</p><h2>Resultados que<br/><em>falam por si.</em></h2></div><a className="text-link dark-link" href="https://instagram.com/silvias_hair/" target="_blank" rel="noreferrer">Ver Instagram <Arrow /></a></div>
        <div className="results-grid">{results.map((item, i) => <figure className={`result-${i+1}`} key={item.src}><img src={item.src} alt={item.alt}/><figcaption>{item.label}<span>0{i+1}</span></figcaption></figure>)}</div>
      </section>

      <section className="experience section-pad">
        <p className="eyebrow">A EXPERIÊNCIA SILVIA’S HAIR</p><h2>Do primeiro olhar<br/>ao último toque.</h2>
        <div className="experience-list"><div><span>01</span><h3>Escuta</h3><p>Entendemos sua rotina, desejos e referências antes de começar.</p></div><div><span>02</span><h3>Curadoria</h3><p>Técnicas e produtos selecionados para sua identidade e necessidade.</p></div><div><span>03</span><h3>Execução</h3><p>Uma equipe qualificada, atenta às tendências e aos detalhes.</p></div></div>
      </section>

      <section className="locations section-pad" id="unidades">
        <div className="section-head"><div><p className="eyebrow dark">ENCONTRE SEU ESPAÇO</p><h2>Nossas unidades.</h2></div><p>Ambientes amplos e modernos, com atendimento e serviços para mulheres e homens em Teresina.</p></div>
        <div className="location-grid">{units.map(unit => <article className="location-card" key={unit.kind}><img src={unit.img} alt={`Fachada da unidade ${unit.kind}`}/><div><p>{unit.kind}</p><h3>{unit.name}</h3><address>{unit.address}</address><a href={`tel:${unit.tel}`}>{unit.phone} <Arrow /></a></div></article>)}</div>
      </section>

      <section className="faq section-pad" id="faq">
        <div><p className="eyebrow dark">PERGUNTAS FREQUENTES</p><h2>Antes da sua<br/>visita.</h2></div>
        <div className="faq-list">
          <details><summary>Como faço meu agendamento?<span>+</span></summary><p>Fale com a equipe pelo WhatsApp ou ligue diretamente para a unidade de sua preferência.</p></details>
          <details><summary>Todos os serviços estão disponíveis nas duas unidades?<span>+</span></summary><p>A disponibilidade pode variar por unidade e profissional. Confirme o serviço desejado no momento do agendamento.</p></details>
          <details><summary>O salão também atende o público masculino?<span>+</span></summary><p>Sim. O portfólio inclui cortes masculinos e há uma barbearia no Teresina Shopping.</p></details>
          <details><summary>Como escolher o melhor tratamento?<span>+</span></summary><p>A equipe avalia a necessidade dos fios e orienta a opção mais adequada antes do procedimento.</p></details>
        </div>
      </section>

      <section className="cta section-pad"><p className="eyebrow">SEU MOMENTO COMEÇA AQUI</p><h2>Pronta para uma nova<br/><em>versão de você?</em></h2><a className="button light" href="https://wa.me/558688970006" target="_blank" rel="noreferrer">Agendar pelo WhatsApp <Arrow /></a></section>

      <footer className="footer section-pad"><a className="brand footer-brand" href="#inicio"><span className="brand-mark">S</span><span>SILVIA’S HAIR<small>BEAUTY ATELIER</small></span></a><div><p>Conecte-se</p><a href="https://instagram.com/silvias_hair/" target="_blank" rel="noreferrer">Instagram</a><a href="https://www.facebook.com/silviashairthe" target="_blank" rel="noreferrer">Facebook</a></div><div><p>Contato</p><a href="mailto:contato@silviashair.com.br">contato@silviashair.com.br</a><a href="https://wa.me/558688970006" target="_blank" rel="noreferrer">WhatsApp</a></div><small>© 2026 Silvia’s Hair · Teresina, PI</small></footer>
      <a className="mobile-book" href="https://wa.me/558688970006" target="_blank" rel="noreferrer">Agendar agora <Arrow /></a>
    </main>
  );
}
