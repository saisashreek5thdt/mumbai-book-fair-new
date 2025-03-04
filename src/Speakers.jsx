import { Header, Footer2 } from "./Components/index";
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
          <Footer2 />
          {/* Footer End */}
        </div>
      </div>
    </>
  );
}
