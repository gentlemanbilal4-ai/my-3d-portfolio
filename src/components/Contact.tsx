import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { profile } from "../data/portfolioData";

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
        </div>
      </div>
    </div>
  );
};

export default Contact;
