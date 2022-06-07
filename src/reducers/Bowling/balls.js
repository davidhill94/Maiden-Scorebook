const ballsReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT_BALLS":
            return state + action.payload
        case "DECREMENT_BALLS":
            return state - action.payload
        case "RESET_BALLS":
            return state = 0
        default:
            return state;
    }
}

export default ballsReducer;