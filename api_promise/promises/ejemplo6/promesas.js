    
    //** El metodo .all() sirve para esperar a todas las promesas hasta que terminen de ejcuetarse
    /** y luego hacer algo en funcion del resultado de las promesas. Con solo una promesa que sea fallida
     * se ira al reason */ 
    
    var p1 = new Promise((resolve, reject) => { 
        setTimeout(resolve, 4000, 'una'); 
        console.log('Promesa 1 arrancada');
    }); 

    var p2 = new Promise((resolve, reject) => { 
        setTimeout(resolve, 1000, 'dos'); 
        console.log('Promesa 2 arrancada');
    });

    var p3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 3000, 'tres');
        console.log('Promesa 3 arrancada');
    });

    var p4 = new Promise((resolve, reject) => {
        setTimeout(resolve, 2000, 'cuatro');
        console.log('Promesa 4 arrancada');
    });

    var p5 = new Promise((resolve, reject) => {
        resolve("promesa 5 arrancada");
    });

    Promise.all([p1, p2, p3, p4, p5]).then(values => { 
        console.log(values);
    }, reason => {
        console.log(reason)
    });


// https://javascript.info/promise-chaining