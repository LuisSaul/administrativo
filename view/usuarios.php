<html>
<head>
    <meta charset="UTF-8">
    <title> Usuarios </title>
    <link rel="icon" href="../img/icon.png">      

    <link rel="stylesheet" href="../lib/bootstrap.css">
    <link rel="stylesheet" href="../lib/animate.css">
    <link rel="stylesheet" href="../css/global.css">
    <link rel="stylesheet" href="../css/administrador.css">
</head>

<body>
        <div class="row justify-content-center">
        <div class="col-11">
        
    <nav class="navbar navbar-expand-sm bg-dark" style="margin-top: 60px;">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link" href="solicitantes.php?id=<?php echo $_GET['id'];?>">Solicitantes</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="usuarios.php?id=<?php echo $_GET['id'];?>">Usuarios</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="../index.php">Salir</a>
            </li>
            </ul>
        </div>
        </nav>
        </div>
        </div> 
        <div class="row justify-content-left">
                    <button class="btn btn-info boton-agregar" data-toggle="modal" data-target="#modalAdd">
                     Registrar usuario </button>
                
            </div>
        
        <div class="row justify-content-center">
            <div class="col-4" id="table-container-users">
                <!-- Table -->
            </div>
        </div>
    <div class="modal fade" id="modalAdd" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">Ingresar datos</h4>
                <button type="button" id="cerrarModalAdd" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <label>Nombre de usuario</label>
                <input type="text" name="user" class="form-control">
                <label>Contraseña</label>
                <input type="text" name="password" class="form-control">
                <label>Tipo de usuario</label>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-info" id="insertarUsuario">Insertar</button>
            </div>
            </div>
        </div>
    </div>
    <script src="../lib/popper.js"></script>
    <script src="../lib/jquery.js"></script>
    <script src="../lib/bootstrap.js"></script>
    <script src="../js/usuarios.js"></script>
</body>

</html>