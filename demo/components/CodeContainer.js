import React, { useEffect, useState } from "react";

import Title from "./Title";
import { GrCodeSandbox } from "react-icons/gr";
import { FiCopy } from "react-icons/fi";

const CodeContainer = ({ title, content, codesandboxURL, example }) => {
  const [cachedShowCodeSandBox, setCachedShowCodeSandBox] = useState(false);
  const [showCodeSandBox, setShowCodeSandBox] = useState(false);
  const onCodeSandBoxBtnClick = () => {
    setShowCodeSandBox(true);

    setCachedShowCodeSandBox((prev) => !prev);
  };
  const onCopyBtnClick = () => {};
  const [isHashSelected, setIsHashSelected] = useState(false);

  useEffect(() => {
    if (typeof window !== "undfined") {
      setIsHashSelected(
        title?.replace(/\s+/g, "") === window.location.hash.split("#")[1]
      );

      if (title?.replace(/\s+/g, "") === window.location.hash.split("#")[1]) {
        setShowCodeSandBox(true);
        setCachedShowCodeSandBox(true);
      }
    }
  }, []);

  const listenToPopstate = () => {
    setIsHashSelected(
      title?.replace(/\s+/g, "") === window.location.hash.split("#")[1]
    );

    if (title?.replace(/\s+/g, "") === window.location.hash.split("#")[1]) {
      setShowCodeSandBox(true);
      setCachedShowCodeSandBox(true);
    }
  };
  useEffect(() => {
    window.addEventListener("popstate", listenToPopstate);
    return () => {
      window.removeEventListener("popstate", listenToPopstate);
    };
  }, []);

  return (
    <div>
      <Title
        className="display-6"
        title={title}
        content={content}
        isHashSelected={isHashSelected}
      />

      <div className="p-2 shadow-sm" id={title.replace(/\s+/g, "")}>
        {example}
      </div>

      {codesandboxURL && (
        <>
          <div
            className="btn-toolbar my-3 d-flex justify-content-center"
            role="toolbar"
            aria-label="Toolbar with button groups"
          >
            <div
              className="btn-group me-2"
              role="group"
              aria-label="First group"
            >
              <button
                dir="auto"
                onClick={onCopyBtnClick}
                type="button"
                className="btn btn-outline-secondary"
              >
                <span className="d-sm-flex d-none">Copy codesandbox url</span>
                <span className="d-flex d-sm-none">
                  <FiCopy size={25} />
                </span>
              </button>

              <button
                dir="auto"
                type="button"
                onClick={onCodeSandBoxBtnClick}
                className={`btn btn-outline-secondary ${
                  showCodeSandBox && cachedShowCodeSandBox ? "active" : ""
                }`}
              >
                <span className="d-sm-flex d-none">Show codesandbox</span>
                <span className="d-flex d-sm-none">
                  <GrCodeSandbox size={25} />
                </span>
              </button>
            </div>
          </div>

          <>
            {showCodeSandBox && (
              <div
                className={`${cachedShowCodeSandBox ? "d-block" : "d-none"}`}
              >
                <iframe
                  src={codesandboxURL}
                  style={{
                    width: "100%",
                    height: "500px",
                    border: "0",
                    borderRadius: "4px",
                    overflow: "hidden",
                  }}
                  allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                />
              </div>
            )}
          </>
        </>
      )}
    </div>
  );
};

export default CodeContainer;
