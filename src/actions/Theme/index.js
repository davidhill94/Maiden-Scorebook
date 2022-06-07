//Sets Theme
export const setTheme = (name) => {
    return {
        type: "SET_THEME",
        payload: name
    }
}
export const resetTheme = () => {
    return {
        type: "RESET_THEME"
    }
}