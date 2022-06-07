const totalRunsReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT_TOTAL_RUNS":
            return state + action.payload;
        case "DECREMENT_TOTAL_RUNS":
            return state - action.payload;
        case "RESET_TOTAL_RUNS":
            return state = 0
        default:
            return state
    }
}

export default totalRunsReducer;