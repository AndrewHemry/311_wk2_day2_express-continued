const contactData = require("../data/contacts")

const list = function(req,res){
    res.json(contactData)
    res.send("okay")
}

const show = function(req,res){
    let contactsID = contactData.find(i => i._id == req.params.id)
    res.json(contactsID)
    res.send("okay")
}

const create = function(req,res){
    // TO INCREASE THE ID BY 1 EACH CREATE
    let lastElement = contactData[contactData.length - 1]
    let id = lastElement._id
    id++

    // RECEIVING THE BODY FROM THE REQUEST
    let payload = req.body
    let name = payload.name
    let occupation = payload.occupation
    let avatar = payload.avatar

    // CREATING NEW POST IN ARRAY
    let newContact = {
        _id: id,
        name: name,
        occupation: occupation,
        avatar: avatar
    }

    contactData.push(newContact)
    res.sendStatus(204)

}

module.exports = {
    list, show, create
}