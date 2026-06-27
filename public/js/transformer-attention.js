// public/js/transformer-attention.js
new p5(function(p) {
  let tokens = [];
  let numTokens = 12;
  let highlightedToken = -1;
  let animationPhase = 0;
  let lastPhaseChange = 0;

  p.setup = function() {
    const container = document.getElementById('transformer-attention');
    p.createCanvas(container.offsetWidth, 500);
    p.textFont('monospace');
    generateTokens();
  };

  p.draw = function() {
    p.background(250, 250, 252);
    
    // Title
    p.fill(60);
    p.textSize(14);
    p.textAlign(p.CENTER);
    p.noStroke();
    p.text("Transformer Self-Attention", p.width/2, 30);
    
    // Draw attention connections first (behind tokens)
    drawAttentionConnections();
    
    // Draw tokens
    drawTokens();
    
    // Draw info panel
    drawInfoPanel();
    
    // Auto-cycle through tokens for demonstration
    if (p.millis() - lastPhaseChange > 2000 && highlightedToken === -1) {
      animationPhase = (animationPhase + 1) % numTokens;
      lastPhaseChange = p.millis();
    }
  };

  function generateTokens() {
    tokens = [];
    const words = ["The", "model", "can", "attend", "to", "every", "single", "token", "in", "the", "context", "."];
    const centerY = 200;
    const startX = 60;
    const spacing = (p.width - 120) / (numTokens - 1);
    
    for (let i = 0; i < numTokens; i++) {
      tokens.push({
        x: startX + i * spacing,
        y: centerY,
        word: words[i] || `t${i}`,
        index: i
      });
    }
  }

  function drawTokens() {
    for (let i = 0; i < tokens.length; i++) {
      const t = tokens[i];
      const isHighlighted = (i === highlightedToken) || (highlightedToken === -1 && i === animationPhase);
      const isConnected = highlightedToken !== -1 || animationPhase >= 0;
      
      // Token circle
      p.strokeWeight(2);
      if (isHighlighted) {
        p.fill(245, 158, 11); // Orange for highlighted
        p.stroke(245, 158, 11);
      } else if (isConnected) {
        p.fill(255);
        p.stroke(245, 158, 11, 100);
      } else {
        p.fill(255);
        p.stroke(180);
      }
      p.ellipse(t.x, t.y, 40, 40);
      
      // Token text
      p.noStroke();
      p.textAlign(p.CENTER, p.CENTER);
      p.textSize(10);
      if (isHighlighted) {
        p.fill(255);
      } else {
        p.fill(60);
      }
      p.text(t.word, t.x, t.y);
      
      // Position indicator
      p.fill(150);
      p.textSize(9);
      p.text(i, t.x, t.y + 30);
    }
  }

  function drawAttentionConnections() {
    const activeToken = highlightedToken !== -1 ? highlightedToken : animationPhase;
    if (activeToken < 0) return;
    
    const source = tokens[activeToken];
    
    for (let i = 0; i < tokens.length; i++) {
      const target = tokens[i];
      
      // Calculate attention weight (simulated - closer tokens and start/end get more attention)
      let weight = calculateAttentionWeight(activeToken, i);
      
      // Draw curved attention line
      const controlY = source.y - 60 - Math.abs(activeToken - i) * 8;
      
      p.noFill();
      p.strokeWeight(weight * 4);
      p.stroke(245, 158, 11, weight * 200);
      
      p.beginShape();
      p.vertex(source.x, source.y - 20);
      p.quadraticVertex((source.x + target.x) / 2, controlY, target.x, target.y - 20);
      p.endShape();
      
      // Attention weight indicator
      if (weight > 0.3) {
        p.fill(245, 158, 11, 180);
        p.noStroke();
        p.textSize(8);
        p.text(weight.toFixed(2), (source.x + target.x) / 2, controlY + 10);
      }
    }
  }

  function calculateAttentionWeight(source, target) {
    if (source === target) return 1.0;
    
    const distance = Math.abs(source - target);
    let weight = 0.8 / (1 + distance * 0.3);
    
    if (target <= 1 || target >= numTokens - 2) {
      weight *= 1.4;
    } else if (target > 3 && target < numTokens - 3) {
      weight *= 0.7; // Middle tokens get less attention
    }
    
    return p.constrain(weight, 0.1, 1.0);
  }

  function drawInfoPanel() {
    const panelY = 320;
    
    p.fill(60);
    p.noStroke();
    p.textAlign(p.LEFT);
    p.textSize(12);
    
    p.text("Attention Computations per Layer:", 40, panelY);
    
    const examples = [
      { n: 12, label: "This example" },
      { n: 100, label: "100 tokens" },
      { n: 1000, label: "1K tokens" },
      { n: 10000, label: "10K tokens" }
    ];
    
    const barStartX = 40;
    const barY = panelY + 25;
    const maxBarWidth = p.width - 160;
    const maxVal = Math.log10(10000 * 10000);
    
    for (let i = 0; i < examples.length; i++) {
      const ex = examples[i];
      const computations = ex.n * ex.n;
      const barWidth = (Math.log10(computations) / maxVal) * maxBarWidth;
      const y = barY + i * 28;
      
      // Bar
      p.fill(16, 185, 129, 150 + i * 25);
      p.noStroke();
      p.rect(barStartX, y, barWidth, 18, 3);
      
      // Label
      p.fill(255);
      p.textSize(9);
      p.textAlign(p.LEFT, p.CENTER);
      p.text(ex.label, barStartX + 5, y + 9);
      
      // Value
      p.fill(60);
      p.textAlign(p.LEFT, p.CENTER);
      p.text(formatNumber(computations), barStartX + barWidth + 8, y + 9);
    }
    
    // Formula
    p.fill(100);
    p.textSize(11);
    p.textAlign(p.CENTER);
    p.text("O(n²) — computations grow quadratically with context length", p.width/2, panelY + 145);
    
    // Instruction
    p.fill(150);
    p.textSize(10);
    p.text("Hover over tokens to explore attention patterns", p.width/2, panelY + 165);
  }

  function formatNumber(n) {
    if (n >= 1000000000) return (n / 1000000000).toFixed(0) + "B";
    if (n >= 1000000) return (n / 1000000).toFixed(0) + "M";
    if (n >= 1000) return (n / 1000).toFixed(0) + "K";
    return n.toString();
  }

  p.mouseMoved = function() {
    highlightedToken = -1;
    for (let i = 0; i < tokens.length; i++) {
      const t = tokens[i];
      if (p.dist(p.mouseX, p.mouseY, t.x, t.y) < 25) {
        highlightedToken = i;
        break;
      }
    }
  };

  p.windowResized = function() {
    const container = document.getElementById('transformer-attention');
    if (container) {
      p.resizeCanvas(container.offsetWidth, 500);
      generateTokens();
    }
  };
}, 'transformer-attention');
