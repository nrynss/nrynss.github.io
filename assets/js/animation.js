document.addEventListener('DOMContentLoaded', function () {
  // Create canvas element
  const canvas = document.createElement('canvas');
  canvas.id = 'background-canvas';

  Object.assign(canvas.style, {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: -1,
    pointerEvents: 'none'
  });

  document.body.insertBefore(canvas, document.body.firstChild);

  const ctx = canvas.getContext('2d');
  let stars = [];
  let nebulae = [];
  let comets = [];
  let trinarySystems = [];

  // Color palettes for space objects
  const starColors = [
    { r: 255, g: 255, b: 255 },  // White
    { r: 255, g: 200, b: 150 },  // Warm yellow
    { r: 150, g: 200, b: 255 },  // Cool blue
    { r: 255, g: 180, b: 180 },  // Red giant
    { r: 200, g: 255, b: 220 },  // Green tint
  ];

  const nebulaColors = [
    { r: 138, g: 43, b: 226 },   // Purple
    { r: 255, g: 20, b: 147 },   // Pink
    { r: 0, g: 191, b: 255 },    // Deep sky blue
    { r: 255, g: 140, b: 0 },    // Orange
    { r: 0, g: 255, b: 127 },    // Spring green
    { r: 255, g: 69, b: 0 },     // Red-orange
  ];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas(); // Initial size

  // Twinkling Star class
  class Star {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 1.5 + 0.3;
      this.color = starColors[Math.floor(Math.random() * starColors.length)];
      this.twinkleSpeed = Math.random() * 0.03 + 0.01;
      this.twinklePhase = Math.random() * Math.PI * 2;
      this.baseOpacity = Math.random() * 0.4 + 0.2;
    }

    update() {
      this.twinklePhase += this.twinkleSpeed;
    }

    draw() {
      const twinkle = Math.sin(this.twinklePhase) * 0.3 + 0.7;
      const opacity = this.baseOpacity * twinkle;

      // Draw glow
      const gradient = ctx.createRadialGradient(
        this.x, this.y, 0,
        this.x, this.y, this.size * 3
      );
      gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${opacity})`);
      gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
      ctx.fill();

      // Draw core
      ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Nebula cloud class
  class Nebula {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.radius = Math.random() * 200 + 100;
      this.color = nebulaColors[Math.floor(Math.random() * nebulaColors.length)];
      this.opacity = Math.random() * 0.04 + 0.02;
      this.driftX = (Math.random() - 0.5) * 0.1;
      this.driftY = (Math.random() - 0.5) * 0.1;
      this.pulsePhase = Math.random() * Math.PI * 2;
      this.pulseSpeed = Math.random() * 0.005 + 0.002;
    }

    update() {
      this.x += this.driftX;
      this.y += this.driftY;
      this.pulsePhase += this.pulseSpeed;

      // Wrap around
      if (this.x < -this.radius) this.x = canvas.width + this.radius;
      if (this.x > canvas.width + this.radius) this.x = -this.radius;
      if (this.y < -this.radius) this.y = canvas.height + this.radius;
      if (this.y > canvas.height + this.radius) this.y = -this.radius;
    }

    draw() {
      const pulse = Math.sin(this.pulsePhase) * 0.2 + 0.8;
      const currentOpacity = this.opacity * pulse;

      // Multiple layered gradients for cloud effect
      for (let i = 0; i < 3; i++) {
        const offsetX = Math.sin(this.pulsePhase + i) * 20;
        const offsetY = Math.cos(this.pulsePhase + i * 0.7) * 20;
        const layerRadius = this.radius * (1 - i * 0.2);

        const gradient = ctx.createRadialGradient(
          this.x + offsetX, this.y + offsetY, 0,
          this.x + offsetX, this.y + offsetY, layerRadius
        );
        gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${currentOpacity})`);
        gradient.addColorStop(0.5, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${currentOpacity * 0.5})`);
        gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(this.x + offsetX, this.y + offsetY, layerRadius, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  // Comet class
  class Comet {
    constructor() {
      this.reset();
    }

    reset() {
      // Start from random edge
      const edge = Math.floor(Math.random() * 4);
      switch (edge) {
        case 0: // Top
          this.x = Math.random() * canvas.width;
          this.y = -20;
          break;
        case 1: // Right
          this.x = canvas.width + 20;
          this.y = Math.random() * canvas.height;
          break;
        case 2: // Bottom
          this.x = Math.random() * canvas.width;
          this.y = canvas.height + 20;
          break;
        case 3: // Left
          this.x = -20;
          this.y = Math.random() * canvas.height;
          break;
      }

      // Direction toward center with some randomness
      const centerX = canvas.width / 2 + (Math.random() - 0.5) * canvas.width;
      const centerY = canvas.height / 2 + (Math.random() - 0.5) * canvas.height;
      const angle = Math.atan2(centerY - this.y, centerX - this.x);

      this.speed = Math.random() * 2 + 1;
      this.speedX = Math.cos(angle) * this.speed;
      this.speedY = Math.sin(angle) * this.speed;
      this.size = Math.random() * 2 + 1;
      this.tailLength = Math.random() * 60 + 40;
      this.opacity = Math.random() * 0.4 + 0.3;
      this.active = true;
      this.delay = Math.random() * 500; // Random delay before appearing

      // Comet colors - icy blues and whites
      this.coreColor = { r: 200, g: 240, b: 255 };
      this.tailColor = { r: 100, g: 180, b: 255 };
    }

    update() {
      if (this.delay > 0) {
        this.delay--;
        return;
      }

      this.x += this.speedX;
      this.y += this.speedY;

      // Reset if off screen
      if (this.x < -100 || this.x > canvas.width + 100 ||
        this.y < -100 || this.y > canvas.height + 100) {
        this.reset();
      }
    }

    draw() {
      if (this.delay > 0) return;

      // Draw tail
      const tailAngle = Math.atan2(-this.speedY, -this.speedX);
      const tailEndX = this.x + Math.cos(tailAngle) * this.tailLength;
      const tailEndY = this.y + Math.sin(tailAngle) * this.tailLength;

      const gradient = ctx.createLinearGradient(this.x, this.y, tailEndX, tailEndY);
      gradient.addColorStop(0, `rgba(${this.coreColor.r}, ${this.coreColor.g}, ${this.coreColor.b}, ${this.opacity})`);
      gradient.addColorStop(0.3, `rgba(${this.tailColor.r}, ${this.tailColor.g}, ${this.tailColor.b}, ${this.opacity * 0.5})`);
      gradient.addColorStop(1, `rgba(${this.tailColor.r}, ${this.tailColor.g}, ${this.tailColor.b}, 0)`);

      ctx.strokeStyle = gradient;
      ctx.lineWidth = this.size;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(this.x, this.y);
      ctx.lineTo(tailEndX, tailEndY);
      ctx.stroke();

      // Draw comet head glow
      const headGlow = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 4);
      headGlow.addColorStop(0, `rgba(${this.coreColor.r}, ${this.coreColor.g}, ${this.coreColor.b}, ${this.opacity})`);
      headGlow.addColorStop(1, `rgba(${this.coreColor.r}, ${this.coreColor.g}, ${this.coreColor.b}, 0)`);

      ctx.fillStyle = headGlow;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2);
      ctx.fill();

      // Draw bright core
      ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Trinary Star System class
  class TrinarySystem {
    constructor() {
      this.centerX = Math.random() * canvas.width;
      this.centerY = Math.random() * canvas.height;
      this.orbitRadius = Math.random() * 15 + 10;
      this.rotationSpeed = (Math.random() * 0.01 + 0.005) * (Math.random() < 0.5 ? 1 : -1);
      this.angle = Math.random() * Math.PI * 2;
      this.opacity = Math.random() * 0.5 + 0.3;

      // Three different colored stars
      this.stars = [
        { color: { r: 255, g: 200, b: 100 }, size: Math.random() * 2 + 1.5, angleOffset: 0 },
        { color: { r: 150, g: 200, b: 255 }, size: Math.random() * 1.5 + 1, angleOffset: Math.PI * 2 / 3 },
        { color: { r: 255, g: 150, b: 150 }, size: Math.random() * 1.5 + 1, angleOffset: Math.PI * 4 / 3 },
      ];

      // Slow drift
      this.driftX = (Math.random() - 0.5) * 0.05;
      this.driftY = (Math.random() - 0.5) * 0.05;
    }

    update() {
      this.angle += this.rotationSpeed;
      this.centerX += this.driftX;
      this.centerY += this.driftY;

      // Wrap around
      if (this.centerX < -50) this.centerX = canvas.width + 50;
      if (this.centerX > canvas.width + 50) this.centerX = -50;
      if (this.centerY < -50) this.centerY = canvas.height + 50;
      if (this.centerY > canvas.height + 50) this.centerY = -50;
    }

    draw() {
      // Draw orbital paths (very faint)
      ctx.strokeStyle = `rgba(255, 255, 255, 0.05)`;
      ctx.lineWidth = 0.5;
      ctx.beginPath();
      ctx.arc(this.centerX, this.centerY, this.orbitRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Draw each star
      for (const star of this.stars) {
        const starX = this.centerX + Math.cos(this.angle + star.angleOffset) * this.orbitRadius;
        const starY = this.centerY + Math.sin(this.angle + star.angleOffset) * this.orbitRadius;

        // Glow
        const glow = ctx.createRadialGradient(starX, starY, 0, starX, starY, star.size * 4);
        glow.addColorStop(0, `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${this.opacity})`);
        glow.addColorStop(1, `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, 0)`);

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(starX, starY, star.size * 4, 0, Math.PI * 2);
        ctx.fill();

        // Core
        ctx.fillStyle = `rgba(${star.color.r}, ${star.color.g}, ${star.color.b}, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(starX, starY, star.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Draw gravitational interaction lines between stars (very subtle)
      ctx.strokeStyle = `rgba(255, 255, 255, 0.03)`;
      ctx.lineWidth = 0.5;
      for (let i = 0; i < this.stars.length; i++) {
        for (let j = i + 1; j < this.stars.length; j++) {
          const x1 = this.centerX + Math.cos(this.angle + this.stars[i].angleOffset) * this.orbitRadius;
          const y1 = this.centerY + Math.sin(this.angle + this.stars[i].angleOffset) * this.orbitRadius;
          const x2 = this.centerX + Math.cos(this.angle + this.stars[j].angleOffset) * this.orbitRadius;
          const y2 = this.centerY + Math.sin(this.angle + this.stars[j].angleOffset) * this.orbitRadius;

          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      }
    }
  }

  function init() {
    stars = [];
    nebulae = [];
    comets = [];
    trinarySystems = [];

    // Create stars (more than before for depth)
    const starCount = Math.floor((canvas.width * canvas.height) / 15000);
    for (let i = 0; i < starCount; i++) {
      stars.push(new Star());
    }

    // Create nebulae (subtle background clouds)
    const nebulaCount = Math.floor((canvas.width * canvas.height) / 200000) + 2;
    for (let i = 0; i < nebulaCount; i++) {
      nebulae.push(new Nebula());
    }

    // Create comets (occasional shooting stars)
    const cometCount = 3;
    for (let i = 0; i < cometCount; i++) {
      comets.push(new Comet());
    }

    // Create trinary systems
    const trinaryCount = Math.floor((canvas.width * canvas.height) / 300000) + 1;
    for (let i = 0; i < trinaryCount; i++) {
      trinarySystems.push(new TrinarySystem());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw nebulae first (background layer)
    for (const nebula of nebulae) {
      nebula.update();
      nebula.draw();
    }

    // Draw stars
    for (const star of stars) {
      star.update();
      star.draw();
    }

    // Draw trinary systems
    for (const system of trinarySystems) {
      system.update();
      system.draw();
    }

    // Draw comets on top
    for (const comet of comets) {
      comet.update();
      comet.draw();
    }

    requestAnimationFrame(animate);
  }

  init();
  animate();

  // Reinitialize on resize
  window.addEventListener('resize', () => {
    resizeCanvas();
    init();
  });
});