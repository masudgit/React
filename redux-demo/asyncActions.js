const redux = require('redux')
const createStore = redux.createStore
const applyMiddleWare = redux.applyMiddleware
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

//state
const initialState = {
    loading: false,
    users: [],
    error: '',
}

//actions
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST ';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS ';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE ';


//action creators
const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST,
    }
}
const fetchUserSuccess = users => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users,
    }
}
const fetchUserFailure = error => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error,
    }
}

//reducers
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: '',
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload,
            }
        default: return state            
    }
}

//action creator which will return a function instead of action object as we have redux thunk.
//this doesn't have to be pure function. It is allowed to have side effect such as async api calls/async tasks.
//This function can dispatch action as it receive dispatch as an argument.
const fetchUsers = () => {
    return function(dispatch) {
        dispatch(fetchUserRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                //response.data is the array of users
                const users = response.data.map(user => user.id);
                dispatch(fetchUserSuccess(users))
            })
            .catch(error => {
                //error.message is the error description
                dispatch(fetchUserFailure(error.message))
            })
    }
}

//store 
const store = createStore(reducer, applyMiddleWare(thunkMiddleware))
console.log('Initial store: ', store.getState())
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchUsers())



