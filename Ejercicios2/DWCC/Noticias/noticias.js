function getNoticias(arr) {
    var muestra = "";
    for (i = 0; i < arr.length; i++) {
        muestra += '<h2>' + arr[i].titular + '</h2><p id="cuerpo">' + arr[i].cuerpo + '</p>';
    }
    document.getElementById("noticias").innerHTML = muestra;
}