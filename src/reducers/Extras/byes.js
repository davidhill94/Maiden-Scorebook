const byesReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT_BYES":
            return state + action.payload
        case "DECREMENT_BYES":
            return state - action.payload
        case "RESET_BYES":
            return state = 0
        default:
            return state;
    }
}

export default byesReducer;