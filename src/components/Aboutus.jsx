import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import about from './../assets/about.png'; 
import AOS from 'aos';// Updated image path
import 'aos/dist/aos.css'; // You can also use <link> for styles

const AboutUs = () => {
   
    return (
        <Container fluid className="mt-5 mb-5"  data-aos="fade-up" data-aos-duration="3000">
            <Row className="align-items-center">
                <Col md={6} >
                    <Image
                        src={about} // Use the about.png image
                        alt="About Us"
                        fluid
                        className="mb-4 mb-md-0"
                        data-aos="fade-right"
                      
                    />
                </Col>
                <Col md={6}>
                <h1  style={{ fontWeight: 'bold', fontFamily: '"Anek Malayalam", sans-serif',fontSize: '45px'  }}  className="display-4">About Us</h1>

                <p style={{ fontFamily: '"Anek Malayalam", sans-serif', fontSize: '20px' }}>
  Welcome to our travel and commercial company! We are committed to providing the best travel experiences and commercial services to our customers. Our team is dedicated to ensuring that you have a fantastic journey and business dealings with us. We strive to innovate and improve continuously to meet your travel and commercial needs. Thank you for choosing us, and we look forward to serving you!
</p>

<p style={{ fontFamily: '"Anek Malayalam", sans-serif', fontSize: '20px' }}>
  Our company values transparency, integrity, and customer satisfaction. We believe in building lasting relationships with our clients and are always here to assist you with any travel plans or commercial inquiries and concerns. Stay tuned for updates and exciting news about our travel packages and commercial offerings!
</p>
                </Col>
            </Row>
        </Container>
    );
};
AOS.init();
export default AboutUs;
