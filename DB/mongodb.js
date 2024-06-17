//Conexão com o MongoDB Atlas
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_CONNECT, ()=>{
    console.log("conectado")
})

