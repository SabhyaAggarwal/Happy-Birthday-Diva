// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const birthdayScreen = document.getElementById('birthday-screen');
    const audio = document.getElementById('birthday-audio');
    
    // After 5 seconds, transition to birthday screen
    setTimeout(function() {
        // Fade out welcome screen
        welcomeScreen.classList.remove('active');
        
        // Small delay before showing birthday screen
        setTimeout(function() {
            birthdayScreen.classList.add('active');
            
            // Start playing audio
            audio.play().catch(function(error) {
                console.log('Audio playback failed:', error);
                // Some browsers require user interaction for audio
            });
            
            // Generate confetti
            generateConfetti();
            
            // Generate sparkles
            generateSparkles();
        }, 1000);
    }, 5000);
});

// Function to generate confetti
function generateConfetti() {
    const confettiContainer = document.querySelector('.confetti-container');
    const colors = ['#ff6b9d', '#4facfe', '#ffd93d', '#6bcf7f', '#ff9ff3', '#feca57'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Random properties
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomLeft = Math.random() * 100;
        const randomDelay = Math.random() * 3;
        const randomDuration = 3 + Math.random() * 4;
        const randomSize = 5 + Math.random() * 10;
        
        confetti.style.backgroundColor = randomColor;
        confetti.style.left = randomLeft + '%';
        confetti.style.width = randomSize + 'px';
        confetti.style.height = randomSize + 'px';
        confetti.style.animationDelay = randomDelay + 's';
        confetti.style.animationDuration = randomDuration + 's';
        
        // Random shapes
        if (Math.random() > 0.5) {
            confetti.style.borderRadius = '50%';
        }
        
        confettiContainer.appendChild(confetti);
        
        // Remove and recreate confetti for continuous effect
        setTimeout(function() {
            confetti.remove();
            createNewConfetti(confettiContainer, colors);
        }, (randomDelay + randomDuration) * 1000);
    }
}

// Function to create new confetti piece
function createNewConfetti(container, colors) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomLeft = Math.random() * 100;
    const randomDuration = 3 + Math.random() * 4;
    const randomSize = 5 + Math.random() * 10;
    
    confetti.style.backgroundColor = randomColor;
    confetti.style.left = randomLeft + '%';
    confetti.style.width = randomSize + 'px';
    confetti.style.height = randomSize + 'px';
    confetti.style.animationDuration = randomDuration + 's';
    
    if (Math.random() > 0.5) {
        confetti.style.borderRadius = '50%';
    }
    
    container.appendChild(confetti);
    
    setTimeout(function() {
        confetti.remove();
        createNewConfetti(container, colors);
    }, randomDuration * 1000);
}

// Function to generate sparkles
function generateSparkles() {
    const sparklesContainer = document.querySelector('.sparkles');
    const sparkleCount = 50;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        const randomTop = Math.random() * 100;
        const randomLeft = Math.random() * 100;
        const randomDelay = Math.random() * 2;
        
        sparkle.style.top = randomTop + '%';
        sparkle.style.left = randomLeft + '%';
        sparkle.style.animationDelay = randomDelay + 's';
        
        sparklesContainer.appendChild(sparkle);
    }
}
