const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const question = document.getElementById('question');

// Function to move the "No" button to a random location
function moveButton() {
    // Calculate available screen space subtracting button size roughly
    const maxX = window.innerWidth - noBtn.offsetWidth - 50;
    const maxY = window.innerHeight - noBtn.offsetHeight - 50;

    // Generate random coordinates within safety boundaries
    const randomX = Math.max(10, Math.floor(Math.random() * maxX));
    const randomY = Math.max(10, Math.floor(Math.random() * maxY));

    // Override the button's CSS placement rules
    noBtn.style.position = 'fixed';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

// Triggers whenever the mouse moves over the button or it gets tapped
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault(); // Prevents clicking action on mobile
    moveButton();
});

// Update the user interface when they manage to click "Yes"
yesBtn.addEventListener('click', () => {
    question.textContent = "Yay! I knew you loved me! 🥰❤️";
    noBtn.style.display = 'none';
    yesBtn.style.display = 'none';
});
