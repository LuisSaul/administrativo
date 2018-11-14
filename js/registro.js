let btnNuevoUsuario = $("#btn-nuevo-usuario");
let inUser = $('input[name=user]');
let inPass = $('input[name=password]');

btnNuevoUsuario.click(( event ) => {
    $.post(
        '../php/registerUsuario.php',
        {
            user: inUser.val(), 
            pass:inPass.val()
        }, 
        ( response ) => { 
            console.log(response)
        }
    );
});