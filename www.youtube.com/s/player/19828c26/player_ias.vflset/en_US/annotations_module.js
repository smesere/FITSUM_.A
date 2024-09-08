(function(g) {
    var window = this;
    'use strict';
    var D2 = function(a) {
            a.publish("cardstatechange", a.El() && a.Tp() ? 1 : 0)
        },
        E2 = function(a, b) {
            var c = g.Pa(b),
                d = c ? b : arguments;
            for (c = c ? 0 : 1; c < d.length; c++) {
                if (a == null) return;
                a = a[d[c]]
            }
            return a
        },
        cdb = function(a) {
            var b = g.vm(a);
            a = g.ym(a);
            return new g.dm(b.x, b.y, a.width, a.height)
        },
        ddb = function(a, b, c) {
            var d = d === void 0 ? {} : d;
            var e;
            return e = g.vs(a, b, function() {
                g.ws(e);
                c.apply(a, arguments)
            }, d)
        },
        H2 = function(a) {
            a = g.Ua(a);
            delete F2[a];
            g.Hc(F2) && G2 && G2.stop()
        },
        fdb = function() {
            G2 || (G2 = new g.Yo(function() {
                edb()
            }, 20));
            var a = G2;
            a.isActive() || a.start()
        },
        edb = function() {
            var a = g.Ya();
            g.xc(F2, function(b) {
                gdb(b, a)
            });
            g.Hc(F2) || fdb()
        },
        I2 = function(a, b, c, d) {
            g.kp.call(this);
            if (!Array.isArray(a) || !Array.isArray(b)) throw Error("Start and end parameters must be arrays");
            if (a.length != b.length) throw Error("Start and end points must be the same length");
            this.B = a;
            this.N = b;
            this.duration = c;
            this.G = d;
            this.coords = [];
            this.progress = this.K = 0;
            this.D = null
        },
        gdb = function(a, b) {
            b < a.startTime && (a.endTime = b + a.endTime - a.startTime, a.startTime = b);
            a.progress = (b - a.startTime) / (a.endTime - a.startTime);
            a.progress > 1 && (a.progress = 1);
            a.K = 1E3 / (b - a.D);
            a.D = b;
            hdb(a, a.progress);
            a.progress == 1 ? (a.j = 0, H2(a), a.onFinish(), a.Hs()) : a.isPlaying() && a.nO()
        },
        hdb = function(a, b) {
            typeof a.G === "function" && (b = a.G(b));
            a.coords = Array(a.B.length);
            for (var c = 0; c < a.B.length; c++) a.coords[c] = (a.N[c] - a.B[c]) * b + a.B[c]
        },
        idb = function(a, b) {
            g.ub.call(this, a);
            this.coords = b.coords;
            this.x = b.coords[0];
            this.y = b.coords[1];
            this.z = b.coords[2];
            this.duration = b.duration;
            this.progress = b.progress;
            this.fps = b.K;
            this.state = b.j
        },
        J2 = function(a, b, c, d, e) {
            I2.call(this, b, c, d, e);
            this.element = a
        },
        jdb = function(a, b, c, d, e) {
            if (b.length != 2 || c.length != 2) throw Error("Start and end points must be 2D");
            J2.call(this, a, b, c, d, e)
        },
        kdb = function(a) {
            return Math.pow(a, 3)
        },
        ldb = function(a) {
            return 3 * a * a - 2 * a * a * a
        },
        mdb = function(a) {
            g.O.call(this);
            this.B = a || window;
            this.j = []
        },
        K2 = function(a) {
            return a.baseUrl || null
        },
        L2 = function(a, b) {
            return g.hn(g.zl(a, b), function(c) {
                return !!c
            })
        },
        ndb = function(a, b, c) {
            function d(pa) {
                var ba = pa.hovercardButton;
                if (!ba) return null;
                ba = ba.subscribeButtonRenderer;
                if (!ba) return null;
                var R = f(ba.unsubscribedButtonText),
                    V = f(ba.subscribedButtonText);
                if (ba.subscribed) {
                    var v = f(ba.subscriberCountWithUnsubscribeText);
                    var U = f(ba.subscriberCountText)
                } else v = f(ba.subscriberCountText), U = f(ba.subscriberCountWithSubscribeText);
                var cb = null;
                if (pa.signinEndpoint) {
                    cb = E2(pa, "signinEndpoint", "webNavigationEndpointData", "url");
                    if (!cb) {
                        var yb, Va;
                        cb = (Va = g.Q((yb = ba.signInEndpoint) == null ? void 0 : yb.commandMetadata, g.y1)) == null ? void 0 :
                            Va.url
                    }
                    if (!cb) return null
                }
                return R && (V || cb) ? {
                    subscribed: ba.subscribed,
                    subscribeText: R,
                    subscribeCount: v,
                    unsubscribeText: V,
                    unsubscribeCount: U,
                    enabled: ba.enabled,
                    signinUrl: cb,
                    classic: pa.useClassicSubscribeButton
                } : null
            }

            function e(pa) {
                if (pa) {
                    var ba = [],
                        R = pa.videoId;
                    R && ba.push("v=" + R);
                    (R = pa.playlistId) && ba.push("list=" + R);
                    (pa = pa.startTimeSeconds) && ba.push("t=" + pa);
                    return "/watch?" + ba.join("&")
                }
            }

            function f(pa) {
                if (!pa) return null;
                var ba = pa.simpleText;
                return ba ? ba : pa.runs ? g.zl(pa.runs, function(R) {
                    return R.text
                }).join("") : null
            }
            b = b.endscreenElementRenderer;
            if (!b) return null;
            var h = b.style,
                l = b.endpoint || {},
                m = null,
                n = null,
                p = !1,
                q = null,
                r = null,
                t = null,
                u = null,
                y = !1,
                B = null,
                C = null,
                G = null,
                H = null,
                N = null,
                M = null;
            if (h === "VIDEO") g.Q(l, g.Kx) ? m = g.Q(l, g.Kx).url : (M = g.Q(l, g.mQ), m = e(M)), n = !1, q = a, b.thumbnailOverlays ? (p = b.thumbnailOverlays[0].thumbnailOverlayTimeStatusRenderer, r = f(p.text), p = p.style === "LIVE") : r = f(b.videoDuration);
            else if (h === "PLAYLIST") g.Q(l, g.Kx) ? m = g.Q(l, g.Kx).url : (M = g.Q(l, g.mQ), m = e(M)), n = !1, q = a, t = f(b.playlistLength);
            else if (h ===
                "CHANNEL") {
                if (y = E2(l, "browseEndpoint", "browseId")) u = y, m = "/channel/" + u;
                n = !1;
                q = "new";
                (y = !!b.isSubscribe) ? B = d(b): C = f(b.subscribersText)
            } else h === "WEBSITE" ? ((G = E2(l, "urlEndpoint", "url")) && (m = G), n = !0, q = "new", G = b.icon.thumbnails[0].url) : h === "CREATOR_MERCHANDISE" && (b.productPrice && (H = f(b.productPrice)), b.additionalFeesText && (N = f(b.additionalFeesText)), (n = E2(l, "urlEndpoint", "url")) && (m = n), n = !0, q = "new");
            a = E2(b, "title", "accessibility", "accessibilityData", "label");
            var X = b.endpoint ? b.endpoint.clickTrackingParams :
                null,
                W = "";
            if (b.metadata) {
                var fa = f(b.metadata);
                fa && (W = fa)
            }
            return {
                id: "element-" + c,
                type: h,
                title: f(b.title),
                metadata: W,
                callToAction: f(b.callToAction),
                kY: b.image,
                iconUrl: G,
                left: Number(b.left),
                width: Number(b.width),
                top: Number(b.top),
                aspectRatio: Number(b.aspectRatio),
                startMs: Math.floor(Number(b.startMs)),
                endMs: Math.floor(Number(b.endMs)),
                videoDuration: r,
                cG: p,
                playlistLength: t,
                channelId: u,
                subscribeButton: B,
                subscribersText: C,
                isSubscribe: y,
                targetUrl: m || null,
                F$: n,
                sessionData: X ? {
                    itct: X
                } : null,
                dfa: q,
                tE: a ? a : null,
                isPlaceholder: b.isPlaceholder,
                impressionUrls: L2(b.impressionUrls || [], K2),
                v$: L2(b.hovercardShowUrls || [], K2),
                clickUrls: L2(l.loggingUrls || [], K2),
                visualElement: g.vw(b.trackingParams),
                productPrice: H,
                additionalFeesText: N,
                watchEndpoint: M || null
            }
        },
        odb = function(a, b) {
            var c = {
                startMs: Math.floor(Number(a.startMs)),
                impressionUrls: L2(a.impressionUrls || [], K2),
                elements: L2(a.elements || [], function(d, e) {
                    return ndb(b, d, e)
                })
            };
            a.trackingParams && (c.visualElement = g.vw(a.trackingParams));
            return c
        },
        pdb = function(a) {
            g.WX.call(this, a);
            this.C = this.endscreen = null;
            this.j = {};
            this.G = {};
            this.D = this.B = null;
            this.N = [];
            this.Y = !0;
            this.K = 0;
            a = a.U();
            this.Z = g.NO(a) || g.PO(a);
            this.events = new g.AE(this);
            g.P(this, this.events);
            this.events.T(this.player, g.bD("creatorendscreen"), this.onCueRangeEnter);
            this.events.T(this.player, g.cD("creatorendscreen"), this.onCueRangeExit);
            this.events.T(this.player, "resize", this.jc);
            this.events.T(window, "focus", this.kda);
            this.load();
            var b = g.ne("STYLE");
            (g.ee("HEAD")[0] || document.body).appendChild(b);
            this.addOnDisposeCallback(function() {
                g.se(b)
            });
            b.sheet && (b.sheet.insertRule(".ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAIVBMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///91E4wTAAAACXRSTlMArBbpVOtYrReN+x2FAAAAAWJLR0QKaND0VgAAACFJREFUCNdjYCAWzIQAFBaZ6hgVYLKcJnBWGEyWvYGASwCXtBf7m4i3CQAAAABJRU5ErkJggg==) no-repeat center;background-size:18px;width:18px;height:18px}", 0), b.sheet.insertRule(".ytp-ce-size-853 .ytp-ce-playlist-icon, .ytp-ce-size-1280 .ytp-ce-playlist-icon, .ytp-ce-size-1920 .ytp-ce-playlist-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEVMaXGzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7P///9RfzIKAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAyBs1FjAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}",
                0))
        },
        qdb = function(a) {
            return a.player.getVideoData().Jf ? "current" : a.Z ? "new" : "current"
        },
        M2 = function(a) {
            return a.player.U().playerStyle === "creator-endscreen-editor"
        },
        rdb = function(a) {
            var b = a.player.getVideoData(),
                c = b.videoId;
            a.C && a.C.abort();
            c = {
                method: "POST",
                onFinish: function(e) {
                    var f = a.C = null;
                    e.status === 200 && (e = e.responseText, e.substring(0, 3) === ")]}" && (e = e.substring(3), f = JSON.parse(e), f = odb(f, qdb(a))));
                    N2(a, f)
                },
                urlParams: {
                    v: c
                },
                withCredentials: !0
            };
            a.Z && (c.urlParams.ptype = "embedded");
            var d = b.Dw;
            d && (c.postParams = {
                ad_tracking: d
            });
            if (b = g.$La(b))
                if (b = g.wd(b), b = g.sd(b)) a.C = g.xr(b, c)
        },
        N2 = function(a, b, c) {
            c = c === void 0 ? !0 : c;
            a.player.rf("creatorendscreen");
            a.B && (a.B.dispose(), a.B = null, a.D.dispose(), a.D = null);
            for (var d = g.w(Object.values(a.j)), e = d.next(); !e.done; e = d.next()) e.value.dispose();
            a.j = {};
            a.G = {};
            a.N.length > 0 && (a.N.forEach(function(l) {
                l.dispose()
            }), a.N.length = 0);
            a.K = 0;
            if ((a.endscreen = b) && b.elements) {
                c && sdb(a);
                c = [];
                d = new g.$C(b.startMs, 0x7ffffffffffff, {
                    id: "ytp-ce-in-endscreen",
                    namespace: "creatorendscreen"
                });
                c.push(d);
                a.player.U().B || (a.B = new g.T({
                    I: "div",
                    S: "ytp-ce-shadow"
                }), g.GR(a.player, a.B.element, 4), a.D = new g.by(a.B, 200));
                for (d = 0; d < b.elements.length; ++d) {
                    e = b.elements[d];
                    var f = tdb(a, e);
                    if (f) {
                        a.j[e.id] = f;
                        a.G[e.id] = e;
                        g.GR(a.player, f.element, 4);
                        var h = new g.$C(e.startMs, e.endMs, {
                            id: "ytp-ce-element-" + e.id,
                            namespace: "creatorendscreen"
                        });
                        c.push(h);
                        udb(a, f, e)
                    } else g.Hw(new g.Ts("buildEndscreenElement null",
                        e))
                }
                a.player.kf(c);
                a.jc()
            }
        },
        sdb = function(a) {
            var b = g.xw(),
                c = g.yw();
            c && b && a.endscreen.visualElement && g.Xq(g.Tw)(void 0, c, b, a.endscreen.visualElement)
        },
        tdb = function(a, b) {
            var c = null;
            switch (b.type) {
                case "VIDEO":
                    a = {
                        I: "div",
                        La: ["ytp-ce-element", "ytp-ce-video"],
                        X: {
                            tabindex: "0",
                            "aria-label": b.tE || "",
                            "aria-hidden": "true"
                        },
                        V: [{
                            I: "div",
                            S: "ytp-ce-element-shadow"
                        }, {
                            I: "div",
                            S: "ytp-ce-covering-image",
                            X: O2(b)
                        }, {
                            I: "div",
                            S: "ytp-ce-covering-shadow-top"
                        }, {
                            I: "a",
                            S: "ytp-ce-covering-overlay",
                            X: {
                                href: P2(a, b.targetUrl),
                                tabindex: "-1"
                            },
                            V: [{
                                I: "div",
                                La: ["ytp-ce-video-title", "ytp-webkit-ellipsis"],
                                X: {
                                    dir: g.op(b.title || "")
                                },
                                va: b.title
                            }, {
                                I: "div",
                                S: b.cG ? "ytp-ce-live-video-duration" : "ytp-ce-video-duration",
                                va: b.videoDuration || void 0
                            }]
                        }]
                    };
                    c = new g.T(a);
                    break;
                case "PLAYLIST":
                    a = {
                        I: "div",
                        La: ["ytp-ce-element", "ytp-ce-playlist"],
                        X: {
                            tabindex: "0",
                            "aria-label": b.tE || "",
                            "aria-hidden": "true"
                        },
                        V: [{
                            I: "div",
                            S: "ytp-ce-element-shadow"
                        }, {
                            I: "div",
                            S: "ytp-ce-covering-image",
                            X: O2(b)
                        }, {
                            I: "div",
                            S: "ytp-ce-covering-shadow-top"
                        }, {
                            I: "a",
                            S: "ytp-ce-covering-overlay",
                            X: {
                                href: P2(a, b.targetUrl),
                                tabindex: "-1"
                            },
                            V: [{
                                I: "div",
                                La: ["ytp-ce-playlist-title", "ytp-webkit-ellipsis"],
                                X: {
                                    dir: g.op(b.title || "")
                                },
                                va: b.title
                            }, {
                                I: "div",
                                S: "ytp-ce-playlist-count",
                                V: [{
                                    I: "div",
                                    S: "ytp-ce-playlist-icon"
                                }, {
                                    I: "div",
                                    S: "ytp-ce-playlist-count-text",
                                    va: b.playlistLength || void 0
                                }]
                            }]
                        }]
                    };
                    c = new g.T(a);
                    break;
                case "CHANNEL":
                    c = {
                        I: "div",
                        La: ["ytp-ce-element", "ytp-ce-channel", b.isSubscribe ? "ytp-ce-channel-this" : "ytp-ce-channel-that"],
                        X: {
                            tabindex: "0",
                            "aria-label": b.tE || "",
                            "aria-hidden": "true"
                        },
                        V: [{
                            I: "div",
                            S: "ytp-ce-element-shadow"
                        }, {
                            I: "div",
                            S: "ytp-ce-expanding-overlay",
                            V: [{
                                I: "div",
                                S: "ytp-ce-expanding-overlay-hider"
                            }, {
                                I: "div",
                                S: "ytp-ce-expanding-overlay-background"
                            }, {
                                I: "div",
                                S: "ytp-ce-expanding-overlay-content",
                                V: [{
                                    I: "div",
                                    S: "ytp-ce-expanding-overlay-body",
                                    V: [{
                                        I: "div",
                                        S: "ytp-ce-expanding-overlay-body-padding",
                                        V: [{
                                            I: "a",
                                            La: ["ytp-ce-channel-title", "ytp-ce-link"],
                                            X: {
                                                href: P2(a, b.targetUrl),
                                                target: "_blank",
                                                tabindex: "-1",
                                                dir: g.op(b.title || "")
                                            },
                                            va: b.title
                                        }, b.subscribeButton ? {
                                            I: "div",
                                            S: "ytp-ce-subscribe-container",
                                            V: [{
                                                I: "div",
                                                S: "ytp-ce-channel-subscribe"
                                            }]
                                        } : "", b.subscribersText ? {
                                            I: "div",
                                            S: "ytp-ce-channel-subscribers-text",
                                            va: b.subscribersText
                                        } : "", b.metadata ? {
                                            I: "div",
                                            La: ["ytp-ce-channel-metadata", "yt-ui-ellipsis",
                                                "yt-ui-ellipsis-3"
                                            ],
                                            va: b.metadata
                                        } : ""]
                                    }]
                                }]
                            }]
                        }, {
                            I: "div",
                            S: "ytp-ce-expanding-image",
                            X: O2(b)
                        }]
                    };
                    c = new g.T(c);
                    var d = g.fe(document, "div", "ytp-ce-channel-subscribe", c.element)[0];
                    if (b.subscribeButton && b.channelId) {
                        g.fp(d, "ytp-ce-subscribe-button");
                        if (a.player.U().B) {
                            var e = null;
                            var f = b.sessionData.itct
                        } else e = "endscreen", f = null;
                        e = new g.CY(b.subscribeButton.subscribeText, b.subscribeButton.subscribeCount, b.subscribeButton.unsubscribeText, b.subscribeButton.unsubscribeCount, !!b.subscribeButton.enabled, !!b.subscribeButton.classic,
                            b.channelId, !!b.subscribeButton.subscribed, e, f, a.player, !1);
                        d.appendChild(e.element);
                        a.N.push(e)
                    }
                    break;
                case "WEBSITE":
                    a = {
                        I: "div",
                        La: ["ytp-ce-element", "ytp-ce-website"],
                        X: {
                            tabindex: "0",
                            "aria-label": b.tE || "",
                            "aria-hidden": "true"
                        },
                        V: [{
                            I: "div",
                            S: "ytp-ce-element-shadow"
                        }, {
                            I: "div",
                            S: "ytp-ce-expanding-overlay",
                            V: [{
                                I: "div",
                                S: "ytp-ce-expanding-overlay-hider"
                            }, {
                                I: "div",
                                S: "ytp-ce-expanding-overlay-background"
                            }, {
                                I: "div",
                                S: "ytp-ce-expanding-overlay-content",
                                V: [{
                                    I: "div",
                                    S: "ytp-ce-expanding-overlay-body",
                                    V: [{
                                        I: "div",
                                        S: "ytp-ce-expanding-overlay-body-padding",
                                        V: [{
                                            I: "div",
                                            S: "ytp-ce-website-title",
                                            X: {
                                                dir: g.op(b.title || "")
                                            },
                                            va: b.title
                                        }, {
                                            I: "div",
                                            S: "ytp-ce-website-metadata",
                                            va: b.metadata
                                        }, {
                                            I: "a",
                                            La: ["ytp-ce-website-goto", "ytp-ce-link"],
                                            X: {
                                                href: P2(a, b.targetUrl),
                                                target: "_blank",
                                                tabindex: "-1"
                                            },
                                            va: b.callToAction
                                        }]
                                    }]
                                }]
                            }]
                        }, {
                            I: "div",
                            S: "ytp-ce-expanding-image",
                            X: O2(b)
                        }, {
                            I: "div",
                            S: "ytp-ce-expanding-icon",
                            X: vdb(b.iconUrl)
                        }]
                    };
                    c = new g.T(a);
                    break;
                case "CREATOR_MERCHANDISE":
                    c = "", b.productPrice && (c = {
                        I: "div",
                        S: "ytp-ce-merchandise-price-container",
                        V: [{
                            I: "div",
                            S: "ytp-ce-merchandise-price",
                            va: b.productPrice
                        }]
                    }, b.additionalFeesText && c.V.push({
                        I: "div",
                        S: "ytp-ce-merchandise-additional-fees",
                        va: b.additionalFeesText
                    })), a = {
                        I: "div",
                        La: ["ytp-ce-element", "ytp-ce-merchandise"],
                        X: {
                            tabindex: "0",
                            "aria-label": b.tE || "",
                            "aria-hidden": "true"
                        },
                        V: [{
                            I: "div",
                            S: "ytp-ce-element-shadow"
                        }, {
                            I: "div",
                            S: "ytp-ce-expanding-overlay",
                            V: [{
                                I: "div",
                                S: "ytp-ce-expanding-overlay-hider"
                            }, {
                                I: "div",
                                S: "ytp-ce-expanding-overlay-background"
                            }, {
                                I: "div",
                                S: "ytp-ce-expanding-overlay-content",
                                V: [{
                                    I: "div",
                                    S: "ytp-ce-expanding-overlay-body",
                                    V: [{
                                        I: "div",
                                        S: "ytp-ce-expanding-overlay-body-padding",
                                        V: [{
                                            I: "div",
                                            S: "ytp-ce-merchandise-title",
                                            X: {
                                                dir: g.op(b.title || "")
                                            },
                                            va: b.title
                                        }, c, {
                                            I: "div",
                                            S: "ytp-ce-merchandise-metadata",
                                            va: b.metadata
                                        }, {
                                            I: "a",
                                            La: ["ytp-ce-merchandise-goto", "ytp-ce-link"],
                                            X: {
                                                href: P2(a, b.targetUrl),
                                                target: "_blank",
                                                tabindex: "-1"
                                            },
                                            va: b.callToAction
                                        }]
                                    }]
                                }]
                            }]
                        }, {
                            I: "div",
                            S: "ytp-ce-expanding-image",
                            X: O2(b)
                        }, {
                            I: "div",
                            S: "ytp-ce-merchandise-invideo-cta-container",
                            V: [{
                                I: "div",
                                S: "ytp-ce-merchandise-invideo-cta",
                                va: b.callToAction || void 0
                            }]
                        }]
                    }, c = new g.T(a)
            }
            b.isPlaceholder && g.fp(c.element, "ytp-ce-placeholder");
            return c
        },
        O2 = function(a) {
            if (a.kY) var b = a.kY.thumbnails;
            return vdb(b ? b[b.length - 1].url : null)
        },
        vdb = function(a) {
            return a ? {
                style: "background-image: url(" + a + ")"
            } : {}
        },
        udb = function(a, b, c) {
            function d(m) {
                m && (b.listen("blur", function() {
                    m.style.display != "none" && a.Y && m.focus()
                }), b.T(m, "focus", f), b.T(m, "blur", h))
            }

            function e(m) {
                a.K += m;
                a.K > 0 ? (g.fp(b.element, "ytp-ce-force-expand"), Q2(a, c.id, !0)) : (g.hp(b.element, "ytp-ce-force-expand"), g.hp(b.element, "ytp-ce-element-hover"), Q2(a, c.id, !1))
            }

            function f() {
                e(1)
            }

            function h() {
                e(-1)
            }
            b.listen("mouseenter", function() {
                wdb(a, b, c)
            });
            b.listen("mouseleave", function() {
                xdb(a, b, c)
            });
            a.player.U().B || b.listen("click", function() {
                g.fp(b.element, "ytp-ce-element-hover")
            });
            b.listen("click", function(m) {
                ydb(a, c, m)
            });
            b.listen("keypress", function(m) {
                ydb(a, c, m)
            });
            b.listen("focus", function() {
                wdb(a, b, c)
            });
            b.listen("blur", function() {
                xdb(a, b, c)
            });
            b.listen("touchstart", function() {
                wdb(a, b, c)
            });
            var l = g.ie("ytp-ce-expanding-overlay-hider", b.element);
            l && b.T(l, "touchstart", function(m) {
                m.stopPropagation();
                g.hp(b.element, "ytp-ce-element-hover");
                g.hp(b.element, "ytp-ce-force-expand")
            });
            b.listen("keydown", function(m) {
                a.Y = m.keyCode === 9 && !m.shiftKey
            });
            d(g.ie("ytp-sb-subscribe", b.element));
            d(g.ie("ytp-sb-unsubscribe", b.element));
            b.listen("focus", f);
            b.listen("blur", h)
        },
        ydb = function(a, b, c) {
            if (b.targetUrl && (!c || c.type !== "keypress" || c.keyCode === 13)) {
                for (var d = c.target; d && !g.ep(d, "ytp-ce-element");) {
                    g.ep(d, "subscribe-label") && zdb(a, b);
                    if (g.ep(d, "ytp-ce-channel-subscribe")) return;
                    d = d.parentElement || null
                }
                if (!d || g.ep(d, "ytp-ce-element-hover")) {
                    c.preventDefault();
                    c.stopPropagation();
                    if (d = a.j[b.id]) xdb(a, d, b), d.element.blur();
                    if (c.ctrlKey || c.metaKey || b.dfa === "new") zdb(a, b), a.player.sendVideoStatsEngageEvent(17, void 0), a.player.pauseVideo(), c = g.wd(P2(a, b.targetUrl)), c = g.sd(c), g.Ny(c, void 0, b.sessionData);
                    else {
                        var e = g.bP(a.player.U()) || a.player.getVideoData().Jf,
                            f = function() {
                                var h = P2(a, b.targetUrl),
                                    l = b.sessionData,
                                    m = b.watchEndpoint,
                                    n =
                                    g.cr(h);
                                e && n && (n.v || n.list) ? a.player.Ep(n.v, l, n.list, !1, void 0, m || void 0) : g.My(h, l)
                            };
                        zdb(a, b, function() {
                            a.player.sendVideoStatsEngageEvent(17, f)
                        })
                    }
                }
            }
        },
        P2 = function(a, b) {
            a = a.player.U();
            if (b) {
                if (b.startsWith("//")) return a.protocol + ":" + b;
                if (b.startsWith("/")) return g.jP(a) + b
            } else return "";
            return b
        },
        wdb = function(a, b, c) {
            g.ep(b.element, "ytp-ce-element-hover") || (c.type === "VIDEO" || c.type === "PLAYLIST" ? g.fp(b.element, "ytp-ce-element-hover") : a.player.U().B ? (new g.Yo(function() {
                g.fp(b.element, "ytp-ce-element-hover")
            }, 200)).start() : g.fp(b.element, "ytp-ce-element-hover"), R2(a, c.v$), Q2(a, c.id, !0))
        },
        xdb = function(a, b, c) {
            g.hp(b.element, "ytp-ce-element-hover");
            g.hp(b.element, "ytp-ce-force-expand");
            Q2(a, c.id, !1)
        },
        Q2 = function(a, b, c) {
            a.B && (c ? a.D.show() : a.D.hide());
            for (var d = g.w(Object.keys(a.j)), e = d.next(); !e.done; e = d.next()) e = e.value, e !== b && g.jp(a.j[e].element, "ytp-ce-element-shadow-show", c)
        },
        R2 = function(a, b, c) {
            function d() {
                f || (e++, e === b.length && (h.stop(), c && c()))
            }
            if (!b || b.length === 0 || M2(a)) c && c();
            else {
                b = Adb(a, b);
                var e = 0,
                    f = !1,
                    h = new g.Yo(function() {
                        f = !0;
                        c && c()
                    }, 1E3, a);
                h.start();
                for (a = 0; a < b.length; a++) g.Qu(b[a], d)
            }
        },
        zdb = function(a, b, c) {
            R2(a, b.clickUrls, c);
            (a = g.yw()) && b.F$ && g.cx(a, b.visualElement)
        },
        Adb = function(a, b) {
            var c = a.player.getVideoData().clientPlaybackNonce;
            a = a.player.getCurrentTime().toFixed(2);
            c = {
                CPN: c,
                AD_CPN: c,
                MT: a
            };
            a = [];
            for (var d = 0; d < b.length; d++) a.push(Bdb(b[d], c));
            return a
        },
        Bdb = function(a, b) {
            return a.replace(/%5B[a-zA-Z_:]+%5D|\[[a-zA-Z_:]+\]/g, function(c) {
                var d = unescape(c);
                d = d.substring(1, d.length - 1);
                return b[d] ? escape(b[d]) : c
            })
        },
        Cdb = function(a) {
            return typeof a === "string" ? a : ""
        },
        S2 = function(a, b, c) {
            for (var d in b)
                if (b[d] === a) return a;
            return c
        },
        Ddb = function(a, b, c, d) {
            this.value = a;
            this.target = b;
            this.showLinkIcon = c;
            this.j = d
        },
        T2 = function(a) {
            return a.value ? a.value : null
        },
        U2 = function(a) {
            if (!a) return null;
            var b = g.wd(Cdb(a.value));
            b = g.sd(b);
            if (!b) return null;
            var c = S2(a.target, Edb, "current");
            if (c == null) a = null;
            else {
                var d = a.show_link_icon;
                a = new Ddb(b, c, d === "true" || d === "false" ? d === "true" : !0, a.pause_on_navigation != null ? a.pause_on_navigation : !0)
            }
            return a
        },
        Fdb = function(a, b, c) {
            this.type = a;
            this.trigger = b;
            this.url = c
        },
        Idb = function(a) {
            if (!a) return null;
            var b = S2(a.type, Gdb),
                c = S2(a.trigger, Hdb);
            a = a.url;
            a = Array.isArray(a) && a.length ? a[0] : a;
            a = U2(a ? a : null);
            return b ? new Fdb(b, c, a) : null
        },
        Jdb = function(a, b, c, d, e) {
            this.id = a;
            this.type = b;
            this.style = c;
            this.data = e;
            this.action = d || []
        },
        Kdb = function(a, b) {
            return g.Sb(a.action, b)
        },
        Ldb = function(a, b) {
            this.context = a;
            this.j = b
        },
        Mdb = function(a) {
            return a.customMessage ? V2("div", "iv-card-message", a.customMessage) : ""
        },
        W2 = function(a, b) {
            a = "background-image: url(" + a + ");";
            var c = [];
            b && c.push(b);
            return {
                I: "div",
                S: "iv-card-image",
                X: {
                    style: a
                },
                V: c
            }
        },
        Ndb = function(a) {
            if (!a.metaInfo || a.metaInfo.length === 0) return "";
            var b = [];
            a = g.w(a.metaInfo);
            for (var c = a.next(); !c.done; c = a.next()) b.push(V2("li", "", c.value));
            return {
                I: "ul",
                S: "iv-card-meta-info",
                V: b
            }
        },
        V2 = function(a, b, c) {
            b ? typeof b === "string" ? b = {
                "class": b
            } : Array.isArray(b) && (b = {
                "class": b.join(" ")
            }) : b = {};
            b.dir = g.op(c);
            return {
                I: a,
                X: b,
                va: c
            }
        },
        Odb = function(a) {
            if (!a.customMessage) return "";
            var b = ["iv-card-action", "iv-card-primary-link"],
                c = {};
            a.GE && (b.push("iv-card-action-icon"), c.style = "background-image: url(" + a.GE + ");");
            c.dir = g.op(a.customMessage);
            var d = [{
                I: "span",
                va: a.customMessage
            }];
            a.showLinkIcon && (d.push("\u00a0"), d.push({
                I: "span",
                S: "iv-card-link-icon"
            }));
            return {
                I: "div",
                La: b,
                X: c,
                V: d
            }
        },
        X2 = function(a, b, c, d) {
            if (d) {
                b = g.w(b);
                for (var e = b.next(); !e.done; e = b.next()) a.j(e.value, d, c.id, c.sessionData, c.vj.click, 5)
            }
        },
        Pdb = function(a, b) {
            this.merchant = a;
            this.price = b
        },
        Qdb = function(a) {
            var b;
            (b = a) && !(b = a.length > 1 ? a.charAt(0) === "/" && a.charAt(1) !== "/" : a === "/") && (b = a.replace(/^(https?:)?\/\//, "").split("/", 1), b = !b || b.length < 1 || !b[0] ? [] : b[0].toLowerCase().split(".").reverse(), b = b[0] === "com" && b[1] === "youtube" || b[0] === "be" && b[1] === "youtu");
            return b ? a.indexOf("/redirect?") === -1 : !1
        },
        Rdb = function(a, b) {
            return b ? b : Qdb(a) ? "current" : "new"
        },
        Y2 = function(a, b) {
            g.O.call(this);
            var c = this;
            this.element = a;
            this.context = b;
            this.qb = !1;
            this.Va = new Map;
            this.Xa = new Map;
            this.context.J.addEventListener(g.bD("annotations_module"), function(d) {
                (d = c.Va.get(d)) && d.apply(c)
            });
            this.context.J.addEventListener(g.cD("annotations_module"), function(d) {
                (d = c.Xa.get(d)) && d.apply(c)
            })
        },
        Z2 = function(a, b, c, d, e, f, h) {
            a.context.j.listen(b, "click", function(l) {
                a.oO(c, d, e, f || [], h || 0, l)
            });
            a.context.j.listen(b, "touchstart", function() {
                a.qb = !1
            });
            a.context.j.listen(b, "touchmove", function() {
                a.qb = !0
            })
        },
        Sdb = function(a) {
            var b;
            return ((b = g.Q(a, g.Kx)) == null ? 0 : b.url) ? g.Q(a, g.Kx).url : (a = g.Q(a, g.mQ)) && a.videoId ? (b = "/watch?v=" + a.videoId, a.playlistId && (b += "&list=" + a.playlistId), a.index && (b += "&index=" + a.index), a.startTimeSeconds && (b += "&t=" + a.startTimeSeconds), b) : null
        },
        $2 = function(a, b, c) {
            return {
                IZ: (a.impressionLoggingUrlsV2s || []).map(function(d) {
                    return d.baseUrl || ""
                }),
                click: (c.loggingUrls || []).map(function(d) {
                    return d.baseUrl || ""
                }),
                close: (b.dismissLoggingUrlsV2s || []).map(function(d) {
                    return d.baseUrl || ""
                }),
                n3: (b.impressionLoggingUrlsV2s || []).map(function(d) {
                    return d.baseUrl || ""
                }),
                hN: (b.clickLoggingUrlsV2s || []).map(function(d) {
                    return d.baseUrl || ""
                })
            }
        },
        Tdb = function(a, b, c) {
            Y2.call(this, b, c);
            var d = this;
            this.J = a;
            this.eventId = null;
            this.Cb = this.Ma = this.Hb = this.C = this.isInitialized = !1;
            this.cards = [];
            this.rb = this.Z = this.Ja = this.G = this.Ua = this.j = null;
            this.oa = [];
            this.qa = this.N = this.Gf = this.Ga = null;
            this.K = 0;
            this.Da = new g.Yo(function() {}, c.W.fk ? 4E3 : 3E3);
            g.P(this, this.Da);
            this.fb = new g.Yo(function() {});
            g.P(this, this.fb);
            this.Ba = new Ldb(c, function(e, f, h, l, m, n) {
                Z2(d, e, f, h, l, m, n)
            });
            this.Y = new g.T({
                I: "div",
                S: "iv-drawer",
                X: {
                    id: "iv-drawer"
                },
                V: [{
                    I: "div",
                    S: "iv-drawer-header",
                    X: {
                        "aria-role": "heading"
                    },
                    V: [{
                        I: "span",
                        S: "iv-drawer-header-text"
                    }, {
                        I: "button",
                        La: ["iv-drawer-close-button", "ytp-button"],
                        X: {
                            "aria-label": "Hide cards",
                            tabindex: "0"
                        }
                    }]
                }, {
                    I: "div",
                    S: "iv-drawer-content"
                }]
            });
            g.P(this, this.Y);
            this.D = this.Y.element;
            this.Wa = new g.by(this.Y, 330);
            g.P(this, this.Wa);
            this.Kb = g.ie("iv-drawer-header-text", this.D);
            this.B = g.ie("iv-drawer-content", this.D);
            this.addCueRange(0, c.videoData.lengthSeconds *
                1E3, "",
                function() {
                    d.Hb && a3(d, "YOUTUBE_DRAWER_AUTO_OPEN")
                },
                function() {
                    (d.Hb = d.C) && b3(d)
                });
            this.Qa = new g.AE(this);
            g.P(this, this.Qa);
            this.J.addEventListener("videodatachange", this.pu.bind(this))
        },
        Udb = function(a, b) {
            b = b.data;
            b.autoOpenMs && a.addCueRange(b.autoOpenMs, 0x8000000000000, "", function() {
                a3(a, "YOUTUBE_DRAWER_AUTO_OPEN")
            });
            b.autoCloseMs && a.addCueRange(b.autoCloseMs, 0x8000000000000, "", function() {
                b3(a)
            });
            var c = b.headerText;
            g.ue(a.Kb, c);
            a.Z && a.Z.setAttribute("title", c);
            b.eventId && (a.eventId = b.eventId);
            a.Ga = g.vw(b.trackingParams);
            a.N = g.vw(b.closeTrackingParams);
            a.Gf = g.vw(b.iconTrackingParams)
        },
        Vdb = function(a, b) {
            var c = b.cardId ? b.cardId : "cr:" + a.K,
                d = a.J.U().experiments.eb("enable_error_corrections_infocard_web_client");
            if (!b.content && b.teaser.simpleCardTeaserRenderer && d) {
                var e = b.teaser.simpleCardTeaserRenderer,
                    f = b.icon ? b.icon.infoCardIconRenderer : null;
                b = {
                    id: c,
                    timestamp: a.K,
                    type: "simple",
                    teaserText: g.qx(e.message),
                    teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                    startMs: Number(b.cueRanges[0].startCardActiveMs),
                    autoOpen: !!b.autoOpen,
                    sessionData: {},
                    sponsored: !1,
                    vj: {},
                    Wp: null,
                    dk: e.trackingParams ? g.vw(e.trackingParams) : null,
                    Gf: f && f.trackingParams ? g.vw(f.trackingParams) : null,
                    imageUrl: "",
                    displayDomain: null,
                    showLinkIcon: !1,
                    GE: null,
                    title: "",
                    customMessage: "",
                    url: null,
                    onClickCommand: e.onTapCommand || null
                };
                c3(a, b)
            } else {
                var h;
                if ((h = b.content) == null ? 0 : h.simpleCardContentRenderer) {
                    if (!b.cueRanges.length) return;
                    f = (e = b.content) == null ? void 0 : e.simpleCardContentRenderer;
                    e = b.teaser.simpleCardTeaserRenderer;
                    var l = b.icon ? b.icon.infoCardIconRenderer : null;
                    b = {
                        id: c,
                        timestamp: a.K,
                        type: "simple",
                        teaserText: g.qx(e.message),
                        teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                        startMs: Number(b.cueRanges[0].startCardActiveMs),
                        autoOpen: !!b.autoOpen,
                        sessionData: d3(a, c, b, f),
                        sponsored: !1,
                        vj: $2(f, e, f.command),
                        Wp: f.trackingParams ? g.vw(f.trackingParams) : null,
                        dk: e.trackingParams ? g.vw(e.trackingParams) : null,
                        Gf: l && l.trackingParams ? g.vw(l.trackingParams) : null,
                        imageUrl: e3(f.image.thumbnails, 290).url,
                        displayDomain: f.displayDomain ? g.qx(f.displayDomain) : null,
                        showLinkIcon: !!f.showLinkIcon,
                        GE: null,
                        title: f.title ? g.qx(f.title) : "",
                        customMessage: f.callToAction ? g.qx(f.callToAction) : "",
                        url: g.Q(f.command, g.Kx).url ? U2({
                            pause_on_navigation: !a.context.videoData.isLivePlayback,
                            target: "new",
                            value: g.Q(f.command, g.Kx).url
                        }) : null,
                        onClickCommand: null
                    };
                    c3(a, b)
                } else {
                    var m;
                    if ((m = b.content) == null ? 0 : m.collaboratorInfoCardContentRenderer) {
                        if (!b.cueRanges.length) return;
                        e = (f = b.content) == null ? void 0 : f.collaboratorInfoCardContentRenderer;
                        f = b.teaser.simpleCardTeaserRenderer;
                        l = b.icon ? b.icon.infoCardIconRenderer : null;
                        b = {
                            id: c,
                            timestamp: a.K,
                            type: "collaborator",
                            teaserText: g.qx(f.message),
                            teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                            startMs: Number(b.cueRanges[0].startCardActiveMs),
                            autoOpen: !!b.autoOpen,
                            sessionData: d3(a, c, b, e),
                            sponsored: !1,
                            vj: $2(e, f, e.endpoint),
                            Wp: e.trackingParams ? g.vw(e.trackingParams) : null,
                            dk: f.trackingParams ? g.vw(f.trackingParams) : null,
                            Gf: l && l.trackingParams ? g.vw(l.trackingParams) : null,
                            channelId: g.Q(e.endpoint, g.GQ).browseId,
                            customMessage: e.customText ? g.qx(e.customText) : null,
                            profileImageUrl: e3(e.channelAvatar.thumbnails, 290).url,
                            title: e.channelName ? g.qx(e.channelName) : "",
                            metaInfo: [e.subscriberCountText ? g.qx(e.subscriberCountText) : ""],
                            url: U2({
                                pause_on_navigation: !a.context.videoData.isLivePlayback,
                                target: "new",
                                value: g.Q(e.endpoint, g.GQ).canonicalBaseUrl ? g.Q(e.endpoint, g.GQ).canonicalBaseUrl : "/channel/" + g.Q(e.endpoint, g.GQ).browseId
                            }),
                            onClickCommand: null
                        };
                        c3(a, b)
                    } else {
                        var n;
                        if ((n = b.content) == null ? 0 : n.playlistInfoCardContentRenderer) {
                            if (!b.cueRanges.length) return;
                            e = (l = b.content) == null ? void 0 : l.playlistInfoCardContentRenderer;
                            f = b.teaser.simpleCardTeaserRenderer;
                            l = b.icon ? b.icon.infoCardIconRenderer : null;
                            b = {
                                id: c,
                                timestamp: a.K,
                                type: "playlist",
                                teaserText: g.qx(f.message),
                                teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                                startMs: Number(b.cueRanges[0].startCardActiveMs),
                                autoOpen: !!b.autoOpen,
                                sessionData: d3(a, c, b, e),
                                sponsored: !1,
                                vj: $2(e, f, e.action),
                                Wp: e.trackingParams ? g.vw(e.trackingParams) : null,
                                dk: f.trackingParams ? g.vw(f.trackingParams) : null,
                                Gf: l && l.trackingParams ? g.vw(l.trackingParams) : null,
                                lI: e3(e.playlistThumbnail.thumbnails, 258).url,
                                customMessage: e.customMessage ? g.qx(e.customMessage) : null,
                                playlistVideoCount: g.qx(e.playlistVideoCount),
                                title: e.playlistTitle ? g.qx(e.playlistTitle) : "",
                                metaInfo: [e.channelName ? g.qx(e.channelName) :
                                    "", e.videoCountText ? g.qx(e.videoCountText) : ""
                                ],
                                url: U2({
                                    pause_on_navigation: !a.context.videoData.isLivePlayback,
                                    target: "new",
                                    value: Sdb(e.action)
                                }),
                                onClickCommand: null
                            };
                            c3(a, b)
                        } else {
                            var p;
                            if ((p = b.content) == null ? 0 : p.videoInfoCardContentRenderer) {
                                if (!b.cueRanges.length) return;
                                var q;
                                e = (q = b.content) == null ? void 0 : q.videoInfoCardContentRenderer;
                                f = b.teaser.simpleCardTeaserRenderer;
                                l = b.icon ? b.icon.infoCardIconRenderer : null;
                                b = {
                                    id: c,
                                    timestamp: a.K,
                                    type: "video",
                                    teaserText: g.qx(f.message),
                                    teaserDurationMs: Number(b.cueRanges[0].teaserDurationMs),
                                    startMs: Number(b.cueRanges[0].startCardActiveMs),
                                    autoOpen: !!b.autoOpen,
                                    sessionData: d3(a, c, b, e),
                                    sponsored: !1,
                                    vj: $2(e, f, e.action),
                                    Wp: e.trackingParams ? g.vw(e.trackingParams) : null,
                                    dk: f.trackingParams ? g.vw(f.trackingParams) : null,
                                    Gf: l && l.trackingParams ? g.vw(l.trackingParams) : null,
                                    lI: e3(e.videoThumbnail.thumbnails, 258).url,
                                    videoDuration: e.lengthString ? g.qx(e.lengthString) : null,
                                    customMessage: e.customMessage ? g.qx(e.customMessage) : null,
                                    title: e.videoTitle ? g.qx(e.videoTitle) : "",
                                    metaInfo: [e.channelName ? g.qx(e.channelName) :
                                        "", e.viewCountText ? g.qx(e.viewCountText) : ""
                                    ],
                                    isLiveNow: !!e.badge,
                                    url: U2({
                                        pause_on_navigation: !a.context.videoData.isLivePlayback,
                                        target: "new",
                                        value: Sdb(e.action)
                                    }),
                                    onClickCommand: null
                                };
                                c3(a, b)
                            }
                        }
                    }
                }
            }
            a.K++
        },
        e3 = function(a, b) {
            for (var c = -1, d = -1, e = 0; e < a.length; e++) {
                if (a[e].height === b || a[e].width === 290) return a[e];
                ((a[e].height || 0) < b || (a[e].width || 0) < 290) && (c < 0 || (a[c].height || 0) < (a[e].height || 0) || (a[c].width || 0) < (a[e].width || 0)) ? c = e: ((a[e].height || 0) >= b || (a[e].width || 0) >= 290) && (d < 0 || (a[d].height || 0) > (a[e].height || 0) || (a[d].width || 0) > (a[e].width || 0)) && (d = e)
            }
            return a[d >= 0 ? d : c]
        },
        d3 = function(a, b, c, d) {
            return {
                feature: c.feature ? c.feature : "cards",
                src_vid: a.context.videoData.videoId,
                annotation_id: b,
                ei: a.context.videoData.eventId || "",
                itct: d.trackingParams || ""
            }
        },
        Xdb = function(a, b) {
            if (b = Wdb(a, b)) b === a.j && (a.j = null), a.J.removeCueRange(b.zf.id), g.se(b.ZO), g.Wb(a.cards, b), a.tJ(), f3(a)
        },
        a3 = function(a, b, c) {
            if (!a.C) {
                a.Wa.show();
                a.Ua = new g.Yo(function() {
                    g.fp(a.context.J.getRootNode(), g.F_.IV_DRAWER_OPEN)
                }, 0);
                a.Ua.start();
                a.Qa.T(a.B, "mousewheel", function(h) {
                    a.Da.start();
                    h.preventDefault();
                    h = h || window.event;
                    var l = 0;
                    h.type == "MozMousePixelScroll" ? l = 0 == (h.axis == h.HORIZONTAL_AXIS) ? h.detail : 0 : window.opera ? l = h.detail : l = h.wheelDelta % 120 == 0 ? "WebkitTransform" in document.documentElement.style ? window.chrome && navigator.platform.indexOf("Mac") == 0 ? h.wheelDeltaY / -30 : h.wheelDeltaY / -1.2 : h.wheelDelta / -1.6 : h.wheelDeltaY / -3;
                    if (h = l) a.B.scrollTop += h
                });
                a.C = !0;
                var d = g.yw();
                d && a.Ga && a.N && g.ax(d, [a.Ga, a.N]);
                b = {
                    TRIGGER_TYPE: b
                };
                for (var e = g.w(a.cards), f = e.next(); !f.done; f = e.next()) f = f.value, f.K_ || (f.K_ = !0, Ydb(a.context.logger, f.zf.vj.IZ, b)), d && g.ax(d, [f.zf.Wp]);
                D2(a.J);
                c && (a.G = new g.Yo(function() {
                    a.Ja = a.Z;
                    a.rb.focus()
                }, 330), a.G.start())
            }
        },
        b3 = function(a) {
            a.C && (a.Wa.hide(), g.Cs(a.Qa), g.hp(a.context.J.getRootNode(), g.F_.IV_DRAWER_OPEN), a.C = !1, D2(a.J), a.G && a.G.stop(), a.G = new g.Yo(function() {
                a.Ja && (a.Ja.focus(), a.Ja = null)
            }, 330), a.G.start())
        },
        Zdb = function(a) {
            g.gp(a.Jb(), [g.F_.STOP_EVENT_PROPAGATION,
                "iv-drawer-manager"
            ]);
            g.GR(a.J, a.D, 5);
            a.fJ();
            a.Z = g.ie("ytp-cards-button", a.J.getRootNode());
            a.rb = g.ie("iv-drawer-close-button", a.D);
            a.isInitialized = !0
        },
        $db = function(a) {
            a.oa.push(g.hv("iv-teaser-shown", a.Y6, a));
            a.oa.push(g.hv("iv-teaser-hidden", a.aaa, a));
            a.oa.push(g.hv("iv-teaser-clicked", a.X6, a));
            a.Cb = !0
        },
        aeb = function(a, b) {
            var c;
            return b.onClickCommand && ((c = g.Q(b.onClickCommand, g.Rab)) == null ? void 0 : c.targetId) === "engagement-panel-error-corrections" ? (a.qa = b, !0) : !1
        },
        beb = function(a, b) {
            a.qa = b;
            var c = a.J.getVideoData();
            if (!c) return !1;
            c = g.FP(c);
            if (c == null ? 0 : c.markersMap)
                for (var d, e = 0;
                    ((d = c) == null ? void 0 : d.markersMap.length) > e; e++) {
                    var f = void 0,
                        h = (f = c) == null ? void 0 : f.markersMap[e];
                    if (h.key === "ERROR_CORRECTION_MARKERS" && (f = void 0, (h = (f = h.value) == null ? void 0 : f.markers) && h.length > 0)) return d = void 0, b.startMs = ((d = g.Q(h[0], g.I2a)) == null ? void 0 : d.timeRangeStartMillis) || 0, a.qa = null, !0
                }
            return !1
        },
        c3 = function(a, b) {
            if (!aeb(a, b) || beb(a, b)) {
                var c = ceb(a, b);
                if (c) {
                    var d = {
                        zf: b,
                        ZO: c.element,
                        K_: !1
                    };
                    if (b.onClickCommand) a.J.L("web_infocards_teaser_show_logging_fix") && (a.Cb || $db(a), Xdb(a, b.id), c = a.findLastIndex(d), g.bc(a.cards, c, 0, d));
                    else {
                        a.isInitialized || Zdb(a);
                        Xdb(a, b.id);
                        var e = a.findLastIndex(d);
                        g.bc(a.cards, e, 0, d);
                        c.Ia(a.B, e);
                        a.tJ()
                    }
                    b.autoOpen ? a.addCueRange(b.startMs, 0x8000000000000, b.id, function() {
                        a.C || (a.j = d, f3(a), deb(a, d), a3(a, "YOUTUBE_DRAWER_AUTO_OPEN", !1))
                    }) : (c = a.context.J.getCurrentTime() * 1E3, c < 5E3 && c > b.startMs && eeb(a, d), a.addCueRange(b.startMs,
                        b.startMs + 1, b.id,
                        function() {
                            eeb(a, d)
                        }), f3(a))
                }
            }
        },
        ceb = function(a, b) {
            switch (b.type) {
                case "simple":
                    a = a.Ba;
                    var c = b.displayDomain ? {
                        I: "div",
                        S: "iv-card-image-text",
                        va: b.displayDomain
                    } : void 0;
                    var d = Odb(b);
                    c = {
                        I: "div",
                        La: ["iv-card"],
                        V: [{
                            I: "a",
                            S: "iv-click-target",
                            X: {
                                href: b.url ? T2(b.url) || "" : ""
                            },
                            V: [W2(b.imageUrl, c), {
                                I: "div",
                                S: "iv-card-content",
                                V: [V2("h2", void 0, b.title), d]
                            }]
                        }]
                    };
                    c = new g.T(c);
                    X2(a, g.ge("iv-click-target", c.element), b, b.url);
                    b = c;
                    break;
                case "collaborator":
                    a = a.Ba;
                    c = {
                        I: "div",
                        La: ["iv-card", "iv-card-channel"],
                        V: [{
                            I: "a",
                            La: ["iv-click-target"],
                            X: {
                                href: T2(b.url) || "",
                                "data-ytid": b.channelId
                            },
                            V: [W2(b.profileImageUrl),
                                {
                                    I: "div",
                                    S: "iv-card-content",
                                    V: [Mdb(b), {
                                        I: "h2",
                                        S: "iv-card-primary-link",
                                        va: b.title
                                    }, Ndb(b)]
                                }
                            ]
                        }]
                    };
                    c = new g.T(c);
                    X2(a, g.ge("iv-click-target", c.element), b, b.url);
                    b = c;
                    break;
                case "playlist":
                    a = a.Ba;
                    c = {
                        I: "div",
                        La: ["iv-card", "iv-card-playlist"],
                        V: [{
                            I: "a",
                            S: "iv-click-target",
                            X: {
                                href: T2(b.url) || ""
                            },
                            V: [W2(b.lI, {
                                I: "div",
                                S: "iv-card-image-overlay",
                                V: [{
                                    I: "span",
                                    S: "iv-card-playlist-video-count",
                                    va: b.playlistVideoCount
                                }]
                            }), {
                                I: "div",
                                S: "iv-card-content",
                                V: [Mdb(b), V2("h2", "iv-card-primary-link", b.title), Ndb(b)]
                            }]
                        }]
                    };
                    c = new g.T(c);
                    X2(a, g.ge("iv-click-target", c.element), b, b.url);
                    b = c;
                    break;
                case "productListing":
                    a = a.Ba;
                    var e = b.offers.length != 0;
                    c = ["iv-card"];
                    d = "";
                    var f = Odb(b);
                    e && (c.push("iv-card-product-listing"), d = "iv-card-primary-link", f = b.offers[0], e = [], f.price && e.push({
                        I: "div",
                        S: "iv-card-offer-price",
                        va: f.price
                    }), f.merchant && e.push({
                        I: "div",
                        S: "iv-card-offer-merchant",
                        va: f.merchant
                    }), f = {
                        I: "div",
                        V: e
                    });
                    e = b.url ? T2(b.url) || "" : "";
                    c = {
                        I: "div",
                        La: c,
                        X: {
                            tabindex: "0"
                        },
                        V: [{
                            I: "a",
                            La: ["iv-card-image", "iv-click-target"],
                            X: {
                                style: "background-image: url(" +
                                    b.imageUrl + ");",
                                href: e,
                                "aria-hidden": "true",
                                tabindex: "-1"
                            }
                        }, {
                            I: "div",
                            S: "iv-card-content",
                            V: [b.sponsored ? {
                                I: "div",
                                S: "iv-card-sponsored",
                                V: ["Sponsored", {
                                    I: "div",
                                    S: "iv-ad-info-container",
                                    V: [{
                                        I: "div",
                                        S: "iv-ad-info",
                                        va: "{{adInfo}}"
                                    }, {
                                        I: "div",
                                        S: "iv-ad-info-icon-container",
                                        V: [{
                                            I: "div",
                                            S: "iv-ad-info-icon"
                                        }, {
                                            I: "div",
                                            S: "iv-ad-info-callout"
                                        }]
                                    }]
                                }]
                            } : "", {
                                I: "a",
                                S: "iv-click-target",
                                X: {
                                    href: e
                                },
                                V: [V2("h2", d, b.title), f]
                            }]
                        }]
                    };
                    c = new g.T(c);
                    d = g.ne("span");
                    g.ue(d, "You are seeing this product because we think it is relevant to the video. Google may be compensated by the merchant.");
                    c.Cd(d, "adInfo");
                    X2(a, g.ge("iv-click-target", c.element), b, b.url);
                    b = c;
                    break;
                case "video":
                    a = a.Ba;
                    d = b.videoDuration ? {
                        I: "span",
                        S: "iv-card-video-duration",
                        va: b.videoDuration
                    } : void 0;
                    f = b.isLiveNow ? {
                        I: "span",
                        La: ["yt-badge", "yt-badge-live"],
                        va: "LIVE NOW"
                    } : null;
                    e = {
                        I: "div",
                        La: ["iv-card", "iv-card-video"],
                        V: [{
                            I: "a",
                            S: "iv-click-target",
                            X: {
                                href: ((c = b.url) == null ? void 0 : T2(c)) || ""
                            },
                            V: [W2(b.lI, d), {
                                I: "div",
                                S: "iv-card-content",
                                V: [Mdb(b), V2("h2", "iv-card-primary-link", b.title), Ndb(b), f]
                            }]
                        }]
                    };
                    c = new g.T(e);
                    X2(a, g.ge("iv-click-target",
                        c.element), b, b.url);
                    b = c;
                    break;
                default:
                    return null
            }
            return b
        },
        feb = function(a) {
            if (a.j) return a.j.zf.type === "productListing";
            if (a.J.L("enable_wn_infocards")) {
                var b;
                return !((b = a.cards) == null || !b.length) && g.Al(a.cards, function(c) {
                    return c.zf.type === "productListing"
                })
            }
            return g.Al(a.cards, function(c) {
                return c.zf.type === "productListing"
            })
        },
        f3 = function(a) {
            g.jp(a.J.getRootNode(), "ytp-cards-shopping-active", feb(a))
        },
        eeb = function(a, b) {
            if (!g.ep(a.J.getRootNode(), "ytp-cards-teaser-shown")) {
                if (a.j !== b) {
                    var c = g.yw(),
                        d = a.j ? a.j.zf.Gf : a.Gf;
                    c && d && g.bx(c, [d]);
                    a.j = b;
                    f3(a)
                }(c = a.isInitialized && a.Jb().style.display == "none") || (c = a.context.J.getPlayerState(), d = c === 0 && a.context.J.getCurrentTime() === 0, c = !(c === 1 || c === 3 || d));
                c || b.zf.teaserDurationMs && a.J.xC(!0, {
                    teaserText: b.zf.teaserText,
                    durationMs: b.zf.teaserDurationMs,
                    onClickCommand: b.zf.onClickCommand
                });
                a.fb.isActive() || ((!a.C || !a.Da.isActive() && a.Ma) && deb(a, b), a.fb.start(910 + b.zf.teaserDurationMs))
            }
        },
        deb = function(a, b) {
            a.Y.Fb ? (b = new I2([0,
                a.B.scrollTop
            ], [0, b.ZO.offsetTop], 600, ldb), a.context.C.listen(b, "animate", function(c) {
                a.B.scrollTop = c.y
            }), a.context.C.listen(b, "finish", function(c) {
                a.B.scrollTop = c.y
            }), b.play()) : (g.mx(a.Y, !0), a.B.scrollTop = b.ZO.offsetTop, g.mx(a.Y, !1))
        },
        g3 = function(a) {
            return a.j && a.j.zf ? a.j.zf : a.cards[0] && a.cards[0].zf ? a.cards[0].zf : null
        },
        Wdb = function(a, b) {
            return g.Sb(a.cards, function(c) {
                return c.zf.id === b
            })
        },
        h3 = function(a, b, c) {
            Y2.call(this, a, b);
            this.annotation = c;
            this.isActive = !1
        },
        geb = function(a) {
            var b = a.annotation.data;
            "start_ms" in b && "end_ms" in b && a.addCueRange(Number(b.start_ms), Number(b.end_ms), a.annotation.id, function() {
                a.show()
            }, function() {
                a.hide()
            })
        },
        i3 = function(a, b, c) {
            h3.call(this, a, b, c);
            this.B = null;
            this.N = !1;
            this.C = null;
            this.D = !1;
            this.j = this.K = this.G = null
        },
        heb = function(a, b) {
            var c = c === void 0 ? 0 : c;
            var d = cdb(b).width;
            g.tm(b, d);
            c = new jdb(b, [d, b.offsetTop], [d - d - c, b.offsetTop], 200, kdb);
            g.P(a, c);
            a.context.C.listen(c, "begin", function() {
                g.zm(b, !0)
            });
            c.play()
        },
        keb = function(a, b) {
            if (b.channel_name) {
                var c = a.createElement({
                        I: "div",
                        La: ["iv-branding-context-name"],
                        va: b.channel_name
                    }),
                    d = a.createElement({
                        I: "div",
                        La: ["iv-branding-context-subscribe"]
                    }),
                    e = b.standalone_subscribe_button_data;
                e && (a.j = new g.CY(e.subscribeText, e.subscribeCount, e.unsubscribeText, e.unsubscribeCount, !!e.enabled, !!e.classic, b.channel_id, !!e.subscribed, e.feature, b.session_data.itct, a.context.J, !1), a.j.Ia(d));
                var f = a.createElement({
                        I: "div",
                        La: ["iv-branding-context-subscribe-caret"]
                    }),
                    h = a.createElement({
                        I: "div",
                        La: ["branding-context-container-inner"]
                    });
                h.appendChild(f);
                h.appendChild(c);
                h.appendChild(d);
                g.zm(h, !1);
                var l = a.createElement({
                    I: "div",
                    La: ["branding-context-container-outer"]
                });
                l.appendChild(h);
                g.mm(l, "right", b.image_width + "px");
                g.pe(a.Jb(), l);
                a.C = new g.Yo(function() {
                    ieb(a, h, l)
                }, 500);
                g.P(a, a.C);
                a.context.j.listen(a.Jb(), "mouseover", function() {
                    jeb(a, h, l, f, b.image_height)
                });
                a.context.j.listen(a.Jb(), "mouseout", function() {
                    a.C.start()
                })
            }
        },
        jeb = function(a, b, c, d, e) {
            a.C.stop();
            if (!a.D) {
                var f = g.ym(b);
                a.j || (b.style.width = g.sm(f.width, !0), c.style.width = g.sm(f.width, !0));
                g.mm(d, "top", f.height - Math.max(Math.min(f.height, e) / 2 + 10, 20) + "px");
                g.mm(d, "right", "1px");
                a.D = !0;
                g.zm(b, !0);
                a.G = new g.Yo(function() {
                    g.fp(this.Jb(), "iv-branding-active")
                }, 0, a);
                a.G.start()
            }
        },
        ieb = function(a, b, c) {
            g.hp(a.Jb(), "iv-branding-active");
            a.K = new g.Yo(function() {
                g.zm(b, !1);
                a.j || (c.style.width = g.sm(0, !0))
            }, 250);
            a.K.start();
            a.D = !1
        },
        leb = function(a, b, c, d, e, f, h) {
            this.j = a;
            this.C = b;
            this.W = c;
            this.videoData = d;
            this.logger = e;
            this.J = f;
            this.B = h
        },
        meb = function(a, b, c) {
            h3.call(this, a, b, c);
            var d = this;
            this.Z = this.isCollapsed = this.Y = !1;
            this.K = 5E3;
            this.B = this.C = this.j = this.D = null;
            this.N = this.createElement({
                I: "div",
                La: ["iv-promo-contents"]
            });
            this.G = new g.Yo(function() {
                d.j.setAttribute("aria-hidden", "true");
                g.zm(d.C, !1);
                g.zm(d.B, !0)
            }, 700, this);
            g.P(this, this.G)
        },
        peb = function(a, b, c) {
            c.stopPropagation();
            neb(a);
            oeb(a, b);
            a.j.focus()
        },
        qeb = function(a) {
            a.isCollapsed || a.Z || a.D || (g.fp(a.Jb(), "iv-promo-collapsed"), a.isCollapsed = !0, a.G.start())
        },
        neb = function(a) {
            a.G.stop();
            a.isCollapsed && (g.ip(a.Jb(), ["iv-promo-collapsed", "iv-promo-collapsed-no-delay"]), a.isCollapsed = !1, a.j && a.j.removeAttribute("aria-hidden"), g.zm(a.B, !1), g.zm(a.C, !0))
        },
        oeb = function(a, b) {
            a.D || (a.D = g.Re(function() {
                reb(this);
                qeb(this)
            }, b, a))
        },
        reb = function(a) {
            a.D && (g.Ka.clearTimeout(a.D), a.D = null)
        },
        seb = function(a) {
            this.J = a
        },
        Ydb = function(a, b, c) {
            b && (c ? j3(a, b.map(function(d) {
                return g.Eo(d, c)
            })) : j3(a, b))
        },
        j3 = function(a, b, c, d) {
            var e = 1,
                f = void 0,
                h = -1;
            if (c) {
                var l = !1;
                f = function() {
                    e--;
                    e || l || (clearTimeout(h), l = !0, c())
                };
                h = setTimeout(function() {
                    l = !0;
                    c()
                }, 1E3)
            }
            b = g.w(b || []);
            for (var m = b.next(); !m.done; m = b.next()) m = m.value, e++, g.Qu(m, f);
            d && (e++, d !== 0 && a.J.sendVideoStatsEngageEvent(d, f))
        },
        teb = function(a) {
            g.WX.call(this, a);
            var b = this;
            this.oa = this.Z = !1;
            this.loadNumber = 0;
            this.K = {};
            this.logger = new seb(this.player);
            this.D = new g.AE(this);
            this.G = this.N = null;
            this.events = new g.AE(this);
            this.fh = this.Y = this.j = null;
            this.qa = [];
            g.P(this, this.D);
            this.D.T(this.player, "onVideoAreaChange", function() {
                b.publish("onVideoAreaChange")
            });
            this.D.T(this.player, "onHideControls", function() {
                b.publish("onHideControls")
            });
            this.D.T(this.player, "onShowControls", function() {
                b.publish("onShowControls")
            });
            this.D.T(this.player, "resize", function(d) {
                b.publish("resize", d)
            });
            this.D.T(this.player, "presentingplayerstatechange", function(d) {
                b.publish("presentingplayerstatechange", d)
            });
            this.subscribe("presentingplayerstatechange", this.Z6, this);
            this.subscribe("resize", this.WL, this);
            this.player.U().Ma.subscribe("vast_info_card_add", this.Z0, this);
            g.P(this, this.events);
            this.Ba = this.createElement({
                I: "div",
                S: "video-custom-annotations"
            });
            this.B = new g.T({
                I: "div",
                La: ["ytp-player-content", "ytp-iv-player-content"]
            });
            g.P(this, this.B);
            g.GR(this.player, this.B.element, 4);
            this.B.hide();
            this.C = new g.T({
                I: "div",
                La: ["ytp-iv-video-content"]
            });
            g.P(this, this.C);
            a = this.createElement({
                I: "div",
                S: "video-annotations"
            });
            a.appendChild(this.Ba);
            this.C.element.appendChild(a);
            this.Dv() && this.load();
            var c = this.createElement({
                I: "style"
            });
            (g.ee("HEAD")[0] || document.body).appendChild(c);
            this.addOnDisposeCallback(function() {
                g.se(c)
            });
            if (a = c.sheet) a.insertRule(".iv-promo .iv-promo-contents .iv-promo-txt .iv-promo-link:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUBAMAAAB/pwA+AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAHlBMVEVMaXH////////////////////////////////////Z6AnKAAAACXRSTlMA+/A2IuI1mJIldm0CAAAAAWJLR0QB/wIt3gAAAEVJREFUCNdjYGCYCQUMBJlACOIzIDElIcyZkwxgojOVWWDMSQauMKYySySUOSnBdSaUOZ0lEsac2YqwYiZ+JhwgM7E5HACgzVCI/YJ59AAAAABJRU5ErkJggg==) no-repeat center;background-size:10px;width:10px;height:10px}",
                0), a.insertRule(".iv-promo .iv-promo-actions .iv-promo-close:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAVaQDpaimqQbl5rjXUFUAAAABYktHRAH/Ai3eAAAAPUlEQVQI12MQMmAwEmDwDmaOTmAw39663YCBuXp2MQMDQ+fOBgYG5ujVwQwMptvbgeLaxczVCQwiBgxmAgBkXg1FN5iwiAAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}",
                0), a.insertRule(".iv-promo .iv-promo-actions .iv-promo-expand:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAJBAMAAADnQZCTAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXHMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMz////eMKB4AAAAC3RSTlMAOpE7k5Uvj5kpfRaQSaQAAAABYktHRAsf18TAAAAAHklEQVQI12MQYGBQZmBwTWCo0GSo6AKRQDZQRIABADXXA/UkIpvtAAAAAElFTkSuQmCC) no-repeat center;background-size:4px 9px;width:4px;height:9px}", 0), a.insertRule(".iv-promo-website-card-cta-redesign .iv-promo-round-expand-icon:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfgCgUUEztsNfqrAAAAXklEQVRYw+3Uuw2AQAwEUUNXfBpDIvBRMhQwJJAScNrA0r4CdiQHjjAzK4NGKucPAFmCnZcmwcTphBNO9CTGH4VB+/Zm6YlYis9fhedXz38FNvFriCCl808iw8ysrBu65gCeuV/CfgAAAABJRU5ErkJggg==) no-repeat center;background-size:18px 18px;width:18px;height:18px}",
                0), a.insertRule(".iv-card-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASBAMAAACk4JNkAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAGFBMVEVMaXG7u7u7u7u7u7u7u7u7u7u7u7v///+WKTAlAAAABnRSTlMAFdQWbGj9GiOuAAAAAWJLR0QHFmGI6wAAAEhJREFUCNdjYACBNCBgQGMxMKrBWEJJaRAJRjVlKEsoSQDIAqtSZICwgEIQFkgIZBRECMxiBqsCsVjAqsCygQwwFgMeFgQgswBg2xjLrfC4mgAAAABJRU5ErkJggg==) no-repeat center;background-size:9px;width:9px;height:9px}", 0), a.insertRule(".iv-card-playlist-video-count:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEVMaXH///////////////////////////////////////////9tKdXLAAAAC3RSTlMAvDeyLvxYtDK9Ogx4T1QAAAABYktHRAH/Ai3eAAAAK0lEQVQY02NgoBjshgO8HJoYwKiAMGAD92YHJM7uMCTO9gaEHs4FlPuZAQC8Fj8x/xHjxwAAAABJRU5ErkJggg==) no-repeat center;background-size:24px;width:24px;height:24px}",
                0), a.insertRule(".iv-drawer-close-button:after {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMAgMAAAArG7R0AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACVBMVEVMaXH////////OZTV/AAAAAnRSTlMAoKBFbtAAAAABYktHRAH/Ai3eAAAAKUlEQVQI12MIYGBlSGGQBMIUBjbHCQyM0xwYGDIZwBjEBomB5EBqgGoBolQGzYuy51cAAAAASUVORK5CYII=) no-repeat center;background-size:12px;width:12px;height:12px}", 0), a.insertRule(".iv-ad-info-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAMAAACecocUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAVFBMVEVMaXGUlJSYmJiZmZmYmJiXl5eZmZmZmZmWlpaVlZWOjo6ZmZmSkpKXl5eYmJiYmJiZmZmZmZmZmZmZmZmYmJiJiYmXl5eZmZmYmJiWlpaZmZn///+81lbeAAAAGnRSTlMAE5DM80DliTMMEjccWIM5p1UjaTQNgB5cLlr5mgUAAAABYktHRBsCYNSkAAAAVElEQVQI102NRw7AIBADhw7ppIf/PzQLJ/ZgWSNrFlDaWKMVcs6HmGLwTqjEME6CFDrAXBYIGhNh3TJEg02wHydctvFc7sbrvnXZV8/zfs3T+7u/P7CrAso35YfPAAAAAElFTkSuQmCC) no-repeat center;background-size:11px;width:11px;height:11px}",
                0), a.insertRule(".annotation-close-button {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAALVBMVEVMaXEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Pz9aWloBAQGZmZlbW1v///+X9wUzAAAACHRSTlMANprf+g6lyRmB9hUAAAABYktHRA5vvTBPAAAAWUlEQVQI12NgYBAycVZkAIKwDiBIZWBgrQAx2gMY2DrAIIFBomPWju6VHY0MGh1rbu891dHEYNGx9+yd2x3NDB4d3XfO7uhoQTDgUnDFcO1wA+FWwC2FOQMAdKg6tUSAFEAAAAAASUVORK5CYII=) no-repeat center}", 0), a.insertRule(".annotation-link-icon {background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAMAAAANmfvwAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUVBMVEVMaXH////////////////////////////////////////////////////////////////////////////////////////////////////////JzkR1AAAAGnRSTlMAfXf+c3xsdGdv/GJoXPtXXflSVk5L7DBH9VeFfsQAAAABYktHRAH/Ai3eAAAAgElEQVQ4y93SSQ6AIAwFULSOOOJs739Qf9SF0VA2uNCu+psHaQJK7cVCqY+Rg92PXA++Q84KnCR03UIRJrFEKMEgZYFQhpyzQHSBWJJAdIVUENtJ3SC0mu3EdOh7zXZiBrRdzQLJ0Y1GfOlpVstD3HaZktX9X/gvRCxvxL6FR7IBS1RTM5xIpLoAAAAASUVORK5CYII=) no-repeat center}",
                0)
        },
        ueb = function(a) {
            a = a.createElement({
                I: "div",
                La: ["annotation", "annotation-type-custom"]
            });
            g.zm(a, !1);
            return a
        },
        veb = function(a, b) {
            b = !b.isCued() && !g.Z(b, 1024);
            g.mx(a.B, b);
            g.mx(a.C, b)
        },
        web = function(a, b, c) {
            a.Z = !0;
            a.G = g.xr(b, c)
        },
        xeb = function(a, b) {
            for (var c = {}, d = g.w(b.attributes), e = d.next(); !e.done; e = d.next()) e = e.value, c[e.name] = e.nodeValue;
            for (d = 0; d < b.childNodes.length; d++)
                if (e = b.childNodes[d], g.Qa(e) && e.nodeType == 1) {
                    if (c[e.tagName]) var f = c[e.tagName];
                    else if (e.tagName === "data") {
                        e.childNodes.length > 0 && (f = e.childNodes[0].nodeValue, c[e.tagName] = typeof f === "string" ? f.trim() : f);
                        continue
                    } else f = [], c[e.tagName] = f;
                    e && e.tagName === "TEXT" ? e.childNodes.length === 1 && e.childNodes[0].nodeType === 3 ? f.push(e.childNodes[0].nodeValue) : f.push("") : e && f.push(xeb(a, e))
                }
            return c
        },
        Beb = function(a) {
            var b = a.player.getVideoData();
            if (b.Va) {
                var c = a.player.U().Ma.get(b.videoId);
                if (c) {
                    var d = {
                        format: "XML",
                        urlParams: {},
                        method: "POST",
                        withCredentials: !0,
                        onFinish: function(e, f, h) {
                            e = a.loadNumber;
                            f = b.videoId;
                            a.loaded && a.loadNumber === e && a.player.getVideoData().videoId === f && (h = g.mr(h) && h.responseXML ? h.responseXML : null) && yeb(a, h)
                        }
                    };
                    g.at() && (d.onFinish = zeb(a, d.onFinish));
                    d.postParams = {
                        ic_only: "1"
                    };
                    Aeb(d, c);
                    a.Z = !0;
                    g.xr(b.Va, d)
                }
            }
        },
        Aeb = function(a, b) {
            a.method = "POST";
            a.postParams = a.postParams || {};
            b.yJ && (a.postParams.ic_coll = b.yJ);
            b.aP && (a.postParams.ic_xml = b.aP);
            b.mN && (a.postParams.ic_track = b.mN)
        },
        Ceb = function(a) {
            var b = new g.T({
                I: "div"
            });
            g.zm(b.element, !1);
            var c = new Tdb(a.player, b.element, k3(a));
            g.P(c, b);
            b.Ia(a.B.element);
            c.VH();
            return c
        },
        Eeb = function(a, b) {
            var c, d;
            if (b = (c = b.getWatchNextResponse()) == null ? void 0 : (d = c.cards) == null ? void 0 : d.cardCollectionRenderer) a.oa = !0, Deb(a, b), b.headerText && a.fh && (c = g.qx(b.headerText), a.fh.setAttribute("title", c))
        },
        k3 = function(a) {
            if (!a.Y) {
                var b = new mdb(a);
                g.P(a, b);
                var c = new g.yk(a);
                g.P(a, c);
                a.Y = new leb(b, c, a.player.U(), a.player.getVideoData(), a.logger, a.player, a.Jj)
            }
            return a.Y
        },
        yeb = function(a, b) {
            var c = !1,
                d = b.getElementsByTagName("annotations");
            if (d && !(d.length < 1) && (d = d[0].getAttribute("itct"))) {
                var e = g.yw();
                if (e) {
                    var f = g.xw();
                    f && g.Xq(g.Sw)(void 0, e, f, [g.vw(d)])
                }
            }
            b = b.getElementsByTagName("annotation");
            for (d = 0; d < b.length; d++) {
                f = xeb(a, b[d]);
                e = null;
                try {
                    if (f) {
                        var h = f.id,
                            l = /.+/;
                        var m = typeof h === "string" && l != null && h != null && h.match(l) ? h : "";
                        var n = S2(f.type, Feb),
                            p = S2(f.style, Geb),
                            q = Cdb(f.data),
                            r = q.length !== 0 ? JSON.parse(q) : {};
                        var t = f.action;
                        f = Idb;
                        if (t == null) var u = null;
                        else if (g.Pa(t)) {
                            l = [];
                            for (var y = g.w(t), B = y.next(); !B.done; B = y.next()) {
                                var C = f(B.value);
                                C && l.push(C)
                            }
                            u = l
                        } else {
                            var G = f(t);
                            u = G ? [G] : []
                        }
                        e = m && n ? new Jdb(m, n, p, u, r) : null
                    } else e = null
                } catch (fa) {}
                if (e)
                    if (e.type === "branding" || e.type === "promotion") {
                        f = a;
                        l = e;
                        var H = ueb(f),
                            N = null;
                        switch (l.type) {
                            case "branding":
                                if (f.player.U().Dd) break;
                                f.B.element.appendChild(H);
                                N = new i3(H, k3(f), l);
                                break;
                            case "promotion":
                                g.GR(f.player, H, 4), N = new meb(H, k3(f), l)
                        }
                        N && N.VH();
                        if (f = N) g.P(a, f), a.K[e.id] = f
                    } else if (e.type === "card" || e.type === "drawer") {
                    a.j || (a.j = Ceb(a), g.P(a, a.j));
                    if (e.type === "card") {
                        H = a.j;
                        var M = (c = e) && c.data &&
                            c.data.card_type;
                        e = c.data;
                        if (M) switch (f = e.tracking || {}, f = {
                            IZ: f.impression,
                            click: f.click,
                            close: f.close,
                            n3: f.teaser_impression,
                            hN: f.teaser_click
                        }, l = e.tracking_params || {}, N = null, M) {
                            case "collaborator":
                                c = {
                                    id: c.id,
                                    timestamp: e.timestamp || 0,
                                    type: e.card_type,
                                    teaserText: e.teaser_text,
                                    teaserDurationMs: e.teaser_duration_ms,
                                    startMs: e.start_ms,
                                    autoOpen: e.auto_open || !1,
                                    sessionData: e.session_data || {},
                                    sponsored: e.sponsored || !1,
                                    vj: f,
                                    Wp: l.card ? g.vw(l.card) : null,
                                    dk: l.teaser ? g.vw(l.teaser) : null,
                                    Gf: l.icon ? g.vw(l.icon) : null,
                                    channelId: e.channel_id,
                                    customMessage: e.custom_message ? e.custom_message : null,
                                    profileImageUrl: e.image_url,
                                    title: e.title,
                                    metaInfo: e.meta_info,
                                    url: U2({
                                        pause_on_navigation: e.pause_on_navigation,
                                        target: e.target || "new",
                                        value: e.url
                                    }),
                                    onClickCommand: null
                                };
                                c3(H, c);
                                break;
                            case "playlist":
                                c = {
                                    id: c.id,
                                    timestamp: e.timestamp || 0,
                                    type: e.card_type,
                                    teaserText: e.teaser_text,
                                    teaserDurationMs: e.teaser_duration_ms,
                                    startMs: e.start_ms,
                                    autoOpen: e.auto_open || !1,
                                    sessionData: e.session_data || {},
                                    sponsored: e.sponsored || !1,
                                    vj: f,
                                    Wp: l.card ? g.vw(l.card) : null,
                                    dk: l.teaser ? g.vw(l.teaser) : null,
                                    Gf: l.icon ? g.vw(l.icon) : null,
                                    lI: e.image_url,
                                    playlistVideoCount: e.playlist_video_count,
                                    customMessage: e.custom_message ? e.custom_message : null,
                                    title: e.title,
                                    metaInfo: e.meta_info,
                                    url: U2({
                                        pause_on_navigation: e.pause_on_navigation,
                                        target: e.target || "new",
                                        value: e.url
                                    }),
                                    onClickCommand: null
                                };
                                c3(H, c);
                                break;
                            case "productListing":
                                e.signin_url && (N = U2({
                                    target: "current",
                                    value: e.signin_url
                                }));
                                M = [];
                                for (var X = e.offers || [], W = 0; W < X.length; W++) M.push(new Pdb(g.Yd(X[W].merchant),
                                    g.Yd(X[W].price)));
                                c = {
                                    id: c.id,
                                    timestamp: e.timestamp || 0,
                                    type: e.card_type,
                                    teaserText: e.teaser_text,
                                    teaserDurationMs: e.teaser_duration_ms,
                                    startMs: e.start_ms,
                                    autoOpen: e.auto_open || !1,
                                    sessionData: e.session_data || {},
                                    sponsored: e.sponsored || !1,
                                    vj: f,
                                    Wp: l.card ? g.vw(l.card) : null,
                                    dk: l.teaser ? g.vw(l.teaser) : null,
                                    Gf: l.icon ? g.vw(l.icon) : null,
                                    imageUrl: e.image_url,
                                    displayDomain: e.display_domain ? e.display_domain : null,
                                    showLinkIcon: !!e.show_link_icon,
                                    GE: e.button_icon_url ? e.button_icon_url : null,
                                    title: e.title,
                                    customMessage: e.custom_message ?
                                        e.custom_message : null,
                                    url: U2({
                                        pause_on_navigation: e.pause_on_navigation,
                                        target: e.target || "new",
                                        value: e.url
                                    }),
                                    kqa: N,
                                    jqa: e.signin_title ? e.signin_title : void 0,
                                    iqa: e.signin_message ? e.signin_message : void 0,
                                    offers: M,
                                    onClickCommand: null
                                };
                                c3(H, c);
                                break;
                            case "simple":
                                c = {
                                    id: c.id,
                                    timestamp: e.timestamp || 0,
                                    type: e.card_type,
                                    teaserText: e.teaser_text,
                                    teaserDurationMs: e.teaser_duration_ms,
                                    startMs: e.start_ms,
                                    autoOpen: e.auto_open || !1,
                                    sessionData: e.session_data || {},
                                    sponsored: e.sponsored || !1,
                                    vj: f,
                                    Wp: l.card ? g.vw(l.card) : null,
                                    dk: l.teaser ? g.vw(l.teaser) : null,
                                    Gf: l.icon ? g.vw(l.icon) : null,
                                    imageUrl: e.image_url,
                                    displayDomain: e.display_domain ? e.display_domain : null,
                                    showLinkIcon: !!e.show_link_icon,
                                    GE: e.button_icon_url ? e.button_icon_url : null,
                                    title: e.title,
                                    customMessage: e.custom_message ? e.custom_message : null,
                                    url: U2({
                                        pause_on_navigation: e.pause_on_navigation,
                                        target: e.target || "new",
                                        value: e.url
                                    }),
                                    onClickCommand: null
                                };
                                c3(H, c);
                                break;
                            case "video":
                                c = {
                                    id: c.id,
                                    timestamp: e.timestamp || 0,
                                    type: e.card_type,
                                    teaserText: e.teaser_text,
                                    teaserDurationMs: e.teaser_duration_ms,
                                    startMs: e.start_ms,
                                    autoOpen: e.auto_open || !1,
                                    sessionData: e.session_data || {},
                                    sponsored: e.sponsored || !1,
                                    vj: f,
                                    Wp: l.card ? g.vw(l.card) : null,
                                    dk: l.teaser ? g.vw(l.teaser) : null,
                                    Gf: l.icon ? g.vw(l.icon) : null,
                                    lI: e.image_url,
                                    videoDuration: e.video_duration || null,
                                    customMessage: e.custom_message ? e.custom_message : null,
                                    title: e.title,
                                    metaInfo: e.meta_info,
                                    isLiveNow: !!e.is_live_now,
                                    url: U2({
                                        pause_on_navigation: e.pause_on_navigation,
                                        target: e.target || "new",
                                        value: e.url
                                    }),
                                    onClickCommand: null
                                }, c3(H, c)
                        }
                    } else Udb(a.j, e);
                    c = !0
                }
            }
            c &&
                (D2(a.player), a.WL())
        },
        Deb = function(a, b) {
            var c = !1;
            a.j || (a.j = Ceb(a), g.P(a, a.j));
            for (var d = g.w(b.cards || []), e = d.next(); !e.done; e = d.next()) e = e.value, e.cardRenderer && (Vdb(a.j, e.cardRenderer), c = !0);
            if (c) {
                var f;
                (f = a.player.getVideoData()) != null && g.NQ(f) || (c = a.j, d = b.headerText ? g.qx(b.headerText) : "", g.ue(c.Kb, d), c.Z && c.Z.setAttribute("title", d), c.context.videoData.eventId && (c.eventId = c.context.videoData.eventId), c.Ga = b.trackingParams ? g.vw(b.trackingParams) : null, c.N = b.closeButton.infoCardIconRenderer.trackingParams ? g.vw(b.closeButton.infoCardIconRenderer.trackingParams) :
                    null, c.Gf = b.icon.infoCardIconRenderer.trackingParams ? g.vw(b.icon.infoCardIconRenderer.trackingParams) : null, a.WL());
                D2(a.player)
            }
        },
        Heb = function(a, b, c, d, e) {
            if (!a.player.U().Dd) {
                var f = [];
                b.navigationEndpoint && g.Q(b.navigationEndpoint, g.GQ) && g.Q(b.navigationEndpoint, g.GQ).browseId && f.push(new Fdb("openUrl", "click", new Ddb("/channel/" + g.Q(b.navigationEndpoint, g.GQ).browseId, "new", !0, !0)));
                var h = b.watermark.thumbnails[0];
                d = {
                    channel_name: b.channelName,
                    end_ms: b.endTimeMs,
                    image_height: h.height,
                    image_type: 1,
                    image_url: h.url,
                    image_width: h.width,
                    is_mobile: !1,
                    session_data: {
                        annotation_id: c,
                        ei: e,
                        feature: "iv",
                        itct: b.trackingParams,
                        src_vid: d
                    },
                    start_ms: b.startTimeMs
                };
                if (b.subscribeButton && g.Q(b.subscribeButton,
                        g.HQ)) {
                    d.channel_id = g.Q(b.subscribeButton, g.HQ).channelId;
                    var l;
                    b = g.Q(b.subscribeButton, g.HQ);
                    h = e = null;
                    b.subscribed ? (b.subscriberCountWithUnsubscribeText && (e = g.qx(b.subscriberCountWithUnsubscribeText)), b.subscriberCountText && (h = g.qx(b.subscriberCountText))) : (b.subscriberCountText && (e = g.qx(b.subscriberCountText)), b.subscriberCountWithSubscribeText && (h = g.qx(b.subscriberCountWithSubscribeText)));
                    var m, n = ((m = g.Q((l = b.signInEndpoint) == null ? void 0 : l.commandMetadata, g.y1)) == null ? void 0 : m.url) || "";
                    l = {
                        subscribeText: g.qx(b.unsubscribedButtonText),
                        subscribeCount: e || "",
                        unsubscribeText: g.qx(b.subscribedButtonText),
                        unsubscribeCount: h || "",
                        enabled: b.enabled || !1,
                        classic: !1,
                        subscribed: b.subscribed || !1,
                        feature: "iv",
                        signInUrl: n
                    };
                    d.standalone_subscribe_button_data = l
                }
                f = new Jdb(c, "branding", "branding", f, d);
                l = ueb(a);
                a.B.element.appendChild(l);
                f = new i3(l, k3(a), f);
                f.VH();
                g.P(f, f);
                a.K[c] = f
            }
        },
        zeb = function(a, b) {
            return function() {
                var c = g.Da.apply(0, arguments);
                a.Ka() || a.qa.push(g.Ro.aj(function() {
                    b.apply(null, g.x(c))
                }))
            }
        },
        Ieb = function(a) {
            return a === "annotation-editor" || a === "live-dashboard"
        };
    g.yR.prototype.xC = g.da(35, function(a, b) {
        var c = g.kY(this.Ab());
        c && c.xC(a, b)
    });
    var F2 = {},
        G2 = null;
    g.Za(I2, g.kp);
    g.k = I2.prototype;
    g.k.getDuration = function() {
        return this.duration
    };
    g.k.play = function(a) {
        if (a || this.j == 0) this.progress = 0, this.coords = this.B;
        else if (this.isPlaying()) return !1;
        H2(this);
        this.startTime = a = g.Ya();
        this.isPaused() && (this.startTime -= this.duration * this.progress);
        this.endTime = this.startTime + this.duration;
        this.D = this.startTime;
        this.progress || this.NL();
        this.ao("play");
        this.isPaused() && this.ao("resume");
        this.j = 1;
        var b = g.Ua(this);
        b in F2 || (F2[b] = this);
        fdb();
        gdb(this, a);
        return !0
    };
    g.k.stop = function(a) {
        H2(this);
        this.j = 0;
        a && (this.progress = 1);
        hdb(this, this.progress);
        this.onStop();
        this.Hs()
    };
    g.k.pause = function() {
        this.isPlaying() && (H2(this), this.j = -1, this.ao("pause"))
    };
    g.k.xa = function() {
        this.j == 0 || this.stop(!1);
        this.ao("destroy");
        I2.Tf.xa.call(this)
    };
    g.k.destroy = function() {
        this.dispose()
    };
    g.k.nO = function() {
        this.ao("animate")
    };
    g.k.ao = function(a) {
        this.dispatchEvent(new idb(a, this))
    };
    g.Za(idb, g.ub);
    g.Za(J2, I2);
    J2.prototype.C = function() {};
    J2.prototype.nO = function() {
        this.C();
        J2.Tf.nO.call(this)
    };
    J2.prototype.Hs = function() {
        this.C();
        J2.Tf.Hs.call(this)
    };
    J2.prototype.NL = function() {
        this.C();
        J2.Tf.NL.call(this)
    };
    g.Za(jdb, J2);
    jdb.prototype.C = function() {
        this.element.style.left = Math.round(this.coords[0]) + "px";
        this.element.style.top = Math.round(this.coords[1]) + "px"
    };
    g.z(mdb, g.O);
    g.k = mdb.prototype;
    g.k.listen = function(a, b, c, d) {
        c = (0, g.Wa)(c, d || this.B);
        a = g.vs(a, b, c);
        this.j.push(a);
        return a
    };
    g.k.uG = function(a, b, c, d) {
        c = (0, g.Wa)(c, d || this.B);
        a = ddb(a, b, c);
        this.j.push(a);
        return a
    };
    g.k.Lc = function(a) {
        g.ws(a);
        g.Wb(this.j, a)
    };
    g.k.removeAll = function() {
        g.ws(this.j);
        this.j.length = 0
    };
    g.k.xa = function() {
        this.removeAll();
        g.O.prototype.xa.call(this)
    };
    g.z(pdb, g.WX);
    g.k = pdb.prototype;
    g.k.load = function() {
        g.WX.prototype.load.call(this);
        if (!M2(this)) {
            var a = g.aMa(this.player.getVideoData());
            a ? (a = odb(a, qdb(this)), N2(this, a, !1)) : rdb(this)
        }
    };
    g.k.unload = function() {
        N2(this, null);
        this.C && (this.C.abort(), this.C = null);
        g.WX.prototype.unload.call(this)
    };
    g.k.gi = function(a, b) {
        return M2(this) ? a === "loadCustomEndscreenRenderer" ? (a = odb(b, "new"), N2(this, a), !0) : null : null
    };
    g.k.getOptions = function() {
        return M2(this) ? ["loadCustomEndscreenRenderer"] : []
    };
    g.k.jc = function() {
        if (this.endscreen && this.endscreen.elements) {
            var a = this.player.getVideoContentRect();
            if (a && a.width !== 0 && a.height !== 0) {
                var b = this.player.getPlayerSize();
                if (b && b.width !== 0 && b.height !== 0) {
                    var c = a.width / a.height;
                    var d = 0;
                    for (var e = -1, f = 0; f < Jeb.length; f++) {
                        var h = Math.abs(b.width - Jeb[f]);
                        if (e === -1 || d >= h) e = f, d = h
                    }
                    d = Keb[e];
                    this.B && g.mm(this.B.element, "outline-width", Math.max(b.width, b.height) + "px");
                    for (b = 0; b < this.endscreen.elements.length; ++b)
                        if (f = this.endscreen.elements[b].id, e = this.j[f],
                            h = this.G[f], e && h) {
                            var l = h.width * c / h.aspectRatio,
                                m = Math.round(h.width * a.width);
                            f = Math.round(l * a.height);
                            var n = a.left + Math.round(h.left * a.width),
                                p = a.top + Math.round(h.top * a.height);
                            g.xm(e.element, m, f);
                            g.tm(e.element, n, p);
                            g.ip(e.element, Leb);
                            m > 256 || f > 256 ? g.fp(e.element, "ytp-ce-large-round") : m > 96 || f > 96 ? g.fp(e.element, "ytp-ce-medium-round") : g.fp(e.element, "ytp-ce-small-round");
                            g.ip(e.element, Meb);
                            m = h.left + h.width / 2;
                            h = h.top + l / 2;
                            g.fp(e.element, m <= .5 && h <= .5 ? "ytp-ce-top-left-quad" : m > .5 && h <= .5 ? "ytp-ce-top-right-quad" :
                                m <= .5 && h > .5 ? "ytp-ce-bottom-left-quad" : "ytp-ce-bottom-right-quad");
                            g.ip(e.element, Keb);
                            g.fp(e.element, d);
                            (e = g.fe(document, "div", "ytp-ce-expanding-overlay-body", e.element)[0]) && g.mm(e, "height", f + "px")
                        }
                }
            }
        }
    };
    g.k.onCueRangeEnter = function(a) {
        if (this.endscreen)
            if (a.getId() === "ytp-ce-in-endscreen") R2(this, this.endscreen.impressionUrls), (a = g.yw()) && this.endscreen.visualElement && g.$w(a, this.endscreen.visualElement);
            else {
                a = a.getId().substring(15);
                var b = this.j[a],
                    c = this.G[a];
                g.fp(b.element, "ytp-ce-element-show");
                b.element.removeAttribute("aria-hidden");
                b = this.player.getRootNode();
                g.fp(b, "ytp-ce-shown");
                R2(this, c.impressionUrls);
                (b = g.yw()) && g.$w(b, c.visualElement);
                this.player.U().N && this.player.ib("endscreenelementshown",
                    a)
            }
    };
    g.k.onCueRangeExit = function(a) {
        if (a.getId() !== "ytp-ce-in-endscreen") {
            a = a.getId().substring(15);
            var b = this.j[a];
            g.hp(b.element, "ytp-ce-element-show");
            b.element.setAttribute("aria-hidden", "true");
            b = this.player.getRootNode();
            g.hp(b, "ytp-ce-shown");
            this.player.U().N && this.player.ib("endscreenelementhidden", a)
        }
    };
    g.k.kda = function(a) {
        var b = this;
        a.target === window && (new g.Yo(function() {
            for (var c = g.w(Object.values(b.j)), d = c.next(); !d.done; d = c.next()) g.ip(d.value.element, ["ytp-ce-force-expand", "ytp-ce-element-hover", "ytp-ce-element-shadow-show"])
        }, 0)).start()
    };
    var Jeb = [346, 426, 470, 506, 570, 640, 853, 1280, 1920],
        Keb = "ytp-ce-size-346 ytp-ce-size-426 ytp-ce-size-470 ytp-ce-size-506 ytp-ce-size-570 ytp-ce-size-640 ytp-ce-size-853 ytp-ce-size-1280 ytp-ce-size-1920".split(" "),
        Meb = ["ytp-ce-top-left-quad", "ytp-ce-top-right-quad", "ytp-ce-bottom-left-quad", "ytp-ce-bottom-right-quad"],
        Leb = ["ytp-ce-small-round", "ytp-ce-medium-round", "ytp-ce-large-round"];
    var Edb = {
        Dha: "current",
        hka: "new"
    };
    var Gdb = {
            CLOSE: "close",
            mka: "openUrl",
            SUBSCRIBE: "subscribe"
        },
        Hdb = {
            mha: "click",
            CLOSE: "close",
            Eia: "hidden",
            Yka: "rollOut",
            Zka: "rollOver",
            mla: "shown"
        };
    Jdb.prototype.Ce = function() {
        var a = Kdb(this, function(b) {
            return b.type === "openUrl" && b.url != null
        });
        return a ? a.url : null
    };
    var Geb = {
            xga: "anchored",
            F4: "branding",
            CHANNEL: "channel",
            Cha: "cta",
            Hia: "highlightText",
            vja: "label",
            PLAYLIST: "playlist",
            POPUP: "popup",
            wla: "speech",
            SUBSCRIBE: "subscribe",
            Hla: "title",
            VIDEO: "video",
            pma: "website"
        },
        Feb = {
            F4: "branding",
            Zga: "card",
            Oha: "drawer",
            Gia: "highlight",
            Lja: "marker",
            Hka: "promotion",
            TEXT: "text",
            Sma: "widget"
        };
    g.z(Y2, g.O);
    g.k = Y2.prototype;
    g.k.addCueRange = function(a, b, c, d, e) {
        a = new g.$C(a, b, {
            id: c,
            namespace: "annotations_module"
        });
        d && this.Va.set(a, d);
        e && this.Xa.set(a, e);
        this.context.J.kf([a], 1)
    };
    g.k.VH = function() {
        this.context.B.subscribe("resize", this.tJ, this)
    };
    g.k.Jb = function() {
        return this.element
    };
    g.k.oO = function(a, b, c, d, e, f) {
        if (this.qb) return !1;
        f && (f.stopPropagation(), f.preventDefault());
        this.navigate(a, c, d, e);
        return !1
    };
    g.k.show = function() {};
    g.k.hide = function() {};
    g.k.destroy = function() {
        g.se(this.Jb())
    };
    g.k.tJ = function() {};
    g.k.navigate = function(a, b, c, d) {
        var e = this,
            f = T2(a);
        if (f) {
            var h = Rdb(f, a.target),
                l = function() {
                    a.j && e.context.J.pauseVideo();
                    var m = e.context.videoData.Jf || !1,
                        n = g.cr(f || "");
                    m && n && (n.v || n.list) ? e.context.J.Ep(n.v, b, n.list, !1) : g.Ny(f || "", h === "current" ? "_top" : void 0, b)
                };
            h === "new" && (l(), l = null);
            j3(this.context.logger, c, l, d);
            Qdb(f) || (c = g.yw(), d = b.itct, c && d && g.cx(c, g.vw(d)))
        }
    };
    g.k.xa = function() {
        this.Va.clear();
        this.Xa.clear();
        g.O.prototype.xa.call(this)
    };
    g.k.createElement = function(a) {
        a = new g.T(a);
        g.P(this, a);
        return a.element
    };
    g.z(Tdb, Y2);
    g.k = Tdb.prototype;
    g.k.pu = function() {
        this.qa && c3(this, this.qa)
    };
    g.k.isAvailable = function() {
        var a;
        if (a = !!this.cards.length)(a = this.J.getRootNode()) ? (a = g.ym(a), a = 173 < a.width && 173 < a.height) : a = !1;
        return a
    };
    g.k.tJ = function() {
        var a = this.isAvailable();
        g.zm(this.Jb(), a);
        g.jp(this.context.J.getRootNode(), g.F_.IV_DRAWER_ENABLED, a);
        D2(this.J)
    };
    g.k.destroy = function() {
        this.J.xC(!1);
        try {
            this.J.getRootNode().removeChild(this.D)
        } catch (a) {}
        g.iv(this.oa);
        g.Cs(this.Qa);
        this.Ua && this.Ua.dispose();
        this.G && this.G.dispose();
        Y2.prototype.destroy.call(this)
    };
    g.k.fJ = function() {
        var a = this,
            b = g.ie("iv-drawer-close-button", this.D);
        this.context.j.listen(b, "click", this.Z7, this);
        this.context.j.listen(this.B, "touchend", function() {
            a.Da.start()
        });
        this.context.j.listen(this.B, "scroll", this.w8, this);
        this.context.B.subscribe("onHideControls", function() {
            a.Ma = !0
        });
        this.context.B.subscribe("onShowControls", function() {
            a.Ma = !1
        });
        this.context.B.subscribe("onVideoAreaChange", function() {
            a.Ma = g.ep(a.J.getRootNode(), "ytp-autohide")
        });
        this.oa.push(g.hv("iv-button-shown", this.Z$, this));
        this.oa.push(g.hv("iv-button-hidden", this.Y$, this));
        $db(this)
    };
    g.k.findLastIndex = function(a) {
        if (this.cards.length === 0) return 0;
        var b = g.Tb(this.cards, function(c) {
            return a.zf.startMs > c.zf.startMs || a.zf.startMs === c.zf.startMs && a.zf.timestamp >= c.zf.timestamp ? !0 : !1
        });
        return b === -1 ? 0 : b + 1
    };
    g.k.Z7 = function() {
        if (this.C) {
            j3(this.context.logger, g3(this).vj.close);
            var a = g.yw();
            a && this.N && g.cx(a, this.N);
            b3(this)
        }
    };
    g.k.w8 = function() {
        g.jp(this.D, "iv-drawer-scrolled", this.B.scrollTop > 0)
    };
    g.k.Z$ = function() {
        var a = g.yw(),
            b = g3(this);
        b = b ? b.Gf : this.Gf;
        a && b && g.ax(a, [b])
    };
    g.k.Y$ = function() {
        var a = g.yw(),
            b = g3(this);
        b = b ? b.Gf : this.Gf;
        a && b && g.bx(a, [b])
    };
    g.k.Y6 = function() {
        var a = g3(this);
        j3(this.context.logger, a.vj.n3);
        var b = g.yw();
        if (b && a)
            if (this.J.L("web_infocards_teaser_show_logging_fix")) {
                var c = [];
                a.dk && c.push(a.dk);
                a.Gf && c.push(a.Gf);
                c.length > 0 && g.ax(b, c)
            } else g.ax(b, [a.dk, a.Gf])
    };
    g.k.aaa = function() {
        var a = g.yw(),
            b = g3(this);
        a && b && g.bx(a, [b.dk])
    };
    g.k.X6 = function(a) {
        var b = g3(this),
            c = g.yw();
        this.j ? a ? (a = this.context.logger, j3(a, b.vj.hN), a.J.sendVideoStatsEngageEvent(4, void 0), c && b.dk && g.cx(c, b.dk)) : (a = this.context.logger, j3(a, b.vj.hN), a.J.sendVideoStatsEngageEvent(4, void 0), c && b.Gf && g.cx(c, b.Gf)) : (a = this.context.logger, j3(a, b.vj.hN), a.J.sendVideoStatsEngageEvent(4, void 0), c && this.Gf && g.cx(c, this.Gf))
    };
    g.z(h3, Y2);
    h3.prototype.VH = function() {
        Y2.prototype.VH.call(this);
        geb(this)
    };
    h3.prototype.show = function() {
        Y2.prototype.show.call(this);
        var a = g.yw(),
            b = this.annotation.data;
        a && b && (b = b.session_data) && g.ax(a, [g.vw(b.itct)])
    };
    h3.prototype.hide = function() {
        Y2.prototype.hide.call(this);
        var a = g.yw(),
            b = this.annotation.data;
        a && b && (b = b.session_data) && g.bx(a, [g.vw(b.itct)])
    };
    g.z(i3, h3);
    i3.prototype.Xy = function() {
        g.fp(this.Jb(), "iv-branding");
        var a = this.annotation.data;
        this.B = this.createElement({
            I: "img",
            La: ["branding-img", "iv-click-target"],
            X: {
                "aria-label": "Channel watermark",
                src: a.image_url,
                width: a.image_width,
                height: a.image_height
            }
        });
        g.zm(this.B, !1);
        var b = this.createElement({
            I: "button",
            La: ["branding-img-container", "ytp-button"]
        });
        b.appendChild(this.B);
        this.Jb().appendChild(b);
        var c = this.annotation.Ce();
        c && Z2(this, b, c, this.annotation.id, a.session_data);
        this.context.J.L("disable_branding_context") || keb(this,
            a)
    };
    i3.prototype.show = function() {
        if (!this.isActive && (h3.prototype.show.call(this), this.N || (this.Xy(), this.N = !0), g.zm(this.Jb(), !0), this.isActive = !0, this.B)) {
            try {
                heb(this, this.B)
            } catch (a) {}
            g.fp(this.context.J.getRootNode(), "ytp-branding-shown")
        }
    };
    i3.prototype.hide = function() {
        this.isActive && (h3.prototype.hide.call(this), g.zm(this.Jb(), !1), this.isActive = !1, g.hp(this.context.J.getRootNode(), "ytp-branding-shown"))
    };
    i3.prototype.destroy = function() {
        this.j && (this.j.dispose(), this.j = null);
        h3.prototype.destroy.call(this)
    };
    g.z(meb, h3);
    g.k = meb.prototype;
    g.k.Xy = function() {
        var a = this,
            b = this.annotation.data;
        if (this.annotation.style === "cta") var c = 6;
        else if (this.annotation.style === "video" || this.annotation.style === "playlist") c = 7;
        this.K = b.collapsedelay_ms || this.K;
        var d = ["iv-promo", "iv-promo-inactive"];
        this.Jb().setAttribute("aria-hidden", "true");
        this.Jb().setAttribute("aria-label", "Promotion");
        this.Jb().tabIndex = 0;
        var e = this.annotation.Ce(),
            f = b.image_url;
        if (f) {
            var h = this.createElement({
                I: "div",
                La: ["iv-promo-img", "iv-click-target"]
            });
            f = this.createElement({
                I: "img",
                X: {
                    src: f,
                    "aria-hidden": "true"
                }
            });
            h.appendChild(f);
            b.video_duration && !b.is_live ? (f = this.createElement({
                I: "span",
                S: "iv-promo-video-duration",
                va: b.video_duration
            }), h.appendChild(f)) : b.playlist_length && (f = this.createElement({
                I: "span",
                S: "iv-promo-playlist-length",
                va: b.playlist_length.toString()
            }), h.appendChild(f));
            e && Z2(this, h, e, this.annotation.id, b.session_data, void 0, c)
        }
        e ? (f = this.createElement({
            I: "a",
            S: "iv-promo-txt"
        }), g.Od(f, T2(e)), this.j = f) : this.j = this.createElement({
            I: "div",
            S: "iv-promo-txt"
        });
        switch (this.annotation.style) {
            case "cta":
            case "website":
                var l =
                    this.createElement({
                        I: "p",
                        V: [{
                            I: "strong",
                            va: b.text_line_1
                        }]
                    });
                var m = this.createElement({
                    I: "p",
                    V: [{
                        I: "span",
                        S: "iv-promo-link",
                        va: b.text_line_2
                    }]
                });
                if (f = b.text_line_3) {
                    d.push("iv-promo-website-card-cta-redesign");
                    var n = this.createElement({
                        I: "button",
                        La: ["iv-promo-round-expand-icon", "ytp-button"]
                    });
                    f = this.createElement({
                        I: "button",
                        La: ["iv-button", "iv-promo-button"],
                        V: [{
                            I: "span",
                            S: "iv-button-content",
                            va: f
                        }]
                    });
                    var p = this.createElement({
                        I: "div",
                        S: "iv-promo-button-container"
                    });
                    p.appendChild(f);
                    e && Z2(this,
                        this.Jb(), e, this.annotation.id, b.session_data, void 0, c)
                }
                g.fp(this.j, "iv-click-target");
                e && Z2(this, this.j, e, this.annotation.id, b.session_data, void 0, c);
                break;
            case "playlist":
            case "video":
                l = this.createElement({
                    I: "p",
                    V: [{
                        I: "span",
                        va: b.text_line_1
                    }]
                }), m = this.createElement({
                    I: "p",
                    V: [{
                        I: "strong",
                        va: b.text_line_2
                    }]
                }), b.is_live && (l = m, m = this.createElement({
                    I: "span",
                    La: ["yt-badge", "iv-promo-badge-live"],
                    va: "LIVE NOW"
                })), g.fp(this.j, "iv-click-target"), e && Z2(this, this.j, e, this.annotation.id, b.session_data, void 0,
                    c), d.push("iv-promo-video")
        }
        l && this.j.appendChild(l);
        m && this.j.appendChild(m);
        this.N.appendChild(this.j);
        p && this.N.appendChild(p);
        c = this.createElement({
            I: "div",
            S: "iv-promo-actions"
        });
        this.B = this.createElement({
            I: "button",
            La: ["iv-promo-expand", "ytp-button"]
        });
        this.B.title = "Expand";
        this.context.j.listen(this.B, "click", function(q) {
            peb(a, 5E3, q)
        });
        c.appendChild(this.B);
        g.zm(this.B, !1);
        this.context.j.listen(this.Jb(), "mouseover", this.Y9, this);
        this.context.j.listen(this.Jb(), "mouseout", this.X9, this);
        this.context.j.listen(this.Jb(), "touchend", function(q) {
            peb(a, 5E3, q)
        });
        this.C = this.createElement({
            I: "button",
            La: ["iv-promo-close", "ytp-button"]
        });
        this.C.title = "Close";
        this.context.j.listen(this.C, "click", this.annotation.style === "cta" && b.text_line_3 ? this.T9 : this.S9, this);
        c.appendChild(this.C);
        g.gp(this.Jb(), d);
        h && (g.pe(this.Jb(), h), n && h.appendChild(n));
        g.pe(this.Jb(), this.N);
        g.pe(this.Jb(), c)
    };
    g.k.show = function() {
        this.isActive || (h3.prototype.show.call(this), this.Y || (this.Xy(), this.Y = !0), g.zm(this.Jb(), !0), g.Re(function() {
            g.hp(this.Jb(), "iv-promo-inactive")
        }, 100, this), this.Jb().removeAttribute("aria-hidden"), this.isActive = !0, reb(this), neb(this), oeb(this, this.K))
    };
    g.k.hide = function() {
        this.isActive && (g.fp(this.Jb(), "iv-promo-inactive"), this.isActive = !1, this.Jb().setAttribute("aria-hidden", "true"))
    };
    g.k.oO = function(a, b, c, d, e, f) {
        return this.isCollapsed ? !1 : h3.prototype.oO.call(this, a, b, c, d, e, f)
    };
    g.k.Y9 = function(a) {
        this.Z = !0;
        peb(this, 500, a)
    };
    g.k.X9 = function() {
        this.Z = !1;
        qeb(this)
    };
    g.k.S9 = function(a) {
        a.stopPropagation();
        this.hide()
    };
    g.k.T9 = function(a) {
        a.stopPropagation();
        reb(this);
        this.isCollapsed = !0;
        g.fp(this.Jb(), "iv-promo-collapsed-no-delay");
        this.G.start()
    };
    g.k.destroy = function() {
        this.G.dispose();
        h3.prototype.destroy.call(this)
    };
    g.z(teb, g.WX);
    g.k = teb.prototype;
    g.k.gi = function(a, b) {
        if (!Ieb(this.player.U().playerStyle)) return null;
        switch (a) {
            case "loadCustomAnnotationsXml":
                return (a = g.d1(b)) && yeb(this, a), !0;
            case "removeCustomAnnotationById":
                return b && this.j && (Xdb(this.j, b), D2(this.player)), !0
        }
        return null
    };
    g.k.getOptions = function() {
        return Ieb(this.player.U().playerStyle) ? ["loadCustomAnnotationsXml", "removeCustomAnnotationById"] : []
    };
    g.k.Dv = function() {
        var a = this.player.U(),
            b = this.player.getVideoData(),
            c = a.annotationsLoadPolicy || b.annotationsLoadPolicy;
        return g.aR(b) || g.oR(this.player.app) ? !1 : c === 1 && !b.S1 || a.Ma.get(b.videoId) || g.OQ(b) || g.PQ(b) ? !0 : !1
    };
    g.k.WL = function() {
        if (this.C) {
            var a = this.player.ob().getVideoContentRect(!0);
            g.xm(this.C.element, a.width, a.height);
            g.tm(this.C.element, a.left, a.top)
        }
        if (this.j) {
            var b = this.player.Fo();
            a = this.j;
            b = b.width;
            g.jp(a.D, "iv-drawer-small", b <= 426);
            g.jp(a.D, "iv-drawer-big", b >= 1280)
        }
    };
    g.k.Z6 = function(a) {
        veb(this, a.state);
        g.Z(a.state, 2) && (this.El() && this.Tp() && this.player.getPresentingPlayerType() !== 2 && this.yC(!1), this.xC(!1))
    };
    g.k.load = function() {
        function a(h) {
            var l = b.loadNumber;
            b.G = null;
            b.loaded && b.loadNumber === l && b.player.getVideoData().videoId === d && (h = g.mr(h) && h.responseXML ? h.responseXML : null) && (yeb(b, h), g.fp(b.player.getRootNode(), "iv-module-loaded"))
        }
        var b = this;
        g.WX.prototype.load.call(this);
        veb(this, this.player.getPlayerStateObject());
        this.loadNumber++;
        var c = this.player.getVideoData(),
            d = c.videoId;
        g.at() && (a = zeb(this, a));
        var e = {
            format: "XML",
            onFinish: a,
            onError: function() {
                b.G = null
            },
            urlParams: {}
        };
        c.isPharma && (e.urlParams.pharma = "1");
        e.method = "POST";
        e.withCredentials = !0;
        var f = this.player.U().Ma.get(d);
        f && Aeb(e, f);
        f = f && (f.aP || f.yJ);
        if (!c.ew || f) c.Va ? web(this, c.Va, e) : (this.N = function() {
            if (!b.Z) b.onVideoDataChange(e);
            var h = b.player.getVideoData();
            (h == null ? 0 : g.NQ(h)) && !b.oa && Eeb(b, h)
        }, this.player.addEventListener("videodatachange", this.N));
        g.GR(this.player, this.C.element, 4);
        this.WL();
        (f = g.OQ(c)) && Deb(this, f);
        (f = g.PQ(c)) && f.featuredChannel && Heb(this, f.featuredChannel, f.annotationId || "branding", c.videoId || null, c.eventId || null);
        this.fh = g.ie("ytp-cards-button", this.player.getRootNode());
        g.NQ(c) && Eeb(this, c)
    };
    g.k.onVideoDataChange = function(a) {
        var b = this.player.getVideoData();
        b.Va && web(this, b.Va, a)
    };
    g.k.unload = function() {
        this.player.rf("annotations_module");
        for (var a = g.w(Object.keys(this.K)), b = a.next(); !b.done; b = a.next()) this.K[b.value].destroy();
        this.Y = null;
        this.j && (this.j.destroy(), this.j = null, D2(this.player));
        this.Z = !1;
        this.G && (this.G.abort(), this.G = null);
        this.oa = !1;
        this.K = {};
        this.B.hide();
        g.WX.prototype.unload.call(this);
        this.C.detach();
        this.N && (this.player.removeEventListener("videodatachange", this.N), this.N = null)
    };
    g.k.Z0 = function(a) {
        a === this.player.getVideoData().videoId && (this.loaded ? Beb(this) : this.load())
    };
    g.k.El = function() {
        var a;
        return ((a = this.j) == null ? void 0 : a.isAvailable()) || this.oa
    };
    g.k.Tp = function() {
        return !!this.j && this.j.C
    };
    g.k.yC = function(a, b, c) {
        b = b === void 0 ? !1 : b;
        this.El();
        this.j && (a ? c ? a3(this.j, c, b) : a3(this.j, "YOUTUBE_DRAWER_AUTO_OPEN", b) : b3(this.j))
    };
    g.k.xC = function(a, b) {
        this.player.publish(a ? "cardsteasershow" : "cardsteaserhide", b)
    };
    g.k.xa = function() {
        this.player.U().Ma.unsubscribe("vast_info_card_add", this.Z0, this);
        g.hp(this.player.getRootNode(), g.F_.IV_DRAWER_OPEN);
        for (var a = this.qa, b = g.Ro, c = 0, d = a.length; c < d; c++) b.qk(a[c]);
        this.qa.length = 0;
        g.WX.prototype.xa.call(this)
    };
    g.k.createElement = function(a) {
        a = new g.T(a);
        g.P(this, a);
        return a.element
    };
    g.VX("annotations_module", teb);
    g.VX("creatorendscreen", pdb);
})(_yt_player);