/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});


/* =========================
   ACTIVE NAVIGATION LINK
========================= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop - 200){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href").includes(current)){

            link.classList.add("active");

        }

    });

});


/* =========================
   SMOOTH FADE-IN ANIMATION
========================= */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

const hiddenElements =
document.querySelectorAll(".card, .hero-content");

hiddenElements.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});


/* =========================
   MOBILE MENU TOGGLE
========================= */

const menuBtn =
document.querySelector(".menu-btn");

const navMenu =
document.querySelector(".nav-links");

if(menuBtn){

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("mobile-active");

    });

}


/* =========================
   TYPING EFFECT
========================= */

const text =
"Building Modern Software Solutions";

const typingElement =
document.querySelector(".typing-text");

let index = 0;

function typeText(){

    if(typingElement && index < text.length){

        typingElement.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText, 70);

    }

}

typeText();


/* =========================
   BUTTON RIPPLE EFFECT
========================= */

const buttons =
document.querySelectorAll(".hero-btn");

buttons.forEach(button => {

    button.addEventListener("click", function(e){

        const circle =
        document.createElement("span");

        const diameter =
        Math.max(
            this.clientWidth,
            this.clientHeight
        );

        circle.style.width =
        circle.style.height =
        `${diameter}px`;

        circle.style.left =
        `${e.clientX - this.offsetLeft - diameter / 2}px`;

        circle.style.top =
        `${e.clientY - this.offsetTop - diameter / 2}px`;

        circle.classList.add("ripple");

        const ripple =
        this.querySelector(".ripple");

        if(ripple){

            ripple.remove();

        }

        this.appendChild(circle);

    });

});
/* =========================
   GO BACK BUTTON
========================= */

function goBack(){

    window.history.back();

}