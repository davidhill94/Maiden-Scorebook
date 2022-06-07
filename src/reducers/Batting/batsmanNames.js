export const batsmanOneNameReducer = (state = "", action) => {
    switch(action.type) {
        case "SET_BATSMAN_ONE_NAME":
            return state = action.payload
        case "RESET_BATSMAN_ONE_NAME":
            return state = ""
        default:
            return state
    }
}

export const batsmanTwoNameReducer = (state = "", action) => {
    switch(action.type) {
        case "SET_BATSMAN_TWO_NAME":
            return state = action.payload
        case "RESET_BATSMAN_TWO_NAME":
            return state = ""
        default:
            return state
    }
}