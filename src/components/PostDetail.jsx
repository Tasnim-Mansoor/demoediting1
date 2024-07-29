import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const PostDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getPost();
    }, []);

    const getPost = async () => {
        setLoading(true);
        const response = await fetch(`https://my-json-server.typicode.com/Tasnim-Mansoor/mockjson/posts/${id}`);
        const data = await response.json();
        setPost(data);
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

    return (
        <div className="container mt-5">
            {loading ? <Loading /> : post && (
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src={post.image} alt={post.title} className="img-fluid" />
                    </div>
                    <div className="col-md-6 d-flex flex-column justify-content-center">
                        <h1 className="mb-4">{post.title}</h1>
                        <p> {post.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PostDetail;
