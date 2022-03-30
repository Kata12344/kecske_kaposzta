window.addEventListener("load", init);

function ID(elem) {
    return document.getElementById(elem);
}

function $(elem) {
    return document.querySelectorAll(elem);
}

function Class(elem) {
    return document.getElementsByClassName(elem);
}

function init() {
    nev();
    tombKiir();


}

function kiemeles() {
    kiemel()
}
function nev() {
    document.getElementsByTagName("title")[0].innerHTML = "Szundi Kata";
    document.querySelector("footer p").innerHTML ="Szundi Kata";
    document.querySelector("footer p").style.textAlign ="center";
    document.querySelector("footer p").style.fontSize ="20px";
    document.querySelector("h1").style.textAlign ="center";
}

function tombKiir() {
     var tomb = $("img");
    for (let index = 0; index < 3; index++) {
        tomb[index].addEventListener("cilck", tombkiir);
        tomb[index].addEventListener("mouseover", hover);
        tomb[index].addEventListener("mouseout", hoverOff);
    }
    console.log(eleresitomb);
}

function tombkiir() {
    eleresitomb.push(event.target.src)
}

function hover() {
    event.target.className += "kiemel";
}

function hoverOff() {
    event.target.className += "";
}