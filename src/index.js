import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import store from "./store/store";
import "swiper/css";

const LazyHomePage = React.lazy(() => import("./Pages/HomePage"));
const LazyMenuPage = React.lazy(() => import("./Pages/MenuPage"));
const LazyContactPage = React.lazy(() => import("./Pages/ContactPage"));
const LazyIntroducePage = React.lazy(() => import("./Pages/IntroducePage"));
const LazySushiWayPage = React.lazy(() => import("./Pages/SushiWayPage"));
const LazyProductDetail = React.lazy(() => import("./Pages/ProductDetail"));
const LazyNewsDetail = React.lazy(() => import("./Pages/NewsDetail"));
const LazyRegisterPage = React.lazy(() => import("./Pages/RegisterPage"));
const LazyLoginPage = React.lazy(() => import("./Pages/LoginPage"));
const LazyMapPage = React.lazy(() => import("./Pages/MapPage"));
const LazyAdminPage = React.lazy(() => import("./Pages/Admin/AdminPage"));
const LazyAdminLoginPage = React.lazy(() => import("./Components/AdminLogin"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <LazyHomePage />,
  },
  {
    path: "/menu",
    element: <LazyMenuPage />,
  },
  {
    path: "/contact",
    element: <LazyContactPage />,
  },
  {
    path: "/introduce",
    element: <LazyIntroducePage />,
  },
  {
    path: "/sushiway",
    element: <LazySushiWayPage />,
  },
  {
    path: "/detail/:id",
    element: <LazyProductDetail />,
  },
  {
    path: "/map",
    element: <LazyMapPage />,
  },
  {
    path: "/login",
    element: <LazyLoginPage />,
  },
  {
    path: "/admin",
    element:
      localStorage.getItem("token")?.length > 0 ? (
        <LazyAdminPage />
      ) : (
        <LazyAdminLoginPage />
      ),
  },
  {
    path: "/admin/login",
    element: <LazyAdminLoginPage />,
  },
  {
    path: "*",
    element: "Not Found",
  },
]);
console.log(localStorage.getItem("token")?.length > 0);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Suspense fallback="...loading">
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
