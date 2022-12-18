let express = require("express")
let router = express.Router()

let vehicleController = require("../controllers/vehicles")

router.get("/vehicles", vehicleController.list)
router.get("/vehicles/:id", vehicleController.show)
router.post("/vehicles", vehicleController.create)

module.exports = router