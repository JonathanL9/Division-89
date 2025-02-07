import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import div89 from "../assets/Division 89 3.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Header.css"; 
import { useState, useEffect } from "react";
import axios from 'axios';

function Header() {
  const [loginState, setLoginState] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLoginState = async () => {
      try {
        const response = await axios('http://localhost:8000/api/loginState');
        setLoginState(response.data.loginState);
        console.log("Login State: "+ loginState);
      } catch (error) {
        console.error('Error fetching login state:', error);
      }
    };
  
    // Fetch login state immediately
    fetchLoginState();
  
    // Set up interval to fetch login state every 5 seconds
    const interval = setInterval(fetchLoginState, 5000);
  
    // Clean up interval on component unmount
    return () => clearInterval(interval);
  }, []);
  

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand px-5" to="/home">
          <img src={div89} width={50} height={30} className="d-inline-block align-top" alt="" />
          Division 89
        </Link>
        <button className="navbar-toggler bg-primary" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="mx-auto">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/analysis">Analysis</Link>
              </li>
            </ul>
          </div>
          <div className="float-right px-5">
            {loginState ? (
              <button className="btn btn-secondary glowing-btn ripple-btn" onClick={() => navigate('/admin')}>
                Admin
              </button>
            ) : (
              <button className="btn btn-secondary glowing-btn ripple-btn" onClick={() => navigate('/login')}>
                Log-In
              </button>
            )}
          </div>
        </div>
      </nav>

      <Outlet></Outlet>
    </>
  );
}

export default Header;
