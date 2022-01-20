import React, { Component } from 'react';
import './Scoreboard.css';

class Scorecard extends Component {
constructor(props){
    super(props);
    this.state = {
        mobileToggle: false
    }
}

    mobileButtons = () => {
        const buttons = document.querySelector(".buttons-outer-container")
        const save = document.querySelector(".mobile-save-button");
        if(this.state.mobileToggle === false) {
            buttons.classList.add("mobile");
            save.classList.add("active");
            this.setState({
                mobileToggle: true
            })
        } else {
            buttons.classList.remove("mobile");
            save.classList.remove("active");
            this.setState({
                mobileToggle: false
            })
        }
    }

    handleChangeBatting = () => {
        this.props.handleBatting();
        setTimeout(this.props.updateUI(), 5000);
    }

    render() {
    return (
        <div className="outer-container">
        {/* SCOREBOARD CONTAINER */}
        <div className="grid-container">
                <div className="batsman-one-container">
                    <h3>{this.props.batsmanOneName}{this.props.batsman === "ONE" ? "*"  : null}</h3>
                    <p>{this.props.batsmanOne}</p>
                    <p className="deliveries">{this.props.ballsFacedOne}</p>
                </div>
                <div className="total-score-container">
                    <h3>Total</h3>
                    <p>{this.props.totalRuns}</p>
                </div>
                <div className="batsman-two-container">
                    <div className="batsman">
                    <h3>{this.props.batsmanTwoName}{this.props.batsman === "TWO" ? "*" : null}</h3>
                    </div>
                    <p>{this.props.batsmanTwo}</p>
                    <p className="deliveries">{this.props.ballsFacedTwo}</p>
                </div>  
            <div className="bowling-container">
                <div className="current-bowler">
                <button className="change-bowler" onClick={this.props.bowlerSelectActive}>
                            <i class="fas fa-exchange-alt"></i>
                            </button>
                    <h4 onChange={this.handleBowlerFigures}>{this.props.bowler === "ONE" ? this.props.bowlerOne : this.props.bowlerTwo}
                    </h4>
                    <p>{this.props.bowler === "ONE" ? this.props.bowlerOneOvers : this.props.bowlerTwoOvers} - {this.props.bowler === "ONE" ? this.props.bowlerOneMaidens : this.props.bowlerTwoMaidens} - {this.props.bowler === "ONE" ? this.props.bowlerOneWickets : this.props.bowlerTwoWickets} - {this.props.bowler === "ONE" ? this.props.bowlerOneRuns : this.props.bowlerTwoRuns}</p>
                </div>
                <div className="run-rate">
                    <h4>Run Rate</h4>
                    <p>{(this.props.balls === 0 ? 0 : (this.props.totalRuns / (this.props.balls / 6)).toFixed(2))}</p>
                </div>
                <div className="deliveries-tally">
                    <h4>Last 10 Deliveries</h4>
                    <p>{(this.props.balls === 0 ? "-" : this.props.recentDeliveries)}</p>
                </div>
            </div>
            <div className="wickets-overs-container">
                <div className="wickets-container">
                    <h3>Wickets</h3>
                    <p>{this.props.wickets}</p>
                </div>
                <div className="overs-container">
                    <h3>Overs</h3>
                    <p>{this.props.overs.toFixed(1)}</p>
                </div>
            </div>
            <div className="extras-container">
                <div className="extras-line-break-1">
                <div className="extras">
                    <h4>Extras</h4>
                    <p>{this.props.extrasTotal}</p>
                </div>
                <div className="extras">
                    <h4>Penalty</h4>
                    <p>{this.props.penaltyRuns}</p>
                </div>
                </div>
                <div className="extras-line-break-2">
                <div className="extras">
                    <h4>Wides</h4>
                    <p>{this.props.wides}</p>
                </div>
                <div className="extras">
                    <h4>No Balls</h4>
                    <p>{this.props.noBalls}</p>
                </div>
                </div>
                <div className="extras-line-break-3">
                <div className="extras">
                    <h4>Byes</h4>
                    <p>{this.props.byes}</p>
                </div>
                <div className="extras">
                    <h4>Leg Byes</h4>
                    <p>{this.props.legByes}</p>
                </div>
                </div>
            </div>
        </div>
        {/* active menu for selecting current bowler */}
        <div className="bowler-select-container">
            {this.props.isBatting === true
            ?
            <div>
                <h4>{this.props.awayName.length > 0 ? this.props.awayName : "Away Team"}</h4>
                <ul>
                    {this.props.awayPlayers.map(
                        person => {
                            return (
                                <li key={person.name}><button onClick={this.props.setBowlingStatus} value={person.name}>{person.name}</button></li>
                            )
                        }
                    )}
                </ul>
            </div>
            :
            <div>
                <h4>{this.props.homeName.length > 0 ? this.props.homeName : "Home Team"}</h4>
                <ul>
                    {this.props.homePlayers.map(
                        person => {
                            return (
                                <li key={person.name}><button onClick={this.props.setBowlingStatus} value={person.name}>{person.name}</button></li>
                            )
                        }
                    )}
                </ul>
            </div>
            }
            </div>

            {/* Mobile Screen Buttons for updating scoreboard / team page */}
            <div className="btns-mobile">
            <button className="skew-box-left" onClick={this.props.handleTeamScreen}><span className="skew-text">Team Details</span></button>
            <button className="skew-box-center" onClick={this.mobileButtons}><span className="skew-text">Update Scoreboard</span></button>
            <button className="skew-box" onClick={this.props.changeScreen}><span className="skew-text">Scorebook</span></button>
            </div>
            <div>
                <button className="mobile-save-button" onClick={this.mobileButtons}>Save</button>
            </div>

        </div>
    )}

}

export default Scorecard
