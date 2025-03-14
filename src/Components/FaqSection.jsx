import priceImg1 from "../assets/images/background/pattern-4.png";
import faqBg from "../assets/images/background/faq.jpg";
import { useState } from "react";
import { Link } from "react-router-dom";
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
  };

  // State to manage which FAQ is open
  const [openIndex, setOpenIndex] = useState(0); // Default: First FAQ is open

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  return (
    <>
      <section className="speakers-one" id="faq">
        <div className="price-one_pattern" style={pricePattern1}></div>
        <div className="auto-container">
          <div className="sec-title title-anim centered">
            <div className="sec-title_title">Queries</div>
            <h2 className="sec-title_heading">FAQs</h2>
          </div>
          <div className="row clearfix">
            {/* FAQ Section */}
            <div className="col-lg-7 col-md-12 col-sm-12">
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
                        Yes, you may participate in the festival as an author. Entry to the book festival is free.
                      </p>
                    </div>
                  </div>
                </li>

                 {/* Block 1 - Always Open by Default */}
                 <li className="accordion block">
                  <div className={`acc-btn ${openIndex === 1 ? "active" : ""}`}
                    onClick={() => toggleAccordion(1)}
                    >
                    <div className="icon-outer">
                      <span className="icon fa-solid fa-angle-down fa-fw"></span>
                    </div>
                    Is the parking free?
                  </div>
                  <div className={`acc-content ${
                      openIndex === 1 ? "current" : ""
                    }`}>
                    <div className="content">
                      <p>
                      Yes, the parking is free at the venue. 
                      </p>
                    </div>
                  </div>
                </li>

                {/* Block 2 */}
                <li className="accordion block">
                  <div
                    className={`acc-btn ${openIndex === 2 ? "active" : ""}`}
                    onClick={() => toggleAccordion(2)}
                  >
                    <div className="icon-outer">
                      <span className="icon fa-solid fa-angle-down fa-fw"></span>
                    </div>
                    Can I get my book released in the festival?
                  </div>
                  <div
                    className={`acc-content ${
                      openIndex === 2 ? "current" : ""
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
                    className={`acc-btn ${openIndex === 3 ? "active" : ""}`}
                    onClick={() => toggleAccordion(3)}
                  >
                    <div className="icon-outer">
                      <span className="icon fa-solid fa-angle-down fa-fw"></span>
                    </div>
                    How to seek collaborations?
                  </div>
                  <div
                    className={`acc-content ${
                      openIndex === 3 ? "current" : ""
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
                    className={`acc-btn ${openIndex === 4 ? "active" : ""}`}
                    onClick={() => toggleAccordion(4)}
                  >
                    <div className="icon-outer">
                      <span className="icon fa-solid fa-angle-down fa-fw"></span>
                    </div>
                    What are the internship opportunities?
                  </div>
                  <div
                    className={`acc-content ${
                      openIndex === 4 ? "current" : ""
                    }`}
                  >
                    <div className="content">
                      <p>
                        One may apply for the same. Upon selection the
                        interns would be notified and assigned their roles.
                        Email us: mumbaibookfestival@gmail.com
                      </p>
                    </div>
                  </div>
                </li>

                {/* Block 5 */}
                <li className="accordion block">
                  <div
                    className={`acc-btn ${openIndex === 5 ? "active" : ""}`}
                    onClick={() => toggleAccordion(5)}
                  >
                    <div className="icon-outer">
                      <span className="icon fa-solid fa-angle-down fa-fw"></span>
                    </div>
                    How to reach to the venue?
                  </div>
                  <div
                    className={`acc-content ${
                      openIndex === 5 ? "current" : ""
                    }`}
                  >
                    <div className="content">
                      <p>BKC, Mumbai, Maharashtra</p>
                    </div>
                  </div>
                </li>

                {/* Block 6 */}
                <li className="accordion block">
                  <div
                    className={`acc-btn ${openIndex === 6 ? "active" : ""}`}
                    onClick={() => toggleAccordion(6)}
                  >
                    <div className="icon-outer">
                      <span className="icon fa-solid fa-angle-down fa-fw"></span>
                    </div>
                    How can anyone volunteer in the festival?
                  </div>
                  <div
                    className={`acc-content ${
                      openIndex === 6 ? "current" : ""
                    }`}
                  >
                    <div className="content">
                      <p>
                        Volunteering is available and training would be given
                        to the selected volunteers for participating in the
                        festival.
                      </p>
                    </div>
                  </div>
                </li>

                {/* Block 7 */}
                <li className="accordion block">
                  <div
                    className={`acc-btn ${openIndex === 7 ? "active" : ""}`}
                    onClick={() => toggleAccordion(7)}
                  >
                    <div className="icon-outer">
                      <span className="icon fa-solid fa-angle-down fa-fw"></span>
                    </div>
                    Can I have an allocated book stall at the festival?
                  </div>
                  <div
                    className={`acc-content ${
                      openIndex === 7 ? "current" : ""
                    }`}
                  >
                    <div className="content">
                      <p>
                        One may apply for the same. Upon selection the book
                        stall would be allocated.
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            {/* Quick Contact Form Card */}
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="faq-two_form-box" style={FAQFormBG}>
                <h3 className="faq-two_form-title">Contact Us</h3>
                <form className="faq-form">
                  <div className="form-group">
                    <input type="text" placeholder="Name" required />
                  </div>
                  <div className="form-group">
                    <input type="email" placeholder="Email" required />
                  </div>
                  <div className="form-group">
                    <input type="text" placeholder="Phone Number" required />
                  </div>
                  <div className="form-group">
                    <textarea style={{height:"210px"}} placeholder="Enter your Message*"></textarea>
                  </div>
                  <div className="form-group">
                    {/* <button type="submit" className="submit-btn">
                          SUBMIT NOW
                        </button> */}
                    <Link
                      to="mailto:mumbaibookfair@gmail.com"
                      className="theme-btn btn-style-one"
                    >
                      <span className="btn-wrap">
                        <span className="text-one">Submit Now</span>
                        <span className="text-two">Submit Now</span>
                      </span>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <section className="faq-two">
            <div className="auto-container"></div>
          </section>
        </div>
      </section>
    </>
  );
}
