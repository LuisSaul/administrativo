<?php
    include "conexion.php";
    $usuario = $_POST["user"];
    $pass = $_POST["password"];
    $conexion = connect();

    $query = "select * from Usuario where user = '$usuario' and password = '$pass'";
    $result = [];
    if(($result = $conexion->query($query)) !== false){
        $result = $result->fetch_assoc();
    }
    $conexion->close();
    echo json_encode( $result );
?>