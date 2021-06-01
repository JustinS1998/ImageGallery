const images = document.querySelectorAll("#image-selection img")
const focus = document.querySelector("#focus img");

let i;
for (i=0; i<images.length; i++) {
    let source = images[i].src;
    images[i].addEventListener('click', function() {
        focus.src = source;
    });
}