export const batsmanOneRunsReducer = (state = 0, action) => {
    switch(action.type) {
        case "INCREMENT_BATSMAN_ONE_RUNS":
            return state + action.payload;
        case "DECREMENT_BATSMAN_ONE_RUNS":
            return state - action.payload;
        case "RESET_BATSMAN_ONE_RUNS":
            return state = 0;
        default:
            return state
    }
}

export const batsmanTwoRunsReducer = (state = 0, action) => {
    switch(action.type) {
        case "INCREMENT_BATSMAN_TWO_RUNS":
            return state + action.payload;
        case "DECREMENT_BATSMAN_TWO_RUNS":
            return state - action.payload;
        case "RESET_BATSMAN_TWO_RUNS":
                return state = 0;
        default:
            return state
    }
}