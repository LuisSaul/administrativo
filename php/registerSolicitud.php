<?php
    include "conexion.php";

    $conexion = connect( );
    $nombre = $_POST['nombre'];
    $apellidoPat = $_POST['apellidoPat'];
    $apellidoMat = $_POST['apellidoMat'];
    $estado_civil = $_POST['estado_civil'];
    $direccion = $_POST['direccion'];
    $email = $_POST['email'];
    $fecha_registro = $_POST['fecha_registro'];
    $telefono = $_POST['telefono'];


    $query = "insert into Solicitante
        value (
            null,
            '$nombre', 
            '$apellidoPat', 
            '$apellidoMat', 
            $estado_civil, 
            '$direccion', 
            '$email', 
            '$telefono', 
            '$fecha_registro', 
            2
        );";
    query( $conexion, $query ); 
    $conexion->close();
?>