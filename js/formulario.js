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
let button = $('button#insertarSolicitante');
//Constantes para validar las expresiones regulares
const erNombre = /^([A-ZÁÉÍÓÚÑ]{1}[a-zñáéíóúñ]+[\s]*)+$/;
const erDir = /^([A-Za-zÁÉÍÓÚñáéíóú]+[\s]*)([#]{0,1}[0-9]+[A-Z]*)+$/;
const erEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const tel = /^[0-9]{7,12}$/;

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

button.click((event) => {
    if (nombre.val() != "" && apellidoPat.val() != "" && apellidoMat.val() != "" && direccion.val() != "" && email.val() != "" && telefono.val() != "") {

        if (erNombre.test(nombre.val()) && erNombre.test(apellidoPat.val()) && erNombre.test(apellidoMat.val())
            && erDir.test(direccion.val()) && erEmail.test(email.val()) && tel.test(telefono.val())) {
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
