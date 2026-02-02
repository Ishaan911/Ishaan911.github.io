const text = "I made this little corner of the internet just for you 🌷";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 70);
  }
}

typeEffect();

function reveal() {
  document.getElementById("secret").style.display = "block";
}
