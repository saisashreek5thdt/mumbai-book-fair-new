import { Link } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-upper">
        <div className="auto-container">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="logo-box">
              <div className="logo">
                <Link to="/" target="_parent">
                  <img src={logo} alt="Logo" title="Website Logo" />
                </Link>
              </div>
            </div>

            <div className="nav-outer">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-md">
                <div className="navbar-header">
                  {/* Toggle Button */}
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                </div>

                <div
                  className="navbar-collapse collapse clearfix d-none d-md-flex"
                  id="navbarSupportedContent"
                >
                  <ul
                    className="navigation clearfix"
                    style={{
                      display: "flex",
                      flexDirection: "row", // Default horizontal for desktop
                      gap: "10px",
                      marginTop: "15px",
                    }}
                  >
                    <li>
                      <Link to="/#about" target="_parent">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="/#event" target="_parent">
                        Schedule
                      </Link>
                    </li>
                    <li>
                      <Link to="/#speakers" target="_parent">
                        Speakers
                      </Link>
                    </li>
                    <li>
                      <Link to="/#team" target="_parent">
                        Team
                      </Link>
                    </li>
                    <li>
                      <Link to="/publishers" target="_parent">
                        Publishers
                      </Link>
                    </li>
                    <li>
                      <Link to="/#faq" target="_parent">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link to="/#register" target="_parent">
                        Registration
                      </Link>
                    </li>
                    <li>
                      <Link to="/#social" target="_parent">
                        Social
                      </Link>
                    </li>
                    <li className="dropdown">
                      {/* <span>
                        <i
                          className="fa fa-language fa-2xl"
                          style={{
                            width: "30px",
                            height: "30px",
                            color: "#FFB22C",
                          }}
                        ></i>
                      </span> */}
                      <Link to="/">Language</Link>
                      <ul>
                        <li>
                          <a href="">English</a>
                        </li>
                        <li>
                          <a href="">हिंदी</a>
                        </li>
                        <li>
                          <a href="">मराठी</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            {/* Main Menu End */}
            <div className="outer-box d-flex align-items-center flex-wrap">
              {/* Mobile Navigation Toggler */}
              <div className="mobile-nav-toggler">
                <span className="icon flaticon-menu"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Header and Mobile Menu code remains the same */}
      <div className="sticky-header">
        <div className="auto-container">
          <div className="inner-container d-flex justify-content-between align-items-center flex-wrap ">
            {/* Logo */}
            <div className="logo">
              <Link to="/" title="">
                <img src={logo} alt="" title="" />
              </Link>
            </div>

            {/* Right Box */}
            <div className="right-box">
              {/* Main Menu */}
              <nav className="main-menu">
                {/* Keep This Empty / Menu will come through Javascript */}
              </nav>
              {/* Main Menu End */}
            </div>

            {/* Main Menu End */}
            <div className="outer-box d-flex align-items-center flex-wrap">
              {/* Mobile Navigation Toggler */}
              <div className="mobile-nav-toggler">
                <span className="icon flaticon-menu"></span>
              </div>
            </div>
          </div>
        </div>
        {/* End Sticky Menu */}
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn">
          <span className="icon flaticon-cancel-1"></span>
        </div>

        <nav className="menu-box">
          <div className="nav-logo">
            <Link to="/">
              <img src={logo} alt="" title="" />
            </Link>
          </div>
          <div className="menu-outer">
            <ul
              className="mobile-navigation"
              style={{
                display: "flex",
                flexDirection: "column", // Forces vertical stacking for mobile
                alignItems: "center",
                gap: "15px",
              }}
            >
              <li>
                <Link to="/#about" target="_parent" style={{ color: "black" }}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/#event" target="_parent" style={{ color: "black" }}>
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  to="/#speakers"
                  target="_parent"
                  style={{ color: "black" }}
                >
                  Speakers
                </Link>
              </li>
              <li>
                <Link to="/#team" target="_parent" style={{ color: "black" }}>
                  Team
                </Link>
              </li>
              <li>
                <Link
                  to="/publishers"
                  target="_parent"
                  style={{ color: "black" }}
                >
                  Publishers
                </Link>
              </li>
              <li>
                <Link to="/#faq" target="_parent" style={{ color: "black" }}>
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/#social" target="_parent" style={{ color: "black" }}>
                  Social
                </Link>
              </li>
              {/* <li className="dropdown">
                <Link to="/">Change Language</Link>
                <ul>
                  <li>
                    <a href="">English</a>
                  </li>
                  <li>
                    <a href="">हिंदी</a>
                  </li>
                  <li>
                    <a href="">मराठी</a>
                  </li>
                </ul>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

// import { Link } from "react-router-dom";
// import logo from "../assets/images/logo/logo.png";

// export default function Header() {
//   return (
//     <>
//       <header className="main-header">
//         <div className="header-upper">
//           <div className="auto-container">
//             <div className="d-flex justify-content-between align-items-center flex-wrap">
//               <div className="logo-box">
//                 <div className="logo">
//                   <Link to="/" target="_parent">
//                     <img src={logo} alt="" title=""/>
//                   </Link>
//                 </div>
//               </div>

//               <div className="nav-outer">
//                 {/* Main Menu */}
//                 <nav className="main-menu navbar-expand-md">
//                   <div className="navbar-header">
//                     {/* Toggle Button */}
//                     <button
//                       className="navbar-toggler"
//                       type="button"
//                       data-toggle="collapse"
//                       data-target="#navbarSupportedContent"
//                       aria-controls="navbarSupportedContent"
//                       aria-expanded="false"
//                       aria-label="Toggle navigation"
//                     >
//                       <span className="icon-bar"></span>
//                       <span className="icon-bar"></span>
//                       <span className="icon-bar"></span>
//                     </button>
//                   </div>

//                   <div
//                     className="navbar-collapse collapse clearfix d-none d-md-flex"
//                     id="navbarSupportedContent"
//                   >
//                     <ul
//                       className="navigation clearfix"
//                       style={{
//                         display: "flex",
//                         flexDirection: "row", // Default horizontal for desktop
//                         gap: "10px",
//                         marginTop: "15px",
//                       }}
//                     >
//                       <li>
//                         <Link to="/#about" target="_parent">
//                           About
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/#event" target="_parent">
//                           Schedule
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/#speakers" target="_parent">
//                           Speakers
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/#team" target="_parent">
//                           Team
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/publishers" target="_parent">
//                           Publishers
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/#faq" target="_parent">
//                           FAQ
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/#faq" target="_parent">
//                           Social
//                         </Link>
//                       </li>
//                       <li className="dropdown language-icon">
//                         <span>
//                           <i
//                             className="fa fa-language fa-2xl"
//                             style={{
//                               width: "30px",
//                               height: "30px",
//                               color: "blue",
//                             }}
//                           ></i>
//                         </span>
//                         <ul>
//                           <li>
//                             <a href="">English</a>
//                           </li>
//                           <li>
//                             <a href="">हिंदी</a>
//                           </li>
//                           <li>
//                             <a href="">मराठी</a>
//                           </li>
//                         </ul>
//                       </li>
//                     </ul>
//                   </div>
//                 </nav>
//               </div>

//               {/* Main Menu End */}
//               <div className="outer-box d-flex align-items-center flex-wrap">
//                 {/* Mobile Navigation Toggler */}
//                 <div className="mobile-nav-toggler">
//                   <span className="icon flaticon-menu"></span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Sticky Header and Mobile Menu code remains the same */}
//         <div className="sticky-header">
//            <div className="auto-container">
//              <div className="inner-container d-flex justify-content-between align-items-center flex-wrap ">
//                {/* Logo */}
//                <div className="logo">
//                  <Link to="/" title="">
//                   <img src={logo} alt="" title="" />
//                  </Link>
//                </div>

//                {/* Right Box */}
//               <div className="right-box">
//                  {/* Main Menu */}
//                  <nav className="main-menu">
//                   {/* Keep This Empty / Menu will come through Javascript */}
//                  </nav>
//                  {/* Main Menu End */}
//                </div>

//                {/* Main Menu End */}
//                <div className="outer-box d-flex align-items-center flex-wrap">
//                  {/* Mobile Navigation Toggler */}
//                  <div className="mobile-nav-toggler">
//                    <span className="icon flaticon-menu"></span>
//                  </div>
//                </div>
//             </div>
//            </div>
//            {/* End Sticky Menu */}
//          </div>

//         {/* Mobile Menu */}
//          <div className="mobile-menu">
//            <div className="menu-backdrop"></div>
//            <div className="close-btn">
//              <span className="icon flaticon-cancel-1"></span>
//            </div>

//            <nav className="menu-box">
//              <div className="nav-logo">
//                <Link to="/">
//                  <img src={logo} alt="" title="" />
//                </Link>
//              </div>
//              <div className="menu-outer">
//                <ul
//                 className="mobile-navigation"
//                 style={{
//                   display: "flex",
//                   flexDirection: "column", // Forces vertical stacking for mobile
//                   alignItems: "center",
//                   gap: "15px",
//                 }}
//               >
//                 <li>
//                   <Link to="#about" target="_parent"style={{ color: "black" }}>
//                     About
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#event" target="_parent"style={{ color: "black" }}>
//                     Schedule
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#speakers" target="_parent"style={{ color: "black" }}>
//                     Speakers
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#team" target="_parent"style={{ color: "black" }}>
//                     Team
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/publishers" target="_parent"style={{ color: "black" }}>
//                     Publishers
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#faq" target="_parent"style={{ color: "black" }}>
//                     FAQ
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#faq" target="_parent"style={{ color: "black" }}>
//                     Social
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// }

//another one

// import { Link } from "react-router-dom";
// import logo from "../assets/images/logo/logo.png";

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// export default function Header() {
//   // Function to handle smooth scrolling when on the home page
//   const scrollToSection = (sectionId, e) => {
//     // Only prevent default if we're already on the home page
//     if (window.location.pathname === '/') {
//       e.preventDefault();
//       const element = document.getElementById(sectionId);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//     // When not on home page, let the link work normally with the hash
//   };

//   return (
//     <>
//       <header className="main-header">
//         <div className="header-upper">
//           <div className="auto-container">
//             <div className="d-flex justify-content-between align-items-center flex-wrap">
//               <div className="logo-box">
//                 <div className="logo">
//                   <Link to="/" target="_parent">
//                     <img src={logo} alt="" title="" />
//                   </Link>
//                 </div>
//               </div>

//               <div className="nav-outer">
//                 {/* Main Menu */}
//                 <nav className="main-menu navbar-expand-md">
//                   <div className="navbar-header">
//                     {/* Toggle Button */}
//                     <button
//                       className="navbar-toggler"
//                       type="button"
//                       data-toggle="collapse"
//                       data-target="#navbarSupportedContent"
//                       aria-controls="navbarSupportedContent"
//                       aria-expanded="false"
//                       aria-label="Toggle navigation"
//                     >
//                       <span className="icon-bar"></span>
//                       <span className="icon-bar"></span>
//                       <span className="icon-bar"></span>
//                     </button>
//                   </div>

//                   <div
//                     className="navbar-collapse collapse clearfix d-none d-md-flex"
//                     id="navbarSupportedContent"
//                   >
//                     <ul
//                       className="navigation clearfix"
//                       style={{
//                         display: "flex",
//                         flexDirection: "row", // Default horizontal for desktop
//                         gap: "10px",
//                         marginTop: "15px",
//                       }}
//                     >
//                       <li>
//                         <Link to="/#about" onClick={(e) => scrollToSection("about", e)}>
//                           About
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/#event" onClick={(e) => scrollToSection("event", e)}>
//                           Schedule
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/#speakers" onClick={(e) => scrollToSection("speakers", e)}>
//                           Speakers
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/#team" onClick={(e) => scrollToSection("team", e)}>
//                           Team
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/publishers">
//                           Publishers
//                         </Link>

//                       </li>
//                       <li>
//                         <Link to="/#faq" onClick={(e) => scrollToSection("faq", e)}>
//                           FAQ
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/#social" onClick={(e) => scrollToSection("footer", e)}>
//                           Social
//                         </Link>
//                       </li>
//                       <li className="dropdown language-icon">
//                         <span>
//                           <i
//                             className="fa fa-language fa-2xl"
//                             style={{
//                               width: "30px",
//                               height: "30px",
//                               color: "blue",
//                             }}
//                           ></i>
//                         </span>
//                         <ul>
//                           <li>
//                             <a href="">English</a>
//                           </li>
//                           <li>
//                             <a href="">हिंदी</a>
//                           </li>
//                           <li>
//                             <a href="">मराठी</a>
//                           </li>
//                         </ul>
//                       </li>
//                     </ul>
//                   </div>
//                 </nav>
//               </div>

//               {/* Main Menu End */}
//               <div className="outer-box d-flex align-items-center flex-wrap">
//                 {/* Mobile Navigation Toggler */}
//                 <div className="mobile-nav-toggler">
//                   <span className="icon flaticon-menu"></span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Sticky Header and Mobile Menu code remains the same */}
//         <div className="sticky-header">
//           <div className="auto-container">
//             <div className="inner-container d-flex justify-content-between align-items-center flex-wrap">
//               {/* Logo */}
//               <div className="logo">
//                 <Link to="/" title="">
//                   <img src={logo} alt="" title="" />
//                 </Link>
//               </div>

//               {/* Right Box */}
//               <div className="right-box">
//                 {/* Main Menu */}
//                 <nav className="main-menu">
//                   {/* Keep This Empty / Menu will come through Javascript */}
//                 </nav>
//                 {/* Main Menu End */}
//               </div>

//               {/* Main Menu End */}
//               <div className="outer-box d-flex align-items-center flex-wrap">
//                 {/* Mobile Navigation Toggler */}
//                 <div className="mobile-nav-toggler">
//                   <span className="icon flaticon-menu"></span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* End Sticky Menu */}
//         </div>

//         {/* Mobile Menu */}
//         <div className="mobile-menu">
//           <div className="menu-backdrop"></div>
//           <div className="close-btn">
//             <span className="icon flaticon-cancel-1"></span>
//           </div>

//           <nav className="menu-box">
//             <div className="nav-logo">
//               <Link to="/">
//                 <img src={logo} alt="" title="" />
//               </Link>
//             </div>
//             <div className="menu-outer">
//               <ul
//                 className="mobile-navigation"
//                 style={{
//                   display: "flex",
//                   flexDirection: "column", // Forces vertical stacking for mobile
//                   alignItems: "center",
//                   gap: "15px",
//                 }}
//               >
//                 <li>
//                   <Link to="/#about" onClick={(e) => scrollToSection("about", e)} style={{ color: "black" }}>
//                     About
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/#event" onClick={(e) => scrollToSection("event", e)} style={{ color: "black" }}>
//                     Schedule
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/#speakers" onClick={(e) => scrollToSection("speakers", e)} style={{ color: "black" }}>
//                     Speakers
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/#team" onClick={(e) => scrollToSection("team", e)} style={{ color: "black" }}>
//                     Team
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/publishers" style={{ color: "black" }}>
//                     Publishers
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/#faq" onClick={(e) => scrollToSection("faq", e)} style={{ color: "black" }}>
//                     FAQ
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/#social" onClick={(e) => scrollToSection("social", e)} style={{ color: "black" }}>
//                     Social
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// }

//original header

// import { Link } from "react-router-dom";
// import logo from "../assets/images/logo/logo.png";
// // import { useState } from "react";
// export default function Header() {
//   // const [isColor, setIsColor]=useState(true);
//   return (
//     <>
//       <header className="main-header">
//         <div className="header-upper">
//           <div className="auto-container">
//             <div className="d-flex justify-content-between align-items-center flex-wrap">
//               <div className="logo-box">
//                 <div className="logo">
//                   <Link to="/" target="_parent">
//                     <img src={logo} alt="" title="" />
//                   </Link>
//                 </div>
//               </div>

//               <div className="nav-outer">
//                 {/* Main Menu */}
//                 <nav className="main-menu navbar-expand-md">
//                   <div className="navbar-header">
//                     {/* Toggle Button */}
//                     <button
//                       className="navbar-toggler"
//                       type="button"
//                       data-toggle="collapse"
//                       data-target="#navbarSupportedContent"
//                       aria-controls="navbarSupportedContent"
//                       aria-expanded="false"
//                       aria-label="Toggle navigation"
//                     >
//                       <span className="icon-bar"></span>
//                       <span className="icon-bar"></span>
//                       <span className="icon-bar"></span>
//                     </button>
//                   </div>

//                   <div
//                     className="navbar-collapse collapse clearfix d-none d-md-flex"
//                     id="navbarSupportedContent"
//                   >
//                     <ul
//                       className="navigation clearfix"
//                       style={{
//                         display: "flex",
//                         flexDirection: "row", // Default horizontal for desktop
//                         gap: "10px",
//                         marginTop: "15px",
//                       }}
//                     >
//                       <li>
//                         <Link to="#about" target="_parent">
//                           About
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="#event" target="_parent">
//                           Schedule
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="#speakers" target="_parent">
//                           Speakers
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="#team" target="_parent">
//                           Team
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="/publishers" target="_parent">
//                           Publishers
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="#faq" target="_parent">
//                           FAQ
//                         </Link>
//                       </li>
//                       <li>
//                         <Link to="#faq" target="_parent">
//                           Social
//                         </Link>
//                       </li>
//                       <li className="dropdown language-icon">
//                         <span>
//                           <i
//                             className="fa fa-language fa-2xl"
//                             style={{
//                               width: "30px",
//                               height: "30px",
//                               // color: isColor ? "white" : "black",
//                               color:"blue"
//                             }}
//                           ></i>
//                         </span>
//                         <ul>
//                           <li>
//                             <a href="">English</a>
//                           </li>
//                           <li>
//                             <a href="">हिंदी</a>
//                           </li>
//                           <li>
//                             <a href="">मराठी</a>
//                           </li>
//                         </ul>
//                       </li>
//                     </ul>
//                   </div>
//                 </nav>
//               </div>

//               {/* Main Menu End */}
//               <div className="outer-box d-flex align-items-center flex-wrap">
//                 {/* Mobile Navigation Toggler */}
//                 <div className="mobile-nav-toggler">
//                   <span className="icon flaticon-menu"></span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="sticky-header">
//           <div className="auto-container">
//             <div className="inner-container d-flex justify-content-between align-items-center flex-wrap ">
//               {/* Logo */}
//               <div className="logo">
//                 <Link to="/" title="">
//                   <img src={logo} alt="" title="" />
//                 </Link>
//               </div>

//               {/* Right Box */}
//               <div className="right-box">
//                 {/* Main Menu */}
//                 <nav className="main-menu">
//                   {/* Keep This Empty / Menu will come through Javascript */}
//                 </nav>
//                 {/* Main Menu End */}
//               </div>

//               {/* Main Menu End */}
//               <div className="outer-box d-flex align-items-center flex-wrap">
//                 {/* Mobile Navigation Toggler */}
//                 <div className="mobile-nav-toggler">
//                   <span className="icon flaticon-menu"></span>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* End Sticky Menu */}
//         </div>

//         {/* Mobile Menu */}
//         <div className="mobile-menu">
//           <div className="menu-backdrop"></div>
//           <div className="close-btn">
//             <span className="icon flaticon-cancel-1"></span>
//           </div>

//           <nav className="menu-box">
//             <div className="nav-logo">
//               <Link to="/">
//                 <img src={logo} alt="" title="" />
//               </Link>
//             </div>
//             <div className="menu-outer">
//               <ul
//                 className="mobile-navigation"
//                 style={{
//                   display: "flex",
//                   flexDirection: "column", // Forces vertical stacking for mobile
//                   alignItems: "center",
//                   gap: "15px",
//                 }}
//               >
//                 <li>
//                   <Link to="#about" target="_parent"style={{ color: "black" }}>
//                     About
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#event" target="_parent"style={{ color: "black" }}>
//                     Schedule
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#speakers" target="_parent"style={{ color: "black" }}>
//                     Speakers
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#team" target="_parent"style={{ color: "black" }}>
//                     Team
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="/publishers" target="_parent"style={{ color: "black" }}>
//                     Publishers
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#faq" target="_parent"style={{ color: "black" }}>
//                     FAQ
//                   </Link>
//                 </li>
//                 <li>
//                   <Link to="#faq" target="_parent"style={{ color: "black" }}>
//                     Social
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </nav>
//         </div>
//       </header>
//     </>
//   );
// }
