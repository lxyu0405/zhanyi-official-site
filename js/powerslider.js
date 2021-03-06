//插件名字：power-slider（多功能滚动插件）
//插件作者：蔡宝坚
//作者博客：http://caibaojian.com
//插件网站：http://caibaojian.com/power-slider
//使用协议：在保留头部版权的情况下，个人和商业均可免费使用
//使用范例：http://caibajian.com/demo/power-slider
!function(a) {
    a.fn.powerSlider = function(b) {
        return this.each(function() {
            function w(a, b) {
                var c = e.height(), f = e.width();
                if (u.hide().eq(b).show(), v.removeClass("current").eq(b).addClass("current"), h.removeClass("current").eq(b).addClass("current"), "top" == d.handle)
                    g.filter(":not(':animated')").animate({
                        top: - c * b
                    }, d.speed);
                else if ("left" == d.handle)
                    h.css("float", "left"), g.css("width", k * f).filter(":not(':animated')").animate({
                        left: - f * b
                    }, d.speed);
                else if ("hide" == d.handle) {
                    var i = b + 1;
                    h.hide().slice(b * d.sliderNum, i * d.sliderNum).show()
                } else 
                    "fadeTo" == d.handle ? (h.slice(a * d.sliderNum, (a + 1) * d.sliderNum).fadeOut(d.speed), h.slice(b * d.sliderNum, (b + 1) * d.sliderNum).filter(":not(':animated')").fadeIn(d.speed)) : "slideTo" == d.handle && h.css("z-index", "1").filter(":not(':animated')").slideUp().slice(b * d.sliderNum, (b + 1) * d.sliderNum).css("z-index", "2").slideDown(d.speed)
            }
            function x() {
                var a = f;
                f = (f + 1)%k, w(a, f)
            }
            for (var c = {
                handle: "top",
                prevNext: !0,
                Nav: !0,
                myTitle: !1,
                speed: 600,
                delayTime: 6e3,
                clickMode: "click",
                sliderNum: 1
            }, d = a.extend({}, c, b), e = a(this), f = 0, g = a(".sliderbox", e), h = g.find("li"), k = (a(".sliderbox li:eq(0)").outerWidth(), h.length, h.length / d.sliderNum), k = Math.ceil(k), l = a(" .slidernav", e), m = a(" .slidertext", e), n = a(" .prev", e), o = a(" .next", e), q = "", s = 0; k > s; s++)
                q += '<li><a href="javascript:void(0);">' + (s + 1) + "</a></li>";
            if ("fadeTo" == d.handle) {
                d.sliderNum <= 1 ? h.css({
                    position: "absolute",
                    left: "0",
                    top: "0"
                }) : h.each(function(b) {
                    a(this).css({
                        position: "absolute",
                        left: b%d.sliderNum * h.width(),
                        top: "0"
                    })
                });
                var t = parseInt(d.sliderNum - 1);
                g.find("li:gt(" + t + ")").hide()
            }
            d.Nav && l.append(q), d.sliderNum > 1 && h.css("float", "left");
            var u = m.find("li"), v = l.find("li");
            u.eq(0).show(), v.eq(0).addClass("current"), h.eq(0).addClass("current"), v.bind(d.clickMode, function() {
                f = a(this).index();
                var b = v.index(a(".slidernav .current:eq(0)"));
                f != b && w(b, f)
            }).eq(0).trigger(d.clickMode), 1 >= k ? (n.hide(), o.hide()) : d.prevNext && (n.click(function() {
                var a = f;
                f -= 1, - 1 == f && (f = k - 1), w(a, f)
            }), o.click(function() {
                x()
            }));
            var y;
            e.hover(function() {
                clearInterval(y)
            }, function() {
                y = setInterval(function() {
                    x()
                }, d.delayTime)
            }).trigger("mouseleave")
        })
    }
}(jQuery);

