let express = require("express")
let router = express.Router()

let commentController = require("../controllers/comments")

router.get("/comments", commentController.list)
router.get("/comments/:id", commentController.show)
router.post("/comments", commentController.create)

module.exports = router