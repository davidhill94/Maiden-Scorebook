//BATTING IMPORTS
import totalRunsReducer from "./Batting/totalRuns";
import { batsmanOneRunsReducer, batsmanTwoRunsReducer } from "./Batting/batsmanRuns";
import batsmanReducer from "./Batting/batsman";
import battingTeamReducer from "./Batting/battingTeam";
import { ballsFacedOneReducer, ballsFacedTwoReducer } from "./Batting/ballsFaced";
//BOWLING IMPORTS
import bowlerReducer from "./Bowling/bowler";
import ballsReducer from "./Bowling/balls";
import oversReducer from "./Bowling/overs";
import recentDeliveriesReducer from "./Bowling/recentDeliveries";
import maidenReducer from "./Bowling/maiden";
import bowlerOneReducer from "./Bowling/ActiveBowler/bowlerOne";
import bowlerTwoReducer from "./Bowling/ActiveBowler/bowlerTwo";
import bowlerSelectReducer from "./Pages/bowlerSelect";
import bowlingArrayReducer from "./Bowling/bowlingArray";
import wicketsReducer from "./Bowling/wickets";
//EXTRAS IMPORTS
import totalExtrasReducer from "./Extras/totalExtras";
import widesReducer from "./Extras/wide";
import noBallsReducer from "./Extras/noBalls";
import byesReducer from "./Extras/byes";
import legByesReducer from "./Extras/legByes";
import penaltyReducer from "./Extras/penalty";
//TEAM IMPORTS
import awayTeamReducer from "./Team/away";
import homeTeamReducer from "./Team/home";

import { combineReducers } from "redux";
import { batsmanOneNameReducer, batsmanTwoNameReducer } from "./Batting/batsmanNames";
import { batsmanAtWicketReducer, wicketArrayReducer } from "./Bowling/wicketArr";
import { awayTeamNameReducer, homeTeamNameReducer } from "./Team/teamNames";
import buttonToggleReducer from "./Pages/buttonToggle";
import { editBattingPlayerReducer, editBattingToggleReducer, editBowlingPlayerReducer, editBowlingToggleReducer, editExtrasToggleReducer } from "./Pages/editButtonsToggle";
import { editButtonToggleReducer, editOverlayToggleReducer, formatToggleReducer, teamScreenToggleReducer, tossToggleReducer, venueToggleReducer } from "./Pages/teamNews";
import venueReducer from "./Match/venue";
import formatReducer from "./Match/format";
import tossReducer from "./Match/toss";
import { homeScreenReducer, scorebookScreenReducer, teamNewsScreenReducer, themeScreenReducer } from "./Pages/toggleScreen";
import themeReducer from "./Theme/theme";
import mobileToggleReducer from "./Pages/mobileToggle";


const rootReducer = combineReducers({
    //Batting Reducers
    totalRuns : totalRunsReducer, 
    batsman : batsmanReducer,
    battingTeam : battingTeamReducer,
    batsmanOneRuns : batsmanOneRunsReducer,
    batsmanTwoRuns : batsmanTwoRunsReducer,
    ballsFacedOne : ballsFacedOneReducer,
    ballsFacedTwo : ballsFacedTwoReducer,
    batsmanOneName : batsmanOneNameReducer,
    batsmanTwoName : batsmanTwoNameReducer,
    //Bowling Reducers
    bowler : bowlerReducer,
    balls : ballsReducer,
    overs : oversReducer,
    lastTen : recentDeliveriesReducer,
    maiden : maidenReducer,
    bowlerOne : bowlerOneReducer,
    bowlerTwo : bowlerTwoReducer,
    bowlingArr : bowlingArrayReducer,
    wickets : wicketsReducer,
    wicketArr : wicketArrayReducer,
    batsmanAtWicket : batsmanAtWicketReducer,
    //Extras Reducers
    totalExtras : totalExtrasReducer,
    wides : widesReducer,
    noBalls : noBallsReducer,
    byes : byesReducer,
    legByes : legByesReducer,
    penalty : penaltyReducer,
    //Team Reducers
    awayTeam : awayTeamReducer,
    homeTeam : homeTeamReducer,
    homeTeamName : homeTeamNameReducer,
    awayTeamName :  awayTeamNameReducer,
    //Match Reducers
    venue : venueReducer,
    format : formatReducer,
    toss : tossReducer,
    //Page Reducers
    bowlerSelect : bowlerSelectReducer,
    buttonToggle : buttonToggleReducer,
    editBattingToggle : editBattingToggleReducer,
    editBattingPlayer : editBattingPlayerReducer,
    editBowlingToggle : editBowlingToggleReducer,
    editBowlingPlayer : editBowlingPlayerReducer,
    editExtrasToggle : editExtrasToggleReducer,
    editToggle : editButtonToggleReducer,
    editOverlay : editOverlayToggleReducer,
    teamScreen : teamScreenToggleReducer,
    formatToggle : formatToggleReducer,
    venueToggle : venueToggleReducer,
    tossToggle : tossToggleReducer,
    homeScreen : homeScreenReducer,
    scorebookScreen : scorebookScreenReducer,
    teamNewsScreen : teamNewsScreenReducer,
    themeScreen : themeScreenReducer,
    mobileButtons : mobileToggleReducer,
    //Theme
    theme : themeReducer



})

export default rootReducer;