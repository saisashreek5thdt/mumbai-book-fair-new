import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

export default function LogoBox() {
  return (
    <>
      <div className="logo-box">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="" title="" />
          </Link>
        </div>
      </div>
    </>
  );
}
