import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Code2, GitBranch, Mail, Menu, X,
  ExternalLink, Database, Server, Globe, Layers3, Terminal, Sparkles, Braces,
  Download, Send, CheckCircle2, MapPin
} from "lucide-react";


const EMAIL = "pipaliaynikunj87@gmail.com";
const GITHUB = "https://github.com/gajjuthegammer-bot";
const projects = [
  { number: "01", name: "Hommly", type: "REAL ESTATE PLATFORM", description: "A real-estate web experience for exploring properties, with a clean interface and property-focused landing page.", image: "/images/hommly-preview.png", tags: ["React", "JavaScript", "CSS", "Responsive UI"], live: "https://hommly-1.onrender.com", code: "https://github.com/gajjuthegammer-bot/Hommly", accent: "peach" },
  { number: "02", name: "IronFit", type: "GYM WEBSITE", description: "A bold fitness website concept featuring workout information, membership-focused sections and a modern responsive interface.", image: "/images/ironfit-preview.png", tags: ["React", "JavaScript", "CSS", "Web UI"], live: "https://ironfit-gym-website-1.onrender.com/", code: "https://github.com/gajjuthegammer-bot/ironfit-gym-website", accent: "mint" }
];
const skillGroups = [
  { title: "FRONTEND DEVELOPMENT", icon: Globe, color: "violet", skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Responsive Design"] },
  { title: "BACKEND DEVELOPMENT", icon: Server, color: "blue", skills: ["Node.js", "Express.js", "REST APIs"] },
  { title: "DATABASE", icon: Database, color: "orange", skills: ["MongoDB", "Mongoose"] },
  { title: "TOOLS & WORKFLOW", icon: Terminal, color: "pink", skills: ["Git", "GitHub", "npm", "Debugging"] }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formError, setFormError] = useState("");
  const closeMenu = () => setMenuOpen(false);
  const nav = [["Home", "#home"], ["Skills", "#skills"], ["Projects", "#projects"], ["About", "#about"], ["Contact", "#contact"]];
  const submitContact = (event) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFormError("Please fill in all fields before sending.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name.trim()}`);
    const body = encodeURIComponent(`Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setFormError("");
  };

  return <div className="site-shell">
    <div className="ambient ambient-one"/><div className="ambient ambient-two"/>
    <header className="topbar">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Nikunj Pipaliya home"><span className="brand-mark">NP</span><span className="brand-name">Nikunj <span>Pipaliya</span></span></a>
      <button className="menu-toggle" onClick={() => setMenuOpen(v => !v)} aria-label={menuOpen ? "Close navigation" : "Open navigation"} aria-expanded={menuOpen}>{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button>
      <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
        {nav.map(([label, href]) => <a key={href} href={href} onClick={closeMenu}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={closeMenu}><Send size={14}/> Let's Talk <ArrowUpRight size={15}/></a>
      </nav>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> FULL STACK MERN DEVELOPER <span className="eyebrow-line"/></div>
          <h1 className="name-heading">Nikunj<br/><span className="gradient-text">Pipaliya</span></h1>
          <h2 className="hero-role">I build modern web applications.</h2>
          <p className="hero-intro">I’m a <strong>Full Stack MERN Developer</strong> who enjoys turning ideas into clean, responsive and useful web experiences — from frontend interfaces to backend APIs.</p>
          <div className="hero-highlights"><span><Code2 size={15}/> Clean code</span><span><Layers3 size={15}/> Full stack thinking</span><span><Sparkles size={15}/> Modern UI</span></div>
          <div className="hero-actions"><a className="button button-primary" href="#projects">View My Work <ArrowRight size={17}/></a><a className="button button-ghost" href="/Nikunj-Pipaliya-CV.html" download><Download size={16}/> Download CV</a></div>
          <div className="hero-footnote"><span className="tiny-star">✳</span> React · Node.js · Express · MongoDB</div>
        </div>
        <div className="hero-art portrait-art" aria-label="Portrait of Nikunj Pipaliya">
          <div className="portrait-glow"/><div className="portrait-ring portrait-ring-one"/><div className="portrait-ring portrait-ring-two"/>
          <div className="portrait-frame"><img src="/images/nikunj-pipaliya.png" alt="Nikunj Pipaliya wearing a black suit and white shirt" fetchPriority="high"/></div>
          <div className="portrait-label"><span className="status-dot"/><span><b>Nikunj Pipaliya</b><small>Full Stack Developer</small></span></div>
          <div className="float-chip chip-react"><span className="chip-icon react-icon">⚛</span><span><b>React.js</b><small>Frontend</small></span></div>
          <div className="float-chip chip-node"><span className="chip-icon node-icon">N</span><span><b>Node.js</b><small>Backend</small></span></div>
          <div className="float-chip chip-mongo"><span className="chip-icon mongo-icon">◈</span><span><b>MongoDB</b><small>Database</small></span></div>
          <div className="art-caption">BUILDING USEFUL DIGITAL PRODUCTS</div>
        </div>
        <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDownRight size={16}/></a>
      </section>

      <section className="intro-strip"><div className="section-wrap strip-inner"><span className="strip-label">MY APPROACH</span><p>Thoughtful interfaces <span>+</span> reliable functionality <span>+</span> continuous learning.</p><Sparkles size={21}/></div></section>

      <section className="about section-wrap section-pad" id="about">
        <div className="section-heading"><div><span className="section-kicker">ABOUT ME</span><h2>Curious by nature.<br/><span className="gradient-text">Builder by choice.</span></h2></div><p className="heading-note">I enjoy turning ideas into useful, user-friendly web applications.</p></div>
        <div className="about-grid">
          <article className="about-card about-main-card"><div className="about-icon"><Braces size={24}/></div><h3>More than just the UI.</h3><p>I work across the MERN stack — creating interfaces with React, building server-side functionality with Node.js and Express, and working with MongoDB for data. I care about usability, responsive design and maintainable code.</p><div className="mini-tags"><span>Frontend</span><span>Backend</span><span>Problem solving</span></div></article>
          <article className="about-card about-stat-card"><div className="stat-gradient">MERN</div><h3>Full Stack mindset</h3><p>Connecting frontend and backend into one complete web experience.</p><div className="stat-footer"><Layers3 size={16}/> End-to-end web development</div></article>
          <article className="about-card about-note-card"><div className="note-emoji">✦</div><h3>Always learning.</h3><p>Improving how I build, debug and deliver web projects.</p><span className="note-decoration">MAKE IT USEFUL →</span></article>
        </div>
      </section>

      <section className="skills-section section-pad" id="skills"><div className="section-wrap">
        <div className="section-heading"><div><span className="section-kicker">TECHNICAL SKILLS</span><h2>Tools I use to<br/><span className="gradient-text">bring ideas to life.</span></h2></div><p className="heading-note">My current toolkit across frontend, backend, databases and development workflow.</p></div>
        <div className="skills-grid">{skillGroups.map(({title, icon: Icon, color, skills}) => <article className={`skill-card ${color}`} key={title}><div className="skill-card-top"><div className="skill-icon"><Icon size={22}/></div><span className="skill-index"><CheckCircle2 size={15}/></span></div><h3>{title}</h3><div className="skill-pills">{skills.map(s => <span key={s}>{s}</span>)}</div><div className="skill-bottom-line"/></article>)}</div>
      </div></section>

      <section className="projects section-wrap section-pad" id="projects">
        <div className="section-heading"><div><span className="section-kicker">FEATURED PROJECTS</span><h2>Work built with<br/><span className="gradient-text">purpose.</span></h2></div><p className="heading-note">Explore the live websites or view the source code for these projects.</p></div>
        <div className="project-list">{projects.map(p => <article className={`project-card ${p.accent}`} key={p.number}>
          <div className="project-image-wrap"><img src={p.image} alt={`${p.name} website preview`} className="project-image" loading="lazy"/><div className="image-overlay"><span>{p.name.toUpperCase()} · PROJECT</span><a href={p.live} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.name} live website`}><ArrowUpRight size={20}/></a></div></div>
          <div className="project-details"><div className="project-meta"><span>{p.type}</span><span>{p.number} / 02</span></div><h3>{p.name}<span className="project-dot">.</span></h3><p>{p.description}</p><div className="project-tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div><div className="project-actions"><a href={p.live} target="_blank" rel="noopener noreferrer" className="project-link">Live Demo <ExternalLink size={15}/></a><a href={p.code} target="_blank" rel="noopener noreferrer" className="project-link secondary-link">Source Code <GitBranch size={15}/></a></div></div>
        </article>)}</div>
      </section>

      <section className="contact-section section-pad" id="contact"><div className="section-wrap contact-panel"><div className="contact-orb orb-one"/><div className="contact-orb orb-two"/>
        <div className="contact-copy"><span className="section-kicker">LET'S CONNECT</span><h2>Let’s build something<br/><span className="gradient-text">meaningful.</span></h2><p>Looking for a frontend or full stack developer? Send me a message and let’s talk about the role or project.</p><div className="contact-location"><MapPin size={16}/> Surat, Gujarat, India</div><a className="button button-primary" href={`mailto:${EMAIL}?subject=${encodeURIComponent("Let's connect")}`}>Email Me <ArrowUpRight size={17}/></a></div>
        <div className="contact-side"><form className="contact-form" onSubmit={submitContact}>
          <label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" autoComplete="name" value={form.name} onChange={e => setForm({...form, name:e.target.value})} placeholder="Enter your name" required/>
          <label htmlFor="contact-email">Email address</label><input id="contact-email" name="email" type="email" autoComplete="email" value={form.email} onChange={e => setForm({...form, email:e.target.value})} placeholder="you@example.com" required/>
          <label htmlFor="contact-message">Your message</label><textarea id="contact-message" name="message" value={form.message} onChange={e => setForm({...form, message:e.target.value})} placeholder="Tell me a little about the opportunity..." rows="4" required/>
          {formError && <p className="form-error" role="alert">{formError}</p>}
          <button className="button button-primary form-submit" type="submit">Prepare Email <Send size={16}/></button>
          <p className="form-hint">This opens your email app with your message ready to send.</p>
        </form><div className="contact-divider"/><div className="social-links"><a href={`mailto:${EMAIL}`}><Mail size={17}/> {EMAIL} <ArrowUpRight size={14}/></a><a href={GITHUB} target="_blank" rel="noopener noreferrer"><GitBranch size={17}/> GitHub profile <ArrowUpRight size={14}/></a></div></div>
      </div></section>
    </main>
    <footer className="footer section-wrap"><a className="brand footer-brand" href="#home"><span className="brand-mark">NP</span><span className="brand-name">Nikunj <span>Pipaliya</span></span></a><p>Designed with intent. Built with React.</p><a href="#home" className="back-top">BACK TO TOP ↑</a><span className="copyright">© {new Date().getFullYear()} Nikunj Pipaliya</span></footer>
  </div>;
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App/></React.StrictMode>);
