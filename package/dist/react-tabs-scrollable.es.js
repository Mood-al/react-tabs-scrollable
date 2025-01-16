import w from "react";
var Ne = { exports: {} }, ie = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Re;
function Pe() {
  if (Re)
    return ie;
  Re = 1;
  var n = Symbol.for("react.transitional.element"), d = Symbol.for("react.fragment");
  function c(b, i, m) {
    var h = null;
    if (m !== void 0 && (h = "" + m), i.key !== void 0 && (h = "" + i.key), "key" in i) {
      m = {};
      for (var _ in i)
        _ !== "key" && (m[_] = i[_]);
    } else
      m = i;
    return i = m.ref, {
      $$typeof: n,
      type: b,
      key: h,
      ref: i !== void 0 ? i : null,
      props: m
    };
  }
  return ie.Fragment = d, ie.jsx = c, ie.jsxs = c, ie;
}
var ue = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function Be() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && function() {
    function n(e) {
      if (e == null)
        return null;
      if (typeof e == "function")
        return e.$$typeof === S ? null : e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ee:
          return "Fragment";
        case de:
          return "Portal";
        case be:
          return "Profiler";
        case ve:
          return "StrictMode";
        case re:
          return "Suspense";
        case ne:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case he:
            return (e.displayName || "Context") + ".Provider";
          case me:
            return (e._context.displayName || "Context") + ".Consumer";
          case te:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case oe:
            return r = e.displayName || null, r !== null ? r : n(e.type) || "Memo";
          case le:
            r = e._payload, e = e._init;
            try {
              return n(e(r));
            } catch {
            }
        }
      return null;
    }
    function d(e) {
      return "" + e;
    }
    function c(e) {
      try {
        d(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, s = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          s
        ), d(e);
      }
    }
    function b() {
    }
    function i() {
      if (A === 0) {
        _e = console.log, F = console.info, q = console.warn, D = console.error, we = console.group, ae = console.groupCollapsed, se = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: b,
          writable: !0
        };
        Object.defineProperties(console, {
          info: e,
          log: e,
          warn: e,
          error: e,
          group: e,
          groupCollapsed: e,
          groupEnd: e
        });
      }
      A++;
    }
    function m() {
      if (A--, A === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: C({}, e, { value: _e }),
          info: C({}, e, { value: F }),
          warn: C({}, e, { value: q }),
          error: C({}, e, { value: D }),
          group: C({}, e, { value: we }),
          groupCollapsed: C({}, e, { value: ae }),
          groupEnd: C({}, e, { value: se })
        });
      }
      0 > A && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function h(e) {
      if (H === void 0)
        try {
          throw Error();
        } catch (t) {
          var r = t.stack.trim().match(/\n( *(at )?)/);
          H = r && r[1] || "", Ce = -1 < t.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < t.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + H + e + Ce;
    }
    function _(e, r) {
      if (!e || k)
        return "";
      var t = o.get(e);
      if (t !== void 0)
        return t;
      k = !0, t = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var s = null;
      s = N.H, N.H = null, i();
      try {
        var p = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
                var M = function() {
                  throw Error();
                };
                if (Object.defineProperty(M.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(M, []);
                  } catch (W) {
                    var pe = W;
                  }
                  Reflect.construct(e, [], M);
                } else {
                  try {
                    M.call();
                  } catch (W) {
                    pe = W;
                  }
                  e.call(M.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (W) {
                  pe = W;
                }
                (M = e()) && typeof M.catch == "function" && M.catch(function() {
                });
              }
            } catch (W) {
              if (W && pe && typeof W.stack == "string")
                return [W.stack, pe.stack];
            }
            return [null, null];
          }
        };
        p.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var g = Object.getOwnPropertyDescriptor(
          p.DetermineComponentFrameRoot,
          "name"
        );
        g && g.configurable && Object.defineProperty(
          p.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var a = p.DetermineComponentFrameRoot(), O = a[0], G = a[1];
        if (O && G) {
          var y = O.split(`
`), I = G.split(`
`);
          for (a = g = 0; g < y.length && !y[g].includes(
            "DetermineComponentFrameRoot"
          ); )
            g++;
          for (; a < I.length && !I[a].includes(
            "DetermineComponentFrameRoot"
          ); )
            a++;
          if (g === y.length || a === I.length)
            for (g = y.length - 1, a = I.length - 1; 1 <= g && 0 <= a && y[g] !== I[a]; )
              a--;
          for (; 1 <= g && 0 <= a; g--, a--)
            if (y[g] !== I[a]) {
              if (g !== 1 || a !== 1)
                do
                  if (g--, a--, 0 > a || y[g] !== I[a]) {
                    var ce = `
` + y[g].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && ce.includes("<anonymous>") && (ce = ce.replace("<anonymous>", e.displayName)), typeof e == "function" && o.set(e, ce), ce;
                  }
                while (1 <= g && 0 <= a);
              break;
            }
        }
      } finally {
        k = !1, N.H = s, m(), Error.prepareStackTrace = t;
      }
      return y = (y = e ? e.displayName || e.name : "") ? h(y) : "", typeof e == "function" && o.set(e, y), y;
    }
    function T(e) {
      if (e == null)
        return "";
      if (typeof e == "function") {
        var r = e.prototype;
        return _(
          e,
          !(!r || !r.isReactComponent)
        );
      }
      if (typeof e == "string")
        return h(e);
      switch (e) {
        case re:
          return h("Suspense");
        case ne:
          return h("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case te:
            return e = _(e.render, !1), e;
          case oe:
            return T(e.type);
          case le:
            r = e._payload, e = e._init;
            try {
              return T(e(r));
            } catch {
            }
        }
      return "";
    }
    function j() {
      var e = N.A;
      return e === null ? null : e.getOwner();
    }
    function P(e) {
      if (ge.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function B(e, r) {
      function t() {
        v || (v = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function Y() {
      var e = n(this.type);
      return u[e] || (u[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function V(e, r, t, s, p, g) {
      return t = g.ref, e = {
        $$typeof: Q,
        type: e,
        key: r,
        props: g,
        _owner: p
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: Y
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
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function K(e, r, t, s, p, g) {
      if (typeof e == "string" || typeof e == "function" || e === ee || e === be || e === ve || e === re || e === ne || e === Te || typeof e == "object" && e !== null && (e.$$typeof === le || e.$$typeof === oe || e.$$typeof === he || e.$$typeof === me || e.$$typeof === te || e.$$typeof === Ee || e.getModuleId !== void 0)) {
        var a = r.children;
        if (a !== void 0)
          if (s)
            if (R(a)) {
              for (s = 0; s < a.length; s++)
                $(a[s], e);
              Object.freeze && Object.freeze(a);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else
            $(a, e);
      } else
        a = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? s = "null" : R(e) ? s = "array" : e !== void 0 && e.$$typeof === Q ? (s = "<" + (n(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          s,
          a
        );
      if (ge.call(r, "key")) {
        a = n(e);
        var O = Object.keys(r).filter(function(y) {
          return y !== "key";
        });
        s = 0 < O.length ? "{key: someKey, " + O.join(": ..., ") + ": ...}" : "{key: someKey}", f[a + s] || (O = 0 < O.length ? "{" + O.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          s,
          a,
          O,
          a
        ), f[a + s] = !0);
      }
      if (a = null, t !== void 0 && (c(t), a = "" + t), P(r) && (c(r.key), a = "" + r.key), "key" in r) {
        t = {};
        for (var G in r)
          G !== "key" && (t[G] = r[G]);
      } else
        t = r;
      return a && B(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), V(e, a, g, p, j(), t);
    }
    function $(e, r) {
      if (typeof e == "object" && e && e.$$typeof !== l) {
        if (R(e))
          for (var t = 0; t < e.length; t++) {
            var s = e[t];
            Z(s) && fe(s, r);
          }
        else if (Z(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? t = null : (t = z && e[z] || e["@@iterator"], t = typeof t == "function" ? t : null), typeof t == "function" && t !== e.entries && (t = t.call(e), t !== e))
          for (; !(e = t.next()).done; )
            Z(e.value) && fe(e.value, r);
      }
    }
    function Z(e) {
      return typeof e == "object" && e !== null && e.$$typeof === Q;
    }
    function fe(e, r) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = ye(r), !x[r])) {
        x[r] = !0;
        var t = "";
        e && e._owner != null && e._owner !== j() && (t = null, typeof e._owner.tag == "number" ? t = n(e._owner.type) : typeof e._owner.name == "string" && (t = e._owner.name), t = " It was passed a child from " + t + ".");
        var s = N.getCurrentStack;
        N.getCurrentStack = function() {
          var p = T(e.type);
          return s && (p += s() || ""), p;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          r,
          t
        ), N.getCurrentStack = s;
      }
    }
    function ye(e) {
      var r = "", t = j();
      return t && (t = n(t.type)) && (r = `

Check the render method of \`` + t + "`."), r || (e = n(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
    }
    var Se = w, Q = Symbol.for("react.transitional.element"), de = Symbol.for("react.portal"), ee = Symbol.for("react.fragment"), ve = Symbol.for("react.strict_mode"), be = Symbol.for("react.profiler"), me = Symbol.for("react.consumer"), he = Symbol.for("react.context"), te = Symbol.for("react.forward_ref"), re = Symbol.for("react.suspense"), ne = Symbol.for("react.suspense_list"), oe = Symbol.for("react.memo"), le = Symbol.for("react.lazy"), Te = Symbol.for("react.offscreen"), z = Symbol.iterator, S = Symbol.for("react.client.reference"), N = Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ge = Object.prototype.hasOwnProperty, C = Object.assign, Ee = Symbol.for("react.client.reference"), R = Array.isArray, A = 0, _e, F, q, D, we, ae, se;
    b.__reactDisabledLog = !0;
    var H, Ce, k = !1, o = new (typeof WeakMap == "function" ? WeakMap : Map)(), l = Symbol.for("react.client.reference"), v, u = {}, f = {}, x = {};
    ue.Fragment = ee, ue.jsx = function(e, r, t, s, p) {
      return K(e, r, t, !1, s, p);
    }, ue.jsxs = function(e, r, t, s, p) {
      return K(e, r, t, !0, s, p);
    };
  }()), ue;
}
process.env.NODE_ENV === "production" ? Ne.exports = Pe() : Ne.exports = Be();
var E = Ne.exports;
function $e(n) {
  return (1 + Math.sin(Math.PI * n - Math.PI / 2)) / 2;
}
function Me(n, d, c, b = {}, i = () => {
}) {
  const {
    ease: m = $e,
    duration: h = 300
    // standard
  } = b;
  let _ = null;
  const T = d[n];
  let j = !1;
  const P = () => {
    j = !0;
  }, B = (Y) => {
    if (j) {
      i(new Error("Animation cancelled"));
      return;
    }
    _ === null && (_ = Y);
    const V = Math.min(1, (Y - _) / h);
    if (d[n] = m(V) * (c - T) + T, V >= 1) {
      requestAnimationFrame(() => {
        i(null);
      });
      return;
    }
    requestAnimationFrame(B);
  };
  return T === c ? (i(new Error("Element already at target position")), P) : (requestAnimationFrame(B), P);
}
const ke = (n, d = 166) => {
  let c;
  const b = (...i) => {
    const m = () => {
      n.apply(void 0, i);
    };
    clearTimeout(c), c = setTimeout(m, d);
  };
  return b.clear = () => {
    clearTimeout(c);
  }, b;
};
var Le = !!(typeof window < "u" && window.document && window.document.createElement), J;
function Ye() {
  if (J)
    return J;
  if (!Le || !window.document.body)
    return "indeterminate";
  var n = window.document.createElement("div");
  return n.appendChild(document.createTextNode("ABCD")), n.dir = "rtl", n.style.fontSize = "14px", n.style.width = "4px", n.style.height = "1px", n.style.position = "absolute", n.style.top = "-1000px", n.style.overflow = "scroll", document.body.appendChild(n), J = "reverse", n.scrollLeft > 0 ? J = "default" : (n.scrollLeft = 2, n.scrollLeft < 2 && (J = "negative")), document.body.removeChild(n), J;
}
function Ve(n, d) {
  var c = n.scrollLeft;
  if (d !== "rtl")
    return c;
  var b = Ye();
  if (b === "indeterminate")
    return Number.NaN;
  switch (b) {
    case "negative":
      return n.scrollWidth - n.clientWidth + c;
    case "reverse":
      return n.scrollWidth - n.clientWidth - c;
  }
  return c;
}
function ze(n) {
  return n && n.ownerDocument || document;
}
const Ae = w.forwardRef(
  ({
    hideNavBtnsOnMobile: n,
    disabled: d,
    onClick: c = () => null,
    children: b,
    navBtnStyle: i,
    className: m = "",
    navBtnContainerClassName: h,
    navBtnAs: _ = "button"
  }, T) => {
    const j = `rts___nav___btn___container ${n ? "display___md___none" : ""} ${h}`.trim(), P = _, B = {
      disabled: d,
      type: "button"
    };
    return /* @__PURE__ */ E.jsx("div", { className: j, children: /* @__PURE__ */ E.jsx(
      P,
      {
        ..._ === "button" ? B : {},
        className: `rts___btn rts___nav___btn ${m}`,
        onClick: c,
        style: i,
        dir: "ltr",
        "aria-hidden": "true",
        ref: T,
        children: b
      }
    ) });
  }
), Ie = () => /* @__PURE__ */ E.jsxs(
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
      /* @__PURE__ */ E.jsx("line", { x1: "19", y1: "12", x2: "5", y2: "12" }),
      /* @__PURE__ */ E.jsx("polyline", { points: "12 19 5 12 12 5" })
    ]
  }
), Ue = () => /* @__PURE__ */ E.jsxs(
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
      /* @__PURE__ */ E.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
      /* @__PURE__ */ E.jsx("polyline", { points: "12 5 19 12 12 19" })
    ]
  }
), Oe = (n, d) => n === d ? n.firstChild : d && d.nextElementSibling ? d.nextElementSibling : n.firstChild, We = (n, d) => n === d ? n.lastChild : d && d.previousElementSibling ? d.previousElementSibling : n.lastChild, xe = (n, d, c) => {
  let b = !1, i = c(n, d);
  for (; i; ) {
    if (i === n.firstChild) {
      if (b)
        return;
      b = !0;
    }
    const m = i.disabled || i.getAttribute("aria-disabled") === "true";
    if (!i.hasAttribute("tabindex") || m)
      i = c(n, i);
    else {
      i.focus();
      return;
    }
  }
}, L = "left", X = "right", U = "scrollLeft", qe = (n) => {
  const {
    children: d,
    activeTab: c,
    animationDuration: b = 300,
    navBtnCLickAnimationDuration: i = 300,
    selectedAnimationDuration: m = 300,
    isRTL: h = !1,
    didReachEnd: _ = () => null,
    didReachStart: T = () => null,
    onTabClick: j = () => null,
    hideNavBtnsOnMobile: P = !0,
    hideNavBtns: B = !1,
    tabsScrollAmount: Y = 3,
    tabsContainerRef: V = null,
    tabRef: K = null,
    mode: $ = "",
    tabsContainerStyle: Z = {},
    navBtnStyle: fe = {},
    tabsUpperContainerStyle: ye = {},
    leftNavBtnClassName: Se = "",
    rightNavBtnClassName: Q = "",
    navBtnClassName: de = "",
    navBtnContainerClassName: ee = "",
    tabsUpperContainerClassName: ve = "",
    tabsContainerClassName: be = "",
    leftNavBtnRef: me = null,
    rightNavBtnRef: he = null,
    showTabsScroll: te = !1,
    navBtnAs: re = "button",
    action: ne,
    rightBtnIcon: oe = /* @__PURE__ */ E.jsx(Ue, {}),
    leftBtnIcon: le = /* @__PURE__ */ E.jsx(Ie, {}),
    getTabsBoundingClientRects: Te = () => null
  } = n, z = w.useRef([]), S = w.useRef(null), [N, ge] = w.useState({
    start: !1,
    end: !1
  }), C = (o = c) => {
    var x;
    const l = S == null ? void 0 : S.current, v = (x = z.current) == null ? void 0 : x[o];
    let u, f;
    if (!c && c !== 0) {
      console.error("react-tabs-scrollable : You have to add activeTab prop");
      return;
    }
    if (l) {
      const e = l.getBoundingClientRect();
      u = {
        top: e.top,
        right: e.right,
        bottom: e.bottom,
        left: e.left,
        width: e.width,
        height: e.height,
        x: e.x,
        y: e.y,
        scrollLeft: l.scrollLeft,
        clientWidth: l == null ? void 0 : l.clientWidth,
        scrollWidth: l == null ? void 0 : l.scrollWidth
      }, f = v == null ? void 0 : v.getBoundingClientRect();
    }
    return Te({ tabsContainerRects: u, tabRects: f }), { tabsContainerRects: u, tabRects: f };
  }, Ee = (o = c, l = !0, v) => {
    if (!S.current)
      return;
    const { tabsContainerRects: u, tabRects: f } = C(o), x = u.clientWidth / 2 - (f == null ? void 0 : f.width) / 2;
    if (!u || !f)
      return;
    const e = $ === "scrollSelectedToCenter" || $ === "scrollSelectedToCenterFromView" ? u.clientWidth / 2 - (f == null ? void 0 : f.width) / 2 : 0, r = $ === "scrollSelectedToEnd" ? u.clientWidth - (f == null ? void 0 : f.width) : 0, t = e || r;
    if (f[L] < u[L]) {
      const s = u[U] + (f[L] - u[L]) - t;
      R(
        s,
        b || m,
        l
      );
    } else if (f[X] > u[X]) {
      const s = u[U] + (f[X] - u[X]) + t;
      R(
        s,
        m || b,
        l
      );
    }
    if (x > f[L] && v && $ === "scrollSelectedToCenterFromView") {
      v = !1;
      const s = u[U] + (f[L] - u[L]) - t;
      R(
        s,
        b || m,
        l
      );
    } else if (x < f[L] && v && $ === "scrollSelectedToCenterFromView") {
      v = !1;
      const s = u[U] + (f[X] - u[X]) + t;
      R(
        s,
        m || b,
        l
      );
    }
  }, R = (o, l = 300, v = !0) => {
    v ? Me(U, S.current, o, {
      duration: l
    }) : S.current.scrollLeft = o;
  }, A = (o = S) => {
    if (!o.current)
      return;
    const l = h ? Ve(
      o.current,
      h ? "rtl" : "ltr"
    ) : o.current.scrollLeft, v = o.current.scrollWidth, u = o.current.clientWidth, f = Math.floor(l) > 1, x = Math.ceil(l) < v - u - 1;
    ge({
      start: h ? x : f,
      end: h ? f : x
    }), T(!f), _(!x);
  };
  w.useEffect(() => {
    const o = ke(() => {
      C(), A(S), Ee();
    });
    typeof ResizeObserver < "u" && new ResizeObserver((v) => {
      o();
    }).observe(S.current);
  }, [h]), w.useEffect(() => {
    Ee(c, !0, !0);
  }, [c]);
  const _e = w.useCallback(
    (o, l) => {
      j(o, l);
    },
    []
  ), F = w.useMemo(
    () => ke(() => {
      A(S);
    }),
    [A]
  );
  w.useEffect(() => () => {
    F.clear();
  }, [F]);
  const q = (o, l = Y) => {
    var u;
    const { tabsContainerRects: v } = C();
    R(
      v[U] + ((u = z.current[c]) == null ? void 0 : u.clientWidth) * l,
      b || i
    );
  }, D = (o, l = Y) => {
    var u;
    const { tabsContainerRects: v } = C();
    R(
      v[U] - ((u = z.current[c]) == null ? void 0 : u.clientWidth) * l,
      b || i
    );
  }, we = (o) => {
    const l = S.current, v = ze(l).activeElement;
    if ((v == null ? void 0 : v.getAttribute("role")) !== "tab")
      return;
    let f = "ArrowLeft", x = "ArrowRight";
    switch (h && (f = "ArrowRight", x = "ArrowLeft"), o.key) {
      case f:
        o.preventDefault(), xe(l, v, We);
        break;
      case x:
        o.preventDefault(), xe(l, v, Oe);
        break;
      case "Home":
        o.preventDefault(), xe(l, null, Oe);
        break;
      case "End":
        o.preventDefault(), xe(l, null, We);
        break;
    }
  }, ae = () => {
    R(0);
  }, se = () => {
    const { tabsContainerRects: o } = C(), { scrollWidth: l } = o;
    R((h ? -1 : 1) * l);
  };
  w.useImperativeHandle(
    ne,
    () => ({
      onLeftNavBtnClick: D,
      onRightNavBtnClick: q,
      goToStart: ae,
      goToEnd: se
    }),
    [D, q, ae, se]
  );
  const H = {
    "aria-hidden": "true",
    hideNavBtnsOnMobile: P,
    navBtnStyle: fe,
    navBtnContainerClassName: ee,
    navBtnAs: re
  }, k = (() => {
    if (B)
      return null;
    let o = {};
    return !N.start && !N.end ? o = {
      end: null,
      start: null
    } : (o[h ? "end" : "start"] = /* @__PURE__ */ E.jsx(
      Ae,
      {
        disabled: !N[h ? "end" : "start"],
        onClick: D,
        ref: me,
        className: `${Se} ${de}`.trim(),
        ...H,
        children: le
      }
    ), o[h ? "start" : "end"] = /* @__PURE__ */ E.jsx(
      Ae,
      {
        disabled: !N[h ? "start" : "end"],
        onClick: q,
        ref: he,
        className: `${Q} ${de}`.trim(),
        ...H,
        children: oe
      }
    ), o);
  })();
  return /* @__PURE__ */ E.jsxs(
    "div",
    {
      className: `rts___tabs___container ${ve}`.trim(),
      style: ye,
      children: [
        k == null ? void 0 : k.start,
        /* @__PURE__ */ E.jsx(
          "div",
          {
            ref: (o) => {
              S.current = o, V && (V.current = o);
            },
            role: "tablist",
            "aria-label": "tabs",
            onKeyDown: we,
            onScroll: F,
            style: Z,
            className: `rts___tabs ${te ? "" : "hide___rts___tabs___scroll"} ${be}`.trim(),
            children: /* @__PURE__ */ E.jsx(w.Fragment, { children: w.Children.map(d, (o, l) => {
              if (!w.isValidElement(o))
                return null;
              const v = l === c;
              return w.cloneElement(o, {
                ref: (u) => {
                  z.current[l] = u, K && (K.current[l] = u);
                },
                onClick: (u) => {
                  _e(u, l);
                },
                "data-index": l,
                role: "tab",
                "aria-selected": v ? "true" : "false",
                tabIndex: v ? "0" : "-1",
                selected: v,
                className: `rts___tab rts___btn ${o.props.className || ""}`.trim()
              });
            }) })
          }
        ),
        k == null ? void 0 : k.end
      ]
    }
  );
}, De = w.forwardRef(
  ({ className: n = "", selected: d, style: c, tabAs: b = "button", ...i }, m) => {
    const h = b, _ = {
      type: "button"
    }, T = `${n} ${d ? "rts___tab___selected" : ""}`.trim();
    return /* @__PURE__ */ E.jsx(
      h,
      {
        ...i,
        className: T,
        ref: m,
        style: { ...c || {} },
        ...b === "button" ? _ : {},
        children: i.children
      }
    );
  }
), He = ({
  activeTab: n,
  index: d,
  children: c,
  className: b = "",
  as: i = "div",
  style: m
}) => /* @__PURE__ */ E.jsx(E.Fragment, { children: n == d && w.createElement(
  i,
  {
    className: b,
    style: m
  },
  c
) });
export {
  De as Tab,
  He as TabScreen,
  qe as Tabs
};
//# sourceMappingURL=react-tabs-scrollable.es.js.map
