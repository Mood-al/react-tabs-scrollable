import React, { useContext } from "react";
import { RTLContext } from "../../context/RTLContext";

const RtlSwitchBtn = () => {
  const { isRTL, onRTLSwitcher } = useContext(RTLContext);

  return (
    <div className="d-flex my-3">
      <button onClick={onRTLSwitcher} className="btn rn___btn flex-fill">
        Switch to {isRTL ? "LTR" : "RTL"} Mode{" "}
      </button>
    </div>
  );
};

export default RtlSwitchBtn;
