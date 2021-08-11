import Actions from '../Actions'

const { User } = Actions

const INIT_STATE = {
    user: ''
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case User.TEST_USER: {
            return { ...state, user: action.payload }
        }
        default: 
            return state
    }
}