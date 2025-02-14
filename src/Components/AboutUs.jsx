import aboutPattern1 from "../assets/images/background/pattern-1.png";
import aboutPattern2 from "../assets/images/background/pattern-2.png";
import aboutPattern3 from "../assets/images/background/pattern-3.png";
import aboutPattern from "../assets/images/background/about-pattern.png";
import aboutImgBG from "../assets/images/resource/about.jpg";

export default function AboutUs() {
  const aboutPatternBGPattern1 = {
    backgroundImage: `url(${aboutPattern1})`,
    backgroundSize: "cover",
  };

  const aboutPatternBGPattern2 = {
    backgroundImage: `url(${aboutPattern2})`,
    backgroundSize: "cover",
  };

  const aboutPatternBGPattern3 = {
    backgroundImage: `url(${aboutPattern3})`,
    backgroundSize: "cover",
  };

  const aboutPatternBG = {
    backgroundImage: `url(${aboutPattern})`,
    backgroundSize: "cover",
  }

  return (
    <>
      <section className="about-one">
        <div
          className="about-one_pattern-one"
          data-parallax='{"y" : 80}'
          style={aboutPatternBGPattern1}
        ></div>
        <div
          className="about-one_pattern-two"
          data-parallax='{"y" : 120}'
          style={aboutPatternBGPattern3}
        ></div>
        <div
          className="about-one_pattern-three"
          style={aboutPatternBGPattern2}
        ></div>
        <div className="auto-container">
          <div className="row clearfix">
            {/* Image Column */}
            <div className="about-one_image-column col-lg-6 col-md-12 col-sm-12">
              <div className="about-one_image-inner">
                <div
                  className="about-one_pattern-four"
                  style={aboutPatternBG}
                ></div>
                <div className="about-one_image wow rollIn">
                  <img src={aboutImgBG} alt="" />
                </div>
                <a
                  href="https://www.youtube.com/watch?v=YS3PwmOQ1Fc"
                  className="lightbox-video slider-one_play"
                >
                  <span className="fa fa-play">
                    <i className="ripple"></i>
                  </span>
                </a>
              </div>
            </div>
            {/* Content Column */}
            <div className="about-one_content-column col-lg-6 col-md-12 col-sm-12">
              <div className="about-one_content-inner">
                <div className="sec-title title-anim">
                  <div className="sec-title_title">About Event</div>
                  <h2 className="sec-title_heading">
                    An Evening For Creator & Art Lover Meet Together
                  </h2>
                </div>
                <div className="about-one_bold-text">
                  Grow, scrape their knees, try new things, to be vulnerable,
                  and to have epic adventures together
                </div>
                <div className="about-one_text">
                  We&apos;re inviting the top creatives in the tech industry
                  from all over the world to come learn, grow, scrape their
                  knees, try new things, to be vulnerable, and to have epic
                  adventures together, this time both
                </div>
                <div className="row clearfix">
                  {/* About One Block */}
                  <div className="about-one_block col-lg-6 col-md-6 col-sm-12">
                    <div className="about-one_block-inner">
                      <span className="about-one_block-icon flaticon-map"></span>
                      <strong>Where</strong>
                      North Harond, Canada
                    </div>
                  </div>
                  {/* About One Block */}
                  <div className="about-one_block col-lg-6 col-md-6 col-sm-12">
                    <div className="about-one_block-inner">
                      <span className="about-one_block-icon flaticon-calendar-2"></span>
                      <strong>When</strong>
                      March 25 to 29, 2024
                    </div>
                  </div>
                </div>
                <div className="about-one_button">
                  <a
                    href="speaker-detail.html"
                    className="theme-btn btn-style-one"
                  >
                    <span className="btn-wrap">
                      <span className="text-one">Buy Ticket</span>
                      <span className="text-two">Buy Ticket</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
