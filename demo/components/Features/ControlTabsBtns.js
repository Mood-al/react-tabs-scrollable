const ControlTabsBtns = ({ tabsRef }) => {
  return (
    <div className="row">
      <div className="col-md-6 d-flex">
        <button
          className="flex-fill btn rn___btn"
          onClick={() => tabsRef.current.goToStart()}
        >
          move tabs to the start point
        </button>
      </div>
      <div className="col-md-6 d-flex">
        <button
          className="flex-fill btn rn___btn mt-md-0 mt-2"
          onClick={() => tabsRef.current.goToEnd()}
        >
          move tabs to the end point
        </button>
      </div>
    </div>
  );
};

export default ControlTabsBtns;
