const widesReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT_WIDES":
            return state + action.payload
        case "DECREMENT_WIDES":
            return state - action.payload
        case "RESET_WIDES":
            return state = 0
        default:
            return state;
    }
}

export default widesReducer;