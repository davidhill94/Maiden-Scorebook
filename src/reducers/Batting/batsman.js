const batsmanReducer = (state = false, action) => {
    switch(action.type) {
        case "BATSMAN_SWITCH":
            return !state
        case "RESET_BATSMAN":
            return state = false
        default:
            return state
    }
}

export default batsmanReducer;

// false === batsman 1 && true === batsman 2