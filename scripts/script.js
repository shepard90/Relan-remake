
// scrollToTarget
    function scroll(e) {
      var href = $(this).attr('href');
      e.preventDefault();

    $('html, body').animate({
      scrollTop: $(href).offset().top
    }, 500);
    };

    $('a[href^="#"]').click(scroll);
