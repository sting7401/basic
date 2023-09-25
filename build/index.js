var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toCommonJS = (from) => {
  const moduleCache = __toCommonJS.moduleCache ??= new WeakMap;
  var cached = moduleCache.get(from);
  if (cached)
    return cached;
  var to = __defProp({}, "__esModule", { value: true });
  var desc = { enumerable: false };
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key))
        __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
  }
  moduleCache.set(from, to);
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: (newValue) => all[name] = () => newValue
    });
};
var __esm = (fn, res) => () => (fn && (res = fn(fn = 0)), res);

// node:util
var exports_util = {};
__export(exports_util, {
  default: () => {
    {
      return io;
    }
  },
  TextEncoder: () => {
    {
      return st;
    }
  },
  TextDecoder: () => {
    {
      return ct;
    }
  }
});
var yt, br, pt, lt, gt, dt, p, bt, dr, I, At, Ar, z, Zr, Qr, re, V, ne, H, Or, jr, he, Oe, Ee, Be, Ue, Re, Mr, $e, Xe, et, tt, ut, E, st, ct, io;
var init_util = __esm(() => {
  yt = Object.create;
  br = Object.defineProperty;
  pt = Object.getOwnPropertyDescriptor;
  lt = Object.getOwnPropertyNames;
  gt = Object.getPrototypeOf;
  dt = Object.prototype.hasOwnProperty;
  p = (r, e) => () => (e || r((e = { exports: {} }).exports, e), e.exports);
  bt = (r, e) => {
    for (var t in e)
      br(r, t, { get: e[t], enumerable: true });
  };
  dr = (r, e, t, n) => {
    if (e && typeof e == "object" || typeof e == "function")
      for (let o of lt(e))
        !dt.call(r, o) && o !== t && br(r, o, { get: () => e[o], enumerable: !(n = pt(e, o)) || n.enumerable });
    return r;
  };
  I = (r, e, t) => (dr(r, e, "default"), t && dr(t, e, "default"));
  At = (r, e, t) => (t = r != null ? yt(gt(r)) : {}, dr(e || !r || !r.__esModule ? br(t, "default", { value: r, enumerable: true }) : t, r));
  Ar = p((fo, Vr) => {
    Vr.exports = function() {
      if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
        return false;
      if (typeof Symbol.iterator == "symbol")
        return true;
      var e = {}, t = Symbol("test"), n = Object(t);
      if (typeof t == "string" || Object.prototype.toString.call(t) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
        return false;
      var o = 42;
      e[t] = o;
      for (t in e)
        return false;
      if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
        return false;
      var f = Object.getOwnPropertySymbols(e);
      if (f.length !== 1 || f[0] !== t || !Object.prototype.propertyIsEnumerable.call(e, t))
        return false;
      if (typeof Object.getOwnPropertyDescriptor == "function") {
        var i = Object.getOwnPropertyDescriptor(e, t);
        if (i.value !== o || i.enumerable !== true)
          return false;
      }
      return true;
    };
  });
  z = p((uo, Jr) => {
    var mt = Ar();
    Jr.exports = function() {
      return mt() && !!Symbol.toStringTag;
    };
  });
  Zr = p((so, Hr) => {
    var Lr = typeof Symbol < "u" && Symbol, ht = Ar();
    Hr.exports = function() {
      return typeof Lr != "function" || typeof Symbol != "function" || typeof Lr("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? false : ht();
    };
  });
  Qr = p((co, Kr) => {
    var Yr = { foo: {} }, St = Object;
    Kr.exports = function() {
      return { __proto__: Yr }.foo === Yr.foo && !({ __proto__: null } instanceof St);
    };
  });
  re = p((yo, Xr) => {
    var vt = "Function.prototype.bind called on incompatible ", mr = Array.prototype.slice, Ot = Object.prototype.toString, jt = "[object Function]";
    Xr.exports = function(e) {
      var t = this;
      if (typeof t != "function" || Ot.call(t) !== jt)
        throw new TypeError(vt + t);
      for (var n = mr.call(arguments, 1), o, f = function() {
        if (this instanceof o) {
          var d = t.apply(this, n.concat(mr.call(arguments)));
          return Object(d) === d ? d : this;
        } else
          return t.apply(e, n.concat(mr.call(arguments)));
      }, i = Math.max(0, t.length - n.length), a = [], y = 0;y < i; y++)
        a.push("$" + y);
      if (o = Function("binder", "return function (" + a.join(",") + "){ return binder.apply(this,arguments); }")(f), t.prototype) {
        var l = function() {
        };
        l.prototype = t.prototype, o.prototype = new l, l.prototype = null;
      }
      return o;
    };
  });
  V = p((po, ee) => {
    var Pt = re();
    ee.exports = Function.prototype.bind || Pt;
  });
  ne = p((lo, te) => {
    var wt = V();
    te.exports = wt.call(Function.call, Object.prototype.hasOwnProperty);
  });
  H = p((go, ue) => {
    var c, x = SyntaxError, fe = Function, U = TypeError, hr = function(r) {
      try {
        return fe('"use strict"; return (' + r + ").constructor;")();
      } catch {
      }
    }, v = Object.getOwnPropertyDescriptor;
    if (v)
      try {
        v({}, "");
      } catch {
        v = null;
      }
    var Sr = function() {
      throw new U;
    }, Et = v ? function() {
      try {
        return arguments.callee, Sr;
      } catch {
        try {
          return v(arguments, "callee").get;
        } catch {
          return Sr;
        }
      }
    }() : Sr, B = Zr()(), Ft = Qr()(), g = Object.getPrototypeOf || (Ft ? function(r) {
      return r.__proto__;
    } : null), T = {}, It = typeof Uint8Array > "u" || !g ? c : g(Uint8Array), O = { "%AggregateError%": typeof AggregateError > "u" ? c : AggregateError, "%Array%": Array, "%ArrayBuffer%": typeof ArrayBuffer > "u" ? c : ArrayBuffer, "%ArrayIteratorPrototype%": B && g ? g([][Symbol.iterator]()) : c, "%AsyncFromSyncIteratorPrototype%": c, "%AsyncFunction%": T, "%AsyncGenerator%": T, "%AsyncGeneratorFunction%": T, "%AsyncIteratorPrototype%": T, "%Atomics%": typeof Atomics > "u" ? c : Atomics, "%BigInt%": typeof BigInt > "u" ? c : BigInt, "%BigInt64Array%": typeof BigInt64Array > "u" ? c : BigInt64Array, "%BigUint64Array%": typeof BigUint64Array > "u" ? c : BigUint64Array, "%Boolean%": Boolean, "%DataView%": typeof DataView > "u" ? c : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": Error, "%eval%": eval, "%EvalError%": EvalError, "%Float32Array%": typeof Float32Array > "u" ? c : Float32Array, "%Float64Array%": typeof Float64Array > "u" ? c : Float64Array, "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? c : FinalizationRegistry, "%Function%": fe, "%GeneratorFunction%": T, "%Int8Array%": typeof Int8Array > "u" ? c : Int8Array, "%Int16Array%": typeof Int16Array > "u" ? c : Int16Array, "%Int32Array%": typeof Int32Array > "u" ? c : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": B && g ? g(g([][Symbol.iterator]())) : c, "%JSON%": typeof JSON == "object" ? JSON : c, "%Map%": typeof Map > "u" ? c : Map, "%MapIteratorPrototype%": typeof Map > "u" || !B || !g ? c : g(new Map()[Symbol.iterator]()), "%Math%": Math, "%Number%": Number, "%Object%": Object, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": typeof Promise > "u" ? c : Promise, "%Proxy%": typeof Proxy > "u" ? c : Proxy, "%RangeError%": RangeError, "%ReferenceError%": ReferenceError, "%Reflect%": typeof Reflect > "u" ? c : Reflect, "%RegExp%": RegExp, "%Set%": typeof Set > "u" ? c : Set, "%SetIteratorPrototype%": typeof Set > "u" || !B || !g ? c : g(new Set()[Symbol.iterator]()), "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? c : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": B && g ? g(""[Symbol.iterator]()) : c, "%Symbol%": B ? Symbol : c, "%SyntaxError%": x, "%ThrowTypeError%": Et, "%TypedArray%": It, "%TypeError%": U, "%Uint8Array%": typeof Uint8Array > "u" ? c : Uint8Array, "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? c : Uint8ClampedArray, "%Uint16Array%": typeof Uint16Array > "u" ? c : Uint16Array, "%Uint32Array%": typeof Uint32Array > "u" ? c : Uint32Array, "%URIError%": URIError, "%WeakMap%": typeof WeakMap > "u" ? c : WeakMap, "%WeakRef%": typeof WeakRef > "u" ? c : WeakRef, "%WeakSet%": typeof WeakSet > "u" ? c : WeakSet };
    if (g)
      try {
        null.error;
      } catch (r) {
        oe = g(g(r)), O["%Error.prototype%"] = oe;
      }
    var oe, Bt = function r(e) {
      var t;
      if (e === "%AsyncFunction%")
        t = hr("async function () {}");
      else if (e === "%GeneratorFunction%")
        t = hr("function* () {}");
      else if (e === "%AsyncGeneratorFunction%")
        t = hr("async function* () {}");
      else if (e === "%AsyncGenerator%") {
        var n = r("%AsyncGeneratorFunction%");
        n && (t = n.prototype);
      } else if (e === "%AsyncIteratorPrototype%") {
        var o = r("%AsyncGenerator%");
        o && g && (t = g(o.prototype));
      }
      return O[e] = t, t;
    }, ie = { "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] }, N = V(), J = ne(), Tt = N.call(Function.call, Array.prototype.concat), Ut = N.call(Function.apply, Array.prototype.splice), ae = N.call(Function.call, String.prototype.replace), L = N.call(Function.call, String.prototype.slice), xt = N.call(Function.call, RegExp.prototype.exec), Rt = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Dt = /\\(\\)?/g, kt = function(e) {
      var t = L(e, 0, 1), n = L(e, -1);
      if (t === "%" && n !== "%")
        throw new x("invalid intrinsic syntax, expected closing `%`");
      if (n === "%" && t !== "%")
        throw new x("invalid intrinsic syntax, expected opening `%`");
      var o = [];
      return ae(e, Rt, function(f, i, a, y) {
        o[o.length] = a ? ae(y, Dt, "$1") : i || f;
      }), o;
    }, Mt = function(e, t) {
      var n = e, o;
      if (J(ie, n) && (o = ie[n], n = "%" + o[0] + "%"), J(O, n)) {
        var f = O[n];
        if (f === T && (f = Bt(n)), typeof f > "u" && !t)
          throw new U("intrinsic " + e + " exists, but is not available. Please file an issue!");
        return { alias: o, name: n, value: f };
      }
      throw new x("intrinsic " + e + " does not exist!");
    };
    ue.exports = function(e, t) {
      if (typeof e != "string" || e.length === 0)
        throw new U("intrinsic name must be a non-empty string");
      if (arguments.length > 1 && typeof t != "boolean")
        throw new U('"allowMissing" argument must be a boolean');
      if (xt(/^%?[^%]*%?$/, e) === null)
        throw new x("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
      var n = kt(e), o = n.length > 0 ? n[0] : "", f = Mt("%" + o + "%", t), i = f.name, a = f.value, y = false, l = f.alias;
      l && (o = l[0], Ut(n, Tt([0, 1], l)));
      for (var d = 1, S = true;d < n.length; d += 1) {
        var b = n[d], F = L(b, 0, 1), q = L(b, -1);
        if ((F === '"' || F === "'" || F === "`" || q === '"' || q === "'" || q === "`") && F !== q)
          throw new x("property names with quotes must have matching quotes");
        if ((b === "constructor" || !S) && (y = true), o += "." + b, i = "%" + o + "%", J(O, i))
          a = O[i];
        else if (a != null) {
          if (!(b in a)) {
            if (!t)
              throw new U("base intrinsic for " + e + " exists, but the property is not available.");
            return;
          }
          if (v && d + 1 >= n.length) {
            var W = v(a, b);
            S = !!W, S && ("get" in W) && !("originalValue" in W.get) ? a = W.get : a = a[b];
          } else
            S = J(a, b), a = a[b];
          S && !y && (O[i] = a);
        }
      }
      return a;
    };
  });
  Or = p((bo, Z) => {
    var vr = V(), R = H(), ye = R("%Function.prototype.apply%"), pe = R("%Function.prototype.call%"), le = R("%Reflect.apply%", true) || vr.call(pe, ye), se = R("%Object.getOwnPropertyDescriptor%", true), j = R("%Object.defineProperty%", true), Nt = R("%Math.max%");
    if (j)
      try {
        j({}, "a", { value: 1 });
      } catch {
        j = null;
      }
    Z.exports = function(e) {
      var t = le(vr, pe, arguments);
      if (se && j) {
        var n = se(t, "length");
        n.configurable && j(t, "length", { value: 1 + Nt(0, e.length - (arguments.length - 1)) });
      }
      return t;
    };
    var ce = function() {
      return le(vr, ye, arguments);
    };
    j ? j(Z.exports, "apply", { value: ce }) : Z.exports.apply = ce;
  });
  jr = p((Ao, be) => {
    var ge = H(), de = Or(), Ct = de(ge("String.prototype.indexOf"));
    be.exports = function(e, t) {
      var n = ge(e, !!t);
      return typeof n == "function" && Ct(e, ".prototype.") > -1 ? de(n) : n;
    };
  });
  he = p((mo, me) => {
    var $t = z()(), _t = jr(), Pr = _t("Object.prototype.toString"), Y = function(e) {
      return $t && e && typeof e == "object" && (Symbol.toStringTag in e) ? false : Pr(e) === "[object Arguments]";
    }, Ae = function(e) {
      return Y(e) ? true : e !== null && typeof e == "object" && typeof e.length == "number" && e.length >= 0 && Pr(e) !== "[object Array]" && Pr(e.callee) === "[object Function]";
    }, Gt = function() {
      return Y(arguments);
    }();
    Y.isLegacyArguments = Ae;
    me.exports = Gt ? Y : Ae;
  });
  Oe = p((ho, ve) => {
    var qt = Object.prototype.toString, Wt = Function.prototype.toString, zt = /^\s*(?:function)?\*/, Se = z()(), wr = Object.getPrototypeOf, Vt = function() {
      if (!Se)
        return false;
      try {
        return Function("return function*() {}")();
      } catch {
      }
    }, Er;
    ve.exports = function(e) {
      if (typeof e != "function")
        return false;
      if (zt.test(Wt.call(e)))
        return true;
      if (!Se) {
        var t = qt.call(e);
        return t === "[object GeneratorFunction]";
      }
      if (!wr)
        return false;
      if (typeof Er > "u") {
        var n = Vt();
        Er = n ? wr(n) : false;
      }
      return wr(e) === Er;
    };
  });
  Ee = p((So, we) => {
    var Pe = Function.prototype.toString, D = typeof Reflect == "object" && Reflect !== null && Reflect.apply, Ir, K;
    if (typeof D == "function" && typeof Object.defineProperty == "function")
      try {
        Ir = Object.defineProperty({}, "length", { get: function() {
          throw K;
        } }), K = {}, D(function() {
          throw 42;
        }, null, Ir);
      } catch (r) {
        r !== K && (D = null);
      }
    else
      D = null;
    var Jt = /^\s*class\b/, Br = function(e) {
      try {
        var t = Pe.call(e);
        return Jt.test(t);
      } catch {
        return false;
      }
    }, Fr = function(e) {
      try {
        return Br(e) ? false : (Pe.call(e), true);
      } catch {
        return false;
      }
    }, Q = Object.prototype.toString, Lt = "[object Object]", Ht = "[object Function]", Zt = "[object GeneratorFunction]", Yt = "[object HTMLAllCollection]", Kt = "[object HTML document.all class]", Qt = "[object HTMLCollection]", Xt = typeof Symbol == "function" && !!Symbol.toStringTag, rn = !(0 in [,]), Tr = function() {
      return false;
    };
    typeof document == "object" && (je = document.all, Q.call(je) === Q.call(document.all) && (Tr = function(e) {
      if ((rn || !e) && (typeof e > "u" || typeof e == "object"))
        try {
          var t = Q.call(e);
          return (t === Yt || t === Kt || t === Qt || t === Lt) && e("") == null;
        } catch {
        }
      return false;
    }));
    var je;
    we.exports = D ? function(e) {
      if (Tr(e))
        return true;
      if (!e || typeof e != "function" && typeof e != "object")
        return false;
      try {
        D(e, null, Ir);
      } catch (t) {
        if (t !== K)
          return false;
      }
      return !Br(e) && Fr(e);
    } : function(e) {
      if (Tr(e))
        return true;
      if (!e || typeof e != "function" && typeof e != "object")
        return false;
      if (Xt)
        return Fr(e);
      if (Br(e))
        return false;
      var t = Q.call(e);
      return t !== Ht && t !== Zt && !/^\[object HTML/.test(t) ? false : Fr(e);
    };
  });
  Be = p((vo, Ie) => {
    var en = Ee(), tn = Object.prototype.toString, Fe = Object.prototype.hasOwnProperty, nn = function(e, t, n) {
      for (var o = 0, f = e.length;o < f; o++)
        Fe.call(e, o) && (n == null ? t(e[o], o, e) : t.call(n, e[o], o, e));
    }, on = function(e, t, n) {
      for (var o = 0, f = e.length;o < f; o++)
        n == null ? t(e.charAt(o), o, e) : t.call(n, e.charAt(o), o, e);
    }, an = function(e, t, n) {
      for (var o in e)
        Fe.call(e, o) && (n == null ? t(e[o], o, e) : t.call(n, e[o], o, e));
    }, fn = function(e, t, n) {
      if (!en(t))
        throw new TypeError("iterator must be a function");
      var o;
      arguments.length >= 3 && (o = n), tn.call(e) === "[object Array]" ? nn(e, t, o) : typeof e == "string" ? on(e, t, o) : an(e, t, o);
    };
    Ie.exports = fn;
  });
  Ue = p((Oo, Te) => {
    var Ur = ["BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray"], un = typeof globalThis > "u" ? global : globalThis;
    Te.exports = function() {
      for (var e = [], t = 0;t < Ur.length; t++)
        typeof un[Ur[t]] == "function" && (e[e.length] = Ur[t]);
      return e;
    };
  });
  Re = p((jo, xe) => {
    var sn = H(), X = sn("%Object.getOwnPropertyDescriptor%", true);
    if (X)
      try {
        X([], "length");
      } catch {
        X = null;
      }
    xe.exports = X;
  });
  Mr = p((Po, Ne) => {
    var er = Be(), cn = Ue(), De = Or(), Dr = jr(), rr = Re(), yn = Dr("Object.prototype.toString"), Me = z()(), ke = typeof globalThis > "u" ? global : globalThis, Rr = cn(), kr = Dr("String.prototype.slice"), xr = Object.getPrototypeOf, pn = Dr("Array.prototype.indexOf", true) || function(e, t) {
      for (var n = 0;n < e.length; n += 1)
        if (e[n] === t)
          return n;
      return -1;
    }, tr = { __proto__: null };
    Me && rr && xr ? er(Rr, function(r) {
      var e = new ke[r];
      if (Symbol.toStringTag in e) {
        var t = xr(e), n = rr(t, Symbol.toStringTag);
        if (!n) {
          var o = xr(t);
          n = rr(o, Symbol.toStringTag);
        }
        tr["$" + r] = De(n.get);
      }
    }) : er(Rr, function(r) {
      var e = new ke[r];
      tr["$" + r] = De(e.slice);
    });
    var ln = function(e) {
      var t = false;
      return er(tr, function(n, o) {
        if (!t)
          try {
            "$" + n(e) === o && (t = kr(o, 1));
          } catch {
          }
      }), t;
    }, gn = function(e) {
      var t = false;
      return er(tr, function(n, o) {
        if (!t)
          try {
            n(e), t = kr(o, 1);
          } catch {
          }
      }), t;
    };
    Ne.exports = function(e) {
      if (!e || typeof e != "object")
        return false;
      if (!Me) {
        var t = kr(yn(e), 8, -1);
        return pn(Rr, t) > -1 ? t : t !== "Object" ? false : gn(e);
      }
      return rr ? ln(e) : null;
    };
  });
  $e = p((wo, Ce) => {
    var dn = Mr();
    Ce.exports = function(e) {
      return !!dn(e);
    };
  });
  Xe = p((u) => {
    var bn = he(), An = Oe(), m = Mr(), _e = $e();
    function k(r) {
      return r.call.bind(r);
    }
    var Ge = typeof BigInt < "u", qe = typeof Symbol < "u", A = k(Object.prototype.toString), mn = k(Number.prototype.valueOf), hn = k(String.prototype.valueOf), Sn = k(Boolean.prototype.valueOf);
    Ge && (We = k(BigInt.prototype.valueOf));
    var We;
    qe && (ze = k(Symbol.prototype.valueOf));
    var ze;
    function $(r, e) {
      if (typeof r != "object")
        return false;
      try {
        return e(r), true;
      } catch {
        return false;
      }
    }
    u.isArgumentsObject = bn;
    u.isGeneratorFunction = An;
    u.isTypedArray = _e;
    function vn(r) {
      return typeof Promise < "u" && r instanceof Promise || r !== null && typeof r == "object" && typeof r.then == "function" && typeof r.catch == "function";
    }
    u.isPromise = vn;
    function On(r) {
      return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? ArrayBuffer.isView(r) : _e(r) || Je(r);
    }
    u.isArrayBufferView = On;
    function jn(r) {
      return m(r) === "Uint8Array";
    }
    u.isUint8Array = jn;
    function Pn(r) {
      return m(r) === "Uint8ClampedArray";
    }
    u.isUint8ClampedArray = Pn;
    function wn(r) {
      return m(r) === "Uint16Array";
    }
    u.isUint16Array = wn;
    function En(r) {
      return m(r) === "Uint32Array";
    }
    u.isUint32Array = En;
    function Fn(r) {
      return m(r) === "Int8Array";
    }
    u.isInt8Array = Fn;
    function In(r) {
      return m(r) === "Int16Array";
    }
    u.isInt16Array = In;
    function Bn(r) {
      return m(r) === "Int32Array";
    }
    u.isInt32Array = Bn;
    function Tn(r) {
      return m(r) === "Float32Array";
    }
    u.isFloat32Array = Tn;
    function Un(r) {
      return m(r) === "Float64Array";
    }
    u.isFloat64Array = Un;
    function xn(r) {
      return m(r) === "BigInt64Array";
    }
    u.isBigInt64Array = xn;
    function Rn(r) {
      return m(r) === "BigUint64Array";
    }
    u.isBigUint64Array = Rn;
    function nr(r) {
      return A(r) === "[object Map]";
    }
    nr.working = typeof Map < "u" && nr(new Map);
    function Dn(r) {
      return typeof Map > "u" ? false : nr.working ? nr(r) : r instanceof Map;
    }
    u.isMap = Dn;
    function or(r) {
      return A(r) === "[object Set]";
    }
    or.working = typeof Set < "u" && or(new Set);
    function kn(r) {
      return typeof Set > "u" ? false : or.working ? or(r) : r instanceof Set;
    }
    u.isSet = kn;
    function ir(r) {
      return A(r) === "[object WeakMap]";
    }
    ir.working = typeof WeakMap < "u" && ir(new WeakMap);
    function Mn(r) {
      return typeof WeakMap > "u" ? false : ir.working ? ir(r) : r instanceof WeakMap;
    }
    u.isWeakMap = Mn;
    function Cr(r) {
      return A(r) === "[object WeakSet]";
    }
    Cr.working = typeof WeakSet < "u" && Cr(new WeakSet);
    function Nn(r) {
      return Cr(r);
    }
    u.isWeakSet = Nn;
    function ar(r) {
      return A(r) === "[object ArrayBuffer]";
    }
    ar.working = typeof ArrayBuffer < "u" && ar(new ArrayBuffer);
    function Ve(r) {
      return typeof ArrayBuffer > "u" ? false : ar.working ? ar(r) : r instanceof ArrayBuffer;
    }
    u.isArrayBuffer = Ve;
    function fr(r) {
      return A(r) === "[object DataView]";
    }
    fr.working = typeof ArrayBuffer < "u" && typeof DataView < "u" && fr(new DataView(new ArrayBuffer(1), 0, 1));
    function Je(r) {
      return typeof DataView > "u" ? false : fr.working ? fr(r) : r instanceof DataView;
    }
    u.isDataView = Je;
    var Nr = typeof SharedArrayBuffer < "u" ? SharedArrayBuffer : undefined;
    function C(r) {
      return A(r) === "[object SharedArrayBuffer]";
    }
    function Le(r) {
      return typeof Nr > "u" ? false : (typeof C.working > "u" && (C.working = C(new Nr)), C.working ? C(r) : r instanceof Nr);
    }
    u.isSharedArrayBuffer = Le;
    function Cn(r) {
      return A(r) === "[object AsyncFunction]";
    }
    u.isAsyncFunction = Cn;
    function $n(r) {
      return A(r) === "[object Map Iterator]";
    }
    u.isMapIterator = $n;
    function _n(r) {
      return A(r) === "[object Set Iterator]";
    }
    u.isSetIterator = _n;
    function Gn(r) {
      return A(r) === "[object Generator]";
    }
    u.isGeneratorObject = Gn;
    function qn(r) {
      return A(r) === "[object WebAssembly.Module]";
    }
    u.isWebAssemblyCompiledModule = qn;
    function He(r) {
      return $(r, mn);
    }
    u.isNumberObject = He;
    function Ze(r) {
      return $(r, hn);
    }
    u.isStringObject = Ze;
    function Ye(r) {
      return $(r, Sn);
    }
    u.isBooleanObject = Ye;
    function Ke(r) {
      return Ge && $(r, We);
    }
    u.isBigIntObject = Ke;
    function Qe(r) {
      return qe && $(r, ze);
    }
    u.isSymbolObject = Qe;
    function Wn(r) {
      return He(r) || Ze(r) || Ye(r) || Ke(r) || Qe(r);
    }
    u.isBoxedPrimitive = Wn;
    function zn(r) {
      return typeof Uint8Array < "u" && (Ve(r) || Le(r));
    }
    u.isAnyArrayBuffer = zn;
    ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach(function(r) {
      Object.defineProperty(u, r, { enumerable: false, value: function() {
        throw new Error(r + " is not supported in userland");
      } });
    });
  });
  et = p((Fo, rt) => {
    rt.exports = function(e) {
      return e && typeof e == "object" && typeof e.copy == "function" && typeof e.fill == "function" && typeof e.readUInt8 == "function";
    };
  });
  tt = p((Io, $r) => {
    typeof Object.create == "function" ? $r.exports = function(e, t) {
      t && (e.super_ = t, e.prototype = Object.create(t.prototype, { constructor: { value: e, enumerable: false, writable: true, configurable: true } }));
    } : $r.exports = function(e, t) {
      if (t) {
        e.super_ = t;
        var n = function() {
        };
        n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e;
      }
    };
  });
  ut = p((s) => {
    var nt = Object.getOwnPropertyDescriptors || function(e) {
      for (var t = Object.keys(e), n = {}, o = 0;o < t.length; o++)
        n[t[o]] = Object.getOwnPropertyDescriptor(e, t[o]);
      return n;
    }, Vn = /%[sdj%]/g;
    s.format = function(r) {
      if (!gr(r)) {
        for (var e = [], t = 0;t < arguments.length; t++)
          e.push(h(arguments[t]));
        return e.join(" ");
      }
      for (var t = 1, n = arguments, o = n.length, f = String(r).replace(Vn, function(a) {
        if (a === "%%")
          return "%";
        if (t >= o)
          return a;
        switch (a) {
          case "%s":
            return String(n[t++]);
          case "%d":
            return Number(n[t++]);
          case "%j":
            try {
              return JSON.stringify(n[t++]);
            } catch {
              return "[Circular]";
            }
          default:
            return a;
        }
      }), i = n[t];t < o; i = n[++t])
        lr(i) || !M(i) ? f += " " + i : f += " " + h(i);
      return f;
    };
    s.deprecate = function(r, e) {
      if (typeof process < "u" && process.noDeprecation === true)
        return r;
      if (typeof process > "u")
        return function() {
          return s.deprecate(r, e).apply(this, arguments);
        };
      var t = false;
      function n() {
        if (!t) {
          if (process.throwDeprecation)
            throw new Error(e);
          process.traceDeprecation ? console.trace(e) : console.error(e), t = true;
        }
        return r.apply(this, arguments);
      }
      return n;
    };
    var ur = {}, ot = /^$/;
    process.env.NODE_DEBUG && (sr = process.env.NODE_DEBUG, sr = sr.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), ot = new RegExp("^" + sr + "$", "i"));
    var sr;
    s.debuglog = function(r) {
      if (r = r.toUpperCase(), !ur[r])
        if (ot.test(r)) {
          var e = process.pid;
          ur[r] = function() {
            var t = s.format.apply(s, arguments);
            console.error("%s %d: %s", r, e, t);
          };
        } else
          ur[r] = function() {
          };
      return ur[r];
    };
    function h(r, e) {
      var t = { seen: [], stylize: Ln };
      return arguments.length >= 3 && (t.depth = arguments[2]), arguments.length >= 4 && (t.colors = arguments[3]), Wr(e) ? t.showHidden = e : e && s._extend(t, e), w(t.showHidden) && (t.showHidden = false), w(t.depth) && (t.depth = 2), w(t.colors) && (t.colors = false), w(t.customInspect) && (t.customInspect = true), t.colors && (t.stylize = Jn), yr(t, r, t.depth);
    }
    s.inspect = h;
    h.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] };
    h.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" };
    function Jn(r, e) {
      var t = h.styles[e];
      return t ? "\x1B[" + h.colors[t][0] + "m" + r + "\x1B[" + h.colors[t][1] + "m" : r;
    }
    function Ln(r, e) {
      return r;
    }
    function Hn(r) {
      var e = {};
      return r.forEach(function(t, n) {
        e[t] = true;
      }), e;
    }
    function yr(r, e, t) {
      if (r.customInspect && e && cr(e.inspect) && e.inspect !== s.inspect && !(e.constructor && e.constructor.prototype === e)) {
        var n = e.inspect(t, r);
        return gr(n) || (n = yr(r, n, t)), n;
      }
      var o = Zn(r, e);
      if (o)
        return o;
      var f = Object.keys(e), i = Hn(f);
      if (r.showHidden && (f = Object.getOwnPropertyNames(e)), G(e) && (f.indexOf("message") >= 0 || f.indexOf("description") >= 0))
        return _r(e);
      if (f.length === 0) {
        if (cr(e)) {
          var a = e.name ? ": " + e.name : "";
          return r.stylize("[Function" + a + "]", "special");
        }
        if (_(e))
          return r.stylize(RegExp.prototype.toString.call(e), "regexp");
        if (pr(e))
          return r.stylize(Date.prototype.toString.call(e), "date");
        if (G(e))
          return _r(e);
      }
      var y = "", l = false, d = ["{", "}"];
      if (it(e) && (l = true, d = ["[", "]"]), cr(e)) {
        var S = e.name ? ": " + e.name : "";
        y = " [Function" + S + "]";
      }
      if (_(e) && (y = " " + RegExp.prototype.toString.call(e)), pr(e) && (y = " " + Date.prototype.toUTCString.call(e)), G(e) && (y = " " + _r(e)), f.length === 0 && (!l || e.length == 0))
        return d[0] + y + d[1];
      if (t < 0)
        return _(e) ? r.stylize(RegExp.prototype.toString.call(e), "regexp") : r.stylize("[Object]", "special");
      r.seen.push(e);
      var b;
      return l ? b = Yn(r, e, t, i, f) : b = f.map(function(F) {
        return qr(r, e, t, i, F, l);
      }), r.seen.pop(), Kn(b, y, d);
    }
    function Zn(r, e) {
      if (w(e))
        return r.stylize("undefined", "undefined");
      if (gr(e)) {
        var t = "'" + JSON.stringify(e).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
        return r.stylize(t, "string");
      }
      if (at(e))
        return r.stylize("" + e, "number");
      if (Wr(e))
        return r.stylize("" + e, "boolean");
      if (lr(e))
        return r.stylize("null", "null");
    }
    function _r(r) {
      return "[" + Error.prototype.toString.call(r) + "]";
    }
    function Yn(r, e, t, n, o) {
      for (var f = [], i = 0, a = e.length;i < a; ++i)
        ft(e, String(i)) ? f.push(qr(r, e, t, n, String(i), true)) : f.push("");
      return o.forEach(function(y) {
        y.match(/^\d+$/) || f.push(qr(r, e, t, n, y, true));
      }), f;
    }
    function qr(r, e, t, n, o, f) {
      var i, a, y;
      if (y = Object.getOwnPropertyDescriptor(e, o) || { value: e[o] }, y.get ? y.set ? a = r.stylize("[Getter/Setter]", "special") : a = r.stylize("[Getter]", "special") : y.set && (a = r.stylize("[Setter]", "special")), ft(n, o) || (i = "[" + o + "]"), a || (r.seen.indexOf(y.value) < 0 ? (lr(t) ? a = yr(r, y.value, null) : a = yr(r, y.value, t - 1), a.indexOf(`
`) > -1 && (f ? a = a.split(`
`).map(function(l) {
        return "  " + l;
      }).join(`
`).slice(2) : a = `
` + a.split(`
`).map(function(l) {
        return "   " + l;
      }).join(`
`))) : a = r.stylize("[Circular]", "special")), w(i)) {
        if (f && o.match(/^\d+$/))
          return a;
        i = JSON.stringify("" + o), i.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (i = i.slice(1, -1), i = r.stylize(i, "name")) : (i = i.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), i = r.stylize(i, "string"));
      }
      return i + ": " + a;
    }
    function Kn(r, e, t) {
      var n = 0, o = r.reduce(function(f, i) {
        return n++, i.indexOf(`
`) >= 0 && n++, f + i.replace(/\u001b\[\d\d?m/g, "").length + 1;
      }, 0);
      return o > 60 ? t[0] + (e === "" ? "" : e + `
 `) + " " + r.join(`,
  `) + " " + t[1] : t[0] + e + " " + r.join(", ") + " " + t[1];
    }
    s.types = Xe();
    function it(r) {
      return Array.isArray(r);
    }
    s.isArray = it;
    function Wr(r) {
      return typeof r == "boolean";
    }
    s.isBoolean = Wr;
    function lr(r) {
      return r === null;
    }
    s.isNull = lr;
    function Qn(r) {
      return r == null;
    }
    s.isNullOrUndefined = Qn;
    function at(r) {
      return typeof r == "number";
    }
    s.isNumber = at;
    function gr(r) {
      return typeof r == "string";
    }
    s.isString = gr;
    function Xn(r) {
      return typeof r == "symbol";
    }
    s.isSymbol = Xn;
    function w(r) {
      return r === undefined;
    }
    s.isUndefined = w;
    function _(r) {
      return M(r) && zr(r) === "[object RegExp]";
    }
    s.isRegExp = _;
    s.types.isRegExp = _;
    function M(r) {
      return typeof r == "object" && r !== null;
    }
    s.isObject = M;
    function pr(r) {
      return M(r) && zr(r) === "[object Date]";
    }
    s.isDate = pr;
    s.types.isDate = pr;
    function G(r) {
      return M(r) && (zr(r) === "[object Error]" || r instanceof Error);
    }
    s.isError = G;
    s.types.isNativeError = G;
    function cr(r) {
      return typeof r == "function";
    }
    s.isFunction = cr;
    function ro(r) {
      return r === null || typeof r == "boolean" || typeof r == "number" || typeof r == "string" || typeof r == "symbol" || typeof r > "u";
    }
    s.isPrimitive = ro;
    s.isBuffer = et();
    function zr(r) {
      return Object.prototype.toString.call(r);
    }
    function Gr(r) {
      return r < 10 ? "0" + r.toString(10) : r.toString(10);
    }
    var eo = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    function to() {
      var r = new Date, e = [Gr(r.getHours()), Gr(r.getMinutes()), Gr(r.getSeconds())].join(":");
      return [r.getDate(), eo[r.getMonth()], e].join(" ");
    }
    s.log = function() {
      console.log("%s - %s", to(), s.format.apply(s, arguments));
    };
    s.inherits = tt();
    s._extend = function(r, e) {
      if (!e || !M(e))
        return r;
      for (var t = Object.keys(e), n = t.length;n--; )
        r[t[n]] = e[t[n]];
      return r;
    };
    function ft(r, e) {
      return Object.prototype.hasOwnProperty.call(r, e);
    }
    var P = typeof Symbol < "u" ? Symbol("util.promisify.custom") : undefined;
    s.promisify = function(e) {
      if (typeof e != "function")
        throw new TypeError('The "original" argument must be of type Function');
      if (P && e[P]) {
        var t = e[P];
        if (typeof t != "function")
          throw new TypeError('The "util.promisify.custom" argument must be of type Function');
        return Object.defineProperty(t, P, { value: t, enumerable: false, writable: false, configurable: true }), t;
      }
      function t() {
        for (var n, o, f = new Promise(function(y, l) {
          n = y, o = l;
        }), i = [], a = 0;a < arguments.length; a++)
          i.push(arguments[a]);
        i.push(function(y, l) {
          y ? o(y) : n(l);
        });
        try {
          e.apply(this, i);
        } catch (y) {
          o(y);
        }
        return f;
      }
      return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), P && Object.defineProperty(t, P, { value: t, enumerable: false, writable: false, configurable: true }), Object.defineProperties(t, nt(e));
    };
    s.promisify.custom = P;
    function no(r, e) {
      if (!r) {
        var t = new Error("Promise was rejected with a falsy value");
        t.reason = r, r = t;
      }
      return e(r);
    }
    function oo(r) {
      if (typeof r != "function")
        throw new TypeError('The "original" argument must be of type Function');
      function e() {
        for (var t = [], n = 0;n < arguments.length; n++)
          t.push(arguments[n]);
        var o = t.pop();
        if (typeof o != "function")
          throw new TypeError("The last argument must be of type Function");
        var f = this, i = function() {
          return o.apply(f, arguments);
        };
        r.apply(this, t).then(function(a) {
          process.nextTick(i.bind(null, null, a));
        }, function(a) {
          process.nextTick(no.bind(null, a, i));
        });
      }
      return Object.setPrototypeOf(e, Object.getPrototypeOf(r)), Object.defineProperties(e, nt(r)), e;
    }
    s.callbackify = oo;
  });
  E = {};
  bt(E, { TextDecoder: () => ct, TextEncoder: () => st, default: () => io });
  I(E, At(ut()));
  st = globalThis.TextEncoder;
  ct = globalThis.TextDecoder;
  io = { TextEncoder: st, TextDecoder: ct };
});

// node_modules/colors/lib/styles.js
var require_styles = __commonJS((exports, module) => {
  var styles = {};
  module["exports"] = styles;
  var codes = {
    reset: [0, 0],
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    inverse: [7, 27],
    hidden: [8, 28],
    strikethrough: [9, 29],
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],
    gray: [90, 39],
    grey: [90, 39],
    brightRed: [91, 39],
    brightGreen: [92, 39],
    brightYellow: [93, 39],
    brightBlue: [94, 39],
    brightMagenta: [95, 39],
    brightCyan: [96, 39],
    brightWhite: [97, 39],
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],
    bgGray: [100, 49],
    bgGrey: [100, 49],
    bgBrightRed: [101, 49],
    bgBrightGreen: [102, 49],
    bgBrightYellow: [103, 49],
    bgBrightBlue: [104, 49],
    bgBrightMagenta: [105, 49],
    bgBrightCyan: [106, 49],
    bgBrightWhite: [107, 49],
    blackBG: [40, 49],
    redBG: [41, 49],
    greenBG: [42, 49],
    yellowBG: [43, 49],
    blueBG: [44, 49],
    magentaBG: [45, 49],
    cyanBG: [46, 49],
    whiteBG: [47, 49]
  };
  Object.keys(codes).forEach(function(key) {
    var val = codes[key];
    var style = styles[key] = [];
    style.open = "\x1B[" + val[0] + "m";
    style.close = "\x1B[" + val[1] + "m";
  });
});

// node:os
var exports_os = {};
__export(exports_os, {
  uptime: () => {
    {
      return A;
    }
  },
  type: () => {
    {
      return V2;
    }
  },
  totalmem: () => {
    {
      return N;
    }
  },
  tmpdir: () => {
    {
      return U;
    }
  },
  release: () => {
    {
      return x;
    }
  },
  platform: () => {
    {
      return O;
    }
  },
  networkInterfaces: () => {
    {
      return j;
    }
  },
  loadavg: () => {
    {
      return y;
    }
  },
  hostname: () => {
    {
      return k;
    }
  },
  homedir: () => {
    {
      return _;
    }
  },
  getNetworkInterfaces: () => {
    {
      return B;
    }
  },
  freemem: () => {
    {
      return I2;
    }
  },
  endianness: () => {
    {
      return L;
    }
  },
  default: () => {
    {
      return E2;
    }
  },
  cpus: () => {
    {
      return b;
    }
  },
  arch: () => {
    {
      return M;
    }
  },
  EOL: () => {
    {
      return X;
    }
  }
});
var c, a, m, s, p2, d, l, h, g, f, u, E2, L, k, y, A, I2, N, b, V2, x, M, O, U, X, _, j, B;
var init_os = __esm(() => {
  c = Object.create;
  a = Object.defineProperty;
  m = Object.getOwnPropertyDescriptor;
  s = Object.getOwnPropertyNames;
  p2 = Object.getPrototypeOf;
  d = Object.prototype.hasOwnProperty;
  l = (r, n) => () => (n || r((n = { exports: {} }).exports, n), n.exports);
  h = (r, n, t, i) => {
    if (n && typeof n == "object" || typeof n == "function")
      for (let o of s(n))
        !d.call(r, o) && o !== t && a(r, o, { get: () => n[o], enumerable: !(i = m(n, o)) || i.enumerable });
    return r;
  };
  g = (r, n, t) => (t = r != null ? c(p2(r)) : {}, h(n || !r || !r.__esModule ? a(t, "default", { value: r, enumerable: true }) : t, r));
  f = l((e) => {
    e.endianness = function() {
      return "LE";
    };
    e.hostname = function() {
      return typeof location < "u" ? location.hostname : "";
    };
    e.loadavg = function() {
      return [];
    };
    e.uptime = function() {
      return 0;
    };
    e.freemem = function() {
      return Number.MAX_VALUE;
    };
    e.totalmem = function() {
      return Number.MAX_VALUE;
    };
    e.cpus = function() {
      return [];
    };
    e.type = function() {
      return "Browser";
    };
    e.release = function() {
      return typeof navigator < "u" ? navigator.appVersion : "";
    };
    e.networkInterfaces = e.getNetworkInterfaces = function() {
      return {};
    };
    e.arch = function() {
      return "javascript";
    };
    e.platform = function() {
      return "browser";
    };
    e.tmpdir = e.tmpDir = function() {
      return "/tmp";
    };
    e.EOL = `
`;
    e.homedir = function() {
      return "/";
    };
  });
  u = g(f());
  E2 = u.default;
  ({ endianness: L, hostname: k, loadavg: y, uptime: A, freemem: I2, totalmem: N, cpus: b, type: V2, release: x, arch: M, platform: O, tmpdir: U, EOL: X, homedir: _, networkInterfaces: j, getNetworkInterfaces: B } = u.default);
});

// node_modules/colors/lib/system/has-flag.js
var require_has_flag = __commonJS((exports, module) => {
  module.exports = function(flag, argv) {
    argv = argv || process.argv;
    var terminatorPos = argv.indexOf("--");
    var prefix = /^-{1,2}/.test(flag) ? "" : "--";
    var pos = argv.indexOf(prefix + flag);
    return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
  };
});

// node_modules/colors/lib/system/supports-colors.js
var require_supports_colors = __commonJS((exports, module) => {
  var translateLevel = function(level) {
    if (level === 0) {
      return false;
    }
    return {
      level,
      hasBasic: true,
      has256: level >= 2,
      has16m: level >= 3
    };
  };
  var supportsColor = function(stream) {
    if (forceColor === false) {
      return 0;
    }
    if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
      return 3;
    }
    if (hasFlag("color=256")) {
      return 2;
    }
    if (stream && !stream.isTTY && forceColor !== true) {
      return 0;
    }
    var min = forceColor ? 1 : 0;
    if (process.platform === "win32") {
      var osRelease = os.release().split(".");
      if (Number(process.versions.node.split(".")[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
        return Number(osRelease[2]) >= 14931 ? 3 : 2;
      }
      return 1;
    }
    if ("CI" in env) {
      if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some(function(sign) {
        return sign in env;
      }) || env.CI_NAME === "codeship") {
        return 1;
      }
      return min;
    }
    if ("TEAMCITY_VERSION" in env) {
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    }
    if ("TERM_PROGRAM" in env) {
      var version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (env.TERM_PROGRAM) {
        case "iTerm.app":
          return version >= 3 ? 3 : 2;
        case "Hyper":
          return 3;
        case "Apple_Terminal":
          return 2;
      }
    }
    if (/-256(color)?$/i.test(env.TERM)) {
      return 2;
    }
    if (/^screen|^xterm|^vt100|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
      return 1;
    }
    if ("COLORTERM" in env) {
      return 1;
    }
    if (env.TERM === "dumb") {
      return min;
    }
    return min;
  };
  var getSupportLevel = function(stream) {
    var level = supportsColor(stream);
    return translateLevel(level);
  };
  var os = (init_os(), __toCommonJS(exports_os));
  var hasFlag = require_has_flag();
  var env = process.env;
  var forceColor = undefined;
  if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false")) {
    forceColor = false;
  } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
    forceColor = true;
  }
  if ("FORCE_COLOR" in env) {
    forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;
  }
  module.exports = {
    supportsColor: getSupportLevel,
    stdout: getSupportLevel(process.stdout),
    stderr: getSupportLevel(process.stderr)
  };
});

// node_modules/colors/lib/custom/trap.js
var require_trap = __commonJS((exports, module) => {
  module["exports"] = function runTheTrap(text, options) {
    var result = "";
    text = text || "Run the trap, drop the bass";
    text = text.split("");
    var trap = {
      a: ["@", "\u0104", "\u023A", "\u0245", "\u0394", "\u039B", "\u0414"],
      b: ["\xDF", "\u0181", "\u0243", "\u026E", "\u03B2", "\u0E3F"],
      c: ["\xA9", "\u023B", "\u03FE"],
      d: ["\xD0", "\u018A", "\u0500", "\u0501", "\u0502", "\u0503"],
      e: [
        "\xCB",
        "\u0115",
        "\u018E",
        "\u0258",
        "\u03A3",
        "\u03BE",
        "\u04BC",
        "\u0A6C"
      ],
      f: ["\u04FA"],
      g: ["\u0262"],
      h: ["\u0126", "\u0195", "\u04A2", "\u04BA", "\u04C7", "\u050A"],
      i: ["\u0F0F"],
      j: ["\u0134"],
      k: ["\u0138", "\u04A0", "\u04C3", "\u051E"],
      l: ["\u0139"],
      m: ["\u028D", "\u04CD", "\u04CE", "\u0520", "\u0521", "\u0D69"],
      n: ["\xD1", "\u014B", "\u019D", "\u0376", "\u03A0", "\u048A"],
      o: [
        "\xD8",
        "\xF5",
        "\xF8",
        "\u01FE",
        "\u0298",
        "\u047A",
        "\u05DD",
        "\u06DD",
        "\u0E4F"
      ],
      p: ["\u01F7", "\u048E"],
      q: ["\u09CD"],
      r: ["\xAE", "\u01A6", "\u0210", "\u024C", "\u0280", "\u042F"],
      s: ["\xA7", "\u03DE", "\u03DF", "\u03E8"],
      t: ["\u0141", "\u0166", "\u0373"],
      u: ["\u01B1", "\u054D"],
      v: ["\u05D8"],
      w: ["\u0428", "\u0460", "\u047C", "\u0D70"],
      x: ["\u04B2", "\u04FE", "\u04FC", "\u04FD"],
      y: ["\xA5", "\u04B0", "\u04CB"],
      z: ["\u01B5", "\u0240"]
    };
    text.forEach(function(c2) {
      c2 = c2.toLowerCase();
      var chars = trap[c2] || [" "];
      var rand = Math.floor(Math.random() * chars.length);
      if (typeof trap[c2] !== "undefined") {
        result += trap[c2][rand];
      } else {
        result += c2;
      }
    });
    return result;
  };
});

// node_modules/colors/lib/custom/zalgo.js
var require_zalgo = __commonJS((exports, module) => {
  module["exports"] = function zalgo(text, options) {
    text = text || "   he is here   ";
    var soul = {
      up: [
        "\u030D",
        "\u030E",
        "\u0304",
        "\u0305",
        "\u033F",
        "\u0311",
        "\u0306",
        "\u0310",
        "\u0352",
        "\u0357",
        "\u0351",
        "\u0307",
        "\u0308",
        "\u030A",
        "\u0342",
        "\u0313",
        "\u0308",
        "\u034A",
        "\u034B",
        "\u034C",
        "\u0303",
        "\u0302",
        "\u030C",
        "\u0350",
        "\u0300",
        "\u0301",
        "\u030B",
        "\u030F",
        "\u0312",
        "\u0313",
        "\u0314",
        "\u033D",
        "\u0309",
        "\u0363",
        "\u0364",
        "\u0365",
        "\u0366",
        "\u0367",
        "\u0368",
        "\u0369",
        "\u036A",
        "\u036B",
        "\u036C",
        "\u036D",
        "\u036E",
        "\u036F",
        "\u033E",
        "\u035B",
        "\u0346",
        "\u031A"
      ],
      down: [
        "\u0316",
        "\u0317",
        "\u0318",
        "\u0319",
        "\u031C",
        "\u031D",
        "\u031E",
        "\u031F",
        "\u0320",
        "\u0324",
        "\u0325",
        "\u0326",
        "\u0329",
        "\u032A",
        "\u032B",
        "\u032C",
        "\u032D",
        "\u032E",
        "\u032F",
        "\u0330",
        "\u0331",
        "\u0332",
        "\u0333",
        "\u0339",
        "\u033A",
        "\u033B",
        "\u033C",
        "\u0345",
        "\u0347",
        "\u0348",
        "\u0349",
        "\u034D",
        "\u034E",
        "\u0353",
        "\u0354",
        "\u0355",
        "\u0356",
        "\u0359",
        "\u035A",
        "\u0323"
      ],
      mid: [
        "\u0315",
        "\u031B",
        "\u0300",
        "\u0301",
        "\u0358",
        "\u0321",
        "\u0322",
        "\u0327",
        "\u0328",
        "\u0334",
        "\u0335",
        "\u0336",
        "\u035C",
        "\u035D",
        "\u035E",
        "\u035F",
        "\u0360",
        "\u0362",
        "\u0338",
        "\u0337",
        "\u0361",
        " \u0489"
      ]
    };
    var all = [].concat(soul.up, soul.down, soul.mid);
    function randomNumber(range) {
      var r = Math.floor(Math.random() * range);
      return r;
    }
    function isChar(character) {
      var bool = false;
      all.filter(function(i) {
        bool = i === character;
      });
      return bool;
    }
    function heComes(text2, options2) {
      var result = "";
      var counts;
      var l2;
      options2 = options2 || {};
      options2["up"] = typeof options2["up"] !== "undefined" ? options2["up"] : true;
      options2["mid"] = typeof options2["mid"] !== "undefined" ? options2["mid"] : true;
      options2["down"] = typeof options2["down"] !== "undefined" ? options2["down"] : true;
      options2["size"] = typeof options2["size"] !== "undefined" ? options2["size"] : "maxi";
      text2 = text2.split("");
      for (l2 in text2) {
        if (isChar(l2)) {
          continue;
        }
        result = result + text2[l2];
        counts = { up: 0, down: 0, mid: 0 };
        switch (options2.size) {
          case "mini":
            counts.up = randomNumber(8);
            counts.mid = randomNumber(2);
            counts.down = randomNumber(8);
            break;
          case "maxi":
            counts.up = randomNumber(16) + 3;
            counts.mid = randomNumber(4) + 1;
            counts.down = randomNumber(64) + 3;
            break;
          default:
            counts.up = randomNumber(8) + 1;
            counts.mid = randomNumber(6) / 2;
            counts.down = randomNumber(8) + 1;
            break;
        }
        var arr = ["up", "mid", "down"];
        for (var d2 in arr) {
          var index = arr[d2];
          for (var i = 0;i <= counts[index]; i++) {
            if (options2[index]) {
              result = result + soul[index][randomNumber(soul[index].length)];
            }
          }
        }
      }
      return result;
    }
    return heComes(text, options);
  };
});

// node_modules/colors/lib/maps/america.js
var require_america = __commonJS((exports, module) => {
  module["exports"] = function(colors) {
    return function(letter, i, exploded) {
      if (letter === " ")
        return letter;
      switch (i % 3) {
        case 0:
          return colors.red(letter);
        case 1:
          return colors.white(letter);
        case 2:
          return colors.blue(letter);
      }
    };
  };
});

// node_modules/colors/lib/maps/zebra.js
var require_zebra = __commonJS((exports, module) => {
  module["exports"] = function(colors) {
    return function(letter, i, exploded) {
      return i % 2 === 0 ? letter : colors.inverse(letter);
    };
  };
});

// node_modules/colors/lib/maps/rainbow.js
var require_rainbow = __commonJS((exports, module) => {
  module["exports"] = function(colors) {
    var rainbowColors = ["red", "yellow", "green", "blue", "magenta"];
    return function(letter, i, exploded) {
      if (letter === " ") {
        return letter;
      } else {
        return colors[rainbowColors[i++ % rainbowColors.length]](letter);
      }
    };
  };
});

// node_modules/colors/lib/maps/random.js
var require_random = __commonJS((exports, module) => {
  module["exports"] = function(colors) {
    var available = [
      "underline",
      "inverse",
      "grey",
      "yellow",
      "red",
      "green",
      "blue",
      "white",
      "cyan",
      "magenta",
      "brightYellow",
      "brightRed",
      "brightGreen",
      "brightBlue",
      "brightWhite",
      "brightCyan",
      "brightMagenta"
    ];
    return function(letter, i, exploded) {
      return letter === " " ? letter : colors[available[Math.round(Math.random() * (available.length - 2))]](letter);
    };
  };
});

// node_modules/colors/lib/colors.js
var require_colors = __commonJS((exports, module) => {
  var build = function(_styles) {
    var builder = function builder() {
      return applyStyle.apply(builder, arguments);
    };
    builder._styles = _styles;
    builder.__proto__ = proto;
    return builder;
  };
  var applyStyle = function() {
    var args = Array.prototype.slice.call(arguments);
    var str = args.map(function(arg) {
      if (arg != null && arg.constructor === String) {
        return arg;
      } else {
        return util.inspect(arg);
      }
    }).join(" ");
    if (!colors.enabled || !str) {
      return str;
    }
    var newLinesPresent = str.indexOf("\n") != -1;
    var nestedStyles = this._styles;
    var i = nestedStyles.length;
    while (i--) {
      var code = ansiStyles[nestedStyles[i]];
      str = code.open + str.replace(code.closeRe, code.open) + code.close;
      if (newLinesPresent) {
        str = str.replace(newLineRegex, function(match) {
          return code.close + match + code.open;
        });
      }
    }
    return str;
  };
  var init = function() {
    var ret = {};
    Object.keys(styles).forEach(function(name) {
      ret[name] = {
        get: function() {
          return build([name]);
        }
      };
    });
    return ret;
  };
  var colors = {};
  module["exports"] = colors;
  colors.themes = {};
  var util = (init_util(), __toCommonJS(exports_util));
  var ansiStyles = colors.styles = require_styles();
  var defineProps = Object.defineProperties;
  var newLineRegex = new RegExp(/[\r\n]+/g);
  colors.supportsColor = require_supports_colors().supportsColor;
  if (typeof colors.enabled === "undefined") {
    colors.enabled = colors.supportsColor() !== false;
  }
  colors.enable = function() {
    colors.enabled = true;
  };
  colors.disable = function() {
    colors.enabled = false;
  };
  colors.stripColors = colors.strip = function(str) {
    return ("" + str).replace(/\x1B\[\d+m/g, "");
  };
  var stylize = colors.stylize = function stylize(str, style) {
    if (!colors.enabled) {
      return str + "";
    }
    var styleMap = ansiStyles[style];
    if (!styleMap && (style in colors)) {
      return colors[style](str);
    }
    return styleMap.open + str + styleMap.close;
  };
  var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;
  var escapeStringRegexp = function(str) {
    if (typeof str !== "string") {
      throw new TypeError("Expected a string");
    }
    return str.replace(matchOperatorsRe, "\\$&");
  };
  var styles = function() {
    var ret = {};
    ansiStyles.grey = ansiStyles.gray;
    Object.keys(ansiStyles).forEach(function(key) {
      ansiStyles[key].closeRe = new RegExp(escapeStringRegexp(ansiStyles[key].close), "g");
      ret[key] = {
        get: function() {
          return build(this._styles.concat(key));
        }
      };
    });
    return ret;
  }();
  var proto = defineProps(function colors() {
  }, styles);
  colors.setTheme = function(theme) {
    if (typeof theme === "string") {
      console.log("colors.setTheme now only accepts an object, not a string.  If you are trying to set a theme from a file, it is now your (the caller\'s) responsibility to require the file.  The old syntax looked like colors.setTheme(__dirname + \'/../themes/generic-logging.js\'); The new syntax looks like colors.setTheme(require(__dirname + \'/../themes/generic-logging.js\'));");
      return;
    }
    for (var style in theme) {
      (function(style2) {
        colors[style2] = function(str) {
          if (typeof theme[style2] === "object") {
            var out = str;
            for (var i in theme[style2]) {
              out = colors[theme[style2][i]](out);
            }
            return out;
          }
          return colors[theme[style2]](str);
        };
      })(style);
    }
  };
  var sequencer = function sequencer(map2, str) {
    var exploded = str.split("");
    exploded = exploded.map(map2);
    return exploded.join("");
  };
  colors.trap = require_trap();
  colors.zalgo = require_zalgo();
  colors.maps = {};
  colors.maps.america = require_america()(colors);
  colors.maps.zebra = require_zebra()(colors);
  colors.maps.rainbow = require_rainbow()(colors);
  colors.maps.random = require_random()(colors);
  for (map in colors.maps) {
    (function(map2) {
      colors[map2] = function(str) {
        return sequencer(colors.maps[map2], str);
      };
    })(map);
  }
  var map;
  defineProps(colors, init());
});

// node_modules/colors/lib/extendStringPrototype.js
var require_extendStringPrototype = __commonJS((exports, module) => {
  var colors = require_colors();
  module["exports"] = function() {
    var addProperty = function(color, func) {
      String.prototype.__defineGetter__(color, func);
    };
    addProperty("strip", function() {
      return colors.strip(this);
    });
    addProperty("stripColors", function() {
      return colors.strip(this);
    });
    addProperty("trap", function() {
      return colors.trap(this);
    });
    addProperty("zalgo", function() {
      return colors.zalgo(this);
    });
    addProperty("zebra", function() {
      return colors.zebra(this);
    });
    addProperty("rainbow", function() {
      return colors.rainbow(this);
    });
    addProperty("random", function() {
      return colors.random(this);
    });
    addProperty("america", function() {
      return colors.america(this);
    });
    var x2 = Object.keys(colors.styles);
    x2.forEach(function(style) {
      addProperty(style, function() {
        return colors.stylize(this, style);
      });
    });
    function applyTheme(theme) {
      var stringPrototypeBlacklist = [
        "__defineGetter__",
        "__defineSetter__",
        "__lookupGetter__",
        "__lookupSetter__",
        "charAt",
        "constructor",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "toLocaleString",
        "toString",
        "valueOf",
        "charCodeAt",
        "indexOf",
        "lastIndexOf",
        "length",
        "localeCompare",
        "match",
        "repeat",
        "replace",
        "search",
        "slice",
        "split",
        "substring",
        "toLocaleLowerCase",
        "toLocaleUpperCase",
        "toLowerCase",
        "toUpperCase",
        "trim",
        "trimLeft",
        "trimRight"
      ];
      Object.keys(theme).forEach(function(prop) {
        if (stringPrototypeBlacklist.indexOf(prop) !== -1) {
          console.log("warn: ".red + ("String.prototype" + prop).magenta + " is probably something you don\'t want to override.  Ignoring style name");
        } else {
          if (typeof theme[prop] === "string") {
            colors[prop] = colors[theme[prop]];
            addProperty(prop, function() {
              return colors[prop](this);
            });
          } else {
            var themePropApplicator = function(str) {
              var ret = str || this;
              for (var t = 0;t < theme[prop].length; t++) {
                ret = colors[theme[prop][t]](ret);
              }
              return ret;
            };
            addProperty(prop, themePropApplicator);
            colors[prop] = function(str) {
              return themePropApplicator(str);
            };
          }
        }
      });
    }
    colors.setTheme = function(theme) {
      if (typeof theme === "string") {
        console.log("colors.setTheme now only accepts an object, not a string. If you are trying to set a theme from a file, it is now your (the caller\'s) responsibility to require the file.  The old syntax looked like colors.setTheme(__dirname + \'/../themes/generic-logging.js\'); The new syntax looks like colors.setTheme(require(__dirname + \'/../themes/generic-logging.js\'));");
        return;
      } else {
        applyTheme(theme);
      }
    };
  };
});

// node_modules/colors/lib/index.js
var require_lib = __commonJS((exports, module) => {
  var colors = require_colors();
  module["exports"] = colors;
  require_extendStringPrototype()();
});

// src/user/user.ts
var fetchUserDate = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user = await response.json();
  console.log(user.name);
  return {
    name: user.name
  };
};

// index.ts
var colors = require_lib();
var file = Bun.file("package.json");
var fileContents = await file.text();
await Bun.write("index.html", "\uBC88 \uC548\uB155");
var userName = await fetchUserDate();
console.log("\uD83D\uDE80 ~ file: index.ts:23 ~ userName:", userName);
