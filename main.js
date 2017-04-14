function setHeights() {
    var t = $(window).height();
    $(".slide").height(t)
}

function addSticky() {
    $(".slide").each(function() {
        var t = $(this).offset().top;
        window.scrollY >= t ? $(this).addClass("fix-it") : $(this).removeClass("fix-it")
    })
}
console.log("%c ", "background: #222; color: #bada55"),
    function(t) {
        t.fn.countdown = function(e, n) {
            function s() {
                var e = Date.parse(a.date) / 1e3,
                    s = Math.floor(t.now() / 1e3);
                e <= s && (n.call(this), clearInterval(interval));
                var i = e - s,
                    o = Math.floor(i / 86400);
                i -= 60 * o * 60 * 24;
                var l = Math.floor(i / 3600);
                i -= 60 * l * 60;
                var r = Math.floor(i / 60);
                i -= 60 * r, "on" == a.format && (o = String(o).length >= 2 ? o : "0" + o, l = String(l).length >= 2 ? l : "0" + l, r = String(r).length >= 2 ? r : "0" + r, i = String(i).length >= 2 ? i : "0" + i), thisEl.find(".days").text(o), thisEl.find(".hours").text(l), thisEl.find(".minutes").text(r), thisEl.find(".seconds").text(i)
            }
            thisEl = t(this);
            var a = {
                date: null,
                format: null
            };
            e && t.extend(a, e), s(), interval = setInterval(s, 1e3)
        }
    }(jQuery), $("#countdown").countdown({
        date: "1 July 2017 12:00:00",
        format: "on"
    }, function() {
        alert("We're Out Now")
    }), setHeights(), $(window).resize(function() {
        setHeights()
    }), $(window).scroll(function() {
        addSticky()
    }),
    function() {
        function t() {
            s == n && (s = 0), e[s].className = "fx", 0 === s && (e[n - 2].className = ""), 1 === s && (e[n - 1].className = ""), s > 1 && (e[s - 2].className = ""), s++
        }
        if (null != document.getElementById("slideshow")) {
            document.getElementById("slideshow").getElementsByTagName("img")[0].className = "fx", window.setInterval(t, 8e3);
            var e = document.getElementById("slideshow").getElementsByTagName("img"),
                n = e.length,
                s = 1
        }
    }(), $("#header_slide").owlCarousel({
        items: 1,
        loop: !0,
        autoplay: !0,
        autoplaySpeed: 1500
    }), $("#subscription-form").submit(function(t) {
        t.preventDefault();
        var e = $("#subscription-form"),
            n = $("#subscribe-button"),
            s = $("#subscription-response"),
            a = $("#subscriber-email").val();
        $.ajax({
            type: "POST",
            url: "././php/subscribe.php",
            dataType: "json",
            data: {
                email: a
            },
            cache: !1,
            beforeSend: function(t) {
                n.val("Joining...")
            },
            success: function(t) {
                1 == t.sendstatus ? (s.html(t.message), e.fadeOut(500)) : (s.html(t.message), n.val("Join"))
            }
        })
    });