<!DOCTYPE html>
<html>
   <head>
      <title>Formulario</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="icon" href="../img/icon.png">      
      <link rel="stylesheet" href="../css/formulario.css">
      <link rel="stylesheet" href="../lib/bootstrap.css">
      <link rel="stylesheet" href="../lib/animate.css">
      <link rel="stylesheet" href="../css/global.css">
   </head>
   <body>
   <div class="row justify-content-left">
        <!--Botón para agregar usuario-->
        <caption>
          <button class="btn btn-info btn-add" data-toggle="modal" data-target="#modalAdd" style="margin-top: 50px;margin-left: 130px;margin-bottom: 50px;">
            Agregar nuevo solicitante
          </button>
        </caption>
        <button id="mod-account" style="display:none;" data-toggle="modal" data-target="#updateAccount"></button>
        <div class="container-fluid">
        <div class="row mb-5">
          <div class="col-6 offset-1">
          <div id="tabla-usuarios"></div>
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
                <label>Id de usuario quién registra</label>
                <input type="text" name="" id="idUsr" class="form-control" value="<?php echo $_GET['id'];?>" readonly>
                <label>Nombre</label>
                <input type="text" name="" id="nombre" class="form-control">
                <label>Apellido paterno</label>
                <input type="text" name="" id="apellidoPat" class="form-control">
                <label>Apellido materno</label>
                <input type="text" name="" id="apellidoMat" class="form-control">
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
                <input type="date" id="fecha_registro" class="form-control">
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


