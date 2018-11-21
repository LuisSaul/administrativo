<?php
    include "conexion.php";
    $conexion = connect();

    $nombre = $_POST['nombre'];
    $apellidoPat = $_POST['apellidoPat'];
    $apellidoMat = $_POST['apellidoMat'];
    $estado_civil = $_POST['estado_civil'];
    $direccion = $_POST['direccion'];
    $email = $_POST['email'];
    $fecha_registro = $_POST['fecha_registro'];
    $telefono = $_POST['telefono'];
    $id = $_POST['id'];


    $query = "update Solicitante 
    set 
        nombre = '$nombre',
        apellidoPat = '$apellidoPat',
        apellidoMat = '$apellidoMat',
        estado_civil = '$estado_civil',
        direccion = '$direccion',
        email = '$email',
        fecha_registro = '$fecha_registro',
        telefono = '$telefono'

    where id_solicitante = $id;";

    echo json_encode($conexion->query( $query ));
    
    $conexion->close();
?>