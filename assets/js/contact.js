gsap.from("h2", {
    duration: 1,
    y: -50,
    opacity: 0,
    ease: "power3.out"
});

gsap.from(".subtext", {
    duration: 1,
    x: -50,
    opacity: 0,
    delay: 0.3
});

gsap.from(".divider", {
    duration: 1,
    scaleX: 0,
    transformOrigin: "left",
    stagger: 0.2
});

gsap.from(".left-content > *", {
    duration: 0.8,
    x: -30,
    opacity: 0,
    stagger: 0.15,
    delay: 0.5
});

gsap.from(".map-item", {
    duration: 0.8,
    y: 30,
    opacity: 0,
    stagger: 0.2,
    delay: 0.8
});

gsap.from(".form-group", {
    duration: 0.6,
    y: 20,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".contact-form"
    }
});

gsap.from(".faq-item", {
    duration: 0.5,
    y: 20,
    opacity: 0,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".faq-section"
    }
});