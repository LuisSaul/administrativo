<html>

<head>
  <title>Administrativos</title>
  <link rel="icon" href="./img/icon.png">
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">

  <!-- CSS FILES -->
  <link rel="stylesheet" href="lib/bootstrap.css">
  <link rel="stylesheet" href="lib/animate.css">
  <link rel="stylesheet" href="css/index.css">
</head>

<body class="mb-5 pb-5">  
  <div class="container-fluid">
    <div class="row text-center login">
      <div class="col-3 text-center">
        <h4> Administradores </h4>
        <div class="form-group">
          <label>User:</label>
          <input class="form-control text-center" name="user" type="text">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input class="form-control text-center" name="password" type="password">
        </div>
        <div id="error" class="alert alert-danger" role="alert" hidden>
          Usuario o contraseña incorrecta
        </div>
        <button id="login" type="submit" class="btn btn-primary">Iniciar sesión</button>
      </div>
    </div>
  </div>
    
  <script src="./lib/popper.js"></script>
  <script src="./lib/jquery.js"></script>
  <script src="./lib/bootstrap.js"></script>
  
  <script src="./js/index.js"></script>
</body>
</html>