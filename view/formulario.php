<!DOCTYPE html>
<html>
   <head>
      <title>Formulario</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="icon" href="../img/icon.png">      
      <link rel="stylesheet" href="../lib/bootstrap.css">
      <link rel="stylesheet" href="../lib/animate.css">
      <link rel="stylesheet" href="../css/global.css">
      <link rel="stylesheet" href="../css/formulario.css">
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
                <a class="nav-link" href="../index.php">Salir</a>
            </li>
        </ul>
    </div>
    </nav>
    </div>
    </div>
   <div class="row justify-content-left">
        <!--Botón para agregar usuario-->
        <caption>
          <button class="btn btn-info boton-agregar" data-toggle="modal" data-target="#modalAdd" boton-agregar>
            Agregar nuevo solicitante
          </button>
        </caption>
        <button id="mod-account" style="display:none;" data-toggle="modal" data-target="#updateAccount"></button>
        </div>
        <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-11">
          <div id="tabla-usuarios"></div>
          </div>
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
                <label>Id de usuario quién registra</label>
                <input type="text" name="" id="idUsr" class="form-control" value="<?php echo $_GET['id'];?>" readonly>
                <label>Nombre</label>
                <input type="text" name="" id="nombre" class="form-control">
                <label>Apellido paterno</label>
                <input type="text" name="" id="apellidoPat" class="form-control">
                <label>Apellido materno</label>
                <input type="text" name="" id="apellidoMat" class="form-control">
                <label>Fecha de nacimiento</label>
                <input type="date" id="fecha_nacimiento" min="1973-01-01" max="1998-01-01" class="form-control">
                <label>Estado civil</label>
               <select id="estado_civil" class="form-control">
                  <option value="0">Soltero</option>
                  <option value="1">Casado</option>
                  <option value="2">Divorciado</option>
               </select>
                <label>Dirección</label>
                <input type="text" id="dir" class="form-control">
                <label>E-mail</label>
                <input type="text" id="correo" class="form-control">
                <label>Fecha de registro</label>
                <input type="date" id="fecha_registro" min="2018-11-03" max="2018-12-03" class="form-control">
                <label>Teléfono</label>
                <input type="text" id="telefono" class="form-control">
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-info" id="insertarSolicitante">Insertar</button>
                
            </div>
            </div>
        </div>
    </div>
      <script src="../lib/popper.js"></script>
      <script src="../lib/jquery.js"></script>
      <script src="../lib/bootstrap.js"></script>
      <script src="../js/formulario.js"></script>
   </body>
</html>


