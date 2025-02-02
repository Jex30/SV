// 🎬 Animación de introducción
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("flower").classList.add("show-flower");
    }, 1000);

    setTimeout(() => {
        document.querySelector(".intro-text").style.opacity = "1";
    }, 1500);

    setTimeout(() => {
        document.getElementById("startBtn").classList.remove("hidden");
    }, 4000);
});

// 🎬 Pasar a la pregunta
document.getElementById("startBtn").addEventListener("click", function () {
    document.getElementById("intro").style.display = "none";
    document.getElementById("question").classList.remove("hidden");
});

// 🎆 Explosión de corazones
function createHeartExplosion() {
    for (let i = 0; i < 50; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = Math.random() * 100 + "vh";
        heart.style.width = "20px";
        heart.style.height = "20px";
        heart.style.backgroundImage = "url('https://cdn-icons-png.flaticon.com/512/833/833472.png')";
        heart.style.backgroundSize = "cover";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    }
}

// 💖 Si dice que sí, muestra el amor infinito
document.getElementById("yesBtn").addEventListener("click", function () {
    document.getElementById("question").style.display = "none";
    document.getElementById("celebration").classList.remove("hidden");
    setInterval(createHeartExplosion, 300);
});

// 😢 Si dice que no
document.getElementById("noBtn").addEventListener("click", function () {
    alert("¿En serio? 😭 ¡No te preocupes, te seguiré queriendo!");
});
