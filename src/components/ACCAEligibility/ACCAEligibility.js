import React from 'react';
import './ACCAEligibility.css';

const ACCAEligibility = () => {
  return (
    <div className="acca-eligibility">
      <div className="acca-eligibility__items">
        <div className="acca-eligibility__item">
          <h3 className="acca-eligibility__item-title">Levels</h3>
          <p className="acca-eligibility__item-description">
            Three(13 papers)
          </p>
        </div>
        <div className="acca-eligibility__item">
          <h3 className="acca-eligibility__item-title">Duration</h3>
          <p className="acca-eligibility__item-description">
            6-10 months
          </p>
        </div>
        <div className="acca-eligibility__item">
          <h3 className="acca-eligibility__item-title">Exams</h3>
          <p className="acca-eligibility__item-description">
            quarterly
          </p>
        </div>
        <div className="acca-eligibility__item">
          <h3 className="acca-eligibility__item-title">Exemptions</h3>
          <p className="acca-eligibility__item-description">
            Up to 9 papers
          </p>
        </div>
      </div>
    </div>
  );
};

export default ACCAEligibility;