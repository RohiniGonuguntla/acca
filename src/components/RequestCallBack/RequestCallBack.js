import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import './RequestCallBack.css';

const RequestCallBack = () => {
    const [showModal, setShowModal] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [qualification, setQualification] = useState('');
    const [purpose, setPurpose] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); 
        if (!phoneNumber || !email || !qualification || !purpose) {
            alert("Please fill in all fields.");
            return;
        }
        setShowModal(true);
        setPhoneNumber('');
        setEmail('');
        setQualification('');
        setPurpose('');
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <form className="form-container">
            <input 
                type="text" 
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <br/>
            <input 
                type="email" 
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <br/>
            <input 
                type="text" 
                placeholder="Enter qualification"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
            />
            <br/>
            <input 
                rows={3} 
                placeholder="Enter purpose"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
            />
            <br/>
            <button onClick={handleSubmit} className="request-button">
                Request Call Back
            </button>

            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Success</Modal.Title>
                </Modal.Header>
                <Modal.Body>Your request has been submitted successfully.</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </form>
    );
};

export default RequestCallBack;
