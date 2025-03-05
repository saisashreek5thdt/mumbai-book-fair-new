// original footer

import { Link } from "react-router-dom";

import logo from "../assets/images/logo/logo-footer-1.png";
import footerBG1 from "../assets/images/footerBG2.png";
import footerBG2 from "../assets/images/background/pattern-25.png";
//import footerBG3 from "../assets/images/background/pattern-26.png";

import { LuMapPinCheckInside, LuMail, LuPhoneCall } from "react-icons/lu";

export default function Footer2() {
  const footer1 = {
    backgroundImage: `url(${footerBG1})`,
    //backgroundColor: "#BB75CC",
  };

  const footer2 = {
    backgroundImage: `url(${footerBG2})`,
  };

  // const footer3 = {
  //   backgroundImage: `url(${footerBG3})`,
  // };

  let currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer-three" style={footer1}>
        <div className="footer-three_pattern" style={footer2}></div>
        <div className="footer-three_pattern-two"></div>
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
                    className="facebook fa-brands fa-facebook-f fa-2x"
                  ></Link>
                  <Link
                    to="/"
                    className="facebook fa-brands fa-instagram fa-2x"
                  ></Link>
                  <Link
                    to="/"
                    className="twitter fa-brands fa-x-twitter fa-2x"
                  ></Link>
                  <Link
                    to="/"
                    className="twitter fa-brands fa-linkedin-in fa-2x"
                  ></Link>
                  <Link
                    to="/"
                    className="youtube fa-brands fa-youtube fa-2x"
                  ></Link>
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
                      <span className="icon">
                        <LuMapPinCheckInside />
                      </span>
                      <strong></strong>
                      BKC, Mumbai, India
                    </li>
                    <li>
                      {/* <span className="icon flaticon-email-1"></span> */}
                      <span className="icon">
                        <LuMail />
                      </span>
                      <strong></strong>
                      info@mumbaibookfestival.com
                    </li>
                    <li>
                      {/* <span className="icon flaticon-phone"></span> */}
                      <span className="icon">
                        <LuPhoneCall />
                      </span>
                      <strong></strong>
                      1800-NBT-1800
                    </li>
                  </ul>
                </div>
              </div>
              {/* Big Column End */}
            </div>
          </div>
          {/* Widgets Section End */}
          {/* <div
            className="footer-bottom"
            style={{
              backgroundColor: "rgb(239, 221, 232)",
              marginTop: "60px",
              width: "100%",
            }}
          >
            <div className="auto-container">
              <div className="row clearfix">
                <div className="column col-lg-12 col-md-12 col-sm-12">
                  <div
                    className="copyright text-center"
                    style={{ color: "black" }}
                  >
                    &copy; Copyright {currentYear}{" "}
                    <Link to="https://5thdt.com/" target="_blank">
                      5thDT
                    </Link>
                    . All Rights Reserved
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="copyright text-center">
              &copy; Copyright {currentYear}{" "}
              <Link to="https://5thdt.com/" target="_blank">
                5THDT
              </Link>
              . All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
