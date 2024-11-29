let currentImages = []; 
document.addEventListener('keydown', (event) => {
    const key = event.key.toLowerCase();
    const imageMap = {
        a: ['apple1', 'apple2'],
        b: ['bat1', 'bat2'],
        c: ['cat1','cat2'],
        d: ['dog1','dog2'],
        e: ['ele1','ele2'],
        f: ['fish1','fish2'],
        g: ['grapes1','grapes2'],
        h: ['hut1','hut2'],
        i: ['ice1','ice2'],
        j: ['jug1','jug2'],
        k: ['kite1','kite2'],
        l: ['lion1','lion2'],
        m: ['moon1','moon2'],
        n: ['nest1','nest2'],
        o: ['orange1','orange2'],
        p: ['parrot1','parrot2'],
        q: ['queen1','queen2'],
        r: ['rat1','rat2'],
        s: ['sun1','sun2'],
        t: ['truck1','truck2'],
        u: ['umb1','umb2'],
        v: ['van1','van2'],
        w: ['watch1','watch2'],
        x: ['xmas1','xmas2'],
        y: ['yatch1','yatch2'],
        z: ['zebra1','zebra2']
    };
    if (imageMap[key]) {
        const [image1, image2] = imageMap[key].map(id => document.getElementById(id));
        if (currentImages.length > 0) {
            currentImages.forEach(image => {
                image.style.animation = 'zoomOut 0.5s forwards';
            });
            setTimeout(() => {
                currentImages.forEach(image => (image.style.display = 'none'));
                displayNewImages(image1, image2);
            }, 500);
        } else {
            displayNewImages(image1, image2);
        }
        currentImages = [image1, image2];
    }
});
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
