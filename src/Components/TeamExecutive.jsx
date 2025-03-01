import { Link } from "react-router-dom";
import speakerImg1 from "../assets/images/team/Acharya.png";
import speakerImg2 from "../assets/images/team/Mohit.png";

export default function TeamExecutive() {
  return (
    <>
      {/* <section className="top-features">
        
      </section> */}

      <div className="auto-container" >
        <div className="row" style={{display:"flex",alignContent:"center"}}>
          <div className="" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          {/* Feature Block */}
          <div className="feature-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp">
            <div className="inner-box">
              {/* <div className="icon-box">
                  <span className="icon flaticon-megaphone-1"></span>
                </div> */}                
              <div className="speaker-block">
              <div className="news-block_two-date">CHIEF CONVENOR - MUMBAI BOOK FESTIVAL</div>
                <img src={speakerImg1} alt="" />
              </div>
              <h4>
                <Link to="/">Acharya Pawan Tripathi</Link>
              </h4>
              <div className="text">
                Author, columnist, social worker, and Treasurer of the Sri
                Siddhi Vinayak Temple Trust (SSVT), Mumbai.
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
          <div className="feature-block col-lg-4 col-md-6 col-sm-12 wow fadeInUp" data-wow-delay="400ms">
            <div className="inner-box">
              {/* <div className="icon-box">
                  <span className="icon flaticon-arrows"></span>
                </div> */}
              <div className="speaker-block">
              <div className="news-block_two-date">CHIEF PATRON - PROF MILIN</div>
                <img src={speakerImg2} alt="" />
              </div>
              <h4>
                <Link to="/">Prof. Milind Sudhakar Marathe</Link>
              </h4>
              <div className="text">
                Social Worker, Entrepreneur and Champion of{" "}
                <strong>
                  &quot;<em>Har Hath Ek Kitab</em>&quot;
                </strong>
                .
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
      </div>
    </>
  );
}
