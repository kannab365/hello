const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Array of different GIFs and messages for the "No" button
const noMessages = [
    { text: "Are you sure? 🥺", gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOWh1MnRwaDBmN3R3cHZocmc4dzhhY3g1NW1oaGg1YjB3Y2VjaXV0dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WWUSelKQYSRNNYWCNR/giphy.gif" },
    { text: "Pretty please? 😢", gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGZkMXVmZTgzemNsbzE5OWl1aGNjZ3hhY2NkYTc0OHNmMmhuNXgyMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/rDUjFhC3FYJmaJpTEn/giphy.gif" },
    { text: "I'll be sad if you say no 😭", gif: "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjJvdWZzYXc1NGJ6aGp1cDE3b2dyNnVzOGN1andkMjVrMmRzeGwwZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3OhXBaoR1tVPW/giphy.gif" },
    { text: "Just say yes! 😍", gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExN2hxdTBhNXRudW1iZ3Q5Z2FzYnY5M3Exenc0dHBmaGczYmZtN3RndiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/2ToGIVzhdqym4/giphy.gif" }
];

let noClickCount = 0;

// Change text and GIF when the Yes button is clicked
yesBtn.addEventListener("click", () => {
    question.innerHTML = "Thank you my love🕺🫂. I love you😘🥰.";
    gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGNhdXh1b252b2F2b2U4cHRlNGkwMDZsajllaGF1cDJyb2p4NXl2YiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/G6N0pDDgDpLjUvNoyQ/giphy.gif";

    // Hide the No button
    noBtn.style.display = "none";
});

// Change text and GIF when the No button is clicked
noBtn.addEventListener("click", () => {
    if (noClickCount < noMessages.length) {
        question.innerHTML = noMessages[noClickCount].text;
        gif.src = noMessages[noClickCount].gif;
        noClickCount++;
    } else {
        // Loop back to the first message if we've reached the end
        noClickCount = 0;
        question.innerHTML = noMessages[noClickCount].text;
        gif.src = noMessages[noClickCount].gif;
    }

    // Move the No button randomly
    const wrapper = document.querySelector(".wrapper");
    const wrapperRect = wrapper.getBoundingClientRect();
    const noBtnRect = noBtn.getBoundingClientRect();

    const maxX = wrapperRect.width - noBtnRect.width - 100; // Keep 100px margin from right
    const maxY = wrapperRect.height - noBtnRect.height - 100; // Keep 100px margin from bottom

    const randomX = Math.min(Math.floor(Math.random() * maxX), maxX);
    const randomY = Math.min(Math.floor(Math.random() * maxY), maxY);

    noBtn.style.transition = "left 0.3s, top 0.3s";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
});



// Function to create hearts and animate them across the page
function createHearts() {
  const heartsContainer = document.querySelector('.hearts');
  for (let i = 0; i < 15; i++) {
      let heart = document.createElement('div');
      heart.innerHTML = '❤️';
      heart.classList.add('heart');
      
      // Randomize the horizontal position (across the whole screen)
      const randomLeft = Math.random() * window.innerWidth + 'px';
      
      // Randomize the vertical position (appearing from the bottom to top)
      const randomTop = window.innerHeight + Math.random() * 100 + 'px';  // Start from bottom
      
      // Randomize the animation duration
      const animationDuration = Math.random() * 3 + 2; // Between 2s and 5s
      
      heart.style.left = randomLeft;
      heart.style.top = randomTop;
      heart.style.animationDuration = `${animationDuration}s`;

      heartsContainer.appendChild(heart);

      // Remove the heart after the animation duration
      setTimeout(() => heart.remove(), animationDuration * 1000);
  }
}

// Create hearts every 800ms
setInterval(createHearts, 800);
