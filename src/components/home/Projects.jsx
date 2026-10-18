import "./Projects.css";

import { FaGithub, FaArrowRight } from "react-icons/fa";

import PortfolioImage from "../../assets/portfolio-website.png";
import HadiLLCImage from "../../assets/hadi-llc.png";
import ObjectDetectionImage from "../../assets/object-detection.jpg";
import CalculatorImage from "../../assets/calculator.png";
import GPT001Image from "../../assets/GPT001.png";

const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio showcasing my development skills and professional background.",
    image: PortfolioImage,
    technologies: ["JavaScript", "CSS","HTML","Bootstrap"],
    github: "https://github.com/zubairsafi00/mohammad-zubair-safi",
  },
  {
    id: 2,
    title: "Hadi LLC Landing Page",
    description:
      "A business landing page designed to present Hadi LLC professionally and provide visitors with a clear introduction to the business.",
    image: HadiLLCImage,
    technologies: ["JavaScript", "CSS", "HTML" ,"Bootstrap"],
    github: "https://github.com/zubairsafi00/Landing-page-for-Hadi-LLC",
  },
  {
    id: 3,
    title: "AI Smart Object Detection System",
    description:
      "An AI-powered object detection project focused on identifying objects in visual input using computer vision technologies.",
    image: ObjectDetectionImage,
    technologies: ["Python","OpenCV","YOLOv8"],
    github:
      "https://github.com/zubairsafi00/ai-smart-object-detection-system",
  },
  {
    id: 4,
    title: "Desktop Calculator",
    description:
      "A calculator application built to perform mathematical operations through a simple and accessible user interface.",
    image: CalculatorImage,
    technologies: ["Python", "Tkinter"],
    github: "https://github.com/zubairsafi00/zubair-calculator",
  },
  {
    id: 5,
    title: "GPT001",
    description:
      "An offline Desktop AI chatbot.The application uses Microsoft's DialoGPT-small pretrained conversational language model to generate responses to user messages.",
    image: GPT001Image,
    technologies: ["Python", "Tkinter", "PyThorch", "Hugging Face"],
    github: "https://github.com/zubairsafi00/zubair-gpt001",
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      {/* Decorative background */}
      <div className="projects-background" aria-hidden="true">
        <div className="projects-grid"></div>

        <div className="projects-glow projects-glow-one"></div>
        <div className="projects-glow projects-glow-two"></div>
        <div className="projects-glow projects-glow-three"></div>

        <div className="projects-orb projects-orb-one"></div>
        <div className="projects-orb projects-orb-two"></div>
        <div className="projects-orb projects-orb-three"></div>

        <span className="projects-code projects-code-one">
          {"<div />"}
        </span>

        <span className="projects-code projects-code-two">
          {"{ code }"}
        </span>

        <span className="projects-code projects-code-three">
          {"101010"}
        </span>

        <span className="projects-code projects-code-four">
          {"function()"}
        </span>

        <span className="projects-particle particle-one"></span>
        <span className="projects-particle particle-two"></span>
        <span className="projects-particle particle-three"></span>
        <span className="projects-particle particle-four"></span>
        <span className="projects-particle particle-five"></span>
        <span className="projects-particle particle-six"></span>
      </div>

      <div className="projects-container">
        <h2 className="projects-heading">PROJECTS</h2>

        <div className="projects-grid-cards">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              {/* Project screenshot */}
              <div className="project-image-wrapper">
                <img
                  className="project-image"
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                />
              </div>

              {/* Project details */}
              <div className="project-card-content">
                <h3 className="project-title">{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div
                  className="project-technologies"
                  aria-label="Technologies used"
                >
                  {project.technologies.map((technology) => (
                    <span
                      className="project-tech-tag"
                      key={technology}
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <a
                  className="project-link"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <FaGithub className="project-github-icon" />

                  <span>View Project</span>

                  <FaArrowRight className="project-arrow-icon" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;