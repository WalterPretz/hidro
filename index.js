//iniciar aos
AOS.init();
require ('./app/models/mysql');


/*consultar*/
conectar.query('SELECT * FROM producto', (err, datos) =>{
    if(err) throw err
    console.log('Estos son los datos')
    console.log(datos)
    console.log(datos.lengt)
    console.log(datos[3])
});


console.log('pasa por este archivo');