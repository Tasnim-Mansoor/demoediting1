import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer 
            className="py-5"
            style={{ 
                backgroundColor: '#182641', 
                color: '#d8e6f0' // or any other color you prefer for the text
            }}
        >
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>
              We are a leading commercial platform offering a wide range of
              services at competitive prices.
            </p>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Email: info@obic.com</li>
              <li>Phone: +967 777666444</li>
              <li>Address: Sana'a Yemen</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <div className="social-icons">
            <a href="#f" className="mx-2" style={{ color: '#d8e6f0' }}><FaFacebookF /></a>
              <a href="#f" className="mx-2" style={{ color: '#d8e6f0' }}><FaTwitter /></a>
              <a href="#f" className="mx-2" style={{ color: '#d8e6f0' }}><FaInstagram /></a>
              <a href="#f" className="mx-2" style={{ color: '#d8e6f0' }}><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center">
          <p>&copy; 2024  Obic Site. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;