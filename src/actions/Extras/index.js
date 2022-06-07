//Total Extras
export const incrementTotalExtras = (nr) => {
    return {
        type: "INCREMENT_TOTAL_EXTRAS",
        payload: nr
    }
}
export const decrementTotalExtras = (nr) => {
    return {
        type: "DECREMENT_TOTAL_EXTRAS",
        payload: nr
    }
}
export const resetTotalExtras = () => {
    return {
        type: "RESET_TOTAL_EXTRAS"
    }
}

//Wides
export const incrementWides = (nr) => {
    return {
        type: "INCREMENT_WIDES",
        payload: nr
    }
}
export const decrementWides = (nr) => {
    return {
        type: "DECREMENT_WIDES",
        payload: nr
    }
}
export const resetWides = () => {
    return {
        type: "RESET_WIDES"
    }
}

//No Balls
export const incrementNoBalls = (nr) => {
    return {
        type: "INCREMENT_NO_BALLS",
        payload: nr
    }
}
export const decrementNoBalls = (nr) => {
    return {
        type: "DECREMENT_NO_BALLS",
        payload: nr
    }
}
export const resetNoBalls = () => {
    return {
        type: "RESET_NO_BALLS"
    }
}

//Byes
export const incrementByes = (nr) => {
    return {
        type: "INCREMENT_BYES",
        payload: nr
    }
}
export const decrementByes = (nr) => {
    return {
        type: "DECREMENT_BYES",
        payload: nr
    }
}
export const resetByes = () => {
    return {
        type: "RESET_BYES"
    }
}

//Leg Byes
export const incrementLegByes = (nr) => {
    return {
        type: "INCREMENT_LEG_BYES",
        payload: nr
    }
}
export const decrementLegByes = (nr) => {
    return {
        type: "DECREMENT_LEG_BYES",
        payload: nr
    }
}
export const resetLegByes = () => {
    return {
        type: "RESET_LEG_BYES"
    }
}
//Penalty
export const incrementPenalty = (nr) => {
    return {
        type: "INCREMENT_PENALTY",
        payload: nr
    }
}
export const decrementPenalty = (nr) => {
    return {
        type: "DECREMENT_PENALTY",
        payload: nr
    }
}
export const resetPenalty = () => {
    return {
        type: "RESET_PENALTY"
    }
}