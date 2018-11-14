<!DOCTYPE html>
<html>
<head>
  <title>Formulario</title>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <link rel="stylesheet" href="../css/formulario.css">
</head>
 
<body>
  <div id="contenedor">
  
  <h2>Formulario de alta</h2>
  
  <form method="post" action="#">
  <ul>
  <li class="izquierda">
    <label class="titulo" for="nombre">Nombre y apellidos <span class="requerido">*</span></label>
    <div>
      <span class="completo">
        <input id="nombre" name="nombre" value="" />
        <label for="nombre">Nombre</label>
      </span>
  
      <span class="completo">
        <input name="apellidoPat" value="" />
        <label for="apellidoPat">Apellido materno</label>
      </span>
  
      <span class="completo">
        <input name="apellidoMat" value="" />
        <label for="apellidoMat">Apellido paterno</label>
      </span>
    </div>

    <span class="tercio">
        <label for="estado_civil">Estado civil</label>
      <select name="estado_civil">
        <option value=""></option>
        <option value="0">Soltero</option>
        <option value="1">Casado</option>
        <option value="2">Divorciado</option>
        <option value="3">Amargado</option>
      </select>
    </span>
  
    <p class="ayuda">No te olvides de escribir también tu segundo apellido</p>
  </li>
  
  <li class="derecha">
    <label class="titulo" for="direccion">Dirección <span class="requerido">*</span></label>
  
    <div>
      <span class="completo">
        <input name="direccion" value="" />
        <label for="direccion">Calle, número, piso, puerta</label>
      </span>
    </div>
  
    <p class="ayuda">El código postal es imprescindible para poder recibir los pedidos</p>
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
  
  <li class="derecha">
    <label class="titulo" for="telefonofijo">Teléfono <span class="requerido">*</span></label>
  
    <div>
      <span class="mitad">
        <input id="telefonofijo" name="telefonofijo" value="" />
        <label for="telefonofijo">Fijo</label>
      </span>
    </div>
  
    <p class="ayuda">Sin prefijo de país y sin espacios en blanco</p>
  </li>
  
  <li class="botones">
    <input id="alta" type="submit" value="Darme de alta &rarr;" />
  </li>
  
  </ul>
  </form>
  
</div>
</body>
</html>