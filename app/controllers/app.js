const express = require('express')
const mysql = require('mysql')
const { json } = require('express')
const app = express()

const HTTP = require('http');
console.log(typeof HTTP);

/*Establecemos los prámetros de conexión*/
const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'hidrocompras'
})

/*Conexión a la database*/
conexion.connect(function(error){
    if(error){
        throw error
    }else{
        console.log("¡Conexión exitosa a la base de datos!")
    }
})

/*saber el puerto*/
/*
const puerto = process.env.PUERTO || 3002
app.listen(puerto, function(){
    console.log("Servidor Ok en puerto:"+puerto)
})
*/

let respuesta = '';

conexion.query('SELECT nombre, precio_venta, imagen FROM producto',
    (err, datos) =>{
    respuesta=datos;
    if(err) throw err
})

conexion.end();

//request, response
const SERVIDOR = HTTP.createServer((req, res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, GET, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.end(JSON.stringify(respuesta));
});

const PUERTO = 3002;
SERVIDOR.listen(PUERTO, ()=>{
    console.log(`El servidor esta esta escuchando en http://localhost:${PUERTO}`);
});
