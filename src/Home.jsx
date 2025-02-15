import {
  Header,
  Slider,
  AboutUs,
  Counter,
  Speakers,
  Features,
  Events,
  Gallery,
  Pricing,
  VideoSection,
  Clients,
  Blogs,
  Newsletter,
  Footer,
  FaqSection
} from "./Components/index";

export default function Home() {
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
          {/* Slider Section Start */}
          <Slider />
          {/* Slider Section End */}
          {/* About Section Start */}
          <AboutUs />
          {/* About Section End */}          
          {/* Counter Section Start */}
          <Counter />
          {/* Counter Section End */}
          {/* Features Start */}
          <Features />
          {/* Features End */}
          {/* Speakers Section Start */}
          <Speakers />
          {/* Speakers Section End */}          
          {/* Events Section Start */}
          <Events />
          {/* Events Section End */}
          {/* Gallery Start */}
          <Gallery />
          {/* Gallery End */}
          {/* Pricing Start */}
          <Pricing />
          {/* Pricing End */}
          {/* Video Section Start */}
          <VideoSection />
          {/* Video Section End */}
          {/* Clients Start */}
          <Clients />
          {/* Clients End */}
          {/* FAQ Section Start */}
          <FaqSection />
          {/* FAQ Section End */}
          {/* Blogs Start */}
          <Blogs />
          {/* Blogs End */}          
          {/* Newletter Start */}
          <Newsletter />
          {/* Newletter End */}
          {/* Footer Start */}
          <Footer />
          {/* Footer End */}
        </div>
      </div>
    </>
  );
}
