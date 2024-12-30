(function() {
    function t(t) {
        function e(e, r, i, n, s, o) {
            for (; s >= 0 && s < o; s += t) {
                var a = n ? n[s] : s;
                i = r(i, e[a], a, e)
            }
            return i
        }
        return function(r, i, n, s) {
            i = b(i, s, 4);
            var o = !x(r) && v.keys(r)
              , a = (o || r).length
              , c = t > 0 ? 0 : a - 1;
            return arguments.length < 3 && (n = r[o ? o[c] : c],
            c += t),
            e(r, i, n, o, c, a)
        }
    }
    function e(t) {
        return function(e, r, i) {
            r = w(r, i);
            for (var n = A(e), s = t > 0 ? 0 : n - 1; s >= 0 && s < n; s += t)
                if (r(e[s], s, e))
                    return s;
            return -1
        }
    }
    function r(t, e, r) {
        return function(i, n, s) {
            var o = 0
              , a = A(i);
            if ("number" == typeof s)
                t > 0 ? o = s >= 0 ? s : Math.max(s + a, o) : a = s >= 0 ? Math.min(s + 1, a) : s + a + 1;
            else if (r && s && a)
                return i[s = r(i, n)] === n ? s : -1;
            if (n != n)
                return (s = e(u.call(i, o, a), v.isNaN)) >= 0 ? s + o : -1;
            for (s = t > 0 ? o : a - 1; s >= 0 && s < a; s += t)
                if (i[s] === n)
                    return s;
            return -1
        }
    }
    function i(t, e) {
        var r = O.length
          , i = t.constructor
          , n = v.isFunction(i) && i.prototype || a
          , s = "constructor";
        for (v.has(t, s) && !v.contains(e, s) && e.push(s); r--; )
            (s = O[r])in t && t[s] !== n[s] && !v.contains(e, s) && e.push(s)
    }
    var n = this
      , s = n._
      , o = Array.prototype
      , a = Object.prototype
      , c = Function.prototype
      , l = o.push
      , u = o.slice
      , h = a.toString
      , p = a.hasOwnProperty
      , d = Array.isArray
      , f = Object.keys
      , m = c.bind
      , g = Object.create
      , y = function() {}
      , v = function(t) {
        return t instanceof v ? t : this instanceof v ? void (this._wrapped = t) : new v(t)
    };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = v),
    exports._ = v) : n._ = v,
    v.VERSION = "1.8.3";
    var b = function(t, e, r) {
        if (void 0 === e)
            return t;
        switch (null == r ? 3 : r) {
        case 1:
            return function(r) {
                return t.call(e, r)
            }
            ;
        case 2:
            return function(r, i) {
                return t.call(e, r, i)
            }
            ;
        case 3:
            return function(r, i, n) {
                return t.call(e, r, i, n)
            }
            ;
        case 4:
            return function(r, i, n, s) {
                return t.call(e, r, i, n, s)
            }
        }
        return function() {
            return t.apply(e, arguments)
        }
    }
      , w = function(t, e, r) {
        return null == t ? v.identity : v.isFunction(t) ? b(t, e, r) : v.isObject(t) ? v.matcher(t) : v.property(t)
    };
    v.iteratee = function(t, e) {
        return w(t, e, 1 / 0)
    }
    ;
    var _ = function(t, e) {
        return function(r) {
            var i = arguments.length;
            if (i < 2 || null == r)
                return r;
            for (var n = 1; n < i; n++)
                for (var s = arguments[n], o = t(s), a = o.length, c = 0; c < a; c++) {
                    var l = o[c];
                    e && void 0 !== r[l] || (r[l] = s[l])
                }
            return r
        }
    }
      , S = function(t) {
        if (!v.isObject(t))
            return {};
        if (g)
            return g(t);
        y.prototype = t;
        var e = new y;
        return y.prototype = null,
        e
    }
      , k = function(t) {
        return function(e) {
            return null == e ? void 0 : e[t]
        }
    }
      , j = Math.pow(2, 53) - 1
      , A = k("length")
      , x = function(t) {
        var e = A(t);
        return "number" == typeof e && e >= 0 && e <= j
    };
    v.each = v.forEach = function(t, e, r) {
        var i, n;
        if (e = b(e, r),
        x(t))
            for (i = 0,
            n = t.length; i < n; i++)
                e(t[i], i, t);
        else {
            var s = v.keys(t);
            for (i = 0,
            n = s.length; i < n; i++)
                e(t[s[i]], s[i], t)
        }
        return t
    }
    ,
    v.map = v.collect = function(t, e, r) {
        e = w(e, r);
        for (var i = !x(t) && v.keys(t), n = (i || t).length, s = Array(n), o = 0; o < n; o++) {
            var a = i ? i[o] : o;
            s[o] = e(t[a], a, t)
        }
        return s
    }
    ,
    v.reduce = v.foldl = v.inject = t(1),
    v.reduceRight = v.foldr = t(-1),
    v.find = v.detect = function(t, e, r) {
        var i;
        if (void 0 !== (i = x(t) ? v.findIndex(t, e, r) : v.findKey(t, e, r)) && -1 !== i)
            return t[i]
    }
    ,
    v.filter = v.select = function(t, e, r) {
        var i = [];
        return e = w(e, r),
        v.each(t, (function(t, r, n) {
            e(t, r, n) && i.push(t)
        }
        )),
        i
    }
    ,
    v.reject = function(t, e, r) {
        return v.filter(t, v.negate(w(e)), r)
    }
    ,
    v.every = v.all = function(t, e, r) {
        e = w(e, r);
        for (var i = !x(t) && v.keys(t), n = (i || t).length, s = 0; s < n; s++) {
            var o = i ? i[s] : s;
            if (!e(t[o], o, t))
                return !1
        }
        return !0
    }
    ,
    v.some = v.any = function(t, e, r) {
        e = w(e, r);
        for (var i = !x(t) && v.keys(t), n = (i || t).length, s = 0; s < n; s++) {
            var o = i ? i[s] : s;
            if (e(t[o], o, t))
                return !0
        }
        return !1
    }
    ,
    v.contains = v.includes = v.include = function(t, e, r, i) {
        return x(t) || (t = v.values(t)),
        ("number" != typeof r || i) && (r = 0),
        v.indexOf(t, e, r) >= 0
    }
    ,
    v.invoke = function(t, e) {
        var r = u.call(arguments, 2)
          , i = v.isFunction(e);
        return v.map(t, (function(t) {
            var n = i ? e : t[e];
            return null == n ? n : n.apply(t, r)
        }
        ))
    }
    ,
    v.pluck = function(t, e) {
        return v.map(t, v.property(e))
    }
    ,
    v.where = function(t, e) {
        return v.filter(t, v.matcher(e))
    }
    ,
    v.findWhere = function(t, e) {
        return v.find(t, v.matcher(e))
    }
    ,
    v.max = function(t, e, r) {
        var i, n, s = -1 / 0, o = -1 / 0;
        if (null == e && null != t)
            for (var a = 0, c = (t = x(t) ? t : v.values(t)).length; a < c; a++)
                (i = t[a]) > s && (s = i);
        else
            e = w(e, r),
            v.each(t, (function(t, r, i) {
                ((n = e(t, r, i)) > o || n === -1 / 0 && s === -1 / 0) && (s = t,
                o = n)
            }
            ));
        return s
    }
    ,
    v.min = function(t, e, r) {
        var i, n, s = 1 / 0, o = 1 / 0;
        if (null == e && null != t)
            for (var a = 0, c = (t = x(t) ? t : v.values(t)).length; a < c; a++)
                (i = t[a]) < s && (s = i);
        else
            e = w(e, r),
            v.each(t, (function(t, r, i) {
                ((n = e(t, r, i)) < o || n === 1 / 0 && s === 1 / 0) && (s = t,
                o = n)
            }
            ));
        return s
    }
    ,
    v.shuffle = function(t) {
        for (var e, r = x(t) ? t : v.values(t), i = r.length, n = Array(i), s = 0; s < i; s++)
            (e = v.random(0, s)) !== s && (n[s] = n[e]),
            n[e] = r[s];
        return n
    }
    ,
    v.sample = function(t, e, r) {
        return null == e || r ? (x(t) || (t = v.values(t)),
        t[v.random(t.length - 1)]) : v.shuffle(t).slice(0, Math.max(0, e))
    }
    ,
    v.sortBy = function(t, e, r) {
        return e = w(e, r),
        v.pluck(v.map(t, (function(t, r, i) {
            return {
                value: t,
                index: r,
                criteria: e(t, r, i)
            }
        }
        )).sort((function(t, e) {
            var r = t.criteria
              , i = e.criteria;
            if (r !== i) {
                if (r > i || void 0 === r)
                    return 1;
                if (r < i || void 0 === i)
                    return -1
            }
            return t.index - e.index
        }
        )), "value")
    }
    ;
    var T = function(t) {
        return function(e, r, i) {
            var n = {};
            return r = w(r, i),
            v.each(e, (function(i, s) {
                var o = r(i, s, e);
                t(n, i, o)
            }
            )),
            n
        }
    };
    v.groupBy = T((function(t, e, r) {
        v.has(t, r) ? t[r].push(e) : t[r] = [e]
    }
    )),
    v.indexBy = T((function(t, e, r) {
        t[r] = e
    }
    )),
    v.countBy = T((function(t, e, r) {
        v.has(t, r) ? t[r]++ : t[r] = 1
    }
    )),
    v.toArray = function(t) {
        return t ? v.isArray(t) ? u.call(t) : x(t) ? v.map(t, v.identity) : v.values(t) : []
    }
    ,
    v.size = function(t) {
        return null == t ? 0 : x(t) ? t.length : v.keys(t).length
    }
    ,
    v.partition = function(t, e, r) {
        e = w(e, r);
        var i = []
          , n = [];
        return v.each(t, (function(t, r, s) {
            (e(t, r, s) ? i : n).push(t)
        }
        )),
        [i, n]
    }
    ,
    v.first = v.head = v.take = function(t, e, r) {
        if (null != t)
            return null == e || r ? t[0] : v.initial(t, t.length - e)
    }
    ,
    v.initial = function(t, e, r) {
        return u.call(t, 0, Math.max(0, t.length - (null == e || r ? 1 : e)))
    }
    ,
    v.last = function(t, e, r) {
        if (null != t)
            return null == e || r ? t[t.length - 1] : v.rest(t, Math.max(0, t.length - e))
    }
    ,
    v.rest = v.tail = v.drop = function(t, e, r) {
        return u.call(t, null == e || r ? 1 : e)
    }
    ,
    v.compact = function(t) {
        return v.filter(t, v.identity)
    }
    ;
    var J = function(t, e, r, i) {
        for (var n = [], s = 0, o = i || 0, a = A(t); o < a; o++) {
            var c = t[o];
            if (x(c) && (v.isArray(c) || v.isArguments(c))) {
                e || (c = J(c, e, r));
                var l = 0
                  , u = c.length;
                for (n.length += u; l < u; )
                    n[s++] = c[l++]
            } else
                r || (n[s++] = c)
        }
        return n
    };
    v.flatten = function(t, e) {
        return J(t, e, !1)
    }
    ,
    v.without = function(t) {
        return v.difference(t, u.call(arguments, 1))
    }
    ,
    v.uniq = v.unique = function(t, e, r, i) {
        v.isBoolean(e) || (i = r,
        r = e,
        e = !1),
        null != r && (r = w(r, i));
        for (var n = [], s = [], o = 0, a = A(t); o < a; o++) {
            var c = t[o]
              , l = r ? r(c, o, t) : c;
            e ? (o && s === l || n.push(c),
            s = l) : r ? v.contains(s, l) || (s.push(l),
            n.push(c)) : v.contains(n, c) || n.push(c)
        }
        return n
    }
    ,
    v.union = function() {
        return v.uniq(J(arguments, !0, !0))
    }
    ,
    v.intersection = function(t) {
        for (var e = [], r = arguments.length, i = 0, n = A(t); i < n; i++) {
            var s = t[i];
            if (!v.contains(e, s)) {
                for (var o = 1; o < r && v.contains(arguments[o], s); o++)
                    ;
                o === r && e.push(s)
            }
        }
        return e
    }
    ,
    v.difference = function(t) {
        var e = J(arguments, !0, !0, 1);
        return v.filter(t, (function(t) {
            return !v.contains(e, t)
        }
        ))
    }
    ,
    v.zip = function() {
        return v.unzip(arguments)
    }
    ,
    v.unzip = function(t) {
        for (var e = t && v.max(t, A).length || 0, r = Array(e), i = 0; i < e; i++)
            r[i] = v.pluck(t, i);
        return r
    }
    ,
    v.object = function(t, e) {
        for (var r = {}, i = 0, n = A(t); i < n; i++)
            e ? r[t[i]] = e[i] : r[t[i][0]] = t[i][1];
        return r
    }
    ,
    v.findIndex = e(1),
    v.findLastIndex = e(-1),
    v.sortedIndex = function(t, e, r, i) {
        for (var n = (r = w(r, i, 1))(e), s = 0, o = A(t); s < o; ) {
            var a = Math.floor((s + o) / 2);
            r(t[a]) < n ? s = a + 1 : o = a
        }
        return s
    }
    ,
    v.indexOf = r(1, v.findIndex, v.sortedIndex),
    v.lastIndexOf = r(-1, v.findLastIndex),
    v.range = function(t, e, r) {
        null == e && (e = t || 0,
        t = 0),
        r = r || 1;
        for (var i = Math.max(Math.ceil((e - t) / r), 0), n = Array(i), s = 0; s < i; s++,
        t += r)
            n[s] = t;
        return n
    }
    ;
    var C = function(t, e, r, i, n) {
        if (!(i instanceof e))
            return t.apply(r, n);
        var s = S(t.prototype)
          , o = t.apply(s, n);
        return v.isObject(o) ? o : s
    };
    v.bind = function(t, e) {
        if (m && t.bind === m)
            return m.apply(t, u.call(arguments, 1));
        if (!v.isFunction(t))
            throw new TypeError("Bind must be called on a function");
        var r = u.call(arguments, 2)
          , i = function() {
            return C(t, i, e, this, r.concat(u.call(arguments)))
        };
        return i
    }
    ,
    v.partial = function(t) {
        var e = u.call(arguments, 1)
          , r = function() {
            for (var i = 0, n = e.length, s = Array(n), o = 0; o < n; o++)
                s[o] = e[o] === v ? arguments[i++] : e[o];
            for (; i < arguments.length; )
                s.push(arguments[i++]);
            return C(t, r, this, this, s)
        };
        return r
    }
    ,
    v.bindAll = function(t) {
        var e, r, i = arguments.length;
        if (i <= 1)
            throw new Error("bindAll must be passed function names");
        for (e = 1; e < i; e++)
            t[r = arguments[e]] = v.bind(t[r], t);
        return t
    }
    ,
    v.memoize = function(t, e) {
        var r = function(i) {
            var n = r.cache
              , s = "" + (e ? e.apply(this, arguments) : i);
            return v.has(n, s) || (n[s] = t.apply(this, arguments)),
            n[s]
        };
        return r.cache = {},
        r
    }
    ,
    v.delay = function(t, e) {
        var r = u.call(arguments, 2);
        return setTimeout((function() {
            return t.apply(null, r)
        }
        ), e)
    }
    ,
    v.defer = v.partial(v.delay, v, 1),
    v.throttle = function(t, e, r) {
        var i, n, s, o = null, a = 0;
        r || (r = {});
        var c = function() {
            a = !1 === r.leading ? 0 : v.now(),
            o = null,
            s = t.apply(i, n),
            o || (i = n = null)
        };
        return function() {
            var l = v.now();
            a || !1 !== r.leading || (a = l);
            var u = e - (l - a);
            return i = this,
            n = arguments,
            u <= 0 || u > e ? (o && (clearTimeout(o),
            o = null),
            a = l,
            s = t.apply(i, n),
            o || (i = n = null)) : o || !1 === r.trailing || (o = setTimeout(c, u)),
            s
        }
    }
    ,
    v.debounce = function(t, e, r) {
        var i, n, s, o, a, c = function() {
            var l = v.now() - o;
            l < e && l >= 0 ? i = setTimeout(c, e - l) : (i = null,
            r || (a = t.apply(s, n),
            i || (s = n = null)))
        };
        return function() {
            s = this,
            n = arguments,
            o = v.now();
            var l = r && !i;
            return i || (i = setTimeout(c, e)),
            l && (a = t.apply(s, n),
            s = n = null),
            a
        }
    }
    ,
    v.wrap = function(t, e) {
        return v.partial(e, t)
    }
    ,
    v.negate = function(t) {
        return function() {
            return !t.apply(this, arguments)
        }
    }
    ,
    v.compose = function() {
        var t = arguments
          , e = t.length - 1;
        return function() {
            for (var r = e, i = t[e].apply(this, arguments); r--; )
                i = t[r].call(this, i);
            return i
        }
    }
    ,
    v.after = function(t, e) {
        return function() {
            if (--t < 1)
                return e.apply(this, arguments)
        }
    }
    ,
    v.before = function(t, e) {
        var r;
        return function() {
            return --t > 0 && (r = e.apply(this, arguments)),
            t <= 1 && (e = null),
            r
        }
    }
    ,
    v.once = v.partial(v.before, 2);
    var P = !{
        toString: null
    }.propertyIsEnumerable("toString")
      , O = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    v.keys = function(t) {
        if (!v.isObject(t))
            return [];
        if (f)
            return f(t);
        var e = [];
        for (var r in t)
            v.has(t, r) && e.push(r);
        return P && i(t, e),
        e
    }
    ,
    v.allKeys = function(t) {
        if (!v.isObject(t))
            return [];
        var e = [];
        for (var r in t)
            e.push(r);
        return P && i(t, e),
        e
    }
    ,
    v.values = function(t) {
        for (var e = v.keys(t), r = e.length, i = Array(r), n = 0; n < r; n++)
            i[n] = t[e[n]];
        return i
    }
    ,
    v.mapObject = function(t, e, r) {
        e = w(e, r);
        for (var i, n = v.keys(t), s = n.length, o = {}, a = 0; a < s; a++)
            o[i = n[a]] = e(t[i], i, t);
        return o
    }
    ,
    v.pairs = function(t) {
        for (var e = v.keys(t), r = e.length, i = Array(r), n = 0; n < r; n++)
            i[n] = [e[n], t[e[n]]];
        return i
    }
    ,
    v.invert = function(t) {
        for (var e = {}, r = v.keys(t), i = 0, n = r.length; i < n; i++)
            e[t[r[i]]] = r[i];
        return e
    }
    ,
    v.functions = v.methods = function(t) {
        var e = [];
        for (var r in t)
            v.isFunction(t[r]) && e.push(r);
        return e.sort()
    }
    ,
    v.extend = _(v.allKeys),
    v.extendOwn = v.assign = _(v.keys),
    v.findKey = function(t, e, r) {
        e = w(e, r);
        for (var i, n = v.keys(t), s = 0, o = n.length; s < o; s++)
            if (e(t[i = n[s]], i, t))
                return i
    }
    ,
    v.pick = function(t, e, r) {
        var i, n, s = {}, o = t;
        if (null == o)
            return s;
        v.isFunction(e) ? (n = v.allKeys(o),
        i = b(e, r)) : (n = J(arguments, !1, !1, 1),
        i = function(t, e, r) {
            return e in r
        }
        ,
        o = Object(o));
        for (var a = 0, c = n.length; a < c; a++) {
            var l = n[a]
              , u = o[l];
            i(u, l, o) && (s[l] = u)
        }
        return s
    }
    ,
    v.omit = function(t, e, r) {
        if (v.isFunction(e))
            e = v.negate(e);
        else {
            var i = v.map(J(arguments, !1, !1, 1), String);
            e = function(t, e) {
                return !v.contains(i, e)
            }
        }
        return v.pick(t, e, r)
    }
    ,
    v.defaults = _(v.allKeys, !0),
    v.create = function(t, e) {
        var r = S(t);
        return e && v.extendOwn(r, e),
        r
    }
    ,
    v.clone = function(t) {
        return v.isObject(t) ? v.isArray(t) ? t.slice() : v.extend({}, t) : t
    }
    ,
    v.tap = function(t, e) {
        return e(t),
        t
    }
    ,
    v.isMatch = function(t, e) {
        var r = v.keys(e)
          , i = r.length;
        if (null == t)
            return !i;
        for (var n = Object(t), s = 0; s < i; s++) {
            var o = r[s];
            if (e[o] !== n[o] || !(o in n))
                return !1
        }
        return !0
    }
    ;
    var I = function(t, e, r, i) {
        if (t === e)
            return 0 !== t || 1 / t == 1 / e;
        if (null == t || null == e)
            return t === e;
        t instanceof v && (t = t._wrapped),
        e instanceof v && (e = e._wrapped);
        var n = h.call(t);
        if (n !== h.call(e))
            return !1;
        switch (n) {
        case "[object RegExp]":
        case "[object String]":
            return "" + t == "" + e;
        case "[object Number]":
            return +t != +t ? +e != +e : 0 == +t ? 1 / +t == 1 / e : +t == +e;
        case "[object Date]":
        case "[object Boolean]":
            return +t == +e
        }
        var s = "[object Array]" === n;
        if (!s) {
            if ("object" != typeof t || "object" != typeof e)
                return !1;
            var o = t.constructor
              , a = e.constructor;
            if (o !== a && !(v.isFunction(o) && o instanceof o && v.isFunction(a) && a instanceof a) && "constructor"in t && "constructor"in e)
                return !1
        }
        i = i || [];
        for (var c = (r = r || []).length; c--; )
            if (r[c] === t)
                return i[c] === e;
        if (r.push(t),
        i.push(e),
        s) {
            if ((c = t.length) !== e.length)
                return !1;
            for (; c--; )
                if (!I(t[c], e[c], r, i))
                    return !1
        } else {
            var l, u = v.keys(t);
            if (c = u.length,
            v.keys(e).length !== c)
                return !1;
            for (; c--; )
                if (l = u[c],
                !v.has(e, l) || !I(t[l], e[l], r, i))
                    return !1
        }
        return r.pop(),
        i.pop(),
        !0
    };
    v.isEqual = function(t, e) {
        return I(t, e)
    }
    ,
    v.isEmpty = function(t) {
        return null == t || (x(t) && (v.isArray(t) || v.isString(t) || v.isArguments(t)) ? 0 === t.length : 0 === v.keys(t).length)
    }
    ,
    v.isElement = function(t) {
        return !(!t || 1 !== t.nodeType)
    }
    ,
    v.isArray = d || function(t) {
        return "[object Array]" === h.call(t)
    }
    ,
    v.isObject = function(t) {
        var e = typeof t;
        return "function" === e || "object" === e && !!t
    }
    ,
    v.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], (function(t) {
        v["is" + t] = function(e) {
            return h.call(e) === "[object " + t + "]"
        }
    }
    )),
    v.isArguments(arguments) || (v.isArguments = function(t) {
        return v.has(t, "callee")
    }
    ),
    "function" != typeof /./ && "object" != typeof Int8Array && (v.isFunction = function(t) {
        return "function" == typeof t || !1
    }
    ),
    v.isFinite = function(t) {
        return isFinite(t) && !isNaN(parseFloat(t))
    }
    ,
    v.isNaN = function(t) {
        return v.isNumber(t) && t !== +t
    }
    ,
    v.isBoolean = function(t) {
        return !0 === t || !1 === t || "[object Boolean]" === h.call(t)
    }
    ,
    v.isNull = function(t) {
        return null === t
    }
    ,
    v.isUndefined = function(t) {
        return void 0 === t
    }
    ,
    v.has = function(t, e) {
        return null != t && p.call(t, e)
    }
    ,
    v.noConflict = function() {
        return n._ = s,
        this
    }
    ,
    v.identity = function(t) {
        return t
    }
    ,
    v.constant = function(t) {
        return function() {
            return t
        }
    }
    ,
    v.noop = function() {}
    ,
    v.property = k,
    v.propertyOf = function(t) {
        return null == t ? function() {}
        : function(e) {
            return t[e]
        }
    }
    ,
    v.matcher = v.matches = function(t) {
        return t = v.extendOwn({}, t),
        function(e) {
            return v.isMatch(e, t)
        }
    }
    ,
    v.times = function(t, e, r) {
        var i = Array(Math.max(0, t));
        e = b(e, r, 1);
        for (var n = 0; n < t; n++)
            i[n] = e(n);
        return i
    }
    ,
    v.random = function(t, e) {
        return null == e && (e = t,
        t = 0),
        t + Math.floor(Math.random() * (e - t + 1))
    }
    ,
    v.now = Date.now || function() {
        return (new Date).getTime()
    }
    ;
    var E = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
    }
      , F = v.invert(E)
      , L = function(t) {
        var e = function(e) {
            return t[e]
        }
          , r = "(?:" + v.keys(t).join("|") + ")"
          , i = RegExp(r)
          , n = RegExp(r, "g");
        return function(t) {
            return t = null == t ? "" : "" + t,
            i.test(t) ? t.replace(n, e) : t
        }
    };
    v.escape = L(E),
    v.unescape = L(F),
    v.result = function(t, e, r) {
        var i = null == t ? void 0 : t[e];
        return void 0 === i && (i = r),
        v.isFunction(i) ? i.call(t) : i
    }
    ;
    var M = 0;
    v.uniqueId = function(t) {
        var e = ++M + "";
        return t ? t + e : e
    }
    ,
    v.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var $ = /(.)^/
      , D = {
        "'": "'",
        "\\": "\\",
        "\r": "r",
        "\n": "n",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }
      , R = /\\|'|\r|\n|\u2028|\u2029/g
      , V = function(t) {
        return "\\" + D[t]
    };
    v.template = function(t, e, r) {
        !e && r && (e = r),
        e = v.defaults({}, e, v.templateSettings);
        var i = RegExp([(e.escape || $).source, (e.interpolate || $).source, (e.evaluate || $).source].join("|") + "|$", "g")
          , n = 0
          , s = "__p+='";
        t.replace(i, (function(e, r, i, o, a) {
            return s += t.slice(n, a).replace(R, V),
            n = a + e.length,
            r ? s += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : i ? s += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : o && (s += "';\n" + o + "\n__p+='"),
            e
        }
        )),
        s += "';\n",
        e.variable || (s = "with(obj||{}){\n" + s + "}\n"),
        s = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + s + "return __p;\n";
        try {
            var o = new Function(e.variable || "obj","_",s)
        } catch (t) {
            throw t.source = s,
            t
        }
        var a = function(t) {
            return o.call(this, t, v)
        }
          , c = e.variable || "obj";
        return a.source = "function(" + c + "){\n" + s + "}",
        a
    }
    ,
    v.chain = function(t) {
        var e = v(t);
        return e._chain = !0,
        e
    }
    ;
    var H = function(t, e) {
        return t._chain ? v(e).chain() : e
    };
    v.mixin = function(t) {
        v.each(v.functions(t), (function(e) {
            var r = v[e] = t[e];
            v.prototype[e] = function() {
                var t = [this._wrapped];
                return l.apply(t, arguments),
                H(this, r.apply(v, t))
            }
        }
        ))
    }
    ,
    v.mixin(v),
    v.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], (function(t) {
        var e = o[t];
        v.prototype[t] = function() {
            var r = this._wrapped;
            return e.apply(r, arguments),
            "shift" !== t && "splice" !== t || 0 !== r.length || delete r[0],
            H(this, r)
        }
    }
    )),
    v.each(["concat", "join", "slice"], (function(t) {
        var e = o[t];
        v.prototype[t] = function() {
            return H(this, e.apply(this._wrapped, arguments))
        }
    }
    )),
    v.prototype.value = function() {
        return this._wrapped
    }
    ,
    v.prototype.valueOf = v.prototype.toJSON = v.prototype.value,
    v.prototype.toString = function() {
        return "" + this._wrapped
    }
    ,
    "function" == typeof define && define.amd && define("underscore", [], (function() {
        return v
    }
    ))
}
).call(this),
function(t, e) {
    var r = []
      , i = []
      , n = []
      , s = {
        gsub: function(t, e, r) {
            var i = new RegExp(e.source || e,"gi");
            return i.test(t) ? t.replace(i, r) : null
        },
        plural: function(t, e) {
            r.unshift([t, e])
        },
        pluralize: function(i, s, o) {
            var a;
            if (s !== e)
                s = parseFloat(s),
                a = 1 === s ? this.singularize(i) : this.pluralize(i),
                a = o ? [s, a].join(" ") : a;
            else {
                if (t(n).include(i))
                    return i;
                a = i,
                t(r).detect((function(t) {
                    var e = this.gsub(i, t[0], t[1]);
                    return !!e && (a = e)
                }
                ), this)
            }
            return a
        },
        singular: function(t, e) {
            i.unshift([t, e])
        },
        singularize: function(e) {
            if (t(n).include(e))
                return e;
            var r = e;
            return t(i).detect((function(t) {
                var i = this.gsub(e, t[0], t[1]);
                return !!i && (r = i)
            }
            ), this),
            r
        },
        irregular: function(t, e) {
            this.plural("\\b" + t + "\\b", e),
            this.singular("\\b" + e + "\\b", t)
        },
        uncountable: function(t) {
            n.unshift(t)
        },
        ordinalize: function(t) {
            if (isNaN(t))
                return t;
            var e = (t = t.toString()).slice(-1)
              , r = t.slice(-2);
            if ("11" === r || "12" === r || "13" === r)
                return t + "th";
            switch (e) {
            case "1":
                return t + "st";
            case "2":
                return t + "nd";
            case "3":
                return t + "rd";
            default:
                return t + "th"
            }
        },
        titleize: function(t) {
            return "string" != typeof t ? t : t.replace(/\S+/g, (function(t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }
            ))
        },
        resetInflections: function() {
            return r = [],
            i = [],
            n = [],
            this.plural(/$/, "s"),
            this.plural(/s$/, "s"),
            this.plural(/(ax|test)is$/, "$1es"),
            this.plural(/(octop|vir)us$/, "$1i"),
            this.plural(/(octop|vir)i$/, "$1i"),
            this.plural(/(alias|status)$/, "$1es"),
            this.plural(/(bu)s$/, "$1ses"),
            this.plural(/(buffal|tomat)o$/, "$1oes"),
            this.plural(/([ti])um$/, "$1a"),
            this.plural(/([ti])a$/, "$1a"),
            this.plural(/sis$/, "ses"),
            this.plural(/(?:([^f])fe|([lr])?f)$/, "$1$2ves"),
            this.plural(/(hive)$/, "$1s"),
            this.plural(/([^aeiouy]|qu)y$/, "$1ies"),
            this.plural(/(x|ch|ss|sh)$/, "$1es"),
            this.plural(/(matr|vert|ind)(?:ix|ex)$/, "$1ices"),
            this.plural(/([m|l])ouse$/, "$1ice"),
            this.plural(/([m|l])ice$/, "$1ice"),
            this.plural(/^(ox)$/, "$1en"),
            this.plural(/^(oxen)$/, "$1"),
            this.plural(/(quiz)$/, "$1zes"),
            this.singular(/s$/, ""),
            this.singular(/(n)ews$/, "$1ews"),
            this.singular(/([ti])a$/, "$1um"),
            this.singular(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)ses$/, "$1$2sis"),
            this.singular(/(^analy)ses$/, "$1sis"),
            this.singular(/([^f])ves$/, "$1fe"),
            this.singular(/(hive)s$/, "$1"),
            this.singular(/(tive)s$/, "$1"),
            this.singular(/([lr])ves$/, "$1f"),
            this.singular(/([^aeiouy]|qu)ies$/, "$1y"),
            this.singular(/(s)eries$/, "$1eries"),
            this.singular(/(m)ovies$/, "$1ovie"),
            this.singular(/(x|ch|ss|sh)es$/, "$1"),
            this.singular(/([m|l])ice$/, "$1ouse"),
            this.singular(/(bus)es$/, "$1"),
            this.singular(/(o)es$/, "$1"),
            this.singular(/(shoe)s$/, "$1"),
            this.singular(/(cris|ax|test)es$/, "$1is"),
            this.singular(/(octop|vir)i$/, "$1us"),
            this.singular(/(alias|status)es$/, "$1"),
            this.singular(/^(ox)en/, "$1"),
            this.singular(/(vert|ind)ices$/, "$1ex"),
            this.singular(/(matr)ices$/, "$1ix"),
            this.singular(/(quiz)zes$/, "$1"),
            this.singular(/(database)s$/, "$1"),
            this.irregular("person", "people"),
            this.irregular("man", "men"),
            this.irregular("child", "children"),
            this.irregular("sex", "sexes"),
            this.irregular("move", "moves"),
            this.irregular("cow", "kine"),
            this.uncountable("equipment"),
            this.uncountable("information"),
            this.uncountable("rice"),
            this.uncountable("money"),
            this.uncountable("species"),
            this.uncountable("series"),
            this.uncountable("fish"),
            this.uncountable("sheep"),
            this.uncountable("jeans"),
            this
        }
    };
    t.mixin(s.resetInflections())
}(_),
function(t) {
    var e = "object" == typeof self && self.self == self && self || "object" == typeof global && global.global == global && global;
    if ("function" == typeof define && define.amd)
        define(["underscore", "jquery", "exports"], (function(r, i, n) {
            e.Backbone = t(e, n, r, i)
        }
        ));
    else if ("undefined" != typeof exports) {
        var r, i = require("underscore");
        try {
            r = require("jquery")
        } catch (t) {}
        t(e, exports, i, r)
    } else
        e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$)
}((function(t, e, r, i) {
    var n = t.Backbone
      , s = [].slice;
    e.VERSION = "1.2.1",
    e.$ = i,
    e.noConflict = function() {
        return t.Backbone = n,
        this
    }
    ,
    e.emulateHTTP = !1,
    e.emulateJSON = !1;
    var o = function(t, e, i) {
        switch (t) {
        case 1:
            return function() {
                return r[e](this[i])
            }
            ;
        case 2:
            return function(t) {
                return r[e](this[i], t)
            }
            ;
        case 3:
            return function(t, n) {
                return r[e](this[i], t, n)
            }
            ;
        case 4:
            return function(t, n, s) {
                return r[e](this[i], t, n, s)
            }
            ;
        default:
            return function() {
                var t = s.call(arguments);
                return t.unshift(this[i]),
                r[e].apply(r, t)
            }
        }
    }
      , a = function(t, e, i) {
        r.each(e, (function(e, n) {
            r[n] && (t.prototype[n] = o(e, n, i))
        }
        ))
    }
      , c = e.Events = {}
      , l = /\s+/
      , u = function(t, e, i, n, s) {
        var o, a = 0;
        if (i && "object" == typeof i) {
            void 0 !== n && "context"in s && void 0 === s.context && (s.context = n);
            for (o = r.keys(i); a < o.length; a++)
                e = t(e, o[a], i[o[a]], s)
        } else if (i && l.test(i))
            for (o = i.split(l); a < o.length; a++)
                e = t(e, o[a], n, s);
        else
            e = t(e, i, n, s);
        return e
    };
    c.on = function(t, e, r) {
        return h(this, t, e, r)
    }
    ;
    var h = function(t, e, r, i, n) {
        (t._events = u(p, t._events || {}, e, r, {
            context: i,
            ctx: t,
            listening: n
        }),
        n) && ((t._listeners || (t._listeners = {}))[n.id] = n);
        return t
    };
    c.listenTo = function(t, e, i) {
        if (!t)
            return this;
        var n = t._listenId || (t._listenId = r.uniqueId("l"))
          , s = this._listeningTo || (this._listeningTo = {})
          , o = s[n];
        if (!o) {
            var a = this._listenId || (this._listenId = r.uniqueId("l"));
            o = s[n] = {
                obj: t,
                objId: n,
                id: a,
                listeningTo: s,
                count: 0
            }
        }
        return h(t, e, i, this, o),
        this
    }
    ;
    var p = function(t, e, r, i) {
        if (r) {
            var n = t[e] || (t[e] = [])
              , s = i.context
              , o = i.ctx
              , a = i.listening;
            a && a.count++,
            n.push({
                callback: r,
                context: s,
                ctx: s || o,
                listening: a
            })
        }
        return t
    };
    c.off = function(t, e, r) {
        return this._events ? (this._events = u(d, this._events, t, e, {
            context: r,
            listeners: this._listeners
        }),
        this) : this
    }
    ,
    c.stopListening = function(t, e, i) {
        var n = this._listeningTo;
        if (!n)
            return this;
        for (var s = t ? [t._listenId] : r.keys(n), o = 0; o < s.length; o++) {
            var a = n[s[o]];
            if (!a)
                break;
            a.obj.off(e, i, this)
        }
        return r.isEmpty(n) && (this._listeningTo = void 0),
        this
    }
    ;
    var d = function(t, e, i, n) {
        if (t) {
            var s, o = 0, a = n.context, c = n.listeners;
            if (e || i || a) {
                for (var l = e ? [e] : r.keys(t); o < l.length; o++) {
                    var u = t[e = l[o]];
                    if (!u)
                        break;
                    for (var h = [], p = 0; p < u.length; p++) {
                        var d = u[p];
                        i && i !== d.callback && i !== d.callback._callback || a && a !== d.context ? h.push(d) : (s = d.listening) && 0 == --s.count && (delete c[s.id],
                        delete s.listeningTo[s.objId])
                    }
                    h.length ? t[e] = h : delete t[e]
                }
                return r.size(t) ? t : void 0
            }
            for (var f = r.keys(c); o < f.length; o++)
                delete c[(s = c[f[o]]).id],
                delete s.listeningTo[s.objId]
        }
    };
    c.once = function(t, e, i) {
        var n = u(f, {}, t, e, r.bind(this.off, this));
        return this.on(n, void 0, i)
    }
    ,
    c.listenToOnce = function(t, e, i) {
        var n = u(f, {}, e, i, r.bind(this.stopListening, this, t));
        return this.listenTo(t, n)
    }
    ;
    var f = function(t, e, i, n) {
        if (i) {
            var s = t[e] = r.once((function() {
                n(e, s),
                i.apply(this, arguments)
            }
            ));
            s._callback = i
        }
        return t
    };
    c.trigger = function(t) {
        if (!this._events)
            return this;
        for (var e = Math.max(0, arguments.length - 1), r = Array(e), i = 0; i < e; i++)
            r[i] = arguments[i + 1];
        return u(m, this._events, t, void 0, r),
        this
    }
    ;
    var m = function(t, e, r, i) {
        if (t) {
            var n = t[e]
              , s = t.all;
            n && s && (s = s.slice()),
            n && g(n, i),
            s && g(s, [e].concat(i))
        }
        return t
    }
      , g = function(t, e) {
        var r, i = -1, n = t.length, s = e[0], o = e[1], a = e[2];
        switch (e.length) {
        case 0:
            for (; ++i < n; )
                (r = t[i]).callback.call(r.ctx);
            return;
        case 1:
            for (; ++i < n; )
                (r = t[i]).callback.call(r.ctx, s);
            return;
        case 2:
            for (; ++i < n; )
                (r = t[i]).callback.call(r.ctx, s, o);
            return;
        case 3:
            for (; ++i < n; )
                (r = t[i]).callback.call(r.ctx, s, o, a);
            return;
        default:
            for (; ++i < n; )
                (r = t[i]).callback.apply(r.ctx, e);
            return
        }
    };
    c.bind = c.on,
    c.unbind = c.off,
    r.extend(e, c);
    var y = e.Model = function(t, e) {
        var i = t || {};
        e || (e = {}),
        this.cid = r.uniqueId(this.cidPrefix),
        this.attributes = {},
        e.collection && (this.collection = e.collection),
        e.parse && (i = this.parse(i, e) || {}),
        i = r.defaults({}, i, r.result(this, "defaults")),
        this.set(i, e),
        this.changed = {},
        this.initialize.apply(this, arguments)
    }
    ;
    r.extend(y.prototype, c, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        cidPrefix: "c",
        initialize: function() {},
        toJSON: function() {
            return r.clone(this.attributes)
        },
        sync: function() {
            return e.sync.apply(this, arguments)
        },
        get: function(t) {
            return this.attributes[t]
        },
        escape: function(t) {
            return r.escape(this.get(t))
        },
        has: function(t) {
            return null != this.get(t)
        },
        matches: function(t) {
            return !!r.iteratee(t, this)(this.attributes)
        },
        set: function(t, e, i) {
            if (null == t)
                return this;
            var n;
            if ("object" == typeof t ? (n = t,
            i = e) : (n = {})[t] = e,
            i || (i = {}),
            !this._validate(n, i))
                return !1;
            var s = i.unset
              , o = i.silent
              , a = []
              , c = this._changing;
            this._changing = !0,
            c || (this._previousAttributes = r.clone(this.attributes),
            this.changed = {});
            var l = this.attributes
              , u = this.changed
              , h = this._previousAttributes;
            for (var p in this.idAttribute in n && (this.id = n[this.idAttribute]),
            n)
                e = n[p],
                r.isEqual(l[p], e) || a.push(p),
                r.isEqual(h[p], e) ? delete u[p] : u[p] = e,
                s ? delete l[p] : l[p] = e;
            if (!o) {
                a.length && (this._pending = i);
                for (var d = 0; d < a.length; d++)
                    this.trigger("change:" + a[d], this, l[a[d]], i)
            }
            if (c)
                return this;
            if (!o)
                for (; this._pending; )
                    i = this._pending,
                    this._pending = !1,
                    this.trigger("change", this, i);
            return this._pending = !1,
            this._changing = !1,
            this
        },
        unset: function(t, e) {
            return this.set(t, void 0, r.extend({}, e, {
                unset: !0
            }))
        },
        clear: function(t) {
            var e = {};
            for (var i in this.attributes)
                e[i] = void 0;
            return this.set(e, r.extend({}, t, {
                unset: !0
            }))
        },
        hasChanged: function(t) {
            return null == t ? !r.isEmpty(this.changed) : r.has(this.changed, t)
        },
        changedAttributes: function(t) {
            if (!t)
                return !!this.hasChanged() && r.clone(this.changed);
            var e = this._changing ? this._previousAttributes : this.attributes
              , i = {};
            for (var n in t) {
                var s = t[n];
                r.isEqual(e[n], s) || (i[n] = s)
            }
            return !!r.size(i) && i
        },
        previous: function(t) {
            return null != t && this._previousAttributes ? this._previousAttributes[t] : null
        },
        previousAttributes: function() {
            return r.clone(this._previousAttributes)
        },
        fetch: function(t) {
            t = r.extend({
                parse: !0
            }, t);
            var e = this
              , i = t.success;
            return t.success = function(r) {
                var n = t.parse ? e.parse(r, t) : r;
                if (!e.set(n, t))
                    return !1;
                i && i.call(t.context, e, r, t),
                e.trigger("sync", e, r, t)
            }
            ,
            $(this, t),
            this.sync("read", this, t)
        },
        save: function(t, e, i) {
            var n;
            null == t || "object" == typeof t ? (n = t,
            i = e) : (n = {})[t] = e;
            var s = (i = r.extend({
                validate: !0,
                parse: !0
            }, i)).wait;
            if (n && !s) {
                if (!this.set(n, i))
                    return !1
            } else if (!this._validate(n, i))
                return !1;
            var o = this
              , a = i.success
              , c = this.attributes;
            i.success = function(t) {
                o.attributes = c;
                var e = i.parse ? o.parse(t, i) : t;
                if (s && (e = r.extend({}, n, e)),
                e && !o.set(e, i))
                    return !1;
                a && a.call(i.context, o, t, i),
                o.trigger("sync", o, t, i)
            }
            ,
            $(this, i),
            n && s && (this.attributes = r.extend({}, c, n));
            var l = this.isNew() ? "create" : i.patch ? "patch" : "update";
            "patch" !== l || i.attrs || (i.attrs = n);
            var u = this.sync(l, this, i);
            return this.attributes = c,
            u
        },
        destroy: function(t) {
            t = t ? r.clone(t) : {};
            var e = this
              , i = t.success
              , n = t.wait
              , s = function() {
                e.stopListening(),
                e.trigger("destroy", e, e.collection, t)
            };
            t.success = function(r) {
                n && s(),
                i && i.call(t.context, e, r, t),
                e.isNew() || e.trigger("sync", e, r, t)
            }
            ;
            var o = !1;
            return this.isNew() ? r.defer(t.success) : ($(this, t),
            o = this.sync("delete", this, t)),
            n || s(),
            o
        },
        url: function() {
            var t = r.result(this, "urlRoot") || r.result(this.collection, "url") || M();
            if (this.isNew())
                return t;
            var e = this.get(this.idAttribute);
            return t.replace(/[^\/]$/, "$&/") + encodeURIComponent(e)
        },
        parse: function(t) {
            return t
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return !this.has(this.idAttribute)
        },
        isValid: function(t) {
            return this._validate({}, r.defaults({
                validate: !0
            }, t))
        },
        _validate: function(t, e) {
            if (!e.validate || !this.validate)
                return !0;
            t = r.extend({}, this.attributes, t);
            var i = this.validationError = this.validate(t, e) || null;
            return !i || (this.trigger("invalid", this, i, r.extend(e, {
                validationError: i
            })),
            !1)
        }
    }),
    a(y, {
        keys: 1,
        values: 1,
        pairs: 1,
        invert: 1,
        pick: 0,
        omit: 0,
        chain: 1,
        isEmpty: 1
    }, "attributes");
    var v = e.Collection = function(t, e) {
        e || (e = {}),
        e.model && (this.model = e.model),
        void 0 !== e.comparator && (this.comparator = e.comparator),
        this._reset(),
        this.initialize.apply(this, arguments),
        t && this.reset(t, r.extend({
            silent: !0
        }, e))
    }
      , b = {
        add: !0,
        remove: !0,
        merge: !0
    }
      , w = {
        add: !0,
        remove: !1
    };
    r.extend(v.prototype, c, {
        model: y,
        initialize: function() {},
        toJSON: function(t) {
            return this.map((function(e) {
                return e.toJSON(t)
            }
            ))
        },
        sync: function() {
            return e.sync.apply(this, arguments)
        },
        add: function(t, e) {
            return this.set(t, r.extend({
                merge: !1
            }, e, w))
        },
        remove: function(t, e) {
            e = r.extend({}, e);
            var i = !r.isArray(t);
            t = i ? [t] : r.clone(t);
            var n = this._removeModels(t, e);
            return !e.silent && n && this.trigger("update", this, e),
            i ? n[0] : n
        },
        set: function(t, e) {
            (e = r.defaults({}, e, b)).parse && !this._isModel(t) && (t = this.parse(t, e));
            var i, n, s, o, a, c = !r.isArray(t);
            t = c ? t ? [t] : [] : t.slice();
            var l = e.at;
            null != l && (l = +l),
            l < 0 && (l += this.length + 1);
            for (var u = this.comparator && null == l && !1 !== e.sort, h = r.isString(this.comparator) ? this.comparator : null, p = [], d = [], f = {}, m = e.add, g = e.merge, y = e.remove, v = !(u || !m || !y) && [], w = !1, _ = 0; _ < t.length; _++) {
                if (s = t[_],
                o = this.get(s))
                    y && (f[o.cid] = !0),
                    g && s !== o && (s = this._isModel(s) ? s.attributes : s,
                    e.parse && (s = o.parse(s, e)),
                    o.set(s, e),
                    u && !a && o.hasChanged(h) && (a = !0)),
                    t[_] = o;
                else if (m) {
                    if (!(n = t[_] = this._prepareModel(s, e)))
                        continue;
                    p.push(n),
                    this._addReference(n, e)
                }
                (n = o || n) && (i = this.modelId(n.attributes),
                !v || !n.isNew() && f[i] || (v.push(n),
                w = w || !this.models[_] || n.cid !== this.models[_].cid),
                f[i] = !0)
            }
            if (y) {
                for (_ = 0; _ < this.length; _++)
                    f[(n = this.models[_]).cid] || d.push(n);
                d.length && this._removeModels(d, e)
            }
            if (p.length || w)
                if (u && (a = !0),
                this.length += p.length,
                null != l)
                    for (_ = 0; _ < p.length; _++)
                        this.models.splice(l + _, 0, p[_]);
                else {
                    v && (this.models.length = 0);
                    var S = v || p;
                    for (_ = 0; _ < S.length; _++)
                        this.models.push(S[_])
                }
            if (a && this.sort({
                silent: !0
            }),
            !e.silent) {
                var k = null != l ? r.clone(e) : e;
                for (_ = 0; _ < p.length; _++)
                    null != l && (k.index = l + _),
                    (n = p[_]).trigger("add", n, this, k);
                (a || w) && this.trigger("sort", this, e),
                (p.length || d.length) && this.trigger("update", this, e)
            }
            return c ? t[0] : t
        },
        reset: function(t, e) {
            e = e ? r.clone(e) : {};
            for (var i = 0; i < this.models.length; i++)
                this._removeReference(this.models[i], e);
            return e.previousModels = this.models,
            this._reset(),
            t = this.add(t, r.extend({
                silent: !0
            }, e)),
            e.silent || this.trigger("reset", this, e),
            t
        },
        push: function(t, e) {
            return this.add(t, r.extend({
                at: this.length
            }, e))
        },
        pop: function(t) {
            var e = this.at(this.length - 1);
            return this.remove(e, t)
        },
        unshift: function(t, e) {
            return this.add(t, r.extend({
                at: 0
            }, e))
        },
        shift: function(t) {
            var e = this.at(0);
            return this.remove(e, t)
        },
        slice: function() {
            return s.apply(this.models, arguments)
        },
        get: function(t) {
            if (null != t) {
                var e = this.modelId(this._isModel(t) ? t.attributes : t);
                return this._byId[t] || this._byId[e] || this._byId[t.cid]
            }
        },
        at: function(t) {
            return t < 0 && (t += this.length),
            this.models[t]
        },
        where: function(t, e) {
            var i = r.matches(t);
            return this[e ? "find" : "filter"]((function(t) {
                return i(t.attributes)
            }
            ))
        },
        findWhere: function(t) {
            return this.where(t, !0)
        },
        sort: function(t) {
            if (!this.comparator)
                throw new Error("Cannot sort a set without a comparator");
            return t || (t = {}),
            r.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(r.bind(this.comparator, this)),
            t.silent || this.trigger("sort", this, t),
            this
        },
        pluck: function(t) {
            return r.invoke(this.models, "get", t)
        },
        fetch: function(t) {
            var e = (t = r.extend({
                parse: !0
            }, t)).success
              , i = this;
            return t.success = function(r) {
                var n = t.reset ? "reset" : "set";
                i[n](r, t),
                e && e.call(t.context, i, r, t),
                i.trigger("sync", i, r, t)
            }
            ,
            $(this, t),
            this.sync("read", this, t)
        },
        create: function(t, e) {
            var i = (e = e ? r.clone(e) : {}).wait;
            if (!(t = this._prepareModel(t, e)))
                return !1;
            i || this.add(t, e);
            var n = this
              , s = e.success;
            return e.success = function(t, e, r) {
                i && n.add(t, r),
                s && s.call(r.context, t, e, r)
            }
            ,
            t.save(null, e),
            t
        },
        parse: function(t) {
            return t
        },
        clone: function() {
            return new this.constructor(this.models,{
                model: this.model,
                comparator: this.comparator
            })
        },
        modelId: function(t) {
            return t[this.model.prototype.idAttribute || "id"]
        },
        _reset: function() {
            this.length = 0,
            this.models = [],
            this._byId = {}
        },
        _prepareModel: function(t, e) {
            if (this._isModel(t))
                return t.collection || (t.collection = this),
                t;
            (e = e ? r.clone(e) : {}).collection = this;
            var i = new this.model(t,e);
            return i.validationError ? (this.trigger("invalid", this, i.validationError, e),
            !1) : i
        },
        _removeModels: function(t, e) {
            for (var r = [], i = 0; i < t.length; i++) {
                var n = this.get(t[i]);
                if (n) {
                    var s = this.indexOf(n);
                    this.models.splice(s, 1),
                    this.length--,
                    e.silent || (e.index = s,
                    n.trigger("remove", n, this, e)),
                    r.push(n),
                    this._removeReference(n, e)
                }
            }
            return !!r.length && r
        },
        _isModel: function(t) {
            return t instanceof y
        },
        _addReference: function(t) {
            this._byId[t.cid] = t;
            var e = this.modelId(t.attributes);
            null != e && (this._byId[e] = t),
            t.on("all", this._onModelEvent, this)
        },
        _removeReference: function(t) {
            delete this._byId[t.cid];
            var e = this.modelId(t.attributes);
            null != e && delete this._byId[e],
            this === t.collection && delete t.collection,
            t.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(t, e, r, i) {
            if ("add" !== t && "remove" !== t || r === this) {
                if ("destroy" === t && this.remove(e, i),
                "change" === t) {
                    var n = this.modelId(e.previousAttributes())
                      , s = this.modelId(e.attributes);
                    n !== s && (null != n && delete this._byId[n],
                    null != s && (this._byId[s] = e))
                }
                this.trigger.apply(this, arguments)
            }
        }
    }),
    a(v, {
        forEach: 3,
        each: 3,
        map: 3,
        collect: 3,
        reduce: 4,
        foldl: 4,
        inject: 4,
        reduceRight: 4,
        foldr: 4,
        find: 3,
        detect: 3,
        filter: 3,
        select: 3,
        reject: 3,
        every: 3,
        all: 3,
        some: 3,
        any: 3,
        include: 2,
        contains: 2,
        invoke: 0,
        max: 3,
        min: 3,
        toArray: 1,
        size: 1,
        first: 3,
        head: 3,
        take: 3,
        initial: 3,
        rest: 3,
        tail: 3,
        drop: 3,
        last: 3,
        without: 0,
        difference: 0,
        indexOf: 3,
        shuffle: 1,
        lastIndexOf: 3,
        isEmpty: 1,
        chain: 1,
        sample: 3,
        partition: 3
    }, "models");
    var _ = ["groupBy", "countBy", "sortBy", "indexBy"];
    r.each(_, (function(t) {
        r[t] && (v.prototype[t] = function(e, i) {
            var n = r.isFunction(e) ? e : function(t) {
                return t.get(e)
            }
            ;
            return r[t](this.models, n, i)
        }
        )
    }
    ));
    var S = e.View = function(t) {
        this.cid = r.uniqueId("view"),
        r.extend(this, r.pick(t, j)),
        this._ensureElement(),
        this.initialize.apply(this, arguments)
    }
      , k = /^(\S+)\s*(.*)$/
      , j = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    r.extend(S.prototype, c, {
        tagName: "div",
        $: function(t) {
            return this.$el.find(t)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            return this._removeElement(),
            this.stopListening(),
            this
        },
        _removeElement: function() {
            this.$el.remove()
        },
        setElement: function(t) {
            return this.undelegateEvents(),
            this._setElement(t),
            this.delegateEvents(),
            this
        },
        _setElement: function(t) {
            this.$el = t instanceof e.$ ? t : e.$(t),
            this.el = this.$el[0]
        },
        delegateEvents: function(t) {
            if (t || (t = r.result(this, "events")),
            !t)
                return this;
            for (var e in this.undelegateEvents(),
            t) {
                var i = t[e];
                if (r.isFunction(i) || (i = this[i]),
                i) {
                    var n = e.match(k);
                    this.delegate(n[1], n[2], r.bind(i, this))
                }
            }
            return this
        },
        delegate: function(t, e, r) {
            return this.$el.on(t + ".delegateEvents" + this.cid, e, r),
            this
        },
        undelegateEvents: function() {
            return this.$el && this.$el.off(".delegateEvents" + this.cid),
            this
        },
        undelegate: function(t, e, r) {
            return this.$el.off(t + ".delegateEvents" + this.cid, e, r),
            this
        },
        _createElement: function(t) {
            return document.createElement(t)
        },
        _ensureElement: function() {
            if (this.el)
                this.setElement(r.result(this, "el"));
            else {
                var t = r.extend({}, r.result(this, "attributes"));
                this.id && (t.id = r.result(this, "id")),
                this.className && (t.class = r.result(this, "className")),
                this.setElement(this._createElement(r.result(this, "tagName"))),
                this._setAttributes(t)
            }
        },
        _setAttributes: function(t) {
            this.$el.attr(t)
        }
    }),
    e.sync = function(t, i, n) {
        var s = A[t];
        r.defaults(n || (n = {}), {
            emulateHTTP: e.emulateHTTP,
            emulateJSON: e.emulateJSON
        });
        var o = {
            type: s,
            dataType: "json"
        };
        if (n.url || (o.url = r.result(i, "url") || M()),
        null != n.data || !i || "create" !== t && "update" !== t && "patch" !== t || (o.contentType = "application/json",
        o.data = JSON.stringify(n.attrs || i.toJSON(n))),
        n.emulateJSON && (o.contentType = "application/x-www-form-urlencoded",
        o.data = o.data ? {
            model: o.data
        } : {}),
        n.emulateHTTP && ("PUT" === s || "DELETE" === s || "PATCH" === s)) {
            o.type = "POST",
            n.emulateJSON && (o.data._method = s);
            var a = n.beforeSend;
            n.beforeSend = function(t) {
                if (t.setRequestHeader("X-HTTP-Method-Override", s),
                a)
                    return a.apply(this, arguments)
            }
        }
        "GET" === o.type || n.emulateJSON || (o.processData = !1);
        var c = n.error;
        n.error = function(t, e, r) {
            n.textStatus = e,
            n.errorThrown = r,
            c && c.call(n.context, t, e, r)
        }
        ;
        var l = n.xhr = e.ajax(r.extend(o, n));
        return i.trigger("request", i, l, n),
        l
    }
    ;
    var A = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        delete: "DELETE",
        read: "GET"
    };
    e.ajax = function() {
        return e.$.ajax.apply(e.$, arguments)
    }
    ;
    var x = e.Router = function(t) {
        t || (t = {}),
        t.routes && (this.routes = t.routes),
        this._bindRoutes(),
        this.initialize.apply(this, arguments)
    }
      , T = /\((.*?)\)/g
      , J = /(\(\?)?:\w+/g
      , C = /\*\w+/g
      , P = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    r.extend(x.prototype, c, {
        initialize: function() {},
        route: function(t, i, n) {
            r.isRegExp(t) || (t = this._routeToRegExp(t)),
            r.isFunction(i) && (n = i,
            i = ""),
            n || (n = this[i]);
            var s = this;
            return e.history.route(t, (function(r) {
                var o = s._extractParameters(t, r);
                !1 !== s.execute(n, o, i) && (s.trigger.apply(s, ["route:" + i].concat(o)),
                s.trigger("route", i, o),
                e.history.trigger("route", s, i, o))
            }
            )),
            this
        },
        execute: function(t, e) {
            t && t.apply(this, e)
        },
        navigate: function(t, r) {
            return e.history.navigate(t, r),
            this
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = r.result(this, "routes");
                for (var t, e = r.keys(this.routes); null != (t = e.pop()); )
                    this.route(t, this.routes[t])
            }
        },
        _routeToRegExp: function(t) {
            return t = t.replace(P, "\\$&").replace(T, "(?:$1)?").replace(J, (function(t, e) {
                return e ? t : "([^/?]+)"
            }
            )).replace(C, "([^?]*?)"),
            new RegExp("^" + t + "(?:\\?([\\s\\S]*))?$")
        },
        _extractParameters: function(t, e) {
            var i = t.exec(e).slice(1);
            return r.map(i, (function(t, e) {
                return e === i.length - 1 ? t || null : t ? decodeURIComponent(t) : null
            }
            ))
        }
    });
    var O = e.History = function() {
        this.handlers = [],
        r.bindAll(this, "checkUrl"),
        "undefined" != typeof window && (this.location = window.location,
        this.history = window.history)
    }
      , I = /^[#\/]|\s+$/g
      , E = /^\/+|\/+$/g
      , F = /#.*$/;
    O.started = !1,
    r.extend(O.prototype, c, {
        interval: 50,
        atRoot: function() {
            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root && !this.getSearch()
        },
        matchRoot: function() {
            return this.decodeFragment(this.location.pathname).slice(0, this.root.length - 1) + "/" === this.root
        },
        decodeFragment: function(t) {
            return decodeURI(t.replace(/%25/g, "%2525"))
        },
        getSearch: function() {
            var t = this.location.href.replace(/#.*/, "").match(/\?.+/);
            return t ? t[0] : ""
        },
        getHash: function(t) {
            var e = (t || this).location.href.match(/#(.*)$/);
            return e ? e[1] : ""
        },
        getPath: function() {
            var t = this.decodeFragment(this.location.pathname + this.getSearch()).slice(this.root.length - 1);
            return "/" === t.charAt(0) ? t.slice(1) : t
        },
        getFragment: function(t) {
            return null == t && (t = this._usePushState || !this._wantsHashChange ? this.getPath() : this.getHash()),
            t.replace(I, "")
        },
        start: function(t) {
            if (O.started)
                throw new Error("Backbone.history has already been started");
            if (O.started = !0,
            this.options = r.extend({
                root: "/"
            }, this.options, t),
            this.root = this.options.root,
            this._wantsHashChange = !1 !== this.options.hashChange,
            this._hasHashChange = "onhashchange"in window,
            this._useHashChange = this._wantsHashChange && this._hasHashChange,
            this._wantsPushState = !!this.options.pushState,
            this._hasPushState = !(!this.history || !this.history.pushState),
            this._usePushState = this._wantsPushState && this._hasPushState,
            this.fragment = this.getFragment(),
            this.root = ("/" + this.root + "/").replace(E, "/"),
            this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot()) {
                    var e = this.root.slice(0, -1) || "/";
                    return this.location.replace(e + "#" + this.getPath()),
                    !0
                }
                this._hasPushState && this.atRoot() && this.navigate(this.getHash(), {
                    replace: !0
                })
            }
            if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
                this.iframe = document.createElement("iframe"),
                this.iframe.src = "javascript:0",
                this.iframe.style.display = "none",
                this.iframe.tabIndex = -1;
                var i = document.body
                  , n = i.insertBefore(this.iframe, i.firstChild).contentWindow;
                n.document.open(),
                n.document.close(),
                n.location.hash = "#" + this.fragment
            }
            var s = window.addEventListener || function(t, e) {
                return attachEvent("on" + t, e)
            }
            ;
            if (this._usePushState ? s("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe ? s("hashchange", this.checkUrl, !1) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
            !this.options.silent)
                return this.loadUrl()
        },
        stop: function() {
            var t = window.removeEventListener || function(t, e) {
                return detachEvent("on" + t, e)
            }
            ;
            this._usePushState ? t("popstate", this.checkUrl, !1) : this._useHashChange && !this.iframe && t("hashchange", this.checkUrl, !1),
            this.iframe && (document.body.removeChild(this.iframe),
            this.iframe = null),
            this._checkUrlInterval && clearInterval(this._checkUrlInterval),
            O.started = !1
        },
        route: function(t, e) {
            this.handlers.unshift({
                route: t,
                callback: e
            })
        },
        checkUrl: function() {
            var t = this.getFragment();
            if (t === this.fragment && this.iframe && (t = this.getHash(this.iframe.contentWindow)),
            t === this.fragment)
                return !1;
            this.iframe && this.navigate(t),
            this.loadUrl()
        },
        loadUrl: function(t) {
            return !!this.matchRoot() && (t = this.fragment = this.getFragment(t),
            r.any(this.handlers, (function(e) {
                if (e.route.test(t))
                    return e.callback(t),
                    !0
            }
            )))
        },
        navigate: function(t, e) {
            if (!O.started)
                return !1;
            e && !0 !== e || (e = {
                trigger: !!e
            }),
            t = this.getFragment(t || "");
            var r = this.root;
            "" !== t && "?" !== t.charAt(0) || (r = r.slice(0, -1) || "/");
            var i = r + t;
            if (t = this.decodeFragment(t.replace(F, "")),
            this.fragment !== t) {
                if (this.fragment = t,
                this._usePushState)
                    this.history[e.replace ? "replaceState" : "pushState"]({}, document.title, i);
                else {
                    if (!this._wantsHashChange)
                        return this.location.assign(i);
                    if (this._updateHash(this.location, t, e.replace),
                    this.iframe && t !== this.getHash(this.iframe.contentWindow)) {
                        var n = this.iframe.contentWindow;
                        e.replace || (n.document.open(),
                        n.document.close()),
                        this._updateHash(n.location, t, e.replace)
                    }
                }
                return e.trigger ? this.loadUrl(t) : void 0
            }
        },
        _updateHash: function(t, e, r) {
            if (r) {
                var i = t.href.replace(/(javascript:|#).*$/, "");
                t.replace(i + "#" + e)
            } else
                t.hash = "#" + e
        }
    }),
    e.history = new O;
    var L = function(t, e) {
        var i, n = this;
        i = t && r.has(t, "constructor") ? t.constructor : function() {
            return n.apply(this, arguments)
        }
        ,
        r.extend(i, n, e);
        var s = function() {
            this.constructor = i
        };
        return s.prototype = n.prototype,
        i.prototype = new s,
        t && r.extend(i.prototype, t),
        i.__super__ = n.prototype,
        i
    };
    y.extend = v.extend = x.extend = S.extend = O.extend = L;
    var M = function() {
        throw new Error('A "url" property or function must be specified')
    }
      , $ = function(t, e) {
        var r = e.error;
        e.error = function(i) {
            r && r.call(e.context, t, i, e),
            t.trigger("error", t, i, e)
        }
    };
    return e
}
)),
function(t, e) {
    "function" == typeof define && define.amd ? define(["underscore", "backbone"], (function(r, i) {
        return e(r || t._, i || t.Backbone)
    }
    )) : e(_, Backbone)
}(this, (function(t, e) {
    function r(e, r) {
        var i = null;
        try {
            i = r.url
        } catch (t) {}
        if (!i)
            try {
                i = t.result(e, "url")
            } catch (t) {}
        return i
    }
    function i(t, e) {
        return ":" !== t && ":" !== e && t !== e
    }
    var n = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        delete: "DELETE",
        read: "GET"
    };
    return e.vanillaSync = e.sync,
    e.sync = function(s, o, a) {
        var c = !1
          , l = document.createElement("a");
        l.href = document.URL;
        var u = document.createElement("a");
        if (u.href = r(o, a),
        "" !== u.host && l.host !== u.host && (c = !0),
        c && !e.$.support.cors) {
            var h = n[s];
            if (t.defaults(a || (a = {}), {
                emulateHTTP: e.emulateHTTP,
                emulateJSON: e.emulateJSON
            }),
            !a.emulateHTTP && ("update" === s || "patch" === s || "delete" === s))
                throw new Error("Backbone.CrossDomain cannot use PUT, PATCH, DELETE with XDomainRequest (IE) and emulateHTTP=false");
            var p = {
                type: h,
                dataType: "json",
                url: r(o, a)
            };
            if (!p.url)
                throw new Error("No URL!");
            if (i(l.protocol, u.protocol) && (p.url = p.url.replace(new RegExp(u.protocol), l.protocol)),
            null != a.data || !o || "create" !== s && "update" !== s && "patch" !== s || (p.data = JSON.stringify(a.attrs || o.toJSON(a))),
            a.emulateJSON && (p.data = p.data ? {
                model: p.data
            } : {}),
            a.emulateHTTP && ("PUT" === h || "DELETE" === h || "PATCH" === h)) {
                p.type = "POST",
                a.emulateJSON && (p.data._method = h);
                var d = a.beforeSend;
                a.beforeSend = function(t) {
                    if (d)
                        return d.apply(this, arguments)
                }
            }
            "GET" === p.type || a.emulateJSON || (p.processData = !1),
            "POST" === p.type && (p.data = e.$.param(e.$.parseJSON(p.data)));
            var f = a.xhr = new XDomainRequest
              , m = a.success
              , g = a.error;
            if (e.$.fn.jquery) {
                var y = e.$.Deferred()
                  , v = e.$.Callbacks("once memory");
                y.promise(f).complete = v.add
            }
            return f.onload = function() {
                var t = {};
                f.responseText && (t = e.$.parseJSON(f.responseText)),
                t && (y && y.resolveWith(this, [t, "success", f]),
                m(t))
            }
            ,
            f.onerror = function() {
                g && (g(o, f, a),
                y && y.rejectWith(this, [f, "error", g])),
                o.trigger("error", o, f, a)
            }
            ,
            "read" === s && a.data && (console.log("IE get params", JSON.stringify(a.data)),
            parameterized = e.$.param(a.data),
            p.url = p.url + "?" + parameterized),
            f.open(p.type, p.url),
            f.onprogress = function() {}
            ,
            f.ontimeout = function() {}
            ,
            setTimeout((function() {
                f.send(p.data)
            }
            ), 0),
            o.trigger("request", o, f, a),
            f
        }
        return e.vanillaSync.apply(this, arguments)
    }
    ,
    e
}
)),
function(t, e) {
    if ("function" == typeof define && define.amd)
        define(["underscore", "backbone"], (function(r, i) {
            return e(t, i, r)
        }
        ));
    else if ("undefined" != typeof exports) {
        var r = require("underscore")
          , i = require("backbone");
        e(t, i, r),
        "undefined" != typeof module && module.exports && (module.exports = i),
        exports = i
    } else
        e(t, t.Backbone, t._)
}(this, (function(t, e, r) {
    var i, n, s, o, a, c, l, u, h, p, d, f = {};
    i = e.Model,
    n = e.Collection,
    s = i.prototype,
    a = n.prototype,
    o = e.Events,
    e.Associations = {
        VERSION: "0.6.1"
    },
    e.Associations.scopes = [];
    var m = function() {
        return h
    }
      , g = function(t) {
        (!r.isString(t) || 1 > r.size(t)) && (t = "."),
        h = t,
        l = RegExp("[\\" + h + "\\[\\]]+", "g"),
        u = RegExp("[^\\" + h + "\\[\\]]+", "g")
    };
    try {
        Object.defineProperty(e.Associations, "SEPARATOR", {
            enumerable: !0,
            get: m,
            set: g
        })
    } catch (t) {}
    e.Associations.Many = e.Many = "Many",
    e.Associations.One = e.One = "One",
    e.Associations.Self = e.Self = "Self",
    e.Associations.SEPARATOR = ".",
    e.Associations.getSeparator = m,
    e.Associations.setSeparator = g,
    e.Associations.EVENTS_BUBBLE = !0,
    e.Associations.EVENTS_WILDCARD = !0,
    e.Associations.EVENTS_NC = !1,
    g(),
    c = e.AssociatedModel = e.Associations.AssociatedModel = i.extend({
        relations: void 0,
        _proxyCalls: void 0,
        on: function(t, i, n) {
            var s = o.on.apply(this, arguments);
            if (e.Associations.EVENTS_NC)
                return s;
            var a = /\s+/;
            return r.isString(t) && t && !a.test(t) && i && (a = v(t)) && (f[a] = void 0 === f[a] ? 1 : f[a] + 1),
            s
        },
        off: function(t, i, n) {
            if (e.Associations.EVENTS_NC)
                return o.off.apply(this, arguments);
            var s = /\s+/
              , a = this._events
              , c = {}
              , l = a ? r.keys(a) : []
              , u = !t && !i && !n
              , h = r.isString(t) && !s.test(t);
            if (u || h) {
                s = 0;
                for (var p = l.length; s < p; s++)
                    c[l[s]] = a[l[s]] ? a[l[s]].length : 0
            }
            var d = o.off.apply(this, arguments);
            if (u || h)
                for (s = 0,
                p = l.length; s < p; s++)
                    (u = v(l[s])) && (f[u] = a[l[s]] ? f[u] - (c[l[s]] - a[l[s]].length) : f[u] - c[l[s]]);
            return d
        },
        get: function(t) {
            var e = s.get.call(this, t);
            return e || this._getAttr.apply(this, arguments)
        },
        set: function(t, e, i) {
            var n;
            return r.isObject(t) || null == t ? (n = t,
            i = e) : (n = {})[t] = e,
            t = this._set(n, i),
            this._processPendingEvents(),
            t
        },
        _set: function(t, e) {
            var i, n, s, o, a = this;
            if (!t)
                return this;
            for (i in t)
                if (n || (n = {}),
                i.match(l)) {
                    var u = y(i);
                    o = r.initial(u),
                    u = u[u.length - 1],
                    (o = this.get(o))instanceof c && ((o = n[o.cid] || (n[o.cid] = {
                        model: o,
                        data: {}
                    })).data[u] = t[i])
                } else
                    (o = n[this.cid] || (n[this.cid] = {
                        model: this,
                        data: {}
                    })).data[i] = t[i];
            if (n)
                for (s in n)
                    o = n[s],
                    this._setAttr.call(o.model, o.data, e) || (a = !1);
            else
                a = this._setAttr.call(this, t, e);
            return a
        },
        _setAttr: function(o, a) {
            var l;
            if (a || (a = {}),
            a.unset)
                for (l in o)
                    o[l] = void 0;
            return this.parents = this.parents || [],
            this.relations && r.each(this.relations, (function(s) {
                var l, u, h, p = s.key, d = s.relatedModel, f = s.collectionType, m = s.scope || t, g = s.map, y = this.attributes[p], v = y && y.idAttribute, w = !1;
                if (!d || d.prototype instanceof i || (d = r.isFunction(d) ? d.call(this, s, o) : d),
                d && r.isString(d) && (d = d === e.Self ? this.constructor : b(d, m)),
                g && r.isString(g) && (g = b(g, m)),
                u = s.options ? r.extend({}, s.options, a) : a,
                o[p]) {
                    if (l = r.result(o, p),
                    l = g ? g.call(this, l, f || d) : l,
                    s.type === e.Many) {
                        if (f && r.isFunction(f) && f.prototype instanceof i)
                            throw Error("type is of Backbone.Model. Specify derivatives of Backbone.Collection");
                        if (!f || f.prototype instanceof n || (f = r.isFunction(f) ? f.call(this, s, o) : f),
                        f && r.isString(f) && (f = b(f, m)),
                        !d && !f)
                            throw Error("specify either a relatedModel or collectionType");
                        if (f && !f.prototype instanceof n)
                            throw Error("collectionType must inherit from Backbone.Collection");
                        y ? (y._deferEvents = !0,
                        y[u.reset ? "reset" : "set"](l instanceof n ? l.models : l, u),
                        s = y) : (w = !0,
                        l instanceof n ? s = l : (s = f ? new f : this._createCollection(d, m))[u.reset ? "reset" : "set"](l, u))
                    } else {
                        if (s.type !== e.One)
                            throw Error("type attribute must be specified and have the values Backbone.One or Backbone.Many");
                        if (!d)
                            throw Error("specify a relatedModel for Backbone.One type");
                        if (!(d.prototype instanceof e.AssociatedModel))
                            throw Error("specify an AssociatedModel for Backbone.One type");
                        s = l instanceof c ? l : new d(l,u),
                        y && s.attributes[v] && y.attributes[v] === s.attributes[v] ? (y._deferEvents = !0,
                        y._set(l instanceof c ? l.attributes : l, u),
                        s = y) : w = !0
                    }
                    h = o[p] = s,
                    (w || h && !h._proxyCallback) && (h._proxyCallback = function() {
                        return e.Associations.EVENTS_BUBBLE && this._bubbleEvent.call(this, p, h, arguments)
                    }
                    ,
                    h.on("all", h._proxyCallback, this))
                }
                o.hasOwnProperty(p) && (y = o[p],
                v = this.attributes[p],
                y ? (y.parents = y.parents || [],
                -1 == r.indexOf(y.parents, this) && y.parents.push(this)) : v && 0 < v.parents.length && (v.parents = r.difference(v.parents, [this]),
                v._proxyCallback && v.off("all", v._proxyCallback, this)))
            }
            ), this),
            s.set.call(this, o, a)
        },
        _bubbleEvent: function(t, r, s) {
            var o, a, c = (o = s[0].split(":"))[0], l = "nested-change" == s[0], u = "change" === c, m = s[1], g = -1, y = r._proxyCalls, b = !(o = o[1]) || -1 == o.indexOf(h);
            if (!l && (b && (d = v(s[0]) || t),
            e.Associations.EVENTS_NC || f[d]))
                return e.Associations.EVENTS_WILDCARD && /\[\*\]/g.test(o) ? this : (r instanceof n && (u || o) && (g = r.indexOf(p || m)),
                this instanceof i && (p = this),
                o = t + (-1 !== g && (u || o) ? "[" + g + "]" : "") + (o ? h + o : ""),
                e.Associations.EVENTS_WILDCARD && (a = o.replace(/\[\d+\]/g, "[*]")),
                (l = []).push.apply(l, s),
                l[0] = c + ":" + o,
                e.Associations.EVENTS_WILDCARD && o !== a && (l[0] = l[0] + " " + c + ":" + a),
                y = r._proxyCalls = y || {},
                this._isEventAvailable.call(this, y, o) || (y[o] = !0,
                u && (this._previousAttributes[t] = r._previousAttributes,
                this.changed[t] = r),
                this.trigger.apply(this, l),
                e.Associations.EVENTS_NC && u && this.get(o) != s[2] && (t = ["nested-change", o, s[1]],
                s[2] && t.push(s[2]),
                this.trigger.apply(this, t)),
                y && o && delete y[o],
                p = void 0),
                this)
        },
        _isEventAvailable: function(t, e) {
            return r.find(t, (function(t, r) {
                return -1 !== e.indexOf(r, e.length - r.length)
            }
            ))
        },
        _createCollection: function(t, e) {
            var i, s = t;
            if (r.isString(s) && (s = b(s, e)),
            !(s && s.prototype instanceof c || r.isFunction(s)))
                throw Error("type must inherit from Backbone.AssociatedModel");
            return (i = new n).model = s,
            i
        },
        _processPendingEvents: function() {
            this._processedEvents || (this._processedEvents = !0,
            this._deferEvents = !1,
            r.each(this._pendingEvents, (function(t) {
                t.c.trigger.apply(t.c, t.a)
            }
            )),
            this._pendingEvents = [],
            r.each(this.relations, (function(t) {
                (t = this.attributes[t.key]) && t._processPendingEvents()
            }
            ), this),
            delete this._processedEvents)
        },
        trigger: function(t) {
            this._deferEvents ? (this._pendingEvents = this._pendingEvents || [],
            this._pendingEvents.push({
                c: this,
                a: arguments
            })) : s.trigger.apply(this, arguments)
        },
        toJSON: function(t) {
            var e, i = {};
            return i[this.idAttribute] = this.id,
            this.visited || (this.visited = !0,
            i = s.toJSON.apply(this, arguments),
            t && t.serialize_keys && (i = r.pick(i, t.serialize_keys)),
            this.relations && r.each(this.relations, (function(n) {
                var s = n.key
                  , o = n.remoteKey
                  , a = this.attributes[s]
                  , c = !n.isTransient;
                n = n.serialize || [],
                delete i[s],
                c && (n.length && (t ? t.serialize_keys = n : t = {
                    serialize_keys: n
                }),
                e = a && a.toJSON ? a.toJSON(t) : a,
                i[o || s] = r.isArray(e) ? r.compact(e) : e)
            }
            ), this),
            delete this.visited),
            i
        },
        clone: function(t) {
            return new this.constructor(this.toJSON(t))
        },
        cleanup: function() {
            r.each(this.relations, (function(t) {
                (t = this.attributes[t.key]) && (t.parents = r.difference(t.parents, [this]))
            }
            ), this),
            this.off()
        },
        _getAttr: function(t) {
            var e, i, s = this;
            if (t = y(t),
            !(1 > r.size(t))) {
                for (i = 0; i < t.length && (e = t[i],
                s); i++)
                    s = s instanceof n ? isNaN(e) ? void 0 : s.at(e) : s.attributes[e];
                return s
            }
        }
    });
    var y = function(t) {
        return "" === t ? [""] : r.isString(t) ? t.match(u) : t || []
    }
      , v = function(t) {
        return t ? 1 < (t = t.split(":")).length ? 1 < (t = (t = t[t.length - 1]).split(h)).length ? t[t.length - 1].split("[")[0] : t[0].split("[")[0] : "" : t
    }
      , b = function(t, i) {
        var n, s = [i];
        s.push.apply(s, e.Associations.scopes);
        for (var o, a = 0, c = s.length; a < c && (!(o = s[a]) || !(n = r.reduce(t.split(h), (function(t, e) {
            return t[e]
        }
        ), o))); ++a)
            ;
        return n
    }
      , w = function(t, e, i) {
        var n, s;
        return r.find(t, (function(t) {
            if (n = r.find(t.relations, (function(r) {
                return t.get(r.key) === e
            }
            ), this))
                return s = t,
                !0
        }
        ), this),
        n && n.map ? n.map.call(s, i, e) : i
    }
      , _ = {};
    return r.each(["set", "remove", "reset"], (function(t) {
        _[t] = n.prototype[t],
        a[t] = function(e, r) {
            return this.model.prototype instanceof c && this.parents && (arguments[0] = w(this.parents, this, e)),
            _[t].apply(this, arguments)
        }
    }
    )),
    _.trigger = a.trigger,
    a.trigger = function(t) {
        this._deferEvents ? (this._pendingEvents = this._pendingEvents || [],
        this._pendingEvents.push({
            c: this,
            a: arguments
        })) : _.trigger.apply(this, arguments)
    }
    ,
    a._processPendingEvents = c.prototype._processPendingEvents,
    a.on = c.prototype.on,
    a.off = c.prototype.off,
    e
}
)),
function() {
    for (var t, e = function() {}, r = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"], i = r.length, n = window.console = window.console || {}; i--; )
        n[t = r[i]] || (n[t] = e)
}(),
"object" != typeof JSON && (JSON = {}),
function() {
    "use strict";
    function f(t) {
        return t < 10 ? "0" + t : t
    }
    function this_value() {
        return this.valueOf()
    }
    function quote(t) {
        return rx_escapable.lastIndex = 0,
        rx_escapable.test(t) ? '"' + t.replace(rx_escapable, (function(t) {
            var e = meta[t];
            return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
        }
        )) + '"' : '"' + t + '"'
    }
    function str(t, e) {
        var r, i, n, s, o, a = gap, c = e[t];
        switch (c && "object" == typeof c && "function" == typeof c.toJSON && (c = c.toJSON(t)),
        "function" == typeof rep && (c = rep.call(e, t, c)),
        typeof c) {
        case "string":
            return quote(c);
        case "number":
            return isFinite(c) ? String(c) : "null";
        case "boolean":
        case "null":
            return String(c);
        case "object":
            if (!c)
                return "null";
            if (gap += indent,
            o = [],
            "[object Array]" === Object.prototype.toString.apply(c)) {
                for (s = c.length,
                r = 0; r < s; r += 1)
                    o[r] = str(r, c) || "null";
                return n = 0 === o.length ? "[]" : gap ? "[\n" + gap + o.join(",\n" + gap) + "\n" + a + "]" : "[" + o.join(",") + "]",
                gap = a,
                n
            }
            if (rep && "object" == typeof rep)
                for (s = rep.length,
                r = 0; r < s; r += 1)
                    "string" == typeof rep[r] && (n = str(i = rep[r], c)) && o.push(quote(i) + (gap ? ": " : ":") + n);
            else
                for (i in c)
                    Object.prototype.hasOwnProperty.call(c, i) && (n = str(i, c)) && o.push(quote(i) + (gap ? ": " : ":") + n);
            return n = 0 === o.length ? "{}" : gap ? "{\n" + gap + o.join(",\n" + gap) + "\n" + a + "}" : "{" + o.join(",") + "}",
            gap = a,
            n
        }
    }
    var rx_one = /^[\],:{}\s]*$/, rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, rx_four = /(?:^|:|,)(?:\s*\[)+/g, rx_escapable = /[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta, rep;
    "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
    }
    ,
    Boolean.prototype.toJSON = this_value,
    Number.prototype.toJSON = this_value,
    String.prototype.toJSON = this_value),
    "function" != typeof JSON.stringify && (meta = {
        "\b": "\\b",
        "\t": "\\t",
        "\n": "\\n",
        "\f": "\\f",
        "\r": "\\r",
        '"': '\\"',
        "\\": "\\\\"
    },
    JSON.stringify = function(t, e, r) {
        var i;
        if (gap = "",
        indent = "",
        "number" == typeof r)
            for (i = 0; i < r; i += 1)
                indent += " ";
        else
            "string" == typeof r && (indent = r);
        if (rep = e,
        e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length))
            throw new Error("JSON.stringify");
        return str("", {
            "": t
        })
    }
    ),
    "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
        function walk(t, e) {
            var r, i, n = t[e];
            if (n && "object" == typeof n)
                for (r in n)
                    Object.prototype.hasOwnProperty.call(n, r) && (void 0 !== (i = walk(n, r)) ? n[r] = i : delete n[r]);
            return reviver.call(t, e, n)
        }
        var j;
        if (text = String(text),
        rx_dangerous.lastIndex = 0,
        rx_dangerous.test(text) && (text = text.replace(rx_dangerous, (function(t) {
            return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
        }
        ))),
        rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, "")))
            return j = eval("(" + text + ")"),
            "function" == typeof reviver ? walk({
                "": j
            }, "") : j;
        throw new SyntaxError("JSON.parse")
    }
    )
}(),
function() {
    function t() {}
    function e(t, e) {
        for (var r = t.length; r--; )
            if (t[r].listener === e)
                return r;
        return -1
    }
    function r(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }
    var i = t.prototype
      , n = this
      , s = n.EventEmitter;
    i.getListeners = function(t) {
        var e, r, i = this._getEvents();
        if ("object" == typeof t)
            for (r in e = {},
            i)
                i.hasOwnProperty(r) && t.test(r) && (e[r] = i[r]);
        else
            e = i[t] || (i[t] = []);
        return e
    }
    ,
    i.flattenListeners = function(t) {
        var e, r = [];
        for (e = 0; e < t.length; e += 1)
            r.push(t[e].listener);
        return r
    }
    ,
    i.getListenersAsObject = function(t) {
        var e, r = this.getListeners(t);
        return r instanceof Array && ((e = {})[t] = r),
        e || r
    }
    ,
    i.addListener = function(t, r) {
        var i, n = this.getListenersAsObject(t), s = "object" == typeof r;
        for (i in n)
            n.hasOwnProperty(i) && -1 === e(n[i], r) && n[i].push(s ? r : {
                listener: r,
                once: !1
            });
        return this
    }
    ,
    i.on = r("addListener"),
    i.addOnceListener = function(t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    }
    ,
    i.once = r("addOnceListener"),
    i.defineEvent = function(t) {
        return this.getListeners(t),
        this
    }
    ,
    i.defineEvents = function(t) {
        for (var e = 0; e < t.length; e += 1)
            this.defineEvent(t[e]);
        return this
    }
    ,
    i.removeListener = function(t, r) {
        var i, n, s = this.getListenersAsObject(t);
        for (n in s)
            s.hasOwnProperty(n) && -1 !== (i = e(s[n], r)) && s[n].splice(i, 1);
        return this
    }
    ,
    i.off = r("removeListener"),
    i.addListeners = function(t, e) {
        return this.manipulateListeners(!1, t, e)
    }
    ,
    i.removeListeners = function(t, e) {
        return this.manipulateListeners(!0, t, e)
    }
    ,
    i.manipulateListeners = function(t, e, r) {
        var i, n, s = t ? this.removeListener : this.addListener, o = t ? this.removeListeners : this.addListeners;
        if ("object" != typeof e || e instanceof RegExp)
            for (i = r.length; i--; )
                s.call(this, e, r[i]);
        else
            for (i in e)
                e.hasOwnProperty(i) && (n = e[i]) && ("function" == typeof n ? s.call(this, i, n) : o.call(this, i, n));
        return this
    }
    ,
    i.removeEvent = function(t) {
        var e, r = typeof t, i = this._getEvents();
        if ("string" === r)
            delete i[t];
        else if ("object" === r)
            for (e in i)
                i.hasOwnProperty(e) && t.test(e) && delete i[e];
        else
            delete this._events;
        return this
    }
    ,
    i.removeAllListeners = r("removeEvent"),
    i.emitEvent = function(t, e) {
        var r, i, n, s = this.getListenersAsObject(t);
        for (n in s)
            if (s.hasOwnProperty(n))
                for (i = s[n].length; i--; )
                    !0 === (r = s[n][i]).once && this.removeListener(t, r.listener),
                    r.listener.apply(this, e || []) === this._getOnceReturnValue() && this.removeListener(t, r.listener);
        return this
    }
    ,
    i.trigger = r("emitEvent"),
    i.emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }
    ,
    i.setOnceReturnValue = function(t) {
        return this._onceReturnValue = t,
        this
    }
    ,
    i._getOnceReturnValue = function() {
        return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue
    }
    ,
    i._getEvents = function() {
        return this._events || (this._events = {})
    }
    ,
    t.noConflict = function() {
        return n.EventEmitter = s,
        t
    }
    ,
    "function" == typeof define && define.amd ? define("eventEmitter/EventEmitter", [], (function() {
        return t
    }
    )) : "object" == typeof module && module.exports ? module.exports = t : this.EventEmitter = t
}
.call(this),
function(t) {
    function e(e) {
        var r = t.event;
        return r.target = r.target || r.srcElement || e,
        r
    }
    var r = document.documentElement
      , i = function() {};
    r.addEventListener ? i = function(t, e, r) {
        t.addEventListener(e, r, !1)
    }
    : r.attachEvent && (i = function(t, r, i) {
        t[r + i] = i.handleEvent ? function() {
            var r = e(t);
            i.handleEvent.call(i, r)
        }
        : function() {
            var r = e(t);
            i.call(t, r)
        }
        ,
        t.attachEvent("on" + r, t[r + i])
    }
    );
    var n = function() {};
    r.removeEventListener ? n = function(t, e, r) {
        t.removeEventListener(e, r, !1)
    }
    : r.detachEvent && (n = function(t, e, r) {
        t.detachEvent("on" + e, t[e + r]);
        try {
            delete t[e + r]
        } catch (i) {
            t[e + r] = void 0
        }
    }
    );
    var s = {
        bind: i,
        unbind: n
    };
    "function" == typeof define && define.amd ? define("eventie/eventie", s) : t.eventie = s
}(this),
function(t, e) {
    "function" == typeof define && define.amd ? define(["eventEmitter/EventEmitter", "eventie/eventie"], (function(r, i) {
        return e(t, r, i)
    }
    )) : "object" == typeof exports ? module.exports = e(t, require("wolfy87-eventemitter"), require("eventie")) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie)
}(window, (function(t, e, r) {
    function i(t, e) {
        for (var r in e)
            t[r] = e[r];
        return t
    }
    function n(t) {
        return "[object Array]" === p.call(t)
    }
    function s(t) {
        var e = [];
        if (n(t))
            e = t;
        else if ("number" == typeof t.length)
            for (var r = 0, i = t.length; r < i; r++)
                e.push(t[r]);
        else
            e.push(t);
        return e
    }
    function o(t, e, r) {
        if (!(this instanceof o))
            return new o(t,e);
        "string" == typeof t && (t = document.querySelectorAll(t)),
        this.elements = s(t),
        this.options = i({}, this.options),
        "function" == typeof e ? r = e : i(this.options, e),
        r && this.on("always", r),
        this.getImages(),
        l && (this.jqDeferred = new l.Deferred);
        var n = this;
        setTimeout((function() {
            n.check()
        }
        ))
    }
    function a(t) {
        this.img = t
    }
    function c(t) {
        this.src = t,
        d[t] = this
    }
    var l = t.jQuery
      , u = t.console
      , h = void 0 !== u
      , p = Object.prototype.toString;
    o.prototype = new e,
    o.prototype.options = {},
    o.prototype.getImages = function() {
        this.images = [];
        for (var t = 0, e = this.elements.length; t < e; t++) {
            var r = this.elements[t];
            "IMG" === r.nodeName && this.addImage(r);
            var i = r.nodeType;
            if (i && (1 === i || 9 === i || 11 === i))
                for (var n = r.querySelectorAll("img"), s = 0, o = n.length; s < o; s++) {
                    var a = n[s];
                    this.addImage(a)
                }
        }
    }
    ,
    o.prototype.addImage = function(t) {
        var e = new a(t);
        this.images.push(e)
    }
    ,
    o.prototype.check = function() {
        function t(t, n) {
            return e.options.debug && h && u.log("confirm", t, n),
            e.progress(t),
            ++r === i && e.complete(),
            !0
        }
        var e = this
          , r = 0
          , i = this.images.length;
        if (this.hasAnyBroken = !1,
        i)
            for (var n = 0; n < i; n++) {
                var s = this.images[n];
                s.on("confirm", t),
                s.check()
            }
        else
            this.complete()
    }
    ,
    o.prototype.progress = function(t) {
        this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
        var e = this;
        setTimeout((function() {
            e.emit("progress", e, t),
            e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t)
        }
        ))
    }
    ,
    o.prototype.complete = function() {
        var t = this.hasAnyBroken ? "fail" : "done";
        this.isComplete = !0;
        var e = this;
        setTimeout((function() {
            if (e.emit(t, e),
            e.emit("always", e),
            e.jqDeferred) {
                var r = e.hasAnyBroken ? "reject" : "resolve";
                e.jqDeferred[r](e)
            }
        }
        ))
    }
    ,
    l && (l.fn.imagesLoaded = function(t, e) {
        return new o(this,t,e).jqDeferred.promise(l(this))
    }
    ),
    a.prototype = new e,
    a.prototype.check = function() {
        var t = d[this.img.src] || new c(this.img.src);
        if (t.isConfirmed)
            this.confirm(t.isLoaded, "cached was confirmed");
        else if (this.img.complete && void 0 !== this.img.naturalWidth)
            this.confirm(0 !== this.img.naturalWidth, "naturalWidth");
        else {
            var e = this;
            t.on("confirm", (function(t, r) {
                return e.confirm(t.isLoaded, r),
                !0
            }
            )),
            t.check()
        }
    }
    ,
    a.prototype.confirm = function(t, e) {
        this.isLoaded = t,
        this.emit("confirm", this, e)
    }
    ;
    var d = {};
    return c.prototype = new e,
    c.prototype.check = function() {
        if (!this.isChecked) {
            var t = new Image;
            r.bind(t, "load", this),
            r.bind(t, "error", this),
            t.src = this.src,
            this.isChecked = !0
        }
    }
    ,
    c.prototype.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    c.prototype.onload = function(t) {
        this.confirm(!0, "onload"),
        this.unbindProxyEvents(t)
    }
    ,
    c.prototype.onerror = function(t) {
        this.confirm(!1, "onerror"),
        this.unbindProxyEvents(t)
    }
    ,
    c.prototype.confirm = function(t, e) {
        this.isConfirmed = !0,
        this.isLoaded = t,
        this.emit("confirm", this, e)
    }
    ,
    c.prototype.unbindProxyEvents = function(t) {
        r.unbind(t.target, "load", this),
        r.unbind(t.target, "error", this)
    }
    ,
    o
}
)),
function(t, e) {
    var r = function(t, e, r) {
        var i;
        return function() {
            function n() {
                r || t.apply(s, o),
                i = null
            }
            var s = this
              , o = arguments;
            i ? clearTimeout(i) : r && t.apply(s, o),
            i = setTimeout(n, e || 150)
        }
    };
    jQuery.fn[e] = function(t) {
        return t ? this.bind("resize", r(t)) : this.trigger(e)
    }
}(jQuery, "smartresize"),
function(t) {
    t.Gal = function(e, r) {
        this.element = t(r),
        this._init(e)
    }
    ,
    t.Gal.settings = {
        selector: ".item",
        width: 225,
        gutter: 20,
        animate: !1,
        columns: 3,
        embedLayout: "v1",
        animationOptions: {
            speed: 200,
            duration: 300,
            effect: "fadeInOnAppear",
            queue: !0,
            complete: function() {}
        }
    },
    t.Gal.prototype = {
        _init: function(e) {
            var r = this;
            this.name = this._setName(5),
            this.gridArr = [],
            this.gridArrAppend = [],
            this.gridArrPrepend = [],
            this.setArr = !1,
            this.setGrid = !1,
            this.setOptions,
            this.cols = 0,
            this.itemCount = 0,
            this.prependCount = 0,
            this.isPrepending = !1,
            this.appendCount = 0,
            this.resetCount = !0,
            this.ifCallback = !0,
            this.box = this.element,
            this.options = t.extend(!0, {}, t.Gal.settings, e),
            this.gridArr = t.makeArray(this.box.find(this.options.selector)),
            this.isResizing = !1,
            this.w = 0,
            this.boxArr = [],
            this.initialWidth = this.box.width(),
            this._setCols(),
            this._renderGrid("append"),
            t(this.box).addClass("gridalicious"),
            this._addLoadMore(),
            t(window).smartresize((function() {
                r.resize()
            }
            ))
        },
        _addLoadMore: function() {
            var e = t("<a href='#'>Load More</a>").addClass("j-paginate juicer-button");
            this.box.append(e)
        },
        _moveLoadMore: function() {
            var t = this.box.find(".j-paginate");
            t.length > 0 && this.box.append(t.detach())
        },
        _setName: function(t, e) {
            return e = e || "",
            t ? this._setName(--t, "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".charAt(Math.floor(60 * Math.random())) + e) : e
        },
        _setCols: function() {
            this.calculated = Math.floor(this.box.outerWidth() / this.options.width),
            this.cols = Math.min(this.options.columns, this.calculated),
            this.cols < 1 && (this.cols = 1),
            diff = (this.box.width() - this.cols * this.options.width) / this.cols,
            w = (this.options.width + diff) / this.box.width() * 100,
            this.w = w,
            this.spacing = this.options.gutter / this.cols;
            for (var e = t("<div></div>").addClass("j-stacker-wrapper").css({
                marginLeft: -this.options.gutter / 2,
                marginRight: -this.options.gutter / 2
            }), r = t("<div></div>").addClass("j-stacker"), i = 0; i < this.cols; i++) {
                var n = "v2" === this.options.embedLayout ? "<ul></ul>" : "<div></div>"
                  , s = t(n).addClass("j-stack galcolumn column-" + i + "-" + this.name).attr("id", "j-column-" + i).css({
                    width: w + "%",
                    paddingLeft: this.options.gutter / 2,
                    paddingRight: this.options.gutter / 2
                });
                r.append(s)
            }
            e.append(r),
            this.box.append(e),
            this.box.find(t("#clear" + this.name)).remove();
            var o = t("<div></div>").css({
                clear: "both",
                height: "0",
                width: "0",
                display: "block"
            }).attr("id", "clear" + this.name);
            this.box.append(o)
        },
        _renderGrid: function(e, r, i) {
            var n = []
              , s = []
              , o = 0
              , a = (this.prependCount,
            this.appendCount)
              , c = this.options.gutter
              , l = this.cols
              , u = this.name;
            t(".j-stack").width();
            r ? (s = r,
            "append" == e && (a += i,
            o = this.appendCount),
            "prepend" == e && (this.isPrepending = !0,
            (o = Math.round(i % l)) <= 0 && (o = l)),
            "renderAfterPrepend" == e && (a += i,
            o = i)) : (s = this.gridArr,
            a = t(this.gridArr).length),
            t.each(s, (function(r, i) {
                var s = t(i)
                  , h = "100%";
                s.hasClass("not-responsive") && (h = "auto"),
                s.css({
                    marginBottom: c,
                    zoom: "1"
                }).find(".j-image img, object, embed, iframe").css({
                    width: h,
                    height: "auto",
                    display: "block",
                    "margin-left": "auto",
                    "margin-right": "auto"
                }),
                "prepend" == e ? (o--,
                t(".column-" + o + "-" + u).prepend(s),
                n.push(s),
                0 == o && (o = l)) : (t(".column-" + o + "-" + u).append(s),
                n.push(s),
                ++o >= l && (o = 0),
                a >= l && (a -= l))
            }
            )),
            this.appendCount = a,
            this.itemCount = o,
            "append" == e || "prepend" == e ? ("prepend" == e && this._updateAfterPrepend(this.gridArr, s),
            this._renderItem(n),
            this.isPrepending = !1) : this._renderItem(this.gridArr)
        },
        _collectItems: function() {
            var e = [];
            return t(this.box).find(this.options.selector).each((function() {
                e.push(t(this))
            }
            )),
            e
        },
        _renderItem: function(e) {
            var r = this.options.animationOptions.speed
              , i = this.options.animationOptions.effect
              , n = this.options.animationOptions.duration
              , s = this.options.animationOptions.queue
              , o = this.options.animate
              , a = this.options.animationOptions.complete
              , c = 0
              , l = 0;
            !0 !== o || this.isResizing ? (t.each(e, (function(e, r) {
                t(r).css({
                    opacity: "1"
                })
            }
            )),
            this.ifCallback && a.call(e)) : (!0 === s && "fadeInOnAppear" == i ? (this.isPrepending && e.reverse(),
            t.each(e, (function(i, s) {
                setTimeout((function() {
                    t(s).animate({
                        opacity: "1.0"
                    }, n),
                    ++l == e.length && a.call(void 0, e)
                }
                ), c * r),
                c++
            }
            ))) : !1 === s && "fadeInOnAppear" == i && (this.isPrepending && e.reverse(),
            t.each(e, (function(r, i) {
                t(i).animate({
                    opacity: "1.0"
                }, n),
                ++l == e.length && this.ifCallback && a.call(void 0, e)
            }
            ))),
            !0 !== s || i || t.each(e, (function(r, i) {
                t(i).css({
                    opacity: "1"
                }),
                ++l == e.length && this.ifCallback && a.call(void 0, e)
            }
            )))
        },
        _updateAfterPrepend: function(e, r) {
            var i = this.gridArr;
            t.each(r, (function(t, e) {
                i.unshift(e)
            }
            )),
            this.gridArr = i
        },
        resize: function() {
            this.box.width() != this.initialWidth && (this.initialWidth = this.box.width(),
            this.box.find(t(".j-stacker-wrapper")).remove(),
            this._setCols(),
            this._moveLoadMore(),
            this.ifCallback = !1,
            this.isResizing = !0,
            this._renderGrid("append"),
            this.ifCallback = !0,
            this.isResizing = !1)
        },
        append: function(e) {
            var r = this.gridArr
              , i = this.gridArrPrepend;
            t.each(e, (function(t, e) {
                r.push(e),
                i.push(e)
            }
            )),
            this._renderGrid("append", e, t(e).length),
            this._addLoadMore()
        },
        prepend: function(e) {
            this.ifCallback = !1,
            this._renderGrid("prepend", e, t(e).length),
            this.ifCallback = !0
        }
    },
    t.fn.gridalicious = function(e, r) {
        return "string" == typeof e ? this.each((function() {
            var i = t.data(this, "gridalicious");
            i[e].apply(i, [r])
        }
        )) : this.each((function() {
            t.data(this, "gridalicious", new t.Gal(e,this))
        }
        )),
        this
    }
}(jQuery),
function() {
    function t(t) {
        return (t || "").split(" ")
    }
    function e(t, e, r) {
        return s(t, e, r)
    }
    function r(t, e, r, i) {
        return "number" != typeof r && "string" != typeof r || null != i || (i = r,
        r = void 0),
        s(t, e, r, {
            timezone: i
        })
    }
    function i(t, e, r) {
        return s(t, e, r, {
            utc: !0
        })
    }
    function n(t) {
        return function(r, i, n) {
            return e(r, i, t, n)
        }
    }
    function s(t, e, r, i) {
        i = i || {},
        e && !a(e) && (r = e,
        e = void 0),
        e = e || new Date,
        (r = r || d).formats = r.formats || {};
        var n = e.getTime()
          , p = i.timezone
          , f = typeof p;
        if ((i.utc || "number" == f || "string" == f) && (e = o(e)),
        p) {
            if ("string" == f) {
                var m = "-" == p[0] ? -1 : 1
                  , g = parseInt(p.slice(1, 3), 10)
                  , y = parseInt(p.slice(3, 5), 10);
                p = m * (60 * g + y)
            }
            f && (e = new Date(e.getTime() + 6e4 * p))
        }
        return t.replace(/%([-_0]?.)/g, (function(t, o) {
            var a, d;
            if (2 == o.length) {
                if ("-" == (a = o[0]))
                    d = "";
                else if ("_" == a)
                    d = " ";
                else {
                    if ("0" != a)
                        return t;
                    d = "0"
                }
                o = o[1]
            }
            switch (o) {
            case "A":
                return r.days[e.getDay()];
            case "a":
                return r.shortDays[e.getDay()];
            case "B":
                return r.months[e.getMonth()];
            case "b":
            case "h":
                return r.shortMonths[e.getMonth()];
            case "C":
                return c(Math.floor(e.getFullYear() / 100), d);
            case "D":
                return s(r.formats.D || "%m/%d/%y", e, r);
            case "d":
                return c(e.getDate(), d);
            case "e":
                return c(e.getDate(), null == d ? " " : d);
            case "F":
                return s(r.formats.F || "%Y-%m-%d", e, r);
            case "H":
                return c(e.getHours(), d);
            case "I":
                return c(l(e), d);
            case "j":
                var f = new Date(e.getFullYear(),0,1);
                return c(m = Math.ceil((e.getTime() - f.getTime()) / 864e5), 3);
            case "k":
                return c(e.getHours(), null == d ? " " : d);
            case "L":
                return c(Math.floor(n % 1e3), 3);
            case "l":
                return c(l(e), null == d ? " " : d);
            case "M":
                return c(e.getMinutes(), d);
            case "m":
                return c(e.getMonth() + 1, d);
            case "n":
                return "\n";
            case "o":
                return String(e.getDate()) + u(e.getDate());
            case "P":
                return e.getHours() < 12 ? r.am : r.pm;
            case "p":
                return e.getHours() < 12 ? r.AM : r.PM;
            case "R":
                return s(r.formats.R || "%H:%M", e, r);
            case "r":
                return s(r.formats.r || "%I:%M:%S %p", e, r);
            case "S":
                return c(e.getSeconds(), d);
            case "s":
                return Math.floor(n / 1e3);
            case "T":
                return s(r.formats.T || "%H:%M:%S", e, r);
            case "t":
                return "\t";
            case "U":
                return c(h(e, "sunday"), d);
            case "u":
                var m;
                return 0 == (m = e.getDay()) ? 7 : m;
            case "v":
                return s(r.formats.v || "%e-%b-%Y", e, r);
            case "W":
                return c(h(e, "monday"), d);
            case "w":
                return e.getDay();
            case "Y":
                return e.getFullYear();
            case "y":
                return (f = String(e.getFullYear())).slice(f.length - 2);
            case "Z":
                if (i.utc)
                    return "GMT";
                var g = e.toString().match(/\(([\w\s]+)\)/);
                return g && g[1] || "";
            case "z":
                if (i.utc)
                    return "+0000";
                var y = "number" == typeof p ? p : -e.getTimezoneOffset();
                return (y < 0 ? "-" : "+") + c(Math.floor(Math.abs(y) / 60)) + c(Math.abs(y) % 60);
            default:
                return o
            }
        }
        ))
    }
    function o(t) {
        var e = 6e4 * (t.getTimezoneOffset() || 0);
        return new Date(t.getTime() + e)
    }
    function a(t) {
        var e = 0
          , r = f.length;
        for (e = 0; e < r; ++e)
            if ("function" != typeof t[f[e]])
                return !1;
        return !0
    }
    function c(t, e, r) {
        "number" == typeof e && (r = e,
        e = "0"),
        null == e && (e = "0"),
        r = r || 2;
        var i = String(t);
        if (e)
            for (; i.length < r; )
                i = e + i;
        return i
    }
    function l(t) {
        var e = t.getHours();
        return 0 == e ? e = 12 : e > 12 && (e -= 12),
        e
    }
    function u(t) {
        var e = t % 10
          , r = t % 100;
        if (r >= 11 && r <= 13 || 0 === e || e >= 4)
            return "th";
        switch (e) {
        case 1:
            return "st";
        case 2:
            return "nd";
        case 3:
            return "rd"
        }
    }
    function h(t, e) {
        e = e || "sunday";
        var r = t.getDay();
        "monday" == e && (0 == r ? r = 6 : r--);
        var i = new Date(t.getFullYear(),0,1)
          , n = ((t - i) / 864e5 + 7 - r) / 7;
        return Math.floor(n)
    }
    var p;
    p = "undefined" != typeof module ? module.exports = e : function() {
        return this || (0,
        eval)("this")
    }();
    var d = {
        days: t("Sunday Monday Tuesday Wednesday Thursday Friday Saturday"),
        shortDays: t("Sun Mon Tue Wed Thu Fri Sat"),
        months: t("January February March April May June July August September October November December"),
        shortMonths: t("Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec"),
        AM: "AM",
        PM: "PM",
        am: "am",
        pm: "pm"
    };
    p.strftime = e,
    p.strftimeTZ = e.strftimeTZ = r,
    p.strftimeUTC = e.strftimeUTC = i,
    p.localizedStrftime = e.localizedStrftime = n;
    var f = ["getTime", "getTimezoneOffset", "getDay", "getDate", "getMonth", "getFullYear", "getYear", "getHours", "getMinutes", "getSeconds"]
}(),
function() {
    var t, e = [].slice;
    t = function() {
        var t, r, i, n, s, o;
        return s = /(^|[\s\n]|<br\/?>)((?:https?|ftp):\/\/[\-A-Z0-9+\u0026\u2019@#\/%?=()~_|!:,.;]*[\-A-Z0-9+\u0026@#\/%=~()_|])/gi,
        (n = 1 <= arguments.length ? e.call(arguments, 0) : []).length > 0 ? (i = n[0],
        r = function() {
            var e;
            for (t in e = [],
            i)
                o = i[t],
                "callback" !== t && e.push(" " + t + "='" + o + "'");
            return e
        }().join(""),
        this.replace(s, (function(t, e, n) {
            return "" + e + (("function" == typeof i.callback ? i.callback(n) : void 0) || "<a href='" + n + "'" + r + ">" + n + "</a>")
        }
        ))) : this.replace(s, "$1<a href='$2'>$2</a>")
    }
    ,
    String.prototype.autoLink = t
}
.call(this),
Object.create || (Object.create = function(t, e) {
    function r() {}
    if ("object" != typeof t && "function" != typeof t)
        throw new TypeError("Object prototype may only be an Object: " + t);
    if (null === t)
        throw new Error("This browser's implementation of Object.create is a shim and doesn't support 'null' as the first argument.");
    if (void 0 !== e)
        throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");
    return r.prototype = t,
    new r
}
),
function(t, e) {
    "use strict";
    t.jQueryBridget = e(t, t.jQuery)
}(window, (function(t, e) {
    "use strict";
    function r(r, s, a) {
        function c(t, e, i) {
            var n, s = "$()." + r + '("' + e + '")';
            return t.each((function(t, c) {
                var l = a.data(c, r);
                if (l) {
                    var u = l[e];
                    if (u && "_" != e.charAt(0)) {
                        var h = u.apply(l, i);
                        n = void 0 === n ? h : n
                    } else
                        o(s + " is not a valid method")
                } else
                    o(r + " not initialized. Cannot call methods, i.e. " + s)
            }
            )),
            void 0 !== n ? n : t
        }
        function l(t, e) {
            t.each((function(t, i) {
                var n = a.data(i, r);
                n ? (n.option(e),
                n._init()) : (n = new s(i,e),
                a.data(i, r, n))
            }
            ))
        }
        (a = a || e || t.jQuery) && (s.prototype.option || (s.prototype.option = function(t) {
            a.isPlainObject(t) && (this.options = a.extend(!0, this.options, t))
        }
        ),
        a.fn[r] = function(t) {
            return "string" == typeof t ? c(this, t, n.call(arguments, 1)) : (l(this, t),
            this)
        }
        ,
        i(a))
    }
    function i(t) {
        !t || t && t.bridget || (t.bridget = r)
    }
    var n = Array.prototype.slice
      , s = t.console
      , o = void 0 === s ? function() {}
    : function(t) {
        s.error(t)
    }
    ;
    return i(e || t.jQuery),
    r
}
)),
function(t, e) {
    "use strict";
    t.getWindowSize = e()
}(window, (function() {
    "use strict";
    function t(t) {
        var e = parseFloat(t);
        return -1 == t.indexOf("%") && !isNaN(e) && e
    }
    function e() {}
    function r() {
        for (var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, e = 0; e < l; e++) {
            t[c[e]] = 0
        }
        return t
    }
    function i(t) {
        var e = getComputedStyle(t);
        return e || a("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),
        e
    }
    function n() {
        if (!u) {
            u = !0;
            var e = document.createElement("div");
            e.style.width = "200px",
            e.style.padding = "1px 2px 3px 4px",
            e.style.borderStyle = "solid",
            e.style.borderWidth = "1px 2px 3px 4px",
            e.style.boxSizing = "border-box";
            var r = document.body || document.documentElement;
            r.appendChild(e);
            var n = i(e);
            s.isBoxSizeOuter = o = 200 == t(n.width),
            r.removeChild(e)
        }
    }
    function s(e) {
        if (n(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType) {
            var s = i(e);
            if ("none" == s.display)
                return r();
            var a = {};
            a.width = e.offsetWidth,
            a.height = e.offsetHeight;
            for (var u = a.isBorderBox = "border-box" == s.boxSizing, h = 0; h < l; h++) {
                var p = c[h]
                  , d = s[p]
                  , f = parseFloat(d);
                a[p] = isNaN(f) ? 0 : f
            }
            var m = a.paddingLeft + a.paddingRight
              , g = a.paddingTop + a.paddingBottom
              , y = a.marginLeft + a.marginRight
              , v = a.marginTop + a.marginBottom
              , b = a.borderLeftWidth + a.borderRightWidth
              , w = a.borderTopWidth + a.borderBottomWidth
              , _ = u && o
              , S = t(s.width);
            !1 !== S && (a.width = S + (_ ? 0 : m + b));
            var k = t(s.height);
            return !1 !== k && (a.height = k + (_ ? 0 : g + w)),
            a.innerWidth = a.width - (m + b),
            a.innerHeight = a.height - (g + w),
            a.outerWidth = a.width + y,
            a.outerHeight = a.height + v,
            a
        }
    }
    var o, a = "undefined" == typeof console ? e : function(t) {
        console.error(t)
    }
    , c = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], l = c.length, u = !1;
    return s
}
)),
function(t, e) {
    t.EvEmitter = e()
}(this, (function() {
    function t() {}
    var e = t.prototype;
    return e.on = function(t, e) {
        if (t && e) {
            var r = this._events = this._events || {}
              , i = r[t] = r[t] || [];
            return -1 == i.indexOf(e) && i.push(e),
            this
        }
    }
    ,
    e.once = function(t, e) {
        if (t && e) {
            this.on(t, e);
            var r = this._onceEvents = this._onceEvents || {};
            return (r[t] = r[t] || {})[e] = !0,
            this
        }
    }
    ,
    e.off = function(t, e) {
        var r = this._events && this._events[t];
        if (r && r.length) {
            var i = r.indexOf(e);
            return -1 != i && r.splice(i, 1),
            this
        }
    }
    ,
    e.emitEvent = function(t, e) {
        var r = this._events && this._events[t];
        if (r && r.length) {
            var i = 0
              , n = r[i];
            e = e || [];
            for (var s = this._onceEvents && this._onceEvents[t]; n; ) {
                var o = s && s[n];
                o && (this.off(t, n),
                delete s[n]),
                n.apply(this, e),
                n = r[i += o ? 0 : 1]
            }
            return this
        }
    }
    ,
    t
}
)),
function(t, e) {
    "use strict";
    t.matchesSelector = e()
}(window, (function() {
    "use strict";
    var t = function() {
        var t = Element.prototype;
        if (t.matches)
            return "matches";
        if (t.matchesSelector)
            return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], r = 0; r < e.length; r++) {
            var i = e[r] + "MatchesSelector";
            if (t[i])
                return i
        }
    }();
    return function(e, r) {
        return e[t](r)
    }
}
)),
function(t, e) {
    t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, (function(t, e) {
    var r = {
        extend: function(t, e) {
            for (var r in e)
                t[r] = e[r];
            return t
        },
        modulo: function(t, e) {
            return (t % e + e) % e
        },
        makeArray: function(t) {
            var e = [];
            if (Array.isArray(t))
                e = t;
            else if (t && "number" == typeof t.length)
                for (var r = 0; r < t.length; r++)
                    e.push(t[r]);
            else
                e.push(t);
            return e
        },
        removeFrom: function(t, e) {
            var r = t.indexOf(e);
            -1 != r && t.splice(r, 1)
        },
        getParent: function(t, r) {
            for (; t != document.body; )
                if (t = t.parentNode,
                e(t, r))
                    return t
        },
        getQueryElement: function(t) {
            return "string" == typeof t ? document.querySelector(t) : t
        },
        handleEvent: function(t) {
            var e = "on" + t.type;
            this[e] && this[e](t)
        },
        filterFindElements: function(t, i) {
            t = r.makeArray(t);
            var n = [];
            return t.forEach((function(t) {
                if (t instanceof HTMLElement)
                    if (i) {
                        e(t, i) && n.push(t);
                        for (var r = t.querySelectorAll(i), s = 0; s < r.length; s++)
                            n.push(r[s])
                    } else
                        n.push(t)
            }
            )),
            n
        },
        debounceMethod: function(t, e, r) {
            var i = t.prototype[e]
              , n = e + "Timeout";
            t.prototype[e] = function() {
                var t = this[n];
                t && clearTimeout(t);
                var e = arguments
                  , s = this;
                this[n] = setTimeout((function() {
                    i.apply(s, e),
                    delete s[n]
                }
                ), r || 100)
            }
        },
        docReady: function(t) {
            "complete" == document.readyState ? t() : document.addEventListener ? document.addEventListener("DOMContentLoaded", t) : document.attachEvent("onreadystatechange", t)
        },
        toDashed: function(t) {
            return t.replace(/(.)([A-Z])/g, (function(t, e, r) {
                return e + "-" + r
            }
            )).toLowerCase()
        }
    }
      , i = t.console;
    return r.htmlInit = function(e, n) {
        r.docReady((function() {
            var s = r.toDashed(n)
              , o = "data-" + s
              , a = document.querySelectorAll("[" + o + "]")
              , c = document.querySelectorAll(".js-" + s)
              , l = r.makeArray(a).concat(r.makeArray(c))
              , u = o + "-options"
              , h = t.jQuery;
            l.forEach((function(t) {
                var r, s = t.getAttribute(o) || t.getAttribute(u);
                try {
                    r = s && JSON.parse(s)
                } catch (e) {
                    return void (i && i.error("Error parsing " + o + " on " + t.className + ": " + e))
                }
                var a = new e(t,r);
                h && h.data(t, n, a)
            }
            ))
        }
        ))
    }
    ,
    r
}
)),
function(t, e) {
    t.Outlayer = {},
    t.Outlayer.Item = e(t.EvEmitter, t.getWindowSize)
}(window, (function(t, e) {
    "use strict";
    function r(t) {
        for (var e in t)
            return !1;
        return !0
    }
    function i(t, e) {
        t && (this.element = t,
        this.layout = e,
        this.position = {
            x: 0,
            y: 0
        },
        this._create())
    }
    function n(t) {
        return t.replace(/([A-Z])/g, (function(t) {
            return "-" + t.toLowerCase()
        }
        ))
    }
    var s = document.documentElement.style
      , o = "string" == typeof s.transition ? "transition" : "WebkitTransition"
      , a = "string" == typeof s.transform ? "transform" : "WebkitTransform"
      , c = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend"
    }[o]
      , l = {
        transform: a,
        transition: o,
        transitionDuration: o + "Duration",
        transitionProperty: o + "Property"
    }
      , u = i.prototype = Object.create(t.prototype);
    u.constructor = i,
    u._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        },
        this.css({
            position: "absolute"
        })
    }
    ,
    u.handleEvent = function(t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }
    ,
    u.getWindowSize = function() {
        this.size = e(this.element)
    }
    ,
    u.css = function(t) {
        var e = this.element.style;
        for (var r in t) {
            e[l[r] || r] = t[r]
        }
    }
    ,
    u.getPosition = function() {
        var t = getComputedStyle(this.element)
          , e = this.layout._getOption("originLeft")
          , r = this.layout._getOption("originTop")
          , i = t[e ? "left" : "right"]
          , n = t[r ? "top" : "bottom"]
          , s = this.layout.size
          , o = -1 != i.indexOf("%") ? parseFloat(i) / 100 * s.width : parseInt(i, 10)
          , a = -1 != n.indexOf("%") ? parseFloat(n) / 100 * s.height : parseInt(n, 10);
        o = isNaN(o) ? 0 : o,
        a = isNaN(a) ? 0 : a,
        o -= e ? s.paddingLeft : s.paddingRight,
        a -= r ? s.paddingTop : s.paddingBottom,
        this.position.x = o,
        this.position.y = a
    }
    ,
    u.layoutPosition = function() {
        var t = this.layout.size
          , e = {}
          , r = this.layout._getOption("originLeft")
          , i = this.layout._getOption("originTop")
          , n = r ? "paddingLeft" : "paddingRight"
          , s = r ? "left" : "right"
          , o = r ? "right" : "left"
          , a = this.position.x + t[n];
        e[s] = this.getXValue(a),
        e[o] = "";
        var c = i ? "paddingTop" : "paddingBottom"
          , l = i ? "top" : "bottom"
          , u = i ? "bottom" : "top"
          , h = this.position.y + t[c];
        e[l] = this.getYValue(h),
        e[u] = "",
        this.css(e),
        this.emitEvent("layout", [this])
    }
    ,
    u.getXValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }
    ,
    u.getYValue = function(t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }
    ,
    u._transitionTo = function(t, e) {
        this.getPosition();
        var r = this.position.x
          , i = this.position.y
          , n = parseInt(t, 10)
          , s = parseInt(e, 10)
          , o = n === this.position.x && s === this.position.y;
        if (this.setPosition(t, e),
        !o || this.isTransitioning) {
            var a = t - r
              , c = e - i
              , l = {};
            l.transform = this.getTranslate(a, c),
            this.transition({
                to: l,
                onTransitionEnd: {
                    transform: this.layoutPosition
                },
                isCleaning: !0
            })
        } else
            this.layoutPosition()
    }
    ,
    u.getTranslate = function(t, e) {
        return "translate3d(" + (t = this.layout._getOption("originLeft") ? t : -t) + "px, " + (e = this.layout._getOption("originTop") ? e : -e) + "px, 0)"
    }
    ,
    u.goTo = function(t, e) {
        this.setPosition(t, e),
        this.layoutPosition()
    }
    ,
    u.moveTo = u._transitionTo,
    u.setPosition = function(t, e) {
        this.position.x = parseInt(t, 10),
        this.position.y = parseInt(e, 10)
    }
    ,
    u._nonTransition = function(t) {
        for (var e in this.css(t.to),
        t.isCleaning && this._removeStyles(t.to),
        t.onTransitionEnd)
            t.onTransitionEnd[e].call(this)
    }
    ,
    u.transition = function(t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
            var e = this._transn;
            for (var r in t.onTransitionEnd)
                e.onEnd[r] = t.onTransitionEnd[r];
            for (r in t.to)
                e.ingProperties[r] = !0,
                t.isCleaning && (e.clean[r] = !0);
            if (t.from) {
                this.css(t.from);
                this.element.offsetHeight;
                0
            }
            this.enableTransition(t.to),
            this.css(t.to),
            this.isTransitioning = !0
        } else
            this._nonTransition(t)
    }
    ;
    var h = "opacity," + n(a);
    u.enableTransition = function() {
        this.isTransitioning || (this.css({
            transitionProperty: h,
            transitionDuration: this.layout.options.transitionDuration
        }),
        this.element.addEventListener(c, this, !1))
    }
    ,
    u.onwebkitTransitionEnd = function(t) {
        this.ontransitionend(t)
    }
    ,
    u.onotransitionend = function(t) {
        this.ontransitionend(t)
    }
    ;
    var p = {
        "-webkit-transform": "transform"
    };
    u.ontransitionend = function(t) {
        if (t.target === this.element) {
            var e = this._transn
              , i = p[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[i],
            r(e.ingProperties) && this.disableTransition(),
            i in e.clean && (this.element.style[t.propertyName] = "",
            delete e.clean[i]),
            i in e.onEnd)
                e.onEnd[i].call(this),
                delete e.onEnd[i];
            this.emitEvent("transitionEnd", [this])
        }
    }
    ,
    u.disableTransition = function() {
        this.removeTransitionStyles(),
        this.element.removeEventListener(c, this, !1),
        this.isTransitioning = !1
    }
    ,
    u._removeStyles = function(t) {
        var e = {};
        for (var r in t)
            e[r] = "";
        this.css(e)
    }
    ;
    var d = {
        transitionProperty: "",
        transitionDuration: ""
    };
    return u.removeTransitionStyles = function() {
        this.css(d)
    }
    ,
    u.removeElem = function() {
        this.element.parentNode.removeChild(this.element),
        this.css({
            display: ""
        }),
        this.emitEvent("remove", [this])
    }
    ,
    u.remove = function() {
        o && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", (function() {
            this.removeElem()
        }
        )),
        this.hide()) : this.removeElem()
    }
    ,
    u.reveal = function() {
        delete this.isHidden,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {};
        e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd,
        this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    u.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }
    ,
    u.getHideRevealTransitionEndProperty = function(t) {
        var e = this.layout.options[t];
        if (e.opacity)
            return "opacity";
        for (var r in e)
            return r
    }
    ,
    u.hide = function() {
        this.isHidden = !0,
        this.css({
            display: ""
        });
        var t = this.layout.options
          , e = {};
        e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd,
        this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }
    ,
    u.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }),
        this.emitEvent("hide"))
    }
    ,
    u.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }
    ,
    i
}
)),
function(t, e) {
    "use strict";
    t.Outlayer = e(t, t.EvEmitter, t.getWindowSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, (function(t, e, r, i, n) {
    "use strict";
    function s(t, e) {
        var r = i.getQueryElement(t);
        if (r) {
            this.element = r,
            c && (this.$element = c(this.element)),
            this.options = i.extend({}, this.constructor.defaults),
            this.option(e);
            var n = ++u;
            this.element.outlayerGUID = n,
            h[n] = this,
            this._create(),
            this._getOption("initLayout") && this.layout()
        } else
            a && a.error("Bad element for " + this.constructor.namespace + ": " + (r || t))
    }
    function o(t) {
        function e() {
            t.apply(this, arguments)
        }
        return e.prototype = Object.create(t.prototype),
        e.prototype.constructor = e,
        e
    }
    var a = t.console
      , c = t.jQuery
      , l = function() {}
      , u = 0
      , h = {};
    s.namespace = "outlayer",
    s.Item = n,
    s.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var p = s.prototype;
    return i.extend(p, e.prototype),
    p.option = function(t) {
        i.extend(this.options, t)
    }
    ,
    p._getOption = function(t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }
    ,
    s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    },
    p._create = function() {
        this.reloadItems(),
        this.stamps = [],
        this.stamp(this.options.stamp),
        i.extend(this.element.style, this.options.containerStyle),
        this._getOption("resize") && this.bindResize()
    }
    ,
    p.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }
    ,
    p._itemize = function(t) {
        for (var e = this._filterFindItemElements(t), r = this.constructor.Item, i = [], n = 0; n < e.length; n++) {
            var s = new r(e[n],this);
            i.push(s)
        }
        return i
    }
    ,
    p._filterFindItemElements = function(t) {
        return i.filterFindElements(t, this.options.itemSelector)
    }
    ,
    p.getItemElements = function() {
        return this.items.map((function(t) {
            return t.element
        }
        ))
    }
    ,
    p.layout = function() {
        this._resetLayout(),
        this._manageStamps();
        var t = this._getOption("layoutInstant")
          , e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e),
        this._isLayoutInited = !0
    }
    ,
    p._init = p.layout,
    p._resetLayout = function() {
        this.getWindowSize()
    }
    ,
    p.getWindowSize = function() {
        this.size = r(this.element)
    }
    ,
    p._getMeasurement = function(t, e) {
        var i, n = this.options[t];
        n ? ("string" == typeof n ? i = this.element.querySelector(n) : n instanceof HTMLElement && (i = n),
        this[t] = i ? r(i)[e] : n) : this[t] = 0
    }
    ,
    p.layoutItems = function(t, e) {
        t = this._getItemsForLayout(t),
        this._layoutItems(t, e),
        this._postLayout()
    }
    ,
    p._getItemsForLayout = function(t) {
        return t.filter((function(t) {
            return !t.isIgnored
        }
        ))
    }
    ,
    p._layoutItems = function(t, e) {
        if (this._emitCompleteOnItems("layout", t),
        t && t.length) {
            var r = [];
            t.forEach((function(t) {
                var i = this._getItemLayoutPosition(t);
                i.item = t,
                i.isInstant = e || t.isLayoutInstant,
                r.push(i)
            }
            ), this),
            this._processLayoutQueue(r)
        }
    }
    ,
    p._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }
    ,
    p._processLayoutQueue = function(t) {
        t.forEach((function(t) {
            this._positionItem(t.item, t.x, t.y, t.isInstant)
        }
        ), this)
    }
    ,
    p._positionItem = function(t, e, r, i) {
        i ? t.goTo(e, r) : t.moveTo(e, r)
    }
    ,
    p._postLayout = function() {
        this.resizeContainer()
    }
    ,
    p.resizeContainer = function() {
        if (this._getOption("resizeContainer")) {
            var t = this._getContainerSize();
            t && (this._setContainerMeasure(t.width, !0),
            this._setContainerMeasure(t.height, !1))
        }
    }
    ,
    p._getContainerSize = l,
    p._setContainerMeasure = function(t, e) {
        if (void 0 !== t) {
            var r = this.size;
            r.isBorderBox && (t += e ? r.paddingLeft + r.paddingRight + r.borderLeftWidth + r.borderRightWidth : r.paddingBottom + r.paddingTop + r.borderTopWidth + r.borderBottomWidth),
            t = Math.max(t, 0),
            this.element.style[e ? "width" : "height"] = t + "px"
        }
    }
    ,
    p._emitCompleteOnItems = function(t, e) {
        function r() {
            n.dispatchEvent(t + "Complete", null, [e])
        }
        function i() {
            ++o == s && r()
        }
        var n = this
          , s = e.length;
        if (e && s) {
            var o = 0;
            e.forEach((function(e) {
                e.once(t, i)
            }
            ))
        } else
            r()
    }
    ,
    p.dispatchEvent = function(t, e, r) {
        var i = e ? [e].concat(r) : r;
        if (this.emitEvent(t, i),
        c)
            if (this.$element = this.$element || c(this.element),
            e) {
                var n = c.Event(e);
                n.type = t,
                this.$element.trigger(n, r)
            } else
                this.$element.trigger(t, r)
    }
    ,
    p.ignore = function(t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }
    ,
    p.unignore = function(t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }
    ,
    p.stamp = function(t) {
        (t = this._find(t)) && (this.stamps = this.stamps.concat(t),
        t.forEach(this.ignore, this))
    }
    ,
    p.unstamp = function(t) {
        (t = this._find(t)) && t.forEach((function(t) {
            i.removeFrom(this.stamps, t),
            this.unignore(t)
        }
        ), this)
    }
    ,
    p._find = function(t) {
        if (t)
            return "string" == typeof t && (t = this.element.querySelectorAll(t)),
            t = i.makeArray(t)
    }
    ,
    p._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(),
        this.stamps.forEach(this._manageStamp, this))
    }
    ,
    p._getBoundingRect = function() {
        var t = this.element.getBoundingClientRect()
          , e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }
    ,
    p._manageStamp = l,
    p._getElementOffset = function(t) {
        var e = t.getBoundingClientRect()
          , i = this._boundingRect
          , n = r(t);
        return {
            left: e.left - i.left - n.marginLeft,
            top: e.top - i.top - n.marginTop,
            right: i.right - e.right - n.marginRight,
            bottom: i.bottom - e.bottom - n.marginBottom
        }
    }
    ,
    p.handleEvent = i.handleEvent,
    p.bindResize = function() {
        t.addEventListener("resize", this),
        this.isResizeBound = !0
    }
    ,
    p.unbindResize = function() {
        t.removeEventListener("resize", this),
        this.isResizeBound = !1
    }
    ,
    p.onresize = function() {
        this.resize()
    }
    ,
    i.debounceMethod(s, "onresize", 100),
    p.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }
    ,
    p.needsResizeLayout = function() {
        var t = r(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth
    }
    ,
    p.addItems = function(t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)),
        e
    }
    ,
    p.appended = function(t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0),
        this.reveal(e))
    }
    ,
    p.prepended = function(t) {
        var e = this._itemize(t);
        if (e.length) {
            var r = this.items.slice(0);
            this.items = e.concat(r),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(r)
        }
    }
    ,
    p.reveal = function(t) {
        this._emitCompleteOnItems("reveal", t),
        t && t.length && t.forEach((function(t) {
            t.reveal()
        }
        ))
    }
    ,
    p.hide = function(t) {
        this._emitCompleteOnItems("hide", t),
        t && t.length && t.forEach((function(t) {
            t.hide()
        }
        ))
    }
    ,
    p.revealItemElements = function(t) {
        var e = this.getItems(t);
        this.reveal(e)
    }
    ,
    p.hideItemElements = function(t) {
        var e = this.getItems(t);
        this.hide(e)
    }
    ,
    p.getItem = function(t) {
        for (var e = 0; e < this.items.length; e++) {
            var r = this.items[e];
            if (r.element == t)
                return r
        }
    }
    ,
    p.getItems = function(t) {
        t = i.makeArray(t);
        var e = [];
        return t.forEach((function(t) {
            var r = this.getItem(t);
            r && e.push(r)
        }
        ), this),
        e
    }
    ,
    p.remove = function(t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
        e && e.length && e.forEach((function(t) {
            t.remove(),
            i.removeFrom(this.items, t)
        }
        ), this)
    }
    ,
    p.destroy = function() {
        var t = this.element.style;
        t.height = "",
        t.position = "",
        t.width = "",
        this.items.forEach((function(t) {
            t.destroy()
        }
        )),
        this.unbindResize();
        var e = this.element.outlayerGUID;
        delete h[e],
        delete this.element.outlayerGUID,
        c && c.removeData(this.element, this.constructor.namespace)
    }
    ,
    s.data = function(t) {
        var e = (t = i.getQueryElement(t)) && t.outlayerGUID;
        return e && h[e]
    }
    ,
    s.create = function(t, e) {
        var r = o(s);
        return r.defaults = i.extend({}, s.defaults),
        i.extend(r.defaults, e),
        r.compatOptions = i.extend({}, s.compatOptions),
        r.namespace = t,
        r.data = s.data,
        r.Item = o(n),
        i.htmlInit(r, t),
        c && c.bridget && c.bridget(t, r),
        r
    }
    ,
    s.Item = n,
    s
}
)),
function(t, e) {
    t.Packery = t.Packery || {},
    t.Packery.Rect = e()
}(window, (function() {
    "use strict";
    function t(e) {
        for (var r in t.defaults)
            this[r] = t.defaults[r];
        for (r in e)
            this[r] = e[r]
    }
    t.defaults = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    };
    var e = t.prototype;
    return e.contains = function(t) {
        var e = t.width || 0
          , r = t.height || 0;
        return this.x <= t.x && this.y <= t.y && this.x + this.width >= t.x + e && this.y + this.height >= t.y + r
    }
    ,
    e.overlaps = function(t) {
        var e = this.x + this.width
          , r = this.y + this.height
          , i = t.x + t.width
          , n = t.y + t.height;
        return this.x < i && e > t.x && this.y < n && r > t.y
    }
    ,
    e.getMaximalFreeRects = function(e) {
        if (!this.overlaps(e))
            return !1;
        var r, i = [], n = this.x + this.width, s = this.y + this.height, o = e.x + e.width, a = e.y + e.height;
        return this.y < e.y && (r = new t({
            x: this.x,
            y: this.y,
            width: this.width,
            height: e.y - this.y
        }),
        i.push(r)),
        n > o && (r = new t({
            x: o,
            y: this.y,
            width: n - o,
            height: this.height
        }),
        i.push(r)),
        s > a && (r = new t({
            x: this.x,
            y: a,
            width: this.width,
            height: s - a
        }),
        i.push(r)),
        this.x < e.x && (r = new t({
            x: this.x,
            y: this.y,
            width: e.x - this.x,
            height: this.height
        }),
        i.push(r)),
        i
    }
    ,
    e.canFit = function(t) {
        return this.width >= t.width && this.height >= t.height
    }
    ,
    t
}
)),
function(t, e) {
    var r = t.Packery = t.Packery || {};
    r.Packer = e(r.Rect)
}(window, (function(t) {
    "use strict";
    function e(t, e, r) {
        this.width = t || 0,
        this.height = e || 0,
        this.sortDirection = r || "downwardLeftToRight",
        this.reset()
    }
    var r = e.prototype;
    r.reset = function() {
        this.spaces = [];
        var e = new t({
            x: 0,
            y: 0,
            width: this.width,
            height: this.height
        });
        this.spaces.push(e),
        this.sorter = i[this.sortDirection] || i.downwardLeftToRight
    }
    ,
    r.pack = function(t) {
        for (var e = 0; e < this.spaces.length; e++) {
            var r = this.spaces[e];
            if (r.canFit(t)) {
                this.placeInSpace(t, r);
                break
            }
        }
    }
    ,
    r.columnPack = function(t) {
        for (var e = 0; e < this.spaces.length; e++) {
            var r = this.spaces[e];
            if (r.x <= t.x && r.x + r.width >= t.x + t.width && r.height >= t.height - .01) {
                t.y = r.y,
                this.placed(t);
                break
            }
        }
    }
    ,
    r.rowPack = function(t) {
        for (var e = 0; e < this.spaces.length; e++) {
            var r = this.spaces[e];
            if (r.y <= t.y && r.y + r.height >= t.y + t.height && r.width >= t.width - .01) {
                t.x = r.x,
                this.placed(t);
                break
            }
        }
    }
    ,
    r.placeInSpace = function(t, e) {
        t.x = e.x,
        t.y = e.y,
        this.placed(t)
    }
    ,
    r.placed = function(t) {
        for (var e = [], r = 0; r < this.spaces.length; r++) {
            var i = this.spaces[r]
              , n = i.getMaximalFreeRects(t);
            n ? e.push.apply(e, n) : e.push(i)
        }
        this.spaces = e,
        this.mergeSortSpaces()
    }
    ,
    r.mergeSortSpaces = function() {
        e.mergeRects(this.spaces),
        this.spaces.sort(this.sorter)
    }
    ,
    r.addSpace = function(t) {
        this.spaces.push(t),
        this.mergeSortSpaces()
    }
    ,
    e.mergeRects = function(t) {
        var e = 0
          , r = t[e];
        t: for (; r; ) {
            for (var i = 0, n = t[e + i]; n; ) {
                if (n == r)
                    i++;
                else {
                    if (n.contains(r)) {
                        t.splice(e, 1),
                        r = t[e];
                        continue t
                    }
                    r.contains(n) ? t.splice(e + i, 1) : i++
                }
                n = t[e + i]
            }
            r = t[++e]
        }
        return t
    }
    ;
    var i = {
        downwardLeftToRight: function(t, e) {
            return t.y - e.y || t.x - e.x
        },
        rightwardTopToBottom: function(t, e) {
            return t.x - e.x || t.y - e.y
        }
    };
    return e
}
)),
function(t, e) {
    t.Packery.Item = e(t.Outlayer, t.Packery.Rect)
}(window, (function(t, e) {
    "use strict";
    var r = "string" == typeof document.documentElement.style.transform ? "transform" : "WebkitTransform"
      , i = function() {
        t.Item.apply(this, arguments)
    }
      , n = i.prototype = Object.create(t.Item.prototype)
      , s = n._create;
    n._create = function() {
        s.call(this),
        this.rect = new e
    }
    ;
    var o = n.moveTo;
    return n.moveTo = function(t, e) {
        var r = Math.abs(this.position.x - t)
          , i = Math.abs(this.position.y - e);
        this.layout.dragItemCount && !this.isPlacing && !this.isTransitioning && r < 1 && i < 1 ? this.goTo(t, e) : o.apply(this, arguments)
    }
    ,
    n.enablePlacing = function() {
        this.removeTransitionStyles(),
        this.isTransitioning && r && (this.element.style[r] = "none"),
        this.isTransitioning = !1,
        this.getWindowSize(),
        this.layout._setRectSize(this.element, this.rect),
        this.isPlacing = !0
    }
    ,
    n.disablePlacing = function() {
        this.isPlacing = !1
    }
    ,
    n.removeElem = function() {
        this.element.parentNode.removeChild(this.element),
        this.layout.packer.addSpace(this.rect),
        this.emitEvent("remove", [this])
    }
    ,
    n.showDropPlaceholder = function() {
        var t = this.dropPlaceholder;
        t || ((t = this.dropPlaceholder = document.createElement("div")).className = "packery-drop-placeholder",
        t.style.position = "absolute"),
        t.style.width = this.size.width + "px",
        t.style.height = this.size.height + "px",
        this.positionDropPlaceholder(),
        this.layout.element.appendChild(t)
    }
    ,
    n.positionDropPlaceholder = function() {
        this.dropPlaceholder.style[r] = "translate(" + this.rect.x + "px, " + this.rect.y + "px)"
    }
    ,
    n.hideDropPlaceholder = function() {
        this.layout.element.removeChild(this.dropPlaceholder)
    }
    ,
    i
}
)),
function(t, e) {
    t.Packery = e(t.getWindowSize, t.Outlayer, t.Packery.Rect, t.Packery.Packer, t.Packery.Item)
}(window, (function(t, e, r, i, n) {
    "use strict";
    function s(t, e) {
        return t.position.y - e.position.y || t.position.x - e.position.x
    }
    function o(t, e) {
        return t.position.x - e.position.x || t.position.y - e.position.y
    }
    function a(t, e) {
        var r = e.x - t.x
          , i = e.y - t.y;
        return Math.sqrt(r * r + i * i)
    }
    r.prototype.canFit = function(t) {
        return this.width >= t.width - 1 && this.height >= t.height - 1
    }
    ;
    var c = e.create("packery");
    c.Item = n;
    var l = c.prototype;
    l._create = function() {
        e.prototype._create.call(this),
        this.packer = new i,
        this.shiftPacker = new i,
        this.isEnabled = !0,
        this.dragItemCount = 0;
        var t = this;
        this.handleDraggabilly = {
            dragStart: function() {
                t.itemDragStart(this.element)
            },
            dragMove: function() {
                t.itemDragMove(this.element, this.position.x, this.position.y)
            },
            dragEnd: function() {
                t.itemDragEnd(this.element)
            }
        },
        this.handleUIDraggable = {
            start: function(e, r) {
                r && t.itemDragStart(e.currentTarget)
            },
            drag: function(e, r) {
                r && t.itemDragMove(e.currentTarget, r.position.left, r.position.top)
            },
            stop: function(e, r) {
                r && t.itemDragEnd(e.currentTarget)
            }
        }
    }
    ,
    l._resetLayout = function() {
        var t, e, r;
        this.getWindowSize(),
        this._getMeasurements(),
        this._getOption("horizontal") ? (t = 1 / 0,
        e = this.size.innerHeight + this.gutter,
        r = "rightwardTopToBottom") : (t = this.size.innerWidth + this.gutter,
        e = 1 / 0,
        r = "downwardLeftToRight"),
        this.packer.width = this.shiftPacker.width = t,
        this.packer.height = this.shiftPacker.height = e,
        this.packer.sortDirection = this.shiftPacker.sortDirection = r,
        this.packer.reset(),
        this.maxY = 0,
        this.maxX = 0
    }
    ,
    l._getMeasurements = function() {
        this._getMeasurement("columnWidth", "width"),
        this._getMeasurement("rowHeight", "height"),
        this._getMeasurement("gutter", "width")
    }
    ,
    l._getItemLayoutPosition = function(t) {
        if (this._setRectSize(t.element, t.rect),
        this.isShifting || this.dragItemCount > 0) {
            var e = this._getPackMethod();
            this.packer[e](t.rect)
        } else
            this.packer.pack(t.rect);
        return this._setMaxXY(t.rect),
        t.rect
    }
    ,
    l.shiftLayout = function() {
        this.isShifting = !0,
        this.layout(),
        delete this.isShifting
    }
    ,
    l._getPackMethod = function() {
        return this._getOption("horizontal") ? "rowPack" : "columnPack"
    }
    ,
    l._setMaxXY = function(t) {
        this.maxX = Math.max(t.x + t.width, this.maxX),
        this.maxY = Math.max(t.y + t.height, this.maxY)
    }
    ,
    l._setRectSize = function(e, r) {
        var i = t(e)
          , n = i.outerWidth
          , s = i.outerHeight;
        (n || s) && (n = this._applyGridGutter(n, this.columnWidth),
        s = this._applyGridGutter(s, this.rowHeight)),
        r.width = Math.min(n, this.packer.width),
        r.height = Math.min(s, this.packer.height)
    }
    ,
    l._applyGridGutter = function(t, e) {
        if (!e)
            return t + this.gutter;
        var r = t % (e += this.gutter);
        return t = Math[r && r < 1 ? "round" : "ceil"](t / e) * e
    }
    ,
    l._getContainerSize = function() {
        return this._getOption("horizontal") ? {
            width: this.maxX - this.gutter
        } : {
            height: this.maxY - this.gutter
        }
    }
    ,
    l._manageStamp = function(t) {
        var e, i = this.getItem(t);
        if (i && i.isPlacing)
            e = i.rect;
        else {
            var n = this._getElementOffset(t);
            e = new r({
                x: this._getOption("originLeft") ? n.left : n.right,
                y: this._getOption("originTop") ? n.top : n.bottom
            })
        }
        this._setRectSize(t, e),
        this.packer.placed(e),
        this._setMaxXY(e)
    }
    ,
    l.sortItemsByPosition = function() {
        var t = this._getOption("horizontal") ? o : s;
        this.items.sort(t)
    }
    ,
    l.fit = function(t, e, r) {
        var i = this.getItem(t);
        i && (this.stamp(i.element),
        i.enablePlacing(),
        this.updateShiftTargets(i),
        e = void 0 === e ? i.rect.x : e,
        r = void 0 === r ? i.rect.y : r,
        this.shift(i, e, r),
        this._bindFitEvents(i),
        i.moveTo(i.rect.x, i.rect.y),
        this.shiftLayout(),
        this.unstamp(i.element),
        this.sortItemsByPosition(),
        i.disablePlacing())
    }
    ,
    l._bindFitEvents = function(t) {
        function e() {
            2 == ++i && r.dispatchEvent("fitComplete", null, [t])
        }
        var r = this
          , i = 0;
        t.once("layout", e),
        this.once("layoutComplete", e)
    }
    ,
    l.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && (this.options.shiftPercentResize ? this.resizeShiftPercentLayout() : this.layout())
    }
    ,
    l.needsResizeLayout = function() {
        var e = t(this.element)
          , r = this._getOption("horizontal") ? "innerHeight" : "innerWidth";
        return e[r] != this.size[r]
    }
    ,
    l.resizeShiftPercentLayout = function() {
        var e = this._getItemsForLayout(this.items)
          , r = this._getOption("horizontal")
          , i = r ? "y" : "x"
          , n = r ? "height" : "width"
          , s = r ? "rowHeight" : "columnWidth"
          , o = r ? "innerHeight" : "innerWidth"
          , a = this[s];
        if (a = a && a + this.gutter) {
            this._getMeasurements();
            var c = this[s] + this.gutter;
            e.forEach((function(t) {
                var e = Math.round(t.rect[i] / a);
                t.rect[i] = e * c
            }
            ))
        } else {
            var l = t(this.element)[o] + this.gutter
              , u = this.packer[n];
            e.forEach((function(t) {
                t.rect[i] = t.rect[i] / u * l
            }
            ))
        }
        this.shiftLayout()
    }
    ,
    l.itemDragStart = function(t) {
        if (this.isEnabled) {
            this.stamp(t);
            var e = this.getItem(t);
            e && (e.enablePlacing(),
            e.showDropPlaceholder(),
            this.dragItemCount++,
            this.updateShiftTargets(e))
        }
    }
    ,
    l.updateShiftTargets = function(t) {
        this.shiftPacker.reset(),
        this._getBoundingRect();
        var e = this._getOption("originLeft")
          , i = this._getOption("originTop");
        this.stamps.forEach((function(t) {
            var n = this.getItem(t);
            if (!n || !n.isPlacing) {
                var s = this._getElementOffset(t)
                  , o = new r({
                    x: e ? s.left : s.right,
                    y: i ? s.top : s.bottom
                });
                this._setRectSize(t, o),
                this.shiftPacker.placed(o)
            }
        }
        ), this);
        var n, s = this._getOption("horizontal"), o = s ? "rowHeight" : "columnWidth", a = s ? "height" : "width";
        this.shiftTargetKeys = [],
        this.shiftTargets = [];
        var c = this[o];
        if (c = c && c + this.gutter) {
            var l = Math.ceil(t.rect[a] / c)
              , u = Math.floor((this.shiftPacker[a] + this.gutter) / c);
            n = (u - l) * c;
            for (var h = 0; h < u; h++)
                this._addShiftTarget(h * c, 0, n)
        } else
            n = this.shiftPacker[a] + this.gutter - t.rect[a],
            this._addShiftTarget(0, 0, n);
        var p = this._getItemsForLayout(this.items)
          , d = this._getPackMethod();
        p.forEach((function(t) {
            var e = t.rect;
            this._setRectSize(t.element, e),
            this.shiftPacker[d](e),
            this._addShiftTarget(e.x, e.y, n);
            var r = s ? e.x + e.width : e.x
              , i = s ? e.y : e.y + e.height;
            if (this._addShiftTarget(r, i, n),
            c)
                for (var o = Math.round(e[a] / c), l = 1; l < o; l++) {
                    var u = s ? r : e.x + c * l
                      , h = s ? e.y + c * l : i;
                    this._addShiftTarget(u, h, n)
                }
        }
        ), this)
    }
    ,
    l._addShiftTarget = function(t, e, r) {
        var i = this._getOption("horizontal") ? e : t;
        if (!(0 !== i && i > r)) {
            var n = t + "," + e;
            -1 != this.shiftTargetKeys.indexOf(n) || (this.shiftTargetKeys.push(n),
            this.shiftTargets.push({
                x: t,
                y: e
            }))
        }
    }
    ,
    l.shift = function(t, e, r) {
        var i, n = 1 / 0, s = {
            x: e,
            y: r
        };
        this.shiftTargets.forEach((function(t) {
            var e = a(t, s);
            e < n && (i = t,
            n = e)
        }
        )),
        t.rect.x = i.x,
        t.rect.y = i.y
    }
    ;
    var u = 120;
    l.itemDragMove = function(t, e, r) {
        function i() {
            s.shift(n, e, r),
            n.positionDropPlaceholder(),
            s.layout()
        }
        var n = this.isEnabled && this.getItem(t);
        if (n) {
            e -= this.size.paddingLeft,
            r -= this.size.paddingTop;
            var s = this
              , o = new Date;
            this._itemDragTime && o - this._itemDragTime < u ? (clearTimeout(this.dragTimeout),
            this.dragTimeout = setTimeout(i, u)) : (i(),
            this._itemDragTime = o)
        }
    }
    ,
    l.itemDragEnd = function(t) {
        function e() {
            2 == ++i && (r.element.classList.remove("is-positioning-post-drag"),
            r.hideDropPlaceholder(),
            n.dispatchEvent("dragItemPositioned", null, [r]))
        }
        var r = this.isEnabled && this.getItem(t);
        if (r) {
            clearTimeout(this.dragTimeout),
            r.element.classList.add("is-positioning-post-drag");
            var i = 0
              , n = this;
            r.once("layout", e),
            this.once("layoutComplete", e),
            r.moveTo(r.rect.x, r.rect.y),
            this.layout(),
            this.dragItemCount = Math.max(0, this.dragItemCount - 1),
            this.sortItemsByPosition(),
            r.disablePlacing(),
            this.unstamp(r.element)
        }
    }
    ,
    l.bindDraggabillyEvents = function(t) {
        this._bindDraggabillyEvents(t, "on")
    }
    ,
    l.unbindDraggabillyEvents = function(t) {
        this._bindDraggabillyEvents(t, "off")
    }
    ,
    l._bindDraggabillyEvents = function(t, e) {
        var r = this.handleDraggabilly;
        t[e]("dragStart", r.dragStart),
        t[e]("dragMove", r.dragMove),
        t[e]("dragEnd", r.dragEnd)
    }
    ,
    l.bindUIDraggableEvents = function(t) {
        this._bindUIDraggableEvents(t, "on")
    }
    ,
    l.unbindUIDraggableEvents = function(t) {
        this._bindUIDraggableEvents(t, "off")
    }
    ,
    l._bindUIDraggableEvents = function(t, e) {
        var r = this.handleUIDraggable;
        t[e]("dragstart", r.start)[e]("drag", r.drag)[e]("dragstop", r.stop)
    }
    ;
    var h = l.destroy;
    return l.destroy = function() {
        h.apply(this, arguments),
        this.isEnabled = !1
    }
    ,
    c.Rect = r,
    c.Packer = i,
    c
}
)),
window._u = _.noConflict(),
window.JuicerBackbone = Backbone.noConflict(),
function() {
    window.Juicer = {
        Models: {},
        Collections: {},
        Views: {},
        Active: [],
        initialize: function() {
            return _u.each(jQuery(".juicer-feed"), (function(t) {
                var e, r;
                if ((e = jQuery(t)).is(":visible") && !e.hasClass("j-post-overlay"))
                    return e.hasClass("j-initialized") ? void 0 : (r = new Juicer.Views.Feed({
                        el: t
                    }).render(),
                    Juicer.Active.push(r),
                    e.addClass("j-initialized"),
                    console.log("This social media feed is powered by Juicer \u2013 visit https://juicer.io for more info!"))
            }
            ))
        },
        remove: function() {
            return clearInterval(window.jInterval),
            _u.each(Juicer.Active, (function(t) {
                return t.close()
            }
            )),
            window.Juicer.Active = []
        }
    }
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.SubView = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.className = "opened-sidebar-option",
        r.prototype.title = "Feed Options",
        r.prototype.initialize = function(t) {
            return this.feed = t.feed,
            this.sidebarView = t.sidebarView,
            this.$target = t.$target,
            this.feedView = t.feedView,
            this.events = _u.extend({}, this.inheritedEvents, this.events),
            this.delegateEvents()
        }
        ,
        r.prototype.inheritedEvents = {
            "click .close-subview": "close"
        },
        r.prototype.render = function() {
            return this.renderTemplate(),
            this.renderTitle(),
            this.$target.after(this.el),
            setTimeout((t = this,
            function() {
                return t.$el.addClass("visible")
            }
            ), 100);
            var t
        }
        ,
        r.prototype.renderTemplate = function() {
            return this.$el.html(this.template({
                feed: this.feed
            }))
        }
        ,
        r.prototype.renderTitle = function() {
            return this.$el.prepend(this.titleTemplate())
        }
        ,
        r.prototype.titleTemplate = function() {
            return "<h2 class='subview-title relative uc bold bg-nav-header py-25'><a class='close-subview absolute'>Close</a>" + this.title + "</h2>"
        }
        ,
        r.prototype.close = function() {
            return this.$el.removeClass("visible"),
            this.sidebarView.closeSubView(),
            setTimeout((t = this,
            function() {
                return t.remove()
            }
            ), 500);
            var t
        }
        ,
        r
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.SubViewSlide = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.className = "sliding-sidebar-option",
        r.prototype.render = function() {
            return this.renderTemplate(),
            this.$el.css({
                display: "none"
            }),
            this.$target.after(this.el),
            this.$el.slideDown()
        }
        ,
        r.prototype.close = function() {
            return this.sidebarView.closeSubView(),
            this.$el.slideUp((t = this,
            function() {
                return t.remove()
            }
            ));
            var t
        }
        ,
        r
    }(Juicer.Views.SubView)
}
.call(this),
function() {
    Juicer.Helpers = {
        renderPartial: function(t, e) {
            var r;
            null == e && (e = {}),
            (t = t.split("/"))[t.length - 1] = "_" + t[t.length - 1],
            t = t.join("/");
            try {
                return JST["partials/" + t](e)
            } catch (e) {
                return r = e,
                console.log("Sorry, something went wrong with the partial: '" + t + "'"),
                console.log(r),
                ""
            }
        },
        numberWithCommas: function(t) {
            return t.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        },
        fullDate: function(t, e, r) {
            if (null == e && (e = "%-m/%-d/%y at %-l:%M%p"),
            null == r && (r = !0),
            null != t)
                return r ? isNaN(Date.parse(t.toLocaleString())) || (t = new Date(t.toLocaleString())) : t = new Date(t),
                "undefined" == typeof strftime ? t : strftime(e, t)
        },
        prettify: function(t) {
            return t = (t = t.replace("-", " ")).replace("_", " "),
            this.capitalizeEachWord(t)
        },
        capitalizeEachWord: function(t) {
            return t.replace(/\w\S*/g, (function(t) {
                return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase()
            }
            ))
        },
        timeAgo: function(t) {
            var e, r;
            return t = new Date(t),
            r = Math.floor((new Date - t) / 1e3),
            (e = Math.floor(r / 31536e3)) > 1 ? e + "y" : (e = Math.floor(r / 2592e3)) > 1 ? e + "mo" : (e = Math.floor(r / 86400)) > 1 ? e + "d" : (e = Math.floor(r / 3600)) > 1 ? e + "h" : (e = Math.floor(r / 60)) > 1 ? e + "m" : Math.floor(r) + "s"
        },
        sample: function(t) {
            return t[Math.floor(Math.random() * t.length)]
        },
        confirm: function(t) {
            return null != window.confirmed || !!confirm(t) && (window.confirmed = !0,
            !0)
        },
        format: function(t) {
            return null == t ? null : (t = t.replace(/\r\n?/, "\n"),
            (t = jQuery.trim(t)).length > 0 && (t = (t = "<p>" + (t = (t = (t = t.replace(/\n\n+/g, "</p><p>")).replace(/\n/g, "<br />")).replace(this.xss, "")) + "</p>").autoLink()),
            t)
        },
        rgb2hex: function(t) {
            return /^#[0-9A-F]{6}$/i.test(t) ? t : (t = t.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/)) ? "#" + this.hex(t[1]) + this.hex(t[2]) + this.hex(t[3]) : "#"
        },
        hex: function(t) {
            return ("0" + parseInt(t).toString(16)).slice(-2)
        },
        xss: /javascript|onerror|alert|iframe|js|script|console|confirm|cookie|java|onmouseover|eval|document|window/gi
    }
}
.call(this),
function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
      , e = function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var n in e)
            r.call(e, n) && (t[n] = e[n]);
        return i.prototype = e.prototype,
        t.prototype = new i,
        t.__super__ = e.prototype,
        t
    }
      , r = {}.hasOwnProperty;
    Juicer.Views.FormView = function(r) {
        function i() {
            this.invalid = t(this.invalid, this),
            this.valid = t(this.valid, this),
            this.prepareModel(),
            i.__super__.constructor.apply(this, arguments)
        }
        return e(i, r),
        i.prototype.delegateEvents = function(t) {
            return this.events = _u.extend(this._baseEvents(), _u.result(this, "events")),
            i.__super__.delegateEvents.call(this, t)
        }
        ,
        i.prototype._baseEvents = function() {
            return {
                "change [data-validation]": this.validateField,
                "keyup [data-validation].keyup-validation": this.validateField,
                "keyup [data-validation].invalid": this.validateField,
                submit: this.processForm,
                "click input[type=submit]": this.processForm
            }
        }
        ,
        i.prototype.prepareModel = function() {
            return this.model = this.createModel(),
            this.setupValidation()
        }
        ,
        i.prototype.createModel = function() {
            throw new Error("implement #createModel in your FormView subclass to return a JuicerBackbone model")
        }
        ,
        i.prototype.namespace = null,
        i.prototype.loadingMessage = "Loading...",
        i.prototype.setupValidation = function() {
            return JuicerBackbone.Validation.unbind(this),
            JuicerBackbone.Validation.bind(this, {
                model: this.model,
                valid: this.valid,
                invalid: this.invalid
            })
        }
        ,
        i.prototype.valid = function(t, e) {
            var r, i;
            if (this.removeErrorMessage(e),
            this.$("[data-validation=" + e + "]").removeClass("invalid").addClass("valid"),
            r = this.$("[data-validation=" + e + "]").data("on-valid-" + e + "-custom-classes"))
                return $("[data-validation=" + e + "]")[0].value.length > 0 ? r.split(" ").forEach((i = this,
                function(t) {
                    return i.$("[data-validation=" + e + "]").addClass(t)
                }
                )) : r.split(" ").forEach(function(t) {
                    return function(r) {
                        return t.$("[data-validation=" + e + "]").removeClass(r)
                    }
                }(this))
        }
        ,
        i.prototype.invalid = function(t, e, r) {
            var i, n;
            if (this.removeErrorMessage(e),
            this.$("[data-validation=" + e + "]").removeClass("valid").addClass("invalid").parents(".form-field").append("<small class='error " + e + "'>" + r + "</small>"),
            i = this.$("[data-validation=" + e + "]").data("on-valid-" + e + "-custom-classes"))
                return i.split(" ").forEach((n = this,
                function(t) {
                    return n.$("[data-validation=" + e + "]").removeClass(t)
                }
                ))
        }
        ,
        i.prototype.showActivityIndicator = function(t) {
            return this.submit = t,
            this.submit.attr("disabled", "disabled"),
            this.submitMessage = this.submit.val(),
            this.submit.val(this.loadingMessage)
        }
        ,
        i.prototype.hideActivityIndicator = function() {
            return this.submitMessage && this.submit.val(this.submitMessage),
            this.submit.removeAttr("disabled")
        }
        ,
        i.prototype.removeErrorMessage = function(t) {
            return this.$(".error." + t).remove()
        }
        ,
        i.prototype.validateField = function(t) {
            var e, r, i;
            return r = $(t.target).attr("data-validation"),
            i = $(t.target).val(),
            (e = this.model.preValidate(r, i)) ? this.invalid(this, r, e) : this.valid(this, r)
        }
        ,
        i.prototype.processForm = function(t) {
            return t.preventDefault(),
            this.showActivityIndicator($(t.target)),
            this.updateModel(),
            this.submitForm()
        }
        ,
        i.prototype.updateModel = function() {
            var t;
            return t = JuicerBackbone.Syphon.serialize(this),
            this.model.set(t[this.namespace])
        }
        ,
        i.prototype.submitForm = function() {
            return this.model.validate() ? this.hideActivityIndicator() : this.$el[0].submit()
        }
        ,
        i
    }(JuicerBackbone.View)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST.admin_downgrade = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r, i;
                return t = "",
                e = this.action.match("delete") ? "Delete" : "Downgrade",
                t += '<div class="tac p-30"><h3 class="fs-2 mb-25">',
                t += this.escape(e),
                t += ' User</h3><form action="',
                t += this.escape(this.action),
                t += '" method="post"><input name="authenticity_token" type="hidden" value="',
                t += this.escape(this.csrf),
                t += '" /><input name="user_id" type="hidden" value="',
                t += this.escape(this.userId),
                t += '" /><div class="select mb-30"><select name="churn[reason]"><option>Why are they ',
                t += this.escape(e.slice(0, -1)),
                t += "ing their account?</option>",
                _u.each(this.reasons, (i = this,
                function(e) {
                    return t += '<option value="',
                    t += i.escape(e),
                    t += '">',
                    t += i.escape(e),
                    t += "</option>"
                }
                )),
                t += '</select></div><textarea class="bordered churn-comments mb-25" name="churn[comments]" placeholder="Notes? Any More details? Copy and paste anything they say specifically."></textarea><div class="mb-25"><input name="churn[positive]" type="hidden" value="0" /><input checked="true" id="positive" name="churn[positive]" type="checkbox" value="1" /><label for="positive">Did the customer have a positive experience with Juicer?</label></div>',
                r = this.action.match("mark") ? "Mark for Downgrade" : e + " now",
                t += '<input class="j-button" type="submit" value="',
                t += this.escape(r),
                t += '" /></form></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST.admin_password_reset = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                this.action.match("delete") ? "Delete" : "Downgrade",
                t += '<div class="tac p-30"><h3 class="fs-2 mb-25">Send the Password Reset Instructions</h3><p class="mb-20">This action will also invalidate the password reset tokens that might have been sent earlier.<br /> Please warn the user that they need to use the reset link from the latest email they received from us.</p><p class="mb-30">Some whitelabel accounts may have problems with receiving the emails from us due to DMARC policy.<br />This can be solved by sending the email from our domain juicer.io</p><form action="',
                t += this.escape(this.action),
                t += '" method="post"><input name="authenticity_token" type="hidden" value="',
                t += this.escape(this.csrf),
                t += '" /><input name="user_id" type="hidden" value="',
                t += this.escape(this.userId),
                t += '" /><div class="mb-25"><input checked="true" id="use_juicer_domain" name="use_juicer_domain" type="checkbox" value="1" /><label for="use_juicer_domain">Send the email from our domain (juicer.io)?</label></div><input class="j-button" type="submit" value="Send the Email" /></form></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST.analytics_date_range = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="tac p-50"><h2 class="fs-2">Viewing Options</h2><h3 class="fifteen tc-dark-gray mb-25">Select the dates you\u2019d like to view analytics for (month/day/year):</h3><form action="',
                t += this.escape(window.location.pathname),
                t += '"><div class="mb-30"><input class="date-range-field" name="start" placeholder="MM/DD/YYYY" type="text" value="',
                t += this.escape(this.start),
                t += '" /><span class="mx-10">to</span><input class="date-range-field" name="end" placeholder="MM/DD/YYYY" type="text" value="',
                t += this.escape(this.end),
                t += '" /></div><input class="j-button" type="submit" value="filter" /></form></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST.churn = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="tac p-50"><h1 class="fs-1-5 tc-dark-gray bold mb-25">Are you sure you want to delete your account?</h1><p class="tc-dark-gray mb-25 fifteen">Deleting your account will remove all of your data and cause any embedded feeds to stop working. It might be worth instead downgrading to a small plan, which will keep your paid plan active until the next billing date, and at that point, downgrade you to a small plan, which will maintain one feed with 2 sources.</p><a class="j-button small mb-40" href="/plans?mpevent=churn">No, downgrade my account instead.</a><a class="delete tc-gray block fourteen pointer">Yes, let\'s delete my account.</a></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST.downgrade_overlay = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="p-50 tac"><h2 class="fs-2 tac">Your Juicer Account Will Downgrade</h2><p class="tc-gray fourteen mb-25">Your Juicer Account will remain active as a <strong>',
                t += this.escape(this.plan),
                t += "</strong> account until <strong>",
                t += this.escape(this.downgradeAt),
                t += '</strong> at which point it will become a small plan, with 1 feed and 2 sources and Juicer branding. </p><a class="j-button small mb-20" href="/plans?mpevent=reactivate_account">I want to reactivate my account!</a><a class="tc-gray block fourteen" href="/">Sounds good! Take me to my feed.</a></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["enterprise/admin"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += "<h3>",
                this.model.get("is_invitation_accepted") ? t += this.escape(this.model.get("email") + ("owner" === this.model.get("role") ? " (owner)" : "")) : (t += this.escape(this.model.get("email")),
                t += '<em><small class="fs-0-75">',
                t += this.escape(" (invited on " + Juicer.Helpers.fullDate(this.model.get("invitation_sent_at")) + ")"),
                t += "</small></em>"),
                t += '</h3><a class="delete-user" data-confirm="Are you sure you want to remove this user from your enterprise account and all associated feeds?" data-method="post" href="/enterprise/',
                t += this.escape(this.account.get("slug")),
                t += "/",
                t += this.escape(this.model.get("id")),
                t += '/remove" rel="nofollow">Remove</a>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["enterprise/calculator"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="row"><div class="col-12 col-sm-6 col-md-4 tac"><h3 class="fs-3 calculator-sources">',
                t += this.escape(this.model.sources()),
                t += '</h3><h4 class="mb-25">Social Media Sources</h4><input class="bg-dark-gray" data-attribute="sources" max="21" min="1" type="range" value="',
                t += this.escape(this.model.get("sources")),
                t += '" /></div><div class="col-12 col-sm-6 col-md-4 tac"><h3 class="fs-2 calculator-frequency">',
                t += this.escape(this.model.frequencyInWords()),
                t += '</h3><h4 class="mb-25">Update Frequency</h4><input class="bg-dark-gray" data-attribute="frequency" max="7" min="1" type="range" value="',
                t += this.escape(this.model.get("frequency")),
                t += '" /></div><div class="col-12 col-sm-6 col-md-4 tac"><h3 class="fs-3 calculator-price">',
                t += this.escape(this.model.priceString()),
                t += '</h3><h4 class="calculator-price-label">',
                t += this.model.priceLabel(),
                t += "</h4></div></div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["enterprise/create_assignment_form"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="p-50 tac"><h2 class="fs-2">Add User to "',
                t += this.escape(this.model.get("name")),
                t += '"</h2><form class="new-assignment" method="post"><input name="enterprise_id" type="hidden" value="',
                t += this.escape(this.account.get("slug")),
                t += '" /><input name="feed_id" type="hidden" value="',
                t += this.escape(this.model.get("id")),
                t += '" /><input class="mb-25 bordered" name="email" placeholder="Their Email Address" type="email" /><input class="fw j-button" name="commit" type="submit" value="Add User to ',
                t += this.escape(this.model.get("name")),
                t += '" /></form></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["enterprise/feed"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r, i;
                return t = "",
                e = this.model.get("slug"),
                t += '<h3 class="mb-10 enterprise-feed-name"><a class="fs-2 tc-dark-gray feed-icon" href="/feeds/',
                t += this.escape(e),
                t += '">',
                t += this.escape(this.model.get("name")),
                t += '</a></h3><ul class="enterprise-feed-actions"><li class="ibt"><a aria-label="View Feed" class="enterprise-feed-view hint--bottom-left" href="/feeds/',
                t += this.escape(e),
                t += '">View</a></li>',
                this.account.get("auto_fetch_all") && (t += '<li class="ibt ml-10"><a aria-label="Fetch all posts for all sources in this feed" class="fetch-all hint--bottom-left" href="#">Fetch All Posts</a></li>'),
                t += '<li class="ibt ml-10"><a aria-label="Edit this Feed" class="enterprise-feed-edit hint--bottom-left" href="/feeds/',
                t += this.escape(e),
                t += '/edit">Edit</a></li><li class="ibt ml-10"><a aria-label="Delete this Feed" class="enterprise-feed-delete hint--bottom-left" data-confirm="Are you sure you want to delete ',
                t += this.escape(e),
                t += ' feed? This will remove all sources and posts and is non-reversible." data-method="delete" href="/feeds/',
                t += this.escape(e),
                t += '" rel="nofollow">Delete</a></li></ul>',
                r = this.model.get("sources").length,
                t += '<div class="tc-dark-gray enterprise-feed-pricing">',
                t += this.escape(this.model.get("update_frequency_in_words")),
                t += " \xd7 ",
                t += this.escape(r),
                t += " ",
                t += this.escape(_u("source").pluralize(r)),
                t += " = <strong>",
                t += this.escape(this.model.get("formatted_cost")),
                t += '</strong> per month </div><ul class="my-5">',
                _u.each(this.sources, (i = this,
                function(e) {
                    var r, n, s;
                    switch (s = e.get("term"),
                    t += "<li",
                    r = s) {
                    case !0:
                        t += ' alt="alt"';
                        break;
                    case !1:
                    case null:
                        break;
                    default:
                        t += ' alt="',
                        t += i.escape(r),
                        t += '"'
                    }
                    switch (t += ' aria-label="',
                    t += i.escape(e.displayName()),
                    t += '" class="enterprise-feed-source hint--bottom-right"',
                    n = s) {
                    case !0:
                        t += ' title="title"';
                        break;
                    case !1:
                    case null:
                        break;
                    default:
                        t += ' title="',
                        t += i.escape(n),
                        t += '"'
                    }
                    return t += '><span class="j-',
                    t += i.escape(e.get("source").toLowerCase()),
                    t += ' j-social-icon bg-none tc-gray fs-1"></span></li>'
                }
                )),
                t += '</ul><h4 class="fs-1-2-5 tc-dark-gray mb-5">Feed Users</h4><ul class="enterprise-user-assignments-dashboard-container">',
                _u.each(this.assignments, function(e) {
                    return function(r) {
                        return t += '<li class="enterprise-user-dashboard-assignment"><span class="enterprise-assignment-dashboard-email">',
                        t += e.escape(r.get("email")),
                        t += "</span>",
                        r.get("belongs_to_account_manager") || (t += '<a aria-label="Delete user ',
                        t += e.escape(r.get("email")),
                        t += " from feed ",
                        t += e.escape(e.model.get("name")),
                        t += '." class="delete-dashboard-assignment" data-id="',
                        t += e.escape(r.get("id")),
                        t += '"></a>'),
                        t += "</li>"
                    }
                }(this)),
                t += '<li class="enterprise-user-assignment ibt tc-gray add-assignment">+ Add Collaborator</li></ul>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["enterprise/invite_admin"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="p-50 tac"><h2 class="fs-2">Add new staff member</h2><h3 class="fs-gray mb-25">This will add them to all feeds, allow them to create new feeds and edit existing feeds.</h3><form accept-charset="UTF-8" action="/enterprise/',
                t += this.escape(this.model.get("slug")),
                t += '/admin" method="post"><div style="display:none"><input name="utf8" type="hidden" value="\u2713" /><input name="authenticity_token" type="hidden" value="',
                t += this.escape(this.csrf),
                t += '" /></div><input class="mb-25 bordered" name="email" placeholder="Their Email Address" type="email" /><input class="fw j-button" name="commit" type="submit" value="Invite new staff member" /></form></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["enterprise/show"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<h1 class="fs-2 mb-25">',
                t += this.escape(Juicer.Helpers.capitalizeEachWord(this.model.get("plan") + " dashboard")),
                t += "</h1>",
                t += Juicer.Helpers.renderPartial("enterprise_sidebar", {
                    model: this.model
                }),
                t += '<div class="enterprise-content">',
                this.model.get("yearly") || "enterprise" !== this.model.get("plan") || (t += '<div class="enterprise-cost bg-white border tac mb-50 p-40"><h4 class="fs-1-25 tc-dark-gray">Estimated monthly costs for your Enterprise account</h4><h3 class="fs-3 tc-dark-gray">',
                t += this.escape(this.model.get("formatted_cost_with_minimum_fee")),
                t += '</h3><p class="px-50">This rough estimate is calculated based on the number of sources you had during the last 24h and their update frequencies. It does not take into account how many sources you had before that.</p></div>'),
                t += '<div class="row mb-25"><div class="col-6 tal"><a class="j-button" href="/feeds/new">+ Add New Feed</a></div><div class="col-6"><input class="enterprise-search bordered" id="js-enterprise-search" placeholder="Filter feeds by name" type="search" value="',
                t += this.escape(this.model.query),
                t += '" /></div></div><ul class="feeds tac"></ul></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["enterprise/user"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r;
                switch (t = "",
                t += '<div class="enterprise-user"><h3>',
                t += this.escape(this.model.get("email")),
                t += "</h3>",
                t += '<a class="delete-user"',
                e = "Are you sure you want to remove this user from your enterprise account and all associated feeds?") {
                case !0:
                    t += ' data-confirm="data-confirm"';
                    break;
                case !1:
                case null:
                    break;
                default:
                    t += ' data-confirm="',
                    t += this.escape(e),
                    t += '"'
                }
                return t += ' data-method="post" href="/enterprise/',
                t += this.escape(this.account.get("slug")),
                t += "/",
                t += this.escape(this.model.get("id")),
                t += '/remove" rel="nofollow">Remove</a></div><ul class="enterprise-user-feeds"><h4 class="uc bold mb-10">Feeds they can access</h4>',
                _u.each(this.model.get("assignments"), (r = this,
                function(e) {
                    return t += '<li class="enterprise-user-assignment ibt">',
                    t += r.escape(e.name),
                    t += '<a aria-label="Delete user ',
                    t += r.escape(e.email),
                    t += " from feed ",
                    t += r.escape(e.name),
                    t += '." class="delete-assignment" data-id="',
                    t += r.escape(e.id),
                    t += '"></a></li>'
                }
                )),
                t += "</ul>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["enterprise/users"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<h1 class="fs-2 mb-25">',
                t += this.escape(Juicer.Helpers.capitalizeEachWord(this.model.get("plan") + " dashboard")),
                t += '</h1><div class="cf">',
                t += Juicer.Helpers.renderPartial("enterprise_sidebar", {
                    model: this.model
                }),
                t += '<div class="enterprise-content"><div class="row mb-15"><div class="col-8"><h2 class="fs-1-5">Account owner & staff</h2><p>Users listed here can access and edit all feeds of this account as well as create new feeds.</p></div><div class="col-4"><a class="j-button small fr new-enterprise-admin">+ Add new staff member</a></div></div><ul class="enterprise-admins bg-white border mb-40"></ul><div class="row mb-15"><div class="col-12"><h2 class="fs-1-5">Feed Collaborators</h2><p>Users listed here can only access certain feeds. They cannot create new feeds.</p><p>You can invite more collaborators to specific feeds on the <a class="tdu tc-dark-gray" href="/enterprise/',
                t += this.escape(this.model.get("slug")),
                t += '">Your Feeds</a> page. </p></div></div><ul class="enterprise-users"></ul></div></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["enterprise/white_label"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e;
                if (t = "",
                t += '<h1 class="fs-2 mb-25">Enterprise dashboard</h1>',
                t += Juicer.Helpers.renderPartial("enterprise_sidebar", {
                    model: this.model
                }),
                t += '<div class="enterprise-content"><div class="bg-white border p-30">',
                this.model.get("white_label"))
                    t += '<h1 class="white-label-success tc-black fs-1-25 mb-25 tac">Success! ',
                    t += this.escape(this.model.get("host")),
                    t += ' is now set up to White Label Juicer</h1><div class="tc-gray fifteen"><p class="mb-25">You\'ll notice that when you visit the feed from that URL the functionality is limited. This is on purpose. We\'d recommend visiting your admin dashboard from the Juicer domain, and just use this one for clients.</p><p>When you invite a client to a feed it should automatically link them to this URL (you should test this out first). (Click "+ add user" next to one of your feeds from your enterprise dashboard).</p>',
                    this.model.get("white_label_cname") && (t += '<p class="mt-25">In order to get your White Labeled Juicer working with HTTPS, please add a CNAME record pointing to ',
                    t += this.escape(this.model.get("white_label_cname")),
                    t += " to your DNS.</p>"),
                    t += "</div>";
                else {
                    switch (t += '<h1 class="tc-dark-gray fs-1-5 mb-25">Set up White Label</h1><p class="mb-25 tc-dark-gray fs-1">Want to host Juicer on your own URL with your own logo? Something like <strong>http://social.yourdomain.com</strong>? We need to set this up. <ol class="enterprise_whiteLabelSteps"><li>Create a subdomain or a new domain and set its <strong>CNAME</strong> to <br /><strong>juicer-io.herokuapp.com</strong>. </li><li>Once you\'ve done so, enter the domain URL below: </li></ol><form class="mt-20 white-label-url">',
                    t += '<input class="mb-10 bordered" name="url" placeholder="http://feeds.yourdomain.com" type="url"',
                    e = this.model.get("url") ? this.model.get("url") : null) {
                    case !0:
                        t += ' value="value"';
                        break;
                    case !1:
                    case null:
                        break;
                    default:
                        t += ' value="',
                        t += this.escape(e),
                        t += '"'
                    }
                    t += ' /><input class="fw j-button" type="submit" value="Confirm Domain is set up" /></form></p>',
                    this.model.get("error") && (t += '<div class="cname-error mt-40 p-25 tc-gray"><strong>',
                    t += this.escape(this.model.get("host")),
                    t += "</strong> is not resolving with a CNAME to juicer-io.herokuapp.com. If you've set it up, please try again later, as this can take up to 48 hours to resolve. </div>")
                }
                return t += "</div></div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST.entertainment = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e;
                return t = "",
                t += '<div class="entertainment-container">',
                this.feed.displayFilters() && (t += Juicer.Helpers.renderPartial("filters/" + this.feed.filterPartial(), {
                    feed: this.feed,
                    filter: this.filter
                })),
                t += '<ul class="entertainment-ul">',
                _u.each(this.chunks, (e = this,
                function(r, i) {
                    var n, s;
                    return n = [],
                    s = [],
                    _u.each(r, (function(t) {
                        var r;
                        return e.largePosts.includes(t) ? n.length < 1 ? n.push(t) : e.chunks[i + 1] ? (r = e.chunks[i + 1].find((function(t) {
                            return !t.get("edit")
                        }
                        )),
                        e.chunks[i + 1].splice(e.chunks[i + 1].indexOf(r), 1),
                        e.chunks[i + 1].push(t),
                        s.push(r)) : s.push(t) : s.length < 2 ? s.push(t) : n.push(t)
                    }
                    )),
                    i % 3 == 1 ? (t += '<div><div class="entertainment-small">',
                    s[0] && (t += Juicer.Helpers.renderPartial("entertainment_card", {
                        post: s[0],
                        size: "small",
                        isOnFeedsDashboard: e.isOnFeedsDashboard
                    })),
                    s[1] && (t += Juicer.Helpers.renderPartial("entertainment_card", {
                        post: s[1],
                        size: "small",
                        isOnFeedsDashboard: e.isOnFeedsDashboard
                    })),
                    t += "</div>",
                    t += Juicer.Helpers.renderPartial("entertainment_card", {
                        post: n[0],
                        size: "large",
                        isOnFeedsDashboard: e.isOnFeedsDashboard
                    }),
                    t += "</div>") : (t += "<div>",
                    t += Juicer.Helpers.renderPartial("entertainment_card", {
                        post: n[0],
                        size: "large",
                        isOnFeedsDashboard: e.isOnFeedsDashboard
                    }),
                    t += '<div class="entertainment-small">',
                    s[0] && (t += Juicer.Helpers.renderPartial("entertainment_card", {
                        post: s[0],
                        size: "small",
                        isOnFeedsDashboard: e.isOnFeedsDashboard
                    })),
                    s[1] && (t += Juicer.Helpers.renderPartial("entertainment_card", {
                        post: s[1],
                        size: "small",
                        isOnFeedsDashboard: e.isOnFeedsDashboard
                    })),
                    t += "</div></div>")
                }
                )),
                t += "</ul></div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST.errors = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e;
                return t = "",
                t += '<ul class="errors source-errors px-25 mb-15">',
                $.each(this.errors, (e = this,
                function(r) {
                    return _u.each(e.errors[r], (function(e) {
                        return t += '<li class="tc-grapefruit">',
                        t += e,
                        t += "</li>"
                    }
                    ))
                }
                )),
                Juicer.Constants.SOURCES_REQUIRING_OAUTH_TOKENS.indexOf(this.source) >= 0 && (t += '<li class="d-flex flex-row p-5 mt-10"><div class="bold mr-10 tal tc-grapefruit">TIP:</div><ul><li><div class="tc-grapefruit tal">Check that your <a href="/social-accounts">Juicer ',
                t += this.escape(this.source),
                t += " Social Account</a> is working and hasn't expired. </div></li></ul></li>"),
                t += "</ul>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST.feed = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r;
                return t = "",
                e = "slider" === this.feed.get("css") ? _u.filter(this.feed.get("posts").models, (function(t) {
                    return "YouTube" !== t.sourceType()
                }
                )) : this.feed.get("posts").models,
                this.feed.displayFilters() && (t += Juicer.Helpers.renderPartial("filters/" + this.feed.filterPartial(), {
                    feed: this.feed,
                    filter: this.filter
                })),
                e.length <= 0 ? this.isOnFeedsDashboard ? (t += '<div class="empty"><img height="386" src="/empty-feed.svg" width="600" /><p class="fs-1-25 mb-40 bold">There are currently no posts in your feed to display.</p>',
                _u.some(this.feed.get("sources").models, (function(t) {
                    return "LinkedIn" === t.get("source")
                }
                )) && (t += '<div class="mb-50 p-20 mx-auto" style="border: 2px solid blue; width: 75%"><p class="bold fs-1-25 mb-10"><span>Please wait a few minutes for</span> <span class="tc-blue">LinkedIn</span> <span>posts to be imported into Juicer.</span></p><div class="small">Please try again by reloading the page and check your filters in <i>Feed Settings.</i></div><div class="small mt-5">Having troubles? Please refer to our <a href="https://help.juicer.io/hc/en-us/articles/360040406391-LinkedIn-sources-Adding-troubleshooting-and-limitations" target="_blank">help page or contact support.</a></div></div>'),
                t += '<a class="j-button add-source tc-white mb-40" onclick="window.juicerDashboardSidebar.openNewSource()">+ Add social media source </a>',
                this.feed.get("moderation_allowed?") && (t += '<p class="fs-1 tc-gray">If you have already added social media source, check your <a class="tc-gray" href="',
                t += this.escape(window.location.pathname),
                t += '/moderation">moderation queue</a> <span>or filters in Feed Settings! </span></p>'),
                t += "</div>") : t += '<div class="empty"><h2>No Posts!</h2></div>' : (t += Juicer.Helpers.renderPartial("custom_styles", {
                    feed: this.feed
                }),
                _u.each(e, (r = this,
                function(e) {
                    var i;
                    return t += "<li",
                    i = "",
                    (i += r.escape(e.classes())).length > 0 && (t += ' class="',
                    t += i,
                    t += '"'),
                    t += ' data-id="',
                    t += r.escape(e.get("id")),
                    t += '" data-source="',
                    t += r.escape(e.lowerType()),
                    t += '">',
                    t += Juicer.Helpers.renderPartial("actions", {
                        isOnFeedsDashboard: r.isOnFeedsDashboard,
                        post: e,
                        feed: r.feed
                    }),
                    t += Juicer.Helpers.renderPartial("feeds/" + r.feed.partial(), {
                        post: e,
                        feed: r.feed
                    }),
                    !e.ad && e.ctaAdded() && "modern" === r.feed.get("css") && (t += '<div class="j-cta" style="background-color: ',
                    t += r.escape(r.feed.getColor("feed_background")),
                    t += ';">',
                    t += Juicer.Helpers.renderPartial("cta", {
                        post: e,
                        feed: r.feed
                    }),
                    t += "</div>"),
                    t += "</li>"
                }
                ))),
                t
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["feeds/accessibility_confirm"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="tac pt-30"><h3 class="fs-2 tc-black">Improved feed accessibility</h3><div class="px-50 accessibility-text"><p class="mb-10 mt-10">We are introducing a new and improved feed experience according to WCAG accessibility standards that is easier to navigate for all users, including those with physical, situational, and economic barriers. </p><p class="mb-10">Please note that this update may affect any custom CSS you have set up for your feed. To ensure everything works smoothly, we recommend checking your custom CSS and updating your code snippet or WordPress plugin. </p><p class="mb-10">To update your feed: </p><ol class="mb-10"><li>1. Check your custom CSS to <b>make sure it does not depend on the ul and li elements</b>. </li><li>2. Click the "Save" button in the settings window. </li><li>3. Replace the code snippet on your website with the new one provided, or update your WordPress plugin. </li></ol><p class="mb-10">If you are using an iframe, you do not need to make any updates. Your experience will automatically be updated with the changes. </p><p class="mb-10">If you have any additional question or issues, please use the "Help" button at the bottom right. </p></div><div class="mb-20 mt-20"><button class="mr-10 accessibility-close j-button secondary">',
                t += this.escape("Cancel"),
                t += '</button><button class="accessibility-confirm j-button">',
                t += this.escape("Save"),
                t += "</button></div></div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["feeds/accessibility_toggle"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e;
                switch (t = "",
                t += '<div class="p-20 thirteen"><input',
                e = this.accessibility_checked) {
                case !0:
                    t += ' checked="checked"';
                    break;
                case !1:
                case null:
                    break;
                default:
                    t += ' checked="',
                    t += this.escape(e),
                    t += '"'
                }
                return t += ' id="feed-layout-change" name="feed[embed_layout]" type="checkbox" value="v2" /><label for="feed-layout-change">',
                t += this.escape("Improved feed accessibility"),
                t += '</label><div aria-label="Improved feed experience for all users, including those with physical, situational, and economic barriers." class="sidebar-explainer hint--bottom hint--large ib ml-10 relative"></div></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["feeds/analytics"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<h4 class="fourteen mb-30">Track your posts, page views, clickthroughs and user engagement over time to see how your feed is being used.</h4><a class="bold fourteen tdu launch pointer">Launch ',
                t += this.escape(this.feed.get("name")),
                t += " Analytics</a>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["feeds/analytics_overlay"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="p-50 tac"><h2 class="fs-2">Analytics for Juicer feed "',
                t += this.escape(this.feed.get("name")),
                t += '"</h2><h3 class="fs-1-5 mb-30">Only large or enterprise plans can access Juicer\'s analytics feature. Please upgrade your plan!</h3><a class="j-button" href="/plans?mpevent=analytics_upgrade">Upgrade your plan </a></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["feeds/color_picker"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="color-fields p-15" data-color="',
                t += this.escape(this.colorAttr),
                t += '"><div class="color-input-container"><div class="double-border color-example" style="background-color: ',
                t += this.escape(this.color),
                t += '"></div><div class="color-example-bg double-border-bg"></div><input class="color-input" pattern="',
                t += this.escape(this.pattern),
                t += '" type="color" value="',
                t += this.escape(this.color),
                t += '" /></div><input class="hex-input" pattern="',
                t += this.escape(this.pattern),
                t += '" type="text" value="',
                t += this.escape(this.color),
                t += '" /></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["feeds/css_overlay"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="tac p-30"><h2 class="fs-2">Customize Theme CSS</h2><p class="fifteen tc-gray">Add Custom CSS styles to your Juicer Feed. You can learn more about the best way to handle these customizations <a class="tc-gray bold" href="/blog/create-a-custom-embeddable-aggregate-social-media-feed-with-css-and-juicer" target="_blank">here</a>. </p><form class="css-form">',
                t += '<textarea class="bordered my-40" name="css" placeholder="Enter Custom CSS to modify the look of your Juicer Feed..." style="height: 40vh;">',
                t += this.feed.get("custom_css") ? this.feed.get("custom_css") : "",
                t += '</textarea><input class="j-button" type="submit" value="Save Changes" /></form></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["feeds/design"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e;
                return t = "",
                t += '<div class="pt-20 px-20 fourteen relative">',
                t += Juicer.Helpers.renderPartial("css", {
                    feed: this.feed,
                    label: !0
                }),
                t += '<label class="settings-label">Feed Display</label><div class="mb-30">',
                t += Juicer.Helpers.renderPartial("interval", {
                    feed: this.feed
                }),
                "entertainment" !== this.feed.get("css") && (t += Juicer.Helpers.renderPartial("columns", {
                    feed: this.feed
                })),
                t += Juicer.Helpers.renderPartial("width", {
                    feed: this.feed
                }),
                t += Juicer.Helpers.renderPartial("height", {
                    feed: this.feed
                }),
                null == this.feed.get("height") && null == this.feed.get("width") || (t += '<label class="ib mt-10 thirteen">If you want the feed to fill all available space remove the height and width.</label>'),
                t += '</div><h3 class="bold mb-10">Feed Colors</h3><ul class="bg-white-field tc-slevin mb-10">',
                _u.each(this.feed.colors, (e = this,
                function(r) {
                    return t += '<li class="p-15 relative feed-color" data-color="',
                    t += e.escape(r),
                    t += '"><div class="bold">',
                    t += e.escape(e.feed.customColorMap[r].label),
                    e.feed.customColorMap[r].description && (t += '<div aria-label="',
                    t += e.escape(e.feed.customColorMap[r].description),
                    t += '" class="sidebar-explainer hint--right hint--medium"></div>'),
                    t += '</div><div class="color-picker"><div class="double-border color-picker-circle" style="background: ',
                    t += e.escape(e.feed.getColor(r)),
                    t += '"></div><div class="double-border-bg color-picker-background-color"></div></div></li>'
                }
                )),
                t += '</ul><div class="checkbox mb-15 thirteen relative"><input name="feed[colored_icons]" type="hidden" value="0" />',
                this.feed.get("colored_icons") ? t += '<input checked="true" data-attribute="colored_icons" id="colored_icons" name="feed[colored_icons]" type="checkbox" />' : t += '<input data-attribute="colored_icons" id="colored_icons" name="feed[colored_icons]" type="checkbox" />',
                t += '<label for="colored_icons">',
                t += this.escape("Color in social network icons"),
                t += '</label></div></div><a class="twelve tdu pointer mb-40 block tac reset-style">Restore Default Template Colors</a>',
                this.feed.get("moderation_allowed?") || (t += '<div class="px-20 pb-20 tac"><h3 class="tc-grapefruit bold fourteen mb-15">Tailor your design for the perfect website fit. Make the move.</h3>',
                t += Juicer.Helpers.renderPartial("upgrade_plan", {
                    feed: this.feed,
                    css: "j-button small",
                    mpevent: "custom_design_sidebar_upgrade",
                    label: "Upgrade Now"
                }),
                t += "</div>"),
                t += '<div class="px-20 fourteen relative">',
                this.feed.get("moderation_allowed?") || (t += '<div class="filter-blocker custom-style-not-allowed"></div>'),
                t += '<div class="mb-40"><h3 class="bold mb-10">Advanced Customizations</h3><div class="thirteen"><a class="jcr-btn-secondary extra-small customize-css jcr-font-normal">Customize CSS<i class="ri-arrow-right-line"></i></a></div></div><a class="jcr-btn-red jcr-block jcr-text-center jcr-w-full mb-10 save-style">Save Settings</a></div><div class="px-20 fourteen relative"><a class="fourteen tc-dark-blue tdu mt-40 d-block" href="',
                t += this.escape(Juicer.Constants.HELP_CENTER_URL),
                t += '/articles/360039929412-Code-customizations-for-date-range-feed-style-spacing-filtering-and-more" target="_blank">Other Customization Options<span class="external-link-icon">',
                t += Juicer.Constants.SVG_ICONS.externalLink,
                t += "</span></a></div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["feeds/embed"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="p-20 fourteen"><textarea class="embed embed-textarea mb-15 ten tc-embed p-15" oncopy="htmx.ajax(&#39;POST&#39;, &#39;/track&#39;, { values: { event_name: &#39;embed_snippet_copied&#39;, properties: { embed_type: &#39;embed-code&#39; } } })">',
                t += this.embed,
                t += '</textarea><a class="tc-gray tdu" href="',
                t += this.escape(Juicer.Constants.HELP_CENTER_URL),
                t += '/articles/360039929412-Code-customizations-for-date-range-feed-style-spacing-filtering-and-more" target="_blank">Customize my embed.</a></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["feeds/embed_code"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                "v2" === this.overrideEmbedLayout || "v2" === this.feed.get("embed_layout") ? t += '<script type="text/javascript" src="' + this.javascriptV2Path + '" async defer></script>' : (t += '<script src="',
                t += this.escape(this.javascript),
                t += '" type="text/javascript"></script><br /><link href="',
                t += this.escape(this.stylesheet),
                t += '" media="all" rel="stylesheet" type="text/css" /><br /><ul class="juicer-feed" data-feed-id="',
                t += this.escape(this.feed.get("slug")),
                t += '" data-origin="',
                t += this.escape(Juicer.Constants.PAGE_URL_EMBED_CODE_ORIGIN),
                t += '">',
                this.feed.paid() || (t += Juicer.Helpers.renderPartial("referral")),
                t += "</ul>"),
                t
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["feeds/embed_menu"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e;
                return t = "",
                t += '<div class="embed-menu-container"><h2 class="bold mt-10 mb-10">Copy and Paste this code into your site.</h2><div class="white-select fourteen"><select class="embed-menu">',
                _u.each(this.embedOptions, (e = this,
                function(r) {
                    return e.currentlySelected === r.value ? (t += '<option selected="true" value="',
                    t += e.escape(r.value),
                    t += '">',
                    t += e.escape(r.label),
                    t += "</option>") : (t += '<option value="',
                    t += e.escape(r.value),
                    t += '">',
                    t += e.escape(r.label),
                    t += "</option>")
                }
                )),
                t += "</select></div></div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["feeds/features"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="fifteen"><h4 class="mb-10">Upgrade your plan and get:</h4><ul class="pl-10 mb-10 list-disc"><li>More frequent feed updates</li><li>More Social Media Sources</li><li>More Feeds</li><li>Moderation and Filtering</li><li>Feed Analytics</li><li>Instant Support and Integration Assistance</li></ul></div><a class="j-button small" href="/plans?mpevent=features_list" style="font-size:11px;">Upgrade your plan </a>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["feeds/feed_name_edit"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<form class="js-feed-name-edit-form p-40 tac"><h2 class="fs-2">Edit Feed Name</h2><input autofocus="yes" class="bordered mb-15" name="name" type="text" value="',
                t += this.escape(this.feed.get("name")),
                t += '" /><div class="mb-15"><input id="slug_update" name="slug_update" type="checkbox" /><label for="slug_update">Also update the feed\'s URL</label><p class="slug-warning tc-grapefruit hide fourteen">Updating the feed URL will also change your embed code so if you already have your feed embedded in a different page you\'ll have to update the Juicer embed code there too. We will moodify the URL to remove any characters that are not URL-friendly and resolve conflicts with existing feeds.</p></div><input class="j-button" type="submit" value="Save" /></form>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["feeds/hub"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e;
                return t = "",
                t += '<div class="tac"><h3 class="fourteen mb-20">Share this link:</h3>',
                e = window.location.protocol + "//" + window.location.host + "/hub/" + this.feed.get("slug"),
                t += '<div class="bg-white tc-black fourteen tal p-10 mb-15 relative" style="word-break: break-all" x-data="{ code: &#39;',
                t += this.escape(e),
                t += '&#39; }" x-on:click="$clipboard(code)">',
                t += this.escape(e),
                t += '<a class="jcr-cursor-pointer jcr-text-gray absolute p-5" style="right:0;bottom:0;"><i class="ri-file-copy-line"></i></a></div><a class="j-button small" href="/feeds/',
                t += this.escape(this.feed.get("slug")),
                t += '/preview?location=feed_sidebar" style="font-size:11px;letter-spacing:-0.25px;" target="_blank">View your public feed</a></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["feeds/iframe"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="p-20 fourteen"><textarea class="ten tc-embed p-15 mb-10 iframe-embed" oncopy="htmx.ajax(&#39;POST&#39;, &#39;/track&#39;, { values: { event_name: &#39;embed_snippet_copied&#39;, properties: { embed_type: &#39;iframe&#39; } } })">',
                t += this.iframe,
                t += "</textarea><p>You may have to adjust width and height to get it to work. You should only use this if the standard embed isn't working for you.</p></div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["feeds/moderate"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r;
                return t = "",
                t += '<div class="tac fourteen"><h3 class="uc bold mt-20">You are Viewing</h3><ul class="moderation-nav"><li class="active public">Public Posts</li><li class="moderated">Moderated Posts</li></ul><p class="px-15">To remove a post from your live feed hover over the post and select the trash icon. The post will be sent to your moderation queue.</p></div>',
                this.feed.get("moderation_allowed?") ? (t += '<form class="filters" method="post">',
                t += Juicer.Helpers.renderPartial("toggle", {
                    attr: "queue",
                    feed: this.feed,
                    label: "Send All Posts to Moderation",
                    hint: "With this option enabled, new posts will not automatically go to your live feed. Instead, you must first manually approve them from your moderation queue.",
                    hintPosition: "bottom",
                    classes: "mt-40"
                }),
                t += '<div class="p-20 fourteen relative"><div class="filter-blocker"></div>',
                r = "list words, @usernames, or #hastags",
                e = "Separate filters with a comma. Filters are case-insensitive.",
                t += '<h3 class="settings-label">Disallow posts with these words:</h3><textarea class="moderation-filter thirteen mb-10" name="feed[disallowed]" placeholder="',
                t += this.escape(r),
                t += " to block. ",
                t += this.escape(e),
                t += '">',
                t += this.feed.disallowed(),
                t += '</textarea><h3 class="settings-label">Only allow posts with these words:</h3><textarea class="moderation-filter thirteen mb-20" name="feed[allowed]" placeholder="',
                t += this.escape(r),
                t += " to allow. ",
                t += this.escape(e),
                t += '">',
                t += this.feed.allowed(),
                t += "</textarea>",
                t += Juicer.Helpers.renderPartial("profanity", {
                    feed: this.feed
                }),
                t += Juicer.Helpers.renderPartial("prevent_duplicates", {
                    feed: this.feed
                }),
                t += '</div><div class="tac"><input class="j-button" type="submit" value="Save your Filters" /></div></form>') : (t += '<div class="p-20 tac"><h3 class="tc-grapefruit bold fourteen mb-15">Get hands-on with advanced filtering. It\'s in our paid plans.</h3>',
                t += Juicer.Helpers.renderPartial("upgrade_plan", {
                    feed: this.feed,
                    css: "j-button small",
                    mpevent: "moderation_sidebar_upgrade",
                    label: "Upgrade Now"
                }),
                t += "</div>"),
                t
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["feeds/new_source"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="tac pt-30 pb-25"><h3 class="jcr-font-bold jcr-text-[32px] jcr-text-dark-blue">',
                t += this.escape("Add a Social Media Source"),
                this.showFeedName && (t += this.escape(" to "),
                t += "<b>",
                t += this.escape(this.showFeedName),
                t += "</b>"),
                t += '</h3><h3 class="jcr-text-[20px] jcr-text-gray">',
                t += this.escape("First, select the social media platform you want to import posts from."),
                t += '</h3><ul class="jcr-mx-[60px] jcr-mt-[30px] jcr-mb-[60px]">',
                t += Juicer.Helpers.renderPartial("sources", {
                    feed: this.model
                }),
                t += "</ul></div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["feeds/revalidate_overlay"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r, i, n;
                return t = "",
                t += '<div class="tac p-30"><h2 class="fs-2">Apply filters to existing posts?</h2>',
                r = (i = "0" !== this.data.queue) ? "mb-15" : "mb-40",
                e = window.juicerDashboard.initialDeduplicationNumberOfPosts,
                t += '<p class="fifteen tc-gray ',
                t += this.escape(r),
                t += '">Do you want to apply these changes to all existing posts? Feeds with a large amount of posts may take some time for Juicer to properly moderate. The scan for duplicates will be performed only on the ',
                t += this.escape(e),
                t += " most recent posts. Please be patient. If you wish to set a priority for what source is chosen for duplicate posts, you can set the order of sources in the 'Social Media Sources' section in the sidebar by using the drag&drop functionality. </p>",
                i && (t += '<p class="fourteen tc-grapefruit mb-40">You have turned the moderation queue on, so keep in mind if you select "apply to existing posts" it will remove <strong>all</strong> posts from your live queue. You can always recover them (or approve them later) </p>'),
                t += "<form>",
                _u.each(_u.keys(this.data), (n = this,
                function(e) {
                    return t += '<input name="',
                    t += n.escape(e),
                    t += '" type="hidden" value="',
                    t += n.escape(n.data[e]),
                    t += '" />'
                }
                )),
                t += '<div class="submits"><input class="moderate-confirm j-button small mr-25" data-revalidate="false" type="submit" value="No, only future posts" /><input class="moderate-confirm j-button small secondary" data-revalidate="true" type="submit" value="Yes, apply to existing posts" /></div></form></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["feeds/settings"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r;
                return t = "",
                t += '<div class="p-20 fourteen">',
                t += Juicer.Helpers.renderPartial("order", {
                    feed: this.feed
                }),
                t += Juicer.Helpers.renderPartial("filter_setting", {
                    feed: this.feed,
                    label: !0
                }),
                _u.each(this.checkboxes, (r = this,
                function(e) {
                    var i;
                    return i = e.attr,
                    t += '<div class="checkbox mb-15 thirteen relative flex"><input name="feed[',
                    t += r.escape(i),
                    t += ']" type="hidden" value="0" />',
                    r.feed.get(i) ? (t += '<input checked="true" data-attribute="',
                    t += r.escape(i),
                    t += '" id="',
                    t += r.escape(i),
                    t += '" name="feed[',
                    t += r.escape(i),
                    t += ']" type="checkbox" />') : (t += '<input data-attribute="',
                    t += r.escape(i),
                    t += '" id="',
                    t += r.escape(i),
                    t += '" name="feed[',
                    t += r.escape(i),
                    t += ']" type="checkbox" />'),
                    t += '<label class="jcr-flex jcr-items-center" for="',
                    t += r.escape(i),
                    t += '">',
                    t += e.label,
                    t += "</label>",
                    null != e.tooltip && (t += '<div aria-label="',
                    t += r.escape(e.tooltip),
                    t += '" class="sidebar-explainer hint--right hint--medium"></div>'),
                    t += "</div>"
                }
                )),
                t += '<div class="checkbox mb-15 thirteen relative flex" id="hide_ads_checkbox">',
                e = this.feed.paid() || this.feed.isTrial(),
                t += '<input name="feed[hide_ads]" type="hidden" value="0" />',
                t += e ? '<input checked="true" data-attribute="hide_ads" id="hide_ads" name="feed[hide_ads]" type="checkbox" />' : '<input data-attribute="hide_ads" id="hide_ads" name="feed[hide_ads]" type="checkbox" />',
                t += '<label class="jcr-flex jcr-items-center" for="hide_ads">Remove Juicer branding <img class=\'jcr-ml-2\' src=\'/standalone-sprites/premium-crown.svg\'></label></div><a class="fourteen tc-dark-blue tdu mt-40 d-block" href="',
                t += this.escape(Juicer.Constants.HELP_CENTER_URL),
                t += '/articles/360039929412-Code-customizations-for-date-range-feed-style-spacing-filtering-and-more" target="_blank">Other Customization Options<span class="external-link-icon">',
                t += Juicer.Constants.SVG_ICONS.externalLink,
                t += "</span></a></div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["feeds/sources"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r;
                return t = "",
                t += '<ul class="source-list">',
                _u.each(this.feed.get("sources").models, (r = this,
                function(e) {
                    var i, n, s;
                    switch (s = e.get("id"),
                    n = !0 === e.get("is_deactivated") ? "j-source-isDeactivated" : "j-source-active",
                    t += '<li class="j-social-icon bg-none fourteen existing-source j-',
                    t += r.escape(e.lowerSource()),
                    t += " ",
                    t += r.escape(n),
                    t += '" data-id="',
                    t += r.escape(s),
                    t += '"><div class="d-flex align-items-center justify-content-between w-100">',
                    window.juicerDashboard.sourceIdsWhereUserActionRequired.indexOf(s) > -1 && (t += '<a class="js-warning" href="/feeds/',
                    t += r.escape(r.feed.get("slug")),
                    t += '/inspect" title="We cannot import posts for this source. Please click to fix this!">',
                    t += window.juicerDashboard.warningSvg,
                    t += "</a>"),
                    t += '<span class="sourceName"',
                    i = !0 === e.get("is_deactivated") ? e.get("deactivated_reason") : void 0) {
                    case !0:
                        t += ' title="title"';
                        break;
                    case !1:
                    case null:
                        break;
                    default:
                        t += ' title="',
                        t += r.escape(i),
                        t += '"'
                    }
                    return t += ">",
                    t += r.escape(e.displayName()),
                    !0 === e.get("is_deactivated") && (t += "<br />",
                    t += r.escape("(deactivated)")),
                    t += '</span><span class="juicer-fa-caret-down"></span></div>',
                    e.options() && e.options().length > 0 && (t += '<ul class="d-block">',
                    _u.each(e.options(), (function(e) {
                        return t += "<li>",
                        t += r.escape(e),
                        t += "</li>"
                    }
                    )),
                    t += "</ul>"),
                    t += '</li><ul class="source-submenu fourteen">',
                    e.manual() && (t += '<li class="add source-submenu-item mb-10" data-id="',
                    t += r.escape(s),
                    t += '" data-name="',
                    t += r.escape(e.typeSymbol()),
                    t += r.escape(e.get("term")),
                    t += '" data-template="manual" rel="nofollow" x-on:click="htmx.ajax(&#39;POST&#39;, &#39;/track&#39;, { values: { event_name: &#39;manual_add_started&#39;, properties: { source_name: &#39;',
                    t += r.escape(e.source()),
                    t += '&#39; } } })">Add Post Manually</li>'),
                    r.feed.get("moderation_allowed?") && (t += '<li class="moderate source-submenu-item mb-10" data-id="',
                    t += r.escape(s),
                    t += '" data-template="moderation">Set Moderation Filters</li>'),
                    t += '<li class="rename source-submenu-item mb-10" data-id="',
                    t += r.escape(s),
                    t += '" data-template="rename">Edit Filter Button Name</li><li class="delete" data-id="',
                    t += r.escape(s),
                    t += '">Delete</li></ul>'
                }
                )),
                t += "</ul>",
                e = this.feed.get("manual_source_limit"),
                t += '<div class="tac mt-40 add-source-container" x-data="{ tooltip: &#39;&#39;, disabledMessage: &#39;Your account owner set a limit of maximum ',
                t += this.escape(e),
                t += " feed",
                t += this.escape(e > 1 ? "s" : ""),
                t += '. Please ask them to adjust the limit.&#39; }" x-on:disable-add-source-button="tooltip = disabledMessage" x-on:enable-add-source-button="tooltip = &#39;&#39;">',
                this.feed.manualSourceLimitReached() ? t += '<a class="js-add-source-submenu add-source-submenu j-button small disabled" x-init="$dispatch(&#39;disable-add-source-button&#39;)" x-tooltip="tooltip">+ Add social media source </a>' : t += '<a class="js-add-source-submenu add-source-submenu j-button small" x-init="$dispatch(&#39;enable-add-source-button&#39;)" x-tooltip="tooltip">+ Add social media source </a>',
                t += "</div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["feeds/synced"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<h4 class="thirteen mb-10">',
                this.feed.get("view_limit_reached") ? (t += "Your feed exceeded the 2,000 view limit for this month. It will reset on <strong>",
                t += this.escape(Juicer.Helpers.fullDate(this.feed.get("view_limit_reset_date"), "%b/%-d/%y at %-l:%M%p")),
                t += "</strong><br>",
                t += Juicer.Helpers.renderPartial("upgrade_plan", {
                    label: "Upgrade to resync now",
                    mpevent: "views_upgrade_sidebar_refresh",
                    css: "jcr-text-[14px] j-button jcr-mt-2"
                })) : (t += "Your feed will sync next at <strong>",
                t += this.escape(Juicer.Helpers.fullDate(this.feed.nextSync(), "%b/%-d/%y at %-l:%M%p")),
                t += "</strong>. Please note this is only an estimate. "),
                t += "</h4>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["feeds/wordpress"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="p-20 fourteen"><h3 class="mb-10">First, download, unzip, and install the wordpress plugin.</h3><a class="block tc-off-white tdu" href="https://www.juicer.io/blog/setting-up-a-juicer-social-media-aggregator-on-a-wordpress-site" target="_blank">Learn how to install</a><a class="block tc-off-white tdu mb-20" href="/dashboard/wp_plugin_page?mpevent=feed_embed" target="_blank">Download the Wordpess Plugin</a><h3 class="settings-label">Shortcode</h3>',
                t += '<textarea class="ten tc-embed p-15 single-line mb-20" oncopy="htmx.ajax(&#39;POST&#39;, &#39;/track&#39;, { values: { event_name: &#39;embed_snippet_copied&#39;, properties: { embed_type: &#39;wp-plugin-1-12&#39; } } })">',
                t += '[juicer name="' + this.feed.get("slug") + '"]',
                t += '</textarea><h3 class="settings-label">PHP Function</h3>',
                t += '<textarea class="ten tc-embed p-15 single-line" oncopy="htmx.ajax(&#39;POST&#39;, &#39;/track&#39;, { values: { event_name: &#39;embed_snippet_copied&#39;, properties: { embed_type: &#39;wordpress&#39; } } })">',
                t += '<?php juicer_feed("name=' + this.feed.get("slug") + '"); ?>',
                t += "</textarea></div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST.gdpr_form = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="tac p-50 gdpr-form"><h2 class="fs-2">Accept our GDPR Privacy Policy Changes</h2><p class="tc-gray fifteen mb-25">To ensure compliance with the GDPR, we have updated our <a class="bold tc-gray tdu" href="/privacy">privacy policy</a> . Since you are located in the EU you must accept these changes. </p><div class="mb-25"><a class="j-button" href="/gdpr">Accept updated privacy policy and continue my service</a></div><a class="fourteen tc-gray tdu pointer" href="/downgrade?delete=true">I don\'t accept the privacy policy so cancel my service.</a></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST.infinite_scroll = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r;
                return t = "",
                (e = this.feed.get("posts").models).length > 0 && _u.each(e, (r = this,
                function(e) {
                    var i;
                    return t += "<li",
                    i = "",
                    (i += r.escape(e.classes())).length > 0 && (t += ' class="',
                    t += i,
                    t += '"'),
                    t += ' data-id="',
                    t += r.escape(e.get("id")),
                    t += '" data-source="',
                    t += r.escape(e.lowerType()),
                    t += '">',
                    t += Juicer.Helpers.renderPartial("actions", {
                        isOnFeedsDashboard: r.isOnFeedsDashboard,
                        post: e
                    }),
                    t += Juicer.Helpers.renderPartial("feeds/" + r.feed.partial(), {
                        post: e,
                        feed: r.feed
                    }),
                    t += "</li>"
                }
                )),
                t
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST.moderated = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e;
                return t = "",
                t += '<ul class="j-display-filters">',
                _u.each(this.menuItems, (e = this,
                function(r) {
                    return e.feed.filter === r.filter || "All" === r.title && "" === e.feed.filter ? (t += '<li class="moderate-filter selected" data-filter="',
                    t += e.escape(r.filter),
                    t += '">',
                    t += e.escape(r.title),
                    t += "</li>") : (t += '<li class="moderate-filter" data-filter="',
                    t += e.escape(r.filter),
                    t += '">',
                    t += e.escape(r.title),
                    t += "</li>")
                }
                )),
                t += "</ul>",
                this.feed.get("posts").models.length > 0 && (t += '<div class="tac mb-15 bulk-moderate-nav"><a class="j-button small mr-10 bulk-moderate" data-approve="true">Approve All</a><a class="j-button small bulk-moderate">Reject All</a></div>'),
                t += Juicer.Helpers.renderPartial("moderated_posts", {
                    feed: this.feed
                })
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST.new_feed = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += Juicer.Helpers.renderPartial("sources")
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST.overlay = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="j-overlay-content">',
                this.close && (t += '<button aria-label="Close" class="j-close" title="Close"><span>Close</span></button>'),
                t += this.content,
                t += "</div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/_actions"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                this.isOnFeedsDashboard && !this.post.ad && (t += '<ul class="actions" data-id="',
                t += this.escape(this.post.get("id")),
                t += '">',
                null != this.post.get("deleted_at") ? (this.post.linkedin && (t += '<li aria-label="Use this when you want to remove this post from Juicer cache, so you can reimport the post manually." class="delete hint--bottom-right hint--large">Permanent delete</li>'),
                t += '<li aria-label="Don&#39;t publish post and hide it." class="reject hint--bottom-left">Reject</li><li aria-label="Move post to your live feed." class="approve primary hint--bottom-left">Approve</li>',
                window.juicerDashboard.isAdminUser && (t += '<li aria-label="Copy post ID to clipboard." class="copy-post-id hint--bottom-left">Copy post ID</li>')) : (window.juicerDashboard && !this.post.ad && this.feed && "modern" === this.feed.get("css") && (this.post.ctaAdded() ? t += '<li aria-label="Edit the Call To Action on this post." class="edit-cta hint--bottom-right">Edit CTA</li>' : t += '<li aria-label="Add a Call To Action to this post." class="edit-cta hint--bottom-right">Add CTA</li>'),
                this.post.stickied() ? t += '<li aria-label="Remove post from the top of the feed." class="unstick hint--bottom-left">Unpin</li>' : t += '<li aria-label="Keep post at top of feed, even when new posts come in." class="hint--bottom sticky">Pin to top</li>',
                this.post.twitter() || (t += '<li aria-label="Add content to this post." class="edit hint--bottom-left">Edit</li>'),
                t += '<li aria-label="Move post to moderation queue. Remove from live feed." class="delete primary hint--bottom-left">Delete</li>',
                window.juicerDashboard.isAdminUser && (t += '<li aria-label="Copy post ID to clipboard." class="copy-post-id hint--bottom-left">Copy post ID</li>')),
                t += "</ul>"),
                t
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/_auto_scroll_card"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e;
                return t = "",
                t += "<li",
                e = "",
                (e += this.escape(this.post.classes())).length > 0 && (t += ' class="',
                t += e,
                t += '"'),
                t += ' data-id="',
                t += this.escape(this.post.get("id")),
                t += '" data-source="',
                t += this.escape(this.post.lowerType()),
                t += '">',
                t += Juicer.Helpers.renderPartial("actions", {
                    isOnFeedsDashboard: this.isOnFeedsDashboard,
                    post: this.post
                }),
                t += Juicer.Helpers.renderPartial("feeds/" + this.feed.partial(), {
                    post: this.post,
                    feed: this.feed
                }),
                t += "</li>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/_columns"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="columns white-field bordered hide"><label for="columns">Columns</label><input class="columns" max="9" min="1" name="feed[columns]" type="number" value="',
                t += this.escape(this.feed.get("columns")),
                t += '" /></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/_content"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r, i, n, s, o, a, c, l;
                if (t = "",
                this.lazyLoad = null != this.feed && this.feed.get("lazy_load") || !1,
                l = this.post.image(),
                null != this.feed && "slider" === this.feed.get("style")) {
                    if (l) {
                        switch (t += '<div class="j-image" data-external-id="',
                        t += this.escape(this.post.get("external_id")),
                        t += '"',
                        e = l) {
                        case !0:
                            t += ' data-image="data-image"';
                            break;
                        case !1:
                        case null:
                            break;
                        default:
                            t += ' data-image="',
                            t += this.escape(e),
                            t += '"'
                        }
                        switch (t += ' data-video-url="',
                        t += this.escape(this.post.get("video")),
                        t += '" href="',
                        t += this.escape(this.post.link()),
                        t += '"',
                        r = this.post.ad ? "nofollow" : null) {
                        case !0:
                            t += ' rel="rel"';
                            break;
                        case !1:
                        case null:
                            break;
                        default:
                            t += ' rel="',
                            t += this.escape(r),
                            t += '"'
                        }
                        if (t += ">",
                        (this.feed && this.feed.shouldShowGallery() && this.post.gallery() || this.post.gallery() && this.overlay) && (t += '<span class="j-gallery-nav"><span class="j-gallery-arrow j-gallery-previous">Previous</span><span class="j-gallery-arrow j-gallery-next">Next</span></span>'),
                        this.lazyLoad && !this.overlay) {
                            switch (t += '<img alt="',
                            t += this.escape(this.post.alt()),
                            t += '" class="j-content-image"',
                            i = l) {
                            case !0:
                                t += ' data-lazy="data-lazy"';
                                break;
                            case !1:
                            case null:
                                break;
                            default:
                                t += ' data-lazy="',
                                t += this.escape(i),
                                t += '"'
                            }
                            t += " />"
                        } else {
                            switch (t += '<img alt="',
                            t += this.escape(this.post.alt()),
                            t += '" class="j-content-image"',
                            n = l) {
                            case !0:
                                t += ' src="src"';
                                break;
                            case !1:
                            case null:
                                break;
                            default:
                                t += ' src="',
                                t += this.escape(n),
                                t += '"'
                            }
                            t += " />"
                        }
                        t += "</div>"
                    }
                } else if (l) {
                    switch (t += '<a class="j-image" data-external-id="',
                    t += this.escape(this.post.get("external_id")),
                    t += '"',
                    s = l) {
                    case !0:
                        t += ' data-image="data-image"';
                        break;
                    case !1:
                    case null:
                        break;
                    default:
                        t += ' data-image="',
                        t += this.escape(s),
                        t += '"'
                    }
                    switch (t += ' data-video-url="',
                    t += this.escape(this.post.get("video")),
                    t += '" href="',
                    t += this.escape(this.post.link()),
                    t += '"',
                    o = this.post.ad ? "nofollow" : null) {
                    case !0:
                        t += ' rel="rel"';
                        break;
                    case !1:
                    case null:
                        break;
                    default:
                        t += ' rel="',
                        t += this.escape(o),
                        t += '"'
                    }
                    if (t += ' target="_blank">',
                    (this.feed && this.feed.shouldShowGallery() && this.post.gallery() || this.post.gallery() && this.overlay) && (t += '<span class="j-gallery-nav"><span class="j-gallery-arrow j-gallery-previous">Previous</span><span class="j-gallery-arrow j-gallery-next">Next</span></span>'),
                    this.lazyLoad && !this.overlay) {
                        switch (t += '<img alt="',
                        t += this.escape(this.post.alt()),
                        t += '" class="j-content-image"',
                        a = l) {
                        case !0:
                            t += ' data-lazy="data-lazy"';
                            break;
                        case !1:
                        case null:
                            break;
                        default:
                            t += ' data-lazy="',
                            t += this.escape(a),
                            t += '"'
                        }
                        t += " />"
                    } else {
                        switch (t += '<img alt="',
                        t += this.escape(this.post.alt()),
                        t += '" class="j-content-image"',
                        c = l) {
                        case !0:
                            t += ' src="src"';
                            break;
                        case !1:
                        case null:
                            break;
                        default:
                            t += ' src="',
                            t += this.escape(c),
                            t += '"'
                        }
                        t += " />"
                    }
                    t += "</a>"
                } else
                    this.post.get("video") && "Instagram" === this.post.get("source").source() && "hashtag" === this.post.get("source").termType() && (t += '<div class="video-play-placeholder">',
                    t += Juicer.Constants.SVG_ICONS.play,
                    t += "</div>");
                return t
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/_css"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r;
                return t = "",
                t += '<div class="css mb-30">',
                this.label && (t += '<label class="settings-label" for="css">Choose a Theme</label>'),
                t += '<div class="white-select" id="theme-selector"><select id="css" name="feed[css]">',
                e = Juicer.Constants.FEED_CLASSES.concat(this.feed.get("allowed_custom_themes")),
                _u.each(e, (r = this,
                function(e) {
                    var i, n;
                    switch (t += "<option",
                    i = e === r.feed.get("css")) {
                    case !0:
                        t += ' selected="selected"';
                        break;
                    case !1:
                    case null:
                        break;
                    default:
                        t += ' selected="',
                        t += r.escape(i),
                        t += '"'
                    }
                    switch (n = e) {
                    case !0:
                        t += ' value="value"';
                        break;
                    case !1:
                    case null:
                        break;
                    default:
                        t += ' value="',
                        t += r.escape(n),
                        t += '"'
                    }
                    return t += ">",
                    t += "living-wall" === e ? r.escape(Juicer.Helpers.prettify(e) + " (no Twitter & no YouTube support)") : "slider" === e ? r.escape(Juicer.Helpers.prettify(e) + " (no YouTube support)") : r.escape(Juicer.Helpers.prettify(e)),
                    t += "</option>"
                }
                )),
                t += '</select></div><img class="jcr-h-[14px] jcr-px-1.5 jcr-ml-1.5 autoscroll-premium-icon" src="/standalone-sprites/premium-crown.svg" style="',
                t += this.escape("autoscroll" !== this.feed.get("css") ? "display: none;" : void 0),
                t += '" /><div class="jcr-flex jcr-justify-between jcr-mt-2" id="autoscroll-theme-controls" style="',
                t += this.escape("autoscroll" !== this.feed.get("css") ? "display: none;" : void 0),
                t += '"><div class="jcr-flex jcr-gap-1"><div class="jcr-w-[40px] jcr-border-border-gray jcr-border jcr-border-solid jcr-rounded jcr-flex jcr-items-center jcr-justify-center jcr-cursor-pointer jcr-text-gray hover:jcr-border-light-gray hover:jcr-text-gray" data-tippy-placement="bottom" id="reload-feed" style="height: 40px;" x-tooltip="&#39;Reload&#39;"><i class="ri-refresh-line jcr-text-[16px]"></i></div><div class="jcr-flex jcr-justify-center jcr-items-center jcr-w-[40px] jcr-border-border-gray jcr-border jcr-border-solid jcr-rounded jcr-cursor-pointer jcr-text-gray hover:jcr-border-light-gray hover:jcr-text-gray" id="play-toggle" style="height: 40px;"><div class="jcr-flex jcr-items-center jcr-justify-center autoscroll-control-pause" data-tippy-placement="bottom" style="height: 40px; width: 40px;" x-tooltip="&#39;Pause&#39;"><i class="ri-pause-line jcr-text-[16px] play-control" data-action="pause"></i></div><div class="jcr-flex jcr-items-center jcr-justify-center autoscroll-control-play" data-tippy-placement="bottom" style="height: 40px; width: 40px; display: none;" x-tooltip="&#39;Play&#39;"><i class="ri-play-circle-line jcr-text-[16px] play-control" data-action="play"></i></div></div></div><select class="jcr-text-gray hover:jcr-text-gray jcr-w-[80px] jcr-appearance-none jcr-select" data-tippy-placement="bottom" id="autoscroll-interval" name="feed[auto_scroll_interval]" style="appearance: none;" x-tooltip="&#39;Playback speed&#39;">',
                _u.each([[1, "slow"], [2, "medium"], [3, "fast"]], function(e) {
                    return function(r) {
                        var i, n;
                        switch (t += "<option",
                        i = r[1] === e.feed.get("auto_scroll_interval")) {
                        case !0:
                            t += ' selected="selected"';
                            break;
                        case !1:
                        case null:
                            break;
                        default:
                            t += ' selected="',
                            t += e.escape(i),
                            t += '"'
                        }
                        switch (n = r[1]) {
                        case !0:
                            t += ' value="value"';
                            break;
                        case !1:
                        case null:
                            break;
                        default:
                            t += ' value="',
                            t += e.escape(n),
                            t += '"'
                        }
                        return t += ">",
                        t += e.escape("x" + r[0]),
                        t += "</option>"
                    }
                }(this)),
                t += "</select></div></div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/_cta"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="cta-container"><a class="cta-button" href="',
                t += this.escape(this.post.get("cta_juicer_url")),
                t += '" style="background-color: ',
                t += this.escape(this.post.get("cta_button_color")),
                t += "; color: ",
                t += this.escape(this.post.get("cta_text_color")),
                t += "; border-radius: ",
                t += this.escape(this.feed.get("cta_button_radius")),
                t += "px; font-size: ",
                t += this.escape(this.feed.get("cta_text_size")),
                t += 'px;" target="_blank">',
                t += this.post.get("cta_text"),
                t += "</a></div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/_custom_styles"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                (this.feed.customColors() || this.feed.get("custom_css")) && (t += '<div class="juicer-custom-styles"><style>',
                t += this.feed.customStyles(),
                t += "</style></div>"),
                t
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/_edit"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                this.post.edited() && !this.post.twitter() && (t += '<div class="j-edit"><span>(edited) </span>',
                t += Juicer.Helpers.format(this.post.get("edit")),
                t += "</div>"),
                t
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/_enterprise_sidebar"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r, i;
                return t = "",
                r = [{
                    name: "Your Feeds",
                    url: "/enterprise/" + this.model.get("slug")
                }, {
                    name: "Manage Staff",
                    url: "/enterprise/" + this.model.get("slug") + "/users"
                }],
                "enterprise" === this.model.get("plan") && (r.push({
                    name: "Edit Account",
                    url: "/enterprise/" + this.model.get("slug") + "/edit"
                }),
                r.push({
                    name: "API Docs",
                    url: "/api"
                }),
                r.push({
                    name: "Set up White Label",
                    url: "/enterprise/" + this.model.get("slug") + "/white-label"
                })),
                e = "/" + JuicerBackbone.history.getFragment(),
                t += '<div class="enterprise-sidebar"><ul class="tc-dark-gray bg-white border">',
                _u.each(r, (i = this,
                function(r) {
                    var n, s, o, a, c, l;
                    if (t += '<li class="enterprise-sidebar-link ',
                    n = r.url === e.split("?")[0] ? "bold" : "",
                    i.isArray(n)) {
                        for (s = 0,
                        c = (n = i.flatten(n)).length; s < c; s++)
                            (o = n[s]) && (n = o.toString());
                        for (a = 0,
                        l = n.length; a < l; a++)
                            (o = n[a]).length > 0 && (n = o);
                        t += i.escape(n.join(" "))
                    } else
                        t += i.escape(n);
                    return t += '"><a href="',
                    t += i.escape(r.url),
                    t += '">',
                    t += i.escape(r.name),
                    t += "</a></li>"
                }
                )),
                t += "</ul></div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/_entertainment_card"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                this.post && (t += '<li class="feed-item ',
                t += this.escape("small" === this.size ? "small" : void 0),
                t += '" data-id="',
                t += this.escape(this.post.get("id")),
                t += '" data-source="',
                t += this.escape(this.post.lowerType()),
                t += '">',
                t += Juicer.Helpers.renderPartial("actions", {
                    isOnFeedsDashboard: this.isOnFeedsDashboard,
                    post: this.post
                }),
                t += Juicer.Helpers.renderPartial("feeds/entertainment", {
                    post: this.post,
                    size: this.size
                }),
                t += "</li>"),
                t
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/_filter_setting"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e;
                return t = "",
                t += '<div class="filter_setting">',
                this.label && (t += '<label class="settings-label" for="filter">Display Filters at top of Feed</label>'),
                t += '<div class="white-select mb-40"><select id="filter_setting" name="feed[display_filter]">',
                _u.each(["None", "Social Type", "Social Account", "Grouped Terms"], (e = this,
                function(r) {
                    return e.feed.get("display_filter") === r ? (t += '<option selected="true" value="',
                    t += e.escape(r),
                    t += '">',
                    t += e.escape(r),
                    t += "</option>") : (t += '<option value="',
                    t += e.escape(r),
                    t += '">',
                    t += e.escape(r),
                    t += "</option>")
                }
                )),
                t += "</select></div></div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/_height"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="height white-field after-label"><label for="height">Height</label><input class="height" max="5000" min="100" name="feed[height]" type="number" value="',
                t += this.escape(this.feed.get("height")),
                t += '" /> <label for="height">px</label></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/_interval"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="interval hide white-field after-label bordered"><label for="interval">Interval</label><input class="interval" max="30000" min="100" name="feed[interval]" type="number" value="',
                t += this.escape(this.feed.get("interval")),
                t += '" /> <label for="interval">ms</label></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/_link"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r;
                return t = "",
                null != navigator.userAgent.match("Edge") && null != this.url.match("facebook") ? (t += '<a aria-label="',
                t += this.escape(this.aria),
                t += '"',
                e = "",
                (e += this.escape(this.class)).length > 0 && (t += ' class="',
                t += e,
                t += '"'),
                t += ' href="',
                t += this.escape(this.url),
                t += '">',
                t += this.escape(Juicer.Helpers.numberWithCommas(this.label)),
                t += "</a>") : (t += '<a aria-label="',
                t += this.escape(this.aria),
                t += '"',
                r = "",
                (r += this.escape(this.class)).length > 0 && (t += ' class="',
                t += r,
                t += '"'),
                t += ' href="',
                t += this.escape(this.url),
                t += '" target="_blank">',
                t += this.escape(Juicer.Helpers.numberWithCommas(this.label)),
                t += "</a>"),
                t
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/_loading"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                this.container ? t += '<div class="j-loading-container"><div class="j-loading">Loading...</div></div>' : this.wrapper ? t += '<div class="j-loading-wrapper"><div class="j-loading">Loading...</div></div>' : this.inFeed ? t += '<div class="j-loading-wrapper" style="height: 42px"><div class="j-loading">Loading...</div></div>' : t += '<div class="j-loading">Loading...</div>',
                t
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/_message"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                (this.post.ad || null != this.post.get("unformatted_message") || this.post.tumblrTitle()) && (t += '<div class="j-message">',
                t += this.post.message(),
                t += "</div>"),
                t += Juicer.Helpers.renderPartial("edit", {
                    post: this.post
                })
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/_meta"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e;
                return t = "",
                this.post.twitter() ? (t += '<div class="j-meta"><ul class="j-twitter-intents"><li><a class="j-twitter-reply" href="',
                t += this.escape(this.post.replyIntent()),
                t += '">Reply</a></li><li><a class="j-twitter-retweet" href="',
                t += this.escape(this.post.retweetIntent()),
                t += '">Retweet</a></li><li><a class="j-twitter-like" href="',
                t += this.escape(this.post.likeIntent()),
                t += '">Like</a></li></ul>',
                e = this.post.get("external_created_at"),
                t += '<a href="',
                t += this.escape(this.post.link()),
                t += '" target="_blank"><time class="j-date j-twitter-date" datetime="',
                t += this.escape(e),
                t += '">',
                t += this.escape(Juicer.Helpers.fullDate(e, "%-d %b %Y", !1)),
                t += "</time></a></div>") : "Juicer" !== this.post.sourceType() && (t += '<div class="j-meta"><div class="j-link-container">',
                this.post.noMeta() || (t += "<ul>",
                this.post.get("comment_count") > 0 && (t += "<li>",
                t += Juicer.Helpers.renderPartial("link", {
                    url: this.post.link(),
                    label: this.post.get("comment_count"),
                    class: this.post.commentClass(),
                    aria: this.post.get("comment_count") + " Comments"
                }),
                t += "</li>"),
                this.post.get("like_count") > 0 && (t += "<li>",
                t += Juicer.Helpers.renderPartial("link", {
                    url: this.post.link(),
                    label: this.post.get("like_count"),
                    class: this.post.likeClass(),
                    aria: this.post.get("like_count") + " Likes"
                }),
                t += "</li>"),
                t += "</ul>"),
                t += "</div><nav>",
                t += Juicer.Helpers.renderPartial("link", {
                    url: this.post.link(),
                    label: "",
                    class: "j-social j-" + this.post.lowerType() + " j-" + this.post.lowerType() + "-text-hover",
                    aria: this.post.lowerType()
                }),
                t += "</nav></div>"),
                t
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/_moderated_posts"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r;
                return t = "",
                (e = this.feed.get("posts").models).length > 0 ? _u.each(e, (r = this,
                function(e) {
                    var i;
                    return t += "<li",
                    i = "",
                    (i += r.escape(e.classes())).length > 0 && (t += ' class="',
                    t += i,
                    t += '"'),
                    t += ">",
                    t += Juicer.Helpers.renderPartial("actions", {
                        isOnFeedsDashboard: !0,
                        post: e
                    }),
                    t += Juicer.Helpers.renderPartial("feeds/user", {
                        post: e,
                        feed: r.feed
                    }),
                    t += "</li>"
                }
                )) : t += '<div class="empty"><h2>No Moderated Posts!</h2></div>',
                t
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/_order"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e;
                return t = "",
                t += '<div class="order"><label class="settings-label" for="order">Post Order</label><div class="white-select mb-30"><select id="css" name="feed[order]">',
                _u.each([["created_at", "Most Recent First"], ["mixed", "Mixed"], ["random", "Random"], ["popular", "Most Popular (no " + Juicer.Constants.PLATFORMS_WITHOUT_LIKES.join(", ") + " support)"]], (e = this,
                function(r) {
                    return e.feed.get("order") === r[0] ? (t += '<option selected="true" value="',
                    t += e.escape(r[0]),
                    t += '">',
                    t += e.escape(r[1]),
                    t += "</option>") : (t += '<option value="',
                    t += e.escape(r[0]),
                    t += '">',
                    t += e.escape(r[1]),
                    t += "</option>")
                }
                )),
                t += "</select></div></div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/_post_notification_banner"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r, i, n, s, o;
                if (t = "",
                t += '<div class="j-post-notification-banner ',
                e = this.backgroundClass,
                this.isArray(e)) {
                    for (r = 0,
                    s = (e = this.flatten(e)).length; r < s; r++)
                        (i = e[r]) && (e = i.toString());
                    for (n = 0,
                    o = e.length; n < o; n++)
                        (i = e[n]).length > 0 && (e = i);
                    t += this.escape(e.join(" "))
                } else
                    t += this.escape(e);
                return t += '">',
                t += this.content,
                t += "</div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/_poster"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r, i;
                if (t = "",
                this.lazyLoad = this.lazyLoad || null != this.feed && this.feed.get("lazy_load") || !1,
                r = this.post.get("external_created_at"),
                i = this.post.ad ? this.post.posterUrl() : this.post.get("poster_url"),
                t += '<div class="j-poster">',
                this.post.poster()) {
                    switch (t += "<a",
                    e = i) {
                    case !0:
                        t += ' href="href"';
                        break;
                    case !1:
                    case null:
                        break;
                    default:
                        t += ' href="',
                        t += this.escape(e),
                        t += '"'
                    }
                    t += ' target="_blank">',
                    this.post.get("poster_image") && (this.lazyLoad && "slider" === this.feed.get("style") || (this.lazyLoad ? (t += '<img alt="Profile image for ',
                    t += this.escape(this.post.get("poster_name")),
                    t += '" aria-hidden="true" data-lazy="',
                    t += this.escape(this.post.posterImage()),
                    t += '" data-poster-id="',
                    t += this.escape(this.post.get("poster_id")),
                    t += '" tabindex="-1" />') : (t += '<img alt="Profile image for ',
                    t += this.escape(this.post.get("poster_name")),
                    t += '" aria-hidden="true" data-poster-id="',
                    t += this.escape(this.post.get("poster_id")),
                    t += '" src="',
                    t += this.escape(this.post.posterImage()),
                    t += '" tabindex="-1" />'))),
                    this.post.twitter() ? (t += '<div class="j-twitter-poster"><div class="j-twitter-display-name">',
                    t += this.escape(this.post.get("poster_display_name")),
                    t += '</div><div class="j-twitter-screen-name">@',
                    t += this.escape(this.post.get("poster_name")),
                    t += "</div></div>") : this.post.hashtag() && this.post.instagram() ? (t += "<h3>",
                    t += this.escape(this.post.get("poster_name") + " on Instagram"),
                    t += "</h3>") : (t += "<h3>",
                    t += this.escape(this.post.get("poster_name")),
                    t += "</h3>"),
                    this.post.twitter() ? t += Juicer.Helpers.renderPartial("link", {
                        url: this.post.link(),
                        label: "X (Twitter) Logo",
                        class: "j-twitter j-twitter-text j-social j-twitter-post-icon",
                        aria: "x (twitter)"
                    }) : this.post.ad || (t += '<time class="j-date" datetime="',
                    t += this.escape(r),
                    t += '">',
                    t += this.escape(Juicer.Helpers.timeAgo(r)),
                    t += "</time>"),
                    t += "</a>"
                } else
                    t += '<time class="j-date" datetime="',
                    t += this.escape(r),
                    t += '">',
                    t += this.escape(Juicer.Helpers.timeAgo(r)),
                    t += "</time>";
                return t += "</div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/_prevent_duplicates"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="prevent-duplicates thirteen"><input name="feed[prevent_duplicates]" type="hidden" value="0" />',
                this.feed.get("prevent_duplicates") ? t += '<input checked="true" id="prevent_duplicates" name="feed[prevent_duplicates]" type="checkbox" />' : t += '<input id="prevent_duplicates" name="feed[prevent_duplicates]" type="checkbox" />',
                t += '<label for="prevent_duplicates">Prevent Duplicate Posts</label><div aria-label="Juicer will remove any post that has the same text as another post from a different source. We do this scan hourly. If you wish to set a priority for what source is chosen for duplicate posts, you can set the order of sources in the &#39;Social Media Sources&#39; section in the sidebar by using the drag&amp;drop functionality." class="sidebar-explainer hint--right hint--large"></div></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/_profanity"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="profanity thirteen mb-10"><input name="feed[profanity]" type="hidden" value="0" />',
                this.feed.get("profanity") ? t += '<input checked="true" id="profanity" name="feed[profanity]" type="checkbox" />' : t += '<input id="profanity" name="feed[profanity]" type="checkbox" />',
                t += '<label for="profanity">Don\'t allow posts with profanity</label></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/_referral"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<h1 class="referral"><a href="https://www.juicer.io?utm_source=JuicerFreeFeed&amp;utm_medium=feed_ads&amp;utm_campaign=PoweredByTopLink&amp;utm_term=',
                t += this.escape(window.location.href),
                t += "&amp;referrer=",
                t += this.escape(window.location.hostname),
                t += "&amp;utm_id=",
                t += this.escape(this.feed.get("slug")),
                t += '">Powered by</a></h1>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/_sidebar_footer"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e;
                return t = "",
                e = Juicer.Constants.PLAN_TO_DISPLAY_NAME[this.feed.get("next_plan")],
                t += '<div class="jcr-border jcr-border-background jcr-border-solid jcr-rounded jcr-p-[12px] jcr-m-[12px]"><p class="jcr-text-center jcr-text-[14px] jcr-text-dark-blue">Upgrade today to unlock more with our ',
                t += this.escape(e),
                t += ' plan! </p><a class="jcr-btn-secondary jcr-bg-primary jcr-shadow-card jcr-font-normal jcr-block jcr-w-full jcr-text-center jcr-text-[16px] jcr-my-[12px]" href="',
                t += this.escape(window.juicerDashboard.userUpgradePath),
                t += "?mpevent=sidebar_footer_upgrade_button&amp;plan=",
                t += this.escape(this.feed.get("next_plan")),
                t += '" target="_blank">Upgrade to ',
                t += this.escape(e),
                t += ' </a><div class="jcr-text-center"><span class="jcr-text-[12px]">Current plan:</span><div class="jcr-cursor-default jcr-inline jcr-ml-2 jcr-bg-lightest-gray jcr-rounded-md jcr-text-[12px] jcr-px-2 jcr-py-1.5 jcr-text-gray hover:jcr-bg-background">',
                t += this.escape(Juicer.Constants.PLAN_TO_DISPLAY_NAME[this.feed.get("plan")]),
                t += " </div></div></div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/_sources"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r;
                return t = "",
                t += '<div class="new-sources-sublist-container jcr-gap-4 jcr-mb-6">',
                e = ["Instagram", "LinkedIn", "Facebook", "Twitter", "TikTok", "YouTube"],
                window.juicerData.user.instagramStoriesEnabled || e.splice(1, 0, "InstagramReels"),
                _u.each(e, (r = this,
                function(e) {
                    var i, n, s, o;
                    switch (o = e,
                    s = e.toLowerCase(),
                    t += '<div class="jcr-w-full jcr-py-10 js-source j-social-icon ibt new-source-icon front-row"',
                    i = o) {
                    case !0:
                        t += ' data-type="data-type"';
                        break;
                    case !1:
                    case null:
                        break;
                    default:
                        t += ' data-type="',
                        t += r.escape(i),
                        t += '"'
                    }
                    switch (t += '><img class="jcr-w-8 jcr-inline"',
                    n = window.juicerData.sourceIcons[s]) {
                    case !0:
                        t += ' src="src"';
                        break;
                    case !1:
                    case null:
                        break;
                    default:
                        t += ' src="',
                        t += r.escape(n),
                        t += '"'
                    }
                    return t += ' /><div class="icon-label jct-text-dark-blue">',
                    "Blog" === e ? t += "Blog RSS " : e.startsWith("Twitter") ? t += "X (Twitter) " : t += "InstagramReels" === e ? "Instagram reels " : r.escape(e),
                    t += "</div></div>"
                }
                )),
                t += '</div><div class="new-sources-sublist-container jcr-gap-4">',
                _u.each(["Blog", "Hashtag", "Flickr", "Pinterest", "Slack", "Soundcloud", "Vimeo", "Tumblr", "Giphy"], function(e) {
                    return function(r) {
                        var i, n, s, o;
                        switch (o = r,
                        s = r.toLowerCase(),
                        t += '<div class="jcr-w-full jcr-py-5 js-source j-social-icon ibt new-source-icon back-row"',
                        i = o) {
                        case !0:
                            t += ' data-type="data-type"';
                            break;
                        case !1:
                        case null:
                            break;
                        default:
                            t += ' data-type="',
                            t += e.escape(i),
                            t += '"'
                        }
                        switch (t += '><img class="jcr-w-6 jcr-inline"',
                        n = window.juicerData.sourceIcons[s]) {
                        case !0:
                            t += ' src="src"';
                            break;
                        case !1:
                        case null:
                            break;
                        default:
                            t += ' src="',
                            t += e.escape(n),
                            t += '"'
                        }
                        return t += ' /><div class="icon-label jct-text-dark-blue">',
                        t += "Blog" === r ? "Blog RSS " : "InstagramReels" === r ? "Instagram reels " : e.escape(r),
                        t += "</div></div>"
                    }
                }(this)),
                t += "</div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/_toggle"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div aria-label="',
                t += this.escape(this.hint),
                t += '" class="py-15 tac mb-10 hint--medium fw hint--',
                t += this.escape(this.hintPosition),
                t += " ",
                t += this.escape(this.attr),
                t += " ",
                t += this.escape(this.classes),
                t += '"><label class="bold thirteen">',
                t += this.label,
                t += '</label><div class="switch ibm ml-10"><input name="feed[',
                t += this.escape(this.attr),
                t += ']" type="hidden" value="0" />',
                this.feed.get(this.attr) ? (t += '<input checked="true" class="switch-checkbox" id="',
                t += this.escape(this.attr),
                t += '" name="feed[',
                t += this.escape(this.attr),
                t += ']" type="checkbox" />') : (t += '<input class="switch-checkbox" id="',
                t += this.escape(this.attr),
                t += '" name="feed[',
                t += this.escape(this.attr),
                t += ']" type="checkbox" />'),
                t += '<label class="switch-label" for="',
                t += this.escape(this.attr),
                t += '"><span class="switch-inner"></span><span class="switch-dot"></span></label></div></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/_upgrade_plan"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r, i, n;
                return t = "",
                r = this.css || "j-button",
                n = this.mpevent || "",
                i = this.label || "Learn more about our other plans",
                t += "<a",
                e = "",
                (e += this.escape(r)).length > 0 && (t += ' class="',
                t += e,
                t += '"'),
                t += ' href="/plans?mpevent=',
                t += this.escape(n),
                t += '">',
                t += i,
                t += "</a>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/_widget_card"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e;
                return t = "",
                t += "<li",
                e = "",
                (e += this.escape(this.post.classes())).length > 0 && (t += ' class="',
                t += e,
                t += '"'),
                t += ' data-id="',
                t += this.escape(this.post.get("id")),
                t += '" data-source="',
                t += this.escape(this.post.lowerType()),
                t += '">',
                t += Juicer.Helpers.renderPartial("actions", {
                    isOnFeedsDashboard: this.isOnFeedsDashboard,
                    post: this.post
                }),
                t += Juicer.Helpers.renderPartial("feeds/user", {
                    post: this.post
                }),
                t += "</li>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/_width"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="width white-field after-label bordered"><label for="width">Width</label><input class="width" max="5000" min="100" name="feed[width]" type="number" value="',
                t += this.escape(this.feed.get("width")),
                t += '" /> <label for="width">px</label></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/feeds/_classic"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e;
                return t = "",
                t += '<div class="j-meta j-',
                t += this.escape(this.post.lowerType()),
                t += '"><nav>',
                t += Juicer.Helpers.renderPartial("link", {
                    url: this.post.link(),
                    label: "",
                    class: "j-" + this.post.lowerType() + " j-social",
                    aria: "Link to " + this.post.lowerType() + " post."
                }),
                t += "</nav><ul>",
                this.post.noMeta() || (t += "<li>",
                t += Juicer.Helpers.renderPartial("link", {
                    url: this.post.link(),
                    label: this.post.get("comment_count"),
                    class: this.post.commentClass(),
                    aria: "Comment Count"
                }),
                t += "</li><li>",
                t += Juicer.Helpers.renderPartial("link", {
                    url: this.post.link(),
                    label: this.post.get("like_count"),
                    class: this.post.likeClass(),
                    aria: "Like Count"
                }),
                t += "</li>"),
                t += '</ul></div><div class="j-text"><div class="j-message">',
                t += this.post.message(),
                "Juicer" !== this.post.sourceType() && ("hashtag" === this.post.termType() ? (t += '<div class="info">Posted by <a href="',
                t += this.escape(this.post.get("poster_url")),
                t += '" target="_blank">',
                t += this.escape(this.post.get("poster_name")),
                t += '</a> in <a href="',
                t += this.escape(this.post.termLink()),
                t += '" target="_blank">',
                t += this.escape(this.post.term()),
                t += "</a> on ",
                t += this.escape(this.post.sourceType()),
                t += " on ",
                t += this.escape(Juicer.Helpers.fullDate(this.post.get("external_created_at"))),
                t += " </div>") : "Blog" === this.post.sourceType() ? (t += '<div class="info">Posted at <a href="http://',
                t += this.escape(this.post.get("poster_url")),
                t += '" target="_blank">',
                t += this.escape(this.post.get("poster_name")),
                t += "</a> on ",
                t += this.escape(Juicer.Helpers.fullDate(this.post.get("external_created_at"))),
                t += " </div>") : (t += '<div class="info">Posted by <a href="',
                t += this.escape(this.post.get("poster_url")),
                t += '" target="_blank">',
                t += this.escape(this.post.get("poster_name")),
                t += "</a> on ",
                t += this.escape(this.post.sourceType()),
                t += " on ",
                t += this.escape(Juicer.Helpers.fullDate(this.post.get("external_created_at"))),
                t += " </div>")),
                t += "</div></div>",
                (e = this.post.get("image")) && (t += '<a href="',
                t += this.escape(this.post.link()),
                t += '" target="_blank"><img alt="',
                t += this.escape(this.post.alt()),
                t += '" class="j-content-image" src="',
                t += this.escape(e),
                t += '" /></a>'),
                t
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/feeds/_entertainment"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="j-text-container">',
                t += Juicer.Helpers.renderPartial("content", {
                    post: this.post,
                    feed: this.feed
                }),
                t += '<div class="j-message">',
                t += this.post.message(),
                t += "</div>",
                "large" === this.size && (t += '<div class="j-edit"><a aria-label="',
                t += this.escape(this.aria),
                t += '" class="j-entertainment-link" href="',
                t += this.escape(this.post.link()),
                t += '" target="_blank">Follow Us</a></div>'),
                t += '<div class="j-source-container">',
                t += Juicer.Helpers.renderPartial("link", {
                    url: this.post.link(),
                    label: "",
                    class: "j-" + this.post.lowerType() + " j-social-icon",
                    aria: this.post.lowerType()
                }),
                t += "</div></div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/feeds/_image"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += Juicer.Helpers.renderPartial("content", {
                    post: this.post,
                    feed: this.feed
                }),
                t += '<div class="j-text">',
                t += Juicer.Helpers.renderPartial("poster", {
                    post: this.post,
                    feed: this.feed
                }),
                t += Juicer.Helpers.renderPartial("message", {
                    post: this.post
                }),
                t += Juicer.Helpers.renderPartial("meta", {
                    post: this.post
                }),
                t += "</div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/feeds/_night"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r;
                return t = "",
                t += '<div class="j-text-container">',
                t += Juicer.Helpers.renderPartial("content", {
                    post: this.post,
                    feed: this.feed
                }),
                t += '<div class="j-text">',
                this.post.twitter() && (t += Juicer.Helpers.renderPartial("poster", {
                    post: this.post,
                    feed: this.feed
                })),
                t += Juicer.Helpers.renderPartial("message", {
                    post: this.post
                }),
                "Juicer" === this.post.sourceType() || this.post.twitter() || (t += '<div class="j-meta"><ul>',
                e = 0 === this.post.get("comment_count") ? " " : this.post.get("comment_count"),
                r = 0 === this.post.get("like_count") ? " " : this.post.get("like_count"),
                t += "<li>",
                t += Juicer.Helpers.renderPartial("link", {
                    url: this.post.link(),
                    label: e,
                    class: this.post.commentClass(),
                    aria: "Comments"
                }),
                t += "</li><li>",
                t += Juicer.Helpers.renderPartial("link", {
                    url: this.post.link(),
                    label: r,
                    class: this.post.likeClass(),
                    aria: "Likes"
                }),
                t += "</li></ul></div>"),
                this.post.twitter() && (t += Juicer.Helpers.renderPartial("meta", {
                    post: this.post
                })),
                t += "</div></div>",
                this.post.twitter() || (t += '<div class="j-poster-meta">',
                t += Juicer.Helpers.renderPartial("link", {
                    url: this.post.link(),
                    label: "",
                    class: "j-" + this.post.lowerType() + " j-social-icon",
                    aria: this.post.lowerType()
                }),
                this.post.instagram() && this.post.hashtag() ? (t += '<a aria-label="',
                t += this.escape(this.post.get("poster_name")),
                t += '" href="',
                t += this.escape(this.post.get("poster_url")),
                t += '" target="_blank">',
                t += this.escape(this.post.get("poster_name") + " on Instagram"),
                t += "</a>") : (t += '<a href="',
                t += this.escape(this.post.get("poster_url")),
                t += '" target="_blank">',
                t += this.escape(this.post.get("poster_name")),
                t += "</a>"),
                t += "</div>"),
                t
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/feeds/_polaroid"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e;
                return t = "",
                this.post.get("poster_image") || (e = "no-poster"),
                this.post.twitter() || (t += Juicer.Helpers.renderPartial("content", {
                    post: this.post,
                    feed: this.feed
                })),
                t += '<div class="j-post-container ',
                t += this.escape(e),
                t += '">',
                t += Juicer.Helpers.renderPartial("poster", {
                    post: this.post,
                    feed: this.feed
                }),
                this.post.twitter() || (t += '<h3 class="j-poster-meta">',
                this.post.get("poster_name") && (t += '<a href="',
                t += this.escape(this.post.get("poster_url")),
                t += '" target="_blank">',
                t += this.escape(this.post.get("poster_name")),
                t += '</a> <span class="j-on">on</span> '),
                t += '<a class="platform" href="',
                t += this.escape(this.post.get("poster_url")),
                t += '" target="_blank">',
                t += this.escape(this.post.sourceType()),
                t += "</a></h3>"),
                t += '<div class="j-text">',
                t += Juicer.Helpers.renderPartial("message", {
                    post: this.post
                }),
                this.post.twitter() && (t += Juicer.Helpers.renderPartial("content", {
                    post: this.post,
                    feed: this.feed
                })),
                t += Juicer.Helpers.renderPartial("meta", {
                    post: this.post
                }),
                t += "</div></div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/feeds/_standard"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += Juicer.Helpers.renderPartial("content", {
                    post: this.post,
                    feed: this.feed
                }),
                t += '<div class="j-text">',
                t += Juicer.Helpers.renderPartial("message", {
                    post: this.post
                }),
                t += Juicer.Helpers.renderPartial("meta", {
                    post: this.post
                }),
                t += "</div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/feeds/_user"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += Juicer.Helpers.renderPartial("poster", {
                    post: this.post,
                    feed: this.feed
                }),
                this.post.twitter() || (t += Juicer.Helpers.renderPartial("content", {
                    post: this.post,
                    feed: this.feed
                })),
                t += '<div class="j-text">',
                t += Juicer.Helpers.renderPartial("message", {
                    post: this.post
                }),
                this.post.twitter() && (t += Juicer.Helpers.renderPartial("content", {
                    post: this.post,
                    feed: this.feed
                })),
                t += Juicer.Helpers.renderPartial("meta", {
                    post: this.post
                }),
                t += "</div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/feeds/_wall"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r, i, n;
                if (t = "",
                n = this.post.image(),
                t += "<li",
                i = "",
                (i += this.escape(this.post.classes())).length > 0 && (t += ' class="',
                t += i,
                t += '"'),
                t += ' data-id="',
                t += this.escape(this.post.get("id")),
                t += '" data-source="',
                t += this.escape(this.post.lowerType()),
                t += '">',
                t += Juicer.Helpers.renderPartial("actions", {
                    isOnFeedsDashboard: this.isOnFeedsDashboard,
                    post: this.post
                }),
                n) {
                    switch (t += '<img alt="',
                    t += this.escape(this.post.alt()),
                    t += '" class="j-content-image"',
                    e = n) {
                    case !0:
                        t += ' src="src"';
                        break;
                    case !1:
                    case null:
                        break;
                    default:
                        t += ' src="',
                        t += this.escape(e),
                        t += '"'
                    }
                    t += " />"
                } else
                    t += '<div class="j-text">',
                    t += Juicer.Helpers.renderPartial("message", {
                        post: this.post
                    }),
                    t += "</div>";
                switch (t += '<a aria-label="',
                t += this.escape(this.post.link()),
                t += '" class="j-image" href="',
                t += this.escape(this.post.link()),
                t += '"',
                r = this.post.ad ? "nofollow" : null) {
                case !0:
                    t += ' rel="rel"';
                    break;
                case !1:
                case null:
                    break;
                default:
                    t += ' rel="',
                    t += this.escape(r),
                    t += '"'
                }
                return t += ' target="_blank"><div class="j-living-wall-hover"></div></a></li>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/filters/_new"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e;
                return t = "",
                t += '<ul class="j-display-filters">',
                "v2" === this.feed.get("embed_layout") ? t += '<li class="filters-label">Filters: </li>' : t += "Filters: ",
                _u.each(this.feed.filters(), (e = this,
                function(r) {
                    var i, n, s, o;
                    return s = e.feed.get("display_filter"),
                    n = e.filter || e.feed.filter,
                    (r.filter(s) === n || null === r.filter("filter") && "" === n) && (o = !0),
                    t += "<li",
                    i = "",
                    (i += e.escape(r.filterClass(s, o, !0))).length > 0 && (t += ' class="',
                    t += i,
                    t += '"'),
                    t += ' data-filter="',
                    t += e.escape(r.filter(s)),
                    t += '">',
                    t += e.escape(r.filterDisplay(s)),
                    t += "</li>"
                }
                )),
                t += "</ul>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/filters/_old"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e;
                return t = "",
                t += '<ul class="j-filters filters">',
                _u.each(this.feed.filters(), (e = this,
                function(r) {
                    var i, n, s, o;
                    return s = e.feed.get("display_filter"),
                    n = e.filter || e.feed.filter,
                    (r.filter(s) === n || null === r.filter("filter") && "" === n) && (o = !0),
                    t += "<li",
                    i = "",
                    (i += e.escape(r.filterClass(s, o))).length > 0 && (t += ' class="',
                    t += i,
                    t += '"'),
                    t += ' data-filter="',
                    t += e.escape(r.filter(s)),
                    t += '">',
                    t += e.escape(r.filterDisplay(s)),
                    t += "</li>"
                }
                )),
                t += "</ul>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/source_form/_channel"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<h2 class="new-source-title">',
                t += this.escape(this.source.title()),
                t += '</h2><form accept-charset="UTF-8" action="#" class="source-form" method="post"><div style="display:none"><input name="utf8" type="hidden" value="\u2713" /></div><input name="source" type="hidden" value="',
                t += this.escape(this.source.source()),
                t += '" /><input name="feed_id" type="hidden" value="',
                t += this.escape(this.feedId),
                t += '" /><input name="term_type" type="hidden" value="channel" /><label for="source_term">',
                t += this.escape("https://www.youtube.com/"),
                t += '</label><input autocomplete="off" id="source_term" name="term" placeholder="YouTube_Channel_Name" type="text" /><input class="new-source-submit" name="commit" type="submit" value="Create Source">',
                t += Juicer.Helpers.renderPartial("source_form/youtube_channel_name_example", {
                    source: this.source
                }),
                t += "</input></form>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/source_form/_groups"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e;
                return t = "",
                t += '<h2 class="new-source-title">Connect Facebook Group Posts</h2>',
                this.results ? this.results.models.length > 0 ? (t += '<form accept-charset="UTF-8" action="/feeds/',
                t += this.escape(this.feedId),
                t += '/sources" class="source-form" method="post"><input name="source" type="hidden" value="Facebook" /><input name="feed_id" type="hidden" value="',
                t += this.escape(this.feedId),
                t += '" /><input name="term_type" type="hidden" value="group" /><input class="result-term" name="term" type="hidden" /><input class="result-name" name="name" type="hidden" /><ul class="search-results">',
                _u.each(this.results.models, (e = this,
                function(r) {
                    return t += '<li class="search-result" data-id="',
                    t += e.escape(r.get("id")),
                    t += '" data-name="',
                    t += e.escape(r.get("name")),
                    t += '">',
                    t += e.escape(r.get("name")),
                    t += "</li>"
                }
                )),
                t += "</ul></form>") : t += "<h2>Sorry you aren't the admin of any facebook groups.</h2>" : t += '<a class="j-button j-facebook j-facebook-border j-social-icon social-account social-j-button" href="/auth/facebook">Connect your Facebook account</a>',
                t
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/source_form/_hashtag"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r;
                return t = "",
                this.source.set("term_type", "hashtag"),
                this.source.needsLogin() && this.socialAccounts && !this.socialAccounts.socialAccountForSource(this.source) ? "Instagram" !== this.source.source() && "InstagramReels" !== this.source.source() || (r = window.juicerWL ? "?wl=" + window.juicerWL : "",
                t += '<h2 class="new-source-title mb-20 mx-10 tac">Please connect your Instagram Business account.</h2><div class="connect-explanation tal"><ol class="tc-dark-gray mb-20"><li class="mb-20">We ask that you <strong>connect your Instagram Business account</strong> with Juicer so we can import Instagram hashtag posts for you. <br />This connection is made <strong>via Facebook</strong> (who own Instagram). </li><li class="mb-20">After you have connected your Instagram Business account, you\'ll be able to import Instagram hashtag posts.</li></ol><p class="mt-20">Any further questions? Our help article has your back:</p><a class="tc-green tdu bold" href="https://help.juicer.io/hc/en-us/articles/360040164671-How-to-add-an-Instagram-hashtag-source-to-Juicer" target="_blank">-> How to add an Instagram hashtag source to Juicer</a></div><div class="tac"></div><a class="j-button j-social-icon social-account social-j-button j-facebook j-facebook-bg j-facebook-border" data-method="post" href="/auth/facebook',
                t += this.escape(r),
                t += '">Connect via Facebook</a>') : ("Pinterest" === this.source.source() ? t += '<h2 class="new-source-title">Add Pinterest Board</h2>' : "Instagram" === this.source.source() ? t += '<h2 class="new-source-title">Import posts for an Instagram hashtag</h2>' : "InstagramReels" === this.source.source() ? t += '<h2 class="new-source-title">Import reels for an Instagram hashtag</h2>' : "Twitter" === this.source.source() ? t += '<h2 class="new-source-title">Add X (Twitter) Hashtag</h2>' : (t += '<h2 class="new-source-title">Add ',
                t += this.escape(this.source.source()),
                t += " Hashtag</h2>"),
                "Instagram" === this.source.source() && this.isLoading ? t += '<container class="tac pt-75"><h2>Checking the status of your Facebook social account connection, please wait...</h2><ul class="new-source"><div class="j-loading"></div></ul></container>' : (t += '<form accept-charset="UTF-8" action="#" class="source-form" method="post"><div style="display:none"><input name="utf8" type="hidden" value="\u2713" /></div><input name="feed_id" type="hidden" value="',
                t += this.escape(this.feedId),
                t += '" /><input name="term_type" type="hidden" value="',
                t += this.escape(this.type),
                t += '" />',
                "InstagramReels" === this.source.source() ? t += '<input name="only_reels" type="hidden" value="true" /><input name="source" type="hidden" value="Instagram" />' : "Instagram" === this.source.source() ? (t += '<input name="only_posts" type="hidden" value="true" /><input name="source" type="hidden" value="',
                t += this.escape(this.source.source()),
                t += '" />') : (t += '<input name="source" type="hidden" value="',
                t += this.escape(this.source.source()),
                t += '" />'),
                "Pinterest" === this.source.source() ? (t += '<label for="source_term">',
                t += this.escape(this.source.label()),
                t += "</label>") : t += '<label for="source_term">#</label>',
                e = this.source.placeholderHashtag(),
                "Instagram" === this.source.source() ? (t += '<input autocomplete="off" data-filter_invalid_instagram_hashtag_characters="true" id="source_term" name="term" placeholder="',
                t += this.escape(e),
                t += '" type="text" />') : (t += '<input autocomplete="off" id="source_term" name="term" placeholder="',
                t += this.escape(e),
                t += '" type="text" />'),
                "Twitter" === this.source.source() && (t += '<div class="feed-term-type"><input id="replies" name="replies" type="checkbox" value="replies" /><label for="replies">Include @replies</label></div><p class="mt-30 help-text">Please note: X (Twitter) only allows us to import hashtag posts <strong>from the last 7 days.</strong></p>'),
                "Instagram" !== this.source.source() && "InstagramReels" !== this.source.source() || (t += '<p class="mt-30 help-text">Please note: Instagram only allows us to import hashtag posts <strong>from the last 24 hours</strong>. This is a technical limitation (see: <a class="tdu bold tc-black" href="https://developers.facebook.com/docs/instagram-api/reference/ig-hashtag/recent-media" target="_blank">Instagram API documentation</a>). </p>'),
                t += '<input class="new-source-submit" name="commit" type="submit" value="Create Source" /></form>')),
                t
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/source_form/_max"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<h2>You need to upgrade to add more sources</h2><h3 style="margin-bottom:1.5rem">Unfortunately, the ',
                t += this.escape(this.feed.get("plan")),
                t += " plan only allows ",
                t += this.escape(this.feed.get("max_sources")),
                t += " sources per feed.</h3>",
                t += Juicer.Helpers.renderPartial("upgrade_plan", {
                    feed: this.feed,
                    mpevent: "source_form_max_reached"
                })
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/source_form/_new"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r, i, n, s, o, a, c, l, u;
                return t = "",
                l = (a = this.source.get("source")).toLowerCase(),
                n = this.source.findProvider(),
                "Instagram" !== this.source.source() && "InstagramReels" !== this.source.source() && this.source.needsLogin() && !this.socialAccounts.socialAccountForSource(this.source) ? (t += '<div class="new-source-container">',
                s = window.juicerWL ? "?wl=" + window.juicerWL : "",
                "facebook" === l ? (t += '<h2 class="new-source-title">Please connect your personal Facebook account.</h2><p class="connect-explanation">After you\'ve made this connection, you can choose from which Facebook (business) page Juicer should import posts or reviews. <br />Adding the connection <strong>will NOT import personal posts to your Juicer feed,</strong> it is only for verification purposes. </p><a class="j-button j-social-icon social-account social-j-button j-',
                t += this.escape(l),
                t += " j-",
                t += this.escape(l),
                t += "-bg j-",
                t += this.escape(l),
                t += '-border" data-method="post" href="/auth/',
                t += this.escape(l),
                t += this.escape(s),
                t += '">Connect your ',
                t += this.escape(a),
                t += " account</a>") : "twitter" === l ? (t += '<h2 class="new-source-title">Please connect your X (Twitter) account.</h2><p class="connect-explanation">After you\'ve made this connection, you\'ll be able to import tweets. <br />Adding the connection <strong>will NOT import personal tweets to your Juicer feed,</strong> it is only for verification purposes. </p><a class="j-button j-social-icon social-account social-j-button j-',
                t += this.escape(l),
                t += " j-",
                t += this.escape(l),
                t += "-bg j-",
                t += this.escape(l),
                t += '-border" data-method="post" href="/auth/',
                t += this.escape(l),
                t += this.escape(s),
                t += '">Connect your X (Twitter) account</a>') : "tiktok" === l ? (t += '<h2 class="new-source-title">Please connect your personal TikTok account.</h2><p class="connect-explanation">After you\'ve made this connection, you can import your personal posts into Juicer. Adding the connection <strong>will NOT import personal posts to your Juicer feed,</strong> it is only for verification purposes. </p><a class="j-button j-social-icon social-account social-j-button j-',
                t += this.escape(l),
                t += "-white j-",
                t += this.escape(l),
                t += "-bg j-",
                t += this.escape(l),
                t += '-border" data-method="post" href="/auth/',
                t += this.escape(l),
                t += this.escape(s),
                t += '">Connect your ',
                t += this.escape(a),
                t += " account</a>") : (t += '<h2 class="new-source-title">Please connect your ',
                t += this.escape(a),
                t += ' account.</h2><p class="connect-explanation">We ask that you connect your ',
                t += this.escape(a),
                t += " account so that we don't run into API rate limits. <strong>This will not automatically import your ",
                t += this.escape(a),
                t += " posts.</strong> ",
                e = "instagram" === l ? "add the posts of your connected account" : "add the posts of ANY public user or hashtags",
                t += "After you have connected your account, you can ",
                t += this.escape(e),
                t += '. </p><a class="j-button j-social-icon social-account social-j-button j-',
                t += this.escape(l),
                t += " j-",
                t += this.escape(l),
                t += "-bg j-",
                t += this.escape(l),
                t += '-border" data-method="post" href="/auth/',
                t += this.escape(n),
                t += this.escape(s),
                t += '">Connect your ',
                t += this.escape(a),
                t += " account</a>"),
                t += "</div>") : (this.source.hashtags() && (!window.juicerData.user.instagramStoriesEnabled || "Instagram" !== this.source.source() && "InstagramReels" !== this.source.source()) && (t += '<nav><ul class="source-types">',
                _u.each(["Username", "Hashtag"], (u = this,
                function(e) {
                    var r;
                    return r = e.toLowerCase() === u.type ? "active" : "",
                    "Pinterest" === u.source.source() && "Hashtag" === e ? (t += '<li class="source-type ',
                    t += u.escape(r),
                    t += '" data-type="',
                    t += u.escape(e.toLowerCase()),
                    t += '">Board</li>') : "Facebook" === u.source.source() && "Username" === e ? (t += '<li class="source-type ',
                    t += u.escape(r),
                    t += '" data-type="',
                    t += u.escape(e.toLowerCase()),
                    t += '">Your Page</li>') : "Facebook" !== u.source.source() || "Hashtag" !== e ? (t += '<li class="source-type ',
                    t += u.escape(r),
                    t += '" data-type="',
                    t += u.escape(e.toLowerCase()),
                    t += '">',
                    t += u.escape(e),
                    t += "</li>") : void 0
                }
                )),
                "Facebook" === this.source.source() && (o = "reviews" === this.type ? "active" : "",
                t += '<li class="source-type ',
                t += this.escape(o),
                t += '" data-type="reviews">Reviews</li>'),
                "YouTube" === this.source.source() && (i = "channel" === this.type ? "active" : "",
                t += '<li class="source-type ',
                t += this.escape(i),
                t += '" data-type="channel">Channel</li>'),
                t += "</ul></nav>"),
                r = this.feed ? this.feed.get("id") : void 0,
                t += '<div class="new-source-container">',
                (c = {
                    Blog: "360040453011-Blog-sources-Adding-and-troubleshooting",
                    Facebook: "360039995932-Facebook-sources-Adding-and-troubleshooting",
                    Flickr: "360040042652-Flickr-sources-Adding-and-troubleshooting",
                    Giphy: "360040043352-Giphy-sources-Adding-and-troubleshooting",
                    Pinterest: "360039996392-Pinterest-sources-Adding-and-troubleshooting",
                    Slack: "360040448211-Slack-sources-Adding-and-troubleshooting",
                    Soundcloud: "360040043512-Soundcloud-sources-Adding-and-troubleshooting",
                    Tumblr: "360040038412-Tumblr-sources-Adding-and-troubleshooting",
                    Twitter: "360040405811-X-Twitter-sources-Adding-and-troubleshooting",
                    Vimeo: "360040448291-Vimeo-sources-adding-and-troubleshooting",
                    YouTube: "360040406271-YouTube-sources-Adding-and-troubleshooting"
                })[a] && (t += '<a aria-label="Learn more about ',
                t += this.escape(a),
                t += ' sources" class="new-source-help hint--bottom-left" href="',
                t += this.escape(Juicer.Constants.HELP_CENTER_URL),
                t += "/articles/",
                t += this.escape(c[a]),
                t += '" target="_blank">Help</a>'),
                "instagram" === l || "instagramreels" === l || "tiktok" === l ? t += Juicer.Helpers.renderPartial("source_form/" + this.type, {
                    source: this.source,
                    csrf: this.csrf,
                    feedId: r,
                    feed: this.feed,
                    type: this.type,
                    socialAccounts: this.socialAccounts,
                    results: this.results,
                    isLoading: this.isLoading,
                    post_type: this.postType
                }) : Juicer.Constants.PROVIDERS_WITH_MULTIPLE_SOCIAL_ACCOUNTS.indexOf(n) >= 0 ? t += Juicer.Helpers.renderPartial("source_form/" + this.type, {
                    source: this.source,
                    csrf: this.csrf,
                    feedId: r,
                    type: this.type,
                    socialAccounts: this.socialAccounts.findAllWithProvider(n),
                    results: this.results,
                    isLoading: this.isLoading,
                    post_type: this.postType
                }) : t += Juicer.Helpers.renderPartial("source_form/" + this.type, {
                    source: this.source,
                    csrf: this.csrf,
                    feedId: r,
                    type: this.type,
                    socialAccount: this.socialAccounts.socialAccount(n),
                    results: this.results,
                    isLoading: this.isLoading
                }),
                t += "</div>"),
                t
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/source_form/_reviews"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e;
                return t = "",
                t += '<h2 class="new-source-title">Connect Facebook Page Reviews</h2>',
                this.results ? this.results.models.length > 0 ? (t += '<form accept-charset="UTF-8" action="/feeds/',
                t += this.escape(this.feedId),
                t += '/sources" class="source-form" method="post"><input name="source" type="hidden" value="Facebook" /><input name="feed_id" type="hidden" value="',
                t += this.escape(this.feedId),
                t += '" /><input name="term_type" type="hidden" value="reviews" /><input class="result-term" name="term" type="hidden" /><input class="result-name" name="name" type="hidden" /><ul class="search-results">',
                _u.each(this.results.models, (e = this,
                function(r) {
                    return t += '<li class="search-result" data-id="',
                    t += e.escape(r.get("id")),
                    t += '" data-name="',
                    t += e.escape(r.get("name")),
                    t += '">',
                    t += e.escape(r.get("name")),
                    t += "</li>"
                }
                )),
                t += "</ul></form>") : t += "<h2>Sorry you aren't the admin of any facebook pages.</h2>" : t += '<a class="j-button j-facebook j-facebook-border j-social-icon social-account social-j-button" data-method="post" href="/auth/facebook">Connect your Facebook account</a>',
                t
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/source_form/_username"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                "Facebook" === this.source.source() ? t += Juicer.Helpers.renderPartial("source_form/username_pages", {
                    source: this.source,
                    csrf: this.csrf,
                    feedId: this.feedId,
                    type: this.type,
                    socialAccount: this.socialAccount,
                    results: this.results,
                    isLoading: this.isLoading
                }) : "Instagram" === this.source.source() ? window.juicerData.user.instagramLoginEnabled ? t += Juicer.Helpers.renderPartial("source_form/username_instagram_login", {
                    source: this.source,
                    csrf: this.csrf,
                    feedId: this.feedId,
                    feed: this.feed,
                    type: this.type,
                    socialAccounts: this.socialAccounts,
                    results: this.results,
                    isLoading: this.isLoading,
                    post_type: "post"
                }) : t += Juicer.Helpers.renderPartial("source_form/username_instagram_basic_display", {
                    source: this.source,
                    csrf: this.csrf,
                    feedId: this.feedId,
                    feed: this.feed,
                    type: this.type,
                    socialAccounts: this.socialAccounts,
                    results: this.results,
                    isLoading: this.isLoading,
                    post_type: "post"
                }) : "InstagramReels" === this.source.source() ? window.juicerData.user.instagramLoginEnabled ? t += Juicer.Helpers.renderPartial("source_form/username_instagram_login", {
                    source: this.source,
                    csrf: this.csrf,
                    feedId: this.feedId,
                    feed: this.feed,
                    type: this.type,
                    socialAccounts: this.socialAccounts,
                    results: this.results,
                    isLoading: this.isLoading,
                    post_type: "reel"
                }) : t += Juicer.Helpers.renderPartial("source_form/username_instagram_basic_display", {
                    source: this.source,
                    csrf: this.csrf,
                    feedId: this.feedId,
                    feed: this.feed,
                    type: this.type,
                    socialAccounts: this.socialAccounts,
                    results: this.results,
                    isLoading: this.isLoading,
                    post_type: "reel"
                }) : "TikTok" === this.source.source() ? t += Juicer.Helpers.renderPartial("source_form/username_tiktok", {
                    source: this.source,
                    csrf: this.csrf,
                    feedId: this.feedId,
                    type: this.type,
                    socialAccounts: this.socialAccounts,
                    results: this.results,
                    isLoading: this.isLoading
                }) : "LinkedIn" === this.source.source() ? (t += '<a class="load-form-async" hx-get="/sources/new?source=',
                t += this.escape(this.source.source()),
                t += "&amp;feed_id=",
                t += this.escape(this.feedId),
                t += "&amp;type=",
                t += this.escape(this.type),
                t += '" hx-swap="afterend" hx-target="this"></a>') : t += Juicer.Helpers.renderPartial("source_form/username_input", {
                    source: this.source,
                    csrf: this.csrf,
                    feedId: this.feedId,
                    type: this.type,
                    socialAccount: this.socialAccount,
                    results: this.results
                }),
                t
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/source_form/_username_example"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r;
                return t = "",
                (e = this.source.usernameExample()) && (t += '<div class="source-form-example mt-40"><h4 class="tc-orange ibt bold">For Example:</h4> if you want to add ',
                t += this.escape(e.name),
                t += ', copy & paste the bold part: <br /><a href="',
                t += this.escape(e.link),
                t += '" target="_blank">',
                t += e.formattedLink,
                t += "</a></div>"),
                (r = this.source.usernameHelpLink()) && (t += '<div class="source-form-example mt-10"><h4 class="tc-orange ibt bold">Help:</h4> <a href="',
                t += this.escape(r.link),
                t += '" target="_blank">',
                t += r.text,
                t += "</a></div>"),
                t
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/source_form/_username_input"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e;
                return t = "",
                t += '<h2 class="new-source-title">',
                t += this.escape(this.source.title()),
                t += '</h2><form accept-charset="UTF-8" action="#" class="source-form" method="post"><div style="display:none"><input name="utf8" type="hidden" value="\u2713" /></div><input name="source" type="hidden" value="',
                t += this.escape(this.source.source()),
                t += '" /><input name="feed_id" type="hidden" value="',
                t += this.escape(this.feedId),
                t += '" /><input name="term_type" type="hidden" value="',
                t += this.escape(this.type),
                t += '" />',
                "Tumblr" === this.source.source() ? (t += '<label for="source_term">http://</label><input autocomplete="off" id="source_term" name="term" placeholder="',
                t += this.escape(this.source.placeholder()),
                t += '" type="text" /><label for="source_term">.tumblr.com</label>') : "Hashtag" === this.source.source() ? (t += '<ul class="add-a-hashtag">',
                _u.each(_u.filter(this.source.hashtagSupporters, (function(t) {
                    return "Facebook" !== t
                }
                )), (e = this,
                function(r) {
                    var i;
                    return i = r.toLowerCase(),
                    t += '<li class="j-',
                    t += e.escape(i),
                    t += " j-",
                    t += e.escape(i),
                    t += '-color hashtag-source j-social-icon ibt tc-white" data-type="',
                    t += e.escape(r),
                    t += '">',
                    "InstagramReels" === r ? (t += '<div class="tc-slevin">',
                    t += e.escape("Instagram reels"),
                    t += "</div>") : (t += '<div class="tc-slevin">',
                    t += e.escape(r),
                    t += "</div>"),
                    t += "</li>"
                }
                )),
                t += "</ul>") : (t += '<label for="source_term">',
                t += this.escape(this.source.label()),
                t += '</label><input autocomplete="off" id="source_term" name="term" placeholder="',
                t += this.escape(this.source.placeholder()),
                t += '" type="text" />',
                "Facebook" === this.source.source() && (t += '<div class="feed-term-type"><input id="term_type" name="term_type" type="checkbox" value="feed" /><label for="term_type">Include posts that mention my page.</label></div>'),
                "Twitter" === this.source.source() && (t += '<div class="feed-term-type"><input id="retweets" name="retweets" type="checkbox" value="retweets" /><label for="retweets">Include reposts</label><input id="replies" name="replies" type="checkbox" value="replies" /><label for="replies">Include @replies</label></div>')),
                "Hashtag" !== this.source.source() && (t += '<input class="new-source-submit" name="commit" type="submit" value="Create Source" />',
                t += Juicer.Helpers.renderPartial("source_form/username_example", {
                    source: this.source
                })),
                t += "</form>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/source_form/_username_instagram_basic_display"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r, i;
                return t = "",
                window.juicerData.user.instagramStoriesEnabled ? (t += '<a class="load-form-async" hx-get="/sources/new?source=',
                t += this.escape(this.source.source()),
                t += "&amp;feed_id=",
                t += this.escape(this.feedId),
                t += "&amp;type=",
                t += this.escape(this.type),
                t += '" hx-swap="afterend" hx-target="this"></a>') : (this.source.set("term_type", "username"),
                this.source.needsLogin() && 0 === this.socialAccounts.findAllWithProvider("instagram_basic_display").length ? (e = window.juicerWL ? "?wl=" + window.juicerWL : "",
                t += '<h2 class="new-source-title">Please connect your Instagram account.</h2><p class="connect-explanation">We ask that you connect your Instagram account so that we don\'t run into API rate limits. <strong>This will not automatically import your Instagram posts.</strong> After you have connected your account, you can add the posts of your connected account. </p><a class="j-button j-social-icon social-account social-j-button j-instagram j-instagram-bg j-instagram-border" data-method="post" href="/auth/instagram_basic_display',
                t += this.escape(e),
                t += '">Connect your Instagram account</a>') : (t += '<div class="mx-20 instagram-form"><div class="container-fluid"><div class="row px-20"><div class="col-12"><h2 class="new-source-title">Import ',
                t += this.escape(this.post_type),
                t += 's for an Instagram username</h2></div><div class="col-12 border form-container px-20"><p class="new-source-subtitle">Choose existing Instagram username</p><form accept-charset="UTF-8" action="/feeds/',
                t += this.escape(this.feedId),
                t += '/sources" class="source-form mt-10" method="post"><input name="source" type="hidden" value="Instagram" /><input name="feed_id" type="hidden" value="',
                t += this.escape(this.feedId),
                t += '" /><input name="term_type" type="hidden" value="username" />',
                "reel" === this.post_type ? t += '<input name="only_reels" type="hidden" value="true" />' : t += '<input name="only_posts" type="hidden" value="true" />',
                t += '<div class="d-flex flex-row justify-content-between align-items-center"><span class="fs-1-5 at-sign">@</span><select class="p-10 username-select flex-grow-1 mx-10 shadow-sm" name="term">',
                r = this.socialAccounts.findAllWithProvider("instagram_basic_display"),
                _u.each(r, (i = this,
                function(e) {
                    return t += "<option>",
                    t += i.escape(e.attributes.name),
                    t += "</option>"
                }
                )),
                t += '</select><input class="new-source-submit" name="commit" type="submit" value="Create Source" /></div></form></div><div class="col-12"><div class="separator-text my-10">OR</div></div><div class="col-12 border form-container px-20"><p class="new-source-subtitle pb-10">Add a new Instagram username</p><p class="pb-20">Log out of Instagram before continuing to prevent reconnection already connected account.</p><a class="j-button j-instagram j-instagram-bg j-social-icon j-instagram-border social-account social-j-button" data-method="post" href="/auth/instagram_basic_display">Connect via Instagram</a></div></div></div></div>')),
                t
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/source_form/_username_instagram_login"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r, i;
                return t = "",
                window.juicerData.user.instagramStoriesEnabled ? (t += '<a class="load-form-async" hx-get="/sources/new?source=',
                t += this.escape(this.source.source()),
                t += "&amp;feed_id=",
                t += this.escape(this.feedId),
                t += "&amp;type=",
                t += this.escape(this.type),
                t += '" hx-swap="afterend" hx-target="this"></a>') : (this.source.set("term_type", "username"),
                this.source.needsLogin() && 0 === this.socialAccounts.findAllWithProvider("instagram_login").length ? (e = window.juicerWL ? "?wl=" + window.juicerWL : "",
                t += '<h2 class="new-source-title">Please connect your Instagram account.</h2><p class="connect-explanation">We ask that you connect your Instagram account so that we don\'t run into API rate limits. <strong>This will not automatically import your Instagram posts.</strong> After you have connected your account, you can add the posts of your connected account. </p><a class="j-button j-social-icon social-account social-j-button j-instagram j-instagram-bg j-instagram-border" data-method="post" href="/auth/instagram_login',
                t += this.escape(e),
                t += '">Connect your Instagram account</a>') : (t += '<div class="mx-20 instagram-form"><div class="container-fluid"><div class="row px-20"><div class="col-12"><h2 class="new-source-title">Import ',
                t += this.escape(this.post_type),
                t += 's for an Instagram username</h2></div><div class="col-12 border form-container px-20"><p class="new-source-subtitle">Choose existing Instagram username</p><form accept-charset="UTF-8" action="/feeds/',
                t += this.escape(this.feedId),
                t += '/sources" class="source-form mt-10" method="post"><input name="source" type="hidden" value="Instagram" /><input name="feed_id" type="hidden" value="',
                t += this.escape(this.feedId),
                t += '" /><input name="term_type" type="hidden" value="username" />',
                "reel" === this.post_type ? t += '<input name="only_reels" type="hidden" value="true" />' : t += '<input name="only_posts" type="hidden" value="true" />',
                t += '<div class="d-flex flex-row justify-content-between align-items-center"><span class="fs-1-5 at-sign">@</span><select class="p-10 username-select flex-grow-1 mx-10 shadow-sm" name="term">',
                r = this.socialAccounts.findAllWithProvider("instagram_login"),
                _u.each(r, (i = this,
                function(e) {
                    return t += "<option>",
                    t += i.escape(e.attributes.name),
                    t += "</option>"
                }
                )),
                t += '</select><input class="new-source-submit" name="commit" type="submit" value="Create Source" /></div></form></div><div class="col-12"><div class="separator-text my-10">OR</div></div><div class="col-12 border form-container px-20"><p class="new-source-subtitle pb-10">Add a new Instagram username</p><p class="pb-20">Log out of Instagram before continuing to prevent reconnection already connected account.</p><a class="j-button j-instagram j-instagram-bg j-social-icon j-instagram-border social-account social-j-button" data-method="post" href="/auth/instagram_login">Connect via Instagram</a></div></div></div></div>')),
                t
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/source_form/_username_linkedin_20"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                return ""
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/source_form/_username_pages"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e;
                return t = "",
                t += '<h2 class="new-source-title">Add your Facebook Page</h2>',
                this.isLoading ? t += '<container class="tac pt-75"><ul class="new-source"><div class="j-loading"></div></ul></container>' : (this.results ? this.results.models.length > 0 ? (t += '<form accept-charset="UTF-8" action="/feeds/',
                t += this.escape(this.feedId),
                t += '/sources" class="source-form mb-40" method="post"><input name="source" type="hidden" value="Facebook" /><input name="feed_id" type="hidden" value="',
                t += this.escape(this.feedId),
                t += '" /><input name="term_type" type="hidden" value="username" /><input class="result-term" name="term" type="hidden" /><input class="result-name" name="name" type="hidden" /><ul class="search-results">',
                _u.each(this.results.models, (e = this,
                function(r) {
                    var i;
                    return i = r.get("username") || r.get("id"),
                    t += '<li class="search-result" data-id="',
                    t += e.escape(i),
                    t += '" data-name="',
                    t += e.escape(r.get("name")),
                    t += '">',
                    t += e.escape(r.get("name")),
                    t += e.escape(" (" + i + ")"),
                    t += "</li>"
                }
                )),
                t += '</ul><div class="feed-term-type"><input id="term_type" name="term_type" type="checkbox" value="feed" /> <label for="term_type">Also import Facebook Visitor Posts (see: <a class="tc-blue" href="https://www.facebook.com/help/356113237741414" target="_blank">facebook.com/help/356113237741414</a>)</label></div></form>') : t += "<h2>Sorry you aren't the manager of any facebook pages.</h2>" : t += '<a class="j-button j-facebook j-facebook-border j-social-icon social-account social-j-button" data-method="post" href="/auth/facebook">Connect your Facebook account</a>',
                t += '<div class="row new-source-warning"><div class="offset-2 col-8"><strong>Not seeing your page here?</strong> <br />Make sure the Facebook account that you\'ve connected has management access to the relevant Facebook Page. <br /><a aria-label="Learn more" class="tc-black bold tdu" href="',
                t += this.escape(Juicer.Constants.HELP_CENTER_URL),
                t += '/articles/360039938752-Validating-ownership-of-your-Facebook-sources" target="_blank"> Learn more</a></div></div>'),
                t
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/source_form/_username_tiktok"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r;
                return t = "",
                t += '<div class="mx-20 tiktok-form"><div class="container-fluid"><div class="row px-20"><div class="col-12"><h2 class="new-source-title">Import posts for a TikTok username</h2></div><div class="col-12 border form-container px-20"><p class="new-source-subtitle">Choose existing TikTok username</p><form accept-charset="UTF-8" action="/feeds/',
                t += this.escape(this.feedId),
                t += '/sources" class="source-form mt-10" method="post"><input name="source" type="hidden" value="TikTok" /><input name="feed_id" type="hidden" value="',
                t += this.escape(this.feedId),
                t += '" /><input name="term_type" type="hidden" value="username" /><div class="d-flex flex-row justify-content-between align-items-center"><select class="p-10 username-select flex-grow-1 mr-10 shadow-sm" name="term">',
                e = this.socialAccounts.findAllWithProvider("tiktok"),
                _u.each(e, (r = this,
                function(e) {
                    return t += "<option>",
                    t += r.escape(e.attributes.name),
                    t += "</option>"
                }
                )),
                t += '</select><input class="new-source-submit" name="commit" type="submit" value="Create Source" /></div></form></div><div class="col-12"><div class="separator-text my-10">OR</div></div><div class="col-12 border form-container px-20"><p class="new-source-subtitle pb-10">Add a new TikTok username</p><p class="pb-20">If you have multiple TikTok accounts, you will be able to switch between them in the next step. Depending on the account you choose, we will either refresh the connection in Juicer or add a new one.</p><a class="j-button j-tiktok j-tiktok-bg j-social-icon j-tiktok-border social-account social-j-button" data-method="post" href="/auth/tiktok">Connect via TikTok</a></div></div></div></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/source_form/_youtube_channel_name_example"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e;
                return t = "",
                e = this.source.youtubeChannelNameExample(),
                t += '<div class="source-form-example mt-40"><h4 class="tc-orange ibt bold">For Example:</h4> if you want to add ',
                t += this.escape(e.name),
                t += ', copy & paste the bold part: <br /><a href="',
                t += this.escape(e.link),
                t += '" target="_blank">',
                t += e.formattedLink,
                t += "</a></div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/video/_blog_embed"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e;
                switch (t = "",
                t += '<div class="video-wrapper">',
                t += '<video autoplay="autoplay"',
                e = !!this.overlay) {
                case !0:
                    t += ' controls="controls"';
                    break;
                case !1:
                case null:
                    break;
                default:
                    t += ' controls="',
                    t += this.escape(e),
                    t += '"'
                }
                return t += ' loop="true"><source src="',
                t += this.escape(this.video),
                t += '" type="video/mp4" /></video></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/video/_facebook_embed"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e;
                switch (t = "",
                t += '<div class="video-wrapper">',
                t += '<video autoplay="autoplay"',
                e = !!this.overlay) {
                case !0:
                    t += ' controls="controls"';
                    break;
                case !1:
                case null:
                    break;
                default:
                    t += ' controls="',
                    t += this.escape(e),
                    t += '"'
                }
                return t += ' loop="true"><source src="',
                t += this.escape(this.video),
                t += '" type="video/mp4" /></video></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/video/_flickr_embed"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="video-wrapper"><embed autoplay="true" autostart="true" play="true" src="',
                t += this.escape(this.video),
                t += '&amp;autoPlay=true" wmode="transparent" /></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/video/_instagram_embed"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r, i, n;
                switch (t = "",
                t += '<div class="instagram-wrapper"',
                e = n = this.height ? "height: " + this.height + "px" : "") {
                case !0:
                    t += ' style="style"';
                    break;
                case !1:
                case null:
                    break;
                default:
                    t += ' style="',
                    t += this.escape(e),
                    t += '"'
                }
                switch (t += ">",
                t += '<video autoplay="autoplay"',
                r = !!this.overlay) {
                case !0:
                    t += ' controls="controls"';
                    break;
                case !1:
                case null:
                    break;
                default:
                    t += ' controls="',
                    t += this.escape(r),
                    t += '"'
                }
                switch (t += ' id="video" loop="true"',
                i = n) {
                case !0:
                    t += ' style="style"';
                    break;
                case !1:
                case null:
                    break;
                default:
                    t += ' style="',
                    t += this.escape(i),
                    t += '"'
                }
                return t += '><source src="',
                t += this.escape(this.video),
                t += '" /></video>',
                this.post && (t += '<a class="j-video-fallback" href="',
                t += this.escape(this.post.link()),
                t += '" style="display: none;" target="_blank"><img data-lazy="',
                t += this.escape(this.post.get("image")),
                t += '" /></a>'),
                t += "</div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/video/_linkedin_embed"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e;
                switch (t = "",
                t += '<div class="video-wrapper linkedin-wrapper">',
                t += '<video autoplay="autoplay"',
                e = !!this.overlay) {
                case !0:
                    t += ' controls="controls"';
                    break;
                case !1:
                case null:
                    break;
                default:
                    t += ' controls="',
                    t += this.escape(e),
                    t += '"'
                }
                return t += ' loop="true"><source src="',
                t += this.escape(this.video),
                t += '" type="video/mp4" /></video></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/video/_slack_embed"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e;
                switch (t = "",
                t += '<div class="video-wrapper">',
                t += '<video autoplay="autoplay"',
                e = !!this.overlay) {
                case !0:
                    t += ' controls="controls"';
                    break;
                case !1:
                case null:
                    break;
                default:
                    t += ' controls="',
                    t += this.escape(e),
                    t += '"'
                }
                return t += ' loop="true"><source src="',
                t += this.escape(this.video),
                t += '" type="video/mp4" /></video></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/video/_soundcloud_embed"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="video-wrapper"><iframe allow="autoplay" frameborder="no" scrolling="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/',
                t += this.escape(this.id),
                t += '&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;visual=true&amp;show_teaser=false"></iframe></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/video/_spotify_embed"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="video-wrapper"><iframe allowtransparency="true" frameborder="0" src="https://embed.spotify.com/?uri=spotify:track:',
                t += this.escape(this.id),
                t += '"></iframe></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/video/_tiktok_embed"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="video-wrapper tiktok-wrapper"><iframe frameborder="0" src="',
                t += this.escape(this.video),
                t += '"></iframe></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/video/_tumblr_embed"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="video-wrapper">',
                t += this.video,
                t += "</div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/video/_vimeo_embed"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="video-wrapper"><iframe allowfullscreen="true" frameborder="0" mozallowfullscreen="true" src="//player.vimeo.com/video/',
                t += this.escape(this.id),
                t += '?autoplay=1&amp;title=0&amp;byline=0&amp;portrait=0" webkitallowfullscreen="true"></iframe></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/video/_vine_embed"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="vine-wrapper"><iframe frameborder="0" src="',
                t += this.escape(this.id),
                t += '/card?audio=1"></iframe><script src="https://platform.vine.co/static/scripts/embed.js"></script></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/video/_x-twitter_embed"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e;
                switch (t = "",
                t += '<div class="twitter-wrapper">',
                t += '<video autoplay="autoplay"',
                e = !!this.overlay) {
                case !0:
                    t += ' controls="controls"';
                    break;
                case !1:
                case null:
                    break;
                default:
                    t += ' controls="',
                    t += this.escape(e),
                    t += '"'
                }
                return t += ' loop="true"><source src="',
                t += this.escape(this.video),
                t += '" type="video/mp4" /></video></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["partials/video/_youtube_embed"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e;
                return t = "",
                t += '<div class="video-wrapper">',
                e = this.overlay ? "autoplay=1&rel=0" : "autoplay=1&rel=0&controls=0",
                t += '<iframe allowfullscreen="allowfullscreen" frameborder="0" src="https://www.youtube-nocookie.com/embed/',
                t += this.escape(this.id),
                t += "?",
                t += this.escape(e),
                t += '"></iframe></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST.plan_change = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r, i;
                if (t = "",
                t += '<div class="change-plan-overlay"><h2 class="tc-dark-gray fs-1-75">Changing Your Juicer Plan </h2><div class="plan-change-summary cf mb-40 pb-40 relative"><div class="existing-plan fl"><h3 class="bold tc-dark-gray fs-1-5">Current Plan: <br />',
                this.model.get("year") ? (t += this.escape(this.model.planCapital()),
                t += ": ",
                t += this.escape(this.model.get("cost_formatted")),
                t += "/yr ") : (t += this.escape(this.model.planCapital()),
                t += ": ",
                t += this.escape(this.model.get("cost_formatted")),
                t += "/mo "),
                t += "</h3><h4>",
                t += this.model.get("subtitle"),
                t += '</h4></div><div class="change-plan-arrow"></div><div class="new-plan fr"><h3 class="bold tc-dark-gray fs-1-5">New Plan: <br />',
                this.model.get("new_plan_yearly") ? (t += this.escape(this.model.newPlanCapital()),
                t += ": ",
                t += this.escape(this.model.get("new_cost_formatted")),
                t += "/yr ") : (t += this.escape(this.model.newPlanCapital()),
                t += ": ",
                t += this.escape(this.model.get("new_cost_formatted")),
                t += "/mo "),
                t += "</h3><h4>",
                t += this.model.get("new_subtitle"),
                t += "</h4></div></div>",
                "small" === this.model.get("new_plan")) {
                    switch (t += '<div class="change-plan-explainer mb-25">Your subscription will no longer renew and your Juicer account will automatically downgrade to a <strong>',
                    t += this.escape("Free "),
                    t += "</strong>plan on <strong>",
                    t += this.escape(this.model.downgradeDate()),
                    t += '</strong></div><div class="archive-mode-explainer"><strong class="tc-grapefruit up">Notice:</strong> Fully downgrading will remove all extra sources and feeds from your Juicer account. If you\u2019d like to keep an archive of these feeds, consider downgrading to <a class="tc-grapefruit tdu" data-method="put" href="/plans/archive">Archive Mode</a> for $5/Month! <form action="/churns" class="tac mt-30" method="post"><input name="authenticity_token" type="hidden"',
                    e = this.csrf) {
                    case !0:
                        t += ' value="value"';
                        break;
                    case !1:
                    case null:
                        break;
                    default:
                        t += ' value="',
                        t += this.escape(e),
                        t += '"'
                    }
                    t += ' /><input name="redirect_path" type="hidden" value="/downgrade" /><input class="j-button" data-confirm="Are you sure you want to downgrade to free?" data-disable-with="Downgrading..." type="submit" value="Downgrade to Free" /></form></div>'
                } else {
                    switch (this.model.downgradeDate() && (t += '<div class="change-plan-explainer">You will be charged a prorated amount for the remainer of this month for this new plan, and fully charged next on your normal billing date <strong>',
                    t += this.escape(this.model.downgradeDate()),
                    t += "</strong></div>"),
                    t += '<form action="/plans/',
                    t += this.escape(this.model.get("new_plan")),
                    t += "?interval=",
                    t += this.escape(this.model.newInterval()),
                    t += '" class="tac mt-30" method="post"><input name="_method" type="hidden" value="put" /><input name="authenticity_token" type="hidden"',
                    r = this.csrf) {
                    case !0:
                        t += ' value="value"';
                        break;
                    case !1:
                    case null:
                        break;
                    default:
                        t += ' value="',
                        t += this.escape(r),
                        t += '"'
                    }
                    switch (t += ' /><input class="j-button" data-disable-with="Loading..." type="submit"',
                    i = this.model.get("plan_button_label_for_price_table")) {
                    case !0:
                        t += ' value="value"';
                        break;
                    case !1:
                    case null:
                        break;
                    default:
                        t += ' value="',
                        t += this.escape(i),
                        t += '"'
                    }
                    t += " /></form>"
                }
                return t += "</div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST.please_wait = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="mt-15 tc-gray fourteen please-wait"><h3 class="strong">Please be patient.</h3><p>It can take up to 30 seconds to import all the posts.</p><p>Taking forever? <a class="tc-gray bold" href="/contact">Contact us</a></p></div>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST.post_edit = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e;
                if (t = "",
                t += '<div class="p-50"><h2 class="tac fs-2 tc-orange mb-30">Edit Post</h2>',
                t += Juicer.Helpers.renderPartial("poster", {
                    post: this.post
                }),
                t += '<div class="message-container">',
                t += Juicer.Helpers.renderPartial("message", {
                    post: this.post
                }),
                t += "</div>",
                this.feed.get("moderation_allowed?")) {
                    if (t += '<form><textarea class="bordered my-25" placeholder="Add text or links to the post">',
                    t += this.escape(this.post.get("edit")),
                    t += "</textarea>",
                    this.post.linkedin()) {
                        switch (t += '<div>By changing import date you can change LinkedIn post position in the feed.</div><input class="datetime-external-created-at my-25 center" name="external_created_at" type="datetime-local"',
                        e = this.post.get("formatted_external_created_at")) {
                        case !0:
                            t += ' value="value"';
                            break;
                        case !1:
                        case null:
                            break;
                        default:
                            t += ' value="',
                            t += this.escape(e),
                            t += '"'
                        }
                        t += " />"
                    }
                    t += '<div class="tac"><input class="j-button" type="submit" value="Update Post" /></div></form>'
                } else
                    t += '<h3>Only paid plans can edit posts. <a href="/plans?mpevent=moderation_edit_post">Upgrade your plan.</a></h3>';
                return t += "</div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST.post_overlay = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r;
                return t = "",
                e = "YouTube" !== this.post.sourceType() ? "is-not-youTube" : "",
                r = "YouTube" === this.post.sourceType() ? "is-youTube" : "",
                t += '<div class="j-post-overlay juicer-feed loaded ',
                t += this.escape(r),
                t += " ",
                t += this.escape(this.post.gallery() ? "j-gallery" : void 0),
                t += '" data-id="',
                t += this.escape(this.post.get("id")),
                t += '">',
                this.post.isVideo() ? t += Juicer.Helpers.renderPartial("video/" + this.post.lowerType() + "_embed", {
                    id: this.post.get("external_id"),
                    video: this.post.get("video"),
                    overlay: !0,
                    post: this.post
                }) : (t += '<div class="image">',
                t += Juicer.Helpers.renderPartial("content", {
                    post: this.post,
                    feed: this.feed,
                    overlay: !0
                }),
                t += "</div>"),
                t += '<div class="j-overlay-text ',
                t += this.escape(this.post.postType()),
                t += " ",
                t += this.escape(e),
                t += '">',
                t += Juicer.Helpers.renderPartial("poster", {
                    post: this.post,
                    lazyLoad: !1
                }),
                this.post.get("unformatted_message") && (t += '<div class="j-message" tabindex="0">',
                t += this.post.fullMessage(),
                t += "</div>"),
                t += Juicer.Helpers.renderPartial("edit", {
                    post: this.post
                }),
                t += Juicer.Helpers.renderPartial("meta", {
                    post: this.post
                }),
                t += '<div class="j-bottom">',
                t += Juicer.Helpers.renderPartial("link", {
                    url: this.post.link(),
                    label: "View on " + this.post.sourceType(),
                    class: "juicer-button " + ("YouTube" === this.post.sourceType() ? "" : "j-" + this.post.lowerType()),
                    aria: this.post.lowerType()
                }),
                t += "</div>",
                window.juicerDashboard && "Instagram" === this.post.sourceType() && "stories" === this.post.termType() && (t += '<div class="jcr-mt-5"><h3 class="jcr-text-normal"><i class="ri-bar-chart-fill jcr-mr-2 jcr-border-2 jcr-border-solid jcr-rounded-full jcr-p-1"></i>Story insights <div class="jcr-mt-3" hx-get="/posts/',
                t += this.escape(this.post.get("id")),
                t += '/story_insights" hx-trigger="load"><i class="ri-loader-2-line jcr-animate-spin jcr-inline-block jcr-w-fit jcr-h-fit"></i>Loading </div></h3></div>'),
                t += '<div class="j-navigate"><button aria-label="Previous Post" class="j-previous" data-post-id="',
                t += this.escape(this.previous.get("id")),
                t += '"><span>Previous</span></button>',
                this.next && (t += '<button aria-label="Next Post" class="j-next" data-post-id="',
                t += this.escape(this.next.get("id")),
                t += '"><span>Next</span></button>'),
                t += "</div></div></div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST.sidebar = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r;
                return t = "",
                e = this.feed.get("manual_source_limit"),
                t += '<div class="relative add-source-container" x-data="{ tooltip: &#39;&#39;, disabledMessage: &#39;Your account owner set a limit of maximum ',
                t += this.escape(e),
                t += " feed",
                t += this.escape(e > 1 ? "s" : ""),
                t += '. Please ask them to adjust the limit.&#39; }" x-on:disable-add-source-button="tooltip = disabledMessage" x-on:enable-add-source-button="tooltip = &#39;&#39;">',
                this.feed.manualSourceLimitReached() ? (t += '<div class="px-15 jcr-my-[32px] add-source-sidebar-container" x-init="$dispatch(&#39;disable-add-source-button&#39;)"><a class="jcr-btn-outline jcr-w-full jcr-flex jcr-justify-center jcr-items-center jcr-font-normal jcr-py-[16px] jcr-text-[16px] disabled" x-bind:class="{&#39;jcr-btn-secondary jcr-bg-primary&#39;: ',
                t += this.escape(this.feed.get("installed?")),
                t += ", &#39;jcr-btn-outline&#39;: !",
                t += this.escape(this.feed.get("installed?")),
                t += '}" x-tooltip="tooltip">+ Add New Source </a></div>') : (t += '<div class="px-15 jcr-mt-[32px] jcr-mb-[18px] add-source-sidebar-container" x-init="$dispatch(&#39;enable-add-source-button&#39;)"><a class="jcr-flex jcr-w-full jcr-justify-center jcr-items-center jcr-font-normal jcr-py-[16px] jcr-text-[16px]" x-bind:class="{&#39;jcr-btn-secondary jcr-bg-primary&#39;: ',
                t += this.escape(this.feed.get("installed?")),
                t += ", &#39;jcr-btn-outline&#39;: !",
                t += this.escape(this.feed.get("installed?")),
                t += '}" x-tooltip="tooltip">+ Add New Source </a></div>'),
                t += '<ul class="sidebar-menu jcr-relative jcr-bg-white" style="border-top: 1px solid #e6e0d8;">',
                window.juicerDashboard.hasExpiredSocialAccounts,
                r = window.juicerDashboard.sourceIdsWhereUserActionRequired.length > 0,
                window.juicerDashboard.showEmbedTour,
                window.juicerDashboard.showEmbedLayoutTour,
                window.juicerDashboard.hideConnectionsWarningPopover,
                window.juicerDashboard.hideEmbedInfoPopover,
                window.juicerDashboard.hideEmbedLayoutPopover,
                t += '<li class="menu-item menu-icon feed-icon ',
                t += this.escape(r ? "menu-item-with-icon" : void 0),
                t += '" id="sources"><div class="d-flex align-items-center justify-content-between">Social Media Sources',
                r && (t += '<a class="js-warning" href="/feeds/',
                t += this.escape(this.feed.get("slug")),
                t += '/inspect">',
                t += window.juicerDashboard.warningSvg,
                t += "</a>"),
                t += "</div>",
                r && (t += '<a class="sidebar-popover" data-skip_opening_sub_view="true" href="/feeds/',
                t += this.escape(this.feed.get("slug")),
                t += '/inspect " id="UserActionRequiredPopover"><div class="sidebar-popover-content">We cannot import posts for one of your sources, we need your help to fix this.<div class="popover-buttons"><div class="popover-button j-button cta">Fix Now!</div></div></div></a>'),
                t += '</li><li class="menu-item menu-icon design-icon" id="design">Feed Design</li><li class="menu-item menu-icon feed-settings-icon" id="settings">Feed Settings</li>',
                window.juicerDashboard && (t += '<li class="menu-item menu-icon cta-icon jcr-flex jcr-items-center" id="cta">CTA Settings<img class="jcr-h-[14px] jcr-px-1.5 jcr-ml-1.5" src="/standalone-sprites/premium-crown.svg" /></li>'),
                t += '<li class="menu-item menu-icon moderate-icon icon-menu-item" data-icon-label="',
                t += this.escape(this.feed.moderationStatus()),
                t += '" id="moderate">Moderate and Filter</li><li class="menu-item menu-icon share-icon slide-menu-item" id="hub">Share your Feed</li><li class="menu-item menu-icon sync-icon slide-menu-item jcr-group jcr-h-[55px] hover:jcr-h-[70px] jcr-transition-height jcr-duration-300" id="synced">',
                this.feed.get("view_limit_reached") ? (t += '\u26a0\ufe0f Next feed refresh on <div class="twelve">',
                t += this.escape(Juicer.Helpers.fullDate(this.feed.get("view_limit_reset_date"), "%b/%-d/%y at %-l:%M%p")),
                t += ".</div>") : (t += 'Last Sync <div class="twelve jcr-opacity-0 group-hover:jcr-opacity-100 jcr-transition-opacity jcr-duration-300">',
                t += this.escape(Juicer.Helpers.fullDate(this.feed.get("last_synced"), "%b/%-d/%y at %-l:%M%p")),
                t += "</div>"),
                t += "</li></ul></div>",
                "undefined" != typeof white_labeled && null !== white_labeled || "enterprise" === this.feed.get("plan") || (t += '<div class="jcr-sticky jcr-w-[250px] jcr-bg-white" id="sidebar-footer" style="top: calc(100vh - 187px);">',
                t += Juicer.Helpers.renderPartial("sidebar_footer", {
                    feed: this.feed,
                    model: this.model
                }),
                t += "</div>"),
                t
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST.source_form = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r;
                return t = "",
                r = {
                    source: this.source,
                    csrf: this.csrf,
                    feed: this.feed,
                    type: this.type,
                    socialAccounts: this.socialAccounts,
                    results: this.results,
                    isLoading: this.isLoading
                },
                t += '<div class="tac">',
                this.feed && (this.plan && this.plan.get("feed_limit_exceeded?") || !this.feed.get("more_sources_allowed?")) ? (t += '<div class="p-50"><h2 class="fs-2">Upgrade to add more sources</h2>',
                this.plan.get("feed_limit_exceeded?") ? (e = 1 === this.plan.get("max_feeds") ? "1 feed" : this.plan.get("max_feeds") + " feeds",
                t += "<h3>Unfortunately, the ",
                t += this.escape(this.feed.get("plan")),
                t += " plan only allows ",
                t += this.escape(e),
                t += ' and you have exceeded this limit.</h3><h3 class="mb-25">Please upgrade your plan or delete the excessive feeds to add more sources.</h3>') : (t += '<h3 class="mb-25">Unfortunately, the ',
                t += this.escape(this.feed.get("plan")),
                t += " plan only allows ",
                t += this.escape(this.feed.get("max_sources")),
                t += " sources per feed.</h3>"),
                window.juicerWL || (t += Juicer.Helpers.renderPartial("upgrade_plan", {
                    feed: this.feed,
                    mpevent: "source_form_upgrade_plan"
                })),
                t += "</div>") : t += Juicer.Helpers.renderPartial("source_form/new", r),
                t += "</div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["sources/manual"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<form accept-charset="UTF-8" class="tac p-50" id="manual_post" method="post"><h2 class="fs-2 mb-30">Add a Post Manually to ',
                t += this.escape(this.source.displayName()),
                t += "</h2>",
                this.feed.notSmall() || this.feed.isTrial() ? (t += '<input name="source_id" type="hidden" value="',
                t += this.escape(this.source.get("id")),
                t += '" /><input autocomplete="off" class="source-overlay-field" id="link" name="link" placeholder="ex: ',
                t += this.escape(this.source.manualPostExamples[this.source.source()] || "https://facebook.com/..."),
                t += '" required="true" type="text" />',
                "LinkedIn" === this.source.source() && (t += '<p class="mb-20">To receive the URL to your post click on the 3 dots menu in the top right of the post on LinkedIn and then "Copy link to post"</p>'),
                t += '<input class="j-button" name="commit" type="submit" value="Add Post" /><div class="j-loading-wrapper mt-20"></div>') : (t += '<h3 style="margin-bottom:1.5rem">Unfortunately, the ',
                t += this.escape(this.feed.get("plan")),
                t += " plan doesn't allow you to manually enter posts. Please upgrade!</h3>",
                t += Juicer.Helpers.renderPartial("upgrade_plan", {
                    feed: this.feed,
                    mpevent: "moderation_manual_add_upgrade"
                })),
                t += "</form>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["sources/moderation"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t, e, r;
                return t = "",
                t += '<form accept-charset="UTF-8" class="tac p-50 source-update" method="post"><input name="id" type="hidden" value="',
                t += this.escape(this.source.get("id")),
                t += '" /><h2 class="fs-2 mb-30">Set Moderation Filters for ',
                t += this.escape(this.source.displayName()),
                t += '</h2><h3 class="fifteen tc-dark-gray mb-15">These work the same way as the moderation and filtering for your whole feed, but just apply to this one sources posts. Read more about it <a class="tc-dark-gray bold" href="/blog/walkthrough-moderating-and-filtering-your-social-posts-in-juicer">here</a>. </h3>',
                r = "list words, @usernames, or #hastags",
                e = "Separate filters with a comma. Filters are case-insensitive.",
                t += '<h3 class="settings-label">Disallow posts with these words:</h3><textarea class="moderation-filter source-overlay-textarea thirteen mb-10 bc-gray" name="disallowed" placeholder="',
                t += this.escape(r),
                t += " to block. ",
                t += this.escape(e),
                t += '">',
                t += this.source.disallowed(),
                t += '</textarea><h3 class="settings-label">Only allow posts with these words:</h3><textarea class="moderation-filter source-overlay-textarea thirteen mb-20" name="allowed" placeholder="',
                t += this.escape(r),
                t += " to allow. ",
                t += this.escape(e),
                t += '">',
                t += this.source.allowed(),
                t += '</textarea><div class="mb-15"><input name="queue" type="hidden" value="0" />',
                this.source.get("queue") ? t += '<input checked="true" id="queue" name="queue" type="checkbox" />' : t += '<input id="queue" name="queue" type="checkbox" />',
                t += '<label for="queue">Send all posts to moderation queue</label></div><input class="j-button" name="commit" type="submit" value="Save Moderation Settings" /></form>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["sources/rename"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<form accept-charset="UTF-8" class="tac p-50 source-update" method="post"><h2 class="fs-2 mb-30">Edit ',
                t += this.escape(this.source.displayName()),
                t += '\'s filter button</h2><p class="mb-30">This will <strong>not</strong> show different posts but only change the label of the filter button above your feed. To display different posts through a new source, delete this source, and add a new one with your new hashtag or social account. </p><input name="id" type="hidden" value="',
                t += this.escape(this.source.get("id")),
                t += '" /><input autocomplete="off" class="source-overlay-field" name="name" placeholder="How you want the name of your source to display on Juicer." type="text" value="',
                t += this.escape(this.source.displayTerm()),
                t += '" /><input class="j-button" name="commit" type="submit" value="Save" /></form>'
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST["sources/source_unavailable_for_small_plan"] = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="tac"><div class="p-50"><h2 class="fs-2">Upgrade to add ',
                t += this.escape(this.source),
                t += '</h2><h3 class="mb-25">The Free plan doesn\'t allow adding ',
                t += this.escape(this.source),
                t += " sources after the end of the trial period. </h3>",
                t += Juicer.Helpers.renderPartial("upgrade_plan", {
                    mpevent: "source_form_unavailable_provider"
                }),
                t += "</div></div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    this.JST || (this.JST = {}),
    this.JST.widget = function() {
        return this.Skim = {
            access: function(t) {
                var e;
                return "function" == typeof (e = this[t]) && (e = e.call(this)),
                !0 === e ? [this] : !1 !== e && null != e && ("[object Array]" !== Object.prototype.toString.call(e) ? [e] : 0 !== e.length && e)
            },
            withContext: function(t, e) {
                var r;
                return (t = function(t) {
                    var e;
                    return (e = function() {}
                    ).prototype = t,
                    new e
                }(t)).safe || (t.safe = this.safe || function(t) {
                    var e;
                    return (null != t ? t.skimSafe : void 0) ? t : ((e = new String(null != t ? t : "")).skimSafe = !0,
                    e)
                }
                ),
                t.isArray = Array.isArray || function(t) {
                    return "[object Array]" === {}.toString.call(t)
                }
                ,
                t.flatten = r = function(t) {
                    var e, i, n, s;
                    for (i = [],
                    n = 0,
                    s = t.length; n < s; n++)
                        (e = t[n])instanceof Array ? i = i.concat(r(e)) : i.push(e);
                    return i
                }
                ,
                t.escape || (t.escape = this.escape || function(t) {
                    return null == t ? "" : t.skimSafe || !/[&<>\"]/.test(t) ? t : this.safe(("" + t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"))
                }
                ),
                e.call(t)
            }
        },
        function(t) {
            return null == t && (t = {}),
            Skim.withContext.call({}, t, (function() {
                var t;
                return t = "",
                t += '<div class="flip-container"><div class="flipper">',
                "v2" === this.model.get("embed_layout") ? (t += '<ul class="front">',
                t += Juicer.Helpers.renderPartial("widget_card", {
                    post: this.first,
                    isOnFeedsDashboard: this.isOnFeedsDashboard
                }),
                t += '</ul><ul class="back">',
                t += Juicer.Helpers.renderPartial("widget_card", {
                    post: this.second,
                    isOnFeedsDashboard: this.isOnFeedsDashboard
                }),
                t += "</ul>") : (t += '<div class="front">',
                t += Juicer.Helpers.renderPartial("widget_card", {
                    post: this.first,
                    isOnFeedsDashboard: this.isOnFeedsDashboard
                }),
                t += '</div><div class="back">',
                t += Juicer.Helpers.renderPartial("widget_card", {
                    post: this.second,
                    isOnFeedsDashboard: this.isOnFeedsDashboard
                }),
                t += "</div>"),
                t += "</div></div>"
            }
            ))
        }
    }
    .call(this)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Models.AdReport = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.urlRoot = function() {
            return Juicer.Constants.API_ROOT + "/api/ad_reports"
        }
        ,
        r.prototype.save = function(t, e) {
            return (e = null != e ? _u.clone(e) : {}).xhrFields || (e.xhrFields = {}),
            e.xhrFields.withCredentials = !1,
            r.__super__.save.call(this, t, e)
        }
        ,
        r
    }(JuicerBackbone.Model)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Models.Assignment = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.urlRoot = "/api/assignments",
        r
    }(JuicerBackbone.Model)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Models.Click = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.urlRoot = function() {
            return Juicer.Constants.API_ROOT + "/api/clicks"
        }
        ,
        r.prototype.save = function(t, e) {
            return (e = null != e ? _u.clone(e) : {}).xhrFields || (e.xhrFields = {}),
            e.xhrFields.withCredentials = !1,
            r.__super__.save.call(this, t, e)
        }
        ,
        r
    }(JuicerBackbone.Model)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Models.Enterprise = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.idAttribute = "slug",
        r.prototype.urlRoot = "/api/enterprise",
        r.prototype.page = 1,
        r.prototype.fetch = function(t) {
            return (t = null != t ? _u.clone(t) : {}).data = null != t.data ? _u.extend(t.data, this.data()) : this.data(),
            r.__super__.fetch.call(this, t)
        }
        ,
        r.prototype.parse = function(t, e) {
            var i, n;
            return t.current_page > 1 && t.feeds.length > 0 && (i = _u.map(this.get("feeds").models, (function(t) {
                return t.attributes
            }
            )),
            n = t.feeds,
            t.feeds = i.concat(n),
            t.new_feeds = n),
            r.__super__.parse.call(this, t, e)
        }
        ,
        r.prototype.data = function() {
            var t;
            return t = {
                page: this.page
            },
            this.query && (t.query = this.query),
            t
        }
        ,
        r.prototype.nextPage = function() {
            return this.page += 1
        }
        ,
        r.prototype.resetPage = function() {
            return this.page = 1
        }
        ,
        r.prototype.moreFeeds = function() {
            return this.get("current_page") < this.get("total_pages")
        }
        ,
        r.prototype.relations = [{
            type: JuicerBackbone.Many,
            key: "feeds",
            relatedModel: "Juicer.Models.Feed"
        }, {
            type: JuicerBackbone.Many,
            key: "new_feeds",
            relatedModel: "Juicer.Models.Feed"
        }, {
            type: JuicerBackbone.Many,
            key: "users",
            relatedModel: "Juicer.Models.User"
        }],
        r
    }(JuicerBackbone.AssociatedModel)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Models.EnterpriseUsers = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.idAttribute = "slug",
        r.prototype.url = function() {
            return "/api/enterprise/" + this.get("slug") + "/users"
        }
        ,
        r.prototype.relations = [{
            type: JuicerBackbone.Many,
            key: "admins",
            relatedModel: "Juicer.Models.User"
        }, {
            type: JuicerBackbone.Many,
            key: "users",
            relatedModel: "Juicer.Models.User"
        }],
        r
    }(JuicerBackbone.AssociatedModel)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Models.Estimate = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.defaults = {
            sources: 5,
            frequency: 3
        },
        r.prototype.frequencyInWords = function() {
            return this.frequencyMap[this.get("frequency")]
        }
        ,
        r.prototype.frequencyMap = {
            1: "1 Day",
            2: "4 Hours",
            3: "1 Hour",
            4: "30 Minutes",
            5: "10 Minutes",
            6: "5 Minutes",
            7: "1 Minute"
        },
        r.prototype.frequencyMultiplier = {
            1: 4,
            2: 6,
            3: 8,
            4: 14,
            5: 20,
            6: 40,
            7: 200
        },
        r.prototype.price = function() {
            return this.get("sources") * this.frequencyCalculated()
        }
        ,
        r.prototype.frequencyCalculated = function() {
            return this.frequencyMultiplier[this.get("frequency")]
        }
        ,
        r.prototype.priceString = function() {
            return this.maxSources() ? "$" + this.frequencyCalculated() : "$" + this.price()
        }
        ,
        r.prototype.priceLabel = function() {
            return this.maxSources() ? "<strong>per Source</strong> per month<br>(with a minimum fee of US$" + Juicer.Constants.MINIMUM_ENTERPRISE_FEE_IN_DOLLARS + "/mo)" : "per month<br>(with a minimum fee of US$" + Juicer.Constants.MINIMUM_ENTERPRISE_FEE_IN_DOLLARS + "/mo)"
        }
        ,
        r.prototype.sources = function() {
            return this.maxSources() ? "20+" : this.get("sources")
        }
        ,
        r.prototype.maxSources = function() {
            return this.get("sources") > 20
        }
        ,
        r
    }(JuicerBackbone.Model)
}
.call(this),
function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
      , e = function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var n in e)
            r.call(e, n) && (t[n] = e[n]);
        return i.prototype = e.prototype,
        t.prototype = new i,
        t.__super__ = e.prototype,
        t
    }
      , r = {}.hasOwnProperty;
    Juicer.Models.Feed = function(r) {
        function i() {
            return this.fetchNewPosts = t(this.fetchNewPosts, this),
            this.poll = t(this.poll, this),
            this.startPolling = t(this.startPolling, this),
            i.__super__.constructor.apply(this, arguments)
        }
        return e(i, r),
        i.prototype.idAttribute = "slug",
        i.prototype.urlRoot = function() {
            return Juicer.Constants.API_ROOT + "/api/feeds"
        }
        ,
        i.prototype.parse = function(t, e) {
            return null != this.get("css") && delete t.css,
            i.__super__.parse.call(this, t, e)
        }
        ,
        i.prototype.sync = function(t, e, r) {
            var n;
            return n = r.url,
            "read" !== t && (r.url = "/api/feeds/" + this.get("id")),
            n && (n.match("fetch_all") || n.match("bulk_moderate")) && (r.url = n),
            r.headers = {
                "X-Juicer-Referrer": window.location.href
            },
            i.__super__.sync.call(this, t, e, r)
        }
        ,
        i.prototype.defaults = {
            slug: "error"
        },
        i.prototype.manualSourceLimitReached = function() {
            return !!this.get("manual_source_limit") && !this.get("more_sources_allowed?")
        }
        ,
        i.prototype.allowed = function() {
            return null != this.get("allowed") ? this.get("allowed") : ""
        }
        ,
        i.prototype.disallowed = function() {
            return null != this.get("disallowed") ? this.get("disallowed") : ""
        }
        ,
        i.prototype.moderation = function() {
            return !!(this.get("allowed") || this.get("disallowed") || this.get("profanity") || this.get("queue") || this.get("prevent_duplicates"))
        }
        ,
        i.prototype.entertainment = function() {
            return "entertainment" === this.get("css")
        }
        ,
        i.prototype.autoScroll = function() {
            return "autoscroll" === this.get("css")
        }
        ,
        i.prototype.widget = function() {
            return "widget" === this.get("css")
        }
        ,
        i.prototype.slider = function() {
            return "slider" === this.get("css")
        }
        ,
        i.prototype.livingWall = function() {
            return "living-wall" === this.get("css")
        }
        ,
        i.prototype.defaultHeight = function() {
            switch (this.get("css")) {
            case "slider":
                return 300;
            case "widget":
                return 400;
            default:
                return null
            }
        }
        ,
        i.prototype.height = function() {
            return this.get("height") || this.defaultHeight()
        }
        ,
        i.prototype.defaultWidth = function() {
            return this.widget() ? 400 : null
        }
        ,
        i.prototype.numberOfPostsPerOneAd = function() {
            switch (this.get("css")) {
            case "slider":
                return this.get("columns");
            case "widget":
                return 3;
            default:
                return _u.min([10, this.per])
            }
        }
        ,
        i.prototype.initialize = function(t) {
            return null == t && (t = {}),
            this.endingAt = t.endingAt,
            this.filter = t.filter,
            this.isOnFeedsDashboard = t.isOnFeedsDashboard,
            this.page = t.page,
            this.per = t.per,
            this.search = t.search,
            this.startingAt = t.startingAt,
            this.truncate = t.truncate,
            this.origin = t.origin,
            this.per = this.per || 100,
            this.page = this.page || 1,
            this.once("sync", this.startPolling)
        }
        ,
        i.prototype.startPolling = function() {
            if (this.shouldPoll())
                return this.poll()
        }
        ,
        i.prototype.shouldPoll = function() {
            return this.pollingAllowed() && this.isGrid()
        }
        ,
        i.prototype.pollingAllowed = function() {
            return this.notSmall() && !!this.get("poll") && !!this.get("update_frequency")
        }
        ,
        i.prototype.poll = function() {
            return this.pollingStarted = !0,
            this.timeout = setTimeout(this.fetchNewPosts, this.pollInterval())
        }
        ,
        i.prototype.fetchNewPosts = function(t) {
            var e, r;
            return null == t && (t = !0),
            this.polling = !0,
            e = this.get("requested_at"),
            this.fetch({
                success: (r = this,
                function() {
                    if (r.get("requested_at") !== e && r.trigger("new-posts"),
                    r.polling = !1,
                    t)
                        return r.poll()
                }
                )
            })
        }
        ,
        i.prototype.pollInterval = function() {
            var t;
            return t = 60 * this.get("update_frequency") * 1e3 / this.divisor(),
            t = Math.floor(t),
            t = Math.max(t, 15e3)
        }
        ,
        i.prototype.divisor = function() {
            var t;
            return (t = this.get("sources").length) < 2 && (t = 2),
            t > 10 && (t = 10),
            t
        }
        ,
        i.prototype.fetch = function(t) {
            var e;
            return e = null != (t = null != t ? _u.clone(t) : {}).data ? _u.extend(t.data, this.queryParams()) : this.queryParams(),
            t.data = this.queryParamsToArray(e),
            t.xhrFields || (t.xhrFields = {}),
            t.xhrFields.withCredentials = !1,
            t.beforeSend = function(t) {
                return t.setRequestHeader("Cache-Control", "no-cache")
            }
            ,
            i.__super__.fetch.call(this, t)
        }
        ,
        i.prototype.queryParams = function() {
            var t;
            return t = {},
            this.per && (t = _u.extend(t, {
                per: this.per
            })),
            this.endingAt && (t = _u.extend(t, {
                ending_at: this.endingAt
            })),
            this.filter && (t = _u.extend(t, {
                filter: this.filter
            })),
            this.origin && (t = _u.extend(t, {
                origin: this.origin
            })),
            this.isOnFeedsDashboard && (t = _u.extend(t, {
                is_on_feeds_dashboard: !0
            })),
            this.page && !this.polling && (t = _u.extend(t, {
                page: this.page
            })),
            this.search && (t = _u.extend(t, {
                search: this.search
            })),
            this.startingAt && (t = _u.extend(t, {
                starting_at: this.startingAt
            })),
            this.truncate && (t = _u.extend(t, {
                truncate: this.truncate
            })),
            this.pollingStarted && (t = _u.extend(t, {
                poll_request: this.pollingStarted
            })),
            t
        }
        ,
        i.prototype.queryParamsToArray = function(t) {
            return Object.keys(t).reduce((function(e, r) {
                return e.concat({
                    name: r,
                    value: t[r]
                })
            }
            ), []).sort((function(t, e) {
                return t.name > e.name
            }
            ))
        }
        ,
        i.prototype.nextPage = function() {
            return this.page += 1,
            this
        }
        ,
        i.prototype.previousPage = function() {
            return this.page -= 1,
            this
        }
        ,
        i.prototype.resetPage = function() {
            return this.page = 1,
            this
        }
        ,
        i.prototype.nextSync = function() {
            var t;
            switch (t = new Date(this.get("last_synced")),
            this.get("plan")) {
            case "medium":
                t.setHours(t.getHours() + 1);
                break;
            case "large":
                t.setMinutes(t.getMinutes() + 10);
                break;
            case "custom":
            case "enterprise":
                t.setMinutes(t.getMinutes() + this.get("update_frequency"));
                break;
            default:
                t.setDate(t.getDate() + 1)
            }
            return t
        }
        ,
        i.prototype.paid = function() {
            return _u.contains(Juicer.Constants.PAID_PLANS, this.get("plan"))
        }
        ,
        i.prototype.notSmall = function() {
            return "small" !== this.get("plan")
        }
        ,
        i.prototype.onSmallPlan = function() {
            return "small" === this.get("plan")
        }
        ,
        i.prototype.isTrial = function() {
            return this.get("trial?")
        }
        ,
        i.prototype.cssClass = function() {
            var t;
            return "widget" === (t = this.get("css") || "image-grid") && (t = "juicer-widget"),
            "autoscroll" === t && (t = "modern"),
            this.get("colored_icons") && "classic" !== this.get("css") && (t += " colored-icons"),
            this.hoverImages() && (t += " hover-images"),
            t
        }
        ,
        i.prototype.isGrid = function() {
            return !_u.contains(["classic", "dark", "slider", "widget", "living-wall"], this.get("css"))
        }
        ,
        i.prototype.classic = function() {
            return "classic" === this.get("css")
        }
        ,
        i.prototype.hasInterval = function() {
            return _u.contains(["widget", "slider", "living-wall"], this.get("css"))
        }
        ,
        i.prototype.hasColumns = function() {
            return !_u.contains(["widget", "classic"], this.get("css"))
        }
        ,
        i.prototype.hoverImages = function() {
            return _u.contains(["image-grid", "slider", "hip", "night"], this.get("css"))
        }
        ,
        i.prototype.hasHeight = function() {
            return this.get("height")
        }
        ,
        i.prototype.termsByType = function(t) {
            var e;
            return e = this.get("sources").where({
                source: t
            }),
            _u.map(e, (function(t) {
                return t.get("term")
            }
            ))
        }
        ,
        i.prototype.fetchAll = function() {
            var t;
            return t = {
                url: this.url() + "/fetch_all",
                type: "POST"
            },
            (this.sync || JuicerBackbone.sync).call(this, null, this, t)
        }
        ,
        i.prototype.bulkModerate = function(t, e) {
            var r, i, n;
            return null == t && (t = !0),
            null == e && (e = null),
            n = "/api/feeds/" + this.get("slug") + "/bulk_moderate",
            r = {},
            t && (r.approve = !0),
            null != e && (r.filter = e),
            i = {
                url: n,
                type: "POST",
                data: $.param(r)
            },
            (this.sync || JuicerBackbone.sync).call(this, null, this, i)
        }
        ,
        i.prototype.partial = function() {
            switch (this.get("css") || this.get("style")) {
            case "modern":
            case "autoscroll":
            case "user":
                return "user";
            case "slider":
            case "image-grid":
            case "hip":
                return "image";
            case "classic":
                return "classic";
            case "living-wall":
                return "wall";
            case "polaroid":
                return "polaroid";
            case "night":
                return "night";
            default:
                return "standard"
            }
        }
        ,
        i.prototype.displayFilters = function() {
            return _u.contains(this.validFilters, this.get("display_filter")) && !this.hasInterval() && this.get("sources").length > 1
        }
        ,
        i.prototype.validFilters = ["Social Type", "Social Account", "Grouped Terms"],
        i.prototype.filterPartial = function() {
            var t, e;
            e = void 0;
            try {
                e = new URLSearchParams(window.location.search).get("display_filter_type")
            } catch (r) {
                t = r,
                console.error(t),
                e = null
            }
            return e || (this.get("display_filter_type") ? "new" : "old")
        }
        ,
        i.prototype.filters = function() {
            var t;
            return (t = (t = function() {
                switch (this.get("display_filter")) {
                case "Social Type":
                    return this.accountTypes();
                case "Social Account":
                    return this.get("sources").models;
                case "Grouped Terms":
                    return this.uniqSources()
                }
            }
            .call(this)).slice(0)).unshift(this.allSource()),
            t
        }
        ,
        i.prototype.allSource = function() {
            return new Juicer.Models.Source({
                source: "All"
            })
        }
        ,
        i.prototype.accountTypes = function() {
            var t, e;
            return t = [],
            e = [],
            _u.each(this.get("sources").models, (function(r) {
                if (!_u.contains(e, r.source()))
                    return t.push(r),
                    e.push(r.source())
            }
            )),
            t
        }
        ,
        i.prototype.uniqSources = function() {
            var t, e;
            return t = [],
            e = [],
            _u.map(this.get("sources").models, (function(r) {
                if (!_u.contains(e, r.displayName()))
                    return t.push(r),
                    e.push(r.displayName())
            }
            )),
            t
        }
        ,
        i.prototype.moderationStatus = function() {
            return this.moderation() ? "ON" : "OFF"
        }
        ,
        i.prototype.colors = ["text", "link", "data", "hover", "post_background", "feed_background"],
        i.prototype.customColors = function() {
            return _u.some(this.getColors())
        }
        ,
        i.prototype.getColor = function(t) {
            return this.getCustomColor(t) || this.getDefaultColor(t)
        }
        ,
        i.prototype.getCustomColor = function(t) {
            return this.getColors()[t + "_color"]
        }
        ,
        i.prototype.getColors = function() {
            return this.get("colors")
        }
        ,
        i.prototype.getDefaultColor = function(t) {
            var e;
            return "cta_button" === t ? "#4AB890" : "cta_text" === t ? "#fff" : "hover" === t ? "#F17E6F" : "feed_background" === t ? "#f9fafb" : (e = this.customColorMap[t],
            (t = jQuery(e.selector).css(e.attribute)) ? Juicer.Helpers.rgb2hex(t) : "#fff")
        }
        ,
        i.prototype.customColorMap = {
            text: {
                label: "Text",
                selector: ".juicer-feed .feed-item .j-message, .juicer-feed .feed-item .j-message p",
                attribute: "color"
            },
            link: {
                label: "Link",
                selector: ".juicer-feed .is-not-youTube a, .is-not-youTube .j-poster h3",
                attribute: "color"
            },
            data: {
                label: "Metadata",
                description: "The color of metadata such as the post creation date, the number of likes, or the number of comments.",
                selector: ".juicer-feed .is-not-youTube .j-meta a, .juicer-feed .is-not-youTube .j-meta a *, .is-not-youTube .j-poster .j-date",
                attribute: "color"
            },
            hover: {
                label: "Hover",
                selector: ".juicer-feed .is-not-youTube a:hover",
                attribute: "color"
            },
            post_background: {
                label: "Post Background",
                selector: ".juicer-feed li.feed-item",
                attribute: "background-color"
            },
            feed_background: {
                label: "Feed Background",
                selector: ".juicer-feed",
                attribute: "background-color"
            },
            cta_button_color: {
                label: "Button Color",
                selector: ".juicer-feed .cta-button",
                attribute: "background-color"
            },
            cta_text_color: {
                label: "Text Color",
                selector: ".juicer-feed .cta-button",
                attribute: "color"
            }
        },
        i.prototype.customStyles = function() {
            var t, e;
            return t = "",
            _u.each(this.colors, (e = this,
            function(r) {
                var i, n;
                if (n = e.customColorMap[r],
                i = e.getCustomColor(r))
                    return t += n.selector + " { " + n.attribute + ": " + i + " !important; }"
            }
            )),
            this.get("custom_css") && (t += this.get("custom_css")),
            t
        }
        ,
        i.prototype.updateColor = function(t, e) {
            var r, i, n;
            if ((r = this.getColors())[i = t + "_color"] = e,
            this.set("colors", r),
            this.set(i, e),
            this.trigger("update:colors"),
            t.match(/cta_/))
                return n = this.customColorMap[t + "_color"],
                $(n.selector).css(n.attribute, e)
        }
        ,
        i.prototype.resetColors = function() {
            return _u.each(this.colors, (t = this,
            function(e) {
                return t.set(e + "_color", null)
            }
            ));
            var t
        }
        ,
        i.prototype.shouldShowGallery = function() {
            var t;
            return t = this.get("css") || this.get("style"),
            _u.contains(["modern", "polaroid", "image-grid", "hip", "night"], t)
        }
        ,
        i.prototype.relations = [{
            type: JuicerBackbone.Many,
            key: "posts",
            collectionType: "Juicer.Collections.Posts"
        }, {
            type: JuicerBackbone.Many,
            key: "sources",
            relatedModel: "Juicer.Models.Source"
        }, {
            type: JuicerBackbone.Many,
            key: "assignments",
            relatedModel: "Juicer.Models.Assignment"
        }, {
            type: JuicerBackbone.Many,
            key: "social_accounts",
            collectionType: "Juicer.Collections.SocialAccounts"
        }],
        i
    }(JuicerBackbone.AssociatedModel)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Models.JuicerAd = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.defaults = function() {
            return {
                poster_name: "Juicer",
                poster_image: Juicer.Constants.BASE_URL + "/logo-without-text.svg",
                external_created_at: new Date
            }
        }
        ,
        r.prototype.ad = !0,
        r.prototype.toJSON = function() {
            return _u.clone(_u.omit(this.attributes, "feed"))
        }
        ,
        r.prototype.twitter = function() {
            return !1
        }
        ,
        r.prototype.hashtag = function() {
            return !1
        }
        ,
        r.prototype.instagram = function() {
            return !1
        }
        ,
        r.prototype.gallery = function() {
            return !1
        }
        ,
        r.prototype.poster = function() {
            return !0
        }
        ,
        r.prototype.stickied = function() {
            return !1
        }
        ,
        r.prototype.tumblr = function() {
            return !1
        }
        ,
        r.prototype.tumblrTitle = function() {
            return !1
        }
        ,
        r.prototype.sourceType = function() {
            return "Juicer"
        }
        ,
        r.prototype.postType = function() {
            return "image-post"
        }
        ,
        r.prototype.isVideo = function() {
            return !1
        }
        ,
        r.prototype.edited = function() {
            return !1
        }
        ,
        r.prototype.editClass = function() {
            return ""
        }
        ,
        r.prototype.userId = function() {
            return 1
        }
        ,
        r.prototype.lowerType = function() {
            return "juicer"
        }
        ,
        r.prototype.term = function() {
            return "juicer"
        }
        ,
        r.prototype.link = function() {
            return "https://www.juicer.io/?" + this.utm_params()
        }
        ,
        r.prototype.utm_params = function() {
            return jQuery.param({
                utm_source: "JuicerFreeFeed",
                utm_medium: "feed_ads",
                utm_campaign: "ad" + this.imagePosition(),
                utm_content: "message" + this.messagePosition(),
                utm_term: window.location.href,
                utm_id: this.feed_slug(),
                referrer: window.location.hostname
            })
        }
        ,
        r.prototype.feed_slug = function() {
            return this.get("feed") ? this.get("feed").get("slug") : ""
        }
        ,
        r.prototype.blogPost = function() {
            return !1
        }
        ,
        r.prototype.commentClass = function() {
            return ""
        }
        ,
        r.prototype.likeClass = function() {
            return ""
        }
        ,
        r.prototype.classes = function() {
            return "feed-item juicer image-post juicer-about"
        }
        ,
        r.prototype.alt = function() {
            return "Embed Social Media Feeds on your website with Juicer!"
        }
        ,
        r.prototype.message = function() {
            var t;
            return t = this.messages()[this.messagePosition()],
            window.juicerDashboard && (t += this.callToAction()),
            t
        }
        ,
        r.prototype.callToAction = function() {
            return "<div class='juicer-ad-cta jcr-mt-3 jcr-text-[15px] jcr-block jcr-btn-secondary jcr-bg-primary jcr-shadow-card jcr-font-normal jcr-w-full jcr-flex jcr-justify-center jcr-text-white'><div class='jcr-flex jcr-items-center'>Remove Juicer Branding <img src='/standalone-sprites/premium-crown.svg' class='jcr-h-[14px] jcr-ml-2' style='width: auto; margin-bottom: 0;'></div></div>"
        }
        ,
        r.prototype.posterImage = function() {
            return this.get("poster_image")
        }
        ,
        r.prototype.messages = function() {
            return ["Like this feed? Want one of your own? Visit <a href='" + this.link() + "' rel='nofollow'>Juicer.io</a> to get your own free social media feed!", "<a href='" + this.link() + "' rel='nofollow'>Juicer.io</a> lets you easily create and embed social media feeds like this one on to your site for free!", "<a href='" + this.link() + "' rel='nofollow'>Juicer.io</a> lets you easily create and embed social media feeds like this one on to your site for free!", "Engage your users on social media with a <a href='" + this.link() + "' rel='nofollow'>Juicer.io</a> feed on your website or blog for free.", "This feed is Powered by <a href='" + this.link() + "' rel='nofollow'>Juicer.io</a>"]
        }
        ,
        r.prototype.randomImage = function() {
            return "https://static.juicer.io/about/juicer-about-" + this.imagePosition() + ".svg"
        }
        ,
        r.prototype.image = function() {
            return this.randomImage()
        }
        ,
        r.prototype.posterUrl = function() {
            return this.link()
        }
        ,
        r.prototype.imagePosition = function() {
            return this.randomImagePosition ? this.randomImagePosition : (this.randomImagePosition = _u.random(1, 12),
            this.randomImagePosition < 10 ? this.randomImagePosition = "0" + this.randomImagePosition : void 0)
        }
        ,
        r.prototype.messagePosition = function() {
            return this.randomMessagePosition ? this.randomMessagePosition : this.randomMessagePosition = _u.random(1, 4)
        }
        ,
        r.prototype.noMeta = function() {
            return !0
        }
        ,
        r
    }(JuicerBackbone.Model)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Models.Moderated = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.url = function() {
            return "/api/feeds/" + this.slug + "/moderated"
        }
        ,
        r.prototype.initialize = function(t) {
            return this.revalidating = !0,
            this.slug = t.slug,
            this.starting_at = t.starting_at,
            this.once("sync", this.startPolling)
        }
        ,
        r.prototype.moderated = !0,
        r
    }(Juicer.Models.Feed)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Models.PageView = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.urlRoot = function() {
            return Juicer.Constants.API_ROOT + "/api/page_views"
        }
        ,
        r.prototype.save = function(t, e) {
            return (e = null != e ? _u.clone(e) : {}).xhrFields || (e.xhrFields = {}),
            e.xhrFields.withCredentials = !1,
            r.__super__.save.call(this, t, e)
        }
        ,
        r
    }(JuicerBackbone.Model)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Models.Plan = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.urlRoot = "/api/plan",
        r.prototype.downgradeDate = function() {
            var t;
            if (this.get("next_billing_date"))
                return t = new Date(this.get("next_billing_date")),
                strftime("%B %-d, %Y", t)
        }
        ,
        r.prototype.planCapital = function() {
            return this.planToDisplatName(this.get("plan"))
        }
        ,
        r.prototype.newPlanCapital = function() {
            return this.planToDisplatName(this.get("new_plan"))
        }
        ,
        r.prototype.planToDisplatName = function(t) {
            return Juicer.Constants.PLAN_TO_DISPLAY_NAME[t] || this.capitalize(t)
        }
        ,
        r.prototype.newInterval = function() {
            return this.get("new_plan_yearly") ? "year" : "month"
        }
        ,
        r.prototype.capitalize = function(t) {
            return "ad_free" === t ? "Ad-Free" : _u.titleize(t)
        }
        ,
        r
    }(JuicerBackbone.Model)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Models.Post = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.urlRoot = "/api/posts",
        r.prototype.restore = function() {
            return this.callSubUrl("/restore")
        }
        ,
        r.prototype.reject = function() {
            return this.callSubUrl("/reject")
        }
        ,
        r.prototype.stick = function(t) {
            return this.callSubUrl("/stick", t)
        }
        ,
        r.prototype.unstick = function(t) {
            return this.callSubUrl("/unstick", t)
        }
        ,
        r.prototype.hardDeletePost = function(t) {
            var e;
            return e = {
                url: this.url() + "?hard_delete=true",
                type: "DELETE"
            },
            _u.extend(e, t),
            (this.sync || JuicerBackbone.sync).call(this, null, this, e)
        }
        ,
        r.prototype.callSubUrl = function(t, e) {
            var r;
            return null == e && (e = {}),
            r = {
                url: t = this.url() + t,
                type: "POST"
            },
            _u.extend(r, e),
            (this.sync || JuicerBackbone.sync).call(this, null, this, r)
        }
        ,
        r.prototype.stickied = function() {
            return !!this.get("position")
        }
        ,
        r.prototype.ctaAdded = function() {
            return !!this.get("cta_added?")
        }
        ,
        r.prototype.edited = function() {
            return !!this.get("edit")
        }
        ,
        r.prototype.editClass = function() {
            return this.edited() ? "j-edited" : ""
        }
        ,
        r.prototype.stickyClass = function() {
            return this.stickied() ? "j-sticky" : ""
        }
        ,
        r.prototype.classes = function() {
            return "feed-item j-" + this.lowerType() + " j-" + this.lowerType() + "-bg " + this.postType() + " " + this.term() + " " + this.editClass() + " j-" + this.termType() + " " + this.stickyClass() + " " + ("YouTube" !== this.sourceType() ? "is-not-youTube" : "")
        }
        ,
        r.prototype.sourceType = function() {
            return this.get("source").source()
        }
        ,
        r.prototype.blogPost = function() {
            return "Blog" === this.sourceType()
        }
        ,
        r.prototype.linkedin = function() {
            return "LinkedIn" === this.sourceType()
        }
        ,
        r.prototype.tiktok = function() {
            return "TikTok" === this.sourceType()
        }
        ,
        r.prototype.twitter = function() {
            return "Twitter" === this.sourceType()
        }
        ,
        r.prototype.instagram = function() {
            return "Instagram" === this.sourceType()
        }
        ,
        r.prototype.tumblrTitle = function() {
            return "Tumblr" === this.sourceType() && !!this.get("source").get("options") && !!this.get("source").get("options").match("title")
        }
        ,
        r.prototype.gallery = function() {
            return !!this.get("additional_photos") && this.get("additional_photos").length > 0
        }
        ,
        r.prototype.postType = function() {
            return this.isVideo() ? "j-video" : this.gallery() ? "j-gallery" : this.get("image") ? "image-post" : "words"
        }
        ,
        r.prototype.isVideo = function() {
            return _u.contains(["youtube", "vine", "vimeo", "soundcloud"], this.lowerType()) || !!this.get("video")
        }
        ,
        r.prototype.termType = function() {
            return this.get("source").termType()
        }
        ,
        r.prototype.hashtag = function() {
            return "hashtag" === this.termType()
        }
        ,
        r.prototype.term = function() {
            return this.get("source").get("term")
        }
        ,
        r.prototype.userId = function() {
            return this.term()
        }
        ,
        r.prototype.lowerType = function() {
            return this.get("source").lowerSource()
        }
        ,
        r.prototype.likes = function() {
            return this.pluralize(this.get("like_count"), "like")
        }
        ,
        r.prototype.comments = function() {
            return this.pluralize(this.get("comment_count"), "comment")
        }
        ,
        r.prototype.poster = function() {
            return this.get("poster_name") || this.get("poster_image")
        }
        ,
        r.prototype.posterImage = function() {
            return "facebook" === this.lowerType() && "username" !== this.get("source").termType() ? this.facebookPosterImage() : this.get("poster_image")
        }
        ,
        r.prototype.facebookPosterImage = function() {
            var t, e, r, i;
            return this.get("source").fetchedFacebookPosterUrls[this.get("poster_id")] || (this.get("source").fetchedFacebookPosterUrls[this.get("poster_id")] = Juicer.Constants.BASE_URL + "/silhouette-avatar.jpg",
            r = (t = this.get("poster_image")).match("\\?") ? "&" : "?",
            e = t + r + "redirect=false",
            jQuery.getJSON(e, (i = this,
            function(t) {
                var e;
                return e = t.data.url,
                i.get("source").fetchedFacebookPosterUrls[i.get("poster_id")] = e,
                jQuery("[data-poster-id='" + i.get("poster_id") + "']").attr("src", e)
            }
            ))),
            this.get("source").fetchedFacebookPosterUrls[this.get("poster_id")]
        }
        ,
        r.prototype.pluralize = function(t, e) {
            return 1 === t ? t + " " + e : t + " " + _u.pluralize(e)
        }
        ,
        r.prototype.link = function() {
            switch (this.lowerType()) {
            case "facebook":
                return "reviews" === this.termType() ? "https://www.facebook.com/" + this.term() + "/reviews" : "group" === this.termType() || "username" === this.termType() ? "https://www.facebook.com/" + this.term() + "/posts/" + this.get("external_id") : "https://www.facebook.com/" + this.get("poster_id") + "/posts/" + this.get("external_id");
            case "twitter":
            case "x-twitter":
                return "https://twitter.com/" + this.get("poster_name") + "/status/" + this.get("external_id");
            case "instagram":
                return "stories" === this.termType() ? "https://www.instagram.com" + this.get("external_id") + "/" : "https://www.instagram.com/p/" + this.get("external_id") + "/";
            case "youtube":
                return "https://www.youtube.com/watch?v=" + this.get("external_id");
            case "googleplus":
                return this.get("poster_url") + "/posts/" + this.get("external_id");
            case "tumblr":
                return "https://" + this.get("poster_name") + ".tumblr.com/post/" + this.get("external_id");
            case "pinterest":
                return "https://www.pinterest.com/pin/" + this.get("external_id");
            case "vimeo":
                return "https://vimeo.com/" + this.get("external_id");
            case "linkedin":
                return this.get("linkedin_external_id") ? "https://www.linkedin.com/feed/update/urn:li:activity:" + this.get("linkedin_external_id") + "/" : "https://www.linkedin.com/company/" + this.term();
            case "soundcloud":
                return this.get("description");
            case "slack":
                return this.get("poster_url");
            case "spotify":
                return "https://open.spotify.com/track/" + this.get("external_id");
            case "blog":
                return this.blogLink();
            case "giphy":
                return this.get("external");
            case "tiktok":
                return "https://tiktok.com/" + this.get("poster_display_name") + "/video/" + this.get("external_id");
            default:
                return this.get("external_id")
            }
        }
        ,
        r.prototype.blogLink = function() {
            return this.get("external") || this.get("external_id")
        }
        ,
        r.prototype.parseBlogUrl = function() {
            var t;
            if ((t = this.term().match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i)) && t[1])
                return t[1]
        }
        ,
        r.prototype.termLink = function() {
            switch (this.lowerType()) {
            case "twitter":
                return "https://twitter.com/hashtag/" + this.term();
            case "instagram":
                return this.link();
            case "tumblr":
                return "https://tumblr.com/tagged/" + this.term();
            case "vine":
                return "https://vine.co/tags/" + this.term();
            case "facebook":
                return "https://www.facebook.com/hashtag/" + this.term();
            case "youtube":
                return "https://www.youtube.com/results?search_query=%23" + this.term();
            default:
                return this.get("external_id")
            }
        }
        ,
        r.prototype.commentClass = function() {
            switch (this.lowerType()) {
            case "twitter":
                return "retweets";
            case "pinterest":
                return "repins";
            default:
                return "comments"
            }
        }
        ,
        r.prototype.likeClass = function() {
            switch (this.lowerType()) {
            case "twitter":
            case "instagram":
            case "tumblr":
                return "heart";
            case "youtube":
                return "views";
            default:
                return "likes"
            }
        }
        ,
        r.prototype.likeVerb = function() {
            return "twitter" === this.lowerType() ? "favorites" : "likes"
        }
        ,
        r.prototype.alt = function() {
            return this.get("image_alt_text") ? this.get("image_alt_text") : "Photo from " + this.get("source").displayName() + " on " + this.sourceType() + " on " + this.get("poster_name") + " at " + this.postedDate()
        }
        ,
        r.prototype.postedDate = function() {
            return Juicer.Helpers.fullDate(this.get("external_created_at"))
        }
        ,
        r.prototype.noMeta = function() {
            var t, e;
            return e = _u.includes(["Blog", "YouTube"], this.sourceType()),
            t = this.get("comment_count") <= 0 && this.get("like_count") <= 0,
            e || t
        }
        ,
        r.prototype.encodedImage = function() {
            return encodeURIComponent(this.get("image"))
        }
        ,
        r.prototype.image = function() {
            return this.get("image")
        }
        ,
        r.prototype.message = function() {
            return this.blogPost() || this.tumblrTitle() ? "<strong class='j-title'>" + this.get("message") + "</strong> " + this.get("excerpt") : this.get("excerpt") ? this.get("excerpt") : this.get("message")
        }
        ,
        r.prototype.fullMessage = function() {
            return this.blogPost() || this.tumblrTitle() ? "<strong class='j-title'>" + this.get("message") + "</strong> " + this.get("description") : this.get("message")
        }
        ,
        r.prototype.stripped = function() {
            return null != this.get("unformatted_message") ? this.get("unformatted_message").replace(/<(?:.|\n)*?>/gm, " ").replace(this.emojiRegex, "") : ""
        }
        ,
        r.prototype.emojiRegex = /([\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDD5D])/g,
        r.prototype.status = function() {
            return encodeURIComponent(this.stripped())
        }
        ,
        r.prototype.twitterStatus = function() {
            var t;
            return this.stripped().length <= 140 ? this.status() : (t = this.stripped().substr(0, 137)).substr(t.length - 1).codePointAt(0) > 255 ? encodeURIComponent(t.slice(0, -1) + "...") : encodeURIComponent(t + "...")
        }
        ,
        r.prototype.shouldIncludeLink = function() {
            return (this.twitterStatus() + this.currentUrl).length <= 140
        }
        ,
        r.prototype.currentUrl = function() {
            return window.location.href
        }
        ,
        r.prototype.replyIntent = function() {
            return "https://twitter.com/intent/tweet?in_reply_to=" + this.get("external_id")
        }
        ,
        r.prototype.retweetIntent = function() {
            return "https://twitter.com/intent/retweet?tweet_id=" + this.get("external_id")
        }
        ,
        r.prototype.likeIntent = function() {
            return "https://twitter.com/intent/like?tweet_id=" + this.get("external_id")
        }
        ,
        r.prototype.relations = [{
            type: JuicerBackbone.One,
            key: "source",
            relatedModel: "Juicer.Models.Source"
        }],
        r
    }(JuicerBackbone.AssociatedModel)
}
.call(this),
function() {
    var t, e = function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var n in e)
            r.call(e, n) && (t[n] = e[n]);
        return i.prototype = e.prototype,
        t.prototype = new i,
        t.__super__ = e.prototype,
        t
    }, r = {}.hasOwnProperty;
    t = ["Facebook", "Instagram", "Pinterest", "Tumblr", "Twitter", "YouTube", "InstagramReels"],
    Juicer.Models.Source = function(r) {
        function i() {
            return i.__super__.constructor.apply(this, arguments)
        }
        return e(i, r),
        i.prototype.urlRoot = "/api/sources",
        i.prototype.toJSON = function() {
            return {
                source: _u.clone(this.attributes)
            }
        }
        ,
        i.prototype.source = function() {
            return this.get("source").startsWith("Twitter") || "X (Twitter)" === this.get("source") ? "Twitter" : this.get("source")
        }
        ,
        i.prototype.termType = function() {
            return this.get("term_type")
        }
        ,
        i.prototype.lowerSource = function() {
            return "Twitter" === this.source() ? "x-twitter" : this.source().toLowerCase()
        }
        ,
        i.prototype.allowed = function() {
            return null != this.get("allowed") ? this.get("allowed") : ""
        }
        ,
        i.prototype.disallowed = function() {
            return null != this.get("disallowed") ? this.get("disallowed") : ""
        }
        ,
        i.prototype.findProvider = function() {
            var t, e, r;
            return "Instagram" !== this.source() && "InstagramReels" !== this.source() || "hashtag" !== this.termType() ? (t = Juicer.Constants.SOURCE_TO_PROVIDER_MAP[this.source()] || this.source().toLowerCase(),
            (null != (e = window.juicerData) && null != (r = e.user) ? r.instagramLoginEnabled : void 0) && "instagram_basic_display" === t && (t = "instagram_login"),
            t) : "facebook"
        }
        ,
        i.prototype.fetchedFacebookPosterUrls = {},
        i.prototype.title = function() {
            switch (this.source()) {
            case "Blog":
                return "Add an RSS feed";
            case "Facebook":
                return "Add a Facebook business page";
            case "Flickr":
                return "Add a Flickr user's photos";
            case "Giphy":
                return "Add a Giphy search term";
            case "Hashtag":
                return "Choose a type of hashtag";
            case "Instagram":
                return "Import Instagram user posts";
            case "LinkedIn":
                return "Add a LinkedIn company or school";
            case "Pinterest":
                return "Add a Pinterest user's pins";
            case "Slack":
                return "Add a Slack channel";
            case "Soundcloud":
                return "Add a Soundcloud account";
            case "Tumblr":
                return "Add a Tumblr blog";
            case "Twitter":
                return "Add a X (Twitter) account";
            case "Vimeo":
                return "Add a Vimeo user's videos";
            case "YouTube":
                return "Add a YouTube channel";
            case "TikTok":
                return "Add a TikTok user's videos"
            }
        }
        ,
        i.prototype.label = function() {
            switch (this.source()) {
            case "Blog":
                return "RSS Feed URL: ";
            case "Facebook":
                return "https://www.facebook.com/";
            case "Flickr":
                return "https://www.flickr.com/photos/";
            case "Giphy":
            case "Slack":
                return "#";
            case "Instagram":
                return "https://www.instagram.com/";
            case "LinkedIn":
                return "https://www.linkedin.com/company/";
            case "Pinterest":
                return "https://www.pinterest.com/";
            case "Soundcloud":
                return "https://soundcloud.com/";
            case "Twitter":
                return "@";
            case "Vimeo":
                return "http://vimeo.com/";
            case "YouTube":
                return "https://www.youtube.com/user/";
            case "TikTok":
                return "https://www.tiktok.com/@"
            }
        }
        ,
        i.prototype.options = function() {
            var t, e, r, i, n, s, o;
            if (o = [],
            "Twitter" === this.source()) {
                for (i = [],
                e = [],
                r = 0,
                n = (t = "hashtag" === this.get("term_type") ? ["retweets"] : ["retweets", "replies"]).length; r < n; r++)
                    s = t[r],
                    this.get("options") && -1 !== this.get("options").indexOf(s) ? i.push(s) : e.push(s);
                i.length > 0 && o.push("including: " + i.join(", ")),
                e.length > 0 && o.push("excluding: " + e.join(", "))
            } else
                "Instagram" === this.source() && "reel" === this.get("post_type") ? o.push("reels") : "Instagram" === this.source() && "stories" === this.get("term_type") && o.push("stories");
            return o
        }
        ,
        i.prototype.placeholder = function() {
            switch (this.source()) {
            case "Blog":
                return "RSS_or_Atom_or_FeedBurner_URL";
            case "Facebook":
                return "Facebook_page_vanity_URL";
            case "Flickr":
                return "Flickr_username";
            case "Giphy":
                return "search_term";
            case "Instagram":
                return "Instagram_username";
            case "LinkedIn":
                return "company_OR_school_name";
            case "Pinterest":
                return "Pinterest_username";
            case "Slack":
                return "Slack_channel_name";
            case "Soundcloud":
                return "Soundcloud_username";
            case "Tumblr":
                return "Tumblr_username";
            case "Twitter":
                return "X (Twitter)_username";
            case "Vimeo":
                return "Vimeo_username";
            case "YouTube":
                return "YouTube_username_or_channel_ID"
            }
        }
        ,
        i.prototype.placeholderHashtag = function() {
            switch (this.source()) {
            case "Twitter":
                return "X (Twitter)_hashtag";
            case "Pinterest":
                return "pinterest-username/board-name";
            case "YouTube":
                return "YouTube_hashtag";
            case "Tumblr":
                return "Tumblr_hashtag"
            }
        }
        ,
        i.prototype.typeSymbol = function() {
            return "hashtag" === this.get("term_type") ? "#" : "location" === this.get("term_type") ? "\u25c9" : "@"
        }
        ,
        i.prototype.displayTerm = function() {
            var t;
            return this.get("name") && (t = this.get("name")),
            t || (t = this.get("term")),
            t
        }
        ,
        i.prototype.displayName = function() {
            return "" + this.typeSymbol() + this.displayTerm()
        }
        ,
        i.prototype.displayNameWithOptions = function() {
            var t;
            return t = this.displayName(),
            "Instagram" === this.source() && "reel" === this.get("post_type") ? t + " (reels)" : "Instagram" === this.source() && "stories" === this.get("term_type") ? t + " (stories)" : t
        }
        ,
        i.prototype.hashtags = function() {
            return _u.contains(this.hashtagSupporters, this.source())
        }
        ,
        i.prototype.needsLogin = function() {
            return _u.contains(this.requiresLogin, this.source())
        }
        ,
        i.prototype.manual = function() {
            return _u.contains(Juicer.Constants.SOURCES_WHERE_POSTS_CAN_BE_ADDED_MANUALLY, this.source())
        }
        ,
        i.prototype.hashtagSupporters = t,
        i.prototype.requiresLogin = ["Facebook", "Instagram", "InstagramReels", "Slack", "TikTok"],
        i.prototype.alternateNames = ["location", "group"],
        i.prototype.filterClass = function(t, e, r) {
            var i, n, s;
            return null == e && (e = null),
            null == r && (r = !1),
            n = s = "j-" + this.lowerSource().replace(/@|#/, ""),
            r || (n += " " + s + "-bg"),
            r && (n += " " + s + "-text " + s + "-hover j-social-icon"),
            this.all() && (n = "all j-social-icon"),
            i = n,
            "Grouped Terms" === t && (i += " grouped"),
            e && (i += " highlight"),
            i
        }
        ,
        i.prototype.all = function() {
            return "all" === this.lowerSource()
        }
        ,
        i.prototype.filter = function(t) {
            if (this.all())
                return null;
            switch (t) {
            case "Social Type":
                return this.source();
            case "Social Account":
                return this.get("id");
            case "Grouped Terms":
                return this.get("term")
            }
        }
        ,
        i.prototype.filterDisplay = function(t) {
            if (this.all())
                return "All";
            switch (t) {
            case "Social Type":
                return this.source();
            case "Social Account":
                return this.displayNameWithOptions();
            case "Grouped Terms":
                return this.displayName()
            }
        }
        ,
        i.prototype.youtubeChannelNameExample = function() {
            return {
                name: "mkbhd (Marques Brownlee)",
                link: "https://www.youtube.com/mkbhd",
                formattedLink: "https://www.youtube.com/<span class='example-link-highlight'>mkbhd</span>"
            }
        }
        ,
        i.prototype.usernameExample = function() {
            return this.usernameExamples[this.lowerSource()]
        }
        ,
        i.prototype.usernameHelpLink = function() {
            return this.usernameHelpLinks[this.lowerSource()]
        }
        ,
        i.prototype.usernameExamples = {
            facebook: {
                name: "Netflix",
                link: "https://www.facebook.com/netflix",
                formattedLink: "https://www.facebook.com/<span class='example-link-highlight'>netflix</span>"
            },
            twitter: {
                name: "SpaceX",
                link: "https://twitter.com/spacex",
                formattedLink: "https://twitter.com/<span class='example-link-highlight'>spacex</span>"
            },
            instagram: {
                name: "Dwayne Johnson",
                link: "https://www.instagram.com/therock",
                formattedLink: "https://www.instagram.com/<span class='example-link-highlight'>therock</span>"
            },
            youtube: {
                name: "NASA",
                link: "https://www.youtube.com/@NASA",
                formattedLink: "https://www.youtube.com/<span class='example-link-highlight'>@NASA</span>"
            },
            tumblr: {
                name: "A Well Traveled Woman",
                link: "http://awelltraveledwoman.tumblr.com",
                formattedLink: "http://<span class='example-link-highlight'>awelltraveledwoman</span>.tumblr.com"
            },
            pinterest: {
                name: "The New Yorker",
                link: "https://www.pinterest.com/thenewyorker",
                formattedLink: "https://www.pinterest.com/<span class='example-link-highlight'>thenewyorker</span>"
            },
            blog: {
                name: "Wired",
                link: "https://www.wired.com/feed/rss",
                formattedLink: "<span class='example-link-highlight'>https://www.wired.com/feed/rss</span>"
            },
            soundcloud: {
                name: "Imagine Dragons",
                link: "https://soundcloud.com/imaginedragons",
                formattedLink: "https://soundcloud.com/<span class='example-link-highlight'>imaginedragons</span>"
            },
            linkedin: {
                name: "Harvard University",
                link: "https://www.linkedin.com/school/harvard-university",
                formattedLink: "https://www.linkedin.com/school/<span class='example-link-highlight'>harvard-university</span>"
            },
            flickr: {
                name: "NASA Johnson",
                link: "https://www.flickr.com/photos/nasa2explore",
                formattedLink: "https://www.flickr.com/photos/<span class='example-link-highlight'>nasa2explore</span>"
            },
            vimeo: {
                name: "The New Yorker",
                link: "https://vimeo.com/newyorker",
                formattedLink: "https://vimeo.com/<span class='example-link-highlight'>newyorker</span>"
            },
            tiktok: {
                name: "@pepsi",
                link: "https://www.tiktok.com/@pepsi",
                formattedLink: "https://www.tiktok.com/@<span class='example-link-highlight'>pepsi</span>"
            }
        },
        i.prototype.manualPostExamples = {
            Facebook: "https://www.facebook.com/your-page/posts/4424595830956366",
            LinkedIn: "https://www.linkedin.com/posts/your-post-6805790914514816-iOSl",
            Twitter: "https://twitter.com/your-profile/status/14320590123109220999058",
            YouTube: "https://www.youtube.com/watch?v=Fasd9wbHWU_v8",
            Vimeo: "https://vimeo.com/4488123012127",
            Soundcloud: "https://soundcloud.com/profile-862007284/song",
            Tumblr: "https://you.tumblr.com/post/239123054282105"
        },
        i.prototype.usernameHelpLinks = {
            linkedin: {
                link: "https://help.juicer.io/hc/en-us/articles/360040406391-LinkedIn-sources-Adding-troubleshooting-and-limitations",
                text: "LinkedIn - notes and troubleshooting"
            }
        },
        i
    }(JuicerBackbone.AssociatedModel)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Models.User = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.relations = [{
            type: JuicerBackbone.Many,
            key: "feeds",
            relatedModel: "Juicer.Models.Feed"
        }],
        r
    }(JuicerBackbone.AssociatedModel)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Models.FeedValidation = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.validation = {
            name: {
                required: !0
            }
        },
        r
    }(JuicerBackbone.Model)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Models.UserSignupValidation = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.validation = {
            email: {
                required: !0,
                pattern: "email"
            },
            password: {
                required: !0,
                minLength: 8,
                validatePassword: !0
            }
        },
        r
    }(JuicerBackbone.Model)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Models.UserUpdateValidation = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.initialize = function(t) {
            return this.email = t.email,
            this.noPassword = t.noPassword,
            this.passwordAlreadyUpdated = t.passwordAlreadyUpdated,
            this.signedUpWithSocialAccount = t.signedUpWithSocialAccount
        }
        ,
        r.prototype.validation = {
            email: {
                required: function() {
                    if (this.noPassword)
                        return !1
                }
            },
            current_password: {
                required: function() {
                    return !this.noPassword && ((!this.get("password") || "false" !== this.passwordAlreadyUpdated || "true" !== this.signedUpWithSocialAccount) && this.email !== this.get("email"))
                },
                minLength: 8
            },
            password: {
                minLength: 8,
                required: function() {
                    if (this.noPassword)
                        return !1
                },
                validatePassword: function() {
                    return !this.noPassword && !!$("#user_password").val()
                }
            },
            current_password_two: {
                minLength: 8,
                required: function() {
                    return (!this.get("password") || "false" !== this.passwordAlreadyUpdated || "true" !== this.signedUpWithSocialAccount) && !!$("#user_password").val()
                }
            },
            password_confirmation: {
                required: function() {
                    return !this.noPassword && (!!$("#user_password").val() && "false" === this.passwordAlreadyUpdated && "true" === this.signedUpWithSocialAccount)
                },
                fn: function() {
                    if ($("#user_password").val() !== $("#user_password_confirmation").val())
                        return "Password confirmation does not match the password."
                }
            }
        },
        r
    }(JuicerBackbone.Model)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Models.UserValidation = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.validation = {
            email: {
                required: !0,
                pattern: "email"
            },
            password: {
                required: !0,
                minLength: 8
            }
        },
        r
    }(JuicerBackbone.Model)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Collections.FacebookResults = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.initialize = function(t) {
            return this.type = {
                username: "pages",
                reviews: "reviews"
            }[t.type]
        }
        ,
        r.prototype.url = function() {
            return "/api/facebook_results/" + this.type
        }
        ,
        r
    }(JuicerBackbone.Collection)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Collections.InstagramBusinessAccounts = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.url = function() {
            return "/api/instagram_business_accounts/"
        }
        ,
        r
    }(JuicerBackbone.Collection)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Collections.Posts = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.paginatingAttributes = ["current_page", "limit_value"],
        r.prototype.model = Juicer.Models.Post,
        r.prototype.parse = function(t) {
            var e;
            return _u.each(this.paginatingAttributes, (e = this,
            function(r) {
                return e[r] = t[r]
            }
            )),
            r.__super__.parse.call(this, t.items)
        }
        ,
        r
    }(JuicerBackbone.Collection)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Collections.SocialAccounts = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.url = "/api/social_accounts",
        r.prototype.socialAccountForSource = function(t) {
            var e;
            return e = t.findProvider(),
            "Instagram" !== t.source() && "InstagramReels" !== t.source() || "hashtag" !== t.termType() ? this.findWhere({
                provider: e
            }) : this.filter((function(t) {
                return t.attributes.provider === e && (void 0 === t.attributes.instagramBusinessAccounts || 0 !== t.attributes.instagramBusinessAccounts.length)
            }
            ))[0]
        }
        ,
        r.prototype.socialAccount = function(t) {
            return this.findWhere({
                provider: t
            })
        }
        ,
        r.prototype.findAllWithProvider = function(t) {
            var e, r, i;
            return "instagramreels" === t && (t = (null != (r = window.juicerData) && null != (i = r.user) ? i.instagramLoginEnabled : void 0) ? "instagram_login" : "instagram_basic_display"),
            e = function(e) {
                return e.attributes.provider === t && e.attributes.name
            }
            ,
            this.filter(e).sort((function(t, e) {
                return t.attributes.name > e.attributes.name
            }
            ))
        }
        ,
        r
    }(JuicerBackbone.Collection)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Collections.Users = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.model = Juicer.Models.User,
        r.prototype.url = "/api/users",
        r
    }(JuicerBackbone.Collection)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.AdminDowngrade = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.template = JST.admin_downgrade,
        r.prototype.initialize = function(t) {
            return this.userId = t.userId,
            this.csrf = $('meta[name="csrf-token"]').attr("content")
        }
        ,
        r.prototype.events = {
            click: "openOverlay"
        },
        r.prototype.openOverlay = function(t) {
            var e;
            return t.preventDefault(),
            e = $(t.target).attr("href"),
            this.overlay = new Juicer.Views.Overlay({
                content: this.template({
                    userId: this.userId,
                    reasons: this.reasons,
                    csrf: this.csrf,
                    action: e
                }),
                element: "body",
                width: "50%"
            }),
            this.overlay.render()
        }
        ,
        r.prototype.reasons = ["Temporary campaign/event is over", "Switching to another service", "Too expensive", "Too difficult to use", "They had technical issues", "Not satisfied with the support team", "Other"],
        r
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.AdminPasswordReset = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.template = JST.admin_password_reset,
        r.prototype.initialize = function(t) {
            return this.userId = t.userId,
            this.csrf = $('meta[name="csrf-token"]').attr("content")
        }
        ,
        r.prototype.events = {
            click: "openOverlay"
        },
        r.prototype.openOverlay = function(t) {
            var e;
            return t.preventDefault(),
            e = $(t.target).attr("href"),
            this.overlay = new Juicer.Views.Overlay({
                content: this.template({
                    userId: this.userId,
                    csrf: this.csrf,
                    action: e
                }),
                element: "body",
                width: "50%"
            }),
            this.overlay.render()
        }
        ,
        r
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.AdminUsers = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.events = {
            "click .toggle-favorite": "toggleFavorite"
        },
        r.prototype.toggleFavorite = function(t) {
            var e, r;
            return t.preventDefault(),
            r = (e = this.$(t.target)).data("id"),
            jQuery.get("/admin/users/" + r + "/favorite"),
            "\u2605" === e.html() ? e.html("\u2606") : e.html("\u2605")
        }
        ,
        r
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.AnalyticsDateRange = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.template = JST.analytics_date_range,
        r.prototype.events = {
            "click .date-range": "openDateRangeOverlay"
        },
        r.prototype.openDateRangeOverlay = function(t) {
            var e, r;
            return console.log("open"),
            r = $(t.target),
            e = this.template({
                start: r.data("start"),
                end: r.data("end")
            }),
            this.overlay = new Juicer.Views.Overlay({
                content: e,
                element: this.el,
                width: "50%"
            }),
            this.overlay.render()
        }
        ,
        r
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
      , e = function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var n in e)
            r.call(e, n) && (t[n] = e[n]);
        return i.prototype = e.prototype,
        t.prototype = new i,
        t.__super__ = e.prototype,
        t
    }
      , r = {}.hasOwnProperty;
    Juicer.Views.AutoScroll = function(r) {
        function i() {
            return this.close = t(this.close, this),
            this.stopListening = t(this.stopListening, this),
            this.reEnalbeScrolling = t(this.reEnalbeScrolling, this),
            this.clearTimeouts = t(this.clearTimeouts, this),
            this.fetchNewPosts = t(this.fetchNewPosts, this),
            this.initiateFetchNewPosts = t(this.initiateFetchNewPosts, this),
            this.togglePlay = t(this.togglePlay, this),
            this.findStackWithFewestPosts = t(this.findStackWithFewestPosts, this),
            this.getTranslateY = t(this.getTranslateY, this),
            this.moveElementTo = t(this.moveElementTo, this),
            this.initiateScroll = t(this.initiateScroll, this),
            this.triageGrid = t(this.triageGrid, this),
            this.manageEmptySpace = t(this.manageEmptySpace, this),
            this.managePostsOutOfView = t(this.managePostsOutOfView, this),
            this.manageSpeed = t(this.manageSpeed, this),
            this.currentTranslateYPosition = t(this.currentTranslateYPosition, this),
            this.initiateSpeedManager = t(this.initiateSpeedManager, this),
            this.initiateTriageGrid = t(this.initiateTriageGrid, this),
            this.manageCanvas = t(this.manageCanvas, this),
            this.setupInfiniteScroll = t(this.setupInfiniteScroll, this),
            this.preventScroll = t(this.preventScroll, this),
            this.updateInterval = t(this.updateInterval, this),
            i.__super__.constructor.apply(this, arguments)
        }
        return e(i, r),
        i.prototype.card = JST["partials/_auto_scroll_card"],
        i.prototype.paddingSize = 21,
        i.prototype.postStacks = [],
        i.prototype.postQueue = [],
        i.prototype.isPlaying = !0,
        i.prototype.scrollSpeed = "slow",
        i.prototype.updateInterval = function(t) {
            return this.scrollSpeed = t,
            this.manageSpeed(),
            this.model.set("auto_scroll_interval", t),
            this.model.save()
        }
        ,
        i.prototype.assignFreshPostStacks = function() {
            return this.postStacks = this.el.querySelectorAll("ul.j-stack"),
            this.postStacksContainer = this.el.querySelector(".j-stacker")
        }
        ,
        i.prototype.initialize = function(t) {
            var e;
            return this.columns = t.columns,
            this.interval = t.interval,
            this.isOnFeedsDashboard = t.isOnFeedsDashboard,
            this.scrollSpeed = this.model.get("auto_scroll_interval"),
            this.initiateFetchNewPosts(),
            this.boundTogglePlay = (e = this,
            function(t) {
                return e.togglePlay(t.detail.forced_action).bind(e)
            }
            ),
            this.boundUpdateInterval = function(t) {
                return function(e) {
                    return t.updateInterval(e.detail.interval)
                }
            }(this)
        }
        ,
        i.prototype.speedSettings = function(t) {
            switch (t) {
            case "slow":
                return [40, 1];
            case "medium":
                return [20, 2];
            case "fast":
                return [10, 2];
            default:
                return null
            }
        }
        ,
        i.prototype.preventScroll = function(t) {
            return t.preventDefault()
        }
        ,
        i.prototype.setupInfiniteScroll = function() {
            var t;
            return this.assignFreshPostStacks(),
            this.el.addEventListener("wheel", this.preventScroll, {
                passive: !0
            }),
            this.el.addEventListener("touchmove", this.preventScroll, {
                passive: !0
            }),
            this.el.addEventListener("togglePlay", this.boundTogglePlay),
            this.el.addEventListener("updateAutoScrollInterval", this.boundUpdateInterval),
            this.initiateScroll(),
            this.initiateTriageGrid(),
            this.initiateSpeedManager(),
            this.manageCanvas(),
            this.$(window).on("resize", (t = this,
            function() {
                return t.resizeWindowTimeoutId && clearTimeout(t.resizeWindowTimeoutId),
                t.resizeWindowTimeoutId = setTimeout((function() {
                    return t.close(),
                    t.setupInfiniteScroll(),
                    t.manageSpeed(!1)
                }
                ), 400)
            }
            )),
            this.$(window).on("blur", function(t) {
                return function() {
                    return t.pauseStack()
                }
            }(this)),
            this.$(window).on("focus", function(t) {
                return function() {
                    if (t.model.autoScroll())
                        return t.playStack()
                }
            }(this))
        }
        ,
        i.prototype.manageCanvas = function() {
            var t, e, r, i, n;
            return (t = this.el.querySelector(".j-stacker-wrapper")).style.overflow = "hidden",
            t.style.maxHeight = "100vh",
            this.el.querySelector(".j-paginate").style.display = "none",
            e = window.innerHeight,
            i = this.postStacks[0].querySelector("li.feed-item").clientHeight,
            r = Math.ceil(e / i) + 3,
            this.postStacks.forEach((n = this,
            function(t) {
                var e, i, s, o, a, c, l, u, h, p, d, f;
                if ((e = t.querySelectorAll("li.feed-item").length) < r) {
                    for (d = [],
                    i = s = l = e,
                    u = r; l <= u ? s < u : s > u; i = l <= u ? ++s : --s)
                        0 === n.postQueue.length && n.el.querySelectorAll("li.feed-item").forEach((function(t) {
                            var e;
                            return (e = n.clonePost(t)).style.opacity = 1,
                            n.postQueue.push(e)
                        }
                        )),
                        d.push(t.appendChild(n.postQueue.shift()));
                    return d
                }
                for (c = t.querySelectorAll("li.feed-item"),
                f = [],
                i = o = h = r,
                p = e; h <= p ? o <= p : o >= p; i = h <= p ? ++o : --o)
                    (a = c[i]) ? f.push(a.remove()) : f.push(void 0);
                return f
            }
            ))
        }
        ,
        i.prototype.initiateTriageGrid = function() {
            return this.triageGridTimeoutId && clearTimeout(this.triageGridTimeoutId),
            this.triageGridTimeoutId = setTimeout((t = this,
            function() {
                return t.triageGrid()
            }
            ), 1e4);
            var t
        }
        ,
        i.prototype.initiateSpeedManager = function() {
            return this.speedManagerTimeoutId && clearTimeout(this.speedManagerTimeoutId),
            this.speedManagerTimeoutId = setTimeout((t = this,
            function() {
                return t.manageSpeed(!0)
            }
            ), 5e3);
            var t
        }
        ,
        i.prototype.currentTranslateYPosition = function() {
            var t, e;
            return t = ((e = window.getComputedStyle(this.postStacksContainer)).transform || e.webkitTransform || e.mozTransform).match(/^matrix\((.+)\)$/),
            parseFloat(t[1].split(", ")[5])
        }
        ,
        i.prototype.manageSpeed = function(t) {
            if (null == t && (t = !1),
            t && this.initiateSpeedManager(),
            this.isPlaying)
                return this.postStacksContainer.style.transition = "transform " + this.speedSettings(this.scrollSpeed)[0] + "s linear 0s",
                this.postStacksContainer.style.transform = "translateY(" + (this.currentTranslateYPosition() - 800) + "px)"
        }
        ,
        i.prototype.playStack = function() {
            return this.isPlaying = !0,
            this.manageSpeed(!1)
        }
        ,
        i.prototype.managePostsOutOfView = function() {
            return this.postStacks.forEach((t = this,
            function(e) {
                return e.querySelectorAll("li.feed-item").forEach((function(e) {
                    var r, i, n, s, o;
                    if (r = t.el.getBoundingClientRect().top,
                    o = e.getBoundingClientRect().bottom,
                    s = e.closest("ul.j-stack"),
                    o < r && (t.postQueue.length < 10 && t.postQueue.push(t.clonePost(e)),
                    t.moveElementTo(s, t.getTranslateY(s) + e.clientHeight + t.paddingSize),
                    e.remove(),
                    n = t.postQueue.shift(),
                    i = t.findStackWithFewestPosts(),
                    n))
                        return i.appendChild(n)
                }
                ))
            }
            ));
            var t
        }
        ,
        i.prototype.manageEmptySpace = function() {
            var t, e, r, i;
            if (t = this.currentTranslateYPosition(),
            r = null,
            e = 0,
            this.postStacks.forEach((i = this,
            function(t) {
                if (null === r || i.getTranslateY(t) < e)
                    return r = t,
                    e = i.getTranslateY(t)
            }
            )),
            !(e < 1e3))
                return this.postStacks.forEach(function(t) {
                    return function(r) {
                        return t.moveElementTo(r, t.getTranslateY(r) - e)
                    }
                }(this)),
                this.moveElementTo(this.postStacksContainer, t + e),
                setTimeout(this.manageSpeed, 20)
        }
        ,
        i.prototype.triageGrid = function() {
            return this.initiateTriageGrid(),
            this.assignFreshPostStacks(),
            this.managePostsOutOfView(),
            setTimeout(this.manageEmptySpace, 1e3)
        }
        ,
        i.prototype.initiateScroll = function() {
            var t;
            return (t = this.el.querySelector(".j-stacker")).style.transform = "translateY(-800px)",
            t.style.transition = "transform " + this.speedSettings(this.scrollSpeed)[0] + "s linear 0s"
        }
        ,
        i.prototype.moveElementTo = function(t, e) {
            return t.style.transition = "",
            t.style.transform = "translateY(" + e + "px)"
        }
        ,
        i.prototype.getTranslateY = function(t) {
            return "" === t.style.transform ? 0 : Number(t.style.transform.split("(")[1].split("px")[0])
        }
        ,
        i.prototype.findStackWithFewestPosts = function() {
            var t;
            return t = null,
            Array.from(this.postStacks).forEach((function(e) {
                if (null === t || t.childNodes.length > e.childNodes.length)
                    return t = e
            }
            )),
            t
        }
        ,
        i.prototype.clonePost = function(t) {
            var e, r, i, n, s;
            for ((r = document.createElement("li")).innerHTML = t.innerHTML,
            r.classList = t.classList,
            r.style.opacity = 1,
            i = 0,
            n = (s = t.attributes).length; i < n; i++)
                e = s[i],
                r.setAttribute(e.name, e.value);
            return r
        }
        ,
        i.prototype.pauseStack = function() {
            var t, e;
            return e = ((t = window.getComputedStyle(this.postStacksContainer)).transform || t.webkitTransform || t.mozTransform).match(/^matrix\((.+)\)$/)[1].split(", ")[5],
            this.postStacksContainer.style.transform = "translateY(" + parseFloat(e) + "px)",
            this.isPlaying = !1
        }
        ,
        i.prototype.toggleMediaControls = function(t) {
            var e, r;
            return r = document.querySelector(".autoscroll-control-play"),
            e = document.querySelector(".autoscroll-control-pause"),
            "play" === t ? (r.style.display = "none",
            e.style.display = "flex") : "pause" === t ? (r.style.display = "block",
            e.style.display = "flex") : (r.style.display = !0 === this.isPlaying ? "none" : "flex",
            e.style.display = !0 === this.isPlaying ? "flex" : "none")
        }
        ,
        i.prototype.togglePlay = function(t) {
            return this.assignFreshPostStacks(),
            "play" === t ? (this.playStack(),
            void this.toggleMediaControls(t)) : "pause" === t ? (this.pauseStack(),
            void this.toggleMediaControls(t)) : (this.isPlaying ? this.pauseStack() : this.playStack(),
            this.toggleMediaControls())
        }
        ,
        i.prototype.initiateFetchNewPosts = function() {
            return this.fetchPostsTimeoutId && clearTimeout(this.fetchPostsTimeoutId),
            this.fetchPostsTimeoutId = setTimeout((t = this,
            function() {
                return t.fetchNewPosts()
            }
            ), 6e4);
            var t
        }
        ,
        i.prototype.fetchNewPosts = function() {
            return this.initiateFetchNewPosts(),
            this.model.fetch({
                success: (t = this,
                function(e, r) {
                    var i;
                    if (0 !== r.posts.items.length)
                        return i = r.posts.items.map((function(t) {
                            return new Juicer.Models.Post(t)
                        }
                        )),
                        t.postQueue = t.postQueue.filter((function(t) {
                            return !i.some((function(e) {
                                return e.id === t.id
                            }
                            ))
                        }
                        )),
                        i = (i = i.map((function(e) {
                            return t.card({
                                post: e,
                                isOnFeedsDashboard: t.isOnFeedsDashboard,
                                feed: t.model
                            })
                        }
                        ))).map((function(e) {
                            return (e = document.createRange().createContextualFragment(e).querySelector("li.feed-item")).style.opacity = 1,
                            t.$("img.j-content-image").on("error", (function(e) {
                                var r;
                                return r = jQuery(e.target),
                                t.handleBrokenImage(r)
                            }
                            )),
                            t.$(".j-poster img").on("error", (function(e) {
                                var r;
                                return r = jQuery(e.target),
                                t.handleBrokenPosterImage(r)
                            }
                            )),
                            e
                        }
                        )),
                        t.postQueue = t.postQueue.concat(i)
                }
                )
            });
            var t
        }
        ,
        i.prototype.handleBrokenImage = function(t) {
            return new Juicer.Views.ImageHandler({
                target: t,
                feed: this.feed,
                theme: this.feed.get("css")
            })
        }
        ,
        i.prototype.handleBrokenPosterImage = function(t) {
            return new Juicer.Views.PosterImageHandler({
                target: t,
                feed: this.feed,
                theme: this.feed.get("css")
            })
        }
        ,
        i.prototype.clearTimeouts = function() {
            return clearTimeout(this.fetchPostsTimeoutId),
            clearTimeout(this.triageGridTimeoutId),
            clearTimeout(this.speedManagerTimeoutId)
        }
        ,
        i.prototype.reEnalbeScrolling = function() {
            return this.el.removeEventListener("wheel", this.preventScroll),
            this.el.removeEventListener("touchmove", this.preventScroll)
        }
        ,
        i.prototype.stopListening = function() {
            return this.$(window).off("focus"),
            this.$(window).off("resize"),
            this.$(window).off("blur"),
            this.el.removeEventListener("togglePlay", this.boundTogglePlay),
            this.el.removeEventListener("updateAutoScrollInterval", this.boundUpdateInterval)
        }
        ,
        i.prototype.close = function() {
            return this.clearTimeouts(),
            this.reEnalbeScrolling(),
            this.stopListening()
        }
        ,
        i
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.BrokenImage = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.initialize = function(t) {
            return null == t && (t = {}),
            this.feed = t.feed,
            this.model = this.feed,
            this.el = t.el,
            this.handleBrokenImages()
        }
        ,
        r.prototype.handleBrokenImages = function() {
            var t;
            return this.$("img.j-content-image").on("error", (t = this,
            function(e) {
                var r;
                return r = jQuery(e.target),
                t.handleBrokenImage(r)
            }
            )),
            this.$("img.j-content-image").on("load", function(t) {
                return function(e) {
                    var r;
                    if (r = jQuery(e.target),
                    e.target.naturalWidth < 20)
                        return t.handleBrokenImage(r)
                }
            }(this)),
            this.$(".j-poster img").on("error", function(t) {
                return function(e) {
                    var r;
                    return r = jQuery(e.target),
                    t.handleBrokenPosterImage(r)
                }
            }(this))
        }
        ,
        r.prototype.handleBrokenImage = function(t) {
            return new Juicer.Views.ImageHandler({
                target: t,
                feed: this.feed,
                theme: this.feed.get("css"),
                el: this.el
            })
        }
        ,
        r.prototype.handleBrokenPosterImage = function(t) {
            return new Juicer.Views.PosterImageHandler({
                target: t,
                feed: this.feed,
                theme: this.feed.get("css")
            })
        }
        ,
        r
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.Churn = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.template = JST.churn,
        r.prototype.initialize = function() {
            return null != this.el && (this.overlay = new Juicer.Views.Overlay({
                content: this.template(),
                element: this.el,
                width: "50%"
            }),
            this.overlay.render())
        }
        ,
        r.prototype.events = {
            "click .delete": "closeOverlay"
        },
        r.prototype.closeOverlay = function() {
            return this.overlay.removeView()
        }
        ,
        r
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.BlogShow = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.el = window,
        r.prototype.initialize = function() {
            return this.loaded = !1,
            this.triggerPoint = $("#disqus_thread").offset().top
        }
        ,
        r.prototype.events = function() {
            return {
                scroll: "lazyLoadDisqus"
            }
        }
        ,
        r.prototype.lazyLoadDisqus = _u.debounce((function() {
            return this.checkScroll()
        }
        ), 300),
        r.prototype.checkScroll = function() {
            if (this.scrollPoint() > this.triggerPoint && !this.loaded)
                return this.loadDisqus()
        }
        ,
        r.prototype.loadDisqus = function() {
            var t;
            return this.loaded = !0,
            (t = document.createElement("script")).type = "text/javascript",
            t.async = !0,
            t.src = "//juicerio.disqus.com/embed.js",
            (document.getElementsByTagName("head")[0] || document.getElementsByTagName("body")[0]).appendChild(t)
        }
        ,
        r.prototype.scrollPoint = function() {
            return this.$el.scrollTop() + this.$el.height()
        }
        ,
        r
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.DowngradeOverlay = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.template = JST.downgrade_overlay,
        r.prototype.initialize = function() {
            return !!this.$el.data("downgrade-at") && (this.plan = this.$el.data("plan"),
            this.downgradeAt = this.$el.data("downgrade-at"),
            this.overlay = new Juicer.Views.Overlay({
                content: this.template({
                    plan: this.plan,
                    downgradeAt: this.downgradeAt
                }),
                element: this.el,
                width: "50%"
            }),
            this.overlay.render())
        }
        ,
        r.prototype.events = {
            "click .delete": "closeOverlay"
        },
        r.prototype.closeOverlay = function() {
            return this.overlay.removeView()
        }
        ,
        r
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
      , e = function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var n in e)
            r.call(e, n) && (t[n] = e[n]);
        return i.prototype = e.prototype,
        t.prototype = new i,
        t.__super__ = e.prototype,
        t
    }
      , r = {}.hasOwnProperty;
    Juicer.Views.Calculator = function(r) {
        function i() {
            return this.updateValues = t(this.updateValues, this),
            this.render = t(this.render, this),
            i.__super__.constructor.apply(this, arguments)
        }
        return e(i, r),
        i.prototype.template = JST["enterprise/calculator"],
        i.prototype.initialize = function() {
            return this.model = new Juicer.Models.Estimate,
            this.model.on("change", this.updateValues),
            this.render()
        }
        ,
        i.prototype.render = function() {
            return this.$el.html(this.template({
                model: this.model
            }))
        }
        ,
        i.prototype.updateValues = function() {
            return this.$(".calculator-sources").html(this.model.sources()),
            this.$(".calculator-frequency").html(this.model.frequencyInWords()),
            this.$(".calculator-price").html(this.model.priceString()),
            this.$(".calculator-price-label").html(this.model.priceLabel())
        }
        ,
        i.prototype.events = {
            "change input": "updateModel",
            "input input": "updateModel"
        },
        i.prototype.updateModel = function(t) {
            var e;
            return e = $(t.target),
            this.model.set(e.data("attribute"), e.val())
        }
        ,
        i
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
      , e = function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var n in e)
            r.call(e, n) && (t[n] = e[n]);
        return i.prototype = e.prototype,
        t.prototype = new i,
        t.__super__ = e.prototype,
        t
    }
      , r = {}.hasOwnProperty;
    Juicer.Views.Enterprise = function(r) {
        function i() {
            return this.close = t(this.close, this),
            this.append = t(this.append, this),
            this.afterRender = t(this.afterRender, this),
            this.render = t(this.render, this),
            i.__super__.constructor.apply(this, arguments)
        }
        return e(i, r),
        i.prototype.template = JST["enterprise/show"],
        i.prototype.initialize = function(t) {
            return this.on("render", this.afterRender),
            this.model = new Juicer.Models.Enterprise({
                slug: t.slug
            }),
            this.model.on("sync", this.render),
            this.model.fetch({
                error: function() {
                    return alert("Something went wrong. Please try again.")
                }
            })
        }
        ,
        i.prototype.render = function() {
            return this.model.get("current_page") > 1 && this.model.get("new_feeds") ? this.append() : (this.$el.html(this.template({
                model: this.model
            })),
            this.renderFeeds(this.model.get("feeds"))),
            this.trigger("render")
        }
        ,
        i.prototype.afterRender = function() {
            var t, e;
            if (this.focusedInput)
                return e = (t = $("#js-enterprise-search")).val(),
                t.focus().val("").val(e)
        }
        ,
        i.prototype.renderFeeds = function(t) {
            return this.feeds = new Juicer.Views.EnterpriseFeeds({
                el: "ul.feeds",
                collection: t,
                model: this.model
            }).render(),
            this.feeds.on("removeFocus", (e = this,
            function() {
                return e.focusedInput = !1
            }
            ));
            var e
        }
        ,
        i.prototype.append = function() {
            return this.feeds.append()
        }
        ,
        i.prototype.events = {
            "input input[type=search]": _u.debounce((function(t) {
                return this.search(t)
            }
            ), 500),
            "search input[type=search]": "search"
        },
        i.prototype.search = function(t) {
            return this.model.resetPage(),
            this.focusedInput = !0,
            t.preventDefault(),
            this.model.query = $(t.target).val(),
            this.model.get("feeds"),
            this.model.fetch()
        }
        ,
        i.prototype.close = function() {
            return this.model.off("sync"),
            this.feeds.close()
        }
        ,
        i
    }(JuicerBackbone.View),
    Juicer.Views.EnterpriseFeeds = function(r) {
        function i() {
            return this.close = t(this.close, this),
            this.loadNextPage = t(this.loadNextPage, this),
            i.__super__.constructor.apply(this, arguments)
        }
        return e(i, r),
        i.prototype.render = function() {
            return this.addToSubViews(this.collection.models),
            this.model.moreFeeds() && this.addLoadMore(),
            this.$el.html(this.subviews),
            this
        }
        ,
        i.prototype.addToSubViews = function(t) {
            return this.subviews || (this.subviews = []),
            _u.each(t, (e = this,
            function(t) {
                var r;
                return r = new Juicer.Views.EnterpriseFeed({
                    model: t,
                    account: e.model
                }).render(),
                e.subviews.push(r.el)
            }
            ));
            var e
        }
        ,
        i.prototype.addLoadMore = function() {
            var t;
            return this.loadMore = new Juicer.Views.EnterpriseLoadMore,
            this.loadMore.on("next:page:clicked", this.loadNextPage),
            this.loadMore.on("removeFocus", (t = this,
            function() {
                return t.trigger("removeFocus")
            }
            )),
            this.loadMore.render(),
            this.subviews.push(this.loadMore.el)
        }
        ,
        i.prototype.removeLoadMore = function() {
            var t;
            return this.loadMore.off("next:page:clicked"),
            t = this.subviews.indexOf(this.loadMore.el),
            this.subviews.splice(t, 1),
            this.loadMore.remove(),
            t
        }
        ,
        i.prototype.loadNextPage = function() {
            return this.model.nextPage(),
            this.model.fetch()
        }
        ,
        i.prototype.append = function() {
            var t;
            return t = this.removeLoadMore(),
            this.addToSubViews(this.model.get("new_feeds").models),
            this.model.moreFeeds() && this.addLoadMore(),
            this.$el.append(this.subviews.slice(t))
        }
        ,
        i.prototype.close = function() {
            return _u.each(this.subviews, (function(t) {
                return t.remove()
            }
            )),
            this.loadMore && this.loadMore.off("next:page:clicked"),
            this.$el.empty().off(),
            this.stopListening(),
            this
        }
        ,
        i
    }(JuicerBackbone.View),
    Juicer.Views.EnterpriseFeed = function(t) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return e(r, t),
        r.prototype.template = JST["enterprise/feed"],
        r.prototype.createAssignmentForm = JST["enterprise/create_assignment_form"],
        r.prototype.tagName = "li",
        r.prototype.className = "border bg-white p-25 relative mb-20 tal",
        r.prototype.initialize = function(t) {
            return this.account = t.account
        }
        ,
        r.prototype.render = function() {
            return this.$el.html(this.template({
                model: this.model,
                assignments: this.model.get("assignments").models,
                sources: this.model.get("sources").models,
                account: this.account
            })),
            this
        }
        ,
        r.prototype.events = {
            "click .delete-dashboard-assignment": "deleteAssignment",
            "click .add-assignment": "openAssignmentForm",
            "click .fetch-all": "fetchAllPosts",
            "submit .new-assignment": "createAssignment"
        },
        r.prototype.deleteAssignment = function(t) {
            var e;
            if (t.preventDefault(),
            e = $(t.target).parents(".enterprise-user-dashboard-assignment"),
            Juicer.Helpers.confirm("Are you sure you want to remove this user from this feed?"))
                return new Juicer.Models.Assignment({
                    id: $(t.target).data("id")
                }).destroy({
                    success: function() {
                        return e.remove()
                    },
                    error: function(t, e) {
                        return 422 === e.status ? alert(e.responseJSON.errors) : alert("Something went wrong!")
                    }
                })
        }
        ,
        r.prototype.openAssignmentForm = function() {
            return new Juicer.Views.Overlay({
                content: this.createAssignmentForm({
                    model: this.model,
                    csrf: this.csrf,
                    account: this.account
                }),
                width: "35%",
                element: this.el
            }).render()
        }
        ,
        r.prototype.createAssignment = function(t) {
            var e, r;
            return t.preventDefault(),
            !!(e = $(t.target).serializeHash()).email && (this.assignment = new Juicer.Models.Assignment(e),
            this.assignment.save(null, {
                success: (r = this,
                function() {
                    return r.model.get("assignments").add(r.assignment),
                    r.render()
                }
                ),
                error: function(t, e) {
                    return 422 === e.status ? alert(e.responseJSON.errors.base.join()) : alert("Something went wrong!")
                }
            }))
        }
        ,
        r.prototype.fetchAllPosts = function(t) {
            return !!Juicer.Helpers.confirm("Fetching all posts for this feed can take 10+ minutes. Please be patient and check back later.") && (t.preventDefault(),
            this.model.fetchAll(),
            $(t.target).replaceWith("Fetching all posts."))
        }
        ,
        r.prototype.close = function() {
            return this.$el.remove()
        }
        ,
        r
    }(JuicerBackbone.View),
    Juicer.Views.EnterpriseLoadMore = function(t) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return e(r, t),
        r.prototype.tagName = "a",
        r.prototype.className = "load-more j-button mt-30",
        r.prototype.render = function() {
            return this.$el.text("Load More Feeds"),
            this
        }
        ,
        r.prototype.events = {
            click: "triggerClick"
        },
        r.prototype.triggerClick = function() {
            return this.trigger("removeFocus"),
            this.trigger("next:page:clicked")
        }
        ,
        r
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.EnterpriseAdmin = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.template = JST["enterprise/admin"],
        r.prototype.tagName = "li",
        r.prototype.className = "enterprise-user",
        r.prototype.initialize = function(t) {
            return this.account = t.account,
            this.index = t.index
        }
        ,
        r.prototype.render = function() {
            return this.$el.html(this.template({
                model: this.model,
                account: this.account,
                index: this.index
            }))
        }
        ,
        r
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.EnterpriseUser = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.template = JST["enterprise/user"],
        r.prototype.tagName = "li",
        r.prototype.className = "bg-white border mb-25",
        r.prototype.initialize = function(t) {
            return this.account = t.account
        }
        ,
        r.prototype.render = function() {
            return this.$el.html(this.template({
                model: this.model,
                account: this.account
            }))
        }
        ,
        r.prototype.events = {
            "click .delete-assignment": "deleteAssignment"
        },
        r.prototype.deleteAssignment = function(t) {
            var e;
            if (t.preventDefault(),
            e = $(t.target).parents(".enterprise-user-assignment"),
            Juicer.Helpers.confirm("Are you sure you want to remove this user from this feed?"))
                return new Juicer.Models.Assignment({
                    id: $(t.target).data("id")
                }).destroy({
                    success: function() {
                        return e.remove()
                    },
                    error: function() {
                        return alert("Something went wrong!")
                    }
                })
        }
        ,
        r
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.EnterpriseUsers = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.template = JST["enterprise/users"],
        r.prototype.inviteAdminForm = JST["enterprise/invite_admin"],
        r.prototype.initialize = function(t) {
            return this.model = new Juicer.Models.EnterpriseUsers({
                slug: t.slug
            }),
            this.model.fetch({
                success: (e = this,
                function() {
                    return e.render()
                }
                ),
                error: function() {
                    return alert("uh oh something went wrong")
                }
            });
            var e
        }
        ,
        r.prototype.render = function() {
            return this.$el.html(this.template({
                model: this.model
            })),
            this.renderAdmins(),
            this.renderUsers()
        }
        ,
        r.prototype.renderAdmins = function() {
            var t, e;
            return t = [],
            _u.each(this.model.get("admins").models, (e = this,
            function(r, i) {
                return t.push(new Juicer.Views.EnterpriseAdmin({
                    model: r,
                    account: e.model,
                    index: i
                }).render())
            }
            )),
            this.$(".enterprise-admins").html(t)
        }
        ,
        r.prototype.renderUsers = function() {
            var t, e;
            return t = _u.map(this.model.get("users").models, (e = this,
            function(t) {
                return new Juicer.Views.EnterpriseUser({
                    model: t,
                    account: e.model
                }).render()
            }
            )),
            this.$(".enterprise-users").html(t)
        }
        ,
        r.prototype.events = {
            "click a.new-enterprise-admin": "openNewAdminOverlay"
        },
        r.prototype.openNewAdminOverlay = function(t) {
            return t.preventDefault(),
            this.csrf = $('meta[name="csrf-token"]').attr("content"),
            new Juicer.Views.Overlay({
                content: this.inviteAdminForm({
                    model: this.model,
                    csrf: this.csrf
                }),
                width: "35%"
            }).render()
        }
        ,
        r
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.EnterpriseWhiteLabel = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.template = JST["enterprise/white_label"],
        r.prototype.initialize = function(t) {
            return this.model = new Juicer.Models.Enterprise({
                slug: t.slug
            }),
            this.model.fetch({
                success: (e = this,
                function() {
                    return e.render()
                }
                ),
                error: function() {
                    return alert("uh oh something went wrong")
                }
            });
            var e
        }
        ,
        r.prototype.render = function() {
            return this.$el.html(this.template({
                model: this.model
            }))
        }
        ,
        r.prototype.events = {
            "submit .white-label-url": "updateAccount"
        },
        r.prototype.updateAccount = function(t) {
            var e, r, i;
            return t.preventDefault(),
            (r = $(t.target)).find("input[type=submit]").attr("disabled", "disabled").val("Loading..."),
            e = JuicerBackbone.Syphon.serialize(r),
            this.model.set(e),
            this.model.save(null, {
                success: (i = this,
                function() {
                    return i.render()
                }
                )
            })
        }
        ,
        r
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
      , e = function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var n in e)
            r.call(e, n) && (t[n] = e[n]);
        return i.prototype = e.prototype,
        t.prototype = new i,
        t.__super__ = e.prototype,
        t
    }
      , r = {}.hasOwnProperty;
    Juicer.Views.Entertainment = function(r) {
        function i() {
            return this.setPostSizes = t(this.setPostSizes, this),
            this.setPosts = t(this.setPosts, this),
            i.__super__.constructor.apply(this, arguments)
        }
        return e(i, r),
        i.prototype.template = JST.entertainment,
        i.prototype.card = JST["partials/_widget_card"],
        i.prototype.customCss = JST["partials/_custom_styles"],
        i.prototype.initialize = function(t) {
            return this.interval = t.interval,
            this.isOnFeedsDashboard = t.isOnFeedsDashboard,
            this.setPosts(),
            this.setPostSizes(),
            this.render()
        }
        ,
        i.prototype.setPosts = function() {
            return this.posts = this.model.get("posts").models.slice(0, 9)
        }
        ,
        i.prototype.setPostSizes = function() {
            return this.largePosts = this.posts.filter((function(t) {
                return t.get("edit")
            }
            )),
            this.smallPosts = this.posts - this.largePosts
        }
        ,
        i.prototype.render = function() {
            return this.$el.append(this.template({
                model: this.model,
                largePosts: this.largePosts,
                smallPosts: this.smallPosts,
                chunks: this.chunkArray(this.posts, 3),
                posts: this.posts,
                feed: this.model,
                isOnFeedsDashboard: this.isOnFeedsDashboard
            })),
            this.container = this.$(".entertainment-container"),
            this.handleBrokenImages(),
            this.$el.append(this.customCss({
                feed: this.model
            }))
        }
        ,
        i.prototype.handleBrokenImages = function() {
            return new Juicer.Views.BrokenImage({
                el: this.el,
                feed: this.model
            })
        }
        ,
        i.prototype.chunkArray = function(t, e) {
            var r, i, n, s;
            for (n = 0,
            r = t.length,
            s = []; n < r; )
                i = t.slice(n, n + e),
                s.push(i),
                n += e;
            return s
        }
        ,
        i
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.Errors = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.template = JST.errors,
        r.prototype.initialize = function(t) {
            var e;
            try {
                this.errors = $.parseJSON(t.errors.responseText).errors
            } catch (r) {
                e = (t && t.errors && t.errors.statusText || "").match(/(timeout|unavailable)/i) ? 'The request timed out. Please try again by pressing "Create Source" below.' : "An unspecified error occurred.",
                this.errors = {
                    errorMessage: [e]
                }
            }
            return this.$(".errors, .j-loading, .please-wait").remove(),
            this.$("input[type=submit]").show(),
            this.$el.prepend(this.template({
                errors: this.errors,
                source: t.source
            }))
        }
        ,
        r
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
      , e = function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var n in e)
            r.call(e, n) && (t[n] = e[n]);
        return i.prototype = e.prototype,
        t.prototype = new i,
        t.__super__ = e.prototype,
        t
    }
      , r = {}.hasOwnProperty;
    Juicer.Views.Feed = function(r) {
        function i() {
            return this.reRender = t(this.reRender, this),
            this.stopVideoAndResumeJuicerSlider = t(this.stopVideoAndResumeJuicerSlider, this),
            this.stopVideo = t(this.stopVideo, this),
            this.forceShowJuicerAds = t(this.forceShowJuicerAds, this),
            this.addJuicerAds = t(this.addJuicerAds, this),
            this.reRenderFeedAfterEvent = t(this.reRenderFeedAfterEvent, this),
            i.__super__.constructor.apply(this, arguments)
        }
        return e(i, r),
        i.prototype.template = JST.feed,
        i.prototype.referral = JST["partials/_referral"],
        i.prototype.loading = JST["partials/_loading"],
        i.prototype.postNotificationBanner = JST["partials/_post_notification_banner"],
        i.prototype.permittedOptions = ["feedId", "gutter", "per", "page", "pages", "overlay", "interval", "filter", "startingAt", "endingAt", "search", "truncate", "equal", "style", "after", "columns", "origin", "visible"],
        i.prototype.initialize = function(t) {
            return this.userOptions = _u.pick(this.$el.data(), this.permittedOptions),
            this.userOptions = this.setDefaultOptions(this.userOptions),
            this.showLoader(!1, !0),
            this.isOnFeedsDashboard = t.isOnFeedsDashboard || !1,
            this.model = t.model || this.newModel(),
            this.tracked = !1,
            this.model.on("new-posts", this.reRender),
            this.model.on("showLoader", (e = this,
            function() {
                return e.showLoader(!0)
            }
            ));
            var e
        }
        ,
        i.prototype.reRenderFeedAfterEvent = function() {
            return this.model.fetch({
                success: (t = this,
                function() {
                    return t.reRender(),
                    "htmx" === t.model.get("version") && window.juicerUtil.updateSidebarSourcesMenu(),
                    jQuery(".juicer2-close").click(),
                    jQuery(".close-subview").click()
                }
                ),
                error: function() {
                    return console.log("Juicer Problem")
                }
            });
            var t
        }
        ,
        i.prototype.setDefaultOptions = function(t) {
            var e, r;
            r = void 0;
            try {
                r = new URLSearchParams(window.location.search).get("feed_style"),
                r = Juicer.Constants.FEED_CLASSES.indexOf(r) >= 0 && r
            } catch (t) {
                e = t,
                console.error(e),
                r = null
            }
            return t.slug = t.feedId,
            t.css = r || t.style,
            t.per || (t.per = 100),
            t.page || (t.page = 1),
            null != t.overlay && (t.overlay = !!t.overlay),
            t
        }
        ,
        i.prototype.newModel = function() {
            var t;
            return t = ["origin", "slug", "per", "page", "filter", "startingAt", "endingAt", "search", "css", "truncate"],
            new Juicer.Models.Feed(_u.pick(this.userOptions, t))
        }
        ,
        i.prototype.events = function() {
            return {
                "click li.feed-item": "triggerEvent",
                "click ul.j-filters li": "filterFeed",
                "click ul.j-display-filters li": "filterFeed",
                "click .j-paginate": "appendNextPage",
                "keyup li.feed-item": "triggerEventByKeyboard"
            }
        }
        ,
        i.prototype.render = function() {
            var t;
            return null != this.model.get("posts") ? this.renderFeed() : this.model.fetch({
                success: (t = this,
                function() {
                    return t.renderFeed()
                }
                ),
                error: function() {
                    return console.log("Juicer Problem")
                }
            }),
            this
        }
        ,
        i.prototype.renderFeed = function() {
            if (!this.rewriteFeedTag())
                return document.body.addEventListener("jcr.rerenderfeed", this.reRenderFeedAfterEvent),
                this.hideLoader(),
                this.setUserOptionsFromModel(),
                this.model.paid() || this.model.isTrial() || this.adsAdded || this.addJuicerAds(),
                this.setDimensions(),
                this.determineBrowser(),
                this.model.widget() ? this.renderWidget() : this.model.slider() ? this.renderSlider() : this.model.livingWall() ? this.renderLivingWall() : this.model.entertainment() ? this.renderEntertainment() : this.model.autoScroll() ? this.renderAutoScroll() : this.renderFeedList(),
                this.setupAccessibilityAttributes(),
                this.setClass(),
                this.model.hasInterval() || this.handleBrokenImages(),
                this.$el.addClass("loaded"),
                this.shouldTrackAnalytics() && this.trackPageView(),
                this.runAfter("load"),
                this.dispatchFeedEvent("feedLoaded"),
                window.juicerDashboard && this.addJuicerAlerts(),
                this
        }
        ,
        i.prototype.rewriteFeedTag = function() {
            var t, e;
            return e = function(t, e) {
                var r;
                return t.wrap("<" + e + ">"),
                r = t.parent(),
                jQuery.each(t.prop("attributes"), (function() {
                    return r.attr(this.name, this.value)
                }
                )),
                t.contents().unwrap(),
                r
            }
            ,
            !!(t = "v1" === this.model.get("embed_layout") && this.$el.is("div") ? "ul" : "v2" === this.model.get("embed_layout") && this.$el.is("ul") ? "div" : void 0) && (this.$el = e(this.$el, t),
            this.$el.empty(),
            new Juicer.Views.Feed({
                el: this.$el.get()
            }).render(),
            !0)
        }
        ,
        i.prototype.setUserOptionsFromModel = function() {
            var t;
            return _u.each(this.modelAttrs, (t = this,
            function(e) {
                if (null == t.userOptions[e] && 0 !== t.userOptions[e])
                    return t.userOptions[e] = t.model.get(e)
            }
            )),
            null == this.userOptions.gutter && (this.userOptions.gutter = this.defaultGutter()),
            this.userOptions
        }
        ,
        i.prototype.modelAttrs = ["columns", "interval", "overlay"],
        i.prototype.defaultGutter = function() {
            return this.noGutter() ? 0 : 20
        }
        ,
        i.prototype.noGutter = function() {
            return _u.contains(["image-grid", "hip", "living-wall"], this.model.get("css"))
        }
        ,
        i.prototype.determineBrowser = function() {
            var t, e;
            return t = navigator.userAgent.match(/MSIE|Trident|Edge/) ? "j-ie" : "j-modern",
            e = navigator.userAgent.match(/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i) ? "j-mobile" : "j-desktop",
            this.$el.addClass(t).addClass(e)
        }
        ,
        i.prototype.runAfter = function(t) {
            if (null == t && (t = "load"),
            void 0 !== this.userOptions.after)
                return window.runJuicerAfterCallback(t, this.userOptions.after)
        }
        ,
        i.prototype.dispatchFeedEvent = function(t) {
            return document.dispatchEvent(new CustomEvent("juicer:" + t,{
                detail: {
                    feed: {
                        id: this.model.get("id"),
                        name: this.model.get("name"),
                        slug: this.model.get("slug")
                    }
                }
            }))
        }
        ,
        i.prototype.showLoader = function(t, e) {
            return null == t && (t = !1),
            null == e && (e = !1),
            this.$el.append(this.loading({
                container: t,
                wrapper: e
            }))
        }
        ,
        i.prototype.hideLoader = function() {
            return this.$(".j-loading-container, .j-loading-wrapper, .j-loading").remove()
        }
        ,
        i.prototype.renderEntertainment = function() {
            return this.entertainment = new Juicer.Views.Entertainment(this.feedOptions())
        }
        ,
        i.prototype.renderAutoScroll = function() {
            return this.autoScroll = new Juicer.Views.AutoScroll(this.feedOptions()),
            this.renderFeedList()
        }
        ,
        i.prototype.renderWidget = function() {
            return this.widget = new Juicer.Views.Widget(this.feedOptions())
        }
        ,
        i.prototype.renderSlider = function() {
            return this.handleReferral(),
            this.slider = new Juicer.Views.Slider(this.feedOptions()).render(),
            this.slider.on("slide", (t = this,
            function() {
                return t.stopCurrentlyPlaying()
            }
            ));
            var t
        }
        ,
        i.prototype.renderLivingWall = function() {
            var t, e;
            return e = this.feedOptions(),
            "v2" === this.model.get("embed_layout") && (t = document.createElement("ul"),
            e.el = this.el.appendChild(t)),
            this.livingWall = new Juicer.Views.LivingWall(e).render(),
            this.handleReferral()
        }
        ,
        i.prototype.feedOptions = function() {
            return {
                columns: this.userOptions.columns,
                el: this.el,
                equal: this.userOptions.equal,
                gutter: this.userOptions.gutter,
                interval: this.userOptions.interval,
                isOnFeedsDashboard: this.isOnFeedsDashboard,
                visible: this.userOptions.visible,
                model: this.model
            }
        }
        ,
        i.prototype.renderFeedList = function() {
            return this.$el.append(this.template({
                isOnFeedsDashboard: this.isOnFeedsDashboard,
                feed: this.model,
                filter: this.currentFilter()
            })),
            this.handleReferral(),
            this.infiniteScroll = new Juicer.Views.InfiniteScroll({
                container: this.$el,
                isOnFeedsDashboard: this.isOnFeedsDashboard,
                model: this.model,
                pages: this.userOptions.pages,
                template: JST.infinite_scroll
            }),
            this.model.isGrid() && this.setupGrid(),
            this.model.autoScroll() && this.autoScroll.setupInfiniteScroll(),
            this.model.classic() && this.setGutterOnClassic(),
            this.infiniteScroll.on("paginate", (t = this,
            function() {
                return t.runAfter("paginate"),
                t.dispatchFeedEvent("feedPaginated"),
                null != t.lazyLoad && t.lazyLoad.checkImages(),
                t.handleBrokenImages()
            }
            ));
            var t
        }
        ,
        i.prototype.setupAccessibilityAttributes = function() {
            return this.$(".feed-item").attr("tabindex", "0").attr("aria-label", "Social media post"),
            this.$(".feed-item").find("a, input, button, select").attr("tabindex", "-1")
        }
        ,
        i.prototype.handleBrokenImages = function() {
            return new Juicer.Views.BrokenImage({
                el: this.el,
                feed: this.model
            })
        }
        ,
        i.prototype.currentFilter = function() {
            return null != this.model && null != this.model.filter ? this.model.filter : this.userOptions.filter
        }
        ,
        i.prototype.setDimensions = function() {
            if (this.$el.removeAttr("style"),
            this.dimensions["max-width"] = this.$el.data("width") || this.model.get("width") || this.model.defaultHeight(),
            this.dimensions["max-height"] = this.$el.data("height") || this.model.get("height") || this.model.defaultWidth(),
            !this.model.slider())
                return this.$el.css(this.dimensions)
        }
        ,
        i.prototype.dimensions = {
            "max-width": null,
            "max-height": null
        },
        i.prototype.addJuicerAds = function() {
            var t, e, r, i;
            return r = this.model.numberOfPostsPerOneAd(),
            t = this.model.get("posts").length + 1,
            (e = Math.floor(t / r)) > 0 && _u(e).times((i = this,
            function(t) {
                var e, n, s;
                return s = Math.floor(Math.random() * r),
                e = t * r + s,
                n = new Juicer.Models.JuicerAd({
                    feed: i.model
                }),
                i.model.get("posts").add(n, {
                    at: e
                })
            }
            )),
            this.adsAdded = !0,
            this.adRemovalReported = !1,
            this.currentInterval = 100,
            setTimeout(this.forceShowJuicerAds, this.currentInterval)
        }
        ,
        i.prototype.forceShowJuicerAds = function() {
            var t, e, r, i, n, s;
            return e = function(t) {
                return t.style.setProperty("display", "block", "important"),
                t.style.setProperty("visibility", "visible", "important"),
                t.style.setProperty("opacity", "1", "important")
            }
            ,
            s = this,
            n = function(t) {
                if (!window.juicerDashboard)
                    return s.adRemovalReported ? void 0 : (new Juicer.Models.AdReport(_u.extend(t, {
                        feed_id: s.model.get("id"),
                        url: window.location.href
                    })).save(),
                    s.adRemovalReported = !0)
            }
            ,
            i = (r = jQuery("h1.referral")).find("a"),
            0 !== r.length && 0 !== i.length || (this.handleReferral(),
            n({
                reason: "powered_by_header_removed"
            })),
            (r.is(":hidden") || i.is(":hidden")) && (e(r[0]),
            e(i[0]),
            n({
                reason: "powered_by_header_hidden"
            })),
            0 === (t = jQuery(".juicer-about")).length && n({
                reason: "ads_removed"
            }),
            t.each((function() {
                if (jQuery(this).is(":hidden"))
                    return e(this),
                    n({
                        reason: "ads_hidden"
                    })
            }
            )),
            this.currentInterval *= 2,
            setTimeout(this.forceShowJuicerAds, this.currentInterval)
        }
        ,
        i.prototype.addJuicerAlerts = function() {
            var t, e;
            if (this.model.get("show_trial_notifications") && (e = this,
            t = this.model.isTrial() ? "ends on " + this.model.get("trial_ends_at") : "ended",
            this.$(".feed-item.j-linkedin").each((function() {
                var r;
                return r = "Your LinkedIn Power-Up " + t + ": <a href='/plans?mpevent=post_notification_linkedin_ending' target='_blank'>Upgrade</a> to keep your feed active.",
                jQuery(this).append(e.postNotificationBanner({
                    content: r,
                    backgroundClass: "yellow"
                }))
            }
            )),
            this.$(".feed-item.j-x-twitter").each((function() {
                var r;
                return r = "Your X (Twitter) Power-Up " + t + ": <a href='/plans?mpevent=post_notification_x_twitter_ending' target='_blank'>Upgrade</a> to keep your feed active.",
                jQuery(this).append(e.postNotificationBanner({
                    content: r,
                    backgroundClass: "yellow"
                }))
            }
            )),
            this.$(".feed-item.j-instagram.j-stories").each((function() {
                var r;
                return r = "Your Instagram Stories Power-Up " + t + ": <a href='/plans?mpevent=post_notification_ig_stories_ending' target='_blank'>Upgrade</a> to keep your feed active.",
                jQuery(this).append(e.postNotificationBanner({
                    content: r,
                    backgroundClass: "yellow"
                }))
            }
            )),
            this.model.get("free_hashtags_disabled")))
                return this.$(".feed-item.j-hashtag").not(".j-twitter").not(".j-linkedin").each((function() {
                    var r;
                    return r = "Your Hashtag Power-Up " + t + ": <a href='/plans?mpevent=post_notification_hashtag_ending' target='_blank'>Upgrade</a> to keep your feed active.",
                    jQuery(this).append(e.postNotificationBanner({
                        content: r,
                        backgroundClass: "yellow"
                    }))
                }
                ))
        }
        ,
        i.prototype.setupGrid = function() {
            var t, e, r;
            if ((e = Math.floor(this.$el.outerWidth() / this.userOptions.columns)) < (t = window.devicePixelRatio > 2 ? 225 : 200) && (e = t),
            this.$el.gridalicious({
                animate: !0,
                selector: ".feed-item",
                width: e,
                gutter: this.userOptions.gutter,
                columns: this.userOptions.columns,
                embedLayout: this.model.get("embed_layout"),
                animationOptions: {
                    queue: !0,
                    speed: 100,
                    duration: 300,
                    complete: (r = this,
                    function() {
                        return null == r.infiniteScroll || (r.infiniteScroll.shouldShowLoadMore() ? void 0 : r.infiniteScroll.removeLoadMore())
                    }
                    )
                }
            }),
            this.model.get("lazy_load"))
                return this.lazyLoad = new Juicer.Views.LazyLoad({
                    model: this.model,
                    view: this
                })
        }
        ,
        i.prototype.setGutterOnClassic = function() {
            var t, e;
            return t = "2%",
            null == this.userOptions.gutter && (e = t),
            this.$(".feed-item").css("margin-bottom", e)
        }
        ,
        i.prototype.appendNextPage = function(t) {
            return null == t && (t = null),
            t && t.preventDefault(),
            this.$(".j-paginate").replaceWith(this.loading({
                inFeed: !0
            })),
            this.infiniteScroll.nextPage()
        }
        ,
        i.prototype.setClass = function() {
            if (this.$el.removeClass(Juicer.Constants.FEED_CLASSES.join(" ")),
            this.$el.removeClass(this.cssClasses),
            this.$el.addClass(this.model.cssClass()),
            this.model.slider() && (this.$el.attr("role", "region"),
            this.$el.attr("aria-label", "Carousel")),
            this.model.get("photos"))
                return this.$el.addClass("photos-only")
        }
        ,
        i.prototype.cssClasses = "photo photos-only juicer-widget gridalicious slick-initialized slick-slider modern ie colored-icons hover-images",
        i.prototype.handleReferral = function() {
            if (this.model.paid() || this.isOnFeedsDashboard || this.$el.find("h1.referral").length > 0 || this.$el.prepend(this.referral({
                feed: this.model
            })),
            this.model.paid())
                return this.$el.find("h1.referral").remove()
        }
        ,
        i.prototype.isCrawler = function(t) {
            return Juicer.Constants.CRAVLER_USER_AGENTS.some((function(e) {
                return -1 !== t.toLowerCase().indexOf(e)
            }
            ))
        }
        ,
        i.prototype.trackPageView = function() {
            if (!this.isCrawler(navigator.userAgent) && !this.tracked)
                return new Juicer.Models.PageView({
                    feed_id: this.model.get("id")
                }).save(),
                this.tracked = !0
        }
        ,
        i.prototype.shouldTrackAnalytics = function() {
            return !window.juicerDashboard
        }
        ,
        i.prototype.triggerEvent = function(t) {
            var e, r, i, n, s;
            if (s = jQuery(t.target),
            this.shouldTrackAnalytics() && this.trackClick(s),
            s.hasClass("delete"))
                return t.preventDefault(),
                this.deletePost(s);
            if (s.hasClass("cta-button"))
                ;
            else {
                if (s.hasClass("edit-cta"))
                    return r = function(t, e) {
                        return e.xhr.response.length > 0 ? jQuery("body").append(e.xhr.response) : htmx.ajax("GET", "/posts/" + s.parents("ul.actions").data("id") + "/cta/edit", {
                            target: "body",
                            swap: "beforeend"
                        })
                    }
                    ,
                    htmx.ajax("GET", "/paywall?source=cta&feed_id=" + this.model.get("id"), {
                        target: "body",
                        swap: "beforeend",
                        handler: r
                    });
                if (s.hasClass("sticky"))
                    return t.preventDefault(),
                    this.toggleSticky(s, "stick");
                if (s.hasClass("unstick"))
                    return t.preventDefault(),
                    this.toggleSticky(s, "un-stick");
                if (s.hasClass("edit"))
                    return new Juicer.Views.PostEdit({
                        id: s.parents("ul.actions").data("id"),
                        model: this.model
                    }).render();
                if (s.hasClass("copy-post-id"))
                    return t.preventDefault(),
                    Juicer.Views.Feed.copyPostId(t);
                if (s.hasClass("j-image") && s.parents("li.j-video").length > 0 && !this.model.get("video_overlay"))
                    return t.preventDefault(),
                    this.model.hasInterval() && this.userOptions.overlay || s.parents("li.j-tiktok").length > 0 ? (this.stopCurrentlyPlaying(),
                    this.userOptions.overlay ? this.openOverlay({
                        target: s
                    }) : (i = s.parents(".feed-item").data("id"),
                    n = this.model.get("posts").findWhere({
                        id: i
                    }),
                    window.open(n.link(), "_blank"))) : this.playVideo(s, s.parents("li.j-video"));
                if (s.hasClass("j-gallery-arrow"))
                    return t.preventDefault(),
                    new Juicer.Views.Gallery({
                        target: s,
                        el: this.el,
                        model: this.model
                    });
                if (s.parents(".j-twitter-intents").length > 0)
                    return t.preventDefault(),
                    this.handleTwitterIntent(s);
                if (s.parents(".feed-item.j-twitter").length > 0) {
                    if (!(s.is("a") || s.parents("a").length > 0))
                        return i = s.parents(".feed-item").data("id"),
                        n = this.model.get("posts").findWhere({
                            id: i
                        }),
                        window.open(n.link(), "_blank")
                } else {
                    if (s.is("a") && !s.hasClass("j-image") && 0 === s.parents("li.j-video").length)
                        return t.preventDefault(),
                        window.open(s.attr("href"), "_blank");
                    if (this.userOptions.overlay && !s.hasClass(".feed-item.juicer") && !s.parents(".feed-item.juicer").length > 0 && !s.parents(".feed-item.j-twitter").length > 0)
                        return t.preventDefault(),
                        this.stopCurrentlyPlaying(),
                        this.openOverlay({
                            target: s
                        });
                    if (s.is(".juicer-ad-cta") || s.parents(".juicer-ad-cta").length > 0)
                        return htmx.ajax("GET", "/paywall?source=dashboard_ads&feed_id=" + this.model.get("id"), {
                            target: "body",
                            swap: "beforeend",
                            handler: r
                        });
                    if (s.is(".juicer-about") || s.parents(".juicer-about").length > 0)
                        return t.preventDefault(),
                        e = s.is(".juicer-about") ? s : s.parents(".juicer-about"),
                        window.open(e.find("a").attr("href"), "_blank")
                }
            }
        }
        ,
        i.copyPostId = function(t) {
            var e, r;
            return e = (r = jQuery(t.target)).parents("ul.actions").data("id"),
            navigator.clipboard.writeText(e),
            r.text("Copied!"),
            setTimeout((function() {
                return r.text("Copy Post ID")
            }
            ), 2e3)
        }
        ,
        i.prototype.triggerEventByKeyboard = function(t) {
            if (13 === t.keyCode)
                return this.triggerEvent(t)
        }
        ,
        i.prototype.trackClick = function(t) {
            return t = t.is("li.feed-item") ? t : t.parents("li.feed-item"),
            new Juicer.Models.Click({
                feed_id: this.model.get("id"),
                post_id: t.data("id")
            }).save()
        }
        ,
        i.prototype.openOverlay = function(t) {
            var e;
            return this.postOverlay = new Juicer.Views.PostOverlay({
                target: t.target,
                model: this.model
            }),
            this.postOverlay.on("render", (e = this,
            function() {
                return e.runAfter("overlay"),
                e.dispatchFeedEvent("overlayRendered")
            }
            )),
            this.postOverlay.render()
        }
        ,
        i.prototype.deletePost = function(t) {
            var e;
            return !!Juicer.Helpers.confirm("Are you sure you want to delete this post?") && (t = t.parents("ul.actions"),
            e = new Juicer.Models.Post({
                id: t.data("id")
            }),
            t.parents(".feed-item").remove(),
            e.destroy())
        }
        ,
        i.prototype.toggleSticky = function(t, e) {
            var r, i, n;
            return null == e && (e = "stick"),
            t = t.parents("ul.actions"),
            i = new Juicer.Models.Post({
                id: t.data("id")
            }),
            r = {
                success: (n = this,
                function(t) {
                    return n.model.set(t, {
                        parse: !0
                    }),
                    n.model.trigger("action")
                }
                ),
                error: function() {
                    return alert("Something went wrong.")
                }
            },
            "stick" === e ? i.stick(r) : i.unstick(r)
        }
        ,
        i.prototype.openPopupOnError = function(t, e) {
            return this.hasVideoLoadingErrorOccurred ? (this.hasVideoLoadingErrorOccurred = !1,
            window.open(t)) : e > 0 ? setTimeout((r = this,
            function() {
                return r.openPopupOnError(t, e - 1)
            }
            ), 100) : void 0;
            var r
        }
        ,
        i.prototype.playVideo = function(t, e) {
            return (t = t.is(".j-image") ? t : t.parents(".j-image")).hasClass("playing") ? this.stopVideoAndResumeJuicerSlider(t) : (this.stopCurrentlyPlaying(),
            this.slider && this.slider.stop(),
            t.addClass("playing"),
            t.html(this.embedVideo(t.data("external-id"), e, t.data("video-url"))),
            setTimeout((r = this,
            function() {
                return r.openPopupOnError(jQuery(t).attr("href"), 29)
            }
            ), 100),
            jQuery(t).find("video source").on("error", function(e) {
                return function() {
                    return e.hasVideoLoadingErrorOccurred = !0,
                    e.stopVideoAndResumeJuicerSlider(t),
                    console.log("broken video in feed, stopping playback and redirecting to target url")
                }
            }(this)),
            null != this.slider ? this.slider.$el.slick("slickPause") : void 0);
            var r
        }
        ,
        i.prototype.stopVideo = function(t) {
            var e;
            return t.removeClass("playing"),
            null != this.slider && 0 !== this.userOptions.interval ? (e = "height:" + this.model.height() + "px",
            this.slider.$el.slick("slickPlay")) : e = "width:100%;display:block;",
            t.html("<img src='" + t.data("image") + "' style='" + e + "' />")
        }
        ,
        i.prototype.stopVideoAndResumeJuicerSlider = function(t) {
            if (this.stopVideo(t),
            this.slider && 0 !== this.userOptions.interval)
                return this.slider.play()
        }
        ,
        i.prototype.embedVideo = function(t, e, r) {
            var i, n;
            return null == r && (r = null),
            "tumblr" === (i = e.data("source")) && (r = this.parseTumblrVideo(e, r)),
            null != this.slider && (n = this.model.height()),
            JST["partials/video/_" + i + "_embed"]({
                id: t,
                video: r,
                height: n
            })
        }
        ,
        i.prototype.parseTumblrVideo = function(t, e) {
            var r, i;
            return (r = jQuery(jQuery.parseHTML(e))).removeAttr("id class width height poster preload data-crt-video data-crt-options"),
            r.attr("src") && (i = r.attr("src") + "&autoplay=1",
            r.attr("src", i)),
            window.setTimeout((function() {
                return t.find("video")[0].play()
            }
            ), 500),
            r[0].outerHTML
        }
        ,
        i.prototype.stopCurrentlyPlaying = function() {
            return _u.each(this.$(".playing"), (t = this,
            function(e) {
                return t.stopVideo(jQuery(e))
            }
            ));
            var t
        }
        ,
        i.prototype.handleTwitterIntent = function(t) {
            var e, r, i, n, s, o;
            return n = 550,
            e = 420,
            s = screen.height,
            o = screen.width,
            i = 0,
            r = Math.round(o / 2 - n / 2),
            s > e && (i = Math.round(s / 2 - e / 2)),
            window.open(t.attr("href"), "intent", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=" + n + ",height=" + e + ",top=" + i + ",left=" + r)
        }
        ,
        i.prototype.filterFeed = function(t) {
            var e, r;
            return t.preventDefault(),
            (e = jQuery(t.target)).attr("data-filter"),
            e.attr("class").replace("selected", "").replace(" ", ""),
            this.model.filter !== e.data("filter") && (this.model.filter = e.data("filter"),
            this.filter = e.data("filter"),
            this.model.resetPage(),
            this.model.fetch({
                success: (r = this,
                function() {
                    return r.$el.empty(),
                    r.infiniteScroll && r.infiniteScroll.close(),
                    r.render(),
                    r.delegateEvents()
                }
                )
            }))
        }
        ,
        i.prototype.close = function() {
            return this.unbindChildren(),
            this.$el.removeClass("j-initialized"),
            this.model.off("new-posts"),
            this.model.off("showLoader"),
            this
        }
        ,
        i.prototype.unbindChildren = function() {
            return null != this.widget && this.widget.close(),
            null != this.livingWall && this.livingWall.close(),
            null != this.infiniteScroll && this.infiniteScroll.close(),
            null != this.lazyLoad && this.lazyLoad.close(),
            null != this.slider && this.slider.off("slide"),
            this.$el.empty().off(),
            document.body.removeEventListener("jcr.rerenderfeed", this.reRenderFeedAfterEvent),
            this.stopListening()
        }
        ,
        i.prototype.reRender = function() {
            return this.unbindChildren(),
            this.render(),
            this.delegateEvents()
        }
        ,
        i.prototype.toggleAutoScroll = function(t) {
            var e;
            return e = new CustomEvent("togglePlay",{
                detail: {
                    forced_action: t
                }
            }),
            this.el.dispatchEvent(e)
        }
        ,
        i.prototype.updateAutoScrollInterval = function(t) {
            var e;
            return e = new CustomEvent("updateAutoScrollInterval",{
                detail: {
                    interval: t
                }
            }),
            this.el.dispatchEvent(e)
        }
        ,
        i
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
      , e = function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var n in e)
            r.call(e, n) && (t[n] = e[n]);
        return i.prototype = e.prototype,
        t.prototype = new i,
        t.__super__ = e.prototype,
        t
    }
      , r = {}.hasOwnProperty;
    Juicer.Views.Design = function(r) {
        function i() {
            return this.afterCssParsing = t(this.afterCssParsing, this),
            i.__super__.constructor.apply(this, arguments)
        }
        return e(i, r),
        i.prototype.template = JST["feeds/design"],
        i.prototype.colorPicker = JST["feeds/color_picker"],
        i.prototype.cssOverlay = JST["feeds/css_overlay"],
        i.prototype.title = "Feed Design",
        i.prototype.events = {
            "change #theme-selector": "updateStyle",
            "input input.width": "updateDimensions",
            "input input.height": "updateDimensions",
            "input input.columns": "updateColumns",
            "input input.interval": "updateInterval",
            "click .feed-color": "showColorPicker",
            "change .color-input": "updateColor",
            "input .hex-input": "updateColor",
            "click .save-style": "saveStyle",
            "click .reset-style": "resetStyle",
            "click .customize-css": "openCustomCssOverlay",
            "submit .css-form": "submitCssForm",
            "change input[type=checkbox]": "updateCheckbox",
            "click #reload-feed": "reloadFeed",
            "click #play-toggle": "togglePlay",
            "change select#autoscroll-interval": "updateAutoScrollInterval"
        },
        i.prototype.showColorPicker = function(t) {
            var e, r;
            return (r = $(t.target)).hasClass("feed-color") || (r = r.parents(".feed-color")),
            this.$(".color-fields").remove(),
            e = r.data("color"),
            r.after(this.colorPicker({
                color: this.feed.getColor(e),
                pattern: this.pattern,
                colorAttr: e
            }))
        }
        ,
        i.prototype.pattern = "^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$",
        i.prototype.render = function() {
            return i.__super__.render.apply(this, arguments),
            this.toggleSettings()
        }
        ,
        i.prototype.toggleSettings = function() {
            return this.toggleInterval(this.feed.hasInterval()),
            this.toggleColumns(this.feed.hasColumns())
        }
        ,
        i.prototype.toggleColumns = function(t) {
            return this.$(".columns").toggle(t)
        }
        ,
        i.prototype.toggleInterval = function(t) {
            return this.$(".interval").toggle(t)
        }
        ,
        i.prototype.saveAndRender = function() {
            return this.feed.trigger("showLoader"),
            this.feed.save(null, {
                success: (t = this,
                function() {
                    return t.feed.trigger("action"),
                    t.toggleSettings()
                }
                ),
                error: function() {
                    return alert("Something went wrong.")
                }
            });
            var t
        }
        ,
        i.prototype.updateCheckbox = function(t) {
            var e, r;
            return r = (e = $(t.target)).is(":checked") ? "1" : "0",
            this.feed.set(e.data("attribute"), r),
            this.saveAndRender()
        }
        ,
        i.prototype.updateColor = function(t) {
            var e, r, i, n;
            return !!(n = (i = $(t.target)).val()).match(this.pattern) && (r = i.hasClass("hex-input") ? ".color-input" : ".hex-input",
            this.$(r).val(n),
            e = i.parents(".color-fields").data("color"),
            this.$(".color-example, .feed-color[data-color='" + e + "'] .color-picker-circle").css({
                backgroundColor: n
            }),
            this.updateModel(e, n))
        }
        ,
        i.prototype.updateStyle = function(t) {
            var e;
            return e = $(t.target).val(),
            this.feed.set("css", e),
            this.saveAndRender(),
            this.autoScrollThemeCallbacks(e)
        }
        ,
        i.prototype.autoScrollThemeCallbacks = function(t) {
            if (this.toggleAutoScrollThemeControls(),
            "autoscroll" === t && !this.feed.get("autoscroll_theme_enabled?"))
                return this.paywallModal()
        }
        ,
        i.prototype.paywallModal = function() {
            var t;
            return t = function(t, e) {
                if (e.xhr.response.length > 0)
                    return jQuery("body").append(e.xhr.response)
            }
            ,
            htmx.ajax("GET", "/paywall?source=auto_scroll_theme&feed_id=" + this.feed.get("id"), {
                target: "body",
                swap: "beforeend",
                handler: t
            })
        }
        ,
        i.prototype.updateDimensions = function(t) {
            var e, r, i, n;
            if (n = (i = $(t.target)).val(),
            e = i.attr("class"),
            2 < (r = n.length) && r < 5 && 99 < n && n < 5001 || "" === n)
                return this.feed.set(e, n),
                this.saveAndRender()
        }
        ,
        i.prototype.updateColumns = function(t) {
            var e, r;
            if (0 < (e = (r = $(t.target).val()).length) && e < 2)
                return this.feed.set("columns", r),
                this.saveAndRender()
        }
        ,
        i.prototype.updateInterval = function(t) {
            var e, r;
            if (3 < (e = (r = $(t.target).val()).length) && e < 10 || "0" === r)
                return this.feed.set("interval", r),
                this.saveAndRender()
        }
        ,
        i.prototype.updateModel = function(t, e) {
            return this.feed.updateColor(t, e)
        }
        ,
        i.prototype.saveStyle = function(t) {
            return this.feed.save(null, {
                success: (e = this,
                function() {
                    return e.notifySuccess($(t.target))
                }
                ),
                error: function() {
                    return alert("Sorry your design didn't save properly. Please try again.")
                }
            });
            var e
        }
        ,
        i.prototype.resetStyle = function() {
            if (confirm("Are you sure you want to set your feed custom styles back to default?"))
                return this.feed.resetColors(),
                this.feed.save(null, {
                    success: (t = this,
                    function() {
                        return t.feed.trigger("action"),
                        t.render()
                    }
                    )
                });
            var t
        }
        ,
        i.prototype.notifySuccess = function(t) {
            return t.text("Saved!"),
            setTimeout((function() {
                return t.text("Save Custom Style")
            }
            ), 3e3)
        }
        ,
        i.prototype.openCustomCssOverlay = function() {
            return htmx.ajax("POST", "/track", {
                values: {
                    event_name: "feed_custom_css_opened",
                    properties: {
                        feed_id: this.feed.get("id")
                    }
                }
            }),
            this.overlay = new Juicer.Views.Overlay({
                content: this.cssOverlay({
                    feed: this.feed
                }),
                element: this.el,
                width: "50%"
            }),
            this.overlay.render()
        }
        ,
        i.prototype.submitCssForm = function(t) {
            var e;
            return t.preventDefault(),
            e = $(t.target).serializeHash(),
            $.parsecss(e.css, this.afterCssParsing)
        }
        ,
        i.prototype.afterCssParsing = function(t) {
            return this.feed.set("custom_css", this.stringifyCss(t)),
            this.feed.save(null, {
                success: (e = this,
                function() {
                    return e.overlay.removeView(),
                    e.feed.trigger("action")
                }
                ),
                error: function() {
                    return alert("Something went wrong")
                }
            });
            var e
        }
        ,
        i.prototype.stringifyCss = function(t) {
            var e;
            return e = "",
            _u.each(t, (function(t, r) {
                return e += r + " {\n",
                _u.each(t, (function(t, r) {
                    return e += "  " + r + ": " + t + ";\n"
                }
                )),
                e += "}\n\n"
            }
            )),
            e
        }
        ,
        i.prototype.reloadFeed = function() {
            return this.feed.trigger("action"),
            this.feedView.toggleAutoScroll("play")
        }
        ,
        i.prototype.togglePlay = function() {
            return this.feedView.toggleAutoScroll()
        }
        ,
        i.prototype.updateAutoScrollInterval = function(t) {
            return this.feedView.updateAutoScrollInterval($(t.target).val())
        }
        ,
        i.prototype.toggleAutoScrollThemeControls = function() {
            return "autoscroll" === this.feed.get("css") ? (this.feed.get("autoscroll_theme_enabled?") || $("#premium-theme-banner").show(),
            $("#autoscroll-theme-controls").show(),
            $(".autoscroll-premium-icon").show()) : ($("#premium-theme-banner").hide(),
            $("#autoscroll-theme-controls").hide(),
            $(".autoscroll-premium-icon").hide())
        }
        ,
        i
    }(Juicer.Views.SubView)
}
.call(this),
function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
      , e = function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var n in e)
            r.call(e, n) && (t[n] = e[n]);
        return i.prototype = e.prototype,
        t.prototype = new i,
        t.__super__ = e.prototype,
        t
    }
      , r = {}.hasOwnProperty;
    Juicer.Views.Embed = function(r) {
        function i() {
            return this.afterClose = t(this.afterClose, this),
            i.__super__.constructor.apply(this, arguments)
        }
        return e(i, r),
        i.prototype.embed = JST["feeds/embed_code"],
        i.prototype.template = JST["feeds/embed"],
        i.prototype.wordpress = JST["feeds/wordpress"],
        i.prototype.iframe = JST["feeds/iframe"],
        i.prototype.menu = JST["feeds/embed_menu"],
        i.prototype.title = "Embed in your Site",
        i.prototype.accessibilityConfirm = JST["feeds/accessibility_confirm"],
        i.prototype.accessibilityToggle = JST["feeds/accessibility_toggle"],
        i.prototype.initialize = function() {
            return i.__super__.initialize.apply(this, arguments),
            this.currentlySelected = "site"
        }
        ,
        i.prototype.embedOptions = [{
            value: "site",
            label: "Standard Website"
        }, {
            value: "wordpress",
            label: "Wordpress Site"
        }, {
            value: "iframe",
            label: "iframe"
        }],
        i.prototype.events = {
            "change .embed-menu": "switchEmbed",
            "focus textarea": "highlightField",
            "change #feed-layout-change": "upgradeLayout",
            "click .accessibility-confirm": "saveLayout",
            "click .accessibility-close": "closeAccessibilityConfirm"
        },
        i.prototype.afterClose = function() {
            return window.mixpanel && mixpanel.track("accessibility-modal", {
                action: "closed",
                feed: this.feed.get("slug")
            }),
            this.renderTemplate(),
            this.renderTitle()
        }
        ,
        i.prototype.closeAccessibilityConfirm = function(t) {
            return this.accessibilityOverlay.closeOverlay(t),
            this.afterClose()
        }
        ,
        i.prototype.upgradeLayout = function() {
            return "v2" === this.feed.get("embed_layout") ? this.saveLayout(null) : (window.mixpanel && mixpanel.track("accessibility-modal", {
                action: "opened",
                feed: this.feed.get("slug")
            }),
            $("#UpdateEmbedLayoutPopover").css("display", "none"),
            this.accessibilityOverlay = new Juicer.Views.Overlay({
                content: this.accessibilityConfirm({
                    feed: this.feed,
                    embedOptions: this.embedOptions,
                    currentlySelected: this.currentlySelected
                }),
                width: "50%",
                element: this.$el
            }),
            this.accessibilityOverlay.on("close", this.afterClose),
            this.accessibilityOverlay.render())
        }
        ,
        i.prototype.saveLayout = function(t) {
            var e, r;
            return e = "v2" === this.feed.get("embed_layout") ? "v1" : "v2",
            this.feed.set("embed_layout", e),
            this.feed.save(null, {
                success: (r = this,
                function() {
                    return r.accessibilityOverlay && t && r.accessibilityOverlay.closeOverlay(t),
                    r.renderTemplate(),
                    r.renderTitle(),
                    window.location.reload()
                }
                ),
                error: function() {
                    return alert("Something went wrong.")
                }
            })
        }
        ,
        i.prototype.switchEmbed = function(t) {
            return this.currentlySelected = $(t.target).val(),
            this.renderTemplate(),
            this.renderTitle()
        }
        ,
        i.prototype.renderTemplate = function() {
            return this.renderContent(),
            this.renderMenu()
        }
        ,
        i.prototype.renderContent = function(t, e) {
            switch (null == t && (t = this.$el),
            null == e && (e = null),
            this.currentlySelected) {
            case "wordpress":
                return this.showWordPress(t);
            case "iframe":
                return this.showIframe(t);
            default:
                return this.showEmbed(t, e)
            }
        }
        ,
        i.prototype.renderMenu = function() {
            var t;
            if (t = "v2" === this.feed.get("embed_layout"),
            this.$el.prepend(this.menu({
                feed: this.feed,
                embedOptions: this.embedOptions,
                currentlySelected: this.currentlySelected
            })),
            this.feed.get("allow_embed_layout_change?"))
                return this.$el.append(this.accessibilityToggle({
                    accessibility_checked: t
                }))
        }
        ,
        i.prototype.javascriptPath = function() {
            return this.assetPath("embed.js")
        }
        ,
        i.prototype.stylesheetPath = function() {
            return this.assetPath("embed.css")
        }
        ,
        i.prototype.assetPath = function(t) {
            return "https://assets.juicer.io/" + t
        }
        ,
        i.prototype.showEmbed = function(t, e) {
            var r;
            return r = (r = this.embed({
                feed: this.feed,
                javascript: this.javascriptPath(),
                javascriptV2Path: "https://www.juicer.io/embed/" + this.feed.get("slug") + "/embed-code.js",
                stylesheet: this.stylesheetPath(),
                overrideEmbedLayout: e
            })).replace(/<br \/>/g, "\n"),
            t.html(this.template({
                embed: r,
                feed: this.feed
            }))
        }
        ,
        i.prototype.showWordPress = function(t) {
            return t.html(this.wordpress({
                feed: this.feed
            }))
        }
        ,
        i.prototype.showIframe = function(t) {
            var e, r, i;
            return e = this.feed.get("height") || 1e3,
            i = this.feed.get("width") || 1e3,
            1e3 === e && this.feed.slider() && (e = 300),
            r = "<iframe src='https://www.juicer.io/api/feeds/" + this.feed.get("slug") + "/iframe' frameborder='0' width='" + i + "' height='" + e + "' style='display:block;margin:0 auto;'></iframe>",
            t.html(this.iframe({
                iframe: r,
                feed: this.feed
            }))
        }
        ,
        i.prototype.highlightField = function(t) {
            var e;
            if (e !== $(t.target))
                return e = $(t.target),
                setTimeout((function() {
                    return e.select()
                }
                ), 50)
        }
        ,
        i
    }(Juicer.Views.SubView)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.Features = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.template = JST["feeds/features"],
        r
    }(Juicer.Views.SubViewSlide)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.Hub = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.template = JST["feeds/hub"],
        r
    }(Juicer.Views.SubViewSlide)
}
.call(this),
function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
      , e = function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var n in e)
            r.call(e, n) && (t[n] = e[n]);
        return i.prototype = e.prototype,
        t.prototype = new i,
        t.__super__ = e.prototype,
        t
    }
      , r = {}.hasOwnProperty;
    Juicer.Views.Moderate = function(r) {
        function i() {
            return this.pollForRevalidating = t(this.pollForRevalidating, this),
            this.revalidatingPoll = t(this.revalidatingPoll, this),
            this.closeOverlay = t(this.closeOverlay, this),
            i.__super__.constructor.apply(this, arguments)
        }
        return e(i, r),
        i.prototype.template = JST["feeds/moderate"],
        i.prototype.revalidateOverlay = JST["feeds/revalidate_overlay"],
        i.prototype.title = "Moderate and Filter",
        i.prototype.initialize = function() {
            return i.__super__.initialize.apply(this, arguments),
            this.initialAttributes = _u.pick(this.feed.attributes, "lazy_load", "css")
        }
        ,
        i.prototype.render = function() {
            return i.__super__.render.apply(this, arguments),
            this.toggleFilterBlocker()
        }
        ,
        i.prototype.events = {
            "submit .filters": "openOverlay",
            "click .moderate-confirm": "submitConfirmation",
            "click .moderated": "viewModeratedPosts",
            "click .public": "showPublic",
            "change input#queue": "toggleAndSubmit"
        },
        i.prototype.showPublic = function(t) {
            return this.fetchFeed(),
            $(".moderation-nav .active").removeClass("active"),
            $(t.target).addClass("active")
        }
        ,
        i.prototype.viewModeratedPosts = function(t) {
            return t.preventDefault(),
            $(window).unbind("scroll"),
            this.renderModeratedPosts()
        }
        ,
        i.prototype.renderModeratedPosts = function() {
            return this.moderated = new Juicer.Models.Moderated({
                slug: this.feed.get("slug")
            }),
            $(".moderation-nav .active").removeClass("active"),
            $(".moderation-nav .moderated").addClass("active"),
            this.moderated.fetch({
                success: (t = this,
                function() {
                    return t.feedView && t.feedView.close(),
                    new Juicer.Views.Moderated({
                        el: ".juicer-feed",
                        model: t.moderated
                    }).render()
                }
                ),
                error: function() {
                    return alert("Something went wrong pulling in your moderated posts.")
                }
            });
            var t
        }
        ,
        i.prototype.openOverlay = function(t) {
            var e;
            return t.preventDefault(),
            e = $(t.target).serializeHash().feed,
            htmx.ajax("POST", "/track", {
                values: {
                    event_name: "moderation_save_started"
                }
            }),
            this.overlay = new Juicer.Views.Overlay({
                content: this.revalidateOverlay({
                    data: e
                }),
                element: this.el,
                width: "50%"
            }),
            this.overlay.render()
        }
        ,
        i.prototype.closeOverlay = function() {
            return this.overlay.removeView()
        }
        ,
        i.prototype.submitConfirmation = function(t) {
            var e, r;
            return t.preventDefault(),
            e = (r = $(t.target)).parents("form").serializeHash(),
            r.data("revalidate") ? (r.parents(".submits").html("<div class='j-loading'>Loading...</div><div class='mt-15 fifteen tc-gray'>Applying filter settings to existing posts. This can take a while. Please hold.</div>"),
            e.revalidating = !0,
            this.updateFilters(e, this.revalidatingPoll)) : (r.parents(".submits").html("<div class='j-loading'>Loading...</div>"),
            this.updateFilters(e, this.closeOverlay))
        }
        ,
        i.prototype.updateFilters = function(t, e) {
            return this.feed.set(t),
            this.feed.save(null, {
                success: function() {
                    return e()
                },
                error: function() {
                    return alert("Something went wrong!")
                }
            })
        }
        ,
        i.prototype.revalidatingPoll = function() {
            return setTimeout(this.pollForRevalidating, 5e3)
        }
        ,
        i.prototype.pollForRevalidating = function() {
            return this.feed.fetch({
                success: (t = this,
                function() {
                    return t.feed.get("revalidating") ? t.revalidatingPoll() : (t.closeOverlay(),
                    t.feed.trigger("action"))
                }
                ),
                error: function() {
                    return alert("Something happened with polling. Please refresh page.")
                }
            });
            var t
        }
        ,
        i.prototype.toggleAndSubmit = function() {
            if (this.toggleFilterBlocker(),
            this.queueChecked())
                return this.$("form").trigger("submit")
        }
        ,
        i.prototype.toggleFilterBlocker = function() {
            var t;
            return t = this.$(".filter-blocker"),
            this.queueChecked() ? t.show() : t.hide()
        }
        ,
        i.prototype.queueChecked = function() {
            return this.$("#queue").is(":checked")
        }
        ,
        i.prototype.close = function(t) {
            if (null == t && (t = null),
            null != t && t.preventDefault(),
            $("li.selected").removeClass("selected"),
            i.__super__.close.apply(this, arguments),
            null != this.moderated)
                return this.fetchFeed()
        }
        ,
        i.prototype.fetchFeed = function() {
            return this.feed.set(this.initialAttributes),
            this.feed.moderated ? window.location = "/feeds/" + this.feed.get("slug") : this.feed.fetch({
                success: (t = this,
                function() {
                    return t.feed.trigger("action")
                }
                )
            });
            var t
        }
        ,
        i
    }(Juicer.Views.SubView)
}
.call(this),
function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
      , e = function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var n in e)
            r.call(e, n) && (t[n] = e[n]);
        return i.prototype = e.prototype,
        t.prototype = new i,
        t.__super__ = e.prototype,
        t
    }
      , r = {}.hasOwnProperty;
    Juicer.Views.Settings = function(r) {
        function i() {
            return this.reRender = t(this.reRender, this),
            i.__super__.constructor.apply(this, arguments)
        }
        return e(i, r),
        i.prototype.template = JST["feeds/settings"],
        i.prototype.title = "Feed Settings",
        i.prototype.events = {
            "click #hide_ads_checkbox": "handleHideAdsCheckbox",
            "change input[type=checkbox]": "updateCheckbox",
            "change .order": "updateOrder",
            "change .filter_setting": "updateFilter",
            "focus input[type=number]": "highlightField"
        },
        i.prototype.render = function() {
            return i.__super__.render.apply(this, arguments),
            this.toggleSettings()
        }
        ,
        i.prototype.toggleSettings = function() {
            return this.toggleFilter(!this.feed.hasInterval())
        }
        ,
        i.prototype.toggleFilter = function(t) {
            return this.$(".filter_setting").toggle(t)
        }
        ,
        i.prototype.renderTemplate = function() {
            return this.$el.html(this.template({
                feed: this.feed,
                checkboxes: this.checkboxes
            }))
        }
        ,
        i.prototype.reRender = function() {
            return this.$el.html(this.template({
                feed: this.feed,
                checkboxes: this.checkboxes
            })),
            this.renderTitle(),
            this.toggleSettings()
        }
        ,
        i.prototype.checkboxes = [{
            attr: "photos",
            label: "Only show posts with images"
        }, {
            attr: "videos",
            label: "Only show posts with videos"
        }, {
            attr: "lazy_load",
            label: "Lazy-load images",
            tooltip: "Won't load images until they are scrolled to on your site. This will save on bandwidth and decrease page load time. Only use if Juicer feed is below the fold."
        }, {
            attr: "overlay",
            label: "Open overlay on post click",
            tooltip: "With this box checked, when you click on a post it will open in an overlay view with the post larger and sharing icons. Otherwise it will link directly to the post."
        }, {
            attr: "video_overlay",
            label: "Only play videos in overlay",
            tooltip: "With this box checked, videos will open in an overlay and play. If not checked, the videos will play inline in the feed."
        }, {
            attr: "infinite_scroll",
            label: "Infinite Scroll",
            tooltip: 'If you scroll to the bottom of your Juicer feed, automatically load in more posts. If not, you\'ll see a "Load More" button instead'
        }, {
            attr: "poll",
            label: "Auto-Refresh for Live Events",
            tooltip: "Refreshes the feed automatically when new posts are imported. Great for using on a display at a live event."
        }, {
            attr: "hide_title_on_hub_page",
            label: "Hide title on hub page",
            tooltip: "Hides title on feeds hub page"
        }],
        i.prototype.updateCheckbox = function(t) {
            var e, r;
            return r = (e = $(t.target)).is(":checked") ? "1" : "0",
            this.feed.set(e.data("attribute"), r),
            this.saveAndRender()
        }
        ,
        i.prototype.handleHideAdsCheckbox = function(t) {
            if (t.preventDefault(),
            !$("#hide_ads").is(":checked"))
                return htmx.ajax("GET", "/paywall?source=dashboard_ads&feed_id=" + this.feed.get("id"), {
                    target: "body",
                    swap: "beforeend"
                })
        }
        ,
        i.prototype.updateOrder = function(t) {
            return this.feed.set("order", $(t.target).val()),
            this.saveAndRender()
        }
        ,
        i.prototype.updateFilter = function(t) {
            return this.feed.set("display_filter", $(t.target).val()),
            this.saveAndRender()
        }
        ,
        i.prototype.saveAndRender = function() {
            return this.feed.trigger("showLoader"),
            this.feed.save(null, {
                success: (t = this,
                function() {
                    return t.feed.trigger("action")
                }
                ),
                error: function() {
                    return alert("Something went wrong.")
                }
            });
            var t
        }
        ,
        i.prototype.highlightField = function(t) {
            var e;
            if (e !== $(t.target))
                return e = $(t.target),
                setTimeout((function() {
                    return e.select()
                }
                ), 50)
        }
        ,
        i
    }(Juicer.Views.SubView)
}
.call(this),
function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
      , e = function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var n in e)
            r.call(e, n) && (t[n] = e[n]);
        return i.prototype = e.prototype,
        t.prototype = new i,
        t.__super__ = e.prototype,
        t
    }
      , r = {}.hasOwnProperty;
    Juicer.Views.Sources = function(r) {
        function i() {
            return this.reRender = t(this.reRender, this),
            this.sort = t(this.sort, this),
            i.__super__.constructor.apply(this, arguments)
        }
        return e(i, r),
        i.prototype.template = JST["feeds/sources"],
        i.prototype.title = "Social Media Sources",
        i.prototype.render = function(t) {
            if (i.__super__.render.apply(this, arguments),
            jQuery(".juicer-feed").hasClass("j-modern"))
                return sortable(".source-list", {
                    items: ".existing-source",
                    forcePlaceholderSize: !0
                })[0].addEventListener("sortupdate", this.sort)
        }
        ,
        i.prototype.events = {
            "click .delete": "removeSource",
            "click .source-submenu-item": "openSourceOverlay",
            "click .rename": "openSourceEditOverlay",
            "click .moderate": "openSourceModerateOverlay",
            "submit #manual_post": "addPostManually",
            "submit .source-update": "updateSource",
            "click .existing-source .js-warning": "handleWarningClick",
            "click .existing-source": "toggleSubMenu",
            "click .js-add-source-submenu:not(.disabled)": "openSourceForm"
        },
        i.prototype.handleWarningClick = function(t) {
            return t.stopPropagation(),
            jQuery("body").html("<div class='d-flex' style='background:white; height:100vh; width: 100vw; align-items: center; justify-content: center'><div class='j-loading'></div></div>")
        }
        ,
        i.prototype.removeSource = function(t) {
            var e, r, i;
            if (t.preventDefault(),
            r = $(t.target),
            Juicer.Helpers.confirm("Confirm source deletion?\nThis action will permanently delete all posts from your Juicer feed.\nNote: Re-adding the source may not retrieve all posts."))
                return e = r.data("id"),
                new Juicer.Models.Source({
                    id: e
                }).destroy({
                    success: (i = this,
                    function(t, n) {
                        return i.feed.set(n, {
                            parse: !0
                        }),
                        $(".existing-source[data-id='" + e + "']").remove(),
                        "htmx" === i.feed.get("version") && window.juicerUtil.updateSidebarSourcesMenu(),
                        r.parents(".source-submenu").remove(),
                        i.feed.trigger("action")
                    }
                    ),
                    error: function() {
                        return alert("uh oh, something went wrong.")
                    }
                })
        }
        ,
        i.prototype.openSourceForm = function() {
            return this.trigger("openSourceForm", this)
        }
        ,
        i.prototype.openSourceOverlay = function(t) {
            var e, r, i, n, s, o;
            return t.preventDefault(),
            n = $(t.target),
            i = this.feed.get("sources").findWhere({
                id: n.data("id")
            }),
            s = n.data("template"),
            o = this,
            r = function() {
                return o.overlay = new Juicer.Views.Overlay({
                    content: JST["sources/" + s]({
                        source: i,
                        feed: o.feed
                    }),
                    width: "50%",
                    element: o.el
                }),
                o.overlay.render()
            }
            ,
            "manual" === s ? (e = function(t, e) {
                return e.xhr.response.length > 0 ? jQuery("body").append(e.xhr.response) : r()
            }
            ,
            htmx.ajax("GET", "/paywall?source=manual_add_post&feed_id=" + this.feed.get("id"), {
                target: "body",
                swap: "beforeend",
                handler: e
            })) : r()
        }
        ,
        i.prototype.addPostManually = function(t) {
            var e, r, i;
            return t.preventDefault(),
            (r = $(t.target)).find(".j-loading-wrapper").html("<div class='j-loading'>Loading...</div>"),
            r.find(".j-button").attr("disabled", !0),
            r.find("ul.errors").remove(),
            e = r.serializeHash(),
            this.post = new Juicer.Models.Post(e),
            this.post.save(null, {
                success: (i = this,
                function(t, e) {
                    return i.feed.set(e, {
                        parse: !0
                    }),
                    i.reRender(),
                    i.feed.trigger("action")
                }
                ),
                error: function(t, e) {
                    return r.find(".j-button").attr("disabled", !1),
                    new Juicer.Views.Errors({
                        el: r,
                        errors: e
                    })
                }
            })
        }
        ,
        i.prototype.updateSource = function(t) {
            var e, r;
            return t.preventDefault(),
            e = $(t.target).serializeHash(),
            this.source = new Juicer.Models.Source(e),
            this.source.save(null, {
                success: (r = this,
                function(t, e) {
                    return r.feed.set(e, {
                        parse: !0
                    }),
                    r.reRender(),
                    r.feed.trigger("action")
                }
                ),
                error: function() {
                    return alert("Something went wrong.")
                }
            })
        }
        ,
        i.prototype.sort = function(t) {
            var e;
            return e = _u.map($(t.target).find(".existing-source"), (function(t) {
                return $(t).data("id")
            }
            )),
            this.feed.set({
                source_ids: e
            }),
            this.saveAndRender()
        }
        ,
        i.prototype.reRender = function() {
            return this.sidebarView.renderSidebar()
        }
        ,
        i.prototype.toggleSubMenu = function(t) {
            var e;
            return (e = jQuery(t.target)).hasClass("existing-source") || (e = e.parents(".existing-source")),
            e.next(".source-submenu").slideToggle(),
            e.toggleClass("open")
        }
        ,
        i.prototype.saveAndRender = function() {
            return this.feed.trigger("showLoader"),
            this.feed.save(null, {
                success: (t = this,
                function() {
                    return t.feed.set({
                        source_ids: null
                    }),
                    t.feed.trigger("action")
                }
                )
            });
            var t
        }
        ,
        i
    }(Juicer.Views.SubView)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.Synced = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.template = JST["feeds/synced"],
        r
    }(Juicer.Views.SubViewSlide)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.ChurnForm = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.namespace = "churn",
        r.prototype.createModel = function() {
            return new JuicerBackbone.Model
        }
        ,
        r
    }(Juicer.Views.FormView)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.FeedForm = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.namespace = "feed",
        r.prototype.createModel = function() {
            return new Juicer.Models.FeedValidation
        }
        ,
        r
    }(Juicer.Views.FormView)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.UserForm = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.namespace = "user",
        r.prototype.createModel = function() {
            return new Juicer.Models.UserValidation
        }
        ,
        r
    }(Juicer.Views.FormView)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.UserSignupForm = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.namespace = "user",
        r.prototype.createModel = function() {
            return new Juicer.Models.UserSignupValidation
        }
        ,
        r
    }(Juicer.Views.FormView)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.UserUpdateForm = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.namespace = "user",
        r.prototype.createModel = function() {
            var t;
            return t = {
                email: $("#user_email").val(),
                noPassword: $("#user_password").length < 1,
                passwordAlreadyUpdated: $("#user_password_updated").val(),
                signedUpWithSocialAccount: $("#user_signed_up_with_social_account").val()
            },
            new Juicer.Models.UserUpdateValidation(t)
        }
        ,
        r
    }(Juicer.Views.FormView)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.Gallery = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.initialize = function(t) {
            var e, r, i, n, s, o, a, c;
            if (e = (n = (c = t.target).parents(".j-gallery")).data("id"),
            o = this.model.get("posts").findWhere({
                id: e
            }),
            r = n.find(".j-image img"),
            a = r.attr("src"),
            -1 === (i = (s = JSON.parse(JSON.stringify(o.get("media")))).findIndex((function(t) {
                return t.image === a
            }
            ))) && (i = 0),
            c.hasClass("j-gallery-next") ? i += 1 : c.hasClass("j-gallery-previous") && (i -= 1),
            i >= s.length && (i = 0),
            i < 0 && (i = s.length - 1),
            r.attr("src", s[i].image),
            s[i].alt_text)
                return r.attr("alt", s[i].alt_text)
        }
        ,
        r
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.GdprOverlay = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.template = JST.gdpr_form,
        r.prototype.initialize = function() {
            return this.overlay = new Juicer.Views.Overlay({
                content: this.template(),
                element: this.el,
                width: "50%"
            }),
            this.overlay.render()
        }
        ,
        r
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.Home = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.initialize = function() {
            return this.$("input").placeholder(),
            new Juicer.Views.HomeSlider({
                el: ".js-features"
            })
        }
        ,
        r.prototype.events = {
            "click .show": "renderExample",
            "change select": "reRenderFeed",
            "click .hide-feed": "hideFeed"
        },
        r.prototype.renderExample = function(t) {
            var e, r;
            return t.preventDefault(),
            (e = jQuery(t.target)).html("Loading..."),
            this.model = new Juicer.Models.Feed({
                slug: "juicer",
                per: 16,
                order: "random"
            }),
            this.model.fetch({
                success: (r = this,
                function() {
                    return r.renderFeed(),
                    jQuery(".style-picker").css("display", "inline-block"),
                    jQuery(".hide-feed").show(),
                    e.hide()
                }
                ),
                error: function() {
                    return console.log("Example did not load!")
                }
            })
        }
        ,
        r.prototype.reRenderFeed = function(t) {
            var e, r, i;
            return this.$(".juicer-feed").remove(),
            r = "v2" === this.model.get("embed_layout") ? "<div class='juicer-feed' data-pages='1'></div>" : "<ul class='juicer-feed' data-pages='1'></ul>",
            this.$(".js-juicer-example .container-fluid").append(r),
            i = jQuery(t.target).val(),
            e = this.map(i),
            this.model.set(e),
            this.renderFeed()
        }
        ,
        r.prototype.renderFeed = function() {
            return new Juicer.Views.Feed({
                el: ".juicer-feed",
                model: this.model
            }).render()
        }
        ,
        r.prototype.hideFeed = function(t) {
            return t.preventDefault(),
            this.$(".juicer-feed").html(""),
            jQuery(".style-picker").hide(),
            jQuery(t.target).hide(),
            this.$(".show").show().html("Show me an example feed!")
        }
        ,
        r.prototype.map = function(t) {
            switch (t) {
            case "classic":
                return {
                    css: "classic",
                    photos: !1
                };
            case "white":
                return {
                    css: "white",
                    photos: !1
                };
            case "widget":
                return {
                    css: "widget",
                    photos: !1
                };
            case "colored-icons":
                return {
                    css: "colored-icons",
                    photos: !1
                };
            case "gray":
                return {
                    css: "gray",
                    photos: !1
                };
            case "slider":
                return {
                    css: "slider",
                    photos: !0
                };
            case "user":
                return {
                    css: "user",
                    photos: !1
                };
            case "hip":
                return {
                    css: "hip",
                    photos: !1
                };
            case "living-wall":
                return {
                    css: "living-wall",
                    photos: !1
                };
            case "modern":
                return {
                    css: "modern",
                    photos: !1
                };
            case "polaroid":
                return {
                    css: "polaroid",
                    photos: !1
                };
            case "night":
                return {
                    css: "night",
                    photos: !1
                };
            default:
                return {
                    css: "image-grid",
                    photos: !0
                }
            }
        }
        ,
        r
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.HomeSlider = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.item = ".explainer-list-item",
        r.prototype.initialize = function() {
            return this.activate(this.$(this.item).first())
        }
        ,
        r.prototype.events = {
            "mouseenter .explainer-list-item": "toggleSlider",
            "click .explainer-list-item": "toggleSlider"
        },
        r.prototype.toggleSlider = function(t) {
            var e;
            if ((e = this.$(t.target)).is(this.item) || (e = e.parents(this.item)),
            !e.hasClass("active"))
                return this.activate(e)
        }
        ,
        r.prototype.activate = function(t) {
            var e, r;
            return r = t.data("slide"),
            this.$(".explainer-list-item.active").removeClass("active"),
            t.addClass("active"),
            e = this.$(".slider-images ." + r),
            this.$(".slider-images .active").removeClass("active"),
            e.addClass("active")
        }
        ,
        r
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
      , e = function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var n in e)
            r.call(e, n) && (t[n] = e[n]);
        return i.prototype = e.prototype,
        t.prototype = new i,
        t.__super__ = e.prototype,
        t
    }
      , r = {}.hasOwnProperty;
    Juicer.Views.ImageHandler = function(r) {
        function i() {
            return this.levelGridHeight = t(this.levelGridHeight, this),
            i.__super__.constructor.apply(this, arguments)
        }
        return e(i, r),
        i.prototype.initialize = function(t) {
            return null == t && (t = {}),
            this.image = this.$(t.target),
            this.feedItem = this.image.parents(".feed-item"),
            this.postId = this.feedItem.data("id"),
            this.theme = t.theme,
            this.feed = t.feed,
            this.el = t.el || null,
            this.testRefreshed = t.testRefreshedImages || !1,
            this.handeBrokenImage()
        }
        ,
        i.prototype.handeBrokenImage = function() {
            return !this.postId || "facebook" !== this.feedItem.data("source") || this.image.attr("src").match(Juicer.Constants.BASE_URL) ? this.invokeFallback() : (this.image.attr("src", Juicer.Constants.BASE_URL + "/api/posts/" + this.postId + "/image"),
            this.testRefreshed ? this.testImage() : void 0)
        }
        ,
        i.prototype.testImage = function() {
            return imagesLoaded(this.image).on("fail", function() {
                return this.invokeFallback()
            }
            .bind(this))
        }
        ,
        i.prototype.invokeFallback = function() {
            switch (this.theme) {
            case "widget":
            case "slider":
            case "entertainment":
            case "autoscroll":
                this.convertToText();
                break;
            case "livingWall":
                this.removeImage();
                break;
            default:
                this.tryConvertingThenHide()
            }
            if (i.reportInvalidImage(this.postId, "content", "feed"),
            this.feed.isGrid() && this.el)
                return this.levelGridHeight()
        }
        ,
        i.prototype.tryConvertingThenHide = function() {
            if (!this.feed.get("photos") || !this.feed.get("isOnFeedsDashboard"))
                return this.feedItem.find(".j-message").length > 0 ? this.convertToText() : this.hidePost()
        }
        ,
        i.prototype.convertToText = function() {
            var t;
            return this.logFallback("Converting to a text post."),
            (t = this.image.parents(".feed-item")).removeClass("image-post").removeClass("j-video").addClass("words"),
            t.find(".j-image").remove()
        }
        ,
        i.prototype.hidePost = function() {
            return this.logFallback("Hiding the post."),
            this.image.parents(".feed-item").hide()
        }
        ,
        i.prototype.hideImage = function() {
            return this.logFallback("Hiding the image."),
            this.image.hide()
        }
        ,
        i.prototype.removeImage = function() {
            return this.logFallback("Removing the image."),
            this.image.remove()
        }
        ,
        i.prototype.logFallback = function(t) {
            var e;
            return e = this.feedItem.data("source"),
            console.log("Juicer: " + e + " post with id " + this.postId + " has a broken image. " + t)
        }
        ,
        i.prototype.levelGridHeight = function() {
            var t, e, r, i, n, s, o;
            if (o = this.el.querySelectorAll(".j-stack"),
            s = {},
            t = 0,
            o.forEach((function(e, r) {
                var i, n;
                if (n = e.querySelectorAll("li.feed-item"),
                i = Array.from(e.querySelectorAll("li.feed-item")).reduce((function(t, e) {
                    return t + e.clientHeight
                }
                ), 0),
                s[r] = i,
                n.length > 0 && 0 === t)
                    return t = i / n.length
            }
            )),
            e = Object.entries(s).reduce((function(t, e) {
                return t[1] > e[1] ? t : e
            }
            ))[0],
            n = Object.entries(s).reduce((function(t, e) {
                return t[1] < e[1] ? t : e
            }
            ))[0],
            i = 0,
            r = function() {
                var a;
                if (e = Object.entries(s).reduce((function(t, e) {
                    return t[1] > e[1] ? t : e
                }
                ))[0],
                n = Object.entries(s).reduce((function(t, e) {
                    return t[1] < e[1] ? t : e
                }
                ))[0],
                s[e] - s[n] > 1.5 * t && i < 20)
                    return a = o[e].querySelector("li.feed-item:last-child"),
                    o[n].appendChild(a),
                    s[e] -= a.clientHeight,
                    s[n] += a.clientHeight,
                    i += 1,
                    r()
            }
            ,
            s[e] - s[n] > 1.5 * t)
                return r()
        }
        ,
        i.reportInvalidImage = function(t, e, r) {
            if (t)
                return jQuery.get(Juicer.Constants.BASE_URL + "/api/posts/" + t + "/images/invalidate", {
                    type: e,
                    source: r
                })
        }
        ,
        i
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
      , e = function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var n in e)
            r.call(e, n) && (t[n] = e[n]);
        return i.prototype = e.prototype,
        t.prototype = new i,
        t.__super__ = e.prototype,
        t
    }
      , r = {}.hasOwnProperty;
    Juicer.Views.InfiniteScroll = function(r) {
        function i() {
            return this.checkForPagination = t(this.checkForPagination, this),
            i.__super__.constructor.apply(this, arguments)
        }
        return e(i, r),
        i.prototype.el = function() {
            return this.model.hasHeight() ? ".juicer-feed" : window
        }
        ,
        i.prototype.initialize = function(t) {
            if (this.template = t.template || JST["partials/_moderated_posts"],
            this.container = t.container,
            this.isOnFeedsDashboard = t.isOnFeedsDashboard || !1,
            this.posts = this.model.get("posts"),
            this.pages = _u.min([t.pages, 1e3]),
            this.stopped = this.pages < 2 || this.limitReached(),
            this.shouldInfinitelyScroll())
                return this.$el.on("scroll.juicerInfiniteScroll", _u.debounce(this.checkForPagination, 300))
        }
        ,
        i.prototype.limitReached = function() {
            return this.lessThanLimit() || this.setPagesLimit()
        }
        ,
        i.prototype.lessThanLimit = function() {
            return this.posts.length < this.posts.limit_value
        }
        ,
        i.prototype.setPagesLimit = function() {
            return this.posts.current_page >= this.pages
        }
        ,
        i.prototype.removeLoadMore = function() {
            return jQuery(".j-paginate").remove()
        }
        ,
        i.prototype.checkForPagination = function() {
            if (this.scrollPoint() > this.triggerPoint() && !this.stopped)
                return this.nextPage()
        }
        ,
        i.prototype.shouldInfinitelyScroll = function() {
            return this.model.get("infinite_scroll") && !this.stopped
        }
        ,
        i.prototype.shouldShowLoadMore = function() {
            return !this.model.get("infinite_scroll") && !this.stopped
        }
        ,
        i.prototype.nextPage = function() {
            return this.stop(),
            this.model.nextPage(),
            this.model.fetch({
                remove: !1,
                success: (t = this,
                function(e, r) {
                    return t.appendPosts(r),
                    t.trigger("paginate")
                }
                ),
                error: function() {
                    return console.log("Juicer Infinite Scroll Problem.")
                }
            });
            var t
        }
        ,
        i.prototype.appendPosts = function(t) {
            var e, r;
            if (jQuery(".j-loading, .j-loading-wrapper").remove(),
            r = new Juicer.Models.Feed(t,{
                parse: !0
            }),
            this.posts = r.get("posts"),
            this.posts.length > 0 && (e = jQuery(this.template({
                isOnFeedsDashboard: this.isOnFeedsDashboard,
                feed: r
            }))),
            this.model.isGrid() ? this.container.gridalicious("append", e) : this.container.append(e),
            this.limitReached() || this.start(),
            !this.shouldShowLoadMore())
                return this.removeLoadMore()
        }
        ,
        i.prototype.scrollPoint = function() {
            return this.$el.scrollTop() + 2 * this.$el.outerHeight()
        }
        ,
        i.prototype.triggerPoint = function() {
            return this.model.hasHeight() ? this.container.prop("scrollHeight") : this.container.offset().top + this.container.outerHeight()
        }
        ,
        i.prototype.start = function() {
            return this.stopped = !1
        }
        ,
        i.prototype.stop = function() {
            return this.stopped = !0
        }
        ,
        i.prototype.close = function() {
            return this.$el.empty().off("scroll.juicerInfiniteScroll"),
            this.model.resetPage(),
            this.stopListening(),
            this
        }
        ,
        i
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
      , e = function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var n in e)
            r.call(e, n) && (t[n] = e[n]);
        return i.prototype = e.prototype,
        t.prototype = new i,
        t.__super__ = e.prototype,
        t
    }
      , r = {}.hasOwnProperty;
    Juicer.Views.LazyLoad = function(r) {
        function i() {
            return this.checkImages = t(this.checkImages, this),
            i.__super__.constructor.apply(this, arguments)
        }
        return e(i, r),
        i.prototype.el = window,
        i.prototype.initialize = function(t) {
            return this.view = t.view,
            this.$el.on("scroll", _u.debounce(this.checkImages, _u.random(250, 350))),
            this.model.hasHeight() && this.feed().on("scroll", _u.debounce(this.checkImages, _u.random(250, 350))),
            this.checkImages()
        }
        ,
        i.prototype.checkImages = function() {
            return _u.each(this.view.$el.find("img[data-lazy]:not([src])"), (t = this,
            function(e) {
                if ((e = jQuery(e)).offset().top < t.scrollPoint(t.$el) && e.attr("src", e.data("lazy")),
                t.model.hasHeight() && e.offset().top < t.scrollPoint(t.feed()))
                    return e.attr("src", e.data("lazy"))
            }
            ));
            var t
        }
        ,
        i.prototype.scrollPoint = function(t) {
            return t.scrollTop() + t.height() + 500
        }
        ,
        i.prototype.feed = function() {
            return jQuery(".juicer-feed")
        }
        ,
        i.prototype.close = function() {
            return this.$el.off("scroll"),
            this.feed().off("scroll")
        }
        ,
        i
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
      , e = function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var n in e)
            r.call(e, n) && (t[n] = e[n]);
        return i.prototype = e.prototype,
        t.prototype = new i,
        t.__super__ = e.prototype,
        t
    }
      , r = {}.hasOwnProperty;
    Juicer.Views.LivingWall = function(r) {
        function i() {
            return this.rotatePost = t(this.rotatePost, this),
            this.imageHandler = t(this.imageHandler, this),
            this.brokenImageCallback = t(this.brokenImageCallback, this),
            i.__super__.constructor.apply(this, arguments)
        }
        return e(i, r),
        i.prototype.template = JST["partials/feeds/_wall"],
        i.prototype.customCss = JST["partials/_custom_styles"],
        i.prototype.initialize = function(t) {
            return this.columns = t.columns,
            this.equal = t.equal,
            this.gutter = t.gutter,
            this.interval = t.interval,
            this.isOnFeedsDashboard = t.isOnFeedsDashboard,
            this.visible = t.visible,
            0 === this.interval && (this.interval = 5e7),
            this.defaultColumns = this.columns,
            this.gutter || (this.gutter = 0),
            this.setSizes(),
            jQuery(window).on("resize", _u.debounce((e = this,
            function() {
                return e.resize()
            }
            ), 300));
            var e
        }
        ,
        i.prototype.setSizes = function() {
            var t;
            return this.handleResponsiveColumns(),
            t = this.gutter * (2 * this.columns - 1),
            this.width = this.$el.width() - t,
            this.small = this.width / (2 * this.columns),
            this.$el.hasClass("j-ie") && (this.small = Math.floor(this.small - this.columns - 1)),
            this.large = 2 * this.small + this.gutter,
            this.retryTimes = 0
        }
        ,
        i.prototype.handleResponsiveColumns = function() {
            return this.windowWidth = this.$el.width(),
            this.windowWidth < 400 ? this.columns = 1 : this.windowWidth < 600 ? this.columns = 2 : this.windowWidth < 900 ? this.columns = 3 : this.columns = this.defaultColumns
        }
        ,
        i.prototype.render = function() {
            var t, e, r, i;
            return t = 8 * this.columns,
            this.setLargeCount(),
            this.smallCount = t - 4 * this.largeCount,
            this.total = this.largeCount + this.smallCount,
            this.visible > this.total && (this.visible = this.total),
            r = _u.map(this.initialPosts(), (i = this,
            function(t) {
                var e;
                return (e = i.renderPost(t)).find("img").on("error", function(t) {
                    var e;
                    return e = jQuery(t.target),
                    this.imageHandler({
                        target: e,
                        feed: this.model,
                        theme: "livingWall",
                        testRefreshedImages: !0
                    })
                }
                .bind(i)),
                e
            }
            )),
            e = _u.sample(r, this.largeCount),
            _u.each(e, function(t) {
                return function(e) {
                    return e.addClass("j-large"),
                    t.setDimensions(e)
                }
            }(this)),
            _u.each(r, function(t) {
                return function(e) {
                    return !e.hasClass("j-large") && (e.addClass("j-small"),
                    t.setDimensions(e))
                }
            }(this)),
            this.$el.append(this.customCss({
                feed: this.model
            })),
            this.$el.append(r),
            this.$el.packery(this.packeryOptions()),
            this.handleInterval(),
            this.ensureProperSize(),
            this
        }
        ,
        i.prototype.resize = function() {
            if (this.$el.outerWidth() !== this.windowWidth)
                return this.reRender()
        }
        ,
        i.prototype.reRender = function() {
            return this.setSizes(),
            this.render()
        }
        ,
        i.prototype.setLargeCount = function() {
            return this.largeCount = this.equal ? 0 : this.columns % 2 != 0 ? this.columns - 1 : this.columns
        }
        ,
        i.prototype.packeryOptions = function() {
            return {
                gutter: this.gutter,
                itemSelector: ".feed-item",
                resize: !1
            }
        }
        ,
        i.prototype.handleInterval = function() {
            var t;
            return document.hidden || this.startInterval(),
            jQuery(document).on("show", (t = this,
            function() {
                return t.startInterval()
            }
            )),
            jQuery(document).on("hide", function(t) {
                return function() {
                    return t.stopInterval()
                }
            }(this))
        }
        ,
        i.prototype.startInterval = function() {
            if (null == this.id)
                return this.id = setInterval(this.rotatePost, this.interval)
        }
        ,
        i.prototype.stopInterval = function() {
            return null != this.id && window.clearInterval(this.id),
            this.id = null
        }
        ,
        i.prototype.ensureProperSize = function() {
            var t, e, r;
            return !(this.retryTimes > 9) && (r = 3 * this.gutter,
            t = 4 * this.small,
            Math.floor(t) - r <= (e = this.$el.height()) && e <= Math.ceil(t) + r ? void 0 : (this.retryTimes++,
            this.close(),
            this.render()))
        }
        ,
        i.prototype.renderPost = function(t, e, r) {
            var i, n;
            return null == e && (e = null),
            null == r && (r = null),
            i = jQuery(this.template({
                isOnFeedsDashboard: this.isOnFeedsDashboard,
                post: t
            })),
            (n = imagesLoaded(i[0])).on("done", (function() {
                var t;
                if (e && e(i),
                (t = i.find("img")).width() > t.height())
                    return t.addClass("landscape")
            }
            )),
            n.on("fail", function(t) {
                return this.brokenImageCallback(t)
            }
            .bind(this)),
            i
        }
        ,
        i.prototype.brokenImageCallback = function(t) {
            var e;
            return e = $(t.images[0].img),
            this.imageHandler({
                target: e,
                feed: this.model,
                theme: "livingWall",
                testRefreshedImages: !0
            })
        }
        ,
        i.prototype.imageHandler = function(t) {
            return new Juicer.Views.ImageHandler(t)
        }
        ,
        i.prototype.initialPosts = function() {
            var t;
            return t = this.visible - 1,
            this.posts().slice(0, +t + 1 || 9e9)
        }
        ,
        i.prototype.nextPost = function() {
            return this.total++,
            this.total >= this.posts().length && (this.model.pollingAllowed() && this.model.fetchNewPosts(!1),
            this.total = 0),
            this.posts()[this.total]
        }
        ,
        i.prototype.posts = function() {
            var t;
            return t = this.model.get("posts").models,
            t = _u.filter(t, (function(t) {
                return "Twitter" !== t.sourceType() && "YouTube" !== t.sourceType()
            }
            ))
        }
        ,
        i.prototype.randomPost = function() {
            return jQuery(_u.sample(this.$(".feed-item").not(".j-sticky")))
        }
        ,
        i.prototype.setDimensions = function(t) {
            return t.hasClass("j-small") ? this.small : this.large,
            t.css({
                width: this.size(t),
                height: this.size(t)
            })
        }
        ,
        i.prototype.rotatePost = function() {
            var t, e, r;
            return e = this.randomPost(),
            (t = this.nextPost()) && t.stickied() && (t = this.nextPost()),
            this.renderPost(t, (r = this,
            function(t) {
                return r.cloneStyle(e, t)
            }
            ))
        }
        ,
        i.prototype.cloneStyle = function(t, e) {
            var r, i, n, s, o, a, c;
            return e.addClass(t.hasClass("j-small") ? "j-small" : "j-large"),
            this.setDimensions(e),
            i = {
                top: c = this.size(t),
                left: c
            },
            r = this.merge(this.vectorMap(), i, "*"),
            n = a = t.position(),
            s = this.merge(a, r, "-"),
            o = this.merge(a, r, "+"),
            e.css(_u.extend(s, this.underCss)),
            t.css(this.underCss),
            t.before(e),
            window.setTimeout((function() {
                return t.css(o),
                e.css(n),
                window.setTimeout((function() {
                    return t.remove(),
                    e.css({
                        zIndex: 2
                    })
                }
                ), 500)
            }
            ), 100)
        }
        ,
        i.prototype.size = function(t) {
            return t.hasClass("j-small") ? this.small : this.large
        }
        ,
        i.prototype.merge = function(t, e, r) {
            var i;
            return null == r && (r = "+"),
            i = {},
            _u.each(_u.keys(t), (function(n) {
                return "+" === r ? i[n] = t[n] + e[n] : "*" === r ? i[n] = t[n] * e[n] : "-" === r ? i[n] = t[n] - e[n] : void 0
            }
            )),
            i
        }
        ,
        i.prototype.vectorMap = function() {
            var t, e;
            return e = _u.sample([-1, 1]),
            {
                top: (t = _u.shuffle([e, 0]))[0],
                left: t[1]
            }
        }
        ,
        i.prototype.underCss = {
            zIndex: 1
        },
        i.prototype.close = function() {
            return this.stopInterval(),
            this.$el.empty(),
            this.$el.packery("destroy"),
            jQuery(document).off("show hide"),
            this.stopListening(),
            this
        }
        ,
        i
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
      , e = function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var n in e)
            r.call(e, n) && (t[n] = e[n]);
        return i.prototype = e.prototype,
        t.prototype = new i,
        t.__super__ = e.prototype,
        t
    }
      , r = {}.hasOwnProperty;
    Juicer.Views.Moderated = function(r) {
        function i() {
            return this.reRender = t(this.reRender, this),
            i.__super__.constructor.apply(this, arguments)
        }
        return e(i, r),
        i.prototype.template = JST.moderated,
        i.prototype.loading = JST["partials/_loading"],
        i.prototype.events = {
            "click ul.j-filters li": "filterFeed",
            "click ul.j-display-filters li": "filterFeed",
            "click .approve": "restorePost",
            "click .reject": "rejectPost",
            "click .j-paginate": "appendNextPage",
            "click .bulk-moderate": "bulkModerate",
            "click .delete": "deletePost",
            "click .copy-post-id": "copyPostId"
        },
        i.prototype.render = function() {
            var t;
            return this.model.set({
                lazy_load: !1,
                css: "modern"
            }),
            this.$el.css({
                maxWidth: "none",
                maxHeight: "none"
            }),
            this.startInfiniteScroll(),
            this.$el.html(this.template({
                feed: this.model,
                menuItems: this.menuItems()
            })),
            (t = Math.floor(this.$el.outerWidth() / 3)) < 200 && (t = 200),
            this.model.on("new-posts", this.reRender),
            !(this.model.get("posts").models.length < 1) && (this.$el.removeClass(Juicer.Constants.FEED_CLASSES.join(" ")),
            this.$el.addClass("modern"),
            this.$el.removeClass("hover-images"),
            this.$el.gridalicious({
                selector: ".feed-item",
                width: t,
                gutter: this.gutter
            }),
            null == this.infiniteScroll || (this.infiniteScroll.shouldShowLoadMore() ? void 0 : this.infiniteScroll.removeLoadMore()))
        }
        ,
        i.prototype.startInfiniteScroll = function() {
            return this.model.resetPage(),
            this.infiniteScroll = new Juicer.Views.InfiniteScroll({
                container: this.$el,
                model: this.model
            })
        }
        ,
        i.prototype.appendNextPage = function(t) {
            return t.preventDefault(),
            this.$(".j-paginate").replaceWith(this.loading()),
            this.infiniteScroll.nextPage()
        }
        ,
        i.prototype.restorePost = function(t) {
            return this.hidePost(t, "Approving...").restore()
        }
        ,
        i.prototype.rejectPost = function(t) {
            return this.hidePost(t, "Rejecting...").reject()
        }
        ,
        i.prototype.deletePost = function(t) {
            return this.hidePost(t, "Deleting...").hardDeletePost()
        }
        ,
        i.prototype.copyPostId = function(t) {
            return t.preventDefault(),
            Juicer.Views.Feed.copyPostId(t)
        }
        ,
        i.prototype.hidePost = function(t, e, r) {
            var i, n;
            return null == r && (r = !0),
            t.preventDefault(),
            null != e && this.$(t.target).html(e),
            n = this.$(t.target).parents(".actions"),
            i = this.fetchPost(n.data("id")),
            r && n.parents(".feed-item").hide().remove(),
            i
        }
        ,
        i.prototype.fetchPost = function(t) {
            return this.model.get("posts").findWhere({
                id: t
            })
        }
        ,
        i.prototype.filterFeed = function(t) {
            var e, r;
            return t.preventDefault(),
            (e = jQuery(t.target)).attr("data-filter"),
            e.parents("ul"),
            this.model.filter = e.data("filter"),
            this.model.resetPage(),
            this.model.fetch({
                success: (r = this,
                function() {
                    return r.reRender()
                }
                )
            })
        }
        ,
        i.prototype.bulkModerate = function(t) {
            var e, r;
            if (r = (e = null != $(t.target).data("approve")) ? "approve" : "reject",
            Juicer.Helpers.confirm("Are you sure you want to " + r + " all of these posts?"))
                return this.$(".bulk-moderate-nav").html("<div class='j-loading'>Loading...</div>"),
                this.model.bulkModerate(e, this.model.filter),
                setTimeout((function() {
                    return location.reload()
                }
                ), 1e4)
        }
        ,
        i.prototype.unbindChildren = function() {
            return this.$el.empty().off(),
            this.infiniteScroll && this.infiniteScroll.close(),
            this.model.off("new-posts", this.reRender),
            this.stopListening()
        }
        ,
        i.prototype.reRender = function() {
            return this.unbindChildren(),
            this.render(),
            this.delegateEvents()
        }
        ,
        i.prototype.menuItems = function() {
            var t;
            return t = this.baseMenuItems,
            t = this.allMenu.concat(t)
        }
        ,
        i.prototype.baseMenuItems = [{
            filter: "Filter",
            title: "Text Filtered"
        }, {
            filter: "Profanity",
            title: "Profanity"
        }, {
            filter: "User",
            title: "Manually Deleted"
        }, {
            filter: "Queue",
            title: "Moderation Queue"
        }, {
            filter: "Similarity",
            title: "Duplicate Posts"
        }, {
            filter: "Rejected",
            title: "Rejected"
        }],
        i.prototype.allMenu = [{
            filter: void 0,
            title: "All"
        }],
        i
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.Nav = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.events = {
            "click .js-Header_burgerMenu": "toggleMenuOpen",
            "click .sidebar-toggle": "toggleSidebarOpen",
            "click .main-container": "toggleMenuClose"
        },
        r.prototype.toggleMenuOpen = function() {
            var t;
            return $(".main-container").removeClass("open-right open-right_mobile").toggleClass("open-left"),
            (t = $(".side-nav")).hasClass("opened") ? t.removeClass("opened") : setTimeout((function() {
                return t.addClass("opened")
            }
            ), 200)
        }
        ,
        r.prototype.toggleMenuClose = function() {
            var t;
            if ((t = $(".side-nav")).hasClass("opened"))
                return t.removeClass("opened")
        }
        ,
        r.prototype.toggleSidebarOpen = function() {
            return $(".main-container").hasClass("open-right_mobile") ? $(".main-container").removeClass("open-left").removeClass("open-right_mobile") : $(".main-container").removeClass("open-left").toggleClass("open-right"),
            $(".opened-sidebar-option").removeClass("visible")
        }
        ,
        r
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.NewFeed = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.template = JST.new_feed,
        r.prototype.initialize = function() {
            return this.socialAccounts = new Juicer.Collections.SocialAccounts,
            this.socialAccounts.fetch({
                success: (t = this,
                function() {
                    return t.sourceForm = new Juicer.Views.SourceForm({
                        el: t.el,
                        socialAccounts: t.socialAccounts
                    }),
                    t.sourceForm.on("create", t.nextPage, t),
                    t.render(),
                    new Juicer.Views.OverlayReopener({
                        model: t.feed,
                        sourceForm: t.sourceForm
                    }).render(t.el)
                }
                ),
                error: function() {
                    return alert("Something went wrong while fetching your connected social accounts")
                }
            });
            var t
        }
        ,
        r.prototype.render = function() {
            return this.$el.html(this.template())
        }
        ,
        r.prototype.nextPage = function(t) {
            return window.location = "/feeds/" + t.get("slug")
        }
        ,
        r
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
      , e = function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var n in e)
            r.call(e, n) && (t[n] = e[n]);
        return i.prototype = e.prototype,
        t.prototype = new i,
        t.__super__ = e.prototype,
        t
    }
      , r = {}.hasOwnProperty;
    Juicer.Views.Overlay = function(r) {
        function i() {
            return this.handleKeypress = t(this.handleKeypress, this),
            i.__super__.constructor.apply(this, arguments)
        }
        return e(i, r),
        i.prototype.className = "j-overlay",
        i.prototype.template = JST.overlay,
        i.prototype.initialize = function(t) {
            return this.element = t.element || "body",
            this.content = t.content,
            this.width = t.width,
            this.close = !1 !== t.close,
            this.ariaLabel = t.ariaLabel,
            jQuery(document).bind("keydown", this.handleKeypress)
        }
        ,
        i.prototype.render = function() {
            return this.$el.html(this.template({
                content: this.content,
                close: this.close
            })),
            jQuery(this.element).children(".j-overlay") && jQuery(this.element).children(".j-overlay").remove(),
            this.$el.attr("role", "dialog").attr("aria-modal", "true"),
            this.ariaLabel && this.$el.attr("aria-label", this.ariaLabel),
            jQuery(this.element).append(this.el),
            this.$el.find(".j-message").first().focus(),
            this.handleBrokenImages(),
            this
        }
        ,
        i.prototype.events = function() {
            return {
                "click .j-close": "closeOverlay",
                "click .juicer2-close": "closeOverlay",
                mousedown: "removeOverlay",
                "click .j-navigate button": "triggerNavigate",
                "click a.share": "openPopup",
                "click .j-gallery-arrow": "gallery"
            }
        }
        ,
        i.prototype.gallery = function(t) {
            return t.preventDefault(),
            this.trigger("trigger:gallery", jQuery(t.target))
        }
        ,
        i.prototype.removeOverlay = function(t) {
            var e;
            if (!((e = jQuery(t.target)).hasClass("j-overlay-content") || e.parents(".j-overlay-content").length > 0))
                return this.removeView()
        }
        ,
        i.prototype.closeOverlay = function(t) {
            return t.preventDefault(),
            this.removeView()
        }
        ,
        i.prototype.removeView = function() {
            return this.trigger("close"),
            this.unbind(),
            this.remove(),
            this.$(".j-overlay").remove(),
            jQuery(this.element).find(".j-overlay").remove(),
            jQuery(document).unbind("keydown", this.handleKeypress)
        }
        ,
        i.prototype.triggerNavigate = function(t) {
            return t.preventDefault(),
            this.trigger("trigger:navigate", jQuery(t.target).data("post-id"))
        }
        ,
        i.prototype.openPopup = function(t) {
            var e;
            return t.preventDefault(),
            e = jQuery(t.target),
            window.open(e.attr("href"), "pop", "width=600, height=400, scrollbars=no")
        }
        ,
        i.prototype.handleKeypress = function(t) {
            var e, r, i, n, s;
            switch (t.keyCode) {
            case 37:
                this.$(".j-previous").click();
                break;
            case 39:
                this.$(".j-next").click();
                break;
            case 27:
                this.closeOverlay(t)
            }
            if (9 === t.keyCode && (r = jQuery(t.target)).parents("[role=dialog]").length && (s = t.shiftKey,
            n = r.closest("[role=dialog]").find("input:visible,select:visible,button:visible,textarea:visible"),
            i = s ? n.first() : n.last(),
            (e = jQuery(i)).length))
                return !r.is(e)
        }
        ,
        i.prototype.handleBrokenImages = function() {
            var t;
            return this.$(".j-poster img").on("error", (t = this,
            function(e) {
                return console.log("hiding broken profile image in overlay."),
                jQuery(e.target).hide(),
                Juicer.Views.ImageHandler.reportInvalidImage(t.postId, "poster", "overlay")
            }
            )),
            this.$("img.j-content-image").on("error", function(t) {
                return function(e) {
                    var r, i, n;
                    if (r = (n = jQuery(e.target)).parents(".image"),
                    i = n.parents(".j-post-overlay[data-id]").data("id"),
                    Juicer.Views.ImageHandler.reportInvalidImage(t.postId, "content", "overlay"),
                    !i || !n.attr("src").match("fbcdn.net") || n.attr("src").match(Juicer.Constants.BASE_URL))
                        return r.length > 0 ? (console.log("Hiding broken image in overlay."),
                        r.hide()) : void 0;
                    n.attr("src", Juicer.Constants.BASE_URL + "/api/posts/" + i + "/image")
                }
            }(this)),
            this.$("video source").on("error", (function(t) {
                var e, r, i;
                return i = jQuery(t.target).parents(".instagram-wrapper, .twitter-wrapper, .video-wrapper"),
                r = jQuery(t.target).parents("video").first(),
                e = i.children(".j-video-fallback").first(),
                jQuery(t.target),
                e.length ? (console.log("converting broken video in overlay to thumbnail"),
                r.hide(),
                e.children("img").each((function(t, e) {
                    if (!jQuery(e).attr("src") && jQuery(e).attr("data-lazy"))
                        return jQuery(e).attr("src", jQuery(e).attr("data-lazy"))
                }
                )),
                e.show()) : (console.log("hiding broken video in overlay"),
                i.hide())
            }
            ))
        }
        ,
        i
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.OverlayReopener = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.storageKey = "juicer_overlay_open",
        r.prototype.initialize = function(t) {
            return null == t && (t = {}),
            this.sourceForm = t.sourceForm,
            this.sidebarView = t.sidebarView,
            this.reopened = !1
        }
        ,
        r.prototype.render = function(t) {
            var e;
            return this.overlayShouldReopen() && (null == this.sourceForm && (this.sourceForm = new Juicer.Views.SourceForm({
                el: t,
                feed: this.model
            })),
            e = this.get(),
            this.sourceForm.openOverlay(e),
            e.htmx ? (this.sourceForm.overlay.$el.find(".new-source-container").append("<a class='load-form-async' hx-get='/sources/new?show_success_message=true&source=" + e.source + "&feed_id=" + (e.feed_id || "") + "&type=" + e.term_type + "&selected_type=" + e.type + "' hx-target='this' hx-swap='afterend' hx-trigger='load' />"),
            htmx.process(".new-source-container"),
            jQuery(".new-source-container").addClass("jcr-p-0"),
            jQuery(".new-source-container").parents(".j-overlay-content").addClass("jcr-w-[800px] jcr-rounded-xl"),
            jQuery(".new-source-container").parents(".j-overlay-content").find(".j-close").remove()) : null != this.sidebarView && this.sourceForm.on("create", this.sidebarView.renderSidebar),
            this.clear(),
            this.reopened = !0),
            this
        }
        ,
        r.prototype.overlayShouldReopen = function() {
            return !!this.get()
        }
        ,
        r.prototype.get = function() {
            var t;
            return t = window.localStorage.getItem(this.storageKey),
            JSON.parse(t)
        }
        ,
        r.prototype.set = function(t) {
            var e;
            return e = JSON.stringify(t),
            window.localStorage.setItem(this.storageKey, e)
        }
        ,
        r.prototype.clear = function() {
            return window.localStorage.setItem(this.storageKey, null)
        }
        ,
        r
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.Payment = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.initialize = function() {
            return window.location.search.indexOf("interval=year") > -1 && (this.$("#year").prop("checked", !0),
            $("#invisible-form").find('input[name="year"]').val(1)),
            this.toggleYear()
        }
        ,
        r.prototype.events = {
            "change #year": "toggleYear"
        },
        r.prototype.toggleYear = function() {
            var t, e, r, i, n;
            return i = this.$("#year"),
            r = $("[data-price]"),
            e = $(".simple-plan-monthly"),
            t = r.data("price"),
            i.is(":checked") ? ($(".js-discount-applied").length > 0 ? 0 : .1,
            n = parseFloat(r.data("yearly-price")).toFixed(2),
            r.html("$" + n),
            e.html("/ yr"),
            $(".simple-plan-discounted-price .yearly").removeClass("hide"),
            $(".simple-plan-discounted-price .monthly").addClass("hide"),
            $(".year-hidden").addClass("hide")) : (r.html("$" + t),
            e.html("/ mo"),
            $(".simple-plan-discounted-price .yearly").addClass("hide"),
            $(".simple-plan-discounted-price .monthly").removeClass("hide"),
            $(".year-hidden").removeClass("hide"))
        }
        ,
        r
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.Plans = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.template = JST.plan_change,
        r.prototype.initialize = function() {
            var t, e;
            return this.queryParams = new URLSearchParams(window.location.search),
            (t = this.queryParams.get("plan")) && $("button[data-plan='" + t + "']").click(),
            $(window).on("load", (e = this,
            function() {
                return e.changePrices()
            }
            ))
        }
        ,
        r.prototype.events = {
            "change #pricing-switch": "changePrices"
        },
        r.prototype.changePrices = function() {
            return $("#pricing-switch").prop("checked") ? ($(".Plans_plan .monthly").addClass("hidden"),
            $(".Plans_plan .yearly").removeClass("hidden"),
            $(".plan-monthly").each((function() {
                return $(this).html($(this).html().replace("Per month", "Per year"))
            }
            )),
            $(".js-plans a").each((function() {}
            )),
            $(".year-hidden").addClass("hidden")) : ($(".Plans_plan .monthly").removeClass("hidden"),
            $(".Plans_plan .yearly").addClass("hidden"),
            $(".plan-monthly").each((function() {
                return $(this).html($(this).html().replace("Per year", "Per month"))
            }
            )),
            $(".year-hidden").removeClass("hidden"))
        }
        ,
        r
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.PostEdit = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.template = JST.post_edit,
        r.prototype.message = JST["partials/_message"],
        r.prototype.className = "j-overlay",
        r.prototype.initialize = function(t) {
            return this.setPost(t)
        }
        ,
        r.prototype.setPost = function(t) {
            var e;
            return e = this.model.get("posts"),
            this.post = e.get(t.id)
        }
        ,
        r.prototype.render = function() {
            var t, e;
            return e = this,
            t = function(t, r) {
                return r.xhr.response.length > 0 ? jQuery("body").append(r.xhr.response) : (e.overlay = new Juicer.Views.Overlay({
                    content: e.template({
                        post: e.post,
                        feed: e.model
                    }),
                    width: "50%",
                    el: e.el
                }),
                e.overlay.render())
            }
            ,
            htmx.ajax("POST", "/track", {
                values: {
                    event_name: "post_editing_started",
                    properties: {
                        post_id: this.post.get("id")
                    }
                }
            }),
            htmx.ajax("GET", "/paywall?source=feed_edit_post&feed_id=" + this.model.get("id"), {
                target: "body",
                swap: "beforeend",
                handler: t
            })
        }
        ,
        r.prototype.events = function() {
            return {
                "input textarea": "updatePreview",
                "submit form": "savePost",
                "change .datetime-external-created-at": "updateTimestamp"
            }
        }
        ,
        r.prototype.updatePreview = function(t) {
            return this.post.set("edit", $(t.target).val()),
            this.$(".message-container").html(this.message({
                post: this.post
            }))
        }
        ,
        r.prototype.updateTimestamp = function(t) {
            return this.post.set("external_created_at", $(t.target).val())
        }
        ,
        r.prototype.savePost = function(t) {
            return t.preventDefault(),
            this.post.save(null, {
                success: (e = this,
                function(t, r) {
                    return e.overlay.removeView(),
                    e.model.set(r, {
                        parse: !0
                    }),
                    e.model.trigger("action")
                }
                ),
                error: function() {
                    return alert("Something went wrong. Please try again.")
                }
            });
            var e
        }
        ,
        r
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
      , e = function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var n in e)
            r.call(e, n) && (t[n] = e[n]);
        return i.prototype = e.prototype,
        t.prototype = new i,
        t.__super__ = e.prototype,
        t
    }
      , r = {}.hasOwnProperty;
    Juicer.Views.PostOverlay = function(r) {
        function i() {
            return this.cycleGallery = t(this.cycleGallery, this),
            this.navigateOverlay = t(this.navigateOverlay, this),
            i.__super__.constructor.apply(this, arguments)
        }
        return e(i, r),
        i.prototype.template = JST.post_overlay,
        i.prototype.initialize = function(t) {
            return this.model = t.model,
            this.setPost(t.target)
        }
        ,
        i.prototype.triggers = function() {
            return {
                "click a.next": "navigateOverlay",
                "click a.previous": "navigateOverlay"
            }
        }
        ,
        i.prototype.setPost = function(t) {
            var e;
            return e = (t = t.is("li.feed-item") ? t : t.parents("li.feed-item")).data("id"),
            this.assignPosts(e)
        }
        ,
        i.prototype.assignPosts = function(t) {
            var e, r, i, n;
            if (i = this.model.get("posts"),
            this.post = i.get(t),
            r = (e = i.indexOf(this.post)) + 1 < i.length ? e + 1 : 0,
            n = e - 1 >= 0 ? e - 1 : i.length - 1,
            this.next = i.at(r),
            "Juicer" === this.next.sourceType() && (this.next = i.at(r + 1)),
            this.previous = i.at(n),
            "Juicer" === this.previous.sourceType())
                return this.previous = i.at(n - 1)
        }
        ,
        i.prototype.render = function() {
            if (this.overlay = new Juicer.Views.Overlay({
                element: "body",
                ariaLabel: this.post.sourceType() + " content",
                content: this.template({
                    post: this.post,
                    next: this.next,
                    previous: this.previous,
                    feed: this.model
                }),
                width: "75%"
            }),
            this.overlay.on("trigger:navigate", this.navigateOverlay),
            this.overlay.on("trigger:gallery", this.cycleGallery),
            this.overlay.render(),
            this.trigger("render", this),
            window.htmx)
                return htmx.process(this.overlay.el)
        }
        ,
        i.prototype.navigateOverlay = function(t) {
            return this.overlay.removeView(),
            this.assignPosts(t),
            this.render()
        }
        ,
        i.prototype.cycleGallery = function(t) {
            return new Juicer.Views.Gallery({
                target: t,
                el: this.el,
                model: this.model
            })
        }
        ,
        i
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.PosterImageHandler = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.initialize = function(t) {
            return null == t && (t = {}),
            this.image = this.$(t.target),
            this.feedItem = this.image.parents(".feed-item"),
            this.postId = this.feedItem.data("id"),
            this.theme = t.theme,
            this.feed = t.feed,
            this.invokeFallback()
        }
        ,
        r.prototype.invokeFallback = function() {
            return "polaroid" === this.theme ? this.convertToNoPoster() : this.hideImage(),
            Juicer.Views.ImageHandler.reportInvalidImage(this.postId, "poster", "feed")
        }
        ,
        r.prototype.hideImage = function() {
            return this.logFallback("Hiding the image."),
            this.image.hide()
        }
        ,
        r.prototype.convertToNoPoster = function() {
            return this.logFallback("Converting to a no-poster post."),
            this.image.parents(".j-post-container").addClass("no-poster"),
            this.image.parents(".j-poster").hide()
        }
        ,
        r.prototype.logFallback = function(t) {
            var e;
            return e = this.feedItem.data("source"),
            console.log("Juicer: " + e + " post with id " + this.postId + " has a broken poster image. " + t)
        }
        ,
        r
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.SideNav = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.events = {
            "click li#collapseable": "toggleOtherFeeds"
        },
        r.prototype.toggleOtherFeeds = function(t) {
            var e, r;
            return t.preventDefault(),
            (e = (r = $(t.target)).next()).is(":visible") ? (e.slideUp(),
            r.removeClass("selected")) : (e.slideDown(),
            r.addClass("selected"))
        }
        ,
        r
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
      , e = function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var n in e)
            r.call(e, n) && (t[n] = e[n]);
        return i.prototype = e.prototype,
        t.prototype = new i,
        t.__super__ = e.prototype,
        t
    }
      , r = {}.hasOwnProperty;
    Juicer.Views.Sidebar = function(r) {
        function i() {
            return this.openSourceFormFromSources = t(this.openSourceFormFromSources, this),
            this.closeSubViewSlide = t(this.closeSubViewSlide, this),
            this.closeSubView = t(this.closeSubView, this),
            this.openSubView = t(this.openSubView, this),
            this.openNewSource = t(this.openNewSource, this),
            this.handleSkipOpeningSubView = t(this.handleSkipOpeningSubView, this),
            this.renderSidebar = t(this.renderSidebar, this),
            this.reRenderCss = t(this.reRenderCss, this),
            this.reRender = t(this.reRender, this),
            this.render = t(this.render, this),
            i.__super__.constructor.apply(this, arguments)
        }
        return e(i, r),
        i.prototype.template = JST.sidebar,
        i.prototype.nameEdit = JST["feeds/feed_name_edit"],
        i.prototype.newSource = JST["feeds/new_source"],
        i.prototype.initialize = function(t) {
            var e, r;
            return this.renderedFromModerationUrl = t.renderedFromModerationUrl,
            this.renderedFromModerationUrl ? this.model = new Juicer.Models.Moderated({
                slug: t.slug
            }) : this.model = new Juicer.Models.Feed({
                isOnFeedsDashboard: !0,
                slug: t.slug,
                starting_at: t.starting_at,
                origin: Juicer.Constants.PAGE_URL_DASHBOARD_ORIGIN
            }),
            this.model.fetch({
                success: (r = this,
                function() {
                    if (r.hideLoader(),
                    r.renderSidebar(),
                    null == r.reopener || !r.reopener.reopened)
                        return r.setupNewSources()
                }
                ),
                error: function(t) {
                    return function() {
                        return t.hideLoader(),
                        alert("Sorry something is going wrong.")
                    }
                }(this)
            }),
            this.model.on("action", this.reRender, this),
            this.model.once("sync", this.initialRender, this),
            this.model.on("update:colors", this.reRenderCss, this),
            e = new URLSearchParams(window.location.search),
            this.renderAddSourceModalOnLoad = "dashboard_add_source" === e.get("mpevent")
        }
        ,
        i.prototype.openSourceModalIfAddSourceParamPresent = function() {
            if (this.renderAddSourceModalOnLoad)
                return this.openNewSource({
                    showFeedName: this.model.get("name")
                }),
                this.renderAddSourceModalOnLoad = !1
        }
        ,
        i.prototype.initialRender = function() {
            return this.render(!0)
        }
        ,
        i.prototype.render = function(t) {
            return null == t && (t = !1),
            1 === this.model.get("posts").current_page && (this.renderedFromModerationUrl && t ? ($(".main-container").addClass("open-right_mobile"),
            this.renderModeration()) : this.feed = new Juicer.Views.Feed({
                el: ".juicer-feed",
                isOnFeedsDashboard: !0,
                model: this.model
            }).render()),
            this.openSourceModalIfAddSourceParamPresent(),
            this.toggleAddSourceButton(),
            this.setupSidebarHeight(),
            htmx.process(this.el)
        }
        ,
        i.prototype.setupSidebarHeight = function() {
            return this.sidebarHeightInterval = null,
            this.updateSidebarHeight(),
            null != this.sidebarHeightInterval && clearInterval(this.sidebarHeightInterval),
            this.sidebarHeightInterval = setInterval(this.updateSidebarHeight, 500),
            jQuery("#sidebar-footer").css("top", "calc(100vh - " + jQuery("#sidebar-footer").height() + " + px)")
        }
        ,
        i.prototype.updateSidebarHeight = function() {
            return jQuery(".dashboard-sidebar").css("height", jQuery(".juicer-feed").height())
        }
        ,
        i.prototype.toggleAddSourceButton = function() {
            return this.model.manualSourceLimitReached() ? (jQuery(".add-source-sidebar-container").removeClass("add-source"),
            jQuery(".add-source-container").find("a.j-button").addClass("disabled"),
            jQuery(".add-source-container").each((function() {
                return this.dispatchEvent(new CustomEvent("disable-add-source-button"))
            }
            ))) : (jQuery(".add-source-sidebar-container").addClass("add-source"),
            jQuery(".add-source-container").find("a.j-button").removeClass("disabled"),
            jQuery(".add-source-container").each((function() {
                return this.dispatchEvent(new CustomEvent("enable-add-source-button"))
            }
            )))
        }
        ,
        i.prototype.reRender = function() {
            return null != this.feed && this.feed.close(),
            null != this.overlay && this.overlay.removeView(),
            null != this.sourcesView && this.sourcesView.reRender(),
            this.sourcesView = null,
            this.subView = null,
            this.render()
        }
        ,
        i.prototype.reRenderCss = function() {
            return jQuery(".juicer-custom-styles").length > 0 ? jQuery(".juicer-custom-styles").html("<style>" + this.model.customStyles() + "</style>") : jQuery(".juicer-feed").prepend("<div class='juicer-custom-styles'><style>" + this.model.customStyles() + "</style></div>")
        }
        ,
        i.prototype.renderSidebar = function() {
            return this.$el.html(this.template({
                feed: this.model
            })),
            this.reopener = new Juicer.Views.OverlayReopener({
                model: this.model,
                sidebarView: this
            }).render(this.el)
        }
        ,
        i.prototype.hideLoader = function() {
            return jQuery(".loading-overlay").fadeOut()
        }
        ,
        i.prototype.setupNewSources = function() {
            return this.sourceForm = new Juicer.Views.SourceForm({
                feed: this.model,
                el: this.el,
                socialAccounts: this.model.get("social_accounts")
            }),
            this.sourceForm.on("create", this.reRender)
        }
        ,
        i.prototype.renderModeration = function() {
            if (this.renderSubView(this.viewMap.moderate, this.$("#moderate")),
            this.subView)
                return this.subView.renderModeratedPosts()
        }
        ,
        i.prototype.events = function() {
            return {
                "click .js-feed-name-edit": "renderFeedNameEdit",
                "submit .js-feed-name-edit-form": "updateFeedName",
                "click .add-source:not(.disabled)": "openNewSource",
                "click .menu-item .js-warning": "handleWarningClick",
                "click .menu-item *[data-skip_opening_sub_view]": "handleSkipOpeningSubView",
                "click .menu-item": "openSubView",
                "click .slide-menu-item.active": "closeSubViewSlide",
                "change #slug_update": "toggleSlugWarning",
                "click .hide-embed-info-popover": "handleEmbedInfoPopover",
                "click .hide-embed-layout-popover": "handleEmbedLayoutPopover",
                "click .popover-hide-button": "handlePopoverHide"
            }
        }
        ,
        i.prototype.handleSkipOpeningSubView = function(t) {
            return t.stopPropagation()
        }
        ,
        i.prototype.handleWarningClick = function(t) {
            return t.stopPropagation(),
            jQuery("body").html("<div class='d-flex' style='background:white; height:100vh; width: 100vw; align-items: center; justify-content: center'><div class='j-loading'></div></div>")
        }
        ,
        i.prototype.openNewSource = function(t) {
            var e, r;
            return r = this,
            e = function(e, i) {
                return i.xhr.response.length > 0 ? jQuery("body").append(i.xhr.response) : (r.overlay = new Juicer.Views.Overlay({
                    content: r.newSource({
                        showFeedName: null != t ? t.showFeedName : void 0,
                        model: r.model
                    }),
                    width: "85%",
                    element: r.el
                }),
                r.overlay.render())
            }
            ,
            htmx.ajax("GET", "/paywall?source=feed_add_source&feed_id=" + this.model.get("id"), {
                target: "body",
                swap: "beforeend",
                handler: e
            })
        }
        ,
        i.prototype.openSubView = function(t) {
            var e, r, i, n, s;
            return "cta" === (e = $(t.currentTarget)).prop("id") ? (s = this,
            r = function(t, e) {
                var i;
                return e.xhr.response.length > 0 ? (jQuery("body").append(e.xhr.response),
                (i = htmx.find(".cta-global-settings-modal")) ? htmx.process(i) : void 0) : htmx.ajax("GET", "/feed/" + s.model.get("id") + "/cta_settings", {
                    target: "body",
                    swap: "beforeend",
                    handler: r
                })
            }
            ,
            void htmx.ajax("GET", "/paywall?source=cta&feed_id=" + this.model.get("id"), {
                target: "body",
                swap: "beforeend",
                handler: r
            })) : ($(".slide-menu-item").removeClass("active"),
            e.addClass("active"),
            e.prop("id") && htmx.ajax("POST", "/track", {
                values: {
                    event_name: "feed_sidebar_modal_opened",
                    properties: {
                        feature_name: e.prop("id"),
                        feed_id: this.model.get("id")
                    }
                }
            }),
            "social_accounts" !== e.prop("id") ? (t.preventDefault(),
            n = e.prop("id"),
            i = function(t) {
                return function() {
                    var r;
                    return r = t.viewMap[n],
                    t.renderSubView(r, e)
                }
            }(this),
            "moderate" === n ? (r = function(t, e) {
                return e.xhr.response.length > 0 ? jQuery("body").append(e.xhr.response) : i()
            }
            ,
            htmx.ajax("GET", "/paywall?source=sidebar_" + n + "&feed_id=" + this.model.get("id"), {
                target: "body",
                swap: "beforeend",
                handler: r
            })) : ("embed" === n && htmx.ajax("POST", "/track", {
                values: {
                    event_name: "embed_started",
                    mixpanel_version: "v2",
                    properties: {
                        location_button: "Feed"
                    }
                }
            }),
            i())) : void 0)
        }
        ,
        i.prototype.closeSubView = function() {
            return this.subView = null
        }
        ,
        i.prototype.closeSubViewSlide = function() {
            if ($(".slide-menu-item").removeClass("active"),
            this.subView)
                return this.subView.close()
        }
        ,
        i.prototype.renderSubView = function(t, e) {
            if ((this.subView && this.subView.$target.prop("id")) !== e.prop("id"))
                return this.subView && this.subView.close(),
                this.subView = new t({
                    feed: this.model,
                    $target: e,
                    sidebarView: this,
                    feedView: this.feed
                }),
                this.subView.on("openSourceForm", this.openSourceFormFromSources),
                this.subView.render()
        }
        ,
        i.prototype.openSourceFormFromSources = function(t) {
            return this.sourcesView = t,
            this.openNewSource()
        }
        ,
        i.prototype.viewMap = {
            design: Juicer.Views.Design,
            embed: Juicer.Views.Embed,
            features: Juicer.Views.Features,
            hub: Juicer.Views.Hub,
            moderate: Juicer.Views.Moderate,
            settings: Juicer.Views.Settings,
            sources: Juicer.Views.Sources,
            synced: Juicer.Views.Synced
        },
        i.prototype.renderFeedNameEdit = function(t) {
            return t.preventDefault(),
            this.overlay = new Juicer.Views.Overlay({
                content: this.nameEdit({
                    feed: this.model
                }),
                element: this.el,
                width: "50%"
            }),
            this.overlay.render()
        }
        ,
        i.prototype.updateFeedName = function(t) {
            var e;
            return t.preventDefault(),
            e = $(t.target).serializeHash(),
            this.model.set(e),
            this.model.save(null, {
                success: function(t, e) {
                    return window.location = "/feeds/" + e.slug
                }
            })
        }
        ,
        i.prototype.toggleSlugWarning = function() {
            return this.$(".slug-warning").toggle()
        }
        ,
        i.prototype.handleEmbedInfoPopover = function(t) {
            var e;
            return t.stopPropagation(),
            Array.from(document.getElementsByClassName("embed-popover")).forEach((function(t) {
                return t.remove()
            }
            )),
            e = {
                url: "/tour",
                type: "PUT",
                data: $.param({
                    tour: {
                        tour_show_embed_info_block: !1
                    }
                })
            },
            (this.sync || JuicerBackbone.sync).call(this, null, this, e)
        }
        ,
        i.prototype.handleEmbedLayoutPopover = function() {
            var t;
            return t = {
                url: "/tour",
                type: "PUT",
                data: $.param({
                    tour: {
                        tour_show_embed_layout: !1
                    }
                })
            },
            (this.sync || JuicerBackbone.sync).call(this, null, this, t)
        }
        ,
        i.prototype.handlePopoverHide = function(t) {
            var e, r, i;
            return t.preventDefault(),
            t.stopPropagation(),
            e = t.target.dataset.key,
            i = t.target.parentNode.parentNode,
            r = i.parentNode,
            i.remove(),
            setTimeout((function() {
                return i.classList.add("hide-popover"),
                r.appendChild(i)
            }
            ), 200),
            localStorage.setItem("hide" + e + "Popover", !0)
        }
        ,
        i
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
      , e = function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var n in e)
            r.call(e, n) && (t[n] = e[n]);
        return i.prototype = e.prototype,
        t.prototype = new i,
        t.__super__ = e.prototype,
        t
    }
      , r = {}.hasOwnProperty;
    Juicer.Views.Slider = function(r) {
        function i() {
            return this.posterImageHandler = t(this.posterImageHandler, this),
            this.imageHandler = t(this.imageHandler, this),
            this.setFeedItemHeight = t(this.setFeedItemHeight, this),
            this.beforeChange = t(this.beforeChange, this),
            i.__super__.constructor.apply(this, arguments)
        }
        return e(i, r),
        i.prototype.template = JST.feed,
        i.prototype.initialize = function(t) {
            return this.columns = t.columns,
            this.interval = t.interval,
            this.isOnFeedsDashboard = t.isOnFeedsDashboard,
            this.slidesToShow = this.columns
        }
        ,
        i.prototype.render = function() {
            var t;
            return this.$el.append(this.template({
                isOnFeedsDashboard: this.isOnFeedsDashboard,
                feed: this.model
            })),
            this.$(".j-image, .j-image img, li.words, .slick-track").css({
                height: this.model.height()
            }),
            this.$el.slick(this.sliderSettings()),
            this.$el.on("beforeChange", this.beforeChange),
            this.$el.on("afterChange", (t = this,
            function() {
                return t.trigger("slide")
            }
            )),
            window.imagesLoaded(this.$el, this.setFeedItemHeight),
            this.$el.hasClass("j-ie") && this.setBackgroundImages(),
            jQuery(window).on("resize", _u.debounce(function(t) {
                return function() {
                    return t.setFeedItemHeight()
                }
            }(this), 300)),
            this
        }
        ,
        i.prototype.beforeChange = function(t, e, r, i) {
            if (0 === i && this.model.pollingAllowed())
                return this.model.fetchNewPosts(!1)
        }
        ,
        i.prototype.sliderSettings = function() {
            return jQuery.extend(this.sliderDefaults(), {
                responsive: this.breakpoints()
            })
        }
        ,
        i.prototype.breakpoints = function() {
            return _u.map(this.breakpointArray, (t = this,
            function(e) {
                return {
                    breakpoint: e[0],
                    settings: {
                        slidesToShow: _u.min([e[1], t.slidesToShow]),
                        slidesToScroll: _u.min([e[1], t.slidesToShow])
                    }
                }
            }
            ));
            var t
        }
        ,
        i.prototype.breakpointArray = [[1700, 6], [1450, 5], [1024, 4], [960, 3], [786, 2], [480, 1]],
        i.prototype.sliderDefaults = function() {
            return {
                slidesToShow: this.slidesToShow,
                autoplay: 0 !== this.interval,
                autoplaySpeed: this.interval,
                slidesToScroll: this.slidesToShow,
                slide: "li",
                adaptiveHeight: 0 === !this.$("a.j-images").length,
                cssEase: "ease",
                pauseOnHover: !0
            }
        }
        ,
        i.prototype.setBackgroundImages = function() {
            return _u.each(this.$("[data-image]"), (function(t) {
                var e;
                return (e = jQuery(t)).css("background-image", "url('" + e.data("image") + "')")
            }
            ))
        }
        ,
        i.prototype.setFeedItemHeight = function(t) {
            return _u.each(this.$(".j-image img"), (function(t) {
                if (t.width > t.height)
                    return jQuery(t).addClass("j-landscape")
            }
            )),
            this.$(".j-image img, li.words, .slick-track").css({
                height: this.model.height()
            }),
            !this.model.get("lazy_load") && (null != t && (_u.each(t.images, (e = this,
            function(t) {
                var r;
                if (!t.isLoaded)
                    return (r = e.$(t.img)).parents(".j-poster").length > 0 ? e.posterImageHandler({
                        target: r,
                        feed: e.model,
                        theme: "slider"
                    }) : e.imageHandler({
                        target: r,
                        feed: e.model,
                        theme: "slider",
                        testRefreshedImages: !0
                    })
            }
            )),
            jQuery(".words > .j-text").each((function() {
                return jQuery(this).css("display", "none"),
                jQuery(this).height(),
                jQuery(this).css("display", "")
            }
            ))));
            var e
        }
        ,
        i.prototype.imageHandler = function(t) {
            return new Juicer.Views.ImageHandler(t)
        }
        ,
        i.prototype.posterImageHandler = function(t) {
            return new Juicer.Views.PosterImageHandler(t)
        }
        ,
        i.prototype.stop = function() {
            return this.$el.slick("stop")
        }
        ,
        i.prototype.play = function() {
            return this.$el.slick("play")
        }
        ,
        i
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.SourceForm = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.template = JST.source_form,
        r.prototype.pleaseWait = JST.please_wait,
        r.prototype.sourceUnavailableForSmallPlan = JST["sources/source_unavailable_for_small_plan"],
        r.prototype.initialize = function(t) {
            var e;
            return this.feed = t.feed,
            (new Juicer.Models.Plan).fetch({
                success: (e = this,
                function(t) {
                    return e.plan = t,
                    e.currentPlanName = t.get("plan"),
                    e.isTrial = t.get("trial")
                }
                )
            }),
            this.socialAccounts = t.socialAccounts ? t.socialAccounts : this.feed.get("social_accounts"),
            this.rendered = !1,
            this.submitting = !1,
            this.isLoading = !0
        }
        ,
        r.prototype.events = function() {
            return {
                'input #source_term[data-filter_invalid_instagram_hashtag_characters="true"]': "filterInvalidInstagramHashtagCharacters",
                "click .add-a-hashtag li": "openHashtag",
                'click .js-source[data-term="hashtag"]': "openHashtag",
                'click .js-source:not([data-term="hashtag"])': "handleOverlay",
                "submit .source-form": "createSource",
                "click .source-type": "redrawOverlay",
                "click a.social-account": "setOverlayStorage",
                "click .search-result": "submitSearchResult"
            }
        }
        ,
        r.prototype.filterInvalidInstagramHashtagCharacters = function() {
            var t, e, r, i, n;
            if (i = (r = (t = $('#source_term[data-filter_invalid_instagram_hashtag_characters="true"]'))[0]).selectionStart,
            e = /[# \/]/gi,
            n = t.val(),
            e.test(n))
                return t.val(n.replace(e, "")),
                i--,
                r.setSelectionRange(i, i)
        }
        ,
        r.prototype.handleOverlay = function(t, e) {
            var r, i;
            return null == e && (e = "username"),
            (r = $(t.target)).hasClass("j-social-icon") || (r = r.parents(".j-social-icon")),
            i = r.data("type"),
            window.mixpanel && mixpanel.track("ui-action", {
                action: "social-icon-clicked",
                source: i,
                trial: juicerData.user.trial
            }),
            htmx.ajax("POST", "/track", {
                values: {
                    event_name: "source_selected",
                    properties: {
                        source_name: i
                    }
                }
            }),
            juicerUtil.doesPlanContainPlatform(juicerData.user.plan, i) ? this.openOverlay({
                type: e,
                source: i
            }) : (alert("Sorry, please upgrade to a paid plan to create a " + i + " source."),
            !1)
        }
        ,
        r.prototype.openOverlay = function(t) {
            return this.type = t.type,
            this.source = t.source,
            ("Twitter" === this.source || "LinkedIn" === this.source || "Hashtag" === this.source && this.feed && this.feed.get("free_hashtags_disabled")) && "small" === this.currentPlanName && !1 === this.isTrial ? htmx.ajax("GET", "/paywall?source=add_" + this.source.toLowerCase() + "_source", {
                target: "body",
                swap: "beforeend"
            }) : (this.model = new Juicer.Models.Source({
                source: this.source,
                term_type: this.type
            }),
            this.renderOverlay())
        }
        ,
        r.prototype.openHashtag = function(t) {
            return this.handleOverlay(t, "hashtag")
        }
        ,
        r.prototype.drawTemplate = function() {
            return this.template({
                source: this.model,
                feed: this.feed,
                plan: this.plan,
                type: this.type,
                results: this.results,
                socialAccounts: this.socialAccounts,
                isLoading: this.isLoading
            })
        }
        ,
        r.prototype.renderOverlay = function() {
            var t;
            if (this.overlay = new Juicer.Views.Overlay({
                content: this.drawTemplate(),
                element: this.el,
                width: "50%",
                close: !0
            }),
            this.overlay.render(),
            this.resultsNeedFetching() ? (this.fetchResults(this.type),
            this.isLoading = !1) : this.instagramHashtagStatusNeedsFetching() && (this.fetchInstagramHashtagStatus(),
            this.isLoading = !1),
            t = htmx.find(".load-form-async"))
                return htmx.process(".new-source-container"),
                htmx.trigger(t, "click"),
                jQuery(".new-source-container").addClass("jcr-p-0"),
                jQuery(".new-source-container").parents(".j-overlay-content").addClass("jcr-w-[800px] jcr-rounded-xl"),
                jQuery(".new-source-container").parents(".j-overlay-content").find(".j-close").remove()
        }
        ,
        r.prototype.resultsNeedFetching = function() {
            var t;
            return t = this.socialAccounts.socialAccount("facebook"),
            "Facebook" === this.source && t && _u.contains(["username", "groups", "reviews"], this.type) && this.rendered !== this.type
        }
        ,
        r.prototype.redrawOverlay = function(t) {
            return t.preventDefault(),
            this.type = $(t.target).data("type"),
            "hashtag" === this.type && "small" === this.currentPlanName && !1 === this.isTrial && this.feed.get("free_hashtags_disabled") ? htmx.ajax("GET", "/paywall?source=add_hashtag_source", {
                target: "body",
                swap: "beforeend"
            }) : (this.overlay.removeView(),
            this.renderOverlay())
        }
        ,
        r.prototype.fetchResults = function(t) {
            return null == t && (t = "pages"),
            this.results = new Juicer.Collections.FacebookResults({
                type: t
            }),
            this.results.fetch({
                success: (e = this,
                function() {
                    return e.rendered = e.type,
                    e.renderOverlay()
                }
                ),
                error: function(t) {
                    return function() {
                        if (t.results.reset(),
                        t.rendered = t.type,
                        t.renderOverlay(),
                        confirm("Something went wrong. Hit okay to go to the social accounts page and reset your Facebook token."))
                            return window.location = "/social-accounts"
                    }
                }(this)
            });
            var e
        }
        ,
        r.prototype.instagramHashtagStatusNeedsFetching = function() {
            return "Instagram" === this.source && "hashtag" === this.type && "hashtag" !== this.rendered
        }
        ,
        r.prototype.setMissingInstagramBusinessAccounts = function() {
            return this.socialAccounts.findAllWithProvider("facebook").forEach((function(t) {
                return t.set({
                    instagramBusinessAccounts: []
                })
            }
            ))
        }
        ,
        r.prototype.fetchInstagramHashtagStatus = function() {
            var t;
            if (this.socialAccounts.socialAccount("facebook"))
                return this.results = new Juicer.Collections.InstagramBusinessAccounts,
                this.results.fetch({
                    success: (t = this,
                    function(e) {
                        return 0 === e.length && t.setMissingInstagramBusinessAccounts(),
                        t.rendered = "hashtag",
                        t.renderOverlay()
                    }
                    ),
                    error: function(t) {
                        return function() {
                            return t.setMissingInstagramBusinessAccounts(),
                            t.rendered = "hashtag",
                            t.renderOverlay()
                        }
                    }(this)
                })
        }
        ,
        r.prototype.createSource = function(t) {
            var e, r;
            if (t.preventDefault(),
            !this.submitting)
                return this.submitting = !0,
                (e = $(t.target)).find("input[type=submit]").hide(),
                e.append("<div class='j-loading'>Loading...</div>"),
                this.timeout = setTimeout((r = this,
                function() {
                    return e.append(r.pleaseWait())
                }
                ), 5e3),
                e.find("ul.errors").remove(),
                window.hj && window.hj("event", "source_creation_initated"),
                this.submitSource(e.serializeHash())
        }
        ,
        r.prototype.submitSource = function(t) {
            return this.model.set(t),
            this.model.save(null, {
                success: (e = this,
                function(t, r) {
                    if (e.submitting = !1,
                    e.feedObject().set(r, {
                        parse: !0
                    }),
                    e.feed.trigger("action"),
                    e.timeout && window.clearInterval(e.timeout),
                    e.trigger("create", e.feed),
                    juicerUtil.showFlashMessage(r.juicer_flash_message),
                    "htmx" === e.feed.get("version"))
                        return window.juicerUtil.updateSidebarSourcesMenu()
                }
                ),
                error: function(t) {
                    return function(e, r) {
                        return t.submitting = !1,
                        t.timeout && window.clearInterval(t.timeout),
                        new Juicer.Views.Errors({
                            el: t.$("form"),
                            errors: r,
                            source: Juicer.Constants.PROVIDER_TO_SOURCE_MAP[t.model.findProvider()] || t.source
                        })
                    }
                }(this)
            });
            var e
        }
        ,
        r.prototype.feedObject = function() {
            return this.feed || (this.feed = new Juicer.Models.Feed)
        }
        ,
        r.prototype.submitSearchResult = function(t) {
            var e;
            return t.preventDefault(),
            e = $(t.target),
            this.$(".result-term").val(e.data("id")),
            this.$(".result-name").val(e.data("name")),
            e.parents("form").trigger("submit")
        }
        ,
        r.prototype.setOverlayStorage = function(t) {
            return t.preventDefault(),
            (new Juicer.Views.OverlayReopener).set({
                type: this.type,
                source: this.source
            }),
            window.location = jQuery(t.target).attr("href")
        }
        ,
        r
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, r) {
        function i() {
            this.constructor = t
        }
        for (var n in r)
            e.call(r, n) && (t[n] = r[n]);
        return i.prototype = r.prototype,
        t.prototype = new i,
        t.__super__ = r.prototype,
        t
    }
      , e = {}.hasOwnProperty;
    Juicer.Views.UserAccount = function(e) {
        function r() {
            return r.__super__.constructor.apply(this, arguments)
        }
        return t(r, e),
        r.prototype.initialize = function() {
            return this.toggleDigest()
        }
        ,
        r.prototype.events = {
            "change input[type=checkbox]": "toggleDigest"
        },
        r.prototype.toggleDigest = function() {
            var t, e;
            return e = this.$("#user_digest"),
            t = this.$(".digest-label"),
            this.$("input[type=checkbox]").is(":checked") ? (e.removeAttr("disabled"),
            t.removeClass("disabled")) : (e.attr("disabled", "disabled"),
            t.addClass("disabled"),
            e.val("Never"))
        }
        ,
        r
    }(JuicerBackbone.View)
}
.call(this),
function() {
    var t = function(t, e) {
        return function() {
            return t.apply(e, arguments)
        }
    }
      , e = function(t, e) {
        function i() {
            this.constructor = t
        }
        for (var n in e)
            r.call(e, n) && (t[n] = e[n]);
        return i.prototype = e.prototype,
        t.prototype = new i,
        t.__super__ = e.prototype,
        t
    }
      , r = {}.hasOwnProperty;
    Juicer.Views.Widget = function(r) {
        function i() {
            return this.addPost = t(this.addPost, this),
            this.showNextPost = t(this.showNextPost, this),
            this.setPosts = t(this.setPosts, this),
            i.__super__.constructor.apply(this, arguments)
        }
        return e(i, r),
        i.prototype.template = JST.widget,
        i.prototype.card = JST["partials/_widget_card"],
        i.prototype.referral = JST["partials/_referral"],
        i.prototype.customCss = JST["partials/_custom_styles"],
        i.prototype.initialize = function(t) {
            return this.interval = t.interval,
            this.isOnFeedsDashboard = t.isOnFeedsDashboard,
            this.index = 0,
            this.setPosts(),
            this.render(),
            5e3 !== this.model.get("interval") && 5e3 === this.interval && (this.interval = this.model.get("interval")),
            0 === this.interval && (this.interval = 5e7),
            window.juicerWidget = this,
            this.id = setInterval(this.showNextPost, this.interval)
        }
        ,
        i.prototype.setPosts = function() {
            return this.posts = this.model.get("posts").models
        }
        ,
        i.prototype.render = function() {
            return this.$el.append(this.template({
                model: this.model,
                first: this.posts[this.index],
                isOnFeedsDashboard: this.isOnFeedsDashboard,
                second: this.posts[this.index + 1]
            })),
            this.container = this.$(".flip-container"),
            this.handleReferral(),
            this.handleBrokenImages(),
            this.$el.append(this.customCss({
                feed: this.model
            }))
        }
        ,
        i.prototype.handleBrokenImages = function() {
            return new Juicer.Views.BrokenImage({
                el: this.el,
                feed: this.model
            })
        }
        ,
        i.prototype.showNextPost = function() {
            if (this.container.toggleClass("flip"),
            setTimeout(this.addPost, 600),
            this.index++,
            this.index >= this.posts.length - 1)
                return this.model.pollingAllowed() && this.model.fetchNewPosts(!1),
                this.index = -1
        }
        ,
        i.prototype.addPost = function() {
            return this.element().html(this.card({
                isOnFeedsDashboard: this.isOnFeedsDashboard,
                post: this.posts[this.index + 1],
                truncate: this.truncate
            })),
            this.handleBrokenImages()
        }
        ,
        i.prototype.element = function() {
            return this.container.hasClass("flip") ? this.$(".front") : this.$(".back")
        }
        ,
        i.prototype.other = function() {
            return this.element().siblings()
        }
        ,
        i.prototype.handleReferral = function() {
            if (this.model.paid() || this.isOnFeedsDashboard || this.$el.find("h1.referral").length > 0 || this.$el.append(this.referral({
                feed: this.model
            })),
            this.model.paid())
                return this.$el.find("h1.referral").remove()
        }
        ,
        i.prototype.close = function() {
            return null != this.id && window.clearInterval(this.id),
            this.$el.empty().off(),
            this.stopListening(),
            this
        }
        ,
        i
    }(JuicerBackbone.View)
}
.call(this),
Juicer.Constants = {},
Juicer.Constants.API_ROOT = "//www.juicer.io",
(navigator.userAgent.match(/MSIE 9/) || navigator.userAgent.match(/MSIE 8/) || "file:" === window.location.protocol) && (Juicer.Constants.API_ROOT = "https:" + Juicer.Constants.API_ROOT),
Juicer.Constants.BASE_URL = "https://www.juicer.io",
Juicer.Constants.FACEBOOK_APP_ID = "731223346944897",
Juicer.Constants.FEED_CLASSES = ["modern", "night", "polaroid", "image-grid", "widget", "slider", "hip", "living-wall", "autoscroll"],
Juicer.Constants.HELP_CENTER_URL = "http://help.juicer.io/hc/en-us",
Juicer.Constants.MINIMUM_ENTERPRISE_FEE_IN_DOLLARS = 199,
Juicer.Constants.PAID_ONLY_PLATFORMS = [],
Juicer.Constants.PLATFORMS_WITHOUT_LIKES = ["LinkedIn", "Instagram", "Blog", "Giphy", "YouTube"],
Juicer.Constants.PAID_PLANS = ["ad_free", "medium", "large", "team", "enterprise", "custom", "archive"],
Juicer.Constants.PLAN_TO_DISPLAY_NAME = {
    small: "Free",
    medium: "Starter",
    large: "Pro",
    team: "Team",
    enterprise: "Enterprise",
    ad_free: "Ad-Free",
    archive: "Archive",
    custom: "Custom"
},
Juicer.Constants.SOURCES_REQUIRING_OAUTH_TOKENS = ["Facebook", "Instagram", "Slack", "TikTok", "Twitter", "TwitterAPIv2", "TwitterV3"],
Juicer.Constants.SOURCES_WHERE_POSTS_CAN_BE_ADDED_MANUALLY = ["Facebook", "LinkedIn", "Soundcloud", "Tumblr", "Twitter", "Vimeo", "YouTube"],
Juicer.Constants.SOURCE_TO_PROVIDER_MAP = {
    Facebook: "facebook",
    Instagram: "instagram_basic_display",
    Slack: "slack",
    Tumblr: "tumblr",
    TwitterAPIv2: "twitter",
    TwitterV3: "twitter",
    TwitterV4: "twitter",
    TikTok: "tiktok"
},
Juicer.Constants.PROVIDER_TO_SOURCE_MAP = {
    facebook: "Facebook",
    instagram_basic_display: "Instagram",
    instagram_login: "Instagram",
    slack: "Slack",
    tumblr: "Tumblr",
    twitter: "Twitter",
    tiktok: "TikTok"
},
Juicer.Constants.PROVIDERS_WITH_MULTIPLE_SOCIAL_ACCOUNTS = ["instagram_basic_display", "instagram_login", "instagramreels", "tiktok"],
Juicer.Constants.STRIPE_PUBLISHABLE_KEY = "pk_live_O4R3D1OryggCLZEsquEjTNBW",
Juicer.Constants.SVG_ICONS = {
    externalLink: '<svg class="external-link" style="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M432 320h-32a16 16 0 00-16 16v112H64V128h144a16 16 0 0016-16V80a16 16 0 00-16-16H48a48 48 0 00-48 48v352a48 48 0 0048 48h352a48 48 0 0048-48V336a16 16 0 00-16-16zM488 0H360c-21 0-32 26-17 41l36 36-244 243a24 24 0 000 34l23 23a24 24 0 0034 0l243-244 36 36c15 15 41 5 41-17V24a24 24 0 00-24-24z"/></svg>',
    play: '<svg class="" style="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1366 768"><path d="M683 79a303 303 0 01281 186 303 303 0 01-65 335 304 304 0 01-521-216 303 303 0 01186-281c38-16 78-24 119-24m0-40a345 345 0 100 690 345 345 0 000-690z"/><path d="M592 557c-13 0-15-15-15-21V232c0-6 2-21 14-21 5 0 10 2 15 5l263 152c8 4 13 10 13 16s-5 12-13 16L606 552c-5 3-10 5-14 5z"/><path d="M592 222c1 0 4 0 9 3l263 152c6 3 8 7 8 7s-2 4-8 8L601 544c-5 3-8 3-9 3l-2-1c-1-1-3-4-3-10V232c0-5 2-9 3-10h2m0-20c-15 0-25 11-25 30v304c0 20 10 31 24 31 6 0 13-2 20-6l263-152c24-13 24-36 0-50L611 208c-7-4-14-6-19-6z"/></svg>'
},
Juicer.Constants.PAGE_URL_EMBED_CODE_ORIGIN = "embed-code",
Juicer.Constants.PAGE_URL_DASHBOARD_ORIGIN = "dashboard",
Juicer.Constants.CRAVLER_USER_AGENTS = ["200pleasebot", "360spider", "abot", "addthis", "adldxbot", "admantx", "adsbot-google", "adstxtcrawler", "advbot", "ahrefsbot", "alexa", "anderspink", "apache-httpclient", "apachebench", "apis-google", "appengine-google", "applebot", "appsignal", "archive.org_bot", "archiveteam archivebot", "ask jeeves", "asynchttpclient", "awe.sm", "baidu", "barkrowler", "bdcbot", "bingbot", "bingpreview", "bitlybot", "blekkobot", "blexbot", "bot@linkfluence.net", "bubing", "bufferbot", "buibui-checkbot", "butterfly", "buzzbot", "buzztalk", "catchbot", "check_http", "checkly", "chrome-lighthouse", "cipacrawler", "cliqzbot", "cloudflare", "cmradar/0.1", "coldfusion", "commoncrawl", "comodo ssl checker", "comodo-webinspector-crawler", "copypants", "crowsnest", "curabot", "curl", "dap/nethttp", "datafeedwatch", "datagnionbot", "datanyze", "daumoa", "developers.google.com/+/web/snippet/", "diffbot", "digitalpersona fingerprint software", "domain re-animator bot", "domainsbot", "domaintunocrawler", "dotbot", "duckduckbot", "elb-healthchecker", "embedly", "eoaagent", "everyonesocialbot", "evrinid", "exabot", "exaleadcloudview", "ez publish", "facebookexternalhit", "facebot", "feedburner", "feedfetcher-google", "findxbot", "flipboardproxy", "friendfeedbot", "fyrebot", "garlik", "genieo", "germcrawler", "getprismatic.com", "gigabot", "gimme60bot", "gimmeusabot", "go http package", "go-http-client", "google page speed insights", "google web preview", "google-site-verification", "google-structured-data-testing-tool", "google-structureddatatestingtool", "google-xrawler", "googlebot", "googleimageproxy", "googlestackdrivermonitoring-uptimechecks", "grapeshotcrawler", "gravitybot", "hatena::bookmark", "heritrix", "https://developers.google.com/+/web/snippet", "httrack", "hubspot", "ia_archiver", "icoreservice", "idmarch", "implisensebot", "inagist", "insieve", "insitesbot", "instapaper", "istellabot", "jaunt", "jetslide", "jobseeker", "jooble", "js-kit", "kemvibot", "kimengi", "knows.is", "kojitsubot", "komodiabot", "kraken", "laconica", "lijit crawler", "linkdexbot", "linkedinbot", "linkscrawler", "linode", "lipperhey", "livelapbot", "loadtimebot", "longurl", "ltx71", "lumibot", "magpie-crawler", "mail.ru_bot", "mappydata", "mastodon", "mauibot", "meanpathbot", "mediapartners-google", "megaindex.ru", "memorybot", "metauri", "mfe_expand", "mir web crawler", "mj12bot", "mojeekbot", "ms search 6.0 robot", "msnbot-media", "msnbot", "nerdybot", "netcraft", "netstate", "netvibes", "netzcheckbot", "newrelicmonitor", "newrelicpinger", "newsme", "niki-bot", "ning", "nutch", "openhosebot", "orangebot", "paessler", "pagesinventory", "panopta", "paperlibot", "peerindex", "percolatecrawler", "perfectmarketkwtbot", "phantomjs", "pingdom", "pinterest", "plukkie", "pr-cy.ru", "privacyawarebot", "proximic", "psbot-page", "pu_in", "publiclibraryarchive.org", "pycurl", "python-httplib2", "python-requests", "python-urllib", "queryseeker", "quick-crawler", "quicklook", "re-animator", "readability", "rebelmouse", "redditbot", "relateiq", "riddler", "rogerbot", "rssmicro", "scouturlmonitor", "scrapy", "screaming frog seo spider", "searchmetricsbot", "semanticbot", "semrushbot", "seo-audit", "seobilitybot", "seodiver", "seokicks", "seznambot", "shopwiki", "shortlinktranslate", "showyoubot", "siege", "sistrix", "sitecheck", "siteuptime", "skypeuripreview", "slack-imgproxy", "slack-linkexpanding", "slack", "slackbot", "slurp", "smtbot", "snapchat", "socialrank", "sogou", "spbot", "spinn3r", "sputnikbot", "squider", "statuscake", "swiftbot", "tangibleebot", "teeraid", "test certificate info", "the knowledge ai", "tineye", "traackr", "trendictionbot", "trendsmap", "turnitinbot", "tweetedtimes", "tweetmemebot", "twikle", "twitjobsearch", "twitmunin", "twitterbot", "twurly", "typhoeus", "umbot", "unwindfetch", "updown", "uptimerobot", "vagabondo", "vb project", "vigil", "vkshare", "voilabot", "vrcrawler", "wasalive-bot", "watchsumo", "wbsearchbot", "webceo", "webscout", "wesee", "wget", "whatsapp", "wikido", "woorank", "wordpress", "woriobot", "wormly", "wotbox", "xenu link sleuth", "xing-contenttabreceiver", "xovibot", "yacybot", "yahoo-ad-monitoring", "yandex", "yanga", "yeti", "yourls", "zabbix", "zelist.ro", "zibb", "zitebot", "zoombot", "zoominfobot", "zyborg", "amazonbot", "anthropic-ai", "bytespider", "ccbot", "chatgpt-user", "claude-web", "cohere-ai", "facebookbot", "google-extended", "googleother", "gptbot", "omgili", "perplexitybot", "webz.io", "youbot", "httpie", "eventmachine httpclient", "go 1.1 package http", "htmlparser", "http_request2", "httpclient", "jakarta commons", "java", "libwww-perl", "lwp-trivial", "ruby"];
