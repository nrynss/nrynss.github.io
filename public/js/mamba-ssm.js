// public/js/mamba-ssm.js
new p5(function(p) {
  let tokens = [];
  let numTokens = 12;
  let currentTokenIndex = 0;
  let hiddenState = [];
  let stateSize = 4;
  let progress = 0;
  let isProcessing = true;
  let lastTokenTime = 0;
  let tokenDelay = 1500;

  p.setup = function() {
    const container = document.getElementById('mamba-ssm');
    p.createCanvas(container.offsetWidth, 520);
    p.textFont('monospace');
    generateTokens();
    initializeHiddenState();
  };

  p.draw = function() {
    p.background(250, 250, 252);
    
    // Title
    p.fill(60);
    p.textSize(14);
    p.textAlign(p.CENTER);
    p.noStroke();
    p.text("Mamba: State Space Model", p.width/2, 30);
    
    drawHiddenState();
    drawTokenSequence();
    drawProcessingAnimation();
    drawInfoPanel();
    drawComparison();
    
    // Animate token processing
    if (isProcessing && p.millis() - lastTokenTime > tokenDelay) {
      advanceToken();
      lastTokenTime = p.millis();
    }
  };

  function generateTokens() {
    tokens = [];
    const words = ["The", "cat", "sat", "on", "the", "mat", "and", "then", "it", "jumped", "away", "."];
    const startX = 60;
    const tokenY = 380;
    const spacing = (p.width - 120) / (numTokens - 1);
    
    for (let i = 0; i < numTokens; i++) {
      tokens.push({
        x: startX + i * spacing,
        y: tokenY,
        word: words[i] || `t${i}`,
        index: i,
        processed: false,
        importance: Math.random() * 0.5 + 0.3
      });
    }
  }

  function initializeHiddenState() {
    hiddenState = [];
    for (let i = 0; i < stateSize; i++) {
      hiddenState.push({
        value: 0,
        label: ["Recent", "Subject", "Action", "Context"][i],
        contributions: []
      });
    }
  }

  function drawHiddenState() {
    const centerX = p.width / 2;
    const stateY = 140;
    const stateWidth = 280;
    const stateHeight = 100;
    
    p.strokeWeight(2);
    p.stroke(16, 185, 129);
    p.fill(236, 253, 245);
    p.rect(centerX - stateWidth/2, stateY - stateHeight/2, stateWidth, stateHeight, 12);
    
    p.noStroke();
    p.fill(16, 185, 129);
    p.textSize(11);
    p.textAlign(p.CENTER);
    p.text("Hidden State (Fixed Size)", centerX, stateY - stateHeight/2 - 10);
    
    const slotWidth = 55;
    const slotSpacing = 62;
    const startSlotX = centerX - (stateSize - 1) * slotSpacing / 2;
    
    for (let i = 0; i < stateSize; i++) {
      const x = startSlotX + i * slotSpacing;
      const state = hiddenState[i];
      
      const intensity = p.map(state.value, 0, 1, 50, 200);
      p.fill(16, 185, 129, intensity);
      p.noStroke();
      p.rect(x - slotWidth/2, stateY - 25, slotWidth, 50, 6);
      
      p.strokeWeight(2);
      p.stroke(16, 185, 129);
      p.noFill();
      p.rect(x - slotWidth/2, stateY - 25, slotWidth, 50, 6);
      
      p.noStroke();
      p.fill(state.value > 0.5 ? 255 : 60);
      p.textSize(12);
      p.textAlign(p.CENTER, p.CENTER);
      p.text(state.value.toFixed(2), x, stateY - 5);
      
      p.fill(100);
      p.textSize(8);
      p.text(state.label, x, stateY + 18);
    }
    
    p.fill(120);
    p.textSize(10);
    p.text("← Compressed summary that evolves sequentially →", centerX, stateY + stateHeight/2 + 15);
  }

  function drawTokenSequence() {
    p.stroke(200);
    p.strokeWeight(2);
    p.line(40, tokens[0].y, p.width - 40, tokens[0].y);
    
    const arrowX = p.width - 50;
    p.fill(200);
    p.noStroke();
    p.triangle(arrowX, tokens[0].y, arrowX - 10, tokens[0].y - 6, arrowX - 10, tokens[0].y + 6);
    
    for (let i = 0; i < tokens.length; i++) {
      const t = tokens[i];
      const isCurrent = i === currentTokenIndex;
      const isProcessed = t.processed;
      
      p.strokeWeight(2);
      
      if (isCurrent) {
        p.fill(245, 158, 11);
        p.stroke(245, 158, 11);
        const pulse = p.sin(p.millis() * 0.005) * 5 + 5;
        p.strokeWeight(pulse);
      } else if (isProcessed) {
        p.fill(200);
        p.stroke(180);
      } else {
        p.fill(255);
        p.stroke(150);
      }
      
      p.ellipse(t.x, t.y, 38, 38);
      
      p.noStroke();
      p.textAlign(p.CENTER, p.CENTER);
      p.textSize(9);
      p.fill(isCurrent ? 255 : (isProcessed ? 150 : 60));
      p.text(t.word, t.x, t.y);
      
      p.fill(150);
      p.textSize(8);
      p.text(i, t.x, t.y + 28);
    }
    
    p.fill(100);
    p.textSize(10);
    p.textAlign(p.CENTER);
    p.text("Token Sequence (processed left to right)", p.width/2, tokens[0].y + 50);
  }

  function drawProcessingAnimation() {
    if (currentTokenIndex >= tokens.length) return;
    
    const token = tokens[currentTokenIndex];
    const stateY = 140;
    const centerX = p.width / 2;
    
    p.stroke(245, 158, 11);
    p.strokeWeight(2);
    
    const startY = token.y - 25;
    const endY = stateY + 60;
    const midY = (startY + endY) / 2;
    
    p.noFill();
    p.beginShape();
    p.vertex(token.x, startY);
    p.quadraticVertex(token.x, midY, centerX, endY);
    p.endShape();
    
    p.fill(245, 158, 11);
    p.noStroke();
    p.triangle(centerX, endY, centerX - 6, endY + 10, centerX + 6, endY + 10);
    
    p.textSize(9);
    p.textAlign(p.CENTER);
    p.text("update", token.x + 30, midY);
  }

  function advanceToken() {
    if (currentTokenIndex < tokens.length) {
      tokens[currentTokenIndex].processed = true;
      const importance = tokens[currentTokenIndex].importance;
      
      hiddenState[0].value = 0.8 + Math.random() * 0.2;
      
      for (let i = 1; i < stateSize; i++) {
        hiddenState[i].value *= 0.85;
        if (Math.random() < importance) {
          hiddenState[i].value = p.min(1, hiddenState[i].value + importance * 0.5);
        }
      }
      
      currentTokenIndex++;
      
      if (currentTokenIndex >= tokens.length) {
        setTimeout(() => {
          currentTokenIndex = 0;
          generateTokens();
          initializeHiddenState();
        }, 2000);
      }
    }
  }

  function drawInfoPanel() {
    const panelX = 40;
    const panelY = 55;
    
    p.fill(60);
    p.noStroke();
    p.textAlign(p.LEFT);
    p.textSize(11);
    
    p.fill(16, 185, 129);
    p.text("● O(n) — Linear scaling", panelX, panelY);
    
    p.fill(100);
    p.textSize(10);
    p.text("Each token updates a fixed-size state", panelX, panelY + 16);
    p.text("No attention matrix needed", panelX, panelY + 30);
  }

  function drawComparison() {
    const compY = 445;
    
    p.fill(60);
    p.textSize(11);
    p.textAlign(p.CENTER);
    p.text("Memory Comparison at 10K tokens:", p.width/2, compY);
    
    const barY = compY + 18;
    const maxBarWidth = p.width - 200;
    
    p.fill(79, 70, 229, 180);
    p.noStroke();
    p.rect(100, barY, maxBarWidth, 16, 3);
    p.fill(255);
    p.textSize(9);
    p.textAlign(p.LEFT, p.CENTER);
    p.text("Transformer: O(n²) = 100M attention pairs", 108, barY + 8);
    
    const mambaWidth = maxBarWidth * 0.08;
    p.fill(16, 185, 129, 200);
    p.rect(100, barY + 24, mambaWidth, 16, 3);
    p.fill(255);
    p.text("Mamba: O(n)", 108, barY + 32);
    
    p.fill(120);
    p.textSize(9);
    p.textAlign(p.CENTER);
    p.text("⚠ Tradeoff: Early context may be lost if not stored in hidden state", p.width/2, barY + 56);
  }

  p.mousePressed = function() {
    if (p.mouseY > 300 && p.mouseY < 420) {
      advanceToken();
      lastTokenTime = p.millis();
    }
  };

  p.windowResized = function() {
    const container = document.getElementById('mamba-ssm');
    if (container) {
      p.resizeCanvas(container.offsetWidth, 520);
      generateTokens();
    }
  };
}, 'mamba-ssm');
