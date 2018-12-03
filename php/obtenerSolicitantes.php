<?php
    include 'conexion.php';

    $conexion = connect();
    $query = "select 
                s.id_solicitante as ID,
                 s.nombre as Nombre,
                 apellidoPat as 'Apellido Paterno',
                 s.apellidoMat as 'Apellido Materno',
                 s.fecha_nacimiento as 'Fecha de nacimiento',
                 case s.estado_civil 
                    when 0 then 'Soltero'
                    when 1 then 'Casado'
                    when 2 then 'Divorciado'
                 end
                 as 'Estado civil',
                 direccion as 'Dirección',
                 email as 'Email',
                 telefono as 'Teléfono',
                 fecha_registro as Fecha,
                 u.user as RH
            from 
                Usuario u 
            join 
                Solicitante s 
            on u.id = s.idUsuario
            order by Nombre;";

    echo json_encode(query($conexion, $query));
    $conexion->close();
?>