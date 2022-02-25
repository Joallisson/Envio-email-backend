const express = require("express")
const router = express.Router()

const EmailController = require('../controller/EmailController')

router.post('/enviar', EmailController.sendEmail)


module.exports = router