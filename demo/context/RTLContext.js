import { createContext, useEffect, useState } from "react";

const RTLContext = createContext();

const RTLProvider = ({ children, ...props }) => {
  const [isRTL, setIsRTL] = useState(false);
  const onRTLSwitcher = () => {
    setIsRTL((prev) => !prev);
  };

  useEffect(() => {
    const body = document.querySelector("body");
    isRTL ? body.setAttribute("dir", "rtl") : body.setAttribute("dir", "ltr");
  }, [isRTL]);
  return (
    <RTLContext.Provider value={{ ...props, onRTLSwitcher, isRTL, setIsRTL }}>
      {children}
    </RTLContext.Provider>
  );
};

export { RTLProvider, RTLContext };
