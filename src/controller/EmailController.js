//Importando as dependências
const nodemailer = require('nodemailer')
const {response} = require('express')

class EmailController{
    async sendEmail(req, res){
        //Pegando os dados enviados
        const name = req.body.name
        const destinyEmail = req.body.destinyEmail
        const title = req.body.title
        const details = req.body.details

        //Criando e definindo o transportador
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com", //Servidor de email
            port: 465, //A porta do servidor
            secure: true, //Se tem ou não criptografia SSL ou TLS
            auth:{ //Colocar uma conta de email com a senha
                user: "emaildetestedojnc@gmail.com", //Email
                pass: "Servepratudo1324'@" //Senha
            }
        })

        await transporter.sendMail({ //Mandando o email
            from: `${name} <emaildetestedojnc@gmail.com>`, //Conta de email que está enviando a mensagem
            to: destinyEmail, //Conta de email que vai receber a mensagem
            subject: title, //Título da mensagem
            html: details //Código html que também funciona no lugar da descrição
        }).then(response => { //Se deu tudo certo
            return res.status(200).json(response) //mandar a resposta em formato json
        })
    }
}

//Exportando rotas
module.exports = new EmailController()