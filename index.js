document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (key === 'a') {
        document.getElementById('image1').style.display = 'inline-block';
        document.getElementById('image2').style.display = 'inline-block';
        // // Play the audio
        // const audio = document.getElementById('audio');
        // audio.currentTime = 0; // Reset audio to the start
        // audio.play();
    }
});