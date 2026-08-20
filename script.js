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

// ========== FIREWORKS ANIMATION ==========
document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('fireworksCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  
  // Set canvas size to match container
  function resizeCanvas() {
    const container = canvas.parentElement;
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  // ===== FIREWORK PARTICLE CLASS =====
  class Particle {
    constructor(x, y, color) {
      this.x = x;
      this.y = y;
      this.color = color;
      this.size = Math.random() * 3 + 1;
      this.speedX = (Math.random() - 0.5) * 8;
      this.speedY = (Math.random() - 0.5) * 8;
      this.life = 1;
      this.decay = Math.random() * 0.02 + 0.01;
      this.gravity = 0.05;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      this.speedY += this.gravity;
      this.life -= this.decay;
      this.size *= 0.99;
    }

    draw() {
      ctx.save();
      ctx.globalAlpha = this.life;
      ctx.fillStyle = this.color;
      ctx.shadowBlur = 10;
      ctx.shadowColor = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // ===== FIREWORK BURST =====
  let particles = [];

  function createFirework() {
    const x = Math.random() * canvas.width * 0.8 + canvas.width * 0.1;
    const y = Math.random() * canvas.height * 0.6 + canvas.height * 0.1;
    const colors = ['#f5a623', '#ff6b6b', '#4ecdc4', '#45b7d1', '#ff9ff3', '#feca57', '#ff6348'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const count = Math.floor(Math.random() * 60) + 40;

    for (let i = 0; i < count; i++) {
      particles.push(new Particle(x, y, color));
    }
  }

  // ===== ANIMATION LOOP =====
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update and draw particles
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].draw();
      if (particles[i].life <= 0 || particles[i].size <= 0.1) {
        particles.splice(i, 1);
      }
    }

    // Create new fireworks randomly
    if (Math.random() < 0.03) {
      createFirework();
    }

    requestAnimationFrame(animate);
  }

  animate();

  // Create initial burst on load
  setTimeout(() => {
    for (let i = 0; i < 5; i++) {
      setTimeout(createFirework, i * 300);
    }
  }, 500);

  // Recreate fireworks on resize
  window.addEventListener('resize', () => {
    resizeCanvas();
  });
});