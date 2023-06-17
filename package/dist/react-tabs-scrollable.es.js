import React from "react";
var rts = "";
function easeInOutSin(time) {
  return (1 + Math.sin(Math.PI * time - Math.PI / 2)) / 2;
}
function animate(property, element, to, options = {}, cb = () => {
}) {
  const {
    ease = easeInOutSin,
    duration = 300
  } = options;
  let start2 = null;
  const from = element[property];
  let cancelled = false;
  const cancel = () => {
    cancelled = true;
  };
  const step = (timestamp) => {
    if (cancelled) {
      cb(new Error("Animation cancelled"));
      return;
    }
    if (start2 === null) {
      start2 = timestamp;
    }
    const time = Math.min(1, (timestamp - start2) / duration);
    element[property] = ease(time) * (to - from) + from;
    if (time >= 1) {
      requestAnimationFrame(() => {
        cb(null);
      });
      return;
    }
    requestAnimationFrame(step);
  };
  if (from === to) {
    cb(new Error("Element already at target position"));
    return cancel;
  }
  requestAnimationFrame(step);
  return cancel;
}
const debounce = (func, wait = 166) => {
  let timeout;
  const debounced = (...args) => {
    const later = () => {
      func.apply(void 0, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
  debounced.clear = () => {
    clearTimeout(timeout);
  };
  return debounced;
};
var inDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
var cachedType;
function detectScrollType() {
  if (cachedType) {
    return cachedType;
  }
  if (!inDOM || !window.document.body) {
    return "indeterminate";
  }
  var dummy = window.document.createElement("div");
  dummy.appendChild(document.createTextNode("ABCD"));
  dummy.dir = "rtl";
  dummy.style.fontSize = "14px";
  dummy.style.width = "4px";
  dummy.style.height = "1px";
  dummy.style.position = "absolute";
  dummy.style.top = "-1000px";
  dummy.style.overflow = "scroll";
  document.body.appendChild(dummy);
  cachedType = "reverse";
  if (dummy.scrollLeft > 0) {
    cachedType = "default";
  } else {
    dummy.scrollLeft = 2;
    if (dummy.scrollLeft < 2) {
      cachedType = "negative";
    }
  }
  document.body.removeChild(dummy);
  return cachedType;
}
function getNormalizedScrollLeft(element, direction) {
  var scrollLeft2 = element.scrollLeft;
  if (direction !== "rtl") {
    return scrollLeft2;
  }
  var type = detectScrollType();
  if (type === "indeterminate") {
    return Number.NaN;
  }
  switch (type) {
    case "negative":
      return element.scrollWidth - element.clientWidth + scrollLeft2;
    case "reverse":
      return element.scrollWidth - element.clientWidth - scrollLeft2;
  }
  return scrollLeft2;
}
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = React, g = 60103;
reactJsxRuntime_production_min.Fragment = 60107;
if ("function" === typeof Symbol && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  reactJsxRuntime_production_min.Fragment = h("react.fragment");
}
var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = Object.prototype.hasOwnProperty, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, k) {
  var b, d = {}, e = null, l = null;
  void 0 !== k && (e = "" + k);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (l = a.ref);
  for (b in a)
    n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: g, type: c, key: e, ref: l, props: d, _owner: m.current };
}
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
const Fragment = jsxRuntime.exports.Fragment;
const NavBtn = React.forwardRef(({
  hideNavBtnsOnMobile,
  disabled,
  onClick = () => null,
  children,
  navBtnStyle,
  className = "",
  navBtnContainerClassName,
  navBtnAs = "button"
}, ref) => {
  const containerClassNames = `rts___nav___btn___container ${hideNavBtnsOnMobile ? "display___md___none" : ""} ${navBtnContainerClassName}`.trim();
  const Tag = navBtnAs;
  const buttonSpecialProps = {
    disabled,
    type: "button"
  };
  return /* @__PURE__ */ jsx("div", {
    className: containerClassNames,
    children: /* @__PURE__ */ jsx(Tag, {
      ...navBtnAs === "button" ? buttonSpecialProps : {},
      className: `rts___btn rts___nav___btn ${className}`,
      onClick,
      style: navBtnStyle,
      dir: "ltr",
      "aria-hidden": "true",
      ref,
      children
    })
  });
});
const LeftArrowIcon = () => {
  return /* @__PURE__ */ jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-arrow-left rts___svg___icon",
    children: [/* @__PURE__ */ jsx("line", {
      x1: "19",
      y1: "12",
      x2: "5",
      y2: "12"
    }), /* @__PURE__ */ jsx("polyline", {
      points: "12 19 5 12 12 5"
    })]
  });
};
const RightArrowIcon = () => {
  return /* @__PURE__ */ jsxs("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-arrow-right rts___svg___icon",
    children: [/* @__PURE__ */ jsx("line", {
      x1: "5",
      y1: "12",
      x2: "19",
      y2: "12"
    }), /* @__PURE__ */ jsx("polyline", {
      points: "12 5 19 12 12 19"
    })]
  });
};
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
    const nextFocusDisabled = nextFocus.disabled || nextFocus.getAttribute("aria-disabled") === "true";
    if (!nextFocus.hasAttribute("tabindex") || nextFocusDisabled) {
      nextFocus = traversalFunction(list, nextFocus);
    } else {
      nextFocus.focus();
      return;
    }
  }
};
const start = "left";
const end = "right";
const scrollLeft = "scrollLeft";
const Tabs = (props) => {
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
    hideNavBtns = false,
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
    showTabsScroll = false,
    navBtnAs = "button",
    action,
    rightBtnIcon = /* @__PURE__ */ jsx(RightArrowIcon, {}),
    leftBtnIcon = /* @__PURE__ */ jsx(LeftArrowIcon, {}),
    getTabsBoundingClientRects = () => null
  } = props;
  const _tabRef = React.useRef([]);
  const _tabsContainerRef = React.useRef(null);
  const [navBtnDisplay, setNavBtnDisplay] = React.useState({
    start: false,
    end: false
  });
  const getTabsRects = (index = activeTab) => {
    var _a;
    const tabsContainerEl = _tabsContainerRef == null ? void 0 : _tabsContainerRef.current;
    const selectedTabEl = (_a = _tabRef.current) == null ? void 0 : _a[index];
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
        clientWidth: tabsContainerEl == null ? void 0 : tabsContainerEl.clientWidth,
        scrollWidth: tabsContainerEl == null ? void 0 : tabsContainerEl.scrollWidth
      };
      tabRects = selectedTabEl == null ? void 0 : selectedTabEl.getBoundingClientRect();
    }
    getTabsBoundingClientRects({
      tabsContainerRects,
      tabRects
    });
    return {
      tabsContainerRects,
      tabRects
    };
  };
  const scrollSelectedIntoView = (index = activeTab, animation = true, isClicked) => {
    if (!_tabsContainerRef.current) {
      return;
    }
    const {
      tabsContainerRects,
      tabRects
    } = getTabsRects(index);
    const centerPointOfTabs = tabsContainerRects.clientWidth / 2 - (tabRects == null ? void 0 : tabRects.width) / 2;
    if (!tabsContainerRects || !tabRects) {
      return;
    }
    const centerOfViewValue = mode === "scrollSelectedToCenter" || mode === "scrollSelectedToCenterFromView" ? tabsContainerRects.clientWidth / 2 - (tabRects == null ? void 0 : tabRects.width) / 2 : 0;
    const endOfViewValue = mode === "scrollSelectedToEnd" ? tabsContainerRects.clientWidth - (tabRects == null ? void 0 : tabRects.width) : 0;
    const additionalScrollValue = centerOfViewValue || endOfViewValue;
    if (tabRects[start] < tabsContainerRects[start]) {
      const nextScrollStart = tabsContainerRects[scrollLeft] + (tabRects[start] - tabsContainerRects[start]) - additionalScrollValue;
      scroll(nextScrollStart, animationDuration || selectedAnimationDuration, animation);
    } else if (tabRects[end] > tabsContainerRects[end]) {
      const nextScrollStart = tabsContainerRects[scrollLeft] + (tabRects[end] - tabsContainerRects[end]) + additionalScrollValue;
      scroll(nextScrollStart, selectedAnimationDuration || animationDuration, animation);
    }
    if (centerPointOfTabs > tabRects[start] && isClicked && mode === "scrollSelectedToCenterFromView") {
      isClicked = false;
      const nextScrollStart = tabsContainerRects[scrollLeft] + (tabRects[start] - tabsContainerRects[start]) - additionalScrollValue;
      scroll(nextScrollStart, animationDuration || selectedAnimationDuration, animation);
    } else if (centerPointOfTabs < tabRects[start] && isClicked && mode === "scrollSelectedToCenterFromView") {
      isClicked = false;
      const nextScrollStart = tabsContainerRects[scrollLeft] + (tabRects[end] - tabsContainerRects[end]) + additionalScrollValue;
      scroll(nextScrollStart, selectedAnimationDuration || animationDuration, animation);
    }
  };
  const scroll = (scrollValue, duration = 300, animation = true) => {
    if (animation) {
      animate(scrollLeft, _tabsContainerRef.current, scrollValue, {
        duration
      });
    } else {
      _tabsContainerRef.current.scrollLeft = scrollValue;
    }
  };
  const updateNavBtnsState = (__tabsContainerRef = _tabsContainerRef) => {
    if (!__tabsContainerRef.current)
      return;
    const scrollLeft2 = isRTL ? getNormalizedScrollLeft(__tabsContainerRef.current, isRTL ? "rtl" : "ltr") : __tabsContainerRef.current.scrollLeft;
    const scrollWidth = __tabsContainerRef.current.scrollWidth;
    const clientWidth = __tabsContainerRef.current.clientWidth;
    const showStartScroll = Math.floor(scrollLeft2) > 1;
    const showEndScroll = Math.ceil(scrollLeft2) < scrollWidth - clientWidth - 1;
    setNavBtnDisplay({
      start: isRTL ? showEndScroll : showStartScroll,
      end: isRTL ? showStartScroll : showEndScroll
    });
    didReachStart(!showStartScroll);
    didReachEnd(!showEndScroll);
  };
  React.useEffect(() => {
    const handleResize = debounce(() => {
      getTabsRects();
      updateNavBtnsState(_tabsContainerRef);
      scrollSelectedIntoView();
    });
    if (typeof window !== "undefined" && _tabsContainerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        handleResize();
      });
      resizeObserver.observe(_tabsContainerRef.current);
    }
  }, [isRTL]);
  React.useEffect(() => {
    scrollSelectedIntoView(activeTab, true, true);
  }, [activeTab]);
  const onNativeTabClick = React.useCallback((e, index) => {
    onTabClick(e, index);
  }, []);
  const handleTabsScroll = React.useMemo(() => debounce(() => {
    updateNavBtnsState(_tabsContainerRef);
  }), [updateNavBtnsState]);
  React.useEffect(() => {
    return () => {
      handleTabsScroll.clear();
    };
  }, [handleTabsScroll]);
  const onRightNavBtnClick = (e, _tabsScrollAmount = tabsScrollAmount) => {
    var _a;
    const {
      tabsContainerRects
    } = getTabsRects();
    scroll(tabsContainerRects[scrollLeft] + ((_a = _tabRef.current[activeTab]) == null ? void 0 : _a.clientWidth) * _tabsScrollAmount, animationDuration || navBtnCLickAnimationDuration);
  };
  const onLeftNavBtnClick = (e, _tabsScrollAmount = tabsScrollAmount) => {
    var _a;
    const {
      tabsContainerRects
    } = getTabsRects();
    scroll(tabsContainerRects[scrollLeft] - ((_a = _tabRef.current[activeTab]) == null ? void 0 : _a.clientWidth) * _tabsScrollAmount, animationDuration || navBtnCLickAnimationDuration);
  };
  const handleKeyDown = (event) => {
    const list = _tabsContainerRef.current;
    const currentFocus = ownerDocument(list).activeElement;
    const role = currentFocus == null ? void 0 : currentFocus.getAttribute("role");
    if (role !== "tab") {
      return;
    }
    let previousItemKey = "ArrowLeft";
    let nextItemKey = "ArrowRight";
    if (isRTL) {
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
    }
  };
  const goToStart = () => {
    scroll(0);
  };
  const goToEnd = () => {
    const {
      tabsContainerRects
    } = getTabsRects();
    const {
      scrollWidth
    } = tabsContainerRects;
    scroll((isRTL ? -1 : 1) * scrollWidth);
  };
  React.useImperativeHandle(action, () => ({
    onLeftNavBtnClick,
    onRightNavBtnClick,
    goToStart,
    goToEnd
  }), [onLeftNavBtnClick, onRightNavBtnClick, goToStart, goToEnd]);
  const navBtnProps = {
    ["aria-hidden"]: "true",
    hideNavBtnsOnMobile,
    navBtnStyle,
    navBtnContainerClassName,
    navBtnAs
  };
  const getNavBtns = () => {
    if (hideNavBtns)
      return null;
    let conditionalNavBtns2 = {};
    if (!navBtnDisplay.start && !navBtnDisplay.end) {
      return conditionalNavBtns2 = {
        end: null,
        start: null
      };
    }
    conditionalNavBtns2[isRTL ? "end" : "start"] = /* @__PURE__ */ jsx(NavBtn, {
      disabled: !navBtnDisplay[isRTL ? "end" : "start"],
      onClick: onLeftNavBtnClick,
      ref: leftNavBtnRef,
      className: `${leftNavBtnClassName} ${navBtnClassName}`.trim(),
      ...navBtnProps,
      children: leftBtnIcon
    });
    conditionalNavBtns2[isRTL ? "start" : "end"] = /* @__PURE__ */ jsx(NavBtn, {
      disabled: !navBtnDisplay[isRTL ? "start" : "end"],
      onClick: onRightNavBtnClick,
      ref: rightNavBtnRef,
      className: `${rightNavBtnClassName} ${navBtnClassName}`.trim(),
      ...navBtnProps,
      children: rightBtnIcon
    });
    return conditionalNavBtns2;
  };
  const conditionalNavBtns = getNavBtns();
  return /* @__PURE__ */ jsxs("div", {
    className: `rts___tabs___container ${tabsUpperContainerClassName}`.trim(),
    style: tabsUpperContainerStyle,
    children: [conditionalNavBtns == null ? void 0 : conditionalNavBtns.start, /* @__PURE__ */ jsx("div", {
      ref: (ref) => {
        _tabsContainerRef.current = ref;
        if (tabsContainerRef) {
          tabsContainerRef.current = ref;
        }
      },
      role: "tablist",
      "aria-label": "tabs",
      onKeyDown: handleKeyDown,
      onScroll: handleTabsScroll,
      style: tabsContainerStyle,
      className: `rts___tabs ${!showTabsScroll ? "hide___rts___tabs___scroll" : ""} ${tabsContainerClassName}`.trim(),
      children: /* @__PURE__ */ jsx(React.Fragment, {
        children: React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) {
            return null;
          }
          const selected = index === activeTab;
          return React.cloneElement(child, {
            ref: (ref) => {
              _tabRef.current[index] = ref;
              if (tabRef) {
                tabRef.current[index] = ref;
              }
            },
            onClick: (e) => {
              onNativeTabClick(e, index);
            },
            ["data-index"]: index,
            role: "tab",
            ["aria-selected"]: selected ? "true" : "false",
            tabIndex: selected ? "0" : "-1",
            selected,
            className: `rts___tab rts___btn ${child.props.className || ""}`.trim()
          });
        })
      })
    }), conditionalNavBtns == null ? void 0 : conditionalNavBtns.end]
  });
};
const Tab = React.forwardRef(({
  className = "",
  selected,
  style,
  tabAs = "button",
  ...props
}, ref) => {
  const Tag = tabAs;
  const buttonSpecialProps = {
    type: "button"
  };
  const tabClassNames = `${className} ${selected ? "rts___tab___selected" : ""}`.trim();
  return /* @__PURE__ */ jsx(Tag, {
    ...props,
    className: tabClassNames,
    ref,
    style: {
      ...style ? style : {}
    },
    ...tabAs === "button" ? buttonSpecialProps : {},
    children: props.children
  });
});
const TabScreen = ({
  activeTab,
  index,
  children,
  className = "",
  as = "div",
  style
}) => {
  return /* @__PURE__ */ jsx(Fragment, {
    children: activeTab == index && React.createElement(as, {
      className,
      style
    }, children)
  });
};
export { Tab, TabScreen, Tabs };
//# sourceMappingURL=react-tabs-scrollable.es.js.map
