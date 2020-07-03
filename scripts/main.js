// Year for copyright
let copyright = document.getElementById("mcopy-right");

let mtoday = new Date();
let year = mtoday.getFullYear();

copyright.innerHTML = "&#169; Copyright " + year;


// Check Scroll
let arrowContainer = document.getElementById("marrow-container");
let arrow = document.getElementById("marrow");

let body = document.body;
let html = document.documentElement;

const height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

console.log("Height: " + height + "\nMiddle: " + height/2);

// Each half second
const counting = setInterval(function() {
    let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop

    console.log("Scroll: "+ scrollTop);

    if(scrollTop >= height/2){
        console.log("Turn around arrow");
        
        arrowContainer.style.flexDirection = "column-reverse"; 
        arrow.className = "arrow up";
        arrow.style.marginBottom = "-20px";
    }
    else{
        console.log("Return arrow")
        arrowContainer.style.flexDirection = "column";
        arrow.className = "arrow down";
    }

}, 500);
