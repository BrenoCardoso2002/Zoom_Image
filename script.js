const image = document.querySelector('img');

function zoomIn() {
    image.style.transform = "scale(1.5)";
}

function zoomOut() {
    image.style.transform = "scale(1)";
}

image.addEventListener('mouseover', function(event) {
    zoomIn()
});

image.addEventListener('mouseout', function(event) {
    zoomOut()
});