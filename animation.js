// Register the ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// Hero Section Animation
gsap.from(".hero-title", {
    opacity: 0,
    y: -150,
    duration: 2,
});

// About Section Heading Animation
gsap.from("#about-section #about-heading", {
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: "#about-section #about-heading",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
    },
});

// About Section Paragraph Animation
gsap.from("#about-para", {
    x: -20,
    opacity: 0,
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: "#about-section",
        start: "top 90%",
        end: "bottom 50%",
        toggleActions: "play none none none",
    },
});

// About Section Image Animation
gsap.from("#about-img", {
    x: 20,
    opacity: 0,
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: "#about-img",
        start: "top 80%",
        end: "bottom 50%",
        toggleActions: "play none none none",
    },
});



gsap.from("#about-cards div",{

    x:20,
    opacity:0,
    duration:2,
    stagger:0.5,
    scrollTrigger: {
        trigger: "#about-section",
        start: "top 80%",
        end: "bottom 50%",
        toggleActions: "play none none none",
    },

})


gsap.from("#product-section #product-heading", {
    y: -30,
    opacity: 0,
    duration: 1,
    delay: .3,
    scrollTrigger: {
        trigger: "#product-section #product-heading",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
    },
})

gsap.from("#owner #owner-container", {
    scale:0,
    opacity: 0,
    duration: 1,
    delay: .3,
    scrollTrigger: {
        trigger: "#owner #owner-container",
        start: "top 90%",
        end: "bottom 10%",
        toggleActions: "play none none none",
    },
})


gsap.from("#contact-section #contact-heading", {
    y: -50,
    opacity: 0,
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: "#contact-section #contact-heading",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none none",
    },
})


gsap.from("#contact-section-img", {
    x: -20,
    opacity: 0,
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: "#contact-section-img",
        start: "top 90%",
        end: "bottom 50%",
        toggleActions: "play none none none",
    },
});

// About Section Image Animation
gsap.from("#contactForm", {
    x: 20,
    opacity: 0,
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: "#contactForm",
        start: "top 80%",
        end: "bottom 50%",
        toggleActions: "play none none none",
    },
});