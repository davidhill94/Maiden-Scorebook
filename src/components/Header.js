import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Header.css';
import { GiCricketBat } from "react-icons/gi";
import { toggleScorebookScreen, toggleTeamNewsScreen, toggleThemeScreen } from '../actions/Pages';


export default function Header() {

    const dispatch = useDispatch();
    const battingTeam = useSelector(state => state.battingTeam);
    const homeTeamName = useSelector(state => state.homeTeamName);
    const awayTeamName = useSelector(state => state.awayTeamName);
    const format = useSelector(state => state.format);
    const venue = useSelector(state => state.venue);
    const toss = useSelector(state => state.toss);
    const themeScreen = useSelector(state => state.themeScreen);
    const teamNewsScreen = useSelector(state => state.teamNewsScreen);
    const scorebookScreen = useSelector(state => state.scorebookScreen);

    const handleScorebookScreen = () => {
        dispatch(toggleScorebookScreen())
        if(themeScreen === true){
            dispatch(toggleThemeScreen())
        }
        if(teamNewsScreen === true){
            dispatch(toggleTeamNewsScreen())
        }
    }
    const handleTeamNewsScreen = () => {
        dispatch(toggleTeamNewsScreen())
        if(themeScreen === true){
            dispatch(toggleThemeScreen())
        }
        if(scorebookScreen === true){
            dispatch(toggleScorebookScreen())
        }
    }
    const handleThemeScreen = () => {
        dispatch(toggleThemeScreen())
        if(teamNewsScreen === true){
            dispatch(toggleTeamNewsScreen())
        }
        if(scorebookScreen === true){
            dispatch(toggleScorebookScreen())
        }
    }

    return (
        <div>
        <div className="header-container">
            {/* Logo container */}
            <div className="logo">
                <img src="/Images/maiden-scorebook-logo.png" alt="logo"></img>
            </div>
            {/* Theme button for mobile */}
            <div className="theme-mobile">
                <button onClick={() => dispatch(toggleThemeScreen())}><i class="fas fa-tint"></i></button>
            </div>
            <div className="match-details">
                <div className="team-details">
                <div className="team-info">
                <p className="batting-icon">{battingTeam === false ? <GiCricketBat />  : null}</p>
                <h4>{homeTeamName.length > 0 ? homeTeamName : "Home Team"}</h4>
                </div>
                <div className="versus">
                <p>vs.</p>
                </div>
                <div className="team-info">
                <h4>{awayTeamName.length > 0 ? awayTeamName : "Away Team"}</h4>
                <p className="batting-icon">{battingTeam === true ? <GiCricketBat />  : null}</p>
                </div>
                </div>
                <div className="other-details">
                <div className="format">
                    <p>Format: </p>
                    <p>{format}</p>
                </div>
                <div className="venue">
                    <p>Venue: </p>
                    <p>{venue}</p>
                </div>
                <div className="toss-winner">
                    <p>Toss won by: </p>
                    <p>{toss}</p>
                </div>
                </div>
            </div>
            <div className="header-buttons">
                <button className="header-btn" onClick={handleTeamNewsScreen}>Team News</button>
                <button className="header-btn" onClick={handleThemeScreen}>Theme</button>
                <button className="header-btn" id="scorebook-btn" onClick={handleScorebookScreen}>Scorebook</button>
            </div>
        </div>
        </div>
    )}

