const battingTeamReducer = (state = false, action) => {
    switch(action.type){
        case "CHANGE_BATTING_TEAM":
            return !state
        case "RESET_BATTING_TEAM":
            return state = false
        default:
            return state
    }
}

export default battingTeamReducer;

// false === home team && true === away team