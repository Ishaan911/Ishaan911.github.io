const text = "I made this little corner of the internet just for you 🌷";
let index = 0;

// Typing animation
function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 70);
  }
}
window.onload = typeEffect;

// Logic to play music automatically on first interaction
window.addEventListener('click', () => {
  const music = document.getElementById("bg-music");
  if (music.paused) {
    music.play().catch(e => console.log("Audio play blocked until interaction"));
    document.querySelector(".music-toggle").innerText = "⏸ Music: On";
  }
}, { once: true });

const reasons = [
  "Your smile brightens my darkest days. ☀️",
  "The way you handle everything with grace. ✨",
  "Because you're my best friend and my love. ❤️",
  "The way you listen to my nonsense. 😂",
  "You make me want to be a better person.",
  "Your kindness towards others is inspiring. 🌸",
  "How you look so cute when you're laughing. 🥰"
];

function generateReason() {
  const display = document.getElementById("reason-display");
  const randomReason = reasons[Math.floor(Math.random() * reasons.length)];
  display.innerText = randomReason;
}

function revealAll() {
  // Ensure music is playing
  const music = document.getElementById("bg-music");
  music.play();
  document.querySelector(".music-toggle").innerText = "⏸ Music: On";

  // Show content
  document.getElementById("surprise-area").style.display = "block";
  
  // Trigger apology animation
  setTimeout(() => { 
    document.getElementById("apology-card").classList.add("show"); 
  }, 150);

  // Heart rain effect
  for (let i = 0; i < 25; i++) { 
    setTimeout(createRainHeart, i * 150); 
  }
}

function createRainHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.className = "heart-particle";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 15) + "px";
  document.body.appendChild(heart);
  setTimeout(() => { heart.remove(); }, 4000);
}

function toggleMusic() {
  const music = document.getElementById("bg-music");
  const btn = document.querySelector(".music-toggle");
  if (music.paused) { 
    music.play(); 
    btn.innerText = "⏸ Music: On"; 
  } else { 
    music.pause(); 
    btn.innerText = "🎵 Music: Off"; 
  }
}
