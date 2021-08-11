import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"

import User from "./User"

export default history => 
    combineReducers({
        router: connectRouter(history),
        user: User
    })
