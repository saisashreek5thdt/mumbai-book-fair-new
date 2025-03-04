import pattern3 from "../assets/images/background/pattern-3.png";
import pattern2 from "../assets/images/background/pattern-2.png";
import pattern1 from "../assets/images/background/pattern-1.png";
// import AboutPattern from "../assets/images/background/about-pattern.png";
import AboutSpeaker from "../assets/images/Speakers/event1.mp4";
import venueIcon from "../assets/images/aboutIcon/venue.png";
import calenderIcon from "../assets/images/aboutIcon/calendar.png";
const backgroundColor = {
  background: "black",
  width: "600px",
  height: "600px",
};
export default function About() {
  return (
    <>
      <section className="about-one" id="about">
        <div
          className="about-one_pattern-one"
          data-parallax='{"y" : 80}'
          style={{ backgroundImage: `url(${pattern1})` }}
        ></div>
        <div
          className="about-one_pattern-two"
          data-parallax='{"y" : 120}'
          style={{ backgroundImage: `url(${pattern3})` }}
        ></div>
        <div
          className="about-one_pattern-three"
          style={{ backgroundImage: `url(${pattern2})` }}
        ></div>
        <div className="auto-container">
          <div className="row clearfix">
            {/* <!-- Image Column --> */}
            <div className="about-one_image-column col-lg-6 col-md-12 col-sm-12">
              <div className="about-one_image-inner">
                <div
                  className="about-one_pattern-four"
                  // style={{ backgroundImage: `url(${AboutPattern})` }}
                ></div>
                <div
                  className="about-one_image wow rollIn"
                  style={backgroundColor}
                >
                  {/* <img src={AboutPic} alt="" /> */}
                  <video autoPlay muted loop>
                    <source src={AboutSpeaker} />
                  </video>
                </div>
                {/* <a
                  className="lightbox-video slider-one_play"
                >
                  <span className="fa fa-play">    
                    <i className="ripple"></i>
                  </span>
                  
                </a> */}
              </div>
            </div>
            {/* <!-- Content Column --> */}
            <div className="about-one_content-column col-lg-6 col-md-12 col-sm-12">
              <div className="about-one_content-inner">
                <div className="sec-title title-anim">
                  <div className="sec-title_title">About The Event</div>
                  <h2 className="sec-title_heading">Mumbai Book Fair</h2>
                </div>
                {/* <div className="about-one_bold-text">Grow, scrape their knees, try new things, to be vulnerable, and to have epic adventures together</div> */}
                <div className="about-one_text">
                  The Mumbai Book Festival is set to make its debut in October
                  2025 at the centrally located BKC, Mumbai. It promises to be a
                  landmark event in the national publishing calendar, bringing
                  together a diverse array of national and international
                  exhibitors, publishers, authors, and speakers.
                </div>
                <div className="about-one_text">
                  The festival offers a multifaceted experience with literary
                  discussions, book releases, cultural performances, and
                  activities for children of all age groups. With 500 +
                  exhibitors, the festival expects to welcome more than 1
                  million visitors, fostering a vibrant exchange of ideas and
                  stories.
                </div>
                {/* <div className="about-one_text">
                Featuring the theme &quot;Books for All,&quot; the festival offers a multifaceted experience with literary discussions, cultural performances, and activities for all age groups.
                </div>
                <div className="about-one_text">
                This inaugural edition will host over 300 exhibitors and expects to welcome more than 100,000 visitors, fostering a vibrant exchange of ideas and stories.
                </div> */}
                <div className="row clearfix">
                  {/* <!-- About One Block --> */}
                  <div className="about-one_block col-lg-6 col-md-6 col-sm-12">
                    <div className="about-one_block-inner">
                      <span className="about-one_block-icon"><img src={venueIcon} style={{width:"65px", height:"65px", marginTop:"-25px",marginLeft:"-5px"}} alt="" /></span>
                      <strong>Venue</strong>
                      BKC, Mumbai
                    </div>
                  </div>
                  {/* <!-- About One Block --> */}
                  <div className="about-one_block col-lg-6 col-md-6 col-sm-12">
                    <div className="about-one_block-inner">
                      <span className="about-one_block-icon"><img src={calenderIcon} style={{width:"65px", height:"65px", marginTop:"-25px",marginLeft:"-5px"}} alt="" /></span>
                      <strong>Date</strong>
                      October 08 to 12, 2025
                    </div>
                  </div>
                </div>
                <div className="about-one_button">
                  {/* <a href="speaker-detail.html" className="theme-btn btn-style-one">
                                        <span className="btn-wrap">
                                            <span className="text-one">Buy Ticket</span>
                                            <span className="text-two">Buy Ticket</span>
                                        </span>
                                    </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
