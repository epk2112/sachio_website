/*! For license information please see main.js.LICENSE */
buildinfo = {
    buildname: "fs-webpack-build",
    ver: "5.8.1",
    template: "newclientcustom"
},
function(e) {
    function t(i) {
        if (n[i])
            return n[i].exports;
        var o = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return e[i].call(o.exports, o, o.exports, t),
        o.l = !0,
        o.exports
    }
    var n = {};
    t.m = e,
    t.c = n,
    t.d = function(e, n, i) {
        t.o(e, n) || Object.defineProperty(e, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }
    ,
    t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(n, "a", n),
        n
    }
    ,
    t.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    t.p = "",
    t(t.s = 7)
}([function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = (t.$body = $("body"),
    t.$pageBodyWrapper = $("#fsPageBodyWrapper"),
    t.$header = $("#fsHeader"),
    t.$section = $("section"),
    t.isHome = $(".home").length,
    t.notDraftMode = !$(".fsDraftMode").length,
    t.notComposeMode = !$(".fsComposeMode").length,
    t.$window = $(window),
    t.$navMain = $(".nav-main"),
    t.$navMain_level1 = $(".nav-main .fsNavLevel1"))
      , i = (t.$navTier = $(".nav-tier"),
    t.$navSub = $(".nav-sub"),
    t.sectionTitle = n.find('> li[class*="fsNavCurrentPage"] > a').text(),
    t.$navMainMobile = $(".nav-main-mobile"));
    t.mobileMenuOpen = ".mobile-open button",
    t.mobileMenuClose = ".mobile-close button",
    t.$mobileParentNavs = i.find(".fsNavParentPage"),
    t.$calendarGrid = $(".fsCalendar.fsGrid"),
    t.$slideshowSubtypeHorizontal = $(".fsSlideshow.fsSlideshowHorizontal"),
    t.$siteSearch = $(".search-container"),
    t.$searchOpen = $(".search-container > header button"),
    t.$searchClose = $(".search-close button"),
    t.$tableStyle = $("table.fs_style_31, table.fsElementTable")
}
, function(e, t) {
    function n(e) {
        backgroundElement = e,
        $(backgroundElement).each(function() {
            var e = $(this).find("img").attr("src");
            $(this).css("background-image", 'url("' + e + '")')
        })
    }
    function i(e, t, n) {
        var i;
        return function() {
            var o = this
              , s = arguments
              , a = function() {
                i = null,
                n || e.apply(o, s)
            }
              , r = n && !i;
            clearTimeout(i),
            i = setTimeout(a, t),
            r && e.apply(o, s)
        }
    }
    function o(e, t) {
        var n, i, o = 100;
        n = function n() {
            e.find("input.gsc-input").length ? $.support.placeholder ? e.find("input.gsc-input").attr("placeholder", t) : e.find("input.gsc-input").attr("value", t) : o > 0 && (i = setTimeout(n, 100),
            o -= 1)
        }
        ,
        i = setTimeout(n, 100)
    }
    function s(e, t) {
        return e.replace(/\{([\w\.]*)\}/g, function(e, n) {
            for (var i = n.split("."), o = t[i.shift()], s = 0, a = i.length; s < a; s++)
                o = o[i[s]];
            return void 0 !== o && null !== o ? o : ""
        })
    }
    function a() {
        $.fn.randomize = function(e) {
            return (e ? $(this).find(e) : $(this).children()).parent().each(function() {
                $(this).children(e).sort(function() {
                    return Math.round(Math.random()) - .5
                }).detach().appendTo(this)
            }),
            this
        }
    }
    function r(e, t) {
        var n = function n(i) {
            var o = Array.from(e.querySelectorAll('a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])')).filter(function(e) {
                return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
            })
              , s = o[0];
            lastFocusableEl = o[o.length - 1];
            var a = "Tab" === i.key || 9 === i.keyCode
              , r = "Escape" === i.key || 27 === i.keyCode;
            (a || r) && (r && (this.callback = t,
            this.callback(e, n)),
            i.shiftKey ? document.activeElement === s && (lastFocusableEl.focus(),
            i.preventDefault()) : document.activeElement === lastFocusableEl && (s.focus(),
            i.preventDefault()))
        };
        e.addEventListener("keydown", n)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.backgroundImage = n,
    t.debounce = i,
    t.placeholder = o,
    t.nano = s,
    t.randomGenerator = a,
    t.trapFocus = r
}
, function(e, t) {
    function n(e, t) {
        if (0 === e.length || 0 === t.length)
            return !1;
        var n = $(e).eq(0)
          , i = n.attr("data-image-sizes")
          , o = n.attr("data-aspect-ratio");
        $(t).eq(0).attr("data-image-sizes", i).attr("data-aspect-ratio", o),
        FS.util.updateDynamicImages($(t).eq(0))
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.moveResourceImage = n
}
, function(e, t, n) {
    function i(e, t) {
        if (!e)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" != typeof t && "function" != typeof t ? e : t
    }
    function o(e, t) {
        if ("function" != typeof t && null !== t)
            throw new TypeError("Super expression must either be null or a function, not " + typeof t);
        e.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }),
        t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }
    function s(e, t) {
        if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.MultiRequestFeed = t.FSFeeds = void 0;
    var a = function() {
        function e(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        return function(t, n, i) {
            return n && e(t.prototype, n),
            i && e(t, i),
            t
        }
    }()
      , r = n(1)
      , l = function() {
        function e(t, n, i) {
            s(this, e),
            this.target = t,
            this.endpoint = t.attr("data-feed-url"),
            this.options = n,
            this.postData,
            this.defaultTemplate = n.defaultTemplate || ['<article class="fsFeeds-post">', '<div class="post-image" style="background-image: url({image})">', '<img src="{image}" class="post-image-inline" />', "</div>", '<div class="post-content">', '<div class="like-count">{like_count}</div>', '<div class="post-description">{date} {unformatted_message}</div>', "</div>", "</article>"],
            this.dateFormat = n.dateFormat || "D MMMM YYYY",
            this.templates = n.templates || {
                Facebook: this.defaultTemplate,
                Twitter: this.defaultTemplate,
                Instagram: this.defaultTemplate,
                YouTube: this.defaultTemplate
            },
            this.loadMoreTemplate = n.loadMoreTemplate || "<button>Load More</button>",
            this.renderedTemplate = [],
            this.callback = i,
            this.loadMore = n.loadMore,
            this.filters = n.filters || {}
        }
        return a(e, [{
            key: "requestPostData",
            value: function(e, t, n) {
                $.getJSON(e, t, function(e) {}
                .bind(this)).done(function(e) {
                    n(e.posts.items)
                }
                .bind(this)).fail(function() {
                    this.target.append("<span>Sorry, an error occured when retrieving this feed data. Please refresh the page to try again.</span>").css("textAlign", "center")
                })
            }
        }, {
            key: "getTemplate",
            value: function(e) {
                return this.templates ? this.templates[e] || this.defaultTemplate : this.defaultTemplate
            }
        }, {
            key: "construct",
            value: function() {
                var e = this
                  , t = [];
                return this.postData.forEach(function(n) {
                    var n = n
                      , i = n.source.source;
                    "Instagram" == i && n.additional_photos && n.additional_photos.length && (n.image = n.additional_photos[0]),
                    n.date = moment(n.external_created_at).format(e.dateFormat),
                    t.push((0,
                    r.nano)(e.getTemplate(i).join("\n"), n))
                }),
                t
            }
        }, {
            key: "render",
            value: function(e) {
                this.target.find("> .fsElementContent").append(e.join(""))
            }
        }, {
            key: "renderLoadMore",
            value: function() {
                var e = this;
                this.target.append($(this.loadMoreTemplate).addClass("fsFeeds-load-more")),
                $(document).on("click", ".fsFeeds-load-more", function() {
                    e.options.feed.page = e.options.feed.page + 1,
                    e.requestPostData(e.endpoint, e.options.feed, function(t) {
                        e.postData = e.postOrder ? e.sortPosts(t) : t,
                        e.renderedTemplate = e.construct(e.postData),
                        e.render(e.renderedTemplate),
                        e.callback()
                    })
                })
            }
        }, {
            key: "sortPosts",
            value: function(e) {
                var t = [];
                return this.postOrder.forEach(function(n) {
                    var i = e.find(function(e) {
                        return e.source.source == n
                    });
                    t.push(i),
                    e = e.filter(function(e) {
                        return e !== i
                    })
                }),
                t
            }
        }, {
            key: "init",
            value: function() {
                var e = this;
                this.options.feed.page = this.options.feed.page || 1,
                this.loadMore && this.renderLoadMore(),
                this.requestPostData(this.endpoint, this.options.feed, function(t) {
                    e.postData = e.postOrder ? e.sortPosts(t) : t,
                    e.renderedTemplate = e.construct(e.postData),
                    e.render(e.renderedTemplate),
                    e.callback()
                })
            }
        }]),
        e
    }()
      , d = function(e) {
        function t() {
            return s(this, t),
            i(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
        }
        return o(t, e),
        a(t, [{
            key: "requestPostData",
            value: function(e, t, n) {
                var i = this
                  , o = Object.entries(this.filters)
                  , s = e.match(/filter=([\d,]+)/)
                  , a = (null == s || s[1].split(",").filter(function(e) {
                    return e
                }),
                {})
                  , r = Object.entries(e.split("?filter=").pop().split(","))
                  , l = r.map(function(t) {
                    return e.split("?")[0] + "?filter=" + t[1]
                });
                if ("" === r[0][1])
                    return void console.error("Error: Please select sources in the element");
                Promise.all(l.map(function(e) {
                    return fetch(e).then(function(e) {
                        return e.json()
                    })
                })).then(function(t) {
                    t.forEach(function(t, n) {
                        t.posts.items[0].source.source.toLowerCase()in a ? a[t.posts.items[0].source.source.toLowerCase()] = a[t.posts.items[0].source.source.toLowerCase()] + "," + l[n].split("?filter=")[1] : a[t.posts.items[0].source.source.toLowerCase()] = e.split("?filter")[0] + "?filter=" + l[n].split("?filter=")[1]
                    }),
                    o.forEach(function(t) {
                        void 0 === a[t[0]] ? a[t[0]] = e.split("?filter")[0] + "?filter=" + t[0] + "&per=" + t[1] + "&page=" + i.options.feed.page : a[t[0]] = a[t[0]] + "&per=" + t[1] + "&page=" + i.options.feed.page
                    });
                    var s = new Set(o.flatMap(function(e) {
                        return e[0]in a ? [e[0]] : []
                    }).concat(Object.keys(a)))
                      , r = !0
                      , d = !1
                      , f = void 0;
                    try {
                        for (var c, u = s[Symbol.iterator](); !(r = (c = u.next()).done); r = !0) {
                            var h = c.value
                              , p = a[h];
                            delete a[h],
                            a[h] = p
                        }
                    } catch (e) {
                        d = !0,
                        f = e
                    } finally {
                        try {
                            !r && u.return && u.return()
                        } finally {
                            if (d)
                                throw f
                        }
                    }
                    Promise.all(Object.values(a).map(function(e) {
                        return fetch(e).then(function(e) {
                            return e.json()
                        })
                    })).then(n)
                })
            }
        }, {
            key: "renderLoadMore",
            value: function() {
                var e = this;
                this.target.append($(this.loadMoreTemplate).addClass("fsFeeds-load-more")),
                $(document).on("click", ".fsFeeds-load-more", function() {
                    e.options.feed.page = e.options.feed.page + 1,
                    e.requestPostData(e.endpoint, e.options.feed, function(t) {
                        e.postData = e.combinePosts(t),
                        e.renderedTemplate = e.construct(e.postData),
                        e.render(e.renderedTemplate),
                        e.callback()
                    })
                })
            }
        }, {
            key: "combinePosts",
            value: function(e) {
                return e.map(function(e) {
                    return e.posts.items
                }).reduce(function(e, t) {
                    return e.concat(t)
                }, [])
            }
        }, {
            key: "init",
            value: function() {
                var e = this;
                this.options.feed.page = this.options.feed.page || 1,
                this.loadMore && this.renderLoadMore(),
                this.requestPostData(this.endpoint, this.options.feed, function(t) {
                    e.postData = e.combinePosts(t),
                    e.renderedTemplate = e.construct(e.postData),
                    e.render(e.renderedTemplate),
                    e.callback()
                })
            }
        }]),
        t
    }(l);
    $.fn.fsFeedPull = function(e, t) {
        new l(this,e,t).init()
    }
    ,
    $.fn.fsMultiFeedPull = function(e, t) {
        new d(this,e,t).init()
    }
    ,
    t.FSFeeds = l,
    t.MultiRequestFeed = d
}
, function(e, t) {
    !function(e, t, n, i) {
        e.fn.doubleTapToGo = function(i) {
            return !!("ontouchstart"in t || navigator.msMaxTouchPoints || navigator.userAgent.toLowerCase().match(/windows phone os 7/i)) && (t.isTouching = !1,
            this.each(function(i) {
                var o = !1;
                e(this).on("touchstart", function(e) {
                    "touchstart" === e.type && (t.isTouching = !0)
                }),
                e(this).on("click", function(n) {
                    var i = e(this);
                    i[0] != o[0] && !0 === t.isTouching && (n.preventDefault(),
                    o = i),
                    t.isTouching = !1
                }),
                e(n).on("click touchstart MSPointerDown", function(t) {
                    for (var n = !0, i = e(t.target).parents(), s = 0; s < i.length; s++)
                        i[s] == o[0] && (n = !1);
                    n && (o = !1)
                })
            }),
            this)
        }
    }(jQuery, window, document)
}
, function(e, t) {
    !function(e, t) {
        function n(e, t, n) {
            var i = e.children()
              , o = !1;
            e.empty();
            for (var a = 0, r = i.length; a < r; a++) {
                var l = i.eq(a);
                if (e.append(l),
                n && e.append(n),
                s(e, t)) {
                    l.remove(),
                    o = !0;
                    break
                }
                n && n.detach()
            }
            return o
        }
        function i(t, n, a, r, l) {
            var d = !1;
            return t.contents().detach().each(function() {
                var f = this
                  , c = e(f);
                if (void 0 === f)
                    return !0;
                if (c.is("script, .dotdotdot-keep"))
                    t.append(c);
                else {
                    if (d)
                        return !0;
                    t.append(c),
                    !l || c.is(r.after) || c.find(r.after).length || t[t.is("a, table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style") ? "after" : "append"](l),
                    s(a, r) && (d = 3 == f.nodeType ? o(c, n, a, r, l) : i(c, n, a, r, l)),
                    d || l && l.detach()
                }
            }),
            n.addClass("is-truncated"),
            d
        }
        function o(t, n, i, o, r) {
            var f = t[0];
            if (!f)
                return !1;
            var u = d(f)
              , h = -1 !== u.indexOf(" ") ? " " : "　"
              , p = "letter" == o.wrap ? "" : h
              , m = u.split(p)
              , v = -1
              , g = -1
              , b = 0
              , $ = m.length - 1;
            for (o.fallbackToLetter && 0 == b && 0 == $ && (p = "",
            m = u.split(p),
            $ = m.length - 1); b <= $ && (0 != b || 0 != $); ) {
                var w = Math.floor((b + $) / 2);
                if (w == g)
                    break;
                g = w,
                l(f, m.slice(0, g + 1).join(p) + o.ellipsis),
                i.children().each(function() {
                    e(this).toggle().toggle()
                }),
                s(i, o) ? ($ = g,
                o.fallbackToLetter && 0 == b && 0 == $ && (p = "",
                m = m[0].split(p),
                v = -1,
                g = -1,
                b = 0,
                $ = m.length - 1)) : (v = g,
                b = g)
            }
            if (-1 == v || 1 == m.length && 0 == m[0].length) {
                var y = t.parent();
                t.detach();
                var C = r && r.closest(y).length ? r.length : 0;
                if (y.contents().length > C ? f = c(y.contents().eq(-1 - C), n) : (f = c(y, n, !0),
                C || y.detach()),
                f && (u = a(d(f), o),
                l(f, u),
                C && r)) {
                    var k = r.parent();
                    e(f).parent().append(r),
                    e.trim(k.html()) || k.remove()
                }
            } else
                u = a(m.slice(0, v + 1).join(p), o),
                l(f, u);
            return !0
        }
        function s(e, t) {
            return e.innerHeight() > t.maxHeight
        }
        function a(t, n) {
            for (; e.inArray(t.slice(-1), n.lastCharacter.remove) > -1; )
                t = t.slice(0, -1);
            return e.inArray(t.slice(-1), n.lastCharacter.noEllipsis) < 0 && (t += n.ellipsis),
            t
        }
        function r(e) {
            return {
                width: e.innerWidth(),
                height: e.innerHeight()
            }
        }
        function l(e, t) {
            e.innerText ? e.innerText = t : e.nodeValue ? e.nodeValue = t : e.textContent && (e.textContent = t)
        }
        function d(e) {
            return e.innerText ? e.innerText : e.nodeValue ? e.nodeValue : e.textContent ? e.textContent : ""
        }
        function f(e) {
            do {
                e = e.previousSibling
            } while (e && 1 !== e.nodeType && 3 !== e.nodeType);
            return e
        }
        function c(t, n, i) {
            var o, s = t && t[0];
            if (s) {
                if (!i) {
                    if (3 === s.nodeType)
                        return s;
                    if (e.trim(t.text()))
                        return c(t.contents().last(), n)
                }
                for (o = f(s); !o; ) {
                    if (t = t.parent(),
                    t.is(n) || !t.length)
                        return !1;
                    o = f(t[0])
                }
                if (o)
                    return c(e(o), n)
            }
            return !1
        }
        function u(t, n) {
            return !!t && ("string" == typeof t ? (t = e(t, n),
            !!t.length && t) : !!t.jquery && t)
        }
        function h(e) {
            for (var t = e.innerHeight(), n = ["paddingTop", "paddingBottom"], i = 0, o = n.length; i < o; i++) {
                var s = parseInt(e.css(n[i]), 10);
                isNaN(s) && (s = 0),
                t -= s
            }
            return t
        }
        if (!e.fn.dotdotdot) {
            e.fn.dotdotdot = function(t) {
                if (0 == this.length)
                    return e.fn.dotdotdot.debug('No element found for "' + this.selector + '".'),
                    this;
                if (this.length > 1)
                    return this.each(function() {
                        e(this).dotdotdot(t)
                    });
                var o = this
                  , a = o.contents();
                o.data("dotdotdot") && o.trigger("destroy.dot"),
                o.data("dotdotdot-style", o.attr("style") || ""),
                o.css("word-wrap", "break-word"),
                "nowrap" === o.css("white-space") && o.css("white-space", "normal"),
                o.bind_events = function() {
                    return o.bind("update.dot", function(t, r) {
                        switch (o.removeClass("is-truncated"),
                        t.preventDefault(),
                        t.stopPropagation(),
                        typeof l.height) {
                        case "number":
                            l.maxHeight = l.height;
                            break;
                        case "function":
                            l.maxHeight = l.height.call(o[0]);
                            break;
                        default:
                            l.maxHeight = h(o)
                        }
                        l.maxHeight += l.tolerance,
                        void 0 !== r && (("string" == typeof r || "nodeType"in r && 1 === r.nodeType) && (r = e("<div />").append(r).contents()),
                        r instanceof e && (a = r)),
                        m = o.wrapInner('<div class="dotdotdot" />').children(),
                        m.contents().detach().end().append(a.clone(!0)).find("br").replaceWith("  <br />  ").end().css({
                            height: "auto",
                            width: "auto",
                            border: "none",
                            padding: 0,
                            margin: 0
                        });
                        var f = !1
                          , c = !1;
                        return d.afterElement && (f = d.afterElement.clone(!0),
                        f.show(),
                        d.afterElement.detach()),
                        s(m, l) && (c = "children" == l.wrap ? n(m, l, f) : i(m, o, m, l, f)),
                        m.replaceWith(m.contents()),
                        m = null,
                        e.isFunction(l.callback) && l.callback.call(o[0], c, a),
                        d.isTruncated = c,
                        c
                    }).bind("isTruncated.dot", function(e, t) {
                        return e.preventDefault(),
                        e.stopPropagation(),
                        "function" == typeof t && t.call(o[0], d.isTruncated),
                        d.isTruncated
                    }).bind("originalContent.dot", function(e, t) {
                        return e.preventDefault(),
                        e.stopPropagation(),
                        "function" == typeof t && t.call(o[0], a),
                        a
                    }).bind("destroy.dot", function(e) {
                        e.preventDefault(),
                        e.stopPropagation(),
                        o.unwatch().unbind_events().contents().detach().end().append(a).attr("style", o.data("dotdotdot-style") || "").removeClass("is-truncated").data("dotdotdot", !1)
                    }),
                    o
                }
                ,
                o.unbind_events = function() {
                    return o.unbind(".dot"),
                    o
                }
                ,
                o.watch = function() {
                    if (o.unwatch(),
                    "window" == l.watch) {
                        var t = e(window)
                          , n = t.width()
                          , i = t.height();
                        t.bind("resize.dot" + d.dotId, function() {
                            n == t.width() && i == t.height() && l.windowResizeFix || (n = t.width(),
                            i = t.height(),
                            c && clearInterval(c),
                            c = setTimeout(function() {
                                o.trigger("update.dot")
                            }, 100))
                        })
                    } else
                        f = r(o),
                        c = setInterval(function() {
                            if (o.is(":visible")) {
                                var e = r(o);
                                f.width == e.width && f.height == e.height || (o.trigger("update.dot"),
                                f = e)
                            }
                        }, 500);
                    return o
                }
                ,
                o.unwatch = function() {
                    return e(window).unbind("resize.dot" + d.dotId),
                    c && clearInterval(c),
                    o
                }
                ;
                var l = e.extend(!0, {}, e.fn.dotdotdot.defaults, t)
                  , d = {}
                  , f = {}
                  , c = null
                  , m = null;
                return l.lastCharacter.remove instanceof Array || (l.lastCharacter.remove = e.fn.dotdotdot.defaultArrays.lastCharacter.remove),
                l.lastCharacter.noEllipsis instanceof Array || (l.lastCharacter.noEllipsis = e.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis),
                d.afterElement = u(l.after, o),
                d.isTruncated = !1,
                d.dotId = p++,
                o.data("dotdotdot", !0).bind_events().trigger("update.dot"),
                l.watch && o.watch(),
                o
            }
            ,
            e.fn.dotdotdot.defaults = {
                ellipsis: "... ",
                wrap: "word",
                fallbackToLetter: !0,
                lastCharacter: {},
                tolerance: 0,
                callback: null,
                after: null,
                height: null,
                watch: !1,
                windowResizeFix: !0
            },
            e.fn.dotdotdot.defaultArrays = {
                lastCharacter: {
                    remove: [" ", "　", ",", ";", ".", "!", "?"],
                    noEllipsis: []
                }
            },
            e.fn.dotdotdot.debug = function(e) {}
            ;
            var p = 1
              , m = e.fn.html;
            e.fn.html = function(t) {
                return void 0 != t && !e.isFunction(t) && this.data("dotdotdot") ? this.trigger("update", [t]) : m.apply(this, arguments)
            }
            ;
            var v = e.fn.text;
            e.fn.text = function(t) {
                return void 0 != t && !e.isFunction(t) && this.data("dotdotdot") ? (t = e("<div />").text(t).html(),
                this.trigger("update", [t])) : v.apply(this, arguments)
            }
        }
    }(jQuery),
    jQuery(document).ready(function(e) {
        e(".dot-ellipsis").each(function() {
            var t = e(this).hasClass("dot-resize-update")
              , n = e(this).hasClass("dot-timer-update")
              , i = 0
              , o = e(this).attr("class").split(/\s+/);
            e.each(o, function(e, t) {
                var n = t.match(/^dot-height-(\d+)$/);
                null !== n && (i = Number(n[1]))
            });
            var s = new Object;
            n && (s.watch = !0),
            t && (s.watch = "window"),
            i > 0 && (s.height = i),
            e(this).dotdotdot(s)
        })
    }),
    jQuery(window).on("load", function() {
        jQuery(".dot-ellipsis.dot-load-update").trigger("update.dot")
    })
}
, function(e, t) {
    !function() {
        "use strict";
        function e(i) {
            if (!i)
                throw new Error("No options passed to Waypoint constructor");
            if (!i.element)
                throw new Error("No element option passed to Waypoint constructor");
            if (!i.handler)
                throw new Error("No handler option passed to Waypoint constructor");
            this.key = "waypoint-" + t,
            this.options = e.Adapter.extend({}, e.defaults, i),
            this.element = this.options.element,
            this.adapter = new e.Adapter(this.element),
            this.callback = i.handler,
            this.axis = this.options.horizontal ? "horizontal" : "vertical",
            this.enabled = this.options.enabled,
            this.triggerPoint = null,
            this.group = e.Group.findOrCreate({
                name: this.options.group,
                axis: this.axis
            }),
            this.context = e.Context.findOrCreateByElement(this.options.context),
            e.offsetAliases[this.options.offset] && (this.options.offset = e.offsetAliases[this.options.offset]),
            this.group.add(this),
            this.context.add(this),
            n[this.key] = this,
            t += 1
        }
        var t = 0
          , n = {};
        e.prototype.queueTrigger = function(e) {
            this.group.queueTrigger(this, e)
        }
        ,
        e.prototype.trigger = function(e) {
            this.enabled && this.callback && this.callback.apply(this, e)
        }
        ,
        e.prototype.destroy = function() {
            this.context.remove(this),
            this.group.remove(this),
            delete n[this.key]
        }
        ,
        e.prototype.disable = function() {
            return this.enabled = !1,
            this
        }
        ,
        e.prototype.enable = function() {
            return this.context.refresh(),
            this.enabled = !0,
            this
        }
        ,
        e.prototype.next = function() {
            return this.group.next(this)
        }
        ,
        e.prototype.previous = function() {
            return this.group.previous(this)
        }
        ,
        e.invokeAll = function(e) {
            var t = [];
            for (var i in n)
                t.push(n[i]);
            for (var o = 0, s = t.length; o < s; o++)
                t[o][e]()
        }
        ,
        e.destroyAll = function() {
            e.invokeAll("destroy")
        }
        ,
        e.disableAll = function() {
            e.invokeAll("disable")
        }
        ,
        e.enableAll = function() {
            e.Context.refreshAll();
            for (var t in n)
                n[t].enabled = !0;
            return this
        }
        ,
        e.refreshAll = function() {
            e.Context.refreshAll()
        }
        ,
        e.viewportHeight = function() {
            return window.innerHeight || document.documentElement.clientHeight
        }
        ,
        e.viewportWidth = function() {
            return document.documentElement.clientWidth
        }
        ,
        e.adapters = [],
        e.defaults = {
            context: window,
            continuous: !0,
            enabled: !0,
            group: "default",
            horizontal: !1,
            offset: 0
        },
        e.offsetAliases = {
            "bottom-in-view": function() {
                return this.context.innerHeight() - this.adapter.outerHeight()
            },
            "right-in-view": function() {
                return this.context.innerWidth() - this.adapter.outerWidth()
            }
        },
        window.Waypoint = e
    }(),
    function() {
        "use strict";
        function e(e) {
            window.setTimeout(e, 1e3 / 60)
        }
        function t(e) {
            this.element = e,
            this.Adapter = o.Adapter,
            this.adapter = new this.Adapter(e),
            this.key = "waypoint-context-" + n,
            this.didScroll = !1,
            this.didResize = !1,
            this.oldScroll = {
                x: this.adapter.scrollLeft(),
                y: this.adapter.scrollTop()
            },
            this.waypoints = {
                vertical: {},
                horizontal: {}
            },
            e.waypointContextKey = this.key,
            i[e.waypointContextKey] = this,
            n += 1,
            o.windowContext || (o.windowContext = !0,
            o.windowContext = new t(window)),
            this.createThrottledScrollHandler(),
            this.createThrottledResizeHandler()
        }
        var n = 0
          , i = {}
          , o = window.Waypoint
          , s = window.onload;
        t.prototype.add = function(e) {
            var t = e.options.horizontal ? "horizontal" : "vertical";
            this.waypoints[t][e.key] = e,
            this.refresh()
        }
        ,
        t.prototype.checkEmpty = function() {
            var e = this.Adapter.isEmptyObject(this.waypoints.horizontal)
              , t = this.Adapter.isEmptyObject(this.waypoints.vertical)
              , n = this.element == this.element.window;
            e && t && !n && (this.adapter.off(".waypoints"),
            delete i[this.key])
        }
        ,
        t.prototype.createThrottledResizeHandler = function() {
            function e() {
                t.handleResize(),
                t.didResize = !1
            }
            var t = this;
            this.adapter.on("resize.waypoints", function() {
                t.didResize || (t.didResize = !0,
                o.requestAnimationFrame(e))
            })
        }
        ,
        t.prototype.createThrottledScrollHandler = function() {
            function e() {
                t.handleScroll(),
                t.didScroll = !1
            }
            var t = this;
            this.adapter.on("scroll.waypoints", function() {
                t.didScroll && !o.isTouch || (t.didScroll = !0,
                o.requestAnimationFrame(e))
            })
        }
        ,
        t.prototype.handleResize = function() {
            o.Context.refreshAll()
        }
        ,
        t.prototype.handleScroll = function() {
            var e = {}
              , t = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
            for (var n in t) {
                var i = t[n]
                  , o = i.newScroll > i.oldScroll
                  , s = o ? i.forward : i.backward;
                for (var a in this.waypoints[n]) {
                    var r = this.waypoints[n][a];
                    if (null !== r.triggerPoint) {
                        var l = i.oldScroll < r.triggerPoint
                          , d = i.newScroll >= r.triggerPoint
                          , f = l && d
                          , c = !l && !d;
                        (f || c) && (r.queueTrigger(s),
                        e[r.group.id] = r.group)
                    }
                }
            }
            for (var u in e)
                e[u].flushTriggers();
            this.oldScroll = {
                x: t.horizontal.newScroll,
                y: t.vertical.newScroll
            }
        }
        ,
        t.prototype.innerHeight = function() {
            return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
        }
        ,
        t.prototype.remove = function(e) {
            delete this.waypoints[e.axis][e.key],
            this.checkEmpty()
        }
        ,
        t.prototype.innerWidth = function() {
            return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
        }
        ,
        t.prototype.destroy = function() {
            var e = [];
            for (var t in this.waypoints)
                for (var n in this.waypoints[t])
                    e.push(this.waypoints[t][n]);
            for (var i = 0, o = e.length; i < o; i++)
                e[i].destroy()
        }
        ,
        t.prototype.refresh = function() {
            var e, t = this.element == this.element.window, n = t ? void 0 : this.adapter.offset(), i = {};
            this.handleScroll(),
            e = {
                horizontal: {
                    contextOffset: t ? 0 : n.left,
                    contextScroll: t ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: t ? 0 : n.top,
                    contextScroll: t ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            };
            for (var s in e) {
                var a = e[s];
                for (var r in this.waypoints[s]) {
                    var l, d, f, c, u, h = this.waypoints[s][r], p = h.options.offset, m = h.triggerPoint, v = 0, g = null == m;
                    h.element !== h.element.window && (v = h.adapter.offset()[a.offsetProp]),
                    "function" == typeof p ? p = p.apply(h) : "string" == typeof p && (p = parseFloat(p),
                    h.options.offset.indexOf("%") > -1 && (p = Math.ceil(a.contextDimension * p / 100))),
                    l = a.contextScroll - a.contextOffset,
                    h.triggerPoint = Math.floor(v + l - p),
                    d = m < a.oldScroll,
                    f = h.triggerPoint >= a.oldScroll,
                    c = d && f,
                    u = !d && !f,
                    !g && c ? (h.queueTrigger(a.backward),
                    i[h.group.id] = h.group) : !g && u ? (h.queueTrigger(a.forward),
                    i[h.group.id] = h.group) : g && a.oldScroll >= h.triggerPoint && (h.queueTrigger(a.forward),
                    i[h.group.id] = h.group)
                }
            }
            return o.requestAnimationFrame(function() {
                for (var e in i)
                    i[e].flushTriggers()
            }),
            this
        }
        ,
        t.findOrCreateByElement = function(e) {
            return t.findByElement(e) || new t(e)
        }
        ,
        t.refreshAll = function() {
            for (var e in i)
                i[e].refresh()
        }
        ,
        t.findByElement = function(e) {
            return i[e.waypointContextKey]
        }
        ,
        window.onload = function() {
            s && s(),
            t.refreshAll()
        }
        ,
        o.requestAnimationFrame = function(t) {
            (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e).call(window, t)
        }
        ,
        o.Context = t
    }(),
    function() {
        "use strict";
        function e(e, t) {
            return e.triggerPoint - t.triggerPoint
        }
        function t(e, t) {
            return t.triggerPoint - e.triggerPoint
        }
        function n(e) {
            this.name = e.name,
            this.axis = e.axis,
            this.id = this.name + "-" + this.axis,
            this.waypoints = [],
            this.clearTriggerQueues(),
            i[this.axis][this.name] = this
        }
        var i = {
            vertical: {},
            horizontal: {}
        }
          , o = window.Waypoint;
        n.prototype.add = function(e) {
            this.waypoints.push(e)
        }
        ,
        n.prototype.clearTriggerQueues = function() {
            this.triggerQueues = {
                up: [],
                down: [],
                left: [],
                right: []
            }
        }
        ,
        n.prototype.flushTriggers = function() {
            for (var n in this.triggerQueues) {
                var i = this.triggerQueues[n]
                  , o = "up" === n || "left" === n;
                i.sort(o ? t : e);
                for (var s = 0, a = i.length; s < a; s += 1) {
                    var r = i[s];
                    (r.options.continuous || s === i.length - 1) && r.trigger([n])
                }
            }
            this.clearTriggerQueues()
        }
        ,
        n.prototype.next = function(t) {
            this.waypoints.sort(e);
            var n = o.Adapter.inArray(t, this.waypoints);
            return n === this.waypoints.length - 1 ? null : this.waypoints[n + 1]
        }
        ,
        n.prototype.previous = function(t) {
            this.waypoints.sort(e);
            var n = o.Adapter.inArray(t, this.waypoints);
            return n ? this.waypoints[n - 1] : null
        }
        ,
        n.prototype.queueTrigger = function(e, t) {
            this.triggerQueues[t].push(e)
        }
        ,
        n.prototype.remove = function(e) {
            var t = o.Adapter.inArray(e, this.waypoints);
            t > -1 && this.waypoints.splice(t, 1)
        }
        ,
        n.prototype.first = function() {
            return this.waypoints[0]
        }
        ,
        n.prototype.last = function() {
            return this.waypoints[this.waypoints.length - 1]
        }
        ,
        n.findOrCreate = function(e) {
            return i[e.axis][e.name] || new n(e)
        }
        ,
        o.Group = n
    }(),
    function() {
        "use strict";
        function e(e) {
            this.$element = t(e)
        }
        var t = window.jQuery
          , n = window.Waypoint;
        t.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(t, n) {
            e.prototype[n] = function() {
                var e = Array.prototype.slice.call(arguments);
                return this.$element[n].apply(this.$element, e)
            }
        }),
        t.each(["extend", "inArray", "isEmptyObject"], function(n, i) {
            e[i] = t[i]
        }),
        n.adapters.push({
            name: "jquery",
            Adapter: e
        }),
        n.Adapter = e
    }(),
    function() {
        "use strict";
        function e(e) {
            return function() {
                var n = []
                  , i = arguments[0];
                return e.isFunction(arguments[0]) && (i = e.extend({}, arguments[1]),
                i.handler = arguments[0]),
                this.each(function() {
                    var o = e.extend({}, i, {
                        element: this
                    });
                    "string" == typeof o.context && (o.context = e(this).closest(o.context)[0]),
                    n.push(new t(o))
                }),
                n
            }
        }
        var t = window.Waypoint;
        window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)),
        window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto))
    }()
}
, function(e, t, n) {
    n(8),
    n(9),
    n(22)
}
, function(e, t) {}
, function(e, t, n) {
    !function() {
        if (void 0 !== window.buildinfo) {
            var e = document.getElementsByTagName("body")[0];
            e.setAttribute("data-buildver", window.buildinfo.ver),
            e.setAttribute("data-sitetemplate", window.buildinfo.template)
        }
    }(),
    n(10),
    n(11),
    INITIATE_ALL.init()
}
, function(e, t) {
    !function(e, t, n) {
        function i(e, t) {
            return typeof e === t
        }
        function o() {
            return "function" != typeof t.createElement ? t.createElement(arguments[0]) : C ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
        }
        function s(e) {
            return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
                return t + n.toUpperCase()
            }).replace(/^-/, "")
        }
        function a() {
            var e = t.body;
            return e || (e = o(C ? "svg" : "body"),
            e.fake = !0),
            e
        }
        function r(e, n, i, s) {
            var r, l, d, f, c = "modernizr", u = o("div"), h = a();
            if (parseInt(i, 10))
                for (; i--; )
                    d = o("div"),
                    d.id = s ? s[i] : c + (i + 1),
                    u.appendChild(d);
            return r = o("style"),
            r.type = "text/css",
            r.id = "s" + c,
            (h.fake ? h : u).appendChild(r),
            h.appendChild(u),
            r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(t.createTextNode(e)),
            u.id = c,
            h.fake && (h.style.background = "",
            h.style.overflow = "hidden",
            f = y.style.overflow,
            y.style.overflow = "hidden",
            y.appendChild(h)),
            l = n(u, e),
            h.fake ? (h.parentNode.removeChild(h),
            y.style.overflow = f,
            y.offsetHeight) : u.parentNode.removeChild(u),
            !!l
        }
        function l(e, t) {
            return !!~("" + e).indexOf(t)
        }
        function d(e, t) {
            return function() {
                return e.apply(t, arguments)
            }
        }
        function f(e, t, n) {
            var o;
            for (var s in e)
                if (e[s]in t)
                    return !1 === n ? e[s] : (o = t[e[s]],
                    i(o, "function") ? d(o, n || t) : o);
            return !1
        }
        function c(t, n, i) {
            var o;
            if ("getComputedStyle"in e) {
                o = getComputedStyle.call(e, t, n);
                var s = e.console;
                if (null !== o)
                    i && (o = o.getPropertyValue(i));
                else if (s) {
                    var a = s.error ? "error" : "log";
                    s[a].call(s, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
                }
            } else
                o = !n && t.currentStyle && t.currentStyle[i];
            return o
        }
        function u(e) {
            return e.replace(/([A-Z])/g, function(e, t) {
                return "-" + t.toLowerCase()
            }).replace(/^ms-/, "-ms-")
        }
        function h(t, i) {
            var o = t.length;
            if ("CSS"in e && "supports"in e.CSS) {
                for (; o--; )
                    if (e.CSS.supports(u(t[o]), i))
                        return !0;
                return !1
            }
            if ("CSSSupportsRule"in e) {
                for (var s = []; o--; )
                    s.push("(" + u(t[o]) + ":" + i + ")");
                return s = s.join(" or "),
                r("@supports (" + s + ") { #modernizr { position: absolute; } }", function(e) {
                    return "absolute" == c(e, null, "position")
                })
            }
            return n
        }
        function p(e, t, a, r) {
            function d() {
                c && (delete M.style,
                delete M.modElem)
            }
            if (r = !i(r, "undefined") && r,
            !i(a, "undefined")) {
                var f = h(e, a);
                if (!i(f, "undefined"))
                    return f
            }
            for (var c, u, p, m, v, g = ["modernizr", "tspan", "samp"]; !M.style && g.length; )
                c = !0,
                M.modElem = o(g.shift()),
                M.style = M.modElem.style;
            for (p = e.length,
            u = 0; u < p; u++)
                if (m = e[u],
                v = M.style[m],
                l(m, "-") && (m = s(m)),
                M.style[m] !== n) {
                    if (r || i(a, "undefined"))
                        return d(),
                        "pfx" != t || m;
                    try {
                        M.style[m] = a
                    } catch (e) {}
                    if (M.style[m] != v)
                        return d(),
                        "pfx" != t || m
                }
            return d(),
            !1
        }
        function m(e, t, n, o, s) {
            var a = e.charAt(0).toUpperCase() + e.slice(1)
              , r = (e + " " + S.join(a + " ") + a).split(" ");
            return i(t, "string") || i(t, "undefined") ? p(r, t, o, s) : (r = (e + " " + E.join(a + " ") + a).split(" "),
            f(r, t, n))
        }
        function v(e, t, i) {
            return m(e, n, n, t, i)
        }
        var g = []
          , b = []
          , $ = {
            _version: "3.5.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                b.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                b.push({
                    name: null,
                    fn: e
                })
            }
        }
          , w = function() {};
        w.prototype = $,
        w = new w,
        w.addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect);
        var y = t.documentElement
          , C = "svg" === y.nodeName.toLowerCase();
        w.addTest("audio", function() {
            var e = o("audio")
              , t = !1;
            try {
                (t = !!e.canPlayType) && (t = new Boolean(t),
                t.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""),
                t.mp3 = e.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/, ""),
                t.opus = e.canPlayType('audio/ogg; codecs="opus"') || e.canPlayType('audio/webm; codecs="opus"').replace(/^no$/, ""),
                t.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""),
                t.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
            } catch (e) {}
            return t
        });
        var k = function() {
            function e(e, t) {
                var s;
                return !!e && (t && "string" != typeof t || (t = o(t || "div")),
                e = "on" + e,
                s = e in t,
                !s && i && (t.setAttribute || (t = o("div")),
                t.setAttribute(e, ""),
                s = "function" == typeof t[e],
                t[e] !== n && (t[e] = n),
                t.removeAttribute(e)),
                s)
            }
            var i = !("onblur"in t.documentElement);
            return e
        }();
        $.hasEvent = k;
        var T = $._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
        $._prefixes = T;
        var x = "Moz O ms Webkit"
          , E = $._config.usePrefixes ? x.toLowerCase().split(" ") : [];
        $._domPrefixes = E,
        w.addTest("pointerevents", function() {
            var e = !1
              , t = E.length;
            for (e = w.hasEvent("pointerdown"); t-- && !e; )
                k(E[t] + "pointerdown") && (e = !0);
            return e
        });
        var S = $._config.usePrefixes ? x.split(" ") : [];
        $._cssomPrefixes = S;
        var P = function(t) {
            var i, o = T.length, s = e.CSSRule;
            if (void 0 === s)
                return n;
            if (!t)
                return !1;
            if (t = t.replace(/^@/, ""),
            (i = t.replace(/-/g, "_").toUpperCase() + "_RULE")in s)
                return "@" + t;
            for (var a = 0; a < o; a++) {
                var r = T[a];
                if (r.toUpperCase() + "_" + i in s)
                    return "@-" + r.toLowerCase() + "-" + t
            }
            return !1
        };
        $.atRule = P;
        var I = $.testStyles = r;
        w.addTest("touchevents", function() {
            var n;
            if ("ontouchstart"in e || e.DocumentTouch && t instanceof DocumentTouch)
                n = !0;
            else {
                var i = ["@media (", T.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
                I(i, function(e) {
                    n = 9 === e.offsetTop
                })
            }
            return n
        });
        var A = {
            elem: o("modernizr")
        };
        w._q.push(function() {
            delete A.elem
        });
        var M = {
            style: A.elem.style
        };
        w._q.unshift(function() {
            delete M.style
        }),
        $.testAllProps = m;
        var _ = $.prefixed = function(e, t, n) {
            return 0 === e.indexOf("@") ? P(e) : (-1 != e.indexOf("-") && (e = s(e)),
            t ? m(e, t, n) : m(e, "pfx"))
        }
        ;
        w.addTest("forcetouch", function() {
            return !!k(_("mouseforcewillbegin", e, !1), e) && MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN && MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN
        }),
        w.addTest("objectfit", !!_("objectFit"), {
            aliases: ["object-fit"]
        }),
        $.testAllProps = v,
        w.addTest("flexbox", v("flexBasis", "1px", !0)),
        function() {
            var e, t, n, o, s, a, r;
            for (var l in b)
                if (b.hasOwnProperty(l)) {
                    if (e = [],
                    t = b[l],
                    t.name && (e.push(t.name.toLowerCase()),
                    t.options && t.options.aliases && t.options.aliases.length))
                        for (n = 0; n < t.options.aliases.length; n++)
                            e.push(t.options.aliases[n].toLowerCase());
                    for (o = i(t.fn, "function") ? t.fn() : t.fn,
                    s = 0; s < e.length; s++)
                        a = e[s],
                        r = a.split("."),
                        1 === r.length ? w[r[0]] = o : (!w[r[0]] || w[r[0]]instanceof Boolean || (w[r[0]] = new Boolean(w[r[0]])),
                        w[r[0]][r[1]] = o),
                        g.push((o ? "" : "no-") + r.join("-"))
                }
        }(),
        function(e) {
            var t = y.className
              , n = w._config.classPrefix || "";
            if (C && (t = t.baseVal),
            w._config.enableJSClass) {
                var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                t = t.replace(i, "$1" + n + "js$2")
            }
            w._config.enableClasses && (t += " " + n + e.join(" " + n),
            C ? y.className.baseVal = t : y.className = t)
        }(g),
        delete $.addTest,
        delete $.addAsyncTest;
        for (var O = 0; O < w._q.length; O++)
            w._q[O]();
        e.Modernizr = w
    }(window, document)
}
, function(e, t, n) {
    function i(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    var o = n(0)
      , s = n(12)
      , a = i(s)
      , r = n(13)
      , l = i(r)
      , d = n(14)
      , f = i(d)
      , c = n(15)
      , u = i(c)
      , h = n(17)
      , p = i(h)
      , m = n(18)
      , v = i(m)
      , g = n(21)
      , b = i(g);
    INITIATE_ALL = {
        init: function() {
            u.default.init(),
            f.default.init(),
            p.default.init(),
            o.isHome && b.default.init(),
            v.default.init(),
            o.$calendarGrid.length && a.default.init(),
            o.$slideshowSubtypeHorizontal.length && l.default.init()
        }
    }
}
, function(e, t) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    RESPONSIVE_CALENDAR_GRID = {
        init: function() {
            this.responsiveCalendarGrid()
        },
        responsiveCalendarGrid: function() {
            var e = function(e) {
                var t, n = $(e.target).closest(".fsCalendar.fsGrid"), i = $(e.target).closest(".fsCalendarDaybox").hasClass("fsCalendarWeekendDayBox") ? $(e.target).closest("div[tabIndex]") : $(e.target).closest(".fsCalendarDaybox"), o = 0, s = n.find("#event-view");
                n.find(".fsCalendarEventGrid .fsCalendarDaybox, .fsCalendarWeekendDayBox > div").removeClass("selected"),
                s.length && i.length && (t = i.clone(),
                i.addClass("selected"),
                o = s.offset().top - 16,
                s.find("> div").remove(),
                s.prepend(t)),
                $(window).width() < 900 && $("html,body").animate({
                    scrollTop: o
                }, 450)
            }
              , t = function(e) {
                $("html,body").animate({
                    scrollTop: e.offset().top
                }, 450),
                e.find(".selected").length ? e.find(".selected").focus() : e.find(".fsCalendarDaybox[tabIndex], .fsCalendarWeekendDayBox > div[tabIndex]").last().focus()
            }
              , n = function(e) {
                if (e.hasClass("fsCalendar fsGrid"))
                    var t, n = e.attr("id"), o = 0, s = setInterval(function() {
                        t = $("#" + n).find(".fsCalendarEventGrid"),
                        t.length && (clearInterval(s),
                        i(t)),
                        o++ > 20 && clearInterval(s)
                    }, 20)
            }
              , i = function(n) {
                var i = $('<div id="event-view" />').insertAfter(n)
                  , o = $('<button class="scroll-up">Back Up To Calendar</button>').appendTo(i)
                  , s = n.find(".fsCalendarToday").clone().removeClass("fsCalendarToday");
                i.each(function() {
                    $(this).prepend(s)
                }),
                o.on("click", function() {
                    t(n)
                }),
                n.find(".fsCalendarDaybox:not(.fsCalendarWeekendDayBox), .fsCalendarWeekendDayBox > div").has(".fsCalendarInfo").attr("tabIndex", 0),
                n.on("click", ".fsCalendarDaybox:not(.fsCalendarWeekendDayBox), .fsCalendarWeekendDayBox > div ", e),
                n.on("keydown", ".fsCalendarDaybox:not(.fsCalendarWeekendDayBox), .fsCalendarWeekendDayBox > div ", function(e) {
                    13 == (e.keyCode ? e.keyCode : e.which) && $(window).width() < 900 && ($(this).trigger("click"),
                    i.find(":focusable").eq(0).focus())
                }),
                i.on("keydown", function(e) {
                    var t = i[0].querySelectorAll("a[href]:not([disabled]), div[tabIndex], .scroll-up")
                      , o = t[0]
                      , s = "Tab" === e.key || 9 === e.keyCode;
                    (s || e.shiftKey) && e.shiftKey && s && document.activeElement === o && (n.find(".selected").length ? n.find(".selected").focus() : n.find(".fsCalendarDaybox[tabIndex], .fsCalendarWeekendDayBox > div[tabIndex]").last().focus(),
                    e.preventDefault())
                })
            };
            FS.events.onElementUpdated("Calendar", function(e) {
                n(e)
            }),
            $(".fsGrid .fsCalendarEventGrid").each(function() {
                i($(this))
            })
        }
    },
    t.default = RESPONSIVE_CALENDAR_GRID
}
, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0);
    RESPONSIVE_SLIDESHOW_SUBTYPE = {
        init: function() {
            this.responsiveSlideshows()
        },
        responsiveSlideshows: function() {
            i.$slideshowSubtypeHorizontal.find(".fsElementSlideshow").each(function() {
                var e = this
                  , t = $(e).data("slides-to-show")
                  , n = t < 2 ? t : 2
                  , i = t < 3 ? t : 3
                  , o = t < 4 ? t : 4
                  , s = [{
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: o,
                        slidesToScroll: o
                    }
                }, {
                    breakpoint: 1e3,
                    settings: {
                        slidesToShow: i,
                        slidesToScroll: i
                    }
                }, {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: n,
                        slidesToScroll: n
                    }
                }, {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }];
                $(e).hasClass("slick-initialized") ? $(e).slick("slickSetOption", "responsive", s, !0) : $(e).on("init", function(t, n) {
                    setTimeout(function() {
                        $(e).slick("slickSetOption", "responsive", s, !0)
                    }, 1)
                })
            })
        }
    },
    t.default = RESPONSIVE_SLIDESHOW_SUBTYPE
}
, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0)
      , o = n(1);
    ACCESSIBILITY = {
        init: function() {
            this.searchSection()
        },
        searchSection: function() {
            i.$siteSearch.find(".fsSearchElementSearchButton").insertBefore(i.$siteSearch.find(".fsSearchElementKeyword")),
            i.$searchOpen.on("click", function() {
                i.$siteSearch.addClass("search-is-open"),
                setTimeout(function() {
                    i.$siteSearch.find(".fsSearchElementSearchButton").focus(),
                    (0,
                    o.trapFocus)(document.querySelector(".fsHeader .search-container > .fsElementContent"), function() {
                        i.$siteSearch.removeClass("search-is-open"),
                        i.$searchOpen.focus()
                    })
                }, 400)
            }),
            i.$searchClose.on("click", function() {
                i.$siteSearch.removeClass("search-is-open"),
                i.$searchOpen.focus()
            }),
            $(document).on("click", function(e) {
                $(e.target).closest(".search-container").length || i.$siteSearch.removeClass("search-is-open")
            })
        }
    },
    t.default = ACCESSIBILITY
}
, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0)
      , o = n(1);
    n(3),
    n(16),
    n(4),
    NAVIGATION = {
        init: function() {
            this.footerCallouts(),
            this.tiertaryNav(),
            this.breadcrumbs(),
            this.desktopMenu(),
            this.offCanvasMenu(),
            this.collapseSubNav(),
            this.mobileNavs()
        },
        footerCallouts: function() {
            $(".nav-footer-callouts .fsNavLevel1 li a").wrapInner("<span/>")
        },
        tiertaryNav: function() {
            i.$navTier.each(function() {
                $(this).find("ul li").length || $(this).addClass("nav-tier-empty"),
                i.sectionTitle.length && $(this).find("> header .fsElementTitle").html(i.sectionTitle)
            })
        },
        breadcrumbs: function() {
            $(".fsBreadcrumb").each(function() {
                $(this).find("ul li").length || $(this).addClass("breadcrumbs-empty")
            })
        },
        desktopMenu: function() {
            i.$navMain_level1.find("> li[class*='fsNavCurrentPage']").addClass("active"),
            $(".menu-container > .fsElementContent").attr("tabIndex", 0),
            $(".menu-container > header button").on("click", function() {
                $(this).parents(".menu-container").addClass("menu-is-open"),
                i.$body.addClass("main-menu-open").removeClass("scrollbar"),
                $(".search-container").removeClass("search-is-open"),
                setTimeout(function() {
                    $(".menu-container > .fsElementContent").focus(),
                    (0,
                    o.trapFocus)(document.querySelector(".menu-container > .fsElementContent"), function() {
                        i.$body.removeClass("main-menu-open").addClass("scrollbar"),
                        $(".menu-container").removeClass("menu-is-open").find("> header button").focus(),
                        i.$navMain_level1.css("minHeight", "0px").find("> li").removeClass("active menu-item-open"),
                        i.$navMain_level1.find("> li[class*='fsNavCurrentPage']").addClass("active"),
                        $(".menu-container .thumbnail-placeholder > .fsElementContent").removeAttr("style"),
                        $(".menu-container > header button").focus()
                    })
                }, 400)
            }),
            $(".desktop-modal-close button").on("click", function() {
                i.$body.removeClass("main-menu-open").addClass("scrollbar"),
                $(".menu-container").removeClass("menu-is-open").find("> header button").focus(),
                i.$navMain_level1.css("minHeight", "0px").find("> li").removeClass("active menu-item-open"),
                i.$navMain_level1.find("> li[class*='fsNavCurrentPage']").addClass("active"),
                $(".menu-container .thumbnail-placeholder > .fsElementContent").removeAttr("style")
            }),
            $(".modal-dropdown > header button, .nav-external-programs-modal .fsNavLevel1 > li:nth-last-child(2) > a").on("focusin", function() {
                i.$navMain_level1.css("minHeight", "0px").find("> li").removeClass("active menu-item-open"),
                i.$navMain_level1.find("> li[class*='fsNavCurrentPage']").addClass("active"),
                $(".menu-container .thumbnail-placeholder > .fsElementContent").removeAttr("style")
            }),
            i.notDraftMode && (i.$navMain_level1.accessibility_menu(),
            i.$navMain_level1.find("> li.fsNavParentPage > a").doubleTapToGo())
        },
        offCanvasMenu: function() {
            $(i.mobileMenuOpen).on("click", function() {
                i.$body.addClass("drawer-is-active"),
                setTimeout(function() {
                    $(".fsMenu").find(":focusable").eq(0).focus(),
                    $(".fsMenu").length && (0,
                    o.trapFocus)(document.querySelector(".fsMenu"), function(e, t) {
                        $(".mobile-search-container.show").length ? ($(".mobile-search-container").removeClass("show"),
                        $(".mobile-search-container > header button").focus()) : $("body.mobile-news-open").length ? (i.$body.removeClass("mobile-news-open"),
                        $(".news-and-events-mobile > header button").focus()) : (i.$body.removeClass("drawer-is-active"),
                        $(i.mobileMenuOpen).focus(),
                        e.removeEventListener("keydown", t))
                    })
                }, 300)
            }),
            $(i.mobileMenuClose).on("click", function() {
                i.$body.removeClass("drawer-is-active"),
                $(i.mobileMenuOpen).focus()
            }),
            $(".mobile-search-container .fsSearchElementSearchButton").insertBefore(".mobile-search-container .fsSearchElementKeyword"),
            $(".mobile-search-container > header button").on("click", function() {
                $(this).parents(".mobile-search-container").addClass("show"),
                setTimeout(function() {
                    $(".mobile-search-container > .fsElementContent :focusable").eq(0).focus()
                }, 500)
            }),
            $(".mobile-search-container > .fsElementContent").on("focusout", function() {
                var e = $(this);
                setTimeout(function() {
                    !!(e.find(":focus").length > 0) || ($(".mobile-search-container").removeClass("show"),
                    $(".mobile-search-container > header button").focus())
                }, 10)
            }),
            $(".mobile-search-close button").on("click", function() {
                $(".mobile-search-container").removeClass("show"),
                $(".mobile-search-container > header button").focus()
            }),
            $(".news-and-events-mobile > header button").on("click", function() {
                i.$body.addClass("mobile-news-open"),
                $(".news-and-events-mobile .slick-slider.slick-initialized").slick("slickGoTo", 0),
                setTimeout(function() {
                    $(".news-and-events-mobile > .fsElementContent :focusable").eq(0).focus(),
                    $(".news-and-events-mobile .fsPanel.show").length || $(".news-and-events-mobile .fsPanel.fsStateOpen").addClass("show")
                }, 500)
            }),
            FS.events.onElementShown("panel", function(e) {
                e.parents(".news-and-events-mobile").length && (e.find("> .fsElementContent").removeAttr("tabIndex"),
                $(".news-and-events-mobile .fsPanel").removeClass("show"),
                e.find(".slick-slider.slick-initialized").slick("slickGoTo", 0),
                setTimeout(function() {
                    e.addClass("show")
                }, 500))
            }),
            $(".news-and-events-mobile > .fsElementContent").on("focusout", function() {
                var e = $(this);
                setTimeout(function() {
                    !!(e.find(":focus").length > 0) || (i.$body.removeClass("mobile-news-open"),
                    $(".news-and-events-mobile > header button").focus())
                }, 10)
            }),
            $(".mobile-news-close").insertAfter($(".news-and-events-mobile .fsTabsNav")),
            $(".mobile-news-close button").on("click", function() {
                i.$body.removeClass("mobile-news-open"),
                $(".news-and-events-mobile > header button").focus()
            }),
            $(".news-and-events-mobile .fsPostElement").each(function() {
                var e = $(this);
                e.find("article").each(function() {
                    var e = $(this);
                    !e.find(".fsThumbnail").length && e.parents(".fsPostElement").is("[data-image-sizes]") && (e.prepend('<div class="fsThumbnail default-img"/>'),
                    moveResourceImage(e.parents(".fsPostElement"), e.find(".fsThumbnail"))),
                    e.append('<div class="wrapper"/>'),
                    e.find(".fsTitle, .fsSummary").appendTo(e.find(".wrapper")),
                    e.find(".fsReadMoreLink").prependTo(e),
                    e.on("mouseenter focusin", function() {
                        setTimeout(function() {
                            e.find(".fsSummary").dotdotdot({
                                watch: !0
                            })
                        }, 400)
                    }),
                    e.on("mouseleave focusout", function() {
                        setTimeout(function() {
                            e.find(".fsSummary").trigger("destroy")
                        }, 400)
                    })
                }),
                e.find(".fsListItems").on("init", function(e, t) {
                    $(t.$dots).wrap('<div class="slick-navigation"/>'),
                    $(t.$prevArrow).insertBefore($(t.$dots)),
                    $(t.$nextArrow).insertAfter($(t.$dots))
                }),
                e.find(".fsListItems").slick({
                    dots: !0
                })
            }),
            $(".news-and-events-mobile .fsCalendar").each(function() {
                var e = $(this);
                e.find(".fsDayContainer article:first-child").unwrap(),
                e.find(".fsListItems").on("init", function(e, t) {
                    $(t.$dots).wrap('<div class="slick-navigation"/>'),
                    $(t.$prevArrow).insertBefore($(t.$dots)),
                    $(t.$nextArrow).insertAfter($(t.$dots))
                }),
                e.find(".fsListItems").slick({
                    dots: !0
                })
            }),
            $(".news-and-events-mobile .fsFeeds.fsCustom").each(function() {
                var e = $(this)
                  , t = {
                    feed: {
                        per: 6
                    },
                    templates: {
                        Instagram: ['<article class="fsFeeds-post" style="background-image: url({image})">', '<a href="{full_url}" target="_blank" class="overlay"><span class="fsStyleSROnly">Link to the social media post</span></a>', "</article>"]
                    }
                };
                e.fsFeedPull(t, function() {
                    e.find("> .fsElementContent").on("init", function(e, t) {
                        $(t.$dots).wrap('<div class="slick-navigation"/>'),
                        $(t.$prevArrow).insertBefore($(t.$dots)),
                        $(t.$nextArrow).insertAfter($(t.$dots))
                    }),
                    e.find("> .fsElementContent").slick({
                        dots: !0
                    }),
                    e.find(".fsFeeds-post .overlay").doubleTapToGo()
                })
            })
        },
        collapseSubNav: function() {
            i.$navSub.each(function() {
                var e = $(this)
                  , t = e.find("> header")
                  , n = e.find("> header > .fsElementTitle")
                  , o = i.sectionTitle || n.text();
                e.find(".fsNavLevel1").length || e.addClass("nav-sub-empty"),
                i.sectionTitle.length && n.html(i.sectionTitle),
                e.parents(".fsHeader").length && (t.append(['<button class="nav-toggle" aria-expanded="false">', '<div class="fsStyleSROnly">', "<span>Expand</span>", '<span style="display: none;">Collapse</span>', " " + o + " Navigation", "</div>", "</button>"].join("\n")),
                t.on("click", function() {
                    e.toggleClass("active-nav"),
                    $(this).find(".nav-toggle").attr("aria-expanded", "true" !== $(this).find(".nav-toggle").attr("aria-expanded")).find("span").toggle()
                }),
                $(document).on("click", function(t) {
                    !$(t.target).closest(e).length && e.hasClass("active-nav") && e.removeClass("active-nav").find(".nav-toggle").attr("aria-expanded", "false").find("span").toggle()
                }),
                e.on("focusout", function(t) {
                    setTimeout(function() {
                        !!(e.find(":focus").length > 0) || !e.hasClass("active-nav") || $(t.target).is(".nav-toggle") || e.removeClass("active-nav").find(".nav-toggle").attr("aria-expanded", "false").find("span").toggle()
                    }, 10)
                })),
                e.find("li.fsNavParentPage").each(function() {
                    var e = $(this).find("> a").text();
                    $(['<button class="sublevel-toggle" aria-expanded="false">', '<span class="fsStyleSROnly">Toggle ' + e + " Navigation</span>", "</button>"].join("\n")).insertAfter($(this).find("> a")),
                    $(this).find("> .sublevel-toggle").on("click", function() {
                        $(this).parent().toggleClass("active-subnav").find("> .fsNavPageInfo").slideToggle(),
                        $(this).attr("aria-expanded", "true" !== $(this).attr("aria-expanded"))
                    })
                }),
                e.find("li[class*='fsNavCurrentPage']").addClass("active-subnav"),
                e.find("li[class*='fsNavCurrentPage'] > .sublevel-toggle").attr("aria-expanded", "true"),
                e.find("li[class*='fsNavCurrentPage'] > .fsNavPageInfo").show()
            })
        },
        mobileNavs: function() {
            $(".nav-external-programs-mobile.mykps .fsNavLevel1 > li:not(.mykps)").remove(),
            $(".nav-external-programs-mobile:not(.mykps) .fsNavLevel1 > li.mykps").remove(),
            $(".nav-main-mobile li.fsNavParentPage").each(function() {
                var e = $(this).find("> a").text();
                $('<button class="drop-trigger" aria-expanded="false">Toggle ' + e + " Navigation</button>").insertAfter($(this).find("> a")),
                $(this).find("> .drop-trigger").on("click", function() {
                    $(this).parent().toggleClass("active").find("> .fsNavPageInfo").slideToggle(),
                    $(this).attr("aria-expanded", "true" !== $(this).attr("aria-expanded"))
                })
            }),
            $(".nav-main-mobile li[class*='fsNavCurrentPage']").addClass("active"),
            $(".nav-main-mobile li[class*='fsNavCurrentPage'] > .drop-trigger").attr("aria-expanded", "true"),
            $(".nav-main-mobile li[class*='fsNavCurrentPage'] > .fsNavPageInfo").show()
        }
    },
    t.default = NAVIGATION
}
, function(e, t, n) {
    var i = n(2)
      , o = {
        48: "0",
        49: "1",
        50: "2",
        51: "3",
        52: "4",
        53: "5",
        54: "6",
        55: "7",
        56: "8",
        57: "9",
        59: ";",
        65: "a",
        66: "b",
        67: "c",
        68: "d",
        69: "e",
        70: "f",
        71: "g",
        72: "h",
        73: "i",
        74: "j",
        75: "k",
        76: "l",
        77: "m",
        78: "n",
        79: "o",
        80: "p",
        81: "q",
        82: "r",
        83: "s",
        84: "t",
        85: "u",
        86: "v",
        87: "w",
        88: "x",
        89: "y",
        90: "z",
        96: "0",
        97: "1",
        98: "2",
        99: "3",
        100: "4",
        101: "5",
        102: "6",
        103: "7",
        104: "8",
        105: "9"
    };
    $.fn.accessibility_menu = function(e) {
        var t = $.extend({
            menuClass: "menu-item-open",
            mainMenuLabel: "Main",
            topMenuRole: "menubar",
            listItemsRole: "menuitem",
            subNavRole: "menu",
            firstTab: "level2"
        }, e)
          , n = $(this)
          , s = ".fsNavPageInfo"
          , a = ".fsNavLevel1"
          , r = 'ul[class^="fsNavLevel"]'
          , l = ".fsNavPageDescription"
          , d = n.find("> li > a");
        if (n.length) {
            $(this).parent()[0].hasAttribute("aria-label") || $(this).parent().attr("aria-label", t.mainMenuLabel),
            $(this).attr("role", t.topMenuRole).find("li").attr("role", t.listItemsRole),
            $(this).find(r).attr("role", t.subNavRole),
            $(this).find(s).find("a").attr("tabIndex", -1),
            $(d).each(function() {
                $(this).next(s).length > 0 && $(this).parent("li").attr("aria-haspopup", "true").find(s).attr("aria-hidden", "true")
            }),
            $(d).unbind(),
            $(d).bind("focus mouseenter mouseleave keydown", function(e) {
                var n = new Array;
                if ($(this).parents(a).find("> li > a").removeAttr("tabindex"),
                $(this).parents(a).find("." + t.menuClass).removeClass(t.menuClass).find(s).attr("aria-hidden", "true").find("a").attr("tabindex", -1),
                $(this).next(s).attr("aria-hidden", "false").parent("li").addClass(t.menuClass),
                n.push($(this)[0]),
                "level2" == t.firstTab) {
                    if ($(this).next(s).find(r).find("a").length)
                        for (var i = 0; i < $(this).next(s).find(r).find("a").length; i++)
                            n.push($(this).next(s).find(r).find("a")[i]);
                    if ($(this).next(s).find(l).find("a").length)
                        for (var o = 0; o < $(this).next(s).find(l).find("a").length; o++)
                            n.push($(this).next(s).find(l).find("a")[o])
                } else if ("pagedesc" == t.firstTab) {
                    if ($(this).next(s).find(l).find("a").length)
                        for (var d = 0; d < $(this).next(s).find(l).find("a").length; d++)
                            n.push($(this).next(s).find(l).find("a")[d]);
                    if ($(this).next(s).find(r).find("a").length)
                        for (var f = 0; f < $(this).next(s).find(r).find("a").length; f++)
                            n.push($(this).next(s).find(r).find("a")[f])
                }
                for (var c = 0; c < n.length; c++)
                    n[c].setAttribute("tabindex", c)
            }),
            $(d).bind("mouseenter focusin", function() {
                if (!$(this).parent().hasClass("active")) {
                    n.find("> li").removeClass("active"),
                    $(this).parent().addClass("active");
                    var e = $(this).next(s).height() + 47;
                    if (n.css("minHeight", e + "px"),
                    $(this).next(s).find(".fsNavPageThumbnail img").length) {
                        (0,
                        i.moveResourceImage)($(this).next(s).find(".fsNavPageThumbnail img"), $(this).next(s).find(".fsNavPageThumbnail img"));
                        var t = $(this).next(s).find(".fsNavPageThumbnail img").attr("src");
                        n.parents(".nav-main").siblings(".thumbnail-placeholder").find("> .fsElementContent").fadeOut(100, function() {
                            $(this).css("backgroundImage", "url(" + t + ")"),
                            $(this).fadeIn(100)
                        })
                    } else
                        n.parents(".nav-main").siblings(".thumbnail-placeholder").find("> .fsElementContent[style]").length && n.parents(".nav-main").siblings(".thumbnail-placeholder").find("> .fsElementContent").fadeOut(100, function() {
                            $(this).removeAttr("style"),
                            $(this).fadeIn(100)
                        })
                }
            }),
            $(this).on("focusout", function() {
                setTimeout(function() {
                    !!(n.find(":focus").length > 0) || (n.css("minHeight", "0px"),
                    n.find("> li").removeClass("active"))
                }, 10)
            }),
            $(this).on("mouseleave", function() {
                n.find(s).is(":hover") || (n.css("minHeight", "0px"),
                n.find("> li").removeClass("active")),
                $(this).find("> li > a").removeAttr("tabindex"),
                $(this).find("." + t.menuClass).removeClass(t.menuClass).find(s).attr("aria-hidden", "true").find("a").attr("tabIndex", -1)
            }),
            $(d).keydown(function(e) {
                var n = $(this).parent("li").find(s).find("a").length;
                if (38 == e.keyCode)
                    e.preventDefault(),
                    $(this).parent("li").find(s).find("a").length && $(this).parent("li").find(s).find("a[tabindex=" + n + "]").focus();
                else if (39 == e.keyCode)
                    e.preventDefault(),
                    0 == $(this).parent("li").next("li").length ? $(this).parents(a).find("> li").first().find("a").first().focus() : $(this).parent("li").next("li").find("a").first().focus();
                else if (40 == e.keyCode)
                    $(this).parent("li").find(s).find("a").length && (e.preventDefault(),
                    $(this).parent("li").addClass(t.menuClass).find(s).attr("aria-hidden", "false"),
                    $(this).parent("li").find("a[tabindex=1]").focus());
                else if (37 == e.keyCode)
                    e.preventDefault(),
                    0 == $(this).parent("li").prev("li").length ? $(this).parents(a).find("> li").last().find("a").first().focus() : $(this).parent("li").prev("li").find("a").first().focus();
                else if (9 == e.keyCode)
                    if (e.shiftKey)
                        if (0 == $(this).parent("li").prev("li").length)
                            $(this).parents(a).find("> li > a").removeAttr("tabindex"),
                            $("." + t.menuClass).removeClass(t.menuClass).find(s).attr("aria-hidden", "true").find("a").attr("tabIndex", -1);
                        else if ($(this).parent("li").prev("li").length) {
                            e.preventDefault();
                            var i = $(this).parent("li").prev("li").find(s).find("a").length;
                            $(this).parents(a).find("> li > a").removeAttr("tabindex"),
                            $("." + t.menuClass).removeClass(t.menuClass).find(s).attr("aria-hidden", "true").find("a").attr("tabIndex", -1),
                            $(this).parent("li").prev("li").addClass(t.menuClass).find(s).attr("aria-hidden", "false"),
                            $(this).parent("li").prev("li").find(">a").focus().parent().find(s).find("a[tabindex=" + i + "]").focus()
                        } else
                            $(this).parents(a).find("> li > a").removeAttr("tabindex"),
                            $("." + t.menuClass).removeClass(t.menuClass).find(s).attr("aria-hidden", "true").find("a").attr("tabIndex", -1);
                    else
                        $(this).parent("li").find(s).find("a").length && (e.preventDefault(),
                        $(this).parent("li").addClass(t.menuClass).find(s).attr("aria-hidden", "false"),
                        $(this).parent("li").find("a[tabindex=1]").focus());
                else
                    32 == e.keyCode ? (e.preventDefault(),
                    window.location = $(this).attr("href")) : 27 == e.keyCode ? (e.preventDefault(),
                    $("." + t.menuClass).removeClass(t.menuClass).find("> a").removeAttr("tabindex").parent("li").find(s).attr("aria-hidden", "true").find("a").attr("tabIndex", -1)) : $(this).parent("li").find(".fsNavPageInfo[aria-hidden=false] a").each(function() {
                        if ($(this).text().substring(0, 1).toLowerCase() == o[e.keyCode])
                            return $(this).focus(),
                            !1
                    })
            });
            var f = $(this).find(s).find("a");
            $(f).unbind(),
            $(f).bind("focus mouseenter mouseleave keydown", function() {
                $(this).parent().parent().find("." + t.menuClass).removeClass(t.menuClass).find(s).attr("aria-hidden", "true"),
                $(this).next(s).attr("aria-hidden", "false").parentsUntil(a, "li").addClass(t.menuClass)
            }),
            $(f).keydown(function(e) {
                var n = $(this).parents(s).find("a").length
                  , i = parseInt($(this).attr("tabindex"));
                if (38 == e.keyCode)
                    e.preventDefault(),
                    1 == i ? $(this).parents(s).parent("li").find("a").first().focus() : $(this).parents(s).find("a[tabindex=" + (i - 1) + "]").parentsUntil(a, "li").addClass(t.menuClass).find("a[tabindex=" + (i - 1) + "]").focus();
                else if (39 == e.keyCode)
                    e.preventDefault(),
                    0 == $(this).parents(a).find("a[tabindex='0']").parent("li").next("li").length ? $(this).parents(a).find("> li").first().find("a").first().focus() : $(this).parents(a).find("a[tabindex='0']").parent("li").next("li").find("a").first().focus();
                else if (40 == e.keyCode)
                    e.preventDefault(),
                    i == n ? $(this).parents(s).parent("li").find("a").first().focus() : $(this).parents(s).find("a[tabindex=" + (i + 1) + "]").focus();
                else if (27 == e.keyCode || 37 == e.keyCode)
                    e.preventDefault(),
                    $("." + t.menuClass).removeClass(t.menuClass).find(s).attr("aria-hidden", "true").find("a").attr("tabIndex", -1),
                    $(this).parentsUntil(a, "li").find("a").first().focus();
                else if (9 == e.keyCode)
                    e.shiftKey ? (e.preventDefault(),
                    1 == i ? $(this).parents(s).parent("li").find("a").first().focus() : $(this).parents(s).find("a[tabindex=" + (i - 1) + "]").parentsUntil(a, "li").addClass(t.menuClass).find("a[tabindex=" + (i - 1) + "]").focus()) : i == n ? $(this).parents(s).parent("li").next("li").length ? (e.preventDefault(),
                    $(this).parents(s).parent("li").next("li").find("a").first().focus()) : ($(this).parents(a).find("> li > a").removeAttr("tabindex"),
                    $("." + t.menuClass).removeClass(t.menuClass).find(s).attr("aria-hidden", "true").find("a").attr("tabIndex", -1)) : (e.preventDefault(),
                    $(this).parents(s).find("a[tabindex=" + (i + 1) + "]").focus());
                else if (32 == e.keyCode)
                    e.preventDefault(),
                    window.location = $(this).attr("href");
                else {
                    var r = !1;
                    $(this).parent("li").nextAll("li").find("a").each(function() {
                        if ($(this).text().substring(0, 1).toLowerCase() == o[e.keyCode])
                            return $(this).focus(),
                            r = !0,
                            !1
                    }),
                    r || $(this).parent("li").prevAll("li").find("a").each(function() {
                        if ($(this).text().substring(0, 1).toLowerCase() == o[e.keyCode])
                            return $(this).focus(),
                            !1
                    })
                }
            }),
            $(document).click(function() {
                $(this).parents(a).find("> li > a").removeAttr("tabindex"),
                $("." + t.menuClass).removeClass(t.menuClass).find(s).attr("aria-hidden", "true").find("a").attr("tabIndex", -1)
            }),
            $(this).click(function(e) {
                e.stopPropagation()
            })
        }
    }
}
, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0);
    DEFAULT_STYLES = {
        init: function() {
            i.$tableStyle.length && this.tableStyle(),
            this.poweredBy()
        },
        tableStyle: function() {
            function e() {
                i.$tableStyle.each(function() {
                    $(this).parent().hasClass("table-overflow") || $(this).wrap('<div class="table-overflow" tabindex="0" />')
                })
            }
            i.notComposeMode && e(),
            FS.events.onComposeModeChanged(function(t) {
                !1 === t ? e() : !0 === t && i.$tableStyle.each(function() {
                    $(this).parent().hasClass("table-overflow") && $(this).unwrap()
                })
            })
        },
        poweredBy: function() {
            $("#fsPoweredByFinalsite").appendTo("#fsFooter .nav-utility-footer")
        }
    },
    t.default = DEFAULT_STYLES
}
, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0)
      , o = n(19)
      , s = n(1)
      , a = n(2);
    n(3),
    n(5),
    n(4),
    n(6),
    n(20),
    ENHANCEMENTS = {
        init: function() {
            this.interiorHero(),
            this.newsEvents(),
            setTimeout(function() {
                ENHANCEMENTS.imageButtons()
            }, 1e3),
            this.constituentDirectory(),
            this.customPosts(),
            this.customImageSlider(),
            i.notComposeMode && (this.stickyHeader(),
            this.fullWidth()),
            this.athleticsList(),
            this.sharingStories()
        },
        sharingStories: function() {
            var e = this;
            !function(e, t, n) {
                e.addEventListener("scroll", function(e) {
                    return e.target.removeEventListener(e.type, arguments.callee),
                    n(e)
                })
            }(document, 0, function(e) {
                $(".sharing-stories .fsResourceElement.on .fsResource:nth-child(1) video")[0].play()
            }),
            $(".sharing-stories").each(function() {
                var t = $(this);
                t.find(".fsResourceElement").length > 5 && (t.addClass("scroll-resources"),
                t.find("> header .slideshow-navigation").length || t.find("> header").append('<div class="slideshow-navigation"></div>')),
                $("body").hasClass("home") ? t.waypoint({
                    handler: function(e) {
                        "down" === e ? t.addClass("in-view") : t.removeClass("in-view")
                    },
                    offset: "70%"
                }) : t.addClass("in-view"),
                t.find(".fsResourceElement").each(function(t) {
                    var n = $(this)
                      , i = n.find("article:nth-child(1)")
                      , o = n.find("article:nth-child(2)");
                    0 === t && n.addClass("on"),
                    n.find("> header .fsElementHeaderContent").attr("data-text", n.find("> header .fsElementHeaderContent").text()),
                    $('<button class="close-video"><span class="fsStyleSROnly">Close long form video</span></button>').prependTo(o),
                    $('<button class="open-video"><span class="fsStyleSROnly">Open long form video</span></button>').prependTo(i),
                    i.find("video").attr({
                        tabIndex: "-1",
                        loop: "true",
                        muted: "muted"
                    }),
                    i.find("video")[0].muted = !0,
                    i.find("video").removeAttr("controls"),
                    o.find("video").attr("tabIndex", "-1"),
                    i.find(".fsPlayOverlay").removeAttr("tabIndex"),
                    i.on("mouseenter", function() {
                        n.hasClass("on") && i.find("video")[0].play()
                    }),
                    i.on("focusin", function() {
                        n.hasClass("on") && (i.find("video")[0].play(),
                        n.addClass("focused"))
                    }),
                    i.on("focusout", function() {
                        n.hasClass("focused") && n.removeClass("focused")
                    }),
                    i.find(".open-video").on("click keydown", function(t) {
                        e.AllyClick(t) && (t.preventDefault(),
                        n.parent().find(".fsResourceElement.active").length && (n.parent().find(".fsResourceElement.active article:nth-child(2) video")[0].pause(),
                        n.parent().find(".fsResourceElement.active").removeClass("active")),
                        n.parent().find(".fsResourceElement.on article:first-child video")[0].pause(),
                        n.parent().find(".fsResourceElement.on").removeClass("on"),
                        n.addClass("on"),
                        i.find("video")[0].play(),
                        i.find("video")[0].muted = !0,
                        i.find(".fsPlayOverlay button").focus().attr({
                            tabindex: "0",
                            "aria-hidden": "false"
                        }),
                        i.find(".fsPlayOverlay button").is(":focus") && n.addClass("focused"))
                    }),
                    i.find(".fsPlayOverlay button").on("click keydown", function(t) {
                        e.AllyClick(t) && (t.preventDefault(),
                        n.addClass("active"),
                        setTimeout(function() {
                            i.find("video")[0].pause(),
                            o.find("video")[0].play(),
                            o.find(".close-video").focus()
                        }, 200))
                    }),
                    o.find(".close-video").on("click keydown", function(t) {
                        e.AllyClick(t) && (t.preventDefault(),
                        n.removeClass("active"),
                        o.find("video")[0].pause(),
                        i.find("video")[0].play(),
                        setTimeout(function() {
                            i.find(".fsPlayOverlay button").focus().attr({
                                tabindex: "0",
                                "aria-hidden": "false"
                            }),
                            i.find(".fsPlayOverlay button").is(":focus") && n.addClass("focused")
                        }, 200))
                    })
                }),
                $(window).on("resize load", (0,
                s.debounce)(function() {
                    if (t.hasClass("scroll-resources")) {
                        if (!t.find("> .fsElementContent").hasClass("slick-initialized"))
                            return t.find("> header .slideshow-navigation").length || t.find("> header").append('<div class="slideshow-navigation"></div>'),
                            t.find("> .fsElementContent").on("beforeChange", function(e, n, i, o) {
                                setTimeout(function() {
                                    t.find(".slick-slide").attr("tabindex", "-1"),
                                    t.find(".slick-current.on button[aria-label='Play Video']").attr("tabindex", "0"),
                                    t.find(".slick-slide.slick-active button.open-video").attr({
                                        "aria-hidden": "false",
                                        tabindex: "0"
                                    })
                                }, 1e3)
                            }),
                            t.find("> .fsElementContent").slick({
                                slidesToShow: 5,
                                slidesToScroll: 1,
                                centerMode: !1,
                                dots: !0,
                                variableWidth: !0,
                                responsive: [{
                                    breakpoint: 1e3,
                                    settings: {
                                        centerMode: !0,
                                        slidesToShow: 1,
                                        dots: !1
                                    }
                                }]
                            }),
                            $(window).width() >= 1e3 ? (t.find(".slick-prev, .slick-dots").appendTo(t.find(".slideshow-navigation")),
                            t.find(".slick-next").appendTo(t.find(".slideshow-navigation")),
                            t.find(".slick-dots").empty(),
                            t.find("section:not(.slick-cloned)").each(function(e) {
                                $('<li><button aria-label="' + (e + 1) + " of " + t.find("section:not(.slick-cloned)").length + '">' + (e + 1) + "</button></li>").appendTo(t.find(".slideshow-navigation .slick-dots")),
                                t.find(".slideshow-navigation .slick-dots li.slick-active").length || t.find(".slideshow-navigation .slick-dots li:first-child").addClass("slick-active")
                            })) : (t.find(".slick-prev").prependTo(t.find("> .fsElementContent")),
                            t.find(".slick-next").appendTo(t.find("> .fsElementContent"))),
                            t.find(".slick-slide").attr("tabindex", "-1"),
                            t.find(".slick-current.on button[aria-label='Play Video']").attr("tabindex", "0"),
                            t.find(".slick-active button.open-video").attr({
                                "aria-hidden": "false",
                                tabindex: "0"
                            }),
                            t.find(".slick-next, .slick-prev").on("click keydown", function(n) {
                                e.AllyClick(n) && (t.find(".slick-slide").attr("tabindex", "-1"),
                                t.find(".slick-current.on button[aria-label='Play Video']").attr("tabindex", "0"),
                                t.find(".slick-active button.open-video").attr({
                                    "aria-hidden": "false",
                                    tabindex: "0"
                                }),
                                setTimeout(function() {
                                    t.find(".slick-slide.on").removeClass("on"),
                                    t.find(".slick-current").addClass("on"),
                                    t.find(".slick-current.on button[aria-label='Play Video']").attr("tabindex", "0")
                                }, 100),
                                setTimeout(function() {
                                    t.find(".slick-current.on button[aria-label='Play Video']").attr("tabindex", "0"),
                                    t.find("slick-slide.slick-active button.open-video").attr({
                                        "aria-hidden": "false",
                                        tabindex: "0"
                                    })
                                }, 900))
                            }),
                            void (i.notComposeMode && (t.find(".slideshow-navigation .slideshow-dots li button").on("click", function() {
                                var e = $(this).parent().index();
                                t.find(".slideshow-navigation .slick-dots li").removeClass("slick-active"),
                                $(this).parent().addClass("slick-active"),
                                t.find("> .fsElementContent"),
                                t.find("> .fsElementContent").slick("slickGoTo", e)
                            }),
                            t.find(".slideshow-navigation .slick-prev").on("click", function() {
                                t.find("> .fsElementContent").slick("slickPrev")
                            }),
                            t.find(".slideshow-navigation .slick-next").on("click", function() {
                                t.find("> .fsElementContent").slick("slickNext")
                            }),
                            t.find("> .fsElementContent").on("beforeChange", function(e, n, i, o) {
                                t.find(".slideshow-navigation .slick-dots li").removeClass("slick-active"),
                                t.find(".slideshow-navigation .slick-dots li").eq(o).addClass("slick-active")
                            })))
                    } else {
                        if ($(window).width() >= 1e3)
                            return void (t.find("> .fsElementContent").hasClass("slick-initialized") && t.find("> .fsElementContent").slick("unslick"));
                        if (!t.find("> .fsElementContent").hasClass("slick-initialized"))
                            return void t.find("> .fsElementContent").slick({
                                centerMode: !0
                            })
                    }
                }, 100))
            })
        },
        stickyHeader: function() {
            $("#fsHeader").attr("tabIndex", "0");
            var e = 0;
            $(window).scroll(function() {
                var t = $(this).scrollTop();
                t > e ? $("#fsHeader .site-info-container > .fsElementContent").removeClass("show") : $("#fsHeader .site-info-container > .fsElementContent").addClass("show"),
                e = t
            });
            var t = new Waypoint.Inview({
                element: $("#fsHeader .site-info-container")[0],
                entered: function(e) {
                    "up" === e && $(t.element).find("> .fsElementContent").removeClass("sticky show")
                },
                exited: function(e) {
                    "down" === e && $(t.element).find("> .fsElementContent").addClass("sticky")
                }
            })
        },
        interiorHero: function() {
            (0,
            o.heroElement)({
                hero: $(".hero, .hero-landing"),
                insertAfter: $(".fsHeader .site-info-container"),
                callback: function() {
                    $(".hero img").length && (0,
                    a.moveResourceImage)($(".hero img"), $(".hero picture")),
                    $(".hero-landing").each(function() {
                        var e = $(this)
                          , t = setInterval(function() {
                            e.find(".fsPager").length && e.find(".slick-initialized").length && (clearInterval(t),
                            setTimeout(function() {
                                e.find(".fsPager").wrap('<div class="slideshow-navigation"/>'),
                                e.find(".fsPrevButton").prependTo(e.find(".slideshow-navigation")),
                                e.find(".fsNextButton").appendTo(e.find(".slideshow-navigation"))
                            }, 1e3)),
                            e.find("footer").insertAfter(e.find(".slick-list"))
                        }, 100);
                        e.find(".fsResource").each(function() {
                            $(this).find("img").length && (0,
                            a.moveResourceImage)($(this).find("img"), $(this).find("picture"))
                        }),
                        e.find("footer button").on("click", function() {
                            $("html, body").animate({
                                scrollTop: $("#fsPageBodyWrapper").offset().top + "px"
                            }, 2e3)
                        })
                    })
                }
            })
        },
        newsEvents: function() {
            $(".news-and-events").each(function() {
                var e = $(this);
                i.notComposeMode && e.insertAfter("#fsHeader"),
                e.find("> header button").on("click", function() {
                    i.$body.addClass("flyout-open"),
                    setTimeout(function() {
                        e.find(".fsTabs .fsTabsNav li:first-child a").focus(),
                        (0,
                        s.trapFocus)(e.find("> .fsElementContent")[0], function() {
                            i.$body.removeClass("flyout-open"),
                            e.find("> header button").focus()
                        })
                    }, 800)
                }),
                e.find(".fsTabs > header").insertAfter(e.find(".fsTabs .fsTabsNav")),
                e.find(".fsTabs .fsPanel > .fsElementContent").removeAttr("tabIndex"),
                e.find(".fsCalendar").each(function() {
                    $(this).find("> header button").on("click", function() {
                        i.$body.removeClass("flyout-open"),
                        e.find("> header button").focus()
                    }),
                    $(this).find(".fsDayContainer article:first-child").unwrap(),
                    $(this).find(".fsListItems").on("init", function(e, t) {
                        $(t.$dots).wrap('<div class="slick-navigation"/>'),
                        $(t.$prevArrow).insertBefore($(t.$dots)),
                        $(t.$nextArrow).insertAfter($(t.$dots))
                    }),
                    $(this).find(".fsListItems").slick({
                        rows: 2,
                        dots: !0,
                        adaptiveHeight: !0
                    })
                }),
                FS.events.onElementDialogShown("Calendar", function(e) {
                    $(".fsDialog.fsCalendar .fsDate > span.fsDayName, .fsDialog.fsCalendar .fsDate > span.fsMonth").html(function() {
                        return $(this).html().substring(0, 3)
                    })
                }),
                e.find(".fsPostElement article").each(function() {
                    var e = $(this);
                    e.find("a").length || e.attr("tabIndex", "0"),
                    !e.find(".fsThumbnail").length && e.parents(".fsPostElement").is("[data-image-sizes]") && (e.prepend('<div class="fsThumbnail default-img"/>'),
                    (0,
                    a.moveResourceImage)(e.parents(".fsPostElement"), e.find(".fsThumbnail"))),
                    e.find(".fsSummary a").attr("tabIndex", "-1"),
                    e.append('<div class="wrapper"/>'),
                    e.find(".fsTitle, .fsSummary").appendTo(e.find(".wrapper")),
                    e.find(".fsReadMoreLink").prependTo(e),
                    e.on("mouseenter focusin", function() {
                        setTimeout(function() {
                            e.find(".fsSummary").dotdotdot({
                                watch: !0
                            })
                        }, 400)
                    }),
                    e.on("mouseleave focusout", function() {
                        setTimeout(function() {
                            e.find(".fsSummary").trigger("destroy")
                        }, 400)
                    })
                }),
                e.find(".fsFeeds.fsCustom").each(function() {
                    var e = $(this)
                      , t = {
                        feed: {
                            per: 6
                        },
                        templates: {
                            Instagram: ['<article class="fsFeeds-post" style="background-image: url({image})">', '<a href="{full_url}" target="_blank" class="overlay" aria-label="Link to the social media post"></a>', "</article>"]
                        }
                    };
                    e.fsFeedPull(t, function() {})
                }),
                FS.events.onElementShown("panel", function(e) {
                    e.parents(".news-and-events").length && e.find("> .fsElementContent").removeAttr("tabIndex")
                }),
                FS.events.onComposeModeChanged(function(t) {
                    t ? e.insertAfter("#fsHeader .site-info-container") : e.insertAfter("#fsHeader")
                }),
                i.$body.addClass("header-setup")
            })
        },
        imageButtons: function() {
            $(".image-button").each(function() {
                $(this).attr("tabIndex", 0),
                $(this).doubleTapToGo(),
                $('<div class="wrapper"/>').appendTo($(this));
                var e = $(this).find(".wrapper").height();
                $(this).find("> .fsElementContent").clone().appendTo($(this).find(".wrapper")),
                $(this).find("> header").length && ($(this).find("> header").clone().prependTo($(this).find(".wrapper")),
                e -= $(this).find(".wrapper header").outerHeight(!0)),
                $(this).find("> footer").length && ($(this).find("> footer").clone().appendTo($(this).find(".wrapper")),
                e -= $(this).find(".wrapper footer").outerHeight(!0)),
                $(this).find(".wrapper .fsElementContent").dotdotdot({
                    height: e,
                    watch: !0
                })
            })
        },
        fullWidth: function() {
            $(".full-width-panel.fsContent").each(function() {
                var e = $(this);
                $(window).on("load resize", (0,
                s.debounce)(function() {
                    var t = $("#fsPageBodyWrapper").outerWidth();
                    t > 1250 && e.css({
                        width: t + "px",
                        left: Math.ceil((t - 1180) / -2) + "px"
                    })
                }, 200))
            })
        },
        constituentDirectory: function() {
            function e(e) {
                e.each(function(t) {
                    var n = $(this)
                      , i = e.parents(".fsConstituent.fsDirectory");
                    n.wrapInner('<div class="inner-wrapper"/>'),
                    !n.find(".fsPhoto").length && i[0].hasAttribute("data-image-sizes") && (i.hasClass("fsThumbnailOriginal") ? ($("<div class='fsPhoto default-img'><img class='fsThumbnail' alt='Default Constituent Image Placeholder'></div>").prependTo(n.find(".inner-wrapper")),
                    (0,
                    a.moveResourceImage)(i, n.find(".fsPhoto .fsThumbnail"))) : ($("<div class='fsPhoto fsThumbnail default-img'><div class='fsCroppedImage'/></div>").prependTo(n.find(".inner-wrapper")),
                    (0,
                    a.moveResourceImage)(i, n.find(".fsPhoto .fsCroppedImage")))),
                    n.find(".fsPhoto").length && n.find(".fsPhoto").prependTo(n),
                    n.find(".fsViewProfileLink").length && n.find(".fsViewProfileLink").appendTo(n)
                })
            }
            $(".fsConstituent.fsSearch .fsFieldLabel input[name='const_search_keyword']").length && $(".fsConstituent.fsSearch .fsFieldLabel input[name='const_search_keyword']").parent().addClass("keyword"),
            $(".fsConstituent.fsSearch .fsFieldLabel select[name='const_search_department']").length && $(".fsConstituent.fsSearch .fsFieldLabel select[name='const_search_department']").wrap('<div class="department-wrapper"/>'),
            e($(".fsConstituent.fsDirectory .fsConstituentItem")),
            FS.events.onElementUpdated("Constituent", function(t) {
                e(t.find(".fsConstituentItem"))
            }),
            FS.events.onElementDialogShown("Constituent", function(e) {
                $profile = e.find(".fsConstituentProfile"),
                $directory = $("#" + e.attr("id").split("_0_Dialog")[0]),
                $profile.append('<div class="left-col"></div><div class="right-col"></div>'),
                !$profile.find(".fsProfileImage").length && $directory[0].hasAttribute("data-image-sizes") && ($directory.hasClass("fsThumbnailOriginal") ? ($("<div class='fsProfileImage default-img'><img class='fsThumbnail' alt='Default Constituent Image Placeholder'></div>").prependTo($profile.find(".left-col")),
                (0,
                a.moveResourceImage)($directory, $profile.find(".fsProfileImage .fsThumbnail"))) : ($("<div class='fsProfileImage fsThumbnail default-img'><div class='fsCroppedImage'/></div>").prependTo($profile.find(".left-col")),
                (0,
                a.moveResourceImage)($directory, $profile.find(".fsProfileImage .fsCroppedImage")))),
                $profile.find(".fsProfileImage").length && ($profile.find(".fsProfileImage").append('<div class="overlay"/>'),
                $profile.find(".fsProfileImage").appendTo($profile.find(".left-col"))),
                $profile.find(".fsFullName").length && $profile.find(".fsFullName").appendTo($profile.find(".fsProfileImage .overlay")),
                $profile.find(".fsTitle").length && $profile.find(".fsTitle").appendTo($profile.find(".fsProfileImage .overlay")),
                $profile.find(".fsContacts").length && $profile.find(".fsContacts").appendTo($profile.find(".left-col")),
                $profile.find(".fsBiography").length && $profile.find(".fsBiography").appendTo($profile.find(".right-col")),
                $profile.find("> *:not(.left-col):not(.right-col)").appendTo($profile.find(".right-col")),
                $profile.find(".fsProfileSection").each(function() {
                    0 == $(this).children(":visible").length && $(this).addClass("hide")
                })
            })
        },
        customPosts: function() {
            function e(e) {
                e.each(function() {
                    var e = ($(this).parents(".fsPostElement"),
                    $(this));
                    e.find("a").length || e.attr("tabIndex", "0"),
                    e.find(".fsThumbnail").length || (e.addClass("no-img"),
                    e.prepend('<div class="fsThumbnail"/>')),
                    e.find(".fsSummary a").attr("tabIndex", "-1"),
                    e.find(".fsReadMoreLink").removeAttr("tabIndex"),
                    e.append('<div class="wrapper"/>'),
                    e.find(".fsTitle, .fsSummary, .fsReadMoreLink").appendTo(e.find(".wrapper")),
                    e.on("mouseenter focusin", function() {
                        setTimeout(function() {
                            e.find(".fsSummary").dotdotdot({
                                watch: !0
                            })
                        }, 400)
                    }),
                    e.on("mouseleave focusout", function() {
                        setTimeout(function() {
                            !!(e.find(":focus").length > 0) || setTimeout(function() {
                                e.find(".fsSummary").trigger("destroy")
                            }, 400)
                        }, 10)
                    })
                })
            }
            $(".custom-post-tools.fsCategoryFilter").each(function() {
                var e = $(this);
                e.prepend('<button class="dropdown-toggle">Filter By Category</button>'),
                e.find(".dropdown-toggle").on("click", function() {
                    e.toggleClass("active")
                })
            }),
            $(document).on("click", function(e) {
                $(e.target).closest(".custom-post-tools.fsCategoryFilter").length || $(".custom-post-tools.fsCategoryFilter").removeClass("active")
            }),
            e($(".fsPostElement.fsGrid.custom-post-grid article")),
            FS.events.onElementMoreLoaded("Post", function(t, n) {
                t.hasClass("fsGrid") && t.hasClass("custom-post-grid") && e(n)
            }),
            FS.events.onElementUpdated("Post", function(t) {
                t.hasClass("fsGrid") && t.hasClass("custom-post-grid") && (e(t.find("article")),
                $(".custom-post-tools.fsPostToolsElement.fsCategoryFilter.active").removeClass("active"))
            }),
            $(".fsPostElement.fsSlideshow.custom-post-slideshow article").each(function() {
                var e = $(this);
                !e.find(".fsThumbnail").length && e.parents(".fsPostElement").is("[data-image-sizes]") && (e.prepend('<div class="fsThumbnail"><div class="fsCroppedImage"></div></div>'),
                (0,
                a.moveResourceImage)(e.parents(".fsPostElement"), e.find(".fsThumbnail .fsCroppedImage"))),
                e.append('<div class="wrapper"/>'),
                e.find(".fsDateTime").appendTo(e.find(".wrapper")),
                e.find(".fsTitle").appendTo(e.find(".wrapper")),
                e.find(".fsReadMoreLink").appendTo(e.find(".wrapper"))
            })
        },
        customImageSlider: function() {
            $(".custom-image-slider").each(function() {
                var e = $(this)
                  , t = e.hasClass("preview");
                e.find(".fsResource").each(function() {
                    $(this).find("img").length && (0,
                    a.moveResourceImage)($(this).find("img"), $(this).find("picture"))
                }),
                e.find(".fsContent > .fsElementContent").dotdotdot({
                    watch: "window"
                }),
                i.notComposeMode && (e.find("> .fsElementContent").on("init", function(e, t) {
                    $(t.$dots).wrap('<div class="slick-navigation"/>'),
                    $(t.$prevArrow).insertBefore($(t.$dots)),
                    $(t.$nextArrow).insertAfter($(t.$dots))
                }),
                e.find("> .fsElementContent").slick({
                    dots: !0,
                    mobileFirst: !0,
                    responsive: [{
                        breakpoint: 1e3,
                        settings: {
                            centerMode: t,
                            variableWidth: t,
                            adaptiveHeight: !1
                        }
                    }]
                }),
                t && $(window).on("load resize", (0,
                s.debounce)(function() {
                    var t = $("#fsPageBodyWrapper").outerWidth()
                      , n = t < 1250 ? t - 70 : 1180;
                    t >= 1e3 && (e.css({
                        width: t + "px",
                        left: Math.ceil((t - n) / -2) + "px"
                    }),
                    e.find("> .fsElementContent.slick-initialized").length && e.find("> .fsElementContent.slick-initialized").slick("resize"))
                }, 200))),
                FS.events.onComposeModeChanged(function(t) {
                    t && e.find("> .fsElementContent.slick-initialized").length && (e.find("> .fsElementContent.slick-initialized").slick("destroy"),
                    e.find(".slick-navigation").remove())
                })
            })
        },
        athleticsList: function() {
            function e(e) {
                e.each(function() {
                    $(this).find(".fsTitle").prependTo($(this))
                })
            }
            e($(".fsAthleticsEvent.fsList:not(.bpa-athletic-events-1) article")),
            FS.events.onElementMoreLoaded("AthleticsEvent", function(t) {
                t.hasClass("fsList") && !t.hasClass("bpa-athletic-events-1") && e(t.find("article"))
            })
        },
        AllyClick: function(e) {
            return "click" == e.type || "keydown" == e.type && ("32" == e.keyCode || "13" == e.keyCode || void 0)
        }
    },
    t.default = ENHANCEMENTS
}
, function(e, t, n) {
    function i(e) {
        function t(e) {
            $("[data-hero]").length || ($(e.hero).eq(0).attr("data-hero", !0),
            o.$body.addClass("has-hero")),
            $("[data-hero]").insertAfter(e.insertAfter),
            FS.util.updateDynamicImages($("[data-hero]")),
            o.$body.addClass(e.defaultClass),
            e.callback.call(this)
        }
        var n = {
            hero: $(".fsPageLayout .hero"),
            insertAfter: $(".fsHeader .fsBanner"),
            defaultClass: "hero-loaded",
            callback: function() {}
        }
          , i = $.extend({}, n, e);
        $(i.hero).length && o.notComposeMode && t(i),
        FS.events.onComposeModeChanged(function(e) {
            e ? $(".fsPageLayout > .fsDiv > .fsElement").length ? $("[data-hero]").insertBefore(".fsPageLayout > .fsDiv:eq(0) .fsElement:eq(0)") : $("[data-hero]").insertBefore(".fsPageLayout > .fsDiv:eq(0)") : t(i)
        })
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.heroElement = i;
    var o = n(0)
}
, function(e, t) {
    !function() {
        "use strict";
        function e() {}
        function t(e) {
            this.options = n.Adapter.extend({}, t.defaults, e),
            this.axis = this.options.horizontal ? "horizontal" : "vertical",
            this.waypoints = [],
            this.element = this.options.element,
            this.createWaypoints()
        }
        var n = window.Waypoint;
        t.prototype.createWaypoints = function() {
            for (var e = {
                vertical: [{
                    down: "enter",
                    up: "exited",
                    offset: "100%"
                }, {
                    down: "entered",
                    up: "exit",
                    offset: "bottom-in-view"
                }, {
                    down: "exit",
                    up: "entered",
                    offset: 0
                }, {
                    down: "exited",
                    up: "enter",
                    offset: function() {
                        return -this.adapter.outerHeight()
                    }
                }],
                horizontal: [{
                    right: "enter",
                    left: "exited",
                    offset: "100%"
                }, {
                    right: "entered",
                    left: "exit",
                    offset: "right-in-view"
                }, {
                    right: "exit",
                    left: "entered",
                    offset: 0
                }, {
                    right: "exited",
                    left: "enter",
                    offset: function() {
                        return -this.adapter.outerWidth()
                    }
                }]
            }, t = 0, n = e[this.axis].length; t < n; t++) {
                var i = e[this.axis][t];
                this.createWaypoint(i)
            }
        }
        ,
        t.prototype.createWaypoint = function(e) {
            var t = this;
            this.waypoints.push(new n({
                context: this.options.context,
                element: this.options.element,
                enabled: this.options.enabled,
                handler: function(e) {
                    return function(n) {
                        t.options[e[n]].call(t, n)
                    }
                }(e),
                offset: e.offset,
                horizontal: this.options.horizontal
            }))
        }
        ,
        t.prototype.destroy = function() {
            for (var e = 0, t = this.waypoints.length; e < t; e++)
                this.waypoints[e].destroy();
            this.waypoints = []
        }
        ,
        t.prototype.disable = function() {
            for (var e = 0, t = this.waypoints.length; e < t; e++)
                this.waypoints[e].disable()
        }
        ,
        t.prototype.enable = function() {
            for (var e = 0, t = this.waypoints.length; e < t; e++)
                this.waypoints[e].enable()
        }
        ,
        t.defaults = {
            context: window,
            enabled: !0,
            enter: e,
            entered: e,
            exit: e,
            exited: e
        },
        n.Inview = t
    }()
}
, function(e, t, n) {
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var i = n(0)
      , o = n(2)
      , s = n(1);
    n(5),
    n(6),
    HOME = {
        init: function() {
            this.skipLink(),
            this.preloader(),
            this.heroVideo(),
            this.behindTheScenes(),
            this.voices(),
            i.notComposeMode && (this.onleave(),
            this.leadingTheWay(),
            this.kentValues(),
            this.beginYourJourney()),
            $(window).trigger("resize")
        },
        skipLink: function() {
            $("#fsSkipToMainContentLink").attr("href", "#" + $(".leading-the-way").attr("id"))
        },
        onleave: function() {
            window.onbeforeunload = function() {
                window.scrollTo(0, 0)
            }
        },
        preloader: function() {
            $("body:not(.fsComposeMode) .preloader").each(function() {
                var e = $(this);
                if ($(".hero-video video"),
                e.find("p:not(:first-child)").each(function() {
                    e.find("p:first-child").append("<br>" + $(this).html()),
                    $(this).remove()
                }),
                null !== localStorage.getItem("preloader"))
                    return console.log("else"),
                    i.$body.addClass("show show-elements show-text scrollbar"),
                    void e.css("display", "none");
                console.log("if"),
                localStorage.setItem("preloader", "true"),
                setInterval(function() {
                    i.$body.addClass("show"),
                    setTimeout(function() {
                        e.addClass("white-background")
                    }, 100),
                    setTimeout(function() {
                        e.addClass("fade-text")
                    }, 600),
                    setTimeout(function() {
                        e.addClass("start")
                    }, 1800),
                    setTimeout(function() {
                        e.addClass("zoom")
                    }, 3500),
                    setTimeout(function() {
                        e.addClass("text-delay")
                    }, 8e3),
                    setTimeout(function() {
                        i.$body.addClass("show-elements")
                    }, 5700),
                    setTimeout(function() {
                        i.$body.addClass("show-text")
                    }, 7500),
                    setTimeout(function() {
                        e.addClass("hide")
                    }, 9700),
                    setTimeout(function() {
                        i.$body.addClass("scrollbar")
                    }, 9600)
                }, 10)
            }),
            FS.events.onComposeModeChanged(function(e) {})
        },
        heroVideo: function() {
            $(".hero-video").each(function() {
                var e = $(this);
                e.find("video"),
                HOME.iOS() && $("html").addClass("ios"),
                e.find("> header .fsElementHeaderContent a").on("click", function(e) {
                    e.preventDefault();
                    var t = FS.getInternalNS("dialogs").Dialog({
                        dialogClass: "fsElementDialog hp-video"
                    });
                    t.setContent('<video src="' + $(this).attr("href") + '" autoplay controls>'),
                    t.open($(this))
                }),
                e.find("> footer .fsElementFooterContent button").on("click", function() {
                    $("html, body").animate({
                        scrollTop: $(".hero-video").next().offset().top
                    }, 2e3)
                })
            })
        },
        leadingTheWay: function() {
            $(".leading-the-way").each(function() {
                var e = $(this);
                (0,
                o.moveResourceImage)(e.find(".fsResourceElement img"), e.find(".fsResourceElement img")),
                $(window).width() < 1e3 ? e.find("> .fsElementContent:not(.cloned) .fsResourceElement").waypoint({
                    handler: function(t) {
                        "down" === t ? e.addClass("in-view") : e.removeClass("in-view")
                    },
                    offset: "66%"
                }) : e.find("> .fsElementContent:not(.cloned) .fsResourceElement").waypoint({
                    handler: function(t) {
                        "down" === t ? e.addClass("in-view") : e.removeClass("in-view")
                    },
                    offset: "50%"
                }),
                e.find("> .fsElementContent:not(.cloned) .fsContent a").length || e.find("> .fsElementContent:not(.cloned) .fsContent").attr("tabIndex", "0")
            })
        },
        kentValues: function() {
            $(".kent-values").each(function() {
                var e = $(this);
                e.find(".fsPanel.fsStateOpen").addClass("show").find("> header .fsElementHeaderContent").slideToggle(),
                e.waypoint({
                    handler: function(t) {
                        "down" === t ? e.addClass("in-view") : e.removeClass("in-view")
                    },
                    offset: "40%"
                }),
                e.find(".fsPanel > .fsElementContent").append('<div class="mobile-posts"><div class="mobile-inner"></div></div>'),
                e.find(".fsPostElement:not(.large) article").each(function() {
                    var e = $(this);
                    e.find("a").length || e.attr("tabIndex", "0"),
                    !e.find(".fsThumbnail").length && e.parents(".fsPostElement").is("[data-image-sizes]") ? (e.prepend('<div class="fsThumbnail default-img"/>'),
                    (0,
                    o.moveResourceImage)(e.parents(".fsPostElement"), e.find(".fsThumbnail"))) : e.find(".fsThumbnail .fsCroppedImage").length && (0,
                    o.moveResourceImage)(e.find(".fsThumbnail .fsCroppedImage img"), e.find(".fsThumbnail")),
                    e.find(".fsSummary a").attr("tabIndex", "-1"),
                    e.append('<div class="wrapper"/>'),
                    e.find(".fsTitle, .fsSummary, .fsReadMoreLink").appendTo(e.find(".wrapper")),
                    e.on("mouseenter focusin", function() {
                        setTimeout(function() {
                            e.find(".fsSummary").dotdotdot({
                                watch: !0
                            })
                        }, 400)
                    }),
                    e.on("mouseleave focusout", function() {
                        setTimeout(function() {
                            e.find(".fsSummary").trigger("destroy")
                        }, 400)
                    }),
                    e.clone().appendTo(e.parents(".fsPanel").find(".mobile-posts .mobile-inner"))
                }),
                e.find(".mobile-posts article").each(function() {
                    var t = $(this);
                    t.on("mouseenter focusin", function() {
                        setTimeout(function() {
                            t.find(".fsSummary").dotdotdot({
                                watch: !0
                            })
                        }, 400)
                    }),
                    t.on("mouseleave focusout", function() {
                        setTimeout(function() {
                            t.find(".fsSummary").trigger("destroy")
                        }, 400)
                    }),
                    t.find(".fsReadMoreLink").on("click", function() {
                        e.find(".fsPostElement .fsReadMoreLink[data-slug='" + $(this).attr("data-slug") + "']").trigger("click")
                    })
                }),
                e.find(".mobile-posts .mobile-inner").on("init", function(e, t) {
                    $(t.$dots).wrap('<div class="slick-navigation"/>'),
                    $(t.$prevArrow).insertBefore($(t.$dots)),
                    $(t.$nextArrow).insertAfter($(t.$dots))
                }),
                e.find(".mobile-posts .mobile-inner").slick({
                    dots: !0
                }),
                e.find(".fsPanel > header .fsElementTitle a").each(function(t) {
                    $(this).trigger("click"),
                    t + 1 === $(this).parents(".kent-values").find(".fsPanel").length && ($(this).parents(".kent-values").find(".fsPanel").eq(0).find("> header .fsElementTitle a").trigger("click"),
                    e.find(".fsPanel > .fsElementContent").removeAttr("tabIndex"))
                })
            }),
            FS.events.onElementShown("panel", function(e) {
                if (e.parents(".kent-values").length) {
                    if (e.hasClass("show")) {
                        var t = 300
                          , n = setInterval(function() {
                            t -= 10,
                            e.addClass("fsStateOpen"),
                            0 === t && clearInterval(n)
                        }, 10);
                        return
                    }
                    e.find("> .fsElementContent").removeAttr("tabIndex"),
                    e.parent().find(".fsPanel.show").find("> header .fsElementHeaderContent").slideToggle(),
                    e.find("> header .fsElementHeaderContent").slideToggle(),
                    e.find(".slick-initialized").length && (e.addClass("hide"),
                    setTimeout(function() {
                        e.find(".slick-initialized").slick("slickGoTo", e.find(".slick-initialized .slick-current")[0].getAttribute("data-slick-index")),
                        e.removeClass("hide"),
                        e.parent().find(".fsPanel.show").removeClass("show"),
                        e.addClass("show"),
                        e.find(".fsPostElement article").each(function() {
                            $(this).find(".fsThumbnail.default-img").length ? (0,
                            o.moveResourceImage)($(this).parents(".fsPostElement"), $(this).find(".fsThumbnail.default-img")) : $(this).find(".fsThumbnail .fsCroppedImage").length && (0,
                            o.moveResourceImage)($(this).find(".fsCroppedImage"), $(this).find(".fsThumbnail"))
                        })
                    }, 400))
                }
            })
        },
        sharingStories: function() {
            !function(e, t, n) {
                e.addEventListener("scroll", function(e) {
                    return e.target.removeEventListener(e.type, arguments.callee),
                    n(e)
                })
            }(document, 0, function(e) {
                $(".sharing-stories .fsResourceElement.on .fsResource:nth-child(1) video")[0].play()
            }),
            $(".sharing-stories").each(function() {
                var e = $(this);
                e.waypoint({
                    handler: function(t) {
                        "down" === t ? e.addClass("in-view") : e.removeClass("in-view")
                    },
                    offset: "70%"
                }),
                e.find(".fsResourceElement").each(function(e) {
                    var t = $(this)
                      , n = t.find("article:nth-child(1)")
                      , i = t.find("article:nth-child(2)");
                    0 === e && t.addClass("on"),
                    t.find("> header .fsElementHeaderContent").attr("data-text", t.find("> header .fsElementHeaderContent").text()),
                    $('<button class="close-video"><span class="fsStyleSROnly">Close long form video</span></button>').prependTo(i),
                    $('<button class="open-video"><span class="fsStyleSROnly">Open long form video</span></button>').prependTo(n),
                    n.find("video").attr({
                        tabIndex: "-1",
                        loop: "true",
                        muted: "muted"
                    }),
                    n.find("video")[0].muted = !0,
                    n.find("video").removeAttr("controls"),
                    i.find("video").attr("tabIndex", "-1"),
                    n.find(".fsPlayOverlay").removeAttr("tabIndex"),
                    n.on("mouseenter focusin", function() {
                        t.hasClass("on") && n.find("video")[0].play()
                    }),
                    n.find(".open-video").on("click", function() {
                        t.parent().find(".fsResourceElement.active").length && (t.parent().find(".fsResourceElement.active article:nth-child(2) video")[0].pause(),
                        t.parent().find(".fsResourceElement.active").removeClass("active")),
                        t.parent().find(".fsResourceElement.on article:first-child video")[0].pause(),
                        t.parent().find(".fsResourceElement.on").removeClass("on"),
                        t.addClass("on"),
                        n.find("video")[0].play(),
                        n.find("video")[0].muted = !0,
                        n.find(".fsPlayOverlay button").focus()
                    }),
                    n.find(".fsPlayOverlay button").on("click", function() {
                        t.addClass("active"),
                        setTimeout(function() {
                            n.find("video")[0].pause(),
                            i.find("video")[0].play(),
                            i.find(".close-video").focus()
                        }, 200)
                    }),
                    i.find(".close-video").on("click", function() {
                        t.removeClass("active"),
                        i.find("video")[0].pause(),
                        n.find("video")[0].play(),
                        setTimeout(function() {
                            n.find(".fsPlayOverlay button").focus()
                        }, 200)
                    })
                }),
                $(window).on("resize load", (0,
                s.debounce)(function() {
                    return $(window).width() >= 1e3 ? void (e.find("> .fsElementContent").hasClass("slick-initialized") && e.find("> .fsElementContent").slick("unslick")) : e.find("> .fsElementContent").hasClass("slick-initialized") ? void 0 : void e.find("> .fsElementContent").slick({
                        centerMode: !0
                    })
                }, 100))
            })
        },
        behindTheScenes: function() {
            $(".behind-the-scenes").each(function() {
                var e = $(this);
                e.waypoint({
                    handler: function(t) {
                        "down" === t ? e.addClass("in-view") : e.removeClass("in-view")
                    },
                    offset: "50%"
                }),
                e.find(".fsContent").each(function() {
                    var e = $(this)
                      , t = $(this).siblings(".fsResourceElement").find("img");
                    i.notComposeMode && ($('<div class="modal-wrapper"/>').prependTo(e.find("> .fsElementContent")),
                    t.clone().prependTo(e.find(".modal-wrapper")),
                    e.find("> .fsElementContent h3").length && ($('<button class="open-modal"><span>Open Modal</span></button>').prependTo(e.find("> header")),
                    e.find("> header .fsElementTitle").text(e.find("> .fsElementContent h3").eq(0).text()),
                    e.find("> .fsElementContent h3").appendTo(e.find(".modal-wrapper"))),
                    $('<button class="close-modal"><span>Close Modal</span></button>').prependTo(e.find("> .fsElementContent")),
                    e.find(".open-modal").on("click", function() {
                        e.find(".close-modal, > .fsElementContent a").removeAttr("tabIndex"),
                        e.addClass("active"),
                        setTimeout(function() {
                            e.find(".close-modal").focus()
                        }, 400),
                        (0,
                        s.trapFocus)(document.querySelector("#" + e.attr("id") + " > .fsElementContent"), function(t, n) {
                            e.removeClass("active"),
                            e.find(".open-modal").focus(),
                            t.removeEventListener("keydown", n)
                        })
                    }),
                    e.find(".open-modal").on("mouseenter focusin", function() {
                        e.find("> header").addClass("on")
                    }),
                    e.find(".open-modal").on("mouseleave focusout", function() {
                        e.find("> header").removeClass("on")
                    }),
                    e.find(".close-modal").on("click", function() {
                        e.removeClass("active"),
                        e.find(".open-modal").focus(),
                        e.find(".close-modal, > .fsElementContent a").attr("tabIndex", "-1")
                    }))
                }),
                i.notComposeMode && (e.find("> .fsElementContent").on("init", function(t, n) {
                    $(n.$dots).wrap('<div class="slick-navigation"/>'),
                    $(n.$prevArrow).insertBefore($(n.$dots)),
                    $(n.$nextArrow).insertAfter($(n.$dots)),
                    $(window).on("load resize", function() {
                        e.find(".slick-track").css("minHeight", e.find(".slick-current").height() + "px")
                    })
                }),
                e.find("> .fsElementContent").slick({
                    dots: !0,
                    mobileFirst: !0,
                    responsive: [{
                        breakpoint: 1e3,
                        settings: {
                            centerMode: !0
                        }
                    }]
                }),
                e.find("> .fsElementContent").on("beforeChange", function(e, t, n, i) {
                    $(t.$slides).eq(n).find(".fsContent").removeClass("active")
                }),
                e.find("> .fsElementContent").on("afterChange", function(e, t, n) {
                    setTimeout(function() {
                        $(t.$slides).eq(n).find(".close-modal, > .fsElementContent a").attr("tabIndex", "-1")
                    }, 1e3)
                }),
                e.find("> .fsElementContent").slick("slickGoTo", 0)),
                FS.events.onComposeModeChanged(function(t) {
                    t ? e.find(".slick-initialized").length && (e.find(".slick-initialized").slick("destroy"),
                    e.find(".slick-navigation").remove()) : (e.find("> .fsElementContent").on("init", function(e, t) {
                        $(t.$dots).wrap('<div class="slick-navigation"/>'),
                        $(t.$prevArrow).insertBefore($(t.$dots)),
                        $(t.$nextArrow).insertAfter($(t.$dots))
                    }),
                    e.find("> .fsElementContent").slick({
                        dots: !0,
                        mobileFirst: !0,
                        responsive: [{
                            breakpoint: 1e3,
                            settings: {
                                centerMode: !0
                            }
                        }]
                    }),
                    e.find("> .fsElementContent").on("beforeChange", function(e, t, n, i) {
                        $(t.$slides).eq(n).find(".fsContent").removeClass("active")
                    }),
                    e.find("> .fsElementContent").on("afterChange", function(e, t, n) {
                        setTimeout(function() {
                            $(t.$slides).eq(n).find(".close-modal, > .fsElementContent a").attr("tabIndex", "-1")
                        }, 1e3)
                    }))
                })
            })
        },
        voices: function() {
            $(".voices").each(function() {
                var e = $(this);
                e.waypoint({
                    handler: function(t) {
                        "down" === t ? e.addClass("in-view") : e.removeClass("in-view")
                    },
                    offset: "50%"
                }),
                e.find(".fsContent").append('<div class="slideshow-navigation"><button class="prev slideshow-arrow" aria-label="Previous Slide">Previous</button><ul class="slideshow-dots"></ul><button class="next slideshow-arrow" aria-label="Next Slide">Next</button></div>'),
                e.find(".fsPostElement").each(function() {
                    var t = $(this);
                    t.find("article").each(function(n) {
                        $('<li><button aria-label="' + (n + 1) + " of " + t.find("article").length + '">' + (n + 1) + "</button></li>").appendTo(e.find(".fsContent .slideshow-dots")),
                        0 === n && e.find(".slideshow-navigation .slideshow-dots li:first-child").addClass("active"),
                        $(this).find("a").length || $(this).attr("tabIndex", "0"),
                        !$(this).find(".fsThumbnail").length && t.is("[data-image-sizes]") && ($(this).prepend('<div class="fsThumbnail default-img"><img alt="Kent Place Logo" src=""></div>'),
                        (0,
                        o.moveResourceImage)(t, $(this).find(".fsThumbnail img")))
                    }),
                    i.notComposeMode && (e.find(".slideshow-navigation .slideshow-dots li button").on("click", function() {
                        var n = $(this).parent().index();
                        e.find(".slideshow-navigation .slideshow-dots li").removeClass("active"),
                        $(this).parent().addClass("active"),
                        t.find(".fsListItems").slick("slickGoTo", n)
                    }),
                    e.find(".slideshow-navigation .slideshow-arrow.prev").on("click", function() {
                        t.find(".fsListItems").slick("slickPrev")
                    }),
                    e.find(".slideshow-navigation .slideshow-arrow.next").on("click", function() {
                        t.find(".fsListItems").slick("slickNext")
                    }),
                    t.find(".fsListItems").on("beforeChange", function(t, n, i, o) {
                        e.find(".slideshow-navigation .slideshow-dots li").removeClass("active"),
                        e.find(".slideshow-navigation .slideshow-dots li").eq(o).addClass("active")
                    }),
                    t.find(".fsListItems").slick({
                        arrows: !1,
                        variableWidth: !0
                    })),
                    FS.events.onComposeModeChanged(function(e) {
                        e ? t.find(".slick-initialized").length && t.find(".slick-initialized").slick("destroy") : t.find(".fsListItems").slick({
                            arrows: !1,
                            variableWidth: !0
                        })
                    })
                })
            })
        },
        beginYourJourney: function() {
            $(".begin-your-journey").each(function() {
                var e = $(this);
                e.waypoint({
                    handler: function(t) {
                        "down" === t ? e.addClass("in-view") : e.removeClass("in-view")
                    },
                    offset: "50%"
                }),
                e.find("> header").clone().addClass("cloned").appendTo(e),
                e.find("> .fsElementContent").addClass("one"),
                e.find(".fsPanel").addClass("right"),
                e.find(".fsPanel.fsStateOpen").addClass("show"),
                e.find(".fsPanel > .fsElementContent").removeAttr("tabIndex"),
                e.find(".fsPanel > header").on("click", function(e) {
                    var t = $(this);
                    t.parent().hasClass("show") && setTimeout(function() {
                        t.parent().addClass("fsStateOpen")
                    }, 300)
                })
            }),
            FS.events.onElementShown("panel", function(e) {
                if (e.parents(".begin-your-journey").length) {
                    if (e.hasClass("show"))
                        return void e.addClass("fsStateOpen");
                    e.find("> .fsElementContent").removeAttr("tabIndex"),
                    e.parents(".begin-your-journey").find("> .fsElementContent").removeClass("one two three four"),
                    1 === e.index() ? e.parents(".begin-your-journey").find("> .fsElementContent").addClass("one") : 2 === e.index() ? e.parents(".begin-your-journey").find("> .fsElementContent").addClass("two") : 3 === e.index() ? e.parents(".begin-your-journey").find("> .fsElementContent").addClass("three") : 4 === e.index() && e.parents(".begin-your-journey").find("> .fsElementContent").addClass("four"),
                    e.parent().find(".fsPanel.show").addClass("animate"),
                    setTimeout(function() {
                        e.parent().find(".fsPanel.show.animate").removeClass("show"),
                        e.addClass("show")
                    }, 300)
                }
            })
        },
        iOS: function() {
            return ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend"in document
        }
    },
    t.default = HOME
}
, function(e, t, n) {
    n(23),
    n(26)
}
, function(e, t, n) {
    n(24),
    n(25)
}
, function(e, t) {}
, function(e, t, n) {
    var i = n(0)
      , o = $(".bpa-athletics-board-1")
      , s = ($(".bpa-athletics-toggle-1"),
    o.find(".bpa-athletic-events-1"));
    BPA_ATHLETICS_BOARD_V1 = {
        init: function() {
            this.athleticBoardSlideshow(),
            this.athleticBoardStructure(),
            i.notComposeMode && o.each(function() {
                $(this).hasClass("header") ? $(this).insertBefore(i.$pageBodyWrapper) : $(this).hasClass("footer") && $(this).insertAfter(i.$pageBodyWrapper)
            })
        },
        athleticBoardStructure: function() {
            o.each(function() {
                var e = $(this).find(".bpa-athletics-toggle-1 > .fsElementContent button")
                  , t = $(this).find(".bpa-athletic-events-1");
                t.eq(0).addClass("on"),
                e.eq(0).addClass("on"),
                e.each(function(n) {
                    $(this).on("click", function() {
                        e.removeClass("on"),
                        t.removeClass("on"),
                        $(this).addClass("on"),
                        t.eq(n).addClass("on")
                    })
                })
            })
        },
        athleticBoardSlideshow: function() {
            function e() {
                t.each(function() {
                    $(this).width() < 300 ? ($(this).addClass("small"),
                    $(this).parents(".bpa-athletics-board-1").addClass("small")) : ($(this).removeClass("small"),
                    $(this).parents(".bpa-athletics-board-1").removeClass("small"))
                })
            }
            var t = s.find(".fsListItems");
            t.each(function() {
                $(this).slick({
                    arrows: !0,
                    infinite: !0,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: !0,
                    respondTo: "slider",
                    responsive: [{
                        breakpoint: 300,
                        settings: {
                            arrows: !0,
                            infinite: !0,
                            speed: 300,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            variableWidth: !1,
                            adaptiveHeight: !0,
                            respondTo: "slider"
                        }
                    }]
                })
            }),
            e(),
            i.$window.on("resize", function() {
                e()
            })
        },
        athleticBoardUpdate: function(e) {
            e.each(function() {
                $(this).find(".fsListItems").slick({
                    arrows: !0,
                    infinite: !0,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: !0,
                    respondTo: "slider",
                    responsive: [{
                        breakpoint: 300,
                        settings: {
                            arrows: !0,
                            infinite: !0,
                            speed: 300,
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            variableWidth: !1,
                            adaptiveHeight: !0,
                            respondTo: "slider"
                        }
                    }]
                })
            })
        }
    },
    o.length && (BPA_ATHLETICS_BOARD_V1.init(),
    FS.events.onElementUpdated("AthleticsEvent", function(e) {
        BPA_ATHLETICS_BOARD_V1.athleticBoardUpdate(e)
    }),
    FS.events.onElementAdded("AthleticsEvent", function(e) {
        BPA_ATHLETICS_BOARD_V1.athleticBoardUpdate(e)
    }))
}
, function(e, t, n) {
    n(27),
    n(28)
}
, function(e, t) {}
, function(e, t, n) {
    var i = n(0);
    n(29);
    var o = $(".bpa-college-slider-2");
    $.fn.college_slider_2 = function() {
        this.each(function() {
            var e = $(this)
              , t = e.find("> .fsElementContent > .fsListItems")
              , n = t.children()
              , i = 0;
            if (e.find(".fsResource figcaption a").parents(".fsResource").addClass("linked-image"),
            n.length) {
                n.each(function() {
                    i += $(this).outerWidth()
                });
                for (var o = 0; o < Math.ceil(2e3 / i); o++)
                    n.clone().appendTo(t);
                t.marquee({
                    speed: 25,
                    pauseOnHover: !1,
                    delayBeforeStart: 500,
                    direction: "left",
                    duplicated: !0,
                    startVisible: !0,
                    allowCss3Support: !0,
                    pauseOnCycle: !0
                }),
                e.addClass("element-loaded")
            } else
                e.addClass("element-empty")
        })
    }
    ,
    i.notComposeMode && o.length && o.college_slider_2()
}
, function(e, t) {
    !function(e) {
        e.fn.marquee = function(t) {
            return this.each(function() {
                var n, i, o, s, a, r = e.extend({}, e.fn.marquee.defaults, t), l = e(this), d = 3, f = "animation-play-state", c = !1, u = function(e, t, n) {
                    for (var i = ["webkit", "moz", "MS", "o", ""], o = 0; o < i.length; o++)
                        i[o] || (t = t.toLowerCase()),
                        e.addEventListener(i[o] + t, n, !1)
                }, h = function(e) {
                    var t = [];
                    for (var n in e)
                        e.hasOwnProperty(n) && t.push(n + ":" + e[n]);
                    return t.push(),
                    "{" + t.join(",") + "}"
                }, p = function() {
                    l.timer = setTimeout(A, r.delayBeforeStart)
                }, m = {
                    pause: function() {
                        c && r.allowCss3Support ? n.css(f, "paused") : e.fn.pause && n.pause(),
                        l.data("runningStatus", "paused"),
                        l.trigger("paused")
                    },
                    resume: function() {
                        c && r.allowCss3Support ? n.css(f, "running") : e.fn.resume && n.resume(),
                        l.data("runningStatus", "resumed"),
                        l.trigger("resumed")
                    },
                    toggle: function() {
                        m["resumed" == l.data("runningStatus") ? "pause" : "resume"]()
                    },
                    destroy: function() {
                        clearTimeout(l.timer),
                        l.find("*").addBack().unbind(),
                        l.html(l.find(".js-marquee:first").html())
                    }
                };
                if ("string" == typeof t)
                    return void (e.isFunction(m[t]) && (n || (n = l.find(".js-marquee-wrapper")),
                    !0 === l.data("css3AnimationIsSupported") && (c = !0),
                    m[t]()));
                var v;
                e.each(r, function(e, t) {
                    if (void 0 !== (v = l.attr("data-" + e))) {
                        switch (v) {
                        case "true":
                            v = !0;
                            break;
                        case "false":
                            v = !1
                        }
                        r[e] = v
                    }
                }),
                r.speed && (r.duration = parseInt(l.width(), 10) / r.speed * 1e3),
                s = "up" == r.direction || "down" == r.direction,
                r.gap = r.duplicated ? parseInt(r.gap) : 0,
                l.wrapInner('<div class="js-marquee"></div>');
                var g = l.find(".js-marquee").css({
                    "margin-right": r.gap,
                    float: "left"
                });
                if (r.duplicated && g.clone(!0).appendTo(l),
                l.wrapInner('<div style="width:100000px" class="js-marquee-wrapper"></div>'),
                n = l.find(".js-marquee-wrapper"),
                s) {
                    var b = l.height();
                    n.removeAttr("style"),
                    l.height(b),
                    l.find(".js-marquee").css({
                        float: "none",
                        "margin-bottom": r.gap,
                        "margin-right": 0
                    }),
                    r.duplicated && l.find(".js-marquee:last").css({
                        "margin-bottom": 0
                    });
                    var $ = l.find(".js-marquee:first").height() + r.gap;
                    r.startVisible && !r.duplicated ? (r._completeDuration = (parseInt($, 10) + parseInt(b, 10)) / parseInt(b, 10) * r.duration,
                    r.duration = parseInt($, 10) / parseInt(b, 10) * r.duration) : r.duration = (parseInt($, 10) + parseInt(b, 10)) / parseInt(b, 10) * r.duration
                } else
                    a = l.find(".js-marquee:first").width() + r.gap,
                    i = l.width(),
                    r.startVisible && !r.duplicated ? (r._completeDuration = (parseInt(a, 10) + parseInt(i, 10)) / parseInt(i, 10) * r.duration,
                    r.duration = parseInt(a, 10) / parseInt(i, 10) * r.duration) : r.duration = (parseInt(a, 10) + parseInt(i, 10)) / parseInt(i, 10) * r.duration;
                if (r.duplicated && (r.duration = r.duration / 2),
                r.allowCss3Support) {
                    var w = document.body || document.createElement("div")
                      , y = "marqueeAnimation-" + Math.floor(1e7 * Math.random())
                      , C = "Webkit Moz O ms Khtml".split(" ")
                      , k = "animation"
                      , T = ""
                      , x = "";
                    if (void 0 !== w.style.animation && (x = "@keyframes " + y + " ",
                    c = !0),
                    !1 === c)
                        for (var E = 0; E < C.length; E++)
                            if (void 0 !== w.style[C[E] + "AnimationName"]) {
                                var S = "-" + C[E].toLowerCase() + "-";
                                k = S + k,
                                f = S + f,
                                x = "@" + S + "keyframes " + y + " ",
                                c = !0;
                                break
                            }
                    c && (T = y + " " + r.duration / 1e3 + "s " + r.delayBeforeStart / 1e3 + "s infinite " + r.css3easing,
                    l.data("css3AnimationIsSupported", !0))
                }
                var P = function() {
                    n.css("transform", "translateY(" + ("up" == r.direction ? b + "px" : "-" + $ + "px") + ")")
                }
                  , I = function() {
                    n.css("transform", "translateX(" + ("left" == r.direction ? i + "px" : "-" + a + "px") + ")")
                };
                r.duplicated ? (s ? r.startVisible ? n.css("transform", "translateY(0)") : n.css("transform", "translateY(" + ("up" == r.direction ? b + "px" : "-" + (2 * $ - r.gap) + "px") + ")") : r.startVisible ? n.css("transform", "translateX(0)") : n.css("transform", "translateX(" + ("left" == r.direction ? i + "px" : "-" + (2 * a - r.gap) + "px") + ")"),
                r.startVisible || (d = 1)) : r.startVisible ? d = 2 : s ? P() : I();
                var A = function t() {
                    if (r.duplicated && (1 === d ? (r._originalDuration = r.duration,
                    r.duration = s ? "up" == r.direction ? r.duration + b / ($ / r.duration) : 2 * r.duration : "left" == r.direction ? r.duration + i / (a / r.duration) : 2 * r.duration,
                    T && (T = y + " " + r.duration / 1e3 + "s " + r.delayBeforeStart / 1e3 + "s " + r.css3easing),
                    d++) : 2 === d && (r.duration = r._originalDuration,
                    T && (y += "0",
                    x = e.trim(x) + "0 ",
                    T = y + " " + r.duration / 1e3 + "s 0s infinite " + r.css3easing),
                    d++)),
                    s ? r.duplicated ? (d > 2 && n.css("transform", "translateY(" + ("up" == r.direction ? 0 : "-" + $ + "px") + ")"),
                    o = {
                        transform: "translateY(" + ("up" == r.direction ? "-" + $ + "px" : 0) + ")"
                    }) : r.startVisible ? 2 === d ? (T && (T = y + " " + r.duration / 1e3 + "s " + r.delayBeforeStart / 1e3 + "s " + r.css3easing),
                    o = {
                        transform: "translateY(" + ("up" == r.direction ? "-" + $ + "px" : b + "px") + ")"
                    },
                    d++) : 3 === d && (r.duration = r._completeDuration,
                    T && (y += "0",
                    x = e.trim(x) + "0 ",
                    T = y + " " + r.duration / 1e3 + "s 0s infinite " + r.css3easing),
                    P()) : (P(),
                    o = {
                        transform: "translateY(" + ("up" == r.direction ? "-" + n.height() + "px" : b + "px") + ")"
                    }) : r.duplicated ? (d > 2 && n.css("transform", "translateX(" + ("left" == r.direction ? 0 : "-" + a + "px") + ")"),
                    o = {
                        transform: "translateX(" + ("left" == r.direction ? "-" + a + "px" : 0) + ")"
                    }) : r.startVisible ? 2 === d ? (T && (T = y + " " + r.duration / 1e3 + "s " + r.delayBeforeStart / 1e3 + "s " + r.css3easing),
                    o = {
                        transform: "translateX(" + ("left" == r.direction ? "-" + a + "px" : i + "px") + ")"
                    },
                    d++) : 3 === d && (r.duration = r._completeDuration,
                    T && (y += "0",
                    x = e.trim(x) + "0 ",
                    T = y + " " + r.duration / 1e3 + "s 0s infinite " + r.css3easing),
                    I()) : (I(),
                    o = {
                        transform: "translateX(" + ("left" == r.direction ? "-" + a + "px" : i + "px") + ")"
                    }),
                    l.trigger("beforeStarting"),
                    c) {
                        n.css(k, T);
                        var f = x + " { 100%  " + h(o) + "}"
                          , m = n.find("style");
                        0 !== m.length ? m.filter(":last").html(f) : e("head").append("<style>" + f + "</style>"),
                        u(n[0], "AnimationIteration", function() {
                            l.trigger("finished")
                        }),
                        u(n[0], "AnimationEnd", function() {
                            t(),
                            l.trigger("finished")
                        })
                    } else
                        n.animate(o, r.duration, r.easing, function() {
                            l.trigger("finished"),
                            r.pauseOnCycle ? p() : t()
                        });
                    l.data("runningStatus", "resumed")
                };
                l.bind("pause", m.pause),
                l.bind("resume", m.resume),
                r.pauseOnHover && (l.bind("mouseenter", m.pause),
                l.bind("mouseleave", m.resume)),
                c && r.allowCss3Support ? A() : p()
            })
        }
        ,
        e.fn.marquee.defaults = {
            allowCss3Support: !0,
            css3easing: "linear",
            easing: "linear",
            delayBeforeStart: 1e3,
            direction: "left",
            duplicated: !1,
            duration: 5e3,
            gap: 20,
            pauseOnCycle: !1,
            pauseOnHover: !1,
            startVisible: !1
        }
    }(jQuery)
}
]);
