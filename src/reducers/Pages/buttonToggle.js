const buttonToggleReducer = (state = false, action) => {
    switch(action.type) {
        case "TOGGLE_BUTTONS":
            return !state
        default:
            return state
    }
}

export default buttonToggleReducer;