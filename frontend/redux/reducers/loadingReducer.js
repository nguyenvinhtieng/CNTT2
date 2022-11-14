import { GLOBAL_TYPES } from '~/constants'
const initialState = {
  isGlobalLoading: false,
}
function loadingReducer(state = initialState, action) {
    switch (action.type) {
        case GLOBAL_TYPES.LOADING:
            return action.payload
        default:
            return state
    }
}
export default loadingReducer;