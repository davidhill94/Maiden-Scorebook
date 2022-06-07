const oversReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT_OVERS":
            return state + action.payload
        case "DECREMENT_OVERS":
            return state - action.payload
        case "RESET_OVERS":
            return state = 0
        default:
            return state;
    }
}

export default oversReducer;