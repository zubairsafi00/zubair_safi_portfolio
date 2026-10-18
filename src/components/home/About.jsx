import "./About.css";

export default function About() {
  return (
    <section className="about dark-tech-background" id="about">
      {/* LEFT: About Content */}
      <div className="tech-orb tech-orb-one"></div>
<div className="tech-orb tech-orb-two"></div>
<div className="tech-orb tech-orb-three"></div>

<span className="tech-code" style={{ top: "30%", left: "10%" }}>
  {"<div />"}
</span>

<span className="tech-code" style={{ top: "45%", right: "8%" }}>
  {"{ code }"}
</span>

<span className="tech-particle" style={{ top: "15%", left: "28%" }}></span>
<span className="tech-particle" style={{ top: "55%", right: "20%" }}></span>
<span className="tech-particle" style={{ bottom: "15%", left: "40%" }}></span>
      <div className="about-content">
        

        <h2 className="about-title">
           Looking for Professional <strong>Websites</strong> for your business?
        </h2>

        <p className="about-description">
          You're in the right place. I design and build modern,
          high-performance websites that combine striking visuals,
          seamless user experiences, and thoughtful functionality.
          From bold portfolios to professional business websites,
          I turn ideas into digital experiences that look exceptional,
          feel effortless, and make a lasting impression.
        </p>

        <ul className="about-services">
          <li>Frontend Development</li>
          <li>Backend Development</li>
          <li>Full Stack Development</li>
          <li>Website Maintenance & Optimization</li>
        </ul>
      </div>

      {/* RIGHT: Statistics */}
      <div className="about-stats">
        <div className="about-stat">
          <span className="about-stat-number">1+</span>
          <span className="about-stat-label">Year Experience</span>
        </div>

        <a href="#projects" className="about-stat">
          <span className="about-stat-number">5+</span>
          <span className="about-stat-label">Projects</span>
        </a>

        <a href="#certificates" className="about-stat">
          <span className="about-stat-number">9</span>
          <span className="about-stat-label">Certificates</span>
        </a>

        <div className="about-stat">
          <span className="about-stat-number">3+</span>
          <span className="about-stat-label">Happy Clients</span>
        </div>
      </div>
    </section>
  );
}