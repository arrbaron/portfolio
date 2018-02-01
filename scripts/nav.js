const Nav = {
  listenersStarted: false,
  scrollSpeed: 500,

  reset: function() {
    if (!this.listenersStarted) {
      this.startListeners();
    }
  },

  startListeners: function() {
    $(".link--projects").click(() => {
      $('html, body').animate({
        scrollTop: ($(".projects").offset().top)
      }, this.scrollSpeed);
    });

    $(".link--about").click(() => {
      $('html, body').animate({
        scrollTop: ($(".about").offset().top)
      }, this.scrollSpeed);
    });

    $(".link--contact").click(() => {
      $('html, body').animate({
        scrollTop: ($(".contact").offset().top)
      }, this.scrollSpeed);
    });
  }
};

$(Nav.reset());