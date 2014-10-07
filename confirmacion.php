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
#content ol {
  margin:0;
}
#content ol li {
  margin-top:15px;
}
#content h4 {
  	font-family:"georgia",serif;
    margin-top:1px;
    font-size:1.5em;
    color:brown;
    font-variant:small-caps;
}

#content input {
	font-family:"Lucida Grande","Lucida Console",sans-serif;
    color:#666;
    background:#eee;
    border:1px solid #666;
    /*width:100px;*/
}

#content input["type=text"] { width:120px; }
-->
</style>
</head>

<body>

<div id="content">
<?//************************* CONFIRMACION DEL ENVIO *****************************?>
<h4>Estimado(a) <?php echo $_GET['nombre']; ?>,</h4>
Gracias por escribirnos, le contestaremos a su dirección <strong><?php echo $_GET['email']; ?></strong> muy pronto.
<?//************************* FIN CONFIRMACION DEL ENVIO *****************************?>
</div>
</body>

</html>