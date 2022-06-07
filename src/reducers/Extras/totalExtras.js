const totalExtrasReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT_TOTAL_EXTRAS":
            return state + action.payload
        case "DECREMENT_TOTAL_EXTRAS":
            return state - action.payload
        case "RESET_TOTAL_EXTRAS":
            return state = 0
        default:
            return state;
    }
}

export default totalExtrasReducer;