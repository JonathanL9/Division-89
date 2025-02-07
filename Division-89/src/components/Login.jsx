import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import loginImage from '../assets/login-otp-banner_png.png';
import Header from './header';
import './Login.css'; 

function LogIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  

  const handleLogin = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (data.success) {
      alert('Login successful');
      navigate('/admin');
    } else {
      alert('Login failed: ' + data.message);
    }
  };

  

  return (
    <>
      <section className="vh-100">
        <MDBContainer>
          <h1 className="col-3 justify-center login-title">Log In</h1>
        </MDBContainer>
        <MDBContainer fluid className="h-custom">
          <MDBRow className="d-flex justify-content-center align-items-center h-100">
            <MDBCol md="9" lg="6" xl="5">
              <img src={loginImage} className="img-fluid" alt="Sample image" />
            </MDBCol>
            <MDBCol md="8" lg="6" xl="4" className="offset-xl-1">
              <form onSubmit={handleLogin}>
                <MDBInput
                  type="email"
                  id="form3Example3"
                  label="Enter a valid email address"
                  className="form-control form-control-lg mb-4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <MDBInput
                  type="password"
                  id="form3Example4"
                  label="Password"
                  className="form-control form-control-lg mb-3"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="d-flex justify-content-between align-items-center">
                  <MDBCheckbox id="form2Example3" label="Remember me" className="mb-0" />
                  <a href="#!" className="text-body">Forgot password?</a>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <MDBBtn type="submit" size="lg" color="primary" className="hover-btn">Login</MDBBtn>
                </div>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>
  );
}

export default LogIn;
