import { Header, Footer, CheckoutSlide, CheckoutInfo } from "../Components";

export default function CheckoutPage() {
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
          {/* Checkout Slide Start */}
          <CheckoutSlide/>
          {/* Checkout Slide End */}
          {/* Checkout Info Start */}
          <CheckoutInfo/>
          {/* Checkout Info End */}
          {/* Footer Start */}
          <Footer />
          {/* Footer End */}
        </div>
      </div>
    </>
  );
}
