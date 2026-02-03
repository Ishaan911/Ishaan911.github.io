const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");
const box = document.querySelector(".playground");

noBtn.addEventListener("mouseenter", () => {
    const minJump = 120; // 👈 THIS is the distance knob (try 80–200)

    const boxW = box.clientWidth - noBtn.offsetWidth;
    const boxH = box.clientHeight - noBtn.offsetHeight;

    let newX, newY;
    let dx, dy;

    do {
        newX = Math.random() * boxW;
        newY = Math.random() * boxH;

        dx = newX - noBtn.offsetLeft;
        dy = newY - noBtn.offsetTop;
    } while (Math.hypot(dx, dy) < minJump); // ensure it's far enough

    noBtn.style.left = newX + "px";
    noBtn.style.top = newY + "px";
});


yesBtn.addEventListener("click", () => {
    message.style.display = "block";
});
