import { Link } from "react-router-dom";
import speakerImg1 from "../assets/images/Speakers/Ankur_Warikoo.png";

export default function TeamExecutive() {
  return (
    <>
      <section className="top-features">
        <div className="auto-container">
          <div className="row">
            {/* Feature Block */}
            <div className="feature-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
              <div className="inner-box">
                {/* <div className="icon-box">
                  <span className="icon flaticon-megaphone-1"></span>
                </div> */}
                <div className="speaker-block">
                                  <img src={speakerImg1} alt="" /></div>
                <h4>
                  <Link to="/">Team Name</Link>
                </h4>
                <div className="text">
                  The little rotter grub skive off blag ruddy say gutted mate,
                  my lady brown bread nancy boy.
                </div>
                <div className="btn-box">
                  <Link to="/" className="theme-btn btn-style-one">
                    <span className="btn-wrap">
                      <span className="text-one">Read More</span>
                      <span className="text-two">Read More</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Feature Block */}
            <div
              className="feature-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="inner-box">
                {/* <div className="icon-box">
                  <span className="icon flaticon-arrows"></span>
                </div> */}
                <div className="speaker-block">
                <img src={speakerImg1} alt="" /></div>
                <h4>
                  <Link to="/">Team Name</Link>
                </h4>
                <div className="text">
                  The little rotter grub skive off blag ruddy say gutted mate,
                  my lady brown bread nancy boy.
                </div>
                <div className="btn-box">
                  <Link to="/" className="theme-btn btn-style-one">
                    <span className="btn-wrap">
                      <span className="text-one">Read More</span>
                      <span className="text-two">Read More</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Feature Block */}
            <div
              className="feature-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp"
              data-wow-delay="800ms"
            >
              <div className="inner-box">
                {/* <div className="icon-box">
                  <span className="icon flaticon-deal"></span>
                </div> */}
                <div className="speaker-block">
                                  <img src={speakerImg1} alt="" /></div>
                <h4>
                  <Link to="/">Team Name</Link>
                </h4>
                <div className="text">
                  The little rotter grub skive off blag ruddy say gutted mate,
                  my lady brown bread nancy boy.
                </div>
                <div className="btn-box">
                  <Link to="/" className="theme-btn btn-style-one">
                    <span className="btn-wrap">
                      <span className="text-one">Read More</span>
                      <span className="text-two">Read More</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
