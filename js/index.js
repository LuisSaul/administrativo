
$('#login').click(() => {
    let password = $('input[name=user]').val();
    let user = $('input[name=password]').val();

    $.ajax({
        url:'./php/login.php',
        method: 'POST',
        data:{
            user: user,
            password: password
        },
        success: ( response ) => {
            if( response.type == 0){
                window.open('./view/admin.php');
            } else if( response.type == 1 ) {
                window.open('./view/formulario.php');
            }
        },
        failure: ( error ) => {

        }
    });
});