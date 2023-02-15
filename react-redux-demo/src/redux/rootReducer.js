import {combineReducers} from 'redux'
import  cakeReducer from './cakes/cakeReducer'
import  iceCreamReducer from './icreCream/iceCreamReducer'

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer