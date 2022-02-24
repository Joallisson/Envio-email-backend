const express = require("express")
const cors = require("cors")
const server = express()

server.use(cors())

server.use(express.json()) //Recebe informações do tipo json

const routes = require("./routes/routes")

server.use('/', routes)










server.listen(8081, () => {
    console.log("API ONLINE")
})