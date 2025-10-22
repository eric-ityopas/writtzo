window.onload = function() {
    var contador = 0;
    var time = new Date();
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

var letter = letters [Math.floor(Math.random() * letters.length)];


document.getElementById("contenedor-letras").innerHTML = letter;

document.getElementById("letter").addEventListener("keydown", function(event) {
    
    document.getElementById("letter").value = "";
    
    if (event.key == letter) {

        contador++;

        document.getElementById("contador").innerHTML = contador;

        if (contador == 1) {
            //var time = new Date()

        }

        if (contador == 30) {
            var time2 = new Date()
            var time3 = time2 - time
            time3 = time3 / 1000
        alert("¡Ganaste en "+time3+" segundos!");
        contador = 0;

        }
        
        letter = letters [Math.floor(Math.random() * letters.length)];

        document.getElementById("contenedor-letras").innerHTML = letter;

}

    else {

        contador--;

        document.getElementById("contador").innerHTML = contador;

    }

});

}