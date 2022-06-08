//Resetting Team Selection

export const resetAwayTeam = () => {
    return {
        type: "RESET_AWAY_TEAM"
    }
}

export const resetHomeTeam = () => {
    return {
        type: "RESET_HOME_TEAM"
    }
}

//Team names

export const setHomeTeamName = (name) => {
    return {
        type: "SET_HOME_TEAM_NAME",
        payload: name
    }
}
export const setAwayTeamName = (name) => {
    return {
        type: "SET_AWAY_TEAM_NAME",
        payload: name
    }
}
export const resetTeamNames = () => {
    return {
        type: "RESET_TEAM_NAME"
    }
}


