const text = "Every moment with you is a treasure... 🌷";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 70);
  }
}
window.onload = typeEffect;

function revealMenu() {
  document.getElementById('mainButton').style.display = 'none';
  document.getElementById('menu-area').classList.remove('hidden');
}

function showSection(type) {
  const display = document.getElementById('dynamic-content');
  const view = document.getElementById('content-display');
  const menu = document.querySelector('.split-menu');
  
  menu.style.display = 'none';
  view.style.display = 'block';
  display.innerHTML = ''; // Clear previous content

  if (type === 'photos') {
    let html = '<div class="photo-grid">';
    // Example: looping through 12 photos named 1.jpg to 12.jpg in 'photos/' folder
    for(let i=1; i<=12; i++) {
      html += `<img src="photos/${i}.jpg" alt="Memory">`;
    }
    html += '</div>';
    display.innerHTML = html;
  } 

  else if (type === 'audio') {
    const songs = ['Our First Call', 'Your Favorite Song', 'Voice Note'];
    const files = ['audio1.mp3', 'audio2.mp3', 'audio3.mp3']; // actual filenames in audio/
    songs.forEach((song, i) => {
      display.innerHTML += `
        <div class="audio-item">
          <span>${song}</span>
          <audio controls><source src="audio/${files[i]}" type="audio/mpeg"></audio>
        </div>`;
    });
  }

  else if (type === 'letters') {
    // PDF link and Text file demo
    display.innerHTML = `
      <div class="item-list">
        <div class="file-item"><a href="letters/letter1.pdf" target="_blank">📜 Anniversary Letter (PDF)</a></div>
        <div class="file-item" style="cursor:pointer" onclick="readTxt('letters/note.txt')">📝 Open Secret Note (.txt)</div>
        <div id="text-reader" style="margin-top:10px; font-style:italic; color:#555"></div>
      </div>`;
  }
}

function readTxt(filePath) {
  fetch(filePath)
    .then(response => response.text())
    .then(data => {
      document.getElementById('text-reader').innerText = data;
    });
}

function hideContent() {
  document.getElementById('content-display').style.display = 'none';
  document.querySelector('.split-menu').style.display = 'flex';
}
