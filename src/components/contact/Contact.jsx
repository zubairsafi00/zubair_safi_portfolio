import { useState } from "react";
import emailjs from "@emailjs/browser";


import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";

import "./Contact.css";

const contactMethods = [
  {
    title: "Facebook",
    icon: <FaFacebookF />,
    href: "https://www.facebook.com/share/1CEiC2gEnm/?mibextid=wwXIfr",
  },
  {
    title: "Instagram",
    icon: <FaInstagram />,
    href: "https://instagram.com/zubairsafi_official?vrfl=ZXRnNXN2cXExYWhr&utm_source=qr",
  },
  {
    title: "WhatsApp",
    icon: <FaWhatsapp />,
    href: "https://wa.me/message/KUQQV7A5OBP2M1",
  },
  {
    title: "Email",
    icon: <FaEnvelope />,
    href: "mailto:zubairsafi2007@gmail.com",
  },
  {
    title: "Phone",
    icon: <FaPhone />,
    href: "tel:+93786340303",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    loading: false,
    message: "",
    type: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (formData.message.trim().length < 10) {
      setStatus({
        loading: false,
        message: "Your message must contain at least 10 characters.",
        type: "error",
      });

      return;
    }

    setStatus({
      loading: true,
      message: "",
      type: "",
    });

    try {
      await emailjs.send(
        "service_koic2lv",
        "template_vdhs7ea",
        {
          from_name: formData.fullName,
          from_email: formData.email,
          message: formData.message,
        },
        {
          publicKey: "uTKaWfYtajND8CFp_",
        }
      );

      setFormData({
        fullName: "",
        email: "",
        message: "",
      });

      setStatus({
        loading: false,
        message: "Your message has been sent successfully!",
        type: "success",
      });
    } catch (error) {
      console.error("Email submission failed:", error);

      setStatus({
        loading: false,
        message: "Something went wrong. Please try again later.",
        type: "error",
      });
    }
  }

  return (
    <main className="contact-page">

      <section className="contact-container ">
        
        <header className="contact-header">
          <h1>LET'S CONNECT</h1>

          <p>
            Have a project in mind? Let's discuss your ideas and
            create something meaningful together. I'm available
            for web development projects and collaborations.
          </p>
        </header>

        <div className="contact-content">
          {/* Contact information */}
          <section className="contact-info">
            <h2>Get in Touch</h2>

            <p className="contact-description">
              Choose your preferred way to contact me.
              I'll be happy to hear about your project.
            </p>

            <div className="contact-methods">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.href || undefined}
                  className={`contact-method ${
                    method.href ? "" : "contact-method-disabled"
                  }`}
                  aria-label={method.title}
                  onClick={
                    method.href
                      ? undefined
                      : (event) => event.preventDefault()
                  }
                >
                  <span className="contact-icon">
                    {method.icon}
                  </span>

                  <span className="contact-method-title">
                    {method.title}
                  </span>
                </a>
              ))}
            </div>
          </section>

          {/* Contact form */}
          <section className="contact-form-section">
            <h2>Have a Project?</h2>

            <p className="contact-description">
              Tell me a little about yourself and what you'd like
              to build. I'll get back to you as soon as possible.
            </p>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>

                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  placeholder="Your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message</label>

                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  minLength={10}
                  required
                  rows={5}
                />

                <span className="character-count">
                  {formData.message.trim().length} / 10 minimum
                  characters
                </span>
              </div>

              <button
                type="submit"
                className="contact-submit"
                disabled={status.loading}
              >
                {status.loading ? "SENDING..." : "SEND MESSAGE"}
              </button>

              {status.message && (
                <p
                  className={`form-status ${status.type}`}
                  role="status"
                  aria-live="polite"
                >
                  {status.message}
                </p>
              )}
            </form>
          </section>
        </div>
      </section>
    </main>
  );
}