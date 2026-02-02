const text = "I made this little corner of the internet just for you 🌷";
let index = 0;

// Typing effect
function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 70);
  }
}
typeEffect();

// Random messages array
const messages = [
  "The secret is that i love you, more than you! hehe.",
  "You're my favorite person to annoy and love. ❤️",
  "I promise you'll see the best version of me, for you.",
  "Thank you for being exactly who you are. ✨",
  "Just a reminder: You're doing great, and I'm proud of you."
];

function revealAll() {
  // Show the hidden section
  const area = document.getElementById("surprise-area");
  area.style.display = "block";

  // Pick a random message from the list
  const randomMsg = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("secret-message").innerText = randomMsg;
  
  // Optional: Add a small animation effect
  area.style.animation = "fadeIn 1s";
}
