import "./FeatureNew.css";
import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import featureIcon1 from "../../assets/images/icons/original/children-activities.png";
import featureIcon2 from "../../assets/images/icons/original/authors-corner-activities.png";
import featureIcon3 from "../../assets/images/icons/original/cultural-activities.png";
import featureIcon4 from "../../assets/images/icons/original/film-festival-activities.png";
import featureIcon5 from "../../assets/images/icons/original/workshop-activities.png";
import featureIcon6 from "../../assets/images/icons/original/business-meet-activities.png";

const sliderData = [
  {
    image: featureIcon1,
    title: "Children Activities",
    text: "A dedicated space promoting children's literature and the joy of reading through storytelling, workshops, panel discussions, quizzes, and contests.",
  },
  {
    image: featureIcon2,
    title: "Authors Corner",
    text: "A hub for literary enthusiasts with engaging dialogues, panel discussions, book launches, and lively interactions with renowned authors.",
  },
  {
    image: featureIcon3,
    title: "Cultural Activities",
    text: "Experience captivating cultural performances by acclaimed artists, bands, and singers, showcasing the rich diversity of Indian states and cultures.",
  },
  {
    image: featureIcon4,
    title: "Film Festival",
    text: "An open-to-all showcase of educational short films, specially curated to engage and captivate young audiences.",
  },
  {
    image: featureIcon5,
    title: "Workshops",
    text: "Interactive workshops featuring live culinary demonstrations, theatre sessions, handicrafts, and other engaging activities for a hands-on experience.",
  },
  {
    image: featureIcon6,
    title: "Business Meet",
    text: "A unique platform to meet and interact with fellow trade visitors, fostering global literary exchanges and business opportunities.",
  },
];

export default function FeatureNew() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderData.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + sliderData.length) % sliderData.length
    );
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="feature-new-section">
      <div className="feature-new-grid">
        {/* Image & Arrows */}
        <div className="carousel-image-container">
          <img
            src={sliderData[currentIndex].image}
            alt={sliderData[currentIndex].title}
            className="carousel-icon"
          />
          <button className="carousel-arrow left" onClick={handlePrev}>
            <FiChevronLeft />
          </button>
          <button className="carousel-arrow right" onClick={handleNext}>
            <FiChevronRight />
          </button>
        </div>

        {/* Text Section */}
        <div className="text-block">
          <h2 className="carousel-heading">{sliderData[currentIndex].title}</h2>
          <p className="carousel-text">{sliderData[currentIndex].text}</p>
        </div>
      </div>
    </section>
  );
}
