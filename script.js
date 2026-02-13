document.addEventListener("DOMContentLoaded", () => {

    // Fade in page
    document.body.style.opacity = "1";

    // Scroll memory
    const scrollBox = document.querySelector(".scroll-box");

    if (localStorage.getItem("scrollPosition")) {
        scrollBox.scrollTop = localStorage.getItem("scrollPosition");
    }

    scrollBox.addEventListener("scroll", () => {
        localStorage.setItem("scrollPosition", scrollBox.scrollTop);
    });

    // Music toggle
    const music = document.getElementById("bg-music");
    const btn = document.getElementById("music-btn");

    btn.addEventListener("click", () => {
        if (music.paused) {
            music.play();
            btn.classList.add("playing");
        } else {
            music.pause();
            btn.classList.remove("playing");
        }
    });

});
