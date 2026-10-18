import React from "react";
import "./Certificates.css";

import CambridgePython from "../../assets/Cambridge International qualifications Python.png";
import CourseraFreelancing from "../../assets/Coursera Getting sarted for freelancer.png";
import MetaAdvancedReact from "../../assets/META Advanced React.png";
import MetaHTMLCSS from "../../assets/META HTML and CSS in depth.png";
import MetaFrontendDevelopment from "../../assets/META Introduction to front end development.png";
import MetaJavaScript from "../../assets/META Programing with Java Script.png";
import MetaPython from "../../assets/META Programing with Python.png";
import MetaReactBasics from "../../assets/META React basics.png";
import MetaVersionControl from "../../assets/META Version Controll.png";

const certificates = [
  {
    title: "Programming in Python",
    issuer: "Meta",
    date: "October 12, 2026",
    description:
      "Advanced Python programing language Concepts including OOP in Python ",
    skills: ["Python", "Programming"],
    credentialUrl: "https://coursera.org/verify/8VZM1ZNO6WQX",
    image: MetaPython,
  },
  {
    title: "Advanced React",
    issuer: "Meta",
    date: "July 23, 2026",
    description:
      "Advanced React concepts, reusable components, hooks, application testing, and working with APIs.",
    skills: ["React", "JavaScript", "Frontend Development"],
    credentialUrl: "https://coursera.org/verify/4CG9XTLR0QP4",
    image: MetaAdvancedReact,
  },
  {
    title: "React Basics",
    issuer: "Meta",
    date: "March 15, 2026",
    description:
      "Fundamentals of React, including components, props, JSX, and building interactive user interfaces.",
    skills: ["React", "JSX", "Components"],
    credentialUrl: "https://coursera.org/verify/30XBTXT9QJ0M",
    image: MetaReactBasics,
  },
  {
    title: "HTML and CSS in Depth",
    issuer: "Meta",
    date: "February 25, 2026",
    description:
      "Studied HTML structure, CSS styling, layouts, responsive design, and the foundations of modern web interfaces.",
    skills: ["HTML", "CSS", "Responsive Design"],
    credentialUrl: "https://coursera.org/verify/HCG3LDTX04FD",
    image: MetaHTMLCSS,
  },
  {
    title: "Version Control",
    issuer: "Meta",
    date: "February 11, 2026",
    description:
      "Version control concepts such as how to manage code changes and collaborate using Git and GitHub.",
    skills: ["Git", "GitHub", "Version Control"],
    credentialUrl: "https://coursera.org/verify/GOVXE9MFLOCK",
    image: MetaVersionControl,
  },
  {
    title: "Programming with JavaScript",
    issuer: "Meta",
    date: "February 1, 2026",
    description:
      "Modern JavaScript fundamentals, programming concepts, OOP, functions, objects, and writing interactive web applications.",
    skills: ["JavaScript", "Programming", "Front-End Web Development"],
    credentialUrl: "https://coursera.org/verify/T5ZA52OWNADV",
    image: MetaJavaScript,
  },
  {
    title: "Front-End Development",
    issuer: "Meta",
    date: "January 17, 2026",
    description:
      "Developed foundational front-end skills for creating interactive websites.",
    skills: ["HTML", "CSS", "Responsive  design", "Front-End Web development"],
    credentialUrl: "https://coursera.org/verify/L0Y6W225XA6L",
    image: MetaFrontendDevelopment,
  },
  {
    title: "Getting Started with Fiverr for Freelancers",
    issuer: "Coursera",
    date: "January 15, 2026",
    description:
      "Learned the fundamentals of starting as a freelancer on Fiverr and presenting services to potential clients.",
    skills: ["Freelancing", "Fiverr"],
    credentialUrl: "https://coursera.org/verify/V5LLJIS5M2GO",
    image: CourseraFreelancing,
  },
  {
    title: "Basics of Python",
    issuer: "Cambridge International Qualifications",
    date: "August 18, 2025",
    description:
      "A certificate recognizing foundational learning in Python programming.",
    skills: ["Python", "Programming Fundamentals"],
    credentialUrl:
      "https://docs.uniathena.com/prod/course/certificate/323_1755543859_certificate.jpg",
    image: CambridgePython,
  },
];

function CertificatePreview({ certificate }) {
  return (
    <img
      className="certificate-preview-image"
      src={certificate.image}
      alt={`${certificate.title} certificate`}
      loading="lazy"
    />
  );
}

export default function Certificates() {
  return (
    <section id="certificates" className="certificates-section dark-tech-background">
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
      <div className="certificates-container">
        <header className="certificates-header">
          <h2>Certification Achievements</h2>

          <span className="certificates-title-line" />

          <p>
            Professional certifications and continuous learning in
            programming and web development.
          </p>
        </header>

        <div className="certificates-grid">
          {certificates.map((certificate) => (
            <a
              key={certificate.credentialUrl}
              className="certificate-card"
              href={certificate.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${certificate.title} certificate`}
            >
              <div className="certificate-preview">
                <CertificatePreview certificate={certificate} />
              </div>

              <div className="certificate-card-body">
                <h3>{certificate.title}</h3>

                <p className="certificate-issuer">
                  {certificate.issuer}
                </p>

                {certificate.date && (
                  <p className="certificate-date">
                    {certificate.date}
                  </p>
                )}

                <p className="certificate-description">
                  {certificate.description}
                </p>

                <div className="certificate-skills">
                  {certificate.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>

                <span className="certificate-view-link">
                  View Certificate ↗
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}