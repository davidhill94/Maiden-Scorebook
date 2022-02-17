import React, { Component } from 'react';
import './TeamNews.css';
import { GiCricketBat } from "react-icons/gi";

class TeamNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editToggle: true,
            editOverlay: true,
            mainScreen: true,
            formatToggle: true
        }
    }

    /* Toggles edit buttons for editing names */
    toggleEditBtn = () => {
        const editBtn = document.querySelectorAll(".player-column button");
        const editText = document.getElementById("edit-toggle");
        if(this.state.editToggle === true) {
        editBtn.forEach(function(elem) {
           elem.classList.add("active")
        })
        editText.innerText = "Close Edit"
           this.setState({
               editToggle: false
           })
        } else {
            editBtn.forEach(function(elem) {
            elem.classList.remove("active")
            })
            editText.innerText = "Edit Players"
           this.setState({
               editToggle: true
           })
        }
        console.log(this.props.homePlayers)
    }

    /* Opens menu to change name */
    toggleEditOverlay = (event) => {
        const editOverlay = document.querySelector(".edit-name-overlay");
        if(this.state.editOverlay === true) {
           editOverlay.classList.add("active")
           this.setState({
               editOverlay: false
           })
        } else {
            editOverlay.classList.remove("active")
           this.setState({
               editOverlay: true
           })
        }
        for(let i = 0; i < this.props.homePlayers.length; i++) {
            if(JSON.stringify(this.props.homePlayers[i].randomID) === event.target.id) {
                const editPlayer = this.props.homePlayers;
                editPlayer[i].edit = "editing";
                this.setState({
                    editPlayer
                })
            }
        }
        for(let j = 0; j < this.props.awayPlayers.length; j++) {
            if(JSON.stringify(this.props.awayPlayers[j].randomID) === event.target.id) {
                const editPlayer = this.props.awayPlayers;
                editPlayer[j].edit = "editing";
                this.setState({
                    editPlayer
                })
            }
        }

        console.log(this.props.homePlayers)
        console.log(this.props.awayPlayers)
    }

    editName = event => {
        const input = document.querySelector(".input-name")
        for(let i = 0; i < this.props.homePlayers.length; i++) {
            if(this.props.homePlayers[i].edit === "editing") {
                const editPlayer = this.props.homePlayers;
                editPlayer[i].name = input.value;
                editPlayer[i].edit = "";
                this.setState({
                    editPlayer
                })
            }
        }
        for(let i = 0; i < this.props.awayPlayers.length; i++) {
            if(this.props.awayPlayers[i].edit === "editing") {
                const editPlayer = this.props.awayPlayers;
                editPlayer[i].name = input.value;
                editPlayer[i].edit = "";
                this.setState({
                    editPlayer
                })
            }
        }
        const editOverlay = document.querySelector(".edit-name-overlay");
        if(this.state.editOverlay === true) {
           editOverlay.classList.add("active")
           this.setState({
               editOverlay: false
           })
        } else {
            editOverlay.classList.remove("active")
           this.setState({
               editOverlay: true
           })
        }
        input.value = "";
        this.props.setBattingName();
    }

    /* Toggles menu for adding home players, away players, and team names */
    addHomePlayerToggle = () => {
        const addPlayerToggle = document.querySelector(".home-team-addPlayers");
        if(this.state.mainScreen === true) {
            addPlayerToggle.classList.add("active")
            this.setState({
                mainScreen: false
            })
        } else {
            addPlayerToggle.classList.remove("active")
            this.setState({
                mainScreen: true
            })
        }
    }
    addAwayPlayerToggle = () => {
        const addPlayerToggle = document.querySelector(".away-team-addPlayers");
        if(this.state.mainScreen === true) {
            addPlayerToggle.classList.add("active")
            this.setState({
                mainScreen: false
            })
        } else {
            addPlayerToggle.classList.remove("active")
            this.setState({
                mainScreen: true
            })
        }
    }
    setTeamNameToggle = () => {
        const setTeamNameToggle = document.querySelector(".change-team-name");
        if(this.state.mainScreen === true) {
            setTeamNameToggle.classList.add("active")
            this.setState({
                mainScreen: false
            })
        } else {
            setTeamNameToggle.classList.remove("active")
            this.setState({
                mainScreen: true
            })
        }
    }

    /* Function handler for setting venue, format, and toss */
    venueFunctions = (event) => {
        this.handleVenue()
        this.setVenueToggle()
    }
    formatFunctions = (event) => {
        this.props.handleFormat(event)
        this.setFormatToggle()
    }
    tossFunctions = (event) => {
        this.props.handleToss(event)
        this.setTossToggle()
    }

    /* Toggles menu for venue, format, toss selection - used in function handlers */
    setVenueToggle = () => {
        const setVenueToggle = document.querySelector(".change-venue");
        if(this.state.editToggle === true) {
            setVenueToggle.classList.add("active")
            this.setState({
                editToggle: false
            })
        } else {
            setVenueToggle.classList.remove("active")
            this.setState({
                editToggle: true
            })
        }
    }
    setFormatToggle = () => {
        const setFormatToggle = document.querySelector(".change-format");
        if(this.state.formatToggle === true) {
            setFormatToggle.classList.add("active")
            this.setState({
                formatToggle: false
            })
        } else {
            setFormatToggle.classList.remove("active")
            this.setState({
                formatToggle: true
            })
        }
    }
    setTossToggle = () => {
        const setTossToggle = document.querySelector(".change-toss");
        if(this.state.editToggle === true) {
            setTossToggle.classList.add("active")
            this.setState({
                editToggle: false
            })
        } else {
            setTossToggle.classList.remove("active")
            this.setState({
                editToggle: true
            })
        }
    }

    closeTeamScreen = () => {
        this.props.handleTeamScreen();
        this.props.updateUI();
    }

    render() {
    return (
        <div>
            <div className="team-news-container">
                {/* Switches back to main screen */}
                <button className="close-screen" onClick={this.closeTeamScreen}><i class="fas fa-times"></i></button>
                {/* Buttons for editing players, adding players, editing match details */}
                <div className="team-news-btns">
                    <div className="mobile-left">
                <button className="edit-team-news-btn" id="edit-toggle" onClick={this.toggleEditBtn}>Edit Players</button>
                <button className="edit-team-news-btn" onClick={this.addHomePlayerToggle}>Add Home Player</button>
                <button className="edit-team-news-btn" onClick={this.addAwayPlayerToggle}>Add Away Player</button>
                <button className="edit-team-news-btn" onClick={this.setTeamNameToggle}>Set Team Names</button>
                </div>
                <div className="mobile-right">
                <button className="edit-team-news-btn-alt" onClick={this.setFormatToggle}>Set Format</button>
                <button className="edit-team-news-btn-alt" onClick={this.setVenueToggle}>Set Venue</button>
                <button className="edit-team-news-btn-alt" onClick={this.setTossToggle}>Set Toss Winner</button>
                <button className="edit-team-news-btn-alt" onClick={this.props.handleBatting}>Change Batting</button>
                </div>
                </div>
                {/* Menu for editing player names */}
                <div className="edit-name-overlay">
                    <input className="input-name"></input>
                    <button onClick={this.editName} id={""}>Confirm</button>
                </div>
            <div className="teams-container">
                {/* Home Team List */}
            <div className="home-team-container">
                <div className="home-team-addPlayers">
                <button className="close-input" onClick={this.addHomePlayerToggle}><i class="fas fa-times"></i></button>
                <button onClick={this.props.handleHomePlayers} 
                className="addPlayerHome">Add</button>
                <input id="inputHome" className="addPlayerHome" type="text"
                placeholder="Add Player"></input>
                </div>
                <div className="home-team-name">
                <h4>{this.props.homeName.length > 0 ? this.props.homeName : "Home Team"}{this.props.isBatting === true ? <GiCricketBat />  : null}</h4>
                </div>
                <ul>
                    {this.props.homePlayers.map(
                        person => {
                            return (
                                <div className="player-column">
                                <li key={person.name}>{person.name}</li>
                                {this.state.editToggle === true ? <button id={person.randomID} key={person.randomID} onClick={this.toggleEditOverlay}>Edit</button> : <button className="active" id={person.randomID} key={person.randomID} onClick={this.toggleEditOverlay}>Edit</button>}
                                </div>
                            )
                        }
                    )}
                </ul> 
            </div>  
            {/* Away Team List */}
            <div className="away-team-container">
                <div className="away-team-addPlayers">
                <button className="close-input"  onClick={this.addAwayPlayerToggle}><i class="fas fa-times"></i></button>
                <button onClick={this.props.handleAwayPlayers} className="addPlayerAway">Add</button>
                <input id="inputAway" className="addPlayerAway" type="text"></input>
                </div>
                <div className="away-team-name">
                <h4>{this.props.awayName.length > 0 ? this.props.awayName : "Away Team"}{this.props.isBatting === false ? <GiCricketBat />  : null}</h4>
                </div>
                <ul>
                    {this.props.awayPlayers.map(
                        person => {
                            return (
                                <div className="player-column">
                                <li key={person.name}>{person.name}</li>
                                {this.state.editToggle === true ? <button id={person.randomID} key={person.randomID} onClick={this.toggleEditOverlay}>Edit</button> : <button className="active" id={person.randomID} key={person.randomID}  onClick={this.toggleEditOverlay}>Edit</button>}
                                </div>
                            )
                        }
                    )}
                </ul>
            </div>
            </div>
            {/* Menu for changing team name */}
            <div className="change-team-name">
                <button className="closeEditBtn" onClick={this.setTeamNameToggle}><i class="fas fa-times"></i></button>
                <input onChange={this.props.handleInputHome} value={this.props.homeName} placeholder="Home Team"></input>
                <input onChange={this.props.handleInputAway} value={this.props.awayName} className="away-team" type="text" placeholder="Away Team"></input>
                <button className="confirm-btn" onClick={this.setTeamNameToggle}>Confirm</button>
            </div>
            {/* Menu for changing venue */}
            <div className="change-venue">
                <button className="closeEditBtn" onClick={this.setVenueToggle}><i class="fas fa-times"></i></button>
                <input onChange={this.props.handleVenue} value={this.props.venue} placeholder="Venue"></input>
                <button className="confirm-btn" onClick={this.setVenueToggle}>Confirm</button>
            </div>
            {/* Menu for changing format */}
            <div className="change-format">
                <button className="closeEditBtn" onClick={this.setFormatToggle}><i class="fas fa-times"></i></button>
                <button onClick={this.formatFunctions} value={"Test Match"}>Test Match</button>
                <button onClick={this.formatFunctions} value={"50 Overs"}>50 Overs</button>
                <button onClick={this.formatFunctions} value={"Twenty20"}>Twenty20</button>
            </div>
            {/* Menu for changing toss */}
            <div className="change-toss">
                <button className="closeEditBtn" onClick={this.setTossToggle}><i class="fas fa-times"></i></button>
                <button onClick={this.tossFunctions} value={this.props.homeName}>{this.props.homeName === "" ? "Home Team" : this.props.homeName}</button>
                <button onClick={this.tossFunctions} value={this.props.awayName}>{this.props.awayName === "" ? "Away Team" : this.props.awayName}</button>
            </div>
        </div>
        </div>
    )
}
}


export default TeamNews
