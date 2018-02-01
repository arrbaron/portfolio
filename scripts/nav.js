const Nav = {
  listenersStarted: false,
  scrollSpeed: 500,
  animationTime: "1.5s",

  reset: function() {
    if (!this.listenersStarted) {
      this.startListeners();
      console.log("Nothing to see here.");
    }
  },

  startListeners: function() {
    $(".link--projects").click(() => {
      $('html, body').animate({
        scrollTop: ($(".projects").offset().top)
      }, this.scrollSpeed);
      $(".projects__title").transition({animation: "flash", duration: this.animationTime});
    });

    $(".link--about").click(() => {
      $('html, body').animate({
        scrollTop: ($(".about").offset().top)
      }, this.scrollSpeed);
      $(".about__title").transition({animation: "flash", duration: this.animationTime});
    });

    $(".link--contact").click(() => {
      $('html, body').animate({
        scrollTop: ($(".contact").offset().top)
      }, this.scrollSpeed);
      $(".contact__title").transition({animation: "flash", duration: this.animationTime});
    });
  }
};

$(Nav.reset());