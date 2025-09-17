// src/components/RaiseTicketButton.jsx
import React, { useState } from "react";
import { Button, Modal, Form, Alert } from "react-bootstrap";

export default function RaiseTicketButton() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Open modal and reset submission state
  const handleOpen = () => {
    setShow(true);
    setSubmitted(false);
  };

  const handleClose = () => setShow(false);

  // Update form data on change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ticket Data:", formData); // Replace with API call
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      {/* Trigger Button */}
      <Button
        variant="primary"
        className="fw-semibold rounded-pill px-4 py-2 shadow-sm"
        onClick={handleOpen}
      >
        Raise a Ticket
      </Button>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold text-primary">
            Raise a Support Ticket
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {submitted ? (
            <Alert variant="success">
              Your ticket has been submitted successfully!
            </Alert>
          ) : (
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="ticketName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="ticketEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="ticketSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="ticketMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your issue..."
                  required
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>

        <Modal.Footer>
          {!submitted && (
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
          )}
          <Button variant="outline-primary" onClick={handleClose}>
            {submitted ? "Close" : "Cancel"}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
