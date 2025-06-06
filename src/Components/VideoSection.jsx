// const pattern11 = "assets/images/background/pattern-11.png";
// const BG2 = "assets/images/background/2.jpg";
// const Icon1 = 'assets/images/icons/icon-1.png';
// const Icon2 = 'assets/images/icons/icon-2.png';
// const Icon3 = 'assets/images/icons/icon-3.png';
import "../video.css";
const height500 = { height: "500px" };
const fontSize50 = { fontSize: "50px" };
export default function VideoOne() {
  return (
    <>
      {/* <!-- Video One --> */}
      <section className="video-one">
        {/* <div className="video-one_pattern-one" style={{ backgroundImage: `url(${pattern11})` }}></div>
                <div className="video-one_pattern-two"  style={{ backgroundImage: `url(${Icon3})` }}></div>
                <div className="video-one_pattern-three"  style={{ backgroundImage: `url(${Icon2})` }}></div>
                <div className="video-one_pattern-four"  style={{ backgroundImage: `url(${Icon1})` }}></div> */}
        <div className="video-background">
          <video autoPlay muted loop style={height500}>
            <source src="/assets/images/aboutEvent1.MP4" />
          </video>
        </div>
        <div className="auto-container">
          <div className="sec-title title-anim light centered">
            {/* <div className="sec-title_title">LATEST VIDEO</div> */}
            <h2 className="sec-title_heading" style={fontSize50}>
              CELEBRATING THE POWER OF WORDS
            </h2>
          </div>
        </div>
      </section>
      {/* <!-- End Video One --> <span className="fa fa-play"><i className="ripple"></i></span> style={{ backgroundImage: `url(${BG2})` }}*/}
    </>
  );
}
