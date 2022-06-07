const recentDeliveriesReducer = (state = [], action) => {
    switch (action.type) {
        case "INCREMENT_LAST_DELIVERY":
            return state.concat(action.payload)
        case "DECREMENT_LAST_DELIVERY":
            return [...state.splice(state, state.length - 1)]
        case "INCREMENT_LAST_DELIVERY_10":
            return [...state.concat(action.payload).splice([1])]
        case "RESET_RECENT_DELIVERIES":
            return state = []
        default:
            return state;
    }
}

export default recentDeliveriesReducer;