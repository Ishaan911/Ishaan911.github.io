const text = "I made this little corner of the internet just for you 🌷";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 70);
  }
}
window.onload = typeEffect;

const reasons = [
  "Your smile brightens my darkest days. ☀️",
  "The way you handle everything with grace. ✨",
  "Because you're my best friend and my love. ❤️",
  "The way you listen to my nonsense. 😂",
  "You make me want to be a better person."
];

function generateReason() {
  const display = document.getElementById("reason-display");
  const randomReason = reasons[Math.floor(Math.random() * reasons.length)];
  display.innerText = randomReason;
}

function revealAll() {
  document.getElementById("surprise-area").style.display = "block";
  setTimeout(() => { document.getElementById("apology-card").classList.add("show"); }, 100);
  for (let i = 0; i < 20; i++) { setTimeout(createRainHeart, i * 150); }
}

function createRainHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.className = "heart-particle";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 10) + "px";
  document.body.appendChild(heart);
  setTimeout(() => { heart.remove(); }, 4000);
}

function toggleMusic() {
  const music = document.getElementById("bg-music");
  const btn = document.querySelector(".music-toggle");
  if (music.paused) { music.play(); btn.innerText = "⏸ Pause Music"; } 
  else { music.pause(); btn.innerText = "🎵 Play Music"; }
}
