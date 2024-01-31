imagenes = [];

xmlhttp = new XMLHttpRequest();
url = "fotos.json";

function getImagenes(imagen){

    for(i = 0; i < imagen.length; i++){
        registro = {};

        registro.foto = imagen[i].foto;
        registro.pieFoto = imagen[i].pieFoto;

        imagenes[i] = registro;
    }
}

function procesar(){
    xmlhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            imagenesJSON = JSON.parse(this.responseText);
            getImagenes(imagenesJSON);
            postMessage(imagenes);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    setTimeout("procesar()", 1000);
}

procesar();