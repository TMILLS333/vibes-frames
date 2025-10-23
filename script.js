// Frame data
const frames = [
    {
        id: 1,
        image: "frames/20240728_101500_framed_recuerdo_eterno__1_.jpg",
        version: "V1",
        model: "googleai/gemini-1.5-pro-latest",
        prompt: "Create a digital ofrenda frame with elaborate sugar skulls, marigold flowers, and vibrant Day of the Dead aesthetic. Style should be embroidered tapestry with dense decorative elements from edge to edge.",
        whatWorked: [
            "Rich, elaborate decorative elements",
            "Strong cultural aesthetic with sugar skulls and marigolds",
            "Edge-to-edge coverage creates frame-like appearance"
        ],
        whatDidnt: [
            "No clear instruction for text placement or spelling",
            "Prompt was too open-ended, leading to inconsistent results",
            "Didn't specify transparent center area for photo"
        ],
        whyChanged: {
            originalVision: "Virtual gallery - a living digital ofrenda where all submissions stayed on the website as a community memorial.",
            reality: "Off-hours project with time constraints. Learning Firebase Studio while building. Gallery setup wasn't practical within timeline.",
            pivot: "Shifted to keepsake approach - downloadable frames for personal use. More inclusive, simpler to build, faster to ship.",
            learned: "Sometimes constraints force better solutions. The keepsake model ended up being more meaningful because people could keep and share their frames however they wanted."
        }
    },
    {
        id: 2,
        image: "frames/fsdfsdf-sdfsdf-ofrenda.png",
        version: "V1",
        model: "googleai/gemini-1.5-pro-latest",
        prompt: "Simple digital ofrenda frame with marigold colors, clean borders.",
        whatWorked: [
            "Clean, simple aesthetic",
            "Marigold color palette is culturally appropriate"
        ],
        whatDidnt: [
            "Too minimal - doesn't feel celebratory or special",
            "Text rendering issues visible in filename",
            "Lacks the richness of traditional Day of the Dead art"
        ],
        whyChanged: {
            originalVision: "Virtual gallery approach with community submissions.",
            reality: "Needed to balance cultural authenticity with technical feasibility.",
            pivot: "Moved toward more elaborate designs that felt more special and keepsake-worthy.",
            learned: "Simple isn't always better - this celebration deserves richness."
        }
    },
    {
        id: 3,
        image: "frames/Mr_Oliver_Cat_digital_ofrenda.png",
        version: "V1",
        model: "googleai/gemini-1.5-pro-latest",
        prompt: "Digital ofrenda with 'In loving memory of' text and colorful floral border.",
        whatWorked: [
            "Text integration attempted",
            "Bright, celebratory color palette",
            "Clear photo placement"
        ],
        whatDidnt: [
            "Text placement not optimal",
            "Border elements could be more elaborate",
            "Some cultural elements feel generic"
        ],
        whyChanged: {
            originalVision: "Community gallery with shared memories.",
            reality: "Text accuracy became a major challenge with AI generation.",
            pivot: "Began developing 'spelling anchors' technique to improve text reliability.",
            learned: "AI struggles with text - needed explicit instruction format."
        }
    },
    {
        id: 4,
        image: "frames/O_Cat_digital_ofrenda.png",
        version: "V1",
        model: "googleai/gemini-1.5-pro-latest",
        prompt: "Papel picado style frame with colorful cut-paper aesthetic.",
        whatWorked: [
            "Papel picado pattern is culturally authentic",
            "Bright, festive colors",
            "Good contrast with photo"
        ],
        whatDidnt: [
            "Text accuracy issues",
            "Border could be more substantial",
            "Pattern repetition not quite right"
        ],
        whyChanged: {
            originalVision: "Public gallery approach.",
            reality: "Realized each frame style needed its own specific prompt strategy.",
            pivot: "Started developing theme-based approach (marigolds, skulls, butterflies).",
            learned: "Different visual styles require different prompting techniques."
        }
    },
    {
        id: 5,
        image: "frames/ofrenda-sfsd-sdfsdf.png",
        version: "V1",
        model: "googleai/gemini-1.5-pro-latest",
        prompt: "Colorful sugar skull frame with floral elements.",
        whatWorked: [
            "Sugar skulls are well-rendered",
            "Color palette is vibrant and celebratory",
            "Frame structure is clear"
        ],
        whatDidnt: [
            "Filename shows text rendering issues",
            "Composition could be more balanced",
            "Some elements feel too busy"
        ],
        whyChanged: {
            originalVision: "Community memorial space.",
            reality: "Text spelling remained inconsistent despite multiple attempts.",
            pivot: "Began researching AI text generation limitations and solutions.",
            learned: "Need to treat text as a separate, critical component requiring special handling."
        }
    },
    {
        id: 6,
        image: "frames/Olie_Cater_digital_ofrenda__1_.png",
        version: "V1",
        model: "googleai/gemini-1.5-pro-latest",
        prompt: "Embroidered floral border with traditional textile aesthetic.",
        whatWorked: [
            "Embroidered style looks premium",
            "Floral border is elegant",
            "Good color harmony"
        ],
        whatDidnt: [
            "Name spelling errors ('Olie Cater' instead of correct name)",
            "Border thickness not consistent",
            "Could use more density in design"
        ],
        whyChanged: {
            originalVision: "Persistent web gallery.",
            reality: "Name spelling accuracy became critical - these are memorials.",
            pivot: "Developed 'spelling anchor' technique: 'O l i v e r  C a t' with spaces.",
            learned: "For important text like names, letter-by-letter instruction is essential."
        }
    },
    {
        id: 7,
        image: "frames/Oliver__Cat_digital_ofrenda.png",
        version: "V1",
        model: "googleai/gemini-1.5-pro-latest",
        prompt: "Simple memorial frame with marigolds on white background.",
        whatWorked: [
            "Clean, respectful aesthetic",
            "Marigolds are culturally appropriate",
            "Easy to read"
        ],
        whatDidnt: [
            "White background feels less special",
            "Too minimal for a celebration",
            "Doesn't stand out as a keepsake"
        ],
        whyChanged: {
            originalVision: "Web-based gallery system.",
            reality: "Minimal designs didn't feel special enough for a memorial keepsake.",
            pivot: "Committed to richer, more elaborate designs that feel premium.",
            learned: "Users want something that feels special and worthy of preserving."
        }
    },
    {
        id: 8,
        image: "frames/Oliver_Cat_Catery_digital_ofrenda.png",
        version: "V1",
        model: "googleai/gemini-1.5-pro-latest",
        prompt: "Black background frame with marigolds and butterflies.",
        whatWorked: [
            "Black background makes colors pop",
            "Marigolds and butterflies combination is meaningful",
            "Good visual hierarchy"
        ],
        whatDidnt: [
            "Name spelling still inconsistent ('Catery')",
            "Border could be more elaborate",
            "Needs more edge-to-edge coverage"
        ],
        whyChanged: {
            originalVision: "Public community ofrenda.",
            reality: "After multiple iterations, identified key improvements needed for V2.",
            pivot: "Documented learnings to inform next version: spelling anchors, edge-to-edge design, theme-based prompts.",
            learned: "This iteration phase was crucial for understanding AI's limitations and how to work around them."
        }
    }
];

let currentFrameIndex = 0;

// Initialize gallery
function initGallery() {
    const container = document.getElementById('framesContainer');
    
    // Random positioning for floating frames
    const positions = [
        { top: '10%', left: '15%', width: '200px' },
        { top: '20%', left: '60%', width: '180px' },
        { top: '45%', left: '25%', width: '220px' },
        { top: '60%', left: '65%', width: '190px' },
        { top: '15%', left: '80%', width: '170px' },
        { top: '70%', left: '10%', width: '200px' },
        { top: '35%', left: '75%', width: '210px' },
        { top: '55%', left: '40%', width: '185px' }
    ];
    
    frames.forEach((frame, index) => {
        const frameEl = document.createElement('div');
        frameEl.className = 'frame';
        frameEl.style.top = positions[index].top;
        frameEl.style.left = positions[index].left;
        frameEl.style.width = positions[index].width;
        
        const img = document.createElement('img');
        img.src = frame.image;
        img.alt = `Frame ${frame.id}`;
        
        frameEl.appendChild(img);
        frameEl.addEventListener('click', () => openFrame(index));
        
        container.appendChild(frameEl);
    });
}

// Open expanded frame view
function openFrame(index) {
    currentFrameIndex = index;
    const frame = frames[index];
    
    // Hide gallery, show expanded view
    document.getElementById('framesContainer').style.display = 'none';
    document.getElementById('expandedView').style.display = 'flex';
    
    // Hide intro, show prompt card
    document.getElementById('sectionIntro').style.display = 'none';
    document.getElementById('promptCard').style.display = 'block';
    
    // Set expanded frame image
    document.getElementById('expandedFrame').src = frame.image;
    
    // Update prompt card
    updatePromptCard(frame, index);
    
    // Create thumbnails
    createThumbnails();
}

// Update prompt card content
function updatePromptCard(frame, index) {
    document.getElementById('frameCounter').textContent = `Frame ${index + 1} of ${frames.length}`;
    document.getElementById('cardVersion').textContent = frame.version;
    document.getElementById('cardModel').textContent = frame.model;
    document.getElementById('promptText').textContent = frame.prompt;
    
    // What Worked
    const workedList = document.getElementById('workedList');
    workedList.innerHTML = '';
    frame.whatWorked.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        workedList.appendChild(li);
    });
    
    // What Didn't
    const didntList = document.getElementById('didntList');
    didntList.innerHTML = '';
    frame.whatDidnt.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        didntList.appendChild(li);
    });
    
    // Why Changed
    const changeStory = document.getElementById('changeStory');
    changeStory.innerHTML = `
        <h3>ORIGINAL VISION:</h3>
        <p>${frame.whyChanged.originalVision}</p>
        <h3 style="margin-top: 1rem;">THE REALITY:</h3>
        <p>${frame.whyChanged.reality}</p>
        <h3 style="margin-top: 1rem;">THE PIVOT:</h3>
        <p>${frame.whyChanged.pivot}</p>
        <h3 style="margin-top: 1rem;">WHAT I LEARNED:</h3>
        <p>${frame.whyChanged.learned}</p>
    `;
}

// Create thumbnail gallery
function createThumbnails() {
    const container = document.getElementById('thumbnailsContainer');
    container.innerHTML = '';
    
    frames.forEach((frame, index) => {
        const thumb = document.createElement('div');
        thumb.className = 'thumbnail';
        if (index === currentFrameIndex) {
            thumb.classList.add('active');
        }
        
        const img = document.createElement('img');
        img.src = frame.image;
        img.alt = `Thumbnail ${index + 1}`;
        
        thumb.appendChild(img);
        thumb.addEventListener('click', () => switchFrame(index));
        
        container.appendChild(thumb);
    });
}

// Switch to different frame
function switchFrame(index) {
    currentFrameIndex = index;
    const frame = frames[index];
    
    document.getElementById('expandedFrame').src = frame.image;
    updatePromptCard(frame, index);
    
    // Update active thumbnail
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        thumb.classList.toggle('active', i === index);
    });
    
    // Reset toggles
    document.querySelectorAll('.toggle-content').forEach(content => {
        content.classList.remove('active');
    });
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.classList.remove('active');
    });
}

// Close expanded view
function closeExpanded() {
    document.getElementById('framesContainer').style.display = 'block';
    document.getElementById('expandedView').style.display = 'none';
    document.getElementById('sectionIntro').style.display = 'block';
    document.getElementById('promptCard').style.display = 'none';
}

// Toggle sections
function initToggles() {
    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.target;
            const content = document.getElementById(targetId);
            
            btn.classList.toggle('active');
            content.classList.toggle('active');
        });
    });
}

// Navigation arrows
function initNavigation() {
    document.getElementById('prevArrow').addEventListener('click', () => {
        const newIndex = currentFrameIndex > 0 ? currentFrameIndex - 1 : frames.length - 1;
        switchFrame(newIndex);
    });
    
    document.getElementById('nextArrow').addEventListener('click', () => {
        const newIndex = currentFrameIndex < frames.length - 1 ? currentFrameIndex + 1 : 0;
        switchFrame(newIndex);
    });
}

// Close button
document.getElementById('closeBtn').addEventListener('click', closeExpanded);

// Initialize
initGallery();
initToggles();
initNavigation();