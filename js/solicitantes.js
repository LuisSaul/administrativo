
let contenedor = $('#table-container');

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
let insertar = $('button#insertarSolicitante');
let cerrarModalAdd = $('button#cerrarModalAdd');

//Variables de los input del modal de modificar solicitante
let idSolicitanteM = $('#idSolicitanteM');
let nombreM = $('#nombreM');
let apellidoPatM = $('#apellidoPatM');
let apellidoMatM = $('#apellidoMatM');
let fechaNacimientoM = $('#fecha_nacimientoM');
let estadoCivilM = $('#estado_civilM');
let direccionM = $('#dirM');
let emailM = $('#correoM');
let fechaRegistroM = $('#fecha_registroM');
let telefonoM = $('#telefonoM');
let modSolicitante = $('#mod-solicitante');
let modificar = $('#actualizarSolicitante');
let eliminar = $('button#eliminarSolicitante');
let cerrarModalUpdate = $('#cerrarModalUpdate');

//Expresiones regualres para la validación de los campos de texto
const erNombre = /^([A-ZÁÉÍÓÚÑ]{1}[a-zñáéíóúñ]+[\s]*)+$/;
const erDireccion = /^([A-Za-z0-9ÁÉÍÓÚñáéíóú\.\-\#]+[\s]*)+$/;
const erEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const erTelefono = /^([0-9\s\+\-]){7,17}$/
const tel = /^[0-9]{7,12}$/;

//Instrucción ajax para obtener el registro de todos los solicitantes
recargarTabla();

function recargarTabla(){
    $.ajax({
        url: '../php/obtenerSolicitantes.php',
        dataType: 'json',
        success: (response) => {
            console.log(response);
            if (response.length > 0) {
                createTable({ target: '#table-container' }, response)
            }
        }, failure: (error) => {
            console.error('error inesperado');
        }
    });
}

insertar.click((event) => {
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
                    id: idUsuario.val()
                },
                success: (response) => {
                    console.log(response);
                    console.log("Registro exitoso");
                    nombre.val("");
                    apellidoPat.val("");
                    apellidoMat.val("");
                    fechaNacimiento.val("");
                    estadoCivil.val("");
                    direccion.val("");
                    email.val("");
                    fechaRegistro.val("");
                    telefono.val("");
                    idUsuario.val("");
                    //Instrucción ajax para obtener el registro de todos los solicitantes
                    recargarTabla();
                    alert('Registro exitoso!!!');
                    cerrarModalAdd.click();
                },
                failure: (error) => {

                }
            })
        }
    }
});

modificar.click((event) => {
    if (validarCamposLlenosModifica()) {

        if (validarModifica()) {
            $.ajax({
                url: '../php/actualizaSolicitante.php',
                method: 'POST',
                data: {
                    nombre: nombreM.val(),
                    apellidoPat: apellidoPatM.val(),
                    apellidoMat: apellidoMatM.val(),
                    fecha_nacimientoM: fechaNacimientoM.val(),
                    estado_civil: estadoCivilM.val(),
                    direccion: direccionM.val(),
                    email: emailM.val(),
                    fecha_registro: fechaRegistroM.val(),
                    telefono: telefonoM.val(),
                    id: idSolicitanteM.val()
                },
                success: (response) => {
                    console.log(response);
                    recargarTabla();
                    alert('Modificación exitosa!!!');
                },
                failure: (error) => {

                }
            })
        }
    }
});

eliminar.click((event) => {
    $.ajax({
        url: '../php/eliminarUsuario.php',
        method: 'GET',
        data: {
            id: idSolicitanteM.val()
        },
        success: (response) => {
            nombre.val("");
            apellidoPat.val("");
            apellidoMat.val("");
            fechaNacimiento.val("");
            estadoCivil.val("");
            direccion.val("");
            email.val("");
            fechaRegistro.val("");
            telefono.val("");
            idUsuario.val("");
            console.log(response);
            recargarTabla();
            alert('Registro eliminado con exito!!!');
            cerrarModalUpdate.click();
        },
        failure: (error) => {
            console.error(error);
        }
    })
});


function createTable(config, data) {
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
    th.append($("<th>", { html: 'Opciones' }));
    data.forEach((row, index) => {
        const tr = $("<tr>", { 'data-id-usuario': row['ID'], 'data-editable': false });
        for (const property in row) {
            tr.append($("<td>", {
                html: row[property], 'data-label': property, 'contenteditable': 'false'
            }));
        }
        let option = $("<button>", { class: "btn btn-success", html: 'Más información', });

        option.click((event) => {
            let row = $(event.target).parent().parent().parent();

            const user = {
                id: row.find("td").eq(0).html(),
                nombre: row.find("td").eq(1).html(),
                apellidoPat: row.find("td").eq(2).html(),
                apellidoMat: row.find("td").eq(3).html(),
                fecha_nacimiento: row.find("td").eq(4).html(),
                estado_civil: row.find("td").eq(5).html(),
                direccion: row.find("td").eq(6).html(),
                email: row.find("td").eq(7).html(),
                telefono: row.find("td").eq(9).html(),
                fecha: row.find("td").eq(8).html()
            }
            idSolicitanteM.val(user.id);
            nombreM.val(user.nombre);
            apellidoPatM.val(user.apellidoPat);
            apellidoMatM.val(user.apellidoMat);
            fechaNacimientoM.val(user.fecha_nacimiento);
            if (user.estado_civil == "Soltero") {
                estadoCivilM.val(0);
            } else if (user.estado_civil == "Casado") {
                estadoCivilM.val(1);
            } else if (user.estado_civil == "Divorciado") {
                estadoCivilM.val(2);
            }
            direccionM.val(user.direccion);
            emailM.val(user.email);
            fechaRegistroM.val(user.telefono);
            telefonoM.val(user.fecha);
            modSolicitante.click();
        });

        tr.append($("<td>", {
            html: $('<div>', {
                class: 'btn-group btn-group-sm',
                role: 'group',
                html: [option]
            })
        }));
        tb.append(tr);
    });

    table.append(th).append(tb);
    element.empty().append(table);
    return table;
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

function validarCamposLlenosModifica(){
    if(nombreM.val() == "") { 
        alert('Datos incompletos, falta el nombre');
        nombreM.focus();
        return false;
    }else if(apellidoPatM.val() == ""){
        alert('Datos incompletos, falta el apellido paterno');
        apellidoPatM.focus();
        return false;
    }else if(apellidoMatM.val() == ""){
        alert('Datos incompletos, falta el apellido materno');
        apellidoMatM.focus();
        return false;
    }else if(fechaNacimientoM.val() == ""){
        alert('Datos incompletos, falta la fecha de nacimiento');
        fechaNacimientoM.focus();
        return false;
    }else if(direccionM.val() == ""){
        alert('Datos incompletos, falta la dirección');
        direccionM.focus();
        return false;
    }else if(emailM.val() == ""){
        alert('Datos incompletos, falta el e-mail');
        emailM.focus();
        return false;
    }else if(fechaRegistroM.val() == ""){
        alert('Datos incompletos, falta la fecha de registro');
        fechaRegistroM.focus();
        return false;
    }else if(telefonoM.val() == ""){
        alert('Datos incompletos, falta el teléfono');
        telefonoM.focus();
        return false;
    }else{
        return true;
    }
}

function validarModifica(){
     if(!erNombre.test(nombreM.val())) { 
         alert('El campo de nombre debe contener solo letras y la primera letra debe de ser mayúscula');
         nombreM.focus();
         return false;
     }else if(!erNombre.test(apellidoPatM.val())){
        alert('El campo de apellido paterno debe contener solo letras y la primera letra debe de ser mayúscula');
        apellidoPatM.focus();
        return false;
     }else if(!erNombre.test(apellidoMatM.val())){
        alert('El campo de apellido materno debe contener solo letras y la primera letra debe de ser mayúscula');
        apellidoMatM.focus();
        return false;
     }else if(!erDireccion.test(direccionM.val())){
        alert('El campo de dirección solo puede contener letras, numeros y los siguientes simbolos: \".\" \"-\" \"#\"');
        direccionM.focus();
        return false;
     }else if(!erEmail.test(emailM.val())){
        alert('El campo de E-mail es incorrecto, verifica que este bien escrito');
        emailM.focus();
        return false;
     }else if(!erTelefono.test(telefonoM.val())){
        alert("El campo de teléfono es incorrecto, solo de aceptan números, \'+\' y \'-\' ");
        telefonoM.focus();
        return false;
     }else{
        return true;
     }
}

$(document).on('#nombre', 'focusout', function(){
    if(erNombre.test(nombre.val())){
        nombre.removeClass("is-invalid");
        nombre.addClass("is-valid");
    }else{
        nombre.removeClass("is-valid");
        nombre.addClass("is-invalid");
    }
});


//input[data-validacion="tipoA"]