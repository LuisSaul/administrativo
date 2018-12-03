//Variables de los input del modal de insertar solicitante
let idUsuario = $('#idUsr');
let nombre = $('#nombre');
let apellidoPat = $('#apellidoPat');
let apellidoMat = $('#apellidoMat');
let fechaNacimiento = $('#fecha_nacimiento');
let estadoCivil = $('#estado_civil');
let direccion = $('#dir');
let email = $('#correo');
let fechaRegistro = $('#fecha_registro');
let telefono = $('#telefono');
let button = $('button#insertarSolicitante');
let cerrarModalAdd = $('button#cerrarModalAdd');

//Expresiones regualres para la validación de los campos de texto
const erNombre = /^([A-ZÁÉÍÓÚÑ]{1}[a-zñáéíóúñ]+[\s]*)+$/;
const erDireccion = /^([A-Za-z0-9ÁÉÍÓÚñáéíóú\.\-\#]+[\s]*)+$/;
const erEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const erTelefono = /^([0-9\s\+\-]){7,17}$/
const tel = /^[0-9]{7,12}$/;

recargarTabla();

function recargarTabla(){
    $.ajax({
        url: '../php/obtenerSolicitantes.php',
        dataType: 'json',
        success: (response) => {
            console.log(response);
            if (response.length > 0) {
                createTableUsuarios({ target: '#tabla-usuarios' }, response)
            }
        }, failure: (error) => {
            console.error('error inesperado');
        }
    });
}

button.click((event) => {
    if (validarCamposLlenosInsercion()) {

        if (validarInsercion()) {
            $.ajax({
                url: '../php/registrarSolicitud.php',
                method: 'POST',
                data: {
                    nombre: nombre.val(),
                    apellidoPat: apellidoPat.val(),
                    apellidoMat: apellidoMat.val(),
                    fecha_nacimiento: fechaNacimiento.val(),
                    estado_civil: estadoCivil.val(),
                    direccion: direccion.val(),
                    email: email.val(),
                    fecha_registro: fechaRegistro.val(),
                    telefono: telefono.val(),
                    id: $('#idUsr').val()
                },
                success: (response) => {
                    console.log(response);
                    console.log("Registro exitoso");
                    nombre.val("");
                    apellidoPat.val("");
                    apellidoMat.val("");
                    estadoCivil.val("");
                    direccion.val("");
                    email.val("");
                    fechaRegistro.val("");
                    telefono.val("");
                    $('#idUsr').val("");
                    alert('Registro exitoso!!!');
                    recargarTabla();
                    cerrarModalAdd.click();
                },
                failure: (error) => {

                }
            })
        } else {
            console.log("Valores invalidos");
        }
    } else {
        console.log("Datos incompletos");
    }
});

function createTableUsuarios(config, data) {
    const element = $(config.target);
    const headers = Object.keys(data[0]);

    const table = $('<table>', {
        class: 'table table-sm table-hover',
        'data-objet': 'Table',
        html: []
    });
    const th = $('<thead>', {
        class: '',
        html: []
    });
    const tb = $('<tbody>');


    headers.forEach((element, index) => {
        th.append($("<th>", { html: element }));
    });

    data.forEach((row, index) => {
        const tr = $("<tr>");
        for (const property in row) {
            tr.append($("<td>", {
                html: row[property], 'data-label': property
            }));
        }
        tb.append(tr);
    });

    table.append(th).append(tb);
    element.empty().append(table);
    return table;
}

function validar(){
    //validar campo nombre de :::datos personales:::
	 var er_Nombre  = /^([a-z\A-Z\á\é\í\ó\ú\ñ\ü\s])+$/ 
     if(!er_Nombre.test(document.form1.Nombre.value)) { 
         alert('El campo Nombre debe contener solo Letras.');
         document.form1.Nombre.focus();
       return false
     } 
}

function validarCamposLlenosInsercion(){
    if(nombre.val() == "") { 
        alert('Datos incompletos, falta el nombre');
        nombre.focus();
        return false;
    }else if(apellidoPat.val() == ""){
        alert('Datos incompletos, falta el apellido paterno');
        apellidoPat.focus();
        return false;
    }else if(apellidoMat.val() == ""){
        alert('Datos incompletos, falta el apellido materno');
        apellidoMat.focus();
        return false;
    }else if(fechaNacimiento.val() == ""){
        alert('Datos incompletos, falta la fecha de nacimiento');
        fechaNacimiento.focus();
        return false;
    }else if(direccion.val() == ""){
        alert('Datos incompletos, falta la dirección');
        direccion.focus();
        return false;
    }else if(email.val() == ""){
        alert('Datos incompletos, falta el e-mail');
        email.focus();
        return false;
    }else if(fechaRegistro.val() == ""){
        alert('Datos incompletos, falta la fecha de registro');
        fechaRegistro.focus();
        return false;
    }else if(telefono.val() == ""){
        alert('Datos incompletos, falta el teléfono');
        telefono.focus();
        return false;
    }else{
        return true;
    }
}

function validarInsercion(){
     if(!erNombre.test(nombre.val())) { 
         alert('El campo de nombre debe contener solo letras y la primera letra debe de ser mayúscula');
         nombre.focus();
         return false;
     }else if(!erNombre.test(apellidoPat.val())){
        alert('El campo de apellido paterno debe contener solo letras y la primera letra debe de ser mayúscula');
        apellidoPat.focus();
        return false;
     }else if(!erNombre.test(apellidoMat.val())){
        alert('El campo de apellido materno debe contener solo letras y la primera letra debe de ser mayúscula');
        apellidoMat.focus();
        return false;
     }else if(!erDireccion.test(direccion.val())){
        alert('El campo de dirección solo puede contener letras, numeros y los siguientes simbolos: \".\" \"-\" \"#\"');
        direccion.focus();
        return false;
     }else if(!erEmail.test(email.val())){
        alert('El campo de E-mail es incorrecto, verifica que este bien escrito');
        email.focus();
        return false;
     }else if(!erTelefono.test(telefono.val())){
        alert("El campo de teléfono es incorrecto, solo de aceptan números, \'+\' y \'-\' ");
        telefono.focus();
        return false;
     }else{
        return true;
     }
}