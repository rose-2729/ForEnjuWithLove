
document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const loveSong = document.getElementById("loveSong");
    const photo = document.getElementById("photo");

    yesButton.addEventListener("click", function () {
        loveSong.play(); // Play the song
        photo.classList.remove("hidden"); // Show the photo
    });

    noButton.addEventListener("click", function () {
        alert("Aww, please reconsider! 💔");
    });
});
