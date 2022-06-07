export const wicketArrayReducer = (state = [], action) => {
    switch (action.type) {
        case "INCREMENT_WICKET_ARRAY":
            return state.concat(action.payload)
        case "RESET_WICKET_ARRAY":
            return state = []
        default:
            return state;
    }
}

export const batsmanAtWicketReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_BATSMAN_AT_WICKET":
            return state.concat(action.payload)
        case "RESET_BATSMAN_AT_WICKET":
            return state = []
        default:
            return state;
    }
}