import React from 'react';
import './TeamNews.css';
import { useDispatch, useSelector } from 'react-redux';
import { GiCricketBat } from "react-icons/gi";
import { toggleEditButton, toggleEditOverlay, toggleFormat, toggleTeamNewsScreen, toggleTeamScreen, toggleToss, toggleVenue } from '../actions/Pages';
import { changeBattingTeam, setBatsmanOneName, setBatsmanTwoName } from '../actions/Batting';
import { setFormat, setToss, setVenue } from '../actions/Match';
import { setAwayTeamName, setHomeTeamName } from '../actions/Team';

export default function TeamNews() {

    const dispatch = useDispatch();
    const editToggle = useSelector(state => state.editToggle);
    const editOverlay = useSelector(state => state.editOverlay);
    const formatToggle = useSelector(state => state.formatToggle);
    const venueToggle = useSelector(state => state.venueToggle);
    const tossToggle = useSelector(state => state.tossToggle);
    const battingTeam = useSelector(state => state.battingTeam);
    const homeTeam = useSelector(state => state.homeTeam);
    const awayTeam = useSelector(state => state.awayTeam);
    const teamScreen = useSelector(state => state.teamScreen);
    const homeTeamName = useSelector(state => state.homeTeamName);
    const awayTeamName = useSelector(state => state.awayTeamName);
    const venue = useSelector(state => state.venue);

    const setBattingName = () => {
        if(battingTeam === false) {
          for (let i = 0; i < homeTeam.length; i++) {
                  if(homeTeam[i].status === "batting1") {
                      dispatch(setBatsmanOneName(homeTeam[i].name))
                  }
                  if(homeTeam[i].status === "batting2") {
                    dispatch(setBatsmanTwoName(homeTeam[i].name))
              }
          }
        } else {
          for (let i = 0; i < awayTeam.length; i++) {
          if(awayTeam[i].status === "batting1") {
            dispatch(setBatsmanOneName(awayTeam[i].name))
          }
          if(awayTeam[i].status === "batting2") {
            dispatch(setBatsmanTwoName(awayTeam[i].name))
          }
    }
  } 
    }

    /* Toggles edit buttons for editing names */
    const toggleEditBtn = () => {
        const editBtn = document.querySelectorAll(".player-column button");
        const editText = document.getElementById("edit-toggle");
        if(editToggle === true) {
        editBtn.forEach(function(elem) {
           elem.classList.add("active")
        })
        editText.innerText = "Edit Players"
           dispatch(toggleEditButton());
        } else {
            editBtn.forEach(function(elem) {
            elem.classList.remove("active")
            })
            editText.innerText = "Close Edit"
            dispatch(toggleEditButton());
        }
    }

    /* Opens menu to change name */
    const handleEditOverlay = (event) => {
        const overlay = document.querySelector(".edit-name-overlay");
        if(editOverlay === false) {
           overlay.classList.add("active")
           dispatch(toggleEditOverlay())
        } else {
            editOverlay.classList.remove("active")
            dispatch(toggleEditOverlay())
        }
        for(let i = 0; i < homeTeam.length; i++) {
            if(JSON.stringify(homeTeam[i].randomID) === event.target.id) {
                homeTeam[i].edit = "editing";
            }
        }
        for(let j = 0; j < awayTeam.length; j++) {
            if(JSON.stringify(awayTeam[j].randomID) === event.target.id) {
                awayTeam[j].edit = "editing";
            }
        }
    }

    const editName = event => {
        const input = document.querySelector(".input-name")
        for(let i = 0; i < homeTeam.length; i++) {
            if(homeTeam[i].edit === "editing") {
                homeTeam[i].name = input.value;
                homeTeam[i].edit = "";
            }
        }
        for(let i = 0; i < awayTeam.length; i++) {
            if(awayTeam[i].edit === "editing") {
                awayTeam[i].name = input.value;
                awayTeam[i].edit = "";
            }
        }
        const editOverlay = document.querySelector(".edit-name-overlay");
        if(editOverlay === true) {
           editOverlay.classList.add("active")
           dispatch(toggleEditOverlay())
        } else {
            editOverlay.classList.remove("active")
            dispatch(toggleEditOverlay())
        }
        input.value = "";
        setBattingName();
    }

    /* Toggles menu for adding  team names */
    const setTeamNameToggle = () => {
        const setTeamNameToggle = document.querySelector(".change-team-name");
        if(teamScreen === false) {
            setTeamNameToggle.classList.add("active")
            dispatch(toggleTeamScreen())
        } else {
            setTeamNameToggle.classList.remove("active")
            dispatch(toggleTeamScreen())
        }
    }
    /* Function handler for setting format, and toss */
    const formatFunctions = (event) => {
        dispatch(setFormat(event.target.value))
        setFormatToggle()
    }
    const tossFunctions = (event) => {
        dispatch(setToss(event.target.value))
        setTossToggle()
    }

    /* Toggles menu for venue, format, toss selection - used in function handlers */
    const setVenueToggle = () => {
        const setVenueToggle = document.querySelector(".change-venue");
        if(venueToggle === false) {
            setVenueToggle.classList.add("active")
            dispatch(toggleVenue())
        } else {
            setVenueToggle.classList.remove("active")
            dispatch(toggleVenue())
        }
    }
    const setFormatToggle = () => {
        const setFormatToggle = document.querySelector(".change-format");
        if(formatToggle === false) {
            setFormatToggle.classList.add("active")
            dispatch(toggleFormat())
        } else {
            setFormatToggle.classList.remove("active")
            dispatch(toggleFormat())
        }
    }
    const setTossToggle = () => {
        const setTossToggle = document.querySelector(".change-toss");
        if(tossToggle === false) {
            setTossToggle.classList.add("active")
            dispatch(toggleToss())
        } else {
            setTossToggle.classList.remove("active")
            dispatch(toggleToss())
        }
    }

    const handleChangeBatting = () => {
        dispatch(changeBattingTeam())
        setBattingName();
    }

    return (
        <div>
            <div className="team-news-container">
                {/* Switches back to main screen */}
                <button className="close-screen" onClick={() => {dispatch(toggleTeamNewsScreen()); setBattingName()}}><i class="fas fa-times"></i></button>
                {/* Buttons for editing players, adding players, editing match details */}
                <div className='team-news-inner-container'>
                <div className="team-news-btns">
                    <div className="mobile-left">
                <button className="edit-team-news-btn" id="edit-toggle" onClick={toggleEditBtn}>Edit Players</button>
                <button className="edit-team-news-btn" onClick={setTeamNameToggle}>Set Team Names</button>
                <button className="edit-team-news-btn" onClick={handleChangeBatting}>Change Batting</button>
                </div>
                <div className="mobile-right">
                <button className="edit-team-news-btn-alt" onClick={setFormatToggle}>Set Format</button>
                <button className="edit-team-news-btn-alt" onClick={setVenueToggle}>Set Venue</button>
                <button className="edit-team-news-btn-alt" onClick={setTossToggle}>Set Toss Winner</button>
                </div>
                </div>
                {/* Menu for editing player names */}
                <div className="edit-name-overlay">
                    <input className="input-name"></input>
                    <button onClick={editName} id={""}>Confirm</button>
                </div>
            <div className="teams-container">
                {/* Home Team List */}
            <div className="home-team-container">
                <div className="home-team-name">
                <h4>{homeTeamName.length > 0 ? homeTeamName : "Home Team"}{battingTeam === false ? <GiCricketBat className='batting-icon'/>  : null}</h4>
                </div>
                <ul>
                    {homeTeam.map(
                        person => {
                            return (
                                <div className="player-column">
                                <li key={person.name}>{person.name}</li>
                                {editToggle === false ? <button id={person.randomID} key={person.randomID} onClick={handleEditOverlay}>Edit</button> : <button className="active" id={person.randomID} key={person.randomID} onClick={handleEditOverlay}>Edit</button>}
                                </div>
                            )
                        }
                    )}
                </ul> 
            </div>  
            {/* Away Team List */}
            <div className="away-team-container">
                <div className="away-team-name">
                <h4>{awayTeamName.length > 0 ? awayTeamName : "Away Team"}{battingTeam === true ? <GiCricketBat className='batting-icon' />  : null}</h4>
                </div>
                <ul>
                    {awayTeam.map(
                        person => {
                            return (
                                <div className="player-column">
                                <li key={person.name}>{person.name}</li>
                                {editToggle === false ? <button id={person.randomID} key={person.randomID} onClick={handleEditOverlay}>Edit</button> : <button className="active" id={person.randomID} key={person.randomID}  onClick={handleEditOverlay}>Edit</button>}
                                </div>
                            )
                        }
                    )}
                </ul>
            </div>
            </div>
            </div>
            {/* Menu for changing team name */}
            <div className="change-team-name">
                <button className="closeEditBtn" onClick={setTeamNameToggle}><i class="fas fa-times"></i></button>
                <input onChange={(event) => dispatch(setHomeTeamName(event.target.value))} value={homeTeamName} placeholder="Home Team"></input>
                <input onChange={(event) => dispatch(setAwayTeamName(event.target.value))} value={awayTeamName} className="away-team" type="text" placeholder="Away Team"></input>
                <button className="confirm-btn" onClick={setTeamNameToggle}>Confirm</button>
            </div>
            {/* Menu for changing venue */}
            <div className="change-venue">
                <button className="closeEditBtn" onClick={setVenueToggle}><i class="fas fa-times"></i></button>
                <input onChange={(event) => dispatch(setVenue(event.target.value))} value={venue} placeholder="Venue"></input>
                <button className="confirm-btn" onClick={setVenueToggle}>Confirm</button>
            </div>
            {/* Menu for changing format */}
            <div className="change-format">
                <button className="closeEditBtn" onClick={setFormatToggle}><i class="fas fa-times"></i></button>
                <button onClick={formatFunctions} value={"Test Match"}>Test Match</button>
                <button onClick={formatFunctions} value={"50 Overs"}>50 Overs</button>
                <button onClick={formatFunctions} value={"Twenty20"}>Twenty20</button>
            </div>
            {/* Menu for changing toss */}
            <div className="change-toss">
                <button className="closeEditBtn" onClick={setTossToggle}><i class="fas fa-times"></i></button>
                <button onClick={tossFunctions} value={homeTeamName}>{homeTeamName === "" ? "Home Team" : homeTeamName}</button>
                <button onClick={tossFunctions} value={awayTeamName}>{awayTeamName === "" ? "Away Team" : awayTeamName}</button>
            </div>
        </div>
        </div>
    )
}
