let i = 0;
let imagesArray = [];
let time = 2000;
let intervalId;
let isRunning = true;

imagesArray[0] = './img/1.jpg';
imagesArray[1] = './img/2.jpg';
imagesArray[2] = './img/3.jpg';
imagesArray[3] = './img/4.jpg';

function changeImg() {
    let firstElement = document.getElementById('first-image');
    firstElement.src = imagesArray[i];

    if (i < imagesArray.length - 1) {
        i++;
    } else {
        i = 0;
    }
}

function startSlideshow() {
    isRunning = true;
    intervalId = setInterval(changeImg, time);
}

const stopButton = document.getElementById("stop");
const resumeButton = document.getElementById("resume");

stopButton.addEventListener("click", function() {
    if (isRunning) {
        clearInterval(intervalId);
        isRunning = false;
    }
});

resumeButton.addEventListener("click", function() {
    if (!isRunning) {
        startSlideshow();
    }
});

startSlideshow();