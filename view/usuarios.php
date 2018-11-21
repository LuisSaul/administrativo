<html>
<head>
    <meta charset="UTF-8">
    <link rel="icon" href="../img/icon.png">
    <title> Administrativos </title>
    <link rel="stylesheet" href="../lib/bootstrap.css">
    <link rel="stylesheet" href="../lib/animate.css">
    <link rel="stylesheet" href="../css/global.css">
    <link rel="stylesheet" href="../css/usuarios.css">
</head>

<body class="mb-5 pb-5">
    <div class="container-fluid mt-3">
        <div class="row">
            <div class="col-3 m-auto text-center">
                <h1 class="title"> Administrador </h1>      
            </div>
        </div>
        <div class="row">
        <div class="col-9 m-auto ">
                <a href="./registro.php">
                    <button class="btn btn-primary m-2"> Registrar nuevo usuario </button>
                </a>
            </div>
        </div>  
        <div class="row">
            <div class="col-9 m-auto white-bg" id="table-container-users">
                <!-- Table -->
            </div>
        </div>
        <div class="row">            
            <div class="col-9 m-auto mt-5 pt-5 ">
                <div id="msgSuccess" class="alert alert-success" style="display:none"> Registro salvado con éxito </div>
                <div id="msgError"class="alert-danger alert" style="display:none"> Ocurrió un erro al tratar de salvar </div>
            </div>
        </div>
        <div class="row">        
            <div class="col-9 m-auto white-bg" id="table-container">
                <!-- Table -->
            </div>
        </div>
    </div>
    <script src="../lib/popper.js"></script>
    <script src="../lib/jquery.js"></script>
    <script src="../lib/bootstrap.js"></script>
    <script src="../js/usuarios.js"></script>
</body>

</html>