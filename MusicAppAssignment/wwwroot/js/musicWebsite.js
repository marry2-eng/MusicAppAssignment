document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const animatedText = document.getElementById('animatedText');
    const animateButton = document.getElementById('animateButton');
    const changeVideoButton = document.getElementById('changeVideoButton');
    const moodSelector = document.getElementById('moodSelector');
    const musicVideo = document.getElementById('musicVideo');
    const songTitle = document.getElementById('songTitle');
    const songDescription = document.getElementById('songDescription');
    const songInfo = document.getElementById('songInfo');
    
    // Variables
    let isAnimating = false;
    let currentVideoIndex = 0;
    
    // Music quotes for animation
    const musicQuotes = [
        "Music gives a soul to the universe, wings to the mind, flight to the imagination.",
        "Where words fail, music speaks.",
        "Music is the universal language of mankind.",
        "Music is the soundtrack of your life.",
        "Life is a song - sing it!"
    ];
    
    // Playlist videos
    const playlistVideos = [
        {
            url: "https://www.youtube.com/embed/d-diB65scQU?si=0yJk6Yf2NNwbO4d_",
            title: "Don't Worry, Be Happy - Bobby McFerrin",
            description: "A classic feel-good song that reminds us to stay positive."
        },
        {
            url: "https://www.youtube.com/embed/ZbZSe6N_BXs?si=vRnZWNqM3xBAKcbj",
            title: "Happy - Pharrell Williams",
            description: "An upbeat song that's guaranteed to make you smile and dance."
        },
        {
            url: "https://www.youtube.com/embed/y6Sxv-sUYtM?si=eeXhJeJ3MwABdcxO",
            title: "Sunshine Reggae - Laid Back",
            description: "Feel the sunshine with this cheerful summer hit."
        }
    ];
    
    // Mood videos
    const moodVideos = {
        "happy": {
            url: "https://www.youtube.com/embed/d-diB65scQU?si=0yJk6Yf2NNwbO4d_",
            title: "Don't Worry, Be Happy - Bobby McFerrin",
            description: "A classic feel-good song that reminds us to stay positive."
        },
        "relaxed": {
            url: "https://www.youtube.com/embed/0E1bNmDLWxE?si=qU5RDYAoRaI9mqwE",
            title: "Weightless - Marconi Union",
            description: "Scientifically designed to reduce anxiety and induce relaxation."
        },
        "energetic": {
            url: "https://www.youtube.com/embed/btPJPFnesV4?si=BtbRPp9tg1H8LRrT",
            title: "Eye of the Tiger - Survivor",
            description: "The ultimate motivational song to get you pumped up!"
        },
        "focused": {
            url: "https://www.youtube.com/embed/9E6b3swbnWg?si=tgRzK9eZLKCUbJum",
            title: "Experience - Ludovico Einaudi",
            description: "Beautiful piano piece perfect for concentration and focus."
        }
    };
    
    // Event Listeners
    animateButton.addEventListener('click', startAnimation);
    changeVideoButton.addEventListener('click', changeVideo);
    moodSelector.addEventListener('change', changeMood);
    
    // Animation function
    function startAnimation() {
        if (isAnimating) return;
        
        isAnimating = true;
        animateButton.disabled = true;
        animateButton.textContent = "Animating...";
        
        // Display a random music quote
        const randomQuote = musicQuotes[Math.floor(Math.random() * musicQuotes.length)];
        animatedText.textContent = randomQuote;
        
        // Start color change animation
        animatedText.style.animation = "colorChange 4s infinite";
        
        // Bouncing animation
        let position = 0;
        let direction = 1;
        const maxTranslation = 30;
        const animationInterval = setInterval(() => {
            position += 5 * direction;
            if (position >= maxTranslation || position <= -5) {
                direction *= -1;
            }
            animatedText.style.transform = `translateY(${position}px)`;
        }, 100);
        
        // Stop the animation after 5 seconds
        setTimeout(() => {
            clearInterval(animationInterval);
            animatedText.style.transform = "";
            
            setTimeout(() => {
                animatedText.style.animation = "";
                animatedText.textContent = "Click the button to start the animation!";
                isAnimating = false;
                animateButton.disabled = false;
                animateButton.textContent = "Animate Text";
            }, 1000);
        }, 5000);
    }
    
    // Function to change the video from the playlist
    function changeVideo() {
        currentVideoIndex = (currentVideoIndex + 1) % playlistVideos.length;
        const selectedVideo = playlistVideos[currentVideoIndex];
        
        musicVideo.src = selectedVideo.url;
        songTitle.textContent = selectedVideo.title;
        songDescription.textContent = selectedVideo.description;
        
        // Animate the song info display
        songInfo.classList.remove("fade-out");
        songInfo.classList.add("fade-in");
    }
    
    // Function to change the video based on mood selection
    function changeMood(event) {
        const mood = event.target.value;
        const video = moodVideos[mood];
        
        if (video) {
            musicVideo.src = video.url;
            songTitle.textContent = video.title;
            songDescription.textContent = video.description;
            
            // Animate the song info display
            songInfo.classList.remove("fade-out");
            songInfo.classList.add("fade-in");
        }
    }
});
