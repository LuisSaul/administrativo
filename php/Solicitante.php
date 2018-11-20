<?php 
    include "conexion.php";    

    switch( $_SERVER['REQUEST_METHOD'] ){
        case 'POST':        create();   break;
        case 'PUT':         update();   break;
        case 'DELETE':      eraser();   break;
        case 'GET':         select();   break;
    }
    

    function update(){
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
    }
    
    function create(){
        $nombre = $_POST['nombre'];
        $apellidoPat = $_POST['apellidoPat'];
        $apellidoMat = $_POST['apellidoMat'];
        $estado_civil = $_POST['estado_civil'];
        $direccion = $_POST['direccion'];
        $email = $_POST['email'];
        $fecha_registro = $_POST['fecha_registro'];
        $telefono = $_POST['telefono'];
        $id = $_POST['id'];


        $query = "insert into Solicitante
            value (
                null,
                '$nombre', 
                '$apellidoPat', 
                '$apellidoMat', 
                $estado_civil, 
                '$direccion', 
                '$email', 
                '$telefono', 
                '$fecha_registro', 
                $id
            );";
        echo $conexion->query( $query ); 
    }

    function select(){
        $conexion = connect();
        if( isset($_GET['id'])){
            $id = $_GET['id'];
            $query = "select * from Solicitante where idUsuario = $id";
            echo json_encode( query( $conexion, $query ));
        } else {
            $query = "select 
                        u.id as ID,
                        u.user as Nickname,
                        s.nombre as Nombre,
                        apellidoPat as 'Apellido Paterno',
                        s.apellidoMat as 'Apellido Materno',
                        case s.estado_civil 
                            when 0 then 'Soltero'
                            when 1 then 'Cadado'
                        end
                        as 'Estado civil',
                        direccion as 'Dirección',
                        email as 'Email',
                        telefono as 'Teléfono',
                        fecha_registro as Fecha
                    from 
                        Usuario u 
                    join 
                        Solicitante s 
                    on u.id = s.idUsuario;";
            echo json_encode(query($conexion, $query));
            $conexion->close();

        }
    }

    function eraser(){
        $id = $_GET['id'];

        $conexion = connect();    
        $query = "delete from Solicitante where idUsuario = $id;";
        $conexion->query( $query );
        $query = "delete from Usuario where id = $id;";
        $conexion->query( $query );
    }
?>