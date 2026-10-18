import {
  FaCode,
  FaServer,
  FaLaptopCode,
  FaTools,
} from "react-icons/fa";

import "./Services.css";

export default function Services() {
  const services = [
    {
      number: "01",
      icon: <FaCode />,
      title: "Frontend Development",
      description:
        "Modern, responsive interfaces built with React, JavaScript, HTML, and CSS.",
    },
    {
      number: "02",
      icon: <FaServer />,
      title: "Backend Development",
      description:
        "Secure and scalable backends using Python, Django, REST APIs, and databases.",
    },
    {
      number: "03",
      icon: <FaLaptopCode />,
      title: "Full-Stack Development",
      description:
        "Complete web applications connecting modern React frontends with powerful Django backends.",
    },
    {
      number: "04",
      icon: <FaTools />,
      title: "Website Maintenance",
      description:
        "Bug fixing, performance improvements, feature updates, and basic SEO optimization.",
    },
  ];

  return (
    <section className="services dark-tech-background" id="services">
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
      <div className="services-container">
        {/* Section heading */}
        <header className="services-header">
     

          <h2 className="services-title">
            My Special <span>Services</span> For You
          </h2>
        </header>

        {/* Service cards */}
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>
              {/* Card number */}
              <span className="service-number">
                {service.number}
              </span>

              {/* Icon */}
              <div className="service-icon" aria-hidden="true">
                {service.icon}
              </div>

              {/* Card content */}
              <div className="service-body">
                <h3 className="service-title">
                  {service.title}
                </h3>

                <p className="service-caption">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}