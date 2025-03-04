// import { Link } from "react-router-dom";
import slideImg1 from "../../assets/images/background/11.jpg";

export default function SpeakerSlide() {
  const slideBG1 = {
    backgroundImage: `url(${slideImg1})`,
    backgroundSize: "cover",
  };

  return (
    <>
      <section className="page-title" style={slideBG1}>
        <div className="auto-container">
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="left-box">
              <div className="page-title_big"></div>
              <h2 className="page-title_heading">Meet The Speakers</h2>
            </div>
            <ul className="bread-crumb clearfix">
              {/* <li>
                <Link to="/" target="_parent">Home</Link>
              </li> */}
              {/* <li>Meet The Speakers</li> */}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
