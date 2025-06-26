let clickCounter = 0;
let moodChanged = false;

function changeMood(mood) {
    const moodParagraph = document.querySelector('.description');
    const baseMap = document.querySelector('.base-map');
    const overlayMap = document.querySelector('.overlay-map');

    if (mood === 0) {
        moodParagraph.innerText = 'Parking Lots in Los Angeles, source: Los Angeles County';
        baseMap.src = 'source/250619-Map1-v3-01.png';
        overlayMap.style.opacity = 0;
    } else if (mood === 1) {
        moodParagraph.innerText = 'Commercial Parking Lots in Los Angeles, source: Los Angeles County';
        baseMap.src = 'source/250619-Map2-v2-01.png';
        overlayMap.style.opacity = 0;
    } else if (mood === 2) {
        moodParagraph.innerText = 'Concentration of the commercial parking lots';
        baseMap.src = 'source/250619-Map1-v3-01.png';
        overlayMap.style.opacity = 1;
    }
}

// Optional: throttle helper to prevent rapid triggers
let throttleTimer = null;

window.addEventListener('wheel', function (event) {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.offsetHeight;

    const atBottom = (scrollTop + windowHeight) >= (documentHeight - 5);

    if (atBottom) {
        // Optional throttle
        if (throttleTimer) return;
        throttleTimer = setTimeout(() => throttleTimer = null, 400);

        // Only respond if actually scrolling past the bottom
        if (event.deltaY > 0) {
            clickCounter = (clickCounter + 1) % 3;
            changeMood(clickCounter);
        }
    }
});
