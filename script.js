const text = "I made this little corner of the internet just for you 🌷";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 70);
  }
}

// Start typing when page loads
window.onload = typeEffect;

const messages = [
  "The secret is that I love you, more than you! hehe.",
  "You're my favorite person to annoy and love. ❤️",
  "I promise to always be your biggest supporter.",
  "You're the best thing that's happened to me. ✨",
  "Sending you a million virtual hugs right now!"
];

function revealAll() {
  // Show the hidden area
  const surpriseArea = document.getElementById("surprise-area");
  surpriseArea.style.display = "block";

  // Pick a random message
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("secret-message").innerText = randomMsg;

  // Create a floating heart
  createHeart();
}

function createHeart() {
  const heart = document.createElement("div");
  heart.innerHTML = "❤️";
  heart.style.position = "fixed";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.bottom = "-5vh";
  heart.style.fontSize = (Math.random() * 20 + 20) + "px";
  heart.style.animation = "floatUp 3s ease-in forwards";
  heart.style.zIndex = "1000";
  
  document.body.appendChild(heart);

  // Clean up the heart after it floats away
  setTimeout(() => {
    heart.remove();
  }, 3000);
}
