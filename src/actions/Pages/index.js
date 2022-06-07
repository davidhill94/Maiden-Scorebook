//Bowler Select Page
export const bowlerSelectToggle = () => {
    return {
        type: "BOWLER_SELECT_SWITCH"
    }
}

//Buttons Page
export const toggleButtonsPage = () => {
    return {
        type: "TOGGLE_BUTTONS"
    }
}

//Edit Extras Page
export const handleEditExtrasToggle = () => {
    return {
        type: "TOGGLE_EDIT_EXTRAS"
    }
}
//Edit Batting Page - player select
export const handleEditBattingToggle = () => {
    return {
        type: "TOGGLE_EDIT_BATTING"
    }
}
//Edit Bowling Page - player select
export const handleEditBowlingToggle = () => {
    return {
        type: "TOGGLE_EDIT_BOWLING"
    }
}

//Edit Batting Page - player edit
export const toggleEditBattingPlayer = () => {
    return {
        type: "TOGGLE_EDIT_BATTING_PLAYER"
    }
}
//Edit Bowling Page - player edit
export const toggleEditBowlingPlayer = () => {
    return {
        type: "TOGGLE_EDIT_BOWLING_PLAYER"
    }
}

//toggles the edit button on team news page
export const toggleEditButton = () => {
    return {
        type: "TOGGLE_EDIT_BUTTON"
    }
}

//toggles edit overlay after selecting editing player on team news page
export const toggleEditOverlay = () => {
    return {
        type: "TOGGLE_EDIT_OVERLAY"
    }
}

//toggles screen for adding players and team names
export const toggleTeamScreen = () => {
    return {
        type: "TOGGLE_TEAM_SCREEN"
    }
}

//toggles screen for setting format
export const toggleFormat = () => {
    return {
        type: "TOGGLE_FORMAT"
    }
}
//toggles screen for setting venue
export const toggleVenue = () => {
    return {
        type: "TOGGLE_VENUE"
    }
}
//toggles screen for setting toss
export const toggleToss = () => {
    return {
        type: "TOGGLE_TOSS"
    }
}

//Home Screen Toggle
export const toggleHomeScreen = () => {
    return {
        type: "SWITCH_HOME_SCREEN"
    }
}

//Scorebook Screen Toggle
export const toggleScorebookScreen = () => {
    return {
        type: "SWITCH_SCOREBOOK_SCREEN"
    }
}

//Team News Screen Toggle
export const toggleTeamNewsScreen = () => {
    return {
        type: "SWITCH_TEAM_NEWS_SCREEN"
    }
}

//Theme Screen Toggle
export const toggleThemeScreen = () => {
    return {
        type: "SWITCH_THEME_SCREEN"
    }
}

//Toggles buttons on mobile
export const toggleMobileButtons = () => {
    return {
        type: "TOGGLE_MOBILE"
    }
}