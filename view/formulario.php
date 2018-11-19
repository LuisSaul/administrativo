<!DOCTYPE html>
<html>
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
      <script src="../lib/popper.js"></script>
      <script src="../lib/jquery.js"></script>
      <script src="../lib/bootstrap.js"></script>
      <script src="../js/formulario.js"></script>
   </body>
</html>


