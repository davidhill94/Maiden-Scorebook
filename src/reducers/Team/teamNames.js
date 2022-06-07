export const homeTeamNameReducer = (state = "", action) => {
    switch(action.type) {
        case "SET_HOME_TEAM_NAME":
            return state = action.payload
        case "RESET_TEAM_NAME":
            return state = ""
        default:
            return state
    }
}

export const awayTeamNameReducer = (state = "", action) => {
    switch(action.type) {
        case "SET_AWAY_TEAM_NAME":
            return state = action.payload
        case "RESET_TEAM_NAME":
            return state = ""
        default:
            return state
    }
}