// Year for copyright
let copyright = document.getElementById("mcopy-right");

let mtoday = new Date();
let year = mtoday.getFullYear();

copyright.innerHTML = "&#169; Copyright " + year;

// Working with chips (Aside and Header)
const social_chip = document.getElementById("social-chip");
const social_card = document.getElementById("social-card");
const social_chip_title = document.getElementById("social-chip-title");

const available_width = window.screen.availWidth;
console.log("Available width:" + window.screen.availWidth);

// Event listener with arrow notation
social_chip.addEventListener("click", () => {
  // Ensuring if elements are in
  if (social_chip && social_card) {
    // Show Card
    if (social_card.style.display === "none") {
      social_card.style.display = "grid";

      social_chip.style.marginLeft = "0";

      social_chip_title.style.fontSize = ".7rem";
      social_chip_title.style.left = ".2rem";
      social_chip_title.style.top = ".3rem";

      if (available_width <= 650) {
        social_chip.style.width = "15vw";
        social_chip.style.height = "15vw";
      } else {
        social_chip.style.width = "10vh";
        social_chip.style.height = "10vh";
      }
    } else {
      social_card.style.display = "none";

      social_chip.style.marginLeft = "-2.3rem";

      social_chip_title.style.display = "block";
      social_chip_title.style.fontSize = "1rem";
      social_chip_title.style.left = ".9rem";

      if (available_width <= 650) {
        social_chip.style.width = "15vw";
        social_chip.style.height = "15vw";
        social_chip.style.marginLeft = "-1.9rem";

        social_chip_title.style.fontSize = ".7rem";
      } else {
        social_chip.style.width = "16.66vh";
        social_chip.style.height = "16.66vh";
        social_chip_title.style.fontSize = "1rem";
      }
    }
  }
});

// With JQuery
/*$('#searchModal').on('show.bs.modal', event => {
  var button = $(event.relatedTarget);
  var modal = $(this);
});*/
