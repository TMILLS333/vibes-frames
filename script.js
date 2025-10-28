// Lightbox functionality
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

lightboxClose.addEventListener('click', closeLightbox);

// Close on background click
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        closeLightbox();
    }
});

// Navigation
lightboxPrev.addEventListener('click', (e) => {
    e.stopPropagation();
    const newIndex = currentFrameIndex > 0 ? currentFrameIndex - 1 : currentSectionFrames.length - 1;
    showLightboxFrame(newIndex);
});

lightboxNext.addEventListener('click', (e) => {
    e.stopPropagation();
    const newIndex = currentFrameIndex < currentSectionFrames.length - 1 ? currentFrameIndex + 1 : 0;
    showLightboxFrame(newIndex);
});

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
lightbox.addEventListener('wheel', (e) => {
    e.preventDefault();
}, { passive: false });
