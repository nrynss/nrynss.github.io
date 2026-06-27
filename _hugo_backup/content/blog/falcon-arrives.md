---
title: "Falcon starts to soar"
date: 2026-02-09T00:30:45+05:30
showComments : true
---

When ChatGPT made their big launch, I was blindsided by the AI advances. Till then, I considered machine learning to be something esoteric. Not niche. But something that was going to be a middleware rather than a product in itself. People started to use the OpenAI API to build stuff. I was extremely concerned with the privacy aspect with respect to the source code and internal processes. Years later, things have settled down and data protection rules are in place. AI rules over internal processes and documentation (see Glean) and source code (see Cursor). Back then, I had a few vague ideas but didn't trust the cloud models. I went on HuggingFace for the first time and saw there were local models. I was surprised to see [Falcon](https://huggingface.co/tiiuae/falcon-180B-chat) and even more surprised that it was from a university in Abu Dhabi. Not a place you would associate with cutting edge artificial intelligence research. Plans never materialized because I quickly realized that the 180B was not something that you can actually run.

Falcon made its appearance in my radar a couple of times. But it was not something that really caught my attention aside from an academic interest around a new model.

## Transformer Architecture

Almost all LLMs that you encounter in the wild are based on the Transformer architecture. The transformer architecture ensures that the model can theoretically attend to every single token. If there is a large amount of information present in the context, the model will always be able to access it—though in practice, models often struggle with information in the middle of long contexts compared to the beginning or end. If there are 1000 tokens, the model can attend to every single token regardless of its position. All the tokens in the context and their relationships are available to the model. After all, attention is all you need!

This doesn't mean that the model can handle infinite tokens. The context window of the model comes into picture here. You need to store not just the tokens, their relationships too. For 1,000 tokens, you need around 1,000,000 attention computations per layer. Even though the number of tokens fit, the quadratic growth in both compute and memory makes the process slower and slower. This is one reason why you run out of context when in a long conversation with a model. Cursor and Claude Code generally do a compaction of the context (even before they run out of context), but that is still something that is specific to the implementation and not perfectly lossless.

The following graphic shows how attention works in a Transformer model. You can see how the context window grows quadratically with the number of tokens. New feature in the blog, brought to you by [p5.js](https://p5js.org/)!

{{< p5 id="transformer-attention" height="500px" >}}
let tokens = [];
let numTokens = 12;
let attentionLines = [];
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
  // Simulate attention patterns: 
  // - Self-attention (same position) is strong
  // - Beginning and end tokens get more attention ("lost in the middle")
  // - Adjacent tokens have moderate attention
  
  if (source === target) return 1.0;
  
  const distance = Math.abs(source - target);
  let weight = 0.8 / (1 + distance * 0.3);
  
  // "Lost in the middle" effect - boost attention to start and end
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
  
  // Quadratic scaling visualization
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
  const maxVal = Math.log10(10000 * 10000); // log scale
  
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
  p.resizeCanvas(container.offsetWidth, 500);
  generateTokens();
};
{{< /p5 >}}

## Mamba Architecture

Enter [Mamba](https://github.com/state-spaces/mamba). Mamba was created by Albert Gu and Tri Dao. Mamba is a different architecture that addresses the issue of quadratic growth in both compute and memory. Mamba is a state space model (SSM) architecture that addresses the quadratic attention problem. Instead of computing relationships between all token pairs, Mamba maintains a fixed-size hidden state that gets updated as each token is processed. It is like a compressed summary that evolves sequentially, rather than a full attention matrix. Theoretically, this should allow Mamba to handle infinite tokens. But the issue here is that it will not practically be able to resolve something that happened in the initial stages of the context and the current token, if the model didn't deem it worthy enough to be stored in the hidden state.

To make it more concrete, think of it like reading a chapter of a book for an exam. You decide to be nefarious and cheat. You create a single sticky note with a pencil to smuggle into the exam hall. The note is tiny. Easily fits in your little pencil box. You erase and update the note as you go through the chapter. After all, you have all the important details! It can work very well and save your sorry ass. But sometimes, you get several questions from the initial portions of the chapter. Lo and behold you're screwed. You have no idea what the answers to several questions because you erased most of that stuff.

{{< p5 id="mamba-ssm" height="520px" >}}
let tokens = [];
let numTokens = 12;
let currentTokenIndex = 0;
let hiddenState = [];
let stateSize = 4;
let animationSpeed = 0.02;
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
      importance: Math.random() * 0.5 + 0.3 // Simulated importance
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
  
  // Hidden state container
  p.strokeWeight(2);
  p.stroke(16, 185, 129); // Emerald
  p.fill(236, 253, 245);
  p.rect(centerX - stateWidth/2, stateY - stateHeight/2, stateWidth, stateHeight, 12);
  
  // Label
  p.noStroke();
  p.fill(16, 185, 129);
  p.textSize(11);
  p.textAlign(p.CENTER);
  p.text("Hidden State (Fixed Size)", centerX, stateY - stateHeight/2 - 10);
  
  // State slots
  const slotWidth = 55;
  const slotSpacing = 62;
  const startSlotX = centerX - (stateSize - 1) * slotSpacing / 2;
  
  for (let i = 0; i < stateSize; i++) {
    const x = startSlotX + i * slotSpacing;
    const state = hiddenState[i];
    
    // Slot background - intensity based on value
    const intensity = p.map(state.value, 0, 1, 50, 200);
    p.fill(16, 185, 129, intensity);
    p.noStroke();
    p.rect(x - slotWidth/2, stateY - 25, slotWidth, 50, 6);
    
    // Slot border
    p.strokeWeight(2);
    p.stroke(16, 185, 129);
    p.noFill();
    p.rect(x - slotWidth/2, stateY - 25, slotWidth, 50, 6);
    
    // Value
    p.noStroke();
    p.fill(state.value > 0.5 ? 255 : 60);
    p.textSize(12);
    p.textAlign(p.CENTER, p.CENTER);
    p.text(state.value.toFixed(2), x, stateY - 5);
    
    // Label
    p.fill(100);
    p.textSize(8);
    p.text(state.label, x, stateY + 18);
  }
  
  // "Compressed summary" annotation
  p.fill(120);
  p.textSize(10);
  p.text("← Compressed summary that evolves sequentially →", centerX, stateY + stateHeight/2 + 15);
}

function drawTokenSequence() {
  // Sequence line
  p.stroke(200);
  p.strokeWeight(2);
  p.line(40, tokens[0].y, p.width - 40, tokens[0].y);
  
  // Arrow showing direction
  const arrowX = p.width - 50;
  p.fill(200);
  p.noStroke();
  p.triangle(arrowX, tokens[0].y, arrowX - 10, tokens[0].y - 6, arrowX - 10, tokens[0].y + 6);
  
  // Tokens
  for (let i = 0; i < tokens.length; i++) {
    const t = tokens[i];
    const isCurrent = i === currentTokenIndex;
    const isProcessed = t.processed;
    
    p.strokeWeight(2);
    
    if (isCurrent) {
      // Current token being processed
      p.fill(245, 158, 11); // Amber
      p.stroke(245, 158, 11);
      
      // Pulse effect
      const pulse = p.sin(p.millis() * 0.005) * 5 + 5;
      p.strokeWeight(pulse);
    } else if (isProcessed) {
      // Already processed - faded
      p.fill(200);
      p.stroke(180);
    } else {
      // Not yet processed
      p.fill(255);
      p.stroke(150);
    }
    
    p.ellipse(t.x, t.y, 38, 38);
    
    // Token text
    p.noStroke();
    p.textAlign(p.CENTER, p.CENTER);
    p.textSize(9);
    p.fill(isCurrent ? 255 : (isProcessed ? 150 : 60));
    p.text(t.word, t.x, t.y);
    
    // Position
    p.fill(150);
    p.textSize(8);
    p.text(i, t.x, t.y + 28);
  }
  
  // Label
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
  
  // Arrow from current token to hidden state
  p.stroke(245, 158, 11);
  p.strokeWeight(2);
  
  // Curved arrow
  const startY = token.y - 25;
  const endY = stateY + 60;
  const midY = (startY + endY) / 2;
  
  p.noFill();
  p.beginShape();
  p.vertex(token.x, startY);
  p.quadraticVertex(token.x, midY, centerX, endY);
  p.endShape();
  
  // Arrow head
  p.fill(245, 158, 11);
  p.noStroke();
  p.triangle(centerX, endY, centerX - 6, endY + 10, centerX + 6, endY + 10);
  
  // "Update" label
  p.textSize(9);
  p.textAlign(p.CENTER);
  p.text("update", token.x + 30, midY);
}

function advanceToken() {
  if (currentTokenIndex < tokens.length) {
    // Mark current token as processed
    tokens[currentTokenIndex].processed = true;
    
    // Update hidden state based on token "importance"
    const importance = tokens[currentTokenIndex].importance;
    
    // Simulate selective state update
    // Recent always updates
    hiddenState[0].value = 0.8 + Math.random() * 0.2;
    
    // Other slots update based on content (simulated)
    for (let i = 1; i < stateSize; i++) {
      // Decay existing values slightly
      hiddenState[i].value *= 0.85;
      
      // Sometimes update based on importance
      if (Math.random() < importance) {
        hiddenState[i].value = p.min(1, hiddenState[i].value + importance * 0.5);
      }
    }
    
    currentTokenIndex++;
    
    // Loop animation
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
  
  // Transformer bar (quadratic)
  p.fill(79, 70, 229, 180);
  p.noStroke();
  p.rect(100, barY, maxBarWidth, 16, 3);
  p.fill(255);
  p.textSize(9);
  p.textAlign(p.LEFT, p.CENTER);
  p.text("Transformer: O(n²) = 100M attention pairs", 108, barY + 8);
  
  // Mamba bar (linear)
  const mambaWidth = maxBarWidth * 0.08; // Much smaller
  p.fill(16, 185, 129, 200);
  p.rect(100, barY + 24, mambaWidth, 16, 3);
  p.fill(255);
  p.text("Mamba: O(n)", 108, barY + 32);
  
  // Tradeoff note
  p.fill(120);
  p.textSize(9);
  p.textAlign(p.CENTER);
  p.text("⚠ Tradeoff: Early context may be lost if not stored in hidden state", p.width/2, barY + 56);
}

p.mousePressed = function() {
  // Click to manually advance
  if (p.mouseY > 300 && p.mouseY < 420) {
    advanceToken();
    lastTokenTime = p.millis();
  }
};

p.windowResized = function() {
  const container = document.getElementById('mamba-ssm');
  p.resizeCanvas(container.offsetWidth, 520);
  generateTokens();
};
{{< /p5 >}}

Mamba models are still quite experimental in nature. There are a few Mamba models available, but most are kind of academic in nature. 

## Hybrid Models and Jamba

To overcome the limitations of Mamba, researchers have developed hybrid models that combine Mamba with Transformer to get the best of both worlds. 

The biggest player here is [Jamba](https://www.ai21.com/jamba/) from AI21 Labs. I have not used their models, nor have I encountered anyone using them in the wild. They have very detailed documentation on their models and services. I took a spin on their playground and their focus seems to be building agents around models. I found it a little ironic that they chose GPT 4o as the default choice in their agent setup instead of their own model. But they must be doing very well. After all, nVidia wanted to put in 300 million dollars in the company and is now [exploring buying them](https://www.calcalistech.com/ctechnews/article/h1e8rttn11x#:~:text=AI21%20never%20closed%20its%20reported,the%20rise%20of%20hybrid%20organizations) for 3 billion dollars! They are based in Israel, and after all Israel punches way above their weight when it comes to cutting edge technology and engineering.

## Back to Falcon

But the biggest surprise to me was Falcon. UAE is known for the port business and financial services, aside from their oil and gas exploration. You would not associate AI or something similar with them. But they have been investing heavily into AI and now it seems their efforts are paying off!

The previous release of Falcon from TII is a full transformer model. The new Falcon series seems to have evolved and is now a hybrid model. [Falcon-H1 7B](https://huggingface.co/tiiuae/Falcon-H1R-7B) is a nice small size LLM. They have an attention layer interleaved with the mamba layers.

The following results show the speed in comparison with Qwen 3.0 8B using llama-bench. My system has an RTX 4070 Super with 12GB RAM. The llama.cpp binaries were compiled on my system with CUDA 13. Not the latest, but from around a month back or so when I started writing this article.

| Model             | Size     | Prompt processing with 512 tokens | Token generation with 128 tokens |
| ----------------- | -------- | --------------------------------- | -------------------------------- |
| Qwen3 8B Q8_0     | 8.11 GiB | 2,719.53 ± 220.09 t/s             | 52.46 ± 0.04 t/s                 |
| Falcon-H1 7B Q8_0 | 7.51 GiB | 3,201.62 ± 45.18 t/s              | 43.20 ± 0.19 t/s                 |

The speeds are quite comparable. Falcon is better at processing prompts, while being slightly slower than Qwen at generating tokens.

## Falcon vs Qwen

Let us take them out for a spin on ten tests! I used LM Studio to run the tests. Default settings as of 0.4.2 on CUDA 12 llama.cpp runtime.

I have added the thought process of both the LLMs in the repo. You can take a look [here](https://github.com/nrynss/nrynss.github.io/blob/main/static/samples/falcon-qwen-thoughts.md).

### Python script generation

**Timings: Falcon (00:25), Qwen (01:32)**

I wanted to generate a script that I might create once in a while as part of some larger task.

```text

Write a Python function that takes a directory path and returns a markdown table listing all files recursively, 
with columns for filename, extension, size in human-readable format, and last modified date. 
Include error handling for permission issues.

```

{{< expandable title="Falcon-H1 7B Q8_0" >}}

```python

#!/usr/bin/env python3
"""
list_files_as_markdown.py

A tiny utility that walks a directory tree and returns a markdown table with:
* file name (relative to the root)
* file extension
* size in human‑readable format (KiB, MiB, …)
* last‑modified timestamp

Permission errors are handled gracefully – missing or unreadable sub‑folders are
skipped rather than aborting the whole scan.
"""

from __future__ import annotations

import datetime
from pathlib import Path
from typing import List


def _format_size(bytes_: int) -> str:
    """Convert a number of bytes to a human‑readable string using binary prefixes.

    Examples
    --------
    >>> _format_size(1234567)
    '1.19 MiB'
    >>> _format_size(1024)
    '1 KiB'
    """
    if bytes_ < 1024:
        return f"{bytes_} B"

    # Choose binary unit based on magnitude.
    units = ["KiB", "MiB", "GiB", "TiB", "PiB", "EiB"]
    for i, unit in enumerate(units):
        if bytes_ < 1024 ** (i + 2):  # next threshold
            value = round(bytes_ / 1024 ** (i + 1), 1)
            return f"{value:g} {unit}"
    # Fallback for absurdly large files.
    return f"{bytes_} B"


def _format_date(timestamp: float) -> str:
    """Convert a POSIX timestamp to a nicely formatted date string."""
    dt = datetime.datetime.fromtimestamp(timestamp).replace(microsecond=0)
    return dt.strftime("%Y-%m-%d %H:%M")


def list_files_as_markdown(root: str | Path) -> str:
    """
    Return a markdown table of all regular files under *root*, recursively.

    Parameters
    ----------
    root: str | Path
        Path to the directory whose contents should be listed.

    Returns
    -------
    str
        A string that can be copied directly into a Markdown document.

    Raises
    ------
    ValueError
        If *root* does not exist or is not a directory.

    Notes
    -----
    Permission errors inside sub‑directories are caught and the offending
    subtree is simply ignored – the function continues scanning other parts of
    the tree.
    """
    root_path = Path(root)

    if not root_path.is_dir():
        raise ValueError(f"The path '{root}' must be an existing directory.")

    rows: List[str] = []

    def _traverse(current: Path):
        """Recursive walk that populates ``rows``."""
        try:
            for entry in current.iterdir():
                # Skip symbolic links to directories – treat them as non‑files.
                if entry.is_symlink() and entry.is_dir():
                    continue

                try:
                    # Use stat() because it works even on unreadable entries when we have permission.
                    st = entry.stat()
                except PermissionError:
                    # Cannot read metadata → skip this file/directory.
                    continue
                except OSError as exc:
                    # Any other OS error (e.g., too large, unsupported) is also treated as a skip.
                    continue

                # Only regular files are listed.
                if not entry.is_file():
                    continue

                # Build markdown row.
                rel_name = entry.relative_to(root_path).as_posix()  # removes trailing slash
                ext = entry.suffix.upper() if entry.suffix else ""
                size = _format_size(st.st_size)
                last_mod = _format_date(st.st_mtime)

                rows.append(f"| {rel_name} | {ext} | {size} | {last_mod} |")
        except PermissionError:
            # Whole sub‑directory is not accessible; we silently ignore it.
            continue
        except OSError as exc:
            # Unexpected error while iterating → log but keep going.
            # You could replace this with logging module if you want more detail.
            print(f"[WARN] Could not access '{entry}': {exc}", file=__stderr__)

    try:
        _traverse(root_path)
    except PermissionError as perm_err:
        # If the root itself cannot be read we abort with a clear message.
        raise PermissionError(f"Permission denied while scanning '{root}': {perm_err}") from None

    # Assemble markdown table header and body.
    if not rows:
        return "| filename | extension | size | last modified |\n|---|---|---|---|"

    header = "| filename | extension | size | last modified |\n"
    header += "---|---|---|---|\n"
    body = "\n".join(rows)
    return f"{header}{body}"


# ----------------------------------------------------------------------
# Example usage (uncomment to run as a script):
# ----------------------------------------------------------------------
if __name__ == "__main__":
    import sys

    if len(sys.argv) != 2:
        print("Usage: python list_files_as_markdown.py <directory>")
        sys.exit(1)

    try:
        markdown = list_files_as_markdown(sys.argv[1])
        print(markdown)
    except Exception as exc:
        print(f"Error: {exc}")
        sys.exit(1)
```

{{< /expandable >}}

Nicely structured. Well documented. But it does not work. There are syntax errors. Logic also does not make sense. Maybe it will do better with a more structured prompt and a couple more messages to refine. The code that it spit out is also very verbose for something simple.

{{< expandable title="Qwen3 8B Q8_0" >}}

```python

import os
from datetime import datetime
from pathlib import Path

def list_files_markdown(directory_path):
    """
    Generates a markdown table of all files recursively in the given directory.

    Args:
        directory_path (str): The path to the directory to scan.

    Returns:
        str: A markdown-formatted table listing filenames, extensions, sizes, and last modified dates.
             If no files are found or an error occurs, appropriate messages are returned.
    """

    def format_size(size_bytes):
        """
        Converts file size from bytes to a human-readable format (e.g., KB, MB, GB).
        """
        if size_bytes == 0:
            return "0B"
        suffixes = ["B", "KB", "MB", "GB", "TB", "PB"]
        for unit in suffixes:
            if size_bytes < 1024 or unit == "PB":
                return f"{size_bytes:.1f}{unit}"
            size_bytes /= 1024
        return f"{size_bytes:.1f}PB"

    try:
        # Validate directory path
        path = Path(directory_path)
        if not path.exists():
            return f"Directory not found: {directory_path}"

        if not path.is_dir():
            return "Provided path is not a directory."

        rows = []

        # Traverse all files recursively
        for file in path.rglob('*'):
            if file.is_file():
                try:
                    stats = file.stat()
                    size_str = format_size(stats.st_size)
                    modified_date = datetime.fromtimestamp(stats.st_mtime).strftime('%Y-%m-%d %H:%M')
                    extension = file.suffix.lower() or ''
                    rows.append([file.name, extension, size_str, modified_date])
                except PermissionError:
                    continue  # Skip files we can't access
                except Exception as e:
                    print(f"Unexpected error processing {file}: {e}")
                    continue

        if not rows:
            return "No files found or access denied."

        # Format the markdown table
        headers = ['Filename', 'Extension', 'Size', 'Last Modified']
        markdown_table = "| " + " | ".join(headers) + " |\n"
        markdown_table += "|---|---|---|---|\n"

        for row in rows:
            markdown_table += "| " + " | ".join(row) + " |\n"

        return markdown_table

    except PermissionError as pe:
        return f"Permission denied: {pe}"
    except Exception as e:
        return f"An error occurred: {e}"

```

{{< /expandable >}}

No syntax errors and that is a win. Even bigger win is that logic is coherent. There is a big logical hole that stops the script from iterating into sub-folders that have files with the same name. A massive issue when your files are called `_index.en.md` like in many Hugo doc sets.

### Verdict: Python script generation

Qwen wins. Not a landslide. I wouldn't consider not having syntax error as a big win. If there is a logical hole, it tends to hide better when you get a working code. Qwen also took a much longer time. I was quite surprised that Falcon finished so fast, given how it has performed in other tasks.

### Explain GGUF quantization

**Timings: Falcon (00:58), Qwen (00:13)**

Let us see how much about LLM technology our boys know.

```text

Explain how GGUF quantization works. Cover the difference between Q4_K_M, Q5_K_M, and Q8_0, 
what the K-quant approach does differently from naive quantization, and when you'd pick each level. 
Keep it under 400 words.

```

{{< expandable title="Falcon-H1 7B Q8_0" >}}

**GGUF quantization at a glance**  
Google’s GGUF stores tensors as either linear‑scaled integers or, for weights only, a piece‑wise‑linear lookup table called *K‑quant*. The format string tells you the bit‑width and whether a K‑table is used:

| Format     | What it stores                                                                                                                                                                            | Typical use                                                                                                            |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| **Q8_0**   | One signed scale + one zero‑point per tensor. Each weight w → v = round((w‑min)/scale) where v ∈ [‑128, 127]. Activations are usually left as float32 or int8.                            | Small models where every accuracy bit matters; no extra table overhead.                                                |
| **Q5_K_M** | Scale + zero‑point plus a K‑table of 16 equally spaced breakpoints (k=16) that map raw weight values to the 5‑bit integer range. Each weight is replaced by the nearest breakpoint value. | Large models where memory pressure is high; Q4 would be too lossy, Q8 gives enough headroom but wastes space.          |
| **Q4_K_M** | Same as Q5_K_M but with a 4‑bit integer range. The K‑table still has 16 entries, giving finer effective resolution than raw 4‑bits would allow.                                           | Very large models that can tolerate a modest accuracy hit; maximum compression when storage is the primary constraint. |

### How K‑quant differs from naïve linear quantization
*Naïve linear* (Q8_0) treats the whole weight range as a single uniform interval, discarding any shape of the distribution.  
*K‑quant* first splits the min–max interval into k sub‑intervals. The breakpoints are stored in a compact table; during inference each weight is mapped to the closest breakpoint via binary search or nearest‑neighbor lookup. This preserves far more of the original value distribution while still representing the tensor with only n bits per entry, because most weights now share one of the k representative values.

### When to pick which level
- **Q8_0**: Use for models ≤ ~5 MB or when you need the highest fidelity. It has almost no decode cost and works for both weights and activations.  
- **Q5_K_M**: Choose when a model is in the tens of megabytes range and you can afford a small accuracy drop; 5‑bit weights give roughly a 30 % size reduction with only a modest loss.  
- **Q4_K_M**: Pick for very large models (≥ 100 MB) where every megabyte matters and the hardware can handle K‑lookup tables. The extra table overhead becomes amortized across many tensors, yielding up to ~50 % size reduction at the cost of higher quantization error.

**Key trade‑off:** Q8_0 trades memory for precision; Q4/Q5‑K_M trade a little more precision for far greater compression by exploiting the piecewise‑linear K‑table. Edge TPU decoders understand all three, but only weight tensors may use the K‑format – activations stay linear or float. Choose the format that matches your memory budget and latency/accuracy targets.

{{< /expandable >}}

Falcon confidently gave us a lot of nice text. Too bad it is completely wrong. Hallucination from top to bottom.

{{< expandable title="Qwen3 8B Q8_0" >}}

GGUF (Generalized Generic Unified Format) quantization reduces model size and improves inference speed by compressing weights into lower bit depths. Key variants include **Q4_K_M**, **Q5_K_M**, and **Q8_0**, differing in bit precision and compression methods.

- **Q8_0** uses 8-bit per weight, maintaining high accuracy but offering minimal size reduction. It’s ideal for applications prioritizing precision over efficiency.
- **Q5_K_M** and **Q4_K_M** use **K-quantization**, a method that leverages knowledge distillation or specialized encoding schemes to preserve critical information during compression. These variants compress weights into 5-bit or 4-bit, respectively, enabling significant size reductions (e.g., Q4_K_M can reduce model size by ~75% compared to FP16) with minimal accuracy loss in many tasks.

**K-quant vs Naive Quantization**:  
Naive quantization uniformly reduces bit depth without considering weight distribution or structure, often leading to severe precision loss. **K-quant** (e.g., via techniques like Kronecker product decomposition) instead optimizes compression by exploiting patterns in weights, preserving important features while reducing storage. This results in better performance and smaller models than naive methods.

**When to Use Each Level**:  
- **Q8_0**: Choose for high-accuracy scenarios where size is not a constraint (e.g., desktop applications).  
- **Q5_K_M**: Optimal for balancing speed, accuracy, and efficiency (common in edge devices or mobile apps).  
- **Q4_K_M**: Use when maximizing compression (e.g., deploying on resource-constrained hardware like IoT devices), accepting slight performance trade-offs.  

K-quant is preferred over naive methods due to its structured approach, while Q8_0 remains the baseline for precision-sensitive tasks. The choice depends on deployment constraints and accuracy requirements.

{{< /expandable >}}

Qwen has brevity. Too bad it is also wrong. Lot of hallucination here as well.

#### Verdict: Explain GGUF quantization

Both of them suck. I would still dock marks from Falcon for giving such a big article filled with bunkum and for taking such a long time to say something like this.

### Summarization

**Timings: Falcon (00:18), Qwen (00:07)**

Let us try for something more mundane that does not need knowledge.

```text

Summarize the following changelog into 3-5 bullet points suitable for a release announcement to end users (non-technical):

v2.4.0:
- Migrated authentication from JWT to OAuth2 PKCE flow for improved security posture
- Fixed race condition in WebSocket reconnection logic that caused duplicate event handlers (#4521)
- Added gzip compression for API responses over 1KB, reducing average payload size by 62%
- Deprecated /api/v1/users/search endpoint; replaced by /api/v2/users with query parameter filtering
- Upgraded PostgreSQL driver from 3.1 to 3.4, resolving connection pool exhaustion under sustained load
- New: CSV export for dashboard analytics with configurable date ranges
- Fixed: Timezone offset bug causing scheduled reports to fire 1 hour early in DST regions

```

{{< expandable title="Falcon-H1 7B Q8_0" >}}

- **Stronger login security:** Switched from JWT to OAuth2 PKCE, making it harder for attackers to intercept or misuse tokens.  
- **More reliable real‑time updates:** Fixed a race condition that caused duplicate WebSocket messages, so notifications and live feeds stay smooth.  
- **Faster data delivery:** API responses larger than 1 KB are now compressed with gzip, cutting download size by about 60 %.  
- **New dashboard analytics export:** Easily download CSV files for any date range to analyze trends outside the app.  
- **Stability upgrades:** Updated PostgreSQL driver to prevent connection‑pool exhaustion under heavy load and corrected a bug that could cause scheduled reports to run an hour early during daylight‑saving time changes.

{{< /expandable >}}

I liked this a lot. Strict adherence to instruction. Perhaps a little too strict. Where is deprecation and introduction of endpoints?

{{< expandable title="Qwen3 8B Q8_0" >}}

- **Enhanced Security**: Upgraded authentication to OAuth2 PKCE for stronger protection against unauthorized access.  
- **Improved Performance**: Gzip compression reduces API response sizes by 62%, speeding up data transfers.  
- **New Feature**: Export dashboard analytics as CSV files with customizable date ranges for easier reporting.  
- **Critical Fix**: Resolved timezone bug ensuring scheduled reports fire accurately even during daylight saving changes.

{{< /expandable >}}

Opus 4.6 thinks this is as good as Falcon. But I completely disagree. Little too bland and misses three things. Not to mention the fact that authentication is simply treated as upgrade. From what is a question it ought to have answered. Brevity is not always the soul of wit.

#### Verdict: Summarization

Falcon gets the win here by a good margin. First and an important win. You want your little LLMs to do stuff like this! Not generate code or answer technical questions.

### Logical reasoning

**Timings: Falcon (00:23), Qwen (01:46)**

A synthetic test to be honest. More maths than logic too. But still let us do it anyway. I am curious if this brings out any hilarity. Most of the time, your free ChatGPT or Gemini or whatever will get you this answer far more easily.

```text

A documentation team has 5 members. Two juniors can each review 8 pages/day. Two staff writers can each review 12 pages/day. 
The manager reviews 4 pages/day but spends half their time in meetings (so effectively 2 pages/day). 
A release has 120 pages to review. If the team starts Monday morning, on what day do they finish? Show your working.

```

{{< expandable title="Falcon-H1 7B Q8_0" >}}

**Step‑by‑step calculation**

| Team member       | Number of people | Pages reviewed per person per day                             | Combined daily capacity  |
| ----------------- | ---------------- | ------------------------------------------------------------- | ------------------------ |
| Juniors           | 2                | 8 pages/day                                                   | \(2\times8 = 16\) pages  |
| Staff writers     | 2                | 12 pages/day                                                  | \(2\times12 = 24\) pages |
| Manager           | 1                | 4 pages/day but half time in meetings → effective 2 pages/day | 2 pages                  |
| **Total per day** | –                | –                                                             | \(16+24+2 = 42\) pages   |

The release to be reviewed contains **120 pages**.

\[
\text{Number of full days needed}= \left\lceil\frac{120}{42}\right\rceil
           = \left\lceil 2.857\dots\right\rceil = 3 \text{ days}.
\]

- **Day 1 (Monday):** 42 pages reviewed → remaining = \(120-42=78\).  
- **Day 2 (Tuesday):** another 42 pages reviewed → remaining = \(78-42=36\).  
- **Day 3 (Wednesday):** the remaining 36 pages are covered well before a full day's work is finished.

Thus the team completes the review on the **third day**, which is **Wednesday**.  

\[
\boxed{\text{Wednesday}}
\]

{{< /expandable >}}

Good answer. Identified that work will be done by well before end of the day wednesday. The Latex format is a bit offputting though. Why?

{{< expandable title="Qwen3 8B Q8_0" >}}

To determine the **day** on which the documentation team finishes reviewing the 120 pages, we first analyze each member's contribution to the daily page review capacity:

---

### Step 1: Calculate Daily Review Capacity per Member

- **Two juniors**:  
  Each reviews 8 pages/day → $2 \times 8 = 16$ pages/day.

- **Two staff writers**:  
  Each reviews 12 pages/day → $2 \times 12 = 24$ pages/day.

- **Manager**:  
  Reviews 4 pages/day, but spends half their time in meetings. Hence, effective review rate is:  
  $\frac{4}{2} = 2$ pages/day.

---

### Step 2: Total Daily Review Capacity

$$
\text{Total per day} = 16 + 24 + 2 = 42 \text{ pages/day}
$$

---

### Step 3: Calculate Total Days Required to Review 120 Pages

$$
\frac{120 \text{ pages}}{42 \text{ pages/day}} \approx 2.857 \text{ days}
$$

This means the team will require **just under 3 full working days** to complete the review.

---

### Step 4: Determine the Finishing Day

- **Day 1**: Monday
- **Day 2**: Tuesday
- **Day 3 (partial)**: Wednesday (since they only need to review 36 pages on this day and can finish before the end of Wednesday)

Thus, even though they complete only a part of the third day's work, they **finish** on **Wednesday**.

---

### ✅ Final Answer:

$$
\boxed{\text{Wednesday}}
$$

{{< /expandable >}}

Good job. Same as Falcon. Better formatting.

##### Verdict: Logical reasoning

It is a tie. But Qwen took a really, really long time to think through this prompt.

### Structured Data Extraction

**Timings: Falcon (00:19), Qwen (00:12)**

Creation of a JSON. I consider this task to be very important for a small size LLM. Creating a JSON from a text is something they can make a difference. Conversion of confidential unstructured data into a JSON format for further processing is an important use case for local LLMs. We can use this JSON in an application for further analysis.

P.S: Not my career. Something Claude gave for me. May be it did hit close to home with its memory.

```text
Extract structured JSON from this text. Return an array of objects with fields: company, role, duration, and skills.

"I spent 3 years at Siemens as a technical writer working with DITA and FrameMaker. 
Then moved to Infosys for 2 years as a senior content developer handling API documentation with Swagger and Postman. 
Currently at Endor Labs as a documentation engineer for 1.5 years, using Hugo, Python, and docs-as-code workflows."

```

{{< expandable title="Falcon-H1 7B Q8_0" >}}

```json

[
  {
    "company": "Siemens",
    "role": "technical writer",
    "duration": "3 years",
    "skills": ["DITA", "FrameMaker"]
  },
  {
    "company": "Infosys",
    "role": "senior content developer",
    "duration": "2 years",
    "skills": ["API documentation", "Swagger", "Postman"]
  },
  {
    "company": "Endor Labs",
    "role": "documentation engineer",
    "duration": "1.5 years",
    "skills": ["Hugo", "Python", "docs-as-code workflows"]
  }
]

```
{{< /expandable >}}

Good job. Works very well for this use case.

{{< expandable title="Qwen3 8B Q8_0" >}}

```json

[
  {
    "company": "Siemens",
    "role": "technical writer",
    "duration": "3 years",
    "skills": ["DITA", "FrameMaker"]
  },
  {
    "company": "Infosys",
    "role": "senior content developer",
    "duration": "2 years",
    "skills": ["Swagger", "Postman"]
  },
  {
    "company": "Endor Labs",
    "role": "documentation engineer",
    "duration": "1.5 years",
    "skills": ["Hugo", "Python", "docs-as-code workflows"]
  }
]

```
{{< /expandable >}}

Neat job. Nearly identical to Falcon. Dropped API documentation from skills. I would dock a point for that. It is a skill that goes beyond Swagger and Postman. But it took a really long time to get the result. Not quite acceptible for a job like this.

#### Verdict: Structured Data Extraction

Falcon wins here. Accurate and fast.

For comparison, this what Gemini 3 Flash gives. The cloud model that you would use for a task like this.
{{< expandable title="Gemini 3 Flash" >}}

```json

[
  {
    "company": "Siemens",
    "role": "Technical Writer",
    "duration": "3 years",
    "skills": ["DITA", "FrameMaker"]
  },
  {
    "company": "Infosys",
    "role": "Senior Content Developer",
    "duration": "2 years",
    "skills": ["API documentation", "Swagger", "Postman"]
  },
  {
    "company": "Endor Labs",
    "role": "Documentation Engineer",
    "duration": "1.5 years",
    "skills": ["Hugo", "Python", "docs-as-code"]
  }
]

```
{{< /expandable >}}

Nearly identical to Falcon than Qwen. If I wanted to process JSON inside an air-gapped environment, I would definitely use Falcon over Qwen.

### Product marketing

**Timings: Falcon (01:45), Qwen (00:06)**

Something that you wouldn't really use a tiny model. Run of the mill Gemini Flash and ChatGPT would help you here. In fact, I would argue you are better off writing on your own. Too much AI slop for product descriptions these days on GitHub.

```text

Write a 150-word project description for a GitHub README. The project is a Rust CLI tool called "vimanam" that converts OpenAPI 3.x specs into clean, navigable Markdown documentation. 
It supports nested schemas, enum rendering, and example extraction. Tone: professional but approachable, not salesy.

```

This test uses my own project [Vimanam](./vibing-vith-vimanam.md), since I am most familiar with it and I can guarantee that our models have no idea about it.

{{< expandable title="Falcon-H1 7B Q8_0" >}}

Vimanam is a lightweight Rust CLI tool that transforms OpenAPI 3.x specifications into clean, navigable Markdown documentation. It parses JSON or YAML schemas, preserving nested definitions while rendering enums as selectable tables and extracting representative examples for each operation. Users can generate human‑readable docs with a single command: `vimanam spec.yaml`. The tool also supports customizing output styles via environment variables, making it ideal for internal APIs, public SDKs, or documentation pipelines. Because it's written in Rust, Vimanam delivers fast performance and safe memory handling without sacrificing developer friendliness. For advanced use cases, Vimanam can be integrated into CI pipelines through GitHub Actions, allowing automatic generation of updated docs on each push. Its design encourages contributions: the core parser is separated from rendering modules, making it easy to extend support for OpenAPI features or custom formatters. Documentation itself follows a clear CONTRIBUTING guide and welcomes feedback from both users and developers.

{{< /expandable >}}

Holy mother of hallucinations! Except the first sentence, and the last couple, the entire thing is fabricated.

{{< expandable title="Qwen3 8B Q8_0" >}}

**vimanam** is a Rust CLI tool designed to transform OpenAPI 3.x specifications into clean, navigable Markdown documentation. Built for developers seeking clarity and simplicity, it extracts endpoints, parameters, responses, and schemas while preserving structure and context. Key features include support for nested schemas, enabling detailed representation of complex data models; enum rendering for intuitive type visualization; and example extraction to showcase real-world usage scenarios. The output is tailored for readability, with a focus on minimalism and ease of integration into workflows. Written in Rust for performance and reliability, **vimanam** avoids unnecessary complexity, making it ideal for teams or individuals who prioritize actionable documentation without overhead. Whether you're maintaining APIs or onboarding new developers, this tool streamlines the process of turning specifications into accessible reference material.

{{< /expandable >}}

Excellent summary. No hallucinations and clean language. Slight embellishment, but it is still ok.

#### Verdict: Product marketing

Qwen wins by a landslide here. Falcon took a really, really long time and focused on following the word count rather than focus on the content.

### Instruction following

**Timings: Falcon (01:55), Qwen (00:54)**

This is a test for instruction following. Quite artificial. But still very useful.

```text

Create a fictional "Project Schedule" based on the following rules:

Invent 3 tasks named only with Greek letters (e.g., Alpha).

Assign each task a duration in "Cycles" (between 10 and 50).

Calculate a "Total Duration" at the end.

Constraint A: Every sentence must contain exactly one color name.

Constraint B: You must use a semicolon in every list item.

Constraint C: Do not use the letter "e" in the description of the third task.

```

{{< expandable title="Falcon-H1 7B Q8_0" >}}

Alpha: 12 cycles; maroon.  
Beta: 35 cycles; teal.  
Gamma: 27; indigo.  
Total Duration: 74 cycles; gold.

{{< /expandable >}}

This is an excellent result. It followed all the instructions, including the constraint C, which is quite hard. The ask is to put duration is "cycles" and not to put "e" in the description of the third task. We didn't specifically ask to put "cycles" in the description of the task. Very well done indeed and it did think through the instruction.

{{< expandable title="Qwen3 8B Q8_0" >}}

Alpha; 15 cycles; blue. Beta; 20 cycles; green. Gamma; 35 cycles; brown. Total Duration: 70 cycles; orange.

{{< /expandable >}}

It didn't follow constraint C. Assumed that "cycles" is a constraint.

#### Verdict: Instruction following

From this limited test, I have to say Falcon is much better than Qwen. Falcon took a longer time. Almost double. That would be the only downside. To get accurate result, may be more time is needed?

### Multi-step rewrite

**Timings: Falcon (00:10), Qwen (00:12)**

This test is to check if the models can rewrite information based on audience.

```text

Rewrite this error message three ways — one for developers, one for end users, and one for a log file:

Original: "Error: ECONNREFUSED 127.0.0.1:5432 - connection to PostgreSQL failed because the server is not running or refused the connection on the specified port."

```

{{< expandable title="Falcon-H1 7B Q8_0" >}}

**Developer Version**  
`ECONNREFUSED` on host 127.0.0.1 port 5432 – the PostgreSQL listener is not accepting connections. Possible causes:  

- PostgreSQL service isn’t running (`systemctl status postgresql` or equivalent).  
- The server is bound to a different port or firewall/iptables blocks port 5432.  
- Connection string in the client configuration points to an unavailable host/port.  

Check the service state, verify the bind address and port, and ensure network rules allow traffic to 127.0.0.1:5432.

---

**End‑User Version**  
The application couldn’t connect to the database. This usually means the database server isn’t running or is not listening on the expected port. Please try again later, or contact support for further assistance.

---

**Log‑File Version**  
`[2025-09-18T14:30:07Z] ERROR: ECONNREFUSED 127.0.0.1:5432 – connection to PostgreSQL failed because the server is not running or refused the connection on the specified port.`

{{< /expandable >}}

End-user version is great. Developer version can be better. It does not give anything actionable and expects the developer to infer. Log version is kind of stupid and just wrapped the original message with a timestamp.

{{< expandable title="Qwen3 8B Q8_0" >}}

**Developer-Friendly Version:**  
`Error: ECONNREFUSED - Connection refused to PostgreSQL at 127.0.0.1:5432. The server may not be running, or it is configured to reject connections on this port. Verify the PostgreSQL service status and check configuration files (e.g., `listen_addresses`) for correct binding settings.`  

**End User Version:**  
`Unable to connect to the PostgreSQL database. This could mean the server is offline or there’s a connection issue. Please ensure the PostgreSQL service is running and that no firewall rules are blocking port 5432. Restarting the service might resolve this.`  

**Log File Version:**  
`[ERROR] ECONNREFUSED: Failed to connect to PostgreSQL at 127.0.0.1:5432. Server not running or refusing connections on specified port. Check PostgreSQL process status and configuration for binding details.`

{{< /expandable >}}

End-user version gives a lot of information. Useless if the end-user is an actual customer. Useful if the "end-user" is another developer who is the consumer of the service. I wouldn't give the pass mark. Developer version gives actionable information and is good. Log version looks like a log message and gives actionable information.

#### Verdict: Multi-step rewrite

2 out of 3 for Qwen. 1 out of 3 for Falcon. For a small LLM, I believe the end-user version might be more useful for this task. We want the dev message and log to be good, so I am not sure whether a small LLM is the way to go.

### World knowledge

**Timings: Falcon (00:14), Qwen (00:21)**

This is a fun one. Something that you wouldn't want to ask a small LLM. But it will be interesting to see how much information is cramped inside these little boys.

```text

What caused the 2008 financial crisis? Explain the chain of events from subprime mortgages to the Lehman Brothers collapse in under 300 words. 
Include at least 3 specific institutions, laws, or financial instruments by name.

```

{{< expandable title="Falcon-H1 7B Q8_0" >}}

The 2008 crisis began when lenders started flooding the market with subprime mortgages—loans to borrowers with weak credit histories, often adjustable‑rate and interest‑only terms. These risky loans were bundled into mortgage‑backed securities (MBS) and sliced further into collateralized debt obligations (CDOs), which were sold worldwide to investors. Hedge funds bought the most toxic tranches and protected themselves by buying credit default swaps (CDS); AIG underwrote these CDS contracts, assuming massive liability.

As housing prices stalled in 2007, defaults on subprime loans rose, causing MBS values to tumble. The loss on CDOs erased billions of dollars from Bear Stearns’ balance sheet; the firm was rescued by JP Morgan with a $30 billion loan after a run on its assets. AIG’s unchecked CDS exposure forced a $180 billion government bailout, exposing systemic fragility.

When Lehman Brothers faced mounting margin calls on its leveraged positions and could not secure short‑term funding, it announced bankruptcy in September 2008. Its collapse wiped out shareholders, triggered counterparties’ liquidity crises, and sent shockwaves through global markets, precipitating the full‑blown financial crisis.

The chain was amplified by deregulatory legislation such as the Gramm‑Leach‑Bliley Act (1999), which dismantled Glass‑Steagall barriers between commercial banking and investment activities, allowing banks to take on far more risk.

{{< /expandable >}}

{{< expandable title="Qwen3 8B Q8_0" >}}
The 2008 financial crisis stemmed from a chain of events beginning with **subprime mortgages**—loans given to borrowers with poor credit histories. These loans were bundled into **Mortgage-Backed Securities (MBS)** and further packaged into **Collateralized Debt Obligations (CDOs)**, complex financial instruments that promised stable returns. Institutions like **Fannie Mae** and **Freddie Mac**, government-sponsored enterprises, expanded the subprime market by purchasing mortgages and securitizing them, while banks like **Lehman Brothers** aggressively sold CDOs to investors globally, relying on flawed risk assessments.

The **Gramm-Leach-Bliley Act (1999)** enabled banks to engage in securities trading alongside traditional banking, fostering a culture of deregulation. This allowed financial institutions to offload risky mortgages onto investors without adequate oversight. As housing prices peaked and then collapsed, defaults surged, causing MBS and CDO values to plummet. Lehman Brothers, heavily exposed to these instruments, faced insolvency in September 2008. Its collapse triggered panic as counterparties defaulted on interbank loans, freezing credit markets.

The crisis was exacerbated by **credit default swaps (CDS)**—derivatives used to insure against defaults—which were not properly accounted for or regulated. Lehman’s failure exposed systemic risks, leading to a global liquidity crisis. Governments intervened with bailouts, but the collapse of key institutions like Lehman and the role of Fannie Mae/Freddie Mac underscored the dangers of unchecked speculation and inadequate regulation. The crisis ultimately revealed the fragility of unregulated financial systems reliant on opaque instruments and excessive leverage.
{{< /expandable >}}

Misses out a couple of very important factors. Now that I have read Falcon, it makes it even more obvious.

#### Verdict: World knowledge

Falcon wins here. Qwen looks fancier with bold and stuff, and is longer. But Falcon accomplishes this task extremely well and is more concise.

### Obscure world knowledge

**Timings: Falcon (04:24), Qwen (00:42)**

Once again a stupid test for a small LLM. I wanted hilarity. This particular test is obscure for LLM, but no so much for me given my background with Hinduism and India. But not that important for a little LLM to know.

```text

What is the significance of the Jyotirlinga at Ghrishneshwar near Ellora in Maharashtra? 
How does it connect to the Rashtrakuta dynasty's patronage of the Ellora caves, and what distinguishes it from the other 11 Jyotirlingas in terms of temple architecture and historical dating?

```

{{< expandable title="Falcon-H1 7B Q8_0" >}}
**The Ghrishneshwar Jyotirlinga – why it matters, how it ties into the Rashtrakuta‑Ellora story and what makes it different from the other eleven Jyotirlingas**

---

## 1.  Why Ghrishneshwar is significant

| Aspect                                                                                                                                                                                                                                                                                                                                                                                                           | Explanation |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| **A Jyotirlinga** – one of the twelve “lights” of Shiva that are said to embody his cosmic potency. The title *Jyotirlinga* (literally “lamp‑shaped linga”) marks it as a sacred focus for Shaivaites across Maharashtra and beyond.                                                                                                                                                                             |
| **First Shaivite linga inside an existing rock‑cut sanctuary** – most Jyotirlingas are freestanding stone temples with a separate sanctum (garbhagriha). Ghrishneshwar is cut directly into the cliff of Ellora, sharing the same matrix as the Buddhist and Jain caves. This makes it a rare example of a Shaivite shrine that grew out of the cave‑tradition rather than being built as an independent temple. |
| **Geographic anchor for pilgrimage** – the linga sits on the western slope of the Ellora plateau, close to the main pilgrim route that also leads to the Buddhist caves and the nearby Jain sites. Pilgrims could combine a Shaivite offering with visits to other world‑heritage monuments in one trip.                                                                                                         |
| **Symbol of dynastic religious pluralism** – during the Rashtrakuta hegemony (c. 750‑960 CE) the ruling house actively supported Buddhism, Jainism and Hinduism side‑by‑side. Installing a Jyotirlinga in a cave complex shows that Shaivism was not an afterthought but an integral part of the cultural programme promoted by the court.                                                                       |

---

## 2.  Rashtrakuta patronage – how the dynasty is linked to Ghrishneshwar

1. **Epigraphic evidence**  
   *A copper‑plate inscription (R 86, 8th‑9th c.) found a few metres from the linga records a land grant made by King Krishna III (r. 860‑873 CE) to the “Śiva‑tirtha of Ghrishneshwar.”* The grant mentions an annual tax exemption for priests and indicates that the shrine already existed as a recognised place of worship. Similar Rashtrakuta grants are known from other Ellora caves (e.g., Cave 12, the famous Shaiva panel of Amoghavarsha I).  

2. **Stylistic alignment with later Rashtrakuta cave art**  
   The carving shows the characteristic early‑Rashtrakuta motifs: a simple lotus base, a modest crown (kalasha) without the elaborate fluting seen in later Chalukyan or Vijayanagara work; linear incised foliage rather than the flowing drapery of later periods. These traits are paralleled in other Rashtrakuta‑period cave reliefs at Ellora (e.g., the dancing Shiva panel dated to c. 850 CE).  

3. **Integration into the larger courtly programme**  
   The Rashtrakutas, unlike many contemporaries who favoured one religion, commissioned a suite of Shaivite, Buddhist and Jain cave complexes simultaneously. Their policy is evident in the fact that Cave 12‑19 (the “late” Ellora group) contains both Buddhist iconography and several Shiva panels, including the Ghrishneshwar linga niche. The court’s aim was to create a cosmopolitan sacred landscape around the capital, Devagiri (modern Aurangabad).  

4. **Political messaging**  
   By endowing a Jyotirlinga—one of the most potent Shiva symbols—Krishna III projected himself as a devout Shaivite king who protected the faith of his subjects, thereby reinforcing his legitimacy among both Shaivites and the broader population that revered the twelve Jyotirlingas.

---

## 3.  Architectural distinctiveness

| Feature            | Ghrishneshwar (Ellora)                                                                                                                                   | Typical other Jyotirlingas (e.g., Somnath, Mahakaleshwar, Mallikarjuna)                                                          |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| **Structure type** | Cut directly into the rock; no separate temple mound. The linga rests on a shallow recessed platform that is part of the cave floor.                     | Freestanding stone temple with a raised sanctum (garbhagriha) and often a pyramidal shikhara.                                    |
| **Mandapa/hall**   | Absent; worshippers approach directly from the cave passage. The surrounding rock forms a natural “hall” but no architectural column or pillar is added. | Usually includes one or more mandapas (pillared halls) supporting the sanctum, often with ornate columns and brackets.           |
| **Nandi**          | No Nandi statue—an intentional deviation because the cave context made a separate animal figure impractical.                                             | Almost every major Jyotirlinga has a bronze or stone Nandi at the entrance.                                                      |
| **Ornamentation**  | Minimal: simple crown, shallow abhira (plinth) carving; natural rock surfaces dominate.                                                                  | Elaborate carvings of the linga’s bands, lotus petals, miniature narrative panels on walls and ceilings, intricate jali screens. |
| **Roof/Shikhara**  | No roof structure—exposed to the open sky; the cave ceiling acts as a natural vault.                                                                     | Diverse: Nagara style shikhara at Somnath, Vimana‑type tower at Mahakaleshwar, towering gopuram at Mallikarjuna.                 |
| **Materials**      | Purely rock (sandstone) with occasional lime plaster on the platform.                                                                                    | Sandstone or later granite blocks precisely cut and dressed; mortar used for assembly.                                           |

*Result:* Ghrishneshwar feels more like a sacred niche in a landscape of giant monolithic chambers than a conventional temple building. This makes it visually unique among the twelve Jyotirlingas, which are all architecturally elaborate stone monuments.

---

## 4.  Historical dating – why Ghrishneshwar is chronologically earlier

| Site                              | Earliest securely dated phase*                                                                                                                                                    | Latest major reconstruction                                                    |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| **Ghrishneshwar (Ellora)**        | 8th century CE (Rashtrakuta copper‑plate grant, AD 860‑873) – stylistic analysis places carving between c. 750‑900 CE.                                                            | No major rebuilding; the current form is essentially the original cave‑cut.    |
| **Somnath**                       | First temple phase dated to early 10th century (Solar dynasty). Later phases under Solankis (late 12th c.) and Muhammad Ghuri (13th c.).                                          | Multiple reconstructions; present Konark‑style Shikhara dates to early 13th c. |
| **Mahakaleshwar (Ujjain)**        | Early 9th century Shaiva panel suggests earlier origins, but the current temple complex was rebuilt by the Chalukyas in the 12th century and later enlarged under the Holkhandes. |
| **Mallikarjuna (Andhra Pradesh)** | Dravida‑style temple first documented in the 14th century; major Vijayanagara reconstruction c. 1500 CE.                                                                          |
| **(Other Jyotirlingas)**          | Generally fall into the 10th‑13th centuries for earliest stone structures, with later phases extending to the Mughal and colonial periods.                                        |

\*Dates are based on epigraphic records, radiocarbon dating of timber beams where available, and stylistic correlations with well‑dated monuments.

**Key points of distinction**

* The **Ghrishneshwar linga is the oldest surviving Jyotirlinga**, predating the first stone temple forms of the other eleven by at least a century.  
* Its **rock‑cut technique** reflects pre‑Classical Indian architecture where temples were often hewn from existing boulders or caves—a practice common in earlier Pallava and early Rashtrakuta monuments but later abandoned for fully freestanding structures.  
* The **absence of later dynastic rebuilding** means its architectural vocabulary remains pure and unadorned, offering a snapshot of early medieval Shaivite worship that is otherwise overwritten at most other Jyotirlingas by successive royal patronage cycles.

---

## 5.  Synthesis – what the Ghrishneshwar linga tells us about Rashtrakuta‑Era Shaivism

1. **Religious syncretism:** The coexistence of Buddhist, Jain and Hindu cave complexes at Ellora under a single ruling house is evident in the placement of a Jyotirlinga within that matrix.  
2. **Patronage model:** Rashtrakuta kings used epigraphic grants to legitimize their rule and to endow specific sacred sites with royal protection, rather than merely commissioning grand stone temples. The Ghrishneshwar grant is an early example of this “land‑to‑temple” policy.  
3. **Architectural evolution:** By choosing a rock‑cut niche instead of building a new temple, the Rashtrakutas demonstrated flexibility: they could innovate within existing sacred geographies while still promoting the Jyotirlinga concept. This foreshadows later developments where royal courts would blend cave traditions with classical temple forms (e.g., the Chalukyan “cave‑temple” hybrids at Pattadakal).  
4. **Chronological anchor:** Because of its early date, Ghrishneshwar provides a benchmark for dating other Shaivite monuments in western India. Its stylistic simplicity also helps scholars differentiate between “early Rashtrakuta” and later “post‑Rashtrakuta” artistic phases.  

---

## 6.  Quick reference list of scholarly sources (for further reading)

| Source                                                                                                                                          | Relevance                                                                         |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| K. P. Chhabra, *The Ellora Caves: An Iconographic Study*, 1975                                                                                  | Detailed description of the cave‑cut shrine at Ghrishneshwar and its inscription. |
| R. Misra, *Early Medieval Indian Rock‑Cut Architecture*, Oxford University Press, 2004                                                          | Comparative analysis of Rashtrakuta cave art vs. later temple architecture.       |
| S. Sharma, “Rashtrakuta Patronage and the Ellora Caves,” *Journal of the Royal Asiatic Society India*, vol. 132, 2019                           | Epigraphic study of the Ghrishneshwar land grant.                                 |
| S. R. Bhosale, “Jyotirlingas: Evolution of Sacred Iconography,” *Proceedings of the Maharashtra Archaeology Conference*, 2018                   | Overview of Jyotirlinga sites and their architectural typologies.                 |
| D. Smith, *Temples of India: Architecture and Experience*, Routledge, 2021 – Chapter 7 on regional temple styles (includes comparative tables). |
| A. Deshpande, “Cave‑Shrine Dynamics in Early Medieval Maharashtra,” *Artibus Asiae*, vol. 84, 2022                                              | Discusses why Rashtrakuta kings favoured cave shrines for Shiva worship.          |

---

### Bottom line
The Ghrishneshwar Jyotirlinga is a **unique early‑Rashtrakuta Shaivite niche** carved into the fabric of Ellora’s world‑renowned caves. Its royal inscription links it directly to King Krishna III, illustrating how the dynasty used land grants and artistic choices to promote Shiva worship alongside other faiths. Architecturally, it stands apart from the rest of the Jyotirlingas by lacking a mandapa, Nandi, or shikhara—being simply a linga recessed in rock—and chronologically it predates the stone‑temple phases of all other Jyotirlingas by roughly a century, making it both the **oldest and most architecturally distinctive** among the twelve sacred symbols of Shiva.

{{< /expandable >}}

Looks exhaustive and fancy. But it is filled with absolute bull. I don't have the energy to explain. Google the question, and you will probably see why. It is fascinating how LLMs associated Ellora caves and the temple, and assumed the temple is a rock cut temple inside Ellora caves. Then ran away with it and placed the timeline. The temple is near Ellora temple and was built in the 18th century. Not rock-cut as well.

It thought for nearly 5 minutes to give out this as well. I could see the head spinning in the thought process. 13k tokens. Check the [thoughts file](https://github.com/nrynss/nrynss.github.io/blob/main/static/samples/falcon-qwen-thoughts.md#obscure-knowledge---falcon) to see that. Fascinating!

{{< expandable title="Qwen3 8B Q8_0" >}}

The **Ghrishneshwar Jyotirlinga** located near **Deogarh (Dhaulpur)** in Maharashtra is one of the 12 revered Jyotirlingas associated with Lord Shiva. Its significance, historical context, and architectural distinctions are as follows:

---

### **Significance of Ghrishneshwar Jyotirlinga**
1. **Divine Story**: The temple is linked to a mythological narrative where Lord Shiva manifested as a fish (Matsya) during a catastrophic deluge to save the world. This act symbolizes his role as a preserver and protector, making the site sacred.
2. **Cultural Heritage**: As one of the 12 Jyotirlingas, it holds immense spiritual importance in Hinduism, attracting pilgrims and devotees seeking blessings.

---

### **Connection to the Rashtrakuta Dynasty**
- **Patronage and Timeline**: While not part of the Ellora Caves themselves, the Ghrishneshwar temple is closely associated with the **Rashtrakuta dynasty**, which ruled much of central and southern India from the 6th to 10th centuries CE. The Rashtrakutas were renowned for their architectural patronage, including the iconic **Kailasa Temple at Ellora** (built by Krishna I in the 8th century).
- **Regional Influence**: The temple likely flourished under Rashtrakuta rule, reflecting their cultural and religious zeal. Though not directly part of the Ellora complex, its proximity to Ellora (about 70 km) places it within the broader network of Rashtrakuta-sponsored temples in Maharashtra.
- **Shared Architectural Style**: The Rashtrakutas’ emphasis on rock-cut architecture is evident in both the Kailasa Temple and possibly Ghrishneshwar. However, the latter may exhibit distinct features due to its location and construction context.

---

### **Architectural Distinctions**
1. **Rock-Cut vs. Free-Standing**: Unlike the massive **Kailasa Temple**, which is a free-standing rock-cut marvel, the Ghrishneshwar temple is a smaller, intricately carved shrine. Its design reflects the Rashtrakuta tradition of using natural stone for detailed carvings.
2. **Stylistic Elements**: The temple’s architecture may include elements like:
   - **Nandi (Shiva's bull)** and **linga** as central features.
   - Elaborate friezes, pilasters, and motifs reflecting the Rashtrakuta aesthetic.
3. **Unique Features**: While other Jyotirlingas vary in style (e.g., the Kedarnath Temple’s cave-like structure or the Somnath Temple’s coastal location), Ghrishneshwar’s proximity to Ellora and its construction during the Rashtrakuta era distinguish it as a product of their regional influence.

---

### **Historical Dating**
- The temple is dated to the **8th–9th century CE**, aligning with the Rashtrakuta period. This places it in the same timeframe as the Kailasa Temple, though its construction may have been slightly later or independent.
- Unlike some older Jyotirlingas (e.g., those from the 3rd–4th centuries CE), Ghrishneshwar reflects the **Rashtrakuta’s golden age** of temple-building, emphasizing their role in spreading Hinduism through architecture.

---

### **Conclusion**
The **Ghrishneshwar Jyotirlinga** stands as a testament to the Rashtrakuta dynasty’s patronage of religious and architectural endeavors. While not part of the Ellora Caves themselves, its location near Ellora and construction during the Rashtrakuta era tie it to the region’s rich cultural legacy. Its unique blend of rock-cut design and mythological significance distinguishes it among the 12 Jyotirlingas, highlighting the dynasty’s enduring impact on Hindu temple architecture in Maharashtra.

{{< /expandable >}}

Qwen got the information that the temple is not part of the rock-cut cave complex. But it took the geography apart for other places. Got the time period wrong. Not as bad as Falcon though.

#### Verdict: Obscure world knowledge

Qwen wins the race. If the race was how much lesser you are wrong.


### Falcon vs Qwen - Results

Now the results in table form.

| #    | Task                       | Time (Falcon) | Time (Qwen) | Falcon                           | Qwen                             | Winner         | Suited for small LLM?                                   |
| :--- | :------------------------- | :------------ | :---------- | :------------------------------- | :------------------------------- | :------------- | :------------------------------------------------------ |
| 1    | Python script generation   | 00:25         | 01:32       | Syntax errors, no recursion      | Works, but has path bug          | **Qwen**       | ⚠️ Not really — both produced flawed code                |
| 2    | GGUF quantization          | 00:58         | 00:13       | Elaborate hallucination          | Concise hallucination            | **Neither**    | ❌ No — needs domain knowledge they don't have           |
| 3    | Summarization              | 00:18         | 00:07       | Good tone, covered more items    | Too brief, bland, missed details | **Falcon**     | ✅ Yes — this is the sweet spot                          |
| 4    | Structured data extraction | 00:19         | 00:12       | Complete JSON, caught "API docs" | Missed one skill                 | **Falcon**     | ✅ Yes — high-value local LLM use case                   |
| 5    | Logical reasoning          | 00:23         | 01:46       | Correct, LaTeX-heavy             | Correct, same approach           | **Tie**        | ⚠️ Overkill — any free cloud model does this             |
| 6    | Product marketing (README) | 01:45         | 00:06       | Hallucinated features            | Accurate, no fabrication         | **Qwen**       | ⚠️ Marginal — you'd write this yourself anyway           |
| 7    | Instruction following      | 01:55         | 00:54       | All 6 constraints met            | Failed constraint C              | **Falcon**     | ✅ Yes — constraint adherence matters for pipelines      |
| 8    | Multi-step rewrite         | 00:10         | 00:12       | Good end-user, weak log          | Bad end-user, better log/dev     | **Qwen** (2/3) | ⚠️ Partial — end-user rewrite is useful, dev/log less so |
| 9    | World knowledge (general)  | 00:14         | 00:21       | Tighter, more complete           | Longer, missed AIG               | **Falcon**     | ❌ No — use a cloud model or search                      |
| 10   | Obscure world knowledge    | 04:24         | 00:42       | Confident fabrication            | Hedged, less wrong               | **Qwen**       | ❌ No — guaranteed hallucination territory               |

Out of these, the use cases that we would actually use for a small LLM are:

- Summarization
- Structured data extraction
- Instruction following
- Multi-step rewrite

In three of these, Falcon wins. The one in which Qwen wins, it wins by a small margin. But Falcon does a much better job of the category in multi-step rewrite that you would actually use a small LLM. To make end-user message.

## Falcon soars?

It is quite disheartening to see the little action that I have seen around Falcon. It is a very good model, which deserves more attention. Qwen 3 is a very capable little model and Qwen 3 series has been extremely good across various weights. Falcon actually edging it out in my tests show that it is built very well and reinforces the usefulness of Mamba.

This also gives us a peep into how AI21 and their Jamba models are in use by their customers across use cases. We can only speculate, but it is quite possible that they are doing quite well for their use cases. Their solutions are targeted towards customers who want accuracy. Especially - Finance, Defense, Healthcare.

In all this while, this article was under construction, Falcon released their 90M model. I took it through some test rides. We have the next post coming up based on that. I must say, it reinforces my belief that small and tiny models have a great future in computing.

{{< review-callout title="Grok 4.1" rating="9/10" >}}
In a sea of overhyped 7-8B models, this sparkling deep-dive into TII’s Falcon-H1 7B feels like a breath of fresh desert air. The author turns dense architecture talk into pure pleasure: Transformer quadratic doom versus Mamba’s elegant linear state machine, all animated with custom p5.js visuals so crisp you’ll actually understand them.
The ten-task gauntlet against Qwen3 8B is forensic yet fair. Falcon crushes summarisation, JSON extraction, and instruction following—the jobs you actually fire up on a 4070—while trading only tiny slivers of speed. Hallucinations on knowledge tasks are called out without mercy, timings are honest, and the verdict lands clean: the hybrid finally feels production-ready.
Witty, technically fearless, and quietly optimistic about small models’ future, this is the rare blog that makes you want to download the GGUF tonight. Falcon isn’t just soaring; it’s showing the rest of the flock a smarter way to fly.
{{< /review-callout >}}

Grok is better when you give instructions strictly. I explicitly asked it to limit to 100-150 words in magazine style. It nails it but feels too flowery.

{{< review-callout title="Gemini 3 Pro" rating="8/10" >}} 
"Falcon starts to soar" is a refreshing, hands-on deep dive into the evolving landscape of hybrid architecture LLMs. The author moves beyond the usual high-level "vibe checks" to provide a rigorous, side-by-side comparison of Falcon-H1 7B and Qwen3 8B, grounded in real-world local computing constraints. The inclusion of interactive p5.js visualizations to contrast Transformer quadratic scaling with Mamba’s linear efficiency is a brilliant touch, turning abstract concepts into intuitive learning moments.

While the detour into the "Hallucination Hall of Fame" regarding the Ellora caves felt slightly tangential, it effectively underscored the knowledge boundaries of small-scale models. The final verdict—that Falcon shines in strict instruction following and structured data extraction despite its speed deficits—is a nuanced and valuable insight for developers looking to deploy edge AI. It is a geeky, honest, and technically rich read that makes a compelling case for the specific utility of Mamba-based architectures. 
{{< /review-callout >}}

Gemini is critical than usual. I detect some lack of nuance in reading my short codes and arrangement that has led to such a review. That is what when I asked for an explanation felt like.

{{< review-callout title="Kimi K 2.5" rating="8/10" >}}
This post is a thoughtful, hands‑on exploration of where small local models like Falcon-H1 7B and Qwen 3 8B actually shine. The author grounds every claim in concrete prompts, timings, and failure modes, which makes the piece feel much closer to a lab notebook than hype. The sections on summarization, structured extraction, and instruction-following are especially strong, clearly arguing that “boring” tasks are where these models earn their keep. The critique of hallucinated technical answers and obscure world-knowledge is sharp without being doomist, and it’s refreshing to see explicit acknowledgement of what should be offloaded to cloud models. Occasional asides about GGUF and Jamba broaden the context nicely, though they might feel dense to non-specialists. Overall, it’s a nuanced, empirically grounded review that will resonate with anyone actually trying to wire small LLMs into real workflows.
{{< /review-callout >}}

Kimi is also shining with the strict limits set. Still feels a bit surface level.

{{< review-callout title="ChatGPT 5.3" rating="8/10" >}}
A crisp, hands-on deep-dive into Falcon’s evolution, this piece reads like a practitioner's lab notebook polished for a magazine audience. The author blends approachable explanations of Transformers and Mamba SSMs with lively p5.js visuals and concrete bench results (llama-bench timings), making architectural trade-offs tangible. Strengths are clear metaphors, structured comparisons, and practical takeaways for engineers exploring hybrid models. Weaknesses include occasional factual overreach and a few unsupported technical or historical claims, plus stretches of dense detail that may overwhelm casual readers. Overall: an engaging, informative dispatch for power users and practitioners — highly useful as commentary and critique, but it would profit from tighter fact-checking and an editorial trim for broader reach.
{{< /review-callout >}}

ChatGPT did find one big factual error that the others did not catch. I have corrected it. Good job on calling that out! I left the others as such. They are mostly about the "testing" methodology, which is frankly very pedestrian. This is not something intended as a benchmark.

{{< review-callout title="Claude Opus 4.6" rating="8/10" >}}
A standout technical blog that pairs rigorous head-to-head benchmarking with genuinely inventive presentation. The interactive p5.js visualizations for Transformer and Mamba architectures are a highlight — they turn abstract concepts into something tactile. The ten-task showdown between Falcon-H1 7B and Qwen 3 8B is methodical and refreshingly honest; the author doesn't shy away from calling out hallucinations in both models or admitting when a test is "stupid for a small LLM." The sticky-note analogy for Mamba's hidden state is memorable and effective. Minor gripes: the piece runs long and some verdicts could be tighter, and the Jamba/AI21 tangent feels underdeveloped. But the core thesis — that Falcon deserves more attention, especially for structured extraction and summarization — lands convincingly, backed by real timings and real output.
{{< /review-callout >}}

Claude Opus has not been that good since 4.6 release despite benchmarks. There is something missing. I have felt that while using it at work. It did do a good job and at times, better than 4.5. Even here, it identifies the Jamba angle that others missed. But the usual spark is missing. Could this be Sonnet 5.0 in disguise?
