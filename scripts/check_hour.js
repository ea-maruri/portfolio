const body = document.getElementsByClassName("bg-time");

const tortillas_content = document.getElementById("content-tortillas");
const tortillas_title = document.getElementById("element-tortillas");

const bbq_wings_content = document.getElementById("content-bbq-wings");
const bbq_wings_title = document.getElementById("element-bbq-wings");

const yahuarlocro_content = document.getElementById("content-yahuarlocro");
const yahuarlocro_title = document.getElementById("element-yahuarlocro");

const lassagna_content = document.getElementById("content-lassagna");
const lassagna_title = document.getElementById("element-lassagna");

const food_title = document.getElementById("mfood-title");


var today = new Date();
let hour = today.getHours();
let minutes = today.getMinutes();

console.log(hour + ":" + minutes);


// Breakfast time, from 6:00 to 9:59
if((hour >= 6 && minutes >= 0) && (hour <= 9 && minutes <= 59)){
    console.log("Show Tortillas");
    alert("Breakfast Time --> " + hour + ":" + minutes + ".\n\nEnjoy your meal!!!");

    bbq_wings_title.style.display = "none";
    bbq_wings_content.style.display = "none";

    yahuarlocro_title.style.display = "none";
    yahuarlocro_content.style.display = "none";

    lassagna_title.style.display = "none";
    lassagna_content.style.display = "none";

    food_title.innerHTML = food_title.innerHTML + "<br><small>(Breakfast Time)</small>";
}
// Lunch Time, from 12:00 to 14:59
else if((hour >= 12 && minutes >= 0) && (hour <= 14 && minutes <= 59)){
    console.log("Show Yahuarlocro")
    alert("Lunch Time --> " + hour + ":" + minutes + ".\n\nEnjoy your meal!!!");

    tortillas_title.style.display = "none";
    tortillas_content.style.display = "none";

    bbq_wings_title.style.display = "none";
    bbq_wings_content.style.display = "none";

    lassagna_title.style.display = "none";
    lassagna_content.style.display = "none";

    food_title.innerHTML = food_title.innerHTML + "<br><small>(Lunch Time)</small>";
}
// Dinner Time, from 17:00 to 19:59
else if((hour >= 17 && minutes >= 0) && (hour <= 19 && minutes <= 59)){
    console.log("Show Lassagna")
    alert("Dinner Time --> " + hour + ":" + minutes + ".\n\nEnjoy your meal!!!");

    tortillas_title.style.display = "none";
    tortillas_content.style.display = "none";

    yahuarlocro_title.style.display = "none";
    yahuarlocro_content.style.display = "none";

    bbq_wings_title.style.display = "none";
    bbq_wings_content.style.display = "none";

    food_title.innerHTML = food_title.innerHTML + "<br><small>(Dinner Time)</small>";
}
// Any time
else {
    console.log("Show BBQ Wings")
    alert("Time for any plate --> " + hour + ":" + minutes + ".\n\nEnjoy your meal!!!");

    tortillas_title.style.display = "none";
    tortillas_content.style.display = "none";
    
    yahuarlocro_title.style.display = "none";
    yahuarlocro_content.style.display = "none";

    lassagna_title.style.display = "none";
    lassagna_content.style.display = "none";

    food_title.innerHTML = food_title.innerHTML + "<br><small>(Time for any plate)</small>";
}

