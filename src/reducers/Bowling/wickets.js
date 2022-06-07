const wicketsReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT_WICKETS":
            return state + action.payload
        case "DECREMENT_WICKETS":
            return state - action.payload
        case "RESET_WICKETS":
            return state = 0
        default:
            return state;
    }
}

export default wicketsReducer;