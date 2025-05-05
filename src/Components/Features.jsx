import { useEffect } from "react";
import "../Feature.css";

import featureImg1 from "../assets/images/icons/circle-pink.png";
//import featureImg2 from "../assets/images/icons/circle-icon-one.png";
import featureImg3 from "../assets/images/icons/events-bg.png";

import featureIcon1 from "../assets/images/icons/original/children.png";
import featureIcon2 from "../assets/images/icons/original/author.png";
import featureIcon3 from "../assets/images/icons/original/cultural.png";
import featureIcon4 from "../assets/images/icons/original/film.png";
import featureIcon5 from "../assets/images/icons/original/workshops.png";
import featureIcon6 from "../assets/images/icons/original/business.png";

//import Feature from "./Features/Feature";
import Highlights from "./Features/Highlights";
import FeatureNew from "./Features/FeatureNew";

export default function Features() {
  const featureData = [
    {
      icon: featureIcon1,
      title: "Children Activities",
      text: "A dedicated space promoting children's literature and the joy of reading through storytelling, workshops, panel discussions, quizzes, and contests.",
      imagePosition: "right",
    },
    {
      icon: featureIcon2,
      title: "Authors Corner",
      text: "A hub for literary enthusiasts with engaging dialogues, panel discussions, book launches, and lively interactions with renowned authors.",
      imagePosition: "left",
    },
    {
      icon: featureIcon3,
      title: "Cultural Activities",
      text: "Experience captivating cultural performances by acclaimed artists, bands, and singers, showcasing the rich diversity of Indian states and cultures.",
      imagePosition: "right",
    },
    {
      icon: featureIcon4,
      title: "Film Festival",
      text: "An open-to-all showcase of educational short films, specially curated to engage and captivate young audiences.",
      imagePosition: "left",
    },
    {
      icon: featureIcon5,
      title: "Workshops",
      text: "Interactive workshops featuring live culinary demonstrations, theatre sessions, handicrafts, and other engaging activities for a hands-on experience.",
      imagePosition: "right",
    },
    {
      icon: featureIcon6,
      title: "Business Meet",
      text: "A unique platform to meet and interact with fellow trade visitors, fostering global literary exchanges and business opportunities.",
      imagePosition: "left",
    },
  ];

  const featurePattern1 = {
    backgroundImage: `url(${featureImg1})`,
    backgroundSize: "cover",
  };

  // const featurePattern2 = {
  //   backgroundImage: `url(${featureImg2})`,
  //   backgroundSize: "cover",
  // };

  const featurePattern3 = {
    backgroundImage: `url(${featureImg3})`,
    backgroundSize: "cover",
  };

  useEffect(() => {
    // Trigger animations by adding a class to the feature grid
    const featureGrid = document.querySelector(".feature-grid");
    if (featureGrid) {
      featureGrid.classList.add("animate");
    }
  }, []);

  return (
    <>
      <section className="event-feature-section">
        {/* Circle Layers */}
        <div className="circle-layer" style={featurePattern1}></div>
        {/* <div className="circle-layer-two" style={featurePattern2}></div> */}
        <div className="circle-layer-three" style={featurePattern3}></div>

        <div className="auto-container">
          {/* Sec Title */}
          <div className="sec-title centered">
            <div className="sec-title_title">Highlights</div>
            <h2 className="sec-title_heading">Activities</h2>
          </div>

          {/* Grid Container */}
          <div className="feature-grid">
            {/* {featureData.map((feature, index) => (
              <Feature
                key={index}
                icon={feature.icon}
                title={feature.title}
                text={feature.text}
                imagePosition={feature.imagePosition}
              />
            ))} */}
            {featureData.map((feature, index) => (
              <Highlights
                key={index}
                icon={feature.icon}
                title={feature.title}
                text={feature.text}
              />
            ))}            
          </div>
          <FeatureNew />
        </div>
      </section>
    </>
  );
}
