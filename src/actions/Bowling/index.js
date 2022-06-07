//Balls
export const incrementBalls = (nr) => {
    return {
        type: "INCREMENT_BALLS",
        payload: nr
    };
};
export const decrementBalls = (nr) => {
    return {
        type: "DECREMENT_BALLS",
        payload: nr
    };
};
export const resetBalls = () => {
    return {
        type: "RESET_BALLS"
    };
};

//overs
export const incrementOvers = (nr) => {
    return {
        type: "INCREMENT_OVERS",
        payload: nr
    };
};
export const decrementOvers = (nr) => {
    return {
        type: "DECREMENT_OVERS",
        payload: nr
    };
};
export const resetOvers = () => {
    return {
        type: "RESET_OVERS"
    };
};

//Last 10 deliveries
export const incrementLastTen = (nr) => {
    return {
        type: "INCREMENT_LAST_DELIVERY",
        payload: nr
    };
};
export const decrementLastTen = (nr) => {
    return {
        type: "DECREMENT_LAST_DELIVERY",
        payload: nr
    };
};
export const incrementLastTenFull = (nr) => {
    return {
        type: "INCREMENT_LAST_DELIVERY_10",
        payload: nr
    };
};
export const resetLastTen = () => {
    return {
        type: "RESET_RECENT_DELIVERIES"
    };
};

//Switch Bowler
export const switchBowler = () => {
    return {
        type: "BOWLER_SWITCH"
    };
};
export const resetBowler = () => {
    return {
        type: "RESET_BOWLER"
    };
};


//Handles Maiden
export const addDot = () => {
    return {
        type: "ADD_DOT"
    };
}

export const resetMaiden = () => {
    return {
        type: "RESET_TALLY"
    };
};

export const minusTally = () => {
    return {
        type: "MINUS_TALLY"
    };
};


//sets bowler one and two
export const setBowlerOne = (person) => {
    return {
        type: "SET_BOWLER_ONE",
        payload: person
    };
};
export const setBowlerTwo = (person) => {
    return {
        type: "SET_BOWLER_TWO",
        payload: person
    };
};
export const resetBowlerOne = () => {
    return {
        type: "RESET_BOWLER_ONE"
    }
}
export const resetBowlerTwo = () => {
    return {
        type: "RESET_BOWLER_TWO"
    }
}

//sets wickets
export const incrementWickets = (nr) => {
    return {
        type: "INCREMENT_WICKETS",
        payload: nr
    };
};
export const decrementWickets = (nr) => {
    return {
        type: "DECREMENT_WICKETS",
        payload: nr
    };
};
export const resetWickets = () => {
    return {
        type: "RESET_WICKETS"
    };
};

//Bowling Array
export const addBowlerToScorebook = (person) => {
    return {
        type: "ADD_BOWLER_TO_ARRAY",
        payload: person
    };
};
export const resetBowlerArray = () => {
    return {
        type: "RESET_BOWLER_ARRAY"
    };
};
//Wicket array
export const incrementWicketArray = (person) => {
    return {
        type: "INCREMENT_WICKET_ARRAY",
        payload: person
    };
};
export const resetWicketArray = () => {
    return {
        type: "RESET_WICKET_ARRAY"
    };
};

//Batsman at wicket 
export const incrementBatsmanAtWicketArray = (person) => {
    return {
        type: "ADD_BATSMAN_AT_WICKET",
        payload: person
    };
};
export const resetBatsmanAtWicketArray = () => {
    return {
        type: "RESET_BATSMAN_AT_WICKET"
    };
};
