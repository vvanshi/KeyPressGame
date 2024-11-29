document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    if (key === 'a') {
        const image1 = document.getElementById('image1');
        const image2 = document.getElementById('image2');

        // Display images
        image1.style.display = 'inline-block';
        image2.style.display = 'inline-block';

        // Timeout to hide images after 10 seconds
        setTimeout(() => {
            image1.style.display = 'none';
            image2.style.display = 'none';
        }, 10000); // 10000ms = 10 seconds
    }
});
