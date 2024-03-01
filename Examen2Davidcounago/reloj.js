function reloj(){

    var hora = new Date(); // Creamos un objeto de tipo Date

    postMessage(hora.getHours() + ":" + hora.getMinutes() + ":" + hora.getSeconds() + ""); // Recogemos las horas, minutos y segundos.

    setTimeout(reloj, 1000); // Creamos un timeout que lanza la función cada segundo para simular el reloj

}

reloj(); // Lanzamos la función en la primera llamada.