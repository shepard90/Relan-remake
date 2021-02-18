
// scrollToTarget
    function scroll(e) {
      var href = $(this).attr('href');
      e.preventDefault();

    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 500);
    };

    $('a[href^="#"]').click(scroll);



// class changer on hover for perk
$(".perk").mouseenter(function() {
  $(this).addClass("perkglow");
});

$(".perk").mouseout(function() {
  $(this).removeClass("perkglow");
});

// class changer on hover for card
$(".card").mouseenter(function() {
  $(this).addClass("cardglow");
});

$(".card").mouseout(function() {
  $(this).removeClass("cardglow");
});
