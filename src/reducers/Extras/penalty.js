const penaltyReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT_PENALTY":
            return state + action.payload
        case "DECREMENT_PENALTY":
            return state - action.payload
        case "RESET_PENALTY":
            return state = 0
        default:
            return state;
    }
}

export default penaltyReducer;