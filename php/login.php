<?php
    include "../db/conexion.php";
    $usuario = $_POST["usuario"];
    $pass = $_POST["password"];
    $conexion = connect();

    $query = "select * from Usuario where nombre = $usuario and contraseña = $pass";
    if(($result = $conexion->query($query)) !== false){
        $result = $result->fetch_assoc();
        session_start();
        $_SESSION['idUsuario'] = $result['idUsuario'];
        $_SESSION['nombre'] = $result['nombre'];
        $_SESSION['password'] = $result['contraseña'];
        $_SESSION['rol'] = $result['rol'];
    }
?>