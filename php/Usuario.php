<?php 
    include "conexion.php";    
   

    switch( $_SERVER['REQUEST_METHOD'] ){
        case 'POST':        create();   break;
        case 'GET':         select();   break;
    }

    function create(){
        $conexion = connect();
        $user = $_POST['user'];
        $pass = $_POST['pass'];
    
        $query = "insert into Usuario values (null, '$user', '$pass', 1)";
        echo json_encode(query($conexion, $query));
        $conexion->close();
    }

    function select() {
        $conexion = connect();
        $query = "select id, user as Nickname from Usuario";
        echo json_encode( query($conexion, $query));
        $conexion->close();
    }
?>