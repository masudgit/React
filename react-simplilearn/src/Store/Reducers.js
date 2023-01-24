const initialState = {
    message: "Subscrive to Simplilearn"
}

const reducer = (state = initialState, action) => {
    const newState = {...state};

    if(action.type === 'Message change') {
        newState.message = "Thank you for subscriving"
    }

    return newState;
}

export default reducer;