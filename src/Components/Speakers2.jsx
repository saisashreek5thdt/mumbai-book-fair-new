import speakersPatternImg1 from "../assets/images/background/pattern-23.png";
import speakersPatternImg2 from "../assets/images/background/pattern-5.png";
import speakersPatternImg3 from "../assets/images/background/7.jpg";
import { Link } from "react-router-dom";
import { speakers } from "../utils/speakerData";

export default function Speakers() {
  const speakersPattern1 = {
    backgroundImage: `url(${speakersPatternImg1})`,
    backgroundSize: "cover",
  };

  const speakersPattern2 = {
    backgroundImage: `url(${speakersPatternImg2})`,
    backgroundSize: "cover",
  };

  const speakersPattern3 = {
    backgroundImage: `url(${speakersPatternImg3})`,
    backgroundSize: "cover",
  };

  //   const imgAndSpeakerGap={marginTop:"-30px"}

  return (
    <>
      <section className="speakers-three" style={{marginTop:"20px"}}>
        <div className="speakers-three_pattern" style={speakersPattern1}></div>
        <div className="speakers-three_image" style={speakersPattern3}></div>
        <div className="auto-container">
          <div className="sec-title light title-anim centered">
            <div className="sec-title_title">INVITED SPEAKERS</div>
            <h2 className="sec-title_heading">Invited Guests</h2>
          </div>
          <div className="row clearfix">
            {/* <!-- Speaker Block Three --> */}
            {speakers
              .filter((speaker, index) => index < 8)
              .map((speaker) => {
                return (
                  <>
                    <div className="speaker-block_three col-lg-3 col-md-6 col-sm-12">
                      <div
                        className="speaker-block_three-inner wow fadeInLeft"
                        data-wow-delay="0ms"
                        data-wow-duration="1500ms"
                      >
                        <div className="speaker-block_three-image">
                          <img src={speaker.imgUrl} alt="" />
                          <div
                            className="speaker-block_three-pattern"
                            style={speakersPattern2}
                          ></div>
                          <div className="speaker-block_three-social"></div>
                          <div className="speaker-block_three-content">
                            <h4 className="speaker-block_three-title">
                              <a href="/">{speaker.name}</a>
                            </h4>
                            <div className="speaker-block_three-detail">
                              {speaker.designation}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            <div className="col-lg-12 col-md-12 col-sm-12 text-center">
              <div className="about-one_button">
                <Link
                  to="/speakers"
                  className="theme-btn btn-style-one"
                  target="_parent"
                >
                  <span className="btn-wrap">
                    <span className="text-one">See More</span>
                    <span className="text-two">See More</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
