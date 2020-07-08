import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Popup from "./popup";
import { PopupContext } from "./popupcontext";

const LoadingPage = ({ children }) => <div>{children}</div>;

const MainLayout = ({ children }) => {
  const [ popup, setPopup ] = useState(false);

  return (
    <div>
      <Header />
      {children}
      <PopupContext.Provider value={{ popup, setPopup }}>
        <Footer />
        <Popup />
      </PopupContext.Provider>
    </div>
  );
};

export { LoadingPage, MainLayout };
