function expandImage(imgs) {
    let expandImg = document.getElementById("expandedimg");
    let imgText = document.getElementById("imgtext");
    expandImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    expandImg.parentElement.style.display = "block";
}
