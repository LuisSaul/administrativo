
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
                $('#error').toggle('hidden');
                setTimeout(( ) => {
                    $('#error').toggle('hidden');
                }, 3000);
            } else  if( response.type == "0"){
                window.open(`./view/administrador.php?id=${response.id}`, '_self');
            } else {
                window.open(`./view/formulario.php?id=${response.id}`, '_self');
            }
        },
        failure: ( error ) => {

        }
    });
});