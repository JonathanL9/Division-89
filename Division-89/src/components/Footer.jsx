import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './Footer.css'; 
import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  let year = new Date().getUTCFullYear();
  return (
    <div className="">
      <footer className="text-center text-white" style={{ backgroundColor: "#3f51b5" }}>
        <div className="container">
          <section className="mt-5">
            <div className="row text-center d-flex justify-content-center pt-5">
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                <a href="https://sites.google.com/view/division89/aboutus" className="text-white link-hover">About us</a>
                </h6>
              </div>
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <Link to="/products" className="text-white link-hover">Products</Link>
                </h6>
              </div>
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                <a href="https://sites.google.com/view/division89/project" className="text-white link-hover">Awards</a>
                </h6>
              </div>
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                <a href="https://sites.google.com/view/division89/" className="text-white link-hover">Help</a>
                </h6>
              </div>
              <div className="col-md-2">
                <h6 className="text-uppercase font-weight-bold">
                  <a href="https://sites.google.com/view/division89/home" className="text-white link-hover">Contact</a>
                </h6>
              </div>
            </div>
          </section>

          <hr className="my-5" />

          <section className="mb-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <p className="footer-description">
                  Division 89 is an Initiative designed to utilize the power of PizeoElectric Disks 
                  to generate alternate energy sources from regular and daily life activities.
                </p>
              </div>
            </div>
          </section>

          <section className="text-center mb-5">
            <Link to="/facebook" className="text-white me-4 social-icon-hover">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link to="/about" className="text-white me-4 social-icon-hover">
              <i className="fab fa-twitter"></i>
            </Link>
            <Link to="/about" className="text-white me-4 social-icon-hover">
              <i className="fab fa-google"></i>
            </Link>
            <Link to="/about" className="text-white me-4 social-icon-hover">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link to="/about" className="text-white me-4 social-icon-hover">
              <i className="fab fa-linkedin"></i>
            </Link>
            <Link to="/about" className="text-white me-4 social-icon-hover">
              <i className="fab fa-github"></i>
            </Link>
          </section>
        </div>

        <div className="p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
          © {year} Copyright
          <Link className="text-white" to="/"> Division 89</Link>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
