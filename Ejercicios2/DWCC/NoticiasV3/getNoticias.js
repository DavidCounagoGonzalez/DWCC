noticias = [];

xmlhttp = new XMLHttpRequest();
url = "noticias.json";

function getNoticias(noticia){

    for(i = 0; i < noticia.length; i++){
        registro = {};

        registro.titular = noticia[i].titular;
        registro.cuerpo = noticia[i].cuerpo;

        noticias [i] = registro;
    }
}

function procesar(){
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            noticiasJSON = JSON.parse(this.responseText);
            getNoticias(noticiasJSON);
            postMessage(noticias);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    setTimeout("procesar()", 1000);
}

procesar();