document.addEventListener('DOMContentLoaded', function () {
  // Trigger animations when the section is in view
  const solutionsSection = document.querySelector('.solutions-section');
  const solutionCards = document.querySelectorAll('.solution-card');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          solutionCards.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate');
            }, index * 150);
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  observer.observe(solutionsSection);
});

// Map home page solutions to their respective partners
const solutionPartnerMap = {
  'construction-chemicals': 'sika',
  'drainage-systems': 'aco',
  'thermal-insulation': 'kingspan'
};

function openSolutionPopup(solutionId) {
    // Store the partner ID in localStorage to open the correct popup on solutions page
    const partnerId = solutionPartnerMap[solutionId];
    if (partnerId) {
        localStorage.setItem('selectedPartner', partnerId);
        // Navigate to solutions page
        window.location.href = 'solutions.html';
    }
}

   document.addEventListener("DOMContentLoaded", function() {
    // --- SETUP ---
    const projects = document.querySelectorAll(".project-card");
    const popup = document.getElementById("projects-popup");
    const popupTitle = document.querySelector(".popup-title");
    const popupGallery = document.querySelector(".popup-gallery");
    const closeBtn = document.querySelector(".close-btn");
    const body = document.body;
    const popupOverlay = document.querySelector(".popup-overlay");

    let currentGallery = [];
    let currentIndex = 0;
    let keydownHandler;

    // --- MAIN POPUP FUNCTIONS ---
    function openProjectsPopup(title, galleryImages) {
        popupTitle.textContent = title;
        popupGallery.innerHTML = "";
        currentGallery = galleryImages;

        // Populate the gallery with new images
        galleryImages.forEach((image, index) => {
            const imgDiv = document.createElement("div");
            imgDiv.classList.add("popup-image");
            imgDiv.style.backgroundImage = `url('${image}')`;
            imgDiv.addEventListener("click", () => openLightbox(index));
            popupGallery.appendChild(imgDiv);
        });

        popup.style.display = "flex";
        body.classList.add('popup-open');

        // Scroll to top of popup content
        document.querySelector('.popup-content').scrollTop = 0;
    }

    function closeProjectsPopup() {
        popup.style.display = "none";
        body.classList.remove('popup-open');
    }

    // --- LIGHTBOX FUNCTIONS ---
    function openLightbox(index) {
        currentIndex = index;
        const lightbox = document.createElement("div");
        lightbox.classList.add("lightbox");

        const lightboxContent = document.createElement("div");
        lightboxContent.classList.add("lightbox-content");

        const lightboxImage = document.createElement("img");
        lightboxImage.src = currentGallery[currentIndex];
        lightboxImage.classList.add("lightbox-image");
        lightboxImage.alt = "Project Image";

        const closeLightboxBtn = document.createElement("button");
        closeLightboxBtn.classList.add("close-lightbox-btn");
        closeLightboxBtn.innerHTML = "×";
        closeLightboxBtn.addEventListener("click", () => closeLightbox(lightbox));

        const navContainer = document.createElement("div");
        navContainer.classList.add("lightbox-nav");

        const prevBtn = document.createElement("button");
        prevBtn.classList.add("lightbox-nav-btn", "prev");
        prevBtn.innerHTML = "←";
        prevBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            navigate(-1);
        });

        const nextBtn = document.createElement("button");
        nextBtn.classList.add("lightbox-nav-btn", "next");
        nextBtn.innerHTML = "→";
        nextBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            navigate(1);
        });

        navContainer.appendChild(prevBtn);
        navContainer.appendChild(nextBtn);
        lightboxContent.appendChild(lightboxImage);
        lightboxContent.appendChild(closeLightboxBtn);
        lightboxContent.appendChild(navContainer);
        lightbox.appendChild(lightboxContent);
        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                closeLightbox(lightbox);
            }
        });

        keydownHandler = function(e) {
            if (e.key === "Escape") {
                closeLightbox(lightbox);
            } else if (e.key === "ArrowLeft") {
                navigate(-1);
            } else if (e.key === "ArrowRight") {
                navigate(1);
            }
        };
        document.addEventListener("keydown", keydownHandler);

        function navigate(direction) {
            currentIndex = (currentIndex + direction + currentGallery.length) % currentGallery.length;
            lightboxImage.src = currentGallery[currentIndex];
        }
    }

    function closeLightbox(lightbox) {
        document.removeEventListener("keydown", keydownHandler);
        lightbox.remove();
    }

    // --- EVENT LISTENERS ---
    projects.forEach((project) => {
        project.addEventListener("click", function() {
            const projectTitle = project.querySelector(".project-title").textContent;
            const galleryImages = JSON.parse(project.getAttribute("data-gallery"));
            openProjectsPopup(projectTitle, galleryImages);
        });
    });

    closeBtn.addEventListener("click", closeProjectsPopup);
    popupOverlay.addEventListener("click", closeProjectsPopup);

    // Close popup with Escape key
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape" && popup.style.display === "flex") {
            closeProjectsPopup();
        }
    });
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