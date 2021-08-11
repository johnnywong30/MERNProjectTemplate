import React from 'react'
import axios from 'axios'

const rootURL = process.env.NODE_ENV === 'development' ? '/api' : ''

const Mongo = {
    onTest: () => {
        return async dispatch => {
            console.log("trying to reach backend...")
            try {
                axios.post(`${rootURL}/test`)
                    .then(res => console.log(res.data))
            } catch (error) {
                console.log("There was an error in onTest...", error)
            }
        }
    }
}; 

export default Mongo;