
let nombre = $('#nombre');
let apellidoPat = $('#apellidoPat');
let apellidoMat = $('#apellidoMat');
let estadoCivil = $('#estado_civil');
let direccion = $('#direccion');
let email = $('#email');
let fechaRegistro = $('#fecha_registro');
let telefono = $('#telefono');
let button = $('button#alta');

$.ajax({
    url: '../php/getSolicitud.php',
    method: 'GET',
    dataType: 'JSON',
    data:{
        id: $('#formulario').attr('data-usuario')
    },
    success: ( response ) => {
        if( response.length > 0 ){
            let solicitud = response[0];
            nombre.val( solicitud.nombre );
            nombre.attr("disabled", true );
            apellidoPat.val( solicitud.apellidoPat );
            apellidoPat.attr("disabled", true );
            apellidoMat.val( solicitud.apellidoMat );
            apellidoMat.attr("disabled", true );
            estadoCivil.val( solicitud.estado_civil );
            estadoCivil.attr("disabled", true );
            direccion.val( solicitud.direccion );
            direccion.attr("disabled", true );
            email.val( solicitud.email );
            email.attr("disabled", true );
            fechaRegistro.val( solicitud.fecha_registro )
            fechaRegistro.attr("disabled", true );
            telefono.val( solicitud.telefono );
            telefono.attr("disabled", true );
            button.remove();        
        } 
    },
    failure: ( error ) => {
        console.error( error );
    }
});


button.click( ( event ) => {
    $.ajax({
        url: '../php/registerSolicitud.php',
        method: 'POST',
        data: {
            nombre : nombre.val(),
            apellidoPat : apellidoPat.val(),
            apellidoMat : apellidoMat.val(),
            estado_civil : estadoCivil.val(),
            direccion : direccion.val(),
            email : email.val(),
            fecha_registro : fechaRegistro.val(),
            telefono : telefono.val()
        },
        success: ( response ) => {
            console.log( response );
        },
        failure: ( error ) =>  {

        }
    })
});