import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import ScrollToTop from "../../ultils/scrollToTop";
import Footer from "../Footer/Footer";
import Modal from "../Modal/Modal";
import Navigation from "../Navigation/Navigation";

function Layout({ children }) {
  const [showDropDown, setShowDropDown] = useState(false);
  const [isModal, setIsModal] = useState(false);

  return (
    <>
      <ScrollToTop>
        <Navigation isDropDown={showDropDown} setIsModal={setIsModal} />
        {children}
        <Footer />
        <Modal isModal={isModal} setIsModal={setIsModal} />
        <a href="tel:19001009" className="fixed bottom-5 left-5 z-50">
          <div className="rounded-[50%] bg-[#B61C0B] inline-block px-5 py-5 text-lg text-white">
            <FaPhoneAlt />
          </div>
        </a>
      </ScrollToTop>
    </>
  );
}

export default Layout;
