function show(...args) {
    document.getElementsByClassName(args[0])[0].style = "display: flex";
    document.getElementsByClassName(args[1])[0].style = "display: none";
    document.getElementsByClassName(args[2])[0].style = "display: none";
}

function show_all(...args) {
    document.getElementsByClassName(args[0])[0].style = "display: flex";
    document.getElementsByClassName(args[1])[0].style = "display: flex";
    document.getElementsByClassName(args[2])[0].style = "display: flex";
}
