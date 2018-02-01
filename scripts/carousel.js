const Carousel = {
  listenersStarted: false,
  activeProject: 0,
  projects: [".hangmanateach", ".fridge-poetry", ".weather-to-game"],

  reset: function() {
    this.activeProject = 0;
    if (!this.listenersStarted) {
      this.startListeners();
    }
  },

  startListeners: function() {
    $("i.angle.left").click(() => {
      this.changeProject(this.activeProject - 1);
    });

    $("i.angle.right").click(() => {
      this.changeProject(this.activeProject + 1);
    });
  },

  changeProject: function(projectIndex) {
    let nextProject = null;
    let direction = "";

    if (projectIndex > this.projects.length - 1) {
      nextProject = 0;
      direction = "left";
    } else if (projectIndex < 0) {
      nextProject = this.projects.length - 1;
      direction = "right";
    } else {
      nextProject = projectIndex;
      nextProject > this.activeProject ? direction = "left" : direction = "right";
    }

    $(this.projects[this.activeProject])
      .transition(`fly ${direction}`, () => {
        $(this.projects[nextProject])
          .transition(`fly ${direction}`);
    });

    // $(this.projects[this.activeProject])
    //   .transition(`fade`, () => {
    //     $(this.projects[nextProject])
    //       .transition(`fade`);
    //   });

    // $(this.projects[this.activeProject] + " img")
    //   .transition(`fly ${direction}`, () => {
    //     $(this.projects[this.activeProject]).transition("fade", () => {
    //       $(this.projects[nextProject]).transition("fade", () => {
    //         $(this.projects[nextProject] + " img").transition(`fly ${direction}`);
    //       })
    //     })
    //   })

    // $(this.projects[this.activeProject]).transition("scale", () => {
    //   $(this.projects[this.nextProject]).transition("scale");
    // });

    this.activeProject = nextProject;
  }
};

$(Carousel.reset());