import sliderPatternImg1 from "../assets/images/main-slider/pattern-1.png";
import sliderPatternImg2 from "../assets/images/main-slider/pattern-2.png";
import sliderImg1 from "../assets/images/main-slider/image-1.jpg";
import { Link } from "react-router-dom";

export default function Slider() {

    const sliderBGPattern1 = {
        backgroundImage: `url(${sliderPatternImg1})`,
        backgroundSize: "cover",
    }

    const sliderBGPattern2 = {
        backgroundImage: `url(${sliderPatternImg2})`,
        backgroundSize: "cover",
    }

    const sliderBG1 = {
        backgroundImage: `url(${sliderImg1})`,
        backgroundSize: "cover",
    }

  return (
    <>
      <section className="slider-one">
        <div
          className="slider-one_pattern-two"
          style={sliderBGPattern2}
        ></div>
        <div className="main-slider-carousel owl-carousel owl-theme">
          {/* Slide 01 */}
          <div className="slider-one_slide">
            <div
              className="slider-one_image-layer"
              style={sliderBG1}
            ></div>
            <div
              className="slider-one_pattern"
              style={sliderBGPattern1}
            ></div>
            <div className="auto-container">
              {/* Content Column */}
              <div className="slider-one_content">
                <div className="slider-one_content-inner">
                  <div className="slider-one_title">
                    North Harond Boston, Canada
                  </div>
                  <div className="slider-one_date">
                    <span>25</span> March <br />
                    2024
                  </div>
                  <h1 className="slider-one_heading">
                    Creatives <br />
                    Reunion in Boston
                  </h1>
                  <div className="slider-one_buttons">
                    <Link to="/" className="theme-btn btn-style-one">
                      <span className="btn-wrap">
                        <span className="text-one">Registration now</span>
                        <span className="text-two">Registration now</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Slide 01 */}

          {/* Slide 02 */}
          <div className="slider-one_slide">
            <div
              className="slider-one_image-layer"
              style={sliderBG1}
            ></div>
            <div
              className="slider-one_pattern"
              style={sliderBGPattern1}
            ></div>
            <div className="auto-container">
              {/* Content Column */}
              <div className="slider-one_content">
                <div className="slider-one_content-inner">
                  <div className="slider-one_title">
                    North Harond Boston, Canada
                  </div>
                  <div className="slider-one_date">
                    <span>25</span> March <br />
                    2024
                  </div>
                  <h1 className="slider-one_heading">
                    Creatives <br />
                    Reunion in Boston
                  </h1>
                  <div className="slider-one_buttons">
                    <Link to="/" className="theme-btn btn-style-one">
                      <span className="btn-wrap">
                        <span className="text-one">Registration now</span>
                        <span className="text-two">Registration now</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Slide 02 */}

          {/* Slide 03 */}
          <div className="slider-one_slide">
            <div
              className="slider-one_image-layer"
              style={sliderBG1}
            ></div>
            <div
              className="slider-one_pattern"
              style={sliderBGPattern1}
            ></div>
            <div className="auto-container">
              {/* Content Column */}
              <div className="slider-one_content">
                <div className="slider-one_content-inner">
                  <div className="slider-one_title">
                    North Harond Boston, Canada
                  </div>
                  <div className="slider-one_date">
                    <span>25</span> March <br />
                    2024
                  </div>
                  <h1 className="slider-one_heading">
                    Creatives <br />
                    Reunion in Boston
                  </h1>
                  <div className="slider-one_buttons">
                    <Link to="/" className="theme-btn btn-style-one">
                      <span className="btn-wrap">
                        <span className="text-one">Registration now</span>
                        <span className="text-two">Registration now</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Slide 03 */}
        </div>
      </section>
    </>
  );
}
