let express = require("express")
let router = express.Router()

let productController = require("../controllers/products")

router.get("/products", productController.list)
router.get("/products/:id", productController.show)
router.post("/products", productController.create)

module.exports = router