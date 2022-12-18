let express = require("express")
let router = express.Router()

let contactController = require("../controllers/contacts")

router.get("/contacts", contactController.list)
router.get("/contacts/:id", contactController.show)
router.post("/contacts", contactController.create)

module.exports = router