const bowlerReducer = (state = false, action) => {
    switch(action.type) {
        case "BOWLER_SWITCH":
            return !state
        case "RESET_BOWLER":
            return state = false
        default:
            return state
    }
}

export default bowlerReducer;