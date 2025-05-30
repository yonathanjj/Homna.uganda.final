gsap.registerPlugin(ScrollTrigger);

// Hero section animations
gsap.to(".hero-header", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".hero-header",
        start: "top 75%",
        toggleActions: "play none none none"
    }
});

gsap.to(".hero-description", {
    opacity: 1,
    y: 0,
    duration: 1.2,
    delay: 0.3,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".hero-description",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

// Mission section animation
gsap.from(".mission-statement", {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: ".mission-section",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

// Values section animations
gsap.utils.toArray(".values-text h2").forEach((heading, index) => {
    gsap.from(heading, {
        opacity: 0,
        x: -30,
        duration: 0.8,
        delay: index * 0.2,
        scrollTrigger: {
            trigger: heading,
            start: "top 85%",
            toggleActions: "play none none none"
        }
    });
});

gsap.utils.toArray(".values-text p").forEach((paragraph, index) => {
    gsap.from(paragraph, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: index * 0.3,
        scrollTrigger: {
            trigger: paragraph,
            start: "top 90%",
            toggleActions: "play none none none"
        }
    });
});

gsap.from(".values-image", {
    opacity: 0,
    x: 50,
    duration: 1,
    scrollTrigger: {
        trigger: ".values-image",
        start: "top 80%",
        toggleActions: "play none none none"
    }
});

// Team section animations
gsap.from(".section-header-container", {
    opacity: 0,
    y: -30,
    duration: 0.8,
    scrollTrigger: {
        trigger: ".team-section",
        start: "top 90%",
        toggleActions: "play none none none"
    }
});

gsap.utils.toArray(".team-member").forEach((member, index) => {
    gsap.from(member, {
        opacity: 0,
        y: 50,
        duration: 0.6,
        delay: index * 0.1,
        scrollTrigger: {
            trigger: member,
            start: "top 90%",
            toggleActions: "play none none none"
        }
    });
});