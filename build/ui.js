(() => {
  var __defProp = Object.defineProperty;
  var __defProps = Object.defineProperties;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a3, b2) => {
    for (var prop in b2 || (b2 = {}))
      if (__hasOwnProp.call(b2, prop))
        __defNormalProp(a3, prop, b2[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b2)) {
        if (__propIsEnum.call(b2, prop))
          __defNormalProp(a3, prop, b2[prop]);
      }
    return a3;
  };
  var __spreadProps = (a3, b2) => __defProps(a3, __getOwnPropDescs(b2));
  var __objRest = (source, exclude) => {
    var target = {};
    for (var prop in source)
      if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
        target[prop] = source[prop];
    if (source != null && __getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(source)) {
        if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
          target[prop] = source[prop];
      }
    return target;
  };
  var __esm = (fn2, res) => function __init() {
    return fn2 && (res = (0, fn2[__getOwnPropNames(fn2)[0]])(fn2 = 0)), res;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/preact/dist/preact.module.js
  function w(n2, l3) {
    for (var t3 in l3) n2[t3] = l3[t3];
    return n2;
  }
  function g(n2) {
    n2 && n2.parentNode && n2.parentNode.removeChild(n2);
  }
  function _(l3, t3, u3) {
    var i3, r3, o3, e3 = {};
    for (o3 in t3) "key" == o3 ? i3 = t3[o3] : "ref" == o3 ? r3 = t3[o3] : e3[o3] = t3[o3];
    if (arguments.length > 2 && (e3.children = arguments.length > 3 ? n.call(arguments, 2) : u3), "function" == typeof l3 && null != l3.defaultProps) for (o3 in l3.defaultProps) void 0 === e3[o3] && (e3[o3] = l3.defaultProps[o3]);
    return m(l3, e3, i3, r3, null);
  }
  function m(n2, u3, i3, r3, o3) {
    var e3 = { type: n2, props: u3, key: i3, ref: r3, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == o3 ? ++t : o3, __i: -1, __u: 0 };
    return null == o3 && null != l.vnode && l.vnode(e3), e3;
  }
  function k(n2) {
    return n2.children;
  }
  function x(n2, l3) {
    this.props = n2, this.context = l3;
  }
  function S(n2, l3) {
    if (null == l3) return n2.__ ? S(n2.__, n2.__i + 1) : null;
    for (var t3; l3 < n2.__k.length; l3++) if (null != (t3 = n2.__k[l3]) && null != t3.__e) return t3.__e;
    return "function" == typeof n2.type ? S(n2) : null;
  }
  function C(n2) {
    var l3, t3;
    if (null != (n2 = n2.__) && null != n2.__c) {
      for (n2.__e = n2.__c.base = null, l3 = 0; l3 < n2.__k.length; l3++) if (null != (t3 = n2.__k[l3]) && null != t3.__e) {
        n2.__e = n2.__c.base = t3.__e;
        break;
      }
      return C(n2);
    }
  }
  function M(n2) {
    (!n2.__d && (n2.__d = true) && i.push(n2) && !$.__r++ || r !== l.debounceRendering) && ((r = l.debounceRendering) || o)($);
  }
  function $() {
    for (var n2, t3, u3, r3, o3, f3, c3, s3 = 1; i.length; ) i.length > s3 && i.sort(e), n2 = i.shift(), s3 = i.length, n2.__d && (u3 = void 0, o3 = (r3 = (t3 = n2).__v).__e, f3 = [], c3 = [], t3.__P && ((u3 = w({}, r3)).__v = r3.__v + 1, l.vnode && l.vnode(u3), O(t3.__P, u3, r3, t3.__n, t3.__P.namespaceURI, 32 & r3.__u ? [o3] : null, f3, null == o3 ? S(r3) : o3, !!(32 & r3.__u), c3), u3.__v = r3.__v, u3.__.__k[u3.__i] = u3, z(f3, u3, c3), u3.__e != o3 && C(u3)));
    $.__r = 0;
  }
  function I(n2, l3, t3, u3, i3, r3, o3, e3, f3, c3, s3) {
    var a3, h3, y3, d3, w3, g4, _3 = u3 && u3.__k || v, m3 = l3.length;
    for (f3 = P(t3, l3, _3, f3, m3), a3 = 0; a3 < m3; a3++) null != (y3 = t3.__k[a3]) && (h3 = -1 === y3.__i ? p : _3[y3.__i] || p, y3.__i = a3, g4 = O(n2, y3, h3, i3, r3, o3, e3, f3, c3, s3), d3 = y3.__e, y3.ref && h3.ref != y3.ref && (h3.ref && q(h3.ref, null, y3), s3.push(y3.ref, y3.__c || d3, y3)), null == w3 && null != d3 && (w3 = d3), 4 & y3.__u || h3.__k === y3.__k ? f3 = A(y3, f3, n2) : "function" == typeof y3.type && void 0 !== g4 ? f3 = g4 : d3 && (f3 = d3.nextSibling), y3.__u &= -7);
    return t3.__e = w3, f3;
  }
  function P(n2, l3, t3, u3, i3) {
    var r3, o3, e3, f3, c3, s3 = t3.length, a3 = s3, h3 = 0;
    for (n2.__k = new Array(i3), r3 = 0; r3 < i3; r3++) null != (o3 = l3[r3]) && "boolean" != typeof o3 && "function" != typeof o3 ? (f3 = r3 + h3, (o3 = n2.__k[r3] = "string" == typeof o3 || "number" == typeof o3 || "bigint" == typeof o3 || o3.constructor == String ? m(null, o3, null, null, null) : d(o3) ? m(k, { children: o3 }, null, null, null) : void 0 === o3.constructor && o3.__b > 0 ? m(o3.type, o3.props, o3.key, o3.ref ? o3.ref : null, o3.__v) : o3).__ = n2, o3.__b = n2.__b + 1, e3 = null, -1 !== (c3 = o3.__i = L(o3, t3, f3, a3)) && (a3--, (e3 = t3[c3]) && (e3.__u |= 2)), null == e3 || null === e3.__v ? (-1 == c3 && (i3 > s3 ? h3-- : i3 < s3 && h3++), "function" != typeof o3.type && (o3.__u |= 4)) : c3 != f3 && (c3 == f3 - 1 ? h3-- : c3 == f3 + 1 ? h3++ : (c3 > f3 ? h3-- : h3++, o3.__u |= 4))) : n2.__k[r3] = null;
    if (a3) for (r3 = 0; r3 < s3; r3++) null != (e3 = t3[r3]) && 0 == (2 & e3.__u) && (e3.__e == u3 && (u3 = S(e3)), B(e3, e3));
    return u3;
  }
  function A(n2, l3, t3) {
    var u3, i3;
    if ("function" == typeof n2.type) {
      for (u3 = n2.__k, i3 = 0; u3 && i3 < u3.length; i3++) u3[i3] && (u3[i3].__ = n2, l3 = A(u3[i3], l3, t3));
      return l3;
    }
    n2.__e != l3 && (l3 && n2.type && !t3.contains(l3) && (l3 = S(n2)), t3.insertBefore(n2.__e, l3 || null), l3 = n2.__e);
    do {
      l3 = l3 && l3.nextSibling;
    } while (null != l3 && 8 == l3.nodeType);
    return l3;
  }
  function H(n2, l3) {
    return l3 = l3 || [], null == n2 || "boolean" == typeof n2 || (d(n2) ? n2.some(function(n3) {
      H(n3, l3);
    }) : l3.push(n2)), l3;
  }
  function L(n2, l3, t3, u3) {
    var i3, r3, o3 = n2.key, e3 = n2.type, f3 = l3[t3];
    if (null === f3 && null == n2.key || f3 && o3 == f3.key && e3 === f3.type && 0 == (2 & f3.__u)) return t3;
    if (u3 > (null != f3 && 0 == (2 & f3.__u) ? 1 : 0)) for (i3 = t3 - 1, r3 = t3 + 1; i3 >= 0 || r3 < l3.length; ) {
      if (i3 >= 0) {
        if ((f3 = l3[i3]) && 0 == (2 & f3.__u) && o3 == f3.key && e3 === f3.type) return i3;
        i3--;
      }
      if (r3 < l3.length) {
        if ((f3 = l3[r3]) && 0 == (2 & f3.__u) && o3 == f3.key && e3 === f3.type) return r3;
        r3++;
      }
    }
    return -1;
  }
  function T(n2, l3, t3) {
    "-" == l3[0] ? n2.setProperty(l3, null == t3 ? "" : t3) : n2[l3] = null == t3 ? "" : "number" != typeof t3 || y.test(l3) ? t3 : t3 + "px";
  }
  function j(n2, l3, t3, u3, i3) {
    var r3;
    n: if ("style" == l3) if ("string" == typeof t3) n2.style.cssText = t3;
    else {
      if ("string" == typeof u3 && (n2.style.cssText = u3 = ""), u3) for (l3 in u3) t3 && l3 in t3 || T(n2.style, l3, "");
      if (t3) for (l3 in t3) u3 && t3[l3] === u3[l3] || T(n2.style, l3, t3[l3]);
    }
    else if ("o" == l3[0] && "n" == l3[1]) r3 = l3 != (l3 = l3.replace(f, "$1")), l3 = l3.toLowerCase() in n2 || "onFocusOut" == l3 || "onFocusIn" == l3 ? l3.toLowerCase().slice(2) : l3.slice(2), n2.l || (n2.l = {}), n2.l[l3 + r3] = t3, t3 ? u3 ? t3.t = u3.t : (t3.t = c, n2.addEventListener(l3, r3 ? a : s, r3)) : n2.removeEventListener(l3, r3 ? a : s, r3);
    else {
      if ("http://www.w3.org/2000/svg" == i3) l3 = l3.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != l3 && "height" != l3 && "href" != l3 && "list" != l3 && "form" != l3 && "tabIndex" != l3 && "download" != l3 && "rowSpan" != l3 && "colSpan" != l3 && "role" != l3 && "popover" != l3 && l3 in n2) try {
        n2[l3] = null == t3 ? "" : t3;
        break n;
      } catch (n3) {
      }
      "function" == typeof t3 || (null == t3 || false === t3 && "-" != l3[4] ? n2.removeAttribute(l3) : n2.setAttribute(l3, "popover" == l3 && 1 == t3 ? "" : t3));
    }
  }
  function F(n2) {
    return function(t3) {
      if (this.l) {
        var u3 = this.l[t3.type + n2];
        if (null == t3.u) t3.u = c++;
        else if (t3.u < u3.t) return;
        return u3(l.event ? l.event(t3) : t3);
      }
    };
  }
  function O(n2, t3, u3, i3, r3, o3, e3, f3, c3, s3) {
    var a3, h3, p3, v3, y3, _3, m3, b2, S2, C3, M2, $2, P4, A4, H3, L2, T4, j4 = t3.type;
    if (void 0 !== t3.constructor) return null;
    128 & u3.__u && (c3 = !!(32 & u3.__u), o3 = [f3 = t3.__e = u3.__e]), (a3 = l.__b) && a3(t3);
    n: if ("function" == typeof j4) try {
      if (b2 = t3.props, S2 = "prototype" in j4 && j4.prototype.render, C3 = (a3 = j4.contextType) && i3[a3.__c], M2 = a3 ? C3 ? C3.props.value : a3.__ : i3, u3.__c ? m3 = (h3 = t3.__c = u3.__c).__ = h3.__E : (S2 ? t3.__c = h3 = new j4(b2, M2) : (t3.__c = h3 = new x(b2, M2), h3.constructor = j4, h3.render = D), C3 && C3.sub(h3), h3.props = b2, h3.state || (h3.state = {}), h3.context = M2, h3.__n = i3, p3 = h3.__d = true, h3.__h = [], h3._sb = []), S2 && null == h3.__s && (h3.__s = h3.state), S2 && null != j4.getDerivedStateFromProps && (h3.__s == h3.state && (h3.__s = w({}, h3.__s)), w(h3.__s, j4.getDerivedStateFromProps(b2, h3.__s))), v3 = h3.props, y3 = h3.state, h3.__v = t3, p3) S2 && null == j4.getDerivedStateFromProps && null != h3.componentWillMount && h3.componentWillMount(), S2 && null != h3.componentDidMount && h3.__h.push(h3.componentDidMount);
      else {
        if (S2 && null == j4.getDerivedStateFromProps && b2 !== v3 && null != h3.componentWillReceiveProps && h3.componentWillReceiveProps(b2, M2), !h3.__e && (null != h3.shouldComponentUpdate && false === h3.shouldComponentUpdate(b2, h3.__s, M2) || t3.__v == u3.__v)) {
          for (t3.__v != u3.__v && (h3.props = b2, h3.state = h3.__s, h3.__d = false), t3.__e = u3.__e, t3.__k = u3.__k, t3.__k.some(function(n3) {
            n3 && (n3.__ = t3);
          }), $2 = 0; $2 < h3._sb.length; $2++) h3.__h.push(h3._sb[$2]);
          h3._sb = [], h3.__h.length && e3.push(h3);
          break n;
        }
        null != h3.componentWillUpdate && h3.componentWillUpdate(b2, h3.__s, M2), S2 && null != h3.componentDidUpdate && h3.__h.push(function() {
          h3.componentDidUpdate(v3, y3, _3);
        });
      }
      if (h3.context = M2, h3.props = b2, h3.__P = n2, h3.__e = false, P4 = l.__r, A4 = 0, S2) {
        for (h3.state = h3.__s, h3.__d = false, P4 && P4(t3), a3 = h3.render(h3.props, h3.state, h3.context), H3 = 0; H3 < h3._sb.length; H3++) h3.__h.push(h3._sb[H3]);
        h3._sb = [];
      } else do {
        h3.__d = false, P4 && P4(t3), a3 = h3.render(h3.props, h3.state, h3.context), h3.state = h3.__s;
      } while (h3.__d && ++A4 < 25);
      h3.state = h3.__s, null != h3.getChildContext && (i3 = w(w({}, i3), h3.getChildContext())), S2 && !p3 && null != h3.getSnapshotBeforeUpdate && (_3 = h3.getSnapshotBeforeUpdate(v3, y3)), L2 = a3, null != a3 && a3.type === k && null == a3.key && (L2 = N(a3.props.children)), f3 = I(n2, d(L2) ? L2 : [L2], t3, u3, i3, r3, o3, e3, f3, c3, s3), h3.base = t3.__e, t3.__u &= -161, h3.__h.length && e3.push(h3), m3 && (h3.__E = h3.__ = null);
    } catch (n3) {
      if (t3.__v = null, c3 || null != o3) if (n3.then) {
        for (t3.__u |= c3 ? 160 : 128; f3 && 8 == f3.nodeType && f3.nextSibling; ) f3 = f3.nextSibling;
        o3[o3.indexOf(f3)] = null, t3.__e = f3;
      } else for (T4 = o3.length; T4--; ) g(o3[T4]);
      else t3.__e = u3.__e, t3.__k = u3.__k;
      l.__e(n3, t3, u3);
    }
    else null == o3 && t3.__v == u3.__v ? (t3.__k = u3.__k, t3.__e = u3.__e) : f3 = t3.__e = V(u3.__e, t3, u3, i3, r3, o3, e3, c3, s3);
    return (a3 = l.diffed) && a3(t3), 128 & t3.__u ? void 0 : f3;
  }
  function z(n2, t3, u3) {
    for (var i3 = 0; i3 < u3.length; i3++) q(u3[i3], u3[++i3], u3[++i3]);
    l.__c && l.__c(t3, n2), n2.some(function(t4) {
      try {
        n2 = t4.__h, t4.__h = [], n2.some(function(n3) {
          n3.call(t4);
        });
      } catch (n3) {
        l.__e(n3, t4.__v);
      }
    });
  }
  function N(n2) {
    return "object" != typeof n2 || null == n2 ? n2 : d(n2) ? n2.map(N) : w({}, n2);
  }
  function V(t3, u3, i3, r3, o3, e3, f3, c3, s3) {
    var a3, h3, v3, y3, w3, _3, m3, b2 = i3.props, k3 = u3.props, x3 = u3.type;
    if ("svg" == x3 ? o3 = "http://www.w3.org/2000/svg" : "math" == x3 ? o3 = "http://www.w3.org/1998/Math/MathML" : o3 || (o3 = "http://www.w3.org/1999/xhtml"), null != e3) {
      for (a3 = 0; a3 < e3.length; a3++) if ((w3 = e3[a3]) && "setAttribute" in w3 == !!x3 && (x3 ? w3.localName == x3 : 3 == w3.nodeType)) {
        t3 = w3, e3[a3] = null;
        break;
      }
    }
    if (null == t3) {
      if (null == x3) return document.createTextNode(k3);
      t3 = document.createElementNS(o3, x3, k3.is && k3), c3 && (l.__m && l.__m(u3, e3), c3 = false), e3 = null;
    }
    if (null === x3) b2 === k3 || c3 && t3.data === k3 || (t3.data = k3);
    else {
      if (e3 = e3 && n.call(t3.childNodes), b2 = i3.props || p, !c3 && null != e3) for (b2 = {}, a3 = 0; a3 < t3.attributes.length; a3++) b2[(w3 = t3.attributes[a3]).name] = w3.value;
      for (a3 in b2) if (w3 = b2[a3], "children" == a3) ;
      else if ("dangerouslySetInnerHTML" == a3) v3 = w3;
      else if (!(a3 in k3)) {
        if ("value" == a3 && "defaultValue" in k3 || "checked" == a3 && "defaultChecked" in k3) continue;
        j(t3, a3, null, w3, o3);
      }
      for (a3 in k3) w3 = k3[a3], "children" == a3 ? y3 = w3 : "dangerouslySetInnerHTML" == a3 ? h3 = w3 : "value" == a3 ? _3 = w3 : "checked" == a3 ? m3 = w3 : c3 && "function" != typeof w3 || b2[a3] === w3 || j(t3, a3, w3, b2[a3], o3);
      if (h3) c3 || v3 && (h3.__html === v3.__html || h3.__html === t3.innerHTML) || (t3.innerHTML = h3.__html), u3.__k = [];
      else if (v3 && (t3.innerHTML = ""), I("template" === u3.type ? t3.content : t3, d(y3) ? y3 : [y3], u3, i3, r3, "foreignObject" == x3 ? "http://www.w3.org/1999/xhtml" : o3, e3, f3, e3 ? e3[0] : i3.__k && S(i3, 0), c3, s3), null != e3) for (a3 = e3.length; a3--; ) g(e3[a3]);
      c3 || (a3 = "value", "progress" == x3 && null == _3 ? t3.removeAttribute("value") : void 0 !== _3 && (_3 !== t3[a3] || "progress" == x3 && !_3 || "option" == x3 && _3 !== b2[a3]) && j(t3, a3, _3, b2[a3], o3), a3 = "checked", void 0 !== m3 && m3 !== t3[a3] && j(t3, a3, m3, b2[a3], o3));
    }
    return t3;
  }
  function q(n2, t3, u3) {
    try {
      if ("function" == typeof n2) {
        var i3 = "function" == typeof n2.__u;
        i3 && n2.__u(), i3 && null == t3 || (n2.__u = n2(t3));
      } else n2.current = t3;
    } catch (n3) {
      l.__e(n3, u3);
    }
  }
  function B(n2, t3, u3) {
    var i3, r3;
    if (l.unmount && l.unmount(n2), (i3 = n2.ref) && (i3.current && i3.current !== n2.__e || q(i3, null, t3)), null != (i3 = n2.__c)) {
      if (i3.componentWillUnmount) try {
        i3.componentWillUnmount();
      } catch (n3) {
        l.__e(n3, t3);
      }
      i3.base = i3.__P = null;
    }
    if (i3 = n2.__k) for (r3 = 0; r3 < i3.length; r3++) i3[r3] && B(i3[r3], t3, u3 || "function" != typeof n2.type);
    u3 || g(n2.__e), n2.__c = n2.__ = n2.__e = void 0;
  }
  function D(n2, l3, t3) {
    return this.constructor(n2, t3);
  }
  function E(t3, u3, i3) {
    var r3, o3, e3, f3;
    u3 == document && (u3 = document.documentElement), l.__ && l.__(t3, u3), o3 = (r3 = "function" == typeof i3) ? null : i3 && i3.__k || u3.__k, e3 = [], f3 = [], O(u3, t3 = (!r3 && i3 || u3).__k = _(k, null, [t3]), o3 || p, p, u3.namespaceURI, !r3 && i3 ? [i3] : o3 ? null : u3.firstChild ? n.call(u3.childNodes) : null, e3, !r3 && i3 ? i3 : o3 ? o3.__e : u3.firstChild, r3, f3), z(e3, t3, f3);
  }
  var n, l, t, u, i, r, o, e, f, c, s, a, h, p, v, y, d;
  var init_preact_module = __esm({
    "node_modules/preact/dist/preact.module.js"() {
      p = {};
      v = [];
      y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
      d = Array.isArray;
      n = v.slice, l = { __e: function(n2, l3, t3, u3) {
        for (var i3, r3, o3; l3 = l3.__; ) if ((i3 = l3.__c) && !i3.__) try {
          if ((r3 = i3.constructor) && null != r3.getDerivedStateFromError && (i3.setState(r3.getDerivedStateFromError(n2)), o3 = i3.__d), null != i3.componentDidCatch && (i3.componentDidCatch(n2, u3 || {}), o3 = i3.__d), o3) return i3.__E = i3;
        } catch (l4) {
          n2 = l4;
        }
        throw n2;
      } }, t = 0, u = function(n2) {
        return null != n2 && null == n2.constructor;
      }, x.prototype.setState = function(n2, l3) {
        var t3;
        t3 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = w({}, this.state), "function" == typeof n2 && (n2 = n2(w({}, t3), this.props)), n2 && w(t3, n2), null != n2 && this.__v && (l3 && this._sb.push(l3), M(this));
      }, x.prototype.forceUpdate = function(n2) {
        this.__v && (this.__e = true, n2 && this.__h.push(n2), M(this));
      }, x.prototype.render = k, i = [], o = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, e = function(n2, l3) {
        return n2.__v.__b - l3.__v.__b;
      }, $.__r = 0, f = /(PointerCapture)$|Capture$/i, c = 0, s = F(false), a = F(true), h = 0;
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js
  function createClassName(classNames) {
    return classNames.filter(function(className) {
      return className !== null;
    }).join(" ");
  }
  var init_create_class_name = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/create-class-name.js"() {
    }
  });

  // node_modules/preact/hooks/dist/hooks.module.js
  function p2(n2, t3) {
    c2.__h && c2.__h(r2, n2, o2 || t3), o2 = 0;
    var u3 = r2.__H || (r2.__H = { __: [], __h: [] });
    return n2 >= u3.__.length && u3.__.push({}), u3.__[n2];
  }
  function d2(n2) {
    return o2 = 1, h2(D2, n2);
  }
  function h2(n2, u3, i3) {
    var o3 = p2(t2++, 2);
    if (o3.t = n2, !o3.__c && (o3.__ = [i3 ? i3(u3) : D2(void 0, u3), function(n3) {
      var t3 = o3.__N ? o3.__N[0] : o3.__[0], r3 = o3.t(t3, n3);
      t3 !== r3 && (o3.__N = [r3, o3.__[1]], o3.__c.setState({}));
    }], o3.__c = r2, !r2.__f)) {
      var f3 = function(n3, t3, r3) {
        if (!o3.__c.__H) return true;
        var u4 = o3.__c.__H.__.filter(function(n4) {
          return !!n4.__c;
        });
        if (u4.every(function(n4) {
          return !n4.__N;
        })) return !c3 || c3.call(this, n3, t3, r3);
        var i4 = o3.__c.props !== n3;
        return u4.forEach(function(n4) {
          if (n4.__N) {
            var t4 = n4.__[0];
            n4.__ = n4.__N, n4.__N = void 0, t4 !== n4.__[0] && (i4 = true);
          }
        }), c3 && c3.call(this, n3, t3, r3) || i4;
      };
      r2.__f = true;
      var c3 = r2.shouldComponentUpdate, e3 = r2.componentWillUpdate;
      r2.componentWillUpdate = function(n3, t3, r3) {
        if (this.__e) {
          var u4 = c3;
          c3 = void 0, f3(n3, t3, r3), c3 = u4;
        }
        e3 && e3.call(this, n3, t3, r3);
      }, r2.shouldComponentUpdate = f3;
    }
    return o3.__N || o3.__;
  }
  function T2(n2, r3) {
    var u3 = p2(t2++, 7);
    return C2(u3.__H, r3) && (u3.__ = n2(), u3.__H = r3, u3.__h = n2), u3.__;
  }
  function q2(n2, t3) {
    return o2 = 8, T2(function() {
      return n2;
    }, t3);
  }
  function j2() {
    for (var n2; n2 = f2.shift(); ) if (n2.__P && n2.__H) try {
      n2.__H.__h.forEach(z2), n2.__H.__h.forEach(B2), n2.__H.__h = [];
    } catch (t3) {
      n2.__H.__h = [], c2.__e(t3, n2.__v);
    }
  }
  function w2(n2) {
    var t3, r3 = function() {
      clearTimeout(u3), k2 && cancelAnimationFrame(t3), setTimeout(n2);
    }, u3 = setTimeout(r3, 100);
    k2 && (t3 = requestAnimationFrame(r3));
  }
  function z2(n2) {
    var t3 = r2, u3 = n2.__c;
    "function" == typeof u3 && (n2.__c = void 0, u3()), r2 = t3;
  }
  function B2(n2) {
    var t3 = r2;
    n2.__c = n2.__(), r2 = t3;
  }
  function C2(n2, t3) {
    return !n2 || n2.length !== t3.length || t3.some(function(t4, r3) {
      return t4 !== n2[r3];
    });
  }
  function D2(n2, t3) {
    return "function" == typeof t3 ? t3(n2) : t3;
  }
  var t2, r2, u2, i2, o2, f2, c2, e2, a2, v2, l2, m2, s2, k2;
  var init_hooks_module = __esm({
    "node_modules/preact/hooks/dist/hooks.module.js"() {
      init_preact_module();
      o2 = 0;
      f2 = [];
      c2 = l;
      e2 = c2.__b;
      a2 = c2.__r;
      v2 = c2.diffed;
      l2 = c2.__c;
      m2 = c2.unmount;
      s2 = c2.__;
      c2.__b = function(n2) {
        r2 = null, e2 && e2(n2);
      }, c2.__ = function(n2, t3) {
        n2 && t3.__k && t3.__k.__m && (n2.__m = t3.__k.__m), s2 && s2(n2, t3);
      }, c2.__r = function(n2) {
        a2 && a2(n2), t2 = 0;
        var i3 = (r2 = n2.__c).__H;
        i3 && (u2 === r2 ? (i3.__h = [], r2.__h = [], i3.__.forEach(function(n3) {
          n3.__N && (n3.__ = n3.__N), n3.u = n3.__N = void 0;
        })) : (i3.__h.forEach(z2), i3.__h.forEach(B2), i3.__h = [], t2 = 0)), u2 = r2;
      }, c2.diffed = function(n2) {
        v2 && v2(n2);
        var t3 = n2.__c;
        t3 && t3.__H && (t3.__H.__h.length && (1 !== f2.push(t3) && i2 === c2.requestAnimationFrame || ((i2 = c2.requestAnimationFrame) || w2)(j2)), t3.__H.__.forEach(function(n3) {
          n3.u && (n3.__H = n3.u), n3.u = void 0;
        })), u2 = r2 = null;
      }, c2.__c = function(n2, t3) {
        t3.some(function(n3) {
          try {
            n3.__h.forEach(z2), n3.__h = n3.__h.filter(function(n4) {
              return !n4.__ || B2(n4);
            });
          } catch (r3) {
            t3.some(function(n4) {
              n4.__h && (n4.__h = []);
            }), t3 = [], c2.__e(r3, n3.__v);
          }
        }), l2 && l2(n2, t3);
      }, c2.unmount = function(n2) {
        m2 && m2(n2);
        var t3, r3 = n2.__c;
        r3 && r3.__H && (r3.__H.__.forEach(function(n3) {
          try {
            z2(n3);
          } catch (n4) {
            t3 = n4;
          }
        }), r3.__H = void 0, t3 && c2.__e(t3, r3.__v));
      };
      k2 = "function" == typeof requestAnimationFrame;
    }
  });

  // node_modules/preact/compat/dist/compat.module.js
  function g3(n2, t3) {
    for (var e3 in t3) n2[e3] = t3[e3];
    return n2;
  }
  function E2(n2, t3) {
    for (var e3 in n2) if ("__source" !== e3 && !(e3 in t3)) return true;
    for (var r3 in t3) if ("__source" !== r3 && n2[r3] !== t3[r3]) return true;
    return false;
  }
  function N2(n2, t3) {
    this.props = n2, this.context = t3;
  }
  function D3(n2) {
    function t3(t4) {
      var e3 = g3({}, t4);
      return delete e3.ref, n2(e3, t4.ref || null);
    }
    return t3.$$typeof = A3, t3.render = t3, t3.prototype.isReactComponent = t3.__f = true, t3.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t3;
  }
  function V2(n2, t3, e3) {
    return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
      "function" == typeof n3.__c && n3.__c();
    }), n2.__c.__H = null), null != (n2 = g3({}, n2)).__c && (n2.__c.__P === e3 && (n2.__c.__P = t3), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
      return V2(n3, t3, e3);
    })), n2;
  }
  function W(n2, t3, e3) {
    return n2 && e3 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
      return W(n3, t3, e3);
    }), n2.__c && n2.__c.__P === t3 && (n2.__e && e3.appendChild(n2.__e), n2.__c.__e = true, n2.__c.__P = e3)), n2;
  }
  function P3() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function j3(n2) {
    var t3 = n2.__.__c;
    return t3 && t3.__a && t3.__a(n2);
  }
  function B3() {
    this.i = null, this.l = null;
  }
  function rn() {
  }
  function un() {
    return this.cancelBubble;
  }
  function on() {
    return this.defaultPrevented;
  }
  var T3, A3, F3, U, H2, q3, G2, J2, K2, Q, X, en, cn, ln, fn, an, sn;
  var init_compat_module = __esm({
    "node_modules/preact/compat/dist/compat.module.js"() {
      init_preact_module();
      init_preact_module();
      init_hooks_module();
      init_hooks_module();
      (N2.prototype = new x()).isPureReactComponent = true, N2.prototype.shouldComponentUpdate = function(n2, t3) {
        return E2(this.props, n2) || E2(this.state, t3);
      };
      T3 = l.__b;
      l.__b = function(n2) {
        n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), T3 && T3(n2);
      };
      A3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
      F3 = l.__e;
      l.__e = function(n2, t3, e3, r3) {
        if (n2.then) {
          for (var u3, o3 = t3; o3 = o3.__; ) if ((u3 = o3.__c) && u3.__c) return null == t3.__e && (t3.__e = e3.__e, t3.__k = e3.__k), u3.__c(n2, t3);
        }
        F3(n2, t3, e3, r3);
      };
      U = l.unmount;
      l.unmount = function(n2) {
        var t3 = n2.__c;
        t3 && t3.__R && t3.__R(), t3 && 32 & n2.__u && (n2.type = null), U && U(n2);
      }, (P3.prototype = new x()).__c = function(n2, t3) {
        var e3 = t3.__c, r3 = this;
        null == r3.o && (r3.o = []), r3.o.push(e3);
        var u3 = j3(r3.__v), o3 = false, i3 = function() {
          o3 || (o3 = true, e3.__R = null, u3 ? u3(c3) : c3());
        };
        e3.__R = i3;
        var c3 = function() {
          if (!--r3.__u) {
            if (r3.state.__a) {
              var n3 = r3.state.__a;
              r3.__v.__k[0] = W(n3, n3.__c.__P, n3.__c.__O);
            }
            var t4;
            for (r3.setState({ __a: r3.__b = null }); t4 = r3.o.pop(); ) t4.forceUpdate();
          }
        };
        r3.__u++ || 32 & t3.__u || r3.setState({ __a: r3.__b = r3.__v.__k[0] }), n2.then(i3, i3);
      }, P3.prototype.componentWillUnmount = function() {
        this.o = [];
      }, P3.prototype.render = function(n2, e3) {
        if (this.__b) {
          if (this.__v.__k) {
            var r3 = document.createElement("div"), o3 = this.__v.__k[0].__c;
            this.__v.__k[0] = V2(this.__b, r3, o3.__O = o3.__P);
          }
          this.__b = null;
        }
        var i3 = e3.__a && _(k, null, n2.fallback);
        return i3 && (i3.__u &= -33), [_(k, null, e3.__a ? null : n2.children), i3];
      };
      H2 = function(n2, t3, e3) {
        if (++e3[1] === e3[0] && n2.l.delete(t3), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.l.size)) for (e3 = n2.i; e3; ) {
          for (; e3.length > 3; ) e3.pop()();
          if (e3[1] < e3[0]) break;
          n2.i = e3 = e3[2];
        }
      };
      (B3.prototype = new x()).__a = function(n2) {
        var t3 = this, e3 = j3(t3.__v), r3 = t3.l.get(n2);
        return r3[0]++, function(u3) {
          var o3 = function() {
            t3.props.revealOrder ? (r3.push(u3), H2(t3, n2, r3)) : u3();
          };
          e3 ? e3(o3) : o3();
        };
      }, B3.prototype.render = function(n2) {
        this.i = null, this.l = /* @__PURE__ */ new Map();
        var t3 = H(n2.children);
        n2.revealOrder && "b" === n2.revealOrder[0] && t3.reverse();
        for (var e3 = t3.length; e3--; ) this.l.set(t3[e3], this.i = [1, 0, this.i]);
        return n2.children;
      }, B3.prototype.componentDidUpdate = B3.prototype.componentDidMount = function() {
        var n2 = this;
        this.l.forEach(function(t3, e3) {
          H2(n2, e3, t3);
        });
      };
      q3 = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
      G2 = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
      J2 = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
      K2 = /[A-Z0-9]/g;
      Q = "undefined" != typeof document;
      X = function(n2) {
        return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
      };
      x.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t3) {
        Object.defineProperty(x.prototype, t3, { configurable: true, get: function() {
          return this["UNSAFE_" + t3];
        }, set: function(n2) {
          Object.defineProperty(this, t3, { configurable: true, writable: true, value: n2 });
        } });
      });
      en = l.event;
      l.event = function(n2) {
        return en && (n2 = en(n2)), n2.persist = rn, n2.isPropagationStopped = un, n2.isDefaultPrevented = on, n2.nativeEvent = n2;
      };
      ln = { enumerable: false, configurable: true, get: function() {
        return this.class;
      } };
      fn = l.vnode;
      l.vnode = function(n2) {
        "string" == typeof n2.type && function(n3) {
          var t3 = n3.props, e3 = n3.type, u3 = {}, o3 = -1 === e3.indexOf("-");
          for (var i3 in t3) {
            var c3 = t3[i3];
            if (!("value" === i3 && "defaultValue" in t3 && null == c3 || Q && "children" === i3 && "noscript" === e3 || "class" === i3 || "className" === i3)) {
              var l3 = i3.toLowerCase();
              "defaultValue" === i3 && "value" in t3 && null == t3.value ? i3 = "value" : "download" === i3 && true === c3 ? c3 = "" : "translate" === l3 && "no" === c3 ? c3 = false : "o" === l3[0] && "n" === l3[1] ? "ondoubleclick" === l3 ? i3 = "ondblclick" : "onchange" !== l3 || "input" !== e3 && "textarea" !== e3 || X(t3.type) ? "onfocus" === l3 ? i3 = "onfocusin" : "onblur" === l3 ? i3 = "onfocusout" : J2.test(i3) && (i3 = l3) : l3 = i3 = "oninput" : o3 && G2.test(i3) ? i3 = i3.replace(K2, "-$&").toLowerCase() : null === c3 && (c3 = void 0), "oninput" === l3 && u3[i3 = l3] && (i3 = "oninputCapture"), u3[i3] = c3;
            }
          }
          "select" == e3 && u3.multiple && Array.isArray(u3.value) && (u3.value = H(t3.children).forEach(function(n4) {
            n4.props.selected = -1 != u3.value.indexOf(n4.props.value);
          })), "select" == e3 && null != u3.defaultValue && (u3.value = H(t3.children).forEach(function(n4) {
            n4.props.selected = u3.multiple ? -1 != u3.defaultValue.indexOf(n4.props.value) : u3.defaultValue == n4.props.value;
          })), t3.class && !t3.className ? (u3.class = t3.class, Object.defineProperty(u3, "className", ln)) : (t3.className && !t3.class || t3.class && t3.className) && (u3.class = u3.className = t3.className), n3.props = u3;
        }(n2), n2.$$typeof = q3, fn && fn(n2);
      };
      an = l.__r;
      l.__r = function(n2) {
        an && an(n2), cn = n2.__c;
      };
      sn = l.diffed;
      l.diffed = function(n2) {
        sn && sn(n2);
        var t3 = n2.props, e3 = n2.__e;
        null != e3 && "textarea" === n2.type && "value" in t3 && t3.value !== e3.value && (e3.value = null == t3.value ? "" : t3.value), cn = null;
      };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/create-component.js
  function createComponent(fn2) {
    return D3(fn2);
  }
  var init_create_component = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/create-component.js"() {
      init_compat_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/no-op.js
  function noop() {
  }
  var init_no_op = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/no-op.js"() {
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/a0a148ca-54e2-4aea-81cb-92597ebfce40/loading-indicator.module.js
  var loading_indicator_module_default;
  var init_loading_indicator_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/a0a148ca-54e2-4aea-81cb-92597ebfce40/loading-indicator.module.js"() {
      if (document.getElementById("1a821316ac") === null) {
        const element = document.createElement("style");
        element.id = "1a821316ac";
        element.textContent = `._loadingIndicator_pl5c3_1 {
  position: relative;
  width: 16px;
  height: 16px;
  margin: 0 auto;
}

._svg_pl5c3_8 {
  position: absolute;
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  animation: _rotating_pl5c3_1 0.5s linear infinite;
  fill: currentColor;
}

@keyframes _rotating_pl5c3_1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9sb2FkaW5nLWluZGljYXRvci9sb2FkaW5nLWluZGljYXRvci5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osaURBQXdDO0VBQ3hDLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7QUFDRiIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvbG9hZGluZy1pbmRpY2F0b3IvbG9hZGluZy1pbmRpY2F0b3IubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnN2ZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTZweDtcbiAgaGVpZ2h0OiAxNnB4O1xuICBhbmltYXRpb246IHJvdGF0aW5nIDAuNXMgbGluZWFyIGluZmluaXRlO1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRpbmcge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgfVxufVxuIl19 */`;
        document.head.append(element);
      }
      loading_indicator_module_default = { "loadingIndicator": "_loadingIndicator_pl5c3_1", "svg": "_svg_pl5c3_8", "rotating": "_rotating_pl5c3_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js
  var LoadingIndicator;
  var init_loading_indicator = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/loading-indicator/loading-indicator.js"() {
      init_preact_module();
      init_create_component();
      init_loading_indicator_module();
      LoadingIndicator = createComponent(function(_a, ref) {
        var _b = _a, { color } = _b, rest = __objRest(_b, ["color"]);
        return _(
          "div",
          __spreadProps(__spreadValues({}, rest), { ref, class: loading_indicator_module_default.loadingIndicator }),
          _(
            "svg",
            { class: loading_indicator_module_default.svg, style: typeof color === "undefined" ? void 0 : {
              fill: `var(--figma-color-icon-${color})`
            } },
            _("path", { d: "M8 15C11.866 15 15 11.866 15 8C15 6.7865 14.6912 5.64511 14.1479 4.65013L15.0263 4.17174C15.6471 5.30882 16 6.6132 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 5.54138 1.10909 3.34181 2.85426 1.8743L3.47761 2.65678C1.96204 3.94081 1 5.85806 1 8C1 11.866 4.13401 15 8 15Z" })
          )
        );
      });
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/3176d275-dfe9-423e-bac6-88851dfb8143/button.module.js
  var button_module_default;
  var init_button_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/3176d275-dfe9-423e-bac6-88851dfb8143/button.module.js"() {
      if (document.getElementById("50d98006fc") === null) {
        const element = document.createElement("style");
        element.id = "50d98006fc";
        element.textContent = `._button_a84h4_1 {
  position: relative;
  z-index: var(--z-index-1);
  display: inline-block;
}

._fullWidth_a84h4_7 {
  display: block;
}

._button_a84h4_1 button {
  position: relative;
  display: inline-block;
  height: var(--space-24);
  padding: 0 var(--space-8);
  border-width: var(--border-1);
  border-style: solid;
  border-radius: var(--border-radius-6);
}

._disabled_a84h4_21 button {
  cursor: not-allowed;
}

._fullWidth_a84h4_7 button {
  display: block;
  overflow: hidden;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
}

._default_a84h4_33 button {
  border-color: transparent;
  background-color: var(--figma-color-bg-brand);
  color: var(--figma-color-text-onbrand);
}

._default_a84h4_33:not(._disabled_a84h4_21) button:focus {
  border-color: var(--figma-color-border-onbrand);
}
._default_a84h4_33:not(._disabled_a84h4_21) button:focus-visible:before {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  border: var(--border-1) solid var(--figma-color-border-onbrand-strong);
  border-radius: calc(var(--border-radius-6) - var(--border-1));
  content: '';
  pointer-events: none;
}
._default_a84h4_33 button:active {
  background-color: var(--figma-color-bg-brand-pressed);
}
._default_a84h4_33._disabled_a84h4_21 button {
  background-color: var(--figma-color-bg-disabled);
  color: var(--figma-color-text-ondisabled);
}

._default_a84h4_33._danger_a84h4_62 button {
  background-color: var(--figma-color-bg-danger);
  color: var(--figma-color-text-ondanger);
}
._default_a84h4_33._danger_a84h4_62:not(._disabled_a84h4_21) button:focus {
  border-color: var(--figma-color-border-danger-strong);
}
._default_a84h4_33._danger_a84h4_62._disabled_a84h4_21 button {
  background-color: var(--figma-color-bg-disabled);
  color: var(--figma-color-text-ondisabled);
}

._secondary_a84h4_74 button {
  border-color: var(--figma-color-border);
  background-color: transparent;
  color: var(--figma-color-text);
}
._secondary_a84h4_74:not(._disabled_a84h4_21) button:focus {
  border-color: var(--figma-color-border-selected);
}
._secondary_a84h4_74._disabled_a84h4_21 button {
  border-color: var(--figma-color-border-disabled);
  color: var(--figma-color-text-disabled);
}

._secondary_a84h4_74._danger_a84h4_62 button {
  border-color: var(--figma-color-border-danger-strong);
  color: var(--figma-color-text-danger);
}
._secondary_a84h4_74._danger_a84h4_62:not(._disabled_a84h4_21) button:focus {
  border-color: var(--figma-color-border-danger-strong);
}
._secondary_a84h4_74._danger_a84h4_62._disabled_a84h4_21 button {
  border-color: var(--figma-color-border-disabled-strong);
  color: var(--figma-color-text-disabled);
}

._loadingIndicator_a84h4_99 {
  position: absolute;
  top: 50%;
  left: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
}

._default_a84h4_33 ._loadingIndicator_a84h4_99 {
  color: var(--figma-color-icon-onbrand);
}
._default_a84h4_33._disabled_a84h4_21 ._loadingIndicator_a84h4_99 {
  color: var(--figma-color-icon-ondisabled);
}

._default_a84h4_33._danger_a84h4_62 ._loadingIndicator_a84h4_99 {
  color: var(--figma-color-icon-ondanger);
}
._default_a84h4_33._danger_a84h4_62._disabled_a84h4_21 ._loadingIndicator_a84h4_99 {
  color: var(--figma-color-icon-ondisabled);
}

._secondary_a84h4_74 ._loadingIndicator_a84h4_99 {
  color: var(--figma-color-text);
}
._secondary_a84h4_74._disabled_a84h4_21 ._loadingIndicator_a84h4_99 {
  color: var(--figma-color-text-disabled);
}

._secondary_a84h4_74._danger_a84h4_62 ._loadingIndicator_a84h4_99 {
  color: var(--figma-color-text-danger);
}
._secondary_a84h4_74._danger_a84h4_62._disabled_a84h4_21 ._loadingIndicator_a84h4_99 {
  color: var(--figma-color-text-disabled);
}

._children_a84h4_135 {
  display: inline;
}
._loading_a84h4_99 ._children_a84h4_135 {
  visibility: hidden;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9idXR0b24vYnV0dG9uLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDZDQUE2QztFQUM3QyxzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSwrQ0FBK0M7QUFDakQ7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1AsY0FBYztFQUNkLHNFQUFzRTtFQUN0RSw2REFBNkQ7RUFDN0QsV0FBVztFQUNYLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UscURBQXFEO0FBQ3ZEO0FBQ0E7RUFDRSxnREFBZ0Q7RUFDaEQseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLHVDQUF1QztBQUN6QztBQUNBO0VBQ0UscURBQXFEO0FBQ3ZEO0FBQ0E7RUFDRSxnREFBZ0Q7RUFDaEQseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsdUNBQXVDO0VBQ3ZDLDZCQUE2QjtFQUM3Qiw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLGdEQUFnRDtBQUNsRDtBQUNBO0VBQ0UsZ0RBQWdEO0VBQ2hELHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLHFEQUFxRDtFQUNyRCxxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLHFEQUFxRDtBQUN2RDtBQUNBO0VBQ0UsdURBQXVEO0VBQ3ZELHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULG9CQUFvQjtFQUNwQixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLHVDQUF1QztBQUN6QztBQUNBO0VBQ0UseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2NvbXBvbmVudHMvYnV0dG9uL2J1dHRvbi5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogdmFyKC0tei1pbmRleC0xKTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uZnVsbFdpZHRoIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5idXR0b24gYnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGhlaWdodDogdmFyKC0tc3BhY2UtMjQpO1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLTgpO1xuICBib3JkZXItd2lkdGg6IHZhcigtLWJvcmRlci0xKTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy02KTtcbn1cblxuLmRpc2FibGVkIGJ1dHRvbiB7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5mdWxsV2lkdGggYnV0dG9uIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmRlZmF1bHQgYnV0dG9uIHtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctYnJhbmQpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1vbmJyYW5kKTtcbn1cblxuLmRlZmF1bHQ6bm90KC5kaXNhYmxlZCkgYnV0dG9uOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItb25icmFuZCk7XG59XG4uZGVmYXVsdDpub3QoLmRpc2FibGVkKSBidXR0b246Zm9jdXMtdmlzaWJsZTpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogdmFyKC0tYm9yZGVyLTEpIHNvbGlkIHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1vbmJyYW5kLXN0cm9uZyk7XG4gIGJvcmRlci1yYWRpdXM6IGNhbGModmFyKC0tYm9yZGVyLXJhZGl1cy02KSAtIHZhcigtLWJvcmRlci0xKSk7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5kZWZhdWx0IGJ1dHRvbjphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1icmFuZC1wcmVzc2VkKTtcbn1cbi5kZWZhdWx0LmRpc2FibGVkIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLWRpc2FibGVkKTtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtb25kaXNhYmxlZCk7XG59XG5cbi5kZWZhdWx0LmRhbmdlciBidXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1iZy1kYW5nZXIpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1vbmRhbmdlcik7XG59XG4uZGVmYXVsdC5kYW5nZXI6bm90KC5kaXNhYmxlZCkgYnV0dG9uOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItZGFuZ2VyLXN0cm9uZyk7XG59XG4uZGVmYXVsdC5kYW5nZXIuZGlzYWJsZWQgYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctZGlzYWJsZWQpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1vbmRpc2FibGVkKTtcbn1cblxuLnNlY29uZGFyeSBidXR0b24ge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XG59XG4uc2Vjb25kYXJ5Om5vdCguZGlzYWJsZWQpIGJ1dHRvbjpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLXNlbGVjdGVkKTtcbn1cbi5zZWNvbmRhcnkuZGlzYWJsZWQgYnV0dG9uIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItZGlzYWJsZWQpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG5cbi5zZWNvbmRhcnkuZGFuZ2VyIGJ1dHRvbiB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRhbmdlci1zdHJvbmcpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kYW5nZXIpO1xufVxuLnNlY29uZGFyeS5kYW5nZXI6bm90KC5kaXNhYmxlZCkgYnV0dG9uOmZvY3VzIHtcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1ib3JkZXItZGFuZ2VyLXN0cm9uZyk7XG59XG4uc2Vjb25kYXJ5LmRhbmdlci5kaXNhYmxlZCBidXR0b24ge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1kaXNhYmxlZC1zdHJvbmcpO1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG5cbi5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5kZWZhdWx0IC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tb25icmFuZCk7XG59XG4uZGVmYXVsdC5kaXNhYmxlZCAubG9hZGluZ0luZGljYXRvciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uLW9uZGlzYWJsZWQpO1xufVxuXG4uZGVmYXVsdC5kYW5nZXIgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1vbmRhbmdlcik7XG59XG4uZGVmYXVsdC5kYW5nZXIuZGlzYWJsZWQgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItaWNvbi1vbmRpc2FibGVkKTtcbn1cblxuLnNlY29uZGFyeSAubG9hZGluZ0luZGljYXRvciB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbn1cbi5zZWNvbmRhcnkuZGlzYWJsZWQgLmxvYWRpbmdJbmRpY2F0b3Ige1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dC1kaXNhYmxlZCk7XG59XG5cbi5zZWNvbmRhcnkuZGFuZ2VyIC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGFuZ2VyKTtcbn1cbi5zZWNvbmRhcnkuZGFuZ2VyLmRpc2FibGVkIC5sb2FkaW5nSW5kaWNhdG9yIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLXRleHQtZGlzYWJsZWQpO1xufVxuXG4uY2hpbGRyZW4ge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG4ubG9hZGluZyAuY2hpbGRyZW4ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4iXX0= */`;
        document.head.append(element);
      }
      button_module_default = { "button": "_button_a84h4_1", "fullWidth": "_fullWidth_a84h4_7", "disabled": "_disabled_a84h4_21", "default": "_default_a84h4_33", "danger": "_danger_a84h4_62", "secondary": "_secondary_a84h4_74", "loadingIndicator": "_loadingIndicator_a84h4_99", "children": "_children_a84h4_135", "loading": "_loading_a84h4_99" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/button/button.js
  var Button;
  var init_button = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/button/button.js"() {
      init_preact_module();
      init_hooks_module();
      init_create_class_name();
      init_create_component();
      init_no_op();
      init_loading_indicator();
      init_button_module();
      Button = createComponent(function(_a, ref) {
        var _b = _a, { children, danger = false, disabled = false, fullWidth = false, loading = false, onClick = noop, onKeyDown = noop, propagateEscapeKeyDown = true, secondary = false } = _b, rest = __objRest(_b, ["children", "danger", "disabled", "fullWidth", "loading", "onClick", "onKeyDown", "propagateEscapeKeyDown", "secondary"]);
        const handleKeyDown = q2(function(event) {
          onKeyDown(event);
          if (event.key === "Escape") {
            if (propagateEscapeKeyDown === false) {
              event.stopPropagation();
            }
            event.currentTarget.blur();
          }
        }, [onKeyDown, propagateEscapeKeyDown]);
        return _(
          "div",
          { class: createClassName([
            button_module_default.button,
            secondary === true ? button_module_default.secondary : button_module_default.default,
            danger === true ? button_module_default.danger : null,
            fullWidth === true ? button_module_default.fullWidth : null,
            disabled === true ? button_module_default.disabled : null,
            loading === true ? button_module_default.loading : null
          ]) },
          _(
            "button",
            __spreadProps(__spreadValues({}, rest), { ref, disabled: disabled === true, onClick: loading === true ? void 0 : onClick, onKeyDown: handleKeyDown, tabIndex: 0 }),
            _("div", { class: button_module_default.children }, children)
          ),
          loading === true ? _(
            "div",
            { class: button_module_default.loadingIndicator },
            _(LoadingIndicator, null)
          ) : null
        );
      });
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/29a92d50-7bec-4b03-ac0b-15c106a944ef/icon.module.js
  var icon_module_default;
  var init_icon_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/29a92d50-7bec-4b03-ac0b-15c106a944ef/icon.module.js"() {
      if (document.getElementById("1443618a06") === null) {
        const element = document.createElement("style");
        element.id = "1443618a06";
        element.textContent = `._icon_13804_1 {
  fill: currentColor;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvaWNvbnMvaWNvbi5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvaWNvbnMvaWNvbi5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb24ge1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      icon_module_default = { "icon": "_icon_13804_1" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/create-icon.js
  function createIcon(path, options) {
    const { width, height } = options;
    return createComponent(function(_a) {
      var _b = _a, { color } = _b, rest = __objRest(_b, ["color"]);
      return _(
        "svg",
        __spreadProps(__spreadValues({}, rest), { class: icon_module_default.icon, height, style: {
          fill: typeof color === "undefined" ? "currentColor" : `var(--figma-color-icon-${color})`
        }, width, xmlns: "http://www.w3.org/2000/svg" }),
        _("path", { "clip-rule": "evenodd", d: path, "fill-rule": "evenodd" })
      );
    });
  }
  var init_create_icon = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/create-icon.js"() {
      init_preact_module();
      init_create_component();
      init_icon_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/icons/icon-12/icon-control-checkbox-checked-12.js
  var IconControlCheckboxChecked12;
  var init_icon_control_checkbox_checked_12 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/icons/icon-12/icon-control-checkbox-checked-12.js"() {
      init_create_icon();
      IconControlCheckboxChecked12 = createIcon("m3.17647 4.82377 1.88235 1.88236 3.76471-3.76472L10 4.11788l-4.94118 4.9412L2 6.00024z", { height: 12, width: 12 });
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/49825cd0-efdf-4906-b46b-df01db43091a/checkbox.module.js
  var checkbox_module_default;
  var init_checkbox_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/49825cd0-efdf-4906-b46b-df01db43091a/checkbox.module.js"() {
      if (document.getElementById("6baa65943d") === null) {
        const element = document.createElement("style");
        element.id = "6baa65943d";
        element.textContent = `._checkbox_hvyza_1 {
  position: relative;
  z-index: var(--z-index-1);
}

._input_hvyza_6 {
  position: absolute;
  z-index: var(
    --z-index-1
  ); /* stack \`.input\` over all other elements within \`.checkbox\` */
  top: -8px;
  right: -16px;
  bottom: -8px;
  left: -16px;
  display: block;
  width: calc(100% + 32px);
}
._disabled_hvyza_18 ._input_hvyza_6 {
  cursor: not-allowed;
}

._fill_hvyza_22,
._border_hvyza_23 {
  position: absolute;
  top: 0;
  left: 0;
  width: 12px;
  height: 12px;
  border-radius: var(--border-radius-2);
}

._border_hvyza_23 {
  border: 1px solid var(--figma-color-border-strong);
}
._checkbox_hvyza_1:not(._disabled_hvyza_18) ._input_hvyza_6:focus ~ ._border_hvyza_23 {
  border-color: var(--figma-color-border-brand-strong);
  box-shadow: 0 0 0 1px var(--figma-color-border-brand-strong);
}
._checkbox_hvyza_1:not(._disabled_hvyza_18) ._input_hvyza_6:checked ~ ._border_hvyza_23 {
  border: 0;
}
._checkbox_hvyza_1:not(._disabled_hvyza_18) ._input_hvyza_6:checked:focus ~ ._border_hvyza_23 {
  box-shadow:
    0 0 0 1px var(--figma-color-bg),
    0 0 0 2px var(--figma-color-border-brand-strong);
}
._disabled_hvyza_18 ._input_hvyza_6 ~ ._border_hvyza_23 {
  border-color: var(--figma-color-border-disabled-strong);
}
._disabled_hvyza_18 ._input_hvyza_6:checked ~ ._border_hvyza_23 {
  border: 0;
}

._checkbox_hvyza_1:not(._disabled_hvyza_18) ._input_hvyza_6:checked ~ ._fill_hvyza_22 {
  background-color: var(--figma-color-bg-brand);
}
._disabled_hvyza_18 ._input_hvyza_6:checked ~ ._fill_hvyza_22 {
  background-color: var(--figma-color-bg-disabled);
}

._checkIcon_hvyza_61 {
  color: var(--figma-color-icon-onbrand);
}
._disabled_hvyza_18 ._checkIcon_hvyza_61 {
  color: var(--figma-color-icon-ondisabled);
}

._children_hvyza_68 {
  min-height: 12px;
  padding: 2px 0 0 20px;
  color: var(--figma-color-text);
}
._disabled_hvyza_18 ._children_hvyza_68 {
  opacity: var(--opacity-30);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy9jaGVja2JveC9jaGVja2JveC5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQjs7R0FFQyxFQUFFLDhEQUE4RDtFQUNqRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsY0FBYztFQUNkLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0Usa0RBQWtEO0FBQ3BEO0FBQ0E7RUFDRSxvREFBb0Q7RUFDcEQsNERBQTREO0FBQzlEO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTtFQUNFOztvREFFa0Q7QUFDcEQ7QUFDQTtFQUNFLHVEQUF1RDtBQUN6RDtBQUNBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsNkNBQTZDO0FBQy9DO0FBQ0E7RUFDRSxnREFBZ0Q7QUFDbEQ7O0FBRUE7RUFDRSxzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94Lm1vZHVsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IHZhcigtLXotaW5kZXgtMSk7XG59XG5cbi5pbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgei1pbmRleDogdmFyKFxuICAgIC0tei1pbmRleC0xXG4gICk7IC8qIHN0YWNrIGAuaW5wdXRgIG92ZXIgYWxsIG90aGVyIGVsZW1lbnRzIHdpdGhpbiBgLmNoZWNrYm94YCAqL1xuICB0b3A6IC04cHg7XG4gIHJpZ2h0OiAtMTZweDtcbiAgYm90dG9tOiAtOHB4O1xuICBsZWZ0OiAtMTZweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbn1cbi5kaXNhYmxlZCAuaW5wdXQge1xuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xufVxuXG4uZmlsbCxcbi5ib3JkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEycHg7XG4gIGhlaWdodDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cy0yKTtcbn1cblxuLmJvcmRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1zdHJvbmcpO1xufVxuLmNoZWNrYm94Om5vdCguZGlzYWJsZWQpIC5pbnB1dDpmb2N1cyB+IC5ib3JkZXIge1xuICBib3JkZXItY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJvcmRlci1icmFuZC1zdHJvbmcpO1xuICBib3gtc2hhZG93OiAwIDAgMCAxcHggdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG59XG4uY2hlY2tib3g6bm90KC5kaXNhYmxlZCkgLmlucHV0OmNoZWNrZWQgfiAuYm9yZGVyIHtcbiAgYm9yZGVyOiAwO1xufVxuLmNoZWNrYm94Om5vdCguZGlzYWJsZWQpIC5pbnB1dDpjaGVja2VkOmZvY3VzIH4gLmJvcmRlciB7XG4gIGJveC1zaGFkb3c6XG4gICAgMCAwIDAgMXB4IHZhcigtLWZpZ21hLWNvbG9yLWJnKSxcbiAgICAwIDAgMCAycHggdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWJyYW5kLXN0cm9uZyk7XG59XG4uZGlzYWJsZWQgLmlucHV0IH4gLmJvcmRlciB7XG4gIGJvcmRlci1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYm9yZGVyLWRpc2FibGVkLXN0cm9uZyk7XG59XG4uZGlzYWJsZWQgLmlucHV0OmNoZWNrZWQgfiAuYm9yZGVyIHtcbiAgYm9yZGVyOiAwO1xufVxuXG4uY2hlY2tib3g6bm90KC5kaXNhYmxlZCkgLmlucHV0OmNoZWNrZWQgfiAuZmlsbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWJnLWJyYW5kKTtcbn1cbi5kaXNhYmxlZCAuaW5wdXQ6Y2hlY2tlZCB+IC5maWxsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItYmctZGlzYWJsZWQpO1xufVxuXG4uY2hlY2tJY29uIHtcbiAgY29sb3I6IHZhcigtLWZpZ21hLWNvbG9yLWljb24tb25icmFuZCk7XG59XG4uZGlzYWJsZWQgLmNoZWNrSWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci1pY29uLW9uZGlzYWJsZWQpO1xufVxuXG4uY2hpbGRyZW4ge1xuICBtaW4taGVpZ2h0OiAxMnB4O1xuICBwYWRkaW5nOiAycHggMCAwIDIwcHg7XG4gIGNvbG9yOiB2YXIoLS1maWdtYS1jb2xvci10ZXh0KTtcbn1cbi5kaXNhYmxlZCAuY2hpbGRyZW4ge1xuICBvcGFjaXR5OiB2YXIoLS1vcGFjaXR5LTMwKTtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      checkbox_module_default = { "checkbox": "_checkbox_hvyza_1", "input": "_input_hvyza_6", "disabled": "_disabled_hvyza_18", "fill": "_fill_hvyza_22", "border": "_border_hvyza_23", "checkIcon": "_checkIcon_hvyza_61", "children": "_children_hvyza_68" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/checkbox/checkbox.js
  var Checkbox;
  var init_checkbox = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/checkbox/checkbox.js"() {
      init_preact_module();
      init_hooks_module();
      init_icon_control_checkbox_checked_12();
      init_create_class_name();
      init_create_component();
      init_no_op();
      init_checkbox_module();
      Checkbox = createComponent(function(_a, ref) {
        var _b = _a, { children, disabled = false, onChange = noop, onKeyDown = noop, onValueChange = noop, propagateEscapeKeyDown = true, value } = _b, rest = __objRest(_b, ["children", "disabled", "onChange", "onKeyDown", "onValueChange", "propagateEscapeKeyDown", "value"]);
        const handleChange = q2(function(event) {
          onChange(event);
          const newValue = event.currentTarget.checked === true;
          onValueChange(newValue);
        }, [onChange, onValueChange]);
        const handleKeyDown = q2(function(event) {
          onKeyDown(event);
          if (event.key === "Escape") {
            if (propagateEscapeKeyDown === false) {
              event.stopPropagation();
            }
            event.currentTarget.blur();
          }
        }, [onKeyDown, propagateEscapeKeyDown]);
        return _(
          "label",
          { class: createClassName([
            checkbox_module_default.checkbox,
            disabled === true ? checkbox_module_default.disabled : null
          ]) },
          _("input", __spreadProps(__spreadValues({}, rest), { ref, checked: value === true, class: checkbox_module_default.input, disabled: disabled === true, onChange: handleChange, onKeyDown: handleKeyDown, tabIndex: 0, type: "checkbox" })),
          _("div", { class: checkbox_module_default.fill }, value === true ? _(
            "div",
            { class: checkbox_module_default.checkIcon },
            _(IconControlCheckboxChecked12, null)
          ) : null),
          _("div", { class: checkbox_module_default.border }),
          _("div", { class: checkbox_module_default.children }, children)
        );
      });
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/5cd968b4-f26d-4cf3-9116-e4bf35464632/text.module.js
  var text_module_default;
  var init_text_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/5cd968b4-f26d-4cf3-9116-e4bf35464632/text.module.js"() {
      if (document.getElementById("23533d276c") === null) {
        const element = document.createElement("style");
        element.id = "23533d276c";
        element.textContent = `._text_mh6mm_1 {
  padding-top: 1px;
  color: var(--figma-color-text);
  pointer-events: none;
  transform: translateY(4px);
}
._text_mh6mm_1:before {
  display: block;
  height: 0;
  margin-top: -9px;
  content: '';
  pointer-events: none;
}

._numeric_mh6mm_15 {
  font-variant-numeric: tabular-nums;
}

._left_mh6mm_19 {
  text-align: left;
}
._center_mh6mm_22 {
  text-align: center;
}
._right_mh6mm_25 {
  text-align: right;
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvY29tcG9uZW50cy90ZXh0L3RleHQubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsY0FBYztFQUNkLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9jb21wb25lbnRzL3RleHQvdGV4dC5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQge1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBjb2xvcjogdmFyKC0tZmlnbWEtY29sb3ItdGV4dCk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcbn1cbi50ZXh0OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBoZWlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IC05cHg7XG4gIGNvbnRlbnQ6ICcnO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLm51bWVyaWMge1xuICBmb250LXZhcmlhbnQtbnVtZXJpYzogdGFidWxhci1udW1zO1xufVxuXG4ubGVmdCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      text_module_default = { "text": "_text_mh6mm_1", "numeric": "_numeric_mh6mm_15", "left": "_left_mh6mm_19", "center": "_center_mh6mm_22", "right": "_right_mh6mm_25" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/components/text/text.js
  var Text;
  var init_text = __esm({
    "node_modules/@create-figma-plugin/ui/lib/components/text/text.js"() {
      init_preact_module();
      init_create_class_name();
      init_create_component();
      init_text_module();
      Text = createComponent(function(_a) {
        var _b = _a, { align = "left", children, numeric = false } = _b, rest = __objRest(_b, ["align", "children", "numeric"]);
        return _("div", __spreadProps(__spreadValues({}, rest), { class: createClassName([
          text_module_default.text,
          text_module_default[align],
          numeric === true ? text_module_default.numeric : null
        ]) }), children);
      });
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/events.js
  function invokeEventHandler(name, args) {
    let invoked = false;
    for (const id in eventHandlers) {
      if (eventHandlers[id].name === name) {
        eventHandlers[id].handler.apply(null, args);
        invoked = true;
      }
    }
    if (invoked === false) {
      throw new Error(`No event handler with name \`${name}\``);
    }
  }
  var eventHandlers, emit;
  var init_events = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/events.js"() {
      eventHandlers = {};
      emit = typeof window === "undefined" ? function(name, ...args) {
        figma.ui.postMessage([name, ...args]);
      } : function(name, ...args) {
        window.parent.postMessage({
          pluginMessage: [name, ...args]
        }, "*");
      };
      if (typeof window === "undefined") {
        figma.ui.onmessage = function(args) {
          if (!Array.isArray(args)) {
            return;
          }
          const [name, ...rest] = args;
          if (typeof name !== "string") {
            return;
          }
          invokeEventHandler(name, rest);
        };
      } else {
        window.onmessage = function(event) {
          if (typeof event.data.pluginMessage === "undefined") {
            return;
          }
          const args = event.data.pluginMessage;
          if (!Array.isArray(args)) {
            return;
          }
          const [name, ...rest] = event.data.pluginMessage;
          if (typeof name !== "string") {
            return;
          }
          invokeEventHandler(name, rest);
        };
      }
    }
  });

  // node_modules/@create-figma-plugin/utilities/lib/index.js
  var init_lib = __esm({
    "node_modules/@create-figma-plugin/utilities/lib/index.js"() {
      init_events();
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/686a7e81-667e-42ab-a566-3162396572df/columns.module.js
  var columns_module_default;
  var init_columns_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/686a7e81-667e-42ab-a566-3162396572df/columns.module.js"() {
      if (document.getElementById("d50b75c081") === null) {
        const element = document.createElement("style");
        element.id = "d50b75c081";
        element.textContent = `._columns_ybv3x_1 {
  display: flex;
}
._extraSmall_ybv3x_4 {
  margin-left: calc(-1 * var(--space-extra-small));
}
._small_ybv3x_7 {
  margin-left: calc(-1 * var(--space-small));
}
._medium_ybv3x_10 {
  margin-left: calc(-1 * var(--space-medium));
}
._large_ybv3x_13 {
  margin-left: calc(-1 * var(--space-large));
}
._extraLarge_ybv3x_16 {
  margin-left: calc(-1 * var(--space-extra-large));
}

._child_ybv3x_20 {
  flex-grow: 1;
}
._extraSmall_ybv3x_4 > ._child_ybv3x_20 {
  padding-left: var(--space-extra-small);
}
._small_ybv3x_7 > ._child_ybv3x_20 {
  padding-left: var(--space-small);
}
._medium_ybv3x_10 > ._child_ybv3x_20 {
  padding-left: var(--space-medium);
}
._large_ybv3x_13 > ._child_ybv3x_20 {
  padding-left: var(--space-large);
}
._extraLarge_ybv3x_16 > ._child_ybv3x_20 {
  padding-left: var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L2NvbHVtbnMvY29sdW1ucy5tb2R1bGUuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxnREFBZ0Q7QUFDbEQ7QUFDQTtFQUNFLDBDQUEwQztBQUM1QztBQUNBO0VBQ0UsMkNBQTJDO0FBQzdDO0FBQ0E7RUFDRSwwQ0FBMEM7QUFDNUM7QUFDQTtFQUNFLGdEQUFnRDtBQUNsRDs7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usc0NBQXNDO0FBQ3hDO0FBQ0E7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGlDQUFpQztBQUNuQztBQUNBO0VBQ0UsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxzQ0FBc0M7QUFDeEMiLCJmaWxlIjoibm9kZV9tb2R1bGVzL0BjcmVhdGUtZmlnbWEtcGx1Z2luL3VpL2xpYi9sYXlvdXQvY29sdW1ucy9jb2x1bW5zLm1vZHVsZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29sdW1ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZXh0cmFTbWFsbCB7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC0xICogdmFyKC0tc3BhY2UtZXh0cmEtc21hbGwpKTtcbn1cbi5zbWFsbCB7XG4gIG1hcmdpbi1sZWZ0OiBjYWxjKC0xICogdmFyKC0tc3BhY2Utc21hbGwpKTtcbn1cbi5tZWRpdW0ge1xuICBtYXJnaW4tbGVmdDogY2FsYygtMSAqIHZhcigtLXNwYWNlLW1lZGl1bSkpO1xufVxuLmxhcmdlIHtcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoLTEgKiB2YXIoLS1zcGFjZS1sYXJnZSkpO1xufVxuLmV4dHJhTGFyZ2Uge1xuICBtYXJnaW4tbGVmdDogY2FsYygtMSAqIHZhcigtLXNwYWNlLWV4dHJhLWxhcmdlKSk7XG59XG5cbi5jaGlsZCB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cbi5leHRyYVNtYWxsID4gLmNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG59XG4uc21hbGwgPiAuY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlLXNtYWxsKTtcbn1cbi5tZWRpdW0gPiAuY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlLW1lZGl1bSk7XG59XG4ubGFyZ2UgPiAuY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNwYWNlLWxhcmdlKTtcbn1cbi5leHRyYUxhcmdlID4gLmNoaWxkIHtcbiAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zcGFjZS1leHRyYS1sYXJnZSk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      columns_module_default = { "columns": "_columns_ybv3x_1", "extraSmall": "_extraSmall_ybv3x_4", "small": "_small_ybv3x_7", "medium": "_medium_ybv3x_10", "large": "_large_ybv3x_13", "extraLarge": "_extraLarge_ybv3x_16", "child": "_child_ybv3x_20" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/columns/columns.js
  var Columns;
  var init_columns = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/columns/columns.js"() {
      init_preact_module();
      init_create_class_name();
      init_create_component();
      init_columns_module();
      Columns = createComponent(function(_a, ref) {
        var _b = _a, { children, space } = _b, rest = __objRest(_b, ["children", "space"]);
        return _("div", __spreadProps(__spreadValues({}, rest), { ref, class: createClassName([
          columns_module_default.columns,
          typeof space === "undefined" ? null : columns_module_default[space]
        ]) }), H(children).map(function(element, index) {
          return _("div", { key: index, class: columns_module_default.child }, element);
        }));
      });
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/b211f601-9dff-4298-9b99-eabbb56d1731/container.module.js
  var container_module_default;
  var init_container_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/b211f601-9dff-4298-9b99-eabbb56d1731/container.module.js"() {
      if (document.getElementById("1b76e0150f") === null) {
        const element = document.createElement("style");
        element.id = "1b76e0150f";
        element.textContent = `._extraSmall_1oe77_1 {
  padding: 0 var(--space-extra-small);
}
._small_1oe77_4 {
  padding: 0 var(--space-small);
}
._medium_1oe77_7 {
  padding: 0 var(--space-medium);
}
._large_1oe77_10 {
  padding: 0 var(--space-large);
}
._extraLarge_1oe77_13 {
  padding: 0 var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L2NvbnRhaW5lci9jb250YWluZXIubW9kdWxlLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSw4QkFBOEI7QUFDaEM7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDIiwiZmlsZSI6Im5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L2NvbnRhaW5lci9jb250YWluZXIubW9kdWxlLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHRyYVNtYWxsIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1leHRyYS1zbWFsbCk7XG59XG4uc21hbGwge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLXNtYWxsKTtcbn1cbi5tZWRpdW0ge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLW1lZGl1bSk7XG59XG4ubGFyZ2Uge1xuICBwYWRkaW5nOiAwIHZhcigtLXNwYWNlLWxhcmdlKTtcbn1cbi5leHRyYUxhcmdlIHtcbiAgcGFkZGluZzogMCB2YXIoLS1zcGFjZS1leHRyYS1sYXJnZSk7XG59XG4iXX0= */`;
        document.head.append(element);
      }
      container_module_default = { "extraSmall": "_extraSmall_1oe77_1", "small": "_small_1oe77_4", "medium": "_medium_1oe77_7", "large": "_large_1oe77_10", "extraLarge": "_extraLarge_1oe77_13" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/container/container.js
  var Container;
  var init_container = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/container/container.js"() {
      init_preact_module();
      init_create_component();
      init_container_module();
      Container = createComponent(function(_a, ref) {
        var _b = _a, { space } = _b, rest = __objRest(_b, ["space"]);
        return _("div", __spreadProps(__spreadValues({}, rest), { ref, class: container_module_default[space] }));
      });
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/828a840e-f147-4edc-8718-1518891742e2/vertical-space.module.js
  var vertical_space_module_default;
  var init_vertical_space_module = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/828a840e-f147-4edc-8718-1518891742e2/vertical-space.module.js"() {
      if (document.getElementById("97faac180b") === null) {
        const element = document.createElement("style");
        element.id = "97faac180b";
        element.textContent = `._extraSmall_zc4n0_1 {
  height: var(--space-extra-small);
}
._small_zc4n0_4 {
  height: var(--space-small);
}
._medium_zc4n0_7 {
  height: var(--space-medium);
}
._large_zc4n0_10 {
  height: var(--space-large);
}
._extraLarge_zc4n0_13 {
  height: var(--space-extra-large);
}

/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9AY3JlYXRlLWZpZ21hLXBsdWdpbi91aS9saWIvbGF5b3V0L3ZlcnRpY2FsLXNwYWNlL3ZlcnRpY2FsLXNwYWNlLm1vZHVsZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLDBCQUEwQjtBQUM1QjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSwwQkFBMEI7QUFDNUI7QUFDQTtFQUNFLGdDQUFnQztBQUNsQyIsImZpbGUiOiJub2RlX21vZHVsZXMvQGNyZWF0ZS1maWdtYS1wbHVnaW4vdWkvbGliL2xheW91dC92ZXJ0aWNhbC1zcGFjZS92ZXJ0aWNhbC1zcGFjZS5tb2R1bGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4dHJhU21hbGwge1xuICBoZWlnaHQ6IHZhcigtLXNwYWNlLWV4dHJhLXNtYWxsKTtcbn1cbi5zbWFsbCB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2Utc21hbGwpO1xufVxuLm1lZGl1bSB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2UtbWVkaXVtKTtcbn1cbi5sYXJnZSB7XG4gIGhlaWdodDogdmFyKC0tc3BhY2UtbGFyZ2UpO1xufVxuLmV4dHJhTGFyZ2Uge1xuICBoZWlnaHQ6IHZhcigtLXNwYWNlLWV4dHJhLWxhcmdlKTtcbn1cbiJdfQ== */`;
        document.head.append(element);
      }
      vertical_space_module_default = { "extraSmall": "_extraSmall_zc4n0_1", "small": "_small_zc4n0_4", "medium": "_medium_zc4n0_7", "large": "_large_zc4n0_10", "extraLarge": "_extraLarge_zc4n0_13" };
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/layout/vertical-space/vertical-space.js
  var VerticalSpace;
  var init_vertical_space = __esm({
    "node_modules/@create-figma-plugin/ui/lib/layout/vertical-space/vertical-space.js"() {
      init_preact_module();
      init_create_component();
      init_vertical_space_module();
      VerticalSpace = createComponent(function(_a, ref) {
        var _b = _a, { space } = _b, rest = __objRest(_b, ["space"]);
        return _("div", __spreadProps(__spreadValues({}, rest), { ref, class: vertical_space_module_default[space] }));
      });
    }
  });

  // ../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/d3a76eea-0310-435c-8e12-b35b2671fb54/base.js
  var init_base = __esm({
    "../../../../../private/var/folders/kw/tj4hxwcs2ln359nlmrjrq68r0000gn/T/d3a76eea-0310-435c-8e12-b35b2671fb54/base.js"() {
      if (document.getElementById("734fb5ecd3") === null) {
        const element = document.createElement("style");
        element.id = "734fb5ecd3";
        element.textContent = `:root {
  --border-1: 1px;
  --border-radius-2: 2px;
  --border-radius-6: 6px;
  --box-shadow: var(--box-shadow-menu);
  --box-shadow-menu: 0 5px 17px rgba(0, 0, 0, 0.2),
    0 2px 7px rgba(0, 0, 0, 0.15), inset 0 0 0 0.5px #000000,
    0 0 0 0.5px rgba(0, 0, 0, 0.1);
  --box-shadow-modal: 0 2px 14px rgba(0, 0, 0, 0.15),
    0 0 0 0.5px rgba(0, 0, 0, 0.2);
  --font-family: 'Inter', 'Helvetica', sans-serif;
  --font-family-code: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
    'Courier New', monospace;
  --font-size-11: 11px;
  --font-size-12: 12px;
  --font-weight-regular: 400;
  --font-weight-bold: 600;
  --line-height-16: 16px;
  --opacity-30: 0.3;
  --space-extra-small: 8px;
  --space-small: 12px;
  --space-medium: 16px;
  --space-large: 20px;
  --space-extra-large: 24px;
  --space-8: 8px;
  --space-12: 12px;
  --space-16: 16px;
  --space-20: 20px;
  --space-24: 24px;
  --z-index-1: 1;
  --z-index-2: 2;
}

.figma-dark {
  color-scheme: dark;
}

* {
  box-sizing: border-box;
  border-width: 0;
  border-style: solid;
  border-color: currentColor;
}

body {
  margin: 0;
  background-color: var(--figma-color-bg);
  color: var(--figma-color-text);
  font-family: var(--font-family);
  font-size: var(--font-size-11);
  font-weight: var(--font-weight-regular);
  line-height: var(--line-height-16);
}

div,
span {
  cursor: default;
  user-select: none;
}

h1,
h2,
h3 {
  margin: 0;
  font-weight: inherit;
}

button {
  padding: 0;
  border: 0;
  -webkit-appearance: none;
  background-color: transparent;
  font: inherit;
  outline: 0;
}

hr {
  border: 0;
  margin: 0;
}

label {
  display: block;
}

input,
textarea {
  padding: 0;
  border: 0;
  margin: 0;
  -webkit-appearance: none;
  cursor: default;
  font: inherit;
  outline: 0;
}

svg {
  display: block;
}

::selection {
  background-color: var(--figma-color-bg-onselected);
}
`;
        document.head.prepend(element);
      }
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/utilities/render.js
  function render(Plugin2) {
    return function(rootNode2, props) {
      E(_(Plugin2, __spreadValues({}, props)), rootNode2);
    };
  }
  var init_render = __esm({
    "node_modules/@create-figma-plugin/ui/lib/utilities/render.js"() {
      init_base();
      init_preact_module();
    }
  });

  // node_modules/@create-figma-plugin/ui/lib/index.js
  var init_lib2 = __esm({
    "node_modules/@create-figma-plugin/ui/lib/index.js"() {
      init_button();
      init_checkbox();
      init_text();
      init_columns();
      init_container();
      init_vertical_space();
      init_render();
    }
  });

  // src/ui.tsx
  var ui_exports = {};
  __export(ui_exports, {
    default: () => ui_default
  });
  function Plugin() {
    const [isTranslate, setIsTranslate] = d2(false);
    function handleCreateRectanglesButtonClick() {
      emit("MIRROR");
    }
    function handleCloseButtonClick() {
      emit("TRANSLATE");
    }
    function CheckboxElement({
      value,
      setValue,
      label
    }) {
      function handleChange(event) {
        const newValue = event.currentTarget.checked;
        console.log(newValue);
        setValue(newValue);
      }
      return /* @__PURE__ */ _(Checkbox, { onChange: handleChange, value }, /* @__PURE__ */ _(Text, null, label));
    }
    return /* @__PURE__ */ _(Container, { space: "medium" }, /* @__PURE__ */ _(VerticalSpace, { space: "large" }), /* @__PURE__ */ _(
      CheckboxElement,
      {
        value: isTranslate,
        setValue: setIsTranslate,
        label: "translate"
      }
    ), /* @__PURE__ */ _(VerticalSpace, { space: "extraLarge" }), /* @__PURE__ */ _(Columns, { space: "extraSmall" }, /* @__PURE__ */ _(Button, { fullWidth: true, onClick: handleCreateRectanglesButtonClick }, "Mirror"), /* @__PURE__ */ _(Button, { fullWidth: true, onClick: handleCloseButtonClick, secondary: true }, "Translate")), /* @__PURE__ */ _(VerticalSpace, { space: "small" }));
  }
  var ui_default;
  var init_ui = __esm({
    "src/ui.tsx"() {
      "use strict";
      init_lib2();
      init_lib();
      init_preact_module();
      init_hooks_module();
      ui_default = render(Plugin);
    }
  });

  // <stdin>
  var rootNode = document.getElementById("create-figma-plugin");
  var modules = { "src/main.ts--default": (init_ui(), __toCommonJS(ui_exports))["default"] };
  var commandId = __FIGMA_COMMAND__ === "" ? "src/main.ts--default" : __FIGMA_COMMAND__;
  if (typeof modules[commandId] === "undefined") {
    throw new Error(
      "No UI defined for command `" + commandId + "`"
    );
  }
  modules[commandId](rootNode, __SHOW_UI_DATA__);
})();
