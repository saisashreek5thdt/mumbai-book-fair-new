import priceImg1 from "../assets/images/background/pattern-4.png";
import faqBg from "../assets/images/background/faq.jpg";
import { useState } from "react";
// import "../Faq.css";

export default function FaqSection() {
  const pricePattern1 = {
    backgroundImage: `url(${priceImg1})`,
    backgroundSize: "cover",
  };

  const FAQFormBG = {
    backgroundImage: `url(${faqBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }

  // State to manage which FAQ is open
  const [openIndex, setOpenIndex] = useState(0); // Default: First FAQ is open

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  return (
    <>
      <section className="price-one" id="faq">
        <div className="price-one_pattern" style={pricePattern1}></div>
        <div className="auto-container">
          <div className="sec-title title-anim centered">
            <h2 className="sec-title_heading">FAQ&apos;S</h2>
          </div>
          <section className="faq-two">
            <div className="auto-container">
              <div className="row clearfix">
                {/* FAQ Section */}
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <ul className="accordion-box style-two">
                    {/* Block 1 - Always Open by Default */}
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
                            Yes, you may participate in the festival as an
                            author, speaker, exhibitor or as a guest.
                          </p>
                        </div>
                      </div>
                    </li>

                    {/* Block 2 */}
                    <li className="accordion block">
                      <div
                        className={`acc-btn ${openIndex === 1 ? "active" : ""}`}
                        onClick={() => toggleAccordion(1)}
                      >
                        <div className="icon-outer">
                          <span className="icon fa-solid fa-angle-down fa-fw"></span>
                        </div>
                        Can I get my book released in the festival?
                      </div>
                      <div
                        className={`acc-content ${
                          openIndex === 1 ? "current" : ""
                        }`}
                      >
                        <div className="content">
                          <p>Yes, one can register for their book release.</p>
                        </div>
                      </div>
                    </li>

                    {/* Block 3 */}
                    <li className="accordion block">
                      <div
                        className={`acc-btn ${openIndex === 2 ? "active" : ""}`}
                        onClick={() => toggleAccordion(2)}
                      >
                        <div className="icon-outer">
                          <span className="icon fa-solid fa-angle-down fa-fw"></span>
                        </div>
                        How to seek collaborations?
                      </div>
                      <div
                        className={`acc-content ${
                          openIndex === 2 ? "current" : ""
                        }`}
                      >
                        <div className="content">
                          <p>One can write to collaborate as a sponsor.</p>
                        </div>
                      </div>
                    </li>

                    {/* Block 4 */}
                    <li className="accordion block">
                      <div
                        className={`acc-btn ${openIndex === 3 ? "active" : ""}`}
                        onClick={() => toggleAccordion(3)}
                      >
                        <div className="icon-outer">
                          <span className="icon fa-solid fa-angle-down fa-fw"></span>
                        </div>
                        What are the internship opportunities?
                      </div>
                      <div
                        className={`acc-content ${
                          openIndex === 3 ? "current" : ""
                        }`}
                      >
                        <div className="content">
                          <p>
                            One may apply for the same at. Upon selection the
                            interns would be notified and assigned their roles.
                          </p>
                        </div>
                      </div>
                    </li>

                    {/* Block 5 */}
                    <li className="accordion block">
                      <div
                        className={`acc-btn ${openIndex === 4 ? "active" : ""}`}
                        onClick={() => toggleAccordion(4)}
                      >
                        <div className="icon-outer">
                          <span className="icon fa-solid fa-angle-down fa-fw"></span>
                        </div>
                        How to reach to the venue?
                      </div>
                      <div
                        className={`acc-content ${
                          openIndex === 4 ? "current" : ""
                        }`}
                      >
                        <div className="content">
                          <p>Azad Maidan Fort, Mumbai, Maharashtra</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Quick Contact Form Card */}
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <div
                    className="faq-two_form-box"
                    style={FAQFormBG}
                  >
                    <h3 className="faq-two_form-title">Quick Contact</h3>
                    <form className="faq-form">
                      <div className="form-group">
                        <input type="text" placeholder="Name" required />
                      </div>
                      <div className="form-group">
                        <input type="email" placeholder="Email" required />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Phone Number"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <textarea placeholder="Enter your Message*"></textarea>
                      </div>
                      <div className="form-group">
                        <button type="submit" className="submit-btn">
                          SUBMIT NOW
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
