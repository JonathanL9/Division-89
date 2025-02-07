import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, Row, Col } from 'react-bootstrap';
import './Analysis.css'; // Custom CSS for animations and styles
import pow from '../assets/Power.jpg';
import cur from '../assets/Currrent.jpg';
import volt from '../assets/volt.jpg';
import steps from '../assets/steps.jpg';

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
    return (data.voltage / 10).toFixed(2); // Example calculation
  };

  const calculateTotalVoltagePerDay = () => {
    return (data.voltage * 24).toFixed(2); // Example calculation for 24 hours
  };

  const calculateCurrentPerDay = () => {
    return ((data.voltage / 10) * 24).toFixed(2); // Example calculation for 24 hours
  };

  const calculateAverageStepsPerDay = () => {
    return (data.steps * 24).toFixed(2); // Example calculation for 24 hours
  };

  const calculateWattage = () => {
    return (data.voltage * calculateEstimatedCurrent()).toFixed(2); // Example calculation for wattage
  };

  const calculateMonthlyVoltage = () => {
    return (calculateTotalVoltagePerDay() * 30).toFixed(2); // Example calculation for monthly voltage
  };

  const calculateMonthlyCurrent = () => {
    return (calculateCurrentPerDay() * 30).toFixed(2); // Example calculation for monthly current
  };

  const calculateWattagePerDay = () => {
    return (calculateWattage() * 24).toFixed(2); // Example calculation for daily wattage
  };

  const calculateWattagePerMonth = () => {
    return (calculateWattagePerDay() * 30).toFixed(2); // Example calculation for monthly wattage
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
                <img src={volt}  alt="Voltage" />
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
                <img src={steps} alt="Steps" />
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
                <img src={cur} alt="Current" />
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
                <img src={volt} alt="Total Voltage" />
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
                <img src={cur}  alt="Current Per Day" />
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
                <img src={steps} alt="Steps Per Day" />
                {calculateAverageStepsPerDay()}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="info-card">
            <Card.Body>
              <Card.Title>Estimated Wattage</Card.Title>
              <Card.Text>
                <img src={pow}  alt="Wattage" />
                {calculateWattage()} W
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="info-card">
            <Card.Body>
              <Card.Title>Estimated Monthly Voltage</Card.Title>
              <Card.Text>
                <img src={volt}  alt="Monthly Voltage" />
                {calculateMonthlyVoltage()} V
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="info-card">
            <Card.Body>
              <Card.Title>Estimated Monthly Current</Card.Title>
              <Card.Text>
                <img src={cur}  alt="Monthly Current" />
                {calculateMonthlyCurrent()} A
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="info-card">
            <Card.Body>
              <Card.Title>Daily Wattage</Card.Title>
              <Card.Text>
                <img src={pow}  alt="Daily Wattage" />
                {calculateWattagePerDay()} W
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6}>
          <Card className="info-card">
            <Card.Body>
              <Card.Title>Monthly Wattage</Card.Title>
              <Card.Text>
                <img src={pow} alt="Monthly Wattage" />
                {calculateWattagePerMonth()} 
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Analysis2;


