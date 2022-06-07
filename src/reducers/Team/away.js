const awayTeamReducer = (state = [
        {name: "Away 1", runs: 0, balls: 0, status: "batting1", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
        {name: "Away 2", runs: 0, balls: 0, status: "batting2", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
        {name: "Away 3", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
        {name: "Away 4", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
        {name: "Away 5", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
        {name: "Away 6", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
        {name: "Away 7", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
        {name: "Away 8", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
        {name: "Away 9", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
        {name: "Away 10", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
        {name: "Away 11", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100}
], action) => {
    switch (action.type) {
        case "RESET_AWAY_TEAM":
            return [ {name: "Away 1", runs: 0, balls: 0, status: "batting1", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
            {name: "Away 2", runs: 0, balls: 0, status: "batting2", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
            {name: "Away 3", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
            {name: "Away 4", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
            {name: "Away 5", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
            {name: "Away 6", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
            {name: "Away 7", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
            {name: "Away 8", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
            {name: "Away 9", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
            {name: "Away 10", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100},
            {name: "Away 11", runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100}]
        default:
            return state;
    }
}

export default awayTeamReducer;