import { useState } from "react";
import { Link } from "react-router-dom";
import blogImg1 from "../assets/images/resource/volunteer.png";
import blogImg2 from "../assets/images/resource/exhibitor.png";
import blogImg3 from "../assets/images/resource/visitor.png";
import blogImg4 from "../assets/images/resource/speaker.png";
import blogImg5 from "../assets/images/resource/vendor.png";
import blogImg6 from "../assets/images/resource/sponsor.png";

export default function Blogs() {
  const [showAll, setShowAll] = useState(false);

  const toggleCards = () => {
    setShowAll(!showAll);
  };

  return (
    <>
      <section className="news-one">
        <div className="auto-container">
          <div className="sec-title">
            <div className="d-flex justify-content-between align-items-end flex-wrap">
              <div className="title-box title-anim">
                <div className="sec-title_title">Get Your</div>
                <h2 className="sec-title_heading">Registration</h2>
              </div>
              <div className="button-box title-anim">
                <button onClick={toggleCards} className="theme-btn btn-style-one">
                  <span className="btn-wrap">
                    <span className="text-one">{showAll ? "Less Registration" : "More Registration"}</span>
                    <span className="text-two">{showAll ? "Less Registration" : "More Registration"}</span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="row clearfix">
            {/* News Block - Initially Visible */}
            <div className="news-block_one col-lg-4 col-md-6 col-sm-12">
              <div className="news-block_one-inner">
                <div className="news-block_one-tag">Registration</div>
                <div className="news-block_one-image">
                  <Link to="/">
                    <img src={blogImg1} alt="" />
                  </Link>
                  <img src={blogImg1} alt="" />
                </div>
                <div className="news-block_one-content">
                  <div className="news-block_one-date">1-5 April</div>
                  <h5 className="news-block_one-title">
                    <Link to="/">Volunteer</Link>
                  </h5>
                  <a
                    className="news-block_one-more"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSePmHdusFo3-doXpJRmMxpmT9aqVweuzQhqn_OGJGcTdV-mLQ/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>

            <div className="news-block_one col-lg-4 col-md-6 col-sm-12">
              <div className="news-block_one-inner">
                <div className="news-block_one-tag">Registration</div>
                <div className="news-block_one-image">
                  <Link to="/">
                    <img src={blogImg2} alt="" />
                  </Link>
                  <img src={blogImg2} alt="" />
                </div>
                <div className="news-block_one-content">
                  <div className="news-block_one-date">1-5 April</div>
                  <h5 className="news-block_one-title">
                    <Link to="/">Exhibitor</Link>
                  </h5>
                  <a
                    className="news-block_one-more"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSePmHdusFo3-doXpJRmMxpmT9aqVweuzQhqn_OGJGcTdV-mLQ/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>

            <div className="news-block_one col-lg-4 col-md-6 col-sm-12">
              <div className="news-block_one-inner">
                <div className="news-block_one-tag">Registration</div>
                <div className="news-block_one-image">
                  <Link to="/">
                    <img src={blogImg3} alt="" />
                  </Link>
                  <img src={blogImg3} alt="" />
                </div>
                <div className="news-block_one-content">
                  <div className="news-block_one-date">1-5 April</div>
                  <h5 className="news-block_one-title">
                    <Link to="/">Visitor</Link>
                  </h5>
                  <a
                    className="news-block_one-more"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfJ6YcEuTFVIB-wCflitmtfX1minVEGO4KrOPR8Fc26vPM7XA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>

            {/* Hidden News Blocks (Displayed when showAll is true) */}
            {showAll && (
              <>
                <div className="news-block_one col-lg-4 col-md-6 col-sm-12">
                  <div className="news-block_one-inner">
                    <div className="news-block_one-tag">Registration</div>
                    <div className="news-block_one-image">
                  <Link to="/">
                    <img src={blogImg4} alt="" />
                  </Link>
                  <img src={blogImg4} alt="" />
                </div>
                    <div className="news-block_one-content">
                      <div className="news-block_one-date">1-5 April</div>
                      <h5 className="news-block_one-title">
                        <Link to="/">Speaker</Link>
                      </h5>
                      <a
                    className="news-block_one-more"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSehWMPA1WSMIC1u54WHSlPRifEf1aP2PF_UBQahAI-SnbqLBw/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register
                  </a>
                    </div>
                  </div>
                </div>

                <div className="news-block_one col-lg-4 col-md-6 col-sm-12">
                  <div className="news-block_one-inner">
                    <div className="news-block_one-tag">Registration</div>
                    <div className="news-block_one-image">
                  <Link to="/">
                    <img src={blogImg5} alt="" />
                  </Link>
                  <img src={blogImg5} alt="" />
                </div>
                    <div className="news-block_one-content">
                      <div className="news-block_one-date">1-5 April</div>
                      <h5 className="news-block_one-title">
                        <Link to="/">Vendor</Link>
                      </h5>
                      <a
                    className="news-block_one-more"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe_CBsGMOh5NU6IgrGabtPLCGwpRhZGZ8erNCpYAcl4Q1TVAg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register
                  </a>
                    </div>
                  </div>
                </div>

                <div className="news-block_one col-lg-4 col-md-6 col-sm-12">
                  <div className="news-block_one-inner">
                    <div className="news-block_one-tag">Registration</div>
                    <div className="news-block_one-image">
                  <Link to="/">
                    <img src={blogImg6} alt="" />
                  </Link>
                  <img src={blogImg6} alt="" />
                </div>
                    <div className="news-block_one-content">
                      <div className="news-block_one-date">1-5 April</div>
                      <h5 className="news-block_one-title">
                        <Link to="/">Sponsor</Link>
                      </h5>
                      <a
                    className="news-block_one-more"
                    href="https://docs.google.com/forms/d/e/1FAIpQLScIajlb9neewUiqRpH6KrDXYsVKT7QXdc1Ioif8frcyuhsm8Q/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register
                  </a>
                    </div>
                  </div>
                </div>

                
                <div className="news-block_one col-lg-4 col-md-6 col-sm-12">
                  <div className="news-block_one-inner">
                    <div className="news-block_one-tag">Registration</div>
                    <div className="news-block_one-image">
                  <Link to="/">
                    <img src={blogImg5} alt="" />
                  </Link>
                  <img src={blogImg5} alt="" />
                </div>
                    <div className="news-block_one-content">
                      <div className="news-block_one-date">1-5 April</div>
                      <h5 className="news-block_one-title">
                        <Link to="/">Vendor</Link>
                      </h5>
                      <a
                    className="news-block_one-more"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe_CBsGMOh5NU6IgrGabtPLCGwpRhZGZ8erNCpYAcl4Q1TVAg/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register
                  </a>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
