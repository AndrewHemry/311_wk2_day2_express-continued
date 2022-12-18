const commentData = require("../data/comments")

const list = function(req,res){
    res.json(commentData)
    res.send("okay")
}

const show = function(req,res){
    let commentID = commentData.find(i => i._id == req.params.id)
    res.json(commentID)
    res.send("okay")
}

const create = function(req,res){
    // TO INCREASE THE ID BY 1 EACH CREATE
    let lastElement = commentData[commentData.length - 1]
    let id = lastElement._id
    id++

    // RECEIVING THE BODY FROM THE REQUEST
    let payload = req.body
    let body = payload.body

    // CREATING NEW POST IN ARRAY
    let newComment = {
        _id: id,
        body: body,
        postId: 1
    }

    commentData.push(newComment)
    res.sendStatus(204)
}

module.exports = {
    list, show, create
}