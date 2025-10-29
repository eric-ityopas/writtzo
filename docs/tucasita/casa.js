function dormir() {
document.getElementById("durmiendo").style.visibility = "visible";
}
function despertar() {
    document.getElementById("durmiendo").style.visibility = "hidden"

}

function mostrarIntf() {
    document.getElementById("int-de-notas").style.visibility = "visible"
}

function cerrarInterfaz() {
    document.getElementById("int-de-notas").style.visibility = "hidden"

}

function guardarNota() {
    var nota = document.getElementById("nota-text").value
    localStorage.setItem("nota", nota)

}

window.onload = function () {
    var ultimanota = localStorage.getItem("nota")
    document.getElementById("ult-nota-text").innerText = ultimanota
}
