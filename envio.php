<?php

//************************* ENVIO DE EMAIL **********************************************************
include("mandaemail.inc");

if ( isset($_POST['direccionenvio']) && isset($_POST['paginaconfirmacion']) ) {
    $mailTo = $_POST['direccionenvio'];
    $mailFrom = $_POST['email'];
    $mailSubject = "Forma de correo";
    $now = date('d-m-Y');
    $name = $_POST['nombre'];
	$subject = $_POST['asunto'];
	$message = $_POST['mensaje'];

	/** MODIFIQUE AQUI EL CODIGO, INCLUYA UNA LINEA COMO LA DE  Nombre: $nombre Y
	'** DESPUES \n 
	'** PARA CADA CAMPO QUE HAYA AGREGADO SIN BORRAR <<<EOT y EOT; E INDIQUE EL
    FORMATO DEL CORREO */
    
$mailFormat = 1; // 0 para correo HTML o 1 para correo de texto
$mailBody = <<<EOT
Fecha: $now\n
Nombre: $name\n
Email: $mailFrom\n
Asunto: $subject\n
Mensaje: $message\n
Fin del email
EOT;
    MandaEmail($mailTo,$mailFrom,$mailSubject,$mailBody,$mailFormat);	  		  		
    
    //***MANDA A LA PÁGINA DE CONFIRMACION Y LE PASA LO QUE TRAEN LOS CAMPOS nombre y email
    
    Header("Location:". $_POST['paginaconfirmacion'] . "?nombre=" . $_POST['nombre'] . "&email=" . $_POST['email'] . "?asunto=" . $_POST['asunto'] . "&mensaje=" . $_POST['mensaje']);
    
    //*** FIN MANDA A LA PÁGINA DE CONFIRMACION Y LE PASA LO QUE TRAEN LOS CAMPOS nombre y email
} else {

$head = '<?xml version="1.0" encoding="UTF-8"?>';
$head .= <<<EOT
<!DOCTYPE html 
     PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
    "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<title>CONTACTENOS</title>
<style type="text/css">
<!--
body { 
  font-family:"Lucida Grande","Lucida Console",sans-serif;
}
#content {
  font-size:0.8em;
    position:absolute;
    width:750px;
    left:50%;
    margin-left:-392px;
    margin-top:3em;
    padding:15px;
    border:2px solid gray;
}
#content h4 {
  font-family:"georgia",serif;
    font-size:1.5em;
    color:brown;
    font-variant:small-caps;
    margin-top:0;
}
-->
</style>
</head>

<body>

<div id="content">
<h4>Se han generado los siguientes errores</h4>
EOT;

	echo $head;

	if(!isset($_POST['direccionenvio'])) {
    	echo '<p>No se puede enviar el formulario porque el campo "direccionenvio" est&aacute; vac&iacute;o</p>';
    }
    
    if(!isset($_POST['paginaconfirmacion'])) {
    	echo '<p>No se puede enviar el formulario porque el campo "paginaconfirmacion" est&aacute; vac&iacute;o</p>';
    }
    
    $bott =<<<EOT
</div>
</body>
</html>
EOT;

	echo $bott; 
}
//**********************FIN ENVIO DE EMAIL **********************************************************
?>
