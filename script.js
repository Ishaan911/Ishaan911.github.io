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

function revealAll() {
  // 1. Show the hidden section
  const surpriseArea = document.getElementById("surprise-area");
  surpriseArea.style.display = "block";

  // 2. Animate the apology card
  const apologyCard = document.getElementById("apology-card");
  setTimeout(() => {
    apologyCard.classList.add("show");
  }, 100);

  // 3. Create a rain of hearts
  for (let i = 0; i < 20; i++) {
    setTimeout(createRainHeart, i * 150);
  }
}

function createRainHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.className = "heart-particle";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (Math.random() * 20 + 10) + "px";
  
  document.body.appendChild(heart);

  // Clean up heart after animation
  setTimeout(() => {
    heart.remove();
  }, 4000);
}
