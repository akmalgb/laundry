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
            message: `Data Added Successfully`
        })
    })
    .catch(error => {
        response.json({
            message: error.message
        })
    })
})

//endpoint update member
app.put("/:id", (request, response) => {
    let data = {
        name: request.body.name,
        address: request.body.address,
        telephone: request.body.telephone,
        gender: request.body.gender
    }

    let parameter = {
        id: request.params.id
    }

    member.update(data, {where: parameter})
    .then(result => {
        return response.json({
            message: `Data Updated Successfully`,
            data: result
        })
    })

    .catch(error => {
        return response.json({
            message: error.message
        })
    })
})

//endpoint delete member
app.delete("/:id", (request, response) => {
    let parameter = {
        id: request.params.id
    }

    member.destroy({where: parameter})
    .then(result => {
        return response.json({
            message: `Data Deleted Successfully`
        })
    })
    .catch(error => {
        return response.json({
            message: error.message
        })
    })
})

module.exports = app