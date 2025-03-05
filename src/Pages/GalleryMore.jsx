import { Header, Footer2, GallerySlide, GalleryInfo } from "../Components";

export default function GalleryMore() {
  return (
    <>
      <div className="hidden-bar-wrapper">
        <div className="page-wrapper">
          {/* Preloader Start */}
          <div className="preloader"></div>
          {/* Preloader End */}
          {/* Header Starts */}
          <Header />
          {/* Header Ends */}
          {/* Gallery Slide Start */}
          <GallerySlide />
          {/* Gallery Slide End */}
          {/* Gallery Info Start */}
          <GalleryInfo />
          {/* Gallery Info End */}
          {/* Footer Start */}
          <Footer2 />
          {/* Footer End */}
        </div>
      </div>
    </>
  );
}
