<?php
    /**
     * Conexión a bases de datos
     */
    function connect(){
        $host = "localhost";
        $user = "saul";
        $password = "1234";
        $database = "Solicitantantes";
        
        $conexion = new mysqli($host, $user, $password, $database);
        if($conexion->connect_error){
            echo "Connect failed: " . $conexion->connect_error;
            exit();
        } 
        return $conexion;
    }

    function query( $conexion, $query){
        $result = $conexion->query( $query );
        if( $result ){
            $answer = array();
            if( $result->num_rows > 0 ){
                while($row = $result->fetch_assoc( )) {
                    $answer[] = $row;
                }
            }
            return $answer;
        }else{
            echo "Error en la consulta [".$query."]: ".$conexion->error;
        }
    }

?>
