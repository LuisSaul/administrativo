<!DOCTYPE html>
<html>

<head>
  <title>Formulario</title>
  <link rel="icon" href="../img/icon.png">

  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <link rel="stylesheet" href="../css/formulario.css">
  <link rel="stylesheet" href="../lib/bootstrap.css">
  <link rel="stylesheet" href="../lib/animate.css">
  <link rel="stylesheet" href="../css/global.css">
</head>

<body>
  <div class="container-fluid">
    <div class="row">
      <div class="col-5 m-auto">
        <h1 class="title mb-4 text-center">Formulario de alta</h1>
      </div>
    </div>
    <div class="row m-3">
      <div class="col-9 m-auto">
        <div id="error" class="alert alert-danger" style="display:none;"> No se pudo registrar </div>
        <div id="success" class="alert alert-success" style="display:none;"> Registro con éxito </div>
      </div>
    </div>
    <div class="row m-3">
      <div class="col-9 m-auto white-bg p-5">
        <form data-usuario="<?php echo $_GET['id']; ?>" >
          <div class="form-row">
            <div class="form-group col-4">
              <label>Nombre</label>
              <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Nombre">
            </div>
            <div class="form-group col-4">
              <label>Apellido paterno</label>
              <input type="text" class="form-control"id="apellidoPat" name="apellidoPat" placeholder="Paterno">
            </div>
            <div class="form-group col-4">
              <label>Apellido materno</label>
              <input type="text" class="form-control" id="apellidoMat" name="apellidoMat" placeholder="Materno">
            </div>
          </div>
            <div class="form-group">
              <label>Dirección</label>
              <input type="text"  id="address" class="form-control" placeholder="Dirección del solicitante">
            </div>
          <div class="form-row">
            <div class="form-group col-6">
              <label>Estado cívil</label>
              <select id="estado_civil" name="estado_civil" class="custom-select">
                <option value="0">Soltero</option>
                <option value="1">Casado</option>
                <option value="2">Amargado</option>
              </select>
            </div>
            <div class="form-group col-6">
              <label> Email </label>
              <input type="email"  id="correo" class="form-control" placeholder="ejemplo@tudominio.com">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group col-6">
              <label> Fecha </label>
              <input  id="fecha_registro" type="date" class="form-control" placeholder="dd/mm/yyyy">
            </div>
            <div class="form-group col-6">
              <label> Teléfono </label>
              <input type="text"  id="telefono" name="telefonofijo" class="form-control" placeholder="###-###-###">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <button type="button" id="alta"  class="btn btn-success"> Registrar </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="row m-3">
      <div class="col-4 m-auto text-center">
        <h3 class="subtitle"> Solicitantes registrados </h3>
      </div>
    </div>
    <div class="row m-3">
      <div class="col-9 m-auto white-bg">
        <div id="tabla-usuarios"></div>
      </div>
    </div>
  </div>
  <script src="../lib/popper.js"></script>
  <script src="../lib/jquery.js"></script>
  <script src="../lib/bootstrap.js"></script>
  <script src="../js/formulario.js"></script>
</body>

</html>