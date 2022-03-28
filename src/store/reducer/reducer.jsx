import * as actions from '../actions/actionss'



const counterReducer = (state = 0, action) => {
    switch(action.type){
         case actions.INCREASE:
             return parseInt(state + 1)
        default:
            return state
    }
}
export default counterReducer