 // GSAP Animations
        gsap.to(".blog-card", {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".container",
                start: "top center"
            }
        });

        // GSAP Animations
        // Hover animation
        gsap.utils.toArray(".post-image-container").forEach(container => {
            gsap.to(container.querySelector(".post-image"), {
                scale: 1,
                paused: true,
                ease: "power2.out"
            });

            container.addEventListener("mouseenter", () => {
                gsap.to(container.querySelector(".post-image"), {
                    scale: 1.05,
                    duration: 0.4
                });
            });

            container.addEventListener("mouseleave", () => {
                gsap.to(container.querySelector(".post-image"), {
                    scale: 1,
                    duration: 0.4
                });
            });
        });

        // Popup functionality
        gsap.utils.toArray("[data-popup]").forEach(trigger => {
            const popup = document.querySelector(trigger.dataset.popup);
            const closeBtn = popup.querySelector(".close-btn");

            // Open popup
            trigger.addEventListener("click", () => {
                gsap.to(popup, {
                    autoAlpha: 1,
                    duration: 0.3,
                    ease: "power2.out"
                });
            });

            // Close popup
            closeBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                gsap.to(popup, {
                    autoAlpha: 0,
                    duration: 0.2
                });
            });
        });

        // Initial animation
        gsap.from(".post-card", {
            duration: 0.8,
            autoAlpha: 0,
            y: 30,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: ".posts-grid",
                start: "top 80%"
            }
        });


        function openPopup(title, image, content) {
            const popup = document.querySelector('.popup');
            const popupTitle = document.getElementById('popup-title');
            const popupImage = document.getElementById('popup-image');
            const popupText = document.getElementById('popup-text');

            // Set content dynamically
            popupTitle.textContent = title;
            popupImage.src = image;
            popupText.textContent = content;

            // Display the popup
            popup.style.display = 'flex';
            setTimeout(() => {
                popup.classList.add('show');
            }, 50);

            // Close the popup when clicking outside the content area
            popup.addEventListener('click', (e) => {
                if (e.target === popup) {
                    closePopup();
                }
            });
        }

        function closePopup() {
            const popup = document.querySelector('.popup');
            popup.classList.remove('show');
            setTimeout(() => {
                popup.style.display = 'none';
            }, 300);
        }



// Select elements
const infoModalOverlay = document.querySelector('.info-modal-overlay');
const infoModalContent = document.querySelector('.info-modal-content');
const infoModalTitle = document.querySelector('.info-modal-title');
const infoModalText = document.querySelector('.info-modal-text');
const closeInfoModal = document.querySelector('.close-info-modal');
const footerLinks = document.querySelectorAll('.footer-bottom-links a');

// Info Modal content data
const infoModalData = {
  commitment: {
    title: "Our Commitment",
    text: "At HOMNA, we are committed to delivering innovative solutions that connect worlds and drive progress. We prioritize sustainability, quality, and customer satisfaction in everything we do."
  },
  "privacy-policy": {
    title: "Privacy Policy",
    text: "Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information. We adhere to strict data protection standards to ensure your information is safe."
  },
  "legal-info": {
    title: "Legal Information",
    text: "This section provides legal information about our company, including terms of use, disclaimers, and intellectual property rights. Please review this information carefully before using our services."
  },
  suppliers: {
    title: "Suppliers",
    text: "We work with trusted suppliers who share our commitment to quality and sustainability. Our supplier network is carefully vetted to ensure the highest standards of service and reliability."
  },
  "cookie-policy": {
    title: "Cookie Policy",
    text: "Our Cookie Policy explains how we use cookies and similar technologies to enhance your experience on our website. You can manage your cookie preferences at any time."
  }
};

// Show info modal
footerLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const modalId = link.getAttribute('data-modal');
    const data = infoModalData[modalId];

    infoModalTitle.textContent = data.title;
    infoModalText.textContent = data.text;
    infoModalOverlay.classList.add('active');
  });
});

// Close info modal
closeInfoModal.addEventListener('click', () => {
  infoModalOverlay.classList.remove('active');
});

// Close info modal when clicking outside
infoModalOverlay.addEventListener('click', (e) => {
  if (e.target === infoModalOverlay) {
    infoModalOverlay.classList.remove('active');
  }
});

footerLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log("Link clicked:", link.getAttribute('data-modal')); // Debugging
    const modalId = link.getAttribute('data-modal');
    const data = infoModalData[modalId];

    if (data) {
      console.log("Data found:", data); // Debugging
      infoModalTitle.textContent = data.title;
      infoModalText.textContent = data.text;
      infoModalOverlay.classList.add('active');
    } else {
      console.log("No data found for:", modalId); // Debugging
    }
  });
});