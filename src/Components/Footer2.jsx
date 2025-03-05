// original footer

import { Link } from "react-router-dom";

import logo from "../assets/images/logo/logo-footer-1.png";
//import footerBG1 from "../assets/images/background/10.jpg";
import footerBG2 from "../assets/images/background/pattern-25.png";
import footerBG3 from "../assets/images/background/pattern-26.png";

export default function Footer2() {
  const footer1 = {
    // backgroundImage: `url(${footerBG1})`,
    backgroundColor: "#BB75CC",
  };

  const footer2 = {
    backgroundImage: `url(${footerBG2})`,
  };

  const footer3 = {
    backgroundImage: `url(${footerBG3})`,
  };

  return (
    <>
      <footer className="footer-three" style={footer1}>
        <div className="footer-three_pattern" style={footer2}></div>
        <div className="footer-three_pattern-two" style={footer3}></div>
        <div className="auto-container clearfix">
          {/* Widgets Section Start */}
          <div className="footer-three-widgets">
            <div className="row clearfix">
              {/* Footer Column Start */}
              <div className="footer-three_column col-lg-4 col-md-12 col-sm-12">
                <div className="d-flex justify-content-between align-items-center flex-wrap">
                  <div className="footer-three_logo">
                    <Link to="/">
                      <img src={logo} alt="Mumbai Book Fair Logo" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* Footer Column End */}
              {/* Big Column Start */}
              <div className="footer-three_column col-lg-4 col-md-6 col-sm-12">
                <h4 className="footer-two_title">Social</h4>
                <ul className="footer-social_list">
                  <Link
                    to="/"
                    className="facebook fa-brands fa-facebook-f"
                  ></Link>
                  <Link
                    to="/"
                    className="facebook fa-brands fa-instagram"
                  ></Link>
                  <Link
                    to="/"
                    className="twitter fa-brands fa-x-twitter"
                  ></Link>
                  <Link
                    to="/"
                    className="twitter fa-brands fa-linkedin-in"
                  ></Link>
                  <Link to="/" className="youtube fa-brands fa-youtube"></Link>
                </ul>
              </div>
              {/* Big Column End */}
              {/* Big Column Start */}
              <div className="footer-three_column col-lg-4 col-md-6 col-sm-12">
                <div className="footer-two-widget links-widget">
                  <h4 className="footer-two_title">Contacts</h4>
                  <ul className="footer-three_contact-list">
                    <li>
                      {/* <span className="icon flaticon-map"></span> */}
                      <strong>ADDRESS</strong>
                      BKC, Mumbai, India
                    </li>
                    <li>
                      {/* <span className="icon flaticon-email-1"></span> */}
                      <strong>MAIL TO US</strong>
                      info@mumbaibookfestival.com
                    </li>
                    <li>
                      {/* <span className="icon flaticon-phone"></span> */}
                      <strong>Phone</strong>
                      1800-NBT-1800
                    </li>
                  </ul>
                </div>
              </div>
              {/* Big Column End */}
            </div>
          </div>
          {/* Widgets Section End */}
        </div>
      </footer>
    </>
  );
}
