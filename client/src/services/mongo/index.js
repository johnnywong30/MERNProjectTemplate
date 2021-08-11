import React from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'

const rootURL = process.env.NODE_ENV === 'development' ? '/api' : ''

const Mongo = {
    onTest: () => {
        return async dispatch => {
            // const testUser = new schemas.User({
    //     userID: uuidv4(),
    //     firstName: 'Test',
    //     middleName: '',
    //     lastName: 'Test',
    //     email: 'jwong9@stevens.edu',
    //     password: 'test'
    // })
            console.log("trying to reach backend...")
            const reqBody = {
                model: 'User',
                conditions: JSON.stringify({
                    // // userID: uuidv4(),
                    // firstName: 'API CALL',
                    // middleName: 'TEST',
                    // lastName: 'COOL',
                    // email: 'booger@gmail.com',
                    // password: 'boo'
                })
            }
            
            try {
                axios.post(`${rootURL}/test`, reqBody )
                    .then(res => console.log(res))
            } catch (error) {
                console.log("There was an error in onTest...", error)
            }
        }
    }
}; 

export default Mongo;