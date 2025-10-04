// DOM yüklendiğinde çalışacak fonksiyonlar
document.addEventListener('DOMContentLoaded', function() {
    // Daktilo efekti
    typewriterEffect();
    
    // Mobil menü toggle
    setupMobileMenu();
    
    // Smooth scroll için navbar linklerini ayarla
    setupSmoothScroll();
    
    // Form submit handling
    setupContactForm();
    
    // Scroll event listener
    window.addEventListener('scroll', handleScroll);
});

// Daktilo efekti fonksiyonu
function typewriterEffect() {
    const typewriterElement = document.getElementById('typewriter');
    const texts = [
        'FULL STACK DEVELOPER',
        'ESMA İYİGÜNLER'
    ];
    
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentText = texts[textIndex];
        
        if (isDeleting) {
            // Silme efekti
            typewriterElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            // Yazma efekti
            typewriterElement.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        // Metin tamamlandığında
        if (!isDeleting && charIndex === currentText.length) {
            // 2 saniye bekle, sonra silmeye başla
            setTimeout(() => {
                isDeleting = true;
            }, 2000);
        }
        
        // Metin tamamen silindiğinde
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            // 1 saniye bekle, sonra yazmaya başla
            setTimeout(() => {
                type();
            }, 1000);
            return;
        }
        
        setTimeout(type, typingSpeed);
    }
    
    // Daktilo efektini başlat
    setTimeout(type, 1000);
}

// Mobil menü setup
function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Menü linklerine tıklandığında mobil menüyü kapat
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Smooth scroll setup
function setupSmoothScroll() {
    const navLinks = document.querySelectorAll('.nav-link, .scroll-down a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // Navbar yüksekliği kadar offset
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Contact form setup
function setupContactForm() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Form verilerini al
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            // Basit validasyon
            if (!name || !email || !message) {
                showNotification('Lütfen tüm alanları doldurun!', 'error');
                return;
            }
            
            // Email format kontrolü
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showNotification('Lütfen geçerli bir email adresi girin!', 'error');
                return;
            }
            
            // Form gönderimi simülasyonu
            showNotification('Mesajınız gönderiliyor...', 'info');
            
            setTimeout(() => {
                showNotification('Mesajınız başarıyla gönderildi!', 'success');
                this.reset();
            }, 2000);
        });
    }
}

// Scroll event handler
function handleScroll() {
    const navbar = document.querySelector('.navbar');
    
    // Navbar her zaman şeffaf kalacak
    navbar.style.background = 'transparent';
    
    // Active nav link highlighting
    highlightActiveNavLink();
}

// Active nav link highlighting
function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Mevcut notification varsa kaldır
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Yeni notification oluştur
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // CSS stilleri ekle
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#27ae60' : type === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    // Body'ye ekle
    document.body.appendChild(notification);
    
    // Animasyon için setTimeout
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Close button event
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 300);
        }
    }, 5000);
}

// Intersection Observer for animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Animate elements
    const animateElements = document.querySelectorAll('.project-card, .contact-item, .skill-tag');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Page load animations
window.addEventListener('load', function() {
    setupScrollAnimations();
    
    // Hero section fade in
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            heroContent.style.transition = 'all 1s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 500);
    }
});

// Gallery functionality - Multiple galleries support
const galleryStates = {};

function changeSlide(galleryId, direction) {
    if (!galleryStates[galleryId]) {
        galleryStates[galleryId] = 1;
    }
    
    galleryStates[galleryId] += direction;
    showSlide(galleryId, galleryStates[galleryId]);
}

function currentSlide(galleryId, slideNumber) {
    galleryStates[galleryId] = slideNumber;
    showSlide(galleryId, slideNumber);
}

function showSlide(galleryId, slideNumber) {
    const galleryElement = document.querySelector(`[data-gallery="${galleryId}"]`);
    if (!galleryElement) return;
    
    const slides = galleryElement.querySelectorAll('.gallery-slide');
    const dots = galleryElement.querySelectorAll('.dot');
    
    if (!slides.length) return;
    
    if (slideNumber > slides.length) {
        slideNumber = 1;
        galleryStates[galleryId] = 1;
    }
    if (slideNumber < 1) {
        slideNumber = slides.length;
        galleryStates[galleryId] = slides.length;
    }
    
    // Hide all slides in this gallery
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Remove active class from all dots in this gallery
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    // Show current slide and activate corresponding dot
    if (slides[slideNumber - 1]) {
        slides[slideNumber - 1].classList.add('active');
    }
    if (dots[slideNumber - 1]) {
        dots[slideNumber - 1].classList.add('active');
    }
}

// Auto-slide functionality
function autoSlide() {
    const galleries = document.querySelectorAll('[data-gallery]');
    
    galleries.forEach(gallery => {
        const galleryId = gallery.getAttribute('data-gallery');
        const slides = gallery.querySelectorAll('.gallery-slide');
        
        if (slides.length > 1) {
            setInterval(() => {
                changeSlide(galleryId, 1);
            }, 5000); // Change slide every 5 seconds
        }
    });
}

// Initialize all galleries when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all galleries
    const galleries = document.querySelectorAll('[data-gallery]');
    galleries.forEach(gallery => {
        const galleryId = gallery.getAttribute('data-gallery');
        galleryStates[galleryId] = 1;
        showSlide(galleryId, 1);
    });
    
    // Start auto-slide for all galleries
    autoSlide();
    
    // Add touch/swipe support for mobile
    galleries.forEach(gallery => {
        const galleryId = gallery.getAttribute('data-gallery');
        const galleryContainer = gallery.querySelector('.gallery-container');
        
        if (galleryContainer) {
            let startX = 0;
            let endX = 0;
            
            galleryContainer.addEventListener('touchstart', function(e) {
                startX = e.touches[0].clientX;
            });
            
            galleryContainer.addEventListener('touchend', function(e) {
                endX = e.changedTouches[0].clientX;
                handleSwipe(galleryId);
            });
            
            function handleSwipe(galleryId) {
                const swipeThreshold = 50;
                const diff = startX - endX;
                
                if (Math.abs(diff) > swipeThreshold) {
                    if (diff > 0) {
                        // Swipe left - next slide
                        changeSlide(galleryId, 1);
                    } else {
                        // Swipe right - previous slide
                        changeSlide(galleryId, -1);
                    }
                }
            }
        }
    });
});

// Keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC tuşu ile mobil menüyü kapat
    if (e.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        if (hamburger && navMenu) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
    
    // Enter tuşu ile form submit
    if (e.key === 'Enter' && e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        const form = e.target.closest('form');
        if (form) {
            form.dispatchEvent(new Event('submit'));
        }
    }
    
    // Arrow keys for gallery navigation (affects focused gallery)
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        const activeElement = document.activeElement;
        const galleryElement = activeElement.closest('[data-gallery]');
        
        if (galleryElement) {
            const galleryId = galleryElement.getAttribute('data-gallery');
            if (e.key === 'ArrowLeft') {
                changeSlide(galleryId, -1);
            } else {
                changeSlide(galleryId, 1);
            }
        }
    }
});
