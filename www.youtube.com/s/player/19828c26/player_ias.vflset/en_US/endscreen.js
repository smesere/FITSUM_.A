(function(g) {
    var window = this;
    'use strict';
    var zjb = function(a, b) {
            a.ib("onAutonavCoundownStarted", b)
        },
        j5 = function(a, b, c) {
            g.jp(a.element, "ytp-suggestion-set", !!b.videoId);
            var d = b.playlistId;
            c = b.jh(c ? c : "mqdefault.jpg");
            var e = null,
                f = null;
            b instanceof g.DP && (b.lengthText ? (e = b.lengthText || null, f = b.Zx || null) : b.lengthSeconds && (e = g.yy(b.lengthSeconds), f = g.yy(b.lengthSeconds, !0)));
            var h = !!d;
            d = h && g.BP(d).type === "RD";
            var l = b instanceof g.DP ? b.isLivePlayback : null,
                m = b instanceof g.DP ? b.isUpcoming : null,
                n = b.author,
                p = b.shortViewCount,
                q = b.publishedTimeText,
                r = [],
                t = [];
            n && r.push(n);
            p && (r.push(p), t.push(p));
            q && t.push(q);
            c = {
                title: b.title,
                author: n,
                author_and_views: r.join(" \u2022 "),
                aria_label: b.ariaLabel ||
                    g.mD("Watch $TITLE", {
                        TITLE: b.title
                    }),
                duration: e,
                timestamp: f,
                url: b.Nl(),
                is_live: l,
                is_upcoming: m,
                is_list: h,
                is_mix: d,
                background: c ? "background-image: url(" + c + ")" : "",
                views_and_publish_time: t.join(" \u2022 "),
                autoplayAlternativeHeader: b.It
            };
            b instanceof g.CP && (c.playlist_length = b.playlistLength);
            a.update(c)
        },
        k5 = function(a) {
            var b = a.U(),
                c = b.D;
            g.T.call(this, {
                I: "a",
                S: "ytp-autonav-suggestion-card",
                X: {
                    href: "{{url}}",
                    target: c ? b.Y : "",
                    "aria-label": "{{aria_label}}",
                    "data-is-live": "{{is_live}}",
                    "data-is-list": "{{is_list}}",
                    "data-is-mix": "{{is_mix}}",
                    "data-is-upcoming": "{{is_upcoming}}"
                },
                V: [{
                    I: "div",
                    La: ["ytp-autonav-endscreen-upnext-thumbnail", "ytp-autonav-thumbnail-small"],
                    X: {
                        style: "{{background}}"
                    },
                    V: [{
                        I: "div",
                        X: {
                            "aria-label": "{{timestamp}}"
                        },
                        La: ["ytp-autonav-timestamp"],
                        va: "{{duration}}"
                    }, {
                        I: "div",
                        La: ["ytp-autonav-live-stamp"],
                        va: "Live"
                    }, {
                        I: "div",
                        La: ["ytp-autonav-upcoming-stamp"],
                        va: "Upcoming"
                    }, {
                        I: "div",
                        S: "ytp-autonav-list-overlay",
                        V: [{
                            I: "div",
                            S: "ytp-autonav-mix-text",
                            va: "Mix"
                        }, {
                            I: "div",
                            S: "ytp-autonav-mix-icon"
                        }]
                    }]
                }, {
                    I: "div",
                    La: ["ytp-autonav-endscreen-upnext-title", "ytp-autonav-title-card"],
                    va: "{{title}}"
                }, {
                    I: "div",
                    La: ["ytp-autonav-endscreen-upnext-author", "ytp-autonav-author-card"],
                    va: "{{author}}"
                }, {
                    I: "div",
                    La: ["ytp-autonav-endscreen-upnext-author", "ytp-autonav-view-and-date-card"],
                    va: "{{views_and_publish_time}}"
                }]
            });
            this.J = a;
            this.suggestion =
                null;
            this.j = c;
            this.listen("click", this.onClick);
            this.listen("keypress", this.onKeyPress)
        },
        l5 = function(a, b) {
            b = b === void 0 ? !1 : b;
            g.T.call(this, {
                I: "div",
                S: "ytp-autonav-endscreen-countdown-overlay"
            });
            var c = this;
            this.K = b;
            this.cancelCommand = this.G = void 0;
            this.C = 0;
            this.container = new g.T({
                I: "div",
                S: "ytp-autonav-endscreen-countdown-container"
            });
            g.P(this, this.container);
            this.container.Ia(this.element);
            b = a.U();
            var d = b.D;
            this.J = a;
            this.suggestion = null;
            this.onVideoDataChange("newdata", this.J.getVideoData());
            this.T(a, "videodatachange", this.onVideoDataChange);
            this.j = new g.T({
                I: "div",
                S: "ytp-autonav-endscreen-upnext-container",
                X: {
                    "aria-label": "{{aria_label}}",
                    "data-is-live": "{{is_live}}",
                    "data-is-list": "{{is_list}}",
                    "data-is-mix": "{{is_mix}}",
                    "data-is-upcoming": "{{is_upcoming}}"
                },
                V: [{
                    I: "div",
                    S: "ytp-autonav-endscreen-upnext-header"
                }, {
                    I: "div",
                    S: "ytp-autonav-endscreen-upnext-alternative-header",
                    va: "{{autoplayAlternativeHeader}}"
                }, {
                    I: "a",
                    S: "ytp-autonav-endscreen-link-container",
                    X: {
                        href: "{{url}}",
                        target: d ? b.Y : ""
                    },
                    V: [{
                        I: "div",
                        S: "ytp-autonav-endscreen-upnext-thumbnail",
                        X: {
                            style: "{{background}}"
                        },
                        V: [{
                            I: "div",
                            X: {
                                "aria-label": "{{timestamp}}"
                            },
                            La: ["ytp-autonav-timestamp"],
                            va: "{{duration}}"
                        }, {
                            I: "div",
                            La: ["ytp-autonav-live-stamp"],
                            va: "Live"
                        }, {
                            I: "div",
                            La: ["ytp-autonav-upcoming-stamp"],
                            va: "Upcoming"
                        }]
                    }, {
                        I: "div",
                        S: "ytp-autonav-endscreen-video-info",
                        V: [{
                            I: "div",
                            S: "ytp-autonav-endscreen-premium-badge"
                        }, {
                            I: "div",
                            S: "ytp-autonav-endscreen-upnext-title",
                            va: "{{title}}"
                        }, {
                            I: "div",
                            S: "ytp-autonav-endscreen-upnext-author",
                            va: "{{author}}"
                        }, {
                            I: "div",
                            S: "ytp-autonav-view-and-date",
                            va: "{{views_and_publish_time}}"
                        }, {
                            I: "div",
                            S: "ytp-autonav-author-and-view",
                            va: "{{author_and_views}}"
                        }]
                    }]
                }]
            });
            g.P(this, this.j);
            this.j.Ia(this.container.element);
            d || this.T(this.j.Ea("ytp-autonav-endscreen-link-container"), "click", this.sV);
            this.J.createClientVe(this.container.element, this, 115127);
            this.J.createClientVe(this.j.Ea("ytp-autonav-endscreen-link-container"), this, 115128);
            this.overlay = new g.T({
                I: "div",
                S: "ytp-autonav-overlay"
            });
            g.P(this, this.overlay);
            this.overlay.Ia(this.container.element);
            this.B = new g.T({
                I: "div",
                S: "ytp-autonav-endscreen-button-container"
            });
            g.P(this, this.B);
            this.B.Ia(this.container.element);
            this.cancelButton = new g.T({
                I: "button",
                La: ["ytp-autonav-endscreen-upnext-button", "ytp-autonav-endscreen-upnext-cancel-button", b.L("web_modern_buttons") ? "ytp-autonav-endscreen-upnext-button-rounded" : ""],
                X: {
                    "aria-label": "Cancel autoplay"
                },
                va: "Cancel"
            });
            g.P(this, this.cancelButton);
            this.cancelButton.Ia(this.B.element);
            this.cancelButton.listen("click", this.e5, this);
            this.J.createClientVe(this.cancelButton.element, this, 115129);
            this.playButton = new g.T({
                I: "a",
                La: ["ytp-autonav-endscreen-upnext-button", "ytp-autonav-endscreen-upnext-play-button",
                    b.L("web_modern_buttons") ? "ytp-autonav-endscreen-upnext-button-rounded" : ""
                ],
                X: {
                    href: "{{url}}",
                    role: "button",
                    "aria-label": "Play next video"
                },
                va: "Play Now"
            });
            g.P(this, this.playButton);
            this.playButton.Ia(this.B.element);
            this.playButton.listen("click", this.sV, this);
            this.J.L("web_player_autonav_next_button_renderer") ? (this.J.createServerVe(this.playButton.element, this.playButton, !0), (b = this.J.getVideoData()) && Ajb(this, b)) : this.J.createClientVe(this.playButton.element, this, 115130);
            this.D = new g.Yo(function() {
                    Bjb(c)
                },
                500);
            g.P(this, this.D);
            this.rV();
            this.T(a, "autonavvisibility", this.rV);
            this.J.L("web_autonav_color_transition") && (this.T(a, "autonavchange", this.d5), this.T(a, "onAutonavCoundownStarted", this.Paa))
        },
        m5 = function(a) {
            var b = a.J.Fo(!0, a.J.isFullscreen());
            g.jp(a.container.element, "ytp-autonav-endscreen-small-mode", a.Qg(b));
            g.jp(a.container.element, "ytp-autonav-endscreen-is-premium", !!a.suggestion && !!a.suggestion.cN);
            g.jp(a.J.getRootNode(), "ytp-autonav-endscreen-cancelled-state", !a.J.Hf());
            g.jp(a.J.getRootNode(), "countdown-running", a.Ul());
            g.jp(a.container.element, "ytp-player-content", a.J.Hf());
            g.mm(a.overlay.element, {
                width: b.width + "px"
            });
            if (!a.Ul()) {
                a.J.Hf() ? Cjb(a, Math.round(Djb(a) / 1E3)) : Cjb(a);
                b = !!a.suggestion && !!a.suggestion.It;
                var c = a.J.Hf() || !b;
                g.jp(a.container.element, "ytp-autonav-endscreen-upnext-alternative-header-only", !c && b);
                g.jp(a.container.element, "ytp-autonav-endscreen-upnext-no-alternative-header", c && !b);
                g.mx(a.B, a.J.Hf());
                g.jp(a.element, "ytp-enable-w2w-color-transitions", Ejb(a))
            }
        },
        Bjb = function(a) {
            var b = Djb(a),
                c = Math,
                d = c.min;
            var e = a.C ? Date.now() - a.C : 0;
            c = d.call(c, e, b);
            Cjb(a, Math.ceil((b - c) / 1E3));
            b - c <= 500 && a.Ul() ? a.select(!0) : a.Ul() && a.D.start()
        },
        Djb = function(a) {
            if (a.J.isFullscreen()) {
                var b;
                a = (b = a.J.getVideoData()) == null ? void 0 : b.QD;
                return a === -1 || a === void 0 ? 8E3 : a
            }
            return a.J.Xt() >= 0 ? a.J.Xt() : g.jC(a.J.U().experiments, "autoplay_time") || 1E4
        },
        Ajb = function(a, b) {
            a.J.L("web_player_autonav_next_button_renderer");
            b = b.I4;
            a.G = b == null ? void 0 : b.navigationEndpoint;
            b = b == null ? void 0 : b.trackingParams;
            a.playButton && b && a.J.setTrackingParams(a.playButton.element, b)
        },
        Ejb = function(a) {
            var b;
            return !((b = a.J.getVideoData()) == null || !b.watchToWatchTransitionRenderer)
        },
        Cjb = function(a, b) {
            b = b === void 0 ? -1 : b;
            a = a.j.Ea("ytp-autonav-endscreen-upnext-header");
            g.qe(a);
            if (b >= 0) {
                b = String(b);
                var c = "Up next in $SECONDS".match(RegExp("\\$SECONDS", "gi"))[0],
                    d = "Up next in $SECONDS".indexOf(c);
                if (d >= 0) {
                    a.appendChild(g.oe("Up next in $SECONDS".slice(0, d)));
                    var e = g.ne("span");
                    g.dp(e, "ytp-autonav-endscreen-upnext-header-countdown-number");
                    g.ue(e, b);
                    a.appendChild(e);
                    a.appendChild(g.oe("Up next in $SECONDS".slice(d + c.length)));
                    return
                }
            }
            g.ue(a, "Up next")
        },
        n5 = function(a, b) {
            g.T.call(this, {
                I: "div",
                La: ["html5-endscreen", "ytp-player-content", b || "base-endscreen"]
            });
            this.created = !1;
            this.player = a
        },
        o5 = function(a) {
            g.T.call(this, {
                I: "div",
                La: ["ytp-upnext", "ytp-player-content"],
                X: {
                    "aria-label": "{{aria_label}}"
                },
                V: [{
                    I: "div",
                    S: "ytp-cued-thumbnail-overlay-image",
                    X: {
                        style: "{{background}}"
                    }
                }, {
                    I: "span",
                    S: "ytp-upnext-top",
                    V: [{
                        I: "span",
                        S: "ytp-upnext-header",
                        va: "Up Next"
                    }, {
                        I: "span",
                        S: "ytp-upnext-title",
                        va: "{{title}}"
                    }, {
                        I: "span",
                        S: "ytp-upnext-author",
                        va: "{{author}}"
                    }]
                }, {
                    I: "a",
                    S: "ytp-upnext-autoplay-icon",
                    X: {
                        role: "button",
                        href: "{{url}}",
                        "aria-label": "Play next video"
                    },
                    V: [{
                        I: "svg",
                        X: {
                            height: "100%",
                            version: "1.1",
                            viewBox: "0 0 72 72",
                            width: "100%"
                        },
                        V: [{
                            I: "circle",
                            S: "ytp-svg-autoplay-circle",
                            X: {
                                cx: "36",
                                cy: "36",
                                fill: "#fff",
                                "fill-opacity": "0.3",
                                r: "31.5"
                            }
                        }, {
                            I: "circle",
                            S: "ytp-svg-autoplay-ring",
                            X: {
                                cx: "-36",
                                cy: "36",
                                "fill-opacity": "0",
                                r: "33.5",
                                stroke: "#FFFFFF",
                                "stroke-dasharray": "211",
                                "stroke-dashoffset": "-211",
                                "stroke-width": "4",
                                transform: "rotate(-90)"
                            }
                        }, {
                            I: "path",
                            S: "ytp-svg-fill",
                            X: {
                                d: "M 24,48 41,36 24,24 V 48 z M 44,24 v 24 h 4 V 24 h -4 z"
                            }
                        }]
                    }]
                }, {
                    I: "span",
                    S: "ytp-upnext-bottom",
                    V: [{
                        I: "span",
                        S: "ytp-upnext-cancel"
                    }, {
                        I: "span",
                        S: "ytp-upnext-paused",
                        va: "Autoplay is paused"
                    }]
                }]
            });
            this.api = a;
            this.cancelButton = null;
            this.G = this.Ea("ytp-svg-autoplay-ring");
            this.C = this.notification = this.j = this.suggestion = null;
            this.D = new g.Yo(this.DJ, 5E3, this);
            this.B = 0;
            var b = this.Ea("ytp-upnext-cancel");
            this.cancelButton = new g.T({
                I: "button",
                La: ["ytp-upnext-cancel-button", "ytp-button"],
                X: {
                    tabindex: "0",
                    "aria-label": "Cancel autoplay"
                },
                va: "Cancel"
            });
            g.P(this, this.cancelButton);
            this.cancelButton.listen("click", this.f5, this);
            this.cancelButton.Ia(b);
            this.cancelButton && this.api.createClientVe(this.cancelButton.element,
                this, 115129);
            g.P(this, this.D);
            this.api.createClientVe(this.element, this, 18788);
            b = this.Ea("ytp-upnext-autoplay-icon");
            this.T(b, "click", this.g5);
            this.api.createClientVe(b, this, 115130);
            this.tV();
            this.T(a, "autonavvisibility", this.tV);
            this.T(a, "mdxnowautoplaying", this.Eba);
            this.T(a, "mdxautoplaycanceled", this.Fba);
            g.jp(this.element, "ytp-upnext-mobile", this.api.U().B)
        },
        Fjb = function(a, b) {
            if (b) return b;
            if (a.api.isFullscreen()) {
                var c;
                a = (c = a.api.getVideoData()) == null ? void 0 : c.QD;
                return a === -1 || a === void 0 ? 8E3 : a
            }
            return a.api.Xt() >= 0 ? a.api.Xt() : g.jC(a.api.U().experiments, "autoplay_time") || 1E4
        },
        Gjb = function(a, b) {
            b = Fjb(a, b);
            var c = Math,
                d = c.min;
            var e = (0, g.S)() - a.B;
            c = d.call(c, e, b);
            b = b === 0 ? 1 : Math.min(c / b, 1);
            a.G.setAttribute("stroke-dashoffset", "" + -211 * (b + 1));
            b >= 1 && a.Ul() && a.api.getPresentingPlayerType() !== 3 ? a.select(!0) : a.Ul() && a.j.start()
        },
        p5 = function(a) {
            n5.call(this, a, "autonav-endscreen");
            this.overlay = this.videoData = null;
            this.table = new g.T({
                I: "div",
                S: "ytp-suggestion-panel",
                V: [{
                    I: "div",
                    La: ["ytp-autonav-endscreen-upnext-header", "ytp-autonav-endscreen-more-videos"],
                    va: "More videos"
                }]
            });
            this.N = new g.T({
                I: "div",
                S: "ytp-suggestions-container"
            });
            this.videos = [];
            this.C = null;
            this.G = this.K = !1;
            this.B = new l5(this.player);
            g.P(this, this.B);
            this.B.Ia(this.element);
            a.getVideoData().Uf ? this.j = this.B : (this.j = new o5(a), g.GR(this.player, this.j.element, 4), g.P(this, this.j));
            this.overlay = new g.T({
                I: "div",
                S: "ytp-autonav-overlay-cancelled-state"
            });
            g.P(this, this.overlay);
            this.overlay.Ia(this.element);
            this.D = new g.AE(this);
            g.P(this, this.D);
            g.P(this, this.table);
            this.table.Ia(this.element);
            this.table.show();
            g.P(this, this.N);
            this.N.Ia(this.table.element);
            this.hide()
        },
        q5 = function(a) {
            var b = a.Hf();
            b !== a.G && (a.G = b, a.player.publish("autonavvisibility"), a.G ? (a.B !== a.j && a.B.hide(), a.table.hide()) : (a.B !== a.j && a.B.show(), a.table.show()))
        },
        r5 = function(a, b) {
            g.T.call(this, {
                I: "button",
                La: ["ytp-watch-on-youtube-button", "ytp-button"],
                va: "{{content}}"
            });
            this.J = a;
            this.buttonType = this.buttonType = b;
            this.M2();
            this.buttonType === 2 && g.fp(this.element, "ytp-continue-watching-button");
            this.listen("click", this.onClick);
            this.listen("videodatachange", this.M2);
            g.mx(this, !0)
        },
        s5 = function(a, b) {
            n5.call(this, a, "embeds-lite-endscreen");
            this.J = a;
            this.Ne = b;
            this.J.createClientVe(this.element, this, 156943);
            this.watchButton = new r5(a, 2);
            g.P(this, this.watchButton);
            this.watchButton.Ia(this.element);
            this.hide()
        },
        Hjb = function(a) {
            n5.call(this, a, "subscribecard-endscreen");
            this.j = new g.T({
                I: "div",
                S: "ytp-subscribe-card",
                V: [{
                    I: "img",
                    S: "ytp-author-image",
                    X: {
                        src: "{{profilePicture}}"
                    }
                }, {
                    I: "div",
                    S: "ytp-subscribe-card-right",
                    V: [{
                        I: "div",
                        S: "ytp-author-name",
                        va: "{{author}}"
                    }, {
                        I: "div",
                        S: "html5-subscribe-button-container"
                    }]
                }]
            });
            g.P(this, this.j);
            this.j.Ia(this.element);
            var b = a.getVideoData();
            this.subscribeButton = new g.CY("Subscribe", null, "Unsubscribe", null, !0, !1, b.qm, b.subscribed, "trailer-endscreen", null, a, !1);
            g.P(this, this.subscribeButton);
            this.subscribeButton.Ia(this.j.Ea("html5-subscribe-button-container"));
            this.T(a, "videodatachange", this.Sa);
            this.Sa();
            this.hide()
        },
        t5 = function(a) {
            var b = a.U(),
                c = g.wE || g.FO ? {
                    style: "will-change: opacity"
                } : void 0,
                d = b.D,
                e = ["ytp-videowall-still"];
            b.B && e.push("ytp-videowall-show-text");
            g.T.call(this, {
                I: "a",
                La: e,
                X: {
                    href: "{{url}}",
                    target: d ? b.Y : "",
                    "aria-label": "{{aria_label}}",
                    "data-is-live": "{{is_live}}",
                    "data-is-list": "{{is_list}}",
                    "data-is-mix": "{{is_mix}}"
                },
                V: [{
                    I: "div",
                    S: "ytp-videowall-still-image",
                    X: {
                        style: "{{background}}"
                    }
                }, {
                    I: "span",
                    S: "ytp-videowall-still-info",
                    X: {
                        "aria-hidden": "true"
                    },
                    V: [{
                        I: "span",
                        S: "ytp-videowall-still-info-bg",
                        V: [{
                            I: "span",
                            S: "ytp-videowall-still-info-content",
                            X: c,
                            V: [{
                                    I: "span",
                                    S: "ytp-videowall-still-info-title",
                                    va: "{{title}}"
                                },
                                {
                                    I: "span",
                                    S: "ytp-videowall-still-info-author",
                                    va: "{{author_and_views}}"
                                }, {
                                    I: "span",
                                    S: "ytp-videowall-still-info-live",
                                    va: "Live"
                                }, {
                                    I: "span",
                                    S: "ytp-videowall-still-info-duration",
                                    va: "{{duration}}"
                                }
                            ]
                        }]
                    }]
                }, {
                    I: "span",
                    La: ["ytp-videowall-still-listlabel-regular", "ytp-videowall-still-listlabel"],
                    X: {
                        "aria-hidden": "true"
                    },
                    V: [{
                        I: "span",
                        S: "ytp-videowall-still-listlabel-icon"
                    }, "Playlist", {
                        I: "span",
                        S: "ytp-videowall-still-listlabel-length",
                        V: [" (", {
                            I: "span",
                            va: "{{playlist_length}}"
                        }, ")"]
                    }]
                }, {
                    I: "span",
                    La: ["ytp-videowall-still-listlabel-mix",
                        "ytp-videowall-still-listlabel"
                    ],
                    X: {
                        "aria-hidden": "true"
                    },
                    V: [{
                        I: "span",
                        S: "ytp-videowall-still-listlabel-mix-icon"
                    }, "Mix", {
                        I: "span",
                        S: "ytp-videowall-still-listlabel-length",
                        va: " (50+)"
                    }]
                }]
            });
            this.suggestion = null;
            this.B = d;
            this.api = a;
            this.j = new g.AE(this);
            g.P(this, this.j);
            this.listen("click", this.onClick);
            this.listen("keypress", this.onKeyPress);
            this.j.T(a, "videodatachange", this.onVideoDataChange);
            a.createServerVe(this.element, this);
            this.onVideoDataChange()
        },
        u5 = function(a) {
            n5.call(this, a, "videowall-endscreen");
            var b = this;
            this.J = a;
            this.C = 0;
            this.stills = [];
            this.D = this.videoData = null;
            this.G = this.N = !1;
            this.Y = null;
            this.B = new g.AE(this);
            g.P(this, this.B);
            this.K = new g.Yo(function() {
                g.fp(b.element, "ytp-show-tiles")
            }, 0);
            g.P(this, this.K);
            var c = new g.T({
                I: "button",
                La: ["ytp-button", "ytp-endscreen-previous"],
                X: {
                    "aria-label": "Previous"
                },
                V: [g.tx()]
            });
            g.P(this, c);
            c.Ia(this.element);
            c.listen("click", this.l5, this);
            this.table = new g.jx({
                I: "div",
                S: "ytp-endscreen-content"
            });
            g.P(this, this.table);
            this.table.Ia(this.element);
            c = new g.T({
                I: "button",
                La: ["ytp-button", "ytp-endscreen-next"],
                X: {
                    "aria-label": "Next"
                },
                V: [g.ux()]
            });
            g.P(this, c);
            c.Ia(this.element);
            c.listen("click", this.k5, this);
            a.getVideoData().Uf ? this.j = new l5(a, !0) : this.j =
                new o5(a);
            g.P(this, this.j);
            g.GR(this.player, this.j.element, 4);
            a.createClientVe(this.element, this, 158789);
            this.hide()
        },
        v5 = function(a) {
            return g.HR(a.player) && a.CE() && !a.D
        },
        w5 = function(a) {
            var b = a.Hf();
            b !== a.N && (a.N = b, a.player.publish("autonavvisibility"))
        },
        x5 = function(a) {
            n5.call(this, a, "watch-again-on-youtube-endscreen");
            this.watchButton = new r5(a, 1);
            g.P(this, this.watchButton);
            this.watchButton.Ia(this.element);
            g.v9a(a) && (this.j = new g.f1(a), g.P(this, this.j), this.B = new g.T({
                I: "div",
                La: ["ytp-watch-again-on-youtube-endscreen-more-videos-container"],
                X: {
                    tabIndex: "-1"
                },
                V: [this.j]
            }), g.P(this, this.B), this.j.Ia(this.B.element), this.B.Ia(this.element));
            a.createClientVe(this.element, this, 156914);
            this.hide()
        },
        Ljb = function(a) {
            g.WX.call(this, a);
            var b = this;
            this.endScreen = null;
            this.B = this.j = this.C = this.D = !1;
            this.listeners = new g.AE(this);
            g.P(this, this.listeners);
            var c = a.U(),
                d = a.getVideoData();
            d = d && d.limitedPlaybackDurationInSeconds !== 0;
            g.is(g.QO(c)) && d && !g.CR(a) ? (this.B = !0, this.endScreen = new s5(a, g.nR(a))) : a.fd() ? this.endScreen = new x5(a) : Ijb(a) ? (this.D = !0, Jjb(this), this.j ? this.endScreen = new p5(a) : this.endScreen = new u5(a)) : c.Eh ? this.endScreen = new Hjb(a) : this.endScreen = new n5(a);
            g.P(this, this.endScreen);
            g.GR(a, this.endScreen.element, 4);
            Kjb(this);
            this.listeners.T(a, "videodatachange", this.onVideoDataChange, this);
            this.listeners.T(a, g.bD("endscreen"), function(e) {
                b.onCueRangeEnter(e)
            });
            this.listeners.T(a, g.cD("endscreen"), function(e) {
                b.onCueRangeExit(e)
            })
        },
        Jjb = function(a) {
            var b = a.player.getVideoData();
            if (!b || a.j === b.tm && a.C === b.Uf) return !1;
            a.j = b.tm;
            a.C = b.Uf;
            return !0
        },
        Ijb = function(a) {
            a = a.U();
            return a.Bd && !a.Eh
        },
        Kjb = function(a) {
            a.player.rf("endscreen");
            var b = a.player.getVideoData();
            b = new g.$C(Math.max((b.lengthSeconds - 10) * 1E3, 0), 0x8000000000000, {
                id: "preload",
                namespace: "endscreen"
            });
            var c = new g.$C(0x8000000000000, 0x8000000000000, {
                id: "load",
                priority: 8,
                namespace: "endscreen"
            });
            a.player.kf([b, c])
        };
    g.yR.prototype.Xt = g.da(14, function() {
        return this.app.Xt()
    });
    g.I_.prototype.Xt = g.da(13, function() {
        return this.getVideoData().gL
    });
    g.uR.prototype.Ss = g.da(12, function(a) {
        this.Mi().Ss(a)
    });
    g.RY.prototype.Ss = g.da(11, function(a) {
        this.j !== a && (this.j = a, this.Sa())
    });
    g.XZ.prototype.Ss = g.da(10, function(a) {
        this.overflowButton && this.overflowButton.Ss(a)
    });
    g.uR.prototype.Ts = g.da(9, function(a) {
        this.Mi().Ts(a)
    });
    g.WY.prototype.Ts = g.da(8, function(a) {
        this.j !== a && (this.j = a, this.Sa())
    });
    g.XZ.prototype.Ts = g.da(7, function(a) {
        this.shareButton && this.shareButton.Ts(a)
    });
    g.uR.prototype.BC = g.da(6, function(a) {
        this.Mi().BC(a)
    });
    g.vY.prototype.BC = g.da(5, function(a) {
        this.aT !== a && (this.aT = a, this.wr())
    });
    g.uR.prototype.AC = g.da(4, function(a) {
        this.Mi().AC(a)
    });
    g.XZ.prototype.AC = g.da(3, function(a) {
        this.ZS !== a && (this.ZS = a, this.vr())
    });
    g.z(k5, g.T);
    k5.prototype.select = function() {
        this.J.Ep(this.suggestion.videoId, this.suggestion.sessionData, this.suggestion.playlistId, void 0, void 0, this.suggestion.hF || void 0) && this.J.logClick(this.element)
    };
    k5.prototype.onClick = function(a) {
        g.AS(a, this.J, this.j, this.suggestion.sessionData || void 0) && this.select()
    };
    k5.prototype.onKeyPress = function(a) {
        switch (a.keyCode) {
            case 13:
            case 32:
                a.defaultPrevented || (this.select(), a.preventDefault())
        }
    };
    g.z(l5, g.T);
    g.k = l5.prototype;
    g.k.GI = function(a) {
        this.suggestion !== a && (this.suggestion = a, j5(this.j, a), this.playButton.updateValue("url", this.suggestion.Nl()), m5(this))
    };
    g.k.Ul = function() {
        return this.C > 0
    };
    g.k.KC = function() {
        this.Ul() || (this.C = Date.now(), Bjb(this), zjb(this.J, Djb(this)), g.jp(this.J.getRootNode(), "countdown-running", this.Ul()))
    };
    g.k.Ky = function() {
        this.gr();
        Bjb(this);
        var a = this.j.Ea("ytp-autonav-endscreen-upnext-header");
        a && g.ue(a, "Up next")
    };
    g.k.gr = function() {
        this.Ul() && (this.D.stop(), this.C = 0)
    };
    g.k.select = function(a) {
        this.J.nextVideo(!1, a === void 0 ? !1 : a);
        this.gr()
    };
    g.k.sV = function(a) {
        g.AS(a, this.J) && (a.currentTarget === this.playButton.element ? this.J.logClick(this.playButton.element) : a.currentTarget === this.j.Ea("ytp-autonav-endscreen-link-container") && (a = this.j.Ea("ytp-autonav-endscreen-link-container"), this.J.logVisibility(a, !0), this.J.logClick(a)), this.J.L("web_player_autonav_next_button_renderer") && this.G ? (this.J.ib("innertubeCommand", this.G), this.gr()) : this.select())
    };
    g.k.e5 = function() {
        this.J.logClick(this.cancelButton.element);
        g.AR(this.J, !0);
        this.cancelCommand && this.J.ib("innertubeCommand", this.cancelCommand)
    };
    g.k.onVideoDataChange = function(a, b) {
        this.J.L("web_player_autonav_next_button_renderer") && Ajb(this, b);
        var c;
        this.cancelCommand = (c = b.E4) == null ? void 0 : c.command
    };
    g.k.Paa = function(a) {
        if (Ejb(this)) {
            var b = this.J.getVideoData().watchToWatchTransitionRenderer,
                c = b == null ? void 0 : b.fromColorPaletteDark;
            b = b == null ? void 0 : b.toColorPaletteDark;
            if (c && b) {
                var d = this.element;
                d.style.setProperty("--w2w-start-background-color", g.Jy(c.surgeColor));
                d.style.setProperty("--w2w-start-primary-text-color", g.Jy(c.primaryTitleColor));
                d.style.setProperty("--w2w-start-secondary-text-color", g.Jy(c.secondaryTitleColor));
                d.style.setProperty("--w2w-end-background-color", g.Jy(b.surgeColor));
                d.style.setProperty("--w2w-end-primary-text-color", g.Jy(b.primaryTitleColor));
                d.style.setProperty("--w2w-end-secondary-text-color", g.Jy(b.secondaryTitleColor));
                d.style.setProperty("--w2w-animation-duration", a + "ms")
            }
            g.jp(this.element, "ytp-w2w-animate", !0)
        }
    };
    g.k.d5 = function(a) {
        this.J.L("web_autonav_color_transition") && a !== 2 && g.jp(this.element, "ytp-w2w-animate", !1)
    };
    g.k.rV = function() {
        var a = this.J.Hf();
        this.K && this.Fb !== a && g.mx(this, a);
        m5(this);
        this.J.logVisibility(this.container.element, a);
        this.J.logVisibility(this.cancelButton.element, a);
        this.J.logVisibility(this.j.Ea("ytp-autonav-endscreen-link-container"), a);
        this.J.logVisibility(this.playButton.element, a)
    };
    g.k.Qg = function(a) {
        return a.width < 400 || a.height < 459
    };
    g.z(n5, g.T);
    g.k = n5.prototype;
    g.k.create = function() {
        this.created = !0
    };
    g.k.destroy = function() {
        this.created = !1
    };
    g.k.CE = function() {
        return !1
    };
    g.k.Hf = function() {
        return !1
    };
    g.k.i_ = function() {
        return !1
    };
    g.z(o5, g.T);
    g.k = o5.prototype;
    g.k.DJ = function() {
        this.notification && (this.D.stop(), this.Lc(this.C), this.C = null, this.notification.close(), this.notification = null)
    };
    g.k.GI = function(a) {
        this.suggestion = a;
        j5(this, a, "hqdefault.jpg")
    };
    g.k.tV = function() {
        g.mx(this, this.api.Hf());
        this.api.logVisibility(this.element, this.api.Hf());
        this.api.logVisibility(this.Ea("ytp-upnext-autoplay-icon"), this.api.Hf());
        this.cancelButton && this.api.logVisibility(this.cancelButton.element, this.api.Hf())
    };
    g.k.Nba = function() {
        window.focus();
        this.DJ()
    };
    g.k.KC = function(a) {
        var b = this;
        this.Ul() || (g.jv("a11y-announce", "Up Next " + this.suggestion.title), this.B = (0, g.S)(), this.j = new g.Yo(function() {
            Gjb(b, a)
        }, 25), Gjb(this, a), zjb(this.api, Fjb(this, a)));
        g.hp(this.element, "ytp-upnext-autoplay-paused")
    };
    g.k.hide = function() {
        g.T.prototype.hide.call(this)
    };
    g.k.Ul = function() {
        return !!this.j
    };
    g.k.Ky = function() {
        this.gr();
        this.B = (0, g.S)();
        Gjb(this);
        g.fp(this.element, "ytp-upnext-autoplay-paused")
    };
    g.k.gr = function() {
        this.Ul() && (this.j.dispose(), this.j = null)
    };
    g.k.select = function(a) {
        a = a === void 0 ? !1 : a;
        if (this.api.U().L("autonav_notifications") && a && window.Notification && typeof document.hasFocus === "function") {
            var b = Notification.permission;
            b === "default" ? Notification.requestPermission() : b !== "granted" || document.hasFocus() || (this.DJ(), this.notification = new Notification("Up Next", {
                body: this.suggestion.title,
                icon: this.suggestion.jh()
            }), this.C = this.T(this.notification, "click", this.Nba), this.D.start())
        }
        this.gr();
        this.api.nextVideo(!1, a)
    };
    g.k.g5 = function(a) {
        !g.te(this.cancelButton.element, a.target) && g.AS(a, this.api) && (this.api.Hf() && this.api.logClick(this.Ea("ytp-upnext-autoplay-icon")), this.select())
    };
    g.k.f5 = function() {
        this.api.Hf() && this.cancelButton && this.api.logClick(this.cancelButton.element);
        g.AR(this.api, !0)
    };
    g.k.Eba = function(a) {
        this.api.getPresentingPlayerType();
        this.show();
        this.KC(a)
    };
    g.k.Fba = function() {
        this.api.getPresentingPlayerType();
        this.gr();
        this.hide()
    };
    g.k.xa = function() {
        this.gr();
        this.DJ();
        g.T.prototype.xa.call(this)
    };
    g.z(p5, n5);
    g.k = p5.prototype;
    g.k.create = function() {
        n5.prototype.create.call(this);
        this.D.T(this.player, "appresize", this.wD);
        this.D.T(this.player, "onVideoAreaChange", this.wD);
        this.D.T(this.player, "videodatachange", this.onVideoDataChange);
        this.D.T(this.player, "autonavchange", this.uV);
        this.D.T(this.player, "onAutonavCancelled", this.i5);
        this.onVideoDataChange()
    };
    g.k.show = function() {
        n5.prototype.show.call(this);
        (this.K || this.C && this.C !== this.videoData.clientPlaybackNonce) && g.AR(this.player, !1);
        g.HR(this.player) && this.CE() && !this.C ? (q5(this), this.videoData.autonavState === 2 ? this.player.getVisibilityState() === 3 ? this.j.select(!0) : this.j.KC() : this.videoData.autonavState === 3 && this.j.Ky()) : (g.AR(this.player, !0), q5(this));
        this.wD()
    };
    g.k.hide = function() {
        n5.prototype.hide.call(this);
        this.j.Ky();
        q5(this)
    };
    g.k.wD = function() {
        var a = this.player.Fo(!0, this.player.isFullscreen());
        q5(this);
        m5(this.B);
        g.jp(this.element, "ytp-autonav-cancelled-small-mode", this.Qg(a));
        g.jp(this.element, "ytp-autonav-cancelled-tiny-mode", this.eL(a));
        g.jp(this.element, "ytp-autonav-cancelled-mini-mode", a.width <= 400 || a.height <= 360);
        this.overlay && g.mm(this.overlay.element, {
            width: a.width + "px"
        });
        if (!this.G)
            for (a = 0; a < this.videos.length; a++) g.jp(this.videos[a].element, "ytp-suggestion-card-with-margin", a % 2 === 1)
    };
    g.k.onVideoDataChange = function() {
        var a = this.player.getVideoData();
        if (this.videoData !== a && a) {
            this.videoData = a;
            if ((a = this.videoData.suggestions) && a.length || this.player.L("web_player_autonav_empty_suggestions_fix")) {
                var b = g.nQ(this.videoData);
                b && (this.j.GI(b), this.j !== this.B && this.B.GI(b))
            }
            if (a && a.length)
                for (b = 0; b < Mjb.length; ++b) {
                    var c = Mjb[b];
                    if (a && a[c]) {
                        this.videos[b] = new k5(this.player);
                        var d = this.videos[b];
                        c = a[c];
                        d.suggestion !== c && (d.suggestion = c, j5(d, c));
                        g.P(this, this.videos[b]);
                        this.videos[b].Ia(this.N.element)
                    }
                }
            this.wD()
        }
    };
    g.k.uV = function(a) {
        a === 1 ? (this.K = !1, this.C = this.videoData.clientPlaybackNonce, this.j.gr(), this.Fb && this.wD()) : (this.K = !0, this.Hf() && (a === 2 ? this.j.KC() : a === 3 && this.j.Ky()))
    };
    g.k.i5 = function(a) {
        a ? this.uV(1) : (this.C = null, this.K = !1)
    };
    g.k.CE = function() {
        return this.videoData.autonavState !== 1
    };
    g.k.Qg = function(a) {
        return (a.width < 910 || a.height < 459) && !this.eL(a) && !(a.width <= 400 || a.height <= 360)
    };
    g.k.eL = function(a) {
        return a.width < 800 && !(a.width <= 400 || a.height <= 360)
    };
    g.k.Hf = function() {
        return this.Fb && g.HR(this.player) && this.CE() && !this.C
    };
    var Mjb = [1, 3, 2, 4];
    g.z(r5, g.T);
    g.k = r5.prototype;
    g.k.M2 = function() {
        switch (this.buttonType) {
            case 1:
                var a = "Watch again on YouTube";
                var b = 156915;
                break;
            case 2:
                a = "Continue watching on YouTube";
                b = 156942;
                break;
            default:
                a = "Continue watching on YouTube", b = 156942
        }
        this.update({
            content: a
        });
        this.J.hasVe(this.element) && this.J.destroyVe(this.element);
        this.J.createClientVe(this.element, this, b)
    };
    g.k.onClick = function(a) {
        this.J.L("web_player_log_click_before_generating_ve_conversion_params") && this.J.logClick(this.element);
        g.BS(this.getVideoUrl(), this.J, a);
        this.J.L("web_player_log_click_before_generating_ve_conversion_params") || this.J.logClick(this.element)
    };
    g.k.getVideoUrl = function() {
        var a = !0;
        switch (this.buttonType) {
            case 1:
                a = !0;
                break;
            case 2:
                a = !1
        }
        a = this.J.getVideoUrl(a, !1, !1, !0);
        var b = this.J.U();
        if (g.HO(b)) {
            var c = {};
            g.HO(b) && g.iR(this.J, "addEmbedsConversionTrackingParams", [c]);
            a = g.Si(a, c)
        }
        return a
    };
    g.k.logVisibility = function() {
        this.J.logVisibility(this.element, this.Fb && this.Z)
    };
    g.k.show = function() {
        g.T.prototype.show.call(this);
        this.logVisibility()
    };
    g.k.hide = function() {
        g.T.prototype.hide.call(this);
        this.logVisibility()
    };
    g.k.Kc = function(a) {
        g.T.prototype.Kc.call(this, a);
        this.logVisibility()
    };
    g.z(s5, n5);
    s5.prototype.show = function() {
        this.player.getPlayerState() !== 3 && (n5.prototype.show.call(this), this.Ne.AC(!0), this.Ne.Ts(!0), this.J.U().Je || this.Ne.Ss(!0), this.J.logVisibility(this.element, !0), this.watchButton.Kc(!0))
    };
    s5.prototype.hide = function() {
        n5.prototype.hide.call(this);
        this.Ne.AC(!1);
        this.Ne.Ts(!1);
        this.Ne.Ss(!1);
        this.J.logVisibility(this.element, !1);
        this.watchButton.Kc(!1)
    };
    g.z(Hjb, n5);
    Hjb.prototype.Sa = function() {
        var a = this.player.getVideoData();
        this.j.update({
            profilePicture: a.profilePicture,
            author: a.author
        });
        this.subscribeButton.channelId = a.qm;
        var b = this.subscribeButton;
        a.subscribed ? b.j() : b.B()
    };
    g.z(t5, g.T);
    t5.prototype.select = function() {
        this.api.Ep(this.suggestion.videoId, this.suggestion.sessionData, this.suggestion.playlistId, void 0, void 0, this.suggestion.hF || void 0) && this.api.logClick(this.element)
    };
    t5.prototype.onClick = function(a) {
        if (g.HO(this.api.U()) && this.api.L("web_player_log_click_before_generating_ve_conversion_params")) {
            this.api.logClick(this.element);
            var b = this.suggestion.Nl(),
                c = {};
            g.DR(this.api, c);
            b = g.Si(b, c);
            g.BS(b, this.api, a)
        } else g.AS(a, this.api, this.B, this.suggestion.sessionData || void 0) && this.select()
    };
    t5.prototype.onKeyPress = function(a) {
        switch (a.keyCode) {
            case 13:
            case 32:
                a.defaultPrevented || (this.select(), a.preventDefault())
        }
    };
    t5.prototype.onVideoDataChange = function() {
        var a = this.api.getVideoData(),
            b = this.api.U();
        this.B = a.Jf ? !1 : b.D
    };
    g.z(u5, n5);
    g.k = u5.prototype;
    g.k.create = function() {
        n5.prototype.create.call(this);
        var a = this.player.getVideoData();
        a && (this.videoData = a);
        this.Br();
        this.B.T(this.player, "appresize", this.Br);
        this.B.T(this.player, "onVideoAreaChange", this.Br);
        this.B.T(this.player, "videodatachange", this.onVideoDataChange);
        this.B.T(this.player, "autonavchange", this.JN);
        this.B.T(this.player, "onAutonavCancelled", this.j5);
        a = this.videoData.autonavState;
        a !== this.Y && this.JN(a);
        this.B.T(this.element, "transitionend", this.cda)
    };
    g.k.destroy = function() {
        g.Cs(this.B);
        g.qb(this.stills);
        this.stills = [];
        n5.prototype.destroy.call(this);
        g.hp(this.element, "ytp-show-tiles");
        this.K.stop();
        this.Y = this.videoData.autonavState
    };
    g.k.CE = function() {
        return this.videoData.autonavState !== 1
    };
    g.k.show = function() {
        var a = this.Fb;
        n5.prototype.show.call(this);
        g.hp(this.element, "ytp-show-tiles");
        this.player.U().B ? g.$o(this.K) : this.K.start();
        (this.G || this.D && this.D !== this.videoData.clientPlaybackNonce) && g.AR(this.player, !1);
        v5(this) ? (w5(this), this.videoData.autonavState === 2 ? this.player.getVisibilityState() === 3 ? this.j.select(!0) : this.j.KC() : this.videoData.autonavState === 3 && this.j.Ky()) : (g.AR(this.player, !0), w5(this));
        a !== this.Fb && this.player.logVisibility(this.element, !0)
    };
    g.k.hide = function() {
        var a = this.Fb;
        n5.prototype.hide.call(this);
        this.j.Ky();
        w5(this);
        a !== this.Fb && this.player.logVisibility(this.element, !1)
    };
    g.k.cda = function(a) {
        a.target === this.element && this.Br()
    };
    g.k.Br = function() {
        var a, b, c, d;
        var e = ((a = this.videoData) == null ? 0 : (b = a.suggestions) == null ? 0 : b.length) ? (c = this.videoData) == null ? void 0 : c.suggestions : [(d = this.videoData) == null ? void 0 : g.nQ(d)];
        if (e.length) {
            g.fp(this.element, "ytp-endscreen-paginate");
            var f = this.J.Fo(!0, this.J.isFullscreen());
            if (a = g.nR(this.J)) a = a.Oh() ? 48 : 32, f.width -= a * 2;
            var h = f.width / f.height;
            d = 96 / 54;
            b = a = 2;
            var l = Math.max(f.width / 96, 2),
                m = Math.max(f.height / 54, 2);
            c = e.length;
            var n = Math.pow(2, 2);
            var p = c * n + (Math.pow(2, 2) - n);
            p += Math.pow(2, 2) -
                n;
            for (p -= n; p > 0 && (a < l || b < m);) {
                var q = a / 2,
                    r = b / 2,
                    t = a <= l - 2 && p >= r * n,
                    u = b <= m - 2 && p >= q * n;
                if ((q + 1) / r * d / h > h / (q / (r + 1) * d) && u) p -= q * n, b += 2;
                else if (t) p -= r * n, a += 2;
                else if (u) p -= q * n, b += 2;
                else break
            }
            d = !1;
            p >= 3 * n && c * n - p <= 6 && (b >= 4 || a >= 4) && (d = !0);
            n = a * 96;
            p = b * 54;
            h = n / p < h ? f.height / p : f.width / n;
            h = Math.min(h, 2);
            n = Math.floor(Math.min(f.width, n * h));
            p = Math.floor(Math.min(f.height, p * h));
            f = this.table.element;
            f.ariaLive = "polite";
            g.xm(f, n, p);
            g.mm(f, {
                marginLeft: n / -2 + "px",
                marginTop: p / -2 + "px"
            });
            this.j.GI(g.nQ(this.videoData));
            this.j instanceof
            l5 && m5(this.j);
            g.jp(this.element, "ytp-endscreen-takeover", v5(this));
            w5(this);
            n += 4;
            p += 4;
            h = 0;
            f.ariaBusy = "true";
            for (l = 0; l < a; l++)
                for (m = 0; m < b; m++)
                    if (q = h, t = 0, d && l >= a - 2 && m >= b - 2 ? t = 1 : m % 2 === 0 && l % 2 === 0 && (m < 2 && l < 2 ? m === 0 && l === 0 && (t = 2) : t = 2), q = g.Id(q + this.C, c), t !== 0) {
                        r = this.stills[h];
                        r || (r = new t5(this.player), this.stills[h] = r, f.appendChild(r.element));
                        u = Math.floor(p * m / b);
                        var y = Math.floor(n * l / a),
                            B = Math.floor(p * (m + t) / b) - u - 4,
                            C = Math.floor(n * (l + t) / a) - y - 4;
                        g.tm(r.element, y, u);
                        g.xm(r.element, C, B);
                        g.mm(r.element, "transitionDelay",
                            (m + l) / 20 + "s");
                        g.jp(r.element, "ytp-videowall-still-mini", t === 1);
                        g.jp(r.element, "ytp-videowall-still-large", t > 2);
                        t = Math.max(C, B);
                        g.jp(r.element, "ytp-videowall-still-round-large", t >= 256);
                        g.jp(r.element, "ytp-videowall-still-round-medium", t > 96 && t < 256);
                        g.jp(r.element, "ytp-videowall-still-round-small", t <= 96);
                        q = e[q];
                        r.suggestion !== q && (r.suggestion = q, t = r.api.U(), u = g.ep(r.element, "ytp-videowall-still-large") ? "hqdefault.jpg" : "mqdefault.jpg", j5(r, q, u), g.HO(t) && !r.api.L("web_player_log_click_before_generating_ve_conversion_params") &&
                            (t = q.Nl(), u = {}, g.iR(r.api, "addEmbedsConversionTrackingParams", [u]), t = g.Si(t, u), r.updateValue("url", t)), (q = (q = q.sessionData) && q.itct) && r.api.setTrackingParams(r.element, q));
                        h++
                    }
            f.ariaBusy = "false";
            g.jp(this.element, "ytp-endscreen-paginate", h < c);
            for (e = this.stills.length - 1; e >= h; e--) a = this.stills[e], g.se(a.element), g.pb(a);
            this.stills.length = h
        }
    };
    g.k.onVideoDataChange = function() {
        var a = this.player.getVideoData(1);
        this.videoData !== a && (a != null && g.nQ(a) ? (this.C = 0, this.videoData = a, this.Br()) : this.player.ma("missg", {
            vid: (a == null ? void 0 : a.videoId) || "",
            cpn: (a == null ? void 0 : a.clientPlaybackNonce) || ""
        }))
    };
    g.k.k5 = function() {
        this.C += this.stills.length;
        this.Br()
    };
    g.k.l5 = function() {
        this.C -= this.stills.length;
        this.Br()
    };
    g.k.i_ = function() {
        return this.j.Ul()
    };
    g.k.JN = function(a) {
        a === 1 ? (this.G = !1, this.D = this.videoData.clientPlaybackNonce, this.j.gr(), this.Fb && this.Br()) : (this.G = !0, this.Fb && v5(this) && (a === 2 ? this.j.KC() : a === 3 && this.j.Ky()))
    };
    g.k.j5 = function(a) {
        if (a) {
            for (a = 0; a < this.stills.length; a++) this.J.logVisibility(this.stills[a].element, !0);
            this.JN(1)
        } else this.D = null, this.G = !1;
        this.Br()
    };
    g.k.Hf = function() {
        return this.Fb && v5(this)
    };
    g.z(x5, n5);
    x5.prototype.show = function() {
        if (this.player.getPlayerState() !== 3) {
            n5.prototype.show.call(this);
            var a = this.B;
            if (a) {
                var b = this.j.suggestionData.length > 0;
                g.jp(this.element, "ytp-shorts-branded-ui", b);
                b ? a.show() : a.hide()
            }
            var c;
            (c = g.nR(this.player)) == null || c.BC(!0);
            this.player.logVisibility(this.element, !0);
            this.watchButton.Kc(!0)
        }
    };
    x5.prototype.hide = function() {
        n5.prototype.hide.call(this);
        var a;
        (a = g.nR(this.player)) == null || a.BC(!1);
        this.player.logVisibility(this.element, !1);
        this.watchButton.Kc(!1)
    };
    g.z(Ljb, g.WX);
    g.k = Ljb.prototype;
    g.k.Dv = function() {
        var a = this.player.getVideoData(),
            b = a.mutedAutoplay;
        if ((this.player.fd() || this.B) && !b) return !0;
        var c;
        var d = !!((a == null ? 0 : g.nQ(a)) || (a == null ? 0 : (c = a.suggestions) == null ? 0 : c.length));
        d = !Ijb(this.player) || d;
        a = a.Oj;
        c = this.player.vF();
        return d && !a && !c && !b
    };
    g.k.Hf = function() {
        return this.endScreen.Hf()
    };
    g.k.C$ = function() {
        return this.Hf() ? this.endScreen.i_() : !1
    };
    g.k.xa = function() {
        this.player.rf("endscreen");
        g.WX.prototype.xa.call(this)
    };
    g.k.load = function() {
        var a = this.player.getVideoData();
        var b = a.transitionEndpointAtEndOfStream;
        if (b && b.videoId) {
            var c = this.player.Ab().He.get("heartbeat"),
                d = g.nQ(a);
            !d || b.videoId !== d.videoId || a.QW ? (this.player.Ep(b.videoId, void 0, void 0, !0, !0, b), c && c.nL("HEARTBEAT_ACTION_TRIGGER_AT_STREAM_END", "HEARTBEAT_ACTION_TRANSITION_REASON_HAS_NEW_STREAM_TRANSITION_ENDPOINT"), a = !0) : a = !1
        } else a = !1;
        a || (g.WX.prototype.load.call(this), this.endScreen.show())
    };
    g.k.unload = function() {
        g.WX.prototype.unload.call(this);
        this.endScreen.hide();
        this.endScreen.destroy()
    };
    g.k.onCueRangeEnter = function(a) {
        this.Dv() && (this.endScreen.created || this.endScreen.create(), a.getId() === "load" && this.load())
    };
    g.k.onCueRangeExit = function(a) {
        a.getId() === "load" && this.loaded && this.unload()
    };
    g.k.onVideoDataChange = function() {
        Kjb(this);
        this.D && Jjb(this) && (this.endScreen && (this.endScreen.hide(), this.endScreen.created && this.endScreen.destroy(), this.endScreen.dispose()), this.j ? this.endScreen = new p5(this.player) : this.endScreen = new u5(this.player), g.P(this, this.endScreen), g.GR(this.player, this.endScreen.element, 4))
    };
    g.VX("endscreen", Ljb);
})(_yt_player);