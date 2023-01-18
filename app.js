const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const { json } = require('express')
const app = express()

app.use(express.json())
app.use(cors())

//Establecemos los prámetros de conexión
const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'hidrocompras'
})

//Conexión a la database
conexion.connect(function(error){
    if(error){
        throw error
    }else{
        console.log("¡Conexión exitosa a la base de datos!")
    }
})
app.get('/', function(req,res){
    res.send('Ruta INICIO')
})

/*saber el puerto*/
const puerto = process.env.PUERTO || 3000
app.listen(puerto, function(){
    console.log("Servidor Ok en puerto:"+puerto)
})