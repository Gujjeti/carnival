document.addEventListener("DOMContentLoaded", function () {
    let tl = gsap.timeline({ repeat: 3, repeatDelay: 1 });

    tl.from(".text1, .text2", { 
        y: 30, 
        duration: 1.5,  
        ease: "expo.out",  
        opacity:0,
        stagger: 0.1 
    }).from(".booknowCTA", { 
        y: 30, 
        duration: 1.5,  
        opacity:0,
        ease: "expo.out"
    }, "-=1.2") 
.from(".logos_wrapper span, .tagline", { 
        y: 30, 
        duration: 1.5,  
        opacity:0,
        ease: "expo.out",
        stagger: 0.1
    }, "-=1.2") 
     
});
