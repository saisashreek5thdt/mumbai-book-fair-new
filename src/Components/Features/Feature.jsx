/* eslint-disable react/prop-types */
import "./Features.css";

export default function Feature({ icon, title, text }) {

  return (
    <div className="feature-item">
      <img src={icon} alt={title} className="feature-icon" />
      <h3 className="feature-title">{title}</h3>
      <p className="feature-text">{text}</p>
    </div>
  );
}
