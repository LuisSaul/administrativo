<html>
<head>
    <meta charset="UTF-8">
    <title> Administrativos </title>
    <link rel="icon" href="../img/icon.png">      

    <link rel="stylesheet" href="../lib/bootstrap.css">
    <link rel="stylesheet" href="../lib/animate.css">
    <link rel="stylesheet" href="../css/global.css">
    <link rel="stylesheet" href="../css/usuarios.css">
</head>

<body class="mb-5 pb-5">
        <div class="container-fluid mt-3">
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
            </ul>
        </div>
        </nav>
        </div>
        </div> 
        <div class="row justify-content-left">
                    <button class="btn btn-info" data-toggle="modal" data-target="#modalAdd" style="margin-top: 50px;margin-left: 80px;margin-bottom: 50px;">
                     Registrar usuario </button>
                
            </div>
        <div class="row justify-content-center">
        <div class="col-11">
        <div class="row">
            <div class="col" id="table-container-users">
                <!-- Table -->
            </div>
        </div>
        </div>
        </div>
    </div>
    <div class="modal fade" id="modalAdd" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">Ingresar datos</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <label>Nombre de usuario</label>
                <input type="text" name="user" class="form-control">
                <label>Contraseña</label>
                <input type="text" name="password" class="form-control">
                <label>Tipo de usuario</label>
               <select id="privilegios" class="form-control">
                  <option value="0">Administrador</option>
                  <option value="1">Usuario</option>
               </select>
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