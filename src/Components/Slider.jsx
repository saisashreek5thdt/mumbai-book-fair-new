import { useEffect, useState } from "react";
import imageUrl1 from "../assets/images/main-slider/image-1.jpg";
import imageUrl2 from "../assets/images/main-slider/2.jpg";
import imageUrl3 from "../assets/images/main-slider/13.jpg";
import imageUrl4 from "../assets/images/main-slider/Img1.jpg";
import imageUrl5 from "../assets/images/main-slider/Img2.jpg";
import pattern1 from "../assets/images/main-slider/pattern-1.png";
import pattern2 from "../assets/images/main-slider/pattern-2.png";
import "../App.css";
export default function Slider() {
  const [countdown, setCountdown] = useState({
    days: "0",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // Set the event date (April 4, 2025)
    const eventDate = new Date("2025-04-04T00:00:00").getTime();

    // Function to update the countdown
    const updateCountdown = () => {
      const now = new Date().getTime();
      const timeDifference = eventDate - now;

      if (timeDifference <= 0) {
        // If the event date has passed, stop the countdown
        setCountdown({
          days: "0",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        clearInterval(interval);
        return;
      }

      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      // Update the state with the calculated values
      setCountdown({
        days: String(days),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    // Initial call to display the countdown immediately
    updateCountdown();

    // Update the countdown every second
    const interval = setInterval(updateCountdown, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* <!-- Slider One --> */}
      <section className="slider-one">
        <div
          className="slider-one_pattern-two"
          style={{ backgroundImage: `url(${pattern2})` }}
        ></div>
        <div className="main-slider-carousel owl-carousel owl-theme">
          {/* <!-- Slide 01 --> */}
          <div className="slider-one_slide">
            <div
              className="slider-one_image-layer"
              style={{ backgroundImage: `url(${imageUrl1})` }}
            ></div>
            <div
              className="slider-one_pattern"
              style={{ backgroundImage: `url(${pattern1})` }}
            ></div>
            <div className="auto-container">
              {/* <!-- Content Column --> */}
              <div className="slider-one_content">
                <div className="slider-one_content-inner">
                  <div className="slider-one_title">
                    National Book Trust, India
                  </div>
                  <div className="slider-one_date">
                    <span>04</span> April 2025 <br />
                    AZAD MAIDAN, MUMBAI, INDIA
                  </div>
                  {/* <h1 className="slider-one_heading">Patna <br/> Book Fair</h1> */}
                  <h1 className="slider-one_heading">
                    {" "}
                    CELEBRATING THE <br /> POWER OF WORDS
                  </h1>
                  <div className="slider-one_buttons">
                    <a href="#register" className="theme-btn btn-style-one">
                      <span className="btn-wrap">
                        <span className="text-one">Register now</span>
                        <span className="text-two">Register now</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Slide 01 --> */}

          {/* <!-- Slide 02 --> */}
          <div className="slider-one_slide">
            <div
              className="slider-one_image-layer"
              style={{ backgroundImage: `url(${imageUrl2})` }}
            ></div>
            <div
              className="slider-one_pattern"
              style={{ backgroundImage: `url(${pattern1})` }}
            ></div>
            <div className="auto-container">
              {/* <!-- Content Column --> */}
              <div className="slider-one_content">
                <div className="slider-one_content-inner">
                  {/* <div className="slider-one_title">A Journey Through The Books</div> */}
                  <div className="slider-one_title">
                    National Book Trust, India
                  </div>
                  <div className="slider-one_date">
                    <span>05</span> April 2025 <br />
                    AZAD MAIDAN, MUMBAI, INDIA
                  </div>
                  {/* <h1 className="slider-one_heading">Patna <br/> Book Fair</h1> */}
                  <h1 className="slider-one_heading">
                    {" "}
                    CELEBRATING THE <br /> POWER OF WORDS
                  </h1>
                  <div className="slider-one_buttons">
                    <a href="#register" className="theme-btn btn-style-one">
                      <span className="btn-wrap">
                        <span className="text-one">Register now</span>
                        <span className="text-two">Register now</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Slide 02 --> */}

          {/* <!-- Slide 03 --> */}
          <div className="slider-one_slide">
            <div
              className="slider-one_image-layer"
              style={{ backgroundImage: `url(${imageUrl3})` }}
            ></div>
            <div
              className="slider-one_pattern"
              style={{ backgroundImage: `url(${pattern1})` }}
            ></div>
            <div className="auto-container">
              {/* <!-- Content Column --> */}
              <div className="slider-one_content">
                <div className="slider-one_content-inner">
                  <div className="slider-one_title">
                    National Book Trust, India
                  </div>
                  <div className="slider-one_date">
                    <span>06</span> April 2025 <br />
                    AZAD MAIDAN, MUMBAI, INDIA
                  </div>
                  {/* <h1 className="slider-one_heading">Patna <br/> Book Fair</h1> */}
                  <h1 className="slider-one_heading">
                    {" "}
                    CELEBRATING THE <br /> POWER OF WORDS
                  </h1>
                  <div className="slider-one_buttons">
                    <a href="#register" className="theme-btn btn-style-one">
                      <span className="btn-wrap">
                        <span className="text-one">Register now</span>
                        <span className="text-two">Register now</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Slide 03 --> */}

          {/* <!-- Slide 04 --> */}
          <div className="slider-one_slide">
            <div
              className="slider-one_image-layer"
              style={{ backgroundImage: `url(${imageUrl4})` }}
            ></div>
            <div
              className="slider-one_pattern"
              style={{ backgroundImage: `url(${pattern1})` }}
            ></div>
            <div className="auto-container">
              {/* <!-- Content Column --> */}
              <div className="slider-one_content">
                <div className="slider-one_content-inner">
                  <div className="slider-one_title">
                    National Book Trust, India
                  </div>
                  <div className="slider-one_date">
                    <span>07</span> April 2025 <br />
                    AZAD MAIDAN, MUMBAI, INDIA
                  </div>
                  {/* <h1 className="slider-one_heading">Patna <br/> Book Fair</h1> */}
                  <h1 className="slider-one_heading">
                    {" "}
                    CELEBRATING THE <br /> POWER OF WORDS
                  </h1>
                  <div className="slider-one_buttons">
                    <a href="#register" className="theme-btn btn-style-one">
                      <span className="btn-wrap">
                        <span className="text-one">Register now</span>
                        <span className="text-two">Register now</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Slide 04 --> */}

          {/* <!-- Slide 05 --> */}
          <div className="slider-one_slide">
            <div
              className="slider-one_image-layer"
              style={{ backgroundImage: `url(${imageUrl5})` }}
            ></div>
            <div
              className="slider-one_pattern"
              style={{ backgroundImage: `url(${pattern1})` }}
            ></div>
            <div className="auto-container">
              {/* <!-- Content Column --> */}
              <div className="slider-one_content">
                <div className="slider-one_content-inner">
                  <div className="slider-one_title">
                    National Book Trust, India
                  </div>
                  <div className="slider-one_date">
                    <span>08</span> April 2025 <br />
                    AZAD MAIDAN, MUMBAI, INDIA
                  </div>
                  {/* <h1 className="slider-one_heading">Patna <br/> Book Fair</h1> */}
                  <h1 className="slider-one_heading">
                    {" "}
                    CELEBRATING THE <br /> POWER OF WORDS
                  </h1>
                  <div className="slider-one_buttons">
                    <a href="#register" className="theme-btn btn-style-one">
                      <span className="btn-wrap">
                        <span className="text-one">Register now</span>
                        <span className="text-two">Register now</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End Slide 05 --> */}
        </div>

        {/* Timer Divs */}
        <div className="timer-container">
          <div className="timer-box">
            <span id="days" className="time-value">
              {countdown.days}
            </span>
            <div className="time-label">Days</div>
          </div>
          <div className="timer-box">
            <span id="hours" className="time-value">
              {countdown.hours}
            </span>
            <div className="time-label">Hours</div>
          </div>
          <div className="timer-box">
            <span id="minutes" className="time-value">
              {countdown.minutes}
            </span>
            <div className="time-label">Minutes</div>
          </div>
          <div className="timer-box">
            <span id="seconds" className="time-value">
              {countdown.seconds}
            </span>
            <div className="time-label">Seconds</div>
          </div>
        </div>
      </section>
      {/* <!-- End Main Slider Section --> */}
    </>
  );
}
