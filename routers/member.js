const { request, response } = require("express")
const express = require("express")
const app = express()

//membaca request dari body dengan tipe json
app.use(express.json())

//memanggil models
const models = require("../models/index")

//panggil mode "member"
const member = models.members

//endpoint for get all member
app.get("/", async (request, response) => {
    let dataMember = await member.findAll()

    return response.json(dataMember)
})

//endpoint add new member
app.post("/", (request, response) => {
    let newMember = {
        name: request.body.name,
        address: request.body.address,
        gender: request.body.gender,
        telephone: request.body.telephone
    }

    member.create(newMember)
    .then(result => {
        response.json({
            message: `Data added`
        })
    })
    .catch(error => {
        response.json({
            message: error.message
        })
    })
})

module.exports = app