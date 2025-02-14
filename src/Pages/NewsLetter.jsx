import newsImg1 from "../assets/images/background/6.jpg";

export default function NewsLetter() {
  const newsBG1 = {
    backgroundImage: `url(${newsImg1})`,
    backgroundSize: "cover",
  };

  return (
    <>
      <section className="subscribe-two" style={newsBG1}>
        <div className="auto-container">
          <div className="inner-container">
            <div className="row clearfix">
              <div className="subscribe-two_title-column col-lg-6 col-md-12 col-sm-12">
                <div className="subscribe-two_title">
                  Get The Latest Updates
                </div>
                <h3 className="subscribe-two_heading">Get Subscribed Today!</h3>
              </div>

              {/* Form Column */}
              <div className="form-column col-lg-6 col-md-12 col-sm-12">
                {/* Subscribe Box */}
                <div className="subscribe-box style-two">
                  <form method="post" action="contact.html">
                    <div className="form-group">
                      <input
                        type="email"
                        name="search-field"
                        value=""
                        placeholder="Your Email Address ........"
                        required
                      />
                      <button type="submit">Submit Now</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
