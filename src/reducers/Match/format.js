const formatReducer = (state = "", action) => {
    switch(action.type) {
        case "SET_FORMAT":
            return state = action.payload
        case "RESET_FORMAT":
            return state = ""
        default:
            return state
    }
}

export default formatReducer;