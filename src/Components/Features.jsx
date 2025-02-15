import featureImg1 from "../assets/images/icons/circle-pink.png";
import featureImg2 from "../assets/images/icons/circle-icon-one.png";
import featureImg3 from "../assets/images/icons/events-bg.png";

import featureIcon1 from "../assets/images/icons/event-icon-1.png";
import featureIcon2 from "../assets/images/icons/event-icon-2.png";
import featureIcon3 from "../assets/images/icons/event-icon-3.png";
import featureIcon4 from "../assets/images/icons/event-icon-4.png";
import featureIcon5 from "../assets/images/icons/event-icon-5.png";
import featureIcon6 from "../assets/images/icons/event-icon-6.png";

export default function Features() {
  const featurePattern1 = {
    backgroundImage: `url(${featureImg1})`,
    backgroundSize: "cover",
  };

  const featurePattern2 = {
    backgroundImage: `url(${featureImg2})`,
    backgroundSize: "cover",
  };

  const featurePattern3 = {
    backgroundImage: `url(${featureImg3})`,
    backgroundSize: "cover",
  };

  return (
    <>
      <section className="event-feature-section">
        {/* Icon One */}
        <div className="circle-layer" style={featurePattern1}></div>
        <div className="circle-layer-two" style={featurePattern2}></div>
        <div className="circle-layer-three" style={featurePattern3}></div>
        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title centered">
            <div className="sec-title_title">Features</div>
            <h2 className="sec-title_heading">Our Features</h2>
          </div>
          <div className="row clearfix">
            {/* Event Feature Block */}
            <div className="event-feature-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="left-border"></div>
                <div className="top-border"></div>
                <div className="right-border"></div>
                <div className="bottom-border"></div>
                <div className="icon-box">
                  <span className="icon">
                    <img src={featureIcon1} alt="" />
                  </span>
                </div>
                <h4>
                  <a href="development.html">Meet the leaders</a>
                </h4>
                <div className="text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                </div>
              </div>
            </div>

            {/* Event Feature Block */}
            <div className="event-feature-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="left-border"></div>
                <div className="top-border"></div>
                <div className="right-border"></div>
                <div className="bottom-border"></div>
                <div className="icon-box">
                  <span className="icon">
                    <img src={featureIcon2} alt="" />
                  </span>
                </div>
                <h4>
                  <a href="development.html">Five Days Long</a>
                </h4>
                <div className="text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                </div>
              </div>
            </div>

            {/* Event Feature Block */}
            <div className="event-feature-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="left-border"></div>
                <div className="top-border"></div>
                <div className="right-border"></div>
                <div className="bottom-border"></div>
                <div className="icon-box">
                  <span className="icon">
                    <img src={featureIcon3} alt="" />
                  </span>
                </div>
                <h4>
                  <a href="development.html">Product Launching</a>
                </h4>
                <div className="text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                </div>
              </div>
            </div>

            {/* Event Feature Block */}
            <div className="event-feature-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="left-border"></div>
                <div className="top-border"></div>
                <div className="right-border"></div>
                <div className="bottom-border"></div>
                <div className="icon-box">
                  <span className="icon">
                    <img src={featureIcon4} alt="" />
                  </span>
                </div>
                <h4>
                  <a href="development.html">37+ Sponsors</a>
                </h4>
                <div className="text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                </div>
              </div>
            </div>

            {/* Event Feature Block */}
            <div className="event-feature-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="left-border"></div>
                <div className="top-border"></div>
                <div className="right-border"></div>
                <div className="bottom-border"></div>
                <div className="icon-box">
                  <span className="icon">
                    <img src={featureIcon5} alt="" />
                  </span>
                </div>
                <h4>
                  <a href="development.html">92+ Countries Attend</a>
                </h4>
                <div className="text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                </div>
              </div>
            </div>

            {/* Event Feature Block */}
            <div className="event-feature-block col-lg-4 col-md-6 col-sm-12">
              <div className="inner-box">
                <div className="left-border"></div>
                <div className="top-border"></div>
                <div className="right-border"></div>
                <div className="bottom-border"></div>
                <div className="icon-box">
                  <span className="icon">
                    <img src={featureIcon6} alt="" />
                  </span>
                </div>
                <h4>
                  <a href="development.html">Ask Questions</a>
                </h4>
                <div className="text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry&apos;s
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
