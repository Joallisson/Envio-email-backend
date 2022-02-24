const express = require("express")
const router = express.Router()

const EmailController = require("../controller/EmailController")

router.get('enviar', EmailController.send)


module.exports = router