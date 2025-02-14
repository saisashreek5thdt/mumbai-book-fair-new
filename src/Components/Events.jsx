import eventImg1 from "../assets/images/icons/icon-1.png";
import eventImg2 from "../assets/images/icons/icon-2.png";
import eventImg3 from "../assets/images/icons/icon-3.png";
import eventImg4 from "../assets/images/icons/icon-4.png";
import eventImg5 from "../assets/images/background/pattern-10.png";

import eventTab1 from "../assets/images/background/leadership-1.png";
import eventTab2 from "../assets/images/background/leadership-2.png";
import eventTab3 from "../assets/images/background/leadership-3.png";
import eventTab4 from "../assets/images/background/leadership-4.png";

import leaderImg1 from "../assets/images/resource/leadership-1.jpg";
import leaderImg2 from "../assets/images/resource/leadership-2.jpg";
import leaderImg3 from "../assets/images/resource/leadership-3.jpg";

export default function Events() {
  const eventIcon1 = {
    backgroundImage: `url(${eventImg1})`,
    backgroundSize: "cover",
  };

  const eventIcon2 = {
    backgroundImage: `url(${eventImg2})`,
    backgroundSize: "cover",
  };

  const eventIcon3 = {
    backgroundImage: `url(${eventImg3})`,
    backgroundSize: "cover",
  };

  const eventIcon4 = {
    backgroundImage: `url(${eventImg4})`,
    backgroundSize: "cover",
  };

  const eventPattern1 = {
    backgroundImage: `url(${eventImg5})`,
    backgroundSize: "cover",
  };

  const eventTabImg1 = {
    backgroundImage: `url(${eventTab1})`,
    backgroundSize: "cover",
  };

  const eventTabImg2 = {
    backgroundImage: `url(${eventTab2})`,
    backgroundSize: "cover",
  };

  const eventTabImg3 = {
    backgroundImage: `url(${eventTab3})`,
    backgroundSize: "cover",
  };

  const eventTabImg4 = {
    backgroundImage: `url(${eventTab4})`,
    backgroundSize: "cover",
  };

  return (
    <>
      <section className="leadership-one">
        <div className="leadership-one_icon" style={eventIcon1}></div>
        <div className="leadership-one_icon-two" style={eventIcon2}></div>
        <div className="leadership-one_icon-three" style={eventIcon3}></div>
        <div className="leadership-one_icon-four" style={eventIcon4}></div>
        <div
          className="leadership-one_icon-five"
          data-parallax='{"y" : 100}'
          style={eventPattern1}
        ></div>
        <div className="auto-container">
          <div className="sec-title title-anim centered">
            <div className="sec-title_title">Thought Leadership</div>
            <h2 className="sec-title_heading">
              Join The World&apos;s Leading Companies <br />
              at Technology Conference
            </h2>
          </div>
          {/* Leadership Info Tabs */}
          <div className="leadership-info-tabs">
            {/* Leadership Tabs */}
            <div className="leadership-tabs tabs-box">
              {/* Tab Btns */}
              <ul className="tab-btns tab-buttons clearfix">
                <li
                  data-tab="#event-one"
                  className="tab-btn active-btn"
                  style={eventTabImg1}
                >
                  First Day <span>January 5, 2022</span>
                </li>
                <li
                  data-tab="#event-two"
                  className="tab-btn"
                  style={eventTabImg2}
                >
                  second day <span>January 6, 2022</span>
                </li>
                <li
                  data-tab="#event-three"
                  className="tab-btn"
                  style={eventTabImg3}
                >
                  Thired Day <span>January 7, 2022</span>
                </li>
                <li
                  data-tab="#event-four"
                  className="tab-btn"
                  style={eventTabImg4}
                >
                  Fourth Day <span>January 8, 2022</span>
                </li>
              </ul>

              {/* Tabs Container */}
              <div className="tabs-content">
                {/* Tab / Active Tab */}
                <div className="tab active-tab" id="event-one">
                  <div className="content">
                    {/* Leadership One Ship */}
                    <div className="leadership-one_block">
                      <div className="leadership-one_block-inner">
                        <div className="leadership-one_block-content">
                          <div className="leadership-one_block-image">
                            <img src={leaderImg1} alt="" />
                            <div className="leadership-one_block-icon flaticon-voice"></div>
                          </div>
                          <div className="leadership-one_block-time">
                            9:00 am -- 11:00 am
                          </div>
                          <div className="leadership-one_block-name">
                            Paul Wilson
                          </div>
                          <h3 className="leadership-one_block-title">
                            <a href="speaker-detail.html">
                              Registration For Opening Workshop
                            </a>
                          </h3>
                          <div className="leadership-one_block-text">
                            We’re inviting the top creatives in the tech
                            industry from all over the world to come learn,
                            grow, scrape their knees, try new things, to be
                            vulnerable, and to have epic adventures
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Leadership One Ship / Style Two */}
                    <div className="leadership-one_block style-two">
                      <div className="leadership-one_block-inner">
                        <div className="leadership-one_block-content">
                          <div className="leadership-one_block-image">
                            <img src={leaderImg2} alt="" />
                            <div className="leadership-one_block-icon flaticon-voice"></div>
                          </div>
                          <div className="leadership-one_block-time">
                            9:00 am -- 11:00 am
                          </div>
                          <div className="leadership-one_block-name">
                            Ashli Scroggy
                          </div>
                          <h3 className="leadership-one_block-title">
                            <a href="speaker-detail.html">
                              Modern Marketing Summit Sydney 2024
                            </a>
                          </h3>
                          <div className="leadership-one_block-text">
                            We’re inviting the top creatives in the tech
                            industry from all over the world to come learn,
                            grow, scrape their knees, try new things, to be
                            vulnerable, and to have epic adventures
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Leadership One Ship */}
                    <div className="leadership-one_block">
                      <div className="leadership-one_block-inner">
                        <div className="leadership-one_block-content">
                          <div className="leadership-one_block-image">
                            <img src={leaderImg3} alt="" />
                            <div className="leadership-one_block-icon flaticon-voice"></div>
                          </div>
                          <div className="leadership-one_block-time">
                            9:00 am -- 11:00 am
                          </div>
                          <div className="leadership-one_block-name">
                            Robert Gates
                          </div>
                          <h3 className="leadership-one_block-title">
                            <a href="speaker-detail.html">
                              Introduction About Speakers
                            </a>
                          </h3>
                          <div className="leadership-one_block-text">
                            We’re inviting the top creatives in the tech
                            industry from all over the world to come learn,
                            grow, scrape their knees, try new things, to be
                            vulnerable, and to have epic adventures
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tab */}
                <div className="tab" id="event-two">
                  <div className="content">
                    {/* Leadership One Ship / Style Two */}
                    <div className="leadership-one_block style-two">
                      <div className="leadership-one_block-inner">
                        <div className="leadership-one_block-content">
                          <div className="leadership-one_block-image">
                            <img src={leaderImg2} alt="" />
                            <div className="leadership-one_block-icon flaticon-voice"></div>
                          </div>
                          <div className="leadership-one_block-time">
                            9:00 am -- 11:00 am
                          </div>
                          <div className="leadership-one_block-name">
                            Ashli Scroggy
                          </div>
                          <h3 className="leadership-one_block-title">
                            <a href="speaker-detail.html">
                              Modern Marketing Summit Sydney 2024
                            </a>
                          </h3>
                          <div className="leadership-one_block-text">
                            We’re inviting the top creatives in the tech
                            industry from all over the world to come learn,
                            grow, scrape their knees, try new things, to be
                            vulnerable, and to have epic adventures
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Leadership One Ship */}
                    <div className="leadership-one_block">
                      <div className="leadership-one_block-inner">
                        <div className="leadership-one_block-content">
                          <div className="leadership-one_block-image">
                            <img src={leaderImg3} alt="" />
                            <div className="leadership-one_block-icon flaticon-voice"></div>
                          </div>
                          <div className="leadership-one_block-time">
                            9:00 am -- 11:00 am
                          </div>
                          <div className="leadership-one_block-name">
                            Robert Gates
                          </div>
                          <h3 className="leadership-one_block-title">
                            <a href="speaker-detail.html">
                              Introduction About Speakers
                            </a>
                          </h3>
                          <div className="leadership-one_block-text">
                            We’re inviting the top creatives in the tech
                            industry from all over the world to come learn,
                            grow, scrape their knees, try new things, to be
                            vulnerable, and to have epic adventures
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tab */}
                <div className="tab" id="event-three">
                  <div className="content">
                    {/* Leadership One Ship */}
                    <div className="leadership-one_block">
                      <div className="leadership-one_block-inner">
                        <div className="leadership-one_block-content">
                          <div className="leadership-one_block-image">
                            <img src={leaderImg1} alt="" />
                            <div className="leadership-one_block-icon flaticon-voice"></div>
                          </div>
                          <div className="leadership-one_block-time">
                            9:00 am -- 11:00 am
                          </div>
                          <div className="leadership-one_block-name">
                            Paul Wilson
                          </div>
                          <h3 className="leadership-one_block-title">
                            <a href="speaker-detail.html">
                              Registration For Opening Workshop
                            </a>
                          </h3>
                          <div className="leadership-one_block-text">
                            We’re inviting the top creatives in the tech
                            industry from all over the world to come learn,
                            grow, scrape their knees, try new things, to be
                            vulnerable, and to have epic adventures
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Leadership One Ship / Style Two */}
                    <div className="leadership-one_block style-two">
                      <div className="leadership-one_block-inner">
                        <div className="leadership-one_block-content">
                          <div className="leadership-one_block-image">
                            <img src={leaderImg2} alt="" />
                            <div className="leadership-one_block-icon flaticon-voice"></div>
                          </div>
                          <div className="leadership-one_block-time">
                            9:00 am -- 11:00 am
                          </div>
                          <div className="leadership-one_block-name">
                            Ashli Scroggy
                          </div>
                          <h3 className="leadership-one_block-title">
                            <a href="speaker-detail.html">
                              Modern Marketing Summit Sydney 2024
                            </a>
                          </h3>
                          <div className="leadership-one_block-text">
                            We’re inviting the top creatives in the tech
                            industry from all over the world to come learn,
                            grow, scrape their knees, try new things, to be
                            vulnerable, and to have epic adventures
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Leadership One Ship */}
                    <div className="leadership-one_block">
                      <div className="leadership-one_block-inner">
                        <div className="leadership-one_block-content">
                          <div className="leadership-one_block-image">
                            <img src={leaderImg3} alt="" />
                            <div className="leadership-one_block-icon flaticon-voice"></div>
                          </div>
                          <div className="leadership-one_block-time">
                            9:00 am -- 11:00 am
                          </div>
                          <div className="leadership-one_block-name">
                            Robert Gates
                          </div>
                          <h3 className="leadership-one_block-title">
                            <a href="speaker-detail.html">
                              Introduction About Speakers
                            </a>
                          </h3>
                          <div className="leadership-one_block-text">
                            We’re inviting the top creatives in the tech
                            industry from all over the world to come learn,
                            grow, scrape their knees, try new things, to be
                            vulnerable, and to have epic adventures
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tab */}
                <div className="tab" id="event-four">
                  <div className="content">
                    {/* Leadership One Ship / Style Two */}
                    <div className="leadership-one_block style-two">
                      <div className="leadership-one_block-inner">
                        <div className="leadership-one_block-content">
                          <div className="leadership-one_block-image">
                            <img src={leaderImg2} alt="" />
                            <div className="leadership-one_block-icon flaticon-voice"></div>
                          </div>
                          <div className="leadership-one_block-time">
                            9:00 am -- 11:00 am
                          </div>
                          <div className="leadership-one_block-name">
                            Ashli Scroggy
                          </div>
                          <h3 className="leadership-one_block-title">
                            <a href="speaker-detail.html">
                              Modern Marketing Summit Sydney 2024
                            </a>
                          </h3>
                          <div className="leadership-one_block-text">
                            We’re inviting the top creatives in the tech
                            industry from all over the world to come learn,
                            grow, scrape their knees, try new things, to be
                            vulnerable, and to have epic adventures
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Leadership One Ship */}
                    <div className="leadership-one_block">
                      <div className="leadership-one_block-inner">
                        <div className="leadership-one_block-content">
                          <div className="leadership-one_block-image">
                            <img src={leaderImg3} alt="" />
                            <div className="leadership-one_block-icon flaticon-voice"></div>
                          </div>
                          <div className="leadership-one_block-time">
                            9:00 am -- 11:00 am
                          </div>
                          <div className="leadership-one_block-name">
                            Robert Gates
                          </div>
                          <h3 className="leadership-one_block-title">
                            <a href="speaker-detail.html">
                              Introduction About Speakers
                            </a>
                          </h3>
                          <div className="leadership-one_block-text">
                            We’re inviting the top creatives in the tech
                            industry from all over the world to come learn,
                            grow, scrape their knees, try new things, to be
                            vulnerable, and to have epic adventures
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
