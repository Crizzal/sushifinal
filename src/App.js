import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Components/Navigation/Navigation";
import { Route, Routes, useParams } from "react-router-dom";
import HomePage from "./Pages/HomePage";

import "swiper/css";
import { useEffect, useState } from "react";
import Footer from "./Components/Footer/Footer";
import { FaPhoneAlt } from "react-icons/fa";
import MenuPage from "./Pages/MenuPage";
import ContactPage from "./Pages/ContactPage";
import Modal from "./Components/Modal/Modal";
import IntroducePage from "./Pages/IntroducePage";
import SushiWayPage from "./Pages/SushiWayPage";
import ProductDetail from "./Pages/ProductDetail";
import NewsDetail from "./Pages/NewsDetail";
import ScrollToTop from "./ultils/scrollToTop";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import MapPage from "./Pages/MapPage";

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
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/introduce" element={<IntroducePage />} />
          <Route path="/sushiway" element={<SushiWayPage />} />
          <Route path="/detail" element={<ProductDetail />} />
          <Route path="/news" element={<NewsDetail />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/map" element={<MapPage />} />
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
