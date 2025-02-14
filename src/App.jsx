import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home";
import Speakers from "./Speakers";

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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/speaker/01",
      element: <Speakers />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
