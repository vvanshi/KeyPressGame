let currentImages = [];

const handleEvent = (event) => {
    let key;

    // Determine the source of the event
    if (event.type === 'keydown') {
        key = event.key; // For key presses
    } else if (event.type === 'click') {
        key = event.target.dataset.key; // Use a custom data attribute for clicks
    }

    const imageMap = {
        1: ['o1', 'one'],
        2: ['o2', 'two'],
        3: ['o3', 'three'],
        4: ['o4', 'four'],
        5: ['o5', 'five'],
        6: ['o6', 'six'],
        7: ['o7', 'seven'],
        8: ['o8', 'eight'],
        9: ['o9', 'nine'],
        0: ['o0', 'zero'],
    };

    if (imageMap[key]) {
        const [image1, image2] = imageMap[key].map((id) => document.getElementById(id));
        if (currentImages.length > 0) {
            currentImages.forEach((image) => {
                image.style.animation = 'zoomOut 0.5s forwards';
            });
            setTimeout(() => {
                currentImages.forEach((image) => (image.style.display = 'none'));
                displayNewImages(image1, image2);
            }, 500);
        } else {
            displayNewImages(image1, image2);
        }
        currentImages = [image1, image2];
    }
};

function displayNewImages(image1, image2) {
    image1.style.display = 'block';
    image2.style.display = 'block';
    image1.style.animation = 'zoomIn 0.5s forwards';
    image2.style.animation = 'zoomIn 0.5s forwards';
    setTimeout(() => {
        image1.style.animation = 'zoomOut 0.5s forwards';
        image2.style.animation = 'zoomOut 0.5s forwards';
        setTimeout(() => {
            image1.style.display = 'none';
            image2.style.display = 'none';
        }, 500);
    }, 7000);
}

// Add event listeners for both keydown and click
document.addEventListener('keydown', handleEvent);
document.addEventListener('click', handleEvent);
