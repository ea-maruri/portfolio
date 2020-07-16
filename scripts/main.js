// Year for copyright
let copyright = document.getElementById("mcopy-right");

let mtoday = new Date();
let year = mtoday.getFullYear();

//copyright.innerHTML = "&#169; Copyright " + year;



// Check Scroll
let ref_point = 2.5;
let arrowContainer = document.getElementById("marrow-container");
let arrow = document.getElementById("marrow");

let body = document.body;
let html = document.documentElement;

const height = Math.max(body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

const width = Math.max(body.scrollWidth, body.offsetWidth,
                        html.clientWidth, html.scrollWidth, html.offsetWidth);

console.log("Height: " + height + "\nMiddle: " + height/2);

// Each half second
const counting = setInterval(function() {
    let scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop

    //console.log("Scroll: "+ scrollTop);

    if(scrollTop >= height/ref_point){
        //console.log("Turn around arrow");
        
        arrowContainer.style.flexDirection = "column-reverse"; 
        arrowContainer.title = "Go to top";
        arrow.className = "arrow up";
        arrow.style.marginBottom = "-20px";
    }
    else{
        //console.log("Return arrow")

        arrowContainer.title = "Go to bottom";
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
    
    
    if(scrollTop >= height/ref_point){
        console.log("Go Up");
        location.href = "#";
        location.href = "#page-start";    
    }
    else{
        console.log("Go down")
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

btnSend.addEventListener("click", mSubmitModalForm);

function mSubmitModalForm(event){
    let valueMail = formMail.value;
    let valueName = formName.value;
    let valueTopic = formTopic.value;
    let valueRequest = formRequest.value;

    console.log("Received "+ valueMail + valueName);

    if(valueMail && valueName && valueTopic && valueRequest){
        console.log("Send this");
        console.log("Mail: " + valueMail);
        console.log("Name: " + valueName);
        console.log("Topic: " + valueTopic);
        console.log("Request: " + valueRequest);

        successMessageModal.innerHTML = "Excelent, your request has been sent successfully!";

        formMail.value = "";
        formName.value = "";
        formTopic.value = "";
        formRequest.value = "";
    }
    else{
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

if(aboutbtnSend){
    aboutbtnSend.addEventListener("click", mSubmitAboutForm);
}

function mSubmitAboutForm(event){
    console.log("Something")
    let valueMail = aboutFormMail.value;
    let valueName = aboutFormName.value;
    let valueTopic = aboutFormTopic.value;
    let valueRequest = aboutFormRequest.value;

    console.log("Received "+ valueMail + valueName);

    if(valueMail && valueName && valueTopic && valueRequest){
        console.log("Send this");
        console.log("Mail: " + valueMail);
        console.log("Name: " + valueName);
        console.log("Topic: " + valueTopic);
        console.log("Request: " + valueRequest);

        successMessage.innerHTML = "Excelent, your request has been sent successfully!";

        aboutFormMail.value = "";
        aboutFormName.value = "";
        aboutFormTopic.value = "";
        aboutFormRequest.value = "";
    }
    else{
        alert("Please, do not leave blanks in the form");
    }
}


// Check Scroll Direction
var lastScrollTop = 0;
var nav_cards = document.getElementById("mprincipal-nav");

window.addEventListener("scroll", function(){
    // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    var st = window.pageYOffset || document.documentElement.scrollTop; 
    if (st > lastScrollTop){
        console.log("Scroll to down");
        if(width < 770){
            nav_cards.style.bottom = "-200px";
        }
        else{
            nav_cards.style.bottom = "-260px";
        }
    }
    else {
        console.log("Scroll to Up");
        if(width < 770){
            nav_cards.style.bottom = "-160px";
        }
        else{
            nav_cards.style.bottom = "-210px";
        }
    }
   
    lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);