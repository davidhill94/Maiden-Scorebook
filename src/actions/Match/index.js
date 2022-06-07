// handles venue
export const setVenue = (name) => {
    return {
        type: "SET_VENUE",
        payload: name
    };
};
export const resetVenue = () => {
    return {
        type: "RESET_VENUE"
    };
};

//handles format
export const setFormat = (name) => {
    return {
        type: "SET_FORMAT",
        payload: name
    };
};
export const resetFormat = () => {
    return {
        type: "RESET_FORMAT"
    };
};

//handles toss
export const setToss = (name) => {
    return {
        type: "SET_TOSS",
        payload: name
    };
};
export const resetToss = () => {
    return {
        type: "RESET_TOSS"
    };
};

