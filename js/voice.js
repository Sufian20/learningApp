
var images = document.querySelector("#my-img");

function a() {
    var words = document.querySelector("#word");
    images.src = "images/a.jpg";
    words.innerHTML = "Apple";
    words.style.color = "#F50100";
}

function b() {
    var words = document.querySelector("#word");
    images.src = "images/b.jpg";
    words.innerHTML = "Boll";
    words.style.color = "#0104B2";
}

function c() {
    var words = document.querySelector("#word");
    images.src = "images/c.jpg";
    words.innerHTML = "Cup";
    words.style.color = "#A467EC";
}

function d() {
    var words = document.querySelector("#word");
    images.src = "images/d.jpg";
    words.innerHTML = "Dog";
    words.style.color = "#00CAE8";
}

function e() {
    var words = document.querySelector("#word");
    images.src = "images/e.jpg";
    words.innerHTML = "Elephent";
    words.style.color = "#FE0168";
}

function f() {
    var words = document.querySelector("#word");
    images.src = "images/f.jpg";
    words.innerHTML = "Fan";
    words.style.color = "#01DF5F";
}

function g() {
    var words = document.querySelector("#word");
    images.src = "images/g.png";
    words.innerHTML = "Goat";
    words.style.color = "#C00200";
}

function h() {
    var words = document.querySelector("#word");
    images.src = "images/h.jpg";
    words.innerHTML = "Hut";
    words.style.color = "#01BCDA";
}

function it() {
    var words = document.querySelector("#word");
    images.src = "images/i.jpg";
    words.innerHTML = "Ice Cream";
    words.style.color = "#FE016C";
}

function j() {
    var words = document.querySelector("#word");
    images.src = "images/j.jpg";
    words.innerHTML = "Jug";
    words.style.color = "#B39AEE";
}

function k() {
    var words = document.querySelector("#word");
    images.src = "images/k.jpg";
    words.innerHTML = "Kite";
    words.style.color = "#F39501";
}

function l() {
    var words = document.querySelector("#word");
    images.src = "images/l.jpg";
    words.innerHTML = "Lamp";
    words.style.color = "#FE0027";
}

function m() {
    var words = document.querySelector("#word");
    images.src = "images/m.jpg";
    words.innerHTML = "Mango";
    words.style.color = "#EED201";
}

function n() {
    var words = document.querySelector("#word");
    images.src = "images/n.jpg";
    words.innerHTML = "Net";
    words.style.color = "#00C6E7";
}

function o() {
    var words = document.querySelector("#word");
    images.src = "images/o.jpg";
    words.innerHTML = "Orange";
    words.style.color = "#FE0022";
}

function p() {
    var words = document.querySelector("#word");
    images.src = "images/p.png";
    words.innerHTML = "Pencil";
    words.style.color = "#B89EF2";
}

function q() {
    var words = document.querySelector("#word");
    images.src = "images/q.jpg";
    words.innerHTML = "Queen";
    words.style.color = "#FE0073";
}

function r() {
    var words = document.querySelector("#word");
    images.src = "images/r.jpeg";
    words.innerHTML = "Rose";
    words.style.color = "#01DF5F";
}

function s() {
    var words = document.querySelector("#word");
    images.src = "images/s.jpg";
    words.innerHTML = "Sun";
    words.style.color = "#EED201";
}

function t() {
    var words = document.querySelector("#word");
    images.src = "images/t.png";
    words.innerHTML = "Tortoise";
    words.style.color = "#0257FA";
}

function u() {
    var words = document.querySelector("#word");
    images.src = "images/u.jpg";
    words.innerHTML = "Umbrella";
    words.style.color = "#00D0EF";
}

function v() {
    var words = document.querySelector("#word");
    images.src = "images/v.jpg";
    words.innerHTML = "Violin";
    words.style.color = "#FDA200";
}

function w() {
    var words = document.querySelector("#word");
    images.src = "images/w.jpg";
    words.innerHTML = "Water";
    words.style.color = "#0255FB";
}

function x() {
    var words = document.querySelector("#word");
    images.src = "images/x.jpg";
    words.innerHTML = "X-ray";
    words.style.color = "#FE0080";
}

function y() {
    var words = document.querySelector("#word");
    images.src = "images/y.jpg";
    words.innerHTML = "Yoyo";
    words.style.color = "#E50001";
}

function z() {
    var words = document.querySelector("#word");
    images.src = "images/z.jpg";
    words.innerHTML = "Zebra";
    words.style.color = "#00D863";
}
//=============== ADD KEY VOICE ===============================

var len = document.querySelectorAll(".btn").length;


for (i = 0; i < len; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("click", function () {
        var text = this.innerHTML;
        console.log(text);
        audioPlay(text);
        animation(text);

    });
}

document.addEventListener("keypress", function (event) {

    var text = event.key;
    audioPlay(text);
    animatonPlay(text);
});

function audioPlay(text) {
    switch (text) {
        case "a":
            var audio = new Audio("voice/a.mp3");
            audio.play();
            break;

        case "b":
            var audio = new Audio("voice/b.mp3");
            audio.play();
            break;

        case "c":
            var audio = new Audio("voice/c.mp3");
            audio.play();
            break;

        case "d":
            var audio = new Audio("voice/d.mp3");
            audio.play();
            break;

        case "e":
            var audio = new Audio("voice/e.mp3");
            audio.play();
            break;

        case "f":
            var audio = new Audio("voice/f.mp3");
            audio.play();
            break;

        case "g":
            var audio = new Audio("voice/g.mp3");
            audio.play();
            break;

        case "h":
            var audio = new Audio("voice/h.mp3");
            audio.play();
            break;
        case "i":
            var audio = new Audio("voice/i.mp3");
            audio.play();
            break;

        case "j":
            var audio = new Audio("voice/j.mp3");
            audio.play();
            break;

        case "k":
            var audio = new Audio("voice/k.mp3");
            audio.play();
            break;

        case "l":
            var audio = new Audio("voice/l.mp3");
            audio.play();
            break;

        case "m":
            var audio = new Audio("voice/m.mp3");
            audio.play();
            break;

        case "n":
            var audio = new Audio("voice/n.mp3");
            audio.play();
            break;

        case "o":
            var audio = new Audio("voice/o.mp3");
            audio.play();
            break;

        case "p":
            var audio = new Audio("voice/p.mp3");
            audio.play();
            break;

        case "q":
            var audio = new Audio("voice/q.mp3");
            audio.play();
            break;

        case "r":
            var audio = new Audio("voice/r.mp3");
            audio.play();
            break;

        case "s":
            var audio = new Audio("voice/s.mp3");
            audio.play();
            break;

        case "t":
            var audio = new Audio("voice/t.mp3");
            audio.play();
            break;

        case "u":
            var audio = new Audio("voice/u.mp3");
            audio.play();
            break;

        case "v":
            var audio = new Audio("voice/v.mp3");
            audio.play();
            break;

        case "w":
            var audio = new Audio("voice/w.mp3");
            audio.play();
            break;

        case "x":
            var audio = new Audio("voice/x.mp3");
            audio.play();
            break;
        case "y":
            var audio = new Audio("voice/y.mp3");
            audio.play();
            break;
        case "z":
            var audio = new Audio("voice/z.mp3");
            audio.play();
            break;







    }
}

function animation(text) {

    var btn = document.querySelector("." + text);
    btn.classList.add("anim");

    setTimeout(function () {

        btn.classList.remove("anim");
    }, 1000);
}

//=============== INTITUSEING =====================

 var open = document.querySelector(".btn-open");

 for (i = 0; i < open; i++) {
    document.querySelectorAll(".btn-open")[i].addEventListener("click", function () {
        var text = this.innerHTML;
        console.log(text);
        playOpen(text);
       // animation(text);

    });
}

function playOpen(text){
    switch(text){
        case "books" :
        var audio = new Audio("voice/start.mp3");
        audio.play();
        break;
    }
}


