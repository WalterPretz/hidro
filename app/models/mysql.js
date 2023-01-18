
const mysql = require('mysql');

/*crear la conexión con el servidor de mysql*/
const conectar = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hidrocompras'
})

/*verficar si la conexión funciona*/
conectar.connect( (err) =>{
    if(err) throw err
    console.log('La conexión funciona')
})


/*hacer un inbsert*/
/*
const insertar = "INSERT INTO producto () VALUE (NULL, 'JETINOX 1HP 14GPM AQUAPRO')"
conectar.query(insertar, (err, datas)=>{
    if(err) throw err
})
*/
/*
conectar.end()
*/