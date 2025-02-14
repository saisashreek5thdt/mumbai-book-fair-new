import priceImg1 from "../assets/images/background/pattern-4.png";
import priceImg2 from "../assets/images/background/price-1.png";
import priceImg3 from "../assets/images/background/price-1-1.png";
import priceImg4 from "../assets/images/background/price-2.png";
import priceImg5 from "../assets/images/background/price-2-1.png";
import priceImg6 from "../assets/images/background/price-3.png";
import priceImg7 from "../assets/images/background/price-3-1.png";

export default function Pricing() {
  const pricePattern1 = {
    backgroundImage: `url(${priceImg1})`,
    backgroundSize: "cover",
  };

  const priceBG1 = {
    backgroundImage: `url(${priceImg2})`,
    backgroundSize: "cover",
  };

  const priceBG2 = {
    backgroundImage: `url(${priceImg3})`,
    backgroundSize: "cover",
  };

  const priceBG3 = {
    backgroundImage: `url(${priceImg4})`,
    backgroundSize: "cover",
  };

  const priceBG4 = {
    backgroundImage: `url(${priceImg5})`,
    backgroundSize: "cover",
  };

  const priceBG5 = {
    backgroundImage: `url(${priceImg6})`,
    backgroundSize: "cover",
  };

  const priceBG6 = {
    backgroundImage: `url(${priceImg7})`,
    backgroundSize: "cover",
  };

  return (
    <>
      <section className="price-one">
        <div className="price-one_pattern" style={pricePattern1}></div>
        <div className="auto-container">
          <div className="sec-title title-anim centered">
            <div className="sec-title_title">Conference Ticket Price</div>
            <h2 className="sec-title_heading">Conference Tickets Now</h2>
          </div>
          <div className="row clearfix">
            {/* Price Block One */}
            <div className="price-block_one col-lg-4 col-md-6 col-sm-12">
              <div
                className="price-block_one-inner wow fadeInLeft"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="price-block_one-pattern" style={priceBG1}></div>
                <div
                  className="price-block_one-pattern-two"
                  style={priceBG2}
                ></div>
                <div className="price-block_one-title">Standard Pass</div>
                <div className="price-block_one-price">
                  $120 <span>1 DAY</span>
                </div>
                <ul className="price-block_one-options">
                  <li>
                    <strong>Full Conference</strong>(Includes workshop, coffee
                    etc)
                  </li>
                  <li className="light">
                    <strong>Live Videos</strong>(Can access online free)
                  </li>
                  <li className="light">
                    <strong>Meet Speaker</strong>(Ask questions privately)
                  </li>
                </ul>
                <div className="price-block_one-button">
                  <a
                    href="speaker-detail.html"
                    className="theme-btn btn-style-two"
                  >
                    <span className="btn-wrap">
                      <span className="text-one">Buy Ticket</span>
                      <span className="text-two">Buy Ticket</span>
                    </span>
                  </a>
                </div>
                <div className="price-block_one-charges">
                  Our prices includes 10% charges
                </div>
              </div>
            </div>

            {/* Price Block One */}
            <div className="price-block_one col-lg-4 col-md-6 col-sm-12">
              <div
                className="price-block_one-inner wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="price-block_one-pattern" style={priceBG3}></div>
                <div
                  className="price-block_one-pattern-two"
                  style={priceBG4}
                ></div>
                <div className="price-block_one-title">Flexible Pass</div>
                <div className="price-block_one-price">
                  $220 <span>2 DAY</span>
                </div>
                <ul className="price-block_one-options">
                  <li>
                    <strong>Full Conference</strong>(Includes workshop, coffee
                    etc)
                  </li>
                  <li>
                    <strong>Live Videos</strong>(Can access online free)
                  </li>
                  <li className="light">
                    <strong>Meet Speaker</strong>(Ask questions privately)
                  </li>
                </ul>
                <div className="price-block_one-button">
                  <a
                    href="speaker-detail.html"
                    className="theme-btn btn-style-two"
                  >
                    <span className="btn-wrap">
                      <span className="text-one">Buy Ticket</span>
                      <span className="text-two">Buy Ticket</span>
                    </span>
                  </a>
                </div>
                <div className="price-block_one-charges">
                  Our prices includes 10% charges
                </div>
              </div>
            </div>

            {/* Price Block One */}
            <div className="price-block_one col-lg-4 col-md-6 col-sm-12">
              <div
                className="price-block_one-inner wow fadeInRight"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="price-block_one-pattern" style={priceBG5}></div>
                <div
                  className="price-block_one-pattern-two"
                  style={priceBG6}
                ></div>
                <div className="price-block_one-title">Business Pass</div>
                <div className="price-block_one-price">
                  $320 <span>3 DAY</span>
                </div>
                <ul className="price-block_one-options">
                  <li>
                    <strong>Full Conference</strong>(Includes workshop, coffee
                    etc)
                  </li>
                  <li>
                    <strong>Live Videos</strong>(Can access online free)
                  </li>
                  <li>
                    <strong>Meet Speaker</strong>(Ask questions privately)
                  </li>
                </ul>
                <div className="price-block_one-button">
                  <a
                    href="speaker-detail.html"
                    className="theme-btn btn-style-two"
                  >
                    <span className="btn-wrap">
                      <span className="text-one">Buy Ticket</span>
                      <span className="text-two">Buy Ticket</span>
                    </span>
                  </a>
                </div>
                <div className="price-block_one-charges">
                  Our prices includes 10% charges
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
