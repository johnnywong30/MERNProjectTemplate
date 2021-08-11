class UserManager {
    constructor( baseManager ) {
        this.baseManager = baseManager
    }

    findUser = async ( req, res ) => {
        try {
            const { model, conditions } = req.body
            const UserResponse = await this.baseManager.executeFind( model, conditions )
            console.log("response...", UserResponse)
            res.status(200)
            res.json(UserResponse)

        } catch ( error ) {
            console.log('Error in findUser...', error)
            res.status(500)
            res.json({error})
        }
    }

    addUser = async ( req, res ) => {
        try {
            const { model, userData } = req.body
            const AddUserResponse = await this.baseManager.executeAdd( model, userData )
            res.status(200)
            res.json({AddUserResponse}) 
        } catch ( error ) {
            console.log('Error in addUser...', error)
            res.status(500)
            res.json({error})
        }
    }
    
}

module.exports = UserManager