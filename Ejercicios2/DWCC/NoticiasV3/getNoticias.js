//Creamos un array vacío que serán nuestros datos de envío, el objeto xmlhttp y el json.
noticias = [];
xmlhttp = new XMLHttpRequest();
url = "noticias.json";

function getNoticias(noticia){
    //Recorremos el json parseado y guardamos sus datos en el array; 
    for(i = 0; i < noticia.length; i++){
        registro = {};

        registro.titular = noticia[i].titular;
        registro.cuerpo = noticia[i].cuerpo;

        noticias [i] = registro;
    }
}

function procesar(){
    // Cuando el xmlhttp lanza el archivo dado en el url, si todo se ha salido bien parsea el json recibido en la lectura del xmlhttp, 
    // lanza la función anterior y postea el resultado.
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            noticiasJSON = JSON.parse(this.responseText);
            getNoticias(noticiasJSON);
            postMessage(noticias);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    setTimeout("procesar()", 1000); // La función se relanza cada X milisegundos
}

procesar();