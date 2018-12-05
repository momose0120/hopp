/*!
 * VERSION: 1.20.2
 * DATE: 2017-06-30
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function() {
        "use strict";
        _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    r = function(t, e, i) {
                        var n, r, s = t.cycle;
                        for (n in s) r = s[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                        delete t.cycle
                    },
                    s = function(t, e, n) {
                        i.call(this, t, e, n), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = s.prototype.render
                    },
                    o = 1e-10,
                    a = i._internals,
                    l = a.isSelector,
                    h = a.isArray,
                    c = s.prototype = i.to({}, .1, {}),
                    u = [];
                s.version = "1.20.2", c.constructor = s, c.kill()._gc = !1, s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf, s.getTweensOf = i.getTweensOf, s.lagSmoothing = i.lagSmoothing, s.ticker = i.ticker, s.render = i.render, c.invalidate = function() {
                    return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._yoyoEase = null, this._uncache(!0), i.prototype.invalidate.call(this)
                }, c.updateTo = function(t, e) {
                    var n, r = this.ratio,
                        s = this.vars.immediateRender || t.immediateRender;
                    e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                    for (n in t) this.vars[n] = t[n];
                    if (this._initted || s)
                        if (e) this._initted = !1, s && this.render(0, !0, !0);
                        else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
                        var o = this._totalTime;
                        this.render(0, !0, !1), this._initted = !1, this.render(o, !0, !1)
                    } else if (this._initted = !1, this._init(), this._time > 0 || s)
                        for (var a, l = 1 / (1 - r), h = this._firstPT; h;) a = h.s + h.c, h.c *= l, h.s = a - h.c, h = h._next;
                    return this
                }, c.render = function(t, e, n) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var r, s, l, h, c, u, p, f, d, m = this._dirty ? this.totalDuration() : this._totalDuration,
                        g = this._time,
                        _ = this._totalTime,
                        v = this._cycle,
                        y = this._duration,
                        x = this._rawPrevTime;
                    if (t >= m - 1e-7 && t >= 0 ? (this._totalTime = m, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (r = !0, s = "onComplete", n = n || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || n) && (this._startTime === this._timeline._duration && (t = 0), (0 > x || 0 >= t && t >= -1e-7 || x === o && "isPause" !== this.data) && x !== t && (n = !0, x > o && (s = "onReverseComplete")), this._rawPrevTime = f = !e || t || x === t ? t : o)) : 1e-7 > t ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== _ || 0 === y && x > 0) && (s = "onReverseComplete", r = this._reversed), 0 > t && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || n) && (x >= 0 && (n = !0), this._rawPrevTime = f = !e || t || x === t ? t : o)), this._initted || (n = !0)) : (this._totalTime = this._time = t, 0 !== this._repeat && (h = y + this._repeatDelay, this._cycle = this._totalTime / h >> 0, 0 !== this._cycle && this._cycle === this._totalTime / h && t >= _ && this._cycle--, this._time = this._totalTime - this._cycle * h, this._yoyo && 0 != (1 & this._cycle) && (this._time = y - this._time, (d = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== d || this._initted ? this._yoyoEase = d = !0 === d ? this._ease : d instanceof Ease ? d : Ease.map[d] : (d = this.vars.ease, this._yoyoEase = d = d ? d instanceof Ease ? d : "function" == typeof d ? new Ease(d, this.vars.easeParams) : Ease.map[d] || i.defaultEase : i.defaultEase)), this.ratio = d ? 1 - d.getRatio((y - this._time) / y) : 0)), this._time > y ? this._time = y : this._time < 0 && (this._time = 0)), this._easeType && !d ? (c = this._time / y, u = this._easeType, p = this._easePower, (1 === u || 3 === u && c >= .5) && (c = 1 - c), 3 === u && (c *= 2), 1 === p ? c *= c : 2 === p ? c *= c * c : 3 === p ? c *= c * c * c : 4 === p && (c *= c * c * c * c), 1 === u ? this.ratio = 1 - c : 2 === u ? this.ratio = c : this._time / y < .5 ? this.ratio = c / 2 : this.ratio = 1 - c / 2) : d || (this.ratio = this._ease.getRatio(this._time / y))), g !== this._time || n || v !== this._cycle) {
                        if (!this._initted) {
                            if (this._init(), !this._initted || this._gc) return;
                            if (!n && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = g, this._totalTime = _, this._rawPrevTime = x, this._cycle = v, a.lazyTweens.push(this), void(this._lazy = [t, e]);
                            !this._time || r || d ? r && this._ease._calcEnd && !d && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / y)
                        }
                        for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== g && t >= 0 && (this._active = !0), 0 === _ && (2 === this._initted && t > 0 && this._init(), this._startAt && (t >= 0 ? this._startAt.render(t, e, n) : s || (s = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === y) && (e || this._callback("onStart"))), l = this._firstPT; l;) l.f ? l.t[l.p](l.c * this.ratio + l.s) : l.t[l.p] = l.c * this.ratio + l.s, l = l._next;
                        this._onUpdate && (0 > t && this._startAt && this._startTime && this._startAt.render(t, e, n), e || (this._totalTime !== _ || s) && this._callback("onUpdate")), this._cycle !== v && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")), s && (!this._gc || n) && (0 > t && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, n), r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[s] && this._callback(s), 0 === y && this._rawPrevTime === o && f !== o && (this._rawPrevTime = 0))
                    } else _ !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
                }, s.to = function(t, e, i) {
                    return new s(t, e, i)
                }, s.from = function(t, e, i) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new s(t, e, i)
                }, s.fromTo = function(t, e, i, n) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new s(t, e, n)
                }, s.staggerTo = s.allTo = function(t, e, o, a, c, p, f) {
                    a = a || 0;
                    var d, m, g, _, v = 0,
                        y = [],
                        x = function() {
                            o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments), c.apply(f || o.callbackScope || this, p || u)
                        },
                        b = o.cycle,
                        w = o.startAt && o.startAt.cycle;
                    for (h(t) || ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t))), t = t || [], 0 > a && ((t = n(t)).reverse(), a *= -1), d = t.length - 1, g = 0; d >= g; g++) {
                        m = {};
                        for (_ in o) m[_] = o[_];
                        if (b && (r(m, t, g), null != m.duration && (e = m.duration, delete m.duration)), w) {
                            w = m.startAt = {};
                            for (_ in o.startAt) w[_] = o.startAt[_];
                            r(m.startAt, t, g)
                        }
                        m.delay = v + (m.delay || 0), g === d && c && (m.onComplete = x), y[g] = new s(t[g], e, m), v += a
                    }
                    return y
                }, s.staggerFrom = s.allFrom = function(t, e, i, n, r, o, a) {
                    return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, s.staggerTo(t, e, i, n, r, o, a)
                }, s.staggerFromTo = s.allFromTo = function(t, e, i, n, r, o, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, s.staggerTo(t, e, n, r, o, a, l)
                }, s.delayedCall = function(t, e, i, n, r) {
                    return new s(e, 0, {
                        delay: t,
                        onComplete: e,
                        onCompleteParams: i,
                        callbackScope: n,
                        onReverseComplete: e,
                        onReverseCompleteParams: i,
                        immediateRender: !1,
                        useFrames: r,
                        overwrite: 0
                    })
                }, s.set = function(t, e) {
                    return new s(t, 0, e)
                }, s.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                };
                var p = function(t, e) {
                        for (var n = [], r = 0, s = t._first; s;) s instanceof i ? n[r++] = s : (e && (n[r++] = s), n = n.concat(p(s, e)), r = n.length), s = s._next;
                        return n
                    },
                    f = s.getAllTweens = function(e) {
                        return p(t._rootTimeline, e).concat(p(t._rootFramesTimeline, e))
                    };
                s.killAll = function(t, i, n, r) {
                    null == i && (i = !0), null == n && (n = !0);
                    var s, o, a, l = f(0 != r),
                        h = l.length,
                        c = i && n && r;
                    for (a = 0; h > a; a++) o = l[a], (c || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && (t ? o.totalTime(o._reversed ? 0 : o.totalDuration()) : o._enabled(!1, !1))
                }, s.killChildTweensOf = function(t, e) {
                    if (null != t) {
                        var r, o, c, u, p, f = a.tweenLookup;
                        if ("string" == typeof t && (t = i.selector(t) || t), l(t) && (t = n(t)), h(t))
                            for (u = t.length; --u > -1;) s.killChildTweensOf(t[u], e);
                        else {
                            r = [];
                            for (c in f)
                                for (o = f[c].target.parentNode; o;) o === t && (r = r.concat(f[c].tweens)), o = o.parentNode;
                            for (p = r.length, u = 0; p > u; u++) e && r[u].totalTime(r[u].totalDuration()), r[u]._enabled(!1, !1)
                        }
                    }
                };
                var d = function(t, i, n, r) {
                    i = !1 !== i, n = !1 !== n;
                    for (var s, o, a = f(r = !1 !== r), l = i && n && r, h = a.length; --h > -1;) o = a[h], (l || o instanceof e || (s = o.target === o.vars.onComplete) && n || i && !s) && o.paused(t)
                };
                return s.pauseAll = function(t, e, i) {
                    d(!0, t, e, i)
                }, s.resumeAll = function(t, e, i) {
                    d(!1, t, e, i)
                }, s.globalTimeScale = function(e) {
                    var n = t._rootTimeline,
                        r = i.ticker.time;
                    return arguments.length ? (e = e || o, n._startTime = r - (r - n._startTime) * n._timeScale / e, n = t._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / e, n._timeScale = t._rootTimeline._timeScale = e, e) : n._timeScale
                }, c.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                }, c.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                }, c.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, c.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                }, c.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
                }, c.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, c.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, c.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, s
            }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                var n = function(t) {
                        e.call(this, t), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
                        var i, n, r = this.vars;
                        for (n in r) i = r[n], a(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
                        a(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
                    },
                    r = i._internals,
                    s = n._internals = {},
                    o = r.isSelector,
                    a = r.isArray,
                    l = r.lazyTweens,
                    h = r.lazyRender,
                    c = _gsScope._gsDefine.globals,
                    u = function(t) {
                        var e, i = {};
                        for (e in t) i[e] = t[e];
                        return i
                    },
                    p = function(t, e, i) {
                        var n, r, s = t.cycle;
                        for (n in s) r = s[n], t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length];
                        delete t.cycle
                    },
                    f = s.pauseCallback = function() {},
                    d = function(t) {
                        var e, i = [],
                            n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]));
                        return i
                    },
                    m = n.prototype = new e;
                return n.version = "1.20.2", m.constructor = n, m.kill()._gc = m._forcingPlayhead = m._hasPause = !1, m.to = function(t, e, n, r) {
                    var s = n.repeat && c.TweenMax || i;
                    return e ? this.add(new s(t, e, n), r) : this.set(t, n, r)
                }, m.from = function(t, e, n, r) {
                    return this.add((n.repeat && c.TweenMax || i).from(t, e, n), r)
                }, m.fromTo = function(t, e, n, r, s) {
                    var o = r.repeat && c.TweenMax || i;
                    return e ? this.add(o.fromTo(t, e, n, r), s) : this.set(t, r, s)
                }, m.staggerTo = function(t, e, r, s, a, l, h, c) {
                    var f, m, g = new n({
                            onComplete: l,
                            onCompleteParams: h,
                            callbackScope: c,
                            smoothChildTiming: this.smoothChildTiming
                        }),
                        _ = r.cycle;
                    for ("string" == typeof t && (t = i.selector(t) || t), o(t = t || []) && (t = d(t)), 0 > (s = s || 0) && ((t = d(t)).reverse(), s *= -1), m = 0; m < t.length; m++)(f = u(r)).startAt && (f.startAt = u(f.startAt), f.startAt.cycle && p(f.startAt, t, m)), _ && (p(f, t, m), null != f.duration && (e = f.duration, delete f.duration)), g.to(t[m], e, f, m * s);
                    return this.add(g, a)
                }, m.staggerFrom = function(t, e, i, n, r, s, o, a) {
                    return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(t, e, i, n, r, s, o, a)
                }, m.staggerFromTo = function(t, e, i, n, r, s, o, a, l) {
                    return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(t, e, n, r, s, o, a, l)
                }, m.call = function(t, e, n, r) {
                    return this.add(i.delayedCall(0, t, e, n), r)
                }, m.set = function(t, e, n) {
                    return n = this._parseTimeOrLabel(n, 0, !0), null == e.immediateRender && (e.immediateRender = n === this._time && !this._paused), this.add(new i(t, 0, e), n)
                }, n.exportRoot = function(t, e) {
                    null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                    var r, s, o = new n(t),
                        a = o._timeline;
                    for (null == e && (e = !0), a._remove(o, !0), o._startTime = 0, o._rawPrevTime = o._time = o._totalTime = a._time, r = a._first; r;) s = r._next, e && r instanceof i && r.target === r.vars.onComplete || o.add(r, r._startTime - r._delay), r = s;
                    return a.add(o, 0), o
                }, m.add = function(r, s, o, l) {
                    var h, c, u, p, f, d;
                    if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)), !(r instanceof t)) {
                        if (r instanceof Array || r && r.push && a(r)) {
                            for (o = o || "normal", l = l || 0, h = s, c = r.length, u = 0; c > u; u++) a(p = r[u]) && (p = new n({
                                tweens: p
                            })), this.add(p, h), "string" != typeof p && "function" != typeof p && ("sequence" === o ? h = p._startTime + p.totalDuration() / p._timeScale : "start" === o && (p._startTime -= p.delay())), h += l;
                            return this._uncache(!0)
                        }
                        if ("string" == typeof r) return this.addLabel(r, s);
                        if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
                        r = i.delayedCall(0, r)
                    }
                    if (e.prototype.add.call(this, r, s), r._time && r.render((this.rawTime() - r._startTime) * r._timeScale, !1, !1), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (f = this, d = f.rawTime() > r._startTime; f._timeline;) d && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1), f = f._timeline;
                    return this
                }, m.remove = function(e) {
                    if (e instanceof t) {
                        this._remove(e, !1);
                        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale, this
                    }
                    if (e instanceof Array || e && e.push && a(e)) {
                        for (var n = e.length; --n > -1;) this.remove(e[n]);
                        return this
                    }
                    return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                }, m._remove = function(t, i) {
                    e.prototype._remove.call(this, t, i);
                    return this._last ? this._time > this.duration() && (this._time = this._duration, this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
                }, m.append = function(t, e) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                }, m.insert = m.insertMultiple = function(t, e, i, n) {
                    return this.add(t, e || 0, i, n)
                }, m.appendMultiple = function(t, e, i, n) {
                    return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n)
                }, m.addLabel = function(t, e) {
                    return this._labels[t] = this._parseTimeOrLabel(e), this
                }, m.addPause = function(t, e, n, r) {
                    var s = i.delayedCall(0, f, n, r || this);
                    return s.vars.onComplete = s.vars.onReverseComplete = e, s.data = "isPause", this._hasPause = !0, this.add(s, t)
                }, m.removeLabel = function(t) {
                    return delete this._labels[t], this
                }, m.getLabelTime = function(t) {
                    return null != this._labels[t] ? this._labels[t] : -1
                }, m._parseTimeOrLabel = function(e, i, n, r) {
                    var s, o;
                    if (r instanceof t && r.timeline === this) this.remove(r);
                    else if (r && (r instanceof Array || r.push && a(r)))
                        for (o = r.length; --o > -1;) r[o] instanceof t && r[o].timeline === this && this.remove(r[o]);
                    if (s = this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration, "string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - s : 0, n);
                    if (i = i || 0, "string" != typeof e || !isNaN(e) && null == this._labels[e]) null == e && (e = s);
                    else {
                        if (-1 === (o = e.indexOf("="))) return null == this._labels[e] ? n ? this._labels[e] = s + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1)), e = o > 1 ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n) : s
                    }
                    return Number(e) + i
                }, m.seek = function(t, e) {
                    return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
                }, m.stop = function() {
                    return this.paused(!0)
                }, m.gotoAndPlay = function(t, e) {
                    return this.play(t, e)
                }, m.gotoAndStop = function(t, e) {
                    return this.pause(t, e)
                }, m.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, r, s, o, a, c, u, p = this._dirty ? this.totalDuration() : this._totalDuration,
                        f = this._time,
                        d = this._startTime,
                        m = this._timeScale,
                        g = this._paused;
                    if (t >= p - 1e-7 && t >= 0) this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (r = !0, o = "onComplete", a = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || this._rawPrevTime < 0 || 1e-10 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (a = !0, this._rawPrevTime > 1e-10 && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, t = p + 1e-4;
                    else if (1e-7 > t)
                        if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && 1e-10 !== this._rawPrevTime && (this._rawPrevTime > 0 || 0 > t && this._rawPrevTime >= 0)) && (o = "onReverseComplete", r = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (a = r = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (a = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && r)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                            t = 0, this._initted || (a = !0)
                        }
                    else {
                        if (this._hasPause && !this._forcingPlayhead && !e) {
                            if (t >= f)
                                for (n = this._first; n && n._startTime <= t && !c;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (c = n), n = n._next;
                            else
                                for (n = this._last; n && n._startTime >= t && !c;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (c = n), n = n._prev;
                            c && (this._time = t = c._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        this._totalTime = this._time = this._rawPrevTime = t
                    }
                    if (this._time !== f && this._first || i || a || c) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0), 0 === f && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")), (u = this._time) >= f)
                            for (n = this._first; n && (s = n._next, u === this._time && (!this._paused || g));)(n._active || n._startTime <= u && !n._paused && !n._gc) && (c === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = s;
                        else
                            for (n = this._last; n && (s = n._prev, u === this._time && (!this._paused || g));) {
                                if (n._active || n._startTime <= f && !n._paused && !n._gc) {
                                    if (c === n) {
                                        for (c = n._prev; c && c.endTime() > this._time;) c.render(c._reversed ? c.totalDuration() - (t - c._startTime) * c._timeScale : (t - c._startTime) * c._timeScale, e, i), c = c._prev;
                                        c = null, this.pause()
                                    }
                                    n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                }
                                n = s
                            }
                        this._onUpdate && (e || (l.length && h(), this._callback("onUpdate"))), o && (this._gc || (d === this._startTime || m !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (r && (l.length && h(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[o] && this._callback(o)))
                    }
                }, m._hasPausedChild = function() {
                    for (var t = this._first; t;) {
                        if (t._paused || t instanceof n && t._hasPausedChild()) return !0;
                        t = t._next
                    }
                    return !1
                }, m.getChildren = function(t, e, n, r) {
                    r = r || -9999999999;
                    for (var s = [], o = this._first, a = 0; o;) o._startTime < r || (o instanceof i ? !1 !== e && (s[a++] = o) : (!1 !== n && (s[a++] = o), !1 !== t && (s = s.concat(o.getChildren(!0, e, n)), a = s.length))), o = o._next;
                    return s
                }, m.getTweensOf = function(t, e) {
                    var n, r, s = this._gc,
                        o = [],
                        a = 0;
                    for (s && this._enabled(!0, !0), r = (n = i.getTweensOf(t)).length; --r > -1;)(n[r].timeline === this || e && this._contains(n[r])) && (o[a++] = n[r]);
                    return s && this._enabled(!1, !0), o
                }, m.recent = function() {
                    return this._recent
                }, m._contains = function(t) {
                    for (var e = t.timeline; e;) {
                        if (e === this) return !0;
                        e = e.timeline
                    }
                    return !1
                }, m.shiftChildren = function(t, e, i) {
                    i = i || 0;
                    for (var n, r = this._first, s = this._labels; r;) r._startTime >= i && (r._startTime += t), r = r._next;
                    if (e)
                        for (n in s) s[n] >= i && (s[n] += t);
                    return this._uncache(!0)
                }, m._kill = function(t, e) {
                    if (!t && !e) return this._enabled(!1, !1);
                    for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(t, e) && (r = !0);
                    return r
                }, m.clear = function(t) {
                    var e = this.getChildren(!1, !0, !0),
                        i = e.length;
                    for (this._time = this._totalTime = 0; --i > -1;) e[i]._enabled(!1, !1);
                    return !1 !== t && (this._labels = {}), this._uncache(!0)
                }, m.invalidate = function() {
                    for (var e = this._first; e;) e.invalidate(), e = e._next;
                    return t.prototype.invalidate.call(this)
                }, m._enabled = function(t, i) {
                    if (t === this._gc)
                        for (var n = this._first; n;) n._enabled(t, !0), n = n._next;
                    return e.prototype._enabled.call(this, t, i)
                }, m.totalTime = function(e, i, n) {
                    this._forcingPlayhead = !0;
                    var r = t.prototype.totalTime.apply(this, arguments);
                    return this._forcingPlayhead = !1, r
                }, m.duration = function(t) {
                    return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t), this) : (this._dirty && this.totalDuration(), this._duration)
                }, m.totalDuration = function(t) {
                    if (!arguments.length) {
                        if (this._dirty) {
                            for (var e, i, n = 0, r = this._last, s = 999999999999; r;) e = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), (i = r._startTime + r._totalDuration / r._timeScale) > n && (n = i), r = e;
                            this._duration = this._totalDuration = n, this._dirty = !1
                        }
                        return this._totalDuration
                    }
                    return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                }, m.paused = function(e) {
                    if (!e)
                        for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
                    return t.prototype.paused.apply(this, arguments)
                }, m.usesFrames = function() {
                    for (var e = this._timeline; e._timeline;) e = e._timeline;
                    return e === t._rootFramesTimeline
                }, m.rawTime = function(t) {
                    return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
                }, n
            }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, i) {
                var n = function(e) {
                        t.call(this, e), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
                    },
                    r = e._internals,
                    s = r.lazyTweens,
                    o = r.lazyRender,
                    a = _gsScope._gsDefine.globals,
                    l = new i(null, null, 1, 0),
                    h = n.prototype = new t;
                return h.constructor = n, h.kill()._gc = !1, n.version = "1.20.2", h.invalidate = function() {
                    return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), t.prototype.invalidate.call(this)
                }, h.addCallback = function(t, i, n, r) {
                    return this.add(e.delayedCall(0, t, n, r), i)
                }, h.removeCallback = function(t, e) {
                    if (t)
                        if (null == e) this._kill(null, t);
                        else
                            for (var i = this.getTweensOf(t, !1), n = i.length, r = this._parseTimeOrLabel(e); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
                    return this
                }, h.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                }, h.tweenTo = function(t, i) {
                    i = i || {};
                    var n, r, s, o = {
                            ease: l,
                            useFrames: this.usesFrames(),
                            immediateRender: !1
                        },
                        h = i.repeat && a.TweenMax || e;
                    for (r in i) o[r] = i[r];
                    return o.time = this._parseTimeOrLabel(t), n = Math.abs(Number(o.time) - this._time) / this._timeScale || .001, s = new h(this, n, o), o.onStart = function() {
                        s.target.paused(!0), s.vars.time !== s.target.time() && n === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale), i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || s, i.onStartParams || [])
                    }, s
                }, h.tweenFromTo = function(t, e, i) {
                    i = i || {}, t = this._parseTimeOrLabel(t), i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                    }, i.immediateRender = !1 !== i.immediateRender;
                    var n = this.tweenTo(e, i);
                    return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                }, h.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var n, r, a, l, h, c, u, p, f = this._dirty ? this.totalDuration() : this._totalDuration,
                        d = this._duration,
                        m = this._time,
                        g = this._totalTime,
                        _ = this._startTime,
                        v = this._timeScale,
                        y = this._rawPrevTime,
                        x = this._paused,
                        b = this._cycle;
                    if (t >= f - 1e-7 && t >= 0) this._locked || (this._totalTime = f, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (r = !0, l = "onComplete", h = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= t && t >= -1e-7 || 0 > y || 1e-10 === y) && y !== t && this._first && (h = !0, y > 1e-10 && (l = "onReverseComplete"))), this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-10, this._yoyo && 0 != (1 & this._cycle) ? this._time = t = 0 : (this._time = d, t = d + 1e-4);
                    else if (1e-7 > t)
                        if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== m || 0 === d && 1e-10 !== y && (y > 0 || 0 > t && y >= 0) && !this._locked) && (l = "onReverseComplete", r = this._reversed), 0 > t) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (h = r = !0, l = "onReverseComplete") : y >= 0 && this._first && (h = !0), this._rawPrevTime = t;
                        else {
                            if (this._rawPrevTime = d || !e || t || this._rawPrevTime === t ? t : 1e-10, 0 === t && r)
                                for (n = this._first; n && 0 === n._startTime;) n._duration || (r = !1), n = n._next;
                            t = 0, this._initted || (h = !0)
                        }
                    else if (0 === d && 0 > y && (h = !0), this._time = this._rawPrevTime = t, this._locked || (this._totalTime = t, 0 !== this._repeat && (c = d + this._repeatDelay, this._cycle = this._totalTime / c >> 0, 0 !== this._cycle && this._cycle === this._totalTime / c && t >= g && this._cycle--, this._time = this._totalTime - this._cycle * c, this._yoyo && 0 != (1 & this._cycle) && (this._time = d - this._time), this._time > d ? (this._time = d, t = d + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)), this._hasPause && !this._forcingPlayhead && !e) {
                        if ((t = this._time) >= m || this._repeat && b !== this._cycle)
                            for (n = this._first; n && n._startTime <= t && !u;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (u = n), n = n._next;
                        else
                            for (n = this._last; n && n._startTime >= t && !u;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (u = n), n = n._prev;
                        u && u._startTime < d && (this._time = t = u._startTime, this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                    }
                    if (this._cycle !== b && !this._locked) {
                        var w = this._yoyo && 0 != (1 & b),
                            T = w === (this._yoyo && 0 != (1 & this._cycle)),
                            S = this._totalTime,
                            P = this._cycle,
                            k = this._rawPrevTime,
                            C = this._time;
                        if (this._totalTime = b * d, this._cycle < b ? w = !w : this._totalTime += d, this._time = m, this._rawPrevTime = 0 === d ? y - 1e-4 : y, this._cycle = b, this._locked = !0, m = w ? 0 : d, this.render(m, e, 0 === d), e || this._gc || this.vars.onRepeat && (this._cycle = P, this._locked = !1, this._callback("onRepeat")), m !== this._time) return;
                        if (T && (this._cycle = b, this._locked = !0, m = w ? d + 1e-4 : -1e-4, this.render(m, !0, !1)), this._locked = !1, this._paused && !x) return;
                        this._time = C, this._totalTime = S, this._cycle = P, this._rawPrevTime = k
                    }
                    if (this._time !== m && this._first || i || h || u) {
                        if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0), 0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")), (p = this._time) >= m)
                            for (n = this._first; n && (a = n._next, p === this._time && (!this._paused || x));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (u === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)), n = a;
                        else
                            for (n = this._last; n && (a = n._prev, p === this._time && (!this._paused || x));) {
                                if (n._active || n._startTime <= m && !n._paused && !n._gc) {
                                    if (u === n) {
                                        for (u = n._prev; u && u.endTime() > this._time;) u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i), u = u._prev;
                                        u = null, this.pause()
                                    }
                                    n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                }
                                n = a
                            }
                        this._onUpdate && (e || (s.length && o(), this._callback("onUpdate"))), l && (this._locked || this._gc || (_ === this._startTime || v !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (r && (s.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[l] && this._callback(l)))
                    } else g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
                }, h.getActive = function(t, e, i) {
                    null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
                    var n, r, s = [],
                        o = this.getChildren(t, e, i),
                        a = 0,
                        l = o.length;
                    for (n = 0; l > n; n++)(r = o[n]).isActive() && (s[a++] = r);
                    return s
                }, h.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(),
                        n = i.length;
                    for (e = 0; n > e; e++)
                        if (i[e].time > t) return i[e].name;
                    return null
                }, h.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1;)
                        if (e[i].time < t) return e[i].name;
                    return null
                }, h.getLabelsArray = function() {
                    var t, e = [],
                        i = 0;
                    for (t in this._labels) e[i++] = {
                        time: this._labels[t],
                        name: t
                    };
                    return e.sort(function(t, e) {
                        return t.time - e.time
                    }), e
                }, h.invalidate = function() {
                    return this._locked = !1, t.prototype.invalidate.call(this)
                }, h.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
                }, h.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
                }, h.totalDuration = function(e) {
                    return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
                }, h.time = function(t, e) {
                    return arguments.length ? (this._dirty && this.totalDuration(), t > this._duration && (t = this._duration), this._yoyo && 0 != (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(t, e)) : this._time
                }, h.repeat = function(t) {
                    return arguments.length ? (this._repeat = t, this._uncache(!0)) : this._repeat
                }, h.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t, this._uncache(!0)) : this._repeatDelay
                }, h.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t, this) : this._yoyo
                }, h.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                }, n
            }, !0),
            function() {
                var t = 180 / Math.PI,
                    e = [],
                    i = [],
                    n = [],
                    r = {},
                    s = _gsScope._gsDefine.globals,
                    o = function(t, e, i, n) {
                        i === n && (i = n - (n - e) / 1e6), t === e && (e = t + (i - t) / 1e6), this.a = t, this.b = e, this.c = i, this.d = n, this.da = n - t, this.ca = i - t, this.ba = e - t
                    },
                    a = function(t, e, i, n) {
                        var r = {
                                a: t
                            },
                            s = {},
                            o = {},
                            a = {
                                c: n
                            },
                            l = (t + e) / 2,
                            h = (e + i) / 2,
                            c = (i + n) / 2,
                            u = (l + h) / 2,
                            p = (h + c) / 2,
                            f = (p - u) / 8;
                        return r.b = l + (t - l) / 4, s.b = u + f, r.c = s.a = (r.b + s.b) / 2, s.c = o.a = (u + p) / 2, o.b = p - f, a.b = c + (n - c) / 4, o.c = a.a = (o.b + a.b) / 2, [r, s, o, a]
                    },
                    l = function(t, r, s, o, l) {
                        var h, c, u, p, f, d, m, g, _, v, y, x, b, w = t.length - 1,
                            T = 0,
                            S = t[0].a;
                        for (h = 0; w > h; h++) f = t[T], c = f.a, u = f.d, p = t[T + 1].d, l ? (y = e[h], x = i[h], b = (x + y) * r * .25 / (o ? .5 : n[h] || .5), d = u - (u - c) * (o ? .5 * r : 0 !== y ? b / y : 0), m = u + (p - u) * (o ? .5 * r : 0 !== x ? b / x : 0), g = u - (d + ((m - d) * (3 * y / (y + x) + .5) / 4 || 0))) : (d = u - (u - c) * r * .5, m = u + (p - u) * r * .5, g = u - (d + m) / 2), d += g, m += g, f.c = _ = d, f.b = 0 !== h ? S : S = f.a + .6 * (f.c - f.a), f.da = u - c, f.ca = _ - c, f.ba = S - c, s ? (v = a(c, S, _, u), t.splice(T, 1, v[0], v[1], v[2], v[3]), T += 4) : T++, S = m;
                        (f = t[T]).b = S, f.c = S + .4 * (f.d - S), f.da = f.d - f.a, f.ca = f.c - f.a, f.ba = S - f.a, s && (v = a(f.a, S, f.c, f.d), t.splice(T, 1, v[0], v[1], v[2], v[3]))
                    },
                    h = function(t, n, r, s) {
                        var a, l, h, c, u, p, f = [];
                        if (s)
                            for (t = [s].concat(t), l = t.length; --l > -1;) "string" == typeof(p = t[l][n]) && "=" === p.charAt(1) && (t[l][n] = s[n] + Number(p.charAt(0) + p.substr(2)));
                        if (0 > (a = t.length - 2)) return f[0] = new o(t[0][n], 0, 0, t[0][n]), f;
                        for (l = 0; a > l; l++) h = t[l][n], c = t[l + 1][n], f[l] = new o(h, 0, 0, c), r && (u = t[l + 2][n], e[l] = (e[l] || 0) + (c - h) * (c - h), i[l] = (i[l] || 0) + (u - c) * (u - c));
                        return f[l] = new o(t[l][n], 0, 0, t[l + 1][n]), f
                    },
                    c = function(t, s, o, a, c, u) {
                        var p, f, d, m, g, _, v, y, x = {},
                            b = [],
                            w = u || t[0];
                        c = "string" == typeof c ? "," + c + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == s && (s = 1);
                        for (f in t[0]) b.push(f);
                        if (t.length > 1) {
                            for (y = t[t.length - 1], v = !0, p = b.length; --p > -1;)
                                if (f = b[p], Math.abs(w[f] - y[f]) > .05) {
                                    v = !1;
                                    break
                                } v && (t = t.concat(), u && t.unshift(u), t.push(t[1]), u = t[t.length - 3])
                        }
                        for (e.length = i.length = n.length = 0, p = b.length; --p > -1;) f = b[p], r[f] = -1 !== c.indexOf("," + f + ","), x[f] = h(t, f, r[f], u);
                        for (p = e.length; --p > -1;) e[p] = Math.sqrt(e[p]), i[p] = Math.sqrt(i[p]);
                        if (!a) {
                            for (p = b.length; --p > -1;)
                                if (r[f])
                                    for (d = x[b[p]], _ = d.length - 1, m = 0; _ > m; m++) g = d[m + 1].da / i[m] + d[m].da / e[m] || 0, n[m] = (n[m] || 0) + g * g;
                            for (p = n.length; --p > -1;) n[p] = Math.sqrt(n[p])
                        }
                        for (p = b.length, m = o ? 4 : 1; --p > -1;) f = b[p], d = x[f], l(d, s, o, a, r[f]), v && (d.splice(0, m), d.splice(d.length - m, m));
                        return x
                    },
                    u = function(t, e, i) {
                        for (var n, r, s, o, a, l, h, c, u, p, f, d = 1 / i, m = t.length; --m > -1;)
                            for (p = t[m], s = p.a, o = p.d - s, a = p.c - s, l = p.b - s, n = r = 0, c = 1; i >= c; c++) h = d * c, u = 1 - h, n = r - (r = (h * h * o + 3 * u * (h * a + u * l)) * h), f = m * i + c - 1, e[f] = (e[f] || 0) + n * n
                    },
                    p = _gsScope._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.8",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t, e instanceof Array && (e = {
                                values: e
                            }), this._func = {}, this._mod = {}, this._props = [], this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var n, r, s, a, l, h = e.values || [],
                                p = {},
                                f = h[0],
                                d = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = d ? d instanceof Array ? d : [
                                ["x", "y", "rotation", !0 === d ? 0 : Number(d) || 0]
                            ] : null;
                            for (n in f) this._props.push(n);
                            for (s = this._props.length; --s > -1;) n = this._props[s], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof t[n], p[n] = r ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]), l || p[n] !== h[0][n] && (l = p);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? c(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, l) : function(t, e, i) {
                                    var n, r, s, a, l, h, c, u, p, f, d, m = {},
                                        g = "cubic" === (e = e || "soft") ? 3 : 2,
                                        _ = "soft" === e,
                                        v = [];
                                    if (_ && i && (t = [i].concat(t)), null == t || t.length < g + 1) throw "invalid Bezier data";
                                    for (p in t[0]) v.push(p);
                                    for (h = v.length; --h > -1;) {
                                        for (m[p = v[h]] = l = [], f = 0, u = t.length, c = 0; u > c; c++) n = null == i ? t[c][p] : "string" == typeof(d = t[c][p]) && "=" === d.charAt(1) ? i[p] + Number(d.charAt(0) + d.substr(2)) : Number(d), _ && c > 1 && u - 1 > c && (l[f++] = (n + l[f - 2]) / 2), l[f++] = n;
                                        for (u = f - g + 1, f = 0, c = 0; u > c; c += g) n = l[c], r = l[c + 1], s = l[c + 2], a = 2 === g ? 0 : l[c + 3], l[f++] = d = 3 === g ? new o(n, r, s, a) : new o(n, (2 * r + n) / 3, (2 * r + s) / 3, s);
                                        l.length = f
                                    }
                                    return m
                                }(h, e.type, p), this._segCount = this._beziers[n].length, this._timeRes) {
                                var m = function(t, e) {
                                    var i, n, r, s, o = [],
                                        a = [],
                                        l = 0,
                                        h = 0,
                                        c = (e = e >> 0 || 6) - 1,
                                        p = [],
                                        f = [];
                                    for (i in t) u(t[i], o, e);
                                    for (r = o.length, n = 0; r > n; n++) l += Math.sqrt(o[n]), s = n % e, f[s] = l, s === c && (h += l, s = n / e >> 0, p[s] = f, a[s] = h, l = 0, f = []);
                                    return {
                                        length: h,
                                        lengths: a,
                                        segments: p
                                    }
                                }(this._beziers, this._timeRes);
                                this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
                            }
                            if (d = this._autoRotate)
                                for (this._initialRotations = [], d[0] instanceof Array || (this._autoRotate = d = [d]), s = d.length; --s > -1;) {
                                    for (a = 0; 3 > a; a++) n = d[s][a], this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                                    n = d[s][2], this._initialRotations[s] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0, this._overwriteProps.push(n)
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
                        },
                        set: function(e) {
                            var i, n, r, s, o, a, l, h, c, u, p = this._segCount,
                                f = this._func,
                                d = this._target,
                                m = e !== this._startRatio;
                            if (this._timeRes) {
                                if (c = this._lengths, u = this._curSeg, e *= this._length, r = this._li, e > this._l2 && p - 1 > r) {
                                    for (h = p - 1; h > r && (this._l2 = c[++r]) <= e;);
                                    this._l1 = c[r - 1], this._li = r, this._curSeg = u = this._segments[r], this._s2 = u[this._s1 = this._si = 0]
                                } else if (e < this._l1 && r > 0) {
                                    for (; r > 0 && (this._l1 = c[--r]) >= e;);
                                    0 === r && e < this._l1 ? this._l1 = 0 : r++, this._l2 = c[r], this._li = r, this._curSeg = u = this._segments[r], this._s1 = u[(this._si = u.length - 1) - 1] || 0, this._s2 = u[this._si]
                                }
                                if (i = r, e -= this._l1, r = this._si, e > this._s2 && r < u.length - 1) {
                                    for (h = u.length - 1; h > r && (this._s2 = u[++r]) <= e;);
                                    this._s1 = u[r - 1], this._si = r
                                } else if (e < this._s1 && r > 0) {
                                    for (; r > 0 && (this._s1 = u[--r]) >= e;);
                                    0 === r && e < this._s1 ? this._s1 = 0 : r++, this._s2 = u[r], this._si = r
                                }
                                a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                            } else i = 0 > e ? 0 : e >= 1 ? p - 1 : p * e >> 0, a = (e - i * (1 / p)) * p;
                            for (n = 1 - a, r = this._props.length; --r > -1;) s = this._props[r], o = this._beziers[s][i], l = (a * a * o.da + 3 * n * (a * o.ca + n * o.ba)) * a + o.a, this._mod[s] && (l = this._mod[s](l, d)), f[s] ? d[s](l) : d[s] = l;
                            if (this._autoRotate) {
                                var g, _, v, y, x, b, w, T = this._autoRotate;
                                for (r = T.length; --r > -1;) s = T[r][2], b = T[r][3] || 0, w = !0 === T[r][4] ? 1 : t, o = this._beziers[T[r][0]], g = this._beziers[T[r][1]], o && g && (o = o[i], g = g[i], _ = o.a + (o.b - o.a) * a, y = o.b + (o.c - o.b) * a, _ += (y - _) * a, y += (o.c + (o.d - o.c) * a - y) * a, v = g.a + (g.b - g.a) * a, x = g.b + (g.c - g.b) * a, v += (x - v) * a, x += (g.c + (g.d - g.c) * a - x) * a, l = m ? Math.atan2(x - v, y - _) * w + b : this._initialRotations[r], this._mod[s] && (l = this._mod[s](l, d)), f[s] ? d[s](l) : d[s] = l)
                            }
                        }
                    }),
                    f = p.prototype;
                p.bezierThrough = c, p.cubicToQuadratic = a, p._autoCSS = !0, p.quadraticToCubic = function(t, e, i) {
                    return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i)
                }, p._cssRegister = function() {
                    var t = s.CSSPlugin;
                    if (t) {
                        var e = t._internals,
                            i = e._parseToProxy,
                            n = e._setPluginRatio,
                            r = e.CSSPropTween;
                        e._registerComplexSpecialProp("bezier", {
                            parser: function(t, e, s, o, a, l) {
                                e instanceof Array && (e = {
                                    values: e
                                }), l = new p;
                                var h, c, u, f = e.values,
                                    d = f.length - 1,
                                    m = [],
                                    g = {};
                                if (0 > d) return a;
                                for (h = 0; d >= h; h++) u = i(t, f[h], o, a, l, d !== h), m[h] = u.end;
                                for (c in e) g[c] = e[c];
                                return g.values = m, a = new r(t, "bezier", 0, 0, u.pt, 2), a.data = u, a.plugin = l, a.setRatio = n, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (h = !0 === g.autoRotate ? 0 : Number(g.autoRotate), g.autoRotate = null != u.end.left ? [
                                    ["left", "top", "rotation", h, !1]
                                ] : null != u.end.x && [
                                    ["x", "y", "rotation", h, !1]
                                ]), g.autoRotate && (o._transform || o._enableTransforms(!1), u.autoRotate = o._target._gsTransform, u.proxy.rotation = u.autoRotate.rotation || 0, o._overwriteProps.push("rotation")), l._onInitTween(u.proxy, g, o._tween), a
                            }
                        })
                    }
                }, f._mod = function(t) {
                    for (var e, i = this._overwriteProps, n = i.length; --n > -1;)(e = t[i[n]]) && "function" == typeof e && (this._mod[i[n]] = e)
                }, f._kill = function(t) {
                    var e, i, n = this._props;
                    for (e in this._beziers)
                        if (e in t)
                            for (delete this._beziers[e], delete this._func[e], i = n.length; --i > -1;) n[i] === e && n.splice(i, 1);
                    if (n = this._autoRotate)
                        for (i = n.length; --i > -1;) t[n[i][2]] && n.splice(i, 1);
                    return this._super._kill.call(this, t)
                }
            }(), _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                var i, n, r, s, o = function() {
                        t.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = o.prototype.setRatio
                    },
                    a = _gsScope._gsDefine.globals,
                    l = {},
                    h = o.prototype = new t("css");
                h.constructor = o, o.version = "1.20.0", o.API = 2, o.defaultTransformPerspective = 0, o.defaultSkewType = "compensated", o.defaultSmoothOrigin = !0, h = "px", o.suffixMap = {
                    top: h,
                    right: h,
                    bottom: h,
                    left: h,
                    width: h,
                    height: h,
                    fontSize: h,
                    padding: h,
                    margin: h,
                    perspective: h,
                    lineHeight: ""
                };
                var c, u, p, f, d, m, g, _, v = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
                    y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
                    x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
                    b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
                    w = /(?:\d|\-|\+|=|#|\.)*/g,
                    T = /opacity *= *([^)]*)/i,
                    S = /opacity:([^;]*)/i,
                    P = /alpha\(opacity *=.+?\)/i,
                    k = /^(rgb|hsl)/,
                    C = /([A-Z])/g,
                    A = /-([a-z])/gi,
                    E = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
                    O = function(t, e) {
                        return e.toUpperCase()
                    },
                    D = /(?:Left|Right|Width)/i,
                    R = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
                    M = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
                    N = /,(?=[^\)]*(?:\(|$))/gi,
                    X = /[\s,\(]/i,
                    L = Math.PI / 180,
                    j = 180 / Math.PI,
                    F = {},
                    z = {
                        style: {}
                    },
                    Y = _gsScope.document || {
                        createElement: function() {
                            return z
                        }
                    },
                    H = function(t, e) {
                        return Y.createElementNS ? Y.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : Y.createElement(t)
                    },
                    I = H("div"),
                    B = H("img"),
                    q = o._internals = {
                        _specialProps: l
                    },
                    W = (_gsScope.navigator || {}).userAgent || "",
                    U = function() {
                        var t = W.indexOf("Android"),
                            e = H("a");
                        return p = -1 !== W.indexOf("Safari") && -1 === W.indexOf("Chrome") && (-1 === t || parseFloat(W.substr(t + 8, 2)) > 3), d = p && parseFloat(W.substr(W.indexOf("Version/") + 8, 2)) < 6, f = -1 !== W.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(W) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(W)) && (m = parseFloat(RegExp.$1)), !!e && (e.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(e.style.opacity))
                    }(),
                    $ = function(t) {
                        return T.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    },
                    V = function(t) {
                        _gsScope.console && console.log(t)
                    },
                    G = "",
                    Z = "",
                    Q = function(t, e) {
                        var i, n, r = (e = e || I).style;
                        if (void 0 !== r[t]) return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + t];);
                        return n >= 0 ? (Z = 3 === n ? "ms" : i[n], G = "-" + Z.toLowerCase() + "-", Z + t) : null
                    },
                    K = Y.defaultView ? Y.defaultView.getComputedStyle : function() {},
                    J = o.getStyle = function(t, e, i, n, r) {
                        var s;
                        return U || "opacity" !== e ? (!n && t.style[e] ? s = t.style[e] : (i = i || K(t)) ? s = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(C, "-$1").toLowerCase()) : t.currentStyle && (s = t.currentStyle[e]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : $(t)
                    },
                    tt = q.convertToPixels = function(t, i, n, r, s) {
                        if ("px" === r || !r && "lineHeight" !== i) return n;
                        if ("auto" === r || !n) return 0;
                        var a, l, h, c = D.test(i),
                            u = t,
                            p = I.style,
                            f = 0 > n,
                            d = 1 === n;
                        if (f && (n = -n), d && (n *= 100), "lineHeight" !== i || r)
                            if ("%" === r && -1 !== i.indexOf("border")) a = n / 100 * (c ? t.clientWidth : t.clientHeight);
                            else {
                                if (p.cssText = "border:0 solid red;position:" + J(t, "position") + ";line-height:0;", "%" !== r && u.appendChild && "v" !== r.charAt(0) && "rem" !== r) p[c ? "borderLeftWidth" : "borderTopWidth"] = n + r;
                                else {
                                    if (u = t.parentNode || Y.body, -1 !== J(u, "display").indexOf("flex") && (p.position = "absolute"), l = u._gsCache, h = e.ticker.frame, l && c && l.time === h) return l.width * n / 100;
                                    p[c ? "width" : "height"] = n + r
                                }
                                u.appendChild(I), a = parseFloat(I[c ? "offsetWidth" : "offsetHeight"]), u.removeChild(I), c && "%" === r && !1 !== o.cacheWidths && (l = u._gsCache = u._gsCache || {}, l.time = h, l.width = a / n * 100), 0 !== a || s || (a = tt(t, i, n, r, !0))
                            }
                        else l = K(t).lineHeight, t.style.lineHeight = n, a = parseFloat(K(t).lineHeight), t.style.lineHeight = l;
                        return d && (a /= 100), f ? -a : a
                    },
                    et = q.calculateOffset = function(t, e, i) {
                        if ("absolute" !== J(t, "position", i)) return 0;
                        var n = "left" === e ? "Left" : "Top",
                            r = J(t, "margin" + n, i);
                        return t["offset" + n] - (tt(t, e, parseFloat(r), r.replace(w, "")) || 0)
                    },
                    it = function(t, e) {
                        var i, n, r, s = {};
                        if (e = e || K(t, null))
                            if (i = e.length)
                                for (; --i > -1;)(-1 === (r = e[i]).indexOf("-transform") || Et === r) && (s[r.replace(A, O)] = e.getPropertyValue(r));
                            else
                                for (i in e)(-1 === i.indexOf("Transform") || At === i) && (s[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e) "string" == typeof i && void 0 === s[i] && (s[i.replace(A, O)] = e[i]);
                        return U || (s.opacity = $(t)), n = It(t, e, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, Dt && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s
                    },
                    nt = function(t, e, i, n, r) {
                        var s, o, a, l = {},
                            h = t.style;
                        for (o in i) "cssText" !== o && "length" !== o && isNaN(o) && (e[o] !== (s = i[o]) || r && r[o]) && -1 === o.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[o] = "auto" !== s || "left" !== o && "top" !== o ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof e[o] || "" === e[o].replace(b, "") ? s : 0 : et(t, o), void 0 !== h[o] && (a = new vt(h, o, h[o], a)));
                        if (n)
                            for (o in n) "className" !== o && (l[o] = n[o]);
                        return {
                            difs: l,
                            firstMPT: a
                        }
                    },
                    rt = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    },
                    st = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
                    ot = function(t, e, i) {
                        if ("svg" === (t.nodeName + "").toLowerCase()) return (i || K(t))[e] || 0;
                        if (t.getCTM && zt(t)) return t.getBBox()[e] || 0;
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
                            r = rt[e],
                            s = r.length;
                        for (i = i || K(t, null); --s > -1;) n -= parseFloat(J(t, "padding" + r[s], i, !0)) || 0, n -= parseFloat(J(t, "border" + r[s] + "Width", i, !0)) || 0;
                        return n
                    },
                    at = function(t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t) return t + " ";
                        (null == t || "" === t) && (t = "0 0");
                        var i, n = t.split(" "),
                            r = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : n[0],
                            s = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : n[1];
                        if (n.length > 3 && !e) {
                            for (n = t.split(", ").join(",").split(","), t = [], i = 0; i < n.length; i++) t.push(at(n[i]));
                            return t.join(",")
                        }
                        return null == s ? s = "center" === r ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), t = r + " " + s + (n.length > 2 ? " " + n[2] : ""), e && (e.oxp = -1 !== r.indexOf("%"), e.oyp = -1 !== s.indexOf("%"), e.oxr = "=" === r.charAt(1), e.oyr = "=" === s.charAt(1), e.ox = parseFloat(r.replace(b, "")), e.oy = parseFloat(s.replace(b, "")), e.v = t), e || t
                    },
                    lt = function(t, e) {
                        return "function" == typeof t && (t = t(_, g)), "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                    },
                    ht = function(t, e) {
                        return "function" == typeof t && (t = t(_, g)), null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                    },
                    ct = function(t, e, i, n) {
                        var r, s, o, a, l;
                        return "function" == typeof t && (t = t(_, g)), null == t ? a = e : "number" == typeof t ? a = t : (r = 360, s = t.split("_"), l = "=" === t.charAt(1), o = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : j) - (l ? 0 : e), s.length && (n && (n[i] = e + o), -1 !== t.indexOf("short") && (o %= r) != o % (r / 2) && (o = 0 > o ? o + r : o - r), -1 !== t.indexOf("_cw") && 0 > o ? o = (o + 9999999999 * r) % r - (o / r | 0) * r : -1 !== t.indexOf("ccw") && o > 0 && (o = (o - 9999999999 * r) % r - (o / r | 0) * r)), a = e + o), 1e-6 > a && a > -1e-6 && (a = 0), a
                    },
                    ut = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    },
                    pt = function(t, e, i) {
                        return 255 * (1 > 6 * (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t) ? e + (i - e) * t * 6 : .5 > t ? i : 2 > 3 * t ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                    },
                    ft = o.parseColor = function(t, e) {
                        var i, n, r, s, o, a, l, h, c, u, p;
                        if (t)
                            if ("number" == typeof t) i = [t >> 16, t >> 8 & 255, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)), ut[t]) i = ut[t];
                                else if ("#" === t.charAt(0)) 4 === t.length && (n = t.charAt(1), r = t.charAt(2), s = t.charAt(3), t = "#" + n + n + r + r + s + s), t = parseInt(t.substr(1), 16), i = [t >> 16, t >> 8 & 255, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (i = p = t.match(v), e) {
                                        if (-1 !== t.indexOf("=")) return t.match(y)
                                    } else o = Number(i[0]) % 360 / 360, a = Number(i[1]) / 100, l = Number(i[2]) / 100, r = .5 >= l ? l * (a + 1) : l + a - l * a, n = 2 * l - r, i.length > 3 && (i[3] = Number(t[3])), i[0] = pt(o + 1 / 3, n, r), i[1] = pt(o, n, r), i[2] = pt(o - 1 / 3, n, r);
                                else i = t.match(v) || ut.transparent;
                                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
                            }
                        else i = ut.black;
                        return e && !p && (n = i[0] / 255, r = i[1] / 255, s = i[2] / 255, h = Math.max(n, r, s), c = Math.min(n, r, s), l = (h + c) / 2, h === c ? o = a = 0 : (u = h - c, a = l > .5 ? u / (2 - h - c) : u / (h + c), o = h === n ? (r - s) / u + (s > r ? 6 : 0) : h === r ? (s - n) / u + 2 : (n - r) / u + 4, o *= 60), i[0] = o + .5 | 0, i[1] = 100 * a + .5 | 0, i[2] = 100 * l + .5 | 0), i
                    },
                    dt = function(t, e) {
                        var i, n, r, s = t.match(mt) || [],
                            o = 0,
                            a = "";
                        if (!s.length) return t;
                        for (i = 0; i < s.length; i++) n = s[i], r = t.substr(o, t.indexOf(n, o) - o), o += r.length + n.length, 3 === (n = ft(n, e)).length && n.push(1), a += r + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                        return a + t.substr(o)
                    },
                    mt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                for (h in ut) mt += "|" + h + "\\b";
                mt = new RegExp(mt + ")", "gi"), o.colorStringFilter = function(t) {
                    var e, i = t[0] + " " + t[1];
                    mt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), t[0] = dt(t[0], e), t[1] = dt(t[1], e)), mt.lastIndex = 0
                }, e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
                var gt = function(t, e, i, n) {
                        if (null == t) return function(t) {
                            return t
                        };
                        var r, s = e ? (t.match(mt) || [""])[0] : "",
                            o = t.split(s).join("").match(x) || [],
                            a = t.substr(0, t.indexOf(o[0])),
                            l = ")" === t.charAt(t.length - 1) ? ")" : "",
                            h = -1 !== t.indexOf(" ") ? " " : ",",
                            c = o.length,
                            u = c > 0 ? o[0].replace(v, "") : "";
                        return c ? r = e ? function(t) {
                            var e, p, f, d;
                            if ("number" == typeof t) t += u;
                            else if (n && N.test(t)) {
                                for (d = t.replace(N, "|").split("|"), f = 0; f < d.length; f++) d[f] = r(d[f]);
                                return d.join(",")
                            }
                            if (e = (t.match(mt) || [s])[0], p = t.split(e).join("").match(x) || [], f = p.length, c > f--)
                                for (; ++f < c;) p[f] = i ? p[(f - 1) / 2 | 0] : o[f];
                            return a + p.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                        } : function(t) {
                            var e, s, p;
                            if ("number" == typeof t) t += u;
                            else if (n && N.test(t)) {
                                for (s = t.replace(N, "|").split("|"), p = 0; p < s.length; p++) s[p] = r(s[p]);
                                return s.join(",")
                            }
                            if (e = t.match(x) || [], p = e.length, c > p--)
                                for (; ++p < c;) e[p] = i ? e[(p - 1) / 2 | 0] : o[p];
                            return a + e.join(h) + l
                        } : function(t) {
                            return t
                        }
                    },
                    _t = function(t) {
                        return t = t.split(","),
                            function(e, i, n, r, s, o, a) {
                                var l, h = (i + "").split(" ");
                                for (a = {}, l = 0; 4 > l; l++) a[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                                return r.parse(e, a, s, o)
                            }
                    },
                    vt = (q._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, r, s, o = this.data, a = o.proxy, l = o.firstMPT; l;) e = a[l.v], l.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0), l.t[l.p] = e, l = l._next;
                        if (o.autoRotate && (o.autoRotate.rotation = o.mod ? o.mod(a.rotation, this.t) : a.rotation), 1 === t || 0 === t)
                            for (l = o.firstMPT, s = 1 === t ? "e" : "b"; l;) {
                                if ((i = l.t).type) {
                                    if (1 === i.type) {
                                        for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                                        i[s] = r
                                    }
                                } else i[s] = i.s + i.xs0;
                                l = l._next
                            }
                    }, function(t, e, i, n, r) {
                        this.t = t, this.p = e, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
                    }),
                    yt = (q._parseToProxy = function(t, e, i, n, r, s) {
                        var o, a, l, h, c, u = n,
                            p = {},
                            f = {},
                            d = i._transform,
                            m = F;
                        for (i._transform = null, F = e, n = c = i.parse(t, e, n, r), F = m, s && (i._transform = d, u && (u._prev = null, u._prev && (u._prev._next = null))); n && n !== u;) {
                            if (n.type <= 1 && (a = n.p, f[a] = n.s + n.c, p[a] = n.s, s || (h = new vt(n, "s", a, h, n.r), n.c = 0), 1 === n.type))
                                for (o = n.l; --o > 0;) l = "xn" + o, a = n.p + "_" + l, f[a] = n.data[l], p[a] = n[l], s || (h = new vt(n, l, a, h, n.rxp[l]));
                            n = n._next
                        }
                        return {
                            proxy: p,
                            end: f,
                            firstMPT: h,
                            pt: c
                        }
                    }, q.CSSPropTween = function(t, e, n, r, o, a, l, h, c, u, p) {
                        this.t = t, this.p = e, this.s = n, this.c = r, this.n = l || e, t instanceof yt || s.push(this.n), this.r = h, this.type = a || 0, c && (this.pr = c, i = !0), this.b = void 0 === u ? n : u, this.e = void 0 === p ? n + r : p, o && (this._next = o, o._prev = this)
                    }),
                    xt = function(t, e, i, n, r, s) {
                        var o = new yt(t, e, i, n - i, r, -1, s);
                        return o.b = i, o.e = o.xs0 = n, o
                    },
                    bt = o.parseComplex = function(t, e, i, n, r, s, a, l, h, u) {
                        i = i || s || "", "function" == typeof n && (n = n(_, g)), a = new yt(t, e, 0, 0, a, u ? 2 : 1, null, !1, l, i, n), n += "", r && mt.test(n + i) && (n = [i, n], o.colorStringFilter(n), i = n[0], n = n[1]);
                        var p, f, d, m, x, b, w, T, S, P, k, C, A, E = i.split(", ").join(",").split(" "),
                            O = n.split(", ").join(",").split(" "),
                            D = E.length,
                            R = !1 !== c;
                        for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (E = E.join(" ").replace(N, ", ").split(" "), O = O.join(" ").replace(N, ", ").split(" "), D = E.length), D !== O.length && (E = (s || "").split(" "), D = E.length), a.plugin = h, a.setRatio = u, mt.lastIndex = 0, p = 0; D > p; p++)
                            if (m = E[p], x = O[p], (T = parseFloat(m)) || 0 === T) a.appendXtra("", T, lt(x, T), x.replace(y, ""), R && -1 !== x.indexOf("px"), !0);
                            else if (r && mt.test(m)) C = x.indexOf(")") + 1, C = ")" + (C ? x.substr(C) : ""), A = -1 !== x.indexOf("hsl") && U, P = x, m = ft(m, A), x = ft(x, A), (S = m.length + x.length > 6) && !U && 0 === x[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent", a.e = a.e.split(O[p]).join("transparent")) : (U || (S = !1), A ? a.appendXtra(P.substr(0, P.indexOf("hsl")) + (S ? "hsla(" : "hsl("), m[0], lt(x[0], m[0]), ",", !1, !0).appendXtra("", m[1], lt(x[1], m[1]), "%,", !1).appendXtra("", m[2], lt(x[2], m[2]), S ? "%," : "%" + C, !1) : a.appendXtra(P.substr(0, P.indexOf("rgb")) + (S ? "rgba(" : "rgb("), m[0], x[0] - m[0], ",", !0, !0).appendXtra("", m[1], x[1] - m[1], ",", !0).appendXtra("", m[2], x[2] - m[2], S ? "," : C, !0), S && (m = m.length < 4 ? 1 : m[3], a.appendXtra("", m, (x.length < 4 ? 1 : x[3]) - m, C, !1))), mt.lastIndex = 0;
                        else if (b = m.match(v)) {
                            if (!(w = x.match(y)) || w.length !== b.length) return a;
                            for (d = 0, f = 0; f < b.length; f++) k = b[f], P = m.indexOf(k, d), a.appendXtra(m.substr(d, P - d), Number(k), lt(w[f], k), "", R && "px" === m.substr(P + k.length, 2), 0 === f), d = P + k.length;
                            a["xs" + a.l] += m.substr(d)
                        } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + x : x;
                        if (-1 !== n.indexOf("=") && a.data) {
                            for (C = a.xs0 + a.data.s, p = 1; p < a.l; p++) C += a["xs" + p] + a.data["xn" + p];
                            a.e = C + a["xs" + p]
                        }
                        return a.l || (a.type = -1, a.xs0 = a.e), a.xfirst || a
                    },
                    wt = 9;
                for ((h = yt.prototype).l = h.pr = 0; --wt > 0;) h["xn" + wt] = 0, h["xs" + wt] = "";
                h.xs0 = "", h._next = h._prev = h.xfirst = h.data = h.plugin = h.setRatio = h.rxp = null, h.appendXtra = function(t, e, i, n, r, s) {
                    var o = this.l;
                    return this["xs" + o] += s && (o || this["xs" + o]) ? " " + t : t || "", i || 0 === o || this.plugin ? (this.l++, this.type = this.setRatio ? 2 : 1, this["xs" + this.l] = n || "", o > 0 ? (this.data["xn" + o] = e + i, this.rxp["xn" + o] = r, this["xn" + o] = e, this.plugin || (this.xfirst = new yt(this, "xn" + o, e, i, this.xfirst || this, 0, this.n, r, this.pr), this.xfirst.xs0 = 0), this) : (this.data = {
                        s: e + i
                    }, this.rxp = {}, this.s = e, this.c = i, this.r = r, this)) : (this["xs" + o] += e + (n || ""), this)
                };
                var Tt = function(t, e) {
                        e = e || {}, this.p = e.prefix ? Q(t) || t : t, l[t] = l[this.p] = this, this.format = e.formatter || gt(e.defaultValue, e.color, e.collapsible, e.multi), e.parser && (this.parse = e.parser), this.clrs = e.color, this.multi = e.multi, this.keyword = e.keyword, this.dflt = e.defaultValue, this.pr = e.priority || 0
                    },
                    St = q._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var n, r = t.split(","),
                            s = e.defaultValue;
                        for (i = i || [s], n = 0; n < r.length; n++) e.prefix = 0 === n && e.prefix, e.defaultValue = i[n] || s, new Tt(r[n], e)
                    },
                    Pt = q._registerPluginProp = function(t) {
                        if (!l[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            St(t, {
                                parser: function(t, i, n, r, s, o, h) {
                                    var c = a.com.greensock.plugins[e];
                                    return c ? (c._cssRegister(), l[n].parse(t, i, n, r, s, o, h)) : (V("Error: " + e + " js file not loaded."), s)
                                }
                            })
                        }
                    };
                (h = Tt.prototype).parseComplex = function(t, e, i, n, r, s) {
                    var o, a, l, h, c, u, p = this.keyword;
                    if (this.multi && (N.test(i) || N.test(e) ? (a = e.replace(N, "|").split("|"), l = i.replace(N, "|").split("|")) : p && (a = [e], l = [i])), l) {
                        for (h = l.length > a.length ? l.length : a.length, o = 0; h > o; o++) e = a[o] = a[o] || this.dflt, i = l[o] = l[o] || this.dflt, p && (c = e.indexOf(p), u = i.indexOf(p), c !== u && (-1 === u ? a[o] = a[o].split(p).join("") : -1 === c && (a[o] += " " + p)));
                        e = a.join(", "), i = l.join(", ")
                    }
                    return bt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s)
                }, h.parse = function(t, e, i, n, s, o, a) {
                    return this.parseComplex(t.style, this.format(J(t, this.p, r, !1, this.dflt)), this.format(e), s, o)
                }, o.registerSpecialProp = function(t, e, i) {
                    St(t, {
                        parser: function(t, n, r, s, o, a, l) {
                            var h = new yt(t, r, 0, 0, o, 2, r, !1, i);
                            return h.plugin = a, h.setRatio = e(t, n, s._tween, r), h
                        },
                        priority: i
                    })
                }, o.useSVGTransformAttr = !0;
                var kt, Ct = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
                    At = Q("transform"),
                    Et = G + "transform",
                    Ot = Q("transformOrigin"),
                    Dt = null !== Q("perspective"),
                    Rt = q.Transform = function() {
                        this.perspective = parseFloat(o.defaultTransformPerspective) || 0, this.force3D = !(!1 === o.defaultForce3D || !Dt) && (o.defaultForce3D || "auto")
                    },
                    Mt = _gsScope.SVGElement,
                    Nt = function(t, e, i) {
                        var n, r = Y.createElementNS("http://www.w3.org/2000/svg", t),
                            s = /([a-z])([A-Z])/g;
                        for (n in i) r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
                        return e.appendChild(r), r
                    },
                    Xt = Y.documentElement || {},
                    Lt = function() {
                        var t, e, i, n = m || /Android/i.test(W) && !_gsScope.chrome;
                        return Y.createElementNS && !n && (t = Nt("svg", Xt), e = Nt("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }), i = e.getBoundingClientRect().width, e.style[Ot] = "50% 50%", e.style[At] = "scaleX(0.5)", n = i === e.getBoundingClientRect().width && !(f && Dt), Xt.removeChild(t)), n
                    }(),
                    jt = function(t, e, i, n, r, s) {
                        var a, l, h, c, u, p, f, d, m, g, _, v, y, x, b = t._gsTransform,
                            w = Ht(t, !0);
                        b && (y = b.xOrigin, x = b.yOrigin), (!n || (a = n.split(" ")).length < 2) && (0 === (f = t.getBBox()).x && 0 === f.y && f.width + f.height === 0 && (f = {
                            x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                            y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                            width: 0,
                            height: 0
                        }), e = at(e).split(" "), a = [(-1 !== e[0].indexOf("%") ? parseFloat(e[0]) / 100 * f.width : parseFloat(e[0])) + f.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * f.height : parseFloat(e[1])) + f.y]), i.xOrigin = c = parseFloat(a[0]), i.yOrigin = u = parseFloat(a[1]), n && w !== Yt && (p = w[0], f = w[1], d = w[2], m = w[3], g = w[4], _ = w[5], (v = p * m - f * d) && (l = c * (m / v) + u * (-d / v) + (d * _ - m * g) / v, h = c * (-f / v) + u * (p / v) - (p * _ - f * g) / v, c = i.xOrigin = a[0] = l, u = i.yOrigin = a[1] = h)), b && (s && (i.xOffset = b.xOffset, i.yOffset = b.yOffset, b = i), r || !1 !== r && !1 !== o.defaultSmoothOrigin ? (l = c - y, h = u - x, b.xOffset += l * w[0] + h * w[2] - l, b.yOffset += l * w[1] + h * w[3] - h) : b.xOffset = b.yOffset = 0), s || t.setAttribute("data-svg-origin", a.join(" "))
                    },
                    Ft = function(t) {
                        var e, i = H("svg", this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
                            n = this.parentNode,
                            r = this.nextSibling,
                            s = this.style.cssText;
                        if (Xt.appendChild(i), i.appendChild(this), this.style.display = "block", t) try {
                            e = this.getBBox(), this._originalGetBBox = this.getBBox, this.getBBox = Ft
                        } catch (t) {} else this._originalGetBBox && (e = this._originalGetBBox());
                        return r ? n.insertBefore(this, r) : n.appendChild(this), Xt.removeChild(i), this.style.cssText = s, e
                    },
                    zt = function(t) {
                        return !(!(Mt && t.getCTM && function(t) {
                            try {
                                return t.getBBox()
                            } catch (e) {
                                return Ft.call(t, !0)
                            }
                        }(t)) || t.parentNode && !t.ownerSVGElement)
                    },
                    Yt = [1, 0, 0, 1, 0, 0],
                    Ht = function(t, e) {
                        var i, n, r, s, o, a, l = t._gsTransform || new Rt,
                            h = t.style;
                        if (At ? n = J(t, Et, null, !0) : t.currentStyle && (n = t.currentStyle.filter.match(R), n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, !At || !(a = "none" === K(t).display) && t.parentNode || (a && (s = h.display, h.display = "block"), t.parentNode || (o = 1, Xt.appendChild(t)), n = J(t, Et, null, !0), i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, s ? h.display = s : a && Ut(h, "display"), o && Xt.removeChild(t)), (l.svg || t.getCTM && zt(t)) && (i && -1 !== (h[At] + "").indexOf("matrix") && (n = h[At], i = 0), r = t.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (n = r, i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Yt;
                        for (r = (n || "").match(v) || [], wt = r.length; --wt > -1;) s = Number(r[wt]), r[wt] = (o = s - (s |= 0)) ? (1e5 * o + (0 > o ? -.5 : .5) | 0) / 1e5 + s : s;
                        return e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
                    },
                    It = q.getTransform = function(t, i, n, r) {
                        if (t._gsTransform && n && !r) return t._gsTransform;
                        var s, a, l, h, c, u, p = n ? t._gsTransform || new Rt : new Rt,
                            f = p.scaleX < 0,
                            d = Dt ? parseFloat(J(t, Ot, i, !1, "0 0 0").split(" ")[2]) || p.zOrigin || 0 : 0,
                            m = parseFloat(o.defaultTransformPerspective) || 0;
                        if (p.svg = !(!t.getCTM || !zt(t)), p.svg && (jt(t, J(t, Ot, i, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")), kt = o.useSVGTransformAttr || Lt), (s = Ht(t)) !== Yt) {
                            if (16 === s.length) {
                                var g, _, v, y, x, b = s[0],
                                    w = s[1],
                                    T = s[2],
                                    S = s[3],
                                    P = s[4],
                                    k = s[5],
                                    C = s[6],
                                    A = s[7],
                                    E = s[8],
                                    O = s[9],
                                    D = s[10],
                                    R = s[12],
                                    M = s[13],
                                    N = s[14],
                                    X = s[11],
                                    L = Math.atan2(C, D);
                                p.zOrigin && (N = -p.zOrigin, R = E * N - s[12], M = O * N - s[13], N = D * N + p.zOrigin - s[14]), p.rotationX = L * j, L && (y = Math.cos(-L), x = Math.sin(-L), g = P * y + E * x, _ = k * y + O * x, v = C * y + D * x, E = P * -x + E * y, O = k * -x + O * y, D = C * -x + D * y, X = A * -x + X * y, P = g, k = _, C = v), L = Math.atan2(-T, D), p.rotationY = L * j, L && (y = Math.cos(-L), x = Math.sin(-L), g = b * y - E * x, _ = w * y - O * x, v = T * y - D * x, O = w * x + O * y, D = T * x + D * y, X = S * x + X * y, b = g, w = _, T = v), L = Math.atan2(w, b), p.rotation = L * j, L && (y = Math.cos(L), x = Math.sin(L), g = b * y + w * x, _ = P * y + k * x, v = E * y + O * x, w = w * y - b * x, k = k * y - P * x, O = O * y - E * x, b = g, P = _, E = v), p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0, p.rotationY = 180 - p.rotationY), L = Math.atan2(P, k), p.scaleX = (1e5 * Math.sqrt(b * b + w * w + T * T) + .5 | 0) / 1e5, p.scaleY = (1e5 * Math.sqrt(k * k + C * C) + .5 | 0) / 1e5, p.scaleZ = (1e5 * Math.sqrt(E * E + O * O + D * D) + .5 | 0) / 1e5, b /= p.scaleX, P /= p.scaleY, w /= p.scaleX, k /= p.scaleY, Math.abs(L) > 2e-5 ? (p.skewX = L * j, P = 0, "simple" !== p.skewType && (p.scaleY *= 1 / Math.cos(L))) : p.skewX = 0, p.perspective = X ? 1 / (0 > X ? -X : X) : 0, p.x = R, p.y = M, p.z = N, p.svg && (p.x -= p.xOrigin - (p.xOrigin * b - p.yOrigin * P), p.y -= p.yOrigin - (p.yOrigin * w - p.xOrigin * k))
                            } else if (!Dt || r || !s.length || p.x !== s[4] || p.y !== s[5] || !p.rotationX && !p.rotationY) {
                                var F = s.length >= 6,
                                    z = F ? s[0] : 1,
                                    Y = s[1] || 0,
                                    H = s[2] || 0,
                                    I = F ? s[3] : 1;
                                p.x = s[4] || 0, p.y = s[5] || 0, l = Math.sqrt(z * z + Y * Y), h = Math.sqrt(I * I + H * H), c = z || Y ? Math.atan2(Y, z) * j : p.rotation || 0, u = H || I ? Math.atan2(H, I) * j + c : p.skewX || 0, p.scaleX = l, p.scaleY = h, p.rotation = c, p.skewX = u, Dt && (p.rotationX = p.rotationY = p.z = 0, p.perspective = m, p.scaleZ = 1), p.svg && (p.x -= p.xOrigin - (p.xOrigin * z + p.yOrigin * H), p.y -= p.yOrigin - (p.xOrigin * Y + p.yOrigin * I))
                            }
                            Math.abs(p.skewX) > 90 && Math.abs(p.skewX) < 270 && (f ? (p.scaleX *= -1, p.skewX += p.rotation <= 0 ? 180 : -180, p.rotation += p.rotation <= 0 ? 180 : -180) : (p.scaleY *= -1, p.skewX += p.skewX <= 0 ? 180 : -180)), p.zOrigin = d;
                            for (a in p) p[a] < 2e-5 && p[a] > -2e-5 && (p[a] = 0)
                        }
                        return n && (t._gsTransform = p, p.svg && (kt && t.style[At] ? e.delayedCall(.001, function() {
                            Ut(t.style, At)
                        }) : !kt && t.getAttribute("transform") && e.delayedCall(.001, function() {
                            t.removeAttribute("transform")
                        }))), p
                    },
                    Bt = function(t) {
                        var e, i, n = this.data,
                            r = -n.rotation * L,
                            s = r + n.skewX * L,
                            o = (Math.cos(r) * n.scaleX * 1e5 | 0) / 1e5,
                            a = (Math.sin(r) * n.scaleX * 1e5 | 0) / 1e5,
                            l = (Math.sin(s) * -n.scaleY * 1e5 | 0) / 1e5,
                            h = (Math.cos(s) * n.scaleY * 1e5 | 0) / 1e5,
                            c = this.t.style,
                            u = this.t.currentStyle;
                        if (u) {
                            i = a, a = -l, l = -i, e = u.filter, c.filter = "";
                            var p, f, d = this.t.offsetWidth,
                                g = this.t.offsetHeight,
                                _ = "absolute" !== u.position,
                                v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + a + ", M21=" + l + ", M22=" + h,
                                y = n.x + d * n.xPercent / 100,
                                x = n.y + g * n.yPercent / 100;
                            if (null != n.ox && (p = (n.oxp ? d * n.ox * .01 : n.ox) - d / 2, f = (n.oyp ? g * n.oy * .01 : n.oy) - g / 2, y += p - (p * o + f * a), x += f - (p * l + f * h)), _ ? (p = d / 2, f = g / 2, v += ", Dx=" + (p - (p * o + f * a) + y) + ", Dy=" + (f - (p * l + f * h) + x) + ")") : v += ", sizingMethod='auto expand')", -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? c.filter = e.replace(M, v) : c.filter = v + " " + e, (0 === t || 1 === t) && 1 === o && 0 === a && 0 === l && 1 === h && (_ && -1 === v.indexOf("Dx=0, Dy=0") || T.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && c.removeAttribute("filter")), !_) {
                                var b, S, P, k = 8 > m ? 1 : -1;
                                for (p = n.ieOffsetX || 0, f = n.ieOffsetY || 0, n.ieOffsetX = Math.round((d - ((0 > o ? -o : o) * d + (0 > a ? -a : a) * g)) / 2 + y), n.ieOffsetY = Math.round((g - ((0 > h ? -h : h) * g + (0 > l ? -l : l) * d)) / 2 + x), wt = 0; 4 > wt; wt++) S = st[wt], b = u[S], i = -1 !== b.indexOf("px") ? parseFloat(b) : tt(this.t, S, parseFloat(b), b.replace(w, "")) || 0, P = i !== n[S] ? 2 > wt ? -n.ieOffsetX : -n.ieOffsetY : 2 > wt ? p - n.ieOffsetX : f - n.ieOffsetY, c[S] = (n[S] = Math.round(i - P * (0 === wt || 2 === wt ? 1 : k))) + "px"
                            }
                        }
                    },
                    qt = q.set3DTransformRatio = q.setTransformRatio = function(t) {
                        var e, i, n, r, s, o, a, l, h, c, u, p, d, m, g, _, v, y, x, b, w, T = this.data,
                            S = this.t.style,
                            P = T.rotation,
                            k = T.rotationX,
                            C = T.rotationY,
                            A = T.scaleX,
                            E = T.scaleY,
                            O = T.scaleZ,
                            D = T.x,
                            R = T.y,
                            M = T.z,
                            N = T.svg,
                            X = T.perspective,
                            j = T.force3D,
                            F = T.skewY,
                            z = T.skewX;
                        if (F && (z += F, P += F), !((1 !== t && 0 !== t || "auto" !== j || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && j || M || X || C || k || 1 !== O) || kt && N || !Dt) P || z || N ? (P *= L, b = z * L, w = 1e5, i = Math.cos(P) * A, s = Math.sin(P) * A, n = Math.sin(P - b) * -E, o = Math.cos(P - b) * E, b && "simple" === T.skewType && (e = Math.tan(b - F * L), e = Math.sqrt(1 + e * e), n *= e, o *= e, F && (e = Math.tan(F * L), e = Math.sqrt(1 + e * e), i *= e, s *= e)), N && (D += T.xOrigin - (T.xOrigin * i + T.yOrigin * n) + T.xOffset, R += T.yOrigin - (T.xOrigin * s + T.yOrigin * o) + T.yOffset, kt && (T.xPercent || T.yPercent) && (g = this.t.getBBox(), D += .01 * T.xPercent * g.width, R += .01 * T.yPercent * g.height), (g = 1e-6) > D && D > -g && (D = 0), g > R && R > -g && (R = 0)), x = (i * w | 0) / w + "," + (s * w | 0) / w + "," + (n * w | 0) / w + "," + (o * w | 0) / w + "," + D + "," + R + ")", N && kt ? this.t.setAttribute("transform", "matrix(" + x) : S[At] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix(" : "matrix(") + x) : S[At] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix(" : "matrix(") + A + ",0,0," + E + "," + D + "," + R + ")";
                        else {
                            if (f && ((g = 1e-4) > A && A > -g && (A = O = 2e-5), g > E && E > -g && (E = O = 2e-5), !X || T.z || T.rotationX || T.rotationY || (X = 0)), P || z) P *= L, _ = i = Math.cos(P), v = s = Math.sin(P), z && (P -= z * L, _ = Math.cos(P), v = Math.sin(P), "simple" === T.skewType && (e = Math.tan((z - F) * L), e = Math.sqrt(1 + e * e), _ *= e, v *= e, T.skewY && (e = Math.tan(F * L), e = Math.sqrt(1 + e * e), i *= e, s *= e))), n = -v, o = _;
                            else {
                                if (!(C || k || 1 !== O || X || N)) return void(S[At] = (T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) translate3d(" : "translate3d(") + D + "px," + R + "px," + M + "px)" + (1 !== A || 1 !== E ? " scale(" + A + "," + E + ")" : ""));
                                i = o = 1, n = s = 0
                            }
                            c = 1, r = a = l = h = u = p = 0, d = X ? -1 / X : 0, m = T.zOrigin, g = 1e-6, ",", "0", (P = C * L) && (_ = Math.cos(P), v = Math.sin(P), l = -v, u = d * -v, r = i * v, a = s * v, c = _, d *= _, i *= _, s *= _), (P = k * L) && (_ = Math.cos(P), v = Math.sin(P), e = n * _ + r * v, y = o * _ + a * v, h = c * v, p = d * v, r = n * -v + r * _, a = o * -v + a * _, c *= _, d *= _, n = e, o = y), 1 !== O && (r *= O, a *= O, c *= O, d *= O), 1 !== E && (n *= E, o *= E, h *= E, p *= E), 1 !== A && (i *= A, s *= A, l *= A, u *= A), (m || N) && (m && (D += r * -m, R += a * -m, M += c * -m + m), N && (D += T.xOrigin - (T.xOrigin * i + T.yOrigin * n) + T.xOffset, R += T.yOrigin - (T.xOrigin * s + T.yOrigin * o) + T.yOffset), g > D && D > -g && (D = "0"), g > R && R > -g && (R = "0"), g > M && M > -g && (M = 0)), x = T.xPercent || T.yPercent ? "translate(" + T.xPercent + "%," + T.yPercent + "%) matrix3d(" : "matrix3d(", x += (g > i && i > -g ? "0" : i) + "," + (g > s && s > -g ? "0" : s) + "," + (g > l && l > -g ? "0" : l), x += "," + (g > u && u > -g ? "0" : u) + "," + (g > n && n > -g ? "0" : n) + "," + (g > o && o > -g ? "0" : o), k || C || 1 !== O ? (x += "," + (g > h && h > -g ? "0" : h) + "," + (g > p && p > -g ? "0" : p) + "," + (g > r && r > -g ? "0" : r), x += "," + (g > a && a > -g ? "0" : a) + "," + (g > c && c > -g ? "0" : c) + "," + (g > d && d > -g ? "0" : d) + ",") : x += ",0,0,0,0,1,0,", x += D + "," + R + "," + M + "," + (X ? 1 + -M / X : 1) + ")", S[At] = x
                        }
                    };
                (h = Rt.prototype).x = h.y = h.z = h.skewX = h.skewY = h.rotation = h.rotationX = h.rotationY = h.zOrigin = h.xPercent = h.yPercent = h.xOffset = h.yOffset = 0, h.scaleX = h.scaleY = h.scaleZ = 1, St("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                    parser: function(t, e, i, n, s, a, l) {
                        if (n._lastParsedTransform === l) return s;
                        n._lastParsedTransform = l;
                        var h, c = l.scale && "function" == typeof l.scale ? l.scale : 0;
                        "function" == typeof l[i] && (h = l[i], l[i] = e), c && (l.scale = c(_, t));
                        var u, p, f, d, m, v, y, x, b, w = t._gsTransform,
                            T = t.style,
                            S = Ct.length,
                            P = l,
                            k = {},
                            C = "transformOrigin",
                            A = It(t, r, !0, P.parseTransform),
                            E = P.transform && ("function" == typeof P.transform ? P.transform(_, g) : P.transform);
                        if (A.skewType = P.skewType || A.skewType || o.defaultSkewType, n._transform = A, E && "string" == typeof E && At) p = I.style, p[At] = E, p.display = "block", p.position = "absolute", Y.body.appendChild(I), u = It(I, null, !1), "simple" === A.skewType && (u.scaleY *= Math.cos(u.skewX * L)), A.svg && (v = A.xOrigin, y = A.yOrigin, u.x -= A.xOffset, u.y -= A.yOffset, (P.transformOrigin || P.svgOrigin) && (E = {}, jt(t, at(P.transformOrigin), E, P.svgOrigin, P.smoothOrigin, !0), v = E.xOrigin, y = E.yOrigin, u.x -= E.xOffset - A.xOffset, u.y -= E.yOffset - A.yOffset), (v || y) && (x = Ht(I, !0), u.x -= v - (v * x[0] + y * x[2]), u.y -= y - (v * x[1] + y * x[3]))), Y.body.removeChild(I), u.perspective || (u.perspective = A.perspective), null != P.xPercent && (u.xPercent = ht(P.xPercent, A.xPercent)), null != P.yPercent && (u.yPercent = ht(P.yPercent, A.yPercent));
                        else if ("object" == typeof P) {
                            if (u = {
                                    scaleX: ht(null != P.scaleX ? P.scaleX : P.scale, A.scaleX),
                                    scaleY: ht(null != P.scaleY ? P.scaleY : P.scale, A.scaleY),
                                    scaleZ: ht(P.scaleZ, A.scaleZ),
                                    x: ht(P.x, A.x),
                                    y: ht(P.y, A.y),
                                    z: ht(P.z, A.z),
                                    xPercent: ht(P.xPercent, A.xPercent),
                                    yPercent: ht(P.yPercent, A.yPercent),
                                    perspective: ht(P.transformPerspective, A.perspective)
                                }, null != (m = P.directionalRotation))
                                if ("object" == typeof m)
                                    for (p in m) P[p] = m[p];
                                else P.rotation = m;
                            "string" == typeof P.x && -1 !== P.x.indexOf("%") && (u.x = 0, u.xPercent = ht(P.x, A.xPercent)), "string" == typeof P.y && -1 !== P.y.indexOf("%") && (u.y = 0, u.yPercent = ht(P.y, A.yPercent)), u.rotation = ct("rotation" in P ? P.rotation : "shortRotation" in P ? P.shortRotation + "_short" : "rotationZ" in P ? P.rotationZ : A.rotation, A.rotation, "rotation", k), Dt && (u.rotationX = ct("rotationX" in P ? P.rotationX : "shortRotationX" in P ? P.shortRotationX + "_short" : A.rotationX || 0, A.rotationX, "rotationX", k), u.rotationY = ct("rotationY" in P ? P.rotationY : "shortRotationY" in P ? P.shortRotationY + "_short" : A.rotationY || 0, A.rotationY, "rotationY", k)), u.skewX = ct(P.skewX, A.skewX), u.skewY = ct(P.skewY, A.skewY)
                        }
                        for (Dt && null != P.force3D && (A.force3D = P.force3D, d = !0), (f = A.force3D || A.z || A.rotationX || A.rotationY || u.z || u.rotationX || u.rotationY || u.perspective) || null == P.scale || (u.scaleZ = 1); --S > -1;) b = Ct[S], ((E = u[b] - A[b]) > 1e-6 || -1e-6 > E || null != P[b] || null != F[b]) && (d = !0, s = new yt(A, b, A[b], E, s), b in k && (s.e = k[b]), s.xs0 = 0, s.plugin = a, n._overwriteProps.push(s.n));
                        return E = P.transformOrigin, A.svg && (E || P.svgOrigin) && (v = A.xOffset, y = A.yOffset, jt(t, at(E), u, P.svgOrigin, P.smoothOrigin), s = xt(A, "xOrigin", (w ? A : u).xOrigin, u.xOrigin, s, C), s = xt(A, "yOrigin", (w ? A : u).yOrigin, u.yOrigin, s, C), (v !== A.xOffset || y !== A.yOffset) && (s = xt(A, "xOffset", w ? v : A.xOffset, A.xOffset, s, C), s = xt(A, "yOffset", w ? y : A.yOffset, A.yOffset, s, C)), E = "0px 0px"), (E || Dt && f && A.zOrigin) && (At ? (d = !0, b = Ot, E = (E || J(t, b, r, !1, "50% 50%")) + "", s = new yt(T, b, 0, 0, s, -1, C), s.b = T[b], s.plugin = a, Dt ? (p = A.zOrigin, E = E.split(" "), A.zOrigin = (E.length > 2 && (0 === p || "0px" !== E[2]) ? parseFloat(E[2]) : p) || 0, s.xs0 = s.e = E[0] + " " + (E[1] || "50%") + " 0px", s = new yt(A, "zOrigin", 0, 0, s, -1, s.n), s.b = p, s.xs0 = s.e = A.zOrigin) : s.xs0 = s.e = E) : at(E + "", A)), d && (n._transformType = A.svg && kt || !f && 3 !== this._transformType ? 2 : 3), h && (l[i] = h), c && (l.scale = c), s
                    },
                    prefix: !0
                }), St("boxShadow", {
                    defaultValue: "0px 0px 0px 0px #999",
                    prefix: !0,
                    color: !0,
                    multi: !0,
                    keyword: "inset"
                }), St("borderRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, s, o, a) {
                        e = this.format(e);
                        var l, h, c, u, p, f, d, m, g, _, v, y, x, b, w, T, S = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                            P = t.style;
                        for (g = parseFloat(t.offsetWidth), _ = parseFloat(t.offsetHeight), l = e.split(" "), h = 0; h < S.length; h++) this.p.indexOf("border") && (S[h] = Q(S[h])), -1 !== (p = u = J(t, S[h], r, !1, "0px")).indexOf(" ") && (u = p.split(" "), p = u[0], u = u[1]), f = c = l[h], d = parseFloat(p), y = p.substr((d + "").length), (x = "=" === f.charAt(1)) ? (m = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), m *= parseFloat(f), v = f.substr((m + "").length - (0 > m ? 1 : 0)) || "") : (m = parseFloat(f), v = f.substr((m + "").length)), "" === v && (v = n[i] || y), v !== y && (b = tt(t, "borderLeft", d, y), w = tt(t, "borderTop", d, y), "%" === v ? (p = b / g * 100 + "%", u = w / _ * 100 + "%") : "em" === v ? (T = tt(t, "borderLeft", 1, "em"), p = b / T + "em", u = w / T + "em") : (p = b + "px", u = w + "px"), x && (f = parseFloat(p) + m + v, c = parseFloat(u) + m + v)), o = bt(P, S[h], p + " " + u, f + " " + c, !1, "0px", o);
                        return o
                    },
                    prefix: !0,
                    formatter: gt("0px 0px 0px 0px", !1, !0)
                }), St("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                    defaultValue: "0px",
                    parser: function(t, e, i, n, s, o) {
                        return bt(t.style, i, this.format(J(t, i, r, !1, "0px 0px")), this.format(e), !1, "0px", s)
                    },
                    prefix: !0,
                    formatter: gt("0px 0px", !1, !0)
                }), St("backgroundPosition", {
                    defaultValue: "0 0",
                    parser: function(t, e, i, n, s, o) {
                        var a, l, h, c, u, p, f = "background-position",
                            d = r || K(t, null),
                            g = this.format((d ? m ? d.getPropertyValue(f + "-x") + " " + d.getPropertyValue(f + "-y") : d.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"),
                            _ = this.format(e);
                        if (-1 !== g.indexOf("%") != (-1 !== _.indexOf("%")) && _.split(",").length < 2 && (p = J(t, "backgroundImage").replace(E, "")) && "none" !== p) {
                            for (a = g.split(" "), l = _.split(" "), B.setAttribute("src", p), h = 2; --h > -1;) g = a[h], (c = -1 !== g.indexOf("%")) !== (-1 !== l[h].indexOf("%")) && (u = 0 === h ? t.offsetWidth - B.width : t.offsetHeight - B.height, a[h] = c ? parseFloat(g) / 100 * u + "px" : parseFloat(g) / u * 100 + "%");
                            g = a.join(" ")
                        }
                        return this.parseComplex(t.style, g, _, s, o)
                    },
                    formatter: at
                }), St("backgroundSize", {
                    defaultValue: "0 0",
                    formatter: function(t) {
                        return t += "", at(-1 === t.indexOf(" ") ? t + " " + t : t)
                    }
                }), St("perspective", {
                    defaultValue: "0px",
                    prefix: !0
                }), St("perspectiveOrigin", {
                    defaultValue: "50% 50%",
                    prefix: !0
                }), St("transformStyle", {
                    prefix: !0
                }), St("backfaceVisibility", {
                    prefix: !0
                }), St("userSelect", {
                    prefix: !0
                }), St("margin", {
                    parser: _t("marginTop,marginRight,marginBottom,marginLeft")
                }), St("padding", {
                    parser: _t("paddingTop,paddingRight,paddingBottom,paddingLeft")
                }), St("clip", {
                    defaultValue: "rect(0px,0px,0px,0px)",
                    parser: function(t, e, i, n, s, o) {
                        var a, l, h;
                        return 9 > m ? (l = t.currentStyle, h = 8 > m ? " " : ",", a = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")", e = this.format(e).split(",").join(h)) : (a = this.format(J(t, this.p, r, !1, this.dflt)), e = this.format(e)), this.parseComplex(t.style, a, e, s, o)
                    }
                }), St("textShadow", {
                    defaultValue: "0px 0px 0px #999",
                    color: !0,
                    multi: !0
                }), St("autoRound,strictUnits", {
                    parser: function(t, e, i, n, r) {
                        return r
                    }
                }), St("border", {
                    defaultValue: "0px solid #000",
                    parser: function(t, e, i, n, s, o) {
                        var a = J(t, "borderTopWidth", r, !1, "0px"),
                            l = this.format(e).split(" "),
                            h = l[0].replace(w, "");
                        return "px" !== h && (a = parseFloat(a) / tt(t, "borderTopWidth", 1, h) + h), this.parseComplex(t.style, this.format(a + " " + J(t, "borderTopStyle", r, !1, "solid") + " " + J(t, "borderTopColor", r, !1, "#000")), l.join(" "), s, o)
                    },
                    color: !0,
                    formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(mt) || ["#000"])[0]
                    }
                }), St("borderWidth", {
                    parser: _t("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                }), St("float,cssFloat,styleFloat", {
                    parser: function(t, e, i, n, r, s) {
                        var o = t.style,
                            a = "cssFloat" in o ? "cssFloat" : "styleFloat";
                        return new yt(o, a, 0, 0, r, -1, i, !1, 0, o[a], e)
                    }
                });
                var Wt = function(t) {
                    var e, i = this.t,
                        n = i.filter || J(this.data, "filter") || "",
                        r = this.s + this.c * t | 0;
                    100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), e = !J(this.data, "filter")) : (i.filter = n.replace(P, ""), e = !0)), e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(T, "opacity=" + r))
                };
                St("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, n, s, o) {
                        var a = parseFloat(J(t, "opacity", r, !1, "1")),
                            l = t.style,
                            h = "autoAlpha" === i;
                        return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a), h && 1 === a && "hidden" === J(t, "visibility", r) && 0 !== e && (a = 0), U ? s = new yt(l, "opacity", a, e - a, s) : (s = new yt(l, "opacity", 100 * a, 100 * (e - a), s), s.xn1 = h ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = t, s.plugin = o, s.setRatio = Wt), h && (s = new yt(l, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== a ? "inherit" : "hidden", 0 === e ? "hidden" : "inherit"), s.xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s
                    }
                });
                var Ut = function(t, e) {
                        e && (t.removeProperty ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) && (e = "-" + e), t.removeProperty(e.replace(C, "-$1").toLowerCase())) : t.removeAttribute(e))
                    },
                    $t = function(t) {
                        if (this.t._gsClassPT = this, 1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e;) e.v ? i[e.p] = e.v : Ut(i, e.p), e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                        } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                St("className", {
                    parser: function(t, e, n, s, o, a, l) {
                        var h, c, u, p, f, d = t.getAttribute("class") || "",
                            m = t.style.cssText;
                        if (o = s._classNamePT = new yt(t, n, 0, 0, o, 2), o.setRatio = $t, o.pr = -11, i = !0, o.b = d, c = it(t, r), u = t._gsClassPT) {
                            for (p = {}, f = u.data; f;) p[f.p] = 1, f = f._next;
                            u.setRatio(1)
                        }
                        return t._gsClassPT = o, o.e = "=" !== e.charAt(1) ? e : d.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""), t.setAttribute("class", o.e), h = nt(t, c, it(t), l, p), t.setAttribute("class", d), o.data = h.firstMPT, t.style.cssText = m, o = o.xfirst = s.parse(t, h.difs, o, a)
                    }
                });
                var Vt = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                        var e, i, n, r, s, o = this.t.style,
                            a = l.transform.parse;
                        if ("all" === this.e) o.cssText = "", r = !0;
                        else
                            for (e = this.e.split(" ").join("").split(","), n = e.length; --n > -1;) i = e[n], l[i] && (l[i].parse === a ? r = !0 : i = "transformOrigin" === i ? Ot : l[i].p), Ut(o, i);
                        r && (Ut(o, At), (s = this.t._gsTransform) && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
                    }
                };
                for (St("clearProps", {
                        parser: function(t, e, n, r, s) {
                            return s = new yt(t, n, 0, 0, s, 2), s.setRatio = Vt, s.e = e, s.pr = -10, s.data = r._tween, i = !0, s
                        }
                    }), h = "bezier,throwProps,physicsProps,physics2D".split(","), wt = h.length; wt--;) Pt(h[wt]);
                (h = o.prototype)._firstPT = h._lastParsedTransform = h._transform = null, h._onInitTween = function(t, e, a, h) {
                    if (!t.nodeType) return !1;
                    this._target = g = t, this._tween = a, this._vars = e, _ = h, c = e.autoRound, i = !1, n = e.suffixMap || o.suffixMap, r = K(t, ""), s = this._overwriteProps;
                    var f, m, v, y, x, b, w, T, P, k = t.style;
                    if (u && "" === k.zIndex && ("auto" === (f = J(t, "zIndex", r)) || "" === f) && this._addLazySet(k, "zIndex", 0), "string" == typeof e && (y = k.cssText, f = it(t, r), k.cssText = y + ";" + e, f = nt(t, f, it(t)).difs, !U && S.test(e) && (f.opacity = parseFloat(RegExp.$1)), e = f, k.cssText = y), e.className ? this._firstPT = m = l.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = m = this.parse(t, e, null), this._transformType) {
                        for (P = 3 === this._transformType, At ? p && (u = !0, "" === k.zIndex && ("auto" === (w = J(t, "zIndex", r)) || "" === w) && this._addLazySet(k, "zIndex", 0), d && this._addLazySet(k, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (P ? "visible" : "hidden"))) : k.zoom = 1, v = m; v && v._next;) v = v._next;
                        T = new yt(t, "transform", 0, 0, null, 2), this._linkCSSP(T, null, v), T.setRatio = At ? qt : Bt, T.data = this._transform || It(t, r, !0), T.tween = a, T.pr = -1, s.pop()
                    }
                    if (i) {
                        for (; m;) {
                            for (b = m._next, v = y; v && v.pr > m.pr;) v = v._next;
                            (m._prev = v ? v._prev : x) ? m._prev._next = m: y = m, (m._next = v) ? v._prev = m : x = m, m = b
                        }
                        this._firstPT = y
                    }
                    return !0
                }, h.parse = function(t, e, i, s) {
                    var o, a, h, u, p, f, d, m, v, y, x = t.style;
                    for (o in e) {
                        if ("function" == typeof(f = e[o]) && (f = f(_, g)), a = l[o]) i = a.parse(t, f, o, this, i, s, e);
                        else {
                            if ("--" === o.substr(0, 2)) {
                                this._tween._propLookup[o] = this._addTween.call(this._tween, t.style, "setProperty", K(t).getPropertyValue(o) + "", f + "", o, !1, o);
                                continue
                            }
                            p = J(t, o, r) + "", v = "string" == typeof f, "color" === o || "fill" === o || "stroke" === o || -1 !== o.indexOf("Color") || v && k.test(f) ? (v || (f = ft(f), f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"), i = bt(x, o, p, f, !0, "transparent", i, 0, s)) : v && X.test(f) ? i = bt(x, o, p, f, !0, null, i, 0, s) : (h = parseFloat(p), d = h || 0 === h ? p.substr((h + "").length) : "", ("" === p || "auto" === p) && ("width" === o || "height" === o ? (h = ot(t, o, r), d = "px") : "left" === o || "top" === o ? (h = et(t, o, r), d = "px") : (h = "opacity" !== o ? 0 : 1, d = "")), (y = v && "=" === f.charAt(1)) ? (u = parseInt(f.charAt(0) + "1", 10), f = f.substr(2), u *= parseFloat(f), m = f.replace(w, "")) : (u = parseFloat(f), m = v ? f.replace(w, "") : ""), "" === m && (m = o in n ? n[o] : d), f = u || 0 === u ? (y ? u + h : u) + m : e[o], d !== m && ("" !== m || "lineHeight" === o) && (u || 0 === u) && h && (h = tt(t, o, h, d), "%" === m ? (h /= tt(t, o, 100, "%") / 100, !0 !== e.strictUnits && (p = h + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? h /= tt(t, o, 1, m) : "px" !== m && (u = tt(t, o, u, m), m = "px"), y && (u || 0 === u) && (f = u + h + m)), y && (u += h), !h && 0 !== h || !u && 0 !== u ? void 0 !== x[o] && (f || f + "" != "NaN" && null != f) ? (i = new yt(x, o, u || h || 0, 0, i, -1, o, !1, 0, p, f), i.xs0 = "none" !== f || "display" !== o && -1 === o.indexOf("Style") ? f : p) : V("invalid " + o + " tween value: " + e[o]) : (i = new yt(x, o, h, u - h, i, 0, o, !1 !== c && ("px" === m || "zIndex" === o), 0, p, f), i.xs0 = m))
                        }
                        s && i && !i.plugin && (i.plugin = s)
                    }
                    return i
                }, h.setRatio = function(t) {
                    var e, i, n, r = this._firstPT;
                    if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                            for (; r;) {
                                if (e = r.c * t + r.s, r.r ? e = Math.round(e) : 1e-6 > e && e > -1e-6 && (e = 0), r.type)
                                    if (1 === r.type)
                                        if (2 === (n = r.l)) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                                        else if (3 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                                else if (4 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                                else if (5 === n) r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                                else {
                                    for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                    r.t[r.p] = i
                                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(t);
                                else r.t[r.p] = e + r.xs0;
                                r = r._next
                            } else
                                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(t), r = r._next;
                        else
                            for (; r;) {
                                if (2 !== r.type)
                                    if (r.r && -1 !== r.type)
                                        if (e = Math.round(r.s + r.c), r.type) {
                                            if (1 === r.type) {
                                                for (n = r.l, i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                                                r.t[r.p] = i
                                            }
                                        } else r.t[r.p] = e + r.xs0;
                                else r.t[r.p] = r.e;
                                else r.setRatio(t);
                                r = r._next
                            }
                }, h._enableTransforms = function(t) {
                    this._transform = this._transform || It(this._target, r, !0), this._transformType = this._transform.svg && kt || !t && 3 !== this._transformType ? 2 : 3
                };
                var Gt = function(t) {
                    this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
                };
                h._addLazySet = function(t, e, i) {
                    var n = this._firstPT = new yt(t, e, 0, 0, this._firstPT, 2);
                    n.e = i, n.setRatio = Gt, n.data = this
                }, h._linkCSSP = function(t, e, i, n) {
                    return t && (e && (e._prev = t), t._next && (t._next._prev = t._prev), t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next, n = !0), i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t), t._next = e, t._prev = i), t
                }, h._mod = function(t) {
                    for (var e = this._firstPT; e;) "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1), e = e._next
                }, h._kill = function(e) {
                    var i, n, r, s = e;
                    if (e.autoAlpha || e.alpha) {
                        s = {};
                        for (n in e) s[n] = e[n];
                        s.opacity = 1, s.autoAlpha && (s.visibility = 1)
                    }
                    for (e.className && (i = this._classNamePT) && ((r = i.xfirst) && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), i = this._firstPT; i;) i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e), n = i.plugin), i = i._next;
                    return t.prototype._kill.call(this, s)
                };
                var Zt = function(t, e, i) {
                    var n, r, s, o;
                    if (t.slice)
                        for (r = t.length; --r > -1;) Zt(t[r], e, i);
                    else
                        for (n = t.childNodes, r = n.length; --r > -1;) s = n[r], o = s.type, s.style && (e.push(it(s)), i && i.push(s)), 1 !== o && 9 !== o && 11 !== o || !s.childNodes.length || Zt(s, e, i)
                };
                return o.cascadeTo = function(t, i, n) {
                    var r, s, o, a, l = e.to(t, i, n),
                        h = [l],
                        c = [],
                        u = [],
                        p = [],
                        f = e._internals.reservedProps;
                    for (t = l._targets || l.target, Zt(t, c, p), l.render(i, !0, !0), Zt(t, u), l.render(0, !0, !0), l._enabled(!0), r = p.length; --r > -1;)
                        if ((s = nt(p[r], c[r], u[r])).firstMPT) {
                            s = s.difs;
                            for (o in n) f[o] && (s[o] = n[o]);
                            a = {};
                            for (o in s) a[o] = c[r][o];
                            h.push(e.fromTo(p[r], i, a, s))
                        } return h
                }, t.activate([o]), o
            }, !0),
            function() {
                var t = function(t) {
                        for (; t;) t.f || t.blob || (t.m = Math.round), t = t._next
                    },
                    e = _gsScope._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.6.0",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i, !0
                        }
                    }).prototype;
                e._onInitAllProps = function() {
                    for (var e, i, n, r = this._tween, s = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), o = s.length, a = {}, l = r._propLookup.roundProps; --o > -1;) a[s[o]] = Math.round;
                    for (o = s.length; --o > -1;)
                        for (e = s[o], i = r._firstPT; i;) n = i._next, i.pg ? i.t._mod(a) : i.n === e && (2 === i.f && i.t ? t(i.t._firstPT) : (this._add(i.t, e, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : r._firstPT === i && (r._firstPT = n), i._next = i._prev = null, r._propLookup[e] = l)), i = n;
                    return !1
                }, e._add = function(t, e, i, n) {
                    this._addTween(t, e, i, i + n, e, Math.round), this._overwriteProps.push(e)
                }
            }(), _gsScope._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.6.1",
                init: function(t, e, i, n) {
                    var r, s;
                    if ("function" != typeof t.setAttribute) return !1;
                    for (r in e) "function" == typeof(s = e[r]) && (s = s(n, t)), this._addTween(t, "setAttribute", t.getAttribute(r) + "", s + "", r, !1, r), this._overwriteProps.push(r);
                    return !0
                }
            }), _gsScope._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.3.1",
                API: 2,
                init: function(t, e, i, n) {
                    "object" != typeof e && (e = {
                        rotation: e
                    }), this.finals = {};
                    var r, s, o, a, l, h, c = !0 === e.useRadians ? 2 * Math.PI : 360;
                    for (r in e) "useRadians" !== r && ("function" == typeof(a = e[r]) && (a = a(n, t)), h = (a + "").split("_"), s = h[0], o = parseFloat("function" != typeof t[r] ? t[r] : t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]()), a = this.finals[r] = "string" == typeof s && "=" === s.charAt(1) ? o + parseInt(s.charAt(0) + "1", 10) * Number(s.substr(2)) : Number(s) || 0, l = a - o, h.length && (-1 !== (s = h.join("_")).indexOf("short") && (l %= c) != l % (c / 2) && (l = 0 > l ? l + c : l - c), -1 !== s.indexOf("_cw") && 0 > l ? l = (l + 9999999999 * c) % c - (l / c | 0) * c : -1 !== s.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * c) % c - (l / c | 0) * c)), (l > 1e-6 || -1e-6 > l) && (this._addTween(t, r, o, o + l, r), this._overwriteProps.push(r)));
                    return !0
                },
                set: function(t) {
                    var e;
                    if (1 !== t) this._super.setRatio.call(this, t);
                    else
                        for (e = this._firstPT; e;) e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p], e = e._next
                }
            })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                var e, i, n, r = _gsScope.GreenSockGlobals || _gsScope,
                    s = r.com.greensock,
                    o = 2 * Math.PI,
                    a = Math.PI / 2,
                    l = s._class,
                    h = function(e, i) {
                        var n = l("easing." + e, function() {}, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, n
                    },
                    c = t.register || function() {},
                    u = function(t, e, i, n, r) {
                        var s = l("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return c(s, t), s
                    },
                    p = function(t, e, i) {
                        this.t = t, this.v = e, i && (this.next = i, i.prev = this, this.c = i.v - e, this.gap = i.t - t)
                    },
                    f = function(e, i) {
                        var n = l("easing." + e, function(t) {
                                this._p1 = t || 0 === t ? t : 1.70158, this._p2 = 1.525 * this._p1
                            }, !0),
                            r = n.prototype = new t;
                        return r.constructor = n, r.getRatio = i, r.config = function(t) {
                            return new n(t)
                        }, n
                    },
                    d = u("Back", f("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), f("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), f("BackInOut", function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })),
                    m = l("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7, null == t ? t = .7 : t > 1 && (t = 1), this._p = 1 !== t ? e : 0, this._p1 = (1 - t) / 2, this._p2 = t, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
                    }, !0),
                    g = m.prototype = new t;
                return g.constructor = m, g.getRatio = function(t) {
                    var e = t + (.5 - t) * this._p;
                    return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                }, m.ease = new m(.7, .7), g.config = m.config = function(t, e, i) {
                    return new m(t, e, i)
                }, e = l("easing.SteppedEase", function(t, e) {
                    t = t || 1, this._p1 = 1 / t, this._p2 = t + (e ? 0 : 1), this._p3 = e ? 1 : 0
                }, !0), g = e.prototype = new t, g.constructor = e, g.getRatio = function(t) {
                    return 0 > t ? t = 0 : t >= 1 && (t = .999999999), ((this._p2 * t | 0) + this._p3) * this._p1
                }, g.config = e.config = function(t, i) {
                    return new e(t, i)
                }, i = l("easing.RoughEase", function(e) {
                    for (var i, n, r, s, o, a, l = (e = e || {}).taper || "none", h = [], c = 0, u = 0 | (e.points || 20), f = u, d = !1 !== e.randomize, m = !0 === e.clamp, g = e.template instanceof t ? e.template : null, _ = "number" == typeof e.strength ? .4 * e.strength : .4; --f > -1;) i = d ? Math.random() : 1 / u * f, n = g ? g.getRatio(i) : i, "none" === l ? r = _ : "out" === l ? (s = 1 - i, r = s * s * _) : "in" === l ? r = i * i * _ : .5 > i ? (s = 2 * i, r = s * s * .5 * _) : (s = 2 * (1 - i), r = s * s * .5 * _), d ? n += Math.random() * r - .5 * r : f % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), h[c++] = {
                        x: i,
                        y: n
                    };
                    for (h.sort(function(t, e) {
                            return t.x - e.x
                        }), a = new p(1, 1, null), f = u; --f > -1;) o = h[f], a = new p(o.x, o.y, a);
                    this._prev = new p(0, 0, 0 !== a.t ? a : a.next)
                }, !0), g = i.prototype = new t, g.constructor = i, g.getRatio = function(t) {
                    var e = this._prev;
                    if (t > e.t) {
                        for (; e.next && t >= e.t;) e = e.next;
                        e = e.prev
                    } else
                        for (; e.prev && t <= e.t;) e = e.prev;
                    return this._prev = e, e.v + (t - e.t) / e.gap * e.c
                }, g.config = function(t) {
                    return new i(t)
                }, i.ease = new i, u("Bounce", h("BounceOut", function(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }), h("BounceIn", function(t) {
                    return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : 2 / 2.75 > t ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                }), h("BounceInOut", function(t) {
                    var e = .5 > t;
                    return t = e ? 1 - 2 * t : 2 * t - 1, t = 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375, e ? .5 * (1 - t) : .5 * t + .5
                })), u("Circ", h("CircOut", function(t) {
                    return Math.sqrt(1 - (t -= 1) * t)
                }), h("CircIn", function(t) {
                    return -(Math.sqrt(1 - t * t) - 1)
                }), h("CircInOut", function(t) {
                    return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                })), n = function(e, i, n) {
                    var r = l("easing." + e, function(t, e) {
                            this._p1 = t >= 1 ? t : 1, this._p2 = (e || n) / (1 > t ? t : 1), this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0), this._p2 = o / this._p2
                        }, !0),
                        s = r.prototype = new t;
                    return s.constructor = r, s.getRatio = i, s.config = function(t, e) {
                        return new r(t, e)
                    }, r
                }, u("Elastic", n("ElasticOut", function(t) {
                    return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                }, .3), n("ElasticIn", function(t) {
                    return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
                }, .3), n("ElasticInOut", function(t) {
                    return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                }, .45)), u("Expo", h("ExpoOut", function(t) {
                    return 1 - Math.pow(2, -10 * t)
                }), h("ExpoIn", function(t) {
                    return Math.pow(2, 10 * (t - 1)) - .001
                }), h("ExpoInOut", function(t) {
                    return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                })), u("Sine", h("SineOut", function(t) {
                    return Math.sin(t * a)
                }), h("SineIn", function(t) {
                    return 1 - Math.cos(t * a)
                }), h("SineInOut", function(t) {
                    return -.5 * (Math.cos(Math.PI * t) - 1)
                })), l("easing.EaseLookup", {
                    find: function(e) {
                        return t.map[e]
                    }
                }, !0), c(r.SlowMo, "SlowMo", "ease,"), c(i, "RoughEase", "ease,"), c(e, "SteppedEase", "ease,"), d
            }, !0)
    }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
    function(t, e) {
        "use strict";
        var i = {},
            n = t.document,
            r = t.GreenSockGlobals = t.GreenSockGlobals || t;
        if (!r.TweenLite) {
            var s, o, a, l, h, c = function(t) {
                    var e, i = t.split("."),
                        n = r;
                    for (e = 0; e < i.length; e++) n[i[e]] = n = n[i[e]] || {};
                    return n
                },
                u = c("com.greensock"),
                p = function(t) {
                    var e, i = [],
                        n = t.length;
                    for (e = 0; e !== n; i.push(t[e++]));
                    return i
                },
                f = function() {},
                d = function() {
                    var t = Object.prototype.toString,
                        e = t.call([]);
                    return function(i) {
                        return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                    }
                }(),
                m = {},
                g = function(n, s, o, a) {
                    this.sc = m[n] ? m[n].sc : [], m[n] = this, this.gsClass = null, this.func = o;
                    var l = [];
                    this.check = function(h) {
                        for (var u, p, f, d, _ = s.length, v = _; --_ > -1;)(u = m[s[_]] || new g(s[_], [])).gsClass ? (l[_] = u.gsClass, v--) : h && u.sc.push(this);
                        if (0 === v && o) {
                            if (p = ("com.greensock." + n).split("."), f = p.pop(), d = c(p.join("."))[f] = this.gsClass = o.apply(o, l), a)
                                if (r[f] = i[f] = d, "undefined" != typeof module && module.exports)
                                    if (n === e) {
                                        module.exports = i[e] = d;
                                        for (_ in i) d[_] = i[_]
                                    } else i[e] && (i[e][f] = d);
                            else "function" == typeof define && define.amd && define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + n.split(".").pop(), [], function() {
                                return d
                            });
                            for (_ = 0; _ < this.sc.length; _++) this.sc[_].check()
                        }
                    }, this.check(!0)
                },
                _ = t._gsDefine = function(t, e, i, n) {
                    return new g(t, e, i, n)
                },
                v = u._class = function(t, e, i) {
                    return e = e || function() {}, _(t, [], function() {
                        return e
                    }, i), e
                };
            _.globals = r;
            var y = [0, 0, 1, 1],
                x = v("easing.Ease", function(t, e, i, n) {
                    this._func = t, this._type = i || 0, this._power = n || 0, this._params = e ? y.concat(e) : y
                }, !0),
                b = x.map = {},
                w = x.register = function(t, e, i, n) {
                    for (var r, s, o, a, l = e.split(","), h = l.length, c = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1;)
                        for (s = l[h], r = n ? v("easing." + s, null, !0) : u.easing[s] || {}, o = c.length; --o > -1;) a = c[o], b[s + "." + a] = b[a + s] = r[a] = t.getRatio ? t : t[a] || new t
                };
            for ((a = x.prototype)._calcEnd = !1, a.getRatio = function(t) {
                    if (this._func) return this._params[0] = t, this._func.apply(null, this._params);
                    var e = this._type,
                        i = this._power,
                        n = 1 === e ? 1 - t : 2 === e ? t : .5 > t ? 2 * t : 2 * (1 - t);
                    return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === e ? 1 - n : 2 === e ? n : .5 > t ? n / 2 : 1 - n / 2
                }, o = (s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --o > -1;) a = s[o] + ",Power" + o, w(new x(null, null, 1, o), a, "easeOut", !0), w(new x(null, null, 2, o), a, "easeIn" + (0 === o ? ",easeNone" : "")), w(new x(null, null, 3, o), a, "easeInOut");
            b.linear = u.easing.Linear.easeIn, b.swing = u.easing.Quad.easeInOut;
            var T = v("events.EventDispatcher", function(t) {
                this._listeners = {}, this._eventTarget = t || this
            });
            (a = T.prototype).addEventListener = function(t, e, i, n, r) {
                r = r || 0;
                var s, o, a = this._listeners[t],
                    c = 0;
                for (this !== l || h || l.wake(), null == a && (this._listeners[t] = a = []), o = a.length; --o > -1;)(s = a[o]).c === e && s.s === i ? a.splice(o, 1) : 0 === c && s.pr < r && (c = o + 1);
                a.splice(c, 0, {
                    c: e,
                    s: i,
                    up: n,
                    pr: r
                })
            }, a.removeEventListener = function(t, e) {
                var i, n = this._listeners[t];
                if (n)
                    for (i = n.length; --i > -1;)
                        if (n[i].c === e) return void n.splice(i, 1)
            }, a.dispatchEvent = function(t) {
                var e, i, n, r = this._listeners[t];
                if (r)
                    for ((e = r.length) > 1 && (r = r.slice(0)), i = this._eventTarget; --e > -1;)(n = r[e]) && (n.up ? n.c.call(n.s || i, {
                        type: t,
                        target: i
                    }) : n.c.call(n.s || i))
            };
            var S = t.requestAnimationFrame,
                P = t.cancelAnimationFrame,
                k = Date.now || function() {
                    return (new Date).getTime()
                },
                C = k();
            for (o = (s = ["ms", "moz", "webkit", "o"]).length; --o > -1 && !S;) S = t[s[o] + "RequestAnimationFrame"], P = t[s[o] + "CancelAnimationFrame"] || t[s[o] + "CancelRequestAnimationFrame"];
            v("Ticker", function(t, e) {
                var i, r, s, o, a, c = this,
                    u = k(),
                    p = !(!1 === e || !S) && "auto",
                    d = 500,
                    m = 33,
                    g = function(t) {
                        var e, n, l = k() - C;
                        l > d && (u += l - m), C += l, c.time = (C - u) / 1e3, e = c.time - a, (!i || e > 0 || !0 === t) && (c.frame++, a += e + (e >= o ? .004 : o - e), n = !0), !0 !== t && (s = r(g)), n && c.dispatchEvent("tick")
                    };
                T.call(c), c.time = c.frame = 0, c.tick = function() {
                    g(!0)
                }, c.lagSmoothing = function(t, e) {
                    d = t || 1e10, m = Math.min(e, d, 0)
                }, c.sleep = function() {
                    null != s && (p && P ? P(s) : clearTimeout(s), r = f, s = null, c === l && (h = !1))
                }, c.wake = function(t) {
                    null !== s ? c.sleep() : t ? u += -C + (C = k()) : c.frame > 10 && (C = k() - d + 5), r = 0 === i ? f : p && S ? S : function(t) {
                        return setTimeout(t, 1e3 * (a - c.time) + 1 | 0)
                    }, c === l && (h = !0), g(2)
                }, c.fps = function(t) {
                    return arguments.length ? (i = t, o = 1 / (i || 60), a = this.time + o, void c.wake()) : i
                }, c.useRAF = function(t) {
                    return arguments.length ? (c.sleep(), p = t, void c.fps(i)) : p
                }, c.fps(t), setTimeout(function() {
                    "auto" === p && c.frame < 5 && "hidden" !== n.visibilityState && c.useRAF(!1)
                }, 1500)
            }), (a = u.Ticker.prototype = new u.events.EventDispatcher).constructor = u.Ticker;
            var A = v("core.Animation", function(t, e) {
                if (this.vars = e = e || {}, this._duration = this._totalDuration = t || 0, this._delay = Number(e.delay) || 0, this._timeScale = 1, this._active = !0 === e.immediateRender, this.data = e.data, this._reversed = !0 === e.reversed, $) {
                    h || l.wake();
                    var i = this.vars.useFrames ? U : $;
                    i.add(this, i._time), this.vars.paused && this.paused(!0)
                }
            });
            l = A.ticker = new u.Ticker, (a = A.prototype)._dirty = a._gc = a._initted = a._paused = !1, a._totalTime = a._time = 0, a._rawPrevTime = -1, a._next = a._last = a._onUpdate = a._timeline = a.timeline = null, a._paused = !1;
            var E = function() {
                h && k() - C > 2e3 && "hidden" !== n.visibilityState && l.wake();
                var t = setTimeout(E, 2e3);
                t.unref && t.unref()
            };
            E(), a.play = function(t, e) {
                return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
            }, a.pause = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!0)
            }, a.resume = function(t, e) {
                return null != t && this.seek(t, e), this.paused(!1)
            }, a.seek = function(t, e) {
                return this.totalTime(Number(t), !1 !== e)
            }, a.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
            }, a.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
            }, a.render = function(t, e, i) {}, a.invalidate = function() {
                return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
            }, a.isActive = function() {
                var t, e = this._timeline,
                    i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-7
            }, a._enabled = function(t, e) {
                return h || l.wake(), this._gc = !t, this._active = this.isActive(), !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)), !1
            }, a._kill = function(t, e) {
                return this._enabled(!1, !1)
            }, a.kill = function(t, e) {
                return this._kill(t, e), this
            }, a._uncache = function(t) {
                for (var e = t ? this : this.timeline; e;) e._dirty = !0, e = e.timeline;
                return this
            }, a._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1;) "{self}" === t[e] && (i[e] = this);
                return i
            }, a._callback = function(t) {
                var e = this.vars,
                    i = e[t],
                    n = e[t + "Params"],
                    r = e[t + "Scope"] || e.callbackScope || this;
                switch (n ? n.length : 0) {
                    case 0:
                        i.call(r);
                        break;
                    case 1:
                        i.call(r, n[0]);
                        break;
                    case 2:
                        i.call(r, n[0], n[1]);
                        break;
                    default:
                        i.apply(r, n)
                }
            }, a.eventCallback = function(t, e, i, n) {
                if ("on" === (t || "").substr(0, 2)) {
                    var r = this.vars;
                    if (1 === arguments.length) return r[t];
                    null == e ? delete r[t] : (r[t] = e, r[t + "Params"] = d(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[t + "Scope"] = n), "onUpdate" === t && (this._onUpdate = e)
                }
                return this
            }, a.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay), this._delay = t, this) : this._delay
            }, a.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0), this) : (this._dirty = !1, this._duration)
            }, a.totalDuration = function(t) {
                return this._dirty = !1, arguments.length ? this.duration(t) : this._totalDuration
            }, a.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }, a.totalTime = function(t, e, i) {
                if (h || l.wake(), !arguments.length) return this._totalTime;
                if (this._timeline) {
                    if (0 > t && !i && (t += this.totalDuration()), this._timeline.smoothChildTiming) {
                        this._dirty && this.totalDuration();
                        var n = this._totalDuration,
                            r = this._timeline;
                        if (t > n && !i && (t = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - t : t) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
                            for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
                    }
                    this._gc && this._enabled(!0, !1), (this._totalTime !== t || 0 === this._duration) && (M.length && G(), this.render(t, e, !1), M.length && G())
                }
                return this
            }, a.progress = a.totalProgress = function(t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }, a.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t, this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)), this) : this._startTime
            }, a.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }, a.timeScale = function(t) {
                if (!arguments.length) return this._timeScale;
                if (t = t || 1e-10, this._timeline && this._timeline.smoothChildTiming) {
                    var e = this._pauseTime,
                        i = e || 0 === e ? e : this._timeline.totalTime();
                    this._startTime = i - (i - this._startTime) * this._timeScale / t
                }
                return this._timeScale = t, this._uncache(!1)
            }, a.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
            }, a.paused = function(t) {
                if (!arguments.length) return this._paused;
                var e, i, n = this._timeline;
                return t != this._paused && n && (h || t || l.wake(), e = n.rawTime(), i = e - this._pauseTime, !t && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = t ? e : null, this._paused = t, this._active = this.isActive(), !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale, this.render(e, e === this._totalTime, !0))), this._gc && !t && this._enabled(!0, !1), this
            };
            var O = v("core.SimpleTimeline", function(t) {
                A.call(this, 0, t), this.autoRemoveChildren = this.smoothChildTiming = !0
            });
            (a = O.prototype = new A).constructor = O, a.kill()._gc = !1, a._first = a._last = a._recent = null, a._sortChildren = !1, a.add = a.insert = function(t, e, i, n) {
                var r, s;
                if (t._startTime = Number(e || 0) + t._delay, t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale), t.timeline && t.timeline._remove(t, !0), t.timeline = t._timeline = this, t._gc && t._enabled(!0, !0), r = this._last, this._sortChildren)
                    for (s = t._startTime; r && r._startTime > s;) r = r._prev;
                return r ? (t._next = r._next, r._next = t) : (t._next = this._first, this._first = t), t._next ? t._next._prev = t : this._last = t, t._prev = r, this._recent = t, this._timeline && this._uncache(!0), this
            }, a._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0), t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next), t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev), t._next = t._prev = t.timeline = null, t === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
            }, a.render = function(t, e, i) {
                var n, r = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; r;) n = r._next, (r._active || t >= r._startTime && !r._paused && !r._gc) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)), r = n
            }, a.rawTime = function() {
                return h || l.wake(), this._totalTime
            };
            var D = v("TweenLite", function(e, i, n) {
                    if (A.call(this, i, n), this.render = D.prototype.render, null == e) throw "Cannot tween a null target.";
                    this.target = e = "string" != typeof e ? e : D.selector(e) || e;
                    var r, s, o, a = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType),
                        l = this.vars.overwrite;
                    if (this._overwrite = l = null == l ? W[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : W[l], (a || e instanceof Array || e.push && d(e)) && "number" != typeof e[0])
                        for (this._targets = o = p(e), this._propLookup = [], this._siblings = [], r = 0; r < o.length; r++)(s = o[r]) ? "string" != typeof s ? s.length && s !== t && s[0] && (s[0] === t || s[0].nodeType && s[0].style && !s.nodeType) ? (o.splice(r--, 1), this._targets = o = o.concat(p(s))) : (this._siblings[r] = Z(s, this, !1), 1 === l && this._siblings[r].length > 1 && K(s, this, null, 1, this._siblings[r])) : "string" == typeof(s = o[r--] = D.selector(s)) && o.splice(r + 1, 1) : o.splice(r--, 1);
                    else this._propLookup = {}, this._siblings = Z(e, this, !1), 1 === l && this._siblings.length > 1 && K(e, this, null, 1, this._siblings);
                    (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-10, this.render(Math.min(0, -this._delay)))
                }, !0),
                R = function(e) {
                    return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                };
            (a = D.prototype = new A).constructor = D, a.kill()._gc = !1, a.ratio = 0, a._firstPT = a._targets = a._overwrittenProps = a._startAt = null, a._notifyPluginsOfEnabled = a._lazy = !1, D.version = "1.20.2", D.defaultEase = a._ease = new x(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = l, D.autoSleep = 120, D.lagSmoothing = function(t, e) {
                l.lagSmoothing(t, e)
            }, D.selector = t.$ || t.jQuery || function(e) {
                var i = t.$ || t.jQuery;
                return i ? (D.selector = i, i(e)) : void 0 === n ? e : n.querySelectorAll ? n.querySelectorAll(e) : n.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
            };
            var M = [],
                N = {},
                X = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
                L = /[\+-]=-?[\.\d]/,
                j = function(t) {
                    for (var e, i = this._firstPT; i;) e = i.blob ? 1 === t && this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s, i.m ? e = i.m(e, this._target || i.t) : 1e-6 > e && e > -1e-6 && !i.blob && (e = 0), i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e, i = i._next
                },
                F = function(t, e, i, n) {
                    var r, s, o, a, l, h, c, u = [],
                        p = 0,
                        f = "",
                        d = 0;
                    for (u.start = t, u.end = e, t = u[0] = t + "", e = u[1] = e + "", i && (i(u), t = u[0], e = u[1]), u.length = 0, r = t.match(X) || [], s = e.match(X) || [], n && (n._next = null, n.blob = 1, u._firstPT = u._applyPT = n), l = s.length, a = 0; l > a; a++) c = s[a], h = e.substr(p, e.indexOf(c, p) - p), f += h || !a ? h : ",", p += h.length, d ? d = (d + 1) % 5 : "rgba(" === h.substr(-5) && (d = 1), c === r[a] || r.length <= a ? f += c : (f && (u.push(f), f = ""), o = parseFloat(r[a]), u.push(o), u._firstPT = {
                        _next: u._firstPT,
                        t: u,
                        p: u.length - 1,
                        s: o,
                        c: ("=" === c.charAt(1) ? parseInt(c.charAt(0) + "1", 10) * parseFloat(c.substr(2)) : parseFloat(c) - o) || 0,
                        f: 0,
                        m: d && 4 > d ? Math.round : 0
                    }), p += c.length;
                    return (f += e.substr(p)) && u.push(f), u.setRatio = j, L.test(e) && (u.end = 0), u
                },
                z = function(t, e, i, n, r, s, o, a, l) {
                    "function" == typeof n && (n = n(l || 0, t));
                    var h, c = typeof t[e],
                        u = "function" !== c ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                        p = "get" !== i ? i : u ? o ? t[u](o) : t[u]() : t[e],
                        f = "string" == typeof n && "=" === n.charAt(1),
                        d = {
                            t: t,
                            p: e,
                            s: p,
                            f: "function" === c,
                            pg: 0,
                            n: r || e,
                            m: s ? "function" == typeof s ? s : Math.round : 0,
                            pr: 0,
                            c: f ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - p || 0
                        };
                    return ("number" != typeof p || "number" != typeof n && !f) && (o || isNaN(p) || !f && isNaN(n) || "boolean" == typeof p || "boolean" == typeof n ? (d.fp = o, h = F(p, f ? parseFloat(d.s) + d.c : n, a || D.defaultStringFilter, d), d = {
                        t: h,
                        p: "setRatio",
                        s: 0,
                        c: 1,
                        f: 2,
                        pg: 0,
                        n: r || e,
                        pr: 0,
                        m: 0
                    }) : (d.s = parseFloat(p), f || (d.c = parseFloat(n) - d.s || 0))), d.c ? ((d._next = this._firstPT) && (d._next._prev = d), this._firstPT = d, d) : void 0
                },
                Y = D._internals = {
                    isArray: d,
                    isSelector: R,
                    lazyTweens: M,
                    blobDif: F
                },
                H = D._plugins = {},
                I = Y.tweenLookup = {},
                B = 0,
                q = Y.reservedProps = {
                    ease: 1,
                    delay: 1,
                    overwrite: 1,
                    onComplete: 1,
                    onCompleteParams: 1,
                    onCompleteScope: 1,
                    useFrames: 1,
                    runBackwards: 1,
                    startAt: 1,
                    onUpdate: 1,
                    onUpdateParams: 1,
                    onUpdateScope: 1,
                    onStart: 1,
                    onStartParams: 1,
                    onStartScope: 1,
                    onReverseComplete: 1,
                    onReverseCompleteParams: 1,
                    onReverseCompleteScope: 1,
                    onRepeat: 1,
                    onRepeatParams: 1,
                    onRepeatScope: 1,
                    easeParams: 1,
                    yoyo: 1,
                    immediateRender: 1,
                    repeat: 1,
                    repeatDelay: 1,
                    data: 1,
                    paused: 1,
                    reversed: 1,
                    autoCSS: 1,
                    lazy: 1,
                    onOverwrite: 1,
                    callbackScope: 1,
                    stringFilter: 1,
                    id: 1,
                    yoyoEase: 1
                },
                W = {
                    none: 0,
                    all: 1,
                    auto: 2,
                    concurrent: 3,
                    allOnStart: 4,
                    preexisting: 5,
                    true: 1,
                    false: 0
                },
                U = A._rootFramesTimeline = new O,
                $ = A._rootTimeline = new O,
                V = 30,
                G = Y.lazyRender = function() {
                    var t, e = M.length;
                    for (N = {}; --e > -1;)(t = M[e]) && !1 !== t._lazy && (t.render(t._lazy[0], t._lazy[1], !0), t._lazy = !1);
                    M.length = 0
                };
            $._startTime = l.time, U._startTime = l.frame, $._active = U._active = !0, setTimeout(G, 1), A._updateRoot = D.render = function() {
                var t, e, i;
                if (M.length && G(), $.render((l.time - $._startTime) * $._timeScale, !1, !1), U.render((l.frame - U._startTime) * U._timeScale, !1, !1), M.length && G(), l.frame >= V) {
                    V = l.frame + (parseInt(D.autoSleep, 10) || 120);
                    for (i in I) {
                        for (t = (e = I[i].tweens).length; --t > -1;) e[t]._gc && e.splice(t, 1);
                        0 === e.length && delete I[i]
                    }
                    if ((!(i = $._first) || i._paused) && D.autoSleep && !U._first && 1 === l._listeners.tick.length) {
                        for (; i && i._paused;) i = i._next;
                        i || l.sleep()
                    }
                }
            }, l.addEventListener("tick", A._updateRoot);
            var Z = function(t, e, i) {
                    var n, r, s = t._gsTweenID;
                    if (I[s || (t._gsTweenID = s = "t" + B++)] || (I[s] = {
                            target: t,
                            tweens: []
                        }), e && (n = I[s].tweens, n[r = n.length] = e, i))
                        for (; --r > -1;) n[r] === e && n.splice(r, 1);
                    return I[s].tweens
                },
                Q = function(t, e, i, n) {
                    var r, s, o = t.vars.onOverwrite;
                    return o && (r = o(t, e, i, n)), (o = D.onOverwrite) && (s = o(t, e, i, n)), !1 !== r && !1 !== s
                },
                K = function(t, e, i, n, r) {
                    var s, o, a, l;
                    if (1 === n || n >= 4) {
                        for (l = r.length, s = 0; l > s; s++)
                            if ((a = r[s]) !== e) a._gc || a._kill(null, t, e) && (o = !0);
                            else if (5 === n) break;
                        return o
                    }
                    var h, c = e._startTime + 1e-10,
                        u = [],
                        p = 0,
                        f = 0 === e._duration;
                    for (s = r.length; --s > -1;)(a = r[s]) === e || a._gc || a._paused || (a._timeline !== e._timeline ? (h = h || J(e, 0, f), 0 === J(a, h, f) && (u[p++] = a)) : a._startTime <= c && a._startTime + a.totalDuration() / a._timeScale > c && ((f || !a._initted) && c - a._startTime <= 2e-10 || (u[p++] = a)));
                    for (s = p; --s > -1;)
                        if (a = u[s], 2 === n && a._kill(i, t, e) && (o = !0), 2 !== n || !a._firstPT && a._initted) {
                            if (2 !== n && !Q(a, e)) continue;
                            a._enabled(!1, !1) && (o = !0)
                        } return o
                },
                J = function(t, e, i) {
                    for (var n = t._timeline, r = n._timeScale, s = t._startTime; n._timeline;) {
                        if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
                        n = n._timeline
                    }
                    return (s /= r) > e ? s - e : i && s === e || !t._initted && 2e-10 > s - e ? 1e-10 : (s += t.totalDuration() / t._timeScale / r) > e + 1e-10 ? 0 : s - e - 1e-10
                };
            a._init = function() {
                var t, e, i, n, r, s, o = this.vars,
                    a = this._overwrittenProps,
                    l = this._duration,
                    h = !!o.immediateRender,
                    c = o.ease;
                if (o.startAt) {
                    this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {};
                    for (n in o.startAt) r[n] = o.startAt[n];
                    if (r.overwrite = !1, r.immediateRender = !0, r.lazy = h && !1 !== o.lazy, r.startAt = r.delay = null, r.onUpdate = o.onUpdate, r.onUpdateScope = o.onUpdateScope || o.callbackScope || this, this._startAt = D.to(this.target, 0, r), h)
                        if (this._time > 0) this._startAt = null;
                        else if (0 !== l) return
                } else if (o.runBackwards && 0 !== l)
                    if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
                    else {
                        0 !== this._time && (h = !1), i = {};
                        for (n in o) q[n] && "autoCSS" !== n || (i[n] = o[n]);
                        if (i.overwrite = 0, i.data = "isFromStart", i.lazy = h && !1 !== o.lazy, i.immediateRender = h, this._startAt = D.to(this.target, 0, i), h) {
                            if (0 === this._time) return
                        } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
                    } if (this._ease = c = c ? c instanceof x ? c : "function" == typeof c ? new x(c, o.easeParams) : b[c] || D.defaultEase : D.defaultEase, o.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, o.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
                    for (s = this._targets.length, t = 0; s > t; t++) this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], a ? a[t] : null, t) && (e = !0);
                else e = this._initProps(this.target, this._propLookup, this._siblings, a, 0);
                if (e && D._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), o.runBackwards)
                    for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
                this._onUpdate = o.onUpdate, this._initted = !0
            }, a._initProps = function(e, i, n, r, s) {
                var o, a, l, h, c, u;
                if (null == e) return !1;
                N[e._gsTweenID] && G(), this.vars.css || e.style && e !== t && e.nodeType && H.css && !1 !== this.vars.autoCSS && function(t, e) {
                    var i, n = {};
                    for (i in t) q[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!H[i] || H[i] && H[i]._autoCSS) || (n[i] = t[i], delete t[i]);
                    t.css = n
                }(this.vars, e);
                for (o in this.vars)
                    if (u = this.vars[o], q[o]) u && (u instanceof Array || u.push && d(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[o] = u = this._swapSelfInParams(u, this));
                    else if (H[o] && (h = new H[o])._onInitTween(e, this.vars[o], this, s)) {
                    for (this._firstPT = c = {
                            _next: this._firstPT,
                            t: h,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 1,
                            n: o,
                            pg: 1,
                            pr: h._priority,
                            m: 0
                        }, a = h._overwriteProps.length; --a > -1;) i[h._overwriteProps[a]] = this._firstPT;
                    (h._priority || h._onInitAllProps) && (l = !0), (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
                } else i[o] = z.call(this, e, o, "get", u, o, 0, null, this.vars.stringFilter, s);
                return r && this._kill(r, e) ? this._initProps(e, i, n, r, s) : this._overwrite > 1 && this._firstPT && n.length > 1 && K(e, this, i, this._overwrite, n) ? (this._kill(i, e), this._initProps(e, i, n, r, s)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (N[e._gsTweenID] = !0), l)
            }, a.render = function(t, e, i) {
                var n, r, s, o, a = this._time,
                    l = this._duration,
                    h = this._rawPrevTime;
                if (t >= l - 1e-7 && t >= 0) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0), (0 > h || 0 >= t && t >= -1e-7 || 1e-10 === h && "isPause" !== this.data) && h !== t && (i = !0, h > 1e-10 && (r = "onReverseComplete")), this._rawPrevTime = o = !e || t || h === t ? t : 1e-10);
                else if (1e-7 > t) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== a || 0 === l && h > 0) && (r = "onReverseComplete", n = this._reversed), 0 > t && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (1e-10 !== h || "isPause" !== this.data) && (i = !0), this._rawPrevTime = o = !e || t || h === t ? t : 1e-10)), (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                else if (this._totalTime = this._time = t, this._easeType) {
                    var c = t / l,
                        u = this._easeType,
                        p = this._easePower;
                    (1 === u || 3 === u && c >= .5) && (c = 1 - c), 3 === u && (c *= 2), 1 === p ? c *= c : 2 === p ? c *= c * c : 3 === p ? c *= c * c * c : 4 === p && (c *= c * c * c * c), this.ratio = 1 === u ? 1 - c : 2 === u ? c : .5 > t / l ? c / 2 : 1 - c / 2
                } else this.ratio = this._ease.getRatio(t / l);
                if (this._time !== a || i) {
                    if (!this._initted) {
                        if (this._init(), !this._initted || this._gc) return;
                        if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = a, this._rawPrevTime = h, M.push(this), void(this._lazy = [t, e]);
                        this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                    }
                    for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== a && t >= 0 && (this._active = !0), 0 === a && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (e || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
                    this._onUpdate && (0 > t && this._startAt && -1e-4 !== t && this._startAt.render(t, e, i), e || (this._time !== a || n || i) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > t && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, e, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !e && this.vars[r] && this._callback(r), 0 === l && 1e-10 === this._rawPrevTime && 1e-10 !== o && (this._rawPrevTime = 0))
                }
            }, a._kill = function(t, e, i) {
                if ("all" === t && (t = null), null == t && (null == e || e === this.target)) return this._lazy = !1, this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : D.selector(e) || e;
                var n, r, s, o, a, l, h, c, u, p = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                if ((d(e) || R(e)) && "number" != typeof e[0])
                    for (n = e.length; --n > -1;) this._kill(t, e[n], i) && (l = !0);
                else {
                    if (this._targets) {
                        for (n = this._targets.length; --n > -1;)
                            if (e === this._targets[n]) {
                                a = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                break
                            }
                    } else {
                        if (e !== this.target) return !1;
                        a = this._propLookup, r = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                    }
                    if (a) {
                        if (h = t || a, c = t !== r && "all" !== r && t !== a && ("object" != typeof t || !t._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
                            for (s in h) a[s] && (u || (u = []), u.push(s));
                            if ((u || !t) && !Q(this, i, e, u)) return !1
                        }
                        for (s in h)(o = a[s]) && (p && (o.f ? o.t[o.p](o.s) : o.t[o.p] = o.s, l = !0), o.pg && o.t._kill(h) && (l = !0), o.pg && 0 !== o.t._overwriteProps.length || (o._prev ? o._prev._next = o._next : o === this._firstPT && (this._firstPT = o._next), o._next && (o._next._prev = o._prev), o._next = o._prev = null), delete a[s]), c && (r[s] = 1);
                        !this._firstPT && this._initted && this._enabled(!1, !1)
                    }
                }
                return l
            }, a.invalidate = function() {
                return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], A.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -1e-10, this.render(Math.min(0, -this._delay))), this
            }, a._enabled = function(t, e) {
                if (h || l.wake(), t && this._gc) {
                    var i, n = this._targets;
                    if (n)
                        for (i = n.length; --i > -1;) this._siblings[i] = Z(n[i], this, !0);
                    else this._siblings = Z(this.target, this, !0)
                }
                return A.prototype._enabled.call(this, t, e), !(!this._notifyPluginsOfEnabled || !this._firstPT) && D._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }, D.to = function(t, e, i) {
                return new D(t, e, i)
            }, D.from = function(t, e, i) {
                return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(t, e, i)
            }, D.fromTo = function(t, e, i, n) {
                return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new D(t, e, n)
            }, D.delayedCall = function(t, e, i, n, r) {
                return new D(e, 0, {
                    delay: t,
                    onComplete: e,
                    onCompleteParams: i,
                    callbackScope: n,
                    onReverseComplete: e,
                    onReverseCompleteParams: i,
                    immediateRender: !1,
                    lazy: !1,
                    useFrames: r,
                    overwrite: 0
                })
            }, D.set = function(t, e) {
                return new D(t, 0, e)
            }, D.getTweensOf = function(t, e) {
                if (null == t) return [];
                t = "string" != typeof t ? t : D.selector(t) || t;
                var i, n, r, s;
                if ((d(t) || R(t)) && "number" != typeof t[0]) {
                    for (i = t.length, n = []; --i > -1;) n = n.concat(D.getTweensOf(t[i], e));
                    for (i = n.length; --i > -1;)
                        for (s = n[i], r = i; --r > -1;) s === n[r] && n.splice(i, 1)
                } else if (t._gsTweenID)
                    for (n = Z(t).concat(), i = n.length; --i > -1;)(n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                return n || []
            }, D.killTweensOf = D.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e, e = !1);
                for (var n = D.getTweensOf(t, e), r = n.length; --r > -1;) n[r]._kill(i, t)
            };
            var tt = v("plugins.TweenPlugin", function(t, e) {
                this._overwriteProps = (t || "").split(","), this._propName = this._overwriteProps[0], this._priority = e || 0, this._super = tt.prototype
            }, !0);
            if (a = tt.prototype, tt.version = "1.19.0", tt.API = 2, a._firstPT = null, a._addTween = z, a.setRatio = j, a._kill = function(t) {
                    var e, i = this._overwriteProps,
                        n = this._firstPT;
                    if (null != t[this._propName]) this._overwriteProps = [];
                    else
                        for (e = i.length; --e > -1;) null != t[i[e]] && i.splice(e, 1);
                    for (; n;) null != t[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
                    return !1
                }, a._mod = a._roundProps = function(t) {
                    for (var e, i = this._firstPT; i;)(e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e), i = i._next
                }, D._onPluginEvent = function(t, e) {
                    var i, n, r, s, o, a = e._firstPT;
                    if ("_onInitAllProps" === t) {
                        for (; a;) {
                            for (o = a._next, n = r; n && n.pr > a.pr;) n = n._next;
                            (a._prev = n ? n._prev : s) ? a._prev._next = a: r = a, (a._next = n) ? n._prev = a : s = a, a = o
                        }
                        a = e._firstPT = r
                    }
                    for (; a;) a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0), a = a._next;
                    return i
                }, tt.activate = function(t) {
                    for (var e = t.length; --e > -1;) t[e].API === tt.API && (H[(new t[e])._propName] = t[e]);
                    return !0
                }, _.plugin = function(t) {
                    if (!(t && t.propName && t.init && t.API)) throw "illegal plugin definition.";
                    var e, i = t.propName,
                        n = t.priority || 0,
                        r = t.overwriteProps,
                        s = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_mod",
                            mod: "_mod",
                            initAll: "_onInitAllProps"
                        },
                        o = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            tt.call(this, i, n), this._overwriteProps = r || []
                        }, !0 === t.global),
                        a = o.prototype = new tt(i);
                    a.constructor = o, o.API = t.API;
                    for (e in s) "function" == typeof t[e] && (a[s[e]] = t[e]);
                    return o.version = t.version, tt.activate([o]), o
                }, s = t._gsQueue) {
                for (o = 0; o < s.length; o++) s[o]();
                for (a in m) m[a].func || t.console.log("GSAP encountered missing dependency: " + a)
            }
            h = !1
        }
    }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"),
    function(t, e) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document) throw new Error("jQuery requires a window with a document");
            return e(t)
        } : e(t)
    }("undefined" != typeof window ? window : this, function(t, e) {
        function i(t) {
            var e = !!t && "length" in t && t.length,
                i = J.type(t);
            return "function" !== i && !J.isWindow(t) && ("array" === i || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function n(t, e, i) {
            if (J.isFunction(e)) return J.grep(t, function(t, n) {
                return !!e.call(t, n, t) !== i
            });
            if (e.nodeType) return J.grep(t, function(t) {
                return t === e !== i
            });
            if ("string" == typeof e) {
                if (ht.test(e)) return J.filter(e, t, i);
                e = J.filter(e, t)
            }
            return J.grep(t, function(t) {
                return V.call(e, t) > -1 !== i
            })
        }

        function r(t, e) {
            for (;
                (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function s() {
            q.removeEventListener("DOMContentLoaded", s), t.removeEventListener("load", s), J.ready()
        }

        function o() {
            this.expando = J.expando + o.uid++
        }

        function a(t, e, i) {
            var n;
            if (void 0 === i && 1 === t.nodeType)
                if (n = "data-" + e.replace(bt, "-$&").toLowerCase(), "string" == typeof(i = t.getAttribute(n))) {
                    try {
                        i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : xt.test(i) ? J.parseJSON(i) : i)
                    } catch (t) {}
                    yt.set(t, e, i)
                } else i = void 0;
            return i
        }

        function l(t, e, i, n) {
            var r, s = 1,
                o = 20,
                a = n ? function() {
                    return n.cur()
                } : function() {
                    return J.css(t, e, "")
                },
                l = a(),
                h = i && i[3] || (J.cssNumber[e] ? "" : "px"),
                c = (J.cssNumber[e] || "px" !== h && +l) && Tt.exec(J.css(t, e));
            if (c && c[3] !== h) {
                h = h || c[3], i = i || [], c = +l || 1;
                do {
                    s = s || ".5", c /= s, J.style(t, e, c + h)
                } while (s !== (s = a() / l) && 1 !== s && --o)
            }
            return i && (c = +c || +l || 0, r = i[1] ? c + (i[1] + 1) * i[2] : +i[2], n && (n.unit = h, n.start = c, n.end = r)), r
        }

        function h(t, e) {
            var i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
            return void 0 === e || e && J.nodeName(t, e) ? J.merge([t], i) : i
        }

        function c(t, e) {
            for (var i = 0, n = t.length; n > i; i++) vt.set(t[i], "globalEval", !e || vt.get(e[i], "globalEval"))
        }

        function u(t, e, i, n, r) {
            for (var s, o, a, l, u, p, f = e.createDocumentFragment(), d = [], m = 0, g = t.length; g > m; m++)
                if ((s = t[m]) || 0 === s)
                    if ("object" === J.type(s)) J.merge(d, s.nodeType ? [s] : s);
                    else if (Ot.test(s)) {
                for (o = o || f.appendChild(e.createElement("div")), a = (Ct.exec(s) || ["", ""])[1].toLowerCase(), l = Et[a] || Et._default, o.innerHTML = l[1] + J.htmlPrefilter(s) + l[2], p = l[0]; p--;) o = o.lastChild;
                J.merge(d, o.childNodes), (o = f.firstChild).textContent = ""
            } else d.push(e.createTextNode(s));
            for (f.textContent = "", m = 0; s = d[m++];)
                if (n && J.inArray(s, n) > -1) r && r.push(s);
                else if (u = J.contains(s.ownerDocument, s), o = h(f.appendChild(s), "script"), u && c(o), i)
                for (p = 0; s = o[p++];) At.test(s.type || "") && i.push(s);
            return f
        }

        function p() {
            return !0
        }

        function f() {
            return !1
        }

        function d() {
            try {
                return q.activeElement
            } catch (t) {}
        }

        function m(t, e, i, n, r, s) {
            var o, a;
            if ("object" == typeof e) {
                "string" != typeof i && (n = n || i, i = void 0);
                for (a in e) m(t, a, i, n, e[a], s);
                return t
            }
            if (null == n && null == r ? (r = i, n = i = void 0) : null == r && ("string" == typeof i ? (r = n, n = void 0) : (r = n, n = i, i = void 0)), !1 === r) r = f;
            else if (!r) return t;
            return 1 === s && (o = r, r = function(t) {
                return J().off(t), o.apply(this, arguments)
            }, r.guid = o.guid || (o.guid = J.guid++)), t.each(function() {
                J.event.add(this, e, r, n, i)
            })
        }

        function g(t, e) {
            return J.nodeName(t, "table") && J.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function _(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function v(t) {
            var e = jt.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function y(t, e) {
            var i, n, r, s, o, a, l, h;
            if (1 === e.nodeType) {
                if (vt.hasData(t) && (s = vt.access(t), o = vt.set(e, s), h = s.events)) {
                    delete o.handle, o.events = {};
                    for (r in h)
                        for (i = 0, n = h[r].length; n > i; i++) J.event.add(e, r, h[r][i])
                }
                yt.hasData(t) && (a = yt.access(t), l = J.extend({}, a), yt.set(e, l))
            }
        }

        function x(t, e) {
            var i = e.nodeName.toLowerCase();
            "input" === i && kt.test(t.type) ? e.checked = t.checked : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
        }

        function b(t, e, i, n) {
            e = U.apply([], e);
            var r, s, o, a, l, c, p = 0,
                f = t.length,
                d = f - 1,
                m = e[0],
                g = J.isFunction(m);
            if (g || f > 1 && "string" == typeof m && !K.checkClone && Lt.test(m)) return t.each(function(r) {
                var s = t.eq(r);
                g && (e[0] = m.call(this, r, s.html())), b(s, e, i, n)
            });
            if (f && (r = u(e, t[0].ownerDocument, !1, t, n), s = r.firstChild, 1 === r.childNodes.length && (r = s), s || n)) {
                for (a = (o = J.map(h(r, "script"), _)).length; f > p; p++) l = r, p !== d && (l = J.clone(l, !0, !0), a && J.merge(o, h(l, "script"))), i.call(t[p], l, p);
                if (a)
                    for (c = o[o.length - 1].ownerDocument, J.map(o, v), p = 0; a > p; p++) l = o[p], At.test(l.type || "") && !vt.access(l, "globalEval") && J.contains(c, l) && (l.src ? J._evalUrl && J._evalUrl(l.src) : J.globalEval(l.textContent.replace(Ft, "")))
            }
            return t
        }

        function w(t, e, i) {
            for (var n, r = e ? J.filter(e, t) : t, s = 0; null != (n = r[s]); s++) i || 1 !== n.nodeType || J.cleanData(h(n)), n.parentNode && (i && J.contains(n.ownerDocument, n) && c(h(n, "script")), n.parentNode.removeChild(n));
            return t
        }

        function T(t, e) {
            var i = J(e.createElement(t)).appendTo(e.body),
                n = J.css(i[0], "display");
            return i.detach(), n
        }

        function S(t) {
            var e = q,
                i = Yt[t];
            return i || ("none" !== (i = T(t, e)) && i || (zt = (zt || J("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), (e = zt[0].contentDocument).write(), e.close(), i = T(t, e), zt.detach()), Yt[t] = i), i
        }

        function P(t, e, i) {
            var n, r, s, o, a = t.style;
            return i = i || Bt(t), "" !== (o = i ? i.getPropertyValue(e) || i[e] : void 0) && void 0 !== o || J.contains(t.ownerDocument, t) || (o = J.style(t, e)), i && !K.pixelMarginRight() && It.test(o) && Ht.test(e) && (n = a.width, r = a.minWidth, s = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = i.width, a.width = n, a.minWidth = r, a.maxWidth = s), void 0 !== o ? o + "" : o
        }

        function k(t, e) {
            return {
                get: function() {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function C(t) {
            if (t in Zt) return t;
            for (var e = t[0].toUpperCase() + t.slice(1), i = Gt.length; i--;)
                if ((t = Gt[i] + e) in Zt) return t
        }

        function A(t, e, i) {
            var n = Tt.exec(e);
            return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e
        }

        function E(t, e, i, n, r) {
            for (var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > s; s += 2) "margin" === i && (o += J.css(t, i + St[s], !0, r)), n ? ("content" === i && (o -= J.css(t, "padding" + St[s], !0, r)), "margin" !== i && (o -= J.css(t, "border" + St[s] + "Width", !0, r))) : (o += J.css(t, "padding" + St[s], !0, r), "padding" !== i && (o += J.css(t, "border" + St[s] + "Width", !0, r)));
            return o
        }

        function O(t, e, i) {
            var n = !0,
                r = "width" === e ? t.offsetWidth : t.offsetHeight,
                s = Bt(t),
                o = "border-box" === J.css(t, "boxSizing", !1, s);
            if (0 >= r || null == r) {
                if ((0 > (r = P(t, e, s)) || null == r) && (r = t.style[e]), It.test(r)) return r;
                n = o && (K.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
            }
            return r + E(t, e, i || (o ? "border" : "content"), n, s) + "px"
        }

        function D(t, e) {
            for (var i, n, r, s = [], o = 0, a = t.length; a > o; o++)(n = t[o]).style && (s[o] = vt.get(n, "olddisplay"), i = n.style.display, e ? (s[o] || "none" !== i || (n.style.display = ""), "" === n.style.display && Pt(n) && (s[o] = vt.access(n, "olddisplay", S(n.nodeName)))) : (r = Pt(n), "none" === i && r || vt.set(n, "olddisplay", r ? i : J.css(n, "display"))));
            for (o = 0; a > o; o++)(n = t[o]).style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? s[o] || "" : "none"));
            return t
        }

        function R(t, e, i, n, r) {
            return new R.prototype.init(t, e, i, n, r)
        }

        function M() {
            return t.setTimeout(function() {
                Qt = void 0
            }), Qt = J.now()
        }

        function N(t, e) {
            var i, n = 0,
                r = {
                    height: t
                };
            for (e = e ? 1 : 0; 4 > n; n += 2 - e) i = St[n], r["margin" + i] = r["padding" + i] = t;
            return e && (r.opacity = r.width = t), r
        }

        function X(t, e, i) {
            for (var n, r = (L.tweeners[e] || []).concat(L.tweeners["*"]), s = 0, o = r.length; o > s; s++)
                if (n = r[s].call(i, e, t)) return n
        }

        function L(t, e, i) {
            var n, r, s = 0,
                o = L.prefilters.length,
                a = J.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (r) return !1;
                    for (var e = Qt || M(), i = Math.max(0, h.startTime + h.duration - e), n = 1 - (i / h.duration || 0), s = 0, o = h.tweens.length; o > s; s++) h.tweens[s].run(n);
                    return a.notifyWith(t, [h, n, i]), 1 > n && o ? i : (a.resolveWith(t, [h]), !1)
                },
                h = a.promise({
                    elem: t,
                    props: J.extend({}, e),
                    opts: J.extend(!0, {
                        specialEasing: {},
                        easing: J.easing._default
                    }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: Qt || M(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function(e, i) {
                        var n = J.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                        return h.tweens.push(n), n
                    },
                    stop: function(e) {
                        var i = 0,
                            n = e ? h.tweens.length : 0;
                        if (r) return this;
                        for (r = !0; n > i; i++) h.tweens[i].run(1);
                        return e ? (a.notifyWith(t, [h, 1, 0]), a.resolveWith(t, [h, e])) : a.rejectWith(t, [h, e]), this
                    }
                }),
                c = h.props;
            for (function(t, e) {
                    var i, n, r, s, o;
                    for (i in t)
                        if (n = J.camelCase(i), r = e[n], s = t[i], J.isArray(s) && (r = s[1], s = t[i] = s[0]), i !== n && (t[n] = s, delete t[i]), (o = J.cssHooks[n]) && "expand" in o) {
                            s = o.expand(s), delete t[n];
                            for (i in s) i in t || (t[i] = s[i], e[i] = r)
                        } else e[n] = r
                }(c, h.opts.specialEasing); o > s; s++)
                if (n = L.prefilters[s].call(h, t, c, h.opts)) return J.isFunction(n.stop) && (J._queueHooks(h.elem, h.opts.queue).stop = J.proxy(n.stop, n)), n;
            return J.map(c, X, h), J.isFunction(h.opts.start) && h.opts.start.call(t, h), J.fx.timer(J.extend(l, {
                elem: t,
                anim: h,
                queue: h.opts.queue
            })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
        }

        function j(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function F(t) {
            return function(e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, r = 0,
                    s = e.toLowerCase().match(dt) || [];
                if (J.isFunction(i))
                    for (; n = s[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function z(t, e, i, n) {
            function r(a) {
                var l;
                return s[a] = !0, J.each(t[a] || [], function(t, a) {
                    var h = a(e, i, n);
                    return "string" != typeof h || o || s[h] ? o ? !(l = h) : void 0 : (e.dataTypes.unshift(h), r(h), !1)
                }), l
            }
            var s = {},
                o = t === ve;
            return r(e.dataTypes[0]) || !s["*"] && r("*")
        }

        function Y(t, e) {
            var i, n, r = J.ajaxSettings.flatOptions || {};
            for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
            return n && J.extend(!0, t, n), t
        }

        function H(t, e, i, n) {
            var r;
            if (J.isArray(e)) J.each(e, function(e, r) {
                i || we.test(t) ? n(t, r) : H(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, i, n)
            });
            else if (i || "object" !== J.type(e)) n(t, e);
            else
                for (r in e) H(t + "[" + r + "]", e[r], i, n)
        }

        function I(t) {
            return J.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }
        var B = [],
            q = t.document,
            W = B.slice,
            U = B.concat,
            $ = B.push,
            V = B.indexOf,
            G = {},
            Z = G.toString,
            Q = G.hasOwnProperty,
            K = {},
            J = function(t, e) {
                return new J.fn.init(t, e)
            },
            tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            et = /^-ms-/,
            it = /-([\da-z])/gi,
            nt = function(t, e) {
                return e.toUpperCase()
            };
        J.fn = J.prototype = {
            jquery: "2.2.4",
            constructor: J,
            selector: "",
            length: 0,
            toArray: function() {
                return W.call(this)
            },
            get: function(t) {
                return null != t ? 0 > t ? this[t + this.length] : this[t] : W.call(this)
            },
            pushStack: function(t) {
                var e = J.merge(this.constructor(), t);
                return e.prevObject = this, e.context = this.context, e
            },
            each: function(t) {
                return J.each(this, t)
            },
            map: function(t) {
                return this.pushStack(J.map(this, function(e, i) {
                    return t.call(e, i, e)
                }))
            },
            slice: function() {
                return this.pushStack(W.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(t) {
                var e = this.length,
                    i = +t + (0 > t ? e : 0);
                return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: $,
            sort: B.sort,
            splice: B.splice
        }, J.extend = J.fn.extend = function() {
            var t, e, i, n, r, s, o = arguments[0] || {},
                a = 1,
                l = arguments.length,
                h = !1;
            for ("boolean" == typeof o && (h = o, o = arguments[a] || {}, a++), "object" == typeof o || J.isFunction(o) || (o = {}), a === l && (o = this, a--); l > a; a++)
                if (null != (t = arguments[a]))
                    for (e in t) i = o[e], n = t[e], o !== n && (h && n && (J.isPlainObject(n) || (r = J.isArray(n))) ? (r ? (r = !1, s = i && J.isArray(i) ? i : []) : s = i && J.isPlainObject(i) ? i : {}, o[e] = J.extend(h, s, n)) : void 0 !== n && (o[e] = n));
            return o
        }, J.extend({
            expando: "jQuery" + ("2.2.4" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === J.type(t)
            },
            isArray: Array.isArray,
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                var e = t && t.toString();
                return !J.isArray(t) && e - parseFloat(e) + 1 >= 0
            },
            isPlainObject: function(t) {
                var e;
                if ("object" !== J.type(t) || t.nodeType || J.isWindow(t)) return !1;
                if (t.constructor && !Q.call(t, "constructor") && !Q.call(t.constructor.prototype || {}, "isPrototypeOf")) return !1;
                for (e in t);
                return void 0 === e || Q.call(t, e)
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t) return !1;
                return !0
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? G[Z.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                var e, i = eval;
                (t = J.trim(t)) && (1 === t.indexOf("use strict") ? (e = q.createElement("script"), e.text = t, q.head.appendChild(e).parentNode.removeChild(e)) : i(t))
            },
            camelCase: function(t) {
                return t.replace(et, "ms-").replace(it, nt)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e) {
                var n, r = 0;
                if (i(t))
                    for (n = t.length; n > r && !1 !== e.call(t[r], r, t[r]); r++);
                else
                    for (r in t)
                        if (!1 === e.call(t[r], r, t[r])) break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(tt, "")
            },
            makeArray: function(t, e) {
                var n = e || [];
                return null != t && (i(Object(t)) ? J.merge(n, "string" == typeof t ? [t] : t) : $.call(n, t)), n
            },
            inArray: function(t, e, i) {
                return null == e ? -1 : V.call(e, t, i)
            },
            merge: function(t, e) {
                for (var i = +e.length, n = 0, r = t.length; i > n; n++) t[r++] = e[n];
                return t.length = r, t
            },
            grep: function(t, e, i) {
                for (var n = [], r = 0, s = t.length, o = !i; s > r; r++) !e(t[r], r) !== o && n.push(t[r]);
                return n
            },
            map: function(t, e, n) {
                var r, s, o = 0,
                    a = [];
                if (i(t))
                    for (r = t.length; r > o; o++) null != (s = e(t[o], o, n)) && a.push(s);
                else
                    for (o in t) null != (s = e(t[o], o, n)) && a.push(s);
                return U.apply([], a)
            },
            guid: 1,
            proxy: function(t, e) {
                var i, n, r;
                return "string" == typeof e && (i = t[e], e = t, t = i), J.isFunction(t) ? (n = W.call(arguments, 2), r = function() {
                    return t.apply(e || this, n.concat(W.call(arguments)))
                }, r.guid = t.guid = t.guid || J.guid++, r) : void 0
            },
            now: Date.now,
            support: K
        }), "function" == typeof Symbol && (J.fn[Symbol.iterator] = B[Symbol.iterator]), J.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(t, e) {
            G["[object " + e + "]"] = e.toLowerCase()
        });
        var rt = function(t) {
            function e(t, e, i, n) {
                var r, s, o, a, l, h, u, f, d = e && e.ownerDocument,
                    m = e ? e.nodeType : 9;
                if (i = i || [], "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m) return i;
                if (!n && ((e ? e.ownerDocument || e : F) !== O && E(e), e = e || O, R)) {
                    if (11 !== m && (h = mt.exec(t)))
                        if (r = h[1]) {
                            if (9 === m) {
                                if (!(o = e.getElementById(r))) return i;
                                if (o.id === r) return i.push(o), i
                            } else if (d && (o = d.getElementById(r)) && L(e, o) && o.id === r) return i.push(o), i
                        } else {
                            if (h[2]) return Z.apply(i, e.getElementsByTagName(t)), i;
                            if ((r = h[3]) && y.getElementsByClassName && e.getElementsByClassName) return Z.apply(i, e.getElementsByClassName(r)), i
                        } if (y.qsa && !B[t + " "] && (!M || !M.test(t))) {
                        if (1 !== m) d = e, f = t;
                        else if ("object" !== e.nodeName.toLowerCase()) {
                            for ((a = e.getAttribute("id")) ? a = a.replace(_t, "\\$&") : e.setAttribute("id", a = j), s = (u = T(t)).length, l = ct.test(a) ? "#" + a : "[id='" + a + "']"; s--;) u[s] = l + " " + p(u[s]);
                            f = u.join(","), d = gt.test(t) && c(e.parentNode) || e
                        }
                        if (f) try {
                            return Z.apply(i, d.querySelectorAll(f)), i
                        } catch (t) {} finally {
                            a === j && e.removeAttribute("id")
                        }
                    }
                }
                return P(t.replace(st, "$1"), e, i, n)
            }

            function i() {
                function t(i, n) {
                    return e.push(i + " ") > x.cacheLength && delete t[e.shift()], t[i + " "] = n
                }
                var e = [];
                return t
            }

            function n(t) {
                return t[j] = !0, t
            }

            function r(t) {
                var e = O.createElement("div");
                try {
                    return !!t(e)
                } catch (t) {
                    return !1
                } finally {
                    e.parentNode && e.parentNode.removeChild(e), e = null
                }
            }

            function s(t, e) {
                for (var i = t.split("|"), n = i.length; n--;) x.attrHandle[i[n]] = e
            }

            function o(t, e) {
                var i = e && t,
                    n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || W) - (~t.sourceIndex || W);
                if (n) return n;
                if (i)
                    for (; i = i.nextSibling;)
                        if (i === e) return -1;
                return t ? 1 : -1
            }

            function a(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }

            function l(t) {
                return function(e) {
                    var i = e.nodeName.toLowerCase();
                    return ("input" === i || "button" === i) && e.type === t
                }
            }

            function h(t) {
                return n(function(e) {
                    return e = +e, n(function(i, n) {
                        for (var r, s = t([], i.length, e), o = s.length; o--;) i[r = s[o]] && (i[r] = !(n[r] = i[r]))
                    })
                })
            }

            function c(t) {
                return t && void 0 !== t.getElementsByTagName && t
            }

            function u() {}

            function p(t) {
                for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
                return n
            }

            function f(t, e, i) {
                var n = e.dir,
                    r = i && "parentNode" === n,
                    s = Y++;
                return e.first ? function(e, i, s) {
                    for (; e = e[n];)
                        if (1 === e.nodeType || r) return t(e, i, s)
                } : function(e, i, o) {
                    var a, l, h, c = [z, s];
                    if (o) {
                        for (; e = e[n];)
                            if ((1 === e.nodeType || r) && t(e, i, o)) return !0
                    } else
                        for (; e = e[n];)
                            if (1 === e.nodeType || r) {
                                if (h = e[j] || (e[j] = {}), l = h[e.uniqueID] || (h[e.uniqueID] = {}), (a = l[n]) && a[0] === z && a[1] === s) return c[2] = a[2];
                                if (l[n] = c, c[2] = t(e, i, o)) return !0
                            }
                }
            }

            function d(t) {
                return t.length > 1 ? function(e, i, n) {
                    for (var r = t.length; r--;)
                        if (!t[r](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function m(t, e, i, n, r) {
                for (var s, o = [], a = 0, l = t.length, h = null != e; l > a; a++)(s = t[a]) && (i && !i(s, n, r) || (o.push(s), h && e.push(a)));
                return o
            }

            function g(t, i, r, s, o, a) {
                return s && !s[j] && (s = g(s)), o && !o[j] && (o = g(o, a)), n(function(n, a, l, h) {
                    var c, u, p, f = [],
                        d = [],
                        g = a.length,
                        _ = n || function(t, i, n) {
                            for (var r = 0, s = i.length; s > r; r++) e(t, i[r], n);
                            return n
                        }(i || "*", l.nodeType ? [l] : l, []),
                        v = !t || !n && i ? _ : m(_, f, t, l, h),
                        y = r ? o || (n ? t : g || s) ? [] : a : v;
                    if (r && r(v, y, l, h), s)
                        for (c = m(y, d), s(c, [], l, h), u = c.length; u--;)(p = c[u]) && (y[d[u]] = !(v[d[u]] = p));
                    if (n) {
                        if (o || t) {
                            if (o) {
                                for (c = [], u = y.length; u--;)(p = y[u]) && c.push(v[u] = p);
                                o(null, y = [], c, h)
                            }
                            for (u = y.length; u--;)(p = y[u]) && (c = o ? K(n, p) : f[u]) > -1 && (n[c] = !(a[c] = p))
                        }
                    } else y = m(y === a ? y.splice(g, y.length) : y), o ? o(null, a, y, h) : Z.apply(a, y)
                })
            }

            function _(t) {
                for (var e, i, n, r = t.length, s = x.relative[t[0].type], o = s || x.relative[" "], a = s ? 1 : 0, l = f(function(t) {
                        return t === e
                    }, o, !0), h = f(function(t) {
                        return K(e, t) > -1
                    }, o, !0), c = [function(t, i, n) {
                        var r = !s && (n || i !== k) || ((e = i).nodeType ? l(t, i, n) : h(t, i, n));
                        return e = null, r
                    }]; r > a; a++)
                    if (i = x.relative[t[a].type]) c = [f(d(c), i)];
                    else {
                        if ((i = x.filter[t[a].type].apply(null, t[a].matches))[j]) {
                            for (n = ++a; r > n && !x.relative[t[n].type]; n++);
                            return g(a > 1 && d(c), a > 1 && p(t.slice(0, a - 1).concat({
                                value: " " === t[a - 2].type ? "*" : ""
                            })).replace(st, "$1"), i, n > a && _(t.slice(a, n)), r > n && _(t = t.slice(n)), r > n && p(t))
                        }
                        c.push(i)
                    } return d(c)
            }
            var v, y, x, b, w, T, S, P, k, C, A, E, O, D, R, M, N, X, L, j = "sizzle" + 1 * new Date,
                F = t.document,
                z = 0,
                Y = 0,
                H = i(),
                I = i(),
                B = i(),
                q = function(t, e) {
                    return t === e && (A = !0), 0
                },
                W = 1 << 31,
                U = {}.hasOwnProperty,
                $ = [],
                V = $.pop,
                G = $.push,
                Z = $.push,
                Q = $.slice,
                K = function(t, e) {
                    for (var i = 0, n = t.length; n > i; i++)
                        if (t[i] === e) return i;
                    return -1
                },
                J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                tt = "[\\x20\\t\\r\\n\\f]",
                et = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                it = "\\[" + tt + "*(" + et + ")(?:" + tt + "*([*^$|!~]?=)" + tt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + et + "))|)" + tt + "*\\]",
                nt = ":(" + et + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)",
                rt = new RegExp(tt + "+", "g"),
                st = new RegExp("^" + tt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + tt + "+$", "g"),
                ot = new RegExp("^" + tt + "*," + tt + "*"),
                at = new RegExp("^" + tt + "*([>+~]|" + tt + ")" + tt + "*"),
                lt = new RegExp("=" + tt + "*([^\\]'\"]*?)" + tt + "*\\]", "g"),
                ht = new RegExp(nt),
                ct = new RegExp("^" + et + "$"),
                ut = {
                    ID: new RegExp("^#(" + et + ")"),
                    CLASS: new RegExp("^\\.(" + et + ")"),
                    TAG: new RegExp("^(" + et + "|[*])"),
                    ATTR: new RegExp("^" + it),
                    PSEUDO: new RegExp("^" + nt),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + tt + "*(even|odd|(([+-]|)(\\d*)n|)" + tt + "*(?:([+-]|)" + tt + "*(\\d+)|))" + tt + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + J + ")$", "i"),
                    needsContext: new RegExp("^" + tt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + tt + "*((?:-\\d)?\\d*)" + tt + "*\\)|)(?=[^-]|$)", "i")
                },
                pt = /^(?:input|select|textarea|button)$/i,
                ft = /^h\d$/i,
                dt = /^[^{]+\{\s*\[native \w/,
                mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                gt = /[+~]/,
                _t = /'|\\/g,
                vt = new RegExp("\\\\([\\da-f]{1,6}" + tt + "?|(" + tt + ")|.)", "ig"),
                yt = function(t, e, i) {
                    var n = "0x" + e - 65536;
                    return n != n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                },
                xt = function() {
                    E()
                };
            try {
                Z.apply($ = Q.call(F.childNodes), F.childNodes), $[F.childNodes.length].nodeType
            } catch (t) {
                Z = {
                    apply: $.length ? function(t, e) {
                        G.apply(t, Q.call(e))
                    } : function(t, e) {
                        for (var i = t.length, n = 0; t[i++] = e[n++];);
                        t.length = i - 1
                    }
                }
            }
            y = e.support = {}, w = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, E = e.setDocument = function(t) {
                var e, i, n = t ? t.ownerDocument || t : F;
                return n !== O && 9 === n.nodeType && n.documentElement ? (O = n, D = O.documentElement, R = !w(O), (i = O.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", xt, !1) : i.attachEvent && i.attachEvent("onunload", xt)), y.attributes = r(function(t) {
                    return t.className = "i", !t.getAttribute("className")
                }), y.getElementsByTagName = r(function(t) {
                    return t.appendChild(O.createComment("")), !t.getElementsByTagName("*").length
                }), y.getElementsByClassName = dt.test(O.getElementsByClassName), y.getById = r(function(t) {
                    return D.appendChild(t).id = j, !O.getElementsByName || !O.getElementsByName(j).length
                }), y.getById ? (x.find.ID = function(t, e) {
                    if (void 0 !== e.getElementById && R) {
                        var i = e.getElementById(t);
                        return i ? [i] : []
                    }
                }, x.filter.ID = function(t) {
                    var e = t.replace(vt, yt);
                    return function(t) {
                        return t.getAttribute("id") === e
                    }
                }) : (delete x.find.ID, x.filter.ID = function(t) {
                    var e = t.replace(vt, yt);
                    return function(t) {
                        var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                        return i && i.value === e
                    }
                }), x.find.TAG = y.getElementsByTagName ? function(t, e) {
                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : y.qsa ? e.querySelectorAll(t) : void 0
                } : function(t, e) {
                    var i, n = [],
                        r = 0,
                        s = e.getElementsByTagName(t);
                    if ("*" === t) {
                        for (; i = s[r++];) 1 === i.nodeType && n.push(i);
                        return n
                    }
                    return s
                }, x.find.CLASS = y.getElementsByClassName && function(t, e) {
                    return void 0 !== e.getElementsByClassName && R ? e.getElementsByClassName(t) : void 0
                }, N = [], M = [], (y.qsa = dt.test(O.querySelectorAll)) && (r(function(t) {
                    D.appendChild(t).innerHTML = "<a id='" + j + "'></a><select id='" + j + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && M.push("[*^$]=" + tt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || M.push("\\[" + tt + "*(?:value|" + J + ")"), t.querySelectorAll("[id~=" + j + "-]").length || M.push("~="), t.querySelectorAll(":checked").length || M.push(":checked"), t.querySelectorAll("a#" + j + "+*").length || M.push(".#.+[+~]")
                }), r(function(t) {
                    var e = O.createElement("input");
                    e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && M.push("name" + tt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), M.push(",.*:")
                })), (y.matchesSelector = dt.test(X = D.matches || D.webkitMatchesSelector || D.mozMatchesSelector || D.oMatchesSelector || D.msMatchesSelector)) && r(function(t) {
                    y.disconnectedMatch = X.call(t, "div"), X.call(t, "[s!='']:x"), N.push("!=", nt)
                }), M = M.length && new RegExp(M.join("|")), N = N.length && new RegExp(N.join("|")), e = dt.test(D.compareDocumentPosition), L = e || dt.test(D.contains) ? function(t, e) {
                    var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                    return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                } : function(t, e) {
                    if (e)
                        for (; e = e.parentNode;)
                            if (e === t) return !0;
                    return !1
                }, q = e ? function(t, e) {
                    if (t === e) return A = !0, 0;
                    var i = !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i || (1 & (i = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !y.sortDetached && e.compareDocumentPosition(t) === i ? t === O || t.ownerDocument === F && L(F, t) ? -1 : e === O || e.ownerDocument === F && L(F, e) ? 1 : C ? K(C, t) - K(C, e) : 0 : 4 & i ? -1 : 1)
                } : function(t, e) {
                    if (t === e) return A = !0, 0;
                    var i, n = 0,
                        r = t.parentNode,
                        s = e.parentNode,
                        a = [t],
                        l = [e];
                    if (!r || !s) return t === O ? -1 : e === O ? 1 : r ? -1 : s ? 1 : C ? K(C, t) - K(C, e) : 0;
                    if (r === s) return o(t, e);
                    for (i = t; i = i.parentNode;) a.unshift(i);
                    for (i = e; i = i.parentNode;) l.unshift(i);
                    for (; a[n] === l[n];) n++;
                    return n ? o(a[n], l[n]) : a[n] === F ? -1 : l[n] === F ? 1 : 0
                }, O) : O
            }, e.matches = function(t, i) {
                return e(t, null, null, i)
            }, e.matchesSelector = function(t, i) {
                if ((t.ownerDocument || t) !== O && E(t), i = i.replace(lt, "='$1']"), y.matchesSelector && R && !B[i + " "] && (!N || !N.test(i)) && (!M || !M.test(i))) try {
                    var n = X.call(t, i);
                    if (n || y.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                } catch (t) {}
                return e(i, O, null, [t]).length > 0
            }, e.contains = function(t, e) {
                return (t.ownerDocument || t) !== O && E(t), L(t, e)
            }, e.attr = function(t, e) {
                (t.ownerDocument || t) !== O && E(t);
                var i = x.attrHandle[e.toLowerCase()],
                    n = i && U.call(x.attrHandle, e.toLowerCase()) ? i(t, e, !R) : void 0;
                return void 0 !== n ? n : y.attributes || !R ? t.getAttribute(e) : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }, e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }, e.uniqueSort = function(t) {
                var e, i = [],
                    n = 0,
                    r = 0;
                if (A = !y.detectDuplicates, C = !y.sortStable && t.slice(0), t.sort(q), A) {
                    for (; e = t[r++];) e === t[r] && (n = i.push(r));
                    for (; n--;) t.splice(i[n], 1)
                }
                return C = null, t
            }, b = e.getText = function(t) {
                var e, i = "",
                    n = 0,
                    r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent) return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling) i += b(t)
                    } else if (3 === r || 4 === r) return t.nodeValue
                } else
                    for (; e = t[n++];) i += b(e);
                return i
            }, (x = e.selectors = {
                cacheLength: 50,
                createPseudo: n,
                match: ut,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(vt, yt), t[3] = (t[3] || t[4] || t[5] || "").replace(vt, yt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                    },
                    PSEUDO: function(t) {
                        var e, i = !t[6] && t[2];
                        return ut.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : i && ht.test(i) && (e = T(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && (t[0] = t[0].slice(0, e), t[2] = i.slice(0, e)), t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(vt, yt).toLowerCase();
                        return "*" === t ? function() {
                            return !0
                        } : function(t) {
                            return t.nodeName && t.nodeName.toLowerCase() === e
                        }
                    },
                    CLASS: function(t) {
                        var e = H[t + " "];
                        return e || (e = new RegExp("(^|" + tt + ")" + t + "(" + tt + "|$)")) && H(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, i, n) {
                        return function(r) {
                            var s = e.attr(r, t);
                            return null == s ? "!=" === i : !i || (s += "", "=" === i ? s === n : "!=" === i ? s !== n : "^=" === i ? n && 0 === s.indexOf(n) : "*=" === i ? n && s.indexOf(n) > -1 : "$=" === i ? n && s.slice(-n.length) === n : "~=" === i ? (" " + s.replace(rt, " ") + " ").indexOf(n) > -1 : "|=" === i && (s === n || s.slice(0, n.length + 1) === n + "-"))
                        }
                    },
                    CHILD: function(t, e, i, n, r) {
                        var s = "nth" !== t.slice(0, 3),
                            o = "last" !== t.slice(-4),
                            a = "of-type" === e;
                        return 1 === n && 0 === r ? function(t) {
                            return !!t.parentNode
                        } : function(e, i, l) {
                            var h, c, u, p, f, d, m = s !== o ? "nextSibling" : "previousSibling",
                                g = e.parentNode,
                                _ = a && e.nodeName.toLowerCase(),
                                v = !l && !a,
                                y = !1;
                            if (g) {
                                if (s) {
                                    for (; m;) {
                                        for (p = e; p = p[m];)
                                            if (a ? p.nodeName.toLowerCase() === _ : 1 === p.nodeType) return !1;
                                        d = m = "only" === t && !d && "nextSibling"
                                    }
                                    return !0
                                }
                                if (d = [o ? g.firstChild : g.lastChild], o && v) {
                                    for (y = (f = (h = (c = (u = (p = g)[j] || (p[j] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[t] || [])[0] === z && h[1]) && h[2], p = f && g.childNodes[f]; p = ++f && p && p[m] || (y = f = 0) || d.pop();)
                                        if (1 === p.nodeType && ++y && p === e) {
                                            c[t] = [z, f, y];
                                            break
                                        }
                                } else if (v && (p = e, u = p[j] || (p[j] = {}), c = u[p.uniqueID] || (u[p.uniqueID] = {}), h = c[t] || [], f = h[0] === z && h[1], y = f), !1 === y)
                                    for (;
                                        (p = ++f && p && p[m] || (y = f = 0) || d.pop()) && ((a ? p.nodeName.toLowerCase() !== _ : 1 !== p.nodeType) || !++y || (v && (u = p[j] || (p[j] = {}), c = u[p.uniqueID] || (u[p.uniqueID] = {}), c[t] = [z, y]), p !== e)););
                                return (y -= r) === n || y % n == 0 && y / n >= 0
                            }
                        }
                    },
                    PSEUDO: function(t, i) {
                        var r, s = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return s[j] ? s(i) : s.length > 1 ? (r = [t, t, "", i], x.setFilters.hasOwnProperty(t.toLowerCase()) ? n(function(t, e) {
                            for (var n, r = s(t, i), o = r.length; o--;) n = K(t, r[o]), t[n] = !(e[n] = r[o])
                        }) : function(t) {
                            return s(t, 0, r)
                        }) : s
                    }
                },
                pseudos: {
                    not: n(function(t) {
                        var e = [],
                            i = [],
                            r = S(t.replace(st, "$1"));
                        return r[j] ? n(function(t, e, i, n) {
                            for (var s, o = r(t, null, n, []), a = t.length; a--;)(s = o[a]) && (t[a] = !(e[a] = s))
                        }) : function(t, n, s) {
                            return e[0] = t, r(e, null, s, i), e[0] = null, !i.pop()
                        }
                    }),
                    has: n(function(t) {
                        return function(i) {
                            return e(t, i).length > 0
                        }
                    }),
                    contains: n(function(t) {
                        return t = t.replace(vt, yt),
                            function(e) {
                                return (e.textContent || e.innerText || b(e)).indexOf(t) > -1
                            }
                    }),
                    lang: n(function(t) {
                        return ct.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(vt, yt).toLowerCase(),
                            function(e) {
                                var i;
                                do {
                                    if (i = R ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var i = t.location && t.location.hash;
                        return i && i.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === D
                    },
                    focus: function(t) {
                        return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return !1 === t.disabled
                    },
                    disabled: function(t) {
                        return !0 === t.disabled
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !x.pseudos.empty(t)
                    },
                    header: function(t) {
                        return ft.test(t.nodeName)
                    },
                    input: function(t) {
                        return pt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: h(function() {
                        return [0]
                    }),
                    last: h(function(t, e) {
                        return [e - 1]
                    }),
                    eq: h(function(t, e, i) {
                        return [0 > i ? i + e : i]
                    }),
                    even: h(function(t, e) {
                        for (var i = 0; e > i; i += 2) t.push(i);
                        return t
                    }),
                    odd: h(function(t, e) {
                        for (var i = 1; e > i; i += 2) t.push(i);
                        return t
                    }),
                    lt: h(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                        return t
                    }),
                    gt: h(function(t, e, i) {
                        for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                        return t
                    })
                }
            }).pseudos.nth = x.pseudos.eq;
            for (v in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) x.pseudos[v] = a(v);
            for (v in {
                    submit: !0,
                    reset: !0
                }) x.pseudos[v] = l(v);
            return u.prototype = x.filters = x.pseudos, x.setFilters = new u, T = e.tokenize = function(t, i) {
                var n, r, s, o, a, l, h, c = I[t + " "];
                if (c) return i ? 0 : c.slice(0);
                for (a = t, l = [], h = x.preFilter; a;) {
                    n && !(r = ot.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(s = [])), n = !1, (r = at.exec(a)) && (n = r.shift(), s.push({
                        value: n,
                        type: r[0].replace(st, " ")
                    }), a = a.slice(n.length));
                    for (o in x.filter) !(r = ut[o].exec(a)) || h[o] && !(r = h[o](r)) || (n = r.shift(), s.push({
                        value: n,
                        type: o,
                        matches: r
                    }), a = a.slice(n.length));
                    if (!n) break
                }
                return i ? a.length : a ? e.error(t) : I(t, l).slice(0)
            }, S = e.compile = function(t, i) {
                var r, s = [],
                    o = [],
                    a = B[t + " "];
                if (!a) {
                    for (i || (i = T(t)), r = i.length; r--;)(a = _(i[r]))[j] ? s.push(a) : o.push(a);
                    (a = B(t, function(t, i) {
                        var r = i.length > 0,
                            s = t.length > 0,
                            o = function(n, o, a, l, h) {
                                var c, u, p, f = 0,
                                    d = "0",
                                    g = n && [],
                                    _ = [],
                                    v = k,
                                    y = n || s && x.find.TAG("*", h),
                                    b = z += null == v ? 1 : Math.random() || .1,
                                    w = y.length;
                                for (h && (k = o === O || o || h); d !== w && null != (c = y[d]); d++) {
                                    if (s && c) {
                                        for (u = 0, o || c.ownerDocument === O || (E(c), a = !R); p = t[u++];)
                                            if (p(c, o || O, a)) {
                                                l.push(c);
                                                break
                                            } h && (z = b)
                                    }
                                    r && ((c = !p && c) && f--, n && g.push(c))
                                }
                                if (f += d, r && d !== f) {
                                    for (u = 0; p = i[u++];) p(g, _, o, a);
                                    if (n) {
                                        if (f > 0)
                                            for (; d--;) g[d] || _[d] || (_[d] = V.call(l));
                                        _ = m(_)
                                    }
                                    Z.apply(l, _), h && !n && _.length > 0 && f + i.length > 1 && e.uniqueSort(l)
                                }
                                return h && (z = b, k = v), g
                            };
                        return r ? n(o) : o
                    }(o, s))).selector = t
                }
                return a
            }, P = e.select = function(t, e, i, n) {
                var r, s, o, a, l, h = "function" == typeof t && t,
                    u = !n && T(t = h.selector || t);
                if (i = i || [], 1 === u.length) {
                    if ((s = u[0] = u[0].slice(0)).length > 2 && "ID" === (o = s[0]).type && y.getById && 9 === e.nodeType && R && x.relative[s[1].type]) {
                        if (!(e = (x.find.ID(o.matches[0].replace(vt, yt), e) || [])[0])) return i;
                        h && (e = e.parentNode), t = t.slice(s.shift().value.length)
                    }
                    for (r = ut.needsContext.test(t) ? 0 : s.length; r-- && (o = s[r], !x.relative[a = o.type]);)
                        if ((l = x.find[a]) && (n = l(o.matches[0].replace(vt, yt), gt.test(s[0].type) && c(e.parentNode) || e))) {
                            if (s.splice(r, 1), !(t = n.length && p(s))) return Z.apply(i, n), i;
                            break
                        }
                }
                return (h || S(t, u))(n, e, !R, i, !e || gt.test(t) && c(e.parentNode) || e), i
            }, y.sortStable = j.split("").sort(q).join("") === j, y.detectDuplicates = !!A, E(), y.sortDetached = r(function(t) {
                return 1 & t.compareDocumentPosition(O.createElement("div"))
            }), r(function(t) {
                return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
            }) || s("type|href|height|width", function(t, e, i) {
                return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
            }), y.attributes && r(function(t) {
                return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
            }) || s("value", function(t, e, i) {
                return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
            }), r(function(t) {
                return null == t.getAttribute("disabled")
            }) || s(J, function(t, e, i) {
                var n;
                return i ? void 0 : !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null
            }), e
        }(t);
        J.find = rt, J.expr = rt.selectors, J.expr[":"] = J.expr.pseudos, J.uniqueSort = J.unique = rt.uniqueSort, J.text = rt.getText, J.isXMLDoc = rt.isXML, J.contains = rt.contains;
        var st = function(t, e, i) {
                for (var n = [], r = void 0 !== i;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (r && J(t).is(i)) break;
                        n.push(t)
                    } return n
            },
            ot = function(t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            },
            at = J.expr.match.needsContext,
            lt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            ht = /^.[^:#\[\.,]*$/;
        J.filter = function(t, e, i) {
            var n = e[0];
            return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? J.find.matchesSelector(n, t) ? [n] : [] : J.find.matches(t, J.grep(e, function(t) {
                return 1 === t.nodeType
            }))
        }, J.fn.extend({
            find: function(t) {
                var e, i = this.length,
                    n = [],
                    r = this;
                if ("string" != typeof t) return this.pushStack(J(t).filter(function() {
                    for (e = 0; i > e; e++)
                        if (J.contains(r[e], this)) return !0
                }));
                for (e = 0; i > e; e++) J.find(t, r[e], n);
                return n = this.pushStack(i > 1 ? J.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
            },
            filter: function(t) {
                return this.pushStack(n(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(n(this, t || [], !0))
            },
            is: function(t) {
                return !!n(this, "string" == typeof t && at.test(t) ? J(t) : t || [], !1).length
            }
        });
        var ct, ut = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        (J.fn.init = function(t, e, i) {
            var n, r;
            if (!t) return this;
            if (i = i || ct, "string" == typeof t) {
                if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : ut.exec(t)) || !n[1] && e) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof J ? e[0] : e, J.merge(this, J.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : q, !0)), lt.test(n[1]) && J.isPlainObject(e))
                        for (n in e) J.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return (r = q.getElementById(n[2])) && r.parentNode && (this.length = 1, this[0] = r), this.context = q, this.selector = t, this
            }
            return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : J.isFunction(t) ? void 0 !== i.ready ? i.ready(t) : t(J) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), J.makeArray(t, this))
        }).prototype = J.fn, ct = J(q);
        var pt = /^(?:parents|prev(?:Until|All))/,
            ft = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        J.fn.extend({
            has: function(t) {
                var e = J(t, this),
                    i = e.length;
                return this.filter(function() {
                    for (var t = 0; i > t; t++)
                        if (J.contains(this, e[t])) return !0
                })
            },
            closest: function(t, e) {
                for (var i, n = 0, r = this.length, s = [], o = at.test(t) || "string" != typeof t ? J(t, e || this.context) : 0; r > n; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (o ? o.index(i) > -1 : 1 === i.nodeType && J.find.matchesSelector(i, t))) {
                            s.push(i);
                            break
                        } return this.pushStack(s.length > 1 ? J.uniqueSort(s) : s)
            },
            index: function(t) {
                return t ? "string" == typeof t ? V.call(J(t), this[0]) : V.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(J.uniqueSort(J.merge(this.get(), J(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), J.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return st(t, "parentNode")
            },
            parentsUntil: function(t, e, i) {
                return st(t, "parentNode", i)
            },
            next: function(t) {
                return r(t, "nextSibling")
            },
            prev: function(t) {
                return r(t, "previousSibling")
            },
            nextAll: function(t) {
                return st(t, "nextSibling")
            },
            prevAll: function(t) {
                return st(t, "previousSibling")
            },
            nextUntil: function(t, e, i) {
                return st(t, "nextSibling", i)
            },
            prevUntil: function(t, e, i) {
                return st(t, "previousSibling", i)
            },
            siblings: function(t) {
                return ot((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return ot(t.firstChild)
            },
            contents: function(t) {
                return t.contentDocument || J.merge([], t.childNodes)
            }
        }, function(t, e) {
            J.fn[t] = function(i, n) {
                var r = J.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (r = J.filter(n, r)), this.length > 1 && (ft[t] || J.uniqueSort(r), pt.test(t) && r.reverse()), this.pushStack(r)
            }
        });
        var dt = /\S+/g;
        J.Callbacks = function(t) {
            t = "string" == typeof t ? function(t) {
                var e = {};
                return J.each(t.match(dt) || [], function(t, i) {
                    e[i] = !0
                }), e
            }(t) : J.extend({}, t);
            var e, i, n, r, s = [],
                o = [],
                a = -1,
                l = function() {
                    for (r = t.once, n = e = !0; o.length; a = -1)
                        for (i = o.shift(); ++a < s.length;) !1 === s[a].apply(i[0], i[1]) && t.stopOnFalse && (a = s.length, i = !1);
                    t.memory || (i = !1), e = !1, r && (s = i ? [] : "")
                },
                h = {
                    add: function() {
                        return s && (i && !e && (a = s.length - 1, o.push(i)), function e(i) {
                            J.each(i, function(i, n) {
                                J.isFunction(n) ? t.unique && h.has(n) || s.push(n) : n && n.length && "string" !== J.type(n) && e(n)
                            })
                        }(arguments), i && !e && l()), this
                    },
                    remove: function() {
                        return J.each(arguments, function(t, e) {
                            for (var i;
                                (i = J.inArray(e, s, i)) > -1;) s.splice(i, 1), a >= i && a--
                        }), this
                    },
                    has: function(t) {
                        return t ? J.inArray(t, s) > -1 : s.length > 0
                    },
                    empty: function() {
                        return s && (s = []), this
                    },
                    disable: function() {
                        return r = o = [], s = i = "", this
                    },
                    disabled: function() {
                        return !s
                    },
                    lock: function() {
                        return r = o = [], i || (s = i = ""), this
                    },
                    locked: function() {
                        return !!r
                    },
                    fireWith: function(t, i) {
                        return r || (i = i || [], i = [t, i.slice ? i.slice() : i], o.push(i), e || l()), this
                    },
                    fire: function() {
                        return h.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!n
                    }
                };
            return h
        }, J.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", J.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", J.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", J.Callbacks("memory")]
                    ],
                    i = "pending",
                    n = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return r.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return J.Deferred(function(i) {
                                J.each(e, function(e, s) {
                                    var o = J.isFunction(t[e]) && t[e];
                                    r[s[1]](function() {
                                        var t = o && o.apply(this, arguments);
                                        t && J.isFunction(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[s[0] + "With"](this === n ? i.promise() : this, o ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? J.extend(t, n) : n
                        }
                    },
                    r = {};
                return n.pipe = n.then, J.each(e, function(t, s) {
                    var o = s[2],
                        a = s[3];
                    n[s[1]] = o.add, a && o.add(function() {
                        i = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), r[s[0]] = function() {
                        return r[s[0] + "With"](this === r ? n : this, arguments), this
                    }, r[s[0] + "With"] = o.fireWith
                }), n.promise(r), t && t.call(r, r), r
            },
            when: function(t) {
                var e, i, n, r = 0,
                    s = W.call(arguments),
                    o = s.length,
                    a = 1 !== o || t && J.isFunction(t.promise) ? o : 0,
                    l = 1 === a ? t : J.Deferred(),
                    h = function(t, i, n) {
                        return function(r) {
                            i[t] = this, n[t] = arguments.length > 1 ? W.call(arguments) : r, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                        }
                    };
                if (o > 1)
                    for (e = new Array(o), i = new Array(o), n = new Array(o); o > r; r++) s[r] && J.isFunction(s[r].promise) ? s[r].promise().progress(h(r, i, e)).done(h(r, n, s)).fail(l.reject) : --a;
                return a || l.resolveWith(n, s), l.promise()
            }
        });
        var mt;
        J.fn.ready = function(t) {
            return J.ready.promise().done(t), this
        }, J.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? J.readyWait++ : J.ready(!0)
            },
            ready: function(t) {
                (!0 === t ? --J.readyWait : J.isReady) || (J.isReady = !0, !0 !== t && --J.readyWait > 0 || (mt.resolveWith(q, [J]), J.fn.triggerHandler && (J(q).triggerHandler("ready"), J(q).off("ready"))))
            }
        }), J.ready.promise = function(e) {
            return mt || (mt = J.Deferred(), "complete" === q.readyState || "loading" !== q.readyState && !q.documentElement.doScroll ? t.setTimeout(J.ready) : (q.addEventListener("DOMContentLoaded", s), t.addEventListener("load", s))), mt.promise(e)
        }, J.ready.promise();
        var gt = function(t, e, i, n, r, s, o) {
                var a = 0,
                    l = t.length,
                    h = null == i;
                if ("object" === J.type(i)) {
                    r = !0;
                    for (a in i) gt(t, e, a, i[a], !0, s, o)
                } else if (void 0 !== n && (r = !0, J.isFunction(n) || (o = !0), h && (o ? (e.call(t, n), e = null) : (h = e, e = function(t, e, i) {
                        return h.call(J(t), i)
                    })), e))
                    for (; l > a; a++) e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
                return r ? t : h ? e.call(t) : l ? e(t[0], i) : s
            },
            _t = function(t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
            };
        o.uid = 1, o.prototype = {
            register: function(t, e) {
                var i = e || {};
                return t.nodeType ? t[this.expando] = i : Object.defineProperty(t, this.expando, {
                    value: i,
                    writable: !0,
                    configurable: !0
                }), t[this.expando]
            },
            cache: function(t) {
                if (!_t(t)) return {};
                var e = t[this.expando];
                return e || (e = {}, _t(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            },
            set: function(t, e, i) {
                var n, r = this.cache(t);
                if ("string" == typeof e) r[e] = i;
                else
                    for (n in e) r[n] = e[n];
                return r
            },
            get: function(t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][e]
            },
            access: function(t, e, i) {
                var n;
                return void 0 === e || e && "string" == typeof e && void 0 === i ? void 0 !== (n = this.get(t, e)) ? n : this.get(t, J.camelCase(e)) : (this.set(t, e, i), void 0 !== i ? i : e)
            },
            remove: function(t, e) {
                var i, n, r, s = t[this.expando];
                if (void 0 !== s) {
                    if (void 0 === e) this.register(t);
                    else {
                        J.isArray(e) ? n = e.concat(e.map(J.camelCase)) : (r = J.camelCase(e), e in s ? n = [e, r] : (n = r, n = n in s ? [n] : n.match(dt) || [])), i = n.length;
                        for (; i--;) delete s[n[i]]
                    }(void 0 === e || J.isEmptyObject(s)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            },
            hasData: function(t) {
                var e = t[this.expando];
                return void 0 !== e && !J.isEmptyObject(e)
            }
        };
        var vt = new o,
            yt = new o,
            xt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            bt = /[A-Z]/g;
        J.extend({
            hasData: function(t) {
                return yt.hasData(t) || vt.hasData(t)
            },
            data: function(t, e, i) {
                return yt.access(t, e, i)
            },
            removeData: function(t, e) {
                yt.remove(t, e)
            },
            _data: function(t, e, i) {
                return vt.access(t, e, i)
            },
            _removeData: function(t, e) {
                vt.remove(t, e)
            }
        }), J.fn.extend({
            data: function(t, e) {
                var i, n, r, s = this[0],
                    o = s && s.attributes;
                if (void 0 === t) {
                    if (this.length && (r = yt.get(s), 1 === s.nodeType && !vt.get(s, "hasDataAttrs"))) {
                        for (i = o.length; i--;) o[i] && 0 === (n = o[i].name).indexOf("data-") && (n = J.camelCase(n.slice(5)), a(s, n, r[n]));
                        vt.set(s, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function() {
                    yt.set(this, t)
                }) : gt(this, function(e) {
                    var i, n;
                    if (s && void 0 === e) {
                        if (void 0 !== (i = yt.get(s, t) || yt.get(s, t.replace(bt, "-$&").toLowerCase()))) return i;
                        if (n = J.camelCase(t), void 0 !== (i = yt.get(s, n))) return i;
                        if (void 0 !== (i = a(s, n, void 0))) return i
                    } else n = J.camelCase(t), this.each(function() {
                        var i = yt.get(this, n);
                        yt.set(this, n, e), t.indexOf("-") > -1 && void 0 !== i && yt.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    yt.remove(this, t)
                })
            }
        }), J.extend({
            queue: function(t, e, i) {
                var n;
                return t ? (e = (e || "fx") + "queue", n = vt.get(t, e), i && (!n || J.isArray(i) ? n = vt.access(t, e, J.makeArray(i)) : n.push(i)), n || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = J.queue(t, e),
                    n = i.length,
                    r = i.shift(),
                    s = J._queueHooks(t, e);
                "inprogress" === r && (r = i.shift(), n--), r && ("fx" === e && i.unshift("inprogress"), delete s.stop, r.call(t, function() {
                    J.dequeue(t, e)
                }, s)), !n && s && s.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return vt.get(t, i) || vt.access(t, i, {
                    empty: J.Callbacks("once memory").add(function() {
                        vt.remove(t, [e + "queue", i])
                    })
                })
            }
        }), J.fn.extend({
            queue: function(t, e) {
                var i = 2;
                return "string" != typeof t && (e = t, t = "fx", i--), arguments.length < i ? J.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                    var i = J.queue(this, t, e);
                    J._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && J.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    J.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var i, n = 1,
                    r = J.Deferred(),
                    s = this,
                    o = this.length,
                    a = function() {
                        --n || r.resolveWith(s, [s])
                    };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;)(i = vt.get(s[o], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
                return a(), r.promise(e)
            }
        });
        var wt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Tt = new RegExp("^(?:([+-])=|)(" + wt + ")([a-z%]*)$", "i"),
            St = ["Top", "Right", "Bottom", "Left"],
            Pt = function(t, e) {
                return t = e || t, "none" === J.css(t, "display") || !J.contains(t.ownerDocument, t)
            },
            kt = /^(?:checkbox|radio)$/i,
            Ct = /<([\w:-]+)/,
            At = /^$|\/(?:java|ecma)script/i,
            Et = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Et.optgroup = Et.option, Et.tbody = Et.tfoot = Et.colgroup = Et.caption = Et.thead, Et.th = Et.td;
        var Ot = /<|&#?\w+;/;
        ! function() {
            var t = q.createDocumentFragment().appendChild(q.createElement("div")),
                e = q.createElement("input");
            e.setAttribute("type", "radio"), e.setAttribute("checked", "checked"), e.setAttribute("name", "t"), t.appendChild(e), K.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", K.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue
        }();
        var Dt = /^key/,
            Rt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            Mt = /^([^.]*)(?:\.(.+)|)/;
        J.event = {
            global: {},
            add: function(t, e, i, n, r) {
                var s, o, a, l, h, c, u, p, f, d, m, g = vt.get(t);
                if (g)
                    for (i.handler && (s = i, i = s.handler, r = s.selector), i.guid || (i.guid = J.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function(e) {
                            return void 0 !== J && J.event.triggered !== e.type ? J.event.dispatch.apply(t, arguments) : void 0
                        }), h = (e = (e || "").match(dt) || [""]).length; h--;) a = Mt.exec(e[h]) || [], f = m = a[1], d = (a[2] || "").split(".").sort(), f && (u = J.event.special[f] || {}, f = (r ? u.delegateType : u.bindType) || f, u = J.event.special[f] || {}, c = J.extend({
                        type: f,
                        origType: m,
                        data: n,
                        handler: i,
                        guid: i.guid,
                        selector: r,
                        needsContext: r && J.expr.match.needsContext.test(r),
                        namespace: d.join(".")
                    }, s), (p = l[f]) || (p = l[f] = [], p.delegateCount = 0, u.setup && !1 !== u.setup.call(t, n, d, o) || t.addEventListener && t.addEventListener(f, o)), u.add && (u.add.call(t, c), c.handler.guid || (c.handler.guid = i.guid)), r ? p.splice(p.delegateCount++, 0, c) : p.push(c), J.event.global[f] = !0)
            },
            remove: function(t, e, i, n, r) {
                var s, o, a, l, h, c, u, p, f, d, m, g = vt.hasData(t) && vt.get(t);
                if (g && (l = g.events)) {
                    for (h = (e = (e || "").match(dt) || [""]).length; h--;)
                        if (a = Mt.exec(e[h]) || [], f = m = a[1], d = (a[2] || "").split(".").sort(), f) {
                            for (u = J.event.special[f] || {}, p = l[f = (n ? u.delegateType : u.bindType) || f] || [], a = a[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = s = p.length; s--;) c = p[s], !r && m !== c.origType || i && i.guid !== c.guid || a && !a.test(c.namespace) || n && n !== c.selector && ("**" !== n || !c.selector) || (p.splice(s, 1), c.selector && p.delegateCount--, u.remove && u.remove.call(t, c));
                            o && !p.length && (u.teardown && !1 !== u.teardown.call(t, d, g.handle) || J.removeEvent(t, f, g.handle), delete l[f])
                        } else
                            for (f in l) J.event.remove(t, f + e[h], i, n, !0);
                    J.isEmptyObject(l) && vt.remove(t, "handle events")
                }
            },
            dispatch: function(t) {
                t = J.event.fix(t);
                var e, i, n, r, s, o = [],
                    a = W.call(arguments),
                    l = (vt.get(this, "events") || {})[t.type] || [],
                    h = J.event.special[t.type] || {};
                if (a[0] = t, t.delegateTarget = this, !h.preDispatch || !1 !== h.preDispatch.call(this, t)) {
                    for (o = J.event.handlers.call(this, t, l), e = 0;
                        (r = o[e++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = r.elem, i = 0;
                            (s = r.handlers[i++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(s.namespace) || (t.handleObj = s, t.data = s.data, void 0 !== (n = ((J.event.special[s.origType] || {}).handle || s.handler).apply(r.elem, a)) && !1 === (t.result = n) && (t.preventDefault(), t.stopPropagation()));
                    return h.postDispatch && h.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, e) {
                var i, n, r, s, o = [],
                    a = e.delegateCount,
                    l = t.target;
                if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                            for (n = [], i = 0; a > i; i++) s = e[i], r = s.selector + " ", void 0 === n[r] && (n[r] = s.needsContext ? J(r, this).index(l) > -1 : J.find(r, this, null, [l]).length), n[r] && n.push(s);
                            n.length && o.push({
                                elem: l,
                                handlers: n
                            })
                        } return a < e.length && o.push({
                    elem: this,
                    handlers: e.slice(a)
                }), o
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, e) {
                    var i, n, r, s = e.button;
                    return null == t.pageX && null != e.clientX && (i = t.target.ownerDocument || q, n = i.documentElement, r = i.body, t.pageX = e.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0), t.pageY = e.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0)), t.which || void 0 === s || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
                }
            },
            fix: function(t) {
                if (t[J.expando]) return t;
                var e, i, n, r = t.type,
                    s = t,
                    o = this.fixHooks[r];
                for (o || (this.fixHooks[r] = o = Rt.test(r) ? this.mouseHooks : Dt.test(r) ? this.keyHooks : {}), n = o.props ? this.props.concat(o.props) : this.props, t = new J.Event(s), e = n.length; e--;) i = n[e], t[i] = s[i];
                return t.target || (t.target = q), 3 === t.target.nodeType && (t.target = t.target.parentNode), o.filter ? o.filter(t, s) : t
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== d() && this.focus ? (this.focus(), !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === d() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && J.nodeName(this, "input") ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return J.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, J.removeEvent = function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i)
        }, J.Event = function(t, e) {
            return this instanceof J.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? p : f) : this.type = t, e && J.extend(this, e), this.timeStamp = t && t.timeStamp || J.now(), void(this[J.expando] = !0)) : new J.Event(t, e)
        }, J.Event.prototype = {
            constructor: J.Event,
            isDefaultPrevented: f,
            isPropagationStopped: f,
            isImmediatePropagationStopped: f,
            isSimulated: !1,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = p, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = p, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = p, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, J.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            J.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var i, n = t.relatedTarget,
                        r = t.handleObj;
                    return n && (n === this || J.contains(this, n)) || (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), J.fn.extend({
            on: function(t, e, i, n) {
                return m(this, t, e, i, n)
            },
            one: function(t, e, i, n) {
                return m(this, t, e, i, n, 1)
            },
            off: function(t, e, i) {
                var n, r;
                if (t && t.preventDefault && t.handleObj) return n = t.handleObj, J(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, e, t[r]);
                    return this
                }
                return !1 !== e && "function" != typeof e || (i = e, e = void 0), !1 === i && (i = f), this.each(function() {
                    J.event.remove(this, t, i, e)
                })
            }
        });
        var Nt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            Xt = /<script|<style|<link/i,
            Lt = /checked\s*(?:[^=]|=\s*.checked.)/i,
            jt = /^true\/(.*)/,
            Ft = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        J.extend({
            htmlPrefilter: function(t) {
                return t.replace(Nt, "<$1></$2>")
            },
            clone: function(t, e, i) {
                var n, r, s, o, a = t.cloneNode(!0),
                    l = J.contains(t.ownerDocument, t);
                if (!(K.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || J.isXMLDoc(t)))
                    for (o = h(a), s = h(t), n = 0, r = s.length; r > n; n++) x(s[n], o[n]);
                if (e)
                    if (i)
                        for (s = s || h(t), o = o || h(a), n = 0, r = s.length; r > n; n++) y(s[n], o[n]);
                    else y(t, a);
                return (o = h(a, "script")).length > 0 && c(o, !l && h(t, "script")), a
            },
            cleanData: function(t) {
                for (var e, i, n, r = J.event.special, s = 0; void 0 !== (i = t[s]); s++)
                    if (_t(i)) {
                        if (e = i[vt.expando]) {
                            if (e.events)
                                for (n in e.events) r[n] ? J.event.remove(i, n) : J.removeEvent(i, n, e.handle);
                            i[vt.expando] = void 0
                        }
                        i[yt.expando] && (i[yt.expando] = void 0)
                    }
            }
        }), J.fn.extend({
            domManip: b,
            detach: function(t) {
                return w(this, t, !0)
            },
            remove: function(t) {
                return w(this, t)
            },
            text: function(t) {
                return gt(this, function(t) {
                    return void 0 === t ? J.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return b(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        g(this, t).appendChild(t)
                    }
                })
            },
            prepend: function() {
                return b(this, arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = g(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return b(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return b(this, arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (J.cleanData(h(t, !1)), t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function() {
                    return J.clone(this, t, e)
                })
            },
            html: function(t) {
                return gt(this, function(t) {
                    var e = this[0] || {},
                        i = 0,
                        n = this.length;
                    if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                    if ("string" == typeof t && !Xt.test(t) && !Et[(Ct.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = J.htmlPrefilter(t);
                        try {
                            for (; n > i; i++) 1 === (e = this[i] || {}).nodeType && (J.cleanData(h(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = [];
                return b(this, arguments, function(e) {
                    var i = this.parentNode;
                    J.inArray(this, t) < 0 && (J.cleanData(h(this)), i && i.replaceChild(e, this))
                }, t)
            }
        }), J.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            J.fn[t] = function(t) {
                for (var i, n = [], r = J(t), s = r.length - 1, o = 0; s >= o; o++) i = o === s ? this : this.clone(!0), J(r[o])[e](i), $.apply(n, i.get());
                return this.pushStack(n)
            }
        });
        var zt, Yt = {
                HTML: "block",
                BODY: "block"
            },
            Ht = /^margin/,
            It = new RegExp("^(" + wt + ")(?!px)[a-z%]+$", "i"),
            Bt = function(e) {
                var i = e.ownerDocument.defaultView;
                return i && i.opener || (i = t), i.getComputedStyle(e)
            },
            qt = function(t, e, i, n) {
                var r, s, o = {};
                for (s in e) o[s] = t.style[s], t.style[s] = e[s];
                r = i.apply(t, n || []);
                for (s in e) t.style[s] = o[s];
                return r
            },
            Wt = q.documentElement;
        ! function() {
            function e() {
                a.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", a.innerHTML = "", Wt.appendChild(o);
                var e = t.getComputedStyle(a);
                i = "1%" !== e.top, s = "2px" === e.marginLeft, n = "4px" === e.width, a.style.marginRight = "50%", r = "4px" === e.marginRight, Wt.removeChild(o)
            }
            var i, n, r, s, o = q.createElement("div"),
                a = q.createElement("div");
            a.style && (a.style.backgroundClip = "content-box", a.cloneNode(!0).style.backgroundClip = "", K.clearCloneStyle = "content-box" === a.style.backgroundClip, o.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", o.appendChild(a), J.extend(K, {
                pixelPosition: function() {
                    return e(), i
                },
                boxSizingReliable: function() {
                    return null == n && e(), n
                },
                pixelMarginRight: function() {
                    return null == n && e(), r
                },
                reliableMarginLeft: function() {
                    return null == n && e(), s
                },
                reliableMarginRight: function() {
                    var e, i = a.appendChild(q.createElement("div"));
                    return i.style.cssText = a.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", a.style.width = "1px", Wt.appendChild(o), e = !parseFloat(t.getComputedStyle(i).marginRight), Wt.removeChild(o), a.removeChild(i), e
                }
            }))
        }();
        var Ut = /^(none|table(?!-c[ea]).+)/,
            $t = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            Vt = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            Gt = ["Webkit", "O", "Moz", "ms"],
            Zt = q.createElement("div").style;
        J.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = P(t, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                float: "cssFloat"
            },
            style: function(t, e, i, n) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, s, o, a = J.camelCase(e),
                        h = t.style;
                    return e = J.cssProps[a] || (J.cssProps[a] = C(a) || a), o = J.cssHooks[e] || J.cssHooks[a], void 0 === i ? o && "get" in o && void 0 !== (r = o.get(t, !1, n)) ? r : h[e] : ("string" === (s = typeof i) && (r = Tt.exec(i)) && r[1] && (i = l(t, e, r), s = "number"), void(null != i && i == i && ("number" === s && (i += r && r[3] || (J.cssNumber[a] ? "" : "px")), K.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (h[e] = "inherit"), o && "set" in o && void 0 === (i = o.set(t, i, n)) || (h[e] = i))))
                }
            },
            css: function(t, e, i, n) {
                var r, s, o, a = J.camelCase(e);
                return e = J.cssProps[a] || (J.cssProps[a] = C(a) || a), (o = J.cssHooks[e] || J.cssHooks[a]) && "get" in o && (r = o.get(t, !0, i)), void 0 === r && (r = P(t, e, n)), "normal" === r && e in Vt && (r = Vt[e]), "" === i || i ? (s = parseFloat(r), !0 === i || isFinite(s) ? s || 0 : r) : r
            }
        }), J.each(["height", "width"], function(t, e) {
            J.cssHooks[e] = {
                get: function(t, i, n) {
                    return i ? Ut.test(J.css(t, "display")) && 0 === t.offsetWidth ? qt(t, $t, function() {
                        return O(t, e, n)
                    }) : O(t, e, n) : void 0
                },
                set: function(t, i, n) {
                    var r, s = n && Bt(t),
                        o = n && E(t, e, n, "border-box" === J.css(t, "boxSizing", !1, s), s);
                    return o && (r = Tt.exec(i)) && "px" !== (r[3] || "px") && (t.style[e] = i, i = J.css(t, e)), A(0, i, o)
                }
            }
        }), J.cssHooks.marginLeft = k(K.reliableMarginLeft, function(t, e) {
            return e ? (parseFloat(P(t, "marginLeft")) || t.getBoundingClientRect().left - qt(t, {
                marginLeft: 0
            }, function() {
                return t.getBoundingClientRect().left
            })) + "px" : void 0
        }), J.cssHooks.marginRight = k(K.reliableMarginRight, function(t, e) {
            return e ? qt(t, {
                display: "inline-block"
            }, P, [t, "marginRight"]) : void 0
        }), J.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            J.cssHooks[t + e] = {
                expand: function(i) {
                    for (var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[t + St[n] + e] = s[n] || s[n - 2] || s[0];
                    return r
                }
            }, Ht.test(t) || (J.cssHooks[t + e].set = A)
        }), J.fn.extend({
            css: function(t, e) {
                return gt(this, function(t, e, i) {
                    var n, r, s = {},
                        o = 0;
                    if (J.isArray(e)) {
                        for (n = Bt(t), r = e.length; r > o; o++) s[e[o]] = J.css(t, e[o], !1, n);
                        return s
                    }
                    return void 0 !== i ? J.style(t, e, i) : J.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return D(this, !0)
            },
            hide: function() {
                return D(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Pt(this) ? J(this).show() : J(this).hide()
                })
            }
        }), J.Tween = R, (R.prototype = {
            constructor: R,
            init: function(t, e, i, n, r, s) {
                this.elem = t, this.prop = i, this.easing = r || J.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = s || (J.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var t = R.propHooks[this.prop];
                return t && t.get ? t.get(this) : R.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = R.propHooks[this.prop];
                return this.options.duration ? this.pos = e = J.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : R.propHooks._default.set(this), this
            }
        }).init.prototype = R.prototype, (R.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = J.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
                },
                set: function(t) {
                    J.fx.step[t.prop] ? J.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[J.cssProps[t.prop]] && !J.cssHooks[t.prop] ? t.elem[t.prop] = t.now : J.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }).scrollTop = R.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, J.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            },
            _default: "swing"
        }, J.fx = R.prototype.init, J.fx.step = {};
        var Qt, Kt, Jt = /^(?:toggle|show|hide)$/,
            te = /queueHooks$/;
        J.Animation = J.extend(L, {
                tweeners: {
                    "*": [function(t, e) {
                        var i = this.createTween(t, e);
                        return l(i.elem, t, Tt.exec(e), i), i
                    }]
                },
                tweener: function(t, e) {
                    J.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(dt);
                    for (var i, n = 0, r = t.length; r > n; n++) i = t[n], L.tweeners[i] = L.tweeners[i] || [], L.tweeners[i].unshift(e)
                },
                prefilters: [function(t, e, i) {
                    var n, r, s, o, a, l, h, c = this,
                        u = {},
                        p = t.style,
                        f = t.nodeType && Pt(t),
                        d = vt.get(t, "fxshow");
                    i.queue || (null == (a = J._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                        a.unqueued || l()
                    }), a.unqueued++, c.always(function() {
                        c.always(function() {
                            a.unqueued--, J.queue(t, "fx").length || a.empty.fire()
                        })
                    })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ("none" === (h = J.css(t, "display")) ? vt.get(t, "olddisplay") || S(t.nodeName) : h) && "none" === J.css(t, "float") && (p.display = "inline-block")), i.overflow && (p.overflow = "hidden", c.always(function() {
                        p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
                    }));
                    for (n in e)
                        if (r = e[n], Jt.exec(r)) {
                            if (delete e[n], s = s || "toggle" === r, r === (f ? "hide" : "show")) {
                                if ("show" !== r || !d || void 0 === d[n]) continue;
                                f = !0
                            }
                            u[n] = d && d[n] || J.style(t, n)
                        } else h = void 0;
                    if (J.isEmptyObject(u)) "inline" === ("none" === h ? S(t.nodeName) : h) && (p.display = h);
                    else {
                        d ? "hidden" in d && (f = d.hidden) : d = vt.access(t, "fxshow", {}), s && (d.hidden = !f), f ? J(t).show() : c.done(function() {
                            J(t).hide()
                        }), c.done(function() {
                            var e;
                            vt.remove(t, "fxshow");
                            for (e in u) J.style(t, e, u[e])
                        });
                        for (n in u) o = X(f ? d[n] : 0, n, c), n in d || (d[n] = o.start, f && (o.end = o.start, o.start = "width" === n || "height" === n ? 1 : 0))
                    }
                }],
                prefilter: function(t, e) {
                    e ? L.prefilters.unshift(t) : L.prefilters.push(t)
                }
            }), J.speed = function(t, e, i) {
                var n = t && "object" == typeof t ? J.extend({}, t) : {
                    complete: i || !i && e || J.isFunction(t) && t,
                    duration: t,
                    easing: i && e || e && !J.isFunction(e) && e
                };
                return n.duration = J.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in J.fx.speeds ? J.fx.speeds[n.duration] : J.fx.speeds._default, null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                    J.isFunction(n.old) && n.old.call(this), n.queue && J.dequeue(this, n.queue)
                }, n
            }, J.fn.extend({
                fadeTo: function(t, e, i, n) {
                    return this.filter(Pt).css("opacity", 0).show().end().animate({
                        opacity: e
                    }, t, i, n)
                },
                animate: function(t, e, i, n) {
                    var r = J.isEmptyObject(t),
                        s = J.speed(e, i, n),
                        o = function() {
                            var e = L(this, J.extend({}, t), s);
                            (r || vt.get(this, "finish")) && e.stop(!0)
                        };
                    return o.finish = o, r || !1 === s.queue ? this.each(o) : this.queue(s.queue, o)
                },
                stop: function(t, e, i) {
                    var n = function(t) {
                        var e = t.stop;
                        delete t.stop, e(i)
                    };
                    return "string" != typeof t && (i = e, e = t, t = void 0), e && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                        var e = !0,
                            r = null != t && t + "queueHooks",
                            s = J.timers,
                            o = vt.get(this);
                        if (r) o[r] && o[r].stop && n(o[r]);
                        else
                            for (r in o) o[r] && o[r].stop && te.test(r) && n(o[r]);
                        for (r = s.length; r--;) s[r].elem !== this || null != t && s[r].queue !== t || (s[r].anim.stop(i), e = !1, s.splice(r, 1));
                        !e && i || J.dequeue(this, t)
                    })
                },
                finish: function(t) {
                    return !1 !== t && (t = t || "fx"), this.each(function() {
                        var e, i = vt.get(this),
                            n = i[t + "queue"],
                            r = i[t + "queueHooks"],
                            s = J.timers,
                            o = n ? n.length : 0;
                        for (i.finish = !0, J.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                        for (e = 0; o > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                        delete i.finish
                    })
                }
            }), J.each(["toggle", "show", "hide"], function(t, e) {
                var i = J.fn[e];
                J.fn[e] = function(t, n, r) {
                    return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(N(e, !0), t, n, r)
                }
            }), J.each({
                slideDown: N("show"),
                slideUp: N("hide"),
                slideToggle: N("toggle"),
                fadeIn: {
                    opacity: "show"
                },
                fadeOut: {
                    opacity: "hide"
                },
                fadeToggle: {
                    opacity: "toggle"
                }
            }, function(t, e) {
                J.fn[t] = function(t, i, n) {
                    return this.animate(e, t, i, n)
                }
            }), J.timers = [], J.fx.tick = function() {
                var t, e = 0,
                    i = J.timers;
                for (Qt = J.now(); e < i.length; e++)(t = i[e])() || i[e] !== t || i.splice(e--, 1);
                i.length || J.fx.stop(), Qt = void 0
            }, J.fx.timer = function(t) {
                J.timers.push(t), t() ? J.fx.start() : J.timers.pop()
            }, J.fx.interval = 13, J.fx.start = function() {
                Kt || (Kt = t.setInterval(J.fx.tick, J.fx.interval))
            }, J.fx.stop = function() {
                t.clearInterval(Kt), Kt = null
            }, J.fx.speeds = {
                slow: 600,
                fast: 200,
                _default: 400
            }, J.fn.delay = function(e, i) {
                return e = J.fx ? J.fx.speeds[e] || e : e, i = i || "fx", this.queue(i, function(i, n) {
                    var r = t.setTimeout(i, e);
                    n.stop = function() {
                        t.clearTimeout(r)
                    }
                })
            },
            function() {
                var t = q.createElement("input"),
                    e = q.createElement("select"),
                    i = e.appendChild(q.createElement("option"));
                t.type = "checkbox", K.checkOn = "" !== t.value, K.optSelected = i.selected, e.disabled = !0, K.optDisabled = !i.disabled, (t = q.createElement("input")).value = "t", t.type = "radio", K.radioValue = "t" === t.value
            }();
        var ee, ie = J.expr.attrHandle;
        J.fn.extend({
            attr: function(t, e) {
                return gt(this, J.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    J.removeAttr(this, t)
                })
            }
        }), J.extend({
            attr: function(t, e, i) {
                var n, r, s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) return void 0 === t.getAttribute ? J.prop(t, e, i) : (1 === s && J.isXMLDoc(t) || (e = e.toLowerCase(), r = J.attrHooks[e] || (J.expr.match.bool.test(e) ? ee : void 0)), void 0 !== i ? null === i ? void J.removeAttr(t, e) : r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : (t.setAttribute(e, i + ""), i) : r && "get" in r && null !== (n = r.get(t, e)) ? n : null == (n = J.find.attr(t, e)) ? void 0 : n)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!K.radioValue && "radio" === e && J.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            },
            removeAttr: function(t, e) {
                var i, n, r = 0,
                    s = e && e.match(dt);
                if (s && 1 === t.nodeType)
                    for (; i = s[r++];) n = J.propFix[i] || i, J.expr.match.bool.test(i) && (t[n] = !1), t.removeAttribute(i)
            }
        }), ee = {
            set: function(t, e, i) {
                return !1 === e ? J.removeAttr(t, i) : t.setAttribute(i, i), i
            }
        }, J.each(J.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var i = ie[e] || J.find.attr;
            ie[e] = function(t, e, n) {
                var r, s;
                return n || (s = ie[e], ie[e] = r, r = null != i(t, e, n) ? e.toLowerCase() : null, ie[e] = s), r
            }
        });
        var ne = /^(?:input|select|textarea|button)$/i,
            re = /^(?:a|area)$/i;
        J.fn.extend({
            prop: function(t, e) {
                return gt(this, J.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return this.each(function() {
                    delete this[J.propFix[t] || t]
                })
            }
        }), J.extend({
            prop: function(t, e, i) {
                var n, r, s = t.nodeType;
                if (3 !== s && 8 !== s && 2 !== s) return 1 === s && J.isXMLDoc(t) || (e = J.propFix[e] || e, r = J.propHooks[e]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(t, i, e)) ? n : t[e] = i : r && "get" in r && null !== (n = r.get(t, e)) ? n : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = J.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : ne.test(t.nodeName) || re.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }), K.optSelected || (J.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            },
            set: function(t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), J.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            J.propFix[this.toLowerCase()] = this
        });
        var se = /[\t\r\n\f]/g;
        J.fn.extend({
            addClass: function(t) {
                var e, i, n, r, s, o, a, l = 0;
                if (J.isFunction(t)) return this.each(function(e) {
                    J(this).addClass(t.call(this, e, j(this)))
                });
                if ("string" == typeof t && t)
                    for (e = t.match(dt) || []; i = this[l++];)
                        if (r = j(i), n = 1 === i.nodeType && (" " + r + " ").replace(se, " ")) {
                            for (o = 0; s = e[o++];) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                            r !== (a = J.trim(n)) && i.setAttribute("class", a)
                        } return this
            },
            removeClass: function(t) {
                var e, i, n, r, s, o, a, l = 0;
                if (J.isFunction(t)) return this.each(function(e) {
                    J(this).removeClass(t.call(this, e, j(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if ("string" == typeof t && t)
                    for (e = t.match(dt) || []; i = this[l++];)
                        if (r = j(i), n = 1 === i.nodeType && (" " + r + " ").replace(se, " ")) {
                            for (o = 0; s = e[o++];)
                                for (; n.indexOf(" " + s + " ") > -1;) n = n.replace(" " + s + " ", " ");
                            r !== (a = J.trim(n)) && i.setAttribute("class", a)
                        } return this
            },
            toggleClass: function(t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : J.isFunction(t) ? this.each(function(i) {
                    J(this).toggleClass(t.call(this, i, j(this), e), e)
                }) : this.each(function() {
                    var e, n, r, s;
                    if ("string" === i)
                        for (n = 0, r = J(this), s = t.match(dt) || []; e = s[n++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                    else void 0 !== t && "boolean" !== i || ((e = j(this)) && vt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : vt.get(this, "__className__") || ""))
                })
            },
            hasClass: function(t) {
                var e, i, n = 0;
                for (e = " " + t + " "; i = this[n++];)
                    if (1 === i.nodeType && (" " + j(i) + " ").replace(se, " ").indexOf(e) > -1) return !0;
                return !1
            }
        });
        var oe = /\r/g,
            ae = /[\x20\t\r\n\f]+/g;
        J.fn.extend({
            val: function(t) {
                var e, i, n, r = this[0];
                return arguments.length ? (n = J.isFunction(t), this.each(function(i) {
                    var r;
                    1 === this.nodeType && (null == (r = n ? t.call(this, i, J(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : J.isArray(r) && (r = J.map(r, function(t) {
                        return null == t ? "" : t + ""
                    })), (e = J.valHooks[this.type] || J.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                })) : r ? (e = J.valHooks[r.type] || J.valHooks[r.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(r, "value")) ? i : "string" == typeof(i = r.value) ? i.replace(oe, "") : null == i ? "" : i : void 0
            }
        }), J.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = J.find.attr(t, "value");
                        return null != e ? e : J.trim(J.text(t)).replace(ae, " ")
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, i, n = t.options, r = t.selectedIndex, s = "select-one" === t.type || 0 > r, o = s ? null : [], a = s ? r + 1 : n.length, l = 0 > r ? a : s ? r : 0; a > l; l++)
                            if (((i = n[l]).selected || l === r) && (K.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !J.nodeName(i.parentNode, "optgroup"))) {
                                if (e = J(i).val(), s) return e;
                                o.push(e)
                            } return o
                    },
                    set: function(t, e) {
                        for (var i, n, r = t.options, s = J.makeArray(e), o = r.length; o--;) n = r[o], (n.selected = J.inArray(J.valHooks.option.get(n), s) > -1) && (i = !0);
                        return i || (t.selectedIndex = -1), s
                    }
                }
            }
        }), J.each(["radio", "checkbox"], function() {
            J.valHooks[this] = {
                set: function(t, e) {
                    return J.isArray(e) ? t.checked = J.inArray(J(t).val(), e) > -1 : void 0
                }
            }, K.checkOn || (J.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var le = /^(?:focusinfocus|focusoutblur)$/;
        J.extend(J.event, {
            trigger: function(e, i, n, r) {
                var s, o, a, l, h, c, u, p = [n || q],
                    f = Q.call(e, "type") ? e.type : e,
                    d = Q.call(e, "namespace") ? e.namespace.split(".") : [];
                if (o = a = n = n || q, 3 !== n.nodeType && 8 !== n.nodeType && !le.test(f + J.event.triggered) && (f.indexOf(".") > -1 && (d = f.split("."), f = d.shift(), d.sort()), h = f.indexOf(":") < 0 && "on" + f, e = e[J.expando] ? e : new J.Event(f, "object" == typeof e && e), e.isTrigger = r ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), i = null == i ? [e] : J.makeArray(i, [e]), u = J.event.special[f] || {}, r || !u.trigger || !1 !== u.trigger.apply(n, i))) {
                    if (!r && !u.noBubble && !J.isWindow(n)) {
                        for (l = u.delegateType || f, le.test(l + f) || (o = o.parentNode); o; o = o.parentNode) p.push(o), a = o;
                        a === (n.ownerDocument || q) && p.push(a.defaultView || a.parentWindow || t)
                    }
                    for (s = 0;
                        (o = p[s++]) && !e.isPropagationStopped();) e.type = s > 1 ? l : u.bindType || f, (c = (vt.get(o, "events") || {})[e.type] && vt.get(o, "handle")) && c.apply(o, i), (c = h && o[h]) && c.apply && _t(o) && (e.result = c.apply(o, i), !1 === e.result && e.preventDefault());
                    return e.type = f, r || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(p.pop(), i) || !_t(n) || h && J.isFunction(n[f]) && !J.isWindow(n) && ((a = n[h]) && (n[h] = null), J.event.triggered = f, n[f](), J.event.triggered = void 0, a && (n[h] = a)), e.result
                }
            },
            simulate: function(t, e, i) {
                var n = J.extend(new J.Event, i, {
                    type: t,
                    isSimulated: !0
                });
                J.event.trigger(n, null, e)
            }
        }), J.fn.extend({
            trigger: function(t, e) {
                return this.each(function() {
                    J.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var i = this[0];
                return i ? J.event.trigger(t, e, i, !0) : void 0
            }
        }), J.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            J.fn[e] = function(t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }), J.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), K.focusin = "onfocusin" in t, K.focusin || J.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var i = function(t) {
                J.event.simulate(e, t.target, J.event.fix(t))
            };
            J.event.special[e] = {
                setup: function() {
                    var n = this.ownerDocument || this,
                        r = vt.access(n, e);
                    r || n.addEventListener(t, i, !0), vt.access(n, e, (r || 0) + 1)
                },
                teardown: function() {
                    var n = this.ownerDocument || this,
                        r = vt.access(n, e) - 1;
                    r ? vt.access(n, e, r) : (n.removeEventListener(t, i, !0), vt.remove(n, e))
                }
            }
        });
        var he = t.location,
            ce = J.now(),
            ue = /\?/;
        J.parseJSON = function(t) {
            return JSON.parse(t + "")
        }, J.parseXML = function(e) {
            var i;
            if (!e || "string" != typeof e) return null;
            try {
                i = (new t.DOMParser).parseFromString(e, "text/xml")
            } catch (t) {
                i = void 0
            }
            return i && !i.getElementsByTagName("parsererror").length || J.error("Invalid XML: " + e), i
        };
        var pe = /#.*$/,
            fe = /([?&])_=[^&]*/,
            de = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            me = /^(?:GET|HEAD)$/,
            ge = /^\/\//,
            _e = {},
            ve = {},
            ye = "*/".concat("*"),
            xe = q.createElement("a");
        xe.href = he.href, J.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: he.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(he.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": ye,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": J.parseJSON,
                    "text xml": J.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? Y(Y(t, J.ajaxSettings), e) : Y(J.ajaxSettings, t)
            },
            ajaxPrefilter: F(_e),
            ajaxTransport: F(ve),
            ajax: function(e, i) {
                function n(e, i, n, a) {
                    var h, u, v, y, b, T = i;
                    2 !== x && (x = 2, l && t.clearTimeout(l), r = void 0, o = a || "", w.readyState = e > 0 ? 4 : 0, h = e >= 200 && 300 > e || 304 === e, n && (y = function(t, e, i) {
                        for (var n, r, s, o, a = t.contents, l = t.dataTypes;
                            "*" === l[0];) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                        if (n)
                            for (r in a)
                                if (a[r] && a[r].test(n)) {
                                    l.unshift(r);
                                    break
                                } if (l[0] in i) s = l[0];
                        else {
                            for (r in i) {
                                if (!l[0] || t.converters[r + " " + l[0]]) {
                                    s = r;
                                    break
                                }
                                o || (o = r)
                            }
                            s = s || o
                        }
                        return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
                    }(p, w, n)), y = function(t, e, i, n) {
                        var r, s, o, a, l, h = {},
                            c = t.dataTypes.slice();
                        if (c[1])
                            for (o in t.converters) h[o.toLowerCase()] = t.converters[o];
                        for (s = c.shift(); s;)
                            if (t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = s, s = c.shift())
                                if ("*" === s) s = l;
                                else if ("*" !== l && l !== s) {
                            if (!(o = h[l + " " + s] || h["* " + s]))
                                for (r in h)
                                    if ((a = r.split(" "))[1] === s && (o = h[l + " " + a[0]] || h["* " + a[0]])) {
                                        !0 === o ? o = h[r] : !0 !== h[r] && (s = a[0], c.unshift(a[1]));
                                        break
                                    } if (!0 !== o)
                                if (o && t.throws) e = o(e);
                                else try {
                                    e = o(e)
                                } catch (t) {
                                    return {
                                        state: "parsererror",
                                        error: o ? t : "No conversion from " + l + " to " + s
                                    }
                                }
                        }
                        return {
                            state: "success",
                            data: e
                        }
                    }(p, y, w, h), h ? (p.ifModified && ((b = w.getResponseHeader("Last-Modified")) && (J.lastModified[s] = b), (b = w.getResponseHeader("etag")) && (J.etag[s] = b)), 204 === e || "HEAD" === p.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = y.state, u = y.data, v = y.error, h = !v)) : (v = T, !e && T || (T = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (i || T) + "", h ? m.resolveWith(f, [u, T, w]) : m.rejectWith(f, [w, T, v]), w.statusCode(_), _ = void 0, c && d.trigger(h ? "ajaxSuccess" : "ajaxError", [w, p, h ? u : v]), g.fireWith(f, [w, T]), c && (d.trigger("ajaxComplete", [w, p]), --J.active || J.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (i = e, e = void 0), i = i || {};
                var r, s, o, a, l, h, c, u, p = J.ajaxSetup({}, i),
                    f = p.context || p,
                    d = p.context && (f.nodeType || f.jquery) ? J(f) : J.event,
                    m = J.Deferred(),
                    g = J.Callbacks("once memory"),
                    _ = p.statusCode || {},
                    v = {},
                    y = {},
                    x = 0,
                    b = "canceled",
                    w = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === x) {
                                if (!a)
                                    for (a = {}; e = de.exec(o);) a[e[1].toLowerCase()] = e[2];
                                e = a[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === x ? o : null
                        },
                        setRequestHeader: function(t, e) {
                            var i = t.toLowerCase();
                            return x || (t = y[i] = y[i] || t, v[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return x || (p.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > x)
                                    for (e in t) _[e] = [_[e], t[e]];
                                else w.always(t[w.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || b;
                            return r && r.abort(e), n(0, e), this
                        }
                    };
                if (m.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, p.url = ((e || p.url || he.href) + "").replace(pe, "").replace(ge, he.protocol + "//"), p.type = i.method || i.type || p.method || p.type, p.dataTypes = J.trim(p.dataType || "*").toLowerCase().match(dt) || [""], null == p.crossDomain) {
                    h = q.createElement("a");
                    try {
                        h.href = p.url, h.href = h.href, p.crossDomain = xe.protocol + "//" + xe.host != h.protocol + "//" + h.host
                    } catch (t) {
                        p.crossDomain = !0
                    }
                }
                if (p.data && p.processData && "string" != typeof p.data && (p.data = J.param(p.data, p.traditional)), z(_e, p, i, w), 2 === x) return w;
                (c = J.event && p.global) && 0 == J.active++ && J.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !me.test(p.type), s = p.url, p.hasContent || (p.data && (s = p.url += (ue.test(s) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = fe.test(s) ? s.replace(fe, "$1_=" + ce++) : s + (ue.test(s) ? "&" : "?") + "_=" + ce++)), p.ifModified && (J.lastModified[s] && w.setRequestHeader("If-Modified-Since", J.lastModified[s]), J.etag[s] && w.setRequestHeader("If-None-Match", J.etag[s])), (p.data && p.hasContent && !1 !== p.contentType || i.contentType) && w.setRequestHeader("Content-Type", p.contentType), w.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + ye + "; q=0.01" : "") : p.accepts["*"]);
                for (u in p.headers) w.setRequestHeader(u, p.headers[u]);
                if (p.beforeSend && (!1 === p.beforeSend.call(f, w, p) || 2 === x)) return w.abort();
                b = "abort";
                for (u in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) w[u](p[u]);
                if (r = z(ve, p, i, w)) {
                    if (w.readyState = 1, c && d.trigger("ajaxSend", [w, p]), 2 === x) return w;
                    p.async && p.timeout > 0 && (l = t.setTimeout(function() {
                        w.abort("timeout")
                    }, p.timeout));
                    try {
                        x = 1, r.send(v, n)
                    } catch (t) {
                        if (!(2 > x)) throw t;
                        n(-1, t)
                    }
                } else n(-1, "No Transport");
                return w
            },
            getJSON: function(t, e, i) {
                return J.get(t, e, i, "json")
            },
            getScript: function(t, e) {
                return J.get(t, void 0, e, "script")
            }
        }), J.each(["get", "post"], function(t, e) {
            J[e] = function(t, i, n, r) {
                return J.isFunction(i) && (r = r || n, n = i, i = void 0), J.ajax(J.extend({
                    url: t,
                    type: e,
                    dataType: r,
                    data: i,
                    success: n
                }, J.isPlainObject(t) && t))
            }
        }), J._evalUrl = function(t) {
            return J.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        }, J.fn.extend({
            wrapAll: function(t) {
                var e;
                return J.isFunction(t) ? this.each(function(e) {
                    J(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = J(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                    for (var t = this; t.firstElementChild;) t = t.firstElementChild;
                    return t
                }).append(this)), this)
            },
            wrapInner: function(t) {
                return J.isFunction(t) ? this.each(function(e) {
                    J(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = J(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = J.isFunction(t);
                return this.each(function(i) {
                    J(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    J.nodeName(this, "body") || J(this).replaceWith(this.childNodes)
                }).end()
            }
        }), J.expr.filters.hidden = function(t) {
            return !J.expr.filters.visible(t)
        }, J.expr.filters.visible = function(t) {
            return t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
        };
        var be = /%20/g,
            we = /\[\]$/,
            Te = /\r?\n/g,
            Se = /^(?:submit|button|image|reset|file)$/i,
            Pe = /^(?:input|select|textarea|keygen)/i;
        J.param = function(t, e) {
            var i, n = [],
                r = function(t, e) {
                    e = J.isFunction(e) ? e() : null == e ? "" : e, n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (void 0 === e && (e = J.ajaxSettings && J.ajaxSettings.traditional), J.isArray(t) || t.jquery && !J.isPlainObject(t)) J.each(t, function() {
                r(this.name, this.value)
            });
            else
                for (i in t) H(i, t[i], e, r);
            return n.join("&").replace(be, "+")
        }, J.fn.extend({
            serialize: function() {
                return J.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = J.prop(this, "elements");
                    return t ? J.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !J(this).is(":disabled") && Pe.test(this.nodeName) && !Se.test(t) && (this.checked || !kt.test(t))
                }).map(function(t, e) {
                    var i = J(this).val();
                    return null == i ? null : J.isArray(i) ? J.map(i, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Te, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(Te, "\r\n")
                    }
                }).get()
            }
        }), J.ajaxSettings.xhr = function() {
            try {
                return new t.XMLHttpRequest
            } catch (t) {}
        };
        var ke = {
                0: 200,
                1223: 204
            },
            Ce = J.ajaxSettings.xhr();
        K.cors = !!Ce && "withCredentials" in Ce, K.ajax = Ce = !!Ce, J.ajaxTransport(function(e) {
            var i, n;
            return K.cors || Ce && !e.crossDomain ? {
                send: function(r, s) {
                    var o, a = e.xhr();
                    if (a.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                        for (o in e.xhrFields) a[o] = e.xhrFields[o];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType), e.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (o in r) a.setRequestHeader(o, r[o]);
                    i = function(t) {
                        return function() {
                            i && (i = n = a.onload = a.onerror = a.onabort = a.onreadystatechange = null, "abort" === t ? a.abort() : "error" === t ? "number" != typeof a.status ? s(0, "error") : s(a.status, a.statusText) : s(ke[a.status] || a.status, a.statusText, "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? {
                                binary: a.response
                            } : {
                                text: a.responseText
                            }, a.getAllResponseHeaders()))
                        }
                    }, a.onload = i(), n = a.onerror = i("error"), void 0 !== a.onabort ? a.onabort = n : a.onreadystatechange = function() {
                        4 === a.readyState && t.setTimeout(function() {
                            i && n()
                        })
                    }, i = i("abort");
                    try {
                        a.send(e.hasContent && e.data || null)
                    } catch (t) {
                        if (i) throw t
                    }
                },
                abort: function() {
                    i && i()
                }
            } : void 0
        }), J.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(t) {
                    return J.globalEval(t), t
                }
            }
        }), J.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), J.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, i;
                return {
                    send: function(n, r) {
                        e = J("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", i = function(t) {
                            e.remove(), i = null, t && r("error" === t.type ? 404 : 200, t.type)
                        }), q.head.appendChild(e[0])
                    },
                    abort: function() {
                        i && i()
                    }
                }
            }
        });
        var Ae = [],
            Ee = /(=)\?(?=&|$)|\?\?/;
        J.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Ae.pop() || J.expando + "_" + ce++;
                return this[t] = !0, t
            }
        }), J.ajaxPrefilter("json jsonp", function(e, i, n) {
            var r, s, o, a = !1 !== e.jsonp && (Ee.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ee.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = J.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(Ee, "$1" + r) : !1 !== e.jsonp && (e.url += (ue.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function() {
                return o || J.error(r + " was not called"), o[0]
            }, e.dataTypes[0] = "json", s = t[r], t[r] = function() {
                o = arguments
            }, n.always(function() {
                void 0 === s ? J(t).removeProp(r) : t[r] = s, e[r] && (e.jsonpCallback = i.jsonpCallback, Ae.push(r)), o && J.isFunction(s) && s(o[0]), o = s = void 0
            }), "script") : void 0
        }), J.parseHTML = function(t, e, i) {
            if (!t || "string" != typeof t) return null;
            "boolean" == typeof e && (i = e, e = !1), e = e || q;
            var n = lt.exec(t),
                r = !i && [];
            return n ? [e.createElement(n[1])] : (n = u([t], e, r), r && r.length && J(r).remove(), J.merge([], n.childNodes))
        };
        var Oe = J.fn.load;
        J.fn.load = function(t, e, i) {
            if ("string" != typeof t && Oe) return Oe.apply(this, arguments);
            var n, r, s, o = this,
                a = t.indexOf(" ");
            return a > -1 && (n = J.trim(t.slice(a)), t = t.slice(0, a)), J.isFunction(e) ? (i = e, e = void 0) : e && "object" == typeof e && (r = "POST"), o.length > 0 && J.ajax({
                url: t,
                type: r || "GET",
                dataType: "html",
                data: e
            }).done(function(t) {
                s = arguments, o.html(n ? J("<div>").append(J.parseHTML(t)).find(n) : t)
            }).always(i && function(t, e) {
                o.each(function() {
                    i.apply(this, s || [t.responseText, e, t])
                })
            }), this
        }, J.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            J.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), J.expr.filters.animated = function(t) {
            return J.grep(J.timers, function(e) {
                return t === e.elem
            }).length
        }, J.offset = {
            setOffset: function(t, e, i) {
                var n, r, s, o, a, l, h = J.css(t, "position"),
                    c = J(t),
                    u = {};
                "static" === h && (t.style.position = "relative"), a = c.offset(), s = J.css(t, "top"), l = J.css(t, "left"), ("absolute" === h || "fixed" === h) && (s + l).indexOf("auto") > -1 ? (n = c.position(), o = n.top, r = n.left) : (o = parseFloat(s) || 0, r = parseFloat(l) || 0), J.isFunction(e) && (e = e.call(t, i, J.extend({}, a))), null != e.top && (u.top = e.top - a.top + o), null != e.left && (u.left = e.left - a.left + r), "using" in e ? e.using.call(t, u) : c.css(u)
            }
        }, J.fn.extend({
            offset: function(t) {
                if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                    J.offset.setOffset(this, t, e)
                });
                var e, i, n = this[0],
                    r = {
                        top: 0,
                        left: 0
                    },
                    s = n && n.ownerDocument;
                return s ? (e = s.documentElement, J.contains(e, n) ? (r = n.getBoundingClientRect(), i = I(s), {
                    top: r.top + i.pageYOffset - e.clientTop,
                    left: r.left + i.pageXOffset - e.clientLeft
                }) : r) : void 0
            },
            position: function() {
                if (this[0]) {
                    var t, e, i = this[0],
                        n = {
                            top: 0,
                            left: 0
                        };
                    return "fixed" === J.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), J.nodeName(t[0], "html") || (n = t.offset()), n.top += J.css(t[0], "borderTopWidth", !0), n.left += J.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - n.top - J.css(i, "marginTop", !0),
                        left: e.left - n.left - J.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent; t && "static" === J.css(t, "position");) t = t.offsetParent;
                    return t || Wt
                })
            }
        }), J.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, e) {
            var i = "pageYOffset" === e;
            J.fn[t] = function(n) {
                return gt(this, function(t, n, r) {
                    var s = I(t);
                    return void 0 === r ? s ? s[e] : t[n] : void(s ? s.scrollTo(i ? s.pageXOffset : r, i ? r : s.pageYOffset) : t[n] = r)
                }, t, n, arguments.length)
            }
        }), J.each(["top", "left"], function(t, e) {
            J.cssHooks[e] = k(K.pixelPosition, function(t, i) {
                return i ? (i = P(t, e), It.test(i) ? J(t).position()[e] + "px" : i) : void 0
            })
        }), J.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            J.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(i, n) {
                J.fn[n] = function(n, r) {
                    var s = arguments.length && (i || "boolean" != typeof n),
                        o = i || (!0 === n || !0 === r ? "margin" : "border");
                    return gt(this, function(e, i, n) {
                        var r;
                        return J.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === n ? J.css(e, i, o) : J.style(e, i, n, o)
                    }, e, s ? n : void 0, s, null)
                }
            })
        }), J.fn.extend({
            bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            },
            size: function() {
                return this.length
            }
        }), J.fn.andSelf = J.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
            return J
        });
        var De = t.jQuery,
            Re = t.$;
        return J.noConflict = function(e) {
            return t.$ === J && (t.$ = Re), e && t.jQuery === J && (t.jQuery = De), J
        }, e || (t.jQuery = t.$ = J), J
    }), /*! iScroll v5.2.0 ~ (c) 2008-2016 Matteo Spinelli ~ http://cubiq.org/license */
    function(t, e, i) {
        function n(i, n) {
            this.wrapper = "string" == typeof i ? e.querySelector(i) : i, this.scroller = this.wrapper.children[0], this.scrollerStyle = this.scroller.style, this.options = {
                resizeScrollbars: !0,
                mouseWheelSpeed: 20,
                snapThreshold: .334,
                disablePointer: !a.hasPointer,
                disableTouch: a.hasPointer || !a.hasTouch,
                disableMouse: a.hasPointer || a.hasTouch,
                startX: 0,
                startY: 0,
                scrollY: !0,
                directionLockThreshold: 5,
                momentum: !0,
                bounce: !0,
                bounceTime: 600,
                bounceEasing: "",
                preventDefault: !0,
                preventDefaultException: {
                    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
                },
                HWCompositing: !0,
                useTransition: !0,
                useTransform: !0,
                bindToWrapper: void 0 === t.onmousedown
            };
            for (var r in n) this.options[r] = n[r];
            this.translateZ = this.options.HWCompositing && a.hasPerspective ? " translateZ(0)" : "", this.options.useTransition = a.hasTransition && this.options.useTransition, this.options.useTransform = a.hasTransform && this.options.useTransform, this.options.eventPassthrough = !0 === this.options.eventPassthrough ? "vertical" : this.options.eventPassthrough, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollY = "vertical" != this.options.eventPassthrough && this.options.scrollY, this.options.scrollX = "horizontal" != this.options.eventPassthrough && this.options.scrollX, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.bounceEasing = "string" == typeof this.options.bounceEasing ? a.ease[this.options.bounceEasing] || a.ease.circular : this.options.bounceEasing, this.options.resizePolling = void 0 === this.options.resizePolling ? 60 : this.options.resizePolling, !0 === this.options.tap && (this.options.tap = "tap"), "scale" == this.options.shrinkScrollbars && (this.options.useTransition = !1), this.options.invertWheelDirection = this.options.invertWheelDirection ? -1 : 1, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this._events = {}, this._init(), this.refresh(), this.scrollTo(this.options.startX, this.options.startY), this.enable()
        }

        function r(t, i, n) {
            var r = e.createElement("div"),
                s = e.createElement("div");
            return !0 === n && (r.style.cssText = "position:absolute;z-index:9999", s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"), s.className = "iScrollIndicator", "h" == t ? (!0 === n && (r.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", s.style.height = "100%"), r.className = "iScrollHorizontalScrollbar") : (!0 === n && (r.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", s.style.width = "100%"), r.className = "iScrollVerticalScrollbar"), r.style.cssText += ";overflow:hidden", i || (r.style.pointerEvents = "none"), r.appendChild(s), r
        }

        function s(i, n) {
            this.wrapper = "string" == typeof n.el ? e.querySelector(n.el) : n.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = i, this.options = {
                listenX: !0,
                listenY: !0,
                interactive: !1,
                resize: !0,
                defaultScrollbars: !1,
                shrink: !1,
                fade: !1,
                speedRatioX: 0,
                speedRatioY: 0
            };
            for (var r in n) this.options[r] = n[r];
            if (this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.options.interactive && (this.options.disableTouch || (a.addEvent(this.indicator, "touchstart", this), a.addEvent(t, "touchend", this)), this.options.disablePointer || (a.addEvent(this.indicator, a.prefixPointerEvent("pointerdown"), this), a.addEvent(t, a.prefixPointerEvent("pointerup"), this)), this.options.disableMouse || (a.addEvent(this.indicator, "mousedown", this), a.addEvent(t, "mouseup", this))), this.options.fade) {
                this.wrapperStyle[a.style.transform] = this.scroller.translateZ;
                var s = a.style.transitionDuration;
                this.wrapperStyle[s] = a.isBadAndroid ? "0.0001ms" : "0ms";
                var l = this;
                a.isBadAndroid && o(function() {
                    "0.0001ms" === l.wrapperStyle[s] && (l.wrapperStyle[s] = "0s")
                }), this.wrapperStyle.opacity = "0"
            }
        }
        var o = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame || function(e) {
                t.setTimeout(e, 1e3 / 60)
            },
            a = function() {
                function n(t) {
                    return !1 !== o && ("" === o ? t : o + t.charAt(0).toUpperCase() + t.substr(1))
                }
                var r = {},
                    s = e.createElement("div").style,
                    o = function() {
                        for (var t = ["t", "webkitT", "MozT", "msT", "OT"], e = 0, i = t.length; e < i; e++)
                            if (t[e] + "ransform" in s) return t[e].substr(0, t[e].length - 1);
                        return !1
                    }();
                r.getTime = Date.now || function() {
                    return (new Date).getTime()
                }, r.extend = function(t, e) {
                    for (var i in e) t[i] = e[i]
                }, r.addEvent = function(t, e, i, n) {
                    t.addEventListener(e, i, !!n)
                }, r.removeEvent = function(t, e, i, n) {
                    t.removeEventListener(e, i, !!n)
                }, r.prefixPointerEvent = function(e) {
                    return t.MSPointerEvent ? "MSPointer" + e.charAt(7).toUpperCase() + e.substr(8) : e
                }, r.momentum = function(t, e, n, r, s, o) {
                    var a, l, h = t - e,
                        c = i.abs(h) / n;
                    return o = void 0 === o ? 6e-4 : o, a = t + c * c / (2 * o) * (h < 0 ? -1 : 1), l = c / o, a < r ? (a = s ? r - s / 2.5 * (c / 8) : r, l = (h = i.abs(a - t)) / c) : a > 0 && (a = s ? s / 2.5 * (c / 8) : 0, l = (h = i.abs(t) + a) / c), {
                        destination: i.round(a),
                        duration: l
                    }
                };
                var a = n("transform");
                return r.extend(r, {
                    hasTransform: !1 !== a,
                    hasPerspective: n("perspective") in s,
                    hasTouch: "ontouchstart" in t,
                    hasPointer: !(!t.PointerEvent && !t.MSPointerEvent),
                    hasTransition: n("transition") in s
                }), r.isBadAndroid = function() {
                    var e = t.navigator.appVersion;
                    if (/Android/.test(e) && !/Chrome\/\d/.test(e)) {
                        var i = e.match(/Safari\/(\d+.\d)/);
                        return !(i && "object" == typeof i && i.length >= 2) || parseFloat(i[1]) < 535.19
                    }
                    return !1
                }(), r.extend(r.style = {}, {
                    transform: a,
                    transitionTimingFunction: n("transitionTimingFunction"),
                    transitionDuration: n("transitionDuration"),
                    transitionDelay: n("transitionDelay"),
                    transformOrigin: n("transformOrigin")
                }), r.hasClass = function(t, e) {
                    return new RegExp("(^|\\s)" + e + "(\\s|$)").test(t.className)
                }, r.addClass = function(t, e) {
                    if (!r.hasClass(t, e)) {
                        var i = t.className.split(" ");
                        i.push(e), t.className = i.join(" ")
                    }
                }, r.removeClass = function(t, e) {
                    if (r.hasClass(t, e)) {
                        var i = new RegExp("(^|\\s)" + e + "(\\s|$)", "g");
                        t.className = t.className.replace(i, " ")
                    }
                }, r.offset = function(t) {
                    for (var e = -t.offsetLeft, i = -t.offsetTop; t = t.offsetParent;) e -= t.offsetLeft, i -= t.offsetTop;
                    return {
                        left: e,
                        top: i
                    }
                }, r.preventDefaultException = function(t, e) {
                    for (var i in e)
                        if (e[i].test(t[i])) return !0;
                    return !1
                }, r.extend(r.eventType = {}, {
                    touchstart: 1,
                    touchmove: 1,
                    touchend: 1,
                    mousedown: 2,
                    mousemove: 2,
                    mouseup: 2,
                    pointerdown: 3,
                    pointermove: 3,
                    pointerup: 3,
                    MSPointerDown: 3,
                    MSPointerMove: 3,
                    MSPointerUp: 3
                }), r.extend(r.ease = {}, {
                    quadratic: {
                        style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        fn: function(t) {
                            return t * (2 - t)
                        }
                    },
                    circular: {
                        style: "cubic-bezier(0.1, 0.57, 0.1, 1)",
                        fn: function(t) {
                            return i.sqrt(1 - --t * t)
                        }
                    },
                    back: {
                        style: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        fn: function(t) {
                            return (t -= 1) * t * (5 * t + 4) + 1
                        }
                    },
                    bounce: {
                        style: "",
                        fn: function(t) {
                            return (t /= 1) < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                        }
                    },
                    elastic: {
                        style: "",
                        fn: function(t) {
                            return 0 === t ? 0 : 1 == t ? 1 : .4 * i.pow(2, -10 * t) * i.sin((t - .055) * (2 * i.PI) / .22) + 1
                        }
                    }
                }), r.tap = function(t, i) {
                    var n = e.createEvent("Event");
                    n.initEvent(i, !0, !0), n.pageX = t.pageX, n.pageY = t.pageY, t.target.dispatchEvent(n)
                }, r.click = function(t) {
                    var i, n = t.target;
                    /(SELECT|INPUT|TEXTAREA)/i.test(n.tagName) || ((i = e.createEvent("MouseEvents")).initMouseEvent("click", !0, !0, t.view, 1, n.screenX, n.screenY, n.clientX, n.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, 0, null), i._constructed = !0, n.dispatchEvent(i))
                }, r
            }();
        n.prototype = {
            version: "5.2.0",
            _init: function() {
                this._initEvents(), (this.options.scrollbars || this.options.indicators) && this._initIndicators(), this.options.mouseWheel && this._initWheel(), this.options.snap && this._initSnap(), this.options.keyBindings && this._initKeys()
            },
            destroy: function() {
                this._initEvents(!0), clearTimeout(this.resizeTimeout), this.resizeTimeout = null, this._execEvent("destroy")
            },
            _transitionEnd: function(t) {
                t.target == this.scroller && this.isInTransition && (this._transitionTime(), this.resetPosition(this.options.bounceTime) || (this.isInTransition = !1, this._execEvent("scrollEnd")))
            },
            _start: function(t) {
                if (1 != a.eventType[t.type]) {
                    if (0 !== (t.which ? t.button : t.button < 2 ? 0 : 4 == t.button ? 1 : 2)) return
                }
                if (this.enabled && (!this.initiated || a.eventType[t.type] === this.initiated)) {
                    !this.options.preventDefault || a.isBadAndroid || a.preventDefaultException(t.target, this.options.preventDefaultException) || t.preventDefault();
                    var e, n = t.touches ? t.touches[0] : t;
                    this.initiated = a.eventType[t.type], this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.directionLocked = 0, this.startTime = a.getTime(), this.options.useTransition && this.isInTransition ? (this._transitionTime(), this.isInTransition = !1, e = this.getComputedPosition(), this._translate(i.round(e.x), i.round(e.y)), this._execEvent("scrollEnd")) : !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, this._execEvent("scrollEnd")), this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = n.pageX, this.pointY = n.pageY, this._execEvent("beforeScrollStart")
                }
            },
            _move: function(t) {
                if (this.enabled && a.eventType[t.type] === this.initiated) {
                    this.options.preventDefault && t.preventDefault();
                    var e, n, r, s, o = t.touches ? t.touches[0] : t,
                        l = o.pageX - this.pointX,
                        h = o.pageY - this.pointY,
                        c = a.getTime();
                    if (this.pointX = o.pageX, this.pointY = o.pageY, this.distX += l, this.distY += h, r = i.abs(this.distX), s = i.abs(this.distY), !(c - this.endTime > 300 && r < 10 && s < 10)) {
                        if (this.directionLocked || this.options.freeScroll || (r > s + this.options.directionLockThreshold ? this.directionLocked = "h" : s >= r + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), "h" == this.directionLocked) {
                            if ("vertical" == this.options.eventPassthrough) t.preventDefault();
                            else if ("horizontal" == this.options.eventPassthrough) return void(this.initiated = !1);
                            h = 0
                        } else if ("v" == this.directionLocked) {
                            if ("horizontal" == this.options.eventPassthrough) t.preventDefault();
                            else if ("vertical" == this.options.eventPassthrough) return void(this.initiated = !1);
                            l = 0
                        }
                        l = this.hasHorizontalScroll ? l : 0, h = this.hasVerticalScroll ? h : 0, e = this.x + l, n = this.y + h, (e > 0 || e < this.maxScrollX) && (e = this.options.bounce ? this.x + l / 3 : e > 0 ? 0 : this.maxScrollX), (n > 0 || n < this.maxScrollY) && (n = this.options.bounce ? this.y + h / 3 : n > 0 ? 0 : this.maxScrollY), this.directionX = l > 0 ? -1 : l < 0 ? 1 : 0, this.directionY = h > 0 ? -1 : h < 0 ? 1 : 0, this.moved || this._execEvent("scrollStart"), this.moved = !0, this._translate(e, n), c - this.startTime > 300 && (this.startTime = c, this.startX = this.x, this.startY = this.y)
                    }
                }
            },
            _end: function(t) {
                if (this.enabled && a.eventType[t.type] === this.initiated) {
                    this.options.preventDefault && !a.preventDefaultException(t.target, this.options.preventDefaultException) && t.preventDefault();
                    t.changedTouches && t.changedTouches[0];
                    var e, n, r = a.getTime() - this.startTime,
                        s = i.round(this.x),
                        o = i.round(this.y),
                        l = i.abs(s - this.startX),
                        h = i.abs(o - this.startY),
                        c = 0,
                        u = "";
                    if (this.isInTransition = 0, this.initiated = 0, this.endTime = a.getTime(), !this.resetPosition(this.options.bounceTime)) {
                        if (this.scrollTo(s, o), !this.moved) return this.options.tap && a.tap(t, this.options.tap), this.options.click && a.click(t), void this._execEvent("scrollCancel");
                        if (this._events.flick && r < 200 && l < 100 && h < 100) this._execEvent("flick");
                        else {
                            if (this.options.momentum && r < 300 && (e = this.hasHorizontalScroll ? a.momentum(this.x, this.startX, r, this.maxScrollX, this.options.bounce ? this.wrapperWidth : 0, this.options.deceleration) : {
                                    destination: s,
                                    duration: 0
                                }, n = this.hasVerticalScroll ? a.momentum(this.y, this.startY, r, this.maxScrollY, this.options.bounce ? this.wrapperHeight : 0, this.options.deceleration) : {
                                    destination: o,
                                    duration: 0
                                }, s = e.destination, o = n.destination, c = i.max(e.duration, n.duration), this.isInTransition = 1), this.options.snap) {
                                var p = this._nearestSnap(s, o);
                                this.currentPage = p, c = this.options.snapSpeed || i.max(i.max(i.min(i.abs(s - p.x), 1e3), i.min(i.abs(o - p.y), 1e3)), 300), s = p.x, o = p.y, this.directionX = 0, this.directionY = 0, u = this.options.bounceEasing
                            }
                            if (s != this.x || o != this.y) return (s > 0 || s < this.maxScrollX || o > 0 || o < this.maxScrollY) && (u = a.ease.quadratic), void this.scrollTo(s, o, c, u);
                            this._execEvent("scrollEnd")
                        }
                    }
                }
            },
            _resize: function() {
                var t = this;
                clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
                    t.refresh()
                }, this.options.resizePolling)
            },
            resetPosition: function(t) {
                var e = this.x,
                    i = this.y;
                return t = t || 0, !this.hasHorizontalScroll || this.x > 0 ? e = 0 : this.x < this.maxScrollX && (e = this.maxScrollX), !this.hasVerticalScroll || this.y > 0 ? i = 0 : this.y < this.maxScrollY && (i = this.maxScrollY), (e != this.x || i != this.y) && (this.scrollTo(e, i, t, this.options.bounceEasing), !0)
            },
            disable: function() {
                this.enabled = !1
            },
            enable: function() {
                this.enabled = !0
            },
            refresh: function() {
                this.wrapper.offsetHeight;
                this.wrapperWidth = this.wrapper.clientWidth, this.wrapperHeight = this.wrapper.clientHeight, this.scrollerWidth = this.scroller.offsetWidth, this.scrollerHeight = this.scroller.offsetHeight, this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.maxScrollY = this.wrapperHeight - this.scrollerHeight, this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < 0, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < 0, this.hasHorizontalScroll || (this.maxScrollX = 0, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = 0, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = a.offset(this.wrapper), this._execEvent("refresh"), this.resetPosition()
            },
            on: function(t, e) {
                this._events[t] || (this._events[t] = []), this._events[t].push(e)
            },
            off: function(t, e) {
                if (this._events[t]) {
                    var i = this._events[t].indexOf(e);
                    i > -1 && this._events[t].splice(i, 1)
                }
            },
            _execEvent: function(t) {
                if (this._events[t]) {
                    var e = 0,
                        i = this._events[t].length;
                    if (i)
                        for (; e < i; e++) this._events[t][e].apply(this, [].slice.call(arguments, 1))
                }
            },
            scrollBy: function(t, e, i, n) {
                t = this.x + t, e = this.y + e, i = i || 0, this.scrollTo(t, e, i, n)
            },
            scrollTo: function(t, e, i, n) {
                n = n || a.ease.circular, this.isInTransition = this.options.useTransition && i > 0;
                var r = this.options.useTransition && n.style;
                !i || r ? (r && (this._transitionTimingFunction(n.style), this._transitionTime(i)), this._translate(t, e)) : this._animate(t, e, i, n.fn)
            },
            scrollToElement: function(t, e, n, r, s) {
                if (t = t.nodeType ? t : this.scroller.querySelector(t)) {
                    var o = a.offset(t);
                    o.left -= this.wrapperOffset.left, o.top -= this.wrapperOffset.top, !0 === n && (n = i.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), !0 === r && (r = i.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), o.left -= n || 0, o.top -= r || 0, o.left = o.left > 0 ? 0 : o.left < this.maxScrollX ? this.maxScrollX : o.left, o.top = o.top > 0 ? 0 : o.top < this.maxScrollY ? this.maxScrollY : o.top, e = void 0 === e || null === e || "auto" === e ? i.max(i.abs(this.x - o.left), i.abs(this.y - o.top)) : e, this.scrollTo(o.left, o.top, e, s)
                }
            },
            _transitionTime: function(t) {
                t = t || 0;
                var e = a.style.transitionDuration;
                if (this.scrollerStyle[e] = t + "ms", !t && a.isBadAndroid) {
                    this.scrollerStyle[e] = "0.0001ms";
                    var i = this;
                    o(function() {
                        "0.0001ms" === i.scrollerStyle[e] && (i.scrollerStyle[e] = "0s")
                    })
                }
                if (this.indicators)
                    for (var n = this.indicators.length; n--;) this.indicators[n].transitionTime(t)
            },
            _transitionTimingFunction: function(t) {
                if (this.scrollerStyle[a.style.transitionTimingFunction] = t, this.indicators)
                    for (var e = this.indicators.length; e--;) this.indicators[e].transitionTimingFunction(t)
            },
            _translate: function(t, e) {
                if (this.options.useTransform ? this.scrollerStyle[a.style.transform] = "translate(" + t + "px," + e + "px)" + this.translateZ : (t = i.round(t), e = i.round(e), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = e + "px"), this.x = t, this.y = e, this.indicators)
                    for (var n = this.indicators.length; n--;) this.indicators[n].updatePosition()
            },
            _initEvents: function(e) {
                var i = e ? a.removeEvent : a.addEvent,
                    n = this.options.bindToWrapper ? this.wrapper : t;
                i(t, "orientationchange", this), i(t, "resize", this), this.options.click && i(this.wrapper, "click", this, !0), this.options.disableMouse || (i(this.wrapper, "mousedown", this), i(n, "mousemove", this), i(n, "mousecancel", this), i(n, "mouseup", this)), a.hasPointer && !this.options.disablePointer && (i(this.wrapper, a.prefixPointerEvent("pointerdown"), this), i(n, a.prefixPointerEvent("pointermove"), this), i(n, a.prefixPointerEvent("pointercancel"), this), i(n, a.prefixPointerEvent("pointerup"), this)), a.hasTouch && !this.options.disableTouch && (i(this.wrapper, "touchstart", this), i(n, "touchmove", this), i(n, "touchcancel", this), i(n, "touchend", this)), i(this.scroller, "transitionend", this), i(this.scroller, "webkitTransitionEnd", this), i(this.scroller, "oTransitionEnd", this), i(this.scroller, "MSTransitionEnd", this)
            },
            getComputedPosition: function() {
                var e, i, n = t.getComputedStyle(this.scroller, null);
                return this.options.useTransform ? (e = +((n = n[a.style.transform].split(")")[0].split(", "))[12] || n[4]), i = +(n[13] || n[5])) : (e = +n.left.replace(/[^-\d.]/g, ""), i = +n.top.replace(/[^-\d.]/g, "")), {
                    x: e,
                    y: i
                }
            },
            _initIndicators: function() {
                function t(t) {
                    if (a.indicators)
                        for (var e = a.indicators.length; e--;) t.call(a.indicators[e])
                }
                var e, i = this.options.interactiveScrollbars,
                    n = "string" != typeof this.options.scrollbars,
                    o = [],
                    a = this;
                this.indicators = [], this.options.scrollbars && (this.options.scrollY && (e = {
                    el: r("v", i, this.options.scrollbars),
                    interactive: i,
                    defaultScrollbars: !0,
                    customStyle: n,
                    resize: this.options.resizeScrollbars,
                    shrink: this.options.shrinkScrollbars,
                    fade: this.options.fadeScrollbars,
                    listenX: !1
                }, this.wrapper.appendChild(e.el), o.push(e)), this.options.scrollX && (e = {
                    el: r("h", i, this.options.scrollbars),
                    interactive: i,
                    defaultScrollbars: !0,
                    customStyle: n,
                    resize: this.options.resizeScrollbars,
                    shrink: this.options.shrinkScrollbars,
                    fade: this.options.fadeScrollbars,
                    listenY: !1
                }, this.wrapper.appendChild(e.el), o.push(e))), this.options.indicators && (o = o.concat(this.options.indicators));
                for (var l = o.length; l--;) this.indicators.push(new s(this, o[l]));
                this.options.fadeScrollbars && (this.on("scrollEnd", function() {
                    t(function() {
                        this.fade()
                    })
                }), this.on("scrollCancel", function() {
                    t(function() {
                        this.fade()
                    })
                }), this.on("scrollStart", function() {
                    t(function() {
                        this.fade(1)
                    })
                }), this.on("beforeScrollStart", function() {
                    t(function() {
                        this.fade(1, !0)
                    })
                })), this.on("refresh", function() {
                    t(function() {
                        this.refresh()
                    })
                }), this.on("destroy", function() {
                    t(function() {
                        this.destroy()
                    }), delete this.indicators
                })
            },
            _initWheel: function() {
                a.addEvent(this.wrapper, "wheel", this), a.addEvent(this.wrapper, "mousewheel", this), a.addEvent(this.wrapper, "DOMMouseScroll", this), this.on("destroy", function() {
                    clearTimeout(this.wheelTimeout), this.wheelTimeout = null, a.removeEvent(this.wrapper, "wheel", this), a.removeEvent(this.wrapper, "mousewheel", this), a.removeEvent(this.wrapper, "DOMMouseScroll", this)
                })
            },
            _wheel: function(t) {
                if (this.enabled) {
                    t.preventDefault();
                    var e, n, r, s, o = this;
                    if (void 0 === this.wheelTimeout && o._execEvent("scrollStart"), clearTimeout(this.wheelTimeout), this.wheelTimeout = setTimeout(function() {
                            o.options.snap || o._execEvent("scrollEnd"), o.wheelTimeout = void 0
                        }, 400), "deltaX" in t) 1 === t.deltaMode ? (e = -t.deltaX * this.options.mouseWheelSpeed, n = -t.deltaY * this.options.mouseWheelSpeed) : (e = -t.deltaX, n = -t.deltaY);
                    else if ("wheelDeltaX" in t) e = t.wheelDeltaX / 120 * this.options.mouseWheelSpeed, n = t.wheelDeltaY / 120 * this.options.mouseWheelSpeed;
                    else if ("wheelDelta" in t) e = n = t.wheelDelta / 120 * this.options.mouseWheelSpeed;
                    else {
                        if (!("detail" in t)) return;
                        e = n = -t.detail / 3 * this.options.mouseWheelSpeed
                    }
                    if (e *= this.options.invertWheelDirection, n *= this.options.invertWheelDirection, this.hasVerticalScroll || (e = n, n = 0), this.options.snap) return r = this.currentPage.pageX, s = this.currentPage.pageY, e > 0 ? r-- : e < 0 && r++, n > 0 ? s-- : n < 0 && s++, void this.goToPage(r, s);
                    r = this.x + i.round(this.hasHorizontalScroll ? e : 0), s = this.y + i.round(this.hasVerticalScroll ? n : 0), this.directionX = e > 0 ? -1 : e < 0 ? 1 : 0, this.directionY = n > 0 ? -1 : n < 0 ? 1 : 0, r > 0 ? r = 0 : r < this.maxScrollX && (r = this.maxScrollX), s > 0 ? s = 0 : s < this.maxScrollY && (s = this.maxScrollY), this.scrollTo(r, s, 0)
                }
            },
            _initSnap: function() {
                this.currentPage = {}, "string" == typeof this.options.snap && (this.options.snap = this.scroller.querySelectorAll(this.options.snap)), this.on("refresh", function() {
                    var t, e, n, r, s, o, a = 0,
                        l = 0,
                        h = 0,
                        c = this.options.snapStepX || this.wrapperWidth,
                        u = this.options.snapStepY || this.wrapperHeight;
                    if (this.pages = [], this.wrapperWidth && this.wrapperHeight && this.scrollerWidth && this.scrollerHeight) {
                        if (!0 === this.options.snap)
                            for (n = i.round(c / 2), r = i.round(u / 2); h > -this.scrollerWidth;) {
                                for (this.pages[a] = [], t = 0, s = 0; s > -this.scrollerHeight;) this.pages[a][t] = {
                                    x: i.max(h, this.maxScrollX),
                                    y: i.max(s, this.maxScrollY),
                                    width: c,
                                    height: u,
                                    cx: h - n,
                                    cy: s - r
                                }, s -= u, t++;
                                h -= c, a++
                            } else
                                for (t = (o = this.options.snap).length, e = -1; a < t; a++)(0 === a || o[a].offsetLeft <= o[a - 1].offsetLeft) && (l = 0, e++), this.pages[l] || (this.pages[l] = []), h = i.max(-o[a].offsetLeft, this.maxScrollX), s = i.max(-o[a].offsetTop, this.maxScrollY), n = h - i.round(o[a].offsetWidth / 2), r = s - i.round(o[a].offsetHeight / 2), this.pages[l][e] = {
                                    x: h,
                                    y: s,
                                    width: o[a].offsetWidth,
                                    height: o[a].offsetHeight,
                                    cx: n,
                                    cy: r
                                }, h > this.maxScrollX && l++;
                        this.goToPage(this.currentPage.pageX || 0, this.currentPage.pageY || 0, 0), this.options.snapThreshold % 1 == 0 ? (this.snapThresholdX = this.options.snapThreshold, this.snapThresholdY = this.options.snapThreshold) : (this.snapThresholdX = i.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width * this.options.snapThreshold), this.snapThresholdY = i.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height * this.options.snapThreshold))
                    }
                }), this.on("flick", function() {
                    var t = this.options.snapSpeed || i.max(i.max(i.min(i.abs(this.x - this.startX), 1e3), i.min(i.abs(this.y - this.startY), 1e3)), 300);
                    this.goToPage(this.currentPage.pageX + this.directionX, this.currentPage.pageY + this.directionY, t)
                })
            },
            _nearestSnap: function(t, e) {
                if (!this.pages.length) return {
                    x: 0,
                    y: 0,
                    pageX: 0,
                    pageY: 0
                };
                var n = 0,
                    r = this.pages.length,
                    s = 0;
                if (i.abs(t - this.absStartX) < this.snapThresholdX && i.abs(e - this.absStartY) < this.snapThresholdY) return this.currentPage;
                for (t > 0 ? t = 0 : t < this.maxScrollX && (t = this.maxScrollX), e > 0 ? e = 0 : e < this.maxScrollY && (e = this.maxScrollY); n < r; n++)
                    if (t >= this.pages[n][0].cx) {
                        t = this.pages[n][0].x;
                        break
                    } for (r = this.pages[n].length; s < r; s++)
                    if (e >= this.pages[0][s].cy) {
                        e = this.pages[0][s].y;
                        break
                    } return n == this.currentPage.pageX && ((n += this.directionX) < 0 ? n = 0 : n >= this.pages.length && (n = this.pages.length - 1), t = this.pages[n][0].x), s == this.currentPage.pageY && ((s += this.directionY) < 0 ? s = 0 : s >= this.pages[0].length && (s = this.pages[0].length - 1), e = this.pages[0][s].y), {
                    x: t,
                    y: e,
                    pageX: n,
                    pageY: s
                }
            },
            goToPage: function(t, e, n, r) {
                r = r || this.options.bounceEasing, t >= this.pages.length ? t = this.pages.length - 1 : t < 0 && (t = 0), e >= this.pages[t].length ? e = this.pages[t].length - 1 : e < 0 && (e = 0);
                var s = this.pages[t][e].x,
                    o = this.pages[t][e].y;
                n = void 0 === n ? this.options.snapSpeed || i.max(i.max(i.min(i.abs(s - this.x), 1e3), i.min(i.abs(o - this.y), 1e3)), 300) : n, this.currentPage = {
                    x: s,
                    y: o,
                    pageX: t,
                    pageY: e
                }, this.scrollTo(s, o, n, r)
            },
            next: function(t, e) {
                var i = this.currentPage.pageX,
                    n = this.currentPage.pageY;
                ++i >= this.pages.length && this.hasVerticalScroll && (i = 0, n++), this.goToPage(i, n, t, e)
            },
            prev: function(t, e) {
                var i = this.currentPage.pageX,
                    n = this.currentPage.pageY;
                --i < 0 && this.hasVerticalScroll && (i = 0, n--), this.goToPage(i, n, t, e)
            },
            _initKeys: function(e) {
                var i, n = {
                    pageUp: 33,
                    pageDown: 34,
                    end: 35,
                    home: 36,
                    left: 37,
                    up: 38,
                    right: 39,
                    down: 40
                };
                if ("object" == typeof this.options.keyBindings)
                    for (i in this.options.keyBindings) "string" == typeof this.options.keyBindings[i] && (this.options.keyBindings[i] = this.options.keyBindings[i].toUpperCase().charCodeAt(0));
                else this.options.keyBindings = {};
                for (i in n) this.options.keyBindings[i] = this.options.keyBindings[i] || n[i];
                a.addEvent(t, "keydown", this), this.on("destroy", function() {
                    a.removeEvent(t, "keydown", this)
                })
            },
            _key: function(t) {
                if (this.enabled) {
                    var e, n = this.options.snap,
                        r = n ? this.currentPage.pageX : this.x,
                        s = n ? this.currentPage.pageY : this.y,
                        o = a.getTime(),
                        l = this.keyTime || 0;
                    switch (this.options.useTransition && this.isInTransition && (e = this.getComputedPosition(), this._translate(i.round(e.x), i.round(e.y)), this.isInTransition = !1), this.keyAcceleration = o - l < 200 ? i.min(this.keyAcceleration + .25, 50) : 0, t.keyCode) {
                        case this.options.keyBindings.pageUp:
                            this.hasHorizontalScroll && !this.hasVerticalScroll ? r += n ? 1 : this.wrapperWidth : s += n ? 1 : this.wrapperHeight;
                            break;
                        case this.options.keyBindings.pageDown:
                            this.hasHorizontalScroll && !this.hasVerticalScroll ? r -= n ? 1 : this.wrapperWidth : s -= n ? 1 : this.wrapperHeight;
                            break;
                        case this.options.keyBindings.end:
                            r = n ? this.pages.length - 1 : this.maxScrollX, s = n ? this.pages[0].length - 1 : this.maxScrollY;
                            break;
                        case this.options.keyBindings.home:
                            r = 0, s = 0;
                            break;
                        case this.options.keyBindings.left:
                            r += n ? -1 : 5 + this.keyAcceleration >> 0;
                            break;
                        case this.options.keyBindings.up:
                            s += n ? 1 : 5 + this.keyAcceleration >> 0;
                            break;
                        case this.options.keyBindings.right:
                            r -= n ? -1 : 5 + this.keyAcceleration >> 0;
                            break;
                        case this.options.keyBindings.down:
                            s -= n ? 1 : 5 + this.keyAcceleration >> 0;
                            break;
                        default:
                            return
                    }
                    n ? this.goToPage(r, s) : (r > 0 ? (r = 0, this.keyAcceleration = 0) : r < this.maxScrollX && (r = this.maxScrollX, this.keyAcceleration = 0), s > 0 ? (s = 0, this.keyAcceleration = 0) : s < this.maxScrollY && (s = this.maxScrollY, this.keyAcceleration = 0), this.scrollTo(r, s, 0), this.keyTime = o)
                }
            },
            _animate: function(t, e, i, n) {
                function r() {
                    var p, f, d, m = a.getTime();
                    if (m >= u) return s.isAnimating = !1, s._translate(t, e), void(s.resetPosition(s.options.bounceTime) || s._execEvent("scrollEnd"));
                    d = n(m = (m - c) / i), p = (t - l) * d + l, f = (e - h) * d + h, s._translate(p, f), s.isAnimating && o(r)
                }
                var s = this,
                    l = this.x,
                    h = this.y,
                    c = a.getTime(),
                    u = c + i;
                this.isAnimating = !0, r()
            },
            handleEvent: function(t) {
                switch (t.type) {
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                    case "mousedown":
                        this._start(t);
                        break;
                    case "touchmove":
                    case "pointermove":
                    case "MSPointerMove":
                    case "mousemove":
                        this._move(t);
                        break;
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseup":
                    case "touchcancel":
                    case "pointercancel":
                    case "MSPointerCancel":
                    case "mousecancel":
                        this._end(t);
                        break;
                    case "orientationchange":
                    case "resize":
                        this._resize();
                        break;
                    case "transitionend":
                    case "webkitTransitionEnd":
                    case "oTransitionEnd":
                    case "MSTransitionEnd":
                        this._transitionEnd(t);
                        break;
                    case "wheel":
                    case "DOMMouseScroll":
                    case "mousewheel":
                        this._wheel(t);
                        break;
                    case "keydown":
                        this._key(t);
                        break;
                    case "click":
                        this.enabled && !t._constructed && (t.preventDefault(), t.stopPropagation())
                }
            }
        }, s.prototype = {
            handleEvent: function(t) {
                switch (t.type) {
                    case "touchstart":
                    case "pointerdown":
                    case "MSPointerDown":
                    case "mousedown":
                        this._start(t);
                        break;
                    case "touchmove":
                    case "pointermove":
                    case "MSPointerMove":
                    case "mousemove":
                        this._move(t);
                        break;
                    case "touchend":
                    case "pointerup":
                    case "MSPointerUp":
                    case "mouseup":
                    case "touchcancel":
                    case "pointercancel":
                    case "MSPointerCancel":
                    case "mousecancel":
                        this._end(t)
                }
            },
            destroy: function() {
                this.options.fadeScrollbars && (clearTimeout(this.fadeTimeout), this.fadeTimeout = null), this.options.interactive && (a.removeEvent(this.indicator, "touchstart", this), a.removeEvent(this.indicator, a.prefixPointerEvent("pointerdown"), this), a.removeEvent(this.indicator, "mousedown", this), a.removeEvent(t, "touchmove", this), a.removeEvent(t, a.prefixPointerEvent("pointermove"), this), a.removeEvent(t, "mousemove", this), a.removeEvent(t, "touchend", this), a.removeEvent(t, a.prefixPointerEvent("pointerup"), this), a.removeEvent(t, "mouseup", this)), this.options.defaultScrollbars && this.wrapper.parentNode.removeChild(this.wrapper)
            },
            _start: function(e) {
                var i = e.touches ? e.touches[0] : e;
                e.preventDefault(), e.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = i.pageX, this.lastPointY = i.pageY, this.startTime = a.getTime(), this.options.disableTouch || a.addEvent(t, "touchmove", this), this.options.disablePointer || a.addEvent(t, a.prefixPointerEvent("pointermove"), this), this.options.disableMouse || a.addEvent(t, "mousemove", this), this.scroller._execEvent("beforeScrollStart")
            },
            _move: function(t) {
                var e, i, n, r, s = t.touches ? t.touches[0] : t;
                a.getTime();
                this.moved || this.scroller._execEvent("scrollStart"), this.moved = !0, e = s.pageX - this.lastPointX, this.lastPointX = s.pageX, i = s.pageY - this.lastPointY, this.lastPointY = s.pageY, n = this.x + e, r = this.y + i, this._pos(n, r), t.preventDefault(), t.stopPropagation()
            },
            _end: function(e) {
                if (this.initiated) {
                    if (this.initiated = !1, e.preventDefault(), e.stopPropagation(), a.removeEvent(t, "touchmove", this), a.removeEvent(t, a.prefixPointerEvent("pointermove"), this), a.removeEvent(t, "mousemove", this), this.scroller.options.snap) {
                        var n = this.scroller._nearestSnap(this.scroller.x, this.scroller.y),
                            r = this.options.snapSpeed || i.max(i.max(i.min(i.abs(this.scroller.x - n.x), 1e3), i.min(i.abs(this.scroller.y - n.y), 1e3)), 300);
                        this.scroller.x == n.x && this.scroller.y == n.y || (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = n, this.scroller.scrollTo(n.x, n.y, r, this.scroller.options.bounceEasing))
                    }
                    this.moved && this.scroller._execEvent("scrollEnd")
                }
            },
            transitionTime: function(t) {
                t = t || 0;
                var e = a.style.transitionDuration;
                if (this.indicatorStyle[e] = t + "ms", !t && a.isBadAndroid) {
                    this.indicatorStyle[e] = "0.0001ms";
                    var i = this;
                    o(function() {
                        "0.0001ms" === i.indicatorStyle[e] && (i.indicatorStyle[e] = "0s")
                    })
                }
            },
            transitionTimingFunction: function(t) {
                this.indicatorStyle[a.style.transitionTimingFunction] = t
            },
            refresh: function() {
                this.transitionTime(), this.options.listenX && !this.options.listenY ? this.indicatorStyle.display = this.scroller.hasHorizontalScroll ? "block" : "none" : this.options.listenY && !this.options.listenX ? this.indicatorStyle.display = this.scroller.hasVerticalScroll ? "block" : "none" : this.indicatorStyle.display = this.scroller.hasHorizontalScroll || this.scroller.hasVerticalScroll ? "block" : "none", this.scroller.hasHorizontalScroll && this.scroller.hasVerticalScroll ? (a.addClass(this.wrapper, "iScrollBothScrollbars"), a.removeClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "8px" : this.wrapper.style.bottom = "8px")) : (a.removeClass(this.wrapper, "iScrollBothScrollbars"), a.addClass(this.wrapper, "iScrollLoneScrollbar"), this.options.defaultScrollbars && this.options.customStyle && (this.options.listenX ? this.wrapper.style.right = "2px" : this.wrapper.style.bottom = "2px"));
                this.wrapper.offsetHeight;
                this.options.listenX && (this.wrapperWidth = this.wrapper.clientWidth, this.options.resize ? (this.indicatorWidth = i.max(i.round(this.wrapperWidth * this.wrapperWidth / (this.scroller.scrollerWidth || this.wrapperWidth || 1)), 8), this.indicatorStyle.width = this.indicatorWidth + "px") : this.indicatorWidth = this.indicator.clientWidth, this.maxPosX = this.wrapperWidth - this.indicatorWidth, "clip" == this.options.shrink ? (this.minBoundaryX = 8 - this.indicatorWidth, this.maxBoundaryX = this.wrapperWidth - 8) : (this.minBoundaryX = 0, this.maxBoundaryX = this.maxPosX), this.sizeRatioX = this.options.speedRatioX || this.scroller.maxScrollX && this.maxPosX / this.scroller.maxScrollX), this.options.listenY && (this.wrapperHeight = this.wrapper.clientHeight, this.options.resize ? (this.indicatorHeight = i.max(i.round(this.wrapperHeight * this.wrapperHeight / (this.scroller.scrollerHeight || this.wrapperHeight || 1)), 8), this.indicatorStyle.height = this.indicatorHeight + "px") : this.indicatorHeight = this.indicator.clientHeight, this.maxPosY = this.wrapperHeight - this.indicatorHeight, "clip" == this.options.shrink ? (this.minBoundaryY = 8 - this.indicatorHeight, this.maxBoundaryY = this.wrapperHeight - 8) : (this.minBoundaryY = 0, this.maxBoundaryY = this.maxPosY), this.maxPosY = this.wrapperHeight - this.indicatorHeight, this.sizeRatioY = this.options.speedRatioY || this.scroller.maxScrollY && this.maxPosY / this.scroller.maxScrollY), this.updatePosition()
            },
            updatePosition: function() {
                var t = this.options.listenX && i.round(this.sizeRatioX * this.scroller.x) || 0,
                    e = this.options.listenY && i.round(this.sizeRatioY * this.scroller.y) || 0;
                this.options.ignoreBoundaries || (t < this.minBoundaryX ? ("scale" == this.options.shrink && (this.width = i.max(this.indicatorWidth + t, 8), this.indicatorStyle.width = this.width + "px"), t = this.minBoundaryX) : t > this.maxBoundaryX ? "scale" == this.options.shrink ? (this.width = i.max(this.indicatorWidth - (t - this.maxPosX), 8), this.indicatorStyle.width = this.width + "px", t = this.maxPosX + this.indicatorWidth - this.width) : t = this.maxBoundaryX : "scale" == this.options.shrink && this.width != this.indicatorWidth && (this.width = this.indicatorWidth, this.indicatorStyle.width = this.width + "px"), e < this.minBoundaryY ? ("scale" == this.options.shrink && (this.height = i.max(this.indicatorHeight + 3 * e, 8), this.indicatorStyle.height = this.height + "px"), e = this.minBoundaryY) : e > this.maxBoundaryY ? "scale" == this.options.shrink ? (this.height = i.max(this.indicatorHeight - 3 * (e - this.maxPosY), 8), this.indicatorStyle.height = this.height + "px", e = this.maxPosY + this.indicatorHeight - this.height) : e = this.maxBoundaryY : "scale" == this.options.shrink && this.height != this.indicatorHeight && (this.height = this.indicatorHeight, this.indicatorStyle.height = this.height + "px")), this.x = t, this.y = e, this.scroller.options.useTransform ? this.indicatorStyle[a.style.transform] = "translate(" + t + "px," + e + "px)" + this.scroller.translateZ : (this.indicatorStyle.left = t + "px", this.indicatorStyle.top = e + "px")
            },
            _pos: function(t, e) {
                t < 0 ? t = 0 : t > this.maxPosX && (t = this.maxPosX), e < 0 ? e = 0 : e > this.maxPosY && (e = this.maxPosY), t = this.options.listenX ? i.round(t / this.sizeRatioX) : this.scroller.x, e = this.options.listenY ? i.round(e / this.sizeRatioY) : this.scroller.y, this.scroller.scrollTo(t, e)
            },
            fade: function(t, e) {
                if (!e || this.visible) {
                    clearTimeout(this.fadeTimeout), this.fadeTimeout = null;
                    var i = t ? 250 : 500,
                        n = t ? 0 : 300;
                    t = t ? "1" : "0", this.wrapperStyle[a.style.transitionDuration] = i + "ms", this.fadeTimeout = setTimeout(function(t) {
                        this.wrapperStyle.opacity = t, this.visible = +t
                    }.bind(this, t), n)
                }
            }
        }, n.utils = a, "undefined" != typeof module && module.exports ? module.exports = n : "function" == typeof define && define.amd ? define(function() {
            return n
        }) : t.IScroll = n
    }(window, document, Math),
    function(t, e, i, n) {
        var r = t(e);
        t.fn.lazyload = function(n) {
            function s() {
                var e = 0;
                a.each(function() {
                    var i = t(this);
                    if (!l.skip_invisible || i.is(":visible"))
                        if (t.abovethetop(this, l) || t.leftofbegin(this, l));
                        else if (t.belowthefold(this, l) || t.rightoffold(this, l)) {
                        if (++e > l.failure_limit) return !1
                    } else i.trigger("appear"), e = 0
                })
            }
            var o, a = this,
                l = {
                    threshold: 0,
                    failure_limit: 0,
                    event: "scroll",
                    effect: "show",
                    container: e,
                    data_attribute: "original",
                    skip_invisible: !0,
                    appear: null,
                    load: null,
                    placeholder: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"
                };
            return n && (void 0 !== n.failurelimit && (n.failure_limit = n.failurelimit, delete n.failurelimit), void 0 !== n.effectspeed && (n.effect_speed = n.effectspeed, delete n.effectspeed), t.extend(l, n)), o = void 0 === l.container || l.container === e ? r : t(l.container), 0 === l.event.indexOf("scroll") && o.bind(l.event, function() {
                return s()
            }), this.each(function() {
                var e = this,
                    i = t(e);
                e.loaded = !1, (void 0 === i.attr("src") || !1 === i.attr("src")) && i.is("img") && i.attr("src", l.placeholder), i.one("appear", function() {
                    if (!this.loaded) {
                        if (l.appear) {
                            var n = a.length;
                            l.appear.call(e, n, l)
                        }
                        t("<img />").bind("load", function() {
                            var n = i.attr("data-" + l.data_attribute);
                            i.hide(), i.is("img") ? i.attr("src", n) : i.css("background-image", "url('" + n + "')"), i[l.effect](l.effect_speed), e.loaded = !0;
                            var r = t.grep(a, function(t) {
                                return !t.loaded
                            });
                            if (a = t(r), l.load) {
                                var s = a.length;
                                l.load.call(e, s, l)
                            }
                        }).attr("src", i.attr("data-" + l.data_attribute))
                    }
                }), 0 !== l.event.indexOf("scroll") && i.bind(l.event, function() {
                    e.loaded || i.trigger("appear")
                })
            }), r.bind("resize", function() {
                s()
            }), /(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion) && r.bind("pageshow", function(e) {
                e.originalEvent && e.originalEvent.persisted && a.each(function() {
                    t(this).trigger("appear")
                })
            }), t(i).ready(function() {
                s()
            }), this
        }, t.belowthefold = function(i, n) {
            return (void 0 === n.container || n.container === e ? (e.innerHeight ? e.innerHeight : r.height()) + r.scrollTop() : t(n.container).offset().top + t(n.container).height()) <= t(i).offset().top - n.threshold
        }, t.rightoffold = function(i, n) {
            return (void 0 === n.container || n.container === e ? r.width() + r.scrollLeft() : t(n.container).offset().left + t(n.container).width()) <= t(i).offset().left - n.threshold
        }, t.abovethetop = function(i, n) {
            return (void 0 === n.container || n.container === e ? r.scrollTop() : t(n.container).offset().top) >= t(i).offset().top + n.threshold + t(i).height()
        }, t.leftofbegin = function(i, n) {
            return (void 0 === n.container || n.container === e ? r.scrollLeft() : t(n.container).offset().left) >= t(i).offset().left + n.threshold + t(i).width()
        }, t.inviewport = function(e, i) {
            return !(t.rightoffold(e, i) || t.leftofbegin(e, i) || t.belowthefold(e, i) || t.abovethetop(e, i))
        }, t.extend(t.expr[":"], {
            "below-the-fold": function(e) {
                return t.belowthefold(e, {
                    threshold: 0
                })
            },
            "above-the-top": function(e) {
                return !t.belowthefold(e, {
                    threshold: 0
                })
            },
            "right-of-screen": function(e) {
                return t.rightoffold(e, {
                    threshold: 0
                })
            },
            "left-of-screen": function(e) {
                return !t.rightoffold(e, {
                    threshold: 0
                })
            },
            "in-viewport": function(e) {
                return t.inviewport(e, {
                    threshold: 0
                })
            },
            "above-the-fold": function(e) {
                return !t.belowthefold(e, {
                    threshold: 0
                })
            },
            "right-of-fold": function(e) {
                return t.rightoffold(e, {
                    threshold: 0
                })
            },
            "left-of-fold": function(e) {
                return !t.rightoffold(e, {
                    threshold: 0
                })
            }
        })
    }(jQuery, window, document), /*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license */
    function() {
        if (window.matchMedia && window.matchMedia("all").addListener) return !1;
        var t = window.matchMedia,
            e = t("only all").matches,
            i = !1,
            n = 0,
            r = [],
            s = function(e) {
                clearTimeout(n), n = setTimeout(function() {
                    for (var e = 0, i = r.length; e < i; e++) {
                        var n = r[e].mql,
                            s = r[e].listeners || [],
                            o = t(n.media).matches;
                        if (o !== n.matches) {
                            n.matches = o;
                            for (var a = 0, l = s.length; a < l; a++) s[a].call(window, n)
                        }
                    }
                }, 30)
            };
        window.matchMedia = function(n) {
            var o = t(n),
                a = [],
                l = 0;
            return o.addListener = function(t) {
                e && (i || (i = !0, window.addEventListener("resize", s, !0)), 0 === l && (l = r.push({
                    mql: o,
                    listeners: a
                })), a.push(t))
            }, o.removeListener = function(t) {
                for (var e = 0, i = a.length; e < i; e++) a[e] === t && a.splice(e, 1)
            }, o
        }
    }(), /*! matchMedia() polyfill - Test a CSS media type/query in JS. Authors & copyright (c) 2012: Scott Jehl, Paul Irish, Nicholas Zakas, David Knight. Dual MIT/BSD license */
    window.matchMedia || (window.matchMedia = function() {
        "use strict";
        var t = window.styleMedia || window.media;
        if (!t) {
            var e = document.createElement("style"),
                i = document.getElementsByTagName("script")[0],
                n = null;
            e.type = "text/css", e.id = "matchmediajs-test", i ? i.parentNode.insertBefore(e, i) : document.head.appendChild(e), n = "getComputedStyle" in window && window.getComputedStyle(e, null) || e.currentStyle, t = {
                matchMedium: function(t) {
                    var i = "@media " + t + "{ #matchmediajs-test { width: 1px; } }";
                    return e.styleSheet ? e.styleSheet.cssText = i : e.textContent = i, "1px" === n.width
                }
            }
        }
        return function(e) {
            return {
                matches: t.matchMedium(e || "all"),
                media: e || "all"
            }
        }
    }()), /*! matchMedia() polyfill addListener/removeListener extension. Author & copyright (c) 2012: Scott Jehl. Dual MIT/BSD license */
    function() {
        if (window.matchMedia && window.matchMedia("all").addListener) return !1;
        var t = window.matchMedia,
            e = t("only all").matches,
            i = !1,
            n = 0,
            r = [],
            s = function(e) {
                clearTimeout(n), n = setTimeout(function() {
                    for (var e = 0, i = r.length; e < i; e++) {
                        var n = r[e].mql,
                            s = r[e].listeners || [],
                            o = t(n.media).matches;
                        if (o !== n.matches) {
                            n.matches = o;
                            for (var a = 0, l = s.length; a < l; a++) s[a].call(window, n)
                        }
                    }
                }, 30)
            };
        window.matchMedia = function(n) {
            var o = t(n),
                a = [],
                l = 0;
            return o.addListener = function(t) {
                e && (i || (i = !0, window.addEventListener("resize", s, !0)), 0 === l && (l = r.push({
                    mql: o,
                    listeners: a
                })), a.push(t))
            }, o.removeListener = function(t) {
                for (var e = 0, i = a.length; e < i; e++) a[e] === t && a.splice(e, 1)
            }, o
        }
    }(),
    function t(e, i, n) {
        function r(o, a) {
            if (!i[o]) {
                if (!e[o]) {
                    var l = "function" == typeof require && require;
                    if (!a && l) return l(o, !0);
                    if (s) return s(o, !0);
                    var h = new Error("Cannot find module '" + o + "'");
                    throw h.code = "MODULE_NOT_FOUND", h
                }
                var c = i[o] = {
                    exports: {}
                };
                e[o][0].call(c.exports, function(t) {
                    var i = e[o][1][t];
                    return r(i || t)
                }, c, c.exports, t, e, i, n)
            }
            return i[o].exports
        }
        for (var s = "function" == typeof require && require, o = 0; o < n.length; o++) r(n[o]);
        return r
    }({
        1: [function(t, e) {
            function i() {}
            var n = e.exports = {};
            n.nextTick = function() {
                var t = "undefined" != typeof window && window.setImmediate,
                    e = "undefined" != typeof window && window.postMessage && window.addEventListener;
                if (t) return function(t) {
                    return window.setImmediate(t)
                };
                if (e) {
                    var i = [];
                    return window.addEventListener("message", function(t) {
                            var e = t.source;
                            if ((e === window || null === e) && "process-tick" === t.data && (t.stopPropagation(), i.length > 0)) {
                                i.shift()()
                            }
                        }, !0),
                        function(t) {
                            i.push(t), window.postMessage("process-tick", "*")
                        }
                }
                return function(t) {
                    setTimeout(t, 0)
                }
            }(), n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.on = i, n.addListener = i, n.once = i, n.off = i, n.removeListener = i, n.removeAllListeners = i, n.emit = i, n.binding = function() {
                throw new Error("process.binding is not supported")
            }, n.cwd = function() {
                return "/"
            }, n.chdir = function() {
                throw new Error("process.chdir is not supported")
            }
        }, {}],
        2: [function(t, e) {
            "use strict";

            function i(t, e, i) {
                var n = !1;
                try {
                    t(function(t) {
                        n || (n = !0, e(t))
                    }, function(t) {
                        n || (n = !0, i(t))
                    })
                } catch (t) {
                    if (n) return;
                    n = !0, i(t)
                }
            }
            var n = t("asap");
            e.exports = function(t) {
                function e(t) {
                    return null === a ? void h.push(t) : void n(function() {
                        var e = a ? t.onFulfilled : t.onRejected;
                        if (null !== e) {
                            var i;
                            try {
                                i = e(l)
                            } catch (e) {
                                return void t.reject(e)
                            }
                            t.resolve(i)
                        } else(a ? t.resolve : t.reject)(l)
                    })
                }

                function r(t) {
                    try {
                        if (t === c) throw new TypeError("A promise cannot be resolved with itself.");
                        if (t && ("object" == typeof t || "function" == typeof t)) {
                            var e = t.then;
                            if ("function" == typeof e) return void i(e.bind(t), r, s)
                        }
                        a = !0, l = t, o()
                    } catch (t) {
                        s(t)
                    }
                }

                function s(t) {
                    a = !1, l = t, o()
                }

                function o() {
                    for (var t = 0, i = h.length; i > t; t++) e(h[t]);
                    h = null
                }
                if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof t) throw new TypeError("not a function");
                var a = null,
                    l = null,
                    h = [],
                    c = this;
                this.then = function(t, i) {
                    return new c.constructor(function(n, r) {
                        e(new function(t, e, i, n) {
                            this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.resolve = i, this.reject = n
                        }(t, i, n, r))
                    })
                }, i(t, r, s)
            }
        }, {
            asap: 4
        }],
        3: [function(t, e) {
            "use strict";

            function i(t) {
                this.then = function(e) {
                    return "function" != typeof e ? this : new n(function(i, n) {
                        r(function() {
                            try {
                                i(e(t))
                            } catch (t) {
                                n(t)
                            }
                        })
                    })
                }
            }
            var n = t("./core.js"),
                r = t("asap");
            e.exports = n, i.prototype = n.prototype;
            var s = new i(!0),
                o = new i(!1),
                a = new i(null),
                l = new i(void 0),
                h = new i(0),
                c = new i("");
            n.resolve = function(t) {
                if (t instanceof n) return t;
                if (null === t) return a;
                if (void 0 === t) return l;
                if (!0 === t) return s;
                if (!1 === t) return o;
                if (0 === t) return h;
                if ("" === t) return c;
                if ("object" == typeof t || "function" == typeof t) try {
                    var e = t.then;
                    if ("function" == typeof e) return new n(e.bind(t))
                } catch (t) {
                    return new n(function(e, i) {
                        i(t)
                    })
                }
                return new i(t)
            }, n.all = function(t) {
                var e = Array.prototype.slice.call(t);
                return new n(function(t, i) {
                    function n(s, o) {
                        try {
                            if (o && ("object" == typeof o || "function" == typeof o)) {
                                var a = o.then;
                                if ("function" == typeof a) return void a.call(o, function(t) {
                                    n(s, t)
                                }, i)
                            }
                            e[s] = o, 0 == --r && t(e)
                        } catch (t) {
                            i(t)
                        }
                    }
                    if (0 === e.length) return t([]);
                    for (var r = e.length, s = 0; s < e.length; s++) n(s, e[s])
                })
            }, n.reject = function(t) {
                return new n(function(e, i) {
                    i(t)
                })
            }, n.race = function(t) {
                return new n(function(e, i) {
                    t.forEach(function(t) {
                        n.resolve(t).then(e, i)
                    })
                })
            }, n.prototype.catch = function(t) {
                return this.then(null, t)
            }
        }, {
            "./core.js": 2,
            asap: 4
        }],
        4: [function(t, e) {
            (function(t) {
                function i() {
                    for (; n.next;) {
                        var t = (n = n.next).task;
                        n.task = void 0;
                        var e = n.domain;
                        e && (n.domain = void 0, e.enter());
                        try {
                            t()
                        } catch (t) {
                            if (a) throw e && e.exit(), setTimeout(i, 0), e && e.enter(), t;
                            setTimeout(function() {
                                throw t
                            }, 0)
                        }
                        e && e.exit()
                    }
                    s = !1
                }
                var n = {
                        task: void 0,
                        next: null
                    },
                    r = n,
                    s = !1,
                    o = void 0,
                    a = !1;
                if (void 0 !== t && t.nextTick) a = !0, o = function() {
                    t.nextTick(i)
                };
                else if ("function" == typeof setImmediate) o = "undefined" != typeof window ? setImmediate.bind(window, i) : function() {
                    setImmediate(i)
                };
                else if ("undefined" != typeof MessageChannel) {
                    var l = new MessageChannel;
                    l.port1.onmessage = i, o = function() {
                        l.port2.postMessage(0)
                    }
                } else o = function() {
                    setTimeout(i, 0)
                };
                e.exports = function(e) {
                    r = r.next = {
                        task: e,
                        domain: a && t.domain,
                        next: null
                    }, s || (s = !0, o())
                }
            }).call(this, t("_process"))
        }, {
            _process: 1
        }],
        5: [function() {
            "function" != typeof Promise.prototype.done && (Promise.prototype.done = function() {
                (arguments.length ? this.then.apply(this, arguments) : this).then(null, function(t) {
                    setTimeout(function() {
                        throw t
                    }, 0)
                })
            })
        }, {}],
        6: [function(t) {
            t("asap"), "undefined" == typeof Promise && (Promise = t("./lib/core.js"), t("./lib/es6-extensions.js")), t("./polyfill-done.js")
        }, {
            "./lib/core.js": 2,
            "./lib/es6-extensions.js": 3,
            "./polyfill-done.js": 5,
            asap: 4
        }]
    }, {}, [6]);

/**
 * Swiper 3.4.2
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 *
 * http://www.idangero.us/swiper/
 *
 * Copyright 2017, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: March 10, 2017
 */
! function() {
    "use strict";
    var e, a = function(s, i) {
        function r(e) {
            return Math.floor(e)
        }

        function n() {
            var e = T.params.autoplay,
                a = T.slides.eq(T.activeIndex);
            a.attr("data-swiper-autoplay") && (e = a.attr("data-swiper-autoplay") || T.params.autoplay), T.autoplayTimeoutId = setTimeout(function() {
                T.params.loop ? (T.fixLoop(), T._slideNext(), T.emit("onAutoplay", T)) : T.isEnd ? i.autoplayStopOnLast ? T.stopAutoplay() : (T._slideTo(0), T.emit("onAutoplay", T)) : (T._slideNext(), T.emit("onAutoplay", T))
            }, e)
        }

        function o(a, t) {
            var s = e(a.target);
            if (!s.is(t))
                if ("string" == typeof t) s = s.parents(t);
                else if (t.nodeType) {
                var i;
                return s.parents().each(function(e, a) {
                    a === t && (i = t)
                }), i ? t : void 0
            }
            if (0 !== s.length) return s[0]
        }

        function l(e, a) {
            a = a || {};
            var t = window.MutationObserver || window.WebkitMutationObserver,
                s = new t(function(e) {
                    e.forEach(function(e) {
                        T.onResize(!0), T.emit("onObserverUpdate", T, e)
                    })
                });
            s.observe(e, {
                attributes: void 0 === a.attributes || a.attributes,
                childList: void 0 === a.childList || a.childList,
                characterData: void 0 === a.characterData || a.characterData
            }), T.observers.push(s)
        }

        function p(e) {
            e.originalEvent && (e = e.originalEvent);
            var a = e.keyCode || e.charCode;
            if (!T.params.allowSwipeToNext && (T.isHorizontal() && 39 === a || !T.isHorizontal() && 40 === a)) return !1;
            if (!T.params.allowSwipeToPrev && (T.isHorizontal() && 37 === a || !T.isHorizontal() && 38 === a)) return !1;
            if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                if (37 === a || 39 === a || 38 === a || 40 === a) {
                    var t = !1;
                    if (T.container.parents("." + T.params.slideClass).length > 0 && 0 === T.container.parents("." + T.params.slideActiveClass).length) return;
                    var s = {
                            left: window.pageXOffset,
                            top: window.pageYOffset
                        },
                        i = window.innerWidth,
                        r = window.innerHeight,
                        n = T.container.offset();
                    T.rtl && (n.left = n.left - T.container[0].scrollLeft);
                    for (var o = [
                            [n.left, n.top],
                            [n.left + T.width, n.top],
                            [n.left, n.top + T.height],
                            [n.left + T.width, n.top + T.height]
                        ], l = 0; l < o.length; l++) {
                        var p = o[l];
                        p[0] >= s.left && p[0] <= s.left + i && p[1] >= s.top && p[1] <= s.top + r && (t = !0)
                    }
                    if (!t) return
                }
                T.isHorizontal() ? (37 !== a && 39 !== a || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), (39 === a && !T.rtl || 37 === a && T.rtl) && T.slideNext(), (37 === a && !T.rtl || 39 === a && T.rtl) && T.slidePrev()) : (38 !== a && 40 !== a || (e.preventDefault ? e.preventDefault() : e.returnValue = !1), 40 === a && T.slideNext(), 38 === a && T.slidePrev()), T.emit("onKeyPress", T, a)
            }
        }

        function d(e) {
            var a = 0,
                t = 0,
                s = 0,
                i = 0;
            return "detail" in e && (t = e.detail), "wheelDelta" in e && (t = -e.wheelDelta / 120), "wheelDeltaY" in e && (t = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (a = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (a = t, t = 0), s = 10 * a, i = 10 * t, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (s = e.deltaX), (s || i) && e.deltaMode && (1 === e.deltaMode ? (s *= 40, i *= 40) : (s *= 800, i *= 800)), s && !a && (a = s < 1 ? -1 : 1), i && !t && (t = i < 1 ? -1 : 1), {
                spinX: a,
                spinY: t,
                pixelX: s,
                pixelY: i
            }
        }

        function u(e) {
            e.originalEvent && (e = e.originalEvent);
            var a = 0,
                t = T.rtl ? -1 : 1,
                s = d(e);
            if (T.params.mousewheelForceToAxis)
                if (T.isHorizontal()) {
                    if (!(Math.abs(s.pixelX) > Math.abs(s.pixelY))) return;
                    a = s.pixelX * t
                } else {
                    if (!(Math.abs(s.pixelY) > Math.abs(s.pixelX))) return;
                    a = s.pixelY
                }
            else a = Math.abs(s.pixelX) > Math.abs(s.pixelY) ? -s.pixelX * t : -s.pixelY;
            if (0 !== a) {
                if (T.params.mousewheelInvert && (a = -a), T.params.freeMode) {
                    var i = T.getWrapperTranslate() + a * T.params.mousewheelSensitivity,
                        r = T.isBeginning,
                        n = T.isEnd;
                    if (i >= T.minTranslate() && (i = T.minTranslate()), i <= T.maxTranslate() && (i = T.maxTranslate()), T.setWrapperTransition(0), T.setWrapperTranslate(i), T.updateProgress(), T.updateActiveIndex(), (!r && T.isBeginning || !n && T.isEnd) && T.updateClasses(), T.params.freeModeSticky ? (clearTimeout(T.mousewheel.timeout), T.mousewheel.timeout = setTimeout(function() {
                            T.slideReset()
                        }, 300)) : T.params.lazyLoading && T.lazy && T.lazy.load(), T.emit("onScroll", T, e), T.params.autoplay && T.params.autoplayDisableOnInteraction && T.stopAutoplay(), 0 === i || i === T.maxTranslate()) return
                } else {
                    if ((new window.Date).getTime() - T.mousewheel.lastScrollTime > 60)
                        if (a < 0)
                            if (T.isEnd && !T.params.loop || T.animating) {
                                if (T.params.mousewheelReleaseOnEdges) return !0
                            } else T.slideNext(), T.emit("onScroll", T, e);
                    else if (T.isBeginning && !T.params.loop || T.animating) {
                        if (T.params.mousewheelReleaseOnEdges) return !0
                    } else T.slidePrev(), T.emit("onScroll", T, e);
                    T.mousewheel.lastScrollTime = (new window.Date).getTime()
                }
                return e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1
            }
        }

        function c(a, t) {
            a = e(a);
            var s, i, r, n = T.rtl ? -1 : 1;
            s = a.attr("data-swiper-parallax") || "0", i = a.attr("data-swiper-parallax-x"), r = a.attr("data-swiper-parallax-y"), i || r ? (i = i || "0", r = r || "0") : T.isHorizontal() ? (i = s, r = "0") : (r = s, i = "0"), i = i.indexOf("%") >= 0 ? parseInt(i, 10) * t * n + "%" : i * t * n + "px", r = r.indexOf("%") >= 0 ? parseInt(r, 10) * t + "%" : r * t + "px", a.transform("translate3d(" + i + ", " + r + ",0px)")
        }

        function m(e) {
            return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e), e
        }
        if (!(this instanceof a)) return new a(s, i);
        var h = {
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                autoplay: !1,
                autoplayDisableOnInteraction: !0,
                autoplayStopOnLast: !1,
                iOSEdgeSwipeDetection: !1,
                iOSEdgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeMomentumVelocityRatio: 1,
                freeModeSticky: !1,
                freeModeMinimumVelocity: .02,
                autoHeight: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                coverflow: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                },
                flip: {
                    slideShadows: !0,
                    limitRotation: !0
                },
                cube: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                },
                fade: {
                    crossFade: !1
                },
                parallax: !1,
                zoom: !1,
                zoomMax: 3,
                zoomMin: 1,
                zoomToggle: !0,
                scrollbar: null,
                scrollbarHide: !0,
                scrollbarDraggable: !1,
                scrollbarSnapOnRelease: !1,
                keyboardControl: !1,
                mousewheelControl: !1,
                mousewheelReleaseOnEdges: !1,
                mousewheelInvert: !1,
                mousewheelForceToAxis: !1,
                mousewheelSensitivity: 1,
                mousewheelEventsTarged: "container",
                hashnav: !1,
                hashnavWatchState: !1,
                history: !1,
                replaceState: !1,
                breakpoints: void 0,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                onlyExternal: !1,
                threshold: 0,
                touchMoveStopPropagation: !0,
                touchReleaseOnEdges: !1,
                uniqueNavElements: !0,
                pagination: null,
                paginationElement: "span",
                paginationClickable: !1,
                paginationHide: !1,
                paginationBulletRender: null,
                paginationProgressRender: null,
                paginationFractionRender: null,
                paginationCustomRender: null,
                paginationType: "bullets",
                resistance: !0,
                resistanceRatio: .85,
                nextButton: null,
                prevButton: null,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                lazyLoading: !1,
                lazyLoadingInPrevNext: !1,
                lazyLoadingInPrevNextAmount: 1,
                lazyLoadingOnTransitionStart: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null,
                control: void 0,
                controlInverse: !1,
                controlBy: "slide",
                normalizeSlideIndex: !0,
                allowSwipeToPrev: !0,
                allowSwipeToNext: !0,
                swipeHandler: null,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                passiveListeners: !0,
                containerModifierClass: "swiper-container-",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideDuplicateActiveClass: "swiper-slide-duplicate-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slideDuplicateNextClass: "swiper-slide-duplicate-next",
                slidePrevClass: "swiper-slide-prev",
                slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
                wrapperClass: "swiper-wrapper",
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                buttonDisabledClass: "swiper-button-disabled",
                paginationCurrentClass: "swiper-pagination-current",
                paginationTotalClass: "swiper-pagination-total",
                paginationHiddenClass: "swiper-pagination-hidden",
                paginationProgressbarClass: "swiper-pagination-progressbar",
                paginationClickableClass: "swiper-pagination-clickable",
                paginationModifierClass: "swiper-pagination-",
                lazyLoadingClass: "swiper-lazy",
                lazyStatusLoadingClass: "swiper-lazy-loading",
                lazyStatusLoadedClass: "swiper-lazy-loaded",
                lazyPreloaderClass: "swiper-lazy-preloader",
                notificationClass: "swiper-notification",
                preloaderClass: "preloader",
                zoomContainerClass: "swiper-zoom-container",
                observer: !1,
                observeParents: !1,
                a11y: !1,
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                runCallbacksOnInit: !0
            },
            g = i && i.virtualTranslate;
        i = i || {};
        var f = {};
        for (var v in i)
            if ("object" != typeof i[v] || null === i[v] || (i[v].nodeType || i[v] === window || i[v] === document || void 0 !== t && i[v] instanceof t || "undefined" != typeof jQuery && i[v] instanceof jQuery)) f[v] = i[v];
            else {
                f[v] = {};
                for (var w in i[v]) f[v][w] = i[v][w]
            } for (var y in h)
            if (void 0 === i[y]) i[y] = h[y];
            else if ("object" == typeof i[y])
            for (var x in h[y]) void 0 === i[y][x] && (i[y][x] = h[y][x]);
        var T = this;
        if (T.params = i, T.originalParams = f, T.classNames = [], void 0 !== e && void 0 !== t && (e = t), (void 0 !== e || (e = void 0 === t ? window.Dom7 || window.Zepto || window.jQuery : t)) && (T.$ = e, T.currentBreakpoint = void 0, T.getActiveBreakpoint = function() {
                if (!T.params.breakpoints) return !1;
                var e, a = !1,
                    t = [];
                for (e in T.params.breakpoints) T.params.breakpoints.hasOwnProperty(e) && t.push(e);
                t.sort(function(e, a) {
                    return parseInt(e, 10) > parseInt(a, 10)
                });
                for (var s = 0; s < t.length; s++)(e = t[s]) >= window.innerWidth && !a && (a = e);
                return a || "max"
            }, T.setBreakpoint = function() {
                var e = T.getActiveBreakpoint();
                if (e && T.currentBreakpoint !== e) {
                    var a = e in T.params.breakpoints ? T.params.breakpoints[e] : T.originalParams,
                        t = T.params.loop && a.slidesPerView !== T.params.slidesPerView;
                    for (var s in a) T.params[s] = a[s];
                    T.currentBreakpoint = e, t && T.destroyLoop && T.reLoop(!0)
                }
            }, T.params.breakpoints && T.setBreakpoint(), T.container = e(s), 0 !== T.container.length)) {
            if (T.container.length > 1) {
                var b = [];
                return T.container.each(function() {
                    b.push(new a(this, i))
                }), b
            }
            T.container[0].swiper = T, T.container.data("swiper", T), T.classNames.push(T.params.containerModifierClass + T.params.direction), T.params.freeMode && T.classNames.push(T.params.containerModifierClass + "free-mode"), T.support.flexbox || (T.classNames.push(T.params.containerModifierClass + "no-flexbox"), T.params.slidesPerColumn = 1), T.params.autoHeight && T.classNames.push(T.params.containerModifierClass + "autoheight"), (T.params.parallax || T.params.watchSlidesVisibility) && (T.params.watchSlidesProgress = !0), T.params.touchReleaseOnEdges && (T.params.resistanceRatio = 0), ["cube", "coverflow", "flip"].indexOf(T.params.effect) >= 0 && (T.support.transforms3d ? (T.params.watchSlidesProgress = !0, T.classNames.push(T.params.containerModifierClass + "3d")) : T.params.effect = "slide"), "slide" !== T.params.effect && T.classNames.push(T.params.containerModifierClass + T.params.effect), "cube" === T.params.effect && (T.params.resistanceRatio = 0, T.params.slidesPerView = 1, T.params.slidesPerColumn = 1, T.params.slidesPerGroup = 1, T.params.centeredSlides = !1, T.params.spaceBetween = 0, T.params.virtualTranslate = !0), "fade" !== T.params.effect && "flip" !== T.params.effect || (T.params.slidesPerView = 1, T.params.slidesPerColumn = 1, T.params.slidesPerGroup = 1, T.params.watchSlidesProgress = !0, T.params.spaceBetween = 0, void 0 === g && (T.params.virtualTranslate = !0)), T.params.grabCursor && T.support.touch && (T.params.grabCursor = !1), T.wrapper = T.container.children("." + T.params.wrapperClass), T.params.pagination && (T.paginationContainer = e(T.params.pagination), T.params.uniqueNavElements && "string" == typeof T.params.pagination && T.paginationContainer.length > 1 && 1 === T.container.find(T.params.pagination).length && (T.paginationContainer = T.container.find(T.params.pagination)), "bullets" === T.params.paginationType && T.params.paginationClickable ? T.paginationContainer.addClass(T.params.paginationModifierClass + "clickable") : T.params.paginationClickable = !1, T.paginationContainer.addClass(T.params.paginationModifierClass + T.params.paginationType)), (T.params.nextButton || T.params.prevButton) && (T.params.nextButton && (T.nextButton = e(T.params.nextButton), T.params.uniqueNavElements && "string" == typeof T.params.nextButton && T.nextButton.length > 1 && 1 === T.container.find(T.params.nextButton).length && (T.nextButton = T.container.find(T.params.nextButton))), T.params.prevButton && (T.prevButton = e(T.params.prevButton), T.params.uniqueNavElements && "string" == typeof T.params.prevButton && T.prevButton.length > 1 && 1 === T.container.find(T.params.prevButton).length && (T.prevButton = T.container.find(T.params.prevButton)))), T.isHorizontal = function() {
                    return "horizontal" === T.params.direction
                }, T.rtl = T.isHorizontal() && ("rtl" === T.container[0].dir.toLowerCase() || "rtl" === T.container.css("direction")), T.rtl && T.classNames.push(T.params.containerModifierClass + "rtl"), T.rtl && (T.wrongRTL = "-webkit-box" === T.wrapper.css("display")), T.params.slidesPerColumn > 1 && T.classNames.push(T.params.containerModifierClass + "multirow"), T.device.android && T.classNames.push(T.params.containerModifierClass + "android"), T.container.addClass(T.classNames.join(" ")), T.translate = 0, T.progress = 0, T.velocity = 0, T.lockSwipeToNext = function() {
                    T.params.allowSwipeToNext = !1, T.params.allowSwipeToPrev === !1 && T.params.grabCursor && T.unsetGrabCursor()
                }, T.lockSwipeToPrev = function() {
                    T.params.allowSwipeToPrev = !1, T.params.allowSwipeToNext === !1 && T.params.grabCursor && T.unsetGrabCursor()
                }, T.lockSwipes = function() {
                    T.params.allowSwipeToNext = T.params.allowSwipeToPrev = !1, T.params.grabCursor && T.unsetGrabCursor()
                }, T.unlockSwipeToNext = function() {
                    T.params.allowSwipeToNext = !0, T.params.allowSwipeToPrev === !0 && T.params.grabCursor && T.setGrabCursor()
                }, T.unlockSwipeToPrev = function() {
                    T.params.allowSwipeToPrev = !0, T.params.allowSwipeToNext === !0 && T.params.grabCursor && T.setGrabCursor()
                }, T.unlockSwipes = function() {
                    T.params.allowSwipeToNext = T.params.allowSwipeToPrev = !0, T.params.grabCursor && T.setGrabCursor()
                }, T.setGrabCursor = function(e) {
                    T.container[0].style.cursor = "move", T.container[0].style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", T.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab", T.container[0].style.cursor = e ? "grabbing" : "grab"
                }, T.unsetGrabCursor = function() {
                    T.container[0].style.cursor = ""
                }, T.params.grabCursor && T.setGrabCursor(), T.imagesToLoad = [], T.imagesLoaded = 0, T.loadImage = function(e, a, t, s, i, r) {
                    function n() {
                        r && r()
                    }
                    var o;
                    e.complete && i ? n() : a ? (o = new window.Image, o.onload = n, o.onerror = n, s && (o.sizes = s), t && (o.srcset = t), a && (o.src = a)) : n()
                }, T.preloadImages = function() {
                    function e() {
                        void 0 !== T && null !== T && T && (void 0 !== T.imagesLoaded && T.imagesLoaded++, T.imagesLoaded === T.imagesToLoad.length && (T.params.updateOnImagesReady && T.update(), T.emit("onImagesReady", T)))
                    }
                    T.imagesToLoad = T.container.find("img");
                    for (var a = 0; a < T.imagesToLoad.length; a++) T.loadImage(T.imagesToLoad[a], T.imagesToLoad[a].currentSrc || T.imagesToLoad[a].getAttribute("src"), T.imagesToLoad[a].srcset || T.imagesToLoad[a].getAttribute("srcset"), T.imagesToLoad[a].sizes || T.imagesToLoad[a].getAttribute("sizes"), !0, e)
                }, T.autoplayTimeoutId = void 0, T.autoplaying = !1, T.autoplayPaused = !1, T.startAutoplay = function() {
                    return void 0 === T.autoplayTimeoutId && (!!T.params.autoplay && (!T.autoplaying && (T.autoplaying = !0, T.emit("onAutoplayStart", T), void n())))
                }, T.stopAutoplay = function(e) {
                    T.autoplayTimeoutId && (T.autoplayTimeoutId && clearTimeout(T.autoplayTimeoutId), T.autoplaying = !1, T.autoplayTimeoutId = void 0, T.emit("onAutoplayStop", T))
                }, T.pauseAutoplay = function(e) {
                    T.autoplayPaused || (T.autoplayTimeoutId && clearTimeout(T.autoplayTimeoutId), T.autoplayPaused = !0, 0 === e ? (T.autoplayPaused = !1, n()) : T.wrapper.transitionEnd(function() {
                        T && (T.autoplayPaused = !1, T.autoplaying ? n() : T.stopAutoplay())
                    }))
                }, T.minTranslate = function() {
                    return -T.snapGrid[0]
                }, T.maxTranslate = function() {
                    return -T.snapGrid[T.snapGrid.length - 1]
                }, T.updateAutoHeight = function() {
                    var e, a = [],
                        t = 0;
                    if ("auto" !== T.params.slidesPerView && T.params.slidesPerView > 1)
                        for (e = 0; e < Math.ceil(T.params.slidesPerView); e++) {
                            var s = T.activeIndex + e;
                            if (s > T.slides.length) break;
                            a.push(T.slides.eq(s)[0])
                        } else a.push(T.slides.eq(T.activeIndex)[0]);
                    for (e = 0; e < a.length; e++)
                        if (void 0 !== a[e]) {
                            var i = a[e].offsetHeight;
                            t = i > t ? i : t
                        } t && T.wrapper.css("height", t + "px")
                }, T.updateContainerSize = function() {
                    var e, a;
                    e = void 0 !== T.params.width ? T.params.width : T.container[0].clientWidth, a = void 0 !== T.params.height ? T.params.height : T.container[0].clientHeight, 0 === e && T.isHorizontal() || 0 === a && !T.isHorizontal() || (e = e - parseInt(T.container.css("padding-left"), 10) - parseInt(T.container.css("padding-right"), 10), a = a - parseInt(T.container.css("padding-top"), 10) - parseInt(T.container.css("padding-bottom"), 10), T.width = e, T.height = a, T.size = T.isHorizontal() ? T.width : T.height)
                }, T.updateSlidesSize = function() {
                    T.slides = T.wrapper.children("." + T.params.slideClass), T.snapGrid = [], T.slidesGrid = [], T.slidesSizesGrid = [];
                    var e, a = T.params.spaceBetween,
                        t = -T.params.slidesOffsetBefore,
                        s = 0,
                        i = 0;
                    if (void 0 !== T.size) {
                        "string" == typeof a && a.indexOf("%") >= 0 && (a = parseFloat(a.replace("%", "")) / 100 * T.size), T.virtualSize = -a, T.rtl ? T.slides.css({
                            marginLeft: "",
                            marginTop: ""
                        }) : T.slides.css({
                            marginRight: "",
                            marginBottom: ""
                        });
                        var n;
                        T.params.slidesPerColumn > 1 && (n = Math.floor(T.slides.length / T.params.slidesPerColumn) === T.slides.length / T.params.slidesPerColumn ? T.slides.length : Math.ceil(T.slides.length / T.params.slidesPerColumn) * T.params.slidesPerColumn, "auto" !== T.params.slidesPerView && "row" === T.params.slidesPerColumnFill && (n = Math.max(n, T.params.slidesPerView * T.params.slidesPerColumn)));
                        var o, l = T.params.slidesPerColumn,
                            p = n / l,
                            d = p - (T.params.slidesPerColumn * p - T.slides.length);
                        for (e = 0; e < T.slides.length; e++) {
                            o = 0;
                            var u = T.slides.eq(e);
                            if (T.params.slidesPerColumn > 1) {
                                var c, m, h;
                                "column" === T.params.slidesPerColumnFill ? (m = Math.floor(e / l), h = e - m * l, (m > d || m === d && h === l - 1) && ++h >= l && (h = 0, m++), c = m + h * n / l, u.css({
                                    "-webkit-box-ordinal-group": c,
                                    "-moz-box-ordinal-group": c,
                                    "-ms-flex-order": c,
                                    "-webkit-order": c,
                                    order: c
                                })) : (h = Math.floor(e / p), m = e - h * p), u.css("margin-" + (T.isHorizontal() ? "top" : "left"), 0 !== h && T.params.spaceBetween && T.params.spaceBetween + "px").attr("data-swiper-column", m).attr("data-swiper-row", h)
                            }
                            "none" !== u.css("display") && ("auto" === T.params.slidesPerView ? (o = T.isHorizontal() ? u.outerWidth(!0) : u.outerHeight(!0), T.params.roundLengths && (o = r(o))) : (o = (T.size - (T.params.slidesPerView - 1) * a) / T.params.slidesPerView, T.params.roundLengths && (o = r(o)), T.isHorizontal() ? T.slides[e].style.width = o + "px" : T.slides[e].style.height = o + "px"), T.slides[e].swiperSlideSize = o, T.slidesSizesGrid.push(o), T.params.centeredSlides ? (t = t + o / 2 + s / 2 + a, 0 === s && 0 !== e && (t = t - T.size / 2 - a), 0 === e && (t = t - T.size / 2 - a), Math.abs(t) < .001 && (t = 0), i % T.params.slidesPerGroup == 0 && T.snapGrid.push(t), T.slidesGrid.push(t)) : (i % T.params.slidesPerGroup == 0 && T.snapGrid.push(t), T.slidesGrid.push(t), t = t + o + a), T.virtualSize += o + a, s = o, i++)
                        }
                        T.virtualSize = Math.max(T.virtualSize, T.size) + T.params.slidesOffsetAfter;
                        var g;
                        if (T.rtl && T.wrongRTL && ("slide" === T.params.effect || "coverflow" === T.params.effect) && T.wrapper.css({
                                width: T.virtualSize + T.params.spaceBetween + "px"
                            }), T.support.flexbox && !T.params.setWrapperSize || (T.isHorizontal() ? T.wrapper.css({
                                width: T.virtualSize + T.params.spaceBetween + "px"
                            }) : T.wrapper.css({
                                height: T.virtualSize + T.params.spaceBetween + "px"
                            })), T.params.slidesPerColumn > 1 && (T.virtualSize = (o + T.params.spaceBetween) * n, T.virtualSize = Math.ceil(T.virtualSize / T.params.slidesPerColumn) - T.params.spaceBetween, T.isHorizontal() ? T.wrapper.css({
                                width: T.virtualSize + T.params.spaceBetween + "px"
                            }) : T.wrapper.css({
                                height: T.virtualSize + T.params.spaceBetween + "px"
                            }), T.params.centeredSlides)) {
                            for (g = [], e = 0; e < T.snapGrid.length; e++) T.snapGrid[e] < T.virtualSize + T.snapGrid[0] && g.push(T.snapGrid[e]);
                            T.snapGrid = g
                        }
                        if (!T.params.centeredSlides) {
                            for (g = [], e = 0; e < T.snapGrid.length; e++) T.snapGrid[e] <= T.virtualSize - T.size && g.push(T.snapGrid[e]);
                            T.snapGrid = g, Math.floor(T.virtualSize - T.size) - Math.floor(T.snapGrid[T.snapGrid.length - 1]) > 1 && T.snapGrid.push(T.virtualSize - T.size)
                        }
                        0 === T.snapGrid.length && (T.snapGrid = [0]), 0 !== T.params.spaceBetween && (T.isHorizontal() ? T.rtl ? T.slides.css({
                            marginLeft: a + "px"
                        }) : T.slides.css({
                            marginRight: a + "px"
                        }) : T.slides.css({
                            marginBottom: a + "px"
                        })), T.params.watchSlidesProgress && T.updateSlidesOffset()
                    }
                }, T.updateSlidesOffset = function() {
                    for (var e = 0; e < T.slides.length; e++) T.slides[e].swiperSlideOffset = T.isHorizontal() ? T.slides[e].offsetLeft : T.slides[e].offsetTop
                }, T.currentSlidesPerView = function() {
                    var e, a, t = 1;
                    if (T.params.centeredSlides) {
                        var s, i = T.slides[T.activeIndex].swiperSlideSize;
                        for (e = T.activeIndex + 1; e < T.slides.length; e++) T.slides[e] && !s && (i += T.slides[e].swiperSlideSize, t++, i > T.size && (s = !0));
                        for (a = T.activeIndex - 1; a >= 0; a--) T.slides[a] && !s && (i += T.slides[a].swiperSlideSize, t++, i > T.size && (s = !0))
                    } else
                        for (e = T.activeIndex + 1; e < T.slides.length; e++) T.slidesGrid[e] - T.slidesGrid[T.activeIndex] < T.size && t++;
                    return t
                }, T.updateSlidesProgress = function(e) {
                    if (void 0 === e && (e = T.translate || 0), 0 !== T.slides.length) {
                        void 0 === T.slides[0].swiperSlideOffset && T.updateSlidesOffset();
                        var a = -e;
                        T.rtl && (a = e), T.slides.removeClass(T.params.slideVisibleClass);
                        for (var t = 0; t < T.slides.length; t++) {
                            var s = T.slides[t],
                                i = (a + (T.params.centeredSlides ? T.minTranslate() : 0) - s.swiperSlideOffset) / (s.swiperSlideSize + T.params.spaceBetween);
                            if (T.params.watchSlidesVisibility) {
                                var r = -(a - s.swiperSlideOffset),
                                    n = r + T.slidesSizesGrid[t];
                                (r >= 0 && r < T.size || n > 0 && n <= T.size || r <= 0 && n >= T.size) && T.slides.eq(t).addClass(T.params.slideVisibleClass)
                            }
                            s.progress = T.rtl ? -i : i
                        }
                    }
                }, T.updateProgress = function(e) {
                    void 0 === e && (e = T.translate || 0);
                    var a = T.maxTranslate() - T.minTranslate(),
                        t = T.isBeginning,
                        s = T.isEnd;
                    0 === a ? (T.progress = 0, T.isBeginning = T.isEnd = !0) : (T.progress = (e - T.minTranslate()) / a, T.isBeginning = T.progress <= 0, T.isEnd = T.progress >= 1), T.isBeginning && !t && T.emit("onReachBeginning", T), T.isEnd && !s && T.emit("onReachEnd", T), T.params.watchSlidesProgress && T.updateSlidesProgress(e), T.emit("onProgress", T, T.progress)
                }, T.updateActiveIndex = function() {
                    var e, a, t, s = T.rtl ? T.translate : -T.translate;
                    for (a = 0; a < T.slidesGrid.length; a++) void 0 !== T.slidesGrid[a + 1] ? s >= T.slidesGrid[a] && s < T.slidesGrid[a + 1] - (T.slidesGrid[a + 1] - T.slidesGrid[a]) / 2 ? e = a : s >= T.slidesGrid[a] && s < T.slidesGrid[a + 1] && (e = a + 1) : s >= T.slidesGrid[a] && (e = a);
                    T.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0), t = Math.floor(e / T.params.slidesPerGroup), t >= T.snapGrid.length && (t = T.snapGrid.length - 1), e !== T.activeIndex && (T.snapIndex = t, T.previousIndex = T.activeIndex, T.activeIndex = e, T.updateClasses(), T.updateRealIndex())
                }, T.updateRealIndex = function() {
                    T.realIndex = parseInt(T.slides.eq(T.activeIndex).attr("data-swiper-slide-index") || T.activeIndex, 10)
                }, T.updateClasses = function() {
                    T.slides.removeClass(T.params.slideActiveClass + " " + T.params.slideNextClass + " " + T.params.slidePrevClass + " " + T.params.slideDuplicateActiveClass + " " + T.params.slideDuplicateNextClass + " " + T.params.slideDuplicatePrevClass);
                    var a = T.slides.eq(T.activeIndex);
                    a.addClass(T.params.slideActiveClass), i.loop && (a.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + T.realIndex + '"]').addClass(T.params.slideDuplicateActiveClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + T.realIndex + '"]').addClass(T.params.slideDuplicateActiveClass));
                    var t = a.next("." + T.params.slideClass).addClass(T.params.slideNextClass);
                    T.params.loop && 0 === t.length && (t = T.slides.eq(0), t.addClass(T.params.slideNextClass));
                    var s = a.prev("." + T.params.slideClass).addClass(T.params.slidePrevClass);
                    if (T.params.loop && 0 === s.length && (s = T.slides.eq(-1), s.addClass(T.params.slidePrevClass)), i.loop && (t.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicateNextClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + t.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicateNextClass), s.hasClass(T.params.slideDuplicateClass) ? T.wrapper.children("." + T.params.slideClass + ":not(." + T.params.slideDuplicateClass + ')[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicatePrevClass) : T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + s.attr("data-swiper-slide-index") + '"]').addClass(T.params.slideDuplicatePrevClass)), T.paginationContainer && T.paginationContainer.length > 0) {
                        var r, n = T.params.loop ? Math.ceil((T.slides.length - 2 * T.loopedSlides) / T.params.slidesPerGroup) : T.snapGrid.length;
                        if (T.params.loop ? (r = Math.ceil((T.activeIndex - T.loopedSlides) / T.params.slidesPerGroup), r > T.slides.length - 1 - 2 * T.loopedSlides && (r -= T.slides.length - 2 * T.loopedSlides), r > n - 1 && (r -= n), r < 0 && "bullets" !== T.params.paginationType && (r = n + r)) : r = void 0 !== T.snapIndex ? T.snapIndex : T.activeIndex || 0, "bullets" === T.params.paginationType && T.bullets && T.bullets.length > 0 && (T.bullets.removeClass(T.params.bulletActiveClass), T.paginationContainer.length > 1 ? T.bullets.each(function() {
                                e(this).index() === r && e(this).addClass(T.params.bulletActiveClass)
                            }) : T.bullets.eq(r).addClass(T.params.bulletActiveClass)), "fraction" === T.params.paginationType && (T.paginationContainer.find("." + T.params.paginationCurrentClass).text(r + 1), T.paginationContainer.find("." + T.params.paginationTotalClass).text(n)), "progress" === T.params.paginationType) {
                            var o = (r + 1) / n,
                                l = o,
                                p = 1;
                            T.isHorizontal() || (p = o, l = 1), T.paginationContainer.find("." + T.params.paginationProgressbarClass).transform("translate3d(0,0,0) scaleX(" + l + ") scaleY(" + p + ")").transition(T.params.speed)
                        }
                        "custom" === T.params.paginationType && T.params.paginationCustomRender && (T.paginationContainer.html(T.params.paginationCustomRender(T, r + 1, n)), T.emit("onPaginationRendered", T, T.paginationContainer[0]))
                    }
                    T.params.loop || (T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.isBeginning ? (T.prevButton.addClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.disable(T.prevButton)) : (T.prevButton.removeClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.enable(T.prevButton))), T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.isEnd ? (T.nextButton.addClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.disable(T.nextButton)) : (T.nextButton.removeClass(T.params.buttonDisabledClass), T.params.a11y && T.a11y && T.a11y.enable(T.nextButton))))
                }, T.updatePagination = function() {
                    if (T.params.pagination && T.paginationContainer && T.paginationContainer.length > 0) {
                        var e = "";
                        if ("bullets" === T.params.paginationType) {
                            for (var a = T.params.loop ? Math.ceil((T.slides.length - 2 * T.loopedSlides) / T.params.slidesPerGroup) : T.snapGrid.length, t = 0; t < a; t++) e += T.params.paginationBulletRender ? T.params.paginationBulletRender(T, t, T.params.bulletClass) : "<" + T.params.paginationElement + ' class="' + T.params.bulletClass + '"></' + T.params.paginationElement + ">";
                            T.paginationContainer.html(e), T.bullets = T.paginationContainer.find("." + T.params.bulletClass), T.params.paginationClickable && T.params.a11y && T.a11y && T.a11y.initPagination()
                        }
                        "fraction" === T.params.paginationType && (e = T.params.paginationFractionRender ? T.params.paginationFractionRender(T, T.params.paginationCurrentClass, T.params.paginationTotalClass) : '<span class="' + T.params.paginationCurrentClass + '"></span> / <span class="' + T.params.paginationTotalClass + '"></span>', T.paginationContainer.html(e)), "progress" === T.params.paginationType && (e = T.params.paginationProgressRender ? T.params.paginationProgressRender(T, T.params.paginationProgressbarClass) : '<span class="' + T.params.paginationProgressbarClass + '"></span>', T.paginationContainer.html(e)), "custom" !== T.params.paginationType && T.emit("onPaginationRendered", T, T.paginationContainer[0])
                    }
                }, T.update = function(e) {
                    function a() {
                        T.rtl, T.translate;
                        t = Math.min(Math.max(T.translate, T.maxTranslate()), T.minTranslate()), T.setWrapperTranslate(t), T.updateActiveIndex(), T.updateClasses()
                    }
                    if (T) {
                        T.updateContainerSize(), T.updateSlidesSize(), T.updateProgress(), T.updatePagination(), T.updateClasses(), T.params.scrollbar && T.scrollbar && T.scrollbar.set();
                        var t;
                        if (e) {
                            T.controller && T.controller.spline && (T.controller.spline = void 0), T.params.freeMode ? (a(), T.params.autoHeight && T.updateAutoHeight()) : (("auto" === T.params.slidesPerView || T.params.slidesPerView > 1) && T.isEnd && !T.params.centeredSlides ? T.slideTo(T.slides.length - 1, 0, !1, !0) : T.slideTo(T.activeIndex, 0, !1, !0)) || a()
                        } else T.params.autoHeight && T.updateAutoHeight()
                    }
                }, T.onResize = function(e) {
                    T.params.onBeforeResize && T.params.onBeforeResize(T), T.params.breakpoints && T.setBreakpoint();
                    var a = T.params.allowSwipeToPrev,
                        t = T.params.allowSwipeToNext;
                    T.params.allowSwipeToPrev = T.params.allowSwipeToNext = !0, T.updateContainerSize(), T.updateSlidesSize(), ("auto" === T.params.slidesPerView || T.params.freeMode || e) && T.updatePagination(), T.params.scrollbar && T.scrollbar && T.scrollbar.set(), T.controller && T.controller.spline && (T.controller.spline = void 0);
                    var s = !1;
                    if (T.params.freeMode) {
                        var i = Math.min(Math.max(T.translate, T.maxTranslate()), T.minTranslate());
                        T.setWrapperTranslate(i), T.updateActiveIndex(), T.updateClasses(), T.params.autoHeight && T.updateAutoHeight()
                    } else T.updateClasses(), s = ("auto" === T.params.slidesPerView || T.params.slidesPerView > 1) && T.isEnd && !T.params.centeredSlides ? T.slideTo(T.slides.length - 1, 0, !1, !0) : T.slideTo(T.activeIndex, 0, !1, !0);
                    T.params.lazyLoading && !s && T.lazy && T.lazy.load(), T.params.allowSwipeToPrev = a, T.params.allowSwipeToNext = t, T.params.onAfterResize && T.params.onAfterResize(T)
                }, T.touchEventsDesktop = {
                    start: "mousedown",
                    move: "mousemove",
                    end: "mouseup"
                }, window.navigator.pointerEnabled ? T.touchEventsDesktop = {
                    start: "pointerdown",
                    move: "pointermove",
                    end: "pointerup"
                } : window.navigator.msPointerEnabled && (T.touchEventsDesktop = {
                    start: "MSPointerDown",
                    move: "MSPointerMove",
                    end: "MSPointerUp"
                }), T.touchEvents = {
                    start: T.support.touch || !T.params.simulateTouch ? "touchstart" : T.touchEventsDesktop.start,
                    move: T.support.touch || !T.params.simulateTouch ? "touchmove" : T.touchEventsDesktop.move,
                    end: T.support.touch || !T.params.simulateTouch ? "touchend" : T.touchEventsDesktop.end
                }, (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === T.params.touchEventsTarget ? T.container : T.wrapper).addClass("swiper-wp8-" + T.params.direction), T.initEvents = function(e) {
                    var a = e ? "off" : "on",
                        t = e ? "removeEventListener" : "addEventListener",
                        s = "container" === T.params.touchEventsTarget ? T.container[0] : T.wrapper[0],
                        r = T.support.touch ? s : document,
                        n = !!T.params.nested;
                    if (T.browser.ie) s[t](T.touchEvents.start, T.onTouchStart, !1), r[t](T.touchEvents.move, T.onTouchMove, n), r[t](T.touchEvents.end, T.onTouchEnd, !1);
                    else {
                        if (T.support.touch) {
                            var o = !("touchstart" !== T.touchEvents.start || !T.support.passiveListener || !T.params.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            s[t](T.touchEvents.start, T.onTouchStart, o), s[t](T.touchEvents.move, T.onTouchMove, n), s[t](T.touchEvents.end, T.onTouchEnd, o)
                        }(i.simulateTouch && !T.device.ios && !T.device.android || i.simulateTouch && !T.support.touch && T.device.ios) && (s[t]("mousedown", T.onTouchStart, !1), document[t]("mousemove", T.onTouchMove, n), document[t]("mouseup", T.onTouchEnd, !1))
                    }
                    window[t]("resize", T.onResize), T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.nextButton[a]("click", T.onClickNext), T.params.a11y && T.a11y && T.nextButton[a]("keydown", T.a11y.onEnterKey)), T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.prevButton[a]("click", T.onClickPrev), T.params.a11y && T.a11y && T.prevButton[a]("keydown", T.a11y.onEnterKey)), T.params.pagination && T.params.paginationClickable && (T.paginationContainer[a]("click", "." + T.params.bulletClass, T.onClickIndex), T.params.a11y && T.a11y && T.paginationContainer[a]("keydown", "." + T.params.bulletClass, T.a11y.onEnterKey)), (T.params.preventClicks || T.params.preventClicksPropagation) && s[t]("click", T.preventClicks, !0)
                }, T.attachEvents = function() {
                    T.initEvents()
                }, T.detachEvents = function() {
                    T.initEvents(!0)
                }, T.allowClick = !0, T.preventClicks = function(e) {
                    T.allowClick || (T.params.preventClicks && e.preventDefault(), T.params.preventClicksPropagation && T.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
                }, T.onClickNext = function(e) {
                    e.preventDefault(), T.isEnd && !T.params.loop || T.slideNext()
                }, T.onClickPrev = function(e) {
                    e.preventDefault(), T.isBeginning && !T.params.loop || T.slidePrev()
                }, T.onClickIndex = function(a) {
                    a.preventDefault();
                    var t = e(this).index() * T.params.slidesPerGroup;
                    T.params.loop && (t += T.loopedSlides), T.slideTo(t)
                },
                T.updateClickedSlide = function(a) {
                    var t = o(a, "." + T.params.slideClass),
                        s = !1;
                    if (t)
                        for (var i = 0; i < T.slides.length; i++) T.slides[i] === t && (s = !0);
                    if (!t || !s) return T.clickedSlide = void 0, void(T.clickedIndex = void 0);
                    if (T.clickedSlide = t, T.clickedIndex = e(t).index(), T.params.slideToClickedSlide && void 0 !== T.clickedIndex && T.clickedIndex !== T.activeIndex) {
                        var r, n = T.clickedIndex,
                            l = "auto" === T.params.slidesPerView ? T.currentSlidesPerView() : T.params.slidesPerView;
                        if (T.params.loop) {
                            if (T.animating) return;
                            r = parseInt(e(T.clickedSlide).attr("data-swiper-slide-index"), 10), T.params.centeredSlides ? n < T.loopedSlides - l / 2 || n > T.slides.length - T.loopedSlides + l / 2 ? (T.fixLoop(), n = T.wrapper.children("." + T.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + T.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
                                T.slideTo(n)
                            }, 0)) : T.slideTo(n) : n > T.slides.length - l ? (T.fixLoop(), n = T.wrapper.children("." + T.params.slideClass + '[data-swiper-slide-index="' + r + '"]:not(.' + T.params.slideDuplicateClass + ")").eq(0).index(), setTimeout(function() {
                                T.slideTo(n)
                            }, 0)) : T.slideTo(n)
                        } else T.slideTo(n)
                    }
                };
            var S, C, z, M, E, P, I, k, L, D, B = "input, select, textarea, button, video",
                H = Date.now(),
                G = [];
            T.animating = !1, T.touches = {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            };
            var X, A;
            T.onTouchStart = function(a) {
                if (a.originalEvent && (a = a.originalEvent), (X = "touchstart" === a.type) || !("which" in a) || 3 !== a.which) {
                    if (T.params.noSwiping && o(a, "." + T.params.noSwipingClass)) return void(T.allowClick = !0);
                    if (!T.params.swipeHandler || o(a, T.params.swipeHandler)) {
                        var t = T.touches.currentX = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX,
                            s = T.touches.currentY = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY;
                        if (!(T.device.ios && T.params.iOSEdgeSwipeDetection && t <= T.params.iOSEdgeSwipeThreshold)) {
                            if (S = !0, C = !1, z = !0, E = void 0, A = void 0, T.touches.startX = t, T.touches.startY = s, M = Date.now(), T.allowClick = !0, T.updateContainerSize(), T.swipeDirection = void 0, T.params.threshold > 0 && (k = !1), "touchstart" !== a.type) {
                                var i = !0;
                                e(a.target).is(B) && (i = !1), document.activeElement && e(document.activeElement).is(B) && document.activeElement.blur(), i && a.preventDefault()
                            }
                            T.emit("onTouchStart", T, a)
                        }
                    }
                }
            }, T.onTouchMove = function(a) {
                if (a.originalEvent && (a = a.originalEvent), !X || "mousemove" !== a.type) {
                    if (a.preventedByNestedSwiper) return T.touches.startX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, void(T.touches.startY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY);
                    if (T.params.onlyExternal) return T.allowClick = !1, void(S && (T.touches.startX = T.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, T.touches.startY = T.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY, M = Date.now()));
                    if (X && T.params.touchReleaseOnEdges && !T.params.loop)
                        if (T.isHorizontal()) {
                            if (T.touches.currentX < T.touches.startX && T.translate <= T.maxTranslate() || T.touches.currentX > T.touches.startX && T.translate >= T.minTranslate()) return
                        } else if (T.touches.currentY < T.touches.startY && T.translate <= T.maxTranslate() || T.touches.currentY > T.touches.startY && T.translate >= T.minTranslate()) return;
                    if (X && document.activeElement && a.target === document.activeElement && e(a.target).is(B)) return C = !0, void(T.allowClick = !1);
                    if (z && T.emit("onTouchMove", T, a), !(a.targetTouches && a.targetTouches.length > 1)) {
                        if (T.touches.currentX = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX, T.touches.currentY = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY, void 0 === E) {
                            var t;
                            T.isHorizontal() && T.touches.currentY === T.touches.startY || !T.isHorizontal() && T.touches.currentX === T.touches.startX ? E = !1 : (t = 180 * Math.atan2(Math.abs(T.touches.currentY - T.touches.startY), Math.abs(T.touches.currentX - T.touches.startX)) / Math.PI, E = T.isHorizontal() ? t > T.params.touchAngle : 90 - t > T.params.touchAngle)
                        }
                        if (E && T.emit("onTouchMoveOpposite", T, a), void 0 === A && (T.touches.currentX === T.touches.startX && T.touches.currentY === T.touches.startY || (A = !0)), S) {
                            if (E) return void(S = !1);
                            if (A) {
                                T.allowClick = !1, T.emit("onSliderMove", T, a), a.preventDefault(), T.params.touchMoveStopPropagation && !T.params.nested && a.stopPropagation(), C || (i.loop && T.fixLoop(), I = T.getWrapperTranslate(), T.setWrapperTransition(0), T.animating && T.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"), T.params.autoplay && T.autoplaying && (T.params.autoplayDisableOnInteraction ? T.stopAutoplay() : T.pauseAutoplay()), D = !1, !T.params.grabCursor || T.params.allowSwipeToNext !== !0 && T.params.allowSwipeToPrev !== !0 || T.setGrabCursor(!0)), C = !0;
                                var s = T.touches.diff = T.isHorizontal() ? T.touches.currentX - T.touches.startX : T.touches.currentY - T.touches.startY;
                                s *= T.params.touchRatio, T.rtl && (s = -s), T.swipeDirection = s > 0 ? "prev" : "next", P = s + I;
                                var r = !0;
                                if (s > 0 && P > T.minTranslate() ? (r = !1, T.params.resistance && (P = T.minTranslate() - 1 + Math.pow(-T.minTranslate() + I + s, T.params.resistanceRatio))) : s < 0 && P < T.maxTranslate() && (r = !1, T.params.resistance && (P = T.maxTranslate() + 1 - Math.pow(T.maxTranslate() - I - s, T.params.resistanceRatio))), r && (a.preventedByNestedSwiper = !0), !T.params.allowSwipeToNext && "next" === T.swipeDirection && P < I && (P = I), !T.params.allowSwipeToPrev && "prev" === T.swipeDirection && P > I && (P = I), T.params.threshold > 0) {
                                    if (!(Math.abs(s) > T.params.threshold || k)) return void(P = I);
                                    if (!k) return k = !0, T.touches.startX = T.touches.currentX, T.touches.startY = T.touches.currentY, P = I, void(T.touches.diff = T.isHorizontal() ? T.touches.currentX - T.touches.startX : T.touches.currentY - T.touches.startY)
                                }
                                T.params.followFinger && ((T.params.freeMode || T.params.watchSlidesProgress) && T.updateActiveIndex(), T.params.freeMode && (0 === G.length && G.push({
                                    position: T.touches[T.isHorizontal() ? "startX" : "startY"],
                                    time: M
                                }), G.push({
                                    position: T.touches[T.isHorizontal() ? "currentX" : "currentY"],
                                    time: (new window.Date).getTime()
                                })), T.updateProgress(P), T.setWrapperTranslate(P))
                            }
                        }
                    }
                }
            }, T.onTouchEnd = function(a) {
                if (a.originalEvent && (a = a.originalEvent), z && T.emit("onTouchEnd", T, a), z = !1, S) {
                    T.params.grabCursor && C && S && (T.params.allowSwipeToNext === !0 || T.params.allowSwipeToPrev === !0) && T.setGrabCursor(!1);
                    var t = Date.now(),
                        s = t - M;
                    if (T.allowClick && (T.updateClickedSlide(a), T.emit("onTap", T, a), s < 300 && t - H > 300 && (L && clearTimeout(L), L = setTimeout(function() {
                            T && (T.params.paginationHide && T.paginationContainer.length > 0 && !e(a.target).hasClass(T.params.bulletClass) && T.paginationContainer.toggleClass(T.params.paginationHiddenClass), T.emit("onClick", T, a))
                        }, 300)), s < 300 && t - H < 300 && (L && clearTimeout(L), T.emit("onDoubleTap", T, a))), H = Date.now(), setTimeout(function() {
                            T && (T.allowClick = !0)
                        }, 0), !S || !C || !T.swipeDirection || 0 === T.touches.diff || P === I) return void(S = C = !1);
                    S = C = !1;
                    var i;
                    if (i = T.params.followFinger ? T.rtl ? T.translate : -T.translate : -P, T.params.freeMode) {
                        if (i < -T.minTranslate()) return void T.slideTo(T.activeIndex);
                        if (i > -T.maxTranslate()) return void(T.slides.length < T.snapGrid.length ? T.slideTo(T.snapGrid.length - 1) : T.slideTo(T.slides.length - 1));
                        if (T.params.freeModeMomentum) {
                            if (G.length > 1) {
                                var r = G.pop(),
                                    n = G.pop(),
                                    o = r.position - n.position,
                                    l = r.time - n.time;
                                T.velocity = o / l, T.velocity = T.velocity / 2, Math.abs(T.velocity) < T.params.freeModeMinimumVelocity && (T.velocity = 0), (l > 150 || (new window.Date).getTime() - r.time > 300) && (T.velocity = 0)
                            } else T.velocity = 0;
                            T.velocity = T.velocity * T.params.freeModeMomentumVelocityRatio, G.length = 0;
                            var p = 1e3 * T.params.freeModeMomentumRatio,
                                d = T.velocity * p,
                                u = T.translate + d;
                            T.rtl && (u = -u);
                            var c, m = !1,
                                h = 20 * Math.abs(T.velocity) * T.params.freeModeMomentumBounceRatio;
                            if (u < T.maxTranslate()) T.params.freeModeMomentumBounce ? (u + T.maxTranslate() < -h && (u = T.maxTranslate() - h), c = T.maxTranslate(), m = !0, D = !0) : u = T.maxTranslate();
                            else if (u > T.minTranslate()) T.params.freeModeMomentumBounce ? (u - T.minTranslate() > h && (u = T.minTranslate() + h), c = T.minTranslate(), m = !0, D = !0) : u = T.minTranslate();
                            else if (T.params.freeModeSticky) {
                                var g, f = 0;
                                for (f = 0; f < T.snapGrid.length; f += 1)
                                    if (T.snapGrid[f] > -u) {
                                        g = f;
                                        break
                                    } u = Math.abs(T.snapGrid[g] - u) < Math.abs(T.snapGrid[g - 1] - u) || "next" === T.swipeDirection ? T.snapGrid[g] : T.snapGrid[g - 1], T.rtl || (u = -u)
                            }
                            if (0 !== T.velocity) p = T.rtl ? Math.abs((-u - T.translate) / T.velocity) : Math.abs((u - T.translate) / T.velocity);
                            else if (T.params.freeModeSticky) return void T.slideReset();
                            T.params.freeModeMomentumBounce && m ? (T.updateProgress(c), T.setWrapperTransition(p), T.setWrapperTranslate(u), T.onTransitionStart(), T.animating = !0, T.wrapper.transitionEnd(function() {
                                T && D && (T.emit("onMomentumBounce", T), T.setWrapperTransition(T.params.speed), T.setWrapperTranslate(c), T.wrapper.transitionEnd(function() {
                                    T && T.onTransitionEnd()
                                }))
                            })) : T.velocity ? (T.updateProgress(u), T.setWrapperTransition(p), T.setWrapperTranslate(u), T.onTransitionStart(), T.animating || (T.animating = !0, T.wrapper.transitionEnd(function() {
                                T && T.onTransitionEnd()
                            }))) : T.updateProgress(u), T.updateActiveIndex()
                        }
                        return void((!T.params.freeModeMomentum || s >= T.params.longSwipesMs) && (T.updateProgress(), T.updateActiveIndex()))
                    }
                    var v, w = 0,
                        y = T.slidesSizesGrid[0];
                    for (v = 0; v < T.slidesGrid.length; v += T.params.slidesPerGroup) void 0 !== T.slidesGrid[v + T.params.slidesPerGroup] ? i >= T.slidesGrid[v] && i < T.slidesGrid[v + T.params.slidesPerGroup] && (w = v, y = T.slidesGrid[v + T.params.slidesPerGroup] - T.slidesGrid[v]) : i >= T.slidesGrid[v] && (w = v, y = T.slidesGrid[T.slidesGrid.length - 1] - T.slidesGrid[T.slidesGrid.length - 2]);
                    var x = (i - T.slidesGrid[w]) / y;
                    if (s > T.params.longSwipesMs) {
                        if (!T.params.longSwipes) return void T.slideTo(T.activeIndex);
                        "next" === T.swipeDirection && (x >= T.params.longSwipesRatio ? T.slideTo(w + T.params.slidesPerGroup) : T.slideTo(w)), "prev" === T.swipeDirection && (x > 1 - T.params.longSwipesRatio ? T.slideTo(w + T.params.slidesPerGroup) : T.slideTo(w))
                    } else {
                        if (!T.params.shortSwipes) return void T.slideTo(T.activeIndex);
                        "next" === T.swipeDirection && T.slideTo(w + T.params.slidesPerGroup), "prev" === T.swipeDirection && T.slideTo(w)
                    }
                }
            }, T._slideTo = function(e, a) {
                return T.slideTo(e, a, !0, !0)
            }, T.slideTo = function(e, a, t, s) {
                void 0 === t && (t = !0), void 0 === e && (e = 0), e < 0 && (e = 0), T.snapIndex = Math.floor(e / T.params.slidesPerGroup), T.snapIndex >= T.snapGrid.length && (T.snapIndex = T.snapGrid.length - 1);
                var i = -T.snapGrid[T.snapIndex];
                if (T.params.autoplay && T.autoplaying && (s || !T.params.autoplayDisableOnInteraction ? T.pauseAutoplay(a) : T.stopAutoplay()), T.updateProgress(i), T.params.normalizeSlideIndex)
                    for (var r = 0; r < T.slidesGrid.length; r++) - Math.floor(100 * i) >= Math.floor(100 * T.slidesGrid[r]) && (e = r);
                return !(!T.params.allowSwipeToNext && i < T.translate && i < T.minTranslate()) && (!(!T.params.allowSwipeToPrev && i > T.translate && i > T.maxTranslate() && (T.activeIndex || 0) !== e) && (void 0 === a && (a = T.params.speed), T.previousIndex = T.activeIndex || 0, T.activeIndex = e, T.updateRealIndex(), T.rtl && -i === T.translate || !T.rtl && i === T.translate ? (T.params.autoHeight && T.updateAutoHeight(), T.updateClasses(), "slide" !== T.params.effect && T.setWrapperTranslate(i), !1) : (T.updateClasses(), T.onTransitionStart(t), 0 === a || T.browser.lteIE9 ? (T.setWrapperTranslate(i), T.setWrapperTransition(0), T.onTransitionEnd(t)) : (T.setWrapperTranslate(i), T.setWrapperTransition(a), T.animating || (T.animating = !0, T.wrapper.transitionEnd(function() {
                    T && T.onTransitionEnd(t)
                }))), !0)))
            }, T.onTransitionStart = function(e) {
                void 0 === e && (e = !0), T.params.autoHeight && T.updateAutoHeight(), T.lazy && T.lazy.onTransitionStart(), e && (T.emit("onTransitionStart", T), T.activeIndex !== T.previousIndex && (T.emit("onSlideChangeStart", T), T.activeIndex > T.previousIndex ? T.emit("onSlideNextStart", T) : T.emit("onSlidePrevStart", T)))
            }, T.onTransitionEnd = function(e) {
                T.animating = !1, T.setWrapperTransition(0), void 0 === e && (e = !0), T.lazy && T.lazy.onTransitionEnd(), e && (T.emit("onTransitionEnd", T), T.activeIndex !== T.previousIndex && (T.emit("onSlideChangeEnd", T), T.activeIndex > T.previousIndex ? T.emit("onSlideNextEnd", T) : T.emit("onSlidePrevEnd", T))), T.params.history && T.history && T.history.setHistory(T.params.history, T.activeIndex), T.params.hashnav && T.hashnav && T.hashnav.setHash()
            }, T.slideNext = function(e, a, t) {
                if (T.params.loop) {
                    if (T.animating) return !1;
                    T.fixLoop();
                    T.container[0].clientLeft;
                    return T.slideTo(T.activeIndex + T.params.slidesPerGroup, a, e, t)
                }
                return T.slideTo(T.activeIndex + T.params.slidesPerGroup, a, e, t)
            }, T._slideNext = function(e) {
                return T.slideNext(!0, e, !0)
            }, T.slidePrev = function(e, a, t) {
                if (T.params.loop) {
                    if (T.animating) return !1;
                    T.fixLoop();
                    T.container[0].clientLeft;
                    return T.slideTo(T.activeIndex - 1, a, e, t)
                }
                return T.slideTo(T.activeIndex - 1, a, e, t)
            }, T._slidePrev = function(e) {
                return T.slidePrev(!0, e, !0)
            }, T.slideReset = function(e, a, t) {
                return T.slideTo(T.activeIndex, a, e)
            }, T.disableTouchControl = function() {
                return T.params.onlyExternal = !0, !0
            }, T.enableTouchControl = function() {
                return T.params.onlyExternal = !1, !0
            }, T.setWrapperTransition = function(e, a) {
                T.wrapper.transition(e), "slide" !== T.params.effect && T.effects[T.params.effect] && T.effects[T.params.effect].setTransition(e), T.params.parallax && T.parallax && T.parallax.setTransition(e), T.params.scrollbar && T.scrollbar && T.scrollbar.setTransition(e), T.params.control && T.controller && T.controller.setTransition(e, a), T.emit("onSetTransition", T, e)
            }, T.setWrapperTranslate = function(e, a, t) {
                var s = 0,
                    i = 0;
                T.isHorizontal() ? s = T.rtl ? -e : e : i = e, T.params.roundLengths && (s = r(s), i = r(i)), T.params.virtualTranslate || (T.support.transforms3d ? T.wrapper.transform("translate3d(" + s + "px, " + i + "px, 0px)") : T.wrapper.transform("translate(" + s + "px, " + i + "px)")), T.translate = T.isHorizontal() ? s : i;
                var n, o = T.maxTranslate() - T.minTranslate();
                n = 0 === o ? 0 : (e - T.minTranslate()) / o, n !== T.progress && T.updateProgress(e), a && T.updateActiveIndex(), "slide" !== T.params.effect && T.effects[T.params.effect] && T.effects[T.params.effect].setTranslate(T.translate), T.params.parallax && T.parallax && T.parallax.setTranslate(T.translate), T.params.scrollbar && T.scrollbar && T.scrollbar.setTranslate(T.translate), T.params.control && T.controller && T.controller.setTranslate(T.translate, t), T.emit("onSetTranslate", T, T.translate)
            }, T.getTranslate = function(e, a) {
                var t, s, i, r;
                return void 0 === a && (a = "x"), T.params.virtualTranslate ? T.rtl ? -T.translate : T.translate : (i = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (s = i.transform || i.webkitTransform, s.split(",").length > 6 && (s = s.split(", ").map(function(e) {
                    return e.replace(",", ".")
                }).join(", ")), r = new window.WebKitCSSMatrix("none" === s ? "" : s)) : (r = i.MozTransform || i.OTransform || i.MsTransform || i.msTransform || i.transform || i.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), t = r.toString().split(",")), "x" === a && (s = window.WebKitCSSMatrix ? r.m41 : 16 === t.length ? parseFloat(t[12]) : parseFloat(t[4])), "y" === a && (s = window.WebKitCSSMatrix ? r.m42 : 16 === t.length ? parseFloat(t[13]) : parseFloat(t[5])), T.rtl && s && (s = -s), s || 0)
            }, T.getWrapperTranslate = function(e) {
                return void 0 === e && (e = T.isHorizontal() ? "x" : "y"), T.getTranslate(T.wrapper[0], e)
            }, T.observers = [], T.initObservers = function() {
                if (T.params.observeParents)
                    for (var e = T.container.parents(), a = 0; a < e.length; a++) l(e[a]);
                l(T.container[0], {
                    childList: !1
                }), l(T.wrapper[0], {
                    attributes: !1
                })
            }, T.disconnectObservers = function() {
                for (var e = 0; e < T.observers.length; e++) T.observers[e].disconnect();
                T.observers = []
            }, T.createLoop = function() {
                T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass).remove();
                var a = T.wrapper.children("." + T.params.slideClass);
                "auto" !== T.params.slidesPerView || T.params.loopedSlides || (T.params.loopedSlides = a.length), T.loopedSlides = parseInt(T.params.loopedSlides || T.params.slidesPerView, 10), T.loopedSlides = T.loopedSlides + T.params.loopAdditionalSlides, T.loopedSlides > a.length && (T.loopedSlides = a.length);
                var t, s = [],
                    i = [];
                for (a.each(function(t, r) {
                        var n = e(this);
                        t < T.loopedSlides && i.push(r), t < a.length && t >= a.length - T.loopedSlides && s.push(r), n.attr("data-swiper-slide-index", t)
                    }), t = 0; t < i.length; t++) T.wrapper.append(e(i[t].cloneNode(!0)).addClass(T.params.slideDuplicateClass));
                for (t = s.length - 1; t >= 0; t--) T.wrapper.prepend(e(s[t].cloneNode(!0)).addClass(T.params.slideDuplicateClass))
            }, T.destroyLoop = function() {
                T.wrapper.children("." + T.params.slideClass + "." + T.params.slideDuplicateClass).remove(), T.slides.removeAttr("data-swiper-slide-index")
            }, T.reLoop = function(e) {
                var a = T.activeIndex - T.loopedSlides;
                T.destroyLoop(), T.createLoop(), T.updateSlidesSize(), e && T.slideTo(a + T.loopedSlides, 0, !1)
            }, T.fixLoop = function() {
                var e;
                T.activeIndex < T.loopedSlides ? (e = T.slides.length - 3 * T.loopedSlides + T.activeIndex, e += T.loopedSlides, T.slideTo(e, 0, !1, !0)) : ("auto" === T.params.slidesPerView && T.activeIndex >= 2 * T.loopedSlides || T.activeIndex > T.slides.length - 2 * T.params.slidesPerView) && (e = -T.slides.length + T.activeIndex + T.loopedSlides, e += T.loopedSlides, T.slideTo(e, 0, !1, !0))
            }, T.appendSlide = function(e) {
                if (T.params.loop && T.destroyLoop(), "object" == typeof e && e.length)
                    for (var a = 0; a < e.length; a++) e[a] && T.wrapper.append(e[a]);
                else T.wrapper.append(e);
                T.params.loop && T.createLoop(), T.params.observer && T.support.observer || T.update(!0)
            }, T.prependSlide = function(e) {
                T.params.loop && T.destroyLoop();
                var a = T.activeIndex + 1;
                if ("object" == typeof e && e.length) {
                    for (var t = 0; t < e.length; t++) e[t] && T.wrapper.prepend(e[t]);
                    a = T.activeIndex + e.length
                } else T.wrapper.prepend(e);
                T.params.loop && T.createLoop(), T.params.observer && T.support.observer || T.update(!0), T.slideTo(a, 0, !1)
            }, T.removeSlide = function(e) {
                T.params.loop && (T.destroyLoop(), T.slides = T.wrapper.children("." + T.params.slideClass));
                var a, t = T.activeIndex;
                if ("object" == typeof e && e.length) {
                    for (var s = 0; s < e.length; s++) a = e[s], T.slides[a] && T.slides.eq(a).remove(), a < t && t--;
                    t = Math.max(t, 0)
                } else a = e, T.slides[a] && T.slides.eq(a).remove(), a < t && t--, t = Math.max(t, 0);
                T.params.loop && T.createLoop(), T.params.observer && T.support.observer || T.update(!0), T.params.loop ? T.slideTo(t + T.loopedSlides, 0, !1) : T.slideTo(t, 0, !1)
            }, T.removeAllSlides = function() {
                for (var e = [], a = 0; a < T.slides.length; a++) e.push(a);
                T.removeSlide(e)
            }, T.effects = {
                fade: {
                    setTranslate: function() {
                        for (var e = 0; e < T.slides.length; e++) {
                            var a = T.slides.eq(e),
                                t = a[0].swiperSlideOffset,
                                s = -t;
                            T.params.virtualTranslate || (s -= T.translate);
                            var i = 0;
                            T.isHorizontal() || (i = s, s = 0);
                            var r = T.params.fade.crossFade ? Math.max(1 - Math.abs(a[0].progress), 0) : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                            a.css({
                                opacity: r
                            }).transform("translate3d(" + s + "px, " + i + "px, 0px)")
                        }
                    },
                    setTransition: function(e) {
                        if (T.slides.transition(e), T.params.virtualTranslate && 0 !== e) {
                            var a = !1;
                            T.slides.transitionEnd(function() {
                                if (!a && T) {
                                    a = !0, T.animating = !1;
                                    for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], t = 0; t < e.length; t++) T.wrapper.trigger(e[t])
                                }
                            })
                        }
                    }
                },
                flip: {
                    setTranslate: function() {
                        for (var a = 0; a < T.slides.length; a++) {
                            var t = T.slides.eq(a),
                                s = t[0].progress;
                            T.params.flip.limitRotation && (s = Math.max(Math.min(t[0].progress, 1), -1));
                            var i = t[0].swiperSlideOffset,
                                r = -180 * s,
                                n = r,
                                o = 0,
                                l = -i,
                                p = 0;
                            if (T.isHorizontal() ? T.rtl && (n = -n) : (p = l, l = 0, o = -n, n = 0), t[0].style.zIndex = -Math.abs(Math.round(s)) + T.slides.length, T.params.flip.slideShadows) {
                                var d = T.isHorizontal() ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"),
                                    u = T.isHorizontal() ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                                0 === d.length && (d = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'), t.append(d)), 0 === u.length && (u = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'), t.append(u)), d.length && (d[0].style.opacity = Math.max(-s, 0)), u.length && (u[0].style.opacity = Math.max(s, 0))
                            }
                            t.transform("translate3d(" + l + "px, " + p + "px, 0px) rotateX(" + o + "deg) rotateY(" + n + "deg)")
                        }
                    },
                    setTransition: function(a) {
                        if (T.slides.transition(a).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(a), T.params.virtualTranslate && 0 !== a) {
                            var t = !1;
                            T.slides.eq(T.activeIndex).transitionEnd(function() {
                                if (!t && T && e(this).hasClass(T.params.slideActiveClass)) {
                                    t = !0, T.animating = !1;
                                    for (var a = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], s = 0; s < a.length; s++) T.wrapper.trigger(a[s])
                                }
                            })
                        }
                    }
                },
                cube: {
                    setTranslate: function() {
                        var a, t = 0;
                        T.params.cube.shadow && (T.isHorizontal() ? (a = T.wrapper.find(".swiper-cube-shadow"), 0 === a.length && (a = e('<div class="swiper-cube-shadow"></div>'), T.wrapper.append(a)), a.css({
                            height: T.width + "px"
                        })) : (a = T.container.find(".swiper-cube-shadow"), 0 === a.length && (a = e('<div class="swiper-cube-shadow"></div>'), T.container.append(a))));
                        for (var s = 0; s < T.slides.length; s++) {
                            var i = T.slides.eq(s),
                                r = 90 * s,
                                n = Math.floor(r / 360);
                            T.rtl && (r = -r, n = Math.floor(-r / 360));
                            var o = Math.max(Math.min(i[0].progress, 1), -1),
                                l = 0,
                                p = 0,
                                d = 0;
                            s % 4 == 0 ? (l = 4 * -n * T.size, d = 0) : (s - 1) % 4 == 0 ? (l = 0, d = 4 * -n * T.size) : (s - 2) % 4 == 0 ? (l = T.size + 4 * n * T.size, d = T.size) : (s - 3) % 4 == 0 && (l = -T.size, d = 3 * T.size + 4 * T.size * n), T.rtl && (l = -l), T.isHorizontal() || (p = l, l = 0);
                            var u = "rotateX(" + (T.isHorizontal() ? 0 : -r) + "deg) rotateY(" + (T.isHorizontal() ? r : 0) + "deg) translate3d(" + l + "px, " + p + "px, " + d + "px)";
                            if (o <= 1 && o > -1 && (t = 90 * s + 90 * o, T.rtl && (t = 90 * -s - 90 * o)), i.transform(u), T.params.cube.slideShadows) {
                                var c = T.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"),
                                    m = T.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom");
                                0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'), i.append(c)), 0 === m.length && (m = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(m)), c.length && (c[0].style.opacity = Math.max(-o, 0)), m.length && (m[0].style.opacity = Math.max(o, 0))
                            }
                        }
                        if (T.wrapper.css({
                                "-webkit-transform-origin": "50% 50% -" + T.size / 2 + "px",
                                "-moz-transform-origin": "50% 50% -" + T.size / 2 + "px",
                                "-ms-transform-origin": "50% 50% -" + T.size / 2 + "px",
                                "transform-origin": "50% 50% -" + T.size / 2 + "px"
                            }), T.params.cube.shadow)
                            if (T.isHorizontal()) a.transform("translate3d(0px, " + (T.width / 2 + T.params.cube.shadowOffset) + "px, " + -T.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + T.params.cube.shadowScale + ")");
                            else {
                                var h = Math.abs(t) - 90 * Math.floor(Math.abs(t) / 90),
                                    g = 1.5 - (Math.sin(2 * h * Math.PI / 360) / 2 + Math.cos(2 * h * Math.PI / 360) / 2),
                                    f = T.params.cube.shadowScale,
                                    v = T.params.cube.shadowScale / g,
                                    w = T.params.cube.shadowOffset;
                                a.transform("scale3d(" + f + ", 1, " + v + ") translate3d(0px, " + (T.height / 2 + w) + "px, " + -T.height / 2 / v + "px) rotateX(-90deg)")
                            } var y = T.isSafari || T.isUiWebView ? -T.size / 2 : 0;
                        T.wrapper.transform("translate3d(0px,0," + y + "px) rotateX(" + (T.isHorizontal() ? 0 : t) + "deg) rotateY(" + (T.isHorizontal() ? -t : 0) + "deg)")
                    },
                    setTransition: function(e) {
                        T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), T.params.cube.shadow && !T.isHorizontal() && T.container.find(".swiper-cube-shadow").transition(e)
                    }
                },
                coverflow: {
                    setTranslate: function() {
                        for (var a = T.translate, t = T.isHorizontal() ? -a + T.width / 2 : -a + T.height / 2, s = T.isHorizontal() ? T.params.coverflow.rotate : -T.params.coverflow.rotate, i = T.params.coverflow.depth, r = 0, n = T.slides.length; r < n; r++) {
                            var o = T.slides.eq(r),
                                l = T.slidesSizesGrid[r],
                                p = o[0].swiperSlideOffset,
                                d = (t - p - l / 2) / l * T.params.coverflow.modifier,
                                u = T.isHorizontal() ? s * d : 0,
                                c = T.isHorizontal() ? 0 : s * d,
                                m = -i * Math.abs(d),
                                h = T.isHorizontal() ? 0 : T.params.coverflow.stretch * d,
                                g = T.isHorizontal() ? T.params.coverflow.stretch * d : 0;
                            Math.abs(g) < .001 && (g = 0), Math.abs(h) < .001 && (h = 0), Math.abs(m) < .001 && (m = 0), Math.abs(u) < .001 && (u = 0), Math.abs(c) < .001 && (c = 0);
                            var f = "translate3d(" + g + "px," + h + "px," + m + "px)  rotateX(" + c + "deg) rotateY(" + u + "deg)";
                            if (o.transform(f), o[0].style.zIndex = 1 - Math.abs(Math.round(d)), T.params.coverflow.slideShadows) {
                                var v = T.isHorizontal() ? o.find(".swiper-slide-shadow-left") : o.find(".swiper-slide-shadow-top"),
                                    w = T.isHorizontal() ? o.find(".swiper-slide-shadow-right") : o.find(".swiper-slide-shadow-bottom");
                                0 === v.length && (v = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "left" : "top") + '"></div>'), o.append(v)), 0 === w.length && (w = e('<div class="swiper-slide-shadow-' + (T.isHorizontal() ? "right" : "bottom") + '"></div>'), o.append(w)), v.length && (v[0].style.opacity = d > 0 ? d : 0), w.length && (w[0].style.opacity = -d > 0 ? -d : 0)
                            }
                        }
                        if (T.browser.ie) {
                            T.wrapper[0].style.perspectiveOrigin = t + "px 50%"
                        }
                    },
                    setTransition: function(e) {
                        T.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                    }
                }
            }, T.lazy = {
                initialImageLoaded: !1,
                loadImageInSlide: function(a, t) {
                    if (void 0 !== a && (void 0 === t && (t = !0), 0 !== T.slides.length)) {
                        var s = T.slides.eq(a),
                            i = s.find("." + T.params.lazyLoadingClass + ":not(." + T.params.lazyStatusLoadedClass + "):not(." + T.params.lazyStatusLoadingClass + ")");
                        !s.hasClass(T.params.lazyLoadingClass) || s.hasClass(T.params.lazyStatusLoadedClass) || s.hasClass(T.params.lazyStatusLoadingClass) || (i = i.add(s[0])), 0 !== i.length && i.each(function() {
                            var a = e(this);
                            a.addClass(T.params.lazyStatusLoadingClass);
                            var i = a.attr("data-background"),
                                r = a.attr("data-src"),
                                n = a.attr("data-srcset"),
                                o = a.attr("data-sizes");
                            T.loadImage(a[0], r || i, n, o, !1, function() {
                                if (void 0 !== T && null !== T && T) {
                                    if (i ? (a.css("background-image", 'url("' + i + '")'), a.removeAttr("data-background")) : (n && (a.attr("srcset", n), a.removeAttr("data-srcset")), o && (a.attr("sizes", o), a.removeAttr("data-sizes")), r && (a.attr("src", r), a.removeAttr("data-src"))), a.addClass(T.params.lazyStatusLoadedClass).removeClass(T.params.lazyStatusLoadingClass), s.find("." + T.params.lazyPreloaderClass + ", ." + T.params.preloaderClass).remove(), T.params.loop && t) {
                                        var e = s.attr("data-swiper-slide-index");
                                        if (s.hasClass(T.params.slideDuplicateClass)) {
                                            var l = T.wrapper.children('[data-swiper-slide-index="' + e + '"]:not(.' + T.params.slideDuplicateClass + ")");
                                            T.lazy.loadImageInSlide(l.index(), !1)
                                        } else {
                                            var p = T.wrapper.children("." + T.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                            T.lazy.loadImageInSlide(p.index(), !1)
                                        }
                                    }
                                    T.emit("onLazyImageReady", T, s[0], a[0])
                                }
                            }), T.emit("onLazyImageLoad", T, s[0], a[0])
                        })
                    }
                },
                load: function() {
                    var a, t = T.params.slidesPerView;
                    if ("auto" === t && (t = 0), T.lazy.initialImageLoaded || (T.lazy.initialImageLoaded = !0), T.params.watchSlidesVisibility) T.wrapper.children("." + T.params.slideVisibleClass).each(function() {
                        T.lazy.loadImageInSlide(e(this).index())
                    });
                    else if (t > 1)
                        for (a = T.activeIndex; a < T.activeIndex + t; a++) T.slides[a] && T.lazy.loadImageInSlide(a);
                    else T.lazy.loadImageInSlide(T.activeIndex);
                    if (T.params.lazyLoadingInPrevNext)
                        if (t > 1 || T.params.lazyLoadingInPrevNextAmount && T.params.lazyLoadingInPrevNextAmount > 1) {
                            var s = T.params.lazyLoadingInPrevNextAmount,
                                i = t,
                                r = Math.min(T.activeIndex + i + Math.max(s, i), T.slides.length),
                                n = Math.max(T.activeIndex - Math.max(i, s), 0);
                            for (a = T.activeIndex + t; a < r; a++) T.slides[a] && T.lazy.loadImageInSlide(a);
                            for (a = n; a < T.activeIndex; a++) T.slides[a] && T.lazy.loadImageInSlide(a)
                        } else {
                            var o = T.wrapper.children("." + T.params.slideNextClass);
                            o.length > 0 && T.lazy.loadImageInSlide(o.index());
                            var l = T.wrapper.children("." + T.params.slidePrevClass);
                            l.length > 0 && T.lazy.loadImageInSlide(l.index())
                        }
                },
                onTransitionStart: function() {
                    T.params.lazyLoading && (T.params.lazyLoadingOnTransitionStart || !T.params.lazyLoadingOnTransitionStart && !T.lazy.initialImageLoaded) && T.lazy.load()
                },
                onTransitionEnd: function() {
                    T.params.lazyLoading && !T.params.lazyLoadingOnTransitionStart && T.lazy.load()
                }
            }, T.scrollbar = {
                isTouched: !1,
                setDragPosition: function(e) {
                    var a = T.scrollbar,
                        t = T.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY,
                        s = t - a.track.offset()[T.isHorizontal() ? "left" : "top"] - a.dragSize / 2,
                        i = -T.minTranslate() * a.moveDivider,
                        r = -T.maxTranslate() * a.moveDivider;
                    s < i ? s = i : s > r && (s = r), s = -s / a.moveDivider, T.updateProgress(s), T.setWrapperTranslate(s, !0)
                },
                dragStart: function(e) {
                    var a = T.scrollbar;
                    a.isTouched = !0, e.preventDefault(), e.stopPropagation(), a.setDragPosition(e), clearTimeout(a.dragTimeout), a.track.transition(0), T.params.scrollbarHide && a.track.css("opacity", 1), T.wrapper.transition(100), a.drag.transition(100), T.emit("onScrollbarDragStart", T)
                },
                dragMove: function(e) {
                    var a = T.scrollbar;
                    a.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, a.setDragPosition(e), T.wrapper.transition(0), a.track.transition(0), a.drag.transition(0), T.emit("onScrollbarDragMove", T))
                },
                dragEnd: function(e) {
                    var a = T.scrollbar;
                    a.isTouched && (a.isTouched = !1, T.params.scrollbarHide && (clearTimeout(a.dragTimeout), a.dragTimeout = setTimeout(function() {
                        a.track.css("opacity", 0), a.track.transition(400)
                    }, 1e3)), T.emit("onScrollbarDragEnd", T), T.params.scrollbarSnapOnRelease && T.slideReset())
                },
                draggableEvents: function() {
                    return T.params.simulateTouch !== !1 || T.support.touch ? T.touchEvents : T.touchEventsDesktop
                }(),
                enableDraggable: function() {
                    var a = T.scrollbar,
                        t = T.support.touch ? a.track : document;
                    e(a.track).on(a.draggableEvents.start, a.dragStart), e(t).on(a.draggableEvents.move, a.dragMove), e(t).on(a.draggableEvents.end, a.dragEnd)
                },
                disableDraggable: function() {
                    var a = T.scrollbar,
                        t = T.support.touch ? a.track : document;
                    e(a.track).off(a.draggableEvents.start, a.dragStart), e(t).off(a.draggableEvents.move, a.dragMove), e(t).off(a.draggableEvents.end, a.dragEnd)
                },
                set: function() {
                    if (T.params.scrollbar) {
                        var a = T.scrollbar;
                        a.track = e(T.params.scrollbar), T.params.uniqueNavElements && "string" == typeof T.params.scrollbar && a.track.length > 1 && 1 === T.container.find(T.params.scrollbar).length && (a.track = T.container.find(T.params.scrollbar)), a.drag = a.track.find(".swiper-scrollbar-drag"), 0 === a.drag.length && (a.drag = e('<div class="swiper-scrollbar-drag"></div>'), a.track.append(a.drag)), a.drag[0].style.width = "", a.drag[0].style.height = "", a.trackSize = T.isHorizontal() ? a.track[0].offsetWidth : a.track[0].offsetHeight, a.divider = T.size / T.virtualSize, a.moveDivider = a.divider * (a.trackSize / T.size), a.dragSize = a.trackSize * a.divider, T.isHorizontal() ? a.drag[0].style.width = a.dragSize + "px" : a.drag[0].style.height = a.dragSize + "px", a.divider >= 1 ? a.track[0].style.display = "none" : a.track[0].style.display = "", T.params.scrollbarHide && (a.track[0].style.opacity = 0)
                    }
                },
                setTranslate: function() {
                    if (T.params.scrollbar) {
                        var e, a = T.scrollbar,
                            t = (T.translate, a.dragSize);
                        e = (a.trackSize - a.dragSize) * T.progress, T.rtl && T.isHorizontal() ? (e = -e, e > 0 ? (t = a.dragSize - e, e = 0) : -e + a.dragSize > a.trackSize && (t = a.trackSize + e)) : e < 0 ? (t = a.dragSize + e, e = 0) : e + a.dragSize > a.trackSize && (t = a.trackSize - e), T.isHorizontal() ? (T.support.transforms3d ? a.drag.transform("translate3d(" + e + "px, 0, 0)") : a.drag.transform("translateX(" + e + "px)"), a.drag[0].style.width = t + "px") : (T.support.transforms3d ? a.drag.transform("translate3d(0px, " + e + "px, 0)") : a.drag.transform("translateY(" + e + "px)"), a.drag[0].style.height = t + "px"), T.params.scrollbarHide && (clearTimeout(a.timeout), a.track[0].style.opacity = 1, a.timeout = setTimeout(function() {
                            a.track[0].style.opacity = 0, a.track.transition(400)
                        }, 1e3))
                    }
                },
                setTransition: function(e) {
                    T.params.scrollbar && T.scrollbar.drag.transition(e)
                }
            }, T.controller = {
                LinearSpline: function(e, a) {
                    var t = function() {
                        var e, a, t;
                        return function(s, i) {
                            for (a = -1, e = s.length; e - a > 1;) s[t = e + a >> 1] <= i ? a = t : e = t;
                            return e
                        }
                    }();
                    this.x = e, this.y = a, this.lastIndex = e.length - 1;
                    var s, i;
                    this.x.length;
                    this.interpolate = function(e) {
                        return e ? (i = t(this.x, e), s = i - 1, (e - this.x[s]) * (this.y[i] - this.y[s]) / (this.x[i] - this.x[s]) + this.y[s]) : 0
                    }
                },
                getInterpolateFunction: function(e) {
                    T.controller.spline || (T.controller.spline = T.params.loop ? new T.controller.LinearSpline(T.slidesGrid, e.slidesGrid) : new T.controller.LinearSpline(T.snapGrid, e.snapGrid))
                },
                setTranslate: function(e, t) {
                    function s(a) {
                        e = a.rtl && "horizontal" === a.params.direction ? -T.translate : T.translate, "slide" === T.params.controlBy && (T.controller.getInterpolateFunction(a), r = -T.controller.spline.interpolate(-e)), r && "container" !== T.params.controlBy || (i = (a.maxTranslate() - a.minTranslate()) / (T.maxTranslate() - T.minTranslate()), r = (e - T.minTranslate()) * i + a.minTranslate()), T.params.controlInverse && (r = a.maxTranslate() - r), a.updateProgress(r), a.setWrapperTranslate(r, !1, T), a.updateActiveIndex()
                    }
                    var i, r, n = T.params.control;
                    if (Array.isArray(n))
                        for (var o = 0; o < n.length; o++) n[o] !== t && n[o] instanceof a && s(n[o]);
                    else n instanceof a && t !== n && s(n)
                },
                setTransition: function(e, t) {
                    function s(a) {
                        a.setWrapperTransition(e, T), 0 !== e && (a.onTransitionStart(), a.wrapper.transitionEnd(function() {
                            r && (a.params.loop && "slide" === T.params.controlBy && a.fixLoop(), a.onTransitionEnd())
                        }))
                    }
                    var i, r = T.params.control;
                    if (Array.isArray(r))
                        for (i = 0; i < r.length; i++) r[i] !== t && r[i] instanceof a && s(r[i]);
                    else r instanceof a && t !== r && s(r)
                }
            }, T.hashnav = {
                onHashCange: function(e, a) {
                    var t = document.location.hash.replace("#", "");
                    t !== T.slides.eq(T.activeIndex).attr("data-hash") && T.slideTo(T.wrapper.children("." + T.params.slideClass + '[data-hash="' + t + '"]').index())
                },
                attachEvents: function(a) {
                    var t = a ? "off" : "on";
                    e(window)[t]("hashchange", T.hashnav.onHashCange)
                },
                setHash: function() {
                    if (T.hashnav.initialized && T.params.hashnav)
                        if (T.params.replaceState && window.history && window.history.replaceState) window.history.replaceState(null, null, "#" + T.slides.eq(T.activeIndex).attr("data-hash") || "");
                        else {
                            var e = T.slides.eq(T.activeIndex),
                                a = e.attr("data-hash") || e.attr("data-history");
                            document.location.hash = a || ""
                        }
                },
                init: function() {
                    if (T.params.hashnav && !T.params.history) {
                        T.hashnav.initialized = !0;
                        var e = document.location.hash.replace("#", "");
                        if (e)
                            for (var a = 0, t = T.slides.length; a < t; a++) {
                                var s = T.slides.eq(a),
                                    i = s.attr("data-hash") || s.attr("data-history");
                                if (i === e && !s.hasClass(T.params.slideDuplicateClass)) {
                                    var r = s.index();
                                    T.slideTo(r, 0, T.params.runCallbacksOnInit, !0)
                                }
                            }
                        T.params.hashnavWatchState && T.hashnav.attachEvents()
                    }
                },
                destroy: function() {
                    T.params.hashnavWatchState && T.hashnav.attachEvents(!0)
                }
            }, T.history = {
                init: function() {
                    if (T.params.history) {
                        if (!window.history || !window.history.pushState) return T.params.history = !1, void(T.params.hashnav = !0);
                        T.history.initialized = !0, this.paths = this.getPathValues(), (this.paths.key || this.paths.value) && (this.scrollToSlide(0, this.paths.value, T.params.runCallbacksOnInit), T.params.replaceState || window.addEventListener("popstate", this.setHistoryPopState))
                    }
                },
                setHistoryPopState: function() {
                    T.history.paths = T.history.getPathValues(), T.history.scrollToSlide(T.params.speed, T.history.paths.value, !1)
                },
                getPathValues: function() {
                    var e = window.location.pathname.slice(1).split("/"),
                        a = e.length;
                    return {
                        key: e[a - 2],
                        value: e[a - 1]
                    }
                },
                setHistory: function(e, a) {
                    if (T.history.initialized && T.params.history) {
                        var t = T.slides.eq(a),
                            s = this.slugify(t.attr("data-history"));
                        window.location.pathname.includes(e) || (s = e + "/" + s), T.params.replaceState ? window.history.replaceState(null, null, s) : window.history.pushState(null, null, s)
                    }
                },
                slugify: function(e) {
                    return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w\-]+/g, "").replace(/\-\-+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
                },
                scrollToSlide: function(e, a, t) {
                    if (a)
                        for (var s = 0, i = T.slides.length; s < i; s++) {
                            var r = T.slides.eq(s),
                                n = this.slugify(r.attr("data-history"));
                            if (n === a && !r.hasClass(T.params.slideDuplicateClass)) {
                                var o = r.index();
                                T.slideTo(o, e, t)
                            }
                        } else T.slideTo(0, e, t)
                }
            }, T.disableKeyboardControl = function() {
                T.params.keyboardControl = !1, e(document).off("keydown", p)
            }, T.enableKeyboardControl = function() {
                T.params.keyboardControl = !0, e(document).on("keydown", p)
            }, T.mousewheel = {
                event: !1,
                lastScrollTime: (new window.Date).getTime()
            }, T.params.mousewheelControl && (T.mousewheel.event = navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function() {
                var e = "onwheel" in document;
                if (!e) {
                    var a = document.createElement("div");
                    a.setAttribute("onwheel", "return;"), e = "function" == typeof a.onwheel
                }
                return !e && document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0 && (e = document.implementation.hasFeature("Events.wheel", "3.0")), e
            }() ? "wheel" : "mousewheel"), T.disableMousewheelControl = function() {
                if (!T.mousewheel.event) return !1;
                var a = T.container;
                return "container" !== T.params.mousewheelEventsTarged && (a = e(T.params.mousewheelEventsTarged)), a.off(T.mousewheel.event, u), T.params.mousewheelControl = !1, !0
            }, T.enableMousewheelControl = function() {
                if (!T.mousewheel.event) return !1;
                var a = T.container;
                return "container" !== T.params.mousewheelEventsTarged && (a = e(T.params.mousewheelEventsTarged)), a.on(T.mousewheel.event, u), T.params.mousewheelControl = !0, !0
            }, T.parallax = {
                setTranslate: function() {
                    T.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        c(this, T.progress)
                    }), T.slides.each(function() {
                        var a = e(this);
                        a.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                            c(this, Math.min(Math.max(a[0].progress, -1), 1))
                        })
                    })
                },
                setTransition: function(a) {
                    void 0 === a && (a = T.params.speed), T.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                        var t = e(this),
                            s = parseInt(t.attr("data-swiper-parallax-duration"), 10) || a;
                        0 === a && (s = 0), t.transition(s)
                    })
                }
            }, T.zoom = {
                scale: 1,
                currentScale: 1,
                isScaling: !1,
                gesture: {
                    slide: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    image: void 0,
                    imageWrap: void 0,
                    zoomMax: T.params.zoomMax
                },
                image: {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                velocity: {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                },
                getDistanceBetweenTouches: function(e) {
                    if (e.targetTouches.length < 2) return 1;
                    var a = e.targetTouches[0].pageX,
                        t = e.targetTouches[0].pageY,
                        s = e.targetTouches[1].pageX,
                        i = e.targetTouches[1].pageY;
                    return Math.sqrt(Math.pow(s - a, 2) + Math.pow(i - t, 2))
                },
                onGestureStart: function(a) {
                    var t = T.zoom;
                    if (!T.support.gestures) {
                        if ("touchstart" !== a.type || "touchstart" === a.type && a.targetTouches.length < 2) return;
                        t.gesture.scaleStart = t.getDistanceBetweenTouches(a)
                    }
                    if (!(t.gesture.slide && t.gesture.slide.length || (t.gesture.slide = e(this), 0 === t.gesture.slide.length && (t.gesture.slide = T.slides.eq(T.activeIndex)), t.gesture.image = t.gesture.slide.find("img, svg, canvas"), t.gesture.imageWrap = t.gesture.image.parent("." + T.params.zoomContainerClass), t.gesture.zoomMax = t.gesture.imageWrap.attr("data-swiper-zoom") || T.params.zoomMax, 0 !== t.gesture.imageWrap.length))) return void(t.gesture.image = void 0);
                    t.gesture.image.transition(0), t.isScaling = !0
                },
                onGestureChange: function(e) {
                    var a = T.zoom;
                    if (!T.support.gestures) {
                        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                        a.gesture.scaleMove = a.getDistanceBetweenTouches(e)
                    }
                    a.gesture.image && 0 !== a.gesture.image.length && (T.support.gestures ? a.scale = e.scale * a.currentScale : a.scale = a.gesture.scaleMove / a.gesture.scaleStart * a.currentScale, a.scale > a.gesture.zoomMax && (a.scale = a.gesture.zoomMax - 1 + Math.pow(a.scale - a.gesture.zoomMax + 1, .5)), a.scale < T.params.zoomMin && (a.scale = T.params.zoomMin + 1 - Math.pow(T.params.zoomMin - a.scale + 1, .5)), a.gesture.image.transform("translate3d(0,0,0) scale(" + a.scale + ")"))
                },
                onGestureEnd: function(e) {
                    var a = T.zoom;
                    !T.support.gestures && ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2) || a.gesture.image && 0 !== a.gesture.image.length && (a.scale = Math.max(Math.min(a.scale, a.gesture.zoomMax), T.params.zoomMin), a.gesture.image.transition(T.params.speed).transform("translate3d(0,0,0) scale(" + a.scale + ")"), a.currentScale = a.scale, a.isScaling = !1, 1 === a.scale && (a.gesture.slide = void 0))
                },
                onTouchStart: function(e, a) {
                    var t = e.zoom;
                    t.gesture.image && 0 !== t.gesture.image.length && (t.image.isTouched || ("android" === e.device.os && a.preventDefault(), t.image.isTouched = !0, t.image.touchesStart.x = "touchstart" === a.type ? a.targetTouches[0].pageX : a.pageX, t.image.touchesStart.y = "touchstart" === a.type ? a.targetTouches[0].pageY : a.pageY))
                },
                onTouchMove: function(e) {
                    var a = T.zoom;
                    if (a.gesture.image && 0 !== a.gesture.image.length && (T.allowClick = !1, a.image.isTouched && a.gesture.slide)) {
                        a.image.isMoved || (a.image.width = a.gesture.image[0].offsetWidth, a.image.height = a.gesture.image[0].offsetHeight, a.image.startX = T.getTranslate(a.gesture.imageWrap[0], "x") || 0, a.image.startY = T.getTranslate(a.gesture.imageWrap[0], "y") || 0, a.gesture.slideWidth = a.gesture.slide[0].offsetWidth, a.gesture.slideHeight = a.gesture.slide[0].offsetHeight, a.gesture.imageWrap.transition(0), T.rtl && (a.image.startX = -a.image.startX), T.rtl && (a.image.startY = -a.image.startY));
                        var t = a.image.width * a.scale,
                            s = a.image.height * a.scale;
                        if (!(t < a.gesture.slideWidth && s < a.gesture.slideHeight)) {
                            if (a.image.minX = Math.min(a.gesture.slideWidth / 2 - t / 2, 0), a.image.maxX = -a.image.minX, a.image.minY = Math.min(a.gesture.slideHeight / 2 - s / 2, 0), a.image.maxY = -a.image.minY, a.image.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, a.image.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !a.image.isMoved && !a.isScaling) {
                                if (T.isHorizontal() && Math.floor(a.image.minX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x < a.image.touchesStart.x || Math.floor(a.image.maxX) === Math.floor(a.image.startX) && a.image.touchesCurrent.x > a.image.touchesStart.x) return void(a.image.isTouched = !1);
                                if (!T.isHorizontal() && Math.floor(a.image.minY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y < a.image.touchesStart.y || Math.floor(a.image.maxY) === Math.floor(a.image.startY) && a.image.touchesCurrent.y > a.image.touchesStart.y) return void(a.image.isTouched = !1)
                            }
                            e.preventDefault(), e.stopPropagation(), a.image.isMoved = !0, a.image.currentX = a.image.touchesCurrent.x - a.image.touchesStart.x + a.image.startX, a.image.currentY = a.image.touchesCurrent.y - a.image.touchesStart.y + a.image.startY, a.image.currentX < a.image.minX && (a.image.currentX = a.image.minX + 1 - Math.pow(a.image.minX - a.image.currentX + 1, .8)), a.image.currentX > a.image.maxX && (a.image.currentX = a.image.maxX - 1 + Math.pow(a.image.currentX - a.image.maxX + 1, .8)), a.image.currentY < a.image.minY && (a.image.currentY = a.image.minY + 1 - Math.pow(a.image.minY - a.image.currentY + 1, .8)), a.image.currentY > a.image.maxY && (a.image.currentY = a.image.maxY - 1 + Math.pow(a.image.currentY - a.image.maxY + 1, .8)), a.velocity.prevPositionX || (a.velocity.prevPositionX = a.image.touchesCurrent.x), a.velocity.prevPositionY || (a.velocity.prevPositionY = a.image.touchesCurrent.y), a.velocity.prevTime || (a.velocity.prevTime = Date.now()), a.velocity.x = (a.image.touchesCurrent.x - a.velocity.prevPositionX) / (Date.now() - a.velocity.prevTime) / 2, a.velocity.y = (a.image.touchesCurrent.y - a.velocity.prevPositionY) / (Date.now() - a.velocity.prevTime) / 2, Math.abs(a.image.touchesCurrent.x - a.velocity.prevPositionX) < 2 && (a.velocity.x = 0), Math.abs(a.image.touchesCurrent.y - a.velocity.prevPositionY) < 2 && (a.velocity.y = 0), a.velocity.prevPositionX = a.image.touchesCurrent.x, a.velocity.prevPositionY = a.image.touchesCurrent.y, a.velocity.prevTime = Date.now(), a.gesture.imageWrap.transform("translate3d(" + a.image.currentX + "px, " + a.image.currentY + "px,0)")
                        }
                    }
                },
                onTouchEnd: function(e, a) {
                    var t = e.zoom;
                    if (t.gesture.image && 0 !== t.gesture.image.length) {
                        if (!t.image.isTouched || !t.image.isMoved) return t.image.isTouched = !1, void(t.image.isMoved = !1);
                        t.image.isTouched = !1, t.image.isMoved = !1;
                        var s = 300,
                            i = 300,
                            r = t.velocity.x * s,
                            n = t.image.currentX + r,
                            o = t.velocity.y * i,
                            l = t.image.currentY + o;
                        0 !== t.velocity.x && (s = Math.abs((n - t.image.currentX) / t.velocity.x)), 0 !== t.velocity.y && (i = Math.abs((l - t.image.currentY) / t.velocity.y));
                        var p = Math.max(s, i);
                        t.image.currentX = n, t.image.currentY = l;
                        var d = t.image.width * t.scale,
                            u = t.image.height * t.scale;
                        t.image.minX = Math.min(t.gesture.slideWidth / 2 - d / 2, 0), t.image.maxX = -t.image.minX, t.image.minY = Math.min(t.gesture.slideHeight / 2 - u / 2, 0), t.image.maxY = -t.image.minY, t.image.currentX = Math.max(Math.min(t.image.currentX, t.image.maxX), t.image.minX), t.image.currentY = Math.max(Math.min(t.image.currentY, t.image.maxY), t.image.minY), t.gesture.imageWrap.transition(p).transform("translate3d(" + t.image.currentX + "px, " + t.image.currentY + "px,0)")
                    }
                },
                onTransitionEnd: function(e) {
                    var a = e.zoom;
                    a.gesture.slide && e.previousIndex !== e.activeIndex && (a.gesture.image.transform("translate3d(0,0,0) scale(1)"), a.gesture.imageWrap.transform("translate3d(0,0,0)"), a.gesture.slide = a.gesture.image = a.gesture.imageWrap = void 0, a.scale = a.currentScale = 1)
                },
                toggleZoom: function(a, t) {
                    var s = a.zoom;
                    if (s.gesture.slide || (s.gesture.slide = a.clickedSlide ? e(a.clickedSlide) : a.slides.eq(a.activeIndex), s.gesture.image = s.gesture.slide.find("img, svg, canvas"), s.gesture.imageWrap = s.gesture.image.parent("." + a.params.zoomContainerClass)), s.gesture.image && 0 !== s.gesture.image.length) {
                        var i, r, n, o, l, p, d, u, c, m, h, g, f, v, w, y, x, T;
                        void 0 === s.image.touchesStart.x && t ? (i = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, r = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (i = s.image.touchesStart.x, r = s.image.touchesStart.y), s.scale && 1 !== s.scale ? (s.scale = s.currentScale = 1, s.gesture.imageWrap.transition(300).transform("translate3d(0,0,0)"), s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(1)"), s.gesture.slide = void 0) : (s.scale = s.currentScale = s.gesture.imageWrap.attr("data-swiper-zoom") || a.params.zoomMax, t ? (x = s.gesture.slide[0].offsetWidth, T = s.gesture.slide[0].offsetHeight, n = s.gesture.slide.offset().left, o = s.gesture.slide.offset().top, l = n + x / 2 - i, p = o + T / 2 - r, c = s.gesture.image[0].offsetWidth, m = s.gesture.image[0].offsetHeight, h = c * s.scale, g = m * s.scale, f = Math.min(x / 2 - h / 2, 0), v = Math.min(T / 2 - g / 2, 0), w = -f, y = -v, d = l * s.scale, u = p * s.scale, d < f && (d = f), d > w && (d = w), u < v && (u = v), u > y && (u = y)) : (d = 0, u = 0), s.gesture.imageWrap.transition(300).transform("translate3d(" + d + "px, " + u + "px,0)"), s.gesture.image.transition(300).transform("translate3d(0,0,0) scale(" + s.scale + ")"))
                    }
                },
                attachEvents: function(a) {
                    var t = a ? "off" : "on";
                    if (T.params.zoom) {
                        var s = (T.slides, !("touchstart" !== T.touchEvents.start || !T.support.passiveListener || !T.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        });
                        T.support.gestures ? (T.slides[t]("gesturestart", T.zoom.onGestureStart, s), T.slides[t]("gesturechange", T.zoom.onGestureChange, s), T.slides[t]("gestureend", T.zoom.onGestureEnd, s)) : "touchstart" === T.touchEvents.start && (T.slides[t](T.touchEvents.start, T.zoom.onGestureStart, s), T.slides[t](T.touchEvents.move, T.zoom.onGestureChange, s), T.slides[t](T.touchEvents.end, T.zoom.onGestureEnd, s)), T[t]("touchStart", T.zoom.onTouchStart), T.slides.each(function(a, s) {
                            e(s).find("." + T.params.zoomContainerClass).length > 0 && e(s)[t](T.touchEvents.move, T.zoom.onTouchMove)
                        }), T[t]("touchEnd", T.zoom.onTouchEnd), T[t]("transitionEnd", T.zoom.onTransitionEnd), T.params.zoomToggle && T.on("doubleTap", T.zoom.toggleZoom)
                    }
                },
                init: function() {
                    T.zoom.attachEvents()
                },
                destroy: function() {
                    T.zoom.attachEvents(!0)
                }
            }, T._plugins = [];
            for (var Y in T.plugins) {
                var O = T.plugins[Y](T, T.params[Y]);
                O && T._plugins.push(O)
            }
            return T.callPlugins = function(e) {
                for (var a = 0; a < T._plugins.length; a++) e in T._plugins[a] && T._plugins[a][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, T.emitterEventListeners = {}, T.emit = function(e) {
                T.params[e] && T.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                var a;
                if (T.emitterEventListeners[e])
                    for (a = 0; a < T.emitterEventListeners[e].length; a++) T.emitterEventListeners[e][a](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                T.callPlugins && T.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
            }, T.on = function(e, a) {
                return e = m(e), T.emitterEventListeners[e] || (T.emitterEventListeners[e] = []), T.emitterEventListeners[e].push(a), T
            }, T.off = function(e, a) {
                var t;
                if (e = m(e), void 0 === a) return T.emitterEventListeners[e] = [], T;
                if (T.emitterEventListeners[e] && 0 !== T.emitterEventListeners[e].length) {
                    for (t = 0; t < T.emitterEventListeners[e].length; t++) T.emitterEventListeners[e][t] === a && T.emitterEventListeners[e].splice(t, 1);
                    return T
                }
            }, T.once = function(e, a) {
                e = m(e);
                var t = function() {
                    a(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]), T.off(e, t)
                };
                return T.on(e, t), T
            }, T.a11y = {
                makeFocusable: function(e) {
                    return e.attr("tabIndex", "0"), e
                },
                addRole: function(e, a) {
                    return e.attr("role", a), e
                },
                addLabel: function(e, a) {
                    return e.attr("aria-label", a), e
                },
                disable: function(e) {
                    return e.attr("aria-disabled", !0), e
                },
                enable: function(e) {
                    return e.attr("aria-disabled", !1), e
                },
                onEnterKey: function(a) {
                    13 === a.keyCode && (e(a.target).is(T.params.nextButton) ? (T.onClickNext(a), T.isEnd ? T.a11y.notify(T.params.lastSlideMessage) : T.a11y.notify(T.params.nextSlideMessage)) : e(a.target).is(T.params.prevButton) && (T.onClickPrev(a), T.isBeginning ? T.a11y.notify(T.params.firstSlideMessage) : T.a11y.notify(T.params.prevSlideMessage)), e(a.target).is("." + T.params.bulletClass) && e(a.target)[0].click())
                },
                liveRegion: e('<span class="' + T.params.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>'),
                notify: function(e) {
                    var a = T.a11y.liveRegion;
                    0 !== a.length && (a.html(""), a.html(e))
                },
                init: function() {
                    T.params.nextButton && T.nextButton && T.nextButton.length > 0 && (T.a11y.makeFocusable(T.nextButton), T.a11y.addRole(T.nextButton, "button"), T.a11y.addLabel(T.nextButton, T.params.nextSlideMessage)), T.params.prevButton && T.prevButton && T.prevButton.length > 0 && (T.a11y.makeFocusable(T.prevButton), T.a11y.addRole(T.prevButton, "button"), T.a11y.addLabel(T.prevButton, T.params.prevSlideMessage)), e(T.container).append(T.a11y.liveRegion)
                },
                initPagination: function() {
                    T.params.pagination && T.params.paginationClickable && T.bullets && T.bullets.length && T.bullets.each(function() {
                        var a = e(this);
                        T.a11y.makeFocusable(a), T.a11y.addRole(a, "button"), T.a11y.addLabel(a, T.params.paginationBulletMessage.replace(/{{index}}/, a.index() + 1))
                    })
                },
                destroy: function() {
                    T.a11y.liveRegion && T.a11y.liveRegion.length > 0 && T.a11y.liveRegion.remove()
                }
            }, T.init = function() {
                T.params.loop && T.createLoop(), T.updateContainerSize(), T.updateSlidesSize(), T.updatePagination(), T.params.scrollbar && T.scrollbar && (T.scrollbar.set(), T.params.scrollbarDraggable && T.scrollbar.enableDraggable()), "slide" !== T.params.effect && T.effects[T.params.effect] && (T.params.loop || T.updateProgress(), T.effects[T.params.effect].setTranslate()), T.params.loop ? T.slideTo(T.params.initialSlide + T.loopedSlides, 0, T.params.runCallbacksOnInit) : (T.slideTo(T.params.initialSlide, 0, T.params.runCallbacksOnInit), 0 === T.params.initialSlide && (T.parallax && T.params.parallax && T.parallax.setTranslate(), T.lazy && T.params.lazyLoading && (T.lazy.load(), T.lazy.initialImageLoaded = !0))), T.attachEvents(), T.params.observer && T.support.observer && T.initObservers(), T.params.preloadImages && !T.params.lazyLoading && T.preloadImages(), T.params.zoom && T.zoom && T.zoom.init(), T.params.autoplay && T.startAutoplay(), T.params.keyboardControl && T.enableKeyboardControl && T.enableKeyboardControl(), T.params.mousewheelControl && T.enableMousewheelControl && T.enableMousewheelControl(), T.params.hashnavReplaceState && (T.params.replaceState = T.params.hashnavReplaceState), T.params.history && T.history && T.history.init(), T.params.hashnav && T.hashnav && T.hashnav.init(), T.params.a11y && T.a11y && T.a11y.init(), T.emit("onInit", T)
            }, T.cleanupStyles = function() {
                T.container.removeClass(T.classNames.join(" ")).removeAttr("style"), T.wrapper.removeAttr("style"), T.slides && T.slides.length && T.slides.removeClass([T.params.slideVisibleClass, T.params.slideActiveClass, T.params.slideNextClass, T.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"), T.paginationContainer && T.paginationContainer.length && T.paginationContainer.removeClass(T.params.paginationHiddenClass), T.bullets && T.bullets.length && T.bullets.removeClass(T.params.bulletActiveClass), T.params.prevButton && e(T.params.prevButton).removeClass(T.params.buttonDisabledClass), T.params.nextButton && e(T.params.nextButton).removeClass(T.params.buttonDisabledClass), T.params.scrollbar && T.scrollbar && (T.scrollbar.track && T.scrollbar.track.length && T.scrollbar.track.removeAttr("style"), T.scrollbar.drag && T.scrollbar.drag.length && T.scrollbar.drag.removeAttr("style"))
            }, T.destroy = function(e, a) {
                T.detachEvents(), T.stopAutoplay(), T.params.scrollbar && T.scrollbar && T.params.scrollbarDraggable && T.scrollbar.disableDraggable(), T.params.loop && T.destroyLoop(), a && T.cleanupStyles(), T.disconnectObservers(), T.params.zoom && T.zoom && T.zoom.destroy(), T.params.keyboardControl && T.disableKeyboardControl && T.disableKeyboardControl(), T.params.mousewheelControl && T.disableMousewheelControl && T.disableMousewheelControl(), T.params.a11y && T.a11y && T.a11y.destroy(), T.params.history && !T.params.replaceState && window.removeEventListener("popstate", T.history.setHistoryPopState), T.params.hashnav && T.hashnav && T.hashnav.destroy(), T.emit("onDestroy"), e !== !1 && (T = null)
            }, T.init(), T
        }
    };
    a.prototype = {
        isSafari: function() {
            var e = window.navigator.userAgent.toLowerCase();
            return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
        }(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent),
        isArray: function(e) {
            return "[object Array]" === Object.prototype.toString.apply(e)
        },
        browser: {
            ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
            ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1,
            lteIE9: function() {
                var e = document.createElement("div");
                return e.innerHTML = "<!--[if lte IE 9]><i></i><![endif]-->", 1 === e.getElementsByTagName("i").length
            }()
        },
        device: function() {
            var e = window.navigator.userAgent,
                a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                t = e.match(/(iPad).*OS\s([\d_]+)/),
                s = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                i = !t && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            return {
                ios: t || i || s,
                android: a
            }
        }(),
        support: {
            touch: window.Modernizr && Modernizr.touch === !0 || function() {
                return !!("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch)
            }(),
            transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                var e = document.createElement("div").style;
                return "webkitPerspective" in e || "MozPerspective" in e || "OPerspective" in e || "MsPerspective" in e || "perspective" in e
            }(),
            flexbox: function() {
                for (var e = document.createElement("div").style, a = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), t = 0; t < a.length; t++)
                    if (a[t] in e) return !0
            }(),
            observer: function() {
                return "MutationObserver" in window || "WebkitMutationObserver" in window
            }(),
            passiveListener: function() {
                var e = !1;
                try {
                    var a = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    window.addEventListener("testPassiveListener", null, a)
                } catch (e) {}
                return e
            }(),
            gestures: function() {
                return "ongesturestart" in window
            }()
        },
        plugins: {}
    };
    for (var t = (function() {
            var e = function(e) {
                    var a = this,
                        t = 0;
                    for (t = 0; t < e.length; t++) a[t] = e[t];
                    return a.length = e.length, this
                },
                a = function(a, t) {
                    var s = [],
                        i = 0;
                    if (a && !t && a instanceof e) return a;
                    if (a)
                        if ("string" == typeof a) {
                            var r, n, o = a.trim();
                            if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                                var l = "div";
                                for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), 0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), n = document.createElement(l), n.innerHTML = a, i = 0; i < n.childNodes.length; i++) s.push(n.childNodes[i])
                            } else
                                for (r = t || "#" !== a[0] || a.match(/[ .<>:~]/) ? (t || document).querySelectorAll(a) : [document.getElementById(a.split("#")[1])], i = 0; i < r.length; i++) r[i] && s.push(r[i])
                        } else if (a.nodeType || a === window || a === document) s.push(a);
                    else if (a.length > 0 && a[0].nodeType)
                        for (i = 0; i < a.length; i++) s.push(a[i]);
                    return new e(s)
                };
            return e.prototype = {
                addClass: function(e) {
                    if (void 0 === e) return this;
                    for (var a = e.split(" "), t = 0; t < a.length; t++)
                        for (var s = 0; s < this.length; s++) this[s].classList.add(a[t]);
                    return this
                },
                removeClass: function(e) {
                    for (var a = e.split(" "), t = 0; t < a.length; t++)
                        for (var s = 0; s < this.length; s++) this[s].classList.remove(a[t]);
                    return this
                },
                hasClass: function(e) {
                    return !!this[0] && this[0].classList.contains(e)
                },
                toggleClass: function(e) {
                    for (var a = e.split(" "), t = 0; t < a.length; t++)
                        for (var s = 0; s < this.length; s++) this[s].classList.toggle(a[t]);
                    return this
                },
                attr: function(e, a) {
                    if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                    for (var t = 0; t < this.length; t++)
                        if (2 === arguments.length) this[t].setAttribute(e, a);
                        else
                            for (var s in e) this[t][s] = e[s], this[t].setAttribute(s, e[s]);
                    return this
                },
                removeAttr: function(e) {
                    for (var a = 0; a < this.length; a++) this[a].removeAttribute(e);
                    return this
                },
                data: function(e, a) {
                    if (void 0 !== a) {
                        for (var t = 0; t < this.length; t++) {
                            var s = this[t];
                            s.dom7ElementDataStorage || (s.dom7ElementDataStorage = {}), s.dom7ElementDataStorage[e] = a
                        }
                        return this
                    }
                    if (this[0]) {
                        var i = this[0].getAttribute("data-" + e);
                        return i ? i : this[0].dom7ElementDataStorage && e in this[0].dom7ElementDataStorage ? this[0].dom7ElementDataStorage[e] : void 0
                    }
                },
                transform: function(e) {
                    for (var a = 0; a < this.length; a++) {
                        var t = this[a].style;
                        t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
                    }
                    return this
                },
                transition: function(e) {
                    "string" != typeof e && (e += "ms");
                    for (var a = 0; a < this.length; a++) {
                        var t = this[a].style;
                        t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
                    }
                    return this
                },
                on: function(e, t, s, i) {
                    function r(e) {
                        var i = e.target;
                        if (a(i).is(t)) s.call(i, e);
                        else
                            for (var r = a(i).parents(), n = 0; n < r.length; n++) a(r[n]).is(t) && s.call(r[n], e)
                    }
                    var n, o, l = e.split(" ");
                    for (n = 0; n < this.length; n++)
                        if ("function" == typeof t || t === !1)
                            for ("function" == typeof t && (s = arguments[1], i = arguments[2] || !1), o = 0; o < l.length; o++) this[n].addEventListener(l[o], s, i);
                        else
                            for (o = 0; o < l.length; o++) this[n].dom7LiveListeners || (this[n].dom7LiveListeners = []), this[n].dom7LiveListeners.push({
                                listener: s,
                                liveListener: r
                            }), this[n].addEventListener(l[o], r, i);
                    return this
                },
                off: function(e, a, t, s) {
                    for (var i = e.split(" "), r = 0; r < i.length; r++)
                        for (var n = 0; n < this.length; n++)
                            if ("function" == typeof a || a === !1) "function" == typeof a && (t = arguments[1], s = arguments[2] || !1), this[n].removeEventListener(i[r], t, s);
                            else if (this[n].dom7LiveListeners)
                        for (var o = 0; o < this[n].dom7LiveListeners.length; o++) this[n].dom7LiveListeners[o].listener === t && this[n].removeEventListener(i[r], this[n].dom7LiveListeners[o].liveListener, s);
                    return this
                },
                once: function(e, a, t, s) {
                    function i(n) {
                        t(n), r.off(e, a, i, s)
                    }
                    var r = this;
                    "function" == typeof a && (a = !1, t = arguments[1], s = arguments[2]), r.on(e, a, i, s)
                },
                trigger: function(e, a) {
                    for (var t = 0; t < this.length; t++) {
                        var s;
                        try {
                            s = new window.CustomEvent(e, {
                                detail: a,
                                bubbles: !0,
                                cancelable: !0
                            })
                        } catch (t) {
                            s = document.createEvent("Event"), s.initEvent(e, !0, !0), s.detail = a
                        }
                        this[t].dispatchEvent(s)
                    }
                    return this
                },
                transitionEnd: function(e) {
                    function a(r) {
                        if (r.target === this)
                            for (e.call(this, r), t = 0; t < s.length; t++) i.off(s[t], a)
                    }
                    var t, s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
                        i = this;
                    if (e)
                        for (t = 0; t < s.length; t++) i.on(s[t], a);
                    return this
                },
                width: function() {
                    return this[0] === window ? window.innerWidth : this.length > 0 ? parseFloat(this.css("width")) : null
                },
                outerWidth: function(e) {
                    return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
                },
                height: function() {
                    return this[0] === window ? window.innerHeight : this.length > 0 ? parseFloat(this.css("height")) : null
                },
                outerHeight: function(e) {
                    return this.length > 0 ? e ? this[0].offsetHeight + parseFloat(this.css("margin-top")) + parseFloat(this.css("margin-bottom")) : this[0].offsetHeight : null
                },
                offset: function() {
                    if (this.length > 0) {
                        var e = this[0],
                            a = e.getBoundingClientRect(),
                            t = document.body,
                            s = e.clientTop || t.clientTop || 0,
                            i = e.clientLeft || t.clientLeft || 0,
                            r = window.pageYOffset || e.scrollTop,
                            n = window.pageXOffset || e.scrollLeft;
                        return {
                            top: a.top + r - s,
                            left: a.left + n - i
                        }
                    }
                    return null
                },
                css: function(e, a) {
                    var t;
                    if (1 === arguments.length) {
                        if ("string" != typeof e) {
                            for (t = 0; t < this.length; t++)
                                for (var s in e) this[t].style[s] = e[s];
                            return this
                        }
                        if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
                    }
                    if (2 === arguments.length && "string" == typeof e) {
                        for (t = 0; t < this.length; t++) this[t].style[e] = a;
                        return this
                    }
                    return this
                },
                each: function(e) {
                    for (var a = 0; a < this.length; a++) e.call(this[a], a, this[a]);
                    return this
                },
                html: function(e) {
                    if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
                    for (var a = 0; a < this.length; a++) this[a].innerHTML = e;
                    return this
                },
                text: function(e) {
                    if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                    for (var a = 0; a < this.length; a++) this[a].textContent = e;
                    return this
                },
                is: function(t) {
                    if (!this[0]) return !1;
                    var s, i;
                    if ("string" == typeof t) {
                        var r = this[0];
                        if (r === document) return t === document;
                        if (r === window) return t === window;
                        if (r.matches) return r.matches(t);
                        if (r.webkitMatchesSelector) return r.webkitMatchesSelector(t);
                        if (r.mozMatchesSelector) return r.mozMatchesSelector(t);
                        if (r.msMatchesSelector) return r.msMatchesSelector(t);
                        for (s = a(t), i = 0; i < s.length; i++)
                            if (s[i] === this[0]) return !0;
                        return !1
                    }
                    if (t === document) return this[0] === document;
                    if (t === window) return this[0] === window;
                    if (t.nodeType || t instanceof e) {
                        for (s = t.nodeType ? [t] : t, i = 0; i < s.length; i++)
                            if (s[i] === this[0]) return !0;
                        return !1
                    }
                    return !1
                },
                index: function() {
                    if (this[0]) {
                        for (var e = this[0], a = 0; null !== (e = e.previousSibling);) 1 === e.nodeType && a++;
                        return a
                    }
                },
                eq: function(a) {
                    if (void 0 === a) return this;
                    var t, s = this.length;
                    return a > s - 1 ? new e([]) : a < 0 ? (t = s + a, new e(t < 0 ? [] : [this[t]])) : new e([this[a]])
                },
                append: function(a) {
                    var t, s;
                    for (t = 0; t < this.length; t++)
                        if ("string" == typeof a) {
                            var i = document.createElement("div");
                            for (i.innerHTML = a; i.firstChild;) this[t].appendChild(i.firstChild)
                        } else if (a instanceof e)
                        for (s = 0; s < a.length; s++) this[t].appendChild(a[s]);
                    else this[t].appendChild(a);
                    return this
                },
                prepend: function(a) {
                    var t, s;
                    for (t = 0; t < this.length; t++)
                        if ("string" == typeof a) {
                            var i = document.createElement("div");
                            for (i.innerHTML = a, s = i.childNodes.length - 1; s >= 0; s--) this[t].insertBefore(i.childNodes[s], this[t].childNodes[0])
                        } else if (a instanceof e)
                        for (s = 0; s < a.length; s++) this[t].insertBefore(a[s], this[t].childNodes[0]);
                    else this[t].insertBefore(a, this[t].childNodes[0]);
                    return this
                },
                insertBefore: function(e) {
                    for (var t = a(e), s = 0; s < this.length; s++)
                        if (1 === t.length) t[0].parentNode.insertBefore(this[s], t[0]);
                        else if (t.length > 1)
                        for (var i = 0; i < t.length; i++) t[i].parentNode.insertBefore(this[s].cloneNode(!0), t[i])
                },
                insertAfter: function(e) {
                    for (var t = a(e), s = 0; s < this.length; s++)
                        if (1 === t.length) t[0].parentNode.insertBefore(this[s], t[0].nextSibling);
                        else if (t.length > 1)
                        for (var i = 0; i < t.length; i++) t[i].parentNode.insertBefore(this[s].cloneNode(!0), t[i].nextSibling)
                },
                next: function(t) {
                    return new e(this.length > 0 ? t ? this[0].nextElementSibling && a(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
                },
                nextAll: function(t) {
                    var s = [],
                        i = this[0];
                    if (!i) return new e([]);
                    for (; i.nextElementSibling;) {
                        var r = i.nextElementSibling;
                        t ? a(r).is(t) && s.push(r) : s.push(r), i = r
                    }
                    return new e(s)
                },
                prev: function(t) {
                    return new e(this.length > 0 ? t ? this[0].previousElementSibling && a(this[0].previousElementSibling).is(t) ? [this[0].previousElementSibling] : [] : this[0].previousElementSibling ? [this[0].previousElementSibling] : [] : [])
                },
                prevAll: function(t) {
                    var s = [],
                        i = this[0];
                    if (!i) return new e([]);
                    for (; i.previousElementSibling;) {
                        var r = i.previousElementSibling;
                        t ? a(r).is(t) && s.push(r) : s.push(r), i = r
                    }
                    return new e(s)
                },
                parent: function(e) {
                    for (var t = [], s = 0; s < this.length; s++) e ? a(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode);
                    return a(a.unique(t))
                },
                parents: function(e) {
                    for (var t = [], s = 0; s < this.length; s++)
                        for (var i = this[s].parentNode; i;) e ? a(i).is(e) && t.push(i) : t.push(i), i = i.parentNode;
                    return a(a.unique(t))
                },
                find: function(a) {
                    for (var t = [], s = 0; s < this.length; s++)
                        for (var i = this[s].querySelectorAll(a), r = 0; r < i.length; r++) t.push(i[r]);
                    return new e(t)
                },
                children: function(t) {
                    for (var s = [], i = 0; i < this.length; i++)
                        for (var r = this[i].childNodes, n = 0; n < r.length; n++) t ? 1 === r[n].nodeType && a(r[n]).is(t) && s.push(r[n]) : 1 === r[n].nodeType && s.push(r[n]);
                    return new e(a.unique(s))
                },
                remove: function() {
                    for (var e = 0; e < this.length; e++) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                    return this
                },
                add: function() {
                    var e, t, s = this;
                    for (e = 0; e < arguments.length; e++) {
                        var i = a(arguments[e]);
                        for (t = 0; t < i.length; t++) s[s.length] = i[t], s.length++
                    }
                    return s
                }
            }, a.fn = e.prototype, a.unique = function(e) {
                for (var a = [], t = 0; t < e.length; t++) a.indexOf(e[t]) === -1 && a.push(e[t]);
                return a
            }, a
        }()), s = ["jQuery", "Zepto", "Dom7"], i = 0; i < s.length; i++) window[s[i]] && function(e) {
        e.fn.swiper = function(t) {
            var s;
            return e(this).each(function() {
                var e = new a(this, t);
                s || (s = e)
            }), s
        }
    }(window[s[i]]);
    var r;
    r = void 0 === t ? window.Dom7 || window.Zepto || window.jQuery : t, r && ("transitionEnd" in r.fn || (r.fn.transitionEnd = function(e) {
        function a(r) {
            if (r.target === this)
                for (e.call(this, r), t = 0; t < s.length; t++) i.off(s[t], a)
        }
        var t, s = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"],
            i = this;
        if (e)
            for (t = 0; t < s.length; t++) i.on(s[t], a);
        return this
    }), "transform" in r.fn || (r.fn.transform = function(e) {
        for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransform = t.MsTransform = t.msTransform = t.MozTransform = t.OTransform = t.transform = e
        }
        return this
    }), "transition" in r.fn || (r.fn.transition = function(e) {
        "string" != typeof e && (e += "ms");
        for (var a = 0; a < this.length; a++) {
            var t = this[a].style;
            t.webkitTransitionDuration = t.MsTransitionDuration = t.msTransitionDuration = t.MozTransitionDuration = t.OTransitionDuration = t.transitionDuration = e
        }
        return this
    }), "outerWidth" in r.fn || (r.fn.outerWidth = function(e) {
        return this.length > 0 ? e ? this[0].offsetWidth + parseFloat(this.css("margin-right")) + parseFloat(this.css("margin-left")) : this[0].offsetWidth : null
    })), window.Swiper = a
}(), "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
    "use strict";
    return window.Swiper
});
//# sourceMappingURL=maps/swiper.min.js.map


//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function() {
    function n(n) {
        function t(t, r, e, u, i, o) {
            for (; i >= 0 && o > i; i += n) {
                var a = u ? u[i] : i;
                e = r(e, t[a], a, t)
            }
            return e
        }
        return function(r, e, u, i) {
            e = b(e, i, 4);
            var o = !k(r) && m.keys(r),
                a = (o || r).length,
                c = n > 0 ? 0 : a - 1;
            return arguments.length < 3 && (u = r[o ? o[c] : c], c += n), t(r, e, u, o, c, a)
        }
    }

    function t(n) {
        return function(t, r, e) {
            r = x(r, e);
            for (var u = O(t), i = n > 0 ? 0 : u - 1; i >= 0 && u > i; i += n)
                if (r(t[i], i, t)) return i;
            return -1
        }
    }

    function r(n, t, r) {
        return function(e, u, i) {
            var o = 0,
                a = O(e);
            if ("number" == typeof i) n > 0 ? o = i >= 0 ? i : Math.max(i + a, o) : a = i >= 0 ? Math.min(i + 1, a) : i + a + 1;
            else if (r && i && a) return i = r(e, u), e[i] === u ? i : -1;
            if (u !== u) return i = t(l.call(e, o, a), m.isNaN), i >= 0 ? i + o : -1;
            for (i = n > 0 ? o : a - 1; i >= 0 && a > i; i += n)
                if (e[i] === u) return i;
            return -1
        }
    }

    function e(n, t) {
        var r = I.length,
            e = n.constructor,
            u = m.isFunction(e) && e.prototype || a,
            i = "constructor";
        for (m.has(n, i) && !m.contains(t, i) && t.push(i); r--;) i = I[r], i in n && n[i] !== u[i] && !m.contains(t, i) && t.push(i)
    }
    var u = this,
        i = u._,
        o = Array.prototype,
        a = Object.prototype,
        c = Function.prototype,
        f = o.push,
        l = o.slice,
        s = a.toString,
        p = a.hasOwnProperty,
        h = Array.isArray,
        v = Object.keys,
        g = c.bind,
        y = Object.create,
        d = function() {},
        m = function(n) {
            return n instanceof m ? n : this instanceof m ? void(this._wrapped = n) : new m(n)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = m), exports._ = m) : u._ = m, m.VERSION = "1.8.3";
    var b = function(n, t, r) {
            if (t === void 0) return n;
            switch (null == r ? 3 : r) {
                case 1:
                    return function(r) {
                        return n.call(t, r)
                    };
                case 2:
                    return function(r, e) {
                        return n.call(t, r, e)
                    };
                case 3:
                    return function(r, e, u) {
                        return n.call(t, r, e, u)
                    };
                case 4:
                    return function(r, e, u, i) {
                        return n.call(t, r, e, u, i)
                    }
            }
            return function() {
                return n.apply(t, arguments)
            }
        },
        x = function(n, t, r) {
            return null == n ? m.identity : m.isFunction(n) ? b(n, t, r) : m.isObject(n) ? m.matcher(n) : m.property(n)
        };
    m.iteratee = function(n, t) {
        return x(n, t, 1 / 0)
    };
    var _ = function(n, t) {
            return function(r) {
                var e = arguments.length;
                if (2 > e || null == r) return r;
                for (var u = 1; e > u; u++)
                    for (var i = arguments[u], o = n(i), a = o.length, c = 0; a > c; c++) {
                        var f = o[c];
                        t && r[f] !== void 0 || (r[f] = i[f])
                    }
                return r
            }
        },
        j = function(n) {
            if (!m.isObject(n)) return {};
            if (y) return y(n);
            d.prototype = n;
            var t = new d;
            return d.prototype = null, t
        },
        w = function(n) {
            return function(t) {
                return null == t ? void 0 : t[n]
            }
        },
        A = Math.pow(2, 53) - 1,
        O = w("length"),
        k = function(n) {
            var t = O(n);
            return "number" == typeof t && t >= 0 && A >= t
        };
    m.each = m.forEach = function(n, t, r) {
        t = b(t, r);
        var e, u;
        if (k(n))
            for (e = 0, u = n.length; u > e; e++) t(n[e], e, n);
        else {
            var i = m.keys(n);
            for (e = 0, u = i.length; u > e; e++) t(n[i[e]], i[e], n)
        }
        return n
    }, m.map = m.collect = function(n, t, r) {
        t = x(t, r);
        for (var e = !k(n) && m.keys(n), u = (e || n).length, i = Array(u), o = 0; u > o; o++) {
            var a = e ? e[o] : o;
            i[o] = t(n[a], a, n)
        }
        return i
    }, m.reduce = m.foldl = m.inject = n(1), m.reduceRight = m.foldr = n(-1), m.find = m.detect = function(n, t, r) {
        var e;
        return e = k(n) ? m.findIndex(n, t, r) : m.findKey(n, t, r), e !== void 0 && e !== -1 ? n[e] : void 0
    }, m.filter = m.select = function(n, t, r) {
        var e = [];
        return t = x(t, r), m.each(n, function(n, r, u) {
            t(n, r, u) && e.push(n)
        }), e
    }, m.reject = function(n, t, r) {
        return m.filter(n, m.negate(x(t)), r)
    }, m.every = m.all = function(n, t, r) {
        t = x(t, r);
        for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
            var o = e ? e[i] : i;
            if (!t(n[o], o, n)) return !1
        }
        return !0
    }, m.some = m.any = function(n, t, r) {
        t = x(t, r);
        for (var e = !k(n) && m.keys(n), u = (e || n).length, i = 0; u > i; i++) {
            var o = e ? e[i] : i;
            if (t(n[o], o, n)) return !0
        }
        return !1
    }, m.contains = m.includes = m.include = function(n, t, r, e) {
        return k(n) || (n = m.values(n)), ("number" != typeof r || e) && (r = 0), m.indexOf(n, t, r) >= 0
    }, m.invoke = function(n, t) {
        var r = l.call(arguments, 2),
            e = m.isFunction(t);
        return m.map(n, function(n) {
            var u = e ? t : n[t];
            return null == u ? u : u.apply(n, r)
        })
    }, m.pluck = function(n, t) {
        return m.map(n, m.property(t))
    }, m.where = function(n, t) {
        return m.filter(n, m.matcher(t))
    }, m.findWhere = function(n, t) {
        return m.find(n, m.matcher(t))
    }, m.max = function(n, t, r) {
        var e, u, i = -1 / 0,
            o = -1 / 0;
        if (null == t && null != n) {
            n = k(n) ? n : m.values(n);
            for (var a = 0, c = n.length; c > a; a++) e = n[a], e > i && (i = e)
        } else t = x(t, r), m.each(n, function(n, r, e) {
            u = t(n, r, e), (u > o || u === -1 / 0 && i === -1 / 0) && (i = n, o = u)
        });
        return i
    }, m.min = function(n, t, r) {
        var e, u, i = 1 / 0,
            o = 1 / 0;
        if (null == t && null != n) {
            n = k(n) ? n : m.values(n);
            for (var a = 0, c = n.length; c > a; a++) e = n[a], i > e && (i = e)
        } else t = x(t, r), m.each(n, function(n, r, e) {
            u = t(n, r, e), (o > u || 1 / 0 === u && 1 / 0 === i) && (i = n, o = u)
        });
        return i
    }, m.shuffle = function(n) {
        for (var t, r = k(n) ? n : m.values(n), e = r.length, u = Array(e), i = 0; e > i; i++) t = m.random(0, i), t !== i && (u[i] = u[t]), u[t] = r[i];
        return u
    }, m.sample = function(n, t, r) {
        return null == t || r ? (k(n) || (n = m.values(n)), n[m.random(n.length - 1)]) : m.shuffle(n).slice(0, Math.max(0, t))
    }, m.sortBy = function(n, t, r) {
        return t = x(t, r), m.pluck(m.map(n, function(n, r, e) {
            return {
                value: n,
                index: r,
                criteria: t(n, r, e)
            }
        }).sort(function(n, t) {
            var r = n.criteria,
                e = t.criteria;
            if (r !== e) {
                if (r > e || r === void 0) return 1;
                if (e > r || e === void 0) return -1
            }
            return n.index - t.index
        }), "value")
    };
    var F = function(n) {
        return function(t, r, e) {
            var u = {};
            return r = x(r, e), m.each(t, function(e, i) {
                var o = r(e, i, t);
                n(u, e, o)
            }), u
        }
    };
    m.groupBy = F(function(n, t, r) {
        m.has(n, r) ? n[r].push(t) : n[r] = [t]
    }), m.indexBy = F(function(n, t, r) {
        n[r] = t
    }), m.countBy = F(function(n, t, r) {
        m.has(n, r) ? n[r]++ : n[r] = 1
    }), m.toArray = function(n) {
        return n ? m.isArray(n) ? l.call(n) : k(n) ? m.map(n, m.identity) : m.values(n) : []
    }, m.size = function(n) {
        return null == n ? 0 : k(n) ? n.length : m.keys(n).length
    }, m.partition = function(n, t, r) {
        t = x(t, r);
        var e = [],
            u = [];
        return m.each(n, function(n, r, i) {
            (t(n, r, i) ? e : u).push(n)
        }), [e, u]
    }, m.first = m.head = m.take = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[0] : m.initial(n, n.length - t)
    }, m.initial = function(n, t, r) {
        return l.call(n, 0, Math.max(0, n.length - (null == t || r ? 1 : t)))
    }, m.last = function(n, t, r) {
        return null == n ? void 0 : null == t || r ? n[n.length - 1] : m.rest(n, Math.max(0, n.length - t))
    }, m.rest = m.tail = m.drop = function(n, t, r) {
        return l.call(n, null == t || r ? 1 : t)
    }, m.compact = function(n) {
        return m.filter(n, m.identity)
    };
    var S = function(n, t, r, e) {
        for (var u = [], i = 0, o = e || 0, a = O(n); a > o; o++) {
            var c = n[o];
            if (k(c) && (m.isArray(c) || m.isArguments(c))) {
                t || (c = S(c, t, r));
                var f = 0,
                    l = c.length;
                for (u.length += l; l > f;) u[i++] = c[f++]
            } else r || (u[i++] = c)
        }
        return u
    };
    m.flatten = function(n, t) {
        return S(n, t, !1)
    }, m.without = function(n) {
        return m.difference(n, l.call(arguments, 1))
    }, m.uniq = m.unique = function(n, t, r, e) {
        m.isBoolean(t) || (e = r, r = t, t = !1), null != r && (r = x(r, e));
        for (var u = [], i = [], o = 0, a = O(n); a > o; o++) {
            var c = n[o],
                f = r ? r(c, o, n) : c;
            t ? (o && i === f || u.push(c), i = f) : r ? m.contains(i, f) || (i.push(f), u.push(c)) : m.contains(u, c) || u.push(c)
        }
        return u
    }, m.union = function() {
        return m.uniq(S(arguments, !0, !0))
    }, m.intersection = function(n) {
        for (var t = [], r = arguments.length, e = 0, u = O(n); u > e; e++) {
            var i = n[e];
            if (!m.contains(t, i)) {
                for (var o = 1; r > o && m.contains(arguments[o], i); o++);
                o === r && t.push(i)
            }
        }
        return t
    }, m.difference = function(n) {
        var t = S(arguments, !0, !0, 1);
        return m.filter(n, function(n) {
            return !m.contains(t, n)
        })
    }, m.zip = function() {
        return m.unzip(arguments)
    }, m.unzip = function(n) {
        for (var t = n && m.max(n, O).length || 0, r = Array(t), e = 0; t > e; e++) r[e] = m.pluck(n, e);
        return r
    }, m.object = function(n, t) {
        for (var r = {}, e = 0, u = O(n); u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1];
        return r
    }, m.findIndex = t(1), m.findLastIndex = t(-1), m.sortedIndex = function(n, t, r, e) {
        r = x(r, e, 1);
        for (var u = r(t), i = 0, o = O(n); o > i;) {
            var a = Math.floor((i + o) / 2);
            r(n[a]) < u ? i = a + 1 : o = a
        }
        return i
    }, m.indexOf = r(1, m.findIndex, m.sortedIndex), m.lastIndexOf = r(-1, m.findLastIndex), m.range = function(n, t, r) {
        null == t && (t = n || 0, n = 0), r = r || 1;
        for (var e = Math.max(Math.ceil((t - n) / r), 0), u = Array(e), i = 0; e > i; i++, n += r) u[i] = n;
        return u
    };
    var E = function(n, t, r, e, u) {
        if (!(e instanceof t)) return n.apply(r, u);
        var i = j(n.prototype),
            o = n.apply(i, u);
        return m.isObject(o) ? o : i
    };
    m.bind = function(n, t) {
        if (g && n.bind === g) return g.apply(n, l.call(arguments, 1));
        if (!m.isFunction(n)) throw new TypeError("Bind must be called on a function");
        var r = l.call(arguments, 2),
            e = function() {
                return E(n, e, t, this, r.concat(l.call(arguments)))
            };
        return e
    }, m.partial = function(n) {
        var t = l.call(arguments, 1),
            r = function() {
                for (var e = 0, u = t.length, i = Array(u), o = 0; u > o; o++) i[o] = t[o] === m ? arguments[e++] : t[o];
                for (; e < arguments.length;) i.push(arguments[e++]);
                return E(n, r, this, this, i)
            };
        return r
    }, m.bindAll = function(n) {
        var t, r, e = arguments.length;
        if (1 >= e) throw new Error("bindAll must be passed function names");
        for (t = 1; e > t; t++) r = arguments[t], n[r] = m.bind(n[r], n);
        return n
    }, m.memoize = function(n, t) {
        var r = function(e) {
            var u = r.cache,
                i = "" + (t ? t.apply(this, arguments) : e);
            return m.has(u, i) || (u[i] = n.apply(this, arguments)), u[i]
        };
        return r.cache = {}, r
    }, m.delay = function(n, t) {
        var r = l.call(arguments, 2);
        return setTimeout(function() {
            return n.apply(null, r)
        }, t)
    }, m.defer = m.partial(m.delay, m, 1), m.throttle = function(n, t, r) {
        var e, u, i, o = null,
            a = 0;
        r || (r = {});
        var c = function() {
            a = r.leading === !1 ? 0 : m.now(), o = null, i = n.apply(e, u), o || (e = u = null)
        };
        return function() {
            var f = m.now();
            a || r.leading !== !1 || (a = f);
            var l = t - (f - a);
            return e = this, u = arguments, 0 >= l || l > t ? (o && (clearTimeout(o), o = null), a = f, i = n.apply(e, u), o || (e = u = null)) : o || r.trailing === !1 || (o = setTimeout(c, l)), i
        }
    }, m.debounce = function(n, t, r) {
        var e, u, i, o, a, c = function() {
            var f = m.now() - o;
            t > f && f >= 0 ? e = setTimeout(c, t - f) : (e = null, r || (a = n.apply(i, u), e || (i = u = null)))
        };
        return function() {
            i = this, u = arguments, o = m.now();
            var f = r && !e;
            return e || (e = setTimeout(c, t)), f && (a = n.apply(i, u), i = u = null), a
        }
    }, m.wrap = function(n, t) {
        return m.partial(t, n)
    }, m.negate = function(n) {
        return function() {
            return !n.apply(this, arguments)
        }
    }, m.compose = function() {
        var n = arguments,
            t = n.length - 1;
        return function() {
            for (var r = t, e = n[t].apply(this, arguments); r--;) e = n[r].call(this, e);
            return e
        }
    }, m.after = function(n, t) {
        return function() {
            return --n < 1 ? t.apply(this, arguments) : void 0
        }
    }, m.before = function(n, t) {
        var r;
        return function() {
            return --n > 0 && (r = t.apply(this, arguments)), 1 >= n && (t = null), r
        }
    }, m.once = m.partial(m.before, 2);
    var M = !{
            toString: null
        }.propertyIsEnumerable("toString"),
        I = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
    m.keys = function(n) {
        if (!m.isObject(n)) return [];
        if (v) return v(n);
        var t = [];
        for (var r in n) m.has(n, r) && t.push(r);
        return M && e(n, t), t
    }, m.allKeys = function(n) {
        if (!m.isObject(n)) return [];
        var t = [];
        for (var r in n) t.push(r);
        return M && e(n, t), t
    }, m.values = function(n) {
        for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++) e[u] = n[t[u]];
        return e
    }, m.mapObject = function(n, t, r) {
        t = x(t, r);
        for (var e, u = m.keys(n), i = u.length, o = {}, a = 0; i > a; a++) e = u[a], o[e] = t(n[e], e, n);
        return o
    }, m.pairs = function(n) {
        for (var t = m.keys(n), r = t.length, e = Array(r), u = 0; r > u; u++) e[u] = [t[u], n[t[u]]];
        return e
    }, m.invert = function(n) {
        for (var t = {}, r = m.keys(n), e = 0, u = r.length; u > e; e++) t[n[r[e]]] = r[e];
        return t
    }, m.functions = m.methods = function(n) {
        var t = [];
        for (var r in n) m.isFunction(n[r]) && t.push(r);
        return t.sort()
    }, m.extend = _(m.allKeys), m.extendOwn = m.assign = _(m.keys), m.findKey = function(n, t, r) {
        t = x(t, r);
        for (var e, u = m.keys(n), i = 0, o = u.length; o > i; i++)
            if (e = u[i], t(n[e], e, n)) return e
    }, m.pick = function(n, t, r) {
        var e, u, i = {},
            o = n;
        if (null == o) return i;
        m.isFunction(t) ? (u = m.allKeys(o), e = b(t, r)) : (u = S(arguments, !1, !1, 1), e = function(n, t, r) {
            return t in r
        }, o = Object(o));
        for (var a = 0, c = u.length; c > a; a++) {
            var f = u[a],
                l = o[f];
            e(l, f, o) && (i[f] = l)
        }
        return i
    }, m.omit = function(n, t, r) {
        if (m.isFunction(t)) t = m.negate(t);
        else {
            var e = m.map(S(arguments, !1, !1, 1), String);
            t = function(n, t) {
                return !m.contains(e, t)
            }
        }
        return m.pick(n, t, r)
    }, m.defaults = _(m.allKeys, !0), m.create = function(n, t) {
        var r = j(n);
        return t && m.extendOwn(r, t), r
    }, m.clone = function(n) {
        return m.isObject(n) ? m.isArray(n) ? n.slice() : m.extend({}, n) : n
    }, m.tap = function(n, t) {
        return t(n), n
    }, m.isMatch = function(n, t) {
        var r = m.keys(t),
            e = r.length;
        if (null == n) return !e;
        for (var u = Object(n), i = 0; e > i; i++) {
            var o = r[i];
            if (t[o] !== u[o] || !(o in u)) return !1
        }
        return !0
    };
    var N = function(n, t, r, e) {
        if (n === t) return 0 !== n || 1 / n === 1 / t;
        if (null == n || null == t) return n === t;
        n instanceof m && (n = n._wrapped), t instanceof m && (t = t._wrapped);
        var u = s.call(n);
        if (u !== s.call(t)) return !1;
        switch (u) {
            case "[object RegExp]":
            case "[object String]":
                return "" + n == "" + t;
            case "[object Number]":
                return +n !== +n ? +t !== +t : 0 === +n ? 1 / +n === 1 / t : +n === +t;
            case "[object Date]":
            case "[object Boolean]":
                return +n === +t
        }
        var i = "[object Array]" === u;
        if (!i) {
            if ("object" != typeof n || "object" != typeof t) return !1;
            var o = n.constructor,
                a = t.constructor;
            if (o !== a && !(m.isFunction(o) && o instanceof o && m.isFunction(a) && a instanceof a) && "constructor" in n && "constructor" in t) return !1
        }
        r = r || [], e = e || [];
        for (var c = r.length; c--;)
            if (r[c] === n) return e[c] === t;
        if (r.push(n), e.push(t), i) {
            if (c = n.length, c !== t.length) return !1;
            for (; c--;)
                if (!N(n[c], t[c], r, e)) return !1
        } else {
            var f, l = m.keys(n);
            if (c = l.length, m.keys(t).length !== c) return !1;
            for (; c--;)
                if (f = l[c], !m.has(t, f) || !N(n[f], t[f], r, e)) return !1
        }
        return r.pop(), e.pop(), !0
    };
    m.isEqual = function(n, t) {
        return N(n, t)
    }, m.isEmpty = function(n) {
        return null == n ? !0 : k(n) && (m.isArray(n) || m.isString(n) || m.isArguments(n)) ? 0 === n.length : 0 === m.keys(n).length
    }, m.isElement = function(n) {
        return !(!n || 1 !== n.nodeType)
    }, m.isArray = h || function(n) {
        return "[object Array]" === s.call(n)
    }, m.isObject = function(n) {
        var t = typeof n;
        return "function" === t || "object" === t && !!n
    }, m.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(n) {
        m["is" + n] = function(t) {
            return s.call(t) === "[object " + n + "]"
        }
    }), m.isArguments(arguments) || (m.isArguments = function(n) {
        return m.has(n, "callee")
    }), "function" != typeof /./ && "object" != typeof Int8Array && (m.isFunction = function(n) {
        return "function" == typeof n || !1
    }), m.isFinite = function(n) {
        return isFinite(n) && !isNaN(parseFloat(n))
    }, m.isNaN = function(n) {
        return m.isNumber(n) && n !== +n
    }, m.isBoolean = function(n) {
        return n === !0 || n === !1 || "[object Boolean]" === s.call(n)
    }, m.isNull = function(n) {
        return null === n
    }, m.isUndefined = function(n) {
        return n === void 0
    }, m.has = function(n, t) {
        return null != n && p.call(n, t)
    }, m.noConflict = function() {
        return u._ = i, this
    }, m.identity = function(n) {
        return n
    }, m.constant = function(n) {
        return function() {
            return n
        }
    }, m.noop = function() {}, m.property = w, m.propertyOf = function(n) {
        return null == n ? function() {} : function(t) {
            return n[t]
        }
    }, m.matcher = m.matches = function(n) {
        return n = m.extendOwn({}, n),
            function(t) {
                return m.isMatch(t, n)
            }
    }, m.times = function(n, t, r) {
        var e = Array(Math.max(0, n));
        t = b(t, r, 1);
        for (var u = 0; n > u; u++) e[u] = t(u);
        return e
    }, m.random = function(n, t) {
        return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1))
    }, m.now = Date.now || function() {
        return (new Date).getTime()
    };
    var B = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        },
        T = m.invert(B),
        R = function(n) {
            var t = function(t) {
                    return n[t]
                },
                r = "(?:" + m.keys(n).join("|") + ")",
                e = RegExp(r),
                u = RegExp(r, "g");
            return function(n) {
                return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, t) : n
            }
        };
    m.escape = R(B), m.unescape = R(T), m.result = function(n, t, r) {
        var e = null == n ? void 0 : n[t];
        return e === void 0 && (e = r), m.isFunction(e) ? e.call(n) : e
    };
    var q = 0;
    m.uniqueId = function(n) {
        var t = ++q + "";
        return n ? n + t : t
    }, m.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var K = /(.)^/,
        z = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        D = /\\|'|\r|\n|\u2028|\u2029/g,
        L = function(n) {
            return "\\" + z[n]
        };
    m.template = function(n, t, r) {
        !t && r && (t = r), t = m.defaults({}, t, m.templateSettings);
        var e = RegExp([(t.escape || K).source, (t.interpolate || K).source, (t.evaluate || K).source].join("|") + "|$", "g"),
            u = 0,
            i = "__p+='";
        n.replace(e, function(t, r, e, o, a) {
            return i += n.slice(u, a).replace(D, L), u = a + t.length, r ? i += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : o && (i += "';\n" + o + "\n__p+='"), t
        }), i += "';\n", t.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
        try {
            var o = new Function(t.variable || "obj", "_", i)
        } catch (a) {
            throw a.source = i, a
        }
        var c = function(n) {
                return o.call(this, n, m)
            },
            f = t.variable || "obj";
        return c.source = "function(" + f + "){\n" + i + "}", c
    }, m.chain = function(n) {
        var t = m(n);
        return t._chain = !0, t
    };
    var P = function(n, t) {
        return n._chain ? m(t).chain() : t
    };
    m.mixin = function(n) {
        m.each(m.functions(n), function(t) {
            var r = m[t] = n[t];
            m.prototype[t] = function() {
                var n = [this._wrapped];
                return f.apply(n, arguments), P(this, r.apply(m, n))
            }
        })
    }, m.mixin(m), m.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(n) {
        var t = o[n];
        m.prototype[n] = function() {
            var r = this._wrapped;
            return t.apply(r, arguments), "shift" !== n && "splice" !== n || 0 !== r.length || delete r[0], P(this, r)
        }
    }), m.each(["concat", "join", "slice"], function(n) {
        var t = o[n];
        m.prototype[n] = function() {
            return P(this, t.apply(this._wrapped, arguments))
        }
    }), m.prototype.value = function() {
        return this._wrapped
    }, m.prototype.valueOf = m.prototype.toJSON = m.prototype.value, m.prototype.toString = function() {
        return "" + this._wrapped
    }, "function" == typeof define && define.amd && define("underscore", [], function() {
        return m
    })
}).call(this);
//# sourceMappingURL=underscore-min.map


/*--------------------------------------------------------------------------*
 *
 *  heightLine JavaScript Library beta4
 *
 *  MIT-style license.
 *
 *  2007 Kazuma Nishihata
 *  http://www.webcreativepark.net
 *
 *--------------------------------------------------------------------------*/
new function() {

    function heightLine() {

        this.className = "heightLine";
        this.parentClassName = "heightLineParent"
        reg = new RegExp(this.className + "-([a-zA-Z0-9-_]+)", "i");
        objCN = new Array();
        var objAll = document.getElementsByTagName ? document.getElementsByTagName("*") : document.all;
        for (var i = 0; i < objAll.length; i++) {
            var eltClass = objAll[i].className.split(/\s+/);
            for (var j = 0; j < eltClass.length; j++) {
                if (eltClass[j] == this.className) {
                    if (!objCN["main CN"]) objCN["main CN"] = new Array();
                    objCN["main CN"].push(objAll[i]);
                    break;
                } else if (eltClass[j] == this.parentClassName) {
                    if (!objCN["parent CN"]) objCN["parent CN"] = new Array();
                    objCN["parent CN"].push(objAll[i]);
                    break;
                } else if (eltClass[j].match(reg)) {
                    var OCN = eltClass[j].match(reg)
                    if (!objCN[OCN]) objCN[OCN] = new Array();
                    objCN[OCN].push(objAll[i]);
                    break;
                }
            }
        }

        //check font size
        var e = document.createElement("div");
        var s = document.createTextNode("S");
        e.appendChild(s);
        e.style.visibility = "hidden"
        e.style.position = "absolute"
        e.style.top = "0"
        document.body.appendChild(e);
        var defHeight = e.offsetHeight;

        changeBoxSize = function() {
            for (var key in objCN) {
                if (objCN.hasOwnProperty(key)) {
                    //parent type
                    if (key == "parent CN") {
                        for (var i = 0; i < objCN[key].length; i++) {
                            var max_height = 0;
                            var CCN = objCN[key][i].childNodes;
                            for (var j = 0; j < CCN.length; j++) {
                                if (CCN[j] && CCN[j].nodeType == 1) {
                                    CCN[j].style.height = "auto";
                                    max_height = max_height > CCN[j].offsetHeight ? max_height : CCN[j].offsetHeight;
                                }
                            }
                            for (var j = 0; j < CCN.length; j++) {
                                if (CCN[j].style) {
                                    var stylea = CCN[j].currentStyle || document.defaultView.getComputedStyle(CCN[j], '');
                                    var newheight = max_height;
                                    if (stylea.paddingTop) newheight -= stylea.paddingTop.replace("px", "");
                                    if (stylea.paddingBottom) newheight -= stylea.paddingBottom.replace("px", "");
                                    if (stylea.borderTopWidth && stylea.borderTopWidth != "medium") newheight -= stylea.borderTopWidth.replace("px", "");
                                    if (stylea.borderBottomWidth && stylea.borderBottomWidth != "medium") newheight -= stylea.borderBottomWidth.replace("px", "");
                                    CCN[j].style.height = newheight + "px";
                                }
                            }
                        }
                    } else {
                        var max_height = 0;
                        for (var i = 0; i < objCN[key].length; i++) {
                            objCN[key][i].style.height = "auto";
                            max_height = max_height > objCN[key][i].offsetHeight ? max_height : objCN[key][i].offsetHeight;
                        }
                        for (var i = 0; i < objCN[key].length; i++) {
                            if (objCN[key][i].style) {
                                var stylea = objCN[key][i].currentStyle || document.defaultView.getComputedStyle(objCN[key][i], '');
                                var newheight = max_height;
                                if (stylea.paddingTop) newheight -= stylea.paddingTop.replace("px", "");
                                if (stylea.paddingBottom) newheight -= stylea.paddingBottom.replace("px", "");
                                if (stylea.borderTopWidth && stylea.borderTopWidth != "medium") newheight -= stylea.borderTopWidth.replace("px", "")
                                if (stylea.borderBottomWidth && stylea.borderBottomWidth != "medium") newheight -= stylea.borderBottomWidth.replace("px", "");
                                objCN[key][i].style.height = newheight + "px";
                            }
                        }
                    }
                }
            }
        }

        checkBoxSize = function() {
            if (defHeight != e.offsetHeight) {
                changeBoxSize();
                defHeight = e.offsetHeight;
            }
        }
        changeBoxSize();
        setInterval(checkBoxSize, 1000)
        window.onresize = changeBoxSize;
    }

    function addEvent(elm, listener, fn) {
        try {
            elm.addEventListener(listener, fn, false);
        } catch (e) {
            elm.attachEvent("on" + listener, fn);
        }
    }
    addEvent(window, "load", heightLine);
}
