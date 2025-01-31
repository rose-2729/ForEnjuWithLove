document.getElementById("yesBtn").addEventListener("click", function() {
    document.getElementById("response").innerHTML = "Yay! 💖 I love you too, Enju! 😘";
});

document.getElementById("noBtn").addEventListener("mouseover", function() {
    this.style.position = "absolute";
    this.style.left = Math.random() * window.innerWidth + "px";
    this.style.top = Math.random() * window.innerHeight + "px";
});
