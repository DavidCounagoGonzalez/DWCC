var numero = 0;
var tiempo = 500;
function cuenta(){
    //console.log(numero);
    numero += 1;
    postMessage(numero);
    onmessage = function(event){
        if(event.data == 'suma'){
            tiempo -= 100;
        }else{
            tiempo += 100;
        }
    }
    

    setTimeout("cuenta()", tiempo);
}

cuenta();