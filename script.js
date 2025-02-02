{\rtf1\ansi\ansicpg1252\cocoartf2821
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // \uc0\u55356 \u57260  Animaci\'f3n de introducci\'f3n\
document.addEventListener("DOMContentLoaded", function () \{\
    setTimeout(() => \{\
        document.getElementById("flower").classList.add("show-flower");\
    \}, 1000);\
\
    setTimeout(() => \{\
        document.querySelector(".intro-text").style.opacity = "1";\
    \}, 1500);\
\
    setTimeout(() => \{\
        document.getElementById("startBtn").classList.remove("hidden");\
    \}, 4000);\
\});\
\
// \uc0\u55356 \u57260  Pasar a la pregunta\
document.getElementById("startBtn").addEventListener("click", function () \{\
    document.getElementById("intro").style.display = "none";\
    document.getElementById("question").classList.remove("hidden");\
\});\
\
// \uc0\u55356 \u57222  Explosi\'f3n de corazones\
function createHeartExplosion() \{\
    for (let i = 0; i < 50; i++) \{\
        let heart = document.createElement("div");\
        heart.classList.add("heart");\
        heart.style.left = Math.random() * 100 + "vw";\
        heart.style.top = Math.random() * 100 + "vh";\
        heart.style.width = "20px";\
        heart.style.height = "20px";\
        heart.style.backgroundImage = "url('https://cdn-icons-png.flaticon.com/512/833/833472.png')";\
        heart.style.backgroundSize = "cover";\
        document.body.appendChild(heart);\
\
        setTimeout(() => \{\
            heart.remove();\
        \}, 2000);\
    \}\
\}\
\
// \uc0\u55357 \u56470  Si dice que s\'ed, muestra el amor infinito\
document.getElementById("yesBtn").addEventListener("click", function () \{\
    document.getElementById("question").style.display = "none";\
    document.getElementById("celebration").classList.remove("hidden");\
    setInterval(createHeartExplosion, 300);\
\});\
\
// \uc0\u55357 \u56866  Si dice que no\
document.getElementById("noBtn").addEventListener("click", function () \{\
    alert("\'bfEn serio? \uc0\u55357 \u56877  \'a1No te preocupes, te seguir\'e9 queriendo!");\
\});\
}