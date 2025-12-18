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

// Show fallback image if video fails to load or play
const fallback = document.querySelector('.intro-logo-fallback');

if (introVideo && fallback) {
  // Hide fallback by default
  fallback.style.display = 'none';
  introVideo.style.display = 'block';

  // Helper to show fallback
  function showFallback() {
    introVideo.style.display = 'none';
    fallback.style.display = 'flex';
  }

  // Show fallback if video can't play
  introVideo.addEventListener('error', showFallback);
  introVideo.addEventListener('stalled', showFallback);

  // If video loads, ensure fallback is hidden
  introVideo.addEventListener('loadeddata', () => {
    introVideo.style.display = 'block';
    fallback.style.display = 'none';
  });

  // If video is not supported at all
  if (introVideo.readyState === 0) {
    showFallback();
  }
}

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
