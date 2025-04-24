/* eslint-disable react/prop-types */
import "./Features.css";

export default function Feature({ icon, title, text, imagePosition }) {
  // Determine the grid layout based on imagePosition
  const featureSectionClass =
    imagePosition === "left" ? "feature-section flip" : "feature-section";

  return (
    <div className={featureSectionClass}>
      {/* Content (Title and Description) */}
      <div className="content">
        <div className="icon-container">
          <div className="icon"></div>
        </div>
        <div className="text">
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
      </div>

      {/* Image */}
      <div className="image">
        <img src={icon} alt={title} />
      </div>
    </div>
  );
}