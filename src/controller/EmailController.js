const {response} = require("express")

class EmailController{
    sendEmail = (req, res) => {
        res.send(req.body.api)
    }
}

module.exports = new EmailController()