import React, { useState } from "react";
import CircularCarousel from "./CircularCarousel.jsx";
import PillNav from "./PillNav.jsx";
import SlingButton from "./SlingButton.jsx";

const projects = [
  {
    title: "Portal Acadêmico Seguro",
    subtitle: "HTML5 · CSS · JavaScript",
    src: "/projects/portal-academico.svg",
    alt: "Interface escura do Portal Acadêmico Seguro com área de login",
    description: "Sistema web de gerenciamento de estudos com autenticação e controle de sessão.",
  },
  {
    title: "App de Registro Mobile",
    subtitle: "React Native · TypeScript · MongoDB",
    src: "/projects/app-registro.svg",
    alt: "Telas mobile de um formulário para registro de endereço",
    description: "Aplicativo com rotas dinâmicas e validação para submissão de endereços.",
  },
];

const experiences = [
  {
    period: "RECENTE",
    title: "Desenvolvimento front-end e integrações",
    organization: "Citpay · Estagiário",
    details: [
      "Implementação de páginas seguindo as diretrizes visuais da equipe de design.",
      "Integração de APIs e colaboração entre front-end e back-end.",
      "Manutenção e atualização de sistemas e aplicações.",
    ],
  },
  {
    period: "ANTERIOR",
    title: "Impacto na comunidade",
    organization: "Projetos Sociais · Voluntário",
    details: [
      "Colaboração em iniciativas e atividades para a comunidade local.",
      "Criação de materiais informativos claros e acessíveis.",
    ],
  },
];

const skillGroups = [
  { title: "Técnicas", items: ["JavaScript", "TypeScript", "Node.js", "React", "React Native"] },
  { title: "Em equipe", items: ["Comunicação clara", "Colaboração", "Proatividade"] },
  { title: "Aprendizado", items: ["Curiosidade", "Adaptabilidade", "Aprendizado contínuo"] },
];

function ArrowIcon({ diagonal = false }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "→"}</span>;
}

function Header() {
  return (
    <header className="site-header">
      <a className="wordmark" href="#inicio" aria-label="Paulo Faria, início">
        <span className="wordmark-mark">P.</span>
        <span>Paulo Faria<span className="wordmark-period">.</span></span>
      </a>
      <div className="header-nav-wrap">
        <PillNav
          items={[
            { label: "Experiência", href: "#experiencia" },
            { label: "Projetos", href: "#projetos" },
            { label: "Sobre", href: "#sobre" },
            { label: "Skills", href: "#skills" },
            { label: "Formação", href: "#educacao" },
            { label: "Contato", href: "#contato" },
          ]}
          theme="dark"
          size="md"
          surface="glass"
          itemStyle="pill"
          hoverEffect="fill"
          indicator="dot"
          highlightColor="#a9cce2"
          barColor="rgba(18, 27, 39, 0.82)"
          textColor="#e8edf4"
          collapse="auto"
          ariaLabel="Navegação principal"
          className="portfolio-nav"
        />
      </div>
    </header>
  );
}

function App() {
  const [activeProject, setActiveProject] = useState(0);
  const currentProject = projects[activeProject];

  return (
    <>
      <Header />
      <main>
        <section className="hero" id="inicio">
          <div className="terminal-window" aria-label="Apresentação em estilo terminal">
            <div className="terminal-chrome" aria-hidden="true">
              <span /><span /><span />
            </div>
            <div className="terminal-content">
              <div className="terminal-command"><span>$</span> whoami</div>
              <h1>Paulo Faria<span className="terminal-cursor" aria-hidden="true" /></h1>
              <div className="terminal-command terminal-command--goal"><span>$</span> cat objetivo.txt</div>
              <p className="terminal-goal">
                Desenvolvedor de Software com foco em JavaScript, React, React Native,
                Node.js e TypeScript. Gosto de resolver problemas e construir soluções
                eficientes; busco crescer em um ambiente que valorize inovação e aprendizado.
              </p>
            </div>
          </div>
          <div className="hero-details" aria-label="Informações pessoais e acadêmicas">
            <span>Bangu, Rio de Janeiro, RJ</span>
            <span>FAETERJ-RIO · Análise e Desenvolvimento de Sistemas</span>
            <span>FORMAÇÃO EM ANDAMENTO</span>
          </div>
          <div className="hero-scroll"><span /> UM POUCO DO MEU TRABALHO</div>
        </section>

        <section className="about-section section-wrap" id="sobre">
          <div className="section-heading">
            <div>
              <span className="section-kicker">// sobre</span>
              <h2>Desenvolvedor de <em>Software.</em></h2>
            </div>
          </div>
          <p className="about-summary">
            Focado no ecossistema JavaScript — React, React Native, Node.js e TypeScript.
            Tenho interesse por lógica e resolução de problemas, criando soluções eficientes
            e buscando crescer em ambientes que valorizem inovação e desenvolvimento profissional.
          </p>
        </section>

        <section className="experience-section section-wrap" id="experiencia">
          <div className="section-heading">
            <div>
              <span className="section-kicker">// experiencia</span>
              <h2>Histórico <em>profissional.</em></h2>
            </div>
            <p>Experiências com desenvolvimento,<br className="desktop-break" /> colaboração e impacto local.</p>
          </div>
          <div className="experience-list">
            {experiences.map((experience) => (
              <article className="experience-card" key={experience.title}>
                <span className="experience-period">{experience.period}</span>
                <div>
                  <h3>{experience.title}</h3>
                  <p className="experience-org">{experience.organization}</p>
                  <ul>{experience.details.map((detail) => <li key={detail}>{detail}</li>)}</ul>
                </div>
                <span className="experience-marker" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="work-section section-wrap" id="projetos">
          <div className="section-heading">
            <div>
              <span className="section-kicker">// projetos</span>
              <h2>Projetos em <em>destaque.</em></h2>
            </div>
            <p>Aplicações e ferramentas que<br className="desktop-break" /> resolvem problemas reais.</p>
          </div>
          <div className="project-carousel">
            <CircularCarousel
              items={projects}
              preset="cylinder"
              intro="rise"
              cardWidth={260}
              aspectRatio={0.84}
              speed={8}
              fadeColor="#080b10"
              captions
              onChange={setActiveProject}
            />
          </div>
          <div className="featured-project" aria-live="polite">
            <span className="featured-project-category">{currentProject.subtitle}</span>
            <p>{currentProject.description}</p>
          </div>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <div className="section-heading">
            <div>
              <span className="section-kicker">// skills</span>
              <h2>Habilidades e <em>competências.</em></h2>
            </div>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className="skill-group" key={group.title}>
                <h3>{group.title}</h3>
                <ul>{group.items.map((skill) => <li key={skill}>{skill}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="education-section section-wrap" id="educacao">
          <div className="section-heading">
            <div>
              <span className="section-kicker">// educacao</span>
              <h2>Formação <em>acadêmica.</em></h2>
            </div>
          </div>
          <div className="education-list">
            <article className="education-card">
              <div><h3>FAETERJ-RIO</h3><p>Tecnólogo — Análise e Desenvolvimento de Sistemas</p></div>
              <span>CURSANDO</span>
            </article>
            <article className="education-card">
              <div><h3>JavaScript Essentials 7</h3><p>Curso livre · 30 horas</p></div>
              <span>CONCLUÍDO</span>
            </article>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contato">
          <span className="section-kicker">// contato</span>
          <div className="contact-content">
            <h2>Vamos<br /><em>conversar?</em></h2>
            <div className="contact-aside">
              <p>Quer falar sobre uma oportunidade ou projeto? Estou à disposição.</p>
              <a className="button button--light" href="mailto:paulorrfaria01@gmail.com">
                Enviar e-mail <ArrowIcon diagonal />
              </a>
              <a className="contact-phone" href="tel:+5521966689615">+55 21 96668-9615</a>
            </div>
          </div>
          <footer className="site-footer">
            <a className="wordmark wordmark--footer" href="#inicio"><span className="wordmark-mark">P.</span><span>Paulo Faria<span className="wordmark-period">.</span></span></a>
            <span>© {new Date().getFullYear()} Paulo Faria</span>
            <a href="https://github.com/paulofaria" target="_blank" rel="noreferrer">github.com/paulofaria <ArrowIcon diagonal /></a>
          </footer>
        </section>
      </main>
      <SlingButton />
    </>
  );
}

export default App;
