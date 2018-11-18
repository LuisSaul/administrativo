<?php
    include "conexion.php";
    $conexion = connect();

    $nombre = $_POST['nombre'];
    $apellidoPat = $_POST['apellidoPat'];
    $apellidoMat = $_POST['apellidoMat'];
    $estado_civil = $_POST['estado_civil'];
    $direccion = $_POST['direccion'];
    $email = $_POST['email'];
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
        telefono = '$telefono'        
    where idUsuario = $id;";

    echo json_encode($conexion->query( $query ));
    
    $conexion->close();
?>