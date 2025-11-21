const playbackIcon = document.getElementById("playback-icon");
const carRevving = document.getElementById("car-revving");

playbackIcon.style.cursor = "pointer";

playbackIcon.addEventListener("click", () => {
    carRevving.currentTime = 0;
    carRevving.play();
});
