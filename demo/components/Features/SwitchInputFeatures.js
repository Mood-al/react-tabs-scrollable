import React from "react";

const SwitchInputFeatures = ({ onSwitchChange, showTabsFeaturesObj }) => {
  return (
    <>
      {" "}
      <div className="col-md-3">
        <div className="form-check form-switch mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="hideNavBtns"
            name="hideNavBtns"
            onChange={onSwitchChange}
            checked={showTabsFeaturesObj.hideNavBtns}
          />
          <label className="form-check-label" htmlFor="hideNavBtns">
            Hide navigantion buttons
          </label>
        </div>
      </div>
      <div className="col-md-4">
        <div className="form-check form-switch mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="hideNavBtnsOnMobile"
            name="hideNavBtnsOnMobile"
            onChange={onSwitchChange}
            checked={showTabsFeaturesObj.hideNavBtnsOnMobile}
          />
          <label className="form-check-label" htmlFor="hideNavBtnsOnMobile">
            Hide navigantion buttons on mobile screen
          </label>
        </div>
      </div>
      <div className="col-md-4">
        <div className="form-check form-switch mt-3">
          <input
            className="form-check-input"
            type="checkbox"
            role="switch"
            id="showTabsScroll"
            name="showTabsScroll"
            onChange={onSwitchChange}
            checked={showTabsFeaturesObj.showTabsScroll}
          />
          <label className="form-check-label" htmlFor="showTabsScroll">
            show tabs scroll
          </label>
        </div>
      </div>
    </>
  );
};

export default SwitchInputFeatures;
