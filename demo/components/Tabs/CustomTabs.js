import styled from "@emotion/styled";
import { useEventCallback } from "../../hooks/useEventCallback";
import { getNormalizedScrollLeft } from "../../utils/getNormalizedScrollLeft";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

import animate from "../../utils/animate";
import { debounce } from "../../utils/debounce";
import RightArrowIcon from "../Arrows/RightArrowIcon";
import LeftArrowIcon from "../Arrows/LeftArrowIcon";
import LeftArrow from "../Arrows/LeftArrow";
import RightArrow from "../Arrows/RightArrow";

const defaultIndicatorStyle = {};

const CutomTabs = ({
  onTabClick,
  activeTab,
  isRTL,
  children,
  action,
  tabsScrollAmount = 3,
  didReachEnd = () => null,
  didReachStart = () => null,
  animationDuration = 300,
  navBtnCLickAnimationDuration = 300,
  selectedAnimationDuration = 300,
  rightBtnIcon = <RightArrowIcon />,
  leftBtnIcon = <LeftArrowIcon />,
}) => {
  const tabsRef = useRef();
  const tabRef = useRef([]);

  const [displayScroll, setDisplayScroll] = useState({
    start: false,
    end: false,
  });
  const [indicatorStyle, setIndicatorStyle] = useState(defaultIndicatorStyle);

  const getTabsRects = () => {
    const tabsNode = tabsRef.current;
    let tabsRects;

    if (tabsNode) {
      const rect = tabsNode.getBoundingClientRect(); // create a new object with ClientRect class props + scrollLeft

      tabsRects = {
        clientWidth: tabsNode.clientWidth,
        scrollLeft: tabsNode.scrollLeft,
        scrollTop: tabsNode.scrollTop,
        scrollLeftNormalized: getNormalizedScrollLeft(
          tabsNode,
          isRTL ? "rtl" : "ltr"
        ),
        scrollWidth: tabsNode.scrollWidth,
        top: rect.top,
        bottom: rect.bottom,
        left: rect.left,
        right: rect.right,
      };
    }

    let tabRect;

    if (tabsNode) {
      const children = tabRef.current;

      if (children.length > 0) {
        const tab = tabRef.current[activeTab];

        tabRect = tab ? tab.getBoundingClientRect() : null;
      }
    }

    return {
      tabsRects,
      tabRect,
    };
  };

  const updateIndicatorState = useEventCallback(() => {
    const { tabsRects, tabRect } = getTabsRects();
    let startValue = 0;
    let startIndicator;

    startIndicator = isRTL ? "right" : "left";

    if (tabRect && tabsRects) {
      const correction = isRTL
        ? tabsRects.scrollLeftNormalized +
          tabsRects.clientWidth -
          tabsRects.scrollWidth
        : tabsRects.scrollLeft;
      startValue =
        (isRTL ? -1 : 1) *
        (tabRect[startIndicator] - tabsRects[startIndicator] + correction);
    }

    const newIndicatorStyle = {
      [startIndicator]: startValue,
      // May be wrong until the font is loaded.
      ["width"]: tabRect ? tabRect["width"] : 0,
    }; // IE11 support, replace with Number.isNaN
    // eslint-disable-next-line no-restricted-globals

    if (
      isNaN(indicatorStyle[startIndicator]) ||
      isNaN(indicatorStyle["width"])
    ) {
      setIndicatorStyle(newIndicatorStyle);
    } else {
      const dStart = Math.abs(
        indicatorStyle[startIndicator] - newIndicatorStyle[startIndicator]
      );
      const dSize = Math.abs(
        indicatorStyle["width"] - newIndicatorStyle["width"]
      );

      if (dStart >= 1 || dSize >= 1) {
        setIndicatorStyle(newIndicatorStyle);
      }
    }
  });

  const updateScrollButtonState = useEventCallback(() => {
    const { scrollWidth, clientWidth } = tabsRef.current;
    let showStartScroll;
    let showEndScroll;

    const scrollLeft = getNormalizedScrollLeft(
      tabsRef.current,
      isRTL ? "rtl" : "ltr"
    ); // use 1 for the potential rounding error with browser zooms.

    showStartScroll = Math.floor(scrollLeft.toFixed(2)) > 1;
    showEndScroll =
      Math.ceil(scrollLeft.toFixed(2)) < scrollWidth - clientWidth - 1;

    if (
      showStartScroll !== displayScroll.start ||
      showEndScroll !== displayScroll.end
    ) {
      setDisplayScroll({
        start: showStartScroll,
        end: showEndScroll,
      });
      didReachEnd(!showEndScroll);
      didReachStart(!showStartScroll);
    }
  });

  const onRightBtnClick = () => {
    scroll(
      tabsRef.current.scrollLeft +
        tabRef.current[activeTab].clientWidth * tabsScrollAmount,
      navBtnCLickAnimationDuration
        ? navBtnCLickAnimationDuration
        : animationDuration
    );
  };

  const onLeftBtnClick = () => {
    console.log(tabRef.current);
    // if (tabsRef.current.clientWidth < tabsRef.current.scrollWidth) {
    //   scroll(-tabRef.current[0].offsetWidth);
    //   // tabsRef.current.scrollLeft -= tabRef.current[0].offsetWidth;
    // }
    // moveTabsScroll(-1 * tabsRef.current.clientWidth);
    scroll(
      tabsRef.current.scrollLeft -
        tabRef.current[activeTab].clientWidth * tabsScrollAmount,
      navBtnCLickAnimationDuration
        ? navBtnCLickAnimationDuration
        : animationDuration
    );
  };

  React.useImperativeHandle(
    action,
    () => ({
      onLeftBtnClick,
      onRightBtnClick,
    }),
    [onLeftBtnClick, onRightBtnClick]
  );

  const onNativeTabClick = (e, index) => {
    onTabClick(e, index);
  };

  const scroll = (scrollValue, duration, animation = true) => {
    console.log(scrollValue);
    if (animation) {
      animate("scrollLeft", tabsRef.current, scrollValue, {
        duration: duration ? duration : 300,
      });
    } else {
      tabsRef.current.scrollLeft = scrollValue;
    }
  };

  const scrollSelectedIntoView = useEventCallback(() => {
    console.log("dfffffff");
    let start = "left";
    let end = "right";

    if (
      tabRef.current[activeTab].getBoundingClientRect()[start] <
      tabsRef.current.getBoundingClientRect()[start]
    ) {
      // left side of button is out of view
      const nextScrollStart =
        tabsRef.current.scrollLeft +
        (tabRef.current[activeTab].getBoundingClientRect()[start] -
          tabsRef.current.getBoundingClientRect()[start]);
      // tabsRef.current.scrollLeft = nextScrollStart;
      scroll(
        nextScrollStart,
        selectedAnimationDuration
          ? selectedAnimationDuration
          : animationDuration
      );
    } else if (
      tabRef.current[activeTab].getBoundingClientRect()[end] >
      tabsRef.current.getBoundingClientRect()[end]
    ) {
      // right side of button is out of view
      const nextScrollStart =
        tabsRef.current.scrollLeft +
        (tabRef.current[activeTab].getBoundingClientRect()[end] -
          tabsRef.current.getBoundingClientRect()[end]);
      // tabsRef.current.scrollLeft = nextScrollStart;
      scroll(
        nextScrollStart,
        selectedAnimationDuration
          ? selectedAnimationDuration
          : animationDuration
      );
    }
  });

  React.useEffect(() => {
    // Don't animate on the first render.
    scrollSelectedIntoView();
  }, [scrollSelectedIntoView, indicatorStyle]);

  React.useEffect(() => {
    /* Updating the indicator state. */
    updateIndicatorState();
    // updateScrollButtonState();
  });

  useEffect(() => {
    updateScrollButtonState();
  }, [isRTL]);

  const handleTabsScroll = React.useMemo(
    () =>
      debounce(() => {
        updateScrollButtonState();
      }),
    [updateScrollButtonState]
  );
  React.useEffect(() => {
    return () => {
      handleTabsScroll.clear();
    };
  }, [handleTabsScroll]);

  return (
    <StyledTabsContainer>
      {isRTL ? (
        <RightArrow
          disabled={!displayScroll.end}
          className="right"
          onClick={onRightBtnClick}
          dir="ltr"
          rightBtnIcon={rightBtnIcon}
        />
      ) : (
        <LeftArrow
          disabled={!displayScroll.start}
          className="left"
          onClick={onLeftBtnClick}
          dir="ltr"
          leftBtnIcon={leftBtnIcon}
        />
      )}

      <StyledCutomTabs
        ref={tabsRef}
        role="tablist"
        aria-label="tabs"
        onScroll={handleTabsScroll}
      >
        <>
          {React.Children.map(children, (child, index) =>
            React.cloneElement(child, {
              ref: (ref) => (tabRef.current[index] = ref),
              onClick: (e) => onNativeTabClick(e, index),
              role: "tab",
              ["aria-selected"]: activeTab === index ? "true" : "false",
              ["aria-controls"]: `panel-${index}`,
              id: `tab-${index}`,
              tabIndex: activeTab === index ? "0" : "-1",
            })
          )}
        </>
      </StyledCutomTabs>

      {isRTL ? (
        <LeftArrow
          disabled={!displayScroll.start}
          className="left"
          onClick={onLeftBtnClick}
          dir="ltr"
          leftBtnIcon={leftBtnIcon}
        />
      ) : (
        <RightArrow
          disabled={!displayScroll.end}
          className="right"
          onClick={onRightBtnClick}
          dir="ltr"
          rightBtnIcon={rightBtnIcon}
        />
      )}
    </StyledTabsContainer>
  );
};

export default CutomTabs;
const StyledCutomTabs = styled.div`
  box-sizing: border-box;
  /* scroll-behavior: smooth; */
  background: red;
  display: flex;
  overflow: auto;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  /* position: relative; */
  .tab {
    padding: 10px 40px;
    white-space: nowrap;
    cursor: pointer;
  }
  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledTabsContainer = styled.div`
  padding: 0 25px;
  position: relative;
  display: flex;
  button {
    /* position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    &.right {
      right: -0px;
    }
    &.left {
      left: -0px;
    } */
  }
`;
