// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});


// Dark Mode Toggle
const darkToggle = document.getElementById('darkToggle');
const body = document.body;
const particlesContainer = document.getElementById('particles');

// Check for saved preference or default to light mode
const savedMode = localStorage.getItem('darkMode');
if (savedMode === 'enabled') {
    body.classList.add('dark-mode');
    darkToggle.textContent = '☀️';
    createParticles();
}

// Toggle dark mode
darkToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        darkToggle.textContent = '☀️';
        localStorage.setItem('darkMode', 'enabled');
        createParticles();
    } else {
        darkToggle.textContent = '🌙';
        localStorage.setItem('darkMode', 'disabled');
        particlesContainer.innerHTML = '';
    }
});

// Create Floating Particles
function createParticles() {
    particlesContainer.innerHTML = '';
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        const size = Math.random() * 3 + 2;
        const duration = Math.random() * 10 + 15;
        const delay = Math.random() * 5;
        const leftPosition = Math.random() * 100;
        const opacity = Math.random() * 0.5 + 0.3;

        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = leftPosition + '%';
        particle.style.animation = `float ${duration}s linear ${delay}s infinite`;
        particle.style.opacity = opacity;
        particle.style.background = `rgba(95, 143, 255, ${opacity})`;

        particlesContainer.appendChild(particle);
    }
}
