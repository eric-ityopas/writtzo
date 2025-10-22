window.onload = function () {
    var palabras = ["casa", "oso", "arepa", "toalla", "estilo", "dormir", "eterno", "monitor", "dolor", "visor", "pintar", "mango", "koala", "pereza", "hijo", "transporte", "chico", "meta", "constructor", "familia", "hora", "saltar", "descansar", "archivo", "bicho", "teclado", "bloqueo", "mentalidad", "creatividad", "seguridad", "adiccion", "horno", "escritorio", "botella", "avispon" , "cancion" , "seda" , "peregrino" , "coro" , "arquitecto", "bestia" , "errante" , "cazador" , "enlace" , "aguijon" , "vasija" , "bolita" , "bendicion" , "tirano"]

    var palabra = palabras [Math.floor(Math.random() * palabras.length)];

    var adivinado = []

    var error = 0
    
    

    for (var _posicion = 0; _posicion < palabra.length; _posicion++) { adivinado.push("_") }

    document.getElementById("letra").addEventListener("keydown", function (event) {

        document.getElementById("letra").value = ""

        var acerto = false

        for (var _posicion = 0; _posicion < palabra.length; _posicion++) {
            var letra = palabra[_posicion]
            if (letra == event.key) {
                adivinado[_posicion] = letra
                document.getElementById("palabra").innerText = adivinado
                acerto = true

                if (adivinado.join().replaceAll(",","") == palabra) {
                    alert("ganaste!")
                    document.getElementById("ahorcado").setAttribute("src", "hi.png")
                    document.getElementById("letra").style.visibility = "hidden"
                }

            }

        }

if (acerto == false) {
                error++
                document.getElementById("ahorcado").setAttribute("src", error.toString() + ".png")
                
            }
if (error == 8) {
alert("juan III se murio. perdiste")

}
    })

}