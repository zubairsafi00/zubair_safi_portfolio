import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaArrowUp,
} from "react-icons/fa";

import { Link } from "react-router-dom";
import "./Footer.css";

const socialLinks = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/zubairsafi00",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/mohammad-zubair-safi-336b842b0",
  },
  {
    name: "Facebook",
    icon: <FaFacebook />,
    url: "https://www.facebook.com/share/1CEiC2gEnm/?mibextid=wwXIfr",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://instagram.com/zubairsafi_official?vrfl=ZXRnNXN2cXExYWhr&utm_source=qr",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    url: "https://wa.me/message/KUQQV7A5OBP2M1",
  },
  {
    name: "Email",
    icon: <FaEnvelope />,
    url: "mailto:zubairsafi2007@gmail.com",
  },
  {
    name: "Phone",
    icon: <FaPhone />,
    url: "tel:+93786340303",
  },
];

const navigationLinks = [
  { name: "Home", href: "/#hero" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/#services" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/#projects" },
  { name: "Certificates", href: "/#certificates" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand */}
        <div className="footer-brand">
          <div className="footer-logo">
            Mohammad <span>Zubair Safi</span>
          </div>

          <p>Software Engineer | Web Developer</p>
        </div>

        {/* Quick Navigation */}
        <nav className="footer-navigation" aria-label="Footer navigation">
          <h3>Quick Links</h3>

          <div className="footer-nav-links">
            {navigationLinks.map((link) => (
              <a key={link.name} href={link.href}>
                {link.name}
              </a>
            ))}

            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        {/* Social and Contact Icons */}
        <div className="footer-social">
          <h3>Connect With Me</h3>

          <div className="footer-social-icons">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                aria-label={social.name}
                title={social.name}
                target={
                  social.name === "Email" || social.name === "Phone"
                    ? undefined
                    : "_blank"
                }
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Mohammad Zubair Safi. All rights
          reserved. <span>|</span> Made by Mohammad Zubair Safi
        </p>
      </div>

      {/* Back to Top */}
      <a
        href="/#hero"
        className="footer-back-to-top"
        aria-label="Back to top"
        title="Back to top"
      >
        <FaArrowUp />
      </a>
    </footer>
  );
}