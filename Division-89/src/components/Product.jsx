import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import Header from './header';

function Product(){
  <Header></Header>
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);

  const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1',price:99.99, image: 'image1.jpg' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', price:99.99,image: 'image2.jpg' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3',price:99.99, image: 'image3.jpg' },
    { id: 4, name: 'Product 4', description: 'Description of Product 4',price:99.99, image: 'image4.jpg' },
  ];

  const addToCart = (product, quantity = 1) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  return (
    <><Header></Header>
    <Container>
      <Row>
        <Col md={8}>
          <Row>
            {products.map((product) => (
              <Col key={product.id} md={6}>
                <Card>
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text>{product.description}</Card.Text>
                    <Card.Text>{product.price}</Card.Text>
                    {product.id === 4 ? (
                      <Form.Control
                        type="number"
                        value={quantity}
                        onChange={handleQuantityChange}
                        min="1"
                      />
                    ) : null}
                    <Button onClick={() => addToCart(product, product.id === 4 ? quantity : 1)}>
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
        <Col md={4}>
          <h3>Cart</h3>
          {cart.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
              <p>{item.name} - Quantity: {item.quantity}</p>
            </div>
          ))}
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter your phone number" />
            </Form.Group>
            <Form.Group controlId="formCreditCard">
              <Form.Label>Credit Card Info</Form.Label>
              <Form.Control type="text" placeholder="Enter your credit card info" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Confirm Purchase
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    </> 
  );
};

export default Product;
