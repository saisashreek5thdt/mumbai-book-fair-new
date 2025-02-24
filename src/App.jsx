import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
//import Speakers from "./Speakers";
import PublishersPage from "./PublishersPage";
import SpeakersPage from "./SpeakersPage";
import CheckoutPage from "./Pages/CheckoutPage";
import GalleryMore from "./Pages/GalleryMore";

export default function App() {
  useEffect(() => {
    const scripts = [
      "assets/js/jquery.js",
      "assets/js/popper.min.js",
      "assets/js/bootstrap.min.js",
      "assets/js/appear.js",
      "assets/js/parallax.min.js",
      "assets/js/tilt.jquery.min.js",
      "assets/js/jquery.paroller.min.js",
      "assets/js/owl.js",
      "assets/js/wow.js",
      "assets/js/backtotop.js",
      "assets/js/odometer.js",
      "assets/js/parallax-scroll.js",
      "assets/js/magnific-popup.min.js",
      "assets/js/nav-tool.js",
      "assets/js/jquery-ui.js",
      "assets/js/color-settings.js",
      "assets/js/script.js",
    ];

    // Function to dynamically load a script
    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = true;
        script.onload = () => resolve();
        script.onerror = () =>
          reject(new Error(`Failed to load script: ${src}`));
        document.body.appendChild(script);
      });
    };

    // Load all scripts sequentially
    const loadScripts = async () => {
      try {
        for (const src of scripts) {
          await loadScript(src);
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadScripts();

    // Cleanup function
    return () => {
      scripts.forEach((src) => {
        const script = document.querySelector(`script[src="${src}"]`);
        if (script) {
          document.body.removeChild(script);
        }
      });
    };
  }, []);

  return (
    <>
      <BrowserRouter
        future={{
          v7_relativeSplatPath: true,
          v7_startTransition: true,
          v7_fetcherPersist: true,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/speakers" element={<SpeakersPage />} />
          <Route path="/publishers" element={<PublishersPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/gallery" element={<GalleryMore />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
