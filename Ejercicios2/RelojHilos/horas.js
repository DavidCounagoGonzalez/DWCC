function horaActual(){
    const fecha = new Date();
    
    
    var horaCompleta = Object();
    horaCompleta.hora = fecha.getUTCHours();
    horaCompleta.minutos =fecha.getUTCMinutes();
    horaCompleta.segundos =fecha.getUTCSeconds();

    postMessage(horaCompleta);
    setTimeout("horaActual()", 1000);
}

horaActual();