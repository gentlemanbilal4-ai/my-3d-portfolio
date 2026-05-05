import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { profile } from "../data/portfolioData";

const certifications = [
  {
    name: "HackerRank Problem Solving Certified",
    href: "https://www.hackerrank.com/certificates/iframe/6a40d6d90ea5",
  },
  {
    name: "Google Analytics Certified",
    href: "https://skillshop.credential.net/8f93fa8b-07c4-46ba-944c-65cea4eaf772#acc.lsreTpV3",
  },
  {
    name: "SEO Essentials With Semrush Certified",
    href: "https://static.semrush.com/academy/certificates/104c3ed74d/bilal-jamali_25.pdf",
  },
  {
    name: "Social Media Marketing Certified",
    href: "https://www.life-global.org/certificate/21968618-ccd3-4cdf-9a30-50ebd123409b",
  },
  {
    name: "Digital Marketing Your Target Audience Certified",
    href: "https://www.life-global.org/certificate/408d6ca2-e3f0-45d8-b32d-97c9559128e8",
  },
];

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-card">
            <h4>Gmail</h4>
            <a className="contact-primary" href={profile.emailHref} data-cursor="disable">
              {profile.email}
              <MdArrowOutward />
            </a>
            <p className="contact-note">
              Let&apos;s connect for video editing, 3D design, web development,
              and digital marketing projects. I&apos;m open to collaborations,
              freelance work, and building complete digital solutions.
            </p>
          </div>

          <div className="contact-card">
            <h4>Profiles</h4>
            <div className="contact-links">
              <a
                href={profile.linkedinHref}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                LinkedIn — gentlemanbilal <MdArrowOutward />
              </a>
              <a
                href={profile.instagramHref}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                Instagram — {profile.instagramLabel} <MdArrowOutward />
              </a>
            </div>
            <h5 className="contact-copy">
              <MdCopyright /> 2026
            </h5>
          </div>

          <div className="contact-card">
            <h4>Certifications</h4>
            <div className="contact-links">
              {certifications.map((cert) => (
                <a
                  key={cert.href}
                  href={cert.href}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="disable"
                  className="contact-social contact-cert"
                >
                  {cert.name} <MdArrowOutward />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
