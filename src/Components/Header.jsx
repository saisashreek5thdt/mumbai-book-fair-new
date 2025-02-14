import { LogoBox, MenuBox, NavBtn, MobileMenuBox } from "./Header/index";
import HeaderSticky from "./HeaderSticky";

export default function Header() {
  return (
    <>
      <header className="main-header">
        <div className="header-upper">
          <div className="auto-container">
            <div className="d-flex justify-content-between align-items-center flex-wrap">
              {/* Logo Box Start */}
              <LogoBox />
              {/* Logo Box End */}
              {/* Navbar Outer Start */}
              <div className="nav-outer">
                {/* Main Menu */}
                <MenuBox />
                {/* Main Menu End */}
              </div>
              {/* Navbar Outer End */}

              <div className="outer-box d-flex align-items-center flex-wrap">
                {/* Search Btn */}
                <div className="search-box-btn search-box-outer">
                  <span className="icon fa fa-search"></span>
                </div>
                {/* Nav Button Start */}
                <NavBtn />
                {/* Nav Button End */}
              </div>
            </div>
          </div>
        </div>

        {/* Sticky Header Start */}
        <HeaderSticky />
        {/* Sticky Header End */}

        {/* Mobile Menu Start */}
        <MobileMenuBox />
        {/* Mobile Menu End */}
      </header>
    </>
  );
}
