<!DOCTYPE html>
<html>
<<<<<<< HEAD
=======
   <head>
      <title>Formulario</title>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <link rel="stylesheet" href="../css/formulario.css">
      <link rel="stylesheet" href="../lib/bootstrap.css">
      <link rel="stylesheet" href="../lib/animate.css">
      <link rel="stylesheet" href="../css/global.css">
   </head>
   <body>
      <div id="contenedor">
         <h2>Formulario de alta</h2>
         <form  id="formulario" data-usuario="<?php echo $_GET['id'];?>">
            <ul>
               <li class="izquierda">
                  <label class="titulo" for="nombre">Nombre y apellidos <span class="requerido">*</span></label>
                  <div>
                     <span class="completo">
                     <input id="nombre" name="nombre" value="" />
                     <label for="nombre">Nombre</label>
                     </span>
                     <span class="completo">
                     <input id="apellidoPat" name="apellidoPat" value="" />
                     <label for="apellidoPat">Apellido materno</label>
                     </span>
                     <span class="completo">
                     <input id="apellidoMat" name="apellidoMat" value="" />
                     <label for="apellidoMat">Apellido paterno</label>
                     </span>
                     <span class="tercio">
                        <label for="estado_civil">Estado civil</label>
                        <select id="estado_civil" name="estado_civil">
                           <option value="0">Soltero</option>
                           <option value="1">Casado</option>
                           <option value="2">Divorciado</option>
                           <option value="3">Amargado</option>
                        </select>
                     </span>
                  </div>
                  <p class="ayuda">No te olvides de escribir también tu segundo apellido</p>
               </li>
               <li class="derecha">
                  <label class="titulo" for="direccion">Dirección <span class="requerido">*</span></label>
                  <div>
                     <span class="completo">
                     <input id="direccion" name="direccion" value="" />
                     <label for="direccion">Calle, número, piso, puerta</label>
                     </span>
                  </div>
                  <p class="ayuda">La dirección debe ser formato Colonia, calle, número</p>
               </li>
               <li class="izquierda">
                  <label class="titulo" for="email">Email</label>
                  <div>
                     <span class="completo">
                     <input id="email" name="email" value="" />
                     </span>
                  </div>
                  <p class="ayuda">Asegúrate de que sea válido</p>
               </li>
               <li class="izquierda">
                <label class="titulo" for="fecha">Fecha</label>
                <div>
                   <span class="completo">
                   <input id="fecha_registro" type="date" name="fecha" value="" />
                   </span>
                </div>
                <p class="ayuda">Registra la fecha de tu registro</p>
             </li>
               <li class="derecha">
                  <label class="titulo" for="telefonofijo">Teléfono <span class="requerido">*</span></label>
                  <div>
                     <span class="mitad">
                     <input id="telefono" name="telefonofijo" value="" />
                     <label for="telefonofijo">Fijo</label>
                     </span>
                  </div>
                  <p class="ayuda">Teléfono móvil de 10 digitos</p>
               </li>
               <li class="botones">
                  <button id="alta" type="button">Dar de alta</button>
               </li>
            </ul>
            <h1 id = "valido"></h1>
         </form>
         
      </div>
      <div class="container-fluid">
        <div class="row mb-5">
          <div class="col-6 offset-3">
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
>>>>>>> 3f2ad324cdac81b80e5c0b286c5ef97f8768b086

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