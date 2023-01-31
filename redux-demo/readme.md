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

#


