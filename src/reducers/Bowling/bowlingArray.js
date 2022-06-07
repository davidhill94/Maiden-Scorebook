const bowlingArrayReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_BOWLER_TO_ARRAY":
            return state.concat(action.payload)
        case "RESET_BOWLER_ARRAY":
            return state = []
        default:
            return state;
    }
}

export default bowlingArrayReducer;