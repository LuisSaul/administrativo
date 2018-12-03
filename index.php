<html>

<head>
  <title>Inicio de sesión</title>
  <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
  <link rel="icon" href="img/icon.png">      
  <link rel="stylesheet" href="lib/bootstrap.css">
  <link rel="stylesheet" href="lib/animate.css">
  <link rel="stylesheet" href="css/login.css">
</head>

<body class="mb-5 pb-5">  
  <div class="container-fluid">
    <div class="row content-form">
      <div class="col-5 pl-5">
        <h1 clas=""> Iniciar sesión </h1>
        <div class="form-group">
          <label clas="">Usuario:</label>
          <input class="form-control" name="user" type="text">
        </div>
        <div class="form-group">
          <label clas="">Contraseña:</label>
          <input class="form-control" name="password" type="password">
        </div>
        <div id="error" class="alert alert-danger" role="alert" style="display:none;">
          <h6>Usuario o contraseña incorrecta</h6>
        </div>
        <button id="login" type="submit" class="btn btn-primary">¡Comencemos!</button>
      </div>
    </div>
  </div>
    
  <script src="./lib/popper.js"></script>
  <script src="./lib/jquery.js"></script>
  <script src="./lib/bootstrap.js"></script>
  <script src="./js/login.js"></script>
</body>
</html>