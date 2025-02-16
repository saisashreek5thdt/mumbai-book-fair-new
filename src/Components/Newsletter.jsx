// import newsImg1 from "../assets/images/background/pattern-12.png";
// import newsImg2 from "../assets/images/background/pattern-13.png";
import newsImg3 from "../assets/images/background/pattern-14.png";

export default function Newsletter() {
  // const newsBG1 = {
  //   backgroundImage: `url(${newsImg1})`,
  //   backgroundSize: "cover"
  // };

  // const newsBG2 = {
  //   backgroundImage: `url(${newsImg2})`,
  //   backgroundSize: "cover"
  // };

  const newsBG3 = {
    // backgroundImage: `url(${newsImg3})`,
    backgroundSize: "cover"
  };

  return (
    <>
      <section className="subscribe-one">
        <div
          className="subscribe-one_pattern-three"
          data-parallax='{"y" : 50}'
          style={newsBG3}
        ></div>
        <div className="auto-container">
          {/* <div className="inner-container">
            <div className="subscribe-one_pattern" style={newsBG1}></div>
            <div className="subscribe-one_pattern-two" style={newsBG2}></div>
            <div className="row clearfix">
              <div className="subscribe-one_title-column col-lg-6 col-md-12 col-sm-12">
                <div className="subscribe-one_title">
                  Get The Latest Updates
                </div>
                <h3 className="subscribe-one_heading">Signup For Newsletter</h3>
              </div>

              <div className="form-column col-lg-6 col-md-12 col-sm-12">
                <div className="subscribe-box">
                  <form method="post" action="contact.html">
                    <div className="form-group">
                      <input
                        type="email"
                        name="search-field"
                        value=""
                        placeholder="Your Email Address ........"
                        required
                      />
                      <button type="submit">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
