import { Header, Footer2 } from "./Components/index";
import SpeakersMore from "./Pages/SpeakersMore";

export default function SpeakersPage() {
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
          {/* Speakers Page Starts */}
          <SpeakersMore />
          {/* Speakers Page Ends */}
          {/* Footer Start */}
          <Footer2 />
          {/* Footer End */}
        </div>
      </div>
    </>
  );
}
