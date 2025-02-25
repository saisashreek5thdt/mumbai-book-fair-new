import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
  FaqSection,
} from "./Components/index";

export default function Home() {
  const location = useLocation();

  // Handle smooth scrolling to the section when the page loads with a hash
  useEffect(() => {
    if (location.hash) {
      // Wait for the DOM to fully load
      setTimeout(() => {
        const sectionId = location.hash.substring(1); // Remove the # character
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Increased delay to ensure the DOM is fully loaded
    }
  }, [location]);

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
          <section id="about">
            <AboutUs />
          </section>
          {/* About Section End */}

          {/* Counter Section Start */}
          <Counter />
          {/* Counter Section End */}

          {/* Features Start */}
          <Features />
          {/* Features End */}

          {/* Speakers Section Start */}
          <section id="speakers">
            <Speakers />
          </section>
          {/* Speakers Section End */}

          {/* Events Section Start */}
          <section id="event">
            <Events />
          </section>
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

          {/* Team Section Start */}
          <section id="team">
            {/* Add your Team component here */}
            <div className="team-section">
              {/* Your team content */}
            </div>
          </section>
          {/* Team Section End */}

          {/* FAQ Section Start */}
          <section id="faq">
            <FaqSection />
          </section>
          {/* FAQ Section End */}

          {/* Social Section Start */}
          <section id="social">
            {/* Add your Social component here */}
            <div className="social-section">
              {/* Your social content */}
            </div>
          </section>
          {/* Social Section End */}

          {/* Blogs Start */}
          <Blogs />
          {/* Blogs End */}

          {/* Newsletter Start */}
          <Newsletter />
          {/* Newsletter End */}

          {/* Footer Start */}
          <Footer />
          {/* Footer End */}
        </div>
      </div>
    </>
  );
}











//original code 


// import {
//   Header,
//   Slider,
//   AboutUs,
//   Counter,
//   Speakers,
//   Features,
//   Events,
//   Gallery,
//   Pricing,
//   VideoSection,
//   Clients,
//   Blogs,
//   Newsletter,
//   Footer,
//   FaqSection
// } from "./Components/index";

// export default function Home() {
//   return (
//     <>
//       <div className="hidden-bar-wrapper">
//         <div className="page-wrapper">
//           {/* Preloader Start */}
//           <div className="preloader"></div>
//           {/* Preloader End */}
//           {/* Header Starts */}
//           <Header />
//           {/* Header Ends */}
//           {/* Slider Section Start */}
//           <Slider />
//           {/* Slider Section End */}
//           {/* About Section Start */}
//           <AboutUs />
//           {/* About Section End */}          
//           {/* Counter Section Start */}
//           <Counter />
//           {/* Counter Section End */}
//           {/* Features Start */}
//           <Features />
//           {/* Features End */}
//           {/* Speakers Section Start */}
//           <Speakers />
//           {/* Speakers Section End */}          
//           {/* Events Section Start */}
//           <Events />
//           {/* Events Section End */}
//           {/* Gallery Start */}
//           <Gallery />
//           {/* Gallery End */}
//           {/* Pricing Start */}
//           <Pricing />
//           {/* Pricing End */}
//           {/* Video Section Start */}
//           <VideoSection />
//           {/* Video Section End */}
//           {/* Clients Start */}
//           <Clients />
//           {/* Clients End */}
//           {/* FAQ Section Start */}
//           <FaqSection />
//           {/* FAQ Section End */}
//           {/* Blogs Start */}
//           <Blogs />
//           {/* Blogs End */}          
//           {/* Newletter Start */}
//           <Newsletter />
//           {/* Newletter End */}
//           {/* Footer Start */}
//           <Footer />
//           {/* Footer End */}
//         </div>
//       </div>
//     </>
//   );
// }
