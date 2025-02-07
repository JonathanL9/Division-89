import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import './Analysis.css'; // Custom CSS for animations and styles

function Analysis2() {
  const [data, setData] = useState({ voltage: 0, steps: 0 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:5000/data');
        setData(result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const interval = setInterval(fetchData, 1000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const calculateEstimatedCurrent = () => {
    // Add the formula to calculate the estimated current
    return (data.voltage / 1000).toFixed(2); // Example calculation
  };

  const calculateTotalVoltagePerDay = () => {
    // Add the formula to calculate the estimated total voltage per day
    return (data.voltage * 24).toFixed(2); // Example calculation for 24 hours
  };

  const calculateCurrentPerDay = () => {
    // Add the formula to calculate the estimated current per day
    return ((data.voltage / 1000) * 24).toFixed(2); // Example calculation for 24 hours
  };

  const calculateAverageStepsPerDay = () => {
    // Add the formula to calculate the average steps per day
    return (data.steps * 24).toFixed(2); // Example calculation for 24 hours
  };

  return (
    <div className="analyzer-container">
      <h1>Analyzer</h1>
      <Row>
        <Col md={6}>
          <Card className="info-card">
            <Card.Body>
              <Card.Title>Voltage</Card.Title>
              <Card.Text>
                <img src="/path-to-voltage-image.jpg" alt="Voltage" />
                {data.voltage} V
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="info-card">
            <Card.Body>
              <Card.Title>Steps</Card.Title>
              <Card.Text>
                <img src="/path-to-steps-image.jpg" alt="Steps" />
                {data.steps}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="info-card">
            <Card.Body>
              <Card.Title>Estimated Current Generated</Card.Title>
              <Card.Text>
                <img src="/path-to-current-image.jpg" alt="Current" />
                {calculateEstimatedCurrent()} A
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="info-card">
            <Card.Body>
              <Card.Title>Estimated Total Voltage Per Day</Card.Title>
              <Card.Text>
                <img src="/path-to-total-voltage-image.jpg" alt="Total Voltage" />
                {calculateTotalVoltagePerDay()} V
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="info-card">
            <Card.Body>
              <Card.Title>Estimated Current Per Day</Card.Title>
              <Card.Text>
                <img src="/path-to-current-per-day-image.jpg" alt="Current Per Day" />
                {calculateCurrentPerDay()} A
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="info-card">
            <Card.Body>
              <Card.Title>Average Steps Per Day</Card.Title>
              <Card.Text>
                <img src="/path-to-steps-per-day-image.jpg" alt="Steps Per Day" />
                {calculateAverageStepsPerDay()}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Analysis2;
