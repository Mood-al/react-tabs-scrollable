import w from "react";
var de = { exports: {} }, G = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var he;
function Re() {
  if (he)
    return G;
  he = 1;
  var t = Symbol.for("react.transitional.element"), c = Symbol.for("react.fragment");
  function o(u, s, m) {
    var _ = null;
    if (m !== void 0 && (_ = "" + m), s.key !== void 0 && (_ = "" + s.key), "key" in s) {
      m = {};
      for (var E in s)
        E !== "key" && (m[E] = s[E]);
    } else
      m = s;
    return s = m.ref, {
      $$typeof: t,
      type: u,
      key: _,
      ref: s !== void 0 ? s : null,
      props: m
    };
  }
  return G.Fragment = c, G.jsx = o, G.jsxs = o, G;
}
var J = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var be;
function ge() {
  return be || (be = 1, process.env.NODE_ENV !== "production" && function() {
    function t(e) {
      if (e == null)
        return null;
      if (typeof e == "function")
        return e.$$typeof === ue ? null : e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case M:
          return "Fragment";
        case ne:
          return "Profiler";
        case re:
          return "StrictMode";
        case se:
          return "Suspense";
        case le:
          return "SuspenseList";
        case ie:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case j:
            return "Portal";
          case ae:
            return e.displayName || "Context";
          case oe:
            return (e._context.displayName || "Context") + ".Consumer";
          case X:
            var n = e.render;
            return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case ce:
            return n = e.displayName || null, n !== null ? n : t(e.type) || "Memo";
          case V:
            n = e._payload, e = e._init;
            try {
              return t(e(n));
            } catch {
            }
        }
      return null;
    }
    function c(e) {
      return "" + e;
    }
    function o(e) {
      try {
        c(e);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var i = n.error, h = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          h
        ), c(e);
      }
    }
    function u(e) {
      if (e === M)
        return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === V)
        return "<...>";
      try {
        var n = t(e);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = U.A;
      return e === null ? null : e.getOwner();
    }
    function m() {
      return Error("react-stack-top-frame");
    }
    function _(e) {
      if (H.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function E(e, n) {
      function i() {
        K || (K = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      i.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: i,
        configurable: !0
      });
    }
    function R() {
      var e = t(this.type);
      return O[e] || (O[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function k(e, n, i, h, D, L) {
      var b = i.ref;
      return e = {
        $$typeof: Y,
        type: e,
        key: n,
        props: i,
        _owner: h
      }, (b !== void 0 ? b : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: R
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: D
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: L
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function x(e, n, i, h, D, L) {
      var b = n.children;
      if (b !== void 0)
        if (h)
          if (fe(b)) {
            for (h = 0; h < b.length; h++)
              N(b[h]);
            Object.freeze && Object.freeze(b);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else
          N(b);
      if (H.call(n, "key")) {
        b = t(e);
        var S = Object.keys(n).filter(function(Q) {
          return Q !== "key";
        });
        h = 0 < S.length ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}", Z[b + h] || (S = 0 < S.length ? "{" + S.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          h,
          b,
          S,
          b
        ), Z[b + h] = !0);
      }
      if (b = null, i !== void 0 && (o(i), b = "" + i), _(n) && (o(n.key), b = "" + n.key), "key" in n) {
        i = {};
        for (var q in n)
          q !== "key" && (i[q] = n[q]);
      } else
        i = n;
      return b && E(
        i,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), k(
        e,
        b,
        i,
        s(),
        D,
        L
      );
    }
    function N(e) {
      A(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === V && (e._payload.status === "fulfilled" ? A(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function A(e) {
      return typeof e == "object" && e !== null && e.$$typeof === Y;
    }
    var g = w, Y = Symbol.for("react.transitional.element"), j = Symbol.for("react.portal"), M = Symbol.for("react.fragment"), re = Symbol.for("react.strict_mode"), ne = Symbol.for("react.profiler"), oe = Symbol.for("react.consumer"), ae = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), se = Symbol.for("react.suspense"), le = Symbol.for("react.suspense_list"), ce = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), ie = Symbol.for("react.activity"), ue = Symbol.for("react.client.reference"), U = g.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, H = Object.prototype.hasOwnProperty, fe = Array.isArray, z = console.createTask ? console.createTask : function() {
      return null;
    };
    g = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var K, O = {}, v = g.react_stack_bottom_frame.bind(
      g,
      m
    )(), P = z(u(m)), Z = {};
    J.Fragment = M, J.jsx = function(e, n, i) {
      var h = 1e4 > U.recentlyCreatedOwnerStacks++;
      return x(
        e,
        n,
        i,
        !1,
        h ? Error("react-stack-top-frame") : v,
        h ? z(u(e)) : P
      );
    }, J.jsxs = function(e, n, i) {
      var h = 1e4 > U.recentlyCreatedOwnerStacks++;
      return x(
        e,
        n,
        i,
        !0,
        h ? Error("react-stack-top-frame") : v,
        h ? z(u(e)) : P
      );
    };
  }()), J;
}
process.env.NODE_ENV === "production" ? de.exports = Re() : de.exports = ge();
var p = de.exports;
function Se(t) {
  return (1 + Math.sin(Math.PI * t - Math.PI / 2)) / 2;
}
function ye(t, c, o, u = {}, s = () => {
}) {
  const {
    ease: m = Se,
    duration: _ = 300
    // standard
  } = u;
  let E = null;
  const R = c[t];
  let k = !1;
  const x = () => {
    k = !0;
  }, N = (A) => {
    if (k) {
      s(new Error("Animation cancelled"));
      return;
    }
    E === null && (E = A);
    const g = Math.min(1, (A - E) / _);
    if (c[t] = m(g) * (o - R) + R, g >= 1) {
      requestAnimationFrame(() => {
        s(null);
      });
      return;
    }
    requestAnimationFrame(N);
  };
  return R === o ? (s(new Error("Element already at target position")), x) : (requestAnimationFrame(N), x);
}
const ve = (t, c = 166) => {
  let o;
  const u = (...s) => {
    const m = () => {
      t.apply(void 0, s);
    };
    clearTimeout(o), o = setTimeout(m, c);
  };
  return u.clear = () => {
    clearTimeout(o);
  }, u;
};
var xe = !!(typeof window < "u" && window.document && window.document.createElement), B;
function Ne() {
  if (B)
    return B;
  if (!xe || !window.document.body)
    return "indeterminate";
  var t = window.document.createElement("div");
  return t.appendChild(document.createTextNode("ABCD")), t.dir = "rtl", t.style.fontSize = "14px", t.style.width = "4px", t.style.height = "1px", t.style.position = "absolute", t.style.top = "-1000px", t.style.overflow = "scroll", document.body.appendChild(t), B = "reverse", t.scrollLeft > 0 ? B = "default" : (t.scrollLeft = 2, t.scrollLeft < 2 && (B = "negative")), document.body.removeChild(t), B;
}
function ke(t, c) {
  var o = t.scrollLeft;
  if (c !== "rtl")
    return o;
  var u = Ne();
  if (u === "indeterminate")
    return Number.NaN;
  switch (u) {
    case "negative":
      return t.scrollWidth - t.clientWidth + o;
    case "reverse":
      return t.scrollWidth - t.clientWidth - o;
  }
  return o;
}
function Ae(t) {
  return t && t.ownerDocument || document;
}
const pe = w.forwardRef(
  ({
    hideNavBtnsOnMobile: t,
    disabled: c,
    onClick: o = () => null,
    children: u,
    navBtnStyle: s,
    className: m = "",
    navBtnContainerClassName: _,
    navBtnAs: E = "button"
  }, R) => {
    const k = `rts___nav___btn___container ${t ? "display___md___none" : ""} ${_}`.trim(), x = E, N = {
      disabled: c,
      type: "button"
    };
    return /* @__PURE__ */ p.jsx("div", { className: k, children: /* @__PURE__ */ p.jsx(
      x,
      {
        ...E === "button" ? N : {},
        className: `rts___btn rts___nav___btn ${m}`,
        onClick: o,
        style: s,
        dir: "ltr",
        "aria-hidden": "true",
        ref: R,
        children: u
      }
    ) });
  }
), Ce = () => /* @__PURE__ */ p.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-arrow-left rts___svg___icon",
    children: [
      /* @__PURE__ */ p.jsx("line", { x1: "19", y1: "12", x2: "5", y2: "12" }),
      /* @__PURE__ */ p.jsx("polyline", { points: "12 19 5 12 12 5" })
    ]
  }
), je = () => /* @__PURE__ */ p.jsxs(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: "feather feather-arrow-right rts___svg___icon",
    children: [
      /* @__PURE__ */ p.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
      /* @__PURE__ */ p.jsx("polyline", { points: "12 5 19 12 12 19" })
    ]
  }
), we = (t, c) => t === c ? t.firstChild : c && c.nextElementSibling ? c.nextElementSibling : t.firstChild, Ee = (t, c) => t === c ? t.lastChild : c && c.previousElementSibling ? c.previousElementSibling : t.lastChild, te = (t, c, o) => {
  let u = !1, s = o(t, c);
  for (; s; ) {
    if (s === t.firstChild) {
      if (u)
        return;
      u = !0;
    }
    const m = s.disabled || s.getAttribute("aria-disabled") === "true";
    if (!s.hasAttribute("tabindex") || m)
      s = o(t, s);
    else {
      s.focus();
      return;
    }
  }
}, C = "left", F = "right", I = "scrollLeft", Le = (t) => {
  const {
    children: c,
    activeTab: o,
    animationDuration: u = 300,
    navBtnCLickAnimationDuration: s = 300,
    selectedAnimationDuration: m = 300,
    isRTL: _ = !1,
    didReachEnd: E = () => null,
    didReachStart: R = () => null,
    onTabClick: k = () => null,
    hideNavBtnsOnMobile: x = !0,
    hideNavBtns: N = !1,
    tabsScrollAmount: A = 3,
    tabsContainerRef: g = null,
    tabRef: Y = null,
    mode: j = "",
    tabsContainerStyle: M = {},
    navBtnStyle: re = {},
    tabsUpperContainerStyle: ne = {},
    leftNavBtnClassName: oe = "",
    rightNavBtnClassName: ae = "",
    navBtnClassName: X = "",
    navBtnContainerClassName: se = "",
    tabsUpperContainerClassName: le = "",
    tabsContainerClassName: ce = "",
    leftNavBtnRef: V = null,
    rightNavBtnRef: ie = null,
    showTabsScroll: ue = !1,
    navBtnAs: U = "button",
    action: H,
    rightBtnIcon: fe = /* @__PURE__ */ p.jsx(je, {}),
    leftBtnIcon: z = /* @__PURE__ */ p.jsx(Ce, {}),
    getTabsBoundingClientRects: K = () => null
  } = t, O = w.useRef([]), v = w.useRef(null), [P, Z] = w.useState({
    start: !1,
    end: !1
  }), e = (a = o) => {
    var T;
    const r = v == null ? void 0 : v.current, d = (T = O.current) == null ? void 0 : T[a];
    let l, f;
    if (!o && o !== 0) {
      console.error("react-tabs-scrollable : You have to add activeTab prop");
      return;
    }
    if (r) {
      const y = r.getBoundingClientRect();
      l = {
        top: y.top,
        right: y.right,
        bottom: y.bottom,
        left: y.left,
        width: y.width,
        height: y.height,
        x: y.x,
        y: y.y,
        scrollLeft: r.scrollLeft,
        clientWidth: r == null ? void 0 : r.clientWidth,
        scrollWidth: r == null ? void 0 : r.scrollWidth
      }, f = d == null ? void 0 : d.getBoundingClientRect();
    }
    return K({ tabsContainerRects: l, tabRects: f }), { tabsContainerRects: l, tabRects: f };
  }, n = (a = o, r = !0, d) => {
    if (!v.current)
      return;
    const { tabsContainerRects: l, tabRects: f } = e(a), T = l.clientWidth / 2 - (f == null ? void 0 : f.width) / 2;
    if (!l || !f)
      return;
    const y = j === "scrollSelectedToCenter" || j === "scrollSelectedToCenterFromView" ? l.clientWidth / 2 - (f == null ? void 0 : f.width) / 2 : 0, Te = j === "scrollSelectedToEnd" ? l.clientWidth - (f == null ? void 0 : f.width) : 0, ee = y || Te;
    if (f[C] < l[C]) {
      const W = l[I] + (f[C] - l[C]) - ee;
      i(
        W,
        u || m,
        r
      );
    } else if (f[F] > l[F]) {
      const W = l[I] + (f[F] - l[F]) + ee;
      i(
        W,
        m || u,
        r
      );
    }
    if (T > f[C] && d && j === "scrollSelectedToCenterFromView") {
      d = !1;
      const W = l[I] + (f[C] - l[C]) - ee;
      i(
        W,
        u || m,
        r
      );
    } else if (T < f[C] && d && j === "scrollSelectedToCenterFromView") {
      d = !1;
      const W = l[I] + (f[F] - l[F]) + ee;
      i(
        W,
        m || u,
        r
      );
    }
  }, i = (a, r = 300, d = !0) => {
    d ? ye(I, v.current, a, {
      duration: r
    }) : v.current.scrollLeft = a;
  }, h = (a = v) => {
    if (!a.current)
      return;
    const r = _ ? ke(
      a.current,
      _ ? "rtl" : "ltr"
    ) : a.current.scrollLeft, d = a.current.scrollWidth, l = a.current.clientWidth, f = Math.floor(r) > 1, T = Math.ceil(r) < d - l - 1;
    Z({
      start: _ ? T : f,
      end: _ ? f : T
    }), R(!f), E(!T);
  };
  w.useEffect(() => {
    v.current && (v.current.scrollLeft = 0);
    const a = ve(() => {
      e(), h(v), n();
    });
    let r = null;
    typeof ResizeObserver < "u" && (r = new ResizeObserver((l) => {
      a();
    }), r.observe(v.current));
    const d = requestAnimationFrame(() => {
      v.current && (h(v), n(o, !0, !0));
    });
    return () => {
      r == null || r.disconnect(), cancelAnimationFrame(d);
    };
  }, [_]), w.useEffect(() => {
    n(o, !0, !0);
  }, [o, _]);
  const D = w.useCallback(
    (a, r) => {
      k(a, r);
    },
    []
  ), L = w.useMemo(
    () => ve(() => {
      h(v);
    }),
    [h]
  );
  w.useEffect(() => () => {
    L.clear();
  }, [L]);
  const b = (a, r = A) => {
    var l;
    const { tabsContainerRects: d } = e();
    i(
      d[I] + ((l = O.current[o]) == null ? void 0 : l.clientWidth) * r,
      u || s
    );
  }, S = (a, r = A) => {
    var l;
    const { tabsContainerRects: d } = e();
    i(
      d[I] - ((l = O.current[o]) == null ? void 0 : l.clientWidth) * r,
      u || s
    );
  }, q = (a) => {
    const r = v.current, d = Ae(r).activeElement;
    if ((d == null ? void 0 : d.getAttribute("role")) !== "tab")
      return;
    let f = "ArrowLeft", T = "ArrowRight";
    switch (_ && (f = "ArrowRight", T = "ArrowLeft"), a.key) {
      case f:
        a.preventDefault(), te(r, d, Ee);
        break;
      case T:
        a.preventDefault(), te(r, d, we);
        break;
      case "Home":
        a.preventDefault(), te(r, null, we);
        break;
      case "End":
        a.preventDefault(), te(r, null, Ee);
        break;
    }
  }, Q = () => {
    i(0);
  }, me = () => {
    const { tabsContainerRects: a } = e(), { scrollWidth: r } = a;
    i((_ ? -1 : 1) * r);
  };
  w.useImperativeHandle(
    H,
    () => ({
      onLeftNavBtnClick: S,
      onRightNavBtnClick: b,
      goToStart: Q,
      goToEnd: me
    }),
    [S, b, Q, me]
  );
  const _e = {
    "aria-hidden": "true",
    hideNavBtnsOnMobile: x,
    navBtnStyle: re,
    navBtnContainerClassName: se,
    navBtnAs: U
  }, $ = (() => {
    if (N)
      return null;
    let a = {};
    return !P.start && !P.end ? a = {
      end: null,
      start: null
    } : (a[_ ? "end" : "start"] = /* @__PURE__ */ p.jsx(
      pe,
      {
        disabled: !P[_ ? "end" : "start"],
        onClick: S,
        ref: V,
        className: `${oe} ${X}`.trim(),
        ..._e,
        children: z
      }
    ), a[_ ? "start" : "end"] = /* @__PURE__ */ p.jsx(
      pe,
      {
        disabled: !P[_ ? "start" : "end"],
        onClick: b,
        ref: ie,
        className: `${ae} ${X}`.trim(),
        ..._e,
        children: fe
      }
    ), a);
  })();
  return /* @__PURE__ */ p.jsxs(
    "div",
    {
      className: `rts___tabs___container ${le}`.trim(),
      style: ne,
      children: [
        $ == null ? void 0 : $.start,
        /* @__PURE__ */ p.jsx(
          "div",
          {
            ref: (a) => {
              v.current = a, g && (g.current = a);
            },
            role: "tablist",
            "aria-label": "tabs",
            onKeyDown: q,
            onScroll: L,
            style: M,
            className: `rts___tabs ${ue ? "" : "hide___rts___tabs___scroll"} ${ce}`.trim(),
            children: /* @__PURE__ */ p.jsx(w.Fragment, { children: w.Children.map(c, (a, r) => {
              if (!w.isValidElement(a))
                return null;
              const d = r === o;
              return w.cloneElement(a, {
                ref: (l) => {
                  O.current[r] = l, Y && (Y.current[r] = l);
                },
                onClick: (l) => {
                  D(l, r);
                },
                "data-index": r,
                role: "tab",
                "aria-selected": d ? "true" : "false",
                tabIndex: d ? "0" : "-1",
                selected: d,
                className: `rts___tab rts___btn ${a.props.className || ""}`.trim()
              });
            }) })
          }
        ),
        $ == null ? void 0 : $.end
      ]
    }
  );
}, We = w.forwardRef(
  ({ className: t = "", selected: c, style: o, tabAs: u = "button", ...s }, m) => {
    const _ = u, E = {
      type: "button"
    }, R = `${t} ${c ? "rts___tab___selected" : ""}`.trim();
    return /* @__PURE__ */ p.jsx(
      _,
      {
        ...s,
        className: R,
        ref: m,
        style: { ...o || {} },
        ...u === "button" ? E : {},
        children: s.children
      }
    );
  }
), Ie = ({
  activeTab: t,
  index: c,
  children: o,
  className: u = "",
  as: s = "div",
  style: m
}) => /* @__PURE__ */ p.jsx(p.Fragment, { children: t == c && w.createElement(
  s,
  {
    className: u,
    style: m
  },
  o
) });
export {
  We as Tab,
  Ie as TabScreen,
  Le as Tabs
};
//# sourceMappingURL=react-tabs-scrollable.es.js.map
