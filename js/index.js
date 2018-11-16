
$('#login').click(() => {
    let user = $('input[name=user]').val();
    let password = $('input[name=password]').val();

    $.ajax({
        url:'./php/login.php',
        method: 'POST',
        dataType: 'json',
        data:{
            user: user,
            password: password
        },
        success: ( response ) => {
            console.log( response )

            if( response == null ){
                $('#error').attr('hidden', false);
            } else  if( response.type == "0"){
                window.open('./view/usuarios.php', '_self');
            } else {
                window.open(`./view/formulario.php?id=${response.id}`, '_self');
            }
        },
        failure: ( error ) => {

        }
    });
});