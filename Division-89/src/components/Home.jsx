import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; 
import { Card, Container, Row, Col, Button } from 'react-bootstrap';
import div89Image from '../assets/Division 89 3.png'; 
import img0 from '../assets/Div 89 back.png';
import img1 from '../assets/concept1.jpg';
import img2 from '../assets/concept2.jpg';
import img3 from '../assets/Shoes.jpg';
import img4 from '../assets/shoes2.png';
import img5 from '../assets/Side walk.jpg';
import background from '../assets/bk2.jpg';

function Home() {
  const [cardIndex, setCardIndex] = useState(0);
  const cards = [
    {
      title: 'Piezo Electric Disks',
      description: 'Experience the future Energy.',
      image: img1, 
      link: '/products',
    },
    {
      title: 'Innovative Tech Gadgets',
      description: 'Discover the latest in tech innovation.',
      image: img2, 
      link: '/products',
    },
    {
      title: 'Electric Generating Side Walks',
      description: 'Harboring the Energy of Each in a Pollution free system.',
      image: img5, 
      link: '/products',
    },
    {
      title: 'Piezo Powered Shoes',
      description: 'The Future of Personal Wears.',
      image: img3, 
      link: '/about',
    },
    {
      title: 'Innovations',
      description: 'Make your home smarter and more efficient.',
      image: img4, 
      link: '/about',
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [cards.length]);

  const handlePrevious = () => {
    setCardIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div className=""  style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '0px', margin:'0px', width:'100vw' }}>
    
      <div className="intro-card d-flex align-items-center justify-content-center">
        <div className="text-center">
          <img src={img0} alt="Division 89" className="img-fluid mb-4" />
          <h1 className="display-3">Division 89</h1>
          <p className="lead">Innovating for the Future</p>
        </div>
      </div>

      
      <Row className=" justify-content-center">
        <Col md={1} className="d-flex align-items-center justify-content-center">
          <Button className="arrow-btn" onClick={handlePrevious}>
            &lt;
          </Button>
        </Col>
        <Col md={8} className="d-flex justify-content-center">
          <div className="animated-card-container">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`animated-card ${index === cardIndex ? 'active' : ''}`}
                style={{ transform: `translateX(-${cardIndex * 100}%)` }}
              >
                <Card className="h-100 mx-auto card-enlarged">
                  <Card.Img variant="top" src={card.image} alt={card.title} />
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.description}</Card.Text>
                    <Link to={card.link} className="btn btn-primary">Learn More</Link>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </Col>
        <Col md={1} className="d-flex align-items-center justify-content-center">
          <Button className="arrow-btn" onClick={handleNext}>
            &gt;
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
