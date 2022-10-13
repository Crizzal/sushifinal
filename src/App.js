import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import HomePage from "./Pages/HomePage";

import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import "swiper/css";
import Footer from "./Components/Footer/Footer";
import Modal from "./Components/Modal/Modal";
import ContactPage from "./Pages/ContactPage";
import IntroducePage from "./Pages/IntroducePage";
import LoginPage from "./Pages/LoginPage";
import MapPage from "./Pages/MapPage";
import MenuPage from "./Pages/MenuPage";
import NewsDetail from "./Pages/NewsDetail";
import ProductDetail from "./Pages/ProductDetail";
import RegisterPage from "./Pages/RegisterPage";
import SushiWayPage from "./Pages/SushiWayPage";
import ScrollToTop from "./ultils/scrollToTop";
import React from "react";

const LazyMenuPage = React.lazy(() => import("./Pages/MenuPage"));

function App() {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isModal, setIsModal] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setShowDropDown(window.scrollY >= 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Navigation isDropDown={showDropDown} setIsModal={setIsModal} />
      <ScrollToTop>
        <Routes>
          <Route path="/menu" element={<LazyMenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/introduce" element={<IntroducePage />} />
          <Route path="/sushiway" element={<SushiWayPage />} />
          <Route path="/detail/:id" element={<ProductDetail />} />
          <Route path="/news" element={<NewsDetail />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </ScrollToTop>

      <Footer />
      <Modal isModal={isModal} setIsModal={setIsModal} />
      <a href="tel:19001009" className="fixed bottom-5 left-5 z-50">
        <div className="rounded-[50%] bg-[#B61C0B] inline-block px-5 py-5 text-lg text-white">
          <FaPhoneAlt />
        </div>
      </a>
    </div>
  );
}

export default App;
