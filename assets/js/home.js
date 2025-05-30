  // Initialize carousel
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

        prevButton.addEventListener('click', () => {
            moveCarousel(-cardWidth * visibleCards);
        });

        nextButton.addEventListener('click', () => {
            moveCarousel(cardWidth * visibleCards);
        });

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

    // News Popup
    function openPopup(title, image, content) {
        const popup = document.querySelector('.popup');
        const popupContent = popup.querySelector('.popup-content');
        const popupTitle = popupContent.querySelector('h2');
        const popupImage = popupContent.querySelector('img');
        const popupText = popupContent.querySelector('p');

        popupTitle.textContent = title;
        popupImage.src = image;
        popupText.textContent = content;

        popup.style.display = 'flex';
        setTimeout(() => {
            popup.classList.add('show');
        }, 50);

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

    document.querySelector('.close').addEventListener('click', closePopup);

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