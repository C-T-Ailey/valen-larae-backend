const express= require("express");

const router = express.Router()

const humansCtrl = require("../controllers/index")

router.get("/", humansCtrl.index_get)

module.exports = router;