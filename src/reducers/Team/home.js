const homeTeamReducer = (state = [
    {name: "Home 1", runs: 0, balls: 0, status: "batting1", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
    {name: "Home 2", runs: 0, balls: 0, status: "batting2", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
    {name: "Home 3", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
    {name: "Home 4", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
    {name: "Home 5", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
    {name: "Home 6", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
    {name: "Home 7", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
    {name: "Home 8", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
    {name: "Home 9", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
    {name: "Home 10", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
    {name: "Home 11", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100}
], action) => {
    switch (action.type) {
        case "RESET_HOME_TEAM":
            return [{name: "Home 1", runs: 0, balls: 0, status: "batting1", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
            {name: "Home 2", runs: 0, balls: 0, status: "batting2", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
            {name: "Home 3", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
            {name: "Home 4", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
            {name: "Home 5", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
            {name: "Home 6", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
            {name: "Home 7", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
            {name: "Home 8", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
            {name: "Home 9", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
            {name: "Home 10", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
            {name: "Home 11", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100}] 
        default:
            return state;
    }
}

export default homeTeamReducer;