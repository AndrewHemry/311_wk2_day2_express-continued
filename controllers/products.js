const productData = require("../data/products")

const list = function(req,res){
    res.json(productData)
    res.send("okay")
}

const show = function(req,res){
    let productID = productData.find(i => i._id == req.params.id)
    res.json(productID)
    res.send("okay")
}

const create = function(req,res){
    // TO INCREASE THE ID BY 1 EACH CREATE
    let lastElement = productData[productData.length - 1]
    let id = lastElement._id
    id++

    // RECEIVING THE BODY FROM THE REQUEST
    let payload = req.body
    let name = payload.name
    let description = payload.description

    // CREATING NEW POST IN ARRAY
    let newProduct = {
        _id: id,
        name: name,
        description: description
    }

    productData.push(newProduct)
    res.sendStatus(204)
}

module.exports = {
    list, show, create
}