export const ballsFacedOneReducer = (state = 0, action) => {
    switch(action.type) {
        case "INCREMENT_BALLS_FACED_ONE":
            return state + action.payload;
        case "DECREMENT_BALLS_FACED_ONE":
            return state - action.payload;
        case "RESET_BALLS_FACED_ONE":
            return state = 0;
        default:
            return state
    }
}

export const ballsFacedTwoReducer = (state = 0, action) => {
    switch(action.type) {
        case "INCREMENT_BALLS_FACED_TWO":
            return state + action.payload;
        case "DECREMENT_BALLS_FACED_TWO":
            return state - action.payload;
        case "RESET_BALLS_FACED_TWO":
            return state = 0;
        default:
            return state
    }
}