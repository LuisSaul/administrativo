<?php
    include 'conexion.php';

    $conexion = connect();
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
?>