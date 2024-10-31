import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = ({ handleClose }) => {
    const [reason, setReason] = useState('');
    const [message, setMessage] = useState('');
    const [sender, setSender] = useState('');
    const [validated, setValidated] = useState(false);

    const handleReasonChange = (e) => setReason(e.target.value);
    const handleMessageChange = (e) => setMessage(e.target.value);
    const handleSenderChange = (e) => setSender(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (reason && message) {
            const subject = encodeURIComponent(`Webfolio Contact: ${reason}`);
            const body = encodeURIComponent(`${message}\n\nFrom: ${sender || 'Anonymous'}`);
            const mailtoLink = `mailto:cinnlight@gmail.com?subject=${subject}&body=${body}`;
            window.location.href = mailtoLink;
            handleClose();
        } else {
            setValidated(true);
        }
    }


    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="contactReason">
                <Form.Label>Reason for Contact</Form.Label>
                <Form.Select value={reason} onChange={handleReasonChange} required className={reason ? 'is-valid' : 'is-invalid'}>
                    <option value="">Select a reason...</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Work Inquiry">Work Inquiry</option>
                    <option value="General Question">General Question</option>
                    <option value="Other">Other</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                    Please select a reason for contacting.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="contactMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    value={message}
                    onChange={handleMessageChange}
                    placeholder="Enter your message here..."
                    required
                    className={message ? 'is-valid' : 'is-invalid'}
                />
                <Form.Control.Feedback type="invalid">
                    Please enter your message.
                </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="contactSender">
                <Form.Label>Your Contact Info (optional)</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Name and/or Email"
                    value={sender}
                    onChange={handleSenderChange}
                />
            </Form.Group>

            <Button variant="primary" type="submit">
                Send Email
            </Button>
        </Form>
    )
};

export default ContactForm;