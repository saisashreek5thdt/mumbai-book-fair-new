import priceImg1 from "../assets/images/background/pattern-4.png";

export default function FaqSection() {
  const pricePattern1 = {
    backgroundImage: `url(${priceImg1})`,
    backgroundSize: "cover",
  };

  return (
    <>
      <section className="price-one">
        <div className="price-one_pattern" style={pricePattern1}></div>
        <div className="auto-container">
          <div className="sec-title title-anim centered">
            <div className="sec-title_title">
              Solutions for Your Curiosities
            </div>
            <h2 className="sec-title_heading">FAQ</h2>
          </div>
          <section className="faq-two">
            <div className="auto-container">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <ul className="accordion-box style-two">
                  {/* Block */}
                  <li className="accordion block active-block">
                    <div className="acc-btn active">
                      <div className="icon-outer">
                        <span className="icon fa-solid fa-angle-down fa-fw"></span>
                      </div>
                      Can anyone participate in festival?
                    </div>
                    <div className="acc-content current">
                      <div className="content">
                        <p>
                          Yes, you may participate in the festival as an author,
                          speaker, exhibitor or as a guest.
                        </p>
                      </div>
                    </div>
                  </li>

                  {/* Block */}
                  <li className="accordion block">
                    <div className="acc-btn">
                      <div className="icon-outer">
                        <span className="icon fa-solid fa-angle-down fa-fw"></span>
                      </div>
                      Can I get my book released in the festival?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <p>Yes, one can register for their book release.</p>
                      </div>
                    </div>
                  </li>

                  {/* Block */}
                  <li className="accordion block">
                    <div className="acc-btn">
                      <div className="icon-outer">
                        <span className="icon fa-solid fa-angle-down fa-fw"></span>
                      </div>
                      How to seek collaborations?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <p>One can write to collaborate as a sponsor.</p>
                      </div>
                    </div>
                  </li>

                  {/* Block */}
                  <li className="accordion block">
                    <div className="acc-btn">
                      <div className="icon-outer">
                        <span className="icon fa-solid fa-angle-down fa-fw"></span>
                      </div>
                      What are the internship opportunities?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <p>
                          One may apply for the same at. Upon selection the
                          interns would be notified and assigned their roles.
                        </p>
                      </div>
                    </div>
                  </li>

                  {/* Block */}
                  <li className="accordion block">
                    <div className="acc-btn">
                      <div className="icon-outer">
                        <span className="icon fa-solid fa-angle-down fa-fw"></span>
                      </div>
                      How to reach to the venue?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <p>Azad Maidan Fort, Mumbai, Maharashtra</p>
                      </div>
                    </div>
                  </li>

                  {/* Block */}
                  <li className="accordion block">
                    <div className="acc-btn">
                      <div className="icon-outer">
                        <span className="icon fa-solid fa-angle-down fa-fw"></span>
                      </div>
                      How can anyone volunteer in the festival?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <p>
                          Volunteering is available and a training would be
                          given to the selected volunteers for participating in
                          the festival.
                        </p>
                      </div>
                    </div>
                  </li>

                  {/* Block */}
                  <li className="accordion block">
                    <div className="acc-btn">
                      <div className="icon-outer">
                        <span className="icon fa-solid fa-angle-down fa-fw"></span>
                      </div>
                      What is the procedure to have an allocated book stall at
                      the festival?
                    </div>
                    <div className="acc-content">
                      <div className="content">
                        <p>
                          One may apply for the same, upon selection the book
                          stall would be allocated.
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
