// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Speech Synthesis - Welcome Message
function playWelcomeMessage() {
    const synth = window.speechSynthesis;

    // Cancel any ongoing speech
    synth.cancel();

    const utterance = new SpeechSynthesisUtterance();
    const currentLang = localStorage.getItem('language') || 'fr';

    if (currentLang === 'fr') {
        utterance.text = 'Bienvenue sur mon portfolio';
        utterance.lang = 'fr-FR';
    } else {
        utterance.text = 'Welcome to my portfolio';
        utterance.lang = 'en-US';
    }

    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 0.8;

    synth.speak(utterance);
}
function playSound(type) {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();

    if (type === 'toggle') {
        // Sound for language toggle - cheerful beep
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = 800;
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1);
    } else if (type === 'dark') {
        // Sound for dark mode toggle - lower beep
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = 600;
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.12);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.12);
    }
}
const translations = {
    fr: {
        about: 'A Propos de Moi',
        aboutSubtitle: 'Développeur web Passionné | Créateur de Solutions Digitales',
        frontendDev: 'Développeur front-end',
        whoAmI: 'Qui suis-je ?',
        whoAmIText: 'Passionné par l\'informatique et les technologies numériques, je suis un développeur en constante évolution qui aime apprendre, expérimenter et créer des solutions modernes. Curieux et autodidacte, j\'explore différents domaines comme le développement web, les systèmes informatiques, le design numérique et les outils technologiques afin d\'améliorer continuellement mes compétences.<br>J\'aime transformer des idées en projets concrets, avec une attention particulière portée à l\'esthétique, à l\'expérience utilisateur et à la performance. Toujours motivé à découvrir de nouvelles technologies, je cherche à construire des projets utiles, modernes et innovants tout en développant une solide expertise technique.',
        myJourney: 'Mon Parcours',
        myJourneyText: 'Passionné par la technologie depuis mon plus jeune âge, j\'ai découvert le développement web il y a 3 années.Ce qui a commencé comme une simple curiosité s\'est transformé en une véritable passion. J\'aime transformer des idées en applications fonctionnelles et élégantes qui résolvent de vrais problèmes.',
        myPhilosophy: 'Ma Philosophie',
        myPhilosophyText: 'Pour moi, le code est bien plus que des lignes sur un écran. C\'est un moyen de créer, d\'innover et d\'avoir un impact positif. Je crois en l\'apprentissage continu, la qualité du code et l\'importance de l\'expérience utilisateur. Chaque projet est une opportunité d\'apprendre et de repousser mes limites.',
        whatMotivates: 'Ce qui me motive',
        whatMotivatesText: 'Je suis motivé par les défis techniques et l\'opportunité de créer des solutions innovantes. L\'apprentissage continu et la résolution de problèmes complexes me poussent à aller au-delà de mes limites.',
        whoAmICardText: 'Passionné par l\'informatique et les technologies numériques, je suis un développeur en constante évolution qui aime apprendre, expérimenter et créer des solutions modernes. Curieux et autodidacte, j\'explore différents domaines comme le développement web, les systèmes informatiques, le design numérique et les outils technologiques afin d\'améliorer continuellement mes compétences.J\'aime transformer des idées en projets concrets, avec une attention particulière portée à l\'esthétique, à l\'expérience utilisateur et à la performance. Toujours motivé à découvrir de nouvelles technologies, je cherche à construire des projets utiles, modernes et innovants tout en développant une solide expertise technique.',
        mySkills: 'Mes Compétences',
        mySkillsSubtitle: 'Mes domaines de maîtrise et expertises',
        webDevelopment: 'Développement Web',
        designCreative: 'Design & Créatif',
        aiTools: 'IA & Outils Modernes',
        myJourneyTitle: 'Mon Parcours',
        myJourneySubtitle: 'Mon évolution professionnelle et académique',
        continuousLearning: 'Apprentissage Continu',
        pythonProgramming: 'Python & Programmation',
        pythonProgrammingText: 'Apprentissage autonome en Python grâce aux cours de Graven. Progression étape par étape, compréhension des concepts fondamentaux et application pratique.',
        development: 'Développement',
        masteringTools: 'Maîtrise des Outils',
        modernDevEnvironment: 'Environnement Dev Moderne',
        modernDevEnvironmentText: 'Exploration en profondeur de Git, GitHub, VS Code, Windows et outils système. Compréhension technique des appareils et optimisation. Pas juste utiliser, mais vraiment comprendre.',
        technical: 'Technique',
        graphicCreation: 'Création Graphique',
        pixelLabDesign: 'PixelLab & Design Visuel',
        pixelLabDesignText: 'Utilisation de PixelLab pour créer des visuels impactants. Travail sur l\'identité visuelle, les couleurs, les dégradés et la présentation. Portfolio orienté style et esthétique.',
        design: 'Design',
        financialExploration: 'Exploration Financière',
        tradingPriceAction: 'Trading & Price Action',
        tradingPriceActionText: 'Intérêt pour le trading et la price action. Apprentissage des mèches, margin, entrées et stratégies. Approche analytique : comprendre la logique des mouvements marché plutôt que suivre des signaux.',
        finance: 'Finance',
        myProjects: 'Mes Projets',
        myProjectsSubtitle: 'Découvrez mes réalisations et projets en ligne',
        webApp: 'Web App',
        veraCheckDesc: 'Platforme de lutte contre les fakes news',
        calculatorTitle: 'Calculatrice de moyenne',
        calculatorDesc: 'Outil de calcul de moyenne pour mon école',
        viewProject: 'Voir le projet',
        contactMe: 'Me Contacter',
        contactSubtitle: 'Parlons de ton projet ou de collaboration',
        copyright: '© 2026 Touts droites réservés.'
    },
    en: {
        about: 'About Me',
        aboutSubtitle: 'Passionate Web Developer | Creator of Digital Solutions',
        frontendDev: 'Front-end Developer',
        whoAmI: 'Who Am I?',
        whoAmIText: 'Passionate about technology and digital innovation, I am a constantly evolving developer who loves learning, experimenting, and creating modern solutions. Curious and self-taught, I explore various fields such as web development, computer systems, digital design, and technological tools to continuously improve my skills.<br>I love transforming ideas into concrete projects with special attention to aesthetics, user experience, and performance. Always motivated to discover new technologies, I strive to build useful, modern, and innovative projects while developing solid technical expertise.',
        myJourney: 'My Journey',
        myJourneyText: 'Passionate about technology from a young age, I discovered web development 3 years ago. What started as simple curiosity has transformed into a real passion. I love transforming ideas into functional and elegant applications that solve real problems.',
        myPhilosophy: 'My Philosophy',
        myPhilosophyText: 'For me, code is much more than lines on a screen. It is a means to create, innovate, and make a positive impact. I believe in continuous learning, code quality, and the importance of user experience. Every project is an opportunity to learn and push my limits.',
        whatMotivates: 'What Motivates Me',
        whatMotivatesText: 'I am motivated by technical challenges and the opportunity to create innovative solutions. Continuous learning and solving complex problems push me beyond my limits.',
        whoAmICardText: 'Passionate about technology and digital innovation, I am a constantly evolving developer who loves learning, experimenting, and creating modern solutions. Curious and self-taught, I explore various fields such as web development, computer systems, digital design, and technological tools to continuously improve my skills. I love transforming ideas into concrete projects with special attention to aesthetics, user experience, and performance. Always motivated to discover new technologies, I strive to build useful, modern, and innovative projects while developing solid technical expertise.',
        mySkills: 'My Skills',
        mySkillsSubtitle: 'My areas of expertise and mastery',
        webDevelopment: 'Web Development',
        designCreative: 'Design & Creative',
        aiTools: 'AI & Modern Tools',
        myJourneyTitle: 'My Journey',
        myJourneySubtitle: 'My professional and academic evolution',
        continuousLearning: 'Continuous Learning',
        pythonProgramming: 'Python & Programming',
        pythonProgrammingText: 'Self-taught learning in Python through Graven\'s courses. Step-by-step progression, understanding fundamental concepts and practical application.',
        development: 'Development',
        masteringTools: 'Mastering Tools',
        modernDevEnvironment: 'Modern Dev Environment',
        modernDevEnvironmentText: 'In-depth exploration of Git, GitHub, VS Code, Windows, and system tools. Technical understanding of devices and optimization. Not just using, but truly understanding.',
        technical: 'Technical',
        graphicCreation: 'Graphic Creation',
        pixelLabDesign: 'PixelLab & Visual Design',
        pixelLabDesignText: 'Using PixelLab to create impactful visuals. Work on visual identity, colors, gradients, and presentation. Portfolio focused on style and aesthetics.',
        design: 'Design',
        financialExploration: 'Financial Exploration',
        tradingPriceAction: 'Trading & Price Action',
        tradingPriceActionText: 'Interest in trading and price action. Learning about wicks, margin, entries, and strategies. Analytical approach: understanding market movement logic rather than following signals.',
        finance: 'Finance',
        myProjects: 'My Projects',
        myProjectsSubtitle: 'Discover my creations and online projects',
        webApp: 'Web App',
        veraCheckDesc: 'Platform to fight against fake news',
        calculatorTitle: 'Average Calculator',
        calculatorDesc: 'Average calculation tool for my school',
        viewProject: 'View Project',
        contactMe: 'Contact Me',
        contactSubtitle: 'Let\'s talk about your project or collaboration',
        copyright: '© 2026 All rights reserved.'
    }
};

// Language Toggle Function
function setLanguage(lang) {
    localStorage.setItem('language', lang);
    const elements = document.querySelectorAll('[data-translate-key]');

    elements.forEach(element => {
        const key = element.getAttribute('data-translate-key');
        if (translations[lang] && translations[lang][key]) {
            element.innerHTML = translations[lang][key];
        }
    });

    document.documentElement.lang = lang;
    updateLangButton(lang);
}

function updateLangButton(lang) {
    const langToggle = document.getElementById('langToggle');
    langToggle.textContent = lang === 'fr' ? 'EN' : 'FR';
    langToggle.setAttribute('title', lang === 'fr' ? 'Switch to English' : 'Passer au français');
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('language') || 'fr';
    setLanguage(savedLanguage);

    // Play welcome message with a small delay to ensure audio context is ready
    setTimeout(() => {
        playWelcomeMessage();
    }, 500);

    const langToggle = document.getElementById('langToggle');
    langToggle.addEventListener('click', () => {
        playSound('toggle');
        const currentLang = localStorage.getItem('language') || 'fr';
        const newLang = currentLang === 'fr' ? 'en' : 'fr';
        setLanguage(newLang);
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
        playSound('dark');
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
});

// Also play welcome message on page visibility change (when tab becomes active)
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        setTimeout(() => {
            playWelcomeMessage();
        }, 300);
    }
});

// Create Floating Particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
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
