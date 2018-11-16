<html>
<head>
    <meta charset="UTF-8">
    <title> Administrativos </title>
    <link rel="stylesheet" href="../lib/bootstrap.css">
    <link rel="stylesheet" href="../lib/animate.css">
    <link rel="stylesheet" href="../css/global.css">
</head>

<body>
    <div class="container-fluid mt-3">
        <div class="row">
            <div class="col text-center">
                <h1>Administrador</h1>
            </div>
        </div>
        <div class="nuevo-usuarior row">
            <div class="col">
                <h3 class="text-center">Registro nuevo usuario</h3>
                <div id="success" class="alert alert-success" role="alert" hidden>
                    Usuario registrado con exito
                </div>
                <div id="error" class="alert alert-danger" role="alert" hidden>
                    Ocurrió un error inesperado
                </div>
                <div class="form-group">
                    <label>Nombre</label>
                    <input type="email" name="user" class="form-control" placeholder="Nombre">
                </div>
                <div class="form-group">
                    <label>Password</label>
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