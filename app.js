const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const gif = document.querySelector("#gif");
const text = document.querySelector("#text");
const vid = document.querySelector("video");

let count = 2;

if (!yes || !no || !gif || !text) {
  console.error("Missing required elements!");
}

// preload gifs
[
  "catheart.gif",
  "resure.gif",
  "shocked1.gif",
  "sad1.gif",
  "sad2.gif",
  "idc.gif",
].forEach(src => {
  const img = new Image();
  img.src = src;
});

no.addEventListener("click", () => {
  if (count === 2) {
    gif.src = "resure.gif";
    text.innerHTML = "You meant to press YES right?🤨";
    yes.style.height = "65%";
    yes.style.width = "60%";
    no.style.width = "30%";
    count++;
  } else if (count === 3) {
    gif.src = "shocked1.gif";
    text.innerHTML = "Your hand must have slipped right?🥹";
    yes.style.height = "70%";
    yes.style.width = "70%";
    no.style.width = "20%";
    count++;
  } else if (count === 4) {
    gif.src = "sad1.gif";
    text.innerHTML = "I'm gonna cry😭";
    yes.style.height = "80%";
    yes.style.width = "80%";
    no.style.fontSize = "4vh";
    no.style.width = "10%";
    count++;
  } else if (count === 5) {
    gif.src = "sad2.gif";
    text.innerHTML = "Pretty Please🥺😘";
    yes.style.height = "90%";
    yes.style.width = "96%";
    no.style.display = "none";
  }
});

yes.addEventListener("click", () => {
  if (vid) vid.style.display = "block";

  gif.src = "idc.gif";
  text.innerHTML = "Knew it babe 😘";

  yes.style.height = "90%";
  yes.style.width = "96%";
  no.style.display = "none";

  // ✅ FIXED: Gamitin ang window.open para mas ligtas
  setTimeout(() => {
    const url = "https://www.facebook.com/share/1Dsu91hvwX/";
    window.open(url, "_self");
  }, 3000);
});
