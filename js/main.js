//smooth scroll
(function () {
  var $root = $('html, body');
  $('nav a').click(function () {
    // alert(123);
    var href = $.attr(this, 'href');
    $root.animate({
      scrollTop: $(href).offset().top
    }, 500, function () {
      window.location.hash = href;
    });
    return false;
  });
})();
//smooth scroll end

//language switch

// alert($("#Chinese").data("en"));
if (Cookies.get("lang") == "zh") {
  $('[data-zh]').each(function () {
    $(this).html($(this).data("zh"));
  });
} else if (Cookies.get("lang") == "en") {
  $("#switcher-en a").addClass("lang-active");
  $("#switcher-zh a").removeClass("lang-active");

  $('[data-en]').each(function () {
    $(this).text($(this).data("en"));
  });
}
$("#switcher-zh").on("click", function () {
  Cookies.set("lang", "zh", { expires: 365 });

  $('[data-zh]').each(function () {
    $(this).text($(this).data("zh"));
  });


  $("#switcher-zh a").addClass("lang-active");
  $("#switcher-en a").removeClass("lang-active");


});

$("#switcher-en").on("click", function () {

  Cookies.set("lang", "en", { expires: 365 });

  $('[data-en]').each(function () {
    $(this).html($(this).data("en"));


    $("#switcher-en a").addClass("lang-active");
    $("#switcher-zh a").removeClass("lang-active");


  });

});


//language switch end

//portofolio slide description effect

$(".portfolio").hover(function(){
  $(this).find("div.slide-description").slideToggle();
});


//portofolio slide description effect END
