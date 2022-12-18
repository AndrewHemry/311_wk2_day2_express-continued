const vehicleData = require("../data/vehicles")

const list = function(req,res){
    res.json(vehicleData)
    res.send("okay")
}

const show = function(req,res){
    let vehicleID = vehicleData.find(i => i._id == req.params.id)
    res.json(vehicleID)
    res.send("okay")
}

const create = function(req,res){
    // TO INCREASE THE ID BY 1 EACH CREATE
    let lastElement = vehicleData[vehicleData.length - 1]
    let id = lastElement._id
    id++

    // RECEIVING THE BODY FROM THE REQUEST
    let payload = req.body
    let year = payload.year
    let make = payload.make
    let model = payload.model

    // CREATING NEW POST IN ARRAY
    let newVehicle = {
        _id: id,
        year: year,
        make: make,
        model: model
    }

    vehicleData.push(newVehicle)
    res.sendStatus(204)
}

module.exports = {
    list, show, create
}