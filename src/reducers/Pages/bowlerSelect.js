const bowlerSelectReducer = (state = false, action) => {
    switch(action.type) {
        case "BOWLER_SELECT_SWITCH":
            return !state
        default:
            return state
    }
}

export default bowlerSelectReducer;