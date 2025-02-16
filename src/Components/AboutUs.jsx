import pattern3 from "../assets/images/background/pattern-3.png";
import pattern2 from "../assets/images/background/pattern-2.png";
import pattern1 from "../assets/images/background/pattern-1.png";
import AboutPattern from "../assets/images/background/about-pattern.png";
import AboutSpeaker from "../assets/images/Speakers/event.webm";
export default function About() {
  return (
    <>
      <section className="about-one">
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
                  style={{ backgroundImage: `url(${AboutPattern})` }}
                ></div>
                <div className="about-one_image wow rollIn">
                  {/* <img src={AboutPic} alt="" /> */}
                  <video autoPlay muted loop>
                        <source src={AboutSpeaker} />
                    </video>
                </div>
                <a
                  className="lightbox-video slider-one_play"
                >
                  <span >    
                    <i className="ripple"></i>
                  </span>
                  {/* className="fa fa-play" */}
                </a>
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
                  The Mumbai Book Festival, organized by the National Book
                  Trust, India (under the Ministry of Education, Government of
                  India), is making its debut this April at the centrally
                  located Azad Maidan, Mumbai. It promises to be a landmark
                  event in the national publishing calendar, bringing together a
                  diverse array of national as well as international exhibitors.
                </div>
                <div className="about-one_text">
                  Featuring the theme &quot;Books for All,&quot; the festival
                  offers a multifaceted experience with literary discussions,
                  cultural performances, and activities for all age groups. This
                  inaugural edition will host over 300 exhibitors and expects to
                  welcome more than 100,000 visitors, fostering a vibrant
                  exchange of ideas and stories.
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
                      <span className="about-one_block-icon flaticon-map"></span>
                      <strong>Venue</strong>
                      Azad Maidan, Mumbai
                    </div>
                  </div>
                  {/* <!-- About One Block --> */}
                  <div className="about-one_block col-lg-6 col-md-6 col-sm-12">
                    <div className="about-one_block-inner">
                      <span className="about-one_block-icon flaticon-calendar-2"></span>
                      <strong>Date</strong>
                      April 1 to 5, 2025
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
