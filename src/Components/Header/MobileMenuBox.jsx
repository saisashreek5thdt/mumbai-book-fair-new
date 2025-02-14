import { Link } from "react-router-dom";
import logoSmall from "../../assets/images/logo-small.png";

export default function MobileMenuBox() {
  return (
    <>
      <div className="mobile-menu">
        <div className="menu-backdrop"></div>
        <div className="close-btn">
          <span className="icon flaticon-cancel-1"></span>
        </div>

        <nav className="menu-box">
          <div className="nav-logo">
            <Link to="/">
              <img src={logoSmall} alt="" title="" />
            </Link>
          </div>
          <div className="menu-outer">
            {/* Here Menu Will Come Automatically Via Javascript / Same Menu as in Header */}
          </div>
        </nav>
      </div>
    </>
  );
}
