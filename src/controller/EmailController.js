const {response} = require("express")

class EmailController{
    async send(req, res) {
        res.send(req.body)
    }
}

module.exports = new EmailController