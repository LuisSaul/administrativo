
let contenedor = $('#table-container');


$.ajax({
    url: '../php/Solicitante.php',
    method: 'GET',
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

$.ajax({
    url: '../php/Usuario.php',
    method: 'GET',
    dataType: 'json',
    success: ( response ) => {
        console.log( response );
        if( response.length > 0 ){
            createTableUsuarios({target: '#table-container-users'}, response)
        }
    }, failure: ( error ) => {
        console.error('error inesperado');
    }
});


function createTable(config, data){
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
            let rowFields = row.find('td:not(td[data-label=Nickname], td[data-label=ID])');
            let editable = (row.attr('data-editable') == "true");
            row.attr('data-editable', !editable)
            row.toggleClass('editable');


            rowFields.attr("contenteditable", !editable);
        });
        
        del.click( (event)=> {
            let row = $(event.target).parent().parent().parent();
            $.ajax({
                url: '../php/Solicitante.php?id='+row.attr('data-id-usuario'),
                method: 'DELETE',
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
            let row = $(event.target).parent().parent().parent();
            if(row.attr('data-editable') == "true"){
                let rowFields = row.find('td[data-label]:not(td[data-label=Nickname], td[data-label=ID])');
                $.ajax({
                    url: '../php/Solicitante.php',
                    method: 'PUT',
                    data:{
                        nombre : rowFields[0].innerHTML,
                        apellidoPat : rowFields[1].innerHTML,
                        apellidoMat : rowFields[2].innerHTML,
                        estado_civil : (rowFields[3].innerHTML == 'Soltero')? 0 : 1,
                        direccion : rowFields[4].innerHTML,
                        email : rowFields[5].innerHTML,
                        telefono : rowFields[6].innerHTML,
                        id: row.attr('data-id-usuario')
                    },
                    success: ( response ) => {
                        console.log( response );
                        showMsg('msgSuccess');
                        edit.click();
                    },
                    failure: ( error ) => {
                        showMsg('msgError');
                        console.error( error );
                    }
                });
            }
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


function showMsg( id ){
    let element = $('#'+id);
    element.toggle('hidden');

    setTimeout(( ) => {
        element.toggle('hidden');
    }, 3000);
}