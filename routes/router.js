const routes = require('express').Router()
const dataController = require('./../controller/dataController')
const Authentication = require('./../authentication/authMiddleware')

routes.post("/login", dataController.SignIn)
routes.get("/data",Authentication, dataController.GetData)

module.exports = routes