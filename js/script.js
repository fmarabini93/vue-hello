var root = new Vue(

      {
            el: "#root",
            data: {
                  message: "Spring",
                  image: "img/spring.jpg"
            },
            methods: {
                  changeSeason: function() {
                        switch (this.message) {
                              case "Spring":
                                    this.message = "Summer";
                                    this.image = "img/summer.jpg";
                                    break;
                              case "Summer":
                                    this.message = "Fall";
                                    this.image = "img/fall.jpg";
                                    break;
                              case "Fall":
                                    this.message = "Winter";
                                    this.image = "img/winter.jpg";
                                    break;
                              case "Winter":
                                    this.message = "Spring";
                                    this.image = "img/spring.jpg";
                                    break;
                        }

                  }
            }
      }

);