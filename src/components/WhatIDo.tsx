import "./styles/WhatIDo.css";
import { serviceCards } from "../data/portfolioData";

const WhatIDo = () => {
  return (
    <div className="whatIDO">
      <div className="what-title-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-grid">
        {serviceCards.map((card, index) => (
          <div className="what-card" key={index}>
            <div className="what-card-corner"></div>
            <div className="what-card-in">
              <h3>{card.title}</h3>
              <h4>{card.subtitle}</h4>
              <p>{card.description}</p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-tags-flex">
                {card.tags.map((tag) => (
                  <div className="what-tag" key={tag}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatIDo;
