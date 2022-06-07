export const homeScreenReducer = (state = true, action) => {
    switch(action.type) {
        case "SWITCH_HOME_SCREEN":
            return !state;
        default:
            return state
    }
}
export const scorebookScreenReducer = (state = false, action) => {
    switch(action.type) {
        case "SWITCH_SCOREBOOK_SCREEN":
            return !state;
        default:
            return state
    }
}
export const teamNewsScreenReducer = (state = false, action) => {
    switch(action.type) {
        case "SWITCH_TEAM_NEWS_SCREEN":
            return !state;
        default:
            return state
    }
}
export const themeScreenReducer = (state = false, action) => {
    switch(action.type) {
        case "SWITCH_THEME_SCREEN":
            return !state;
        default:
            return state
    }
}