// Princess Casino Vegas Navigation App
// JavaScript for navigation and interactions

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the app
    initApp();
});

function initApp() {
    // Show splash screen for 3 seconds
    setTimeout(() => {
        document.getElementById('splash-screen').classList.remove('active');
        document.getElementById('app-container').classList.remove('hidden');
        document.getElementById('home-screen').classList.add('active');
    }, 3000);

    // Initialize carousel
    initCarousel();

    // Initialize navigation
    initNavigation();

    // Initialize action buttons
    initActionButtons();

    // Initialize service cards
    initServiceCards();

    // Initialize info buttons
    initInfoButtons();

    // Initialize back buttons
    initBackButtons();

    // Initialize carousel dots
    initCarouselDots();

    // Initialize menu and settings (placeholder functionality)
    initHeaderButtons();
}

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const dots = document.querySelectorAll('.carousel-dots .dot');
let carouselInterval;

function initCarousel() {
    // Auto-rotate carousel every 5 seconds
    carouselInterval = setInterval(() => {
        nextSlide();
    }, 5000);

    // Pause on touch/interaction
    const carousel = document.querySelector('.carousel');
    if (carousel) {
        carousel.addEventListener('touchstart', () => {
            clearInterval(carouselInterval);
        });

        carousel.addEventListener('touchend', () => {
            carouselInterval = setInterval(() => {
                nextSlide();
            }, 5000);
        });
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
}

function goToSlide(index) {
    currentSlide = index;
    updateCarousel();
}

function updateCarousel() {
    slides.forEach((slide, index) => {
        slide.classList.toggle('active', index === currentSlide);
    });

    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
}

function initCarouselDots() {
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(carouselInterval);
            goToSlide(index);
            carouselInterval = setInterval(() => {
                nextSlide();
            }, 5000);
        });
    });
}

// Navigation functionality
function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');

    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const page = this.getAttribute('data-nav');
            navigateToPage(page);

            // Update active state
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function navigateToPage(page) {
    // Hide all screens
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => screen.classList.remove('active'));

    // Show the requested screen
    let targetScreen;
    switch(page) {
        case 'home':
            targetScreen = document.getElementById('home-screen');
            break;
        case 'games':
            targetScreen = document.getElementById('games-screen');
            break;
        case 'about':
            targetScreen = document.getElementById('about-screen');
            break;
        case 'service':
            targetScreen = document.getElementById('service-screen');
            break;
        case 'location':
            targetScreen = document.getElementById('location-screen');
            break;
        case 'contact':
            targetScreen = document.getElementById('contact-screen');
            break;
        case 'promotions':
            targetScreen = document.getElementById('promotions-screen');
            break;
        case 'leisure':
            targetScreen = document.getElementById('leisure-screen');
            break;
        case 'restaurant':
            targetScreen = document.getElementById('restaurant-screen');
            break;
        default:
            targetScreen = document.getElementById('home-screen');
    }

    if (targetScreen) {
        targetScreen.classList.add('active');
        window.scrollTo(0, 0);
    }
}

// Action buttons functionality
function initActionButtons() {
    const actionButtons = document.querySelectorAll('.action-btn');

    actionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            navigateToPage(page);

            // Update bottom nav active state
            updateBottomNav(page);

            // Add click feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });
}

// Service cards functionality
function initServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach(card => {
        card.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            if (page) {
                navigateToPage(page);
                updateBottomNav('service');

                // Add click feedback
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 100);
            }
        });
    });
}

// Info buttons functionality
function initInfoButtons() {
    const infoButtons = document.querySelectorAll('.info-btn');

    infoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            if (page) {
                navigateToPage(page);

                // Add click feedback
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 100);
            }
        });
    });
}

// Back buttons functionality
function initBackButtons() {
    const backButtons = document.querySelectorAll('.back-btn');

    backButtons.forEach(button => {
        button.addEventListener('click', function() {
            const backTo = this.getAttribute('data-back');
            navigateToPage(backTo || 'home');
            updateBottomNav('home');
        });
    });
}

// Update bottom navigation active state
function updateBottomNav(page) {
    const navButtons = document.querySelectorAll('.nav-btn');
    navButtons.forEach(btn => btn.classList.remove('active'));

    let navPage = page;

    // Map pages to nav buttons
    const pageMapping = {
        'games': 'service',
        'leisure': 'service',
        'restaurant': 'service',
        'promotions': 'service',
        'hotel': 'service',
        'cabaret': 'service',
        'hotel-info': 'service'
    };

    if (pageMapping[page]) {
        navPage = pageMapping[page];
    }

    const targetNav = document.querySelector(`.nav-btn[data-nav="${navPage}"]`);
    if (targetNav) {
        targetNav.classList.add('active');
    }
}

// Header buttons functionality
function initHeaderButtons() {
    const menuBtn = document.getElementById('menuBtn');
    const settingsBtn = document.getElementById('settingsBtn');

    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            // Placeholder for menu functionality
            alert('Menu functionality - Ready for linking');

            // Add animation
            const spans = this.querySelectorAll('span');
            spans.forEach(span => {
                span.style.backgroundColor = '#93c5fd';
            });
            setTimeout(() => {
                spans.forEach(span => {
                    span.style.backgroundColor = 'white';
                });
            }, 200);
        });
    }

    if (settingsBtn) {
        settingsBtn.addEventListener('click', function() {
            // Placeholder for settings functionality
            alert('Settings functionality - Ready for linking');

            // Add animation
            const svg = this.querySelector('svg');
            svg.style.transform = 'rotate(90deg)';
            setTimeout(() => {
                svg.style.transform = 'rotate(0deg)';
            }, 300);
        });
    }
}

// Game cards functionality
const gameCards = document.querySelectorAll('.game-card');
gameCards.forEach(card => {
    card.addEventListener('click', function() {
        // Placeholder for game details
        const gameTitle = this.querySelector('h2').textContent;
        alert(`${gameTitle} - Game details coming soon! Ready for linking`);
    });
});

// Detail action buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('detail-action-btn')) {
        alert('Navigation to directions - Ready for linking');
    }

    if (e.target.classList.contains('promo-btn')) {
        alert('Promotion details - Ready for linking');
    }

    if (e.target.classList.contains('location-btn')) {
        alert('Opening maps application - Ready for linking');
    }

    if (e.target.classList.contains('submit-btn')) {
        e.preventDefault();
        alert('Contact form submission - Ready for linking');
    }
});

// Members banner click
const membersBanner = document.querySelector('.members-banner');
if (membersBanner) {
    membersBanner.addEventListener('click', function() {
        alert('Member\'s Club registration - Ready for linking');
        this.style.transform = 'scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
    });
    membersBanner.style.cursor = 'pointer';
}

// Prevent default touch behaviors for better mobile experience
document.addEventListener('touchmove', function(e) {
    if (e.target.classList.contains('carousel-item')) {
        // Allow carousel scrolling
        return;
    }
}, { passive: true });

// Add visual feedback for all interactive elements
const interactiveElements = document.querySelectorAll('button, .service-card, .game-card, .restaurant-card');
interactiveElements.forEach(element => {
    element.addEventListener('touchstart', function() {
        this.style.opacity = '0.8';
    });

    element.addEventListener('touchend', function() {
        this.style.opacity = '1';
    });
});

// Restaurant cards functionality
const restaurantCards = document.querySelectorAll('.restaurant-card');
restaurantCards.forEach(card => {
    card.addEventListener('click', function() {
        const restaurantName = this.querySelector('h3').textContent;
        alert(`${restaurantName} - Details and reservations coming soon! Ready for linking`);
    });
    card.style.cursor = 'pointer';
});

// Info items in about screen
const infoItems = document.querySelectorAll('.info-item');
infoItems.forEach(item => {
    item.addEventListener('click', function() {
        const infoTitle = this.querySelector('h4').textContent;
        alert(`${infoTitle} information - Ready for linking`);
    });
    item.style.cursor = 'pointer';
});

// Promo cards functionality
const promoCards = document.querySelectorAll('.promo-card');
promoCards.forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', function(e) {
        // Don't trigger if clicking the button
        if (!e.target.classList.contains('promo-btn')) {
            const promoTitle = this.querySelector('h3').textContent;
            alert(`${promoTitle} - Ready for linking`);
        }
    });
});

// Console log for developers
console.log('%c Princess Casino Vegas Navigation App ', 'background: #1e40af; color: white; font-size: 16px; padding: 10px; border-radius: 5px;');
console.log('App initialized successfully!');
console.log('All buttons are functional and ready for linking to actual features.');
console.log('This is a navigation app for Google Play Store - no gambling functionality.');

// Service worker registration for PWA (optional for future)
if ('serviceWorker' in navigator) {
    // Service worker can be added later for offline functionality
    console.log('Service Worker support detected - Ready for PWA features');
}

// Orientation change handler
window.addEventListener('orientationchange', function() {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
});

// Resize handler
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Refresh carousel on resize
        updateCarousel();
    }, 250);
});

// Prevent zoom on double tap (iOS specific)
let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Status bar color for mobile browsers
const metaThemeColor = document.createElement('meta');
metaThemeColor.name = 'theme-color';
metaThemeColor.content = '#1e3a8a';
document.head.appendChild(metaThemeColor);

console.log('Navigation ready! Enjoy exploring Princess Casino Vegas.');
