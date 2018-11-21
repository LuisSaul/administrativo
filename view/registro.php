<html>
<head>
    <meta charset="UTF-8">
    <link rel="icon" href="../img/icon.png">
    <title> Administrativos </title>
    <link rel="stylesheet" href="../lib/bootstrap.css">
    <link rel="stylesheet" href="../lib/animate.css">
    <link rel="stylesheet" href="../css/global.css">
</head>

<body>
    <div class="container-fluid mt-3">
        <div class="row">
            <div class="col-4 m-auto text-center">
                <h1 class="title">Administrador</h1>
            </div>
        </div>
        <div class="row mb-5 pb-5">
            <div class="col-3 m-auto text-center">
                <h4 class="subtitle">Registro nuevo usuario</h4>
            </div>
        </div>
        <div class="nuevo-usuarior row mt-5 ">
            <div class="col-8 m-auto white-bg">
                <div id="success" class="alert alert-success" role="alert" hidden> El usuario se registro bien.</div>
                <div id="error" class="alert alert-danger" role="alert" hidden>Tenemos problemas para ejecutar el registro.</div>
                <div class="form-group">
                    <label>Nombre</label>
                    <input type="email" name="user" class="form-control" placeholder="Nombre">
                </div>
                <div class="form-group">
                    <label>Contraseña</label>
                    <input type="password" name="password" class="form-control" placeholder="Password">
                </div>                
                <button type="button" id="btn-nuevo-usuario" class="btn btn-primary">Crear nuevo usuario</button>
            </div>
        </div>
        
    </div>
    <script src="../lib/popper.js"></script>
    <script src="../lib/jquery.js"></script>
    <script src="../lib/bootstrap.js"></script>
    <script src="../js/registerUsuario.js"></script>
</body>

</html>