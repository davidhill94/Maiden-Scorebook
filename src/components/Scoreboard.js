import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBowlerToScorebook, setBowlerOne, setBowlerTwo } from '../actions/Bowling';
import { bowlerSelectToggle, toggleMobileButtons, toggleScorebookScreen, toggleTeamNewsScreen } from '../actions/Pages';
import './Scoreboard.css';

export default function Scorecard() {

const dispatch = useDispatch();
const totalRuns = useSelector(state => state.totalRuns);
const overs = useSelector(state => state.overs);
const balls = useSelector(state => state.balls);
const batsmanOneRuns = useSelector(state => state.batsmanOneRuns);
const batsmanTwoRuns = useSelector(state => state.batsmanTwoRuns);
const ballsFacedOne = useSelector(state => state.ballsFacedOne);
const ballsFacedTwo = useSelector(state => state.ballsFacedTwo);
const batsmanOneName = useSelector(state => state.batsmanOneName);
const batsmanTwoName = useSelector(state => state.batsmanTwoName);
const batsman = useSelector(state => state.batsman);
const bowler = useSelector(state => state.bowler);
const lastTen = useSelector(state => state.lastTen);
const awayTeam = useSelector(state => state.awayTeam);
const homeTeam = useSelector(state => state.homeTeam);
const awayTeamName = useSelector(state => state.awayTeamName);
const homeTeamName = useSelector(state => state.homeTeamName);
const battingTeam = useSelector(state => state.battingTeam);
const bowlerSelect = useSelector(state => state.bowlerSelect);
const bowlerOne = useSelector(state => state.bowlerOne);
const bowlerTwo = useSelector(state => state.bowlerTwo);
const totalExtras = useSelector(state => state.totalExtras);
const wides = useSelector(state => state.wides);
const noBalls = useSelector(state => state.noBalls);
const byes = useSelector(state => state.byes);
const legByes = useSelector(state => state.legByes);
const penaltyRuns = useSelector(state => state.penalty);
const wickets = useSelector(state => state.wickets);
const mobileButtons = useSelector(state => state.mobileButtons);

const handleMobileButtons = () => {
    const buttons = document.querySelector(".buttons-outer-container")
    if(mobileButtons === false) {
        buttons.classList.add("mobile");
        dispatch(toggleMobileButtons())
    } else {
        buttons.classList.remove("mobile");
        dispatch(toggleMobileButtons())
    }
}

    /*const handleChangeBatting = () => {
        this.props.handleBatting();
        setTimeout(this.props.updateUI(), 5000);
    }*/

    const handleBowlerSelect = () => {
        const bowlerSelectClass = document.querySelector(".bowler-select-container")
        if (bowlerSelect === false) {
            bowlerSelectClass.classList.add("active")
            dispatch(bowlerSelectToggle())
        } else {
            bowlerSelectClass.classList.remove("active")
            dispatch(bowlerSelectToggle())
        }
    }

    const setBowlingStatus = (event) => {

        if (battingTeam === false) {
            if (bowler === false) {
                for (let i = 0; i < awayTeam.length; i++) {
                    if (awayTeam[i].status === "bowling1") {
                        awayTeam[i].status = "none"
                    }
                }
                for (let i = 0; i < awayTeam.length; i++) {
                    if (awayTeam[i].name === event.target.value) {
                        awayTeam[i].status = "bowling1"
                        dispatch(setBowlerOne(awayTeam[i]))
                    }
                }
            } else {
                for (let i = 0; i < awayTeam.length; i++) {
                    if (awayTeam[i].status === "bowling2") {
                        awayTeam[i].status = "none"
                    }
                }
                for (let i = 0; i < awayTeam.length; i++) {
                    if (awayTeam[i].name === event.target.value) {
                        awayTeam[i].status = "bowling2"
                        dispatch(setBowlerTwo(awayTeam[i]))
                    }
                }
            }
        } else {
            if (bowler === false) {
                for (let i = 0; i < homeTeam.length; i++) {
                    if (homeTeam[i].status === "bowling1") {
                        homeTeam[i].status = "none"
                    }
                }
                for (let i = 0; i < homeTeam.length; i++) {
                    if (homeTeam[i].name === event.target.value) {
                        homeTeam[i].status = "bowling1"
                        dispatch(setBowlerOne(homeTeam[i]))
                    }
                }
            } else {
                for (let i = 0; i < homeTeam.length; i++) {
                    if (homeTeam[i].status === "bowling2") {
                        homeTeam[i].status = "none"
                    }
                }
                for (let i = 0; i < homeTeam.length; i++) {
                    if (homeTeam[i].name === event.target.value) {
                        homeTeam[i].status = "bowling2"
                        dispatch(setBowlerTwo(homeTeam[i]))
                    }
                }
            }
        }
        handleBowlerSelect();
        handleBowlingScorebook();
    }

    const handleBowlingScorebook = () => {
        if (battingTeam === false) {
            for (let i = 0; i < awayTeam.length; i++) {
                if (awayTeam[i].hasBowled === false && awayTeam[i].status === "bowling1") {
                    awayTeam[i].hasBowled = true
                    dispatch(addBowlerToScorebook(awayTeam[i]))
                } else if (awayTeam[i].hasBowled === false && awayTeam[i].status === "bowling2") {
                    awayTeam[i].hasBowled = true
                    dispatch(addBowlerToScorebook(awayTeam[i]))
                }
            }
        } else {
            for (let i = 0; i < homeTeam.length; i++) {
                if (homeTeam[i].hasBowled === false && homeTeam[i].status === "bowling1") {
                    homeTeam[i].hasBowled = true
                    dispatch(addBowlerToScorebook(homeTeam[i]))
                } else if (homeTeam[i].hasBowled === false && homeTeam[i].status === "bowling2") {
                    homeTeam[i].hasBowled = true
                    dispatch(addBowlerToScorebook(homeTeam[i]))
                }
            }
        }
    }
    return (
        <div className="outer-container">
        {/* SCOREBOARD CONTAINER */}
        <div className="grid-container">
                <div className="batsman-one-container">
                    <h3>{batsmanOneName}{batsman === false ? "*"  : null}</h3>
                    <p>{batsmanOneRuns}</p>
                    <p className="deliveries">{ballsFacedOne}</p>
                </div>
                <div className="total-score-container">
                    <h3>Total</h3>
                    <p>{totalRuns}</p>
                </div>
                <div className="batsman-two-container">
                    <div className="batsman">
                    <h3>{batsmanTwoName}{batsman === true ? "*" : null}</h3>
                    </div>
                    <p>{batsmanTwoRuns}</p>
                    <p className="deliveries">{ballsFacedTwo}</p>
                </div>  
            <div className="bowling-container">
                <div className="current-bowler">
                <button className="change-bowler" onClick={handleBowlerSelect}>
                            <i class="fas fa-exchange-alt"></i>
                            </button>
                    <h4>{bowler === false ? bowlerOne.name : bowlerTwo.name }
                    </h4>
                    <p>{bowler === false ? Number(bowlerOne.oversBowled).toFixed(1) : Number(bowlerTwo.oversBowled).toFixed(1)} - {bowler === false ? bowlerOne.maidens : bowlerTwo.maidens} - {bowler === false ? bowlerOne.wickets : bowlerTwo.wickets} - {bowler === false ? bowlerOne.bowlingRuns : bowlerTwo.bowlingRuns}</p>
                </div>
                <div className="run-rate">
                    <h4>Run Rate</h4>
                    <p>{(balls === 0 ? 0 : (totalRuns / (balls / 6)).toFixed(2))}</p>
                </div>
                <div className="deliveries-tally">
                    <h4>Last 10 Deliveries</h4>
                    <p>{(balls === 0 ? "-" : lastTen)}</p>
                </div>
            </div>
            <div className="wickets-overs-container">
                <div className="wickets-container">
                    <h3>Wickets</h3>
                    <p>{wickets}</p>
                </div>
                <div className="overs-container">
                    <h3>Overs</h3>
                    <p>{overs.toFixed(1)}</p>
                </div>
            </div>
            <div className="extras-container">
                <div className="extras-line-break-1">
                <div className="extras">
                    <h4>Extras</h4>
                    <p>{totalExtras}</p>
                </div>
                <div className="extras">
                    <h4>Penalty</h4>
                    <p>{penaltyRuns}</p>
                </div>
                </div>
                <div className="extras-line-break-2">
                <div className="extras">
                    <h4>Wides</h4>
                    <p>{wides}</p>
                </div>
                <div className="extras">
                    <h4>No Balls</h4>
                    <p>{noBalls}</p>
                </div>
                </div>
                <div className="extras-line-break-3">
                <div className="extras">
                    <h4>Byes</h4>
                    <p>{byes}</p>
                </div>
                <div className="extras">
                    <h4>Leg Byes</h4>
                    <p>{legByes}</p>
                </div>
                </div>
            </div>
            {/* Mobile Screen Buttons for updating scoreboard / team page */}
            <div className="btns-mobile">
            <button className="scoreboard-btn" onClick={() => dispatch(toggleTeamNewsScreen())}>Team Details</button>
            <button className="scoreboard-btn" onClick={handleMobileButtons}>Update Scoreboard</button>
            <button className="scoreboard-btn" onClick={() => dispatch(toggleScorebookScreen())}>Scorebook</button>
    </div>
        </div>
        {/* active menu for selecting current bowler */}
        <div className="bowler-select-container">
            {battingTeam === false
            ?
            <div>
                <h4>{awayTeamName.length > 0 ? awayTeamName : "Away Team"}</h4>
                <ul>
                    {awayTeam.map(
                        person => {
                            return (
                                <li key={person.name}><button onClick={setBowlingStatus} value={person.name}>{person.name}</button></li>
                            )
                        }
                    )}
                </ul>
            </div>
            :
            <div>
                <h4>{homeTeamName.length > 0 ? homeTeamName : "Home Team"}</h4>
                <ul>
                    {homeTeam.map(
                        person => {
                            return (
                                <li key={person.name}><button onClick={setBowlingStatus} value={person.name}>{person.name}</button></li>
                            )
                        }
                    )}
                </ul>
            </div>
            }
            </div>
        </div>
    )}
