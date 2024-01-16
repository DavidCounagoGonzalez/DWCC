var anterior = 0;
var actual = 1;
var secuencia = "";

// temporizador(); //también 

function temporizador(){
    if(!anterior){
        secuencia+=" "+actual;
    }else{
        secuencia+= " - "+actual;
    }
    postMessage(secuencia);
    aux = anterior + actual;
    anterior = actual;
    actual = aux;
    setTimeout("temporizador()", 500);
}

temporizador();