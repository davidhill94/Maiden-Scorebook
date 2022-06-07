export const editExtrasToggleReducer = (state = false, action) => {
    switch(action.type) {
        case "TOGGLE_EDIT_EXTRAS":
            return !state
        default:
            return state
    }
}
export const editBattingToggleReducer = (state = false, action) => {
    switch(action.type) {
        case "TOGGLE_EDIT_BATTING":
            return !state
        default:
            return state
    }
}
export const editBattingPlayerReducer = (state = false, action) => {
    switch(action.type) {
        case "TOGGLE_EDIT_BATTING_PLAYER":
            return !state
        default:
            return state
    }
}
export const editBowlingToggleReducer = (state = false, action) => {
    switch(action.type) {
        case "TOGGLE_EDIT_BOWLING":
            return !state
        default:
            return state
    }
}
export const editBowlingPlayerReducer = (state = false, action) => {
    switch(action.type) {
        case "TOGGLE_EDIT_BOWLING_PLAYER":
            return !state
        default:
            return state
    }
}
