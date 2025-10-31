# App Blueprint
# Recuerdo Eterno

A Day of the Dead digital memorial experience that transforms uploaded images into AI-generated decorative frames, creating personalized keepsakes and a shared digital ofrenda.

---

## FEATURES

### 🖼️ Image Upload
**Enable users to upload images of loved ones from any device.**

- **Current Status:** ✅ Implemented
- Drag-and-drop interface
- Multi-device support
- File validation and preview
- Optimized upload experience

---

### 👤 Name Capture
**Collect first and last name to accompany each image. Display the submitted names within the decorative frame around the photo.**

- **Current Status:** ⚠️ Partially Implemented (Removed in V2)
- **V1:** Names were integrated into frame design
- **V2:** Simplified to focus on visual experience
- **Future Enhancement:** Optional name display as user preference

---

### ✨ Dynamic Frame Generation + AI
**Generative AI tool will create a family-friendly Day of the Dead-inspired decorative frame (sugar skulls, flowers, purples, greens, blues) that automatically fits the uploaded image dimensions.**

- **Current Status:** ✅ Implemented & Enhanced
- **AI Model:** 
  - V1: `googleai/gemini-1.5-pro-latest`
  - V2: `googleai/gemini-2.5-flash-image-preview`
- **Key Features:**
  - Theme selection (Marigolds, Sugar Skulls, Monarchs)
  - Culturally-appropriate guardrails
  - Aspect ratio control (1:1)
  - Embroidered/painted aesthetic for text integration
- **Prompt Evolution:** See V1 → V2 section below

---

### 📥 Image Download Button
**Offer users a download link for their framed picture for personal use. The button will appear directly after the upload, enabling them to immediately obtain the customized image.**

- **Current Status:** ✅ Implemented
- One-click download
- High-quality output preservation
- Mobile-optimized experience
- Immediate availability post-generation

---

### 🏛️ Digital Ofrenda Display
**Display all uploaded and approved images in a dynamic, visually engaging gallery (masonry layout) on the digital ofrenda.**

- **Current Status:** ❌ Removed (Event Timing)
- **Original Vision:** Community gallery where all frames live together
- **Removal Reason:** Logistics and timing constraints for festival deployment
- **Future Consideration:** Could be re-implemented as:
  - Optional public gallery
  - Seasonal display (Día de los Muertos weeks)
  - Curated community showcase

---

## STYLE GUIDELINES

### 🎨 Color
Primary Palette:
- 🟣 Purple (primary)
- ⚪ White (secondary)
- 🔴 Pink/Magenta (accent)

Cultural Colors:
- Deep purples and violets
- Vibrant marigold yellows/oranges
- Rich greens
- Sky blues

---

### 📱 Layout
**Clean, responsive layout for optimal viewing on any device.**

- Mobile-first design
- Responsive breakpoints
- Touch-optimized interactions
- Accessibility compliant
- Progressive web app capabilities

---

### 🔤 Typography
**Elegant and readable fonts to display names clearly.**

- Heading: Display fonts with cultural flair
- Body: Clean, readable sans-serif
- Frame Text: Stylistically integrated (embroidered/painted aesthetic)
- Hierarchical type scale

---

### 🎭 Iconography
**Custom icons with traditional Día de los Muertos elements.**

- Sugar skulls (calaveras)
- Marigold flowers (cempasúchil)
- Monarch butterflies
- Papel picado patterns
- Candles and offerings
- **Current Implementation:** Minimal custom iconography, opportunity for expansion

---

## STACK

### 🤖 AI
**Gemini, Genkit**

#### Model Evolution:
- **V1:** `googleai/gemini-1.5-pro-latest` (July 2024)
- **V2:** `googleai/gemini-2.5-flash-image-preview` (October 2024)

#### Genkit Integration:
- Firebase Genkit for AI orchestration
- Prompt management and versioning
- Error handling and retries
- Rate limiting and cost optimization

**Gemini Details:**
> A powerful AI model capable of understanding and generating various forms of input, including text, code, audio, images, and video.

**Genkit Details:**
> An open-source framework from Google that provides a unified API to access AI models and streamlines AI logic, tool use, image generation, and more.

---

### 🖥️ UI
**TypeScript, NextJS, Tailwind CSS**

#### TypeScript:
> A popular programming language that adds type safety to JavaScript.
- Ensures code reliability
- Better developer experience
- Compile-time error catching

#### NextJS:
> A popular web framework built on React with support for client- and server-side rendering.
- Server-side rendering for performance
- API routes for backend logic
- Image optimization
- Built-in routing

#### Tailwind CSS:
> A popular CSS framework that lets you style components inline with your HTML and maintain UI consistency across your app.
- Utility-first CSS
- Responsive design utilities
- Custom design system
- Dark mode support

**Current Implementation:**
- ✅ TypeScript for type safety
- ✅ NextJS for framework
- ✅ Tailwind CSS for styling
- ✅ Component-based architecture

---

## PROMPT EVOLUTION

### V1: The Oliver Cat Era (July 2024)
**Model:** `googleai/gemini-1.5-pro-latest`

#### Original Prompt:
```
Generate a Day of the Dead-inspired decorative frame around the provided image. 
The frame should include sugar skulls, flowers, and use purples, greens, and blues. 
Ensure the frame is family-friendly. 
Display the name ${firstName} ${lastName} within the decorative frame around the photo.
```

#### Input Schema:
- `firstName` - The first name to display on the frame
- `lastName` - The last name to display on the frame
- `imageUri` - Base64 data URI

#### Characteristics:
- ✅ Basic frame generation worked
- ❌ Text integration inconsistent
- ❌ Name placement unpredictable
- ⚠️ Style variations too broad

---

### V2: Text Integration Era (October 2024)
**Model:** `googleai/gemini-2.5-flash-image-preview`

#### Refined Prompt:
```
Within the generated decorative border, place the text '2025 Dia de Los Muertos' 
directly below the user's original photo. This text is a critical part of the design. 
It must be rendered in an elegant font that is stylistically integrated with the 
border itself, as if it were embroidered, painted, or carved along with the other 
decorative elements. The text must not look like plain text overlaid on the image.
```

#### Key Improvements:
- ✅ Standardized text: "2025 Dia de Los Muertos"
- ✅ Material quality: "embroidered, painted, or carved"
- ✅ Explicit integration: "not plain text overlaid"
- ✅ Cultural guardrails added
- ✅ Aspect ratio control (1:1)
- ✅ Theme selection constraints

#### Theme Options:
1. **Marigolds** - Traditional cempasúchil flowers
2. **Sugar Skulls** - Colorful calaveras
3. **Monarchs** - Symbolic butterflies

---

## FEATURE EVOLUTION TIMELINE

### Phase 1: Original Blueprint
**Status:** Conceptual
- Community ofrenda gallery
- Name integration in frames
- Firebase backend
- Multi-user experience

### Phase 2: V1 Implementation (July 2024)
**Status:** Initial Build
- ✅ Basic frame generation
- ✅ Name capture and display
- ✅ Simple prompt structure
- ✅ Single-page form

### Phase 3: Festival Reality Check
**Status:** Pivot Moment
- ❌ Community gallery removed (logistics)
- 🔄 Shifted focus to personal keepsakes
- 💡 Learned: People already taking photos, needed sharing incentive
- 💡 Realized: Free frame = marketing for next year

### Phase 4: Form Evolution
**Status:** UX Enhancement
- ✅ Multi-step form with stepper UI
- ✅ Landing page with clear CTA
- ✅ Theme selection added
- ✅ Loading states with fun facts
- ✅ Improved visual feedback

### Phase 5: V2 Refinement (October 2024)
**Status:** Quality Focus
- ✅ Better AI model (Flash Image Preview)
- ✅ Refined prompt engineering
- ✅ Text integration mastery
- ✅ Cultural guardrails
- ⚠️ Removed name display (simplified)

---

## KEY LEARNINGS

### ❌ REMOVED
- **Community gallery** - Event timing constraints
- **Name display in frames** - Simplified for better AI consistency
- **Firebase complexity** - Over-engineered for MVP

### ✨ ADDED
- **Theme selection** - Better AI constraints = better outputs
- **Multi-step stepper UI** - Improved user flow
- **Fun facts during loading** - Better engagement
- **Embroidered text aesthetic** - Higher quality integration

### 🔄 EVOLVED
- Single form → Multi-step journey
- Community ofrenda → Personal keepsake
- Complex backend → Simple & focused
- Generic frames → Theme-constrained designs

### 💡 LEARNED
- Working without temperature controls initially limited consistency
- Constraints breed better AI outputs
- Simpler is often better than feature-rich
- Real user behavior > original assumptions
- Text integration requires explicit material descriptions
- Cultural authenticity matters in prompt engineering

---

## FUTURE ENHANCEMENTS

### Short Term
- [ ] A/B test name display as optional feature
- [ ] Add more theme variations
- [ ] Implement sharing functionality
- [ ] Analytics and tracking
- [ ] Performance optimization

### Medium Term
- [ ] Seasonal community gallery (Día de los Muertos weeks only)
- [ ] Social media integration
- [ ] QR code generation for physical displays
- [ ] Email delivery option
- [ ] Multi-language support (Spanish/English)

### Long Term
- [ ] Year-round memorial platform
- [ ] Custom frame styles marketplace
- [ ] Print-on-demand integration
- [ ] Mobile app version
- [ ] AR frame preview experience
- [ ] Partnership with cultural organizations

---

## TECHNICAL CONSIDERATIONS

### Performance
- Image optimization and compression
- Lazy loading for gallery
- CDN for static assets
- Progressive image loading
- Caching strategies

### Scalability
- API rate limiting
- Cost management for AI calls
- Database optimization (if gallery returns)
- Load balancing considerations

### Security
- Image upload validation
- Content moderation
- CORS configuration
- API key protection
- User data privacy

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader support
- Color contrast ratios
- Alt text for images

---

## SUCCESS METRICS

### User Engagement
- Upload completion rate
- Download rate
- Average time on site
- Theme selection distribution

### Quality Metrics
- Frame generation success rate
- User satisfaction (if survey implemented)
- Repeat usage rate
- Sharing/referral rate

### Technical Metrics
- Page load time
- AI generation time
- Error rates
- Mobile vs desktop usage

---

## CULTURAL AUTHENTICITY NOTES

### Día de los Muertos Significance
- Not "Mexican Halloween" - celebration of life and remembrance
- Marigolds guide spirits home
- Sugar skulls (calaveras) represent departed souls
- Monarch butterflies symbolize returning spirits
- Purple, yellow, pink, and white are traditional colors

### Design Guardrails
- Always family-friendly
- Culturally respectful
- Avoid stereotypical or commercial imagery
- Emphasize celebration over mourning
- Honor the tradition's roots

---

## CONTACT & LINKS

- **Live Site:** [vibes.pixelsandcharm.com](https://vibes.pixelsandcharm.com)
- **Repository:** [github.com/TMILLS333/vibes-frames](https://github.com/TMILLS333/vibes-frames)
- **Documentation:** This file
- **Figma/Design:** [Link if available]

---

## APPENDIX: ORIGINAL VISION vs. REALITY

| Feature | Original Plan | What Actually Happened | Lesson Learned |
|---------|--------------|----------------------|----------------|
| Community Gallery | Essential feature | Removed due to timing | MVP first, features second |
| Name Display | Core to design | Simplified out | AI consistency > feature complexity |
| On-Site Usage | Primary use case | Never deployed | Validate assumptions early |
| Backend | Firebase + complex | Kept simple | Don't over-engineer MVPs |
| Sharing Strategy | TBD | Still figuring out | Marketing ≠ Product dev timeline |
| Theme Selection | Not planned | Added & critical | Constraints improve AI quality |

---

**Version:** 2.0  
**Last Updated:** October 30, 2025  
**Status:** Active Development  
**Next Review:** Post-Festival 2025
