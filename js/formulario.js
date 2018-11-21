let idUsr = $('#idUsr');
let nombre = $('#nombre');
let apellidoPat = $('#apellidoPat');
let apellidoMat = $('#apellidoMat');
let estadoCivil = $('#estado_civil');
let direccion = $('#dir');
let email = $('#correo');
let fechaRegistro = $('#fecha_registro');
let telefono = $('#telefono');
let button = $('button#insertarSolicitante');
let valores = $('#valido');


button.click((event) => {
    if (nombre.val() != "" && apellidoPat.val() != "" && apellidoMat.val() != "" && direccion.val() != "" && email.val() != "" && telefono.val() != "") {
        const erNombre = /^([A-ZÁÉÍÓÚÑ]{1}[a-zñáéíóúñ]+[\s]*)+$/;
        const erDir = /^([A-Za-zÁÉÍÓÚñáéíóú]+[\s]*)([#]{0,1}[0-9]+[A-Z]*)+$/;
        const erEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const tel = /^[0-9]{7,12}$/;
        if (erNombre.test(nombre.val()) && erNombre.test(apellidoPat.val()) && erNombre.test(apellidoMat.val()) 
            && erDir.test(direccion.val()) && erEmail.test(email.val()) &&tel.test(telefono.val())) {
            $.ajax({
                url: '../php/registerSolicitud.php',
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
                    id: idUsr.val()
                },
                success: ( response ) => {
                    console.log( response );
                    valores.text("Registro exitoso");
                    console.log("Registro exitoso");
                },
                failure: (error) => {

                }
            })
        } else {
            valores.text("Valores invalidos");
            console.log("Valores invalidos");
        }
    } else {
        valores.text("Datos incompletos");
        console.log("Datos incompletos");
    }
});



$.ajax({
    url: '../php/getUsuarios.php',
    dataType: 'json',
    success: ( response ) => {
        console.log( response );
        if( response.length > 0 ){
            createTableUsuarios({target: '#tabla-usuarios'}, response)
        }
    }, failure: ( error ) => {
        console.error('error inesperado');
    }
});



function createTableUsuarios(config, data){
    const element = $(config.target);    
    const headers = Object.keys(data[0]);    

    const table = $('<table>',{
        class: 'table',
        'data-objet': 'Table',
        html: []
    });
    const th = $('<thead>', {
        class: 'thead-dark',
        html: []
    });
    const tb = $('<tbody>');


    headers.forEach((element, index) => {
        th.append($("<th>", {html: element}));
    });
    
    data.forEach((row, index) => {
        const tr = $("<tr>");
        for(const property in row){
            tr.append($("<td>",{
                html: row[property],'data-label':property
            }));
        }
        tb.append(tr);
    });

    table.append(th).append(tb);   
    element.empty().append(table);
    return table;
}
