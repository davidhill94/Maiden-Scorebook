import React, { Component } from 'react';
import './Buttons.css';

class Buttons extends Component {
    
      render() {
    return (
        <div className="buttons-outer-container">
        {/* BUTTON CONTAINER */}
        <div>{
          (this.props.buttonToggle === true

            ?

            <div className="buttons-container">
          <button onClick={this.props.handleButtonToggle}>Edit Buttons</button>
        <button onClick={this.props.noRun}>No Run</button>
          <div className="btn-small">
            <button onClick={this.props.oneRun}>1</button>
            <button onClick={this.props.twoRuns}>2</button>
            <button onClick={this.props.threeRuns}>3</button>
          </div>
          <div className="btn-small">
            <button onClick={this.props.fourRuns}>4</button>
            <button onClick={this.props.sixRuns}>6</button>
          </div>
            <button onClick={this.props.addWide}>Wide</button>
            <button onClick={this.props.addNoBall}>No Ball</button>
          <div className="btn-small">
            <button onClick={this.props.addBye1}>B1</button>
            <button onClick={this.props.addBye2}>B2</button>
          </div>
          <div className="btn-small">
            <button onClick={this.props.addBye3}>B3</button>
            <button onClick={this.props.addBye4}>B4</button>
          </div>
          <div className="btn-small">
            <button onClick={this.props.addLegBye1}>LB1</button>
            <button onClick={this.props.addLegBye2}>LB2</button>
          </div>
          <div className="btn-small">
            <button onClick={this.props.addLegBye3}>LB3</button>
            <button onClick={this.props.addLegBye4}>LB4</button>
          </div>
            <button onClick={this.props.wicketTypeActive}>Wicket</button>
            <button onClick={this.props.changeBatsman}>Change Batsman</button>
        </div>

            :

            <div className="buttons-container-alt">
            <button onClick={this.props.handleButtonToggle}>Home Buttons</button>
          <div className="btn-plus-minus">
          <button onClick={this.props.totalScoreMinus}>-</button>
          <p>Total</p>
          <button onClick={this.props.totalScoreAdd}>+</button>
          </div>
          <div className="btn-plus-minus">
          <button onClick={this.props.batsmanOneMinus}>-</button>
          <p>Runs 1</p>
          <button onClick={this.props.batsmanOneAdd}>+</button>
          </div>
          <div className="btn-plus-minus">
          <button onClick={this.props.batsmanTwoMinus}>-</button>
          <p>Runs 2</p>
          <button onClick={this.props.batsmanTwoAdd}>+</button>
          </div>
          <div className="btn-plus-minus">
          <button onClick={this.props.ballsFacedOneMinus}>-</button>
          <p>Balls 1</p>
          <button onClick={this.props.ballsFacedOneAdd}>+</button>
          </div><div className="btn-plus-minus">
          <button onClick={this.props.ballsFacedTwoMinus}>-</button>
          <p>Balls 2</p>
          <button onClick={this.props.ballsFacedTwoAdd}>+</button>
        </div>
          <div className="btn-plus-minus">
          <button onClick={this.props.wicketsMinus}>-</button>
          <p>Wickets</p>
          <button onClick={this.props.wicketsAdd}>+</button>
          </div>
          <div className="btn-plus-minus">
          <button onClick={this.props.oversMinus}>-</button>
          <p>Overs</p>
          <button onClick={this.props.oversAdd}>+</button>
          </div>
          <button onClick={this.props.lastTenMinus}>Last Ten Minus</button>
          <button onClick={this.props.handleEditExtrasToggle}>{"Edit Extras"}</button>
          <button onClick={this.props.handleEditBattingToggle}>{"Edit Batting"}</button>
          <button onClick={this.props.handleEditBowlingToggle}>{"Edit Bowling"}</button>
          <button onClick={this.props.clearAll}>Clear</button>
        </div>
        )}
        </div>

        {/**** active menu for setting wicket type ****/}
        <div className="wicket-type-container">
                <ul>
                  <li><button onClick={this.props.handleWicket} value={this.props.wicketType[0]}>{this.props.wicketType[0]}</button></li>
                  <li><button onClick={this.props.handleWicket} value={this.props.wicketType[1]}>{this.props.wicketType[1]}</button></li>
                  <li><button onClick={this.props.selectCatcherMenu} value={this.props.wicketType[2]}>{this.props.wicketType[2]}</button></li>
                  <li><button onClick={this.props.handleWicket} value={this.props.wicketType[3]}>{this.props.wicketType[3]}</button></li>
                  <li><button onClick={this.props.selectRunOutMenu} value={this.props.wicketType[4]}>{this.props.wicketType[4]}</button></li>
                  <li><button onClick={this.props.handleWicket} value={this.props.wicketType[5]}>{this.props.wicketType[5]}</button></li>
                </ul>
            </div>
            {/**** active menu for selecting catcher ****/}
            <div className="select-catcher">
            {this.props.isBatting === true
            ?
            <div>
                <ul>
                    {this.props.awayPlayers.map(
                        person => {
                            return (
                                <li key={person.name}><button onClick={this.props.handleWicketCatch} value={person.name}>{person.name}</button></li>
                            )
                        }
                    )}
                </ul>
            </div>
            :
            <div>
                <ul>
                    {this.props.homePlayers.map(
                        person => {
                            return (
                                <li key={person.name}><button onClick={this.props.handleWicketCatch} value={person.name}>{person.name}</button></li>
                            )
                        }
                    )}
                </ul>
            </div>
            }
            
            </div>
            {/**** active menu for selecting run out fielder ****/}
            <div className="select-runOut">
            {this.props.isBatting === true
            ?
            <div>
                <ul>
                    {this.props.awayPlayers.map(
                        person => {
                            return (
                                <li key={person.name}><button onClick={this.props.handleWicketRunOut} value={person.name}>{person.name}</button></li>
                            )
                        }
                    )}
                </ul>
            </div>
            :
            <div>
                <ul>
                    {this.props.homePlayers.map(
                        person => {
                            return (
                                <li key={person.name}><button onClick={this.props.handleWicketRunOut} value={person.name}>{person.name}</button></li>
                            )
                        }
                    )}
                </ul>
            </div>
      }
            </div>
            {/**** Menu for adding runs of run out wicket ****/}
            <div className="runOut-runs">
              <div className="runOut-totals">
                <p>Runs: {this.props.totalRuns}</p>
                <p>Byes: {this.props.byes}</p>
                <p>Leg Byes: {this.props.legByes}</p>
              </div>
              <ul>
                <li><button onClick={this.props.handleRunOutRuns}>Runs +</button></li>
                <li><button onClick={this.props.handleRunOutByes}>Bye +</button></li>
                <li><button onClick={this.props.handleRunOutLegByes}>Leg Bye +</button></li>
                <li><button onClick={this.props.confirmRunOut}>Confirm</button></li>
              </ul>
            </div>

            {/**** Menu for editing extras stats ****/}
            <div className="edit-extras">
              <ul>
            <div className="extras-edit-column">
          <li><button onClick={this.props.extrasTotalMinus}>-</button></li>
          <h4>Extras</h4>
          <li><button onClick={this.props.extrasTotalAdd}>+</button></li>
          </div>
          <div className="extras-edit-column">
          <li><button onClick={this.props.widesMinus}>-</button></li>
          <h4>Wides</h4>
          <li><button onClick={this.props.widesAdd}>+</button></li>
          </div>
          <div className="extras-edit-column">
          <li><button onClick={this.props.noBallsMinus}>-</button></li>
          <h4>No Balls</h4>
          <li><button onClick={this.props.noBallsAdd}>+</button></li>
          </div><div className="extras-edit-column">
          <li><button onClick={this.props.byesMinus}>-</button></li>
          <h4>Byes</h4>
          <li><button onClick={this.props.byesAdd}>+</button></li>
          </div>
          <div className="extras-edit-column">
          <li><button onClick={this.props.legByesMinus}>-</button></li>
          <h4>Leg Byes</h4>
          <li><button onClick={this.props.legByesAdd}>+</button></li>
          </div>
          <div className="extras-edit-column">
          <li><button onClick={this.props.penaltyRunsMinus}>-</button></li>
          <h4>Penalty</h4>
          <li><button onClick={this.props.penaltyRunsAdd}>+</button></li>
          </div>
          <li><button onClick={this.props.handleEditExtrasToggle}>Confirm</button></li>
          </ul>
            </div>

            {/**** Menu for editing batting team stats - Player Select ****/}
            <div className="edit-batting">
            {this.props.isBatting === true
            ?
            <div>
                <ul>
                    {this.props.homePlayers.map(
                        person => {
                            return (
                                <li key={person.name}><button onClick={this.props.selectEditBattingPlayer} value={person.name}>{person.name}</button></li>
                            )
                        }
                    )}
                </ul>
            </div>
            :
            <div>
                <ul>
                    {this.props.awayPlayers.map(
                        person => {
                            return (
                                <li key={person.name}><button onClick={this.props.selectEditBattingPlayer} value={person.name}>{person.name}</button></li>
                            )
                        }
                    )}
                </ul>
            </div>
      }
              <button className="button-confirm-btn" onClick={this.props.handleEditBattingToggle}>Close</button>
            </div>

{/**** Menu for editing batting team stats - Edit Stats ****/}
            <div className="batting-edit-menu">
              {this.props.isBatting === true
              ?
              <div>
            {this.props.homePlayers.map(
                        person => {
                          return(
                            <div className="player-select-details">
                            <h3>{person.edit === "editing" ? person.name : null}</h3>
                            <p>{person.edit === "editing" ? "Runs: " + person.runs : null}</p>
                            <p>{person.edit === "editing" ? "Balls: " + person.balls : null}</p>
                            <p>{person.edit === "editing" ? "Dismissal: " + person.wicketType : null}</p>
                            <p>{person.edit === "editing" ? "Bowler: " + person.wicketTaker : null}</p>
                            </div>
                          )}

            )}
            </div>
            :
            <div>
              {this.props.awayPlayers.map(
                        person => {
                          return(
                            <div className="player-select-details">
                            <h3>{person.edit === "editing" ? person.name : null}</h3>
                            <p>{person.edit === "editing" ? "Runs: " + person.runs : null}</p>
                            <p>{person.edit === "editing" ? "Balls: " + person.balls : null}</p>
                            <p>{person.edit === "editing" ? "Dismissal: " + person.wicketType : null}</p>
                            <p>{person.edit === "editing" ? "Bowler: " + person.wicketTaker : null}</p>
                            </div>
                          )}

            )}
            </div>
      }
             <ul>
               <div className="edit-column">
               <li><button onClick={this.props.batsmanMinusRun}>-</button></li>
               <h4>Runs</h4>
               <li><button onClick={this.props.batsmanAddRun}>+</button></li>
               </div>
               <div className="edit-column">
               <li><button onClick={this.props.batsmanMinusBall}>-</button></li>
               <h4>Balls</h4>
               <li><button onClick={this.props.batsmanAddBall}>+</button></li>
               </div>
               <div className="edit-column-input">
               <h4>Dismissal</h4>
               <input onChange={this.props.handleDismissal} placeholder="Dismissal"></input>
               </div>
               <div className="edit-column-input">
               <h4>Bowler</h4>
               <input onChange={this.props.handleDismissalBowler} placeholder="Bowler"></input>
               </div> 
               <div className="button-confirm-btn">
               <li><button onClick={this.props.confirmEdit}>Confirm</button></li>
               </div>
             </ul>
           </div>
                          
            {/**** Menu for editing bowling team stats - Player Select ****/}
            <div className="edit-bowling">
            {this.props.isBatting === true
            ?
            <div>
                <ul>
                    {this.props.awayPlayers.map(
                        person => {
                            return (
                                <li key={person.name}><button onClick={this.props.selectEditBowlingPlayer} value={person.name}>{person.name}</button></li>
                            )
                        }
                    )}
                </ul>
            </div>
            :
            <div>
                <ul>
                    {this.props.homePlayers.map(
                        person => {
                            return (
                                <li key={person.name}><button onClick={this.props.selectEditBowlingPlayer} value={person.name}>{person.name}</button></li>
                            )
                        }
                    )}
                </ul>
            </div>
      }
              <button className="button-confirm-btn" onClick={this.props.handleEditBowlingToggle}>Close</button>
            </div>

 {/**** Menu for editing bowling team stats - Edit Stats ****/}
           <div className="bowling-edit-menu">
           {this.props.isBatting === true
              ?
              <div>
            {this.props.awayPlayers.map(
                        person => {
                          return(
                            <div className="player-select-details">
                            <h3>{person.edit === "editing" ? person.name : null}</h3>
                            <p>{person.edit === "editing" ? "Overs: " + person.oversBowled.toFixed(1) : null}</p>
                            <p>{person.edit === "editing" ? "Runs: " + person.bowlingRuns : null}</p>
                            <p>{person.edit === "editing" ? "Maidens: " + person.maidens : null}</p>
                            <p>{person.edit === "editing" ? "Wickets: " + person.wickets : null}</p>
                            </div>
                          )}

            )}
            </div>
            :
            <div>
              {this.props.homePlayers.map(
                        person => {
                          return(
                            <div className="player-select-details">
                            <h3>{person.edit === "editing" ? person.name : null}</h3>
                            <p>{person.edit === "editing" ? "Overs: " + person.oversBowled.toFixed(1) : null}</p>
                            <p>{person.edit === "editing" ? "Runs: " + person.bowlingRuns : null}</p>
                            <p>{person.edit === "editing" ? "Maidens: " + person.maidens : null}</p>
                            <p>{person.edit === "editing" ? "Wickets: " + person.wickets : null}</p>
                            </div>
                          )}

            )}
            </div>
      }
             <ul>
               <div className="edit-column">
               <li><button onClick={this.props.bowlerMinusBall}>-</button></li>
               <h4>Balls</h4>
               <li><button onClick={this.props.bowlerAddBall}>+</button></li>
               </div>
               <div className="edit-column">
               <li><button onClick={this.props.bowlerMinusRun}>-</button></li>
               <h4>Runs</h4>
               <li><button onClick={this.props.bowlerAddRun}>+</button></li>
               </div>
               <div className="edit-column">
               <li><button onClick={this.props.bowlerMinusMaiden}>-</button></li>
               <h4>Maidens</h4>
               <li><button onClick={this.props.bowlerAddMaiden}>+</button></li>
               </div>
               <div className="edit-column">
               <li><button onClick={this.props.bowlerMinusWicket}>-</button></li>
               <h4>Wickets</h4>
               <li><button onClick={this.props.bowlerAddWicket}>+</button></li>
               </div>
               <div className="button-confirm-btn">
               <li><button onClick={this.props.confirmEdit}>Confirm</button></li>
               </div>
             </ul>
           </div>
        
        </div>
        
    )}
}

export default Buttons
