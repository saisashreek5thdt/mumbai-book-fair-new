import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

export default function Header() {
  return (
    <>
      <header className="main-header">
        <div className="header-upper">
          <div className="auto-container">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              <div className="logo-box">
                <div className="logo">
                  <Link to="/">
                    <img src={logo} alt="" title="" />
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
                    className="navbar-collapse collapse clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      <li>
                        <a to="/">About</a>
                      </li>
                      <li>
                        <Link to="/">Schedule</Link>
                      </li>
                      <li>
                        <Link to="/">Speakers</Link>
                      </li>
                      <li>
                        <Link to="/">Team</Link>
                      </li>
                      <li>
                        <Link to="/">Publishers</Link>
                      </li>
                      <li>
                        <Link to="/">FAQ</Link>
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

        <div className="sticky-header">
          <div className="auto-container">
            <div className="inner-container d-flex justify-content-between align-items-center flex-wrap">
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
              {/* Here Menu Will Come Automatically Via Javascript / Same Menu as in Header */}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
