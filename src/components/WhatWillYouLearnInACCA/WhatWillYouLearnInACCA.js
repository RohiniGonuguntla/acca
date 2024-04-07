import React from 'react';
import './WhatWillYouLearnInACCA.css';

const WhatWillYouLearnInACCA = () => {
  return (
    <div className="what-will-you-learn-in-acca">
      <h2 className="what-will-you-learn-in-acca__title">
        What will you learn In ACCA?
      </h2>
      <div className="what-will-you-learn-in-acca__items">
        <div className="what-will-you-learn-in-acca__item">
          <h3 className="what-will-you-learn-in-acca__item-title">
            Knowledge Level
          </h3>
          <ul className="what-will-you-learn-in-acca__item-description">
            <li>Technoly</li>
            <li>Description</li>
          </ul>
          <p className="what-will-you-learn-in-acca__item-para">3 Papers</p>
        </div>
        <div className="what-will-you-learn-in-acca__item">
          <h3 className="what-will-you-learn-in-acca__item-title">
            Skill Level
          </h3>
          <ul className="what-will-you-learn-in-acca__item-description">
            <li>Certified proffessionals</li>
            <li>Tuitions</li>
          </ul>
          <p className="what-will-you-learn-in-acca__item-para">6 Papers</p>
        </div>
        <div className="what-will-you-learn-in-acca__item">
          <h3 className="what-will-you-learn-in-acca__item-title">
            Professional Level
          </h3>
          <ul className="what-will-you-learn-in-acca__item-description">
            <li>Strategic Proffesional</li>
            <li>Buiseness</li>
          </ul>
          <p className="what-will-you-learn-in-acca__item-para">4 Papers</p>
        </div>
      </div>
    </div>
  );
};

export default WhatWillYouLearnInACCA;