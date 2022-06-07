const themeReducer = (state = "", action) => {
    switch(action.type) {
        case "SET_THEME":
            return state = action.payload
        case "RESET_THEME":
            return state = ""
        default:
            return state
    }
}

export default themeReducer;