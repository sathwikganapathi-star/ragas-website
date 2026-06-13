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

// Form submission handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
    });
}

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe raga cards
document.querySelectorAll('.raga-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Observe system cards
document.querySelectorAll('.system-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// Navigation highlight on scroll
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.opacity = '0.6';
        if (link.getAttribute('href').slice(1) === current) {
            link.style.opacity = '1';
            link.style.fontWeight = 'bold';
        }
    });
});

// Raga card click handler for more details
document.querySelectorAll('.raga-card').forEach(card => {
    card.addEventListener('click', function () {
        const ragaName = this.querySelector('h3').textContent;
        console.log('Selected Raga: ' + ragaName);
    });
});

// Theme toggle (optional feature for future enhancement)
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    initializeTheme();
    console.log('Ragas India website loaded successfully!');
});
