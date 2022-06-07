const tossReducer = (state = "", action) => {
    switch(action.type) {
        case "SET_TOSS":
            return state = action.payload
        case "RESET_TOSS":
            return state = ""
        default:
            return state
    }
}

export default tossReducer;