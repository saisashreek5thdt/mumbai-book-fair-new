import { Header, Footer } from "./Components/index";
import Publishers from "./Pages/Publishers";

export default function PublishersPage() {
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
          {/* Publisher Page Start */}
          <Publishers />
          {/* Publisher Page End */}
          {/* Footer Start */}
          <Footer />
          {/* Footer End */}
        </div>
      </div>
    </>
  );
}
