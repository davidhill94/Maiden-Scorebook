const mobileToggleReducer = (state = false, action) => {
    switch(action.type) {
        case "TOGGLE_MOBILE":
            return !state
        default:
            return state
    }
}

export default mobileToggleReducer;