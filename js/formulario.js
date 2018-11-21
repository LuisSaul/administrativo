
let nombre = $('#nombre');
let apellidoPat = $('#apellidoPat');
let apellidoMat = $('#apellidoMat');
let estadoCivil = $('#estado_civil');
let direccion = $('#address');
let email = $('#correo');
let fechaRegistro = $('#fecha_registro');
let telefono = $('#telefono');
let button = $('button#alta');
loadUsuario();
button.click( ( event ) => {
    $.ajax({
        url: '../php/Solicitante.php',
        method: 'POST',
        data: {
            nombre : nombre.val(),
            apellidoPat : apellidoPat.val(),
            apellidoMat : apellidoMat.val(),
            estado_civil : estadoCivil.val(),
            direccion : direccion.val(),
            email : email.val(),
            fecha_registro : fechaRegistro.val(),
            telefono : telefono.val(),
            id: $('form').attr('data-usuario')
        },
        success: ( response ) => {
            console.log( response );
            if( response  == 1 ){
                showMsg("success");
                loadUsuario();
            } else {
                showMsg("error");
            }
        },
        failure: ( error ) =>  {
            showMsg("error");
        }
    })
});

function showMsg( id ){
    let element = $('#'+id);
    element.toggle('hidden');
    setTimeout(( ) => {
        element.toggle('hidden');
    }, 3000);
}

function loadUsuario( ){
    $.ajax({
        url: '../php/Solicitante.php',
        method: 'GET',
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
}
function createTableUsuarios(config, data){
    const element = $(config.target);    
    const headers = Object.keys(data[0]);    

    const table = $('<table>',{
        class: 'table table-sm table-hover',
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
