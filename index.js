// const navigationHeight = document.querySelector(".").offsetHeight;

// document.documentElement.style.setProperty('--scroll-padding',navigationHeight + 20 + "px" )




// ========================== hamburger ======================================== 


const hamIcon=document.querySelector(".hamberger")
const navr = document.querySelector(".header")

const toggleNavbar = () =>{
    navr.classList.toggle("active");
};

hamIcon.addEventListener("click",() => toggleNavbar());



// / ----------------------- scrolBtn js ------------------- 

const scrollBtn=document.querySelector(".scroll-btn")
const scrollElement=document.querySelector("#scroll-up")
const headSection=document.querySelector(".header");


window.onscroll=function(){
    scrollFunc();
    scrollright();
}

function scrollFunc(){
    if(document.body.scrollTop >150 || document.documentElement.scrollTop >150){
        document.getElementById("scroll-up").classList.add("slideup");
    }
    else{
        document.getElementById("scroll-up").classList.remove("slideup");
    }
    // if(document.body.scrollTop >200 || document.documentElement.scrollTop >200){
    //     document.getElementById("scroll-up").className="slideup";
    // }
    // else{
    //     document.getElementById("scroll-up").className="slidedown"
    // }
}

function scrollright(){
    if(document.body.scrollTop >150 || document.documentElement.scrollTop >150){
        document.getElementById("scroll-right").classList.add("slideright");
    }
    else{
        document.getElementById("scroll-right").classList.remove("slideright");
    }
}

const scrollTop = () =>{
    headSection.scrollIntoView({behavior:"smooth"})
}

scrollElement.addEventListener('click',scrollTop);




// =========================== slider =============================================== 




const mainSlider = document.querySelector(".slider")
const nextBtn=document.querySelector(".next-btn");
const prevBtn=document.querySelector(".prev-btn");
const slides=document.querySelectorAll(".slide");
const slideIcon=document.querySelectorAll(".slide-icon");
const numberOfSlides=slides.length;
var slideNumber = 0;

// image slide next button 

nextBtn.addEventListener("click", () => {

        slides.forEach((slide)=>{
            slide.classList.remove("active")
        });
        slideIcon.forEach((slideIcons)=>{
            slideIcons.classList.remove("active")
        });

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcon[slideNumber].classList.add("active");

});


// image slider pervious button 

prevBtn.addEventListener("click", ()=>{

    slides.forEach((slide) =>{
        slide.classList.remove("active");
    });
    slideIcon.forEach((slideIcons) =>{
        slideIcons.classList.remove("active");
    });

    slideNumber--;

    if(slideNumber < 0){
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add("active");
    slideIcon[slideNumber].classList.add("active")

});


// image slider autoplay 

var playSlider;

var repeater = () =>{
    playSlider = setInterval(function(){
        slides.forEach((slide)=>{
            slide.classList.remove("active")
        });
        slideIcon.forEach((slideIcons)=>{
            slideIcons.classList.remove("active")
        });

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
        slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcon[slideNumber].classList.add("active");
    },4000);
}
repeater();

// stop image slider autoplay on mouseover 

mainSlider.addEventListener("mouseover",()=>{
    clearInterval(playSlider);
});

// start the image slider autoplay agian on mouseout 

mainSlider.addEventListener("mouseout",()=>{
repeater();
});





// ========================= form validation ========================================= 


const form = document.getElementById("form")
const button=document.getElementById("button")
const username = document.getElementById("username")
const email = document.getElementById("email")
const organization = document.getElementById("organization")
const number = document.getElementById("number")
const region = document.getElementById("region")
const inquiry = document.getElementById("inquiry")

// add event  1.

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    validate();
});
// button.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     validate();
// });
// button.addEventListener("click",(event2)=>{
//     if(validate()=== false){
//         event2=document.getElementById("form").reset();
//     }
//     // alert("submited a form")
// });



    // isemail validate 

    const isEmail = (emailval) =>{
        var atsymbol = emailval.indexOf("@");
        if(atsymbol<1)
        return false;

        var dot = emailval.lastIndexOf(".");
        if(dot<=atsymbol+3)
        return false;
        if(dot === emailval.length - 1)
        return false;
        return true;
    }

// define the validate func with trim use for remove before and after spaces     2.

const validate = () => {
    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const organizationval = organization.value.trim();
    const numberval = number.value.trim();
    const regionval = region.value.trim();
    const inquiryval = inquiry.value.trim();
    // const reset=document.getElementById("form").reset();


    // validate username 

    if(usernameval ===""){
        setErrorMsg(username,'Username Cannnot Be Blank');
    }else if(usernameval.length<=2){
        setErrorMsg(username,'Username Min 2 Character');
    }else{
        setSuccessMsg(username);
    }

    // validate email 

    if(emailval ===""){
        setErrorMsg(email,'Email Cannnot Be Blank');
    }else if(!isEmail(emailval)){
        setErrorMsg(email,'Enter Valid email');
    }else{
        setSuccessMsg(email);
    }

    // validate organization

    if(organizationval === ""){
        setErrorMsg(organization,"Please Enter a Company Name")
    }else if(organizationval === isNaN){
        setErrorMsg(organization,'Please Enter Valid Name')
    }else{
        setSuccessMsg(organization)
    }

    // number validate 

    if(numberval ===""){
        setErrorMsg(number,"Number cannot be empty")
    }else if(isNaN(numberval)){
        setErrorMsg(number,"Number cannot be a alphabates")
    }else if(numberval.length<10){
        setErrorMsg(number,"Number must be 10 character")
    }else if(numberval.length>10){
        setErrorMsg(number,"Number cannot be grater than 10 character")
    }else if((numberval.charAt(0)!=9) && (numberval.charAt(0)!=8) && (numberval.charAt(0)!=7)){
       setErrorMsg(number,"Must start with 9,8,7")
    }else{
        setSuccessMsg(number)
    }

    // region validate 

    if(regionval ===""){
        setErrorMsg(region,"Please select the region")
    }else{
        setSuccessMsg(region)
    }

    // inquiry validate 

    if(inquiryval ===""){
        setErrorMsg(inquiry,"please select the inquiry section")
    }
    else{
        setSuccessMsg(inquiry)
    }
}
function setErrorMsg(input,errormsg){
    const formControl = input.parentElement;
    const span = formControl.querySelector('span')
    formControl.className="input-section error"
    span.innerHTML=errormsg
}

function setSuccessMsg(input){
    const formControl =input.parentElement;
    formControl.className="input-section success"
}



