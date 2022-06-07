//Batsman Switch
export const switchBatsman = () => {
    return {
        type: "BATSMAN_SWITCH"
    };
};
export const resetBatsman = () => {
    return {
        type: "RESET_BATSMAN"
    }
}


//Total Runs
export const incrementTotalRuns = (nr) => {
    return {
        type: "INCREMENT_TOTAL_RUNS",
        payload: nr
    };
};
export const decrementTotalRuns = (nr) => {
    return {
        type: "DECREMENT_TOTAL_RUNS",
        payload: nr
    };
};
export const resetTotalRuns = () => {
    return {
        type: "RESET_TOTAL_RUNS"
    }
}

//Batsman Runs
export const incrementBatsmanOneRuns = (nr) => {
    return {
        type: "INCREMENT_BATSMAN_ONE_RUNS",
        payload: nr
    }
}
export const decrementBatsmanOneRuns = (nr) => {
    return {
        type: "DECREMENT_BATSMAN_ONE_RUNS",
        payload: nr
    }
}
export const incrementBatsmanTwoRuns = (nr) => {
    return {
        type: "INCREMENT_BATSMAN_TWO_RUNS",
        payload: nr
    }
}
export const decrementBatsmanTwoRuns = (nr) => {
    return {
        type: "DECREMENT_BATSMAN_TWO_RUNS",
        payload: nr
    }
}

export const resetBatsmanOneRuns = () => {
    return {
        type: "RESET_BATSMAN_ONE_RUNS"
    }
}
export const resetBatsmanTwoRuns = () => {
    return {
        type: "RESET_BATSMAN_TWO_RUNS"
    }
}

//Balls Faced
export const incrementBallsFacedOne = (nr) => {
    return {
        type: "INCREMENT_BALLS_FACED_ONE",
        payload: nr
    }
}
export const decrementBallsFacedOne = (nr) => {
    return {
        type: "DECREMENT_BALLS_FACED_ONE",
        payload: nr
    }
}
export const incrementBallsFacedTwo = (nr) => {
    return {
        type: "INCREMENT_BALLS_FACED_TWO",
        payload: nr
    }
}
export const decrementBallsFacedTwo = (nr) => {
    return {
        type: "DECREMENT_BALLS_FACED_TWO",
        payload: nr
    }
}

export const resetBatsmanOneBalls = () => {
    return {
        type: "RESET_BALLS_FACED_ONE"
    }
}
export const resetBatsmanTwoBalls = () => {
    return {
        type: "RESET_BALLS_FACED_TWO"
    }
}


//set batsman one and two scoreboard names
export const setBatsmanOneName = (person) => {
    return {
        type: "SET_BATSMAN_ONE_NAME",
        payload: person
    }
}
export const setBatsmanTwoName = (person) => {
    return {
        type: "SET_BATSMAN_TWO_NAME",
        payload: person
    }
}
export const resetBatsmanOneName = (person) => {
    return {
        type: "RESET_BATSMAN_ONE_NAME",
        payload: person
    }
}
export const resetBatsmanTwoName = (person) => {
    return {
        type: "RESET_BATSMAN_TWO_NAME",
        payload: person
    }
}

//Batting team
export const changeBattingTeam = () => {
    return {
        type: "CHANGE_BATTING_TEAM"
    }
}
export const resetBattingTeam = () => {
    return {
        type: "RESET_BATTING_TEAM"
    }
}