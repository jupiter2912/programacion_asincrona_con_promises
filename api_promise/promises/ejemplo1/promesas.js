// 'use strict';


// //instanciamos la promesa
// let miPrimeraPromesa = new Promise((resolve,reject) => {
//     setTimeout(function() {
//         resolve('Success!!');
//     }, 2000);
// });

// //una vez se haya resuelto el codigo de la promesa ejecutamos lo que queremos que haga
// //despues de dos segundos se ejecutara esto
// $(document).ready(function(){
//     if("Promise" in window){
//         miPrimeraPromesa.then(function(data){
//             console.log(data);
//         });
//     }else{
//         alert('Tu navegador no soporta Promesas');
//     }
// });



  
'use strict';
let miPrimeraPromesa = new Promise((resolve, reject) => {
  setTimeout(function(){
    resolve("Success!"); 
  }, 2000);
});

$( document ).ready(function() {
  if ("Promise" in window) {
    miPrimeraPromesa.then(function(data) {
        console.log(data);
    });
  } else {
    alert("Tu navegador no soporta Promesas.");
  }   
  
  //si pusiesemos aqui mas codigo esto se ejecutaria antes, ya que hasta que no llegase la respuesta a la promesa
  //quedaria parada
});


