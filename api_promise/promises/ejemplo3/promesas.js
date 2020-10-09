//PETICION CON JQUERY

$( document ).ready(function(){
    console.log('Antes de la peticion');
    $.get('https://reqres.in/api/users').then(
        (respuesta) => {
            console.log('dentro del then');
            console.log(respuesta);
        }
    );
    console.log('despues de la peticion');
});