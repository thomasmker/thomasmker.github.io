function changeTheme() {
   // Dark mode to the site
   var element = document.body;
   element.classList.toggle("dark-mode");

   // Dark mode to the cards
   var cards = document.querySelectorAll(".card");
   for (let i = 0; i < cards.length; i++) {
        cards[i].classList.toggle("dark-mode");
    }
}