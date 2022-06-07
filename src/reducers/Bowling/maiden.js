const maidenReducer = (state = 0, action) => {
    switch(action.type) {
        case "ADD_DOT":
            return state + 1
        case "RESET_TALLY":
            return state = 0
        case "MINUS_TALLY":
            return state - 1
        default:
            return state
    }
}

export default maidenReducer;