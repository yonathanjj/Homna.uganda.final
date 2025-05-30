// ===== DYNAMIC COMPONENT LOADER =====
document.addEventListener("DOMContentLoaded", function() {
    // Load components
    loadComponent('navbar', initNavbar);
    loadComponent('footer', initFooter);

    // Initialize components after loading
    Promise.all([
        loadComponent('navbar', initNavbar),
        loadComponent('footer', initFooter)
    ]).then(() => {
        console.log("All components loaded successfully");
    }).catch(error => {
        console.error("Error loading components:", error);
    });
});

// ===== COMPONENT LOADER FUNCTION =====
function loadComponent(componentName, initCallback) {
    return new Promise((resolve, reject) => {
        const container = document.querySelector(componentName === 'navbar' ? 'header' : 'footer');
        if (!container) {
            reject(`Container for ${componentName} not found`);
            return;
        }

        fetch(`${componentName}.html`)
            .then(response => {
                if (!response.ok) throw new Error(`Failed to load ${componentName}`);
                return response.text();
            })
            .then(html => {
                container.innerHTML = html;
                if (initCallback) initCallback();
                resolve();
            })
            .catch(error => {
                console.error(`Error loading ${componentName}:`, error);
                reject(error);
            });
    });
}

// ===== NAVBAR INITIALIZATION =====
function initNavbar() {
    // Select elements
    const hamburger = document.querySelector('.hamburger-menu');
    const navOverlay = document.querySelector('.nav-overlay');
    const returnPathButton = document.querySelector('.return-path-button');
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');
    const searchResults = document.querySelector('.search-results');

    // GSAP Timeline
    const tl = gsap.timeline({ paused: true });
    tl.to(navOverlay, { left: 0, duration: 0.5, ease: "power2.out" })
      .from('.menu-container', { opacity: 0, scale: 0.95, duration: 0.3, ease: "power2.out" })
      .from('.nav-links li', { opacity: 0, y: 20, duration: 0.5, stagger: 0.1, ease: "power2.out" }, "-=0.3");

    // Event listeners
    hamburger?.addEventListener('click', toggleMenu);
    returnPathButton?.addEventListener('click', (e) => {
        e.preventDefault();
        history.back();
    });

    // Search functionality
    const searchContent = [
        { title: "Home", url: "index.html" },
        // Your search content array
    ];

    searchInput?.addEventListener('input', handleSearch);
    searchButton?.addEventListener('click', handleSearch);

    function toggleMenu(e) {
        e.stopPropagation();
        if (!navOverlay.classList.contains('active')) {
            tl.play();
            navOverlay.classList.add('active');
            hamburger.classList.add('active');
        } else {
            tl.reverse().then(() => {
                navOverlay.classList.remove('active');
                hamburger.classList.remove('active');
            });
        }
    }

    function handleSearch() {
        const query = searchInput.value.trim();
        if (!query) {
            searchResults.classList.remove('active');
            return;
        }

        const results = searchContent.filter(item =>
            item.title.toLowerCase().includes(query.toLowerCase())
        );

        displayResults(results);
    }

    function displayResults(results) {
        searchResults.innerHTML = results.length
            ? results.map(result => `<a href="${result.url}">${result.title}</a>`).join('')
            : '<div class="no-results">No results found</div>';

        searchResults.classList.add('active');
    }

    // Close menus when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-overlay') && navOverlay?.classList.contains('active')) {
            tl.reverse().then(() => {
                navOverlay.classList.remove('active');
                hamburger.classList.remove('active');
            });
        }

        if (!e.target.closest('.search-container') && searchResults?.classList.contains('active')) {
            searchResults.classList.remove('active');
        }
    });
}

// ===== FOOTER INITIALIZATION =====
function initFooter() {
    const footerPopupContent = {
        "Commitment": "We are committed to excellence...",
        // Your popup content
    };

    document.querySelector(".footer-bottom-links")?.addEventListener("click", function(e) {
        if (e.target.tagName === "A") {
            e.preventDefault();
            const linkText = e.target.textContent.trim();
            if (footerPopupContent[linkText]) {
                showFooterPopup(linkText, footerPopupContent[linkText]);
            }
        }
    });

    function showFooterPopup(title, content) {
        // Create popup if it doesn't exist
        let popup = document.getElementById('footer-popup');
        if (!popup) {
            popup = document.createElement('div');
            popup.id = 'footer-popup';
            popup.innerHTML = `
                <div class="footer-popup-content">
                    <h3>${title}</h3>
                    <p>${content}</p>
                    <button class="footer-close-btn">×</button>
                </div>
            `;
            document.body.appendChild(popup);

            // Add close button event
            popup.querySelector('.footer-close-btn').addEventListener('click', () => {
                popup.style.display = 'none';
            });
        }

        popup.style.display = 'flex';
    }

    // Close popup when clicking outside
    window.addEventListener('click', (e) => {
        const popup = document.getElementById('footer-popup');
        if (popup && e.target === popup) {
            popup.style.display = 'none';
        }
    });
}