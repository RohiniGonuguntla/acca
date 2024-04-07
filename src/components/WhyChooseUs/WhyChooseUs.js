import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us">
      <h2 className="why-choose-us__title">Why Choose Us?</h2>
      <div className="why-choose-us__items">
        <div className="why-choose-us__item">
          <h3 className="why-choose-us__item-title">Expert Faculty</h3>
          <p className="why-choose-us__item-description">
            Our faculty are from top iits and also worked in top MNC companies
          </p>
        </div>
        <div className="why-choose-us__item">
          <h3 className="why-choose-us__item-title">Complete Success Package</h3>
          <p className="why-choose-us__item-description">
                We continuously acccess the candidate and give feedback on regular basis
          </p>
        </div>
        <div className="why-choose-us__item">
          <h3 className="why-choose-us__item-title">Placement</h3>
          <p className="why-choose-us__item-description">
            more than 1700 companies recruited the sudents from us
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;