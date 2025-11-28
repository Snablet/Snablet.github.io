// grab playback icon and audio
const playbackIcon = document.getElementById("playback-icon");
const carRevving = document.getElementById("car-revving");

// make cursor show clickable hand
playbackIcon.style.cursor = "pointer";

// play engine sound when icon is clicked
playbackIcon.addEventListener("click", () => {
    carRevving.currentTime = 0; // restart audio from the beginning
    carRevving.play();          // play the sound
});
