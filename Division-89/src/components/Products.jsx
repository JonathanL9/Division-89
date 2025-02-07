import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import background from '../assets/bk2.jpg';
import './Products.css'; // Custom CSS file
import img1 from '../assets/concept1.jpg';
import img2 from '../assets/concept2.jpg';
import img3 from '../assets/Shoes.jpg';
import img4 from '../assets/shoes2.png';
import img5 from '../assets/Side walk.jpg';

function Products() {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [buyerName, setBuyerName] = useState('');
  const [buyerEmail, setBuyerEmail] = useState('');
  const [buyerAddress, setBuyerAddress] = useState('');
  const [creditCardInfo, setCreditCardInfo] = useState('');
  const [phoneNumber, setNumber] = useState('');

  const products = [
    { id: 1, name: 'Piezo Walking Space', description: 'A 1m x1m Walking Pile', price: 27999.99, image: img1 },
    { id: 2, name: 'Piezo Powered Keyboards', description: 'Battery Supported Piezo powered keyboards', price:9999, image: img2 },
    { id: 3, name: 'Piezo Electric Shoes', description: 'The Future of persoanl wear', price: 6999.99, image: img4 },
    { id: 4, name: 'Piezo Disks  - Large', description: 'Versatile Individual disks', price: 499.99, image: img5 },
  ];

  const addToCart = (product, quantity = 1) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item));
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  const removeFromCart = (productId) => {
    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct && existingProduct.quantity > 1) {
      setCart(cart.map(item => item.id === productId ? { ...item, quantity: item.quantity - 1 } : item));
    } else {
      setCart(cart.filter(item => item.id !== productId));
    }
  };

  const handlePhoneChange = (e) => {
    setNumber(e.target.value);
  };
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleNameChange = (e) => {
    setBuyerName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setBuyerEmail(e.target.value);
  };

  const handleAddressChange = (e) => {
    setBuyerAddress(e.target.value);
  };

  const handleCreditCardChange = (e) => {
    setCreditCardInfo(e.target.value);
  };

  const handleConfirmPurchase = async (e) => {
    e.preventDefault();
    const orderData = {
      buyerName,
      buyerEmail,
      buyerAddress,
      creditCardInfo,
      phoneNumber,
      products: cart.map(item => ({
        name: item.name,
        quantity: item.quantity
      }))
    };
  
    console.log("Order Data:", orderData); 
  
    const response = await fetch('http://localhost:8000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    });
  
    const text = await response.text(); 
    console.log("Response Text:", text); 
  
    try {
      const data = JSON.parse(text); 
      if (data.success) {
        alert('Purchase successful');
        setCart([]); 
      } else {
        alert('Purchase failed: ' + data.message);
      }
    } catch (error) {
      console.error("Failed to parse JSON response:", error);
      alert('Failed to process purchase. Please try again.');
    }
  };
  

    
  

  return (
    <>
 
      <Container className="overconClass" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h1 className="text-center py-5"   >Explore Our Edge Defining Tech</h1>
        <Row>
          <Col md={8}>
            <Row>
              {products.map((product) => (
                <Col key={product.id} md={6} className="mb-4 mgk5">
                  <Card className="product-card">
                    <Card.Img variant="top" src={product.image} />
                    <Card.Body>
                      <Card.Title className="card-title">{product.name}</Card.Title>
                      <Card.Text className="card-description">{product.description}</Card.Text>
                      <Card.Text className="card-price">Birr {product.price.toFixed(2)}</Card.Text>
                      {product.id === 4 ? (
                        <Form.Control
                          type="number"
                          value={quantity}
                          onChange={handleQuantityChange}
                          min="1"
                          className="quantity-input"
                        />
                      ) : null}
                      <Button onClick={() => addToCart(product, product.id === 4 ? quantity : 1)} variant="primary" className="hover-btn">
                        Add to Cart
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={4}>
            <h3 className="text-light">Cart</h3>
            <Row>
              {cart.map((item, index) => (
                <Col key={index} md={6} className="cart-item mb-3">
                  <Card className="cart-card">
                    <Card.Img src={item.image} alt={item.name} style={{ width: '140px', height: '60px' ,align: 'center'}} />
                    <Card.Body>
                      <Card.Title className="cart-item-title">{item.name}</Card.Title>
                      <Card.Text className="cart-item-quantity">Quantity: {item.quantity}</Card.Text>
                      <Button variant="danger" onClick={() => removeFromCart(item.id)}>-</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
            <Form onSubmit={handleConfirmPurchase}>
              <Form.Group controlId="formName">
                <Form.Label className="text-lighter">Name</Form.Label>
                <Form.Control type="text" value={buyerName} onChange={handleNameChange} placeholder="Enter your name" required />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label className="text-lighter">Email</Form.Label>
                <Form.Control type="email" value={buyerEmail} onChange={handleEmailChange} placeholder="Enter your email" required />
              </Form.Group>
              <Form.Group controlId="formAddress">
                <Form.Label className="text-lighter">Address</Form.Label>
                <Form.Control type="text" value={buyerAddress} onChange={handleAddressChange} placeholder="Enter your address" required />
              </Form.Group>
              <Form.Group controlId="phoneNumber">
                <Form.Label className="text-lighter">Phone Number</Form.Label>
                <Form.Control type="phone" value={phoneNumber} onChange={handlePhoneChange} placeholder="Enter your phone number" required />
              </Form.Group>
              <Form.Group controlId="formCreditCard">
                <Form.Label className="text-lighter">Credit Card Info</Form.Label>
                <Form.Control type="phone" value={creditCardInfo} onChange={handleCreditCardChange} placeholder="Enter your credit card info" required />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">
                Confirm Purchase
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Products;
