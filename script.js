const text = "I made this little corner of the internet just for you 🌷";
let index = 0;

// 1. Typing Effect (Runs immediately)
function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 70);
  }
}
window.onload = typeEffect;

// 2. Reveal the Menu (Hides the main button, shows options)
function revealMenu() {
  document.getElementById('mainButton').style.display = 'none';
  document.getElementById('menu-area').style.display = 'block';
}

// 3. Show Specific Section content
function showSection(type) {
  const display = document.getElementById('dynamic-content');
  const view = document.getElementById('content-display');
  const menu = document.querySelector('.split-menu');
  
  // Hide menu, show content area
  menu.style.display = 'none';
  view.style.display = 'block';
  display.innerHTML = ''; // Clear old content

  // --- LOGIC FOR PHOTOS ---
  if (type === 'photos') {
    let html = '<div class="photo-grid">';
    // NOTE: Make sure your photos are named 1.jpg, 2.jpg... up to 15.jpg in "photos" folder
    for(let i=1; i<=12; i++) {
      html += `<img src="photos/${i}.jpg" alt="Memory" onerror="this.style.display='none'">`;
    }
    html += '</div>';
    display.innerHTML = html;
  } 

  // --- LOGIC FOR AUDIO ---
  else if (type === 'audio') {
    // List your audio filenames here exactly as they are in the folder
    const audioFiles = ['voice-note.mp3', 'song-for-you.mp3', 'laughing.mp3']; 
    
    audioFiles.forEach(file => {
      // This removes the ".mp3" extension for the display title
      const cleanName = file.replace('.mp3', '').replace(/-/g, ' '); 
      
      display.innerHTML += `
        <div class="audio-item">
          <span class="audio-name">🎵 ${cleanName}</span>
          <audio controls>
            <source src="audio/${file}" type="audio/mpeg">
            Your browser does not support audio.
          </audio>
        </div>`;
    });
  }

  // --- LOGIC FOR LETTERS/PDFs ---
  else if (type === 'letters') {
    display.innerHTML = `
      <div style="display:flex; flex-direction:column; gap:10px;">
        <a href="letters/love-letter.pdf" target="_blank" class="menu-btn" style="text-align:center; text-decoration:none;">
           📜 Open PDF Letter
        </a>
        <button class="menu-btn" onclick="readTxt('letters/note.txt')">
           📝 Read Secret Note
        </button>
        <div id="text-reader" style="background:#f9f9f9; padding:10px; border-radius:5px; margin-top:10px; font-size:0.9rem;"></div>
      </div>`;
  }

  // --- LOGIC FOR SURPRISE MESSAGES ---
  else if (type === 'surprise') {
    // You can upload a text file named "surprise.txt" in "letters" folder
    readTxt('letters/surprise.txt');
    display.innerHTML += `<div id="text-reader" style="white-space: pre-wrap; text-align:left; color:#555;">Loading message...</div>`;
  }
}

// Helper to read text files
function readTxt(filePath) {
  fetch(filePath)
    .then(response => response.text())
    .then(data => {
      const reader = document.getElementById('text-reader');
      if(reader) reader.innerText = data;
    })
    .catch(err => {
      const reader = document.getElementById('text-reader');
      if(reader) reader.innerText = "Could not load the note. Check if the file exists!";
    });
}

// 4. Back Button Logic
function hideContent() {
  document.getElementById('content-display').style.display = 'none';
  document.querySelector('.split-menu').style.display = 'flex';
}
