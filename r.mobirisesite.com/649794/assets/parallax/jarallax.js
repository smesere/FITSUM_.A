/*!
 * Name    : Just Another Parallax [Jarallax]
 * Version : 1.12.7
 * Author  : nK <https://nkdev.info>
 * GitHub  : https://github.com/nk-o/jarallax
 */
! function(e) {
    var t = {};

    function n(o) {
        if (t[o]) return t[o].exports;
        var i = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports
    }
    n.m = e, n.c = t, n.d = function(e, t, o) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) n.d(o, i, function(t) {
                return e[t]
            }.bind(null, i));
        return o
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 10)
}([, , function(e, t) {
    e.exports = function(e) {
        "complete" === document.readyState || "interactive" === document.readyState ? e.call() : document.attachEvent ? document.attachEvent("onreadystatechange", (function() {
            "interactive" === document.readyState && e.call()
        })) : document.addEventListener && document.addEventListener("DOMContentLoaded", e)
    }
}, function(e, t, n) {
    (function(t) {
        var n;
        n = "undefined" != typeof window ? window : void 0 !== t ? t : "undefined" != typeof self ? self : {}, e.exports = n
    }).call(this, n(4))
}, function(e, t) {
    function n(e) {
        return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, n(e)
    }
    var o;
    o = function() {
        return this
    }();
    try {
        o = o || new Function("return this")()
    } catch (e) {
        "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (o = window)
    }
    e.exports = o
}, , , , , , function(e, t, n) {
    e.exports = n(11)
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n(2),
        i = n.n(o),
        a = n(3),
        r = n(12);

    function l(e) {
        return l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, l(e)
    }
    var s = a.window.jarallax;
    if (a.window.jarallax = r.default, a.window.jarallax.noConflict = function() {
            return a.window.jarallax = s, this
        }, void 0 !== a.jQuery) {
        var c = function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            Array.prototype.unshift.call(t, this);
            var o = r.default.apply(a.window, t);
            return "object" !== l(o) ? o : this
        };
        c.constructor = r.default.constructor;
        var u = a.jQuery.fn.jarallax;
        a.jQuery.fn.jarallax = c, a.jQuery.fn.jarallax.noConflict = function() {
            return a.jQuery.fn.jarallax = u, this
        }
    }
    i()((function() {
        Object(r.default)(document.querySelectorAll("[data-jarallax]"))
    }))
}, function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n(2),
        i = n.n(o),
        a = n(3);

    function r(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n = e && ("undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
            if (null == n) return;
            var o, i, a = [],
                r = !0,
                l = !1;
            try {
                for (n = n.call(e); !(r = (o = n.next()).done) && (a.push(o.value), !t || a.length !== t); r = !0);
            } catch (e) {
                l = !0, i = e
            } finally {
                try {
                    r || null == n.return || n.return()
                } finally {
                    if (l) throw i
                }
            }
            return a
        }(e, t) || function(e, t) {
            if (!e) return;
            if ("string" == typeof e) return l(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return l(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function l(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
        return o
    }

    function s(e) {
        return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, s(e)
    }

    function c(e, t) {
        for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
    }
    var u, p, d = a.window.navigator,
        m = -1 < d.userAgent.indexOf("MSIE ") || -1 < d.userAgent.indexOf("Trident/") || -1 < d.userAgent.indexOf("Edge/"),
        f = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(d.userAgent),
        g = function() {
            for (var e = "transform WebkitTransform MozTransform".split(" "), t = document.createElement("div"), n = 0; n < e.length; n += 1)
                if (t && void 0 !== t.style[e[n]]) return e[n];
            return !1
        }();

    function y() {
        f ? (!u && document.body && ((u = document.createElement("div")).style.cssText = "position: fixed; top: -9999px; left: 0; height: 100vh; width: 0;", document.body.appendChild(u)), p = (u ? u.clientHeight : 0) || a.window.innerHeight || document.documentElement.clientHeight) : p = a.window.innerHeight || document.documentElement.clientHeight
    }
    y(), a.window.addEventListener("resize", y), a.window.addEventListener("orientationchange", y), a.window.addEventListener("load", y), i()((function() {
        y()
    }));
    var b = [];

    function h() {
        b.length && (b.forEach((function(e, t) {
            var n = e.instance,
                o = e.oldData,
                i = n.$item.getBoundingClientRect(),
                r = {
                    width: i.width,
                    height: i.height,
                    top: i.top,
                    bottom: i.bottom,
                    wndW: a.window.innerWidth,
                    wndH: p
                },
                l = !o || o.wndW !== r.wndW || o.wndH !== r.wndH || o.width !== r.width || o.height !== r.height,
                s = l || !o || o.top !== r.top || o.bottom !== r.bottom;
            b[t].oldData = r, l && n.onResize(), s && n.onScroll()
        })), a.window.requestAnimationFrame(h))
    }
    var v = 0,
        x = function() {
            function e(t, n) {
                ! function(e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e);
                var o = this;
                o.instanceID = v, v += 1, o.$item = t, o.defaults = {
                    type: "scroll",
                    speed: .5,
                    imgSrc: null,
                    imgElement: ".jarallax-img",
                    imgSize: "cover",
                    imgPosition: "50% 50%",
                    imgRepeat: "no-repeat",
                    keepImg: !1,
                    elementInViewport: null,
                    zIndex: -100,
                    disableParallax: !1,
                    disableVideo: !1,
                    videoSrc: null,
                    videoStartTime: 0,
                    videoEndTime: 0,
                    videoVolume: 0,
                    videoLoop: !0,
                    videoPlayOnlyVisible: !0,
                    videoLazyLoading: !0,
                    onScroll: null,
                    onInit: null,
                    onDestroy: null,
                    onCoverImage: null
                };
                var i = o.$item.dataset || {},
                    a = {};
                if (Object.keys(i).forEach((function(e) {
                        var t = e.substr(0, 1).toLowerCase() + e.substr(1);
                        t && void 0 !== o.defaults[t] && (a[t] = i[e])
                    })), o.options = o.extend({}, o.defaults, a, n), o.pureOptions = o.extend({}, o.options), Object.keys(o.options).forEach((function(e) {
                        "true" === o.options[e] ? o.options[e] = !0 : "false" === o.options[e] && (o.options[e] = !1)
                    })), o.options.speed = Math.min(2, Math.max(-1, parseFloat(o.options.speed))), "string" == typeof o.options.disableParallax && (o.options.disableParallax = new RegExp(o.options.disableParallax)), o.options.disableParallax instanceof RegExp) {
                    var l = o.options.disableParallax;
                    o.options.disableParallax = function() {
                        return l.test(d.userAgent)
                    }
                }
                if ("function" != typeof o.options.disableParallax && (o.options.disableParallax = function() {
                        return !1
                    }), "string" == typeof o.options.disableVideo && (o.options.disableVideo = new RegExp(o.options.disableVideo)), o.options.disableVideo instanceof RegExp) {
                    var c = o.options.disableVideo;
                    o.options.disableVideo = function() {
                        return c.test(d.userAgent)
                    }
                }
                "function" != typeof o.options.disableVideo && (o.options.disableVideo = function() {
                    return !1
                });
                var u = o.options.elementInViewport;
                u && "object" === s(u) && void 0 !== u.length && (u = r(u, 1)[0]);
                u instanceof Element || (u = null), o.options.elementInViewport = u, o.image = {
                    src: o.options.imgSrc || null,
                    $container: null,
                    useImgTag: !1,
                    position: /iPad|iPhone|iPod|Android/.test(d.userAgent) ? "absolute" : "fixed"
                }, o.initImg() && o.canInitParallax() && o.init()
            }
            var t, n, o;
            return t = e, n = [{
                key: "css",
                value: function(e, t) {
                    return "string" == typeof t ? a.window.getComputedStyle(e).getPropertyValue(t) : (t.transform && g && (t[g] = t.transform), Object.keys(t).forEach((function(n) {
                        e.style[n] = t[n]
                    })), e)
                }
            }, {
                key: "extend",
                value: function(e) {
                    for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
                    return e = e || {}, Object.keys(n).forEach((function(t) {
                        n[t] && Object.keys(n[t]).forEach((function(o) {
                            e[o] = n[t][o]
                        }))
                    })), e
                }
            }, {
                key: "getWindowData",
                value: function() {
                    return {
                        width: a.window.innerWidth || document.documentElement.clientWidth,
                        height: p,
                        y: document.documentElement.scrollTop
                    }
                }
            }, {
                key: "initImg",
                value: function() {
                    var e = this,
                        t = e.options.imgElement;
                    return t && "string" == typeof t && (t = e.$item.querySelector(t)), t instanceof Element || (e.options.imgSrc ? (t = new Image).src = e.options.imgSrc : t = null), t && (e.options.keepImg ? e.image.$item = t.cloneNode(!0) : (e.image.$item = t, e.image.$itemParent = t.parentNode), e.image.useImgTag = !0), !(!e.image.$item && (null === e.image.src && (e.image.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", e.image.bgImage = e.css(e.$item, "background-image")), !e.image.bgImage || "none" === e.image.bgImage))
                }
            }, {
                key: "canInitParallax",
                value: function() {
                    return g && !this.options.disableParallax()
                }
            }, {
                key: "init",
                value: function() {
                    var e = this,
                        t = {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            overflow: "hidden"
                        },
                        n = {
                            pointerEvents: "none",
                            transformStyle: "preserve-3d",
                            backfaceVisibility: "hidden",
                            willChange: "transform,opacity"
                        };
                    if (!e.options.keepImg) {
                        var o = e.$item.getAttribute("style");
                        if (o && e.$item.setAttribute("data-jarallax-original-styles", o), e.image.useImgTag) {
                            var i = e.image.$item.getAttribute("style");
                            i && e.image.$item.setAttribute("data-jarallax-original-styles", i)
                        }
                    }
                    if ("static" === e.css(e.$item, "position") && e.css(e.$item, {
                            position: "relative"
                        }), "auto" === e.css(e.$item, "z-index") && e.css(e.$item, {
                            zIndex: 0
                        }), e.image.$container = document.createElement("div"), e.css(e.image.$container, t), e.css(e.image.$container, {
                            "z-index": e.options.zIndex
                        }), m && e.css(e.image.$container, {
                            opacity: .9999
                        }), e.image.$container.setAttribute("id", "jarallax-container-".concat(e.instanceID)), e.$item.appendChild(e.image.$container), e.image.useImgTag ? n = e.extend({
                            "object-fit": e.options.imgSize,
                            "object-position": e.options.imgPosition,
                            "font-family": "object-fit: ".concat(e.options.imgSize, "; object-position: ").concat(e.options.imgPosition, ";"),
                            "max-width": "none"
                        }, t, n) : (e.image.$item = document.createElement("div"), e.image.src && (n = e.extend({
                            "background-position": e.options.imgPosition,
                            "background-size": e.options.imgSize,
                            "background-repeat": e.options.imgRepeat,
                            "background-image": e.image.bgImage || 'url("'.concat(e.image.src, '")')
                        }, t, n))), "opacity" !== e.options.type && "scale" !== e.options.type && "scale-opacity" !== e.options.type && 1 !== e.options.speed || (e.image.position = "absolute"), "fixed" === e.image.position) {
                        var r = function(e) {
                            for (var t = []; null !== e.parentElement;) 1 === (e = e.parentElement).nodeType && t.push(e);
                            return t
                        }(e.$item).filter((function(e) {
                            var t = a.window.getComputedStyle(e),
                                n = t["-webkit-transform"] || t["-moz-transform"] || t.transform;
                            return n && "none" !== n || /(auto|scroll)/.test(t.overflow + t["overflow-y"] + t["overflow-x"])
                        }));
                        e.image.position = r.length ? "absolute" : "fixed"
                    }
                    n.position = e.image.position, e.css(e.image.$item, n), e.image.$container.appendChild(e.image.$item), e.onResize(), e.onScroll(!0), e.options.onInit && e.options.onInit.call(e), "none" !== e.css(e.$item, "background-image") && e.css(e.$item, {
                        "background-image": "none"
                    }), e.addToParallaxList()
                }
            }, {
                key: "addToParallaxList",
                value: function() {
                    b.push({
                        instance: this
                    }), 1 === b.length && a.window.requestAnimationFrame(h)
                }
            }, {
                key: "removeFromParallaxList",
                value: function() {
                    var e = this;
                    b.forEach((function(t, n) {
                        t.instance.instanceID === e.instanceID && b.splice(n, 1)
                    }))
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = this;
                    e.removeFromParallaxList();
                    var t = e.$item.getAttribute("data-jarallax-original-styles");
                    if (e.$item.removeAttribute("data-jarallax-original-styles"), t ? e.$item.setAttribute("style", t) : e.$item.removeAttribute("style"), e.image.useImgTag) {
                        var n = e.image.$item.getAttribute("data-jarallax-original-styles");
                        e.image.$item.removeAttribute("data-jarallax-original-styles"), n ? e.image.$item.setAttribute("style", t) : e.image.$item.removeAttribute("style"), e.image.$itemParent && e.image.$itemParent.appendChild(e.image.$item)
                    }
                    e.$clipStyles && e.$clipStyles.parentNode.removeChild(e.$clipStyles), e.image.$container && e.image.$container.parentNode.removeChild(e.image.$container), e.options.onDestroy && e.options.onDestroy.call(e), delete e.$item.jarallax
                }
            }, {
                key: "clipContainer",
                value: function() {
                    if ("fixed" === this.image.position) {
                        var e = this,
                            t = e.image.$container.getBoundingClientRect(),
                            n = t.width,
                            o = t.height;
                        e.$clipStyles || (e.$clipStyles = document.createElement("style"), e.$clipStyles.setAttribute("type", "text/css"), e.$clipStyles.setAttribute("id", "jarallax-clip-".concat(e.instanceID)), (document.head || document.getElementsByTagName("head")[0]).appendChild(e.$clipStyles));
                        var i = "#jarallax-container-".concat(e.instanceID, " {\n            clip: rect(0 ").concat(n, "px ").concat(o, "px 0);\n            clip: rect(0, ").concat(n, "px, ").concat(o, "px, 0);\n            -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);\n        }");
                        e.$clipStyles.styleSheet ? e.$clipStyles.styleSheet.cssText = i : e.$clipStyles.innerHTML = i
                    }
                }
            }, {
                key: "coverImage",
                value: function() {
                    var e = this,
                        t = e.image.$container.getBoundingClientRect(),
                        n = t.height,
                        o = e.options.speed,
                        i = "scroll" === e.options.type || "scroll-opacity" === e.options.type,
                        a = 0,
                        r = n,
                        l = 0;
                    return i && (0 > o ? (a = o * Math.max(n, p), p < n && (a -= o * (n - p))) : a = o * (n + p), 1 < o ? r = Math.abs(a - p) : 0 > o ? r = a / o + Math.abs(a) : r += (p - n) * (1 - o), a /= 2), e.parallaxScrollDistance = a, l = i ? (p - r) / 2 : (n - r) / 2, e.css(e.image.$item, {
                        height: "".concat(r, "px"),
                        marginTop: "".concat(l, "px"),
                        left: "fixed" === e.image.position ? "".concat(t.left, "px") : "0",
                        width: "".concat(t.width, "px")
                    }), e.options.onCoverImage && e.options.onCoverImage.call(e), {
                        image: {
                            height: r,
                            marginTop: l
                        },
                        container: t
                    }
                }
            }, {
                key: "isVisible",
                value: function() {
                    return this.isElementInViewport || !1
                }
            }, {
                key: "onScroll",
                value: function(e) {
                    var t = this,
                        n = t.$item.getBoundingClientRect(),
                        o = n.top,
                        i = n.height,
                        r = {},
                        l = n;
                    if (t.options.elementInViewport && (l = t.options.elementInViewport.getBoundingClientRect()), t.isElementInViewport = 0 <= l.bottom && 0 <= l.right && l.top <= p && l.left <= a.window.innerWidth, e || t.isElementInViewport) {
                        var s = Math.max(0, o),
                            c = Math.max(0, i + o),
                            u = Math.max(0, -o),
                            d = Math.max(0, o + i - p),
                            m = Math.max(0, i - (o + i - p)),
                            f = Math.max(0, -o + p - i),
                            g = 1 - (p - o) / (p + i) * 2,
                            y = 1;
                        if (i < p ? y = 1 - (u || d) / i : c <= p ? y = c / p : m <= p && (y = m / p), "opacity" !== t.options.type && "scale-opacity" !== t.options.type && "scroll-opacity" !== t.options.type || (r.transform = "translate3d(0,0,0)", r.opacity = y), "scale" === t.options.type || "scale-opacity" === t.options.type) {
                            var b = 1;
                            0 > t.options.speed ? b -= t.options.speed * y : b += t.options.speed * (1 - y), r.transform = "scale(".concat(b, ") translate3d(0,0,0)")
                        }
                        if ("scroll" === t.options.type || "scroll-opacity" === t.options.type) {
                            var h = t.parallaxScrollDistance * g;
                            "absolute" === t.image.position && (h -= o), r.transform = "translate3d(0,".concat(h, "px,0)")
                        }
                        t.css(t.image.$item, r), t.options.onScroll && t.options.onScroll.call(t, {
                            section: n,
                            beforeTop: s,
                            beforeTopEnd: c,
                            afterTop: u,
                            beforeBottom: d,
                            beforeBottomEnd: m,
                            afterBottom: f,
                            visiblePercent: y,
                            fromViewportCenter: g
                        })
                    }
                }
            }, {
                key: "onResize",
                value: function() {
                    this.coverImage(), this.clipContainer()
                }
            }], n && c(t.prototype, n), o && c(t, o), e
        }(),
        w = function(e, t) {
            ("object" === ("undefined" == typeof HTMLElement ? "undefined" : s(HTMLElement)) ? e instanceof HTMLElement : e && "object" === s(e) && null !== e && 1 === e.nodeType && "string" == typeof e.nodeName) && (e = [e]);
            for (var n, o = e.length, i = 0, a = arguments.length, r = new Array(a > 2 ? a - 2 : 0), l = 2; l < a; l++) r[l - 2] = arguments[l];
            for (; i < o; i += 1)
                if ("object" === s(t) || void 0 === t ? e[i].jarallax || (e[i].jarallax = new x(e[i], t)) : e[i].jarallax && (n = e[i].jarallax[t].apply(e[i].jarallax, r)), void 0 !== n) return n;
            return e
        };
    w.constructor = x, t.default = w
}]);