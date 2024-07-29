import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import contactImage from './../assets/contact.png'; // Update this path with your actual image path
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform validation
        if (
            formData.name.trim() === '' ||
            formData.email.trim() === '' ||
            formData.subject.trim() === '' ||
            formData.message.trim() === ''
        ) {
            alert('Please fill in all the fields.');
            return;
        }

        // Submit the form data here (e.g., send it to a server)
        console.log('Form data:', formData);

        // Show the success message
        setShowSuccessMessage(true);

        // Reset the form data
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    return (
        <Container fluid className="mt-5 mb-5" data-aos="fade-right" data-aos-duration="3000">
            <Row>
                <div className="col-lg-12">
                    <h1 style={{ fontWeight: 'bold', fontFamily: '"Anek Malayalam", sans-serif', fontSize: '45px' }} className="display-6 text-center" data-aos="zoom-in" data-aos-duration="2000">
                        Contact Us
                    </h1>
                    <hr />
                </div>
                <Col md={6}>
                    <br />
                    <br />
                    <br />
                    <br />
                    <Form
                        style={{
                            backgroundColor: '#182641',
                            padding: '2rem',
                            borderRadius: '8px',
                        }}
                        onSubmit={handleSubmit}
                    >
                        <Form.Group controlId="formName">
                            <Form.Label className="text-light">Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Your Name"
                                style={{ backgroundColor: '#d8e6f0' }}
                            />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label className="text-light">Email Address</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                placeholder="Your Email"
                                style={{ backgroundColor: '#d8e6f0' }}
                            />
                        </Form.Group>

                        <Form.Group controlId="formSubject">
                            <Form.Label className="text-light">Subject</Form.Label>
                            <Form.Control
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleInputChange}
                                placeholder="Subject"
                                style={{ backgroundColor: '#d8e6f0' }}
                            />
                        </Form.Group>

                        <Form.Group controlId="formMessage">
                            <Form.Label className="text-light">Your Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                rows={4}
                                placeholder="Your Message"
                                style={{ backgroundColor: '#d8e6f0' }}
                            />
                        </Form.Group>

                        <Button variant="light" type="submit" className="mt-3">
                            Send
                        </Button>

                        {showSuccessMessage && (
                            <div className="mt-3 alert alert-success">
                                Your message has been sent successfully!
                            </div>
                        )}
                    </Form>
                </Col>
                <Col md={6}>
                    <Image
                        src={contactImage} // Your contact image
                        alt="Contact Us"
                        fluid
                        style={{ borderRadius: '8px', height: '100%' }}
                    />
                </Col>
            </Row>
        </Container>
    );
};

AOS.init();
export default Contact;