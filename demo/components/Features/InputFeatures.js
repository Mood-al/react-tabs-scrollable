const InputFeatures = ({ showTabsFeaturesObj, onInputChange }) => {
  return (
    <>
      {" "}
      <div className="col-md-3">
        <label htmlFor="tabsScrollAmount" className="col-form-label">
          Tabs scroll amount
        </label>
        <input
          type="number"
          id="tabsScrollAmount"
          className="form-control"
          aria-describedby="tabsScrollAmount"
          name="tabsScrollAmount"
          value={showTabsFeaturesObj.tabsScrollAmount}
          onChange={onInputChange}
        />
      </div>
      <div className="col-md-3">
        <label htmlFor="animationDuration" className="col-form-label">
          Animation duration
        </label>
        <input
          type="number"
          id="animationDuration"
          className="form-control"
          aria-describedby="animationDuration"
          name="animationDuration"
          value={showTabsFeaturesObj.animationDuration}
          onChange={onInputChange}
        />
      </div>
      <div className="col-md-3">
        <label htmlFor="selectedAnimationDuration" className="col-form-label">
          Selected animation duration
        </label>
        <input
          type="number"
          id="selectedAnimationDuration"
          className="form-control"
          aria-describedby="selectedAnimationDuration"
          name="selectedAnimationDuration"
          value={showTabsFeaturesObj.selectedAnimationDuration}
          onChange={onInputChange}
        />
      </div>
      <div className="col-md-3">
        <label
          htmlFor="navBtnCLickAnimationDuration"
          className="col-form-label"
        >
          Navigantion btn cLick animation Duration
        </label>
        <input
          type="number"
          id="navBtnCLickAnimationDuration"
          className="form-control"
          aria-describedby="navBtnCLickAnimationDuration"
          name="navBtnCLickAnimationDuration"
          value={showTabsFeaturesObj.navBtnCLickAnimationDuration}
          onChange={onInputChange}
        />
      </div>
    </>
  );
};

export default InputFeatures;
