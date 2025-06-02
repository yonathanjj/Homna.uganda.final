// GSAP Animations
document.addEventListener('DOMContentLoaded', function() {
    // Initial animations for blog cards
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

    // Hover animation for post images
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

    // Initial animation for post cards
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
});

// Custom popup functions
function openPopup(title, image, content) {
    const popup = document.querySelector('.popup');
    const popupTitle = document.getElementById('popup-title');
    const popupImage = document.getElementById('popup-image');
    const popupText = document.getElementById('popup-text');

    // Set content dynamically
    popupTitle.textContent = title;
    popupImage.src = image;

    // Process content to make links clickable (improved version)
    let processedContent = content
        // Convert www.xxx.yyy links (that aren't already in <a> tags)
        .replace(/(^|\s)(www\.[^\s<]+)/g, '$1<a href="https://$2" target="_blank" rel="noopener noreferrer">$2</a>')
        // Convert http(s):// links (that aren't already in <a> tags)
        .replace(/(^|\s)(https?:\/\/[^\s<]+)/g, '$1<a href="$2" target="_blank" rel="noopener noreferrer">$2</a>')
        // Convert email addresses
        .replace(/([\w.-]+@[\w.-]+\.\w+)/g, '<a href="mailto:$1">$1</a>')
        // Convert phone numbers
        .replace(/(^|\s)(\+\d[\d\s-]+)/g, '$1<a href="tel:$2">$2</a>');

    // Special handling for "Visit:<br>www.homnaltd.com" pattern
    processedContent = processedContent.replace(
        /Visit:&lt;br&gt;(www\.[^\s<]+)/g,
        'Visit:<br><a href="https://$1" target="_blank" rel="noopener noreferrer">$1</a>'
    );

    popupText.innerHTML = processedContent;

    // Display the popup
    popup.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        popup.classList.add('show');
    }, 50);

    // Close the popup when clicking outside the content area
    popup.addEventListener('click', function closeOnOutsideClick(e) {
        if (e.target === popup) {
            closePopup();
            popup.removeEventListener('click', closeOnOutsideClick);
        }
    });
}

function closePopup() {
    const popup = document.querySelector('.popup');
    popup.classList.remove('show');
    document.body.style.overflow = ''; // Re-enable scrolling

    setTimeout(() => {
        popup.style.display = 'none';
    }, 300);
}