//Importando as dependências
const express = require("express")

//Usando a função para gerenciar rotas do express
const router = express.Router()

//Importando o controller das funções de envio de email
const EmailController = require('../controller/EmailController')

//Criando rotas
router.post('/enviar', EmailController.sendEmail)

//Exportando rotas
module.exports = router