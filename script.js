const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const box = document.querySelector(".playground");

noBtn.addEventListener("mouseenter", () => {
    const maxX = box.clientWidth - noBtn.offsetWidth;
    const maxY = box.clientHeight - noBtn.offsetHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

yesBtn.addEventListener("click", () => {
    message.style.display = "block";
});
