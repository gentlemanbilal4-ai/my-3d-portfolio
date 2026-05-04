import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { profile } from "../data/portfolioData";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>I'm</h2>
            <h1>{profile.firstName}</h1>
          </div>
          <div className="landing-info">
            <h3>{profile.rolePrefix} &</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">{profile.rolePrimary}</div>
              <div className="landing-h2-2">{profile.roleSecondary}</div>
            </h2>
            <h2>
              <div className="landing-h2-info">{profile.roleSecondary}</div>
              <div className="landing-h2-info-1">{profile.rolePrimary}</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
