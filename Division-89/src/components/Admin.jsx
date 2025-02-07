import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Header from './header';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const [orders, setOrders] = useState([]);
  const [awaitingDelivery, setAwaitingDelivery] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8000/api/orders')
      .then(response => response.json())
      .then(data => {
        console.log("Orders Data:", data); 
        setOrders(data);
      })
      .catch(err => {
        console.error("Failed to fetch orders:", err); 
      });
  }, []);

  const handleApproval = (orderId) => {
    fetch(`http://localhost:8000/api/orders/${orderId}/approve`, { method: 'POST' })
      .then(response => response.json())
      .then(data => {
        const approvedOrder = orders.find(order => order.id === orderId);
        setOrders(orders.filter(order => order.id !== orderId));
        setAwaitingDelivery([...awaitingDelivery, approvedOrder]);
      });
  };

  const handleRejection = (orderId) => {
    fetch(`http://localhost:8000/api/orders/${orderId}/reject`, { method: 'POST' })
      .then(response => response.json())
      .then(data => {
        setOrders(orders.filter(order => order.id !== orderId));
      });
  };

  const handleCompletion = (orderId) => {
    fetch(`http://localhost:8000/api/orders/${orderId}/complete`, { method: 'POST' })
      .then(response => response.json())
      .then(data => {
        setAwaitingDelivery(awaitingDelivery.filter(order => order.id !== orderId));
      });
  };

  const handleLogout = () => {
    if (window.confirm("Are you sure?")) {
      fetch('http://localhost:8000/api/logout', { method: 'POST' })
        .then(response => response.json())
        .then(() => {
          navigate('/home');
        })
        .catch(err => {
          console.error('Failed to log out:', err);
        });
    }
  };

  return (
    <>
      <Container className="mt-5">
        <h3>Admin Orders</h3>
        <Row>
          {orders.map(order => (
            <Col key={order.id} md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Product: {order.products.map(p => p.name).join(', ')}</Card.Title>
                  <Card.Text>Quantity: {order.products.map(p => p.quantity).join(', ')}</Card.Text>
                  <Card.Text>Buyer: {order.buyerName}</Card.Text>
                  <Card.Text>Email: {order.buyerEmail}</Card.Text>
                  <Card.Text>Phone Number: {order.phoneNumber}</Card.Text>
                  <Card.Text>Address: {order.buyerAddress}</Card.Text>
                  <Button variant="success" onClick={() => handleApproval(order.id)} className="mr-2">Approve</Button>
                  <Button variant="danger" onClick={() => handleRejection(order.id)}>Reject</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <h3 className="mt-5">Awaiting Delivery</h3>
        <Row>
          {awaitingDelivery.map(order => (
            <Col key={order.id} md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Product: {order.products.map(p => p.name).join(', ')}</Card.Title>
                  <Card.Text>Quantity: {order.products.map(p => p.quantity).join(', ')}</Card.Text>
                  <Card.Text>Buyer: {order.buyerName}</Card.Text>
                  <Card.Text>Email: {order.buyerEmail}</Card.Text>
                  <Card.Text>Phone Number: {order.phoneNumber}</Card.Text>
                  <Card.Text>Address: {order.buyerAddress}</Card.Text>
                  <Card.Text>Status: Awaiting Delivery</Card.Text>
                  <Button variant="info" onClick={() => handleCompletion(order.id)} className="mr-2">Complete</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Button 
          onClick={handleLogout}
          style={{
            backgroundColor: '#d9534f',
            borderColor: '#d43f3a',
            color: '#fff',
            marginTop: '20px',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s, transform 0.3s',
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#c9302c';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#d9534f';
          }}
          onMouseDown={(e) => {
            e.target.style.transform = 'scale(0.95)';
          }}
          onMouseUp={(e) => {
            e.target.style.transform = 'scale(1)';
          }}
        >
          Log Out
        </Button>
      </Container>
    </>
  );
}

export default Admin;
