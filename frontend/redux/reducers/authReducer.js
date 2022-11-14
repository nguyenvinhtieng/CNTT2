import { GLOBAL_TYPES } from '~/constants'
const initialState = {
    isAuthenticated: false,
    user: {}
}
function authReducer(state = initialState, action) {
    switch (action.type) {
        case GLOBAL_TYPES.AUTH:
            return action.payload
        default:
            return state
    }
}
export default authReducer;