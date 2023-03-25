$(window).on("load", function () {
  wow = new WOW({
    animateClass: "animated",
    offset: 100,
    callback: function (box) {},
  });
  wow.init();

  $(".spot-loeader").addClass("loaded");
  $(".loader-content").addClass("loaded");

  $(window).scroll(function () {
    $(".header").toggleClass("scrolled", $(this).scrollTop() > 50);
  });

  // var typed2 = new Typed("#typed2", {
  //   strings: [
  //     "Freelancers"
  //   ],
  //   typeSpeed: 50,
  //   startDelay: 1000,
  //   // fadeOut: true,
  //   loop: false,
  // });
  var rellax = new Rellax(".rellax");

  var object1 = $("#spot1");
  var object2 = $("#spot2");
  var object3 = $("#spot3");
  var layer = $("#layer");

  layer.mousemove(function (e) {
    var valueX = (e.pageX * -1) / 200;
    var valueY = (e.pageY * -1) / 200;

    object1.css({
      transform: "translate3d(" + valueX + "px," + valueY + "px,0)",
    });
  });
  layer.mousemove(function (e) {
    var valueX = (e.pageX * 1) / 200;
    var valueY = (e.pageY * 1) / 200;

    object2.css({
      transform: "translate3d(" + valueX + "px," + valueY + "px,0)",
    });
  });
  layer.mousemove(function (e) {
    var valueX = (e.pageX * 1) / 200;
    var valueY = (e.pageY * 1) / 200;

    object3.css({
      transform: "translate3d(" + valueX + "px," + valueY + "px,0)",
    });
  });
});
