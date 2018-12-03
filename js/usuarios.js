let btn = $('button#insertarUsuario');
let user = $('input[name=user]');
let password  = $('input[name=password]');
let cerrarModalAdd = $('button#cerrarModalAdd');

cargarTabla();

function cargarTabla(){
    $.ajax({
        url: '../php/obtenerUsuario.php',
        dataType: 'json',
        success: (response) => {
            console.log(response);
            if (response.length > 0) {
                createTableUsuarios({ target: '#table-container-users' }, response)
            }
        }, failure: (error) => {
            console.error('error inesperado');
        }
    });
}

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

btn.click( ( event ) => {
    $.ajax({
        url: '../php/registrarUsuario.php',
        method: 'POST',
        data: {
            user: user.val(),
            pass: password.val()
        },
        success: ( response ) => {
            user.val('');
            password.val('');
            cargarTabla();
            cerrarModalAdd.click();
        },
        failure: ( error ) => {

        }
    });
});