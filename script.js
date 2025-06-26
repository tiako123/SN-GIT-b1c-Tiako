// script.js

document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-button');
    const navLinks = document.querySelectorAll('nav ul li a');

    // Fonction pour faire défiler vers une section
    const smoothScroll = (target) => {
        const element = document.querySelector(target);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Événement pour le bouton "Explore Our Services"
    ctaButton.addEventListener('click', (event) => {
        event.preventDefault();
        smoothScroll('#services');
    });

    // Événements pour les liens de navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            smoothScroll(targetId);
        });
    });

    // Message dynamique
    const aboutSection = document.getElementById('about');
    aboutSection.addEventListener('mouseenter', () => {
        const message = document.createElement('div');
        message.textContent = "Discover our journey in fashion!";
        message.classList.add('dynamic-message');
        aboutSection.appendChild(message);
    });

    aboutSection.addEventListener('mouseleave', () => {
        const message = document.querySelector('.dynamic-message');
        if (message) {
            message.remove();
        }
    });
});