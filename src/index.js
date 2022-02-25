const express = require("express")
const cors = require("cors")
const server = express()

const EmailRouter = require('./routes/EmailRouter')

server.use(cors())

server.use(express.json()) //Recebe informações do tipo json


server.use('/email', EmailRouter)



server.listen(8081, () => {
    console.log("API ONLINE")
})