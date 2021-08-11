const express = require('express')
const app = express.Router();
const { v4: uuidv4 } = require('uuid')

// Schemas
const schemas = require('../models')

// Managers
const BaseManager = require('../managers/BaseManager')
const UserManager = require('../managers/UserManager')

const baseManager = new BaseManager()
const userManager = new UserManager(baseManager)

app.post('/test', ( req, res ) => {
    console.log("Testing for findUser...")
    userManager.findUser( req, res )
})

module.exports = app