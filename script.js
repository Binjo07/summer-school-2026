document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      toggleBtn.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });
  }

  const exploreBtn = document.getElementById('exploreBtn');
  if (exploreBtn) {
    exploreBtn.addEventListener('click', () => {
      const programmeSection = document.getElementById('programmes');
      if (programmeSection) {
        programmeSection.scrollIntoView({ behavior: 'smooth' });
      }
      alert('🚀 Let\'s explore what you\'ll build! Scroll down to see the courses.');
    });
  }

  console.log('✅ Talent Discovery Schools website loaded successfully!');
  console.log('🔍 Tip: Check for any errors in the console – that\'s debugging!');

  // Helper: log if any gallery image fails to load
  document.querySelectorAll('.gallery-grid img').forEach((img) => {
    img.addEventListener('error', () => {
      console.warn(`⚠️ Image not loaded: ${img.src}. Replace with your own photos.`);
    });
  });
});