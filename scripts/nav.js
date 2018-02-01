const Nav = {
  listenersStarted: false,

  reset: function() {
    if (!this.listenersStarted) {
      this.startListeners();
    }
  },

  startListeners: function() {
    $(".link--projects").click(() => {
      $('html, body').animate({
        scrollTop: ($(".projects").offset().top)
      }, 200);
    });

    $(".link--about").click(() => {
      $('html, body').animate({
        scrollTop: ($(".about").offset().top)
      }, 200);
    });

    $(".link--contact").click(() => {
      $('html, body').animate({
        scrollTop: ($(".contact").offset().top)
      }, 200);
    });
  }
};

$(Nav.reset());