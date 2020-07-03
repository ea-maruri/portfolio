// Year for copyright
let copyright = document.getElementById("mcopy-right");

let mtoday = new Date();
let year = mtoday.getFullYear();

copyright.innerHTML = "&#169; Copyright " + year;


// Check Scroll
//let documentHeight = $(window).height(); 
//const $document = $(document);



//let arrow
var countdown = setInterval(function() {
    let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop

    console.log("Scroll: "+ scrollTop);

    if(scrollTop){

    }

}, 2000);
