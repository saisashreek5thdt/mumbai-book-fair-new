import React from 'react';
import featureImg1 from "../assets/images/icons/circle-pink.png";
import featureImg2 from "../assets/images/icons/circle-icon-one.png";
import featureImg3 from "../assets/images/icons/events-bg.png";

import featureIcon1 from "../assets/images/icons/Newicons/childrenActivities.png";
import featureIcon2 from "../assets/images/icons/Newicons/authorsCorner.png";
import featureIcon3 from "../assets/images/icons/Newicons/culturalActivities.png";
import featureIcon4 from "../assets/images/icons/Newicons/workshop.png";
import featureIcon5 from "../assets/images/icons/event-icon-2.png";
import featureIcon6 from "../assets/images/icons/Newicons/international.png";

export default function Features() {
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
            <h2 className="sec-title_heading">What's New</h2>
          </div>

          {/* Grid Container */}
          <div className="feature-grid">
            {/* Event Feature Blocks */}
            {[
              {
                icon: featureIcon1,
                title: "Children Activities",
                text: "A dedicated space promoting children's literature and the joy of reading through storytelling, workshops, panel discussions, quizzes, and contests."
              },
              {
                icon: featureIcon2,
                title: "Authors Corner",
                text: "A hub for literary enthusiasts with engaging dialogues, panel discussions, book launches, and lively interactions with renowned authors."
              },
              {
                icon: featureIcon3,
                title: "Cultural Activities",
                text: "Experience cultural presentations from acclaimed bands and artists representing diverse Indian states and the vibrant city of Mumbai."
              },
              {
                icon: featureIcon4,
                title: "Film Festival",
                text: "An open-to-all showcase of educative short films, particularly designed to captivate young audiences."
              },
              {
                icon: featureIcon5,
                title: "Workshop Stage",
                text: "Hands-on workshops featuring live culinary demonstrations, theatre sessions, and other engaging activities."
              },
              {
                icon: featureIcon6,
                title: "International Authors Meet",
                text: "A unique opportunity to interact with celebrated international authors, fostering global literary exchanges."
              }
            ].map((feature, index) => (
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
                    <a href="development.html">{feature.title}</a>
                  </h4>
                  <div className="text">{feature.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .event-feature-section {
          position: relative;
          padding: 60px 0;
          overflow: hidden;
        }

        /* Circle Layer Styles */
        .circle-layer {
          position: absolute;
          right: -200px;
          top: -180px;
          width: 400px;
          height: 400px;
          background-repeat: no-repeat;
          z-index: 1; /* Ensure it's behind the text */
        }

        .circle-layer-two {
          position: relative;
          left: -150px;
          top: 170px;
          width: 300px;
          height: 300px;
          background-repeat: no-repeat;
          z-index: 1;
        }

        .circle-layer-three {
          position: absolute;
          right: -150px;
          bottom: -130px;
          width: 300px;
          height: 300px;
          background-repeat: no-repeat;
          z-index: 1;
        }

        .sec-title {
          position: relative;
          z-index: 2; /* Ensure text is above the circle layer */
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(2, auto);
          gap: 20px;
          position: relative;
          z-index: 2; /* Ensure grid is above the circle layer */
        }

        .event-feature-block {
          width: 100%;
        }

        .inner-box {
          position: relative;
          text-align: center;
          padding: 30px 20px;
          background: #ffffff;
          border-radius: 8px;
          transition: all 0.3s ease;
          height: 100%;
        }

        .left-border, .right-border {
          position: absolute;
          top: 0;
          width: 2px;
          height: 100%;
          background: #e6007e;
        }

        .left-border { left: 0; }
        .right-border { right: 0; }

        .top-border, .bottom-border {
          position: absolute;
          left: 0;
          width: 100%;
          height: 2px;
          background: #e6007e;
        }

        .top-border { top: 0; }
        .bottom-border { bottom: 0; }

        .icon-box {
          margin-bottom: 15px;
        }

        .icon-box img {
          width: 50px;
          height: auto;
        }

        h4 {
          margin-bottom: 10px;
          font-size: 18px;
        }

        .text {
          font-size: 14px;
          line-height: 1.6;
        }

        /* Media Queries for Responsive Design */
        @media (max-width: 992px) {
          .feature-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .circle-layer {
            right: -250px;
            top: -200px;
          }

          .circle-layer-two {
            left: -200px;
            top: 200px;
          }

          .circle-layer-three {
            right: -200px;
            bottom: -150px;
          }
        }

        @media (max-width: 768px) {
          .event-feature-section {
            padding: 40px 0;
          }

          .inner-box {
            padding: 20px 15px;
          }

          h4 {
            font-size: 16px;
          }

          .text {
            font-size: 13px;
          }
        }

        @media (max-width: 576px) {
          .feature-grid {
            grid-template-columns: 1fr;
          }

          .circle-layer {
            right: -300px;
            top: -250px;
            z-index: 0; /* Move the circle behind the text */
          }

          .circle-layer-two {
            left: -250px;
            top: 250px;
          }

          .circle-layer-three {
            right: -250px;
            bottom: -200px;
          }

          .icon-box img {
            width: 40px;
          }

          h4 {
            font-size: 14px;
          }

          .text {
            font-size: 12px;
          }
        }
      `}</style>
    </>
  );
}