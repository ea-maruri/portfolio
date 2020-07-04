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



// Top and Bottom with arrow
let document_top = document.getElementById("page-start");
let document_bottom = document.getElementById("page-end");


arrowContainer.addEventListener("click", document_goto);

function document_goto(event){
    let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop

    if(scrollTop >= height/2){
        console.log("Go Up");
        
        
    }
    else{
        console.log("Go down")
        

    }
}



// Contact Form

