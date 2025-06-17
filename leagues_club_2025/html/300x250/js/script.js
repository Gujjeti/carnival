document.addEventListener("DOMContentLoaded", function () {
    let tl = gsap.timeline({ repeat: 3, repeatDelay: 1 });

    tl.from(".text1, .text2", { 
        y: 30, 
        duration: 1.2, 
        ease: "power4.out", 
        opacity:0,
        stagger: 0.1
    }).from(".booknowCTA", { 
        y: 30, 
        duration: 1.0,  
        opacity:0,
        ease: "power4.out"
    }, "-=1") 
.from(".logos_wrapper span, .tagline", { 
        y: 30, 
        duration: 1.0,  
        opacity:0,
        ease: "power4.out",
        stagger: 0.1
    }, "-=1") 
     
});
