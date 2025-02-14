import speakersPatternImg1 from "../assets/images/background/pattern-4.png";
import speakersPatternImg2 from "../assets/images/background/pattern-5.png";
import speakersPatternImg3 from "../assets/images/background/pattern-6.png";

import speakerImg1 from "../assets/images/resource/speaker-1.jpg";
import speakerImg2 from "../assets/images/resource/speaker-2.jpg";
import speakerImg3 from "../assets/images/resource/speaker-3.jpg";
import speakerImg4 from "../assets/images/resource/speaker-4.jpg";
import speakerImg5 from "../assets/images/resource/speaker-5.jpg";
import speakerImg6 from "../assets/images/resource/speaker-6.jpg";
import speakerImg7 from "../assets/images/resource/speaker-7.jpg";
import speakerImg8 from "../assets/images/resource/speaker-8.jpg";

export default function Speakers() {

    const speakersPattern1 = {
        backgroundImage: `url(${speakersPatternImg1})`,
        backgroundSize: "cover",
    }

    const speakersPattern2 = {
        backgroundImage: `url(${speakersPatternImg2})`,
        backgroundSize: "cover",
    }

    const speakersPattern3 = {
        backgroundImage: `url(${speakersPatternImg3})`,
        backgroundSize: "cover",
    }

  return (
    <>
      <section className="speakers-one">
        <div
          className="speakers-one_pattern"
          style={speakersPattern1}
        ></div>
        <div
          className="speakers-one_pattern-two"
          style={speakersPattern3}
        ></div>
        <div className="auto-container">
          <div className="sec-title title-anim centered">
            <div className="sec-title_title">Our Speakers</div>
            <h2 className="sec-title_heading">Speakers Exparts</h2>
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
                  <div
                    className="speaker-block_one-pattern"
                    style={speakersPattern2}
                  ></div>
                  <div className="speaker-block_one-social">
                    <span className="speaker-block_one-share fa-solid fa-share-nodes fa-fw"></span>
                    <div className="speaker-block_one-social-list">
                      <a
                        href="https://facebook.com/"
                        className="facebook fa-brands fa-facebook-f"
                      ></a>
                      <a
                        href="https://youtube.com/"
                        className="youtube fa-brands fa-youtube"
                      ></a>
                      <a
                        href="https://twitter.com/"
                        className="twitter fa-brands fa-twitter"
                      ></a>
                    </div>
                  </div>
                </div>
                <div className="speaker-block_one-content">
                  <h4 className="speaker-one_title">
                    <a href="speaker-detail.html">Patrick Spencer</a>
                  </h4>
                  <div className="speaker-one_detail">S&P Analyzer</div>
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
                  <div
                    className="speaker-block_one-pattern"
                    style={speakersPattern2}
                  ></div>
                  <div className="speaker-block_one-social">
                    <span className="speaker-block_one-share fa-solid fa-share-nodes fa-fw"></span>
                    <div className="speaker-block_one-social-list">
                      <a
                        href="https://facebook.com/"
                        className="facebook fa-brands fa-facebook-f"
                      ></a>
                      <a
                        href="https://youtube.com/"
                        className="youtube fa-brands fa-youtube"
                      ></a>
                      <a
                        href="https://twitter.com/"
                        className="twitter fa-brands fa-twitter"
                      ></a>
                    </div>
                  </div>
                </div>
                <div className="speaker-block_one-content">
                  <h4 className="speaker-one_title">
                    <a href="speaker-detail.html">Angelina Holy</a>
                  </h4>
                  <div className="speaker-one_detail">Maxii&apos;s Manager</div>
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
                  <div
                    className="speaker-block_one-pattern"
                    style={speakersPattern2}
                  ></div>
                  <div className="speaker-block_one-social">
                    <span className="speaker-block_one-share fa-solid fa-share-nodes fa-fw"></span>
                    <div className="speaker-block_one-social-list">
                      <a
                        href="https://facebook.com/"
                        className="facebook fa-brands fa-facebook-f"
                      ></a>
                      <a
                        href="https://youtube.com/"
                        className="youtube fa-brands fa-youtube"
                      ></a>
                      <a
                        href="https://twitter.com/"
                        className="twitter fa-brands fa-twitter"
                      ></a>
                    </div>
                  </div>
                </div>
                <div className="speaker-block_one-content">
                  <h4 className="speaker-one_title">
                    <a href="speaker-detail.html">Matthew White</a>
                  </h4>
                  <div className="speaker-one_detail">
                    Facebook&apos;s Co-Founder
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
                  <div
                    className="speaker-block_one-pattern"
                    style={speakersPattern2}
                  ></div>
                  <div className="speaker-block_one-social">
                    <span className="speaker-block_one-share fa-solid fa-share-nodes fa-fw"></span>
                    <div className="speaker-block_one-social-list">
                      <a
                        href="https://facebook.com/"
                        className="facebook fa-brands fa-facebook-f"
                      ></a>
                      <a
                        href="https://youtube.com/"
                        className="youtube fa-brands fa-youtube"
                      ></a>
                      <a
                        href="https://twitter.com/"
                        className="twitter fa-brands fa-twitter"
                      ></a>
                    </div>
                  </div>
                </div>
                <div className="speaker-block_one-content">
                  <h4 className="speaker-one_title">
                    <a href="speaker-detail.html">Michael Dover</a>
                  </h4>
                  <div className="speaker-one_detail">Starbuck&apos;s CEO</div>
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
                  <div
                    className="speaker-block_one-pattern"
                    style={speakersPattern2}
                  ></div>
                  <div className="speaker-block_one-social">
                    <span className="speaker-block_one-share fa-solid fa-share-nodes fa-fw"></span>
                    <div className="speaker-block_one-social-list">
                      <a
                        href="https://facebook.com/"
                        className="facebook fa-brands fa-facebook-f"
                      ></a>
                      <a
                        href="https://youtube.com/"
                        className="youtube fa-brands fa-youtube"
                      ></a>
                      <a
                        href="https://twitter.com/"
                        className="twitter fa-brands fa-twitter"
                      ></a>
                    </div>
                  </div>
                </div>
                <div className="speaker-block_one-content">
                  <h4 className="speaker-one_title">
                    <a href="speaker-detail.html">Janet Jones</a>
                  </h4>
                  <div className="speaker-one_detail">
                    Newyork Post&apos;s GM
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
                  <div
                    className="speaker-block_one-pattern"
                    style={speakersPattern2}
                  ></div>
                  <div className="speaker-block_one-social">
                    <span className="speaker-block_one-share fa-solid fa-share-nodes fa-fw"></span>
                    <div className="speaker-block_one-social-list">
                      <a
                        href="https://facebook.com/"
                        className="facebook fa-brands fa-facebook-f"
                      ></a>
                      <a
                        href="https://youtube.com/"
                        className="youtube fa-brands fa-youtube"
                      ></a>
                      <a
                        href="https://twitter.com/"
                        className="twitter fa-brands fa-twitter"
                      ></a>
                    </div>
                  </div>
                </div>
                <div className="speaker-block_one-content">
                  <h4 className="speaker-one_title">
                    <a href="speaker-detail.html">Jane Hamilton</a>
                  </h4>
                  <div className="speaker-one_detail">Starbuck&apos;s CEO</div>
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
                  <div
                    className="speaker-block_one-pattern"
                    style={speakersPattern2}
                  ></div>
                  <div className="speaker-block_one-social">
                    <span className="speaker-block_one-share fa-solid fa-share-nodes fa-fw"></span>
                    <div className="speaker-block_one-social-list">
                      <a
                        href="https://facebook.com/"
                        className="facebook fa-brands fa-facebook-f"
                      ></a>
                      <a
                        href="https://youtube.com/"
                        className="youtube fa-brands fa-youtube"
                      ></a>
                      <a
                        href="https://twitter.com/"
                        className="twitter fa-brands fa-twitter"
                      ></a>
                    </div>
                  </div>
                </div>
                <div className="speaker-block_one-content">
                  <h4 className="speaker-one_title">
                    <a href="speaker-detail.html">Jenson Button</a>
                  </h4>
                  <div className="speaker-one_detail">Softer Manager</div>
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
                  <div
                    className="speaker-block_one-pattern"
                    style={speakersPattern2}
                  ></div>
                  <div className="speaker-block_one-social">
                    <span className="speaker-block_one-share fa-solid fa-share-nodes fa-fw"></span>
                    <div className="speaker-block_one-social-list">
                      <a
                        href="https://facebook.com/"
                        className="facebook fa-brands fa-facebook-f"
                      ></a>
                      <a
                        href="https://youtube.com/"
                        className="youtube fa-brands fa-youtube"
                      ></a>
                      <a
                        href="https://twitter.com/"
                        className="twitter fa-brands fa-twitter"
                      ></a>
                    </div>
                  </div>
                </div>
                <div className="speaker-block_one-content">
                  <h4 className="speaker-one_title">
                    <a href="speaker-detail.html">Harnold Min</a>
                  </h4>
                  <div className="speaker-one_detail">Starbuck&apos;s CEO</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
