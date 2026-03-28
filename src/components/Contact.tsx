import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import {
  certifications,
  education,
  profile,
  publications,
} from "../data/portfolioData";

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
              Let&apos;s connect for blockchain development, smart contracts,
              research collaborations, and technical consulting.
            </p>
          </div>

          <div className="contact-card">
            <h4>Profiles</h4>
            <div className="contact-links">
              <a href={profile.githubHref} target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
                GitHub — Kamrankamil <MdArrowOutward />
              </a>
              <a href={profile.linkedinHref} target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
                LinkedIn — kamran-khan-788874187 <MdArrowOutward />
              </a>
              <a href={profile.youtubeHref} target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
                YouTube — @blocklearners <MdArrowOutward />
              </a>
              <a href={profile.instagramHref} target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
                Instagram — {profile.instagramLabel} <MdArrowOutward />
              </a>
              <a href={profile.udemyHref} target="_blank" rel="noreferrer" data-cursor="disable" className="contact-social">
                Udemy Profile <MdArrowOutward />
              </a>
            </div>
          </div>

          <div className="contact-card">
            <h4>Education</h4>
            {education.map((item) => (
              <p key={item} className="contact-meta-item">{item}</p>
            ))}
            <h4>Publications</h4>
            {publications.map((item) => (
              <p key={item} className="contact-meta-item">{item}</p>
            ))}
            <h4>Certifications</h4>
            {certifications.map((item) => (
              <p key={item} className="contact-meta-item">{item}</p>
            ))}
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
