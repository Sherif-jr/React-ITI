import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;

/*
"
    at RenderedRoute (http://localhost:3000/static/js/bundle.js:39578:5)
    at RenderErrorBoundary (http://localhost:3000/static/js/bundle.js:39525:5)
    at DataRoutes (http://localhost:3000/static/js/bundle.js:40020:5)
    at Router (http://localhost:3000/static/js/bundle.js:40133:15)
    at RouterProvider (http://localhost:3000/static/js/bundle.js:39960:5)
    at App"
*/
