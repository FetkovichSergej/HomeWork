let body;
let div;
let header;
let header_sub_title;
window.onload = () => {
    createHeaderElements();
    createMainElements();
};
function createHeaderElements() {
    body = document.querySelector("body");
    div = document.createElement("div");
    body.appendChild(div);
    header = document.createElement("h1");
    div.appendChild(header);
    header.innerText = "Choose Your Option";
    header_sub_title = document.createElement("p");
    div.appendChild(header_sub_title);
    header_sub_title.innerText =
        "But i must explain to you how all this mistaken idea of denoucing";
    div.classList.add("header");
}
function createMainElements() {
    const main = document.createElement("main");
    body.appendChild(main);
    createFreelancerElement(main);
    createStudioElement(main);
}
function createFreelancerElement(element) {
    const freelancer = document.createElement("div");
    freelancer.append(
        document.createElement("p"),
        document.createElement("h1"),
        document.createElement("p"),
        document.createElement("button")
    );
    freelancer.querySelectorAll("p")[0].innerText = "FREELANCER";
    freelancer.querySelectorAll("p")[1].innerHTML =
        "But I must explain to you how all this<br>mistaken idea of denouncing ";
    freelancer.querySelector("h1").innerHTML = "Initially<br>designed to";
    freelancer.querySelector("button").innerText = "Start Here";
    element.appendChild(freelancer);
    freelancer.classList.add("freelancer");
}
function createStudioElement(element) {
    const studio = document.createElement("div");
    studio.append(
        document.createElement("p"),
        document.createElement("h1"),
        document.createElement("p"),
        document.createElement("button")
    );
    studio.querySelectorAll("p")[0].innerText = "STUDIO";
    studio.querySelectorAll("p")[1].innerHTML =
        "But I must explain to you how all this<br>mistaken idea of denouncing ";
    studio.querySelector("h1").innerHTML = "Initially<br>designed to";
    studio.querySelector("button").innerText = "Start Here";

    element.appendChild(studio);
    studio.classList.add("studio");
}
