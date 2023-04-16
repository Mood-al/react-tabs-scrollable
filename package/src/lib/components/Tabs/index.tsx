/* eslint-disable prettier/prettier */
import React from "react";
import animate from "../../utils/animate";
import { debounce } from "../../utils/debounce";
import { getNormalizedScrollLeft } from "../../utils/getNormalizedScrollLeft";
import ownerDocument from "../../utils/ownderDocument";
import NavBtn from "../NavBtns";
import LeftArrowIcon from "../NavBtns/LeftNavBtnIcon";
import RightArrowIcon from "../NavBtns/RightNavBtnIcon";
type Mode =
  | "scrollSelectedToCenterFromView"
  | "scrollSelectedToCenter"
  | "scrollSelectedToEnd";

interface TabsProps {
  children: React.ReactNode;
  activeTab: number;
  onTabClick: (e: React.BaseSyntheticEvent, id: number) => void;
  animationDuration?: number;
  navBtnCLickAnimationDuration?: number;
  selectedAnimationDuration?: number;
  isRTL?: boolean;
  didReachEnd?: Function;
  didReachStart?: Function;
  hideNavBtnsOnMobile?: boolean;
  hideNavBtns?: boolean;
  tabsScrollAmount?: number;
  mode?: Mode;
  tabsContainerRef?: React.RefObject<HTMLDivElement> | any;
  tabRef?: React.RefObject<HTMLDivElement> | any;
  leftNavBtnRef?: React.Ref<HTMLButtonElement> | any;
  rightNavBtnRef?: React.Ref<HTMLButtonElement> | any;
  navBtnStyle?: object;
  tabsContainerStyle?: object;
  tabsUpperContainerStyle?: object;
  leftNavBtnClassName?: string;
  rightNavBtnClassName?: string;
  navBtnClassName?: string;
  navBtnContainerClassName?: string;
  tabsUpperContainerClassName?: string;
  tabsContainerClassName?: string;
  showTabsScroll?: boolean;
  navBtnAs?: any;
  getTabsBoundingClientRects?: Function;
  action?: React.Ref<{
    onLeftNavBtnClick: () => void;
    onRightNavBtnClick: () => void;
    goToStart: () => void;
    goToEnd: () => void;
  }>;
  rightBtnIcon?: React.FunctionComponent | string;
  leftBtnIcon?: React.FunctionComponent | string;
}
type conditionalNavBtnsObjType = {
  start?: any;
  end?: any;
};

const nextItem = (list: any, item: any) => {
  if (list === item) {
    return list.firstChild;
  }

  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }

  return list.firstChild;
};

const previousItem = (list: any, item: any) => {
  if (list === item) {
    return list.lastChild;
  }

  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }

  return list.lastChild;
};

const moveFocus = (list: any, currentFocus: any, traversalFunction: any) => {
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

let isAnimationActive = false;
const start = "left";
const end = "right";
const scrollLeft = "scrollLeft";

const Tabs: React.FC<TabsProps> = (props) => {
  const {
    children,
    activeTab,
    animationDuration = 300,
    navBtnCLickAnimationDuration = 300,
    selectedAnimationDuration = 300,
    isRTL = false,
    didReachEnd = () => null,
    didReachStart = () => null,
    onTabClick = () => null,
    hideNavBtnsOnMobile = true,
    hideNavBtns = true,
    tabsScrollAmount = 3,
    tabsContainerRef = null,
    tabRef = null,
    mode = "",
    tabsContainerStyle = {},
    navBtnStyle = {},
    tabsUpperContainerStyle = {},
    leftNavBtnClassName = "",
    rightNavBtnClassName = "",
    navBtnClassName = "",
    navBtnContainerClassName = "",
    tabsUpperContainerClassName = "",
    tabsContainerClassName = "",
    leftNavBtnRef = null,
    rightNavBtnRef = null,
    showTabsScroll = true,
    navBtnAs = "button",
    action,
    rightBtnIcon = <RightArrowIcon />,
    leftBtnIcon = <LeftArrowIcon />,
    getTabsBoundingClientRects = () => null,
  } = props;

  const _tabRef = React.useRef<any>([]);
  const _tabsContainerRef = React.useRef<any>(null);
  const [navBtnDisplay, setNavBtnDisplay] = React.useState({
    start: false,
    end: false,
  });
  const getTabsRects = (index: number = activeTab): any => {
    const tabsContainerEl = _tabsContainerRef?.current;
    const selectedTabEl = _tabRef.current?.[index];

    let tabsContainerRects;
    let tabRects;
    if (!activeTab && activeTab !== 0) {
      console.error("react-tabs-scrollable : You have to add activeTab prop");
      return;
    }
    if (tabsContainerEl) {
      const rect = tabsContainerEl.getBoundingClientRect();
      tabsContainerRects = {
        top: rect.top,
        right: rect.right,
        bottom: rect.bottom,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        x: rect.x,
        y: rect.y,
        scrollLeft: tabsContainerEl.scrollLeft,
        clientWidth: tabsContainerEl?.clientWidth,
        scrollWidth: tabsContainerEl?.scrollWidth,
      };
      tabRects = selectedTabEl.getBoundingClientRect();
    }
    getTabsBoundingClientRects({ tabsContainerRects, tabRects });
    return { tabsContainerRects, tabRects };
  };

  const scrollSelectedIntoView = (
    index: number = activeTab,
    animation: boolean = true,
    isClicked?: boolean
  ) => {
    if (!_tabsContainerRef.current) {
      return;
    }
    const { tabsContainerRects, tabRects } = getTabsRects(index);

    const centerPointOfTabs =
      tabsContainerRects.clientWidth / 2 - tabRects.width / 2;

    if (!tabsContainerRects || !tabRects) {
      return;
    }

    // TODO find a better way to handle modes and use Switch to handle conditions!!
    const centerOfViewValue =
      mode === "scrollSelectedToCenter" ||
      mode === "scrollSelectedToCenterFromView"
        ? tabsContainerRects.clientWidth / 2 - tabRects.width / 2
        : 0;
    const endOfViewValue =
      mode === "scrollSelectedToEnd"
        ? tabsContainerRects.clientWidth - tabRects.width
        : 0;
    const additionalScrollValue = centerOfViewValue || endOfViewValue;
    if (tabRects[start] < tabsContainerRects[start]) {
      // left side of button is out of view
      const nextScrollStart =
        tabsContainerRects[scrollLeft] +
        (tabRects[start] - tabsContainerRects[start]) -
        additionalScrollValue;
      scroll(
        nextScrollStart,
        animationDuration || selectedAnimationDuration,
        animation
      );
    } else if (tabRects[end] > tabsContainerRects[end]) {
      // right side of button is out of view
      const nextScrollStart =
        tabsContainerRects[scrollLeft] +
        (tabRects[end] - tabsContainerRects[end]) +
        additionalScrollValue;

      scroll(
        nextScrollStart,
        selectedAnimationDuration || animationDuration,
        animation
      );
    }
    if (
      centerPointOfTabs > tabRects[start] + tabRects.width &&
      isClicked &&
      mode === "scrollSelectedToCenterFromView"
    ) {
      isClicked = false;
      const nextScrollStart =
        tabsContainerRects[scrollLeft] +
        (tabRects[start] - tabsContainerRects[start]) -
        additionalScrollValue;
      scroll(
        nextScrollStart,
        animationDuration || selectedAnimationDuration,
        animation
      );
    } else if (
      centerPointOfTabs < tabRects[start] - tabRects.width &&
      isClicked &&
      mode === "scrollSelectedToCenterFromView"
    ) {
      isClicked = false;
      const nextScrollStart =
        tabsContainerRects[scrollLeft] +
        (tabRects[end] - tabsContainerRects[end]) +
        additionalScrollValue;

      scroll(
        nextScrollStart,
        selectedAnimationDuration || animationDuration,
        animation
      );
    }
  };

  const scroll = (
    scrollValue: number,
    duration: number = 300,
    animation: boolean = true
  ) => {
    if (animation) {
      animate(scrollLeft, _tabsContainerRef.current, scrollValue, {
        duration: duration,
      });
    } else {
      _tabsContainerRef.current.scrollLeft = scrollValue;
    }
  };

  const updateNavBtnsState = (__tabsContainerRef = _tabsContainerRef) => {
    if (!__tabsContainerRef.current) return;
    const scrollLeft = isRTL
      ? getNormalizedScrollLeft(
          __tabsContainerRef.current,
          isRTL ? "rtl" : "ltr"
        )
      : __tabsContainerRef.current.scrollLeft;

    const scrollWidth = __tabsContainerRef.current.scrollWidth;
    const clientWidth = __tabsContainerRef.current.clientWidth;

    const showStartScroll = Math.floor(scrollLeft) > 1;
    const showEndScroll = Math.ceil(scrollLeft) < scrollWidth - clientWidth - 1;

    setNavBtnDisplay({
      start: isRTL ? showEndScroll : showStartScroll,
      end: isRTL ? showStartScroll : showEndScroll,
    });
    didReachStart(!showStartScroll);
    didReachEnd(!showEndScroll);
  };

  React.useEffect(() => {
    if (
      typeof window === "undefined" ||
      typeof ResizeObserver !== "function" ||
      !_tabsContainerRef.current
    ) {
      return;
    }

    const tabObserver = new ResizeObserver((entries) => {
      scrollSelectedIntoView(activeTab, isAnimationActive);
      updateNavBtnsState(_tabsContainerRef);
      isAnimationActive = true;
    });

    tabObserver.observe(_tabsContainerRef.current);
    return () => {
      if (_tabsContainerRef.current) {
        tabObserver.unobserve(_tabsContainerRef.current);
      }
    };
  }, [isRTL]);

  const onNativeTabClick = React.useCallback(
    (e: React.BaseSyntheticEvent, index: number) => {
      onTabClick(e, index);

      scrollSelectedIntoView(index, true, true);
    },
    []
  );

  const handleTabsScroll = React.useMemo(
    () =>
      debounce(() => {
        updateNavBtnsState(_tabsContainerRef);
      }),
    [updateNavBtnsState]
  );
  React.useEffect(() => {
    return () => {
      handleTabsScroll.clear();
    };
  }, [handleTabsScroll]);

  const onRightNavBtnClick = (
    e?: undefined,
    _tabsScrollAmount = tabsScrollAmount
  ) => {
    const { tabsContainerRects } = getTabsRects();

    scroll(
      tabsContainerRects[scrollLeft] +
        _tabRef.current[activeTab]?.clientWidth * _tabsScrollAmount,
      animationDuration || navBtnCLickAnimationDuration
    );
  };
  const onLeftNavBtnClick = (
    e?: undefined,
    _tabsScrollAmount = tabsScrollAmount
  ) => {
    const { tabsContainerRects } = getTabsRects();

    scroll(
      tabsContainerRects[scrollLeft] -
        _tabRef.current[activeTab]?.clientWidth * _tabsScrollAmount,
      animationDuration || navBtnCLickAnimationDuration
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const list = _tabsContainerRef.current;
    const currentFocus = ownerDocument(list).activeElement;

    const role = currentFocus?.getAttribute("role");

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

  const goToStart = () => {
    scroll(0);
  };
  const goToEnd = () => {
    const { tabsContainerRects } = getTabsRects();
    const { scrollWidth } = tabsContainerRects;
    scroll((isRTL ? -1 : 1) * scrollWidth);
  };

  React.useImperativeHandle(
    action,
    () => ({
      onLeftNavBtnClick,
      onRightNavBtnClick,
      goToStart,
      goToEnd,
    }),
    [onLeftNavBtnClick, onRightNavBtnClick, goToStart, goToEnd]
  );

  const navBtnProps = {
    ["aria-hidden"]: "true",
    hideNavBtnsOnMobile,
    navBtnStyle,
    navBtnContainerClassName,
    navBtnAs,
  };

  const getNavBtns = () => {
    if (hideNavBtns) return null;
    let conditionalNavBtns: conditionalNavBtnsObjType = {};

    if (!navBtnDisplay.start && !navBtnDisplay.end) {
      return (conditionalNavBtns = {
        end: null,
        start: null,
      });
    }
    conditionalNavBtns[isRTL ? "end" : "start"] = (
      <NavBtn
        disabled={!navBtnDisplay[isRTL ? "end" : "start"]}
        onClick={onLeftNavBtnClick}
        ref={leftNavBtnRef}
        className={`${leftNavBtnClassName} ${navBtnClassName}`.trim()}
        {...navBtnProps}
      >
        {leftBtnIcon}
      </NavBtn>
    );

    conditionalNavBtns[isRTL ? "start" : "end"] = (
      <NavBtn
        disabled={!navBtnDisplay[isRTL ? "start" : "end"]}
        onClick={onRightNavBtnClick}
        ref={rightNavBtnRef}
        className={`${rightNavBtnClassName} ${navBtnClassName}`.trim()}
        {...navBtnProps}
      >
        {rightBtnIcon}
      </NavBtn>
    );

    return conditionalNavBtns;
  };

  const conditionalNavBtns = getNavBtns();
  return (
    <div
      className={`rts___tabs___container ${tabsUpperContainerClassName}`.trim()}
      style={tabsUpperContainerStyle}
    >
      {conditionalNavBtns?.start}

      <div
        ref={(ref) => {
          _tabsContainerRef.current = ref;
          if (tabsContainerRef) {
            tabsContainerRef.current = ref;
          }
        }}
        role="tablist"
        aria-label="tabs"
        onKeyDown={handleKeyDown}
        onScroll={handleTabsScroll}
        style={tabsContainerStyle}
        className={`rts___tabs ${
          !showTabsScroll ? "hide___rts___tabs___scroll" : ""
        } ${tabsContainerClassName}`.trim()}
      >
        <React.Fragment>
          {React.Children.map(children, (child, index) => {
            if (!React.isValidElement(child)) {
              return null;
            }
            const selected = index === activeTab;
            return React.cloneElement(child as any, {
              ref: (ref: HTMLDivElement) => {
                _tabRef.current[index] = ref;
                if (tabRef) {
                  tabRef.current[index] = ref;
                }
              },

              onClick: (e: React.BaseSyntheticEvent) => {
                onNativeTabClick(e, index);
              },
              ["data-index"]: index,
              role: "tab",
              ["aria-selected"]: selected ? "true" : "false",
              tabIndex: selected ? "0" : "-1",
              selected: selected,
              className: `rts___tab rts___btn ${
                child.props.className || ""
              }`.trim(),
            });
          })}
        </React.Fragment>
      </div>

      {conditionalNavBtns?.end}
    </div>
  );
};

export default Tabs;
