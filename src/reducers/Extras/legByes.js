const legByesReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT_LEG_BYES":
            return state + action.payload
        case "DECREMENT_LEG_BYES":
            return state - action.payload
        case "RESET_LEG_BYES":
            return state = 0
        default:
            return state;
    }
}

export default legByesReducer;