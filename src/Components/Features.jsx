import "../Feature.css";

import featureImg1 from "../assets/images/icons/circle-pink.png";
import featureImg2 from "../assets/images/icons/circle-icon-one.png";
import featureImg3 from "../assets/images/icons/events-bg.png";

import featureIcon1 from "../assets/images/icons/Newicons/childrenActivities.png";
import featureIcon2 from "../assets/images/icons/Newicons/authorsCorner.png";
import featureIcon3 from "../assets/images/icons/Newicons/culturalActivities.png";
import featureIcon4 from "../assets/images/icons/Newicons/workshop.png";
import featureIcon5 from "../assets/images/icons/event-icon-2.png";
import featureIcon6 from "../assets/images/icons/Newicons/international.png";
import { Link } from "react-router-dom";

export default function Features() {
  const featureData = [
    {
      icon: featureIcon1,
      title: "Children Activities",
      text: "A dedicated space promoting children's literature and the joy of reading through storytelling, workshops, panel discussions, quizzes, and contests.",
    },
    {
      icon: featureIcon2,
      title: "Authors Corner",
      text: "A hub for literary enthusiasts with engaging dialogues, panel discussions, book launches, and lively interactions with renowned authors.",
    },
    {
      icon: featureIcon3,
      title: "Cultural Activities",
      text: "Experience cultural presentations from acclaimed bands and artists representing diverse Indian states and the vibrant city of Mumbai.",
    },
    {
      icon: featureIcon4,
      title: "Film Festival",
      text: "An open-to-all showcase of educative short films, particularly designed to captivate young audiences.",
    },
    {
      icon: featureIcon5,
      title: "Workshop Stage",
      text: "Hands-on workshops featuring live culinary demonstrations, theatre sessions, and other engaging activities.",
    },
    {
      icon: featureIcon6,
      title: "International Authors Meet",
      text: "A unique opportunity to interact with celebrated international authors, fostering global literary exchanges.",
    },
  ];

  const featurePattern1 = {
    backgroundImage: `url(${featureImg1})`,
    backgroundSize: "cover",
  };

  const featurePattern2 = {
    backgroundImage: `url(${featureImg2})`,
    backgroundSize: "cover",
  };

  const featurePattern3 = {
    backgroundImage: `url(${featureImg3})`,
    backgroundSize: "cover",
  };

  return (
    <>
      <section className="event-feature-section">
        {/* Circle Layers */}
        <div className="circle-layer" style={featurePattern1}></div>
        <div className="circle-layer-two" style={featurePattern2}></div>
        <div className="circle-layer-three" style={featurePattern3}></div>

        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title centered">
            <div className="sec-title_title">Highlights</div>
            <h2 className="sec-title_heading">What&apos;s New</h2>
          </div>

          {/* Grid Container */}
          <div className="feature-grid">
            {/* Event Feature Blocks */}
            {featureData.map((feature, index) => (
              <div key={index} className="event-feature-block">
                <div className="inner-box">
                  <div className="left-border"></div>
                  <div className="top-border"></div>
                  <div className="right-border"></div>
                  <div className="bottom-border"></div>
                  <div className="icon-box">
                    <span className="icon">
                      <img src={feature.icon} alt="" />
                    </span>
                  </div>
                  <h4>
                    <Link to="/">{feature.title}</Link>
                  </h4>
                  <div className="text">{feature.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
