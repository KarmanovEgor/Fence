import { useCallback, useEffect, useState } from "react";
import Advantage from "./Advantage/Advantage";
import "./App.css";
import Clients from "./Clients/Clients";
import Header from "./Header/Header";
import Promo from "./Promo/Promo";
import Youtube from "./Youtube/Youtube";
import Zabors from "./Zabors/Zabors";
import { Route, Routes } from "react-router-dom";
import Popup from "./Popup/Popup";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import Proflist from "./Fence/Proflist";
import Rabitsa from "./Fence/Rabitas";

function App() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const isOpen = isOpenPopup;
  const closePopup = useCallback(() => {
    setIsOpenPopup(false);
  }, [setIsOpenPopup]);

  const openPopup = () => {
    setIsOpenPopup(true);
  };

  useEffect(() => {
    if (!isOpen) return;

    function handleESC(e) {
      if (e.key === "Escape") {
        closePopup();
      }
    }

    document.addEventListener("keydown", handleESC);

    return () => document.removeEventListener("keydown", handleESC);
  }, [isOpen, closePopup]);
  return (
    <div className="page__content">
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Header openPopup={openPopup} />
              <Promo />
              <main className="content">
                <Zabors />
                <Advantage />
                <Clients />
                <Youtube />
                <Contacts />
              </main>
              <Footer />
              <Popup isOpen={isOpenPopup} onClose={closePopup} />
            </>
          }
        />
        <Route
          path="/proflist"
          element={
            <>
              <Header openPopup={openPopup} />
              <main className="content">
                <Proflist openPopup={openPopup} />
              </main>
              <Footer />
              <Popup isOpen={isOpenPopup} onClose={closePopup} />
            </>
          }
        />
            <Route
          path="/grid"
          element={
            <>
              <Header openPopup={openPopup} />
              <main className="content">
                <Rabitsa openPopup={openPopup} />
              </main>
              <Footer />
              <Popup isOpen={isOpenPopup} onClose={closePopup} />
            </>
          }
        />
        
      </Routes>
    </div>
  );
}

export default App;
