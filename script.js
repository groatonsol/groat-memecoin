document.addEventListener('DOMContentLoaded', function() {
    // Modal functionality
    var telegramModal = new bootstrap.Modal(document.getElementById('telegramModal'));
    var twitterModal = new bootstrap.Modal(document.getElementById('twitterModal'));

    // Show modal when 'JOIN US' button is clicked
    document.querySelector('.btn-join-telegram').addEventListener('click', function() {
        telegramModal.show();
    });

    document.querySelector('.btn-join-twitter').addEventListener('click', function() {
        twitterModal.show();
    });

    // Initialize Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, {
        threshold: 0.1
    });

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });

    // Add any other interactive elements here
});

/* Add this to your script.js */
// Scroll Animation Trigger
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Parallax Effect for About Section
window.addEventListener('scroll', () => {
    const aboutSection = document.querySelector('#about');
    const scrolled = window.pageYOffset;
    aboutSection.style.backgroundPositionY = (scrolled * 0.5) + 'px';
});