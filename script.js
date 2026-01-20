// ==========================================
// PHOTO DATA - ADD PHOTOS HERE
// ==========================================

const photos = [
    {
        id: 1,
        images: [
            'https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=800&h=1067&fit=crop',
            'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800&h=1067&fit=crop',
            'https://images.unsplash.com/photo-1514566840885-68bed4e8ab67?w=800&h=1067&fit=crop'
        ],
        ratio: '3:4',
        title: {
            en: 'Sunset in Lisboa',
            pt: 'Pôr do Sol em Lisboa'
        },
        description: {
            en: 'Captured during golden hour at Miradouro de Santa Catarina. The warm light painted the Tagus River in shades of amber and gold, while the city below began its evening transformation.',
            pt: 'Capturado durante a hora dourada no Miradouro de Santa Catarina. A luz quente pintou o Rio Tejo em tons de âmbar e ouro, enquanto a cidade abaixo começava sua transformação noturna.'
        }
    },
    {
        id: 2,
        images: [
            'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=800&fit=crop'
        ],
        ratio: '1:1',
        title: {
            en: 'Mountain Solitude',
            pt: 'Solidão nas Montanhas'
        },
        description: {
            en: 'Early morning in the Alps. The silence was profound, broken only by the distant sound of melting ice. This moment reminded me why I chase light across mountains.',
            pt: 'Madrugada nos Alpes. O silêncio era profundo, quebrado apenas pelo som distante do gelo derretendo. Este momento me lembrou por que persigo a luz através das montanhas.'
        }
    },
    {
        id: 3,
        images: [
            'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=1067&fit=crop',
            'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=1067&fit=crop'
        ],
        ratio: '3:4',
        title: {
            en: 'Cosmic Perspective',
            pt: 'Perspectiva Cósmica'
        },
        description: {
            en: 'The Milky Way stretches above a silent landscape. Standing beneath this vast expanse, our earthly concerns seem beautifully insignificant.',
            pt: 'A Via Láctea se estende sobre uma paisagem silenciosa. Sob esta vasta imensidão, nossas preocupações terrestres parecem belamente insignificantes.'
        }
    },
    {
        id: 4,
        images: [
            'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800&h=800&fit=crop',
            'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=800&fit=crop'
        ],
        ratio: '1:1',
        title: {
            en: 'Urban Geometry',
            pt: 'Geometria Urbana'
        },
        description: {
            en: 'Modern architecture creates unexpected patterns against the sky. I love how cities can feel both overwhelming and perfectly ordered at the same time.',
            pt: 'A arquitetura moderna cria padrões inesperados contra o céu. Adoro como as cidades podem parecer ao mesmo tempo avassaladoras e perfeitamente ordenadas.'
        }
    },
    {
        id: 5,
        images: [
            'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=1067&fit=crop'
        ],
        ratio: '3:4',
        title: {
            en: 'Endless Horizon',
            pt: 'Horizonte Infinito'
        },
        description: {
            en: 'The ocean at dawn, before the world wakes. These quiet moments by the sea have taught me more about patience and presence than any meditation practice.',
            pt: 'O oceano ao amanhecer, antes do mundo despertar. Estes momentos tranquilos à beira-mar me ensinaram mais sobre paciência e presença do que qualquer prática de meditação.'
        }
    },
    {
        id: 6,
        images: [
            'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=800&fit=crop'
        ],
        ratio: '1:1',
        title: {
            en: 'Forest Whispers',
            pt: 'Sussurros da Floresta'
        },
        description: {
            en: 'Mist rolls through ancient trees in the early morning. The forest feels alive, breathing, ancient. This is where I come to remember what matters.',
            pt: 'A névoa rola entre árvores antigas na madrugada. A floresta parece viva, respirando, ancestral. É aqui que venho para lembrar o que realmente importa.'
        }
    }
];

// ==========================================
// TRANSLATIONS
// ==========================================

const translations = {
    en: {
        photographerName: 'Richard Rios',
        footerText: 'All photographs by'
    },
    pt: {
        photographerName: 'Richard Rios',
        footerText: 'Todas as fotografias por'
    }
};

// ==========================================
// LANGUAGE MANAGEMENT
// ==========================================

let currentLang = localStorage.getItem('language') || 'en';

const langToggle = document.getElementById('langToggle');

// Update language button text
function updateLangButton() {
    langToggle.textContent = currentLang.toUpperCase();
}

// Switch language
langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'en' ? 'pt' : 'en';
    localStorage.setItem('language', currentLang);
    updateLangButton();
    updatePageLanguage();
    renderGallery();
});

// Update all text on page based on current language
function updatePageLanguage() {
    document.documentElement.lang = currentLang;
    document.getElementById('photographerName').textContent = translations[currentLang].photographerName;
    document.getElementById('footerName').textContent = translations[currentLang].photographerName;
    document.getElementById('footerText').textContent = translations[currentLang].footerText;
}

// ==========================================
// THEME MANAGEMENT
// ==========================================

const html = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

// Load saved theme or default to light
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

// Theme toggle event listener
themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

// Update theme icon based on current theme
function updateThemeIcon(theme) {
    themeToggle.textContent = theme === 'light' ? '☀️' : '🌙';
}

// ==========================================
// GALLERY RENDERING
// ==========================================

const gallery = document.getElementById('gallery');

function renderGallery() {
    gallery.innerHTML = photos.map(photo => `
        <div class="photo-card" data-id="${photo.id}">
            <div class="photo-wrapper ratio-${photo.ratio.replace(':', '-')}">
                <img src="${photo.images[0]}" alt="${photo.title[currentLang]}" loading="lazy">
            </div>
            <div class="photo-info">
                <div class="photo-title">${photo.title[currentLang]}</div>
                <div class="photo-ratio">${photo.ratio}${photo.images.length > 1 ? ' · ' + photo.images.length + ' photos' : ''}</div>
            </div>
        </div>
    `).join('');

    // Add click handlers to all photo cards
    document.querySelectorAll('.photo-card').forEach(card => {
        card.addEventListener('click', () => {
            const photoId = parseInt(card.dataset.id);
            openModal(photoId);
        });
    });
}

// ==========================================
// MODAL MANAGEMENT
// ==========================================

const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');
let currentPhotoIndex = 0;
let currentPhoto = null;

// Open modal with photo details
function openModal(photoId) {
    currentPhoto = photos.find(p => p.id === photoId);
    if (!currentPhoto) return;

    currentPhotoIndex = 0;
    renderModalContent();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Render modal content with carousel
function renderModalContent() {
    const hasMultipleImages = currentPhoto.images.length > 1;
    
    modalContent.innerHTML = `
        <div class="modal-image-container">
            ${hasMultipleImages ? `<div class="carousel-counter">${currentPhotoIndex + 1} / ${currentPhoto.images.length}</div>` : ''}
            <div class="carousel-container">
                ${hasMultipleImages && currentPhotoIndex > 0 ? `
                    <button class="carousel-nav prev" id="prevBtn">‹</button>
                ` : ''}
                <img class="carousel-image" src="${currentPhoto.images[currentPhotoIndex]}" alt="${currentPhoto.title[currentLang]}">
                ${hasMultipleImages && currentPhotoIndex < currentPhoto.images.length - 1 ? `
                    <button class="carousel-nav next" id="nextBtn">›</button>
                ` : ''}
            </div>
            ${hasMultipleImages ? `
                <div class="carousel-dots" id="carouselDots">
                    ${currentPhoto.images.map((_, i) => `
                        <div class="carousel-dot ${i === currentPhotoIndex ? 'active' : ''}" data-index="${i}"></div>
                    `).join('')}
                </div>
            ` : ''}
        </div>
        <div class="modal-text">
            <h2 class="modal-title">${currentPhoto.title[currentLang]}</h2>
            <p class="modal-description">${currentPhoto.description[currentLang]}</p>
        </div>
    `;

    // Add event listeners for carousel controls
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.carousel-dot');

    if (prevBtn) prevBtn.addEventListener('click', previousImage);
    if (nextBtn) nextBtn.addEventListener('click', nextImage);
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => goToImage(index));
    });
}

// Carousel navigation functions
function nextImage() {
    if (currentPhotoIndex < currentPhoto.images.length - 1) {
        currentPhotoIndex++;
        renderModalContent();
    }
}

function previousImage() {
    if (currentPhotoIndex > 0) {
        currentPhotoIndex--;
        renderModalContent();
    }
}

function goToImage(index) {
    currentPhotoIndex = index;
    renderModalContent();
}

// Close modal
function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

// Close button click
modalClose.addEventListener('click', closeModal);

// Click outside modal to close
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// ==========================================
// IMAGE PROTECTION
// ==========================================

// Disable right-click completely on the entire page
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
});

// Disable drag and drop on images
document.addEventListener('dragstart', (e) => {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
        return false;
    }
});

// Prevent keyboard shortcuts for saving and add carousel navigation
document.addEventListener('keydown', (e) => {
    // Prevent Ctrl+S / Cmd+S (Save page)
    if ((e.ctrlKey || e.metaKey) && e.key === 's') {
        e.preventDefault();
        return false;
    }
    // Escape to close modal
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
    // Arrow keys for carousel navigation
    if (modal.classList.contains('active') && currentPhoto) {
        if (e.key === 'ArrowRight') {
            nextImage();
        } else if (e.key === 'ArrowLeft') {
            previousImage();
        }
    }
});

// ==========================================
// INITIALIZATION
// ==========================================

// Initialize language
updateLangButton();
updatePageLanguage();

// Render gallery on page load
renderGallery();

// Set current year in footer
document.getElementById('currentYear').textContent = new Date().getFullYear();