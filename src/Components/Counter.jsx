import bgImg1 from "../assets/images/background/1.jpg";

export default function Counter() {
  const counterBGImg = {
    backgroundImage: `url(${bgImg1})`,
    backgroundSize: "cover",
  };

  return (
    <>
      <section className="counter-one">
        <div className="auto-container">
          <div className="inner-container">
            <div className="counter-one_image" style={counterBGImg}></div>
            <div className="row clearfix">
              {/* Counter Column */}
              <div className="counter-one_block col-lg-3 col-md-6 col-sm-12">
                <div className="counter-one_inner">
                  <div className="counter-one_counter">
                    <span className="odometer" data-count="124"></span>+
                  </div>
                  <div className="counter-one_text">Speakers</div>
                </div>
              </div>

              {/* Counter Column */}
              <div className="counter-one_block col-lg-3 col-md-6 col-sm-12">
                <div className="counter-one_inner">
                  <div className="counter-one_counter">
                    <span className="odometer" data-count="1140"></span>
                  </div>
                  <div className="counter-one_text">Attendence</div>
                </div>
              </div>

              {/* Counter Column */}
              <div className="counter-one_block col-lg-3 col-md-6 col-sm-12">
                <div className="counter-one_inner">
                  <div className="counter-one_counter">
                    <span className="odometer" data-count="8"></span>HR
                  </div>
                  <div className="counter-one_text">Workshops</div>
                </div>
              </div>

              {/* Counter Column */}
              <div className="counter-one_block col-lg-3 col-md-6 col-sm-12">
                <div className="counter-one_inner">
                  <div className="counter-one_counter">
                    <span className="odometer" data-count="205"></span>+
                  </div>
                  <div className="counter-one_text">Guests</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
