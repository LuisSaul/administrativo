
let contenedor = $('#table-container');

//Variables de los input del modal de insertar solicitante
let idUsuario = $('#idUsr');
let nombre = $('#nombre');
let apellidoPat = $('#apellidoPat');
let apellidoMat = $('#apellidoMat');
let estadoCivil = $('#estado_civil');
let direccion = $('#dir');
let email = $('#correo');
let fechaRegistro = $('#fecha_registro');
let telefono = $('#telefono');
let insertar = $('button#insertarSolicitante');

//Variables de los input del modal de modificar solicitante
let idSolicitanteM = $('#idSolicitanteM');
let nombreM = $('#nombreM');
let apellidoPatM = $('#apellidoPatM');
let apellidoMatM = $('#apellidoMatM');
let estadoCivilM = $('#estado_civilM');
let direccionM = $('#dirM');
let emailM = $('#correoM');
let fechaRegistroM = $('#fecha_registroM');
let telefonoM = $('#telefonoM');
let modSolicitante = $('#mod-solicitante');
let modificar = $('#actualizarSolicitante');
let eliminar = $('button#eliminarSolicitante');

//Expresiones regualres para la validación de los campos de texto
const erNombre = /^([A-ZÁÉÍÓÚÑ]{1}[a-zñáéíóúñ]+[\s]*)+$/;
const erDir = /^([A-Za-zÁÉÍÓÚñáéíóú]+[\s]*)([#]{0,1}[0-9]+[A-Z]*)+$/;
const erEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const tel = /^[0-9]{7,12}$/;

//Instrucción ajax para obtener el registro de todos los solicitantes
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

insertar.click((event) => {
    if (nombre.val() != "" && apellidoPat.val() != "" && apellidoMat.val() != "" && direccion.val() != "" && email.val() != "" && telefono.val() != "") {
        
        if (erNombre.test(nombre.val()) && erNombre.test(apellidoPat.val()) && erNombre.test(apellidoMat.val()) 
            && erDir.test(direccion.val()) && erEmail.test(email.val()) &&tel.test(telefono.val())) {
            $.ajax({
                url: '../php/registrarSolicitud.php',
                method: 'POST',
                data: {
                    nombre: nombre.val(),
                    apellidoPat: apellidoPat.val(),
                    apellidoMat: apellidoMat.val(),
                    estado_civil: estadoCivil.val(),
                    direccion: direccion.val(),
                    email: email.val(),
                    fecha_registro: fechaRegistro.val(),
                    telefono: telefono.val(),
                    id: idUsuario.val()
                },
                success: ( response ) => {
                    console.log( response );
                    console.log("Registro exitoso");
                    nombre.val("");
                    apellidoPat.val("");
                    apellidoMat.val("");
                    estadoCivil.val("");
                    direccion.val("");
                    email.val("");
                    fechaRegistro.val("");
                    telefono.val("");
                    idUsuario.val("");
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

modificar.click((event) => {
    if (nombreM.val() != "" && apellidoPatM.val() != "" && apellidoMatM.val() != "" && direccionM.val() != "" && emailM.val() != "" && telefonoM.val() != "") {

        if (erNombre.test(nombreM.val()) && erNombre.test(apellidoPatM.val()) && erNombre.test(apellidoMatM.val())
            && erDir.test(direccionM.val()) && erEmail.test(emailM.val()) && tel.test(telefonoM.val())) {
            $.ajax({
                url: '../php/actualizaSolicitante.php',
                method: 'POST',
                data: {
                    nombre: nombreM.val(),
                    apellidoPat: apellidoPatM.val(),
                    apellidoMat: apellidoMatM.val(),
                    estado_civil: estadoCivilM.val(),
                    direccion: direccionM.val(),
                    email: emailM.val(),
                    fecha_registro: fechaRegistroM.val(),
                    telefono: telefonoM.val(),
                    id: idSolicitanteM.val()
                },
                success: (response) => {
                    console.log(response);
                    console.log("Registro exitoso");
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

eliminar.click((event) => {
    $.ajax({
        url: '../php/eliminarUsuario.php',
        method: 'GET',
        data: {
            id: idSolicitanteM.val()
        },
        success: (response) => {
            console.log(response);
            //row.remove();
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
                estado_civil: row.find("td").eq(4).html(),
                direccion: row.find("td").eq(5).html(),
                email: row.find("td").eq(6).html(),
                telefono: row.find("td").eq(8).html(),
                fecha: row.find("td").eq(7).html()
            }
            idSolicitanteM.val(user.id);
            nombreM.val(user.nombre);
            apellidoPatM.val(user.apellidoPat);
            apellidoMatM.val(user.apellidoMat);
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

/*
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
}*/


function showMsg(id) {
    let element = $('#' + id);
    element.toggle('hidden');

    setTimeout(() => {
        element.toggle('hidden');
    }, 3000);
}


/*
nombre.focusout(function(){
    if(erNombre.test($(this).val())){
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
    }else{
        $(this).removeClass("is-valid");
        $(this).addClass("is-invalid");
    }
});

apellidoPat.focusout(function(){
    if(erNombre.test($(this).val())){
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
    }else{
        $(this).removeClass("is-valid");
        $(this).addClass("is-invalid");
    }
});

apellidoMat.focusout(function(){
    if(erNombre.test($(this).val())){
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
    }else{
        $(this).removeClass("is-valid");
        $(this).addClass("is-invalid");
    }
});

direccion.focusout(function(){
    if(erDir.test($(this).val())){
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
    }else{
        $(this).removeClass("is-valid");
        $(this).addClass("is-invalid");
    }
});


email.focusout(function(){
    if(erEmail.test($(this).val())){
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
    }else{
        $(this).removeClass("is-valid");
        $(this).addClass("is-invalid");
    }
});

telefono.focusout(function(){
    if(tel.test($(this).val())){
        $(this).removeClass("is-invalid");
        $(this).addClass("is-valid");
    }else{
        $(this).removeClass("is-valid");
        $(this).addClass("is-invalid");
    }
});*/