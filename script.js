
document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const loveSong = document.getElementById("loveSong");
    const photo = document.getElementById("photo");

    yesButton.addEventListener("click", function () {
        loveSong.play(); // Play the song
        photo.classList.remove("hidden"); // Show the photo
    });
});