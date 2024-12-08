const text = "Hi there! I'm Aunger";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").textContent += text[i];
    i++;
    setTimeout(typeEffect, 100); // Adjust speed here
  } else {
    // Reset the text and start over
    setTimeout(() => {
      document.getElementById("typing").textContent = ''; // Clear text
      i = 0; // Reset index to start typing from the beginning
      typeEffect(); // Restart typing effect
    }, 1000); // Delay before restarting (1 second)
  }
}

window.onload = typeEffect;
