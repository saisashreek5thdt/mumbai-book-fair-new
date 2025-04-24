/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Highlights.css";

export default function Highlights({ icon, title, text }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <section className="highlights">
        <div
          className="book"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsHovered(!isHovered)}
        >
          <div
            className="book-cover"
            style={{ transform: isHovered ? "rotateY(180deg) scale(0.9)" : "" }}
          >
            <div>
              <h1>
                <img className="icon-image" src={icon} alt="icon" />
              </h1>
              <div className="separator"></div>
              <h2>{title}</h2>
            </div>
          </div>
          <div className="book-content">
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
        </div>
      </section>
    </>
  );
}
