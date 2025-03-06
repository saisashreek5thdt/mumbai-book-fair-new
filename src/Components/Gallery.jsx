import galleryImg1 from "../assets/images/gallery/authors/fest21.png";
import galleryImg2 from "../assets/images/gallery/authors/fest29.png";
import galleryImg3 from "../assets/images/gallery/business/fest33.png";
import galleryImg4 from "../assets/images/gallery/business/fest39.png";
import galleryImg5 from "../assets/images/gallery/vip/fest2.png";
import galleryImg6 from "../assets/images/gallery/vip/fest7.png";
import galleryImg7 from "../assets/images/gallery/vip/fest17.png";
import galleryImg8 from "../assets/images/gallery/vip/fest20.png";
import { Link } from "react-router-dom";

export default function Gallery() {
  return (
    <>
      <section className="gallery-one">
        <div className="outer-container">
          <div className="clearfix">
            {/* Gallery One Block */}
            <div className="gallery-one_block col-lg-3 col-md-4 col-sm-6">
              <div className="gallery-one_block-inner">
                <div className="gallery-one_block-image">
                  <img src={galleryImg1} alt="" />
                  <div className="gallery-one_block-overlay">
                    <a
                      href={galleryImg1}
                      className="lightbox-image gallery-one_block-icon flaticon-plus-symbol"
                    ></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery One Block */}
            <div className="gallery-one_block col-lg-3 col-md-4 col-sm-6">
              <div className="gallery-one_block-inner">
                <div className="gallery-one_block-image">
                  <img src={galleryImg2} alt="" />
                  <div className="gallery-one_block-overlay">
                    <a
                      href={galleryImg2}
                      className="lightbox-image gallery-one_block-icon flaticon-plus-symbol"
                    ></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery One Block */}
            <div className="gallery-one_block col-lg-3 col-md-4 col-sm-6">
              <div className="gallery-one_block-inner">
                <div className="gallery-one_block-image">
                  <img src={galleryImg3} alt="" />
                  <div className="gallery-one_block-overlay">
                    <a
                      href={galleryImg3}
                      className="lightbox-image gallery-one_block-icon flaticon-plus-symbol"
                    ></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery One Block */}
            <div className="gallery-one_block col-lg-3 col-md-4 col-sm-6">
              <div className="gallery-one_block-inner">
                <div className="gallery-one_block-image">
                  <img src={galleryImg4} alt="" />
                  <div className="gallery-one_block-overlay">
                    <a
                      href={galleryImg4}
                      className="lightbox-image gallery-one_block-icon flaticon-plus-symbol"
                    ></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery One Block */}
            <div className="gallery-one_block col-lg-3 col-md-4 col-sm-6">
              <div className="gallery-one_block-inner">
                <div className="gallery-one_block-image">
                  <img src={galleryImg5} alt="" />
                  <div className="gallery-one_block-overlay">
                    <a
                      href={galleryImg5}
                      className="lightbox-image gallery-one_block-icon flaticon-plus-symbol"
                    ></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery One Block */}
            <div className="gallery-one_block col-lg-3 col-md-4 col-sm-6">
              <div className="gallery-one_block-inner">
                <div className="gallery-one_block-image">
                  <img src={galleryImg6} alt="" />
                  <div className="gallery-one_block-overlay">
                    <a
                      href={galleryImg6}
                      className="lightbox-image gallery-one_block-icon flaticon-plus-symbol"
                    ></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery One Block */}
            <div className="gallery-one_block col-lg-3 col-md-4 col-sm-6">
              <div className="gallery-one_block-inner">
                <div className="gallery-one_block-image">
                  <img src={galleryImg7} alt="" />
                  <div className="gallery-one_block-overlay">
                    <a
                      href={galleryImg7}
                      className="lightbox-image gallery-one_block-icon flaticon-plus-symbol"
                    ></a>
                  </div>
                </div>
              </div>
            </div>

            {/* Gallery One Block */}
            <div className="gallery-one_block col-lg-3 col-md-4 col-sm-6">
              <div className="gallery-one_block-inner">
                <div className="gallery-one_block-image">
                  <img src={galleryImg8} alt="" />
                  <div className="gallery-one_block-overlay">
                    <a
                      href={galleryImg8}
                      className="lightbox-image gallery-one_block-icon flaticon-plus-symbol"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 text-center">
            <div className="about-one_button">
              <Link to="/gallery" target="_blank" className="theme-btn btn-style-one">
                <span className="btn-wrap">
                  <span className="text-one">View More</span>
                  <span className="text-two">View More</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
