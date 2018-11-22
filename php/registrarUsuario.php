<?php 
    include 'conexion.php';

    $conexion = connect();

    $user = $_POST['user'];
    $pass = $_POST['pass'];

    $query = "insert into Usuario values (null, '$user', '$pass', 1)";
    echo json_encode(query($conexion, $query));
    $conexion->close();
?>