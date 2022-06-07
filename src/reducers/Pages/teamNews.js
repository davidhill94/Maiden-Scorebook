export const editButtonToggleReducer = (state = false, action) => {
    switch(action.type) {
        case "TOGGLE_EDIT_BUTTON":
            return !state
        default:
            return state
    }
}
export const editOverlayToggleReducer = (state = false, action) => {
    switch(action.type) {
        case "TOGGLE_EDIT_OVERLAY":
            return !state
        default:
            return state
    }
}
export const teamScreenToggleReducer = (state = false, action) => {
    switch(action.type) {
        case "TOGGLE_TEAM_SCREEN":
            return !state
        default:
            return state
    }
}
export const formatToggleReducer = (state = false, action) => {
    switch(action.type) {
        case "TOGGLE_FORMAT":
            return !state
        default:
            return state
    }
}
export const venueToggleReducer = (state = false, action) => {
    switch(action.type) {
        case "TOGGLE_VENUE":
            return !state
        default:
            return state
    }
}
export const tossToggleReducer = (state = false, action) => {
    switch(action.type) {
        case "TOGGLE_TOSS":
            return !state
        default:
            return state
    }
}
