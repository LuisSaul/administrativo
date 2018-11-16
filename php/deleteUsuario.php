<?php
    include 'conexion.php';

    $id = $_GET['id'];

    $conexion = connect();    
    $query = "delete from Solicitante where idUsuario = $id;";
    $conexion->query( $query );
    $query = "delete from Usuario where id = $id;";
    $conexion->query( $query );
    $conexion->close();
?>