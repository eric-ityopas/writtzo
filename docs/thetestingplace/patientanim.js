var posicion = 0

function adelanteF() {
posicion += 15
document.getElementById("patient").style.left = posicion.toString() + "vw";
document.getElementById("spritep").src = "sprites/forwardspatient.png";

}

function atrasF() {
posicion -= 15
document.getElementById("patient").style.left = posicion.toString() + "vw";
document.getElementById("spritep").src = "sprites/backwarspatient.png";
}

function abajoF() {
    document.getElementById("spritep").src ="sprites/sitpatient.png"
}