import React from 'react';
import './Scorebook.css';
import './Header';
import { toggleScorebookScreen } from '../actions/Pages';
import { useDispatch, useSelector } from 'react-redux';

export default function Scorebook() {

const dispatch = useDispatch();
const totalRuns = useSelector(state => state.totalRuns);
const overs = useSelector(state => state.overs);
const balls = useSelector(state => state.balls);
const awayTeam = useSelector(state => state.awayTeam);
const homeTeam = useSelector(state => state.homeTeam);
const battingTeam = useSelector(state => state.battingTeam);
const totalExtras = useSelector(state => state.totalExtras);
const wides = useSelector(state => state.wides);
const noBalls = useSelector(state => state.noBalls);
const byes = useSelector(state => state.byes);
const legByes = useSelector(state => state.legByes);
const penaltyRuns = useSelector(state => state.penalty);
const wickets = useSelector(state => state.wickets);
const batsmanAtWicket = useSelector(state => state.batsmanAtWicket);
const wicketArr = useSelector(state => state.wicketArr);
const bowlingArr = useSelector(state => state.bowlingArr);


    return (
        <div className="scorebook-container">
            <div className="close-scorebook">
                <button onClick={() => dispatch(toggleScorebookScreen())}>Back to Scoreboard</button>
            </div>

            {/* Handles displaying batting details */}
            <div className="scorebook-batting-container">
                
                {battingTeam === false

                ?

            <div className="batsman-list">
                <ul>
                <div className="batsman-titles">
                <h4 className="batsman-header">Batsman</h4>
                <h4 className="batsman-wicket-header">Wicket</h4>
                <h4 className="batsman-bowler-header">Bowler</h4>
                <h4 className="batsman-runs-header">Runs</h4>
                <h4 className="batsman-balls-header">Balls</h4>
                </div>
                    {homeTeam.map(
                        (person, num) => {
                            return (
                                <div className="batsman-row">
                                <li className="batsman-name" key={person.name}>{num = num + 1} {person.name}</li>
                                <li className="batsman-wicketType" key={Math.random()}>{person.status === "batting1" || person.status === "batting2" ? "Batting" : person.wicketType}</li>
                                <li className="batsman-wicketTaker" key={Math.random()}>{person.wicketTaker === "none" ? "-" : person.wicketTaker}</li>
                                <li className="batsman-runs" key={Math.random()}>{person.runs}</li>
                                <li className="batsman-balls" key={Math.random()}>{person.balls}</li>
                                </div>
                            )}
                    )}
                </ul>
            </div> 

                :

            <div className="batsman-list">
                <ul>
                <div className="batsman-titles">
                <h4 className="batsman-header">Batsman</h4>
                <h4 className="batsman-wicket-header">Wicket</h4>
                <h4 className="batsman-bowler-header">Bowler</h4>
                <h4 className="batsman-runs-header">Runs</h4>
                <h4 className="batsman-balls-header">Balls</h4>
                </div>
                    {awayTeam.map(
                        (person, num) => {
                            return (
                                <div className="batsman-row">
                                <li className="batsman-name" key={person.name}>{num = num + 1} {person.name}</li>
                                <li className="batsman-wicketType" key={Math.random()}>{person.status === "batting1" || person.status === "batting2" ? "Batting" : person.wicketType}</li>
                                <li className="batsman-wicketTaker" key={Math.random()}>{person.wicketTaker === "none" ? "-" : person.wicketTaker}</li>
                                <li className="batsman-runs" key={Math.random()}>{person.runs}</li>
                                <li className="batsman-balls" key={Math.random()}>{person.balls}</li>
                                </div>
                            )}
                    )}
                </ul>
            </div>
        }
            </div>

            {/* Handles Batsman no. on dismissal && score on dismissal */}
            <div className="scorebook-totals-container">
                <div className="dismissal-container">
                    <div className="dismissal-columns-title">
                    <h4>Dismissal</h4>
                    <h4>Batsman No.</h4>
                    <h4>Total</h4>
                    </div>
                    <div className="dismissal-columns">
                        <h4>1</h4>
                        <p>{batsmanAtWicket.length >= 1 ? batsmanAtWicket[0] : "-"}</p>
                        <p>{wicketArr.length >= 1 ? wicketArr[0] : 0}</p>
                    </div>
                    <div className="dismissal-columns">
                        <h4>2</h4>
                        <p>{batsmanAtWicket.length >= 2 ? batsmanAtWicket[1] : "-"}</p>
                        <p>{wicketArr.length >= 2 ? wicketArr[1] : 0}</p>
                    </div>
                    <div className="dismissal-columns">
                        <h4>3</h4>
                        <p>{batsmanAtWicket.length >= 3 ? batsmanAtWicket[2] : "-"}</p>
                        <p>{wicketArr.length >= 3 ? wicketArr[2] : 0}</p>
                    </div>
                    <div className="dismissal-columns">
                        <h4>4</h4>
                        <p>{batsmanAtWicket.length >= 4 ? batsmanAtWicket[3] : "-"}</p>
                        <p>{wicketArr.length >= 4 ? wicketArr[3] : 0}</p>
                    </div>
                    <div className="dismissal-columns">
                        <h4>5</h4>
                        <p>{batsmanAtWicket.length >= 5 ? batsmanAtWicket[4] : "-"}</p>
                        <p>{wicketArr.length >= 5 ? wicketArr[4] : 0}</p>
                    </div>
                    <div className="dismissal-columns">
                        <h4>6</h4>
                        <p>{batsmanAtWicket.length >= 6 ? batsmanAtWicket[5] : "-"}</p>
                        <p>{wicketArr.length >= 6 ? wicketArr[5] : 0}</p>
                    </div>
                    <div className="dismissal-columns">
                        <h4>7</h4>
                        <p>{batsmanAtWicket.length >= 7 ? batsmanAtWicket[6] : "-"}</p>
                        <p>{wicketArr.length >= 7 ? wicketArr[6] : 0}</p>
                    </div>
                    <div className="dismissal-columns">
                        <h4>8</h4>
                        <p>{batsmanAtWicket.length >= 8 ? batsmanAtWicket[7] : "-"}</p>
                        <p>{wicketArr.length >= 8 ? wicketArr[7] : 0}</p>
                    </div>
                    <div className="dismissal-columns">
                        <h4>9</h4>
                        <p>{batsmanAtWicket.length >= 9 ? batsmanAtWicket[8] : "-"}</p>
                        <p>{wicketArr.length >= 9 ? wicketArr[8] : 0}</p>
                    </div>
                    <div className="dismissal-columns">
                        <h4>10</h4>
                        <p>{batsmanAtWicket.length >= 10 ? batsmanAtWicket[9] : "-"}</p>
                        <p>{wicketArr.length >= 10 ? wicketArr[9] : 0}</p>
                    </div>
                </div>
                <div className="extras-totals-combined">
                {/* Handles displaying extras */}
                <div className="scorebook-extras-container">
                    <div className="extras-row">
                        <div className="extras-item">
                        <h4>Extras</h4>
                        <p>{totalExtras}</p>
                        </div>
                        <div className="extras-item">
                        <h4>Penalty</h4>
                        <p>{penaltyRuns}</p>
                        </div>
                    </div>
                    <div className="extras-row">
                    <div className="extras-item">
                        <h4>Byes</h4>
                        <p>{byes}</p>
                        </div>
                        <div className="extras-item">
                        <h4>Leg Byes</h4>
                        <p>{legByes}</p>
                    </div>
                    </div>
                    <div className="extras-row">
                        <div className="extras-item">
                        <h4>Wides</h4>
                        <p>{wides}</p>
                        </div>
                        <div className="extras-item">
                        <h4>No Balls</h4>
                        <p>{noBalls}</p>
                        </div>
                    </div>
                </div>

                {/* Handles displaying Score total, wickets, overs, and Run Rate */}
                <div className="scorecard-totals">
                    <div className="scorecard-totals-column">
                        <div>
                        <h4>Total</h4>
                        <p>{totalRuns}</p>
                        </div>
                        <div>
                        <h4>Wickets</h4>
                        <p>{wickets}</p>
                        </div>
                    </div>
                    <div className="scorecard-totals-column">
                        <div>
                        <h4>Overs</h4>
                        <p>{overs.toFixed(1)}</p>
                        </div>
                        <div>
                        <h4>Run Rate</h4>
                        <p>{(balls === 0 ? 0 : (totalRuns / (balls / 6)).toFixed(2))}</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>

            {/* Handles displaying bowling figures */}
            <div className="scorebook-bowling-container">
                <ul>
                    <div className="bowling-titles">
                    <h4 className="bowler-header">Bowler</h4>
                    <h4 className="bowler-figures-header">Overs</h4>
                    <h4 className="bowler-figures-header">Maidens</h4>
                    <h4 className="bowler-figures-header">Wickets</h4>
                    <h4 className="bowler-figures-header">Runs</h4>
                    <h4 className="bowler-figures-header">Economy</h4>
                    <h4 className="bowler-figures-header">SR</h4>
                    </div>
            {bowlingArr.map(
                        (person) => {
                            return (
                                <div className="bowler-figures">
                                    <li className="bowler-name">{person.name}</li>
                                    <li className="bowler-overs">{person.oversBowled.toFixed(1)}</li>
                                    <li className="bowler-maidens">{person.maidens}</li>
                                    <li className="bowler-wickets">{person.wickets}</li>
                                    <li className="bowler-runs">{person.bowlingRuns}</li>
                                    <li className="bowler-economy">{((person.bowlingRuns / person.bowlingBalls) * 6).toFixed(2)}</li>
                                    <li className="bowler-strike-rate">{isFinite(((person.bowlingBalls / person.wickets)).toFixed(2)) ? ((person.bowlingBalls / person.wickets)).toFixed(2) : 0}</li>
                                </div>
                            )}
            )}
            </ul>
            </div>
        </div>
    )
                            }
