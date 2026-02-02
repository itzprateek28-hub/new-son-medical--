// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(30, 58, 138, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #2c5aa0, #1e3a8a)';
        header.style.backdropFilter = 'none';
    }
});

// Contact form handling
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const message = this.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !phone || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Phone validation (basic)
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number');
        return;
    }
    
    // Simulate form submission
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.service-card, .product-category, .feature-item, .stat');
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Mobile menu toggle
function toggleMobileMenu() {
    const nav = document.querySelector('.nav');
    const toggle = document.querySelector('.mobile-menu-toggle i');
    
    nav.classList.toggle('mobile-active');
    
    // Change hamburger to X and vice versa
    if (nav.classList.contains('mobile-active')) {
        toggle.classList.remove('fa-bars');
        toggle.classList.add('fa-times');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    } else {
        toggle.classList.remove('fa-times');
        toggle.classList.add('fa-bars');
        document.body.style.overflow = 'auto';
    }
}

// Close mobile menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            const nav = document.querySelector('.nav');
            const toggle = document.querySelector('.mobile-menu-toggle i');
            
            if (nav.classList.contains('mobile-active')) {
                nav.classList.remove('mobile-active');
                toggle.classList.remove('fa-times');
                toggle.classList.add('fa-bars');
                document.body.style.overflow = 'auto';
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        const nav = document.querySelector('.nav');
        const toggle = document.querySelector('.mobile-menu-toggle');
        const logo = document.querySelector('.logo');
        
        if (nav.classList.contains('mobile-active') && 
            !nav.contains(e.target) && 
            !toggle.contains(e.target) && 
            !logo.contains(e.target)) {
            nav.classList.remove('mobile-active');
            toggle.querySelector('i').classList.remove('fa-times');
            toggle.querySelector('i').classList.add('fa-bars');
            document.body.style.overflow = 'auto';
        }
    });
});

// Add click-to-call functionality for phone numbers
document.addEventListener('DOMContentLoaded', function() {
    const phoneNumbers = document.querySelectorAll('.contact-item p');
    phoneNumbers.forEach(p => {
        if (p.textContent.includes('+91')) {
            p.style.cursor = 'pointer';
            p.addEventListener('click', function() {
                const phone = this.textContent.replace(/\s/g, '');
                window.location.href = `tel:${phone}`;
            });
        }
    });
});

// Add WhatsApp integration
function openWhatsApp() {
    const phone = '917705950290'; // Remove + for WhatsApp API
    const message = 'Hello! I would like to inquire about medicines at New Son Medical Store.';
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}

// Contact modal functions
function showContactOptions() {
    const modal = document.getElementById('contactModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add fade in animation
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 10);
}

function closeContactModal() {
    const modal = document.getElementById('contactModal');
    modal.style.opacity = '0';
    setTimeout(() => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 300);
}

// Call store function
function callStore() {
    window.location.href = 'tel:+917705950290';
}

// Enhanced emergency contact functionality
function callEmergency() {
    // Show confirmation for emergency call
    if (confirm('This will call our 24x7 emergency line. Continue?')) {
        window.location.href = 'tel:+917705950290';
    }
}

// Google Maps Integration
function initializeMap() {
    const iframe = document.querySelector('.map-embed iframe');
    const fallback = document.querySelector('.map-fallback');
    
    if (iframe) {
        iframe.addEventListener('error', function() {
            // If iframe fails to load, show fallback
            iframe.style.display = 'none';
            if (fallback) {
                fallback.style.display = 'flex';
            }
        });
        
        // Add loading indicator
        iframe.addEventListener('load', function() {
            console.log('Google Maps loaded successfully');
        });
    }
}

// Initialize map when page loads
document.addEventListener('DOMContentLoaded', function() {
    initializeMap();
});

// Add map button functionality
function openInGoogleMaps() {
    window.open('https://maps.app.goo.gl/f13oyjG3StFG7TWcA', '_blank');
}

// Add emergency contact functionality
function callEmergency() {
    window.location.href = 'tel:+917705950290';
}

// Search functionality (basic)
function searchProducts(query) {
    const products = document.querySelectorAll('.product-list li');
    const searchTerm = query.toLowerCase();
    
    products.forEach(product => {
        const text = product.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            product.style.display = 'block';
            product.style.backgroundColor = '#fef3c7';
        } else {
            product.style.display = searchTerm ? 'none' : 'block';
            product.style.backgroundColor = 'transparent';
        }
    });
}

// Add search input event listener if search box exists
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('#product-search');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            searchProducts(this.value);
        });
    }
});

// Loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
});

// Add to cart functionality (basic)
function addToCart(productName) {
    alert(`${productName} has been added to your inquiry list. Please contact us for availability and pricing.`);
}

// Newsletter subscription (if added)
function subscribeNewsletter(email) {
    if (!email) {
        alert('Please enter your email address');
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    alert('Thank you for subscribing to our newsletter!');
}

console.log('New Son Medical Store website loaded successfully!');
// Enhanced header scroll effect with gradient
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(102, 126, 234, 0.95)';
        header.style.backdropFilter = 'blur(15px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        header.style.backdropFilter = 'none';
    }
});

// Add typing effect to hero text
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', function() {
    const heroTitle = document.querySelector('.hero-content h2');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        setTimeout(() => {
            typeWriter(heroTitle, originalText, 80);
        }, 500);
    }
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.5;
    
    if (hero) {
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add counter animation for stats
function animateCounter(element, target, duration = 2000) {
    // Skip animation for non-numeric content like "24/7"
    if (element.textContent.includes('/')) {
        return;
    }
    
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    }
    updateCounter();
}

// Initialize counter animation when stats come into view
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('h3');
            const text = statNumber.textContent;
            
            // Only animate numeric values, skip "24/7" and "100%"
            if (!text.includes('/') && !text.includes('%')) {
                const targetValue = parseInt(text.replace(/\D/g, ''));
                if (!isNaN(targetValue)) {
                    animateCounter(statNumber, targetValue);
                }
            }
            statsObserver.unobserve(entry.target);
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const stats = document.querySelectorAll('.stat');
    stats.forEach(stat => {
        statsObserver.observe(stat);
    });
});

// Enhanced form submission with better UX
document.querySelector('.contact-form form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const button = this.querySelector('button');
    const originalText = button.textContent;
    
    // Show loading state
    button.textContent = 'Sending...';
    button.disabled = true;
    
    // Get form data
    const name = this.querySelector('input[type="text"]').value;
    const email = this.querySelector('input[type="email"]').value;
    const phone = this.querySelector('input[type="tel"]').value;
    const message = this.querySelector('textarea').value;
    
    // Simple validation
    if (!name || !email || !phone || !message) {
        alert('Please fill in all fields');
        button.textContent = originalText;
        button.disabled = false;
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        button.textContent = originalText;
        button.disabled = false;
        return;
    }
    
    // Phone validation (basic)
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    if (!phoneRegex.test(phone)) {
        alert('Please enter a valid phone number');
        button.textContent = originalText;
        button.disabled = false;
        return;
    }
    
    // Simulate form submission
    setTimeout(() => {
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
        button.textContent = originalText;
        button.disabled = false;
    }, 1500);
});

console.log('New Son Medical Store - Enhanced website loaded successfully!');
// Gallery functionality
let currentImageIndex = 0;
const galleryImages = [
    {
        src: 'images/store-front.jpg',
        title: 'Store Front',
        description: 'New Son Medical Store - Pehati Ka Chauraha, Mirzapur',
        placeholder: 'store-front'
    },
    {
        src: 'images/store-front-customers.jpg',
        title: 'Customer Service',
        description: 'Serving our community with dedication',
        placeholder: 'store-customers'
    },
    {
        src: 'images/store-exterior-2.jpg',
        title: 'Store Exterior',
        description: 'Another view of our medical store',
        placeholder: 'store-exterior'
    },
    {
        src: 'images/store-night-view.jpg',
        title: 'Store Night View',
        description: 'Our store illuminated at night',
        placeholder: 'night-view'
    },
    {
        src: 'images/store-signage.jpg',
        title: 'Store Signage',
        description: 'Clear signage showing all available medicines',
        placeholder: 'store-signage'
    },
    {
        src: 'images/medicine-shelves.jpg',
        title: 'Medicine Shelves',
        description: 'Complete range of allopathic and ayurvedic medicines',
        placeholder: 'medicine-shelves'
    },
    {
        src: 'images/store-interior-1.jpg',
        title: 'Store Interior',
        description: 'Inside view of our well-organized medical store',
        placeholder: 'interior-view'
    },
    {
        src: 'images/store-interior-2.jpg',
        title: 'Store Interior 2',
        description: 'Another angle of our store interior',
        placeholder: 'interior-view'
    },
    {
        src: 'images/medicine-display-1.jpg',
        title: 'Medicine Display',
        description: 'Wide variety of medicines on display',
        placeholder: 'medicine-shelves'
    },
    {
        src: 'images/medicine-display-2.jpg',
        title: 'Medicine Display 2',
        description: 'More medicines and health products',
        placeholder: 'medicine-shelves'
    }
];

// Open lightbox
function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    
    // Clear previous content
    const existingPlaceholder = lightbox.querySelector('.lightbox-placeholder');
    if (existingPlaceholder) {
        existingPlaceholder.remove();
    }
    
    const existingImage = lightbox.querySelector('.lightbox-image-display');
    if (existingImage) {
        existingImage.remove();
    }
    
    // Try to load real image first
    const img = new Image();
    img.src = galleryImages[index].src;
    
    img.onload = function() {
        // Image loaded successfully - show real image
        const imgElement = document.createElement('img');
        imgElement.src = galleryImages[index].src;
        imgElement.alt = galleryImages[index].title;
        imgElement.className = 'lightbox-image-display';
        imgElement.style.maxWidth = '90%';
        imgElement.style.maxHeight = '80vh';
        imgElement.style.borderRadius = '15px';
        imgElement.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5)';
        
        lightbox.querySelector('.lightbox-content').insertBefore(imgElement, lightbox.querySelector('.lightbox-caption'));
    };
    
    img.onerror = function() {
        // Image failed to load - show placeholder
        const placeholderDiv = createLightboxPlaceholder(galleryImages[index].placeholder, galleryImages[index].title);
        lightbox.querySelector('.lightbox-content').insertBefore(placeholderDiv, lightbox.querySelector('.lightbox-caption'));
    };
    
    lightboxTitle.textContent = galleryImages[index].title;
    lightboxDescription.textContent = galleryImages[index].description;
    
    lightbox.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Add fade in animation
    setTimeout(() => {
        lightbox.style.opacity = '1';
    }, 10);
}

// Create lightbox placeholder
function createLightboxPlaceholder(className, title) {
    const div = document.createElement('div');
    div.className = `lightbox-placeholder ${className}`;
    div.style.width = '100%';
    div.style.height = '400px';
    div.style.borderRadius = '15px';
    div.style.display = 'flex';
    div.style.alignItems = 'center';
    div.style.justifyContent = 'center';
    div.style.flexDirection = 'column';
    div.style.color = 'white';
    div.style.fontSize = '2rem';
    div.style.fontWeight = '700';
    div.style.textAlign = 'center';
    div.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5)';
    
    // Set background based on class
    const backgrounds = {
        'store-front': 'linear-gradient(135deg, #06b6d4, #0891b2)',
        'medicine-shelves': 'linear-gradient(135deg, #0891b2, #164e63)',
        'store-signage': 'linear-gradient(135deg, #164e63, #334155)',
        'store-logo': 'linear-gradient(135deg, #f1f5f9, #e2e8f0)',
        'night-view': 'linear-gradient(135deg, #334155, #475569)',
        'interior-view': 'linear-gradient(135deg, #475569, #64748b)'
    };
    
    div.style.background = backgrounds[className] || backgrounds['store-front'];
    
    if (className === 'store-logo') {
        div.style.color = '#06b6d4';
        div.innerHTML = `
            <i class="fas fa-plus-circle" style="font-size: 5rem; margin-bottom: 1rem; color: #ef4444;"></i>
            <div style="background: linear-gradient(45deg, #ef4444, #06b6d4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                NEW SON<br>MEDICAL STORE
            </div>
        `;
    } else {
        const icons = {
            'store-front': 'fas fa-store',
            'medicine-shelves': 'fas fa-pills',
            'store-signage': 'fas fa-sign',
            'night-view': 'fas fa-moon',
            'interior-view': 'fas fa-clinic-medical'
        };
        
        div.innerHTML = `
            <i class="${icons[className]}" style="font-size: 5rem; margin-bottom: 1rem;"></i>
            <div>${title}</div>
        `;
    }
    
    return div;
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.opacity = '0';
    setTimeout(() => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
        
        // Clean up content
        const existingPlaceholder = lightbox.querySelector('.lightbox-placeholder');
        const existingImage = lightbox.querySelector('.lightbox-image-display');
        if (existingPlaceholder) {
            existingPlaceholder.remove();
        }
        if (existingImage) {
            existingImage.remove();
        }
    }, 300);
}

// Previous image
function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
}

// Next image
function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateLightboxImage();
}

// Update lightbox image
function updateLightboxImage() {
    const lightbox = document.getElementById('lightbox');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    
    // Remove existing content
    const existingPlaceholder = lightbox.querySelector('.lightbox-placeholder');
    const existingImage = lightbox.querySelector('.lightbox-image-display');
    
    if (existingPlaceholder) {
        existingPlaceholder.style.opacity = '0';
        setTimeout(() => existingPlaceholder.remove(), 150);
    }
    
    if (existingImage) {
        existingImage.style.opacity = '0';
        setTimeout(() => existingImage.remove(), 150);
    }
    
    // Try to load real image first
    setTimeout(() => {
        const img = new Image();
        img.src = galleryImages[currentImageIndex].src;
        
        img.onload = function() {
            // Image loaded successfully - show real image
            const imgElement = document.createElement('img');
            imgElement.src = galleryImages[currentImageIndex].src;
            imgElement.alt = galleryImages[currentImageIndex].title;
            imgElement.className = 'lightbox-image-display';
            imgElement.style.maxWidth = '90%';
            imgElement.style.maxHeight = '80vh';
            imgElement.style.borderRadius = '15px';
            imgElement.style.boxShadow = '0 20px 60px rgba(0,0,0,0.5)';
            imgElement.style.opacity = '0';
            
            lightbox.querySelector('.lightbox-content').insertBefore(imgElement, lightbox.querySelector('.lightbox-caption'));
            
            setTimeout(() => {
                imgElement.style.transition = 'opacity 0.3s ease';
                imgElement.style.opacity = '1';
            }, 50);
        };
        
        img.onerror = function() {
            // Image failed to load - show placeholder
            const newPlaceholder = createLightboxPlaceholder(
                galleryImages[currentImageIndex].placeholder, 
                galleryImages[currentImageIndex].title
            );
            newPlaceholder.style.opacity = '0';
            
            lightbox.querySelector('.lightbox-content').insertBefore(newPlaceholder, lightbox.querySelector('.lightbox-caption'));
            
            setTimeout(() => {
                newPlaceholder.style.transition = 'opacity 0.3s ease';
                newPlaceholder.style.opacity = '1';
            }, 50);
        };
        
        lightboxTitle.textContent = galleryImages[currentImageIndex].title;
        lightboxDescription.textContent = galleryImages[currentImageIndex].description;
    }, 150);
}

// Gallery filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter gallery items
            galleryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    item.style.display = 'block';
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
});

// Close lightbox on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
        closeContactModal(); // Also close contact modal on escape
    } else if (e.key === 'ArrowLeft') {
        prevImage();
    } else if (e.key === 'ArrowRight') {
        nextImage();
    }
});

// Close lightbox on background click
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        closeLightbox();
    }
});

// Close contact modal on background click
document.addEventListener('DOMContentLoaded', function() {
    const contactModal = document.getElementById('contactModal');
    if (contactModal) {
        contactModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeContactModal();
            }
        });
    }
});

// Gallery scroll animations
const galleryObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

document.addEventListener('DOMContentLoaded', function() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        galleryObserver.observe(item);
    });
});

// Enhanced mobile optimizations
document.addEventListener('DOMContentLoaded', function() {
    // Detect mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
        // Add mobile class to body
        document.body.classList.add('mobile-device');
        
        // Optimize touch scrolling
        document.body.style.webkitOverflowScrolling = 'touch';
        
        // Prevent zoom on input focus (iOS)
        const inputs = document.querySelectorAll('input, textarea, select');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                const viewport = document.querySelector('meta[name="viewport"]');
                viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
            });
            
            input.addEventListener('blur', function() {
                const viewport = document.querySelector('meta[name="viewport"]');
                viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
            });
        });
        
        // Optimize floating buttons for mobile
        const whatsappFloat = document.querySelector('.whatsapp-float');
        const callFloat = document.querySelector('.call-float');
        
        if (whatsappFloat) {
            whatsappFloat.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
            });
            
            whatsappFloat.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
        }
        
        if (callFloat) {
            callFloat.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
            });
            
            callFloat.addEventListener('touchend', function() {
                this.style.transform = 'scale(1)';
            });
        }
    }
    
    // Improve scroll performance
    let ticking = false;
    
    function updateScrollEffects() {
        const header = document.querySelector('.header');
        
        if (window.scrollY > 100) {
            header.style.background = 'rgba(30, 41, 59, 0.95)';
            header.style.backdropFilter = 'blur(15px)';
        } else {
            header.style.background = 'linear-gradient(135deg, #1e293b 0%, #334155 50%, #475569 100%)';
            header.style.backdropFilter = 'blur(15px)';
        }
        
        ticking = false;
    }
    
    function requestScrollUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestScrollUpdate, { passive: true });
    
    // Optimize image loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.remove('lazy');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // Add swipe gestures for gallery on mobile
    if (isMobile) {
        let startX = 0;
        let startY = 0;
        
        const lightbox = document.getElementById('lightbox');
        if (lightbox) {
            lightbox.addEventListener('touchstart', function(e) {
                startX = e.touches[0].clientX;
                startY = e.touches[0].clientY;
            }, { passive: true });
            
            lightbox.addEventListener('touchend', function(e) {
                const endX = e.changedTouches[0].clientX;
                const endY = e.changedTouches[0].clientY;
                const diffX = startX - endX;
                const diffY = startY - endY;
                
                // Only trigger swipe if horizontal movement is greater than vertical
                if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
                    if (diffX > 0) {
                        nextImage(); // Swipe left - next image
                    } else {
                        prevImage(); // Swipe right - previous image
                    }
                }
            }, { passive: true });
        }
    }
    
    // Optimize form submission for mobile
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const button = this.querySelector('button');
            const originalText = button.textContent;
            
            // Show loading state
            button.textContent = 'Sending...';
            button.disabled = true;
            button.style.opacity = '0.7';
            
            // Get form data
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const phone = this.querySelector('input[type="tel"]').value;
            const message = this.querySelector('textarea').value;
            
            // Validation
            if (!name || !email || !phone || !message) {
                showMobileAlert('Please fill in all fields');
                resetButton();
                return;
            }
            
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMobileAlert('Please enter a valid email address');
                resetButton();
                return;
            }
            
            const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
            if (!phoneRegex.test(phone)) {
                showMobileAlert('Please enter a valid phone number');
                resetButton();
                return;
            }
            
            // Simulate form submission
            setTimeout(() => {
                showMobileAlert('Thank you for your message! We will get back to you soon.');
                this.reset();
                resetButton();
            }, 1500);
            
            function resetButton() {
                button.textContent = originalText;
                button.disabled = false;
                button.style.opacity = '1';
            }
        });
    }
    
    // Mobile-friendly alert function
    function showMobileAlert(message) {
        if (isMobile) {
            // Create custom mobile alert
            const alertDiv = document.createElement('div');
            alertDiv.className = 'mobile-alert';
            alertDiv.textContent = message;
            alertDiv.style.cssText = `
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                background: linear-gradient(135deg, #1e293b, #334155);
                color: white;
                padding: 20px 30px;
                border-radius: 15px;
                box-shadow: 0 20px 60px rgba(0,0,0,0.5);
                z-index: 10000;
                max-width: 90%;
                text-align: center;
                font-weight: 600;
                border: 2px solid #06b6d4;
            `;
            
            document.body.appendChild(alertDiv);
            
            setTimeout(() => {
                alertDiv.style.opacity = '0';
                alertDiv.style.transform = 'translate(-50%, -50%) scale(0.9)';
                setTimeout(() => {
                    document.body.removeChild(alertDiv);
                }, 300);
            }, 3000);
        } else {
            alert(message);
        }
    }
});