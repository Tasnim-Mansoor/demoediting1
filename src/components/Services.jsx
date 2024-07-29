import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import AOS from 'aos';// Updated image path
import 'aos/dist/aos.css'; 

const Services = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = async () => {
        setLoading(true);
        const response = await fetch("https://my-json-server.typicode.com/Tasnim-Mansoor/mockjson/db");
        const data = await response.json();
        setPosts(data.posts);
        setLoading(false);
    };

    const Loading = () => (
        <div className="mt-4 text-center">
            <Spinner animation="grow" />
            <Spinner animation="grow" />
            <Spinner animation="grow" />
            <Spinner animation="grow" />
            <Spinner animation="grow" />
            <Spinner animation="grow" />
            <Spinner animation="grow" />
        </div>
    );

    const ShowPosts = () => (
        <div className="row" data-aos="fade-right" data-aos-duration="3000">
            {posts.map((item) => (
                <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-4" key={item.id}>
                    <Card className="h-100">
                        <Card.Img 
                            variant="top" 
                            src={item.image} 
                            alt={item.title} 
                            style={{ height: '250px', objectFit: 'cover' }}
                        />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title className="text-truncate">{item.title}</Card.Title>
                            <Card.Text className="flex-grow-1 text-truncate">
                                {item.description}
                            </Card.Text>
                            <Link to={`/posts/${item.id}`} className="mt-auto">
                                <Button variant="dark">Read More</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </div>
            ))}
        </div>
    );

    return (
        <div>
            <div className="container mt-5 pb-5">
                <div className="row">
                    <div className="col-lg-12">
                        <h1  style={{ fontWeight: 'bold', fontFamily: '"Anek Malayalam", sans-serif',fontSize: '45px'  }}  className="display-6 text-center" data-aos="zoom-in" data-aos-duration="3000">Our Services</h1>
                        <hr />
                        {loading ? <Loading /> : <ShowPosts />}
                    </div>
                </div>
            </div>
        </div>
    );
}
AOS.init();
export default Services;
