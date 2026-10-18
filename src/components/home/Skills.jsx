import {
  FaCode,
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaTools,
  FaVial,
  FaDatabase,
  FaLaptopCode,
  FaCubes,
} from "react-icons/fa";

import {
  SiJavascript,
  SiCplusplus,
  SiDjango,
  SiVite,
} from "react-icons/si";

import "./Skills.css";

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      description: "The foundations of my development",
      icon: <FaCode />,
      skills: [
        { name: "Python", icon: <SiCplusplus /> },
        { name: "JavaScript", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "C++", icon: <SiJavascript /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
      ],
    },
    {
      title: "Frameworks & Libraries",
      description: "Building modern applications",
      icon: <FaLaptopCode />,
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "Django", icon: <SiDjango /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
      ],
    },
    {
      title: "Tools & Technologies",
      description: "Tools I use to build and manage projects",
      icon: <FaTools />,
      skills: [
        { name: "VS Code", icon: <FaLaptopCode /> },
        { name: "Visual Studio", icon: <FaLaptopCode /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
      
      ],
    },
    {
      title: "Additional Skills",
      description: "Core concepts and development practices",
      icon: <FaCubes />,
      skills: [
        { name: "OOP", icon: <FaCubes /> },
        { name: "Testing", icon: <FaVial /> },
        { name: "Version Control", icon: <FaGitAlt /> },
        { name: "DSA", icon: <FaDatabase /> },
      ],
    },
  ];

  return (
    <section className="skills-section dark-tech-background" id="skills">
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
      <div className="skills-container">
        {/* Section heading */}
        <header className="skills-header">
          <span className="skills-eyebrow">MY EXPERTISE</span>

          <h2 className="skills-heading">
            Technical <span>Skills</span>
          </h2>

          <p className="skills-description">
            Technologies, tools, and concepts I use to build modern,
            functional, and reliable software applications.
          </p>
        </header>

        {/* Skill categories */}
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <article className="skill-category" key={category.title}>
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  {category.icon}
                </div>

                <div>
                  <h3 className="skill-category-title">
                    {category.title}
                  </h3>

                  <p className="skill-category-description">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="skill-list">
                {category.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <span className="skill-icon" aria-hidden="true">
                      {skill.icon}
                    </span>

                    <span className="skill-name">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}