
let contenedor = $('#table-container');

let idSolicitanteM = $('#idSolicitanteM');
let nombreM = $('#nombreM');
let apellidoPatM = $('#apellidoPatM');
let apellidoMatM = $('#apellidoMatM');
let estadoCivilM = $('#estado_civilM');
let direccionM = $('#dirM');
let emailM = $('#correoM');
let fechaRegistroM = $('#fecha_registroM');
let telefonoM = $('#telefonoM');
let modificar = $('button#actualizarSolicitante');
let eliminar = $('button#eliminarSolicitante');
/*
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

const erNombre = /^([A-ZÁÉÍÓÚÑ]{1}[a-zñáéíóúñ]+[\s]*)+$/;
const erDir = /^([A-Za-zÁÉÍÓÚñáéíóú]+[\s]*)([#]{0,1}[0-9]+[A-Z]*)+$/;
const erEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const tel = /^[0-9]{7,12}$/;*/

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

$.ajax({
    url: '../php/getUsuariosSinRegistro.php',
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
        let option = $("<button>",{ class:"btn btn-success", html: 'Más información',});

        option.click( (event) => {
            let row = $(event.target).parent().parent().parent();            
            let rowFields = row.find('td:not(td[data-label=Nickname], td[data-label=ID])');
            //let editable = (row.attr('data-editable') == "true");
            //row.attr('data-editable', !editable)
            //row.toggleClass('editable');


            //rowFields.attr("contenteditable", !editable);

            //const row = $(event.currentTarget).children();

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
            $('#idSolicitanteM').val(user.id);
            $('#nombreM').val(user.nombre);
            $('#apellidoPatM').val(user.apellidoPat);
            $('#apellidoMatM').val(user.apellidoMat);
            if(user.estado_civil=="Soltero"){
                $('#estado_civilM').val(0);
            } else if(user.estado_civil=="Casado"){
                $('#estado_civilM').val(1);
            } else if(user.estado_civil=="Divorciado"){
                $('#estado_civilM').val(2);
            }
            $('#dirM').val(user.direccion);
            $('#correoM').val(user.email);
            $('#fecha_registroM').val(user.telefono);
            $('#telefonoM').val(user.fecha);
            $('#mod-solicitante').click();
        });

        //Conjunto de inputs relacionadas con el modal de modificar solicitante
   /* const modalMod = {
        nombre: $('#nombreM'),
        apellidoPat: $('#apellidoPatM'),
        apellidoMat: $('#apellidoMatM'),
        estado_civil: $('#estado_civilM'),
        direccion: $('#dirM'),
        email: $('#correoM'),
        fecha_registro: $('#fecha_registroM'),
        telefono: $('#telefonoM'),
        boton : $('#mod-solicitante'),
        guardar: $('#updateAccountButton'),
        eliminar: $('#deleteAccountButton'),
        checkInputsToUpdate: function(){            
            const answers = [
                modalMod.nombre.val(),
                modalMod.apellidoPat.val(),
                modalMod.apellidoMat.val(),
                modalMod.estado_civil.val(),
                modalMod.direccion.val(),
                modalMod.email.val(),
                modalMod.fecha_registro.val(),
                modalMod.telefono.val()
            ];
            return answers.every(function(e){
                return e != "";
            });
        }
    };*/

    //Opciones para abrir el modal desde un renglon desde la tabla.
  /*  $(document).on('click','tr', function(e){
        const row = $(e.currentTarget).children();

        const user = {
            id: row[0].innerHTML,
            nombre: row[2].innerHTML,
            apellidoPat: row[3].innerHTML,
            apellidoMat: row[4].innerHTML,
            estado_civil: row[5].innerHTML,
            direccion: row[6].innerHTML,
            email: row[7].innerHTML,
            telefono: row[8].innerHTML,
            fecha: row[9].innerHTML
        } 

        modalMod.nombre.html(user.nombre);
        modalMod.apellidoPat.val(user.apellidoPat);
        modalMod.apellidoMat.val(user.apellidoMat);
        modalMod.estado_civil.val(user.estado_civil);
        modalMod.direccion.val(user.direccion);
        modalMod.email.val(user.email);
        modalMod.telefono.val(user.telefono);
        modalMod.fecha.val(user.fecha);

        modalMod.boton.click();
    });*/

    modificar.click( (event) => {
        if (nombreM.val() != "" && apellidoPatM.val() != "" && apellidoMatM.val() != "" && direccionM.val() != "" && emailM.val() != "" && telefonoM.val() != "") {
            const erNombre = /^([A-ZÁÉÍÓÚÑ]{1}[a-zñáéíóúñ]+[\s]*)+$/;
            const erDir = /^([A-Za-zÁÉÍÓÚñáéíóú]+[\s]*)([#]{0,1}[0-9]+[A-Z]*)+$/;
            const erEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            const tel = /^[0-9]{7,12}$/;
            if (erNombre.test(nombreM.val()) && erNombre.test(apellidoPatM.val()) && erNombre.test(apellidoMatM.val()) 
                && erDir.test(direccionM.val()) && erEmail.test(emailM.val()) &&tel.test(telefonoM.val())) {
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
        
        eliminar.click( (event)=> {
            //let row = $(event.target).parent().parent().parent();
            $.ajax({
                url: '../php/deleteUsuario.php',
                method: 'GET',
                data: {
                    id: idSolicitanteM.val()
                },
                success: ( response ) => {
                    console.log( response );
                    //row.remove();
                },
                failure: ( error ) => {
                    console.error( error );
                }
            })
        });
/*
        save.click( (event) => {
            let row = $(event.target).parent().parent().parent();
            if(row.attr('data-editable') == "true"){
                let rowFields = row.find('td[data-label]:not(td[data-label=Nickname], td[data-label=ID])');
                $.ajax({
                    url: '../php/updateUsuario.php',
                    method: 'POST',
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

*/
        tr.append($("<td>",{ 
            html: $('<div>', {
                class: 'btn-group btn-group-sm',
                role: 'group',
                html:[option]
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