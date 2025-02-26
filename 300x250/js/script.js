document.addEventListener("DOMContentLoaded", function () {
    let tl = gsap.timeline({ repeat: false, repeatDelay: 0 });

    tl.to(".text1 span, .text2 span, .logo", { 
        y: 0, 
        duration: 1.2, 
        ease: "power4.out", 
        stagger: 0.1
    }).to(".booknowCTA", { 
        y: 0, 
        duration: 1.0,  
        ease: "power4.out"
    }, "-=0.8") 

    .from(".booknowCTA span", { 
        y: 30, 
        duration: 1.0,  
        ease: "power4.out"
    }, "-=1"); 
});
