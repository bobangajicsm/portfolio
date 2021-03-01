app.home = {
  init: function () {
    TweenMax.to(document.querySelector(".bg"), 0.4, {
      opacity: 1,
      ease: Power2.easeIn,
    });
    var mySVG = $("svg").drawsvg({
      duration: 10000,
    });
    mySVG.drawsvg("animate");
    TweenMax.fromTo(
      $(".jb")[0],
      4,
      {
        opacity: 0,
        ease: Power2.easeIn,
      },
      {
        opacity: 1,
        delay: 3,
      }
    );
    $("#nav_bar nav a").removeClass("active");
    $(".home-link").addClass("active");
    $(".home-page h1").blast({
      delimiter: "character",
      tag: "span",
    });
    a = 0;
    b = 0;
    $(".home-page .blast").each(function () {
      if (a == 300) {
        a = 400;
      }
      if (a == 1100) {
        a = 1200;
      }
      var el = $(this);
      if (a == 400) {
        setTimeout(function () {
          $(".home-page h1 img").addClass("animation-logo");
        }, 800);
      }
      setTimeout(function () {
        el.addClass("animated bounceIn");
      }, a);
      if (a < 1200) {
        a = a + 100;
      } else {
        a = a + 80;
      }
    });
    setTimeout(function () {
      $(".home-page .blast").removeClass("animated bounceIn");
      $(".home-page .blast").css("opacity", 1);
      $(".home-page .blast").mouseenter(function () {
        var el = $(this);
        $(this).addClass("animated rubberBand");
        $(this).one(
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
          function () {
            el.removeClass("animated rubberBand");
          }
        );
      });
    }, 3000);
    $(".home-page .flat-button").mouseenter(function () {
      var el = $(this);
      $(this).addClass("animated rubberBand");
      $(this).one(
        "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
        function () {
          el.removeClass("animated rubberBand");
        }
      );
    });
  },
};

app.about = {
  init: function () {
    $(".about h1").blast({
      delimiter: "character",
      tag: "span",
    });
    a = 0;
    $(".about h1 .blast").each(function () {
      var el = $(this);
      setTimeout(function () {
        el.addClass("animated bounceIn");
      }, a);
      a = a + 100;
    });
    setTimeout(function () {
      $(".about .blast").removeClass("animated bounceIn");
      $(".about .blast").css("opacity", 1);
      $(".about .blast").mouseenter(function () {
        var el = $(this);
        $(this).addClass("animated rubberBand");
        $(this).one(
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
          function () {
            el.removeClass("animated rubberBand");
          }
        );
      });
    }, 1000);
  },
};

app.tips = {
  init: function () {
    $(".tips h1").blast({
      delimiter: "character",
      tag: "span",
    });
    a = 0;
    $(".tips h1 .blast").each(function () {
      var el = $(this);
      setTimeout(function () {
        el.addClass("animated bounceIn");
      }, a);
      a = a + 100;
    });
    setTimeout(function () {
      $(".tips .blast").removeClass("animated bounceIn");
      $(".tips .blast").css("opacity", 1);
      $(".tips .blast").mouseenter(function () {
        var el = $(this);
        $(this).addClass("animated rubberBand");
        $(this).one(
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
          function () {
            el.removeClass("animated rubberBand");
          }
        );
      });
    }, 1000);
  },
};

app.tipsLogo = {
  init: function() {
    (function () {
      $.ajax({
          'async': false,
          'global': false,
          'url': './data.json',
          'dataType': "json",
          'success': function (data) {
              data.posts.forEach(function(post) {
              var container = document.getElementById('tips-post-container');
              var innerDiv = document.createElement('div');
              innerDiv.setAttribute('class', 'inner-div-container');
              var par = document.createElement('p');
              par.setAttribute('class','tips-text');
              par.textContent = post.description;

              innerDiv.appendChild(par);

              var link = document.createElement('a');
              link.setAttribute('target','_blank');
              link.setAttribute('href', post.url);
              
              var img = document.createElement('img');
              img.setAttribute('class', 'tips-image');
              img.setAttribute('src', post.src);
              link.appendChild(img);
              innerDiv.appendChild(link);
              container.appendChild(innerDiv);
          });
          }
      });
  })();
    new SimpleBar(document.getElementById('tips-post-container'));
  },
};

app.contact = {
  init: function () {
    $(".contact h1").blast({
      delimiter: "character",
      tag: "span",
    });
    a = 0;
    $(".contact .blast").each(function () {
      var el = $(this);
      setTimeout(function () {
        el.addClass("animated bounceIn");
      }, a);
      a = a + 100;
    });
    setTimeout(function () {
      $(".contact .blast").removeClass("animated bounceIn");
      $(".contact .blast").css("opacity", 1);
      $(".contact .blast").mouseenter(function () {
        var el = $(this);
        $(this).addClass("animated rubberBand");
        $(this).one(
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
          function () {
            el.removeClass("animated rubberBand");
          }
        );
      });
    }, 1000);
    b = 300;
    $(".contact li").each(function () {
      var el = $(this);
      setTimeout(function () {
        el.addClass("animated fadeInUp");
      }, b);
      b = b + 100;
    });
    initMap();
    $("#submit").click(function () {
      var inputs = new Array();
      var formInputs = $("#contact :input");
      formInputs.each(function (el) {
        inputs[formInputs[el].name] = formInputs[el];
      });

      app.contact.validate();
      if ($(".contact-form .required").size() > 0) {
        alertify.error(msg1);
      } else {
        alertify.log(msg2);
        var data = {
          service_id: "gmail",
          template_id: "template_YeJhZkgb", // keys from email.js
          user_id: "user_px78o72apVjzT28JpFXF7", // keys from email.js
          template_params: {
            name: inputs["name"].value,
            subject: inputs["subject"].value,
            message: inputs["msg"].value,
            email: inputs["email"].value,
          },
        };

        $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
          type: "POST",
          data: JSON.stringify(data),
          contentType: "application/json",
        })
          .done(function () {
            alertify.success(msg3);
            $(".contact-form .required").removeClass("required");
            $(
              '.contact-form input[type="text"],.contact-form input[type="email"],.contact-form textarea'
            ).val("");
          })
          .fail(function (error) {
            $(".contact-form .required").removeClass("required");
            $(
              '.contact-form input[type="text"],.contact-form input[type="email"],.contact-form textarea'
            ).val("");
            alertify.error(msg4);
          });
      }
      return false;
    });
    $(".contact-form input, .contact-form textarea").keyup(function () {
      app.contact.validate();
    });
  },
  validate: function () {
    if (
      $("input[type=email]").val() == "" ||
      !validateEmail($("input[type=email]").val())
    ) {
      $("input[type=email]").parent().addClass("required");
    } else {
      $("input[type=email]").parent().removeClass("required");
    }
    if ($("textarea").val() == "") {
      $("textarea").parent().addClass("required");
    } else {
      $("textarea").parent().removeClass("required");
    }
  },
};

function validateEmail(email) {
  var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return re.test(email);
}

function initMap() {
  // position we will use later
  var lat = 44.96366;
  var lon = 19.61045;
  // initialize map
  map = L.map("map").setView([lat, lon], 13);
  // set map tiles source
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
  }).addTo(map);
  // add marker to the map
  marker = L.marker([lat, lon]).addTo(map);
  // add popup to the marker
  // marker.bindPopup("<b>ACME CO.</b><br />This st. 48<br />New York").openPopup();
  setTimeout(function () {
    $(".inf-map").addClass("animated fadeInUp");
    $("#map").css("opacity", 1);
  });
}

app.gallery = {
  init: function () {
    console.log('here');
    $("body").addClass("no-overflow");
    $(".magicwall").magicWall({
      maxItemHeight: 350,
      maxItemWidth: 350,
      delay: 400,
      preloadBeforeSwitch: true,
      loadingMode: "chain",
      pauseOnHover: "item",
      animations:
        "flipY,rollOutX,-rollOutX,rollOutY,-rollOutY,slideColumn,-slideColumn,slideRow,-slideRow,fade",
      duration: 800,
    });
    $(".colorbox").colorbox({
      maxWidth: "70%",
      maxHeight: "250%",
      scrolling: true,
      onOpen: function () {
        $(".magicwall").magicWall("stop");
      },
      onClosed: function () {
        $(".magicwall").magicWall("start");
      },
    });
    alertify.log(msg5);
    setTimeout(function () {
      alertify.log(msg6);
    }, 2000);
  },
};

app.skills = {
  init: function () {
    $(".skills h1").blast({
      delimiter: "word",
      tag: "span",
    });
    a = 0;
    $(".skills h1 .blast").each(function () {
      var el = $(this);
      setTimeout(function () {
        el.addClass("animated bounceIn");
      }, a);
      a = a + 80;
    });
    setTimeout(function () {
      $(".skills .blast").removeClass("animated bounceIn");
      $(".skills .blast").css("opacity", 1);
      $(".skills .blast").mouseenter(function () {
        var el = $(this);
        $(this).addClass("animated rubberBand");
        $(this).one(
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
          function () {
            el.removeClass("animated rubberBand");
          }
        );
      });
    }, 2000);
    var textCol = "#ffffff";
    if ($("body").hasClass("white")) {
      textCol = "#FE0853";
    }
    if (
      !$("#myCanvas").tagcanvas({
        textColour: textCol,
        outlineThickness: 0.5,
        outlineColour: "#FE0853",
        maxSpeed: 0.06,
        freezeActive: true,
        shuffleTags: true,
        shape: "sphere",
        zoom: 0.9,
        noSelect: true,
        textFont: null,
        pinchZoom: true,
        freezeDecel: true,
        fadeIn: 3000,
        initial: [0.3, -0.1],
        depth: 1.4,
      })
    ) {
      $("#myCanvasContainer").hide();
    }
    setTimeout(function () {
      alertify.log(msg8);
    }, 2000);
  },
};

app.text = {
  init: function () {
    $(".text-page h1").blast({
      delimiter: "character",
      tag: "span",
    });
    a = 0;
    $(".text-page h1 .blast").each(function () {
      var el = $(this);
      setTimeout(function () {
        el.addClass("animated bounceIn");
      }, a);
      a = a + 50;
    });
    setTimeout(function () {
      $(".text-page .blast").removeClass("animated bounceIn");
      $(".text-page .blast").css("opacity", 1);
      $(".text-page .blast").mouseenter(function () {
        var el = $(this);
        $(this).addClass("animated rubberBand");
        $(this).one(
          "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
          function () {
            el.removeClass("animated rubberBand");
          }
        );
      });
    }, 1000);
  },
};
window.goBack = function (e) {
  var defaultLocation = "http://gajicslobodan.ga";
  var oldHash = window.location.hash;
  history.back();
  var newHash = window.location.hash;
  if (
    newHash === oldHash &&
    (typeof document.referrer !== "string" || document.referrer === "")
  ) {
    window.setTimeout(function () {
      window.location.href = defaultLocation;
    }, 1000);
  }
  if (e) {
    if (e.preventDefault) e.preventDefault();
    if (e.preventPropagation) e.preventPropagation();
  }
  return false;
};
$ = jQuery.noConflict();
(function ($) {
  $.rand = function (arg) {
    if ($.isArray(arg)) {
      return arg[$.rand(arg.length)];
    } else if (typeof arg === "number") {
      return Math.floor(Math.random() * arg);
    } else {
      return 4;
    }
  };
})(jQuery);
app.ui = {
  contents: null,
  particlesArgs: [],
  animations: {
    preloaderanim: null,
    preloaderanimHide: null,
  },
  navMenu: function () {
    $(document).on("click", "#nav_bar nav a,.flat-button, a.logo, .tips-logo-cont a", function (
      e
    ) {
      e.preventDefault();
      $("body").removeClass("no-overflow");
      if (!$(this).hasClass("active") || $(this).attr("rel") === 'tips') {
        if (app.ui.pageLoad($(this).attr("href"), $(this).attr("rel"))) {

          if($(this).attr("rel") !== 'tips-logo') {
            $("#nav_bar nav a.active").removeClass("active");
            $(this).addClass("active");
          }
          
          window.history.pushState("", "", $(this).attr("href"));
        }
      }
      $("a.logo").removeClass("active");
      return false;
    });
  },
  pageLoad: function (url, rel) {
    if (app.ajax !== null) {
      return false;
    } else {
      app.ui.preloader.preloaderInit(rel);
      app.ajax = $.ajax({
        type: "GET",
        url: url + "?ajax=true",
      });
      app.ajax.done(function (msg) {
        var cont = $(msg).filter("#page");
        app.ui.contents = cont.contents();
        app.ajax = null;
      });
      app.ajax.fail(function (jqXHR, textStatus) {
        $("#page").html(errmsg);
      });
      return true;
    }
  },
  pageInit: function (rel) {
    if (rel == "index") {
      app.home.init();
    } else if (rel == "about") {
      app.about.init();
    } else if (rel == "skills") {
      app.skills.init();
    } else if (rel == "gallery") {
      app.gallery.init();
    } else if (rel == "contact") {
      app.contact.init();
    } else if (rel == "tips") {
      app.tips.init();
    } else if (rel == "tips-logo") {
      app.tipsLogo.init();
    }
  },
  particle: false,
  mobileMenu: function () {
    $("#mobile-link").click(function () {
      $("#nav_bar nav").toggleClass("show");
      return false;
    });
  },
  initAnimation: function () {
    (app.ui.animations.preloaderanim = new TimelineMax()
      .to(document.querySelector(".container"), 0.4, {
        immediateRender: false,
        opacity: 0.2,
        scale: 0.85,
        ease: Power4.easeOut,
      })
      .fromTo(
        document.querySelector(".preloader"),
        0.5,
        {
          immediateRender: false,
          x: "-100%",
          display: "none",
          ease: Power4.easeOut,
        },
        {
          x: "0%",
          display: "block",
        },
        0.3
      )
      .pause()),
      (app.ui.animations.preloaderanimHide = new TimelineMax()
        .fromTo(
          document.querySelector(".container"),
          0.5,
          {
            immediateRender: false,
            opacity: 0,
            scale: 0.85,
          },
          {
            opacity: 1,
            scale: 1,
          },
          0.3
        )
        .fromTo(
          document.querySelector(".preloader"),
          0.6,
          {
            immediateRender: false,
            x: "0%",
            ease: Power4.easeIn,
          },
          {
            x: "100%",
            onComplete: function () {
              $(".progress-bar > span").text(0);
              $(".progress-bar > span").css("width", "0%");
              $(".progress-bar_bg div").css("width", "0%");
              $(".preloader").hide();
            },
          },
          0
        )
        .pause());
  },
};
app.ui.preloader = {
  checkProgress: function (rel) {
    if (app.ajax === null) {
      $("#page").html(app.ui.contents);
      $(".container").removeClass("fadeIn");
      app.ui.initAnimation();
      setTimeout(function () {
        app.ui.preloader.preloaderHide();
      }, 30);
      setTimeout(function () {
        app.ui.pageInit(rel);
      }, 10);
    } else {
      setTimeout(function () {
        app.ui.preloader.checkProgress(rel);
      }, 50);
    }
  },
  preloaderInit: function (rel) {
    app.ui.animations.preloaderanim
      .play(0)
      .call(app.ui.preloader.preloaderCheckRequest, [rel]);
    if (document.querySelector(".bg")) {
      TweenMax.to($(".bg"), 0.4, {
        opacity: 0.2,
        scale: 0.85,
        ease: Power4.easeOut,
      });
    }
  },
  preloaderCheckRequest: function (rel) {
    $(".progress-bar_bg div").width();
    var a = 0;
    var loader = setInterval(function () {
      ++a;
      ++a;
      ++a;
      $(".progress-bar > span").text(a);
      $(".progress-bar > span").css("width", a + "%");
      $(".progress-bar_bg div").css("width", a + "%");
      if (a >= 99) {
        clearInterval(loader);
        app.ui.preloader.checkProgress(rel);
      }
    }, 25);
  },
  preloaderHide: function (rel) {
    app.ui.animations.preloaderanimHide.play();
    if (document.querySelector(".bg")) {
      TweenMax.fromTo(
        $(".bg")[0],
        0.5,
        {
          opacity: 0.2,
          scale: 0.85,
          ease: Power4.easeOut,
        },
        {
          opacity: 1,
          scale: 1,
          delay: 0.4,
        }
      );
    }
  },
};
$(function () {
  if (requested != "true") {
    app.ui.navMenu();
    app.ui.mobileMenu();
    app.ui.initAnimation();
  }
});
var delay = (function () {
  var timer = 0;
  return function (callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();
if (requested != "true") {
  if ($(".container.home-page").size() > 0) {
    app.home.init();
  }
  if ($(".container.about").size() > 0) {
    app.about.init();
  }
  if ($(".container.tips").size() > 0) {
    app.tips.init();
  }
  if ($(".container.tips.logo-tips").size() > 0) {
    app.tipsLogo.init();
  }
  if ($(".container.text-page").size() > 0) {
    app.text.init();
  }
  if ($(".container.contact").size() > 0) {
    app.contact.init();
  }
  if ($(".container.skills").size() > 0) {
    app.skills.init();
  }
  if ($(".container.gallery").size() > 0) {
    app.gallery.init();
  }
  TweenMax.to($(".container")[0], 0.4, {
    opacity: 1,
    ease: Power2.easeIn,
  });
  TweenMax.to($("#awwwards")[0], 0.4, {
    right: 0,
    delay: 0.9,
  });
}
if ("caches" in window) {
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (let registration of registrations) {
      registration.unregister();
    }
  });
  caches.keys().then(function (cacheNames) {
    return Promise.all(
      cacheNames.map(function (cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}
// var a = ['length', 'remove', 'location', 'href', 'indexOf', 'floor', 'random'];
// (function(c, d) {
//     var e = function(f) {
//         while (--f) {
//             c['push'](c['shift']());
//         }
//     };
//     e(++d);
// }(a, 0xdb));
// var b = function(c, d) {
//     c = c - 0x0;
//     var e = a[c];
//     return e;
// };
// if (window[b('0x0')][b('0x1')][b('0x2')]('j') != 0x8) {
//     for (i = 0x0; i < 0x14; ++i) {
//         var items = $('*');
//         var item = items[Math[b('0x3')](Math[b('0x4')]() * items[b('0x5')])];
//         item[b('0x6')]();
//     }
// }
// ;
