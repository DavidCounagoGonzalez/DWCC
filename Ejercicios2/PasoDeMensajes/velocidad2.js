var numero = 0;
var tiempo = 500;
onmessage = function(event){
    if(event.data == 'suma'){
        tiempo -= 100;
    }else{
        tiempo += 100;
    }
}

function cuenta(){
    numero +=1;
    postMessage(numero);

    setTimeout("cuenta()", tiempo);
}

cuenta();