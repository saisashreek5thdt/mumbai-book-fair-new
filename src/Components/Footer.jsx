import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo-footer-1.png";

//import icon1 from "../assets/images/icons/icon-5.png";
//import icon2 from "../assets/images/icons/icon-5.png";
import icon3 from "../assets/images/icons/icon-6.png";
import icon4 from "../assets/images/icons/icon-6.png";
import icon5 from "../assets/images/icons/icon-7.png";
import icon6 from "../assets/images/icons/icon-8.png";
import icon7 from "../assets/images/icons/icon-9.png";
import icon8 from "../assets/images/icons/icon-10.png";

import insta1 from "../assets/images/mapImage.png";

export default function Footer() {
  // Common style for section gaps
  const sectionStyle = {
    marginBottom: "20px",
  };

  // Common style for title gaps
  const titleStyle = {
    marginBottom: "15px",
  };

  let currentYear = new Date().getFullYear();

  return (
    <footer className="footer-two" id="footer">
      {/* Background icons remain unchanged */}
      {/* <div
        className="footer-two_icon-one"
        style={{ backgroundImage: `url(${icon1})` }}
      ></div> */}
      {/* <div
        className="footer-two_icon-two"
        style={{ backgroundImage: `url(${icon2})` }}
      ></div> */}
      <div
        className="footer-two_icon-three"
        style={{ backgroundImage: `url(${icon3})` }}
      ></div>
      <div
        className="footer-two_icon-four"
        style={{ backgroundImage: `url(${icon4})` }}
      ></div>
      <div
        className="footer-two_icon-five"
        style={{ backgroundImage: `url(${icon5})` }}
      ></div>
      <div
        className="footer-two_icon-six"
        style={{ backgroundImage: `url(${icon6})` }}
      ></div>
      <div
        className="footer-two_icon-seven"
        style={{ backgroundImage: `url(${icon7})` }}
      ></div>
      <div
        className="footer-two_icon-eight"
        style={{ backgroundImage: `url(${icon8})` }}
      ></div>

      <div className="auto-container">
        <div className="footer-two-widgets">
          <div className="row clearfix">
            <div className="big-column col-lg-6 col-md-12 col-sm-12">
              <div className="row clearfix">
                <div className="footer-two_column col-lg-6 col-md-6 col-sm-12">
                  <div
                    className="footer-two-widget logo-widget"
                    style={sectionStyle}
                  >
                    <div className="footer-two_logo" style={titleStyle}>
                      <Link to="/">
                        <img src={logo} alt="Mumbai Book Fair Logo" />
                      </Link>
                    </div>
                    {/* <div
                      className="footer-two_text"
                      style={{ textAlign: "justify" }}
                    >
                      The Mumbai Book Festival, organized by the National Book
                      Trust, India (under the Ministry of Education, Government
                      of India), is making its debut this April at the centrally
                      located Azad Maidan, Mumbai.
                    </div> */}
                  </div>
                </div>

                {/* Updated Social Section */}
                <div className="footer-two_column col-lg-6 col-md-6 col-sm-12">
                  <div
                    className="footer-two-widget links-widget"
                    style={{ ...sectionStyle, paddingLeft: "20px" }}
                  >
                    <h4 className="footer-two_title" style={titleStyle}>
                      Social
                    </h4>
                    <div
                      className="d-flex align-items-start"
                      style={{ gap: "20px" }}
                    >
                      {/* First Column - 3 icons */}
                      <ul
                        className="footer-two_socials"
                        style={{
                          display: "flex",
                          gap: "6px",
                        }}
                      >
                        <li>
                          <a
                            href="https://x.com/nbt_india"
                            className="fa-brands fa-x-twitter"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="https://www.facebook.com/nationalbooktrustindia"
                            className="fa-brands fa-facebook-f"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/nbtindia/"
                            className="fa-brands fa-instagram"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="https://in.linkedin.com/company/nationalbooktrustindia"
                            className="fa-brands fa-linkedin"
                          ></a>
                        </li>
                        <li>
                          <a
                            href="https://www.youtube.com/user/NBTIndia"
                            className="fa-brands fa-youtube"
                          ></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="big-column col-lg-6 col-md-12 col-sm-12">
              <div className="row clearfix">
                <div className="footer-two_column col-lg-6 col-md-6 col-sm-12">
                  <div
                    className="footer-widget news-widget"
                    style={sectionStyle}
                  >
                    <h4 className="footer-two_title" style={titleStyle}>
                      Contacts
                    </h4>
                    <ul
                      className="footer-two_contact-list"
                      style={{
                        gap: "8px",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <li>
                        <span className="icon fa-solid fa-phone fa-fw"></span>{" "}
                        1800-NBT-1800
                      </li>
                      <li>
                        <span className="icon fa-solid fa-envelope fa-fw"></span>
                        <Link to="mailto:info@mumbaibookfest.com">
                          info@mumbaibookfestival.com
                        </Link>
                      </li>
                      <li>
                        <span className="icon fa-solid fa-map-marker fa-fw"></span>{" "}
                        BKC, Mumbai, Maharashtra.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="footer-two_column col-lg-6 col-md-6 col-sm-12">
                  <div
                    className="footer-widget instagram-widget"
                    style={sectionStyle}
                  >
                    <h4 className="footer-two_title" style={titleStyle}>
                      Directions
                    </h4>
                    <div className="images-outer clearfix">
                      <Link to="https://maps.app.goo.gl/gPdTDs534rdT1aoP8" target="_blank">
                        <img src={insta1} alt="Instagram 1" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="column col-lg-12 col-md-12 col-sm-12">
              <div className="copyright text-center">
                &copy; Copyright {currentYear}{" "}
                <Link to="https://5thdt.com/" target="_blank">
                  5thDT
                </Link>
                . All Rights Reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// original footer

// import { Link } from "react-router-dom";
// import logo from "../assets/images/mumbaiLogo.png";

// export default function Footer() {
//   return (
//     <>
//       <footer className="main-footer">
//         <div className="auto-container">
//           {/* Widgets Section */}
//           <div className="widgets-section">
//             <div className="row clearfix">
//               {/* Big Column */}
//               <div className="big-column col-lg-6 col-md-12 col-sm-12">
//                 <div className="footer-column">
//                   <div className="d-flex justify-content-between align-items-center flex-wrap">
//                     <div className="logo">
//                       <a href="index.html">
//                         <img src={logo} alt="" title="" />
//                       </a>
//                     </div>
//                   </div>
//                   <div className="footer-text">
//                     <div className="footer-social_list">
//                       <Link
//                         to="/"
//                         className="facebook fa-brands fa-facebook-f"
//                       ></Link>
//                       <Link
//                         to="/"
//                         className="facebook fa-brands fa-instagram"
//                       ></Link>
//                       <Link
//                         to="/"
//                         className="twitter fa-brands fa-x-twitter"
//                       ></Link>
//                       <Link
//                         to="/"
//                         className="twitter fa-brands fa-linkedin-in"
//                       ></Link>
//                       <Link
//                         to="/"
//                         className="youtube fa-brands fa-youtube"
//                       ></Link>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Big Column */}
//               <div className="big-column col-lg-6 col-md-12 col-sm-12">
//                 <div className="footer-column">
//                   <div className="row clearfix">
//                     <div className="footer-info-column col-lg-4 col-md-4 col-sm-12">
//                       <span className="footer-info-icon flaticon-placeholder-1"></span>
//                       <h6 className="footer-info_title">ADDRESS</h6>
//                       <div className="footer-info_text">
//                         27 New Division Street, New Yark, USA
//                       </div>
//                     </div>
//                     <div className="footer-info-column col-lg-4 col-md-4 col-sm-12">
//                       <span className="footer-info-icon flaticon-message"></span>
//                       <h6 className="footer-info_title">MAIL TO US</h6>
//                       <div className="footer-info_text">
//                         example@gmail.com <br />
//                         (+000)111-00000
//                       </div>
//                     </div>
//                     <div className="footer-info-column col-lg-4 col-md-4 col-sm-12">
//                       <span className="footer-info-icon flaticon-clock"></span>
//                       <h6 className="footer-info_title">TIMEING</h6>
//                       <div className="footer-info_text">
//                         Mon - Fri 09am - 06pm Sunday is off Now.
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Footer Bottom */}
//         <div className="footer-bottom">
//           <div className="auto-container">
//             <div className="row clearfix">
//               {/* Column */}
//               <div className="column col-lg-6 col-md-12 col-sm-12">
//                 <div className="copyright">
//                   &copy; Copyright ©2024 noor_tech. All Rights Reserved
//                 </div>
//               </div>
//               {/* Column */}
//               <div className="column col-lg-6 col-md-12 col-sm-12">
//                 <ul className="footer-bottom-nav">
//                   <li>
//                     <a href="#">Terms and conditions</a>
//                   </li>
//                   <li>
//                     <a href="#">Privacy policy</a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }
