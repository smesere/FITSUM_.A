google.maps.__gjsload__('overlay', function(_) {
    var xC = function(a) {
            this.Eg = a
        },
        hya = function() {},
        yC = function(a) {
            a.oz = a.oz || new hya;
            return a.oz
        },
        iya = function(a) {
            this.Fh = new _.nm(() => {
                const b = a.oz;
                if (a.getPanes()) {
                    if (a.getProjection()) {
                        if (!b.Cx && a.onAdd) a.onAdd();
                        b.Cx = !0;
                        a.draw()
                    }
                } else {
                    if (b.Cx)
                        if (a.onRemove) a.onRemove();
                        else a.remove();
                    b.Cx = !1
                }
            }, 0)
        },
        jya = function(a, b) {
            const c = yC(a);
            let d = c.Gw;
            d || (d = c.Gw = new iya(a));
            _.Mb(c.Rh || [], _.Vj);
            var e = c.pi = c.pi || new _.Sra;
            const f = b.__gm;
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("center", f, "projectionCenterQ");
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            e = c.kD = c.kD || new xC(e);
            e.bindTo("zoom", f);
            e.bindTo("offset", f);
            e.bindTo("projection", b);
            e.bindTo("projectionTopLeft", f);
            a.bindTo("projection", e, "outProjection");
            a.bindTo("panes", f);
            e = () => _.om(d.Fh);
            c.Rh = [_.Tj(a, "panes_changed", e), _.Tj(f, "zoom_changed", e), _.Tj(f, "offset_changed", e), _.Tj(b, "projection_changed", e), _.Tj(f, "projectioncenterq_changed", e)];
            _.om(d.Fh);
            b instanceof _.ok ? (_.Ok(b, "Ox"), _.L(b, 148440)) : b instanceof _.jl && (_.Ok(b, "Oxs"),
                _.L(b, 181451))
        },
        oya = function(a) {
            if (a) {
                var b = a.getMap();
                if (kya(a) !== b && b && b instanceof _.ok) {
                    const c = b.__gm;
                    c.overlayLayer ? a.__gmop = new lya(b, a, c.overlayLayer) : c.Fg.then(({
                        lh: d
                    }) => {
                        const e = new mya(b, d);
                        d.Ci(e);
                        c.overlayLayer = e;
                        nya(a);
                        oya(a)
                    })
                }
            }
        },
        nya = function(a) {
            if (a) {
                var b = a.__gmop;
                b && (a.__gmop = null, b.Eg.unbindAll(), b.Eg.set("panes", null), b.Eg.set("projection", null), b.Hg.yl(b), b.Fg && (b.Fg = !1, b.Eg.onRemove ? b.Eg.onRemove() : b.Eg.remove()))
            }
        },
        kya = function(a) {
            return (a = a.__gmop) ? a.map : null
        },
        pya = function(a,
            b) {
            a.Eg.get("projection") != b && (a.Eg.bindTo("panes", a.map.__gm), a.Eg.set("projection", b))
        };
    _.Ia(xC, _.jk);
    xC.prototype.changed = function(a) {
        a != "outProjection" && (a = !!(this.get("offset") && this.get("projectionTopLeft") && this.get("projection") && _.cj(this.get("zoom"))), a == !this.get("outProjection") && this.set("outProjection", a ? this.Eg : null))
    };
    var zC = {};
    _.Ia(iya, _.jk);
    zC.El = function(a) {
        if (a) {
            var b = a.getMap();
            (yC(a).RC || null) !== b && (b && jya(a, b), yC(a).RC = b)
        }
    };
    zC.yl = function(a) {
        const b = yC(a);
        var c = b.pi;
        c && c.unbindAll();
        (c = b.kD) && c.unbindAll();
        a.unbindAll();
        a.set("panes", null);
        a.set("projection", null);
        b.Rh && _.Mb(b.Rh, _.Vj);
        b.Rh = null;
        b.Gw && (b.Gw.Fh.Fj(), b.Gw = null);
        delete yC(a).RC
    };
    var AC = {},
        lya = class {
            constructor(a, b, c) {
                this.map = a;
                this.Eg = b;
                this.Hg = c;
                this.Fg = !1;
                _.Ok(this.map, "Ox");
                _.L(this.map, 148440);
                c.El(this)
            }
            draw() {
                this.Fg || (this.Fg = !0, this.Eg.onAdd && this.Eg.onAdd());
                this.Eg.draw && this.Eg.draw()
            }
        },
        mya = class {
            constructor(a, b) {
                this.Ig = a;
                this.Hg = b;
                this.Eg = null;
                this.Fg = []
            }
            dispose() {}
            di(a, b, c, d, e, f, g, h) {
                const k = this.Eg = this.Eg || new _.tz(this.Ig, this.Hg, () => {});
                k.di(a, b, c, d, e, f, g, h);
                for (const m of this.Fg) pya(m, k), m.draw()
            }
            El(a) {
                this.Fg.push(a);
                this.Eg && pya(a, this.Eg);
                this.Hg.refresh()
            }
            yl(a) {
                _.Tb(this.Fg,
                    a)
            }
        };
    AC.El = oya;
    AC.yl = nya;
    _.Li("overlay", {
        YA: function(a) {
            if (a) {
                (0, zC.yl)(a);
                (0, AC.yl)(a);
                var b = a.getMap();
                b && (b instanceof _.ok ? (0, AC.El)(a) : (0, zC.El)(a))
            }
        },
        preventMapHitsFrom: a => {
            _.ou(a, {
                ul: ({
                    event: b
                }) => {
                    _.ys(b.Eg)
                },
                dk: b => _.$t(b),
                bq: b => _.au(b),
                Yk: b => _.au(b),
                wk: b => _.bu(b)
            }).Pr(!0)
        },
        preventMapHitsAndGesturesFrom: a => {
            a.addEventListener("click", _.Rj);
            a.addEventListener("contextmenu", _.Rj);
            a.addEventListener("dblclick", _.Rj);
            a.addEventListener("mousedown", _.Rj);
            a.addEventListener("mousemove", _.Rj);
            a.addEventListener("MSPointerDown",
                _.Rj);
            a.addEventListener("pointerdown", _.Rj);
            a.addEventListener("touchstart", _.Rj);
            a.addEventListener("wheel", _.Rj)
        }
    });
});