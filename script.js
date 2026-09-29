/* ============ New Son Medical Store — Script ============ */

const PHONE = '+917705950290';
const WHATSAPP = '917705950290';
const MAPS_URL = 'https://maps.app.goo.gl/f13oyjG3StFG7TWcA';

/* ---------- Gallery data ---------- */
const galleryImages = [
    { src: 'images/store-front.jpg', title: 'Store Front', desc: 'New Son Medical Store - Pehati Ka Chauraha, Mirzapur', category: 'exterior' },
    { src: 'images/store-front-customers.jpg', title: 'Customer Service', desc: 'Serving our community with dedication', category: 'exterior' },
    { src: 'images/store-exterior-2.jpg', title: 'Store Exterior', desc: 'Another view of our medical store', category: 'exterior' },
    { src: 'images/store-night-view.jpg', title: 'Store Night View', desc: 'Our store illuminated at night', category: 'exterior' },
    { src: 'images/store-signage.jpg', title: 'Store Signage', desc: 'Clear signage showing all available medicines', category: 'signage' },
    { src: 'images/medicine-shelves.jpg', title: 'Medicine Shelves', desc: 'Complete range of allopathic and ayurvedic medicines', category: 'interior' },
    { src: 'images/store-interior-1.jpg', title: 'Store Interior', desc: 'Inside view of our well-organized medical store', category: 'interior' },
    { src: 'images/store-interior-2.jpg', title: 'Store Interior 2', desc: 'Another angle of our store interior', category: 'interior' },
    { src: 'images/medicine-display-1.jpg', title: 'Medicine Display', desc: 'Wide variety of medicines on display', category: 'interior' },
    { src: 'images/medicine-display-2.jpg', title: 'Medicine Display 2', desc: 'More medicines and health products', category: 'interior' }
];

const galleryGrid = document.getElementById('galleryGrid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxCaption = document.getElementById('lightboxCaption');
let currentLightboxIndex = 0;
let visibleImages = [...galleryImages];

function renderGallery() {
    galleryGrid.innerHTML = galleryImages.map((img, i) => `
        <div class="gallery-item" data-category="${img.category}" data-index="${i}">
            <img src="${img.src}" alt="${img.title}" loading="lazy">
            <div class="gallery-caption">
                <h4>${img.title}</h4>
                <p>${img.desc}</p>
            </div>
        </div>
    `).join('');

    galleryGrid.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => openLightbox(parseInt(item.dataset.index, 10)));
    });
}

/* ---------- Gallery filters ---------- */
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelector('.filter-btn.active').classList.remove('active');
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        galleryGrid.querySelectorAll('.gallery-item').forEach(item => {
            const show = filter === 'all' || item.dataset.category === filter;
            item.classList.toggle('hidden', !show);
        });
        visibleImages = filter === 'all'
            ? [...galleryImages]
            : galleryImages.filter(img => img.category === filter);
    });
});

/* ---------- Lightbox ---------- */
function openLightbox(index) {
    currentLightboxIndex = index;
    updateLightbox();
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function updateLightbox() {
    const img = galleryImages[currentLightboxIndex];
    lightboxImg.src = img.src;
    lightboxImg.alt = img.title;
    lightboxCaption.textContent = `${img.title} — ${img.desc}`;
}

function closeLightbox() {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
}

function stepLightbox(dir) {
    const currentImg = galleryImages[currentLightboxIndex];
    let pos = visibleImages.indexOf(currentImg);
    if (pos === -1) pos = 0;
    pos = (pos + dir + visibleImages.length) % visibleImages.length;
    currentLightboxIndex = galleryImages.indexOf(visibleImages[pos]);
    updateLightbox();
}

document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxPrev').addEventListener('click', () => stepLightbox(-1));
document.getElementById('lightboxNext').addEventListener('click', () => stepLightbox(1));
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => {
    if (!lightbox.classList.contains('open')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') stepLightbox(-1);
    if (e.key === 'ArrowRight') stepLightbox(1);
});

/* ---------- Mobile nav ---------- */
const nav = document.getElementById('nav');
const menuToggle = document.getElementById('menuToggle');

const navOverlay = document.createElement('div');
navOverlay.className = 'nav-overlay';
document.body.appendChild(navOverlay);

const navClose = document.createElement('button');
navClose.className = 'nav-close';
navClose.innerHTML = '<i class="fas fa-xmark"></i>';
navClose.setAttribute('aria-label', 'Close menu');
nav.appendChild(navClose);

function setNav(open) {
    nav.classList.toggle('open', open);
    navOverlay.classList.toggle('show', open);
    document.body.style.overflow = open ? 'hidden' : '';
}

menuToggle.addEventListener('click', () => setNav(!nav.classList.contains('open')));
navClose.addEventListener('click', () => setNav(false));
navOverlay.addEventListener('click', () => setNav(false));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setNav(false)));

/* ---------- Sticky header shadow ---------- */
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

/* ---------- Active nav link on scroll ---------- */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
    });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(section => sectionObserver.observe(section));

/* ---------- Reveal on scroll ---------- */
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ---------- Stat counters ---------- */
const statObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        statObserver.unobserve(entry.target);
        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const suffix = target >= 1000 ? '+' : (target === 100 ? '%' : '+');
        const duration = 1400;
        const start = performance.now();
        function tick(now) {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(target * eased).toLocaleString('en-IN') + (progress === 1 ? suffix : '');
            if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    });
}, { threshold: 0.5 });

document.querySelectorAll('[data-count]').forEach(el => statObserver.observe(el));

/* ---------- Contact form → WhatsApp ---------- */
document.getElementById('contactForm').addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('cName').value.trim();
    const phone = document.getElementById('cPhone').value.trim();
    const message = document.getElementById('cMessage').value.trim();
    const text = `Hello New Son Medical Store!%0A%0AName: ${encodeURIComponent(name)}%0APhone: ${encodeURIComponent(phone)}%0AMessage: ${encodeURIComponent(message)}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${text}`, '_blank');
});

/* ---------- Footer year ---------- */
document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Init ---------- */
renderGallery();
