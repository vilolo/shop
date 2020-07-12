! function () {
    iOSRemoveBottomInset();
    var t = !1,
        r = !1,
        l = 20,
        n = 0;

    function a(e, o) {
        window.WebViewJavascriptBridge && window.WebViewJavascriptBridge.callHandler("webNotify", {
            notifyType: "notifyFollowUserUpdate",
            shopID: o,
            followed: e
        })
    }

    function i(e) {
        var o = "shopee_disabled",
            t = $(e.currentTarget),
            r = t.attr("shopid");

        function l() {
            t.addClass(o), setTimeout(function () {
                t.removeClass(o)
            }, 600)
        }
        t.hasClass(o) || (t.hasClass("active") ? $.post("/buyer/unfollow/shop/" + r + "/", {
            csrfmiddlewaretoken: csrf
        }, function (e) {
            --n, l(), current_shop_id == r ? t.toggle(!1) : (t.removeClass("active").text("+ " + label_follow), a(0, r))
        }).fail(function (e) {
            s(parseInt(e.responseText))
        }) : $.post("/buyer/follow/shop/" + r + "/", {
            csrfmiddlewaretoken: csrf
        }, function (e) {
            ++n, l(), t.addClass("active").text(label_following), a(1, r)
        }).fail(function (e) {
            s(parseInt(e.responseText))
        }))
    }

    function s(e) {
        3 == e ? alert_message(alert_follow_limit) : 15 == e && alert_message(alert_follow_too_frequent)
    }

    function e() {
        if (!r && !t) {
            var e = scrollTopFunc(),
                o = $(window).height();
            $(document).height() - o - e < 50 && function () {
                f(t = !0);
                var e = parseInt($(".follower-list li:last-child").attr("data-follower-cursor"));
                (isNaN(e) || "" == e) && (e = 0);
                var o = {
                    offset: e + 1,
                    limit: l,
                    offset_of_offset: n
                };
                $.get(load_more_url + "?" + $.param(o), function (e) {
                    e.no_more ? (r = !0, is_following ? $(".loading-text").html(i18n.t("msg_no_more_following")) : $(".loading-text").html(i18n.t("msg_no_more_followers"))) : ($(".follower-list").append(e), function () {
                        var l = {};
                        $(".follower-list").children().each(function (e, o) {
                            var t = $(o),
                                r = t.attr("data-follower-shop-id");
                            r in l ? t.remove() : l[r] = !0
                        })
                    }(), f(t)), t = !1, $(".shop-href").off("tap").on("tap", function (e) {
                        e.stopPropagation(), e.preventDefault();
                        var o = $(this),
                            t = o.attr("href");
                        navigateToRN(t)
                    })
                }).fail(function () {
                    alert_message(i18n.t("msg_fail_to_load_more_followers")), f(t = !1)
                }), $(".shop-href").off("tap").on("tap", function (e) {
                    e.stopPropagation(), e.preventDefault();
                    var o = $(this),
                        t = o.attr("href");
                    navigateToRN(t)
                })
            }()
        }
    }

    function f(e) {
        var o = $(".follower-list");
        (1 < o.children().length || 0 == o.find(".empty_holder").length) && $(".loading-text").toggle(e)
    }
    $(function () {
        $(".shop-href").off("tap").on("tap", function (e) {
            e.stopPropagation(), e.preventDefault();
            var o = $(this).attr("href");
            navigateToRN(o)
        }), $(".follower-list").on("tap", ".btn-follow", function (o) {
            window.WebViewJavascriptBridge ? window.WebViewJavascriptBridge.callHandler("login", {}, function (e) {
                1 == e.status && i(o)
            }) : loggedin ? i(o) : askLogin()
        }), $(".follower-list").on("tap", ".btn-remove", function (o) {
            if (is_following) {
                var t = $(o.currentTarget).attr("data-delete-id");
                $.post("/buyer/unfollow/shop/" + t + "/", {
                    csrfmiddlewaretoken: csrf
                }, function (e) {
                    --n, a(0, t), is_owner ? $(o.currentTarget).parent().hide() : $(o.currentTarget).hide(), alert_message(msg_deleted_following_removed)
                }).fail(function (e) {
                    alert_message(msg_server_error)
                })
            } else $.post("remove", {
                follower_id: $(o.currentTarget).attr("data-delete-id"),
                csrfmiddlewaretoken: csrf
            }).success(function (e) {
                e.success ? (--n, a(0, t), $(o.currentTarget).parent().hide(), alert_message(msg_deleted_follower_removed)) : alert_message(msg_server_error)
            })
        }), bridgeInit(function (e) {
            setTimeout(function () {
                var e = window.location.href;
                if (-1 != e.indexOf("follower")) var o = label_follower;
                else if (-1 != e.indexOf("following")) o = label_following;
                bridgeCallHandler("configureNavBarTitle", {
                    title: o
                })
            }, 200)
        }), $(window).on("scroll", e)
    })
}();
//# sourceMappingURL=../../source_maps/shop/followers.js.map



$.post("/buyer/unfollow/shop/"+r+"/",{csrfmiddlewaretoken:csrf},function(e){--n,l(),current_shop_id==r?t.toggle(!1):(t.removeClass("active").text("+ "+label_follow),a(0,r))}).fail(function(e){s(parseInt(e.responseText))})


$.post("/buyer/unfollow/shop/"+r+"/",{csrfmiddlewaretoken:csrf},function(e){alert(e.responseText)}).fail(function(e){alert(e.responseText)})




var lis = document.getElementsByClassName('follower-list')[0].getElementsByClassName('btn-follow');for(var i=0; i<lis.length; i++){alert(lis[i].getAttribute("shopid"))}

var n = 0; function ii(e){var o="shopee_disabled",t=$(e.currentTarget),r=t.attr("shopid");function l(){t.addClass(o),setTimeout(function(){t.removeClass(o)},600)}t.hasClass(o)||(t.hasClass("active")?$.post("/buyer/unfollow/shop/"+r+"/",{csrfmiddlewaretoken:csrf},function(e){--n,l(),current_shop_id==r?t.toggle(!1):(t.removeClass("active").text("+ "+label_follow),a(0,r))}).fail(function(e){s(parseInt(e.responseText))}):$.post("/buyer/follow/shop/"+r+"/",{csrfmiddlewaretoken:csrf},function(e){++n,l(),t.addClass("active").text(label_following),a(1,r)}).fail(function(e){s(parseInt(e.responseText))}))}; var lis = document.getElementsByClassName('follower-list')[0].getElementsByClassName('btn-follow');for(var j=0; j<2.length; j++){ii(lis[j])}


function tt(spid, type){$.post("/buyer/"+type+"/shop/"+spid+"/",{csrfmiddlewaretoken:csrf},function(e){}).fail(function(e){})};var lis = document.getElementsByClassName('follower-list')[0].getElementsByClassName('btn-follow');for(var i=0; i<lis.length; i++){$(lis[i]).hasClass("shopee_disabled") || $(lis[i]).hasClass("active") ? ttype = "unfollow" : ttype = "follow"; tt(lis[i].getAttribute("shopid"), ttype)}

function tt(spid, type){$.post("/buyer/"+type+"/shop/"+spid+"/",{csrfmiddlewaretoken:csrf},function(e){}).fail(function(e){})};var lis = document.getElementsByClassName('follower-list')[0].getElementsByClassName('btn-follow');for(var i=0; i<lis.length; i++){$(lis[i]).hasClass("shopee_disabled") || $(lis[i]).hasClass("active") ? ttype = "unfollow" : ttype = "follow"; window.setTimeout('alert('+lis[i].getAttribute("shopid")+')',3000);}


var lis = document.getElementsByClassName('follower-list')[0].getElementsByClassName('btn-follow'); var index = 0; var max = lis.length; function tt(){if(index >= max){return;}; $(lis[i]).hasClass("shopee_disabled") || $(lis[i]).hasClass("active") ? ttype = "unfollow" : ttype = "follow"; spid = lis[i].getAttribute("shopid"); $.post("/buyer/"+type+"/shop/"+spid+"/",{csrfmiddlewaretoken:csrf},function(e){}).fail(function(e){})}; window.setTimeout('tt()',3000);

var lis = document.getElementsByClassName('follower-list')[0].getElementsByClassName('btn-follow'); var i = 0; var max = lis.length; function tt(){if(i >= max){return;}; $(lis[i]).hasClass("shopee_disabled") || $(lis[i]).hasClass("active") ? ttype = "unfollow" : ttype = "follow"; spid = lis[i].getAttribute("shopid"); alert(spid); i++}; window.setInterval('tt()',3000);

var lis = document.getElementsByClassName('follower-list')[0].getElementsByClassName('btn-follow'); var i = 0; var max = lis.length; function tt(){if(i >= max){return;}; $(lis[i]).hasClass("shopee_disabled") || $(lis[i]).hasClass("active") ? ttype = "unfollow" : ttype = "follow"; spid = lis[i].getAttribute("shopid"); $.post("/buyer/"+ttype+"/shop/"+spid+"/",{csrfmiddlewaretoken:csrf},function(e){}).fail(function(e){}); i++}; window.setInterval('tt()',3000);