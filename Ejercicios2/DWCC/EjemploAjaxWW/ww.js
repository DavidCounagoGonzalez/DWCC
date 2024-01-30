personas = [];

xmlhttp = new XMLHttpRequest();
url = "datos.json";

function getDatos(datos) {
   
    for (i = 0; i < datos.length; i++) {
        registro = {};

        registro.nombre = datos[i].nombre;        
        registro.edad = datos[i].edad;        
        personas[i]=registro;            
    }
}

function proceso() {

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            datos = JSON.parse(this.responseText);
            getDatos(datos);
            postMessage(personas);
            
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    setTimeout("proceso()",5000);
}

proceso();