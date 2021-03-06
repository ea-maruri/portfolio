// Sizes
let body = document.body;
let html = document.documentElement;

const height = Math.max(
  body.scrollHeight,
  body.offsetHeight,
  html.clientHeight,
  html.scrollHeight,
  html.offsetHeight
);

const width = Math.max(
  body.scrollWidth,
  body.offsetWidth,
  html.clientWidth,
  html.scrollWidth,
  html.offsetWidth
);

console.log("Height: " + height + "\nMiddle: " + height / 2);


// Date
let mtoday = new Date();
let year = mtoday.getFullYear();


// Year for copyright
checkCopyrightYear = () => {
  const $copyright = $("#mcopy-right");

  if (width < 770) {
    $copyright.html(year + "<br>AM-GIK");
  } else {
    $copyright.html("&#169; Copyright " + year + "<br>AM-GIK");
  }
}

checkCopyrightYear();

// Check Scroll
let ref_point = 2.5;
let $arrowContainer = $("#marrow-container");
$arrowContainer.click(documentGoto);
let $arrow = $("#marrow");

// Each half second
const counting = setInterval(function () {
  let scrollTop =
    window.pageYOffset ||
    (document.documentElement || document.body.parentNode || document.body)
      .scrollTop;

  //console.log("Scroll: "+ scrollTop);

  if (scrollTop >= height / ref_point) {
    $arrowContainer.attr("class", "position-absolute position-fixed d-flex flex-column-reverse justify-content-center align-items-center arrow-container");
    $arrowContainer.attr("title", "Go to top")
    
    $arrow.attr("class", "arrow up");
    $arrow.css("margin-bottom", "-20px")
  } else {
    $arrowContainer.attr("class", "position-absolute position-fixed d-flex flex-column justify-content-center align-items-center arrow-container");
    $arrowContainer.attr("title", "Go to bottom")
    
    $arrow.attr("class", "arrow down");
  }
}, 500);

// Top and Bottom with arrow
function documentGoto(event) {
  let scrollTop =
    window.pageYOffset ||
    (document.documentElement || document.body.parentNode || document.body)
      .scrollTop;

  if (scrollTop >= height / ref_point) {
    location.href = "#";
    location.href = "#page-start";
  } else {
    location.href = "#";
    location.href = "#page-end";
  }
}

// Contact Form Modal
let formMail = document.getElementById("modal_txt_email");
let formName = document.getElementById("modal_txt_name");
let formTopic = document.getElementById("modal_txt_topic");
let formRequest = document.getElementById("modal_txt_request");
let successMessageModal = document.getElementById("success-form-message-modal");

let btnSend = document.getElementById("modal_btn_send");

if(btnSend){
  btnSend.addEventListener("click", mSubmitModalForm);
}

function mSubmitModalForm(event) {
  let valueMail = formMail.value;
  let valueName = formName.value;
  let valueTopic = formTopic.value;
  let valueRequest = formRequest.value;

  console.log("Received " + valueMail + valueName);

  if (valueMail && valueName && valueTopic && valueRequest) {
    console.log("Send this");
    console.log("Mail: " + valueMail);
    console.log("Name: " + valueName);
    console.log("Topic: " + valueTopic);
    console.log("Request: " + valueRequest);

    successMessageModal.innerHTML =
      "Excelent, your request has been sent successfully!";

    formMail.value = "";
    formName.value = "";
    formTopic.value = "";
    formRequest.value = "";
  } else {
    alert("Please, do not leave blanks in the form");
  }
}

// Contact Form About page
let aboutFormMail = document.getElementById("about_txt_email");
let aboutFormName = document.getElementById("about_txt_name");
let aboutFormTopic = document.getElementById("about_txt_topic");
let aboutFormRequest = document.getElementById("about_txt_request");
let successMessage = document.getElementById("success-form-message");

let aboutbtnSend = document.getElementById("about_btn_send");

if (aboutbtnSend) {
  aboutbtnSend.addEventListener("click", mSubmitAboutForm);
}

function mSubmitAboutForm(event) {
  console.log("Something");
  let valueMail = aboutFormMail.value;
  let valueName = aboutFormName.value;
  let valueTopic = aboutFormTopic.value;
  let valueRequest = aboutFormRequest.value;

  console.log("Received " + valueMail + valueName);

  if (valueMail && valueName && valueTopic && valueRequest) {
    console.log("Send this");
    console.log("Mail: " + valueMail);
    console.log("Name: " + valueName);
    console.log("Topic: " + valueTopic);
    console.log("Request: " + valueRequest);

    successMessage.innerHTML =
      "Excelent, your request has been sent successfully!";

    aboutFormMail.value = "";
    aboutFormName.value = "";
    aboutFormTopic.value = "";
    aboutFormRequest.value = "";
  } else {
    alert("Please, do not leave blanks in the form");
  }
}

// Check Scroll Direction
var lastScrollTop = 0;
var nav_cards = document.getElementById("mprincipal-nav");

window.addEventListener(
  "scroll",
  function () {
    // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      console.log("Scroll to down");
      if (width < 770) {
        nav_cards.style.bottom = "-200px";
      } else {
        nav_cards.style.bottom = "-260px";
      }
    } else {
      console.log("Scroll to Up");
      if (width < 770) {
        nav_cards.style.bottom = "-160px";
      } else {
        nav_cards.style.bottom = "-210px";
      }
    }

    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  },
  false
);






/* JQuery */
$(document).ready(function () {
  //-------------------------//
  // Call check hour
  if($("#element-bbq-wings")){
    checkHour();
  }

  //-------------------------//
  // Show/Hide All recipes (One click)
  showHideRecipes();

  //-------------------------//
  // Show img as modal (dblclick)
  checkImgModal();

  //-------------------------//
  // Check Scroll Direction and Scroll on scrollable divs
  checkScrollDirection();
  checkScrollDirectionForNav();

  let $srcollableElement = $(".scrollable");
  $srcollableElement.scroll(function () {
    let randomColor = getRandomColor();
    console.log("Color: " + randomColor);
    $srcollableElement.css("border", "2px solid " + randomColor);
  });

  //-------------------------//
  // Check input focus
  $("#txtFieldSearch").focus(function () {
    $("#fakeMessage").css("display", "block");
    setTimeout(function () {
      $("#fakeMessage").hide();
    }, 1500);
  });
});

//
// Funcitons

// Checking Hour
function checkHour() {
  let today = new Date();
  let hour = today.getHours();
  let minutes = today.getMinutes();

  console.log("Time --> " + hour + ":" + minutes);

  // Breakfast time, from 6:00 to 9:59
  if (hour >= 6 && minutes >= 0 && hour <= 9 && minutes <= 59) {
    console.log("Show Tortillas");
    //alert(
    //  "Breakfast Time --> " + hour + ":" + minutes + ".\n\nEnjoy your meal!!!"
    //);

    $("#element-bbq-wings").hide();
    $("#content-bbq-wings").hide();

    $("#element-yahuarlocro").hide();
    $("#content-yahuarlocro").hide();

    $("#element-lassagna").hide();
    $("#content-lassagna").hide();

    $("#mfood-title").html(
      "My favorite foods" + "<br><small>(Breakfast Time)</small>"
    );
  }
  // Lunch Time, from 12:00 to 14:59
  else if (hour >= 12 && minutes >= 0 && hour <= 14 && minutes <= 59) {
    console.log("Show Yahuarlocro");
    //alert("Lunch Time --> " + hour + ":" + minutes + ".\n\nEnjoy your meal!!!");

    $("#element-tortillas").hide();
    $("#content-tortillas").hide();

    $("#element-bbq-wings").hide();
    $("#content-bbq-wings").hide();

    $("#element-lassagna").hide();
    $("#content-lassagna").hide();

    $("#mfood-title").html(
      "My favorite foods" + "<br><small>(Lunch Time)</small>"
    );
  }
  // Dinner Time, from 17:00 to 19:59
  else if (hour >= 17 && minutes >= 0 && hour <= 19 && minutes <= 59) {
    console.log("Show Lassagna");
    //alert(
    //  "Dinner Time --> " + hour + ":" + minutes + ".\n\nEnjoy your meal!!!"
    //);

    $("#element-tortillas").hide();
    $("#content-tortillas").hide();

    $("#element-bbq-wings").hide();
    $("#content-bbq-wings").hide();

    $("#element-yahuarlocro").hide();
    $("#content-yahuarlocro").hide();

    $("#mfood-title").html(
      "My favorite foods" + "<br><small>(Dinner Time)</small>"
    );
  }
  // Any other time
  else {
    console.log("Show BBQ Wings");
    //alert(
    //  "It's time for any plate --> " +
    //    hour +
    //    ":" +
    //    minutes +
    //    ".\n\nEnjoy your meal!!!"
    //);

    $("#element-tortillas").hide();
    $("#content-tortillas").hide();

    $("#element-yahuarlocro").hide();
    $("#content-yahuarlocro").hide();

    $("#element-lassagna").hide();
    $("#content-lassagna").hide();

    $("#mfood-title").html(
      "My favorite foods" + "<br><small>(It's time for any plate)</small>"
    );
  }
}

// Show/Hide recipes
function showHideRecipes() {
  let recipes_shown = false; // starts in false
  const $button_for_recipes = $("#show-recipes-button");

  $button_for_recipes.click(function () {
    if (recipes_shown) {
      recipes_shown = false;
      console.log("Hide Recipes");

      checkHour();

      $button_for_recipes.html("See all Recipes");
    } else {
      recipes_shown = true;
      console.log("Show Recipes");

      $("#element-tortillas").show();
      $("#content-tortillas").show();

      $("#element-bbq-wings").show();
      $("#content-bbq-wings").show();

      $("#element-yahuarlocro").show();
      $("#content-yahuarlocro").show();

      $("#element-lassagna").show();
      $("#content-lassagna").show();

      $button_for_recipes.html("Hide Recipes");
    }
  });
}

// Image Modal
function checkImgModal() {
  // Get the modal
  let $contentHide = $(".hideContent");
  let $modal = $("#myModal");

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  // Only on desktop
  let $modalImg = $("#img01");
  $(".myModalImg").dblclick(function () {
    $contentHide.hide();

    $modal.show();
    $modalImg.attr("src", this.src);
    $("#caption").html(this.alt);
  });

  // Get the <span> element that closes the modal
  const span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    $contentHide.show();
    $modal.hide();
  };
}

// Check Scroll
function checkScrollDirection() {
  let ref_point = 2.5;
  let $arrowContainer = $("#marrow-container");
  let $arrow = $("#marrow");

  const width = Math.max(
    body.scrollWidth,
    body.offsetWidth,
    html.clientWidth,
    html.scrollWidth,
    html.offsetWidth
  );

  console.log("Height: " + height + "\nMiddle: " + height / 2);

  // Each half second
  const counting = setInterval(function () {
    let scrollTop =
      window.pageYOffset ||
      (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;

    if (scrollTop >= height / ref_point) {
      $arrowContainer.css("flex-direction", "column-reverse");
      $arrowContainer.attr("title", "Go to top");
      $arrow.attr("class", "arrow up");
      $arrow.css("margin-bottom", "-20px");
    } else {
      $arrowContainer.attr("title", "Go to bottom");
      $arrowContainer.css("flex-direction", "column");
      $arrow.attr("class", "arrow down");
    }
  }, 500);

  $arrowContainer.click(documentGoto);

  function documentGoto(event) {
    let scrollTop =
      window.pageYOffset ||
      (document.documentElement || document.body.parentNode || document.body)
        .scrollTop;

    if (scrollTop >= height / ref_point) {
      console.log("Go Up");
      location.href = "#";
      location.href = "#page-start";
    } else {
      console.log("Go down");
      location.href = "#";
      location.href = "#page-end";
    }
  }
}

function checkScrollDirectionForNav() {
  // Check Scroll Direction
  var lastScrollTop = 0;
  var nav_cards = document.getElementById("mprincipal-nav");

  window.addEventListener(
    "scroll",
    function () {
      // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      var st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        console.log("Scroll to down");
        if (width < 770) {
          nav_cards.style.bottom = "-200px";
        } else {
          nav_cards.style.bottom = "-260px";
        }
      } else {
        console.log("Scroll to Up");
        if (width < 770) {
          nav_cards.style.bottom = "-160px";
        } else {
          nav_cards.style.bottom = "-210px";
        }
      }

      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    },
    false
  );
}

// Return a random hex-number
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


