const images = document.querySelectorAll("#image-selection img")
const focus = document.querySelector("#focus img");

let i;
for (i=0; i<images.length; i++) {
    let source = images[i].src;
    images[i].addEventListener('click', function() {
        focus.src = source;
    });
}

const button = document.querySelector("button");
let isDark = false;
button.addEventListener('click', function () {
    if (isDark) {
        focus.style.filter = "brightness(100%)";
        isDark = false;
    } else {
        focus.style.filter = "brightness(50%)";
        isDark = true;
    }
});