document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const track = document.querySelector('.carousel-track');
    const cards = document.querySelectorAll('.product-card');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const dotsContainer = document.querySelector('.carousel-dots');

    const cardWidth = cards[0].offsetWidth + 30;
    let currentPosition = 0;
    let maxPosition = track.scrollWidth - carousel.offsetWidth;
    let visibleCards = Math.floor(carousel.offsetWidth / cardWidth);

    // --- Helper Functions ---
    function createDots() {
        dotsContainer.innerHTML = '';
        const dotCount = Math.ceil(track.scrollWidth / carousel.offsetWidth);
        for (let i = 0; i < dotCount; i++) {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => {
                currentPosition = i * carousel.offsetWidth;
                track.style.transform = `translateX(-${currentPosition}px)`;
                updateDots();
                updateButtons();
            });
            dotsContainer.appendChild(dot);
        }
    }

    function updateDots() {
        const dots = document.querySelectorAll('.carousel-dot');
        const activeDotIndex = Math.round(currentPosition / carousel.offsetWidth);
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeDotIndex);
        });
    }

    function updateButtons() {
        prevButton.disabled = currentPosition === 0;
        nextButton.disabled = currentPosition >= maxPosition - 10;
    }

    function moveCarousel(amount) {
        currentPosition += amount;
        currentPosition = Math.max(0, Math.min(currentPosition, maxPosition));
        track.style.transform = `translateX(-${currentPosition}px)`;
        updateButtons();
        updateDots();
    }

    // --- Desktop Drag Support ---
    let isDragging = false;
    let startX, startScrollLeft;

    track.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX;
        startScrollLeft = currentPosition;
        carousel.style.cursor = 'grabbing';
        carousel.style.userSelect = 'none';
    });

    track.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const x = e.pageX;
        const walk = (x - startX) * 2;
        currentPosition = startScrollLeft - walk;
        track.style.transform = `translateX(-${currentPosition}px)`;
        updateButtons();
        updateDots();
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        carousel.style.cursor = 'grab';
        carousel.style.userSelect = '';
    });

    // --- Mobile Touch Swipe Support ---
    let touchStartX = 0;
    let touchEndX = 0;

    function handleTouchStart(e) {
        touchStartX = e.touches[0].clientX;
    }

    function handleTouchMove(e) {
        touchEndX = e.touches[0].clientX;
    }

    function handleTouchEnd() {
        const diff = touchEndX - touchStartX;
        const swipeThreshold = 50;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                // Swipe Right -> go to previous
                moveCarousel(-cardWidth * visibleCards);
            } else {
                // Swipe Left -> go to next
                moveCarousel(cardWidth * visibleCards);
            }
        }
    }

    // Only add touch events on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        track.addEventListener('touchstart', handleTouchStart);
        track.addEventListener('touchmove', handleTouchMove);
        track.addEventListener('touchend', handleTouchEnd);
    }

    // --- Button Clicks ---
    prevButton.addEventListener('click', () => {
        moveCarousel(-cardWidth * visibleCards);
    });

    nextButton.addEventListener('click', () => {
        moveCarousel(cardWidth * visibleCards);
    });

    // --- Animation Observer ---
    createDots();
    updateButtons();

    const productsSection = document.querySelector('.products-section');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate');
                        }, index * 100);
                    });
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    observer.observe(productsSection);

    // --- Resize Handling ---
    window.addEventListener('resize', () => {
        maxPosition = track.scrollWidth - carousel.offsetWidth;
        visibleCards = Math.floor(carousel.offsetWidth / cardWidth);
        updateButtons();
        updateDots();
    });
});

    // Projects Popup
    document.addEventListener("DOMContentLoaded", function () {
        const projects = document.querySelectorAll(".project-card");
        const popup = document.getElementById("projects-popup");
        const popupTitle = document.querySelector(".popup-title");
        const popupGallery = document.querySelector(".popup-gallery");

        function openProjectsPopup(title, galleryImages) {
            popupTitle.textContent = title;
            popupGallery.innerHTML = "";

            galleryImages.forEach((image) => {
                const imgDiv = document.createElement("div");
                imgDiv.classList.add("popup-image");
                imgDiv.style.backgroundImage = `url('${image}')`;
                imgDiv.addEventListener("click", () => openLightbox(image));
                popupGallery.appendChild(imgDiv);
            });

            popup.style.display = "flex";
        }

        function openLightbox(imageSrc) {
            const lightbox = document.createElement("div");
            lightbox.classList.add("lightbox");

            const lightboxImage = document.createElement("img");
            lightboxImage.src = imageSrc;
            lightboxImage.classList.add("lightbox-image");

            const closeLightboxBtn = document.createElement("span");
            closeLightboxBtn.classList.add("close-lightbox-btn");
            closeLightboxBtn.innerHTML = "&times;";
            closeLightboxBtn.addEventListener("click", () => closeLightbox(lightbox));

            lightbox.appendChild(lightboxImage);
            lightbox.appendChild(closeLightboxBtn);
            document.body.appendChild(lightbox);
        }

        function closeLightbox(lightbox) {
            lightbox.remove();
        }

        projects.forEach((project) => {
            project.addEventListener("click", function () {
                const projectTitle = project.getAttribute("data-title");
                const galleryImages = JSON.parse(project.getAttribute("data-gallery"));
                openProjectsPopup(projectTitle, galleryImages);
            });
        });

        function closeProjectsPopup() {
            popup.style.display = "none";
        }

        popup.addEventListener("click", function (event) {
            if (event.target === popup) {
                closeProjectsPopup();
            }
        });

        window.closeProjectsPopup = closeProjectsPopup;
    });

    // JavaScript (Same as before with small adjustments)
function openPopup(cardElement) {
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupImage = document.getElementById('popup-image');
    const popupText = document.getElementById('popup-text');

    // Get data from the clicked card
    const title = cardElement.querySelector('.news-title').textContent;
    const imageSrc = cardElement.querySelector('.news-image img').src;
    const date = cardElement.querySelector('.news-date').textContent;

    // Set popup content
    popupTitle.textContent = title;
    popupImage.src = imageSrc;
    popupImage.alt = title;

    // Generate content based on the card title
    let content = '';
    switch(title) {
        case 'Exciting News About Our Latest Project':
            content = `
                <p class="popup-date">${date}</p>
                <p><strong>🩺 Even concrete needs surgery sometimes.</strong></p>
                <p>When it does, Sikadur®-52 LP is the specialist we call in.</p>
                <ul>
                    <li>Cracks in your beams?</li>
                    <li>Voids in your foundation?</li>
                    <li>Structural pain in columns or slabs?</li>
                </ul>
                <p>🛠️ This isn't just surface damage, it's a case for expert intervention.</p>
                <p>Sikadur®-52 LP is a high-strength, low-viscosity epoxy injection resin, designed to go deep into cracks and voids and restore structural integrity from within.</p>
                <p>Think of it as a surgeon for concrete:</p>
                <ul>
                    <li>✔️ Penetrates hairline cracks like a precision needle</li>
                    <li>✔️ Bonds concrete sections like sutures</li>
                    <li>✔️ Stops corrosion and water intrusion like a seal</li>
                    <li>✔️ Cures without shrinkage, and never leaves a scar</li>
                </ul>
                <p>📍 Available at Homna showrooms: Kimironko | Remera | Nyabugogo</p>
                <p>📞 <a href="tel:+250790696166">+250 790 696 166</a> | <a href="tel:+250791920749">+250 791 920 749</a> | <a href="tel:+250791920763">+250 791 920 763</a></p>
                <p>📧 <a href="mailto:info@homnaltd.com">info@homnaltd.com</a></p>
                <p>🌐 <a href="https://www.homnaltd.com" target="_blank">www.homnaltd.com</a></p>
                <p>Sika Kenya</p>
            `;
            break;
        case 'A New Collaboration Announcement':
            content = `
                <p class="popup-date">${date}</p>
                <p>👷‍♂️ At Homna, every applicator matters because building right starts with being treated right.</p>
                <p>Behind every waterproofed wall, every sealed roof, and every flawless epoxy floor… there's a skilled hand, and a hardworking professional we're proud to support.</p>
                <p>We don't just work together, we grow together.<br>Because when you work with Homna, it should feel like home.</p>
                <p>📞 <a href="tel:+250790696166">+250 790 696 166</a> | <a href="tel:+250791920749">+250 791 920 749</a> | <a href="tel:+250791920763">+250 791 920 763</a></p>
                <p>📧 <a href="mailto:info@homnaltd.com">info@homnaltd.com</a></p>
                <p>🌐 <a href="https://www.homnaltd.com" target="_blank">www.homnaltd.com</a></p>
                <p>🏢 Showrooms: Kimironko | Remera | Nyabugogo</p>
                <p>Sika Kenya | ACO East Africa | Kingspan Insulation</p>
            `;
            break;
        case 'Behind The Scenes of Our Latest Work':
            content = `
                <p class="popup-date">${date}</p>
                <p>🏆 <strong>A Historic Win for Homna Limited!</strong></p>
                <p>We are thrilled to announce that David Irakoze, representing Homna Limited, has made history by securing 1st Place at the inaugural Sika Kenya Tiler Competition and was named the <strong>#EastAfrica</strong> winner!</p>
                <p>After first conquering <strong>#Rwanda</strong>'s national stage, our <strong>#Applicator</strong> has now triumphed regionally, proving his unmatched craftsmanship.</p>
                <p>This win earns him a spot at the Sika Africa Innovation Week in Morocco – the next frontier for excellence.</p>
                <p>Our Homna Limited family welcomed David home with flowers and well-deserved personal gifts, celebrating the dedication that brought him this far.</p>
                <p>This victory reflects Homna Limited's commitment to nurturing world-class talent, investing in technical mastery, and celebrating excellence as one team.</p>
                <p><strong>#Partner</strong> with a team that sets industry standards!</p>
                <p><strong>#Contact us today to discuss your next project:</strong><br/>
                📞 <a href="tel:+250790696166">+250 790 696 166</a><br/>
                📧 <a href="mailto:info@homnaltd.com">info@homnaltd.com</a></p>
                <p><strong>#Visit:</strong><br/>
                <a href="https://www.homnaltd.com" target="_blank">www.homnaltd.com</a></p>
            `;
            break;
    }

    popupText.innerHTML = content;
    popup.style.display = 'flex';
    setTimeout(() => popup.classList.add('show'), 10);

    // Close when clicking outside content
    popup.addEventListener('click', (e) => {
        if (e.target === popup) closePopup();
    });
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.classList.remove('show');
    setTimeout(() => {
        popup.style.display = 'none';
    }, 300);
}

    // GSAP Animations
    gsap.from(".partner-logo", {
        duration: 1,
        opacity: 0,
        y: -50,
        stagger: 0.3,
        ease: "power3.out"
    });

    gsap.from(".hero-subtitle", {
        duration: 1,
        opacity: 0,
        y: 50,
        delay: 0.3,
        ease: "power3.out"
    });

    gsap.from(".hero-cta", {
        duration: 1,
        opacity: 0,
        y: 50,
        delay: 0.6,
        ease: "power3.out"
    });

    gsap.from(".stat-item", {
        duration: 1,
        opacity: 0,
        y: 50,
        delay: 0.9,
        stagger: 0.2,
        ease: "power3.out"
    });