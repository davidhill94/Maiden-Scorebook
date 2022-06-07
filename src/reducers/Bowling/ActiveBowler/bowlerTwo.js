const bowlerTwoReducer = (state = {name: "Select Bowler", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0}, action) => {
    switch(action.type) {
        case "SET_BOWLER_TWO":
            return state = action.payload
        case "RESET_BOWLER_ONE":
            return state = {name: "Select Bowler", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0}
        default:
            return state
    }
}

export default bowlerTwoReducer;