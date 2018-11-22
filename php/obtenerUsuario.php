<?php
    include 'conexion.php';

    $conexion = connect();
    $query = "select id, user as 'Recursos humanos' from Usuario";

    echo json_encode( query($conexion, $query));
    $conexion->close();
?>