// Get all frames
const frames = document.querySelectorAll('.frame');
const floatingFrames = document.getElementById('floatingFrames');
const expandedView = document.getElementById('expandedView');
const expandedImage = document.getElementById('expandedImage');
const thumbnails = document.getElementById('thumbnails');
const introCard = document.getElementById('introCard');
const promptCard = document.getElementById('promptCard');
const closeBtn = document.getElementById('closeBtn');
const frameCounter = document.getElementById('frameCounter');
const prevArrow = document.getElementById('prevArrow');
const nextArrow = document.getElementById('nextArrow');

let currentFrameIndex = 0;
const totalFrames = frames.length;

// Frame data
const frameData = [
    { src: './frames/frame-1.jpg', alt: 'Oliver Cat Frame 1' },
    { src: './frames/frame-2.png', alt: 'Oliver Cat Frame 2' },
    { src: './frames/frame-3.png', alt: 'Oliver Cat Frame 3' },
    { src: './frames/frame-4.png', alt: 'Oliver Cat Frame 4' },
    { src: './frames/frame-5.png', alt: 'Oliver Cat Frame 5' },
    { src: './frames/frame-6.png', alt: 'Oliver Cat Frame 6' },
    { src: './frames/frame-7.png', alt: 'Oliver Cat Frame 7' },
    { src: './frames/frame-8.png', alt: 'Oliver Cat Frame 8' }
];

// Create thumbnails
function createThumbnails() {
    frameData.forEach((frame, index) => {
        const thumb = document.createElement('div');
        thumb.className = 'thumbnail';
        if (index === 0) thumb.classList.add('active');
        
        const img = document.createElement('img');
        img.src = frame.src;
        img.alt = frame.alt;
        
        thumb.appendChild(img);
        thumb.addEventListener('click', () => showFrame(index));
        thumbnails.appendChild(thumb);
    });
}

// Show specific frame
function showFrame(index) {
    currentFrameIndex = index;
    expandedImage.src = frameData[index].src;
    expandedImage.alt = frameData[index].alt;
    
    // Update thumbnails
    const allThumbs = thumbnails.querySelectorAll('.thumbnail');
    allThumbs.forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
    
    // Update counter
    frameCounter.textContent = `Frame ${index + 1} of ${totalFrames}`;
}

// Handle frame clicks
frames.forEach((frame, index) => {
    frame.addEventListener('click', () => {
        floatingFrames.style.display = 'none';
        expandedView.style.display = 'flex';
        introCard.style.display = 'none';
        promptCard.style.display = 'block';
        
        showFrame(index);
    });
});

// Close button
closeBtn.addEventListener('click', () => {
    floatingFrames.style.display = 'grid';
    expandedView.style.display = 'none';
    introCard.style.display = 'block';
    promptCard.style.display = 'none';
});

// Arrow navigation
prevArrow.addEventListener('click', () => {
    const newIndex = currentFrameIndex > 0 ? currentFrameIndex - 1 : totalFrames - 1;
    showFrame(newIndex);
});

nextArrow.addEventListener('click', () => {
    const newIndex = currentFrameIndex < totalFrames - 1 ? currentFrameIndex + 1 : 0;
    showFrame(newIndex);
});

// Toggle sections
const toggleBtns = document.querySelectorAll('.toggle-btn');
toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const content = document.getElementById(targetId);
        
        btn.classList.toggle('active');
        content.classList.toggle('active');
    });
});

// Initialize
createThumbnails();