import React from 'react';
import './IndigoLearn.css';
import RequestCallBack from '../RequestCallBack/RequestCallBack';

const IndigoLearn = () => {
  return (
    <div className="indigo-learn">
        <div>
            <h2 className="indigo-learn__title">
            Kick off your ACCA Prep journey with IndigoLearn
            </h2>
            <p className="indigo-learn__description">
                Sign in and get instant access to our free course
            </p>
            <button className="kick-button">Kick off now</button>
        </div>
        <div className="callback-container">
            <h4>Aspiring to be an ACCA? get in touch with us</h4>
            <RequestCallBack/>
        </div>
    </div>
  );
};

export default IndigoLearn;