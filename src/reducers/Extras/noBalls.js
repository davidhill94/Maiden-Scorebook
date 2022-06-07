const noBallsReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT_NO_BALLS":
            return state + action.payload
        case "DECREMENT_NO_BALLS":
            return state - action.payload
        case "RESET_NO_BALLS":
            return state = 0
        default:
            return state;
    }
}

export default noBallsReducer;