import { GLOBAL_TYPES } from '../constants'
const initialState = {
    data: [],
    dataTemp: [],
    page: -1,
    pageTemp: 0,
    loading: false,
    isEnd: false,
}
function postReducer(state = initialState, action) {
    switch (action.type) {
        case GLOBAL_TYPES.POST:
            return action.payload
        default:
            return state
    }
}
export default postReducer;