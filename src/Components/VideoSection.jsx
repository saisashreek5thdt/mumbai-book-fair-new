import videoImg1 from "../assets/images/background/2.jpg";
import videoImg2 from "../assets/images/background/pattern-11.png";
import videoImg3 from "../assets/images/icons/icon-1.png";
import videoImg4 from "../assets/images/icons/icon-2.png";
import videoImg5 from "../assets/images/icons/icon-3.png";

export default function VideoSection() {
  const videoBG1 = {
    backgroundImage: `url(${videoImg1})`,
    backgroundSize: "cover",
  };

  const videoBG2 = {
    backgroundImage: `url(${videoImg2})`,
    backgroundSize: "cover",
  };

  const videoBG3 = {
    backgroundImage: `url(${videoImg3})`,
    backgroundSize: "cover",
  };

  const videoBG4 = {
    backgroundImage: `url(${videoImg4})`,
    backgroundSize: "cover",
  };

  const videoBG5 = {
    backgroundImage: `url(${videoImg5})`,
    backgroundSize: "cover",
  };

  return (
    <>
      <section className="video-one" style={videoBG1}>
        <div className="video-one_pattern-one" style={videoBG2}></div>
        <div className="video-one_pattern-two" style={videoBG5}></div>
        <div className="video-one_pattern-three" style={videoBG4}></div>
        <div className="video-one_pattern-four" style={videoBG3}></div>
        <div className="auto-container">
          <div className="sec-title title-anim light centered">
            <div className="sec-title_title">Conference Ticket Price</div>
            <h2 className="sec-title_heading">
              We’re Always in The Lead. <br />
              From The Business Conference!
            </h2>
            <a
              href="https://www.youtube.com/watch?v=YS3PwmOQ1Fc"
              className="lightbox-video video-one_play"
            >
              <span className="fa fa-play">
                <i className="ripple"></i>
              </span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
