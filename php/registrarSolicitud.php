<?php
    include "conexion.php";

    $conexion = connect( );
    $nombre = $_POST['nombre'];
    $apellidoPat = $_POST['apellidoPat'];
    $apellidoMat = $_POST['apellidoMat'];
    $fecha_nacimiento = $_POST['fecha_nacimiento'];
    $estado_civil = $_POST['estado_civil'];
    $direccion = $_POST['direccion'];
    $email = $_POST['email'];
    $fecha_registro = $_POST['fecha_registro'];
    $telefono = $_POST['telefono'];
    $id = $_POST['id'];


    $query = "insert into Solicitante
        value (
            null,
            '$nombre', 
            '$apellidoPat', 
            '$apellidoMat',
            '$fecha_nacimiento',
            $estado_civil, 
            '$direccion', 
            '$email', 
            '$telefono', 
            '$fecha_registro', 
            $id
        );";
    echo $conexion->query( $query ); 
    $conexion->close();
?>