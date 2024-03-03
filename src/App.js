
import React, { Suspense, useEffect, useState } from "react";
import Home from "./screens/Home";
import { Route, Routes } from "react-router-dom";
import PreLoader from "./components/PreLoader";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./assets/css/style.css"
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  const [goToTopShow, setGoToTopShow] = useState(false);
  const pageRoute = [
    {
      path: "/",
      element: <Home />
    }
  ]
  const goToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 1500 ||
      document.documentElement.scrollTop > 1500
    ) {
      setGoToTopShow(true);
    } else {
      setGoToTopShow(false);
    }
  }
  useEffect(() => {
    AOS.init({
      delay: 50,
    });

  }, []);

  return (
    <>
      <div className="vh-100 auth-layout">
        <Suspense fallback={<PreLoader />}>
          <Routes>
            {pageRoute &&
              pageRoute.map(({ path, element }, index) => (
                <Route path={path} element={element} key={index} />
              ))}
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
