import speakersPatternImg1 from "../../assets/images/background/pattern-4.png";
//import speakersPatternImg2 from "../../assets/images/background/pattern-5.png";
import speakersPatternImg3 from "../../assets/images/background/pattern-6.png";

import speakerImg1 from "../../assets/images/Speakers/Ankur_Warikoo.png";
import speakerImg2 from "../../assets/images/Speakers/Chandraprakash_Dwivedi.png";
import speakerImg3 from "../../assets/images/Speakers/Govind_Dolakiya.png";
import speakerImg4 from "../../assets/images/Speakers/kailash-kher-680x680.png";
import speakerImg5 from "../../assets/images/Speakers/Shiv_Khera.png";
import speakerImg6 from "../../assets/images/Speakers/Upendra_Rai.png";
import speakerImg7 from "../../assets/images/Speakers/VP_Speaker.png";
import speakerImg8 from "../../assets/images/Speakers/Ankur_Warikoo.png";
import { Link } from "react-router-dom";

export default function SpeakersList() {
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

  const textNone = {
    textTransform: "none",
  };

  const titleHeading = {
    marginBottom: "15px",
    fontSize: "36px",
    fontWeight: "700",
  };

  return (
    <>
      <section className="speakers-one">
        <div className="speakers-one_pattern" style={speakersPattern1}></div>
        <div
          className="speakers-one_pattern-two"
          style={speakersPattern3}
        ></div>
        <div className="auto-container">
          <div className="sec-title title-anim centered">
            <div className="sec-title_title" style={textNone}>
              Speakers Experts
            </div>
            <h2 className="sec-title_heading" style={titleHeading}>
              Meet Speakers For Events
            </h2>
          </div>
          <div className="row d-flex justify-content-center align-items-center gap-0"
              style={{ gap: "5px", flexWrap: "nowrap" }}>
                      <div className="col-auto m-0 p-0">
                          <div className="about-one_button">
                            <Link to="/speakers" className="theme-btn btn-style-one">
                              <span className="btn-wrap">
                                <span className="text-one">2023</span>
                                  <span className="text-two">2023</span>
                                    </span>
                                      </Link>
                                          </div>
                                            </div>
                                            <div className="col-auto m-0 p-0">
                                            <div className="about-one_button">
                                            <Link to="/speakers" className="theme-btn btn-style-one">
                                            <span className="btn-wrap">
                                            <span className="text-one">2024</span>
                                              <span className="text-two">2024</span>
                                            </span>
                                            </Link>
                                            </div>
                                            </div>
                                            <div className="col-auto m-0 p-0">
                                            <div className="about-one_button">
                                            <Link to="/speakers" className="theme-btn btn-style-one">
                                            <span className="btn-wrap">
                                            <span className="text-one">2025</span>
                                            <span className="text-two">2025</span>
                                            </span>
                                            </Link>
                                      </div>
                                  </div>
                              </div>

          <div className="row clearfix">
            {/* Speaker Block One */}
            <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
              <div
                className="speaker-block_one-inner wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="speaker-block_one-image">
                  <img src={speakerImg1} alt="" />
                  {/* <div
                    className="speaker-block_one-pattern"
                    style={speakersPattern2}
                  ></div> */}
                </div>
                <div className="speaker-block_one-content">
                  <h4 className="speaker-one_title">
                    <a href="speaker-detail.html">Ankur Warikoo</a>
                  </h4>

                  <div className="speaker-one_detail">
                    Entrepreneur, Author, and Public Speaker
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker Block One */}
            <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
              <div
                className="speaker-block_one-inner wow fadeInLeft"
                data-wow-delay="150ms"
                data-wow-duration="1500ms"
              >
                <div className="speaker-block_one-image">
                  <img src={speakerImg2} alt="" />
                  {/* <div
                    className="speaker-block_one-pattern"
                    style={speakersPattern2}
                  ></div> */}
                </div>
                <div className="speaker-block_one-content">
                  <h4 className="speaker-one_title">
                    <a href="speaker-detail.html">Dr.Chandraprakash Dwivedi</a>
                  </h4>
                  <div className="speaker-one_detail">
                    Indian Film Director and Screenwriter
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker Block One */}
            <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
              <div
                className="speaker-block_one-inner wow fadeInLeft"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="speaker-block_one-image">
                  <img src={speakerImg3} alt="" />
                  {/* <div
                    className="speaker-block_one-pattern"
                    style={speakersPattern2}
                  ></div> */}
                </div>
                <div className="speaker-block_one-content">
                  <h4 className="speaker-one_title">
                    <a href="speaker-detail.html">Govind Dholakia</a>
                  </h4>
                  <div className="speaker-one_detail">
                    Founder and Chairman of Shree Ramkrishna Exports Pvt. Ltd
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker Block One */}
            <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
              <div
                className="speaker-block_one-inner wow fadeInLeft"
                data-wow-delay="450ms"
                data-wow-duration="1500ms"
              >
                <div className="speaker-block_one-image">
                  <img src={speakerImg4} alt="" />
                  {/* <div
                    className="speaker-block_one-pattern"
                    style={speakersPattern2}
                  ></div> */}
                </div>
                <div className="speaker-block_one-content">
                  <h4 className="speaker-one_title">
                    <a href="speaker-detail.html">Kailash Kher</a>
                  </h4>
                  <div className="speaker-one_detail">
                    Indian Playback Singer and Music Composer
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker Block One */}
            <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
              <div
                className="speaker-block_one-inner wow fadeInRight"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="speaker-block_one-image">
                  <img src={speakerImg5} alt="" />
                  {/* <div
                    className="speaker-block_one-pattern"
                    style={speakersPattern2}
                  ></div> */}
                </div>
                <div className="speaker-block_one-content">
                  <h4 className="speaker-one_title">
                    <a href="speaker-detail.html">Shiv Khera</a>
                  </h4>
                  <div className="speaker-one_detail">
                    Author, Professional Speaker, and Motivational Trainer
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker Block One */}
            <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
              <div
                className="speaker-block_one-inner wow fadeInRight"
                data-wow-delay="150ms"
                data-wow-duration="1500ms"
              >
                <div className="speaker-block_one-image">
                  <img src={speakerImg6} alt="" />
                  {/* <div
                    className="speaker-block_one-pattern"
                    style={speakersPattern2}
                  ></div> */}
                </div>
                <div className="speaker-block_one-content">
                  <h4 className="speaker-one_title">
                    <a href="speaker-detail.html">Upendra Rai</a>
                  </h4>
                  <div className="speaker-one_detail">
                    Senior Journalist and Author
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker Block One */}
            <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
              <div
                className="speaker-block_one-inner wow fadeInRight"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="speaker-block_one-image">
                  <img src={speakerImg7} alt="" />
                  {/* <div
                    className="speaker-block_one-pattern"
                    style={speakersPattern2}
                  ></div> */}
                </div>
                <div className="speaker-block_one-content">
                  <h4 className="speaker-one_title">
                    <a href="speaker-detail.html">Vaibhav Purandare</a>
                  </h4>
                  <div className="speaker-one_detail">
                    Author and Journalist
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker Block One */}
            <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
              <div
                className="speaker-block_one-inner wow fadeInRight"
                data-wow-delay="450ms"
                data-wow-duration="1500ms"
              >
                <div className="speaker-block_one-image">
                  <img src={speakerImg8} alt="" />
                  {/* <div
                    className="speaker-block_one-pattern"
                    style={speakersPattern2}
                  ></div> */}
                </div>
                <div className="speaker-block_one-content">
                  <h4 className="speaker-one_title">
                    <a href="speaker-detail.html">Ankur Warikoo</a>
                  </h4>
                  <div className="speaker-one_detail">
                    Entrepreneur, Author, and Public Speaker
                  </div>
                </div>
              </div>
            </div>
            {/* Speaker Block One */}
            <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
              <div
                className="speaker-block_one-inner wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="speaker-block_one-image">
                  <img src={speakerImg1} alt="" />
                  {/* <div
                    className="speaker-block_one-pattern"
                    style={speakersPattern2}
                  ></div> */}
                </div>
                <div className="speaker-block_one-content">
                  <h4 className="speaker-one_title">
                    <a href="speaker-detail.html">Ankur Warikoo</a>
                  </h4>

                  <div className="speaker-one_detail">
                    Entrepreneur, Author, and Public Speaker
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker Block One */}
            <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
              <div
                className="speaker-block_one-inner wow fadeInLeft"
                data-wow-delay="150ms"
                data-wow-duration="1500ms"
              >
                <div className="speaker-block_one-image">
                  <img src={speakerImg2} alt="" />
                  {/* <div
                    className="speaker-block_one-pattern"
                    style={speakersPattern2}
                  ></div> */}
                </div>
                <div className="speaker-block_one-content">
                  <h4 className="speaker-one_title">
                    <a href="speaker-detail.html">Dr.Chandraprakash Dwivedi</a>
                  </h4>
                  <div className="speaker-one_detail">
                    Indian Film Director and Screenwriter
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker Block One */}
            <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
              <div
                className="speaker-block_one-inner wow fadeInLeft"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="speaker-block_one-image">
                  <img src={speakerImg3} alt="" />
                  {/* <div
                    className="speaker-block_one-pattern"
                    style={speakersPattern2}
                  ></div> */}
                </div>
                <div className="speaker-block_one-content">
                  <h4 className="speaker-one_title">
                    <a href="speaker-detail.html">Govind Dholakia</a>
                  </h4>
                  <div className="speaker-one_detail">
                    Founder and Chairman of Shree Ramkrishna Exports Pvt. Ltd
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker Block One */}
            <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
              <div
                className="speaker-block_one-inner wow fadeInLeft"
                data-wow-delay="450ms"
                data-wow-duration="1500ms"
              >
                <div className="speaker-block_one-image">
                  <img src={speakerImg4} alt="" />
                  {/* <div
                    className="speaker-block_one-pattern"
                    style={speakersPattern2}
                  ></div> */}
                </div>
                <div className="speaker-block_one-content">
                  <h4 className="speaker-one_title">
                    <a href="speaker-detail.html">Kailash Kher</a>
                  </h4>
                  <div className="speaker-one_detail">
                    Indian Playback Singer and Music Composer
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker Block One */}
            <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
              <div
                className="speaker-block_one-inner wow fadeInRight"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="speaker-block_one-image">
                  <img src={speakerImg5} alt="" />
                  {/* <div
                    className="speaker-block_one-pattern"
                    style={speakersPattern2}
                  ></div> */}
                </div>
                <div className="speaker-block_one-content">
                  <h4 className="speaker-one_title">
                    <a href="speaker-detail.html">Shiv Khera</a>
                  </h4>
                  <div className="speaker-one_detail">
                    Author, Professional Speaker, and Motivational Trainer
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker Block One */}
            <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
              <div
                className="speaker-block_one-inner wow fadeInRight"
                data-wow-delay="150ms"
                data-wow-duration="1500ms"
              >
                <div className="speaker-block_one-image">
                  <img src={speakerImg6} alt="" />
                  {/* <div
                    className="speaker-block_one-pattern"
                    style={speakersPattern2}
                  ></div> */}
                </div>
                <div className="speaker-block_one-content">
                  <h4 className="speaker-one_title">
                    <a href="speaker-detail.html">Upendra Rai</a>
                  </h4>
                  <div className="speaker-one_detail">
                    Senior Journalist and Author
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker Block One */}
            <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
              <div
                className="speaker-block_one-inner wow fadeInRight"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="speaker-block_one-image">
                  <img src={speakerImg7} alt="" />
                  {/* <div
                    className="speaker-block_one-pattern"
                    style={speakersPattern2}
                  ></div> */}
                </div>
                <div className="speaker-block_one-content">
                  <h4 className="speaker-one_title">
                    <a href="speaker-detail.html">Vaibhav Purandare</a>
                  </h4>
                  <div className="speaker-one_detail">
                    Author and Journalist
                  </div>
                </div>
              </div>
            </div>

            {/* Speaker Block One */}
            <div className="speaker-block_one col-lg-3 col-md-6 col-sm-12">
              <div
                className="speaker-block_one-inner wow fadeInRight"
                data-wow-delay="450ms"
                data-wow-duration="1500ms"
              >
                <div className="speaker-block_one-image">
                  <img src={speakerImg8} alt="" />
                  {/* <div
                    className="speaker-block_one-pattern"
                    style={speakersPattern2}
                  ></div> */}
                </div>
                <div className="speaker-block_one-content">
                  <h4 className="speaker-one_title">
                    <a href="speaker-detail.html">Ankur Warikoo</a>
                  </h4>
                  <div className="speaker-one_detail">
                    Entrepreneur, Author, and Public Speaker
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className="styled-pagination text-center">
            <li className="next">
              <a href="#">
                <span className="fa fa-angle-double-left"></span>
              </a>
            </li>
            <li>
              <a href="#" className="active">
                1
              </a>
            </li>
            <li>
              <a href="#">2</a>
            </li>
            <li>
              <a href="#">3</a>
            </li>
            <li className="next">
              <a href="#">
                <span className="fa fa-angle-double-right"></span>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
