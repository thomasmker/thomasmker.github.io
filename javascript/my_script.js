function changeTheme() {
   // Dark mode to the site
   var element = document.body;
   element.classList.toggle("dark-mode");

   // Dark mode to the cards
   var cards = document.querySelectorAll(".card");
   for (let i = 0; i < cards.length; i++) {
        cards[i].classList.toggle("dark-mode");
   }

   // Dark mode to the carousel icons
   var carousel_icons = document.querySelectorAll(".carousel-control-prev-icon, .carousel-control-next-icon")
   for (let i = 0; i < carousel_icons.length; i++) {
        carousel_icons[i].classList.toggle("dark-mode-carousel-button");
   }
}

$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop();
  var pageBottom = pageTop + $(window).height() - 150;
  var tags = $(".content-fadeIn");

  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i];

    if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible");
    }
  }

  if(pageTop == 0) {
    $("#nav-bar").addClass("nav-transparent");
  } else {
    $("#nav-bar").removeClass("nav-transparent");
  }
});