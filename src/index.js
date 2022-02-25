//Importando as dependências
const express = require("express")
const cors = require("cors")

//Criando o servidor do express
const server = express()

//Importando as rotas
const EmailRouter = require('./routes/EmailRouter')

//Usando a função para perminir a comunicação entre o backend e frontend
server.use(cors())

//Permitir que o express o use o json como forma de comunicação entre as requisições e respostas
server.use(express.json()) //Recebe informações do tipo json

//Criando prefixo das rotas e usando o grupo de rotas
server.use('/email', EmailRouter)

//Ouvindo porta a ser utilizada para a API e mostrando mensagem no console
server.listen(8081, () => {
    console.log("API ONLINE")
})