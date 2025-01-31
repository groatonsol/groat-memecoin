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

    // Add click handler for BUY GROAT button
    document.querySelector('.btn-buy-groat').addEventListener('click', function(e) {
        e.preventDefault();
        
        // Create popup if it doesn't exist
        let popup = document.querySelector('.coming-soon-popup');
        if (!popup) {
            popup = document.createElement('div');
            popup.className = 'coming-soon-popup';
            popup.textContent = 'COMING SOON';
            document.body.appendChild(popup);
        }

        // Show popup
        popup.classList.add('show');

        // Hide popup after 2 seconds
        setTimeout(() => {
            popup.classList.remove('show');
        }, 2000);
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