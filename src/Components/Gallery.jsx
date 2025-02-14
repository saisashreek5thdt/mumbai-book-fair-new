import galleryImg1 from "../assets/images/gallery/1.jpg";
import galleryImg2 from "../assets/images/gallery/2.jpg";
import galleryImg3 from "../assets/images/gallery/3.jpg";
import galleryImg4 from "../assets/images/gallery/4.jpg";
import galleryImg5 from "../assets/images/gallery/5.jpg";
import galleryImg6 from "../assets/images/gallery/6.jpg";
import galleryImg7 from "../assets/images/gallery/7.jpg";
import galleryImg8 from "../assets/images/gallery/8.jpg";

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
        </div>
      </section>
    </>
  );
}
