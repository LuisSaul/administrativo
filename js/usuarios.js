
let contenedor = $('#table-container');


$.ajax({
    url: '../php/getUsuarios.php',
    dataType: 'json',
    success: ( response ) => {
        console.log( response );
        if( response.length > 0 ){
            createTable({target: '#table-container'}, response)
        }
    }, failure: ( error ) => {
        console.error('error inesperado');
    }
});


function createTable(config, data){
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
    th.append($("<th>", {html: 'Opciones'}));
    data.forEach((row, index) => {
        const tr = $("<tr>", {'data-id-usuario': row['ID'], 'data-editable':false});
        for(const property in row){
            tr.append($("<td>",{
                html: row[property],'data-label':property, 'contenteditable':'false'
            }));
        }
        let edit = $("<button>",{ class:"btn btn-primary", html: 'Editar',}),
            del = $("<button>",{ class:"btn btn-danger", html: 'Eliminar',}),
            save = $("<button>",{ class:"btn btn-success   ", html: 'Guardar',});

        edit.click( (event) => {
            let row = $(event.target).parent().parent().parent();            
            let rowFields = row.find('td:not([data-label=ID])');
            let editable = (row.attr('data-editable') == "true");
            row.attr('data-editable', !editable)
            row.toggleClass('editable');
            rowFields.attr("contenteditable", !editable);
        });
        
        del.click( (event)=> {
            let row = $(event.target).parent().parent().parent();
            $.ajax({
                url: '../php/deleteUsuario.php',
                method: 'GET',
                data: {
                    id: row.attr('data-id-usuario')
                },
                success: ( response ) => {
                    console.log( response );
                    row.remove();
                },
                failure: ( error ) => {
                    console.error( error );
                }
            })
        });

        save.click( (event) => {

        });


        tr.append($("<td>",{ 
            html: $('<div>', {
                class: 'btn-group btn-group-sm',
                role: 'group',
                html:[edit, del, save]
            })
        }));
        tb.append(tr);
    });

    table.append(th).append(tb);   
    element.empty().append(table);
    return table;
}


