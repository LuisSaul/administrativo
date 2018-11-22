<!DOCTYPE html>
<html>
   <head>
      <title>Solicitantes</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
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
        </ul>
    </div>
    </nav>
    </div>
    </div>
    <div class="row justify-content-left">
        <!--Botón para agregar usuario-->
        <caption>
          <button class="btn btn-info boton-agregar" data-toggle="modal" data-target="#modalAdd">
            Agregar nuevo solicitante
          </button>
        </caption>
        </div>
        <button id="mod-account" style="display:none;" data-toggle="modal" data-target="#updateAccount"></button>
        <div class="container-fluid">
        </div> 
        <div class="row justify-content-center">
        <div class="col-11">
        <div class="row">        
            <div class="col" id="table-container">
                <!-- Table -->
            </div>
        </div>
        </div>
        </div>
      </div>
      
      <button id="mod-solicitante" style="display:none;" data-toggle="modal" data-target="#modalUpdate"></button>
      

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
                <div class="valid-feedback">
                    Nombre correcto
                </div>
                <div class="invalid-feedback">
                    EL nombre no debe de llevar números y debe de iniciar con mayúscula.
                </div>
                <label>Apellido paterno</label>
                <input type="text" name="" id="apellidoPat" class="form-control">
                <div class="valid-feedback">
                    Apellido correcto
                </div>
                <div class="invalid-feedback">
                    EL Apellido no debe de llevar números y debe de iniciar con mayúscula.
                </div>
                <label>Apellido materno</label>
                <input type="text" name="" id="apellidoMat" class="form-control">
                <div class="valid-feedback">
                    Apellido correcto
                </div>
                <div class="invalid-feedback">
                    EL Apellido no debe de llevar números y debe de iniciar con mayúscula.
                </div>
                <label>Estado civil</label>
               <select id="estado_civil" class="form-control">
                  <option value="0">Soltero</option>
                  <option value="1">Casado</option>
                  <option value="2">Divorciado</option>
               </select>
                <label>Dirección</label>
                <input type="text" id="dir" class="form-control">
                <div class="valid-feedback">
                    Dirección correcta
                </div>
                <div class="invalid-feedback">
                    Dirección incorrecta
                </div>
                <label>E-mail</label>
                <input type="text" id="correo" class="form-control">
                <div class="valid-feedback">
                    E-mail correcto
                </div>
                <div class="invalid-feedback">
                    E-mail incorrecto
                </div>
                <label>Fecha de registro</label>
                <input type="date" id="fecha_registro" class="form-control">
                <label>Teléfono</label>
                <input type="text" id="telefono" class="form-control">
                <div class="valid-feedback">
                    Teléfono correcto
                </div>
                <div class="invalid-feedback">
                    Teléfono incorrecto
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-info" id="insertarSolicitante">Insertar</button>
                
            </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modalUpdate" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
            <h4 class="modal-title" id="myModalLabel">Actualizar datos</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
                <label>Id de solicitante</label>
                <input type="text" name="" id="idSolicitanteM" class="form-control" readonly>
                <label>Nombre</label>
                <input type="text" name="" id="nombreM" class="form-control">
                <label>Apellido paterno</label>
                <input type="text" name="" id="apellidoPatM" class="form-control">
                <label>Apellido materno</label>
                <input type="text" name="" id="apellidoMatM" class="form-control">
                <label>Estado civil</label>
               <select id="estado_civilM" class="form-control">
                  <option value="0">Soltero</option>
                  <option value="1">Casado</option>
                  <option value="2">Divorciado</option>
               </select>
                <label>Dirección</label>
                <input type="text" id="dirM" class="form-control">
                <label>E-mail</label>
                <input type="text" id="correoM" class="form-control">
                <label>Fecha de registro</label>
                <input type="date" id="fecha_registroM" class="form-control">
                <label>Teléfono</label>
                <input type="text" id="telefonoM" class="form-control">
            </div>
            <div class="modal-footer">
            <button id="actualizarSolicitante" type="button" class="btn btn-info" style="margin-top: 10px">Guardar</button>
            <button id="eliminarSolicitante" type="button" class="btn btn-danger" style="margin-top: 10px">Eliminar</button>

            </div>
            </div>
        </div>
    </div>

      <script src="../lib/popper.js"></script>
      <script src="../lib/jquery.js"></script>
      <script src="../lib/bootstrap.js"></script>
      <script src="../js/solicitantes.js"></script>
   </body>
</html>


