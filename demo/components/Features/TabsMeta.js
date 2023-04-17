import React from "react";

const TabsMeta = ({
  activeTab,
  isLeftArrowDisapled,
  isRightArrowDisapled,
  selectedTabDOMRect,
  isRTL,
}) => {
  return (
    <div className="row my-3">
      <ul className="list-group list-group-flush col-md-6">
        <li className="list-group-item">
          reached the start of tabs container :{" "}
          <span className="badge bg-primary">
            {" "}
            {isLeftArrowDisapled ? "true" : "false"}
          </span>
        </li>
        <li className="list-group-item">
          selected tab index :{" "}
          <span className="badge bg-primary"> {activeTab}</span>
        </li>
        <li className="list-group-item"></li>
      </ul>
      <ul className="list-group list-group-flush col-md-6">
        <li className="list-group-item">
          reached the end of tabs container :{" "}
          <span className="badge bg-primary">
            {" "}
            {isRightArrowDisapled ? "true" : "false"}
          </span>
        </li>
        <li className="list-group-item">
          <div>
            tabsContainerRects :{" "}
            {JSON.stringify(selectedTabDOMRect.tabsContainerRects, null, 2)}
          </div>
          <hr />
          <div>
            tabRects : {JSON.stringify(selectedTabDOMRect.tabRects, null, 2)}
          </div>
        </li>
        <li className="list-group-item"></li>
      </ul>
    </div>
  );
};

export default TabsMeta;
