// ========================================
// SCROLL ANIMATIONS FOR ORIGIN TIMELINE
// ========================================

// Intersection Observer for timeline steps
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('step-visible');
        }
    });
}, {
    threshold: 0.3,
    rootMargin: '0px 0px -100px 0px'
});

// Observe all timeline steps
document.querySelectorAll('.timeline-step').forEach(step => {
    timelineObserver.observe(step);
});

// ========================================
// FORM EVOLUTION HORIZONTAL SCROLL PROGRESS
// ========================================

const horizontalScrollWrapper = document.getElementById('horizontalScrollWrapper');
const progressBar = document.getElementById('progressBar');

if (horizontalScrollWrapper && progressBar) {
    horizontalScrollWrapper.addEventListener('scroll', () => {
        const scrollLeft = horizontalScrollWrapper.scrollLeft;
        const scrollWidth = horizontalScrollWrapper.scrollWidth - horizontalScrollWrapper.clientWidth;
        const scrollPercentage = (scrollLeft / scrollWidth) * 100;
        
        progressBar.style.width = `${scrollPercentage}%`;
        
        // Update active card based on scroll position
        updateActiveCard();
    });
}

// ========================================
// ACTIVE CARD DETECTION
// ========================================

function updateActiveCard() {
    if (!horizontalScrollWrapper) return;
    
    const cards = horizontalScrollWrapper.querySelectorAll('.form-card');
    const containerCenter = horizontalScrollWrapper.offsetLeft + (horizontalScrollWrapper.clientWidth / 2);
    
    let closestCard = null;
    let closestDistance = Infinity;
    
    cards.forEach(card => {
        const cardRect = card.getBoundingClientRect();
        const cardCenter = cardRect.left + (cardRect.width / 2);
        const distance = Math.abs(containerCenter - cardCenter);
        
        if (distance < closestDistance) {
            closestDistance = distance;
            closestCard = card;
        }
    });
    
    // Remove active class from all cards
    cards.forEach(card => card.classList.remove('active'));
    
    // Add active class to closest card
    if (closestCard && closestDistance < 400) {
        closestCard.classList.add('active');
    }
}

// Initial check
if (horizontalScrollWrapper) {
    setTimeout(updateActiveCard, 100);
}

// ========================================
// SCREENSHOT ZOOM ON CLICK
// ========================================

const formCards = document.querySelectorAll('.form-card');

formCards.forEach(card => {
    const screenshot = card.querySelector('.form-screenshot');
    if (screenshot) {
        screenshot.addEventListener('click', (e) => {
            e.stopPropagation();
            const img = screenshot.querySelector('img');
            if (img && img.src) {
                openScreenshotLightbox(img.src, card.querySelector('.stage-badge')?.textContent || 'Screenshot');
            }
        });
    }
});

function openScreenshotLightbox(imgSrc, caption) {
    if (lightbox && lightboxImage && lightboxCaption) {
        lightboxImage.src = imgSrc;
        lightboxImage.alt = caption;
        lightboxCaption.textContent = caption;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

// ========================================
// LIGHTBOX FUNCTIONALITY
// ========================================

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

// Get all frames
const allFrames = document.querySelectorAll('.frame');
let currentFrameIndex = 0;
let currentSectionFrames = [];

// Open lightbox when frame is clicked
allFrames.forEach((frame, index) => {
    frame.addEventListener('click', () => {
        const section = frame.dataset.section;
        const img = frame.querySelector('img');
        
        if (!img || !img.src) return;
        
        // Get all frames from the same section
        currentSectionFrames = Array.from(document.querySelectorAll(`.frame[data-section="${section}"]`));
        currentFrameIndex = currentSectionFrames.indexOf(frame);
        
        // Show the clicked frame
        showLightboxFrame(currentFrameIndex);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// Show specific frame in lightbox
function showLightboxFrame(index) {
    if (index < 0 || index >= currentSectionFrames.length) return;
    
    currentFrameIndex = index;
    const frame = currentSectionFrames[index];
    const img = frame.querySelector('img');
    
    if (img && img.src) {
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt;
        lightboxCaption.textContent = `Frame ${index + 1} of ${currentSectionFrames.length}`;
    }
}

// Close lightbox
function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
}

// Close on background click
if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
}

// Navigation
if (lightboxPrev) {
    lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        const newIndex = currentFrameIndex > 0 ? currentFrameIndex - 1 : currentSectionFrames.length - 1;
        showLightboxFrame(newIndex);
    });
}

if (lightboxNext) {
    lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        const newIndex = currentFrameIndex < currentSectionFrames.length - 1 ? currentFrameIndex + 1 : 0;
        showLightboxFrame(newIndex);
    });
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    
    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowLeft') {
        const newIndex = currentFrameIndex > 0 ? currentFrameIndex - 1 : currentSectionFrames.length - 1;
        showLightboxFrame(newIndex);
    } else if (e.key === 'ArrowRight') {
        const newIndex = currentFrameIndex < currentSectionFrames.length - 1 ? currentFrameIndex + 1 : 0;
        showLightboxFrame(newIndex);
    }
});

// Prevent scrolling when lightbox is open
if (lightbox) {
    lightbox.addEventListener('wheel', (e) => {
        e.preventDefault();
    }, { passive: false });
}
