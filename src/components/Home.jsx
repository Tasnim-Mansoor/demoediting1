import React from "react";
import Card from "react-bootstrap/Card";
import banner from "./../assets/img3.png";
import Services from "./Services";
import Aboutus from "./Aboutus";
import Contact from "./Contact";
import Check from "./Check";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const handleExploreClick = () => {
    window.location.href = ""; // Replace with the desired URL
  };
  return (
    <div className="home-banner">
      <Card
        className="text-white border-0 d-flex flex-row-reverse align-items-center h-100"
        style={{ backgroundColor: "#182641", height: "600px" }} // Adjust the height as needed
      >
        <Card.Img
          src={banner}
          alt="banner"
          data-aos="fade-down-left"
          className="w-50 h-200"
          data-aos-duration="3000"
        />
        <Card.Body className="w-50">
          <Card.Title
            className="display-5 fw-bolder"
            style={{
              fontWeight: "bold",
              fontFamily: '"Anek Malayalam", sans-serif',
            }}
          >
            Welcome to our Website
          </Card.Title>
          <Card.Text className="lead fs-4 mb-4">
            Discover the best services we have to offer.
          </Card.Text>
          <button
            className="btn btn-primary btn-lg"
            style={{
              backgroundColor: "#d8e6f0",
              color: "#333",
              border: "none",
              padding: "12px 24px",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "8px",
              cursor: "pointer",
            }}
            onClick={handleExploreClick}
          >
            Explore Now
          </button>
        </Card.Body>
      </Card>
      <Aboutus />
      <Services />
      <Check/>
      <Contact />
    
      
      
    </div>
  );
};

AOS.init();
export default Home;
