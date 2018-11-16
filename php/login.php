<?php
    include "conexion.php";
    $usuario = $_POST["user"];
    $pass = $_POST["password"];
    $conexion = connect();

    $query = "select * from Usuario where user = '$usuario' and password = '$pass'";
    $result = [];
    if(($result = $conexion->query($query)) !== false){
        $result = $result->fetch_assoc();
        session_start();
        $_SESSION['id'] = $result['USERID'];
        $_SESSION['user'] = $result['USER'];
        $_SESSION['password'] = $result['PASSWORD'];
        $_SESSION['type'] = $result['TYPE'];
    }
    $conexion->close();
    echo json_encode( $result );
?>