$(document).ready(() => {
  /*
   *	ARROW SCROLL TO TOP | MENU BAR
   */

  $(".arrow-scroll-to-top").fadeOut();

  const handleScroll = () => {
    let scrollTop = $(window).scrollTop();
    if (scrollTop > 50) {
      $(".arrow-scroll-to-top").fadeIn();
      $(".menu").addClass("scrolled");
    } else {
      $(".arrow-scroll-to-top").fadeOut();
      $(".menu").removeClass("scrolled");
    }
  };

  handleScroll();

  $(window).scroll(function () {
    handleScroll();
  });

  $(".arrow-scroll-to-top").click(function () {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  /*
   *	MENU BAR
   */

  $(".hamburger").click(function () {
    $(this).toggleClass("active");
    $(".menu__mobile-content").fadeToggle().css("display", "flex");
  });

  $("[data-href]").click(function () {
    const hash = $(this).attr("data-href");
    console.log(hash);
    var targetOffset = $(hash).offset().top - 70;
    $("html, body").animate(
      {
        scrollTop: targetOffset,
      },
      1000
    );
  });

  /*
   *  SLIDERS
   */

  if ($("div").hasClass("react-slider")) {
    const splide = new Splide(".react-slider", {
      type: "loop",
      drag: true,
      arrows: true,
      pagination: true,
      perPage: 1,
      breakpoints: {
        992: {
          arrows: false,
        },
      },
    });

    splide.mount();
  }

  if ($("div").hasClass("other-slider")) {
    const splide = new Splide(".other-slider", {
      type: "loop",
      drag: true,
      arrows: true,
      pagination: true,
      perPage: 1,
      breakpoints: {
        992: {
          arrows: false,
        },
      },
    });

    splide.mount();
  }
});
