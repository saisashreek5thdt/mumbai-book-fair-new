import { Link } from "react-router-dom";

export default function StickyOuterBox() {
  return (
    <>
      <div className="outer-box d-flex align-items-center flex-wrap">
        {/* Search Btn */}
        <div className="search-box-btn search-box-outer">
          <span className="icon fa fa-search"></span>
        </div>

        {/* Nav Btn */}
        <div className="nav-btn navSidebar-button fa-regular fa-cart-shopping fa-fw"></div>

        <div className="appointmeny_button-box">
          <Link to="/" className="theme-btn btn-style-one">
            <span className="btn-wrap">
              <span className="text-one">Buy Ticket</span>
              <span className="text-two">Buy Ticket</span>
            </span>
          </Link>
        </div>

        {/* Mobile Navigation Toggler */}
        <div className="mobile-nav-toggler">
          <span className="icon flaticon-menu"></span>
        </div>
      </div>
    </>
  );
}
