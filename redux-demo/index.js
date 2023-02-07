const redux = require('redux')
const reduxLogger = require('redux-logger')

const createStore = redux.createStore 
const combineReducers = redux.combineReducers
const applyMiddleWare = redux.applyMiddleware
const logger = reduxLogger.createLogger()

//action
const BUY_CAKE = 'BUY_CAKE'
const BUE_ICECREAM = 'BUY_ICECREAM'

//action creator
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
function buyIceCream() {
    return {
        type: BUE_ICECREAM,
    }
}

const initialCakeState = {
    numOfCakes: 10,
}
const initialIceCreamState = {
    numOfIceCreams: 20,
}
const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        //we are asking reducer, to first make a copy of the state object and then 
        //only update the numOfCakes. If there are other property, they will remain unchange.
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        //we are asking reducer, to first make a copy of the state object and then 
        //only update the numOfCakes. If there are other property, they will remain unchange.
        case BUE_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});
const store = createStore(rootReducer,  applyMiddleWare(logger))
console.log('Initial state: ' , store.getState())

//Anytime store updates, it will log the state to the console
//const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))

const unsubscribe = store.subscribe(() => {} )
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
console.log('custom logs', store.getState()['iceCream'])
unsubscribe()

