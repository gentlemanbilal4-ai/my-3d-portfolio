import "./styles/WhatIDo.css";
import { serviceCards } from "../data/portfolioData";

const WhatIDo = () => {
  return (
    <div className="whatIDO">
      {/* Left: title */}
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>I<span className="do-h2"> DO</span></div>
        </h2>
      </div>

      {/* Right: always-open cards */}
      <div className="what-box">
        <div className="what-box-in" style={{ display: "flex" }}>
          <div className="what-border2">
            <svg width="100%">
              <line x1="0" y1="0" x2="0" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
              <line x1="100%" y1="0" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="7,7" />
            </svg>
          </div>

          {serviceCards.map((card, index) => (
            <div className="what-content what-open" key={index}>
              <div className="what-border1">
                <svg height="100%">
                  {index === 0 && (
                    <line x1="0" y1="0" x2="100%" y2="0" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                  )}
                  <line x1="0" y1="100%" x2="100%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="6,6" />
                </svg>
              </div>
              <div className="what-corner"></div>
              <div className="what-content-in">
                <h3>{card.title}</h3>
                <h4>{card.subtitle}</h4>
                <p>{card.description}</p>
                <h5>Skillset &amp; tools</h5>
                <div className="what-content-flex">
                  {card.tags.map((tag) => (
                    <div className="what-tags" key={tag}>{tag}</div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
