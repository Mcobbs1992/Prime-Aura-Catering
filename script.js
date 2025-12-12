// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href').substring(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Animated intro overlay logic
const introOverlay = document.getElementById('intro-overlay');
const introVideo = document.getElementById('intro-video');

// Hide overlay after video ends
if (introVideo) {
  introVideo.addEventListener('ended', () => {
    introOverlay.classList.add('hidden');
  });

  // Fallback timeout: hide overlay after 6 seconds in case video doesn't fire "ended"
  setTimeout(() => {
    introOverlay.classList.add('hidden');
  }, 6000);
} else if (introOverlay) {
  // If no video, just remove overlay quickly
  setTimeout(() => {
    introOverlay.classList.add('hidden');
  }, 1500);
}

// Footer year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
