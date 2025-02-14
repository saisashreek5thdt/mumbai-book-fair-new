import { Header, Footer } from "./Components/index";
import SpeakersInfo from "./Pages/SpeakersInfo";

export default function Speakers() {
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
          {/* Speakers Info Starts */}
          <SpeakersInfo />
          {/* Speakers Info Ends */}
          {/* Footer Start */}
          <Footer />
          {/* Footer End */}
        </div>
      </div>
    </>
  );
}
