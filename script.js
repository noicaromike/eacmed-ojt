document.addEventListener("DOMContentLoaded", function (){
    gsap.set(".img", {y:500});
    gsap.set(".loader-img",{x:500});
    gsap.set(".nav-item",{y:25,opacity:0});
    gsap.set("h1,.item,footer",{y:200});

    const tl = gsap.timeline({delay:1});
    tl.to(".img",{
        y: 0,
        duration: 1.5,
        stagger: 0.5,
        ease: "power3.inOut",
    }).to(".loader-img",{
        x: 0,
        duration: 3,
        ease: "power3.inOut",
    },"-=2.5")
    .to(".img:not(#loader-logo",{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        stagger: 0.1,
        ease: "power3.inOut",
    },"-=1")
    .to(".loader",{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1,
        opacity: 0,
        ease: "power3.inOut",
    },"-=0.5")
    .to(".nav-item,h1,footer,.item",{
        y:0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.inOut",
    },"-=0.5")
})