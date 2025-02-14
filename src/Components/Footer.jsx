import logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <>
      <footer className="main-footer">
        <div className="auto-container">
          {/* Widgets Section */}
          <div className="widgets-section">
            <div className="row clearfix">
              {/* Big Column */}
              <div className="big-column col-lg-6 col-md-12 col-sm-12">
                <div className="footer-column">
                  <div className="d-flex justify-content-between align-items-center flex-wrap">
                    <div className="logo">
                      <a href="index.html">
                        <img src={logo} alt="" title="" />
                      </a>
                    </div>
                    <div className="footer-social_list">
                      <a
                        href="https://facebook.com/"
                        className="facebook fa-brands fa-facebook-f"
                      ></a>
                      <a
                        href="https://youtube.com/"
                        className="youtube fa-brands fa-youtube"
                      ></a>
                      <a
                        href="https://twitter.com/"
                        className="twitter fa-brands fa-twitter"
                      ></a>
                    </div>
                  </div>
                  <div className="footer-text">
                    We have very good strength in innovative technology and
                    tools with over 35 years of experience. We makes long-term
                    investments goal in global companies in different sectors.
                  </div>
                </div>
              </div>

              {/* Big Column */}
              <div className="big-column col-lg-6 col-md-12 col-sm-12">
                <div className="footer-column">
                  <div className="row clearfix">
                    <div className="footer-info-column col-lg-4 col-md-4 col-sm-12">
                      <span className="footer-info-icon flaticon-placeholder-1"></span>
                      <h6 className="footer-info_title">ADDRESS</h6>
                      <div className="footer-info_text">
                        27 New Division Street, New Yark, USA
                      </div>
                    </div>
                    <div className="footer-info-column col-lg-4 col-md-4 col-sm-12">
                      <span className="footer-info-icon flaticon-message"></span>
                      <h6 className="footer-info_title">MAIL TO US</h6>
                      <div className="footer-info_text">
                        example@gmail.com <br />
                        (+000)111-00000
                      </div>
                    </div>
                    <div className="footer-info-column col-lg-4 col-md-4 col-sm-12">
                      <span className="footer-info-icon flaticon-clock"></span>
                      <h6 className="footer-info_title">TIMEING</h6>
                      <div className="footer-info_text">
                        Mon - Fri 09am - 06pm Sunday is off Now.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="auto-container">
            <div className="row clearfix">
              {/* Column */}
              <div className="column col-lg-6 col-md-12 col-sm-12">
                <div className="copyright">
                  &copy; Copyright ©2024 noor_tech. All Rights Reserved
                </div>
              </div>
              {/* Column */}
              <div className="column col-lg-6 col-md-12 col-sm-12">
                <ul className="footer-bottom-nav">
                  <li>
                    <a href="#">Terms and conditions</a>
                  </li>
                  <li>
                    <a href="#">Privacy policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
