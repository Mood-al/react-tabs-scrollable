import React from "react";
import { useEventCallback } from "../../hooks/useEventCallback";
import { getNormalizedScrollLeft } from "../../utils/getNormalizedScrollLeft";
import animate from "../../utils/animate";
import { debounce } from "../../utils/debounce";
import RightArrowIcon from "../Arrows/RightArrowIcon";
import LeftArrowIcon from "../Arrows/LeftArrowIcon";
import LeftArrow from "../Arrows/LeftArrow";
import RightArrow from "../Arrows/RightArrow";
import ownerDocument from "../../utils/ownerDocument";

const defaultActiveTabPos = {};

const nextItem = (list, item) => {
  if (list === item) {
    return list.firstChild;
  }

  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }

  return list.firstChild;
};

const previousItem = (list, item) => {
  if (list === item) {
    return list.lastChild;
  }

  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }

  return list.lastChild;
};

const moveFocus = (list, currentFocus, traversalFunction) => {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(list, currentFocus);

  while (nextFocus) {
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return;
      }

      wrappedOnce = true;
    }

    const nextFocusDisabled =
      nextFocus.disabled || nextFocus.getAttribute("aria-disabled") === "true";

    if (!nextFocus.hasAttribute("tabindex") || nextFocusDisabled) {
      // Move to the next element.
      nextFocus = traversalFunction(list, nextFocus);
    } else {
      nextFocus.focus();
      return;
    }
  }
};

const Tabs = ({
  onTabClick,
  activeTab,
  isRTL = false,
  children,
  action,
  tabsScrollAmount = 3,
  didReachEnd = () => null,
  didReachStart = () => null,
  selectedTabCoordinates = () => null,
  animationDuration = 300,
  navBtnCLickAnimationDuration = 300,
  selectedAnimationDuration = 300,
  navBtnsIconColor = "rgba(0, 0, 0, 0.6)",
  rightBtnIcon = <RightArrowIcon navBtnsIconColor={navBtnsIconColor} />,
  leftBtnIcon = <LeftArrowIcon navBtnsIconColor={navBtnsIconColor} />,
  hideNavBtnsOnMobile = true,
  hideNavBtns = false,
  showTabsScroll = false,
  className,
}) => {
  tabsScrollAmount = tabsScrollAmount ? parseInt(tabsScrollAmount) : 3;
  animationDuration = animationDuration ? parseInt(animationDuration) : 300;
  navBtnCLickAnimationDuration = navBtnCLickAnimationDuration
    ? parseInt(navBtnCLickAnimationDuration)
    : 300;
  navBtnCLickAnimationDuration = navBtnCLickAnimationDuration
    ? parseInt(navBtnCLickAnimationDuration)
    : 300;

  let start = "left";
  let end = "right";
  let scrollLeft = "scrollLeft";

  const tabsRef = React.useRef(null);
  const tabRef = React.useRef([]);
  const [arrowsDisplay, setArrowsDisplay] = React.useState({
    start: false,
    end: false,
  });
  const [activeTabPosition, setActiveTabPosition] =
    React.useState(defaultActiveTabPos);

  const getTabsRects = () => {
    const tabsNode = tabsRef.current;
    let tabsRects;

    if (tabsNode) {
      const rect = tabsNode.getBoundingClientRect();

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

    let tabRects;

    if (tabsNode) {
      const children = tabRef.current;

      if (children.length > 0) {
        const tab = tabRef.current[activeTab];

        tabRects = tab ? tab.getBoundingClientRect() : null;
      }
    }

    return {
      tabsRects,
      tabRects,
    };
  };

  const updateActiveTabPosition = useEventCallback(() => {
    const { tabsRects, tabRects } = getTabsRects();
    let startValue = 0;
    let startActiveTabPosition;

    startActiveTabPosition = isRTL ? "right" : "left";

    if (tabRects && tabsRects) {
      const correction = isRTL
        ? tabsRects.scrollLeftNormalized +
          tabsRects.clientWidth -
          tabsRects.scrollWidth
        : tabsRects.scrollLeft;
      startValue =
        (isRTL ? -1 : 1) *
        (tabRects[startActiveTabPosition] -
          tabsRects[startActiveTabPosition] +
          correction);
    }

    const newActiveTabPosition = {
      [startActiveTabPosition]: startValue,

      width: tabRects ? tabRects["width"] : 0,
    };

    if (
      isNaN(activeTabPosition[startActiveTabPosition]) ||
      isNaN(activeTabPosition["width"])
    ) {
      setActiveTabPosition(newActiveTabPosition);
    } else {
      const dStart = Math.abs(
        activeTabPosition[startActiveTabPosition] -
          newActiveTabPosition[startActiveTabPosition]
      );
      const dSize = Math.abs(
        activeTabPosition["width"] - newActiveTabPosition["width"]
      );

      if (dStart >= 1 || dSize >= 1) {
        setActiveTabPosition(newActiveTabPosition);
      }
    }
  });

  const updateNavBtnsState = useEventCallback(() => {
    const { scrollWidth, clientWidth } = tabsRef.current;
    let showStartScroll;
    let showEndScroll;

    const scrollLeft = getNormalizedScrollLeft(
      tabsRef.current,
      isRTL ? "rtl" : "ltr"
    );

    showStartScroll = Math.floor(scrollLeft.toFixed(2)) > 1;
    showEndScroll =
      Math.ceil(scrollLeft.toFixed(2)) < scrollWidth - clientWidth - 1;

    if (
      showStartScroll !== arrowsDisplay.start ||
      showEndScroll !== arrowsDisplay.end
    ) {
      setArrowsDisplay({
        start: showStartScroll,
        end: showEndScroll,
      });
      didReachEnd(!showEndScroll);
      didReachStart(!showStartScroll);
    }
  });

  const onRightBtnClick = () => {
    const { tabsRects } = getTabsRects();

    scroll(
      tabsRects[scrollLeft] +
        tabRef.current[activeTab].clientWidth * tabsScrollAmount,
      navBtnCLickAnimationDuration
        ? navBtnCLickAnimationDuration
        : animationDuration
    );
  };

  const onLeftBtnClick = () => {
    const { tabsRects } = getTabsRects();

    scroll(
      tabsRects[scrollLeft] -
        tabRef.current[activeTab].clientWidth * tabsScrollAmount,
      navBtnCLickAnimationDuration
        ? navBtnCLickAnimationDuration
        : animationDuration
    );
  };

  const goToStart = () => {
    scroll(0);
  };
  const goToEnd = () => {
    const { tabsRects } = getTabsRects();
    const { scrollWidth } = tabsRects;
    scroll((isRTL ? -1 : 1) * scrollWidth);
  };

  React.useImperativeHandle(
    action,
    () => ({
      onLeftBtnClick,
      onRightBtnClick,
      goToStart,
      goToEnd,
    }),
    [onLeftBtnClick, onRightBtnClick, goToStart, goToEnd]
  );

  const onNativeTabClick = useEventCallback((e, index) => {
    onTabClick(e, index);
  });

  const scroll = (scrollValue, duration, animation = true) => {
    if (animation) {
      animate(scrollLeft, tabsRef.current, scrollValue, {
        duration: duration ? duration : 300,
      });
    } else {
      tabsRef.current.scrollLeft = scrollValue;
    }
  };

  const scrollSelectedIntoView = useEventCallback((animation) => {
    const { tabsRects, tabRects } = getTabsRects();

    if (!tabsRects || !tabRects) {
      return;
    }
    if (tabRects[start] < tabsRects[start]) {
      // left side of button is out of view
      const nextScrollStart =
        tabsRects[scrollLeft] + (tabRects[start] - tabsRects[start]);

      scroll(
        nextScrollStart,
        selectedAnimationDuration
          ? selectedAnimationDuration
          : animationDuration,
        animation
      );
    } else if (tabRects[end] > tabsRects[end]) {
      // right side of button is out of view
      const nextScrollStart =
        tabsRects[scrollLeft] + (tabRects[end] - tabsRects[end]);

      scroll(
        nextScrollStart,
        selectedAnimationDuration
          ? selectedAnimationDuration
          : animationDuration
      );
    }
  });

  React.useEffect(() => {
    const handleResize = debounce(() => {
      updateActiveTabPosition();
      updateNavBtnsState();
    });

    const win = tabsRef.current;
    win.addEventListener("resize", handleResize);
    let resizeObserver;

    if (typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(handleResize);
      Array.from(tabRef.current).forEach((child) => {
        resizeObserver.observe(child);
      });
    }

    return () => {
      handleResize.clear();
      win.removeEventListener("resize", handleResize);

      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [updateActiveTabPosition, updateNavBtnsState]);

  const handleTabsScroll = React.useMemo(
    () =>
      debounce(() => {
        updateNavBtnsState();
      }),
    [updateNavBtnsState]
  );
  React.useEffect(() => {
    return () => {
      handleTabsScroll.clear();
    };
  }, [handleTabsScroll]);

  React.useEffect(() => {
    updateActiveTabPosition();
    updateNavBtnsState();
  });

  React.useEffect(() => {
    scrollSelectedIntoView(defaultActiveTabPos !== activeTabPosition);

    selectedTabCoordinates(activeTabPosition);
  }, [scrollSelectedIntoView, activeTabPosition]);

  // React.useEffect(() => {
  //   // I put the timeout becaReact.use there is an issue happened when i put an external css file
  //   // I tried to fix it or at least know why did that happened but i couldnt find the issue so i put this timeout.
  //   // so this timeout responsible on triggring this function after 100s to aviod some unexpected bugs
  //   // the issue that i faced when i React.used a main css file inside my project and tried to React.use Raleway font from google fonts inside that css file
  //   // so when I imported this css file inside my project this function didnt trigger
  //   //  on first render and that caReact.used a bug inside the navigation button
  //   // const timer = setTimeout(() =>
  //   updateNavBtnsState()
  //   // , 100);
  //   // return () => clearTimeout(timer);
  // }, [isRTL]);

  const handleKeyDown = (event) => {
    const list = tabsRef.current;
    const currentFocus = ownerDocument(list).activeElement;

    const role = currentFocus.getAttribute("role");

    if (role !== "tab") {
      return;
    }

    let previousItemKey = "ArrowLeft";
    let nextItemKey = "ArrowRight";

    if (isRTL) {
      // swap previousItemKey with nextItemKey
      previousItemKey = "ArrowRight";
      nextItemKey = "ArrowLeft";
    }

    switch (event.key) {
      case previousItemKey:
        event.preventDefault();
        moveFocus(list, currentFocus, previousItem);
        break;

      case nextItemKey:
        event.preventDefault();
        moveFocus(list, currentFocus, nextItem);
        break;

      case "Home":
        event.preventDefault();
        moveFocus(list, null, nextItem);
        break;

      case "End":
        event.preventDefault();
        moveFocus(list, null, previousItem);
        break;

      default:
        break;
    }
  };

  //  TODO find a new way to control prev and next btns!
  const startBtn = (
    <div
      className={`rn___nav___btn___container ${
        hideNavBtnsOnMobile ? "display___md___none" : ""
      }`}
    >
      {!hideNavBtns && (
        <>
          {isRTL ? (
            <RightArrow
              disabled={!arrowsDisplay.end}
              className={`rn___right___nav___btn rn___btn rn___nav___btn `}
              onClick={onRightBtnClick}
              dir="ltr"
              rightBtnIcon={rightBtnIcon}
            />
          ) : (
            <LeftArrow
              disabled={!arrowsDisplay.start}
              className={`rn___left___nav___btn rn___btn rn___nav___btn `}
              onClick={onLeftBtnClick}
              dir="ltr"
              leftBtnIcon={leftBtnIcon}
            />
          )}
        </>
      )}
    </div>
  );

  const endBtn = (
    <div
      className={`rn___nav___btn___container ${
        hideNavBtnsOnMobile ? "display___md___none" : ""
      }`}
    >
      {!hideNavBtns && (
        <>
          {isRTL ? (
            <LeftArrow
              disabled={!arrowsDisplay.start}
              className={`rn___left___nav___btn rn___btn rn___nav___btn `}
              onClick={onLeftBtnClick}
              dir="ltr"
              leftBtnIcon={leftBtnIcon}
            />
          ) : (
            <RightArrow
              disabled={!arrowsDisplay.end}
              className={`rn___right___nav___btn rn___btn rn___nav___btn`}
              onClick={onRightBtnClick}
              dir="ltr"
              rightBtnIcon={rightBtnIcon}
            />
          )}
        </>
      )}
    </div>
  );
  let childIndex = 0;

  return (
    <div className={`rn___tabs___container`}>
      {startBtn}
      <div
        ref={tabsRef}
        role="tablist"
        aria-label="tabs"
        onKeyDown={handleKeyDown}
        onScroll={handleTabsScroll}
        className={`rn___tabs ${className ? className : ""} ${
          !showTabsScroll ? "hide___rn___tabs___scroll" : ""
        }`}
      >
        <>
          {React.Children.map(children, (child, index) => {
            const selected = childIndex === activeTab;
            childIndex += 1;

            return React.cloneElement(child, {
              ref: (ref) => (tabRef.current[index] = ref),
              onClick: (e) => onNativeTabClick(e, index),
              role: "tab",
              ["aria-selected"]: selected ? "true" : "false",
              id: `tab-${childIndex}`,
              tabIndex: selected ? "0" : "-1",
              className: `rn___tab rn___btn ${
                child.props.className ? child.props.className : ""
              }`,
              selected: selected,
            });
          })}
        </>
      </div>
      {endBtn}
    </div>
  );
};

export default Tabs;
