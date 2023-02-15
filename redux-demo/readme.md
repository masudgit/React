#
~React is a library to build user interfaces.
~Redux is a library for managing state in a predictable way in JS applicatons.
~React-Redux is library that provides bindings to use React and Redux together in an applicaton.

#Three Core Concepts:
Cake Shop Scenario          Redux           Purpose

Shop                        Store           Holds the state of your application
Intention to BUY_CAKE       Action          Describes what happened
Shopkeeper                  Reducer         Ties the store and actions together

A store that holds the state of your application.
An action that describes the changes in the state of the application.
A reducer which actually carries out the state transition depending on the action.

#Three Principles:
1. The state of your whole application is stored in an object tree within a single store.
Cake Shop:
    {
        numberOfCakes: 10
    }
2. The only way to change the state is to emit an action, an object describing what happened.
To update the state of our app, we need to let Redux know about that with an action. Not allowed to directly update the state object.
Cake Shop:
{
    type: BUY_CAKE
}
3. To specify how the state tree is transformed by actions, we write pure reducers.
Reducer - (previousState, action) => newState
Cake Shop:
Reducer is the shopkeeper.
const reducer = (state, action) => {
    switch(action.type) {
        case BUY_CAKE: 
            return {
                numOfCakes: state.numOfCakes - 1
            }
    }
}

#Actions: [Action, ActionCreators]
Have a 'type' property that indicates the type of action being performed.
The 'type' property is typically defined as string constants.

~An action is an object with a type property
~An action creator is a function that return an action.

#Reducers: [Update the state based on the action] 
           [Reducer function which controls how the state transition happen]

Specify how the app's state changes in reponse to actions sent to the store.
Function that accepts state and action as arguments, and returns the next state of the application.
(previousState, action) => newState

const initialState = {
    numOfCakes: 10
}
const reducer = (state = initialState, action) => {
    switch(action.type) {
        //we are asking reducer, to first make a copy of the state object and then 
        //only update the numOfCakes. If there are other property, they will remain unchange.
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1;
        }
        default: return state
    }
}
Note: 
~In real app, the state object could have a lot of property. That's why it is always safer to first create a copy the state object and then change only the properties that need to. 
~To make a copy of the state object, we use the spread operator(...state) 

#Redux Store(State): [Which brings the action and reducer together]
One store for the entire application.
Responsibilites:
 1. Holds application state: 
    reducer has the initial state of the applicaiton. This is require for the store to make the state transition based on the action received.
 2. Allows access to state via getState() : which gives the current state of the application. 
 3. Allows state to be updated via dispatch(action)
 4. Registers listeners via subscribe(listener)
 5. Handles unregistering of listeners via the function returned by subscribe(listener)

 node index.js

#Cakes and Ice Creams - Sce:
The reason of having seperate shopkeeper(reducer) is scalability.

If you maintain one reducer, it will be difficult to debug , manage, and keep track of. 

#CombineReducers: To combine multiple reducers into a single reducer which then can be pass to the createStore method.

###Middleware: [For logging, crash reporting, performing asynchronous tasks etc]
Is the suggested way to extend Redux with custom functionality.
Provides a third-party extension point between dispatching an action, and the moment it reaches the reducer.

  middleware:  https://www.npmjs.com/package/redux-logger

#########Async Actions###########
#Actions: 
a. Synchronous Actions: As soon as an action was dispatched, the state was immediately updated.
If you dispatch the BUY_CAKE action, the numOfCakes was right away decremented by 1.
Same with BUY_ICECREAM action as well.

b. Async Actions:
Asynchronous API calls to fetch data from an end point and use that data in your application.

##Application Use-Case: 
 Fetches a list of users from an API end point and stores it in the redux store.

#State: 
 state = {
     loading: true, //Display a loading spinner in your component
     data: [],      //List of users
     error: ''      //Display error to the user
 }

#Actions:
    FETCH_USERS_REQUEST  - Fetch list of users
    FETCH_USERS_SUCCESS  - Fetched successfully
    FETCH_USERS_FAILURE  - Error fetching the data.

#Reducer:
 case: FETCH_USERS_REQUEST
        loading: true
        
 case: FETCH_USERS_SUCCESS
        loading: false
        users: data (from API)
 case: FETCH_USERS_FAILURE
        loading: false
        error: error (from API)
 
  
#Async action creators:
~How to use action creators with network requests.
~How to make an API call when working with redux.
a. axios: 
    Requests to an API endpoint 
b. redux-thunk:  
    It will allow to define async action creators in the application.
    Middleware (we will apply to our redux store)

yarn add axios redux-thunk

~To make a fake rest api call:
https://jsonplaceholder.typicode.com/

#Links:
testgorilla.com/react/



