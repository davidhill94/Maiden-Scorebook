import React, { Component } from 'react';
import './Scorebook.css';
import './Header';

class Scorebook extends Component {

    render() {
    return (
        <div className="scorebook-container">
            <div className="close-scorebook">
                <button onClick={this.props.changeScreen}>Back to Scoreboard</button>
            </div>

            {/* Handles displaying batting details */}
            <div className="scorebook-batting-container">
                
                {this.props.isBatting === true

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
                    {this.props.homePlayers.map(
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
                    {this.props.awayPlayers.map(
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
                        <p>{this.props.batsmanAtWicket.length === 1 ? "-" : this.props.batsmanAtWicket[1]}</p>
                        <p>{this.props.wicketArr.length === 1 ? 0 : this.props.wicketArr[1]}</p>
                    </div>
                    <div className="dismissal-columns">
                        <h4>2</h4>
                        <p>{this.props.batsmanAtWicket.length <= 2 ? "-" : this.props.batsmanAtWicket[2]}</p>
                        <p>{this.props.wicketArr.length <= 2 ? 0 : this.props.wicketArr[2]}</p>
                    </div>
                    <div className="dismissal-columns">
                        <h4>3</h4>
                        <p>{this.props.batsmanAtWicket.length <= 3 ? "-" : this.props.batsmanAtWicket[3]}</p>
                        <p>{this.props.wicketArr.length <= 3 ? 0 : this.props.wicketArr[3]}</p>
                    </div>
                    <div className="dismissal-columns">
                        <h4>4</h4>
                        <p>{this.props.batsmanAtWicket.length <= 4 ? "-" : this.props.batsmanAtWicket[4]}</p>
                        <p>{this.props.wicketArr.length <= 4 ? 0 : this.props.wicketArr[4]}</p>
                    </div>
                    <div className="dismissal-columns">
                        <h4>5</h4>
                        <p>{this.props.batsmanAtWicket.length <= 5 ? "-" : this.props.batsmanAtWicket[5]}</p>
                        <p>{this.props.wicketArr.length <= 5 ? 0 : this.props.wicketArr[5]}</p>
                    </div>
                    <div className="dismissal-columns">
                        <h4>6</h4>
                        <p>{this.props.batsmanAtWicket.length <= 6 ? "-" : this.props.batsmanAtWicket[6]}</p>
                        <p>{this.props.wicketArr.length <= 6 ? 0 : this.props.wicketArr[6]}</p>
                    </div>
                    <div className="dismissal-columns">
                        <h4>7</h4>
                        <p>{this.props.batsmanAtWicket.length <= 7 ? "-" : this.props.batsmanAtWicket[7]}</p>
                        <p>{this.props.wicketArr.length <= 7 ? 0 : this.props.wicketArr[7]}</p>
                    </div>
                    <div className="dismissal-columns">
                        <h4>8</h4>
                        <p>{this.props.batsmanAtWicket.length <= 8 ? "-" : this.props.batsmanAtWicket[8]}</p>
                        <p>{this.props.wicketArr.length <= 8 ? 0 : this.props.wicketArr[8]}</p>
                    </div>
                    <div className="dismissal-columns">
                        <h4>9</h4>
                        <p>{this.props.batsmanAtWicket.length <= 9 ? "-" : this.props.batsmanAtWicket[9]}</p>
                        <p>{this.props.wicketArr.length <= 9 ? 0 : this.props.wicketArr[9]}</p>
                    </div>
                    <div className="dismissal-columns">
                        <h4>10</h4>
                        <p>{this.props.batsmanAtWicket.length <= 10 ? "-" : this.props.batsmanAtWicket[10]}</p>
                        <p>{this.props.wicketArr.length <= 10 ? 0 : this.props.wicketArr[10]}</p>
                    </div>
                </div>
                <div className="extras-totals-combined">
                {/* Handles displaying extras */}
                <div className="scorebook-extras-container">
                    <div className="extras-row">
                        <div className="extras-item">
                        <h4>Extras</h4>
                        <p>{this.props.extrasTotal}</p>
                        </div>
                        <div className="extras-item">
                        <h4>Penalty</h4>
                        <p>{this.props.penaltyRuns}</p>
                        </div>
                    </div>
                    <div className="extras-row">
                    <div className="extras-item">
                        <h4>Byes</h4>
                        <p>{this.props.byes}</p>
                        </div>
                        <div className="extras-item">
                        <h4>Leg Byes</h4>
                        <p>{this.props.legByes}</p>
                    </div>
                    </div>
                    <div className="extras-row">
                        <div className="extras-item">
                        <h4>Wides</h4>
                        <p>{this.props.wides}</p>
                        </div>
                        <div className="extras-item">
                        <h4>No Balls</h4>
                        <p>{this.props.noBalls}</p>
                        </div>
                    </div>
                </div>

                {/* Handles displaying Score total, wickets, overs, and Run Rate */}
                <div className="scorecard-totals">
                    <div className="scorecard-totals-column">
                        <div>
                        <h4>Total</h4>
                        <p>{this.props.totalRuns}</p>
                        </div>
                        <div>
                        <h4>Wickets</h4>
                        <p>{this.props.wickets}</p>
                        </div>
                    </div>
                    <div className="scorecard-totals-column">
                        <div>
                        <h4>Overs</h4>
                        <p>{this.props.overs.toFixed(1)}</p>
                        </div>
                        <div>
                        <h4>Run Rate</h4>
                        <p>{(this.props.balls === 0 ? 0 : (this.props.totalRuns / (this.props.balls / 6)).toFixed(2))}</p>
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
            {this.props.bowlingArr.map(
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
    )}
}

export default Scorebook
