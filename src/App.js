
import React, { Suspense } from "react";
import Home from "./screens/Home";
import { Route, Routes } from "react-router-dom";
import PreLoader from "./components/PreLoader";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./assets/css/style.css"
function App() {

  const pageRoute = [
    {
      path: "/",
      element: <Home />
    }
  ]

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
