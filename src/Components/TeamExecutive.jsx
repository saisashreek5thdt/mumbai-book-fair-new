import { Link } from "react-router-dom";
import speakerImg1 from "../assets/images/team/Acharya.png";
import speakerImg2 from "../assets/images/team/Mohit.png";

export default function TeamExecutive() {
  return (
    <>
      {/* <section className="top-features">
        
      </section> */}

      <div className="auto-container">
        <div className="row">
          {/* Feature Block */}
          <div className="feature-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
            <div className="inner-box">
              {/* <div className="icon-box">
                  <span className="icon flaticon-megaphone-1"></span>
                </div> */}
              <div className="speaker-block">
                <img src={speakerImg1} alt="" />
              </div>
              <h4>
                <Link to="/">Acharya Pawan Tripathi</Link>
              </h4>
              <div className="text">
                Author, Columnist, Social Worker and Trustee of Sri Sidhi
                Vinayak Temple Trust, SSVT.
              </div>
              {/* <div className="btn-box">
                <Link to="/" className="theme-btn btn-style-one">
                  <span className="btn-wrap">
                    <span className="text-one">Read More</span>
                    <span className="text-two">Read More</span>
                  </span>
                </Link>
              </div> */}
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
                <img src={speakerImg2} alt="" />
              </div>
              <h4>
                <Link to="/">Sri Mohit Kamboj Bhartiya</Link>
              </h4>
              <div className="text">
                Social Worker, Entrepreneur and Champion of{" "}
                <strong>har hath ek kitab</strong>.
              </div>
              {/* <div className="btn-box">
                <Link to="/" className="theme-btn btn-style-one">
                  <span className="btn-wrap">
                    <span className="text-one">Read More</span>
                    <span className="text-two">Read More</span>
                  </span>
                </Link>
              </div> */}
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
                <img src={speakerImg1} alt="" />
              </div>
              <h4>
                <Link to="/">Acharya Pawan Tripathi</Link>
              </h4>
              <div className="text">
                Author, Columnist, Social Worker and Trustee of Sri Sidhi
                Vinayak Temple Trust, SSVT.
              </div>
              {/* <div className="btn-box">
                <Link to="/" className="theme-btn btn-style-one">
                  <span className="btn-wrap">
                    <span className="text-one">Read More</span>
                    <span className="text-two">Read More</span>
                  </span>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
