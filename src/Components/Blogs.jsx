import { Link } from "react-router-dom";
import blogImg1 from "../assets/images/resource/volunteer.png";
import blogImg2 from "../assets/images/resource/exhibitor.png";
import blogImg3 from "../assets/images/resource/visitor.png";
import blogImg4 from "../assets/images/resource/speaker.png";
import blogImg5 from "../assets/images/resource/vendor.png";
import blogImg6 from "../assets/images/resource/sponsor.png";
import blogImg7 from "../assets/images/resource/author.png";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function Blogs() {
  const registerInfo = [
    {
      id: 1,
      title: "Volunteer",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSePmHdusFo3-doXpJRmMxpmT9aqVweuzQhqn_OGJGcTdV-mLQ/viewform",
      imgURL: blogImg1,
    },
    {
      id: 2,
      title: "Exhibitor",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSePmHdusFo3-doXpJRmMxpmT9aqVweuzQhqn_OGJGcTdV-mLQ/viewform",
      imgURL: blogImg2,
    },
    {
      id: 3,
      title: "Visitor",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSfJ6YcEuTFVIB-wCflitmtfX1minVEGO4KrOPR8Fc26vPM7XA/viewform",
      imgURL: blogImg3,
    },
    {
      id: 4,
      title: "Speaker",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSehWMPA1WSMIC1u54WHSlPRifEf1aP2PF_UBQahAI-SnbqLBw/viewform",
      imgURL: blogImg4,
    },
    {
      id: 5,
      title: "Vendor",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSe_CBsGMOh5NU6IgrGabtPLCGwpRhZGZ8erNCpYAcl4Q1TVAg/viewform",
      imgURL: blogImg5,
    },
    {
      id: 6,
      title: "Sponsor",
      link: "https://docs.google.com/forms/d/e/1FAIpQLScIajlb9neewUiqRpH6KrDXYsVKT7QXdc1Ioif8frcyuhsm8Q/viewform",
      imgURL: blogImg6,
    },
    {
      id: 7,
      title: "Author",
      link: "https://docs.google.com/forms/d/e/1FAIpQLSehWMPA1WSMIC1u54WHSlPRifEf1aP2PF_UBQahAI-SnbqLBw/viewform",
      imgURL: blogImg7,
    },
  ];

  return (
    <>
      <section className="news-one" id="register">
        <div className="auto-container">
          <div className="sec-title">
            <div className="d-flex justify-content-between align-items-end flex-wrap">
              <div className="title-box title-anim">
                <div className="sec-title_title">Get Your</div>
                <h2 className="sec-title_heading">Registration</h2>
              </div>
            </div>
          </div>

          <Swiper
            className="swiper"
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 3000, // Adjust delay time (3 seconds here)
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              320: { slidesPerView: 1 }, // Mobile view shows 1 slide
              768: { slidesPerView: 3 }, // Tablet view shows 2 slides
              1024: { slidesPerView: 3 }, // Desktop view shows 3 slides
            }}
          >
            {registerInfo.map((event, index) => (
              <SwiperSlide key={index}>
                <div className="news-block_one">
                  <div className="news-block_one-inner">
                    <div className="news-block_one-tag">
                      <Link
                        to={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Registration
                      </Link>
                    </div>
                    <div className="news-block_one-image">
                      <Link to="/">
                        <img src={event.imgURL} alt="" />
                      </Link>
                      <img src={event.imgURL} alt="" />
                    </div>
                    <div className="news-block_one-content">
                      <div className="news-block_one-date">{event.title}</div>
                      {/* <h5 className="news-block_one-title">
                    <Link to="/">Sponsor</Link>
                  </h5>
                  <a
                    className="news-block_one-more"
                    href="https://docs.google.com/forms/d/e/1FAIpQLScIajlb9neewUiqRpH6KrDXYsVKT7QXdc1Ioif8frcyuhsm8Q/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Register
                  </a> */}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
