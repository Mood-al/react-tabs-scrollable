import x from "react";
var Ie = { exports: {} }, he = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function yr() {
  if (He)
    return he;
  He = 1;
  var n = x, d = Symbol.for("react.element"), s = Symbol.for("react.fragment"), v = Object.prototype.hasOwnProperty, m = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, y = { key: !0, ref: !0, __self: !0, __source: !0 };
  function _(T, g, D) {
    var E, O = {}, N = null, $ = null;
    D !== void 0 && (N = "" + D), g.key !== void 0 && (N = "" + g.key), g.ref !== void 0 && ($ = g.ref);
    for (E in g)
      v.call(g, E) && !y.hasOwnProperty(E) && (O[E] = g[E]);
    if (T && T.defaultProps)
      for (E in g = T.defaultProps, g)
        O[E] === void 0 && (O[E] = g[E]);
    return { $$typeof: d, type: T, key: N, ref: $, props: O, _owner: m.current };
  }
  return he.Fragment = s, he.jsx = _, he.jsxs = _, he;
}
var pe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xe;
function Rr() {
  return Xe || (Xe = 1, process.env.NODE_ENV !== "production" && function() {
    var n = x, d = Symbol.for("react.element"), s = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), _ = Symbol.for("react.provider"), T = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), D = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), $ = Symbol.for("react.offscreen"), ce = Symbol.iterator, z = "@@iterator";
    function we(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ce && e[ce] || e[z];
      return typeof r == "function" ? r : null;
    }
    var M = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
          t[o - 1] = arguments[o];
        Se("error", e, t);
      }
    }
    function Se(e, r, t) {
      {
        var o = M.ReactDebugCurrentFrame, p = o.getStackAddendum();
        p !== "" && (r += "%s", t = t.concat([p]));
        var b = t.map(function(f) {
          return String(f);
        });
        b.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, b);
      }
    }
    var Te = !1, me = !1, Ce = !1, xe = !1, je = !1, be;
    be = Symbol.for("react.module.reference");
    function Oe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === v || e === y || je || e === m || e === D || e === E || xe || e === $ || Te || me || Ce || typeof e == "object" && e !== null && (e.$$typeof === N || e.$$typeof === O || e.$$typeof === _ || e.$$typeof === T || e.$$typeof === g || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === be || e.getModuleId !== void 0));
    }
    function Pe(e, r, t) {
      var o = e.displayName;
      if (o)
        return o;
      var p = r.displayName || r.name || "";
      return p !== "" ? t + "(" + p + ")" : t;
    }
    function ge(e) {
      return e.displayName || "Context";
    }
    function F(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case v:
          return "Fragment";
        case s:
          return "Portal";
        case y:
          return "Profiler";
        case m:
          return "StrictMode";
        case D:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var r = e;
            return ge(r) + ".Consumer";
          case _:
            var t = e;
            return ge(t._context) + ".Provider";
          case g:
            return Pe(e, e.render, "ForwardRef");
          case O:
            var o = e.displayName || null;
            return o !== null ? o : F(e.type) || "Memo";
          case N: {
            var p = e, b = p._payload, f = p._init;
            try {
              return F(f(b));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, J = 0, _e, G, S, H, ye, Y, te;
    function L() {
    }
    L.__reactDisabledLog = !0;
    function ne() {
      {
        if (J === 0) {
          _e = console.log, G = console.info, S = console.warn, H = console.error, ye = console.group, Y = console.groupCollapsed, te = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: L,
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
        J++;
      }
    }
    function ke() {
      {
        if (J--, J === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, e, {
              value: _e
            }),
            info: B({}, e, {
              value: G
            }),
            warn: B({}, e, {
              value: S
            }),
            error: B({}, e, {
              value: H
            }),
            group: B({}, e, {
              value: ye
            }),
            groupCollapsed: B({}, e, {
              value: Y
            }),
            groupEnd: B({}, e, {
              value: te
            })
          });
        }
        J < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = M.ReactCurrentDispatcher, Z;
    function U(e, r, t) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (p) {
            var o = p.stack.trim().match(/\n( *(at )?)/);
            Z = o && o[1] || "";
          }
        return `
` + Z + e;
      }
    }
    var ue = !1, Q;
    {
      var Re = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new Re();
    }
    function fe(e, r) {
      if (!e || ue)
        return "";
      {
        var t = Q.get(e);
        if (t !== void 0)
          return t;
      }
      var o;
      ue = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var b;
      b = X.current, X.current = null, ne();
      try {
        if (r) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (A) {
              o = A;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (A) {
              o = A;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (A) {
            o = A;
          }
          e();
        }
      } catch (A) {
        if (A && o && typeof A.stack == "string") {
          for (var c = A.stack.split(`
`), P = o.stack.split(`
`), R = c.length - 1, w = P.length - 1; R >= 1 && w >= 0 && c[R] !== P[w]; )
            w--;
          for (; R >= 1 && w >= 0; R--, w--)
            if (c[R] !== P[w]) {
              if (R !== 1 || w !== 1)
                do
                  if (R--, w--, w < 0 || c[R] !== P[w]) {
                    var I = `
` + c[R].replace(" at new ", " at ");
                    return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)), typeof e == "function" && Q.set(e, I), I;
                  }
                while (R >= 1 && w >= 0);
              break;
            }
        }
      } finally {
        ue = !1, X.current = b, ke(), Error.prepareStackTrace = p;
      }
      var ie = e ? e.displayName || e.name : "", ee = ie ? U(ie) : "";
      return typeof e == "function" && Q.set(e, ee), ee;
    }
    function Le(e, r, t) {
      return fe(e, !1);
    }
    function K(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function i(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, K(e));
      if (typeof e == "string")
        return U(e);
      switch (e) {
        case D:
          return U("Suspense");
        case E:
          return U("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            return Le(e.render);
          case O:
            return i(e.type, r, t);
          case N: {
            var o = e, p = o._payload, b = o._init;
            try {
              return i(b(p), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var a = Object.prototype.hasOwnProperty, h = {}, l = M.ReactDebugCurrentFrame;
    function u(e) {
      if (e) {
        var r = e._owner, t = i(e.type, e._source, r ? r.type : null);
        l.setExtraStackFrame(t);
      } else
        l.setExtraStackFrame(null);
    }
    function k(e, r, t, o, p) {
      {
        var b = Function.call.bind(a);
        for (var f in e)
          if (b(e, f)) {
            var c = void 0;
            try {
              if (typeof e[f] != "function") {
                var P = Error((o || "React class") + ": " + t + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw P.name = "Invariant Violation", P;
              }
              c = e[f](r, f, o, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (R) {
              c = R;
            }
            c && !(c instanceof Error) && (u(p), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", t, f, typeof c), u(null)), c instanceof Error && !(c.message in h) && (h[c.message] = !0, u(p), C("Failed %s type: %s", t, c.message), u(null));
          }
      }
    }
    var W = Array.isArray;
    function de(e) {
      return W(e);
    }
    function ae(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function V(e) {
      try {
        return $e(e), !1;
      } catch {
        return !0;
      }
    }
    function $e(e) {
      return "" + e;
    }
    function Be(e) {
      if (V(e))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ae(e)), $e(e);
    }
    var ve = M.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ve, Me, Ae;
    Ae = {};
    function nr(e) {
      if (a.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ar(e) {
      if (a.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function or(e, r) {
      if (typeof e.ref == "string" && ve.current && r && ve.current.stateNode !== r) {
        var t = F(ve.current.type);
        Ae[t] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', F(ve.current.type), e.ref), Ae[t] = !0);
      }
    }
    function ir(e, r) {
      {
        var t = function() {
          Ve || (Ve = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function sr(e, r) {
      {
        var t = function() {
          Me || (Me = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var lr = function(e, r, t, o, p, b, f) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: d,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: f,
        // Record the component responsible for creating this element.
        _owner: b
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function cr(e, r, t, o, p) {
      {
        var b, f = {}, c = null, P = null;
        t !== void 0 && (Be(t), c = "" + t), ar(r) && (Be(r.key), c = "" + r.key), nr(r) && (P = r.ref, or(r, p));
        for (b in r)
          a.call(r, b) && !tr.hasOwnProperty(b) && (f[b] = r[b]);
        if (e && e.defaultProps) {
          var R = e.defaultProps;
          for (b in R)
            f[b] === void 0 && (f[b] = R[b]);
        }
        if (c || P) {
          var w = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && ir(f, w), P && sr(f, w);
        }
        return lr(e, c, P, p, o, ve.current, f);
      }
    }
    var De = M.ReactCurrentOwner, Ye = M.ReactDebugCurrentFrame;
    function oe(e) {
      if (e) {
        var r = e._owner, t = i(e.type, e._source, r ? r.type : null);
        Ye.setExtraStackFrame(t);
      } else
        Ye.setExtraStackFrame(null);
    }
    var Ne;
    Ne = !1;
    function Fe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === d;
    }
    function Ue() {
      {
        if (De.current) {
          var e = F(De.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ur(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ke = {};
    function fr(e) {
      {
        var r = Ue();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function qe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = fr(r);
        if (Ke[t])
          return;
        Ke[t] = !0;
        var o = "";
        e && e._owner && e._owner !== De.current && (o = " It was passed a child from " + F(e._owner.type) + "."), oe(e), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, o), oe(null);
      }
    }
    function ze(e, r) {
      {
        if (typeof e != "object")
          return;
        if (de(e))
          for (var t = 0; t < e.length; t++) {
            var o = e[t];
            Fe(o) && qe(o, r);
          }
        else if (Fe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var p = we(e);
          if (typeof p == "function" && p !== e.entries)
            for (var b = p.call(e), f; !(f = b.next()).done; )
              Fe(f.value) && qe(f.value, r);
        }
      }
    }
    function dr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === g || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === O))
          t = r.propTypes;
        else
          return;
        if (t) {
          var o = F(r);
          k(t, e.props, "prop", o, e);
        } else if (r.PropTypes !== void 0 && !Ne) {
          Ne = !0;
          var p = F(r);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var o = r[t];
          if (o !== "children" && o !== "key") {
            oe(e), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), oe(null);
            break;
          }
        }
        e.ref !== null && (oe(e), C("Invalid attribute `ref` supplied to `React.Fragment`."), oe(null));
      }
    }
    var Je = {};
    function Ge(e, r, t, o, p, b) {
      {
        var f = Oe(e);
        if (!f) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var P = ur(p);
          P ? c += P : c += Ue();
          var R;
          e === null ? R = "null" : de(e) ? R = "array" : e !== void 0 && e.$$typeof === d ? (R = "<" + (F(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : R = typeof e, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", R, c);
        }
        var w = cr(e, r, t, p, b);
        if (w == null)
          return w;
        if (f) {
          var I = r.children;
          if (I !== void 0)
            if (o)
              if (de(I)) {
                for (var ie = 0; ie < I.length; ie++)
                  ze(I[ie], e);
                Object.freeze && Object.freeze(I);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ze(I, e);
        }
        if (a.call(r, "key")) {
          var ee = F(e), A = Object.keys(r).filter(function(_r) {
            return _r !== "key";
          }), We = A.length > 0 ? "{key: someKey, " + A.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Je[ee + We]) {
            var gr = A.length > 0 ? "{" + A.join(": ..., ") + ": ...}" : "{}";
            C(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, We, ee, gr, ee), Je[ee + We] = !0;
          }
        }
        return e === v ? vr(w) : dr(w), w;
      }
    }
    function hr(e, r, t) {
      return Ge(e, r, t, !0);
    }
    function pr(e, r, t) {
      return Ge(e, r, t, !1);
    }
    var mr = pr, br = hr;
    pe.Fragment = v, pe.jsx = mr, pe.jsxs = br;
  }()), pe;
}
process.env.NODE_ENV === "production" ? Ie.exports = yr() : Ie.exports = Rr();
var j = Ie.exports;
function Er(n) {
  return (1 + Math.sin(Math.PI * n - Math.PI / 2)) / 2;
}
function wr(n, d, s, v = {}, m = () => {
}) {
  const {
    ease: y = Er,
    duration: _ = 300
    // standard
  } = v;
  let T = null;
  const g = d[n];
  let D = !1;
  const E = () => {
    D = !0;
  }, O = (N) => {
    if (D) {
      m(new Error("Animation cancelled"));
      return;
    }
    T === null && (T = N);
    const $ = Math.min(1, (N - T) / _);
    if (d[n] = y($) * (s - g) + g, $ >= 1) {
      requestAnimationFrame(() => {
        m(null);
      });
      return;
    }
    requestAnimationFrame(O);
  };
  return g === s ? (m(new Error("Element already at target position")), E) : (requestAnimationFrame(O), E);
}
const Ze = (n, d = 166) => {
  let s;
  const v = (...m) => {
    const y = () => {
      n.apply(void 0, m);
    };
    clearTimeout(s), s = setTimeout(y, d);
  };
  return v.clear = () => {
    clearTimeout(s);
  }, v;
};
var Sr = !!(typeof window < "u" && window.document && window.document.createElement), se;
function Tr() {
  if (se)
    return se;
  if (!Sr || !window.document.body)
    return "indeterminate";
  var n = window.document.createElement("div");
  return n.appendChild(document.createTextNode("ABCD")), n.dir = "rtl", n.style.fontSize = "14px", n.style.width = "4px", n.style.height = "1px", n.style.position = "absolute", n.style.top = "-1000px", n.style.overflow = "scroll", document.body.appendChild(n), se = "reverse", n.scrollLeft > 0 ? se = "default" : (n.scrollLeft = 2, n.scrollLeft < 2 && (se = "negative")), document.body.removeChild(n), se;
}
function Cr(n, d) {
  var s = n.scrollLeft;
  if (d !== "rtl")
    return s;
  var v = Tr();
  if (v === "indeterminate")
    return Number.NaN;
  switch (v) {
    case "negative":
      return n.scrollWidth - n.clientWidth + s;
    case "reverse":
      return n.scrollWidth - n.clientWidth - s;
  }
  return s;
}
function xr(n) {
  return n && n.ownerDocument || document;
}
const Qe = x.forwardRef(
  ({
    hideNavBtnsOnMobile: n,
    disabled: d,
    onClick: s = () => null,
    children: v,
    navBtnStyle: m,
    className: y = "",
    navBtnContainerClassName: _,
    navBtnAs: T = "button"
  }, g) => {
    const D = `rts___nav___btn___container ${n ? "display___md___none" : ""} ${_}`.trim(), E = T, O = {
      disabled: d,
      type: "button"
    };
    return /* @__PURE__ */ j.jsx("div", { className: D, children: /* @__PURE__ */ j.jsx(
      E,
      {
        ...T === "button" ? O : {},
        className: `rts___btn rts___nav___btn ${y}`,
        onClick: s,
        style: m,
        dir: "ltr",
        "aria-hidden": "true",
        ref: g,
        children: v
      }
    ) });
  }
), jr = () => /* @__PURE__ */ j.jsxs(
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
      /* @__PURE__ */ j.jsx("line", { x1: "19", y1: "12", x2: "5", y2: "12" }),
      /* @__PURE__ */ j.jsx("polyline", { points: "12 19 5 12 12 5" })
    ]
  }
), Or = () => /* @__PURE__ */ j.jsxs(
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
      /* @__PURE__ */ j.jsx("line", { x1: "5", y1: "12", x2: "19", y2: "12" }),
      /* @__PURE__ */ j.jsx("polyline", { points: "12 5 19 12 12 19" })
    ]
  }
), er = (n, d) => n === d ? n.firstChild : d && d.nextElementSibling ? d.nextElementSibling : n.firstChild, rr = (n, d) => n === d ? n.lastChild : d && d.previousElementSibling ? d.previousElementSibling : n.lastChild, Ee = (n, d, s) => {
  let v = !1, m = s(n, d);
  for (; m; ) {
    if (m === n.firstChild) {
      if (v)
        return;
      v = !0;
    }
    const y = m.disabled || m.getAttribute("aria-disabled") === "true";
    if (!m.hasAttribute("tabindex") || y)
      m = s(n, m);
    else {
      m.focus();
      return;
    }
  }
}, q = "left", le = "right", re = "scrollLeft", kr = (n) => {
  const {
    children: d,
    activeTab: s,
    animationDuration: v = 300,
    navBtnCLickAnimationDuration: m = 300,
    selectedAnimationDuration: y = 300,
    isRTL: _ = !1,
    didReachEnd: T = () => null,
    didReachStart: g = () => null,
    onTabClick: D = () => null,
    hideNavBtnsOnMobile: E = !0,
    hideNavBtns: O = !1,
    tabsScrollAmount: N = 3,
    tabsContainerRef: $ = null,
    tabRef: ce = null,
    mode: z = "",
    tabsContainerStyle: we = {},
    navBtnStyle: M = {},
    tabsUpperContainerStyle: C = {},
    leftNavBtnClassName: Se = "",
    rightNavBtnClassName: Te = "",
    navBtnClassName: me = "",
    navBtnContainerClassName: Ce = "",
    tabsUpperContainerClassName: xe = "",
    tabsContainerClassName: je = "",
    leftNavBtnRef: be = null,
    rightNavBtnRef: Oe = null,
    showTabsScroll: Pe = !1,
    navBtnAs: ge = "button",
    action: F,
    rightBtnIcon: B = /* @__PURE__ */ j.jsx(Or, {}),
    leftBtnIcon: J = /* @__PURE__ */ j.jsx(jr, {}),
    getTabsBoundingClientRects: _e = () => null
  } = n, G = x.useRef([]), S = x.useRef(null), [H, ye] = x.useState({
    start: !1,
    end: !1
  }), Y = (i = s) => {
    var k;
    const a = S == null ? void 0 : S.current, h = (k = G.current) == null ? void 0 : k[i];
    let l, u;
    if (!s && s !== 0) {
      console.error("react-tabs-scrollable : You have to add activeTab prop");
      return;
    }
    if (a) {
      const W = a.getBoundingClientRect();
      l = {
        top: W.top,
        right: W.right,
        bottom: W.bottom,
        left: W.left,
        width: W.width,
        height: W.height,
        x: W.x,
        y: W.y,
        scrollLeft: a.scrollLeft,
        clientWidth: a == null ? void 0 : a.clientWidth,
        scrollWidth: a == null ? void 0 : a.scrollWidth
      }, u = h == null ? void 0 : h.getBoundingClientRect();
    }
    return _e({ tabsContainerRects: l, tabRects: u }), { tabsContainerRects: l, tabRects: u };
  }, te = (i = s, a = !0, h) => {
    if (!S.current)
      return;
    const { tabsContainerRects: l, tabRects: u } = Y(i), k = l.clientWidth / 2 - (u == null ? void 0 : u.width) / 2;
    if (!l || !u)
      return;
    const W = z === "scrollSelectedToCenter" || z === "scrollSelectedToCenterFromView" ? l.clientWidth / 2 - (u == null ? void 0 : u.width) / 2 : 0, de = z === "scrollSelectedToEnd" ? l.clientWidth - (u == null ? void 0 : u.width) : 0, ae = W || de;
    if (u[q] < l[q]) {
      const V = l[re] + (u[q] - l[q]) - ae;
      L(
        V,
        v || y,
        a
      );
    } else if (u[le] > l[le]) {
      const V = l[re] + (u[le] - l[le]) + ae;
      L(
        V,
        y || v,
        a
      );
    }
    if (k > u[q] && h && z === "scrollSelectedToCenterFromView") {
      h = !1;
      const V = l[re] + (u[q] - l[q]) - ae;
      L(
        V,
        v || y,
        a
      );
    } else if (k < u[q] && h && z === "scrollSelectedToCenterFromView") {
      h = !1;
      const V = l[re] + (u[le] - l[le]) + ae;
      L(
        V,
        y || v,
        a
      );
    }
  }, L = (i, a = 300, h = !0) => {
    h ? wr(re, S.current, i, {
      duration: a
    }) : S.current.scrollLeft = i;
  }, ne = (i = S) => {
    if (!i.current)
      return;
    const a = _ ? Cr(
      i.current,
      _ ? "rtl" : "ltr"
    ) : i.current.scrollLeft, h = i.current.scrollWidth, l = i.current.clientWidth, u = Math.floor(a) > 1, k = Math.ceil(a) < h - l - 1;
    ye({
      start: _ ? k : u,
      end: _ ? u : k
    }), g(!u), T(!k);
  };
  x.useEffect(() => {
    S.current && (S.current.scrollLeft = 0);
    const i = Ze(() => {
      Y(), ne(S), te();
    });
    let a = null;
    typeof ResizeObserver < "u" && (a = new ResizeObserver((l) => {
      i();
    }), a.observe(S.current));
    const h = requestAnimationFrame(() => {
      S.current && (ne(S), te(s, !0, !0));
    });
    return () => {
      a == null || a.disconnect(), cancelAnimationFrame(h);
    };
  }, [_]), x.useEffect(() => {
    te(s, !0, !0);
  }, [s, _]);
  const ke = x.useCallback(
    (i, a) => {
      D(i, a);
    },
    []
  ), X = x.useMemo(
    () => Ze(() => {
      ne(S);
    }),
    [ne]
  );
  x.useEffect(() => () => {
    X.clear();
  }, [X]);
  const Z = (i, a = N) => {
    var l;
    const { tabsContainerRects: h } = Y();
    L(
      h[re] + ((l = G.current[s]) == null ? void 0 : l.clientWidth) * a,
      v || m
    );
  }, U = (i, a = N) => {
    var l;
    const { tabsContainerRects: h } = Y();
    L(
      h[re] - ((l = G.current[s]) == null ? void 0 : l.clientWidth) * a,
      v || m
    );
  }, ue = (i) => {
    const a = S.current, h = xr(a).activeElement;
    if ((h == null ? void 0 : h.getAttribute("role")) !== "tab")
      return;
    let u = "ArrowLeft", k = "ArrowRight";
    switch (_ && (u = "ArrowRight", k = "ArrowLeft"), i.key) {
      case u:
        i.preventDefault(), Ee(a, h, rr);
        break;
      case k:
        i.preventDefault(), Ee(a, h, er);
        break;
      case "Home":
        i.preventDefault(), Ee(a, null, er);
        break;
      case "End":
        i.preventDefault(), Ee(a, null, rr);
        break;
    }
  }, Q = () => {
    L(0);
  }, Re = () => {
    const { tabsContainerRects: i } = Y(), { scrollWidth: a } = i;
    L((_ ? -1 : 1) * a);
  };
  x.useImperativeHandle(
    F,
    () => ({
      onLeftNavBtnClick: U,
      onRightNavBtnClick: Z,
      goToStart: Q,
      goToEnd: Re
    }),
    [U, Z, Q, Re]
  );
  const fe = {
    "aria-hidden": "true",
    hideNavBtnsOnMobile: E,
    navBtnStyle: M,
    navBtnContainerClassName: Ce,
    navBtnAs: ge
  }, K = (() => {
    if (O)
      return null;
    let i = {};
    return !H.start && !H.end ? i = {
      end: null,
      start: null
    } : (i[_ ? "end" : "start"] = /* @__PURE__ */ j.jsx(
      Qe,
      {
        disabled: !H[_ ? "end" : "start"],
        onClick: U,
        ref: be,
        className: `${Se} ${me}`.trim(),
        ...fe,
        children: J
      }
    ), i[_ ? "start" : "end"] = /* @__PURE__ */ j.jsx(
      Qe,
      {
        disabled: !H[_ ? "start" : "end"],
        onClick: Z,
        ref: Oe,
        className: `${Te} ${me}`.trim(),
        ...fe,
        children: B
      }
    ), i);
  })();
  return /* @__PURE__ */ j.jsxs(
    "div",
    {
      className: `rts___tabs___container ${xe}`.trim(),
      style: C,
      children: [
        K == null ? void 0 : K.start,
        /* @__PURE__ */ j.jsx(
          "div",
          {
            ref: (i) => {
              S.current = i, $ && ($.current = i);
            },
            role: "tablist",
            "aria-label": "tabs",
            onKeyDown: ue,
            onScroll: X,
            style: we,
            className: `rts___tabs ${Pe ? "" : "hide___rts___tabs___scroll"} ${je}`.trim(),
            children: /* @__PURE__ */ j.jsx(x.Fragment, { children: x.Children.map(d, (i, a) => {
              if (!x.isValidElement(i))
                return null;
              const h = a === s;
              return x.cloneElement(i, {
                ref: (l) => {
                  G.current[a] = l, ce && (ce.current[a] = l);
                },
                onClick: (l) => {
                  ke(l, a);
                },
                "data-index": a,
                role: "tab",
                "aria-selected": h ? "true" : "false",
                tabIndex: h ? "0" : "-1",
                selected: h,
                className: `rts___tab rts___btn ${i.props.className || ""}`.trim()
              });
            }) })
          }
        ),
        K == null ? void 0 : K.end
      ]
    }
  );
}, Ar = x.forwardRef(
  ({ className: n = "", selected: d, style: s, tabAs: v = "button", ...m }, y) => {
    const _ = v, T = {
      type: "button"
    }, g = `${n} ${d ? "rts___tab___selected" : ""}`.trim();
    return /* @__PURE__ */ j.jsx(
      _,
      {
        ...m,
        className: g,
        ref: y,
        style: { ...s || {} },
        ...v === "button" ? T : {},
        children: m.children
      }
    );
  }
), Dr = ({
  activeTab: n,
  index: d,
  children: s,
  className: v = "",
  as: m = "div",
  style: y
}) => /* @__PURE__ */ j.jsx(j.Fragment, { children: n == d && x.createElement(
  m,
  {
    className: v,
    style: y
  },
  s
) });
export {
  Ar as Tab,
  Dr as TabScreen,
  kr as Tabs
};
//# sourceMappingURL=react-tabs-scrollable.es.js.map
