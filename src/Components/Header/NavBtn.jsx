import { Link } from "react-router-dom";

export default function NavBtn() {
  return (
    <>
      {/* Nav Btn */}

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
    </>
  );
}
