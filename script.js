function loading() {
    var tl = gsap.timeline();

    tl.to(".yellow1", {
        top: "-100%",
        delay: .5,
        duration: .7,
        ease: "expo.out"
    })
    
    tl.from(".yellow2", {
        top: "100%",
        delay: .5,
        duration: .5,
        ease: "expo.out"
    })
    
    tl.to(".loader h1", {
        color: "#000",
        delay: -.2,
    })

    tl.to(".loader", {
        display: "none",
    })

    tl.to(".loader", {
        opacity: 0,
    })

    tl.to(".nav", {
        opacity: 1,
        delay: -.5,
    })
}
loading();

const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
})

function Images() {
    var elems = document.querySelectorAll(".elem");
var page2 = document.querySelector(".page2")
elems.forEach(function(ele) {
    ele.addEventListener("mouseenter", function() {
        var image1 = ele.getAttribute("data-img")
        page2.style.backgroundImage = `url(${image1})`

    })
})
}
Images();


function backtotop () {
    var footer = document.querySelector(".footer .ftop i")
    footer.addEventListener("click", function() {
        console.log("haha")
        scroll.scrollTo(0);
    })
    
    var footer = document.querySelector(".footer .ftop h2")
    footer.addEventListener("click", function() {
        console.log("haha")
        scroll.scrollTo(0);
    })
}
backtotop();


