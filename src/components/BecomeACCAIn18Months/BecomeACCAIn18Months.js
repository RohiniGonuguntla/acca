import React from 'react';
import './BecomeACCAIn18Months.css';
import RequestCallBack from '../RequestCallBack/RequestCallBack';

const BecomeACCAIn18Months = () => {
  return (
    <div className="acca-container">
        <div className="become-acca-in-18-months">
            <h2 className="become-acca-in-18-months__title">Become ACCA in 18 months</h2>
            <p className="become-acca-in-18-months__description">
                Anyone globally can sign in and get access to all the courses and get placement support.Sign-in and get instant access to our FREE Course.
            </p>
            <div className="d-flex flex-row">
                <div className="box-container">
                    <h6>Registrations</h6>
                    <p>346,791</p>
                </div>
                <div className="box-container">
                    <h6>Faculty</h6>
                    <p>3 Experts</p>
                </div>
            </div>
            <button className="download-button">
                Download
            </button>
            <button className="acca-button">
                Aspiring to be an ACCA
            </button>
        </div>
        <div className="callback-container">
            <h4>Aspiring to be an ACCA? get in touch with us</h4>
            <RequestCallBack/>
        </div>
    </div>
  );
};

export default BecomeACCAIn18Months;