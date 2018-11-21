let btn = $('button#insertarUsuario');
let user = $('input[name=user]');
let password  = $('input[name=password]');

btn.click( ( event ) => {
    $.ajax({
        url: '../php/registerUsuario.php',
        method: 'POST',
        data: {
            user: user.val(),
            pass: password.val()
        },
        success: ( response ) => {
            user.val('');
            password.val('');
            showSuccess();           
        },
        failure: ( error ) => {
            showError();
        }
    });
});

function showSuccess(){
    $('div#success').attr('hidden', false)
    setInterval(() => {
        $('div#success').attr('hidden', true)
    }, 3000);
}

function showError() {
    $('#error').attr('hidden', false)
    setInterval(() => {
        $('#error').attr('hidden', true)
    }, 3000);
}