import speakersPatternImg1 from "../assets/images/background/pattern-4.png";
//import speakersPatternImg2 from "../assets/images/background/pattern-5.png";
import speakersPatternImg3 from "../assets/images/background/pattern-6.png";
import { Link } from "react-router-dom";
import { speakers } from "../utils/speakerData";

export default function Speakers() {
   const speakersPattern1 = {
     backgroundImage: `url(${speakersPatternImg1})`,
     backgroundSize: "cover",
   };

  // const speakersPattern2 = {
  //   backgroundImage: `url(${speakersPatternImg2})`,
  //   backgroundSize: "cover",
  // };

  const speakersPattern3 = {
    backgroundImage: `url(${speakersPatternImg3})`,
    backgroundSize: "cover",
  };

  const imgAndSpeakerGap={marginTop:"-30px"}

  return (
    <>
      <section className="speakers-one" id="speakers">
        <div className="speakers-one_pattern" style={speakersPattern1}></div> 
        <div
          className="speakers-one_pattern-two"
          style={speakersPattern3}
        ></div>
        <div className="auto-container">
          <div className="sec-title title-anim centered">
            <div className="sec-title_title" style={{ textTransform: "none" }}>
              INVITED SPEAKERS
            </div>
            <h2
              className="sec-title_heading"
              style={{
                marginBottom: "15px",
                fontSize: "36px",
                fontWeight: "700",
              }}
            >
              Invited Guests
            </h2>
          </div>
          <div className="row clearfix">


        {speakers.filter((speaker, index) => index < 8).map(speaker =>{
          return (
            <>
            <div key={speaker.id} className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
              <div
                className="speaker-block_one-inner wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="speaker-block_one-image">
                  <img src={speaker.imgUrl} alt="" />
                </div>
                <div className="speaker-block_one-content" style={imgAndSpeakerGap}>
                  <h4 className="speaker-one_title">
                    <a href="/">{speaker.name}</a>
                  </h4>

                  <div className="speaker-one_detail">
                    {speaker.designation}
                  </div>
                </div>
              </div>
            </div>
            </> 
          )
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
