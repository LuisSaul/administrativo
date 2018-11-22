<?php
    include 'conexion.php';

    $id = $_GET['id'];

    $conexion = connect();    
    $query = "delete from Solicitante where id_solicitante = $id;";
    $conexion->query( $query );
    $conexion->close();
?>