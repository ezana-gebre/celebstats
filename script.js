// ===== Like Button Functionality =====
document.getElementById('likeButton').addEventListener('click', function() {
    const heartIcon = this.querySelector('.heart-icon');
    const isLiked = heartIcon.src.includes('liked.svg');
    
    // Toggle heart state
    heartIcon.src = isLiked 
        ? './images/unliked.svg' 
        : './images/liked.svg';
    
    // Add/remove animation class
    heartIcon.classList.toggle('liked', !isLiked);
});

// ===== Share Modal Functionality =====
const shareModal = document.getElementById('shareModal');
const shareButton = document.getElementById('shareButton');

// Open modal
shareButton.addEventListener('click', () => {
    shareModal.style.display = 'block';
});

// Close modal handlers
document.querySelector('.close-modal').addEventListener('click', () => {
    shareModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === shareModal) {
        shareModal.style.display = 'none';
    }
});

// ===== Existing Slider Functionality =====
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const indicatorsContainer = document.querySelector('.slider-indicators');

    // Add indicators
    slides.forEach((slide, index) => {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => {
            slider.scrollTo({
                left: slider.clientWidth * index,
                behavior: 'smooth'
            });
        });
        indicatorsContainer.appendChild(indicator);
    });

    // Update active indicator on scroll
    slider.addEventListener('scroll', () => {
        const scrollPosition = slider.scrollLeft;
        const activeIndex = Math.round(scrollPosition / slider.clientWidth);
        document.querySelectorAll('.indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === activeIndex);
        });
    });

    // Prevent vertical scroll on touch devices
    slider.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        const moveX = touch.clientX;
        const moveY = touch.clientY;
        const rect = slider.getBoundingClientRect();
        
        // Only allow horizontal movement
        if (Math.abs(moveX) > Math.abs(moveY)) {
            e.preventDefault();
        }
    }, { passive: false });
});

// ===== Copy Address Function =====
function copyText(element) {
    navigator.clipboard.writeText(element.innerText)
        .then(() => alert("Copied: " + element.innerText))
        .catch(err => console.error("Copy failed:", err));
}


// ===== Share Modal Functionality =====
const shareModal = document.getElementById('shareModal');
const shareButton = document.getElementById('shareButton');

// Open modal
shareButton.addEventListener('click', () => {
    shareModal.classList.remove('closing'); // Remove closing animation class
    shareModal.classList.add('active'); // Add active class to trigger fade-in
});

// Close modal handlers
document.querySelector('.close-modal').addEventListener('click', () => {
    shareModal.classList.remove('active'); // Remove active class
    shareModal.classList.add('closing'); // Add closing class to trigger fade-out

    // Wait for the animation to finish before hiding the modal
    setTimeout(() => {
        shareModal.classList.remove('closing');
    }, 300); // Match the duration of the fade-out animation
});

window.addEventListener('click', (e) => {
    if (e.target === shareModal) {
        shareModal.classList.remove('active'); // Remove active class
        shareModal.classList.add('closing'); // Add closing class to trigger fade-out

        // Wait for the animation to finish before hiding the modal
        setTimeout(() => {
            shareModal.classList.remove('closing');
        }, 300); // Match the duration of the fade-out animation
    }
});