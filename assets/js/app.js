let navBar = document.querySelector(".mobileView");
let menuBtn = document.querySelector(".menu");
let body = document.querySelector("body");
let span1 = document.querySelector(".menu-btn-line-1");
let span2 = document.querySelector(".menu-btn-line-2");
let navLinks = document.querySelectorAll(".navLinks")

menuBtn.addEventListener("click", function () {
    navBar.classList.toggle("show");
    body.classList.toggle("overflow-hidden");
    span1.classList.toggle("arrow-1");
    span2.classList.toggle("arrow-2");
});

navLinks.forEach((links) => {
    links.addEventListener("click", function () {
        navBar.classList.remove("show");
        body.classList.remove("overflow-hidden");
        span1.classList.remove("arrow-1");
        span2.classList.remove("arrow-2");
    });
})

