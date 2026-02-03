const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const box = document.querySelector(".buttons");

noBtn.addEventListener("mouseenter", () => {
    const boxWidth = box.clientWidth;
    const boxHeight = box.clientHeight;

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const maxX = boxWidth - btnWidth;
    const maxY = boxHeight - btnHeight;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});
