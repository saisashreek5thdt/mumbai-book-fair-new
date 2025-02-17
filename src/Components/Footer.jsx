
import { Link } from "react-router-dom";
import logo from "../assets/images/mumbaiLogo.png";

import icon1 from "../assets/images/icons/icon-5.png";
import icon2 from "../assets/images/icons/icon-5.png";
import icon3 from "../assets/images/icons/icon-6.png";
import icon4 from "../assets/images/icons/icon-6.png";
import icon5 from "../assets/images/icons/icon-7.png";
import icon6 from "../assets/images/icons/icon-8.png";
import icon7 from "../assets/images/icons/icon-9.png";
import icon8 from "../assets/images/icons/icon-10.png";

import insta1 from "../assets/images/gallery/instagram-1.jpg";
import insta2 from "../assets/images/gallery/instagram-2.jpg";
import insta3 from "../assets/images/gallery/instagram-3.jpg";
import insta4 from "../assets/images/gallery/instagram-4.jpg";
import insta5 from "../assets/images/gallery/instagram-5.jpg";
import insta6 from "../assets/images/gallery/instagram-6.jpg";

export default function Footer() {
  const handleViewLargerMap = () => {
    window.open("https://www.google.com/maps/place/Azad+Maidan/@18.939218,72.833583,15z/data=!4m5!3m4!1s0x0:0x0!8m2!3d18.939218!4d72.833583", "_blank");
  };

  const handleGetDirections = () => {
    window.open("https://www.google.com/maps/dir//Azad+Maidan,+Fort,+Mumbai,+Maharashtra", "_blank");
  };

  return (
    <footer className="footer-two">
      <div className="footer-two_icon-one" style={{ backgroundImage: `url(${icon1})` }}></div>
      <div className="footer-two_icon-two" style={{ backgroundImage: `url(${icon2})` }}></div>
      <div className="footer-two_icon-three" style={{ backgroundImage: `url(${icon3})` }}></div>
      <div className="footer-two_icon-four" style={{ backgroundImage: `url(${icon4})` }}></div>
      <div className="footer-two_icon-five" style={{ backgroundImage: `url(${icon5})` }}></div>
      <div className="footer-two_icon-six" style={{ backgroundImage: `url(${icon6})` }}></div>
      <div className="footer-two_icon-seven" style={{ backgroundImage: `url(${icon7})` }}></div>
      <div className="footer-two_icon-eight" style={{ backgroundImage: `url(${icon8})` }}></div>

      <div className="auto-container">
        <div className="footer-two-widgets">
          <div className="row clearfix">
            <div className="big-column col-lg-6 col-md-12 col-sm-12">
              <div className="row clearfix">
                <div className="footer-two_column col-lg-7 col-md-6 col-sm-12">
                  <div className="footer-two-widget logo-widget">
                    <div className="footer-two_logo">
                      <Link to="/">
                        <img src={logo} alt="Mumbai Book Fair Logo" />
                      </Link>
                    </div>
                    <div className="footer-two_text">
                      <div className="map-container" style={{ position: 'relative', height: '200px', marginTop: '20px' }}>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3773.041715007936!2d72.8313943153771!3d18.93921848715744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU2JzIxLjIiTiA3MsKwNTAnMDAuOCJF!5e0!3m2!1sen!2sin!4v1622549400000!5m2!1sen!2sin"
                          width="100%"
                          height="100%"
                          style={{ border: 0 }}
                          allowFullScreen=""
                          loading="lazy"
                        ></iframe>
                        <div style={{ 
                          position: 'absolute', 
                          bottom: '10px', 
                          left: '10px', 
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          padding: '5px 10px',
                          borderRadius: '4px'
                        }}>
                          <a 
                            onClick={handleViewLargerMap} 
                            style={{ 
                              color: '#007bff', 
                              cursor: 'pointer', 
                              textDecoration: 'underline',
                              marginRight: '10px'
                            }}
                          >
                            View larger map
                          </a>
                          <a 
                            onClick={handleGetDirections} 
                            style={{ 
                              color: '#007bff', 
                              cursor: 'pointer', 
                              textDecoration: 'underline'
                            }}
                          >
                            Directions
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="footer-two_column col-lg-5 col-md-6 col-sm-12">
                  <div className="footer-two-widget links-widget">
                    <h4 className="footer-two_title">Links</h4>
                    <ul className="footer-two_list">
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/about">About</Link></li>
                      <li><Link to="/services">Services</Link></li>
                      <li><Link to="/projects">Projects</Link></li>
                      {/* <li><Link to="/blogs">Blogs</Link></li> */}
                      <li><Link to="/contact">Contact</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="big-column col-lg-6 col-md-12 col-sm-12">
              <div className="row clearfix">
                <div className="footer-two_column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget news-widget">
                    <h4 className="footer-two_title">Contacts</h4>
                    <ul className="footer-two_contact-list">
                      <li><span className="icon fa-solid fa-phone fa-fw"></span> 1800-NBT-1800</li>
                      <li>
                        <span className="icon fa-solid fa-envelope fa-fw"></span>
                        <a href="mailto:example@gmail.com">example@gmail.com</a>
                      </li>
                      <li><span className="icon fa-solid fa-map-marker fa-fw"></span> Azad Maidan Fort Mumbai, Maharashtra.</li>
                      <li><span className="icon fa-solid fa-clock fa-fw"></span> Mon - Fri 09am - 06pm</li> 
                    </ul>

                    <ul className="footer-two_socials">
                      <li><a href="https://x.com/nbt_india?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="fa-brands fa-x-twitter"></a></li>
                      <li><a href="https://www.facebook.com/nationalbooktrustindia" className="fa-brands fa-facebook-f"></a></li>
                      <li><a href="https://www.instagram.com/nbtindia/?hl=en" className="fa-brands fa-instagram"></a></li>
                      <li><a href="https://in.linkedin.com/company/nationalbooktrustindia" className="fa-brands fa-linkedin"></a></li>
                      <li><a href="https://www.youtube.com/user/NBTIndia" className="fa-brands fa-youtube"></a></li>
                    </ul>
                  </div>
                </div>

                <div className="footer-two_column col-lg-6 col-md-6 col-sm-12">
                  <div className="footer-widget instagram-widget">
                    <h4 className="footer-two_title">Instagram</h4>
                    <div className="images-outer clearfix">
                      <figure className="image-box"><a className="lightbox-image" href={insta1}><img src={insta1} alt="Instagram 1" /></a></figure>
                      <figure className="image-box"><a className="lightbox-image" href={insta2}><img src={insta2} alt="Instagram 2" /></a></figure>
                      <figure className="image-box"><a className="lightbox-image" href={insta3}><img src={insta3} alt="Instagram 3" /></a></figure>
                      <figure className="image-box"><a className="lightbox-image" href={insta4}><img src={insta4} alt="Instagram 4" /></a></figure>
                      <figure className="image-box"><a className="lightbox-image" href={insta5}><img src={insta5} alt="Instagram 5" /></a></figure>
                      <figure className="image-box"><a className="lightbox-image" href={insta6}><img src={insta6} alt="Instagram 6" /></a></figure>
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
            <div className="column col-lg-6 col-md-12 col-sm-12">
              <div className="copyright">&copy; Copyright ©2025 5thDT_tech. All Rights Reserved</div>
            </div>
            <div className="column col-lg-6 col-md-12 col-sm-12">
              <ul className="footer-bottom-nav">
                <li><a href="#">Terms and conditions</a></li>
                <li><a href="#">Privacy policy</a></li>
              </ul>
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





