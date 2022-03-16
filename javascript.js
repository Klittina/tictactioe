window.addEventListener("load", init);

function $(elem) {
    return document.querySelectorAll(elem);
}

function ID(elem) {
    return document.getElementById(elem);
}

function init() {
    console.log("ellenörzéás halika");
    ID("header").innerHTML = "<h1> Tic-Tac-Toe </h1>";
    ID("footer").innerHTML = "<p> Szedlár Krisztina </p>";

    var txt = "";
    for (let index = 0; index < 9; index++) {
        txt += "<div>";
        txt += "</div>";
    }
    txt += "";
    $("section")[0].innerHTML = txt;
    ID(kezdjukel).value = "Hajrá!";

}

function jatekkezd() {
    var fields = document.getElementById("form").getElementsByTagName('*');
    for (var i = 0; i < fields.length; i++) {
        fields[i].disabled = true;
    }

}

function hatterFel() {
    event.target.className = "kiemel";
}

function hatterLe() {
    event.target.className = "";
}

function kattintas() {
    if (lepes % 2 === 0) {
        event.target.innerHTML = "X";
    } else {
        event.target.innerHTML = "O";
    }
    lepes++;

}