<?php
$cont=0;
$fichero = fopen("lista.txt", 'r');

$contenido = fread($fichero, filesize("lista.txt"));

$lista = explode(", ", $contenido);

foreach($lista as $nombre){
    $cont++;
    $personas[] = array (
        "nombre" => $nombre,
        "puntuacion" => rand(0, 10)
    );
}

echo $jsonPersonas = json_encode($personas) ;

fclose($fichero);
?>