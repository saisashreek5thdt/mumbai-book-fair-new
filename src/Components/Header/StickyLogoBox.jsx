import { Link } from "react-router-dom";
import logo from "../../assets/images/logo-small.png";

export default function StickyLogoBox() {
  return (
    <>
      <div className="logo">
        <Link to="/" title="">
          <img src={logo} alt="" title="" />
        </Link>
      </div>
    </>
  );
}
