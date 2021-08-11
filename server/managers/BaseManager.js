require('dotenv').config();
const mongoose = require('mongoose')
const mongoPass = process.env.mongoPass
const schemas = require('../models')

class BaseManager {
    constructor() {
        this.MONGO_DB = process.env.MONGO_DB
    }

    /**
     * @param queryModel        String of Model name you are querying for 
     *                          e.g. 'User'
     * @param queryConditions   JSON String
     * More info here: https://mongoosejs.com/docs/queries.html 
     */
    executeFind = async ( queryModel, queryConditions ) => {
        mongoose.connect(this.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        const db = mongoose.connection
        db.on('error', console.error.bind(console, 'MongoDB connection error'))
        try {
            const query = await schemas[queryModel].find( JSON.parse(queryConditions) )
            return query
        } catch ( error ) {
            console.log(`There was an error executing the find ${queryModel} Query... `, error)
        }
    }
    /**
     * @param queryModel        String of Model name you are querying for 
     *                          e.g. 'User'
     * @param data              JSON String of document data
     */
     executeAdd = async ( queryModel, data ) => {
        mongoose.connect(this.MONGO_DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        const db = mongoose.connection
        db.on('error', console.error.bind(console, 'MongoDB connection error'))
        try {
            const document = new schemas[queryModel](JSON.parse(data))
            document.save(err => {
                    if (err) {
                        console.log(`There was an error creating the ${queryModel}...`, err)
                    }
                    return err;
                }
            )
            const successMessage = `Successfully added the ${queryModel} with data ${data}...`
            return successMessage
        } catch ( error ) {
            console.log("There was an error executing the Query... ", error)
            return error
        }
    }

    


}

module.exports = BaseManager