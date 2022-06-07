const venueReducer = (state = "", action) => {
    switch(action.type) {
        case "SET_VENUE":
            return state = action.payload
        case "RESET_VENUE":
            return state = ""
        default:
            return state
    }
}

export default venueReducer;