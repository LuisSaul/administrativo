<?php
    include "conexion.php";

    $conexion = connect();
    
    $id = $_GET['id'];
    $query = "select * from Solicitante where idUsuario = $id";
    echo json_encode( query( $conexion, $query ));

    $conexion->close( );
?>