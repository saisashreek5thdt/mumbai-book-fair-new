import speakImg1 from "../../assets/images/background/pattern-27.png";
import speakImg2 from "../../assets/images/resource/team-2.jpg";

export default function SpeakerInfo() {
  const speakerBG1 = {
    backgroundImage: `url(${speakImg1})`,
    backgroundSize: "cover",
  };

  return (
    <>
      <section className="speaker-detail">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Author Column */}
            <div className="speaker-detail_author-column col-lg-4 col-md-6 col-sm-12">
              <div className="speaker-detail_author-inner">
                <div
                  className="speaker-detail_author-pattern"
                  style={speakerBG1}
                ></div>
                <div className="speaker-detail_author-image">
                  <img src={speakImg2} alt="" />
                  <div className="speaker-detail_social-list">
                    <a
                      href="https://facebook.com/"
                      className="facebook fa-brands fa-facebook-f"
                    ></a>
                    <a
                      href="https://twitter.com/"
                      className="twitter fa-brands fa-twitter"
                    ></a>
                    <a
                      href="https://instagram.com/"
                      className="youtube fa-brands fa-instagram"
                    ></a>
                    <a
                      href="https://youtube.com/"
                      className="youtube fa-brands fa-youtube"
                    ></a>
                  </div>
                </div>
                <div className="speaker-detail_author-content">
                  <h4 className="speaker-detail_title">
                    <a href="team-detail">Matthew White</a>
                  </h4>
                  <div className="speaker-detail_designation">
                    Facebook&apos;s Co-Founder
                  </div>
                </div>
              </div>
            </div>
            {/* Content Column */}
            <div className="content-column col-lg-8 col-md-12 col-sm-12">
              <h2 className="speaker-detail_subtitle">Personal Information</h2>
              <p>
                Anna assumed the role of Chief Product Officer in July 2017 and
                leads the product team, which designs, builds and optimizes the
                Netflix experience. Previously, Anna was International
                Development Officer for Netflix, responsible for the global
                partnerships with consumer electronics.
              </p>
              <p>
                Prior to joining Netflix in 2008, Anna was senior vice president
                of consumer electronics products for Macrovision Solutions Corp.
                (later renamed to Rovi Corporation) and previously held
                positions at digital entertainment software provider, Mediabolic
                Inc., Red Hat Network, the provider of Linux and Open Source
                technology, and online vendor Wine.
              </p>
              <h3 className="speaker-detail_subtitle">Contact info</h3>
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <ul className="speaker-detail_info">
                    <li>
                      <span>Speciality:</span> Product Designer
                    </li>
                    <li>
                      <span>Experience:</span> 10 Years
                    </li>
                    <li>
                      <span>Phone:</span> 700.123.456.789
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12">
                  <ul className="speaker-detail_info">
                    <li>
                      <span>Company:</span> Netflix
                    </li>
                    <li>
                      <span>Email:</span> angelina888@mail.com
                    </li>
                    <li>
                      <span>Fax:</span> 700.123.456.789
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
