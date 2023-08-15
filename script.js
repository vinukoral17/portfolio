///SPLASH SCREEN SCRIPT

let intro = document.querySelector('.intro');
let logo  = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.lgo');

window.addEventListener('DOMContentLoaded',()=>{

    setTimeout(() =>{
        
        logoSpan.forEach((span,idx)=>{
            setTimeout(()=>{
                span.classList.add('active');
            },(idx + 1) * 400)
        });

        setTimeout(() =>{
            logoSpan.forEach((span,idx)=>{

                setTimeout(() =>{
                    span.classList.remove('active');
                    span.classList.add('fade');
                },(idx + 1) * 50)
            })
        }, 2000);


        setTimeout(()=>{
            intro.style.top = '-100vh';
        },2500)
    })
})


//NAVBAR SCRIPT
$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });
    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    

    //typing animation script
    var typed = new Typed(".typing",{
        strings: ["Web Developer","Photoshopper","Premire Pro Designer","Musician","Software Engineer"],
        typeSpeed:100,
        backSpeed: 60,
        loop: true
    });
});

///CONTACT PAGE SCRIPT
const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    if (this.value == ""){
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus",focusFunc);
    input.addEventListener("blur",blurFunc);
});

/// PARALAXX EFFECT
window.addEventListener('scroll',function () {
    const parallax = document.querySelector('.paral');
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY(' + scrollPosition * .1 + 'px)';
});
window.addEventListener('scroll',function () {
    const parallax = document.querySelector('.home-content');
    let scrollPosition = window.pageYOffset;

    parallax.style.transform = 'translateY(' + scrollPosition * -.2 + 'px)';
});

//CURSOR WITHOUT FRAME
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove", function (e){
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    cursorOutline.animate({
    left : `${posX}px`,
    top:`${posY}px`
    }, { duration: 500, fill: "forwards"});
});