// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const birthdayScreen = document.getElementById('birthday-screen');
    const slideshowScreen = document.getElementById('slideshow-screen');
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
            
            // Generate infinite balloons
            startBalloonGeneration();
            
            // After 5 seconds on birthday screen, start slideshow
            setTimeout(function() {
                startSlideshow();
            }, 5000);
        }, 1000);
    }, 5000);
});

// Slideshow functionality
let currentImageIndex = 1;
let slideshowInterval = null;

function startSlideshow() {
    const birthdayScreen = document.getElementById('birthday-screen');
    const slideshowScreen = document.getElementById('slideshow-screen');
    const birthdayText = document.querySelector('.birthday-text');
    const slideshowText = document.querySelector('.slideshow-text');
    const slideshowImage = document.getElementById('slideshow-image');
    
    // Slide out birthday text
    birthdayText.classList.add('slide-out-left');
    
    // After text slides out, transition to slideshow screen
    setTimeout(function() {
        birthdayScreen.classList.remove('active');
        slideshowScreen.classList.add('active');
        
        // Show first image
        slideshowImage.src = '1.png';
        slideshowImage.classList.add('slide-in-right');
        
        currentImageIndex = 1;
        
        // Transition through images 1-5
        let transitionCount = 0;
        const imageTransitionInterval = setInterval(function() {
            if (currentImageIndex < 5) {
                currentImageIndex++;
                transitionToNextImage(currentImageIndex);
                transitionCount++;
            } else {
                // After showing all 5 images, show text above and continue changing background
                clearInterval(imageTransitionInterval);
                
                // Show the birthday text above the image
                setTimeout(function() {
                    slideshowText.classList.add('visible');
                    
                    // Continue changing images in the background
                    startContinuousSlideshow();
                }, 1000);
            }
        }, 3000); // Change image every 3 seconds
    }, 1000);
}

function transitionToNextImage(imageNumber) {
    const slideshowImage = document.getElementById('slideshow-image');
    
    // Slide out current image
    slideshowImage.classList.remove('slide-in-right');
    slideshowImage.classList.add('slide-out-left');
    
    // After slide out animation, change image and slide in
    setTimeout(function() {
        slideshowImage.src = imageNumber + '.png';
        slideshowImage.classList.remove('slide-out-left');
        slideshowImage.classList.add('slide-in-right');
    }, 1000);
}

function startContinuousSlideshow() {
    const slideshowImage = document.getElementById('slideshow-image');
    let currentIndex = 1;
    
    // Continuously cycle through images
    slideshowInterval = setInterval(function() {
        currentIndex = (currentIndex % 5) + 1; // Cycle from 1 to 5
        
        // Fade transition for continuous slideshow
        slideshowImage.style.opacity = '0';
        
        setTimeout(function() {
            slideshowImage.src = currentIndex + '.png';
            slideshowImage.style.opacity = '1';
        }, 500);
    }, 4000); // Change image every 4 seconds
}

// Balloon generation system
let frontBalloonActive = false;

function startBalloonGeneration() {
    // Generate initial batch of balloons
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            generateBalloon();
        }, i * 800);
    }
    
    // Continue generating balloons at regular intervals
    setInterval(() => {
        generateBalloon();
    }, 2000);
}

function generateBalloon() {
    const balloonsContainer = document.querySelector('.balloons-container');
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    
    // Balloon colors
    const colors = [
        'radial-gradient(circle at 30% 30%, #ff6b9d, #c44569)',
        'radial-gradient(circle at 30% 30%, #4facfe, #00f2fe)',
        'radial-gradient(circle at 30% 30%, #ffd93d, #f6b93b)',
        'radial-gradient(circle at 30% 30%, #a8e6cf, #6bcf7f)',
        'radial-gradient(circle at 30% 30%, #ff9ff3, #feca57)',
        'radial-gradient(circle at 30% 30%, #a29bfe, #6c5ce7)',
        'radial-gradient(circle at 30% 30%, #fd79a8, #e84393)',
        'radial-gradient(circle at 30% 30%, #fdcb6e, #e17055)'
    ];
    
    // Random properties
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomLeft = 5 + Math.random() * 85; // Between 5% and 90%
    const randomDuration = 8 + Math.random() * 4; // Between 8 and 12 seconds
    
    // Decide if this balloon should be in front (only if no front balloon is active)
    // About 10% chance to be in front
    const shouldBeInFront = !frontBalloonActive && Math.random() < 0.1;
    
    if (shouldBeInFront) {
        balloon.classList.add('balloon-front');
        frontBalloonActive = true;
        
        // After this balloon finishes, allow another front balloon
        setTimeout(() => {
            frontBalloonActive = false;
        }, randomDuration * 1000);
    } else {
        balloon.classList.add('balloon-behind');
    }
    
    balloon.style.background = randomColor;
    balloon.style.left = randomLeft + '%';
    balloon.style.animation = `balloon-fall ${randomDuration}s linear forwards`;
    
    balloonsContainer.appendChild(balloon);
    
    // Remove balloon after animation completes
    setTimeout(() => {
        balloon.remove();
    }, randomDuration * 1000);
}

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
