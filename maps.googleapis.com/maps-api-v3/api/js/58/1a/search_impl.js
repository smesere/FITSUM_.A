google.maps.__gjsload__('search_impl', function(_) {
    var Zxb = function(a, b) {
            _.H(a.Gg, 3, b)
        },
        cyb = function(a, b, c) {
            const d = _.oJ(new $xb);
            c.Xq = (0, _.Ca)(d.load, d);
            c.clickable = a.get("clickable") != 0;
            _.LYa(c, _.hQ(b));
            const e = [];
            e.push(_.Tj(c, "click", (0, _.Ca)(ayb, null, a)));
            _.Mb(["mouseover", "mouseout", "mousemove"], function(f) {
                e.push(_.Tj(c, f, (0, _.Ca)(byb, null, a, f)))
            });
            e.push(_.Tj(a, "clickable_changed", function() {
                a.Eg.clickable = a.get("clickable") != 0
            }));
            a.Fg = e
        },
        ayb = function(a, b, c, d, e) {
            let f = null;
            if (e && (f = {
                    status: e.getStatus()
                }, e.getStatus() == 0)) {
                f.location = _.W(e.Gg,
                    2) ? new _.Ej(_.at(_.K(e.Gg, 2, _.ft).Gg, 1), _.at(_.K(e.Gg, 2, _.ft).Gg, 2)) : null;
                f.fields = {};
                const g = _.ji(e.Gg, 3);
                for (let h = 0; h < g; ++h) {
                    const k = _.Yq(e.Gg, 3, _.sQ, h);
                    f.fields[k.getKey()] = k.getValue()
                }
            }
            _.fk(a, "click", b, c, d, f)
        },
        byb = function(a, b, c, d, e, f, g) {
            let h = null;
            f && (h = {
                title: f[1].title,
                snippet: f[1].snippet
            });
            _.fk(a, b, c, d, e, h, g)
        },
        dyb = function() {},
        eyb = class extends _.V {
            constructor() {
                super()
            }
            Vi() {
                return _.Bi(this.Gg, 2)
            }
        },
        fyb = [_.N, , , _.qo, _.UZa];
    var gyb = class extends _.V {
        constructor(a) {
            super(a)
        }
        getStatus() {
            return _.I(this.Gg, 1, -1)
        }
        getLocation() {
            return _.vi(this.Gg, 2, _.ft)
        }
    };
    var $xb = class {
        constructor() {
            var a = _.An,
                b = _.zn;
            this.Fg = _.Ci;
            this.Eg = _.eq(_.tx, a, _.lz + "/maps/api/js/LayersService.GetFeature", b)
        }
        load(a, b) {
            function c(g) {
                g = new gyb(g);
                b(g)
            }
            var d = new eyb;
            _.H(d.Gg, 1, a.layerId.split("|")[0]);
            _.H(d.Gg, 2, a.featureId);
            Zxb(d, this.Fg.Eg().Eg());
            for (var e in a.parameters) {
                var f = _.yi(d.Gg, 4, _.sQ);
                _.H(f.Gg, 1, e);
                _.H(f.Gg, 2, a.parameters[e])
            }
            a = _.ni(d.zi(), fyb, 1);
            this.Eg(a, c, c);
            return a
        }
        cancel() {
            throw Error("Not implemented");
        }
    };
    dyb.prototype.tF = function(a) {
        if (_.Am[15]) {
            var b = a.Ig;
            const c = a.Ig = a.getMap();
            b && a.Eg && (a.Hg ? (b = b.__gm.Yj, b.set(b.get().In(a.Eg))) : a.Eg && _.hZa(a.Eg, b) && (_.Mb(a.Fg || [], _.Vj), a.Fg = null));
            if (c) {
                b = new _.hw;
                const d = a.get("layerId").split("|");
                b.layerId = d[0];
                for (let e = 1; e < d.length; ++e) {
                    const [f, ...g] = d[e].split(":");
                    b.parameters[f] = g.join(":")
                }
                a.get("spotlightDescription") && (b.spotlightDescription = new _.Aw(a.get("spotlightDescription")));
                a.get("paintExperimentIds") && (b.paintExperimentIds = a.get("paintExperimentIds").slice(0));
                a.get("styler") && (b.styler = new _.sw(a.get("styler")));
                a.get("roadmapStyler") && (b.roadmapStyler = new _.sw(a.get("roadmapStyler")));
                a.get("travelMapRequest") && (b.travelMapRequest = new _.rra(a.get("travelMapRequest")));
                a.get("mapsApiLayer") && (b.mapsApiLayer = new _.nw(a.get("mapsApiLayer")));
                a.get("mapFeatures") && (b.mapFeatures = a.get("mapFeatures"));
                a.get("clickableCities") && (b.clickableCities = a.get("clickableCities"));
                a.get("searchPipeMetadata") && (b.searchPipeMetadata = new _.Gy(a.get("searchPipeMetadata")));
                a.get("gmmContextPipeMetadata") && (b.gmmContextPipeMetadata = new _.Koa(a.get("gmmContextPipeMetadata")));
                a.get("overlayLayer") && (b.overlayLayer = new _.Bw(a.get("overlayLayer")));
                a.get("caseExperimentIds") && (b.caseExperimentIds = a.get("caseExperimentIds").slice(0));
                a.get("boostMapExperimentIds") && (b.boostMapExperimentIds = a.get("boostMapExperimentIds").slice(0));
                a.get("airQualityPipeMetadata") && (b.airQualityPipeMetadata = new _.Wqa(a.get("airQualityPipeMetadata")));
                a.get("directionsPipeParameters") && (b.directionsPipeParameters =
                    new _.Hz(a.get("directionsPipeParameters")));
                a.get("clientSignalPipeMetadata") && (b.clientSignalPipeMetadata = new _.Xna(a.get("clientSignalPipeMetadata")));
                b.darkLaunch = !!a.get("darkLaunch");
                a.Eg = b;
                a.Hg = a.get("renderOnBaseMap");
                a.Hg ? (a = c.__gm.Yj, a.set(a.get().Fl(b))) : cyb(a, c, b);
                _.Ok(c, "Lg");
                _.L(c, 148282)
            }
        }
    };
    _.Li("search_impl", new dyb);
});