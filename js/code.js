function crearTriangulo() {
    if (document.getElementById('res').innerHTML != "") {
        document.getElementById('res').innerHTML = "";
    }
    let filas = document.getElementById('filas').value;
    let string = "";
    for (let index = 1; index <= filas; index++) {
        string = string + "#";

        document.getElementById('res').innerHTML = document.getElementById('res').innerHTML + string + "<br>";

    }
}