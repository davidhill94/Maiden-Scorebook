import React, { Component } from 'react';
import './Header.css';
import { GiCricketBat } from "react-icons/gi";
import Theme from './Theme';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            themeToggle: true,
            theme: "standard"
        }
    }

    toggleThemeMenu = () => {
        const changeTheme = document.querySelector(".theme-container");
        if(this.state.themeToggle === true) {
            changeTheme.classList.add("active")
            this.setState({
                themeToggle: false
            })
        } else {
            changeTheme.classList.remove("active")
            this.setState({
                themeToggle: true
            })
        }
    }

    setThemeState = (themeName) => {
        this.setState({
            theme: themeName
        })
        console.log(this.state.theme)
        console.log(themeName)
    }

    render() {
    return (
        <div>
            <Theme 
            toggleThemeMenu={this.toggleThemeMenu}
            themeToggle={this.state.themeToggle}
            theme={this.state.theme}
            setThemeState={this.setThemeState}
            />
        <div className="header-container">
            {/* Logo container */}
            <div className="logo">
                <img src="/Images/maiden-scorebook-logo.png" alt="logo"></img>
            </div>
            {/* Theme button for mobile */}
            <div className="theme-mobile">
                <button onClick={this.toggleThemeMenu}><i class="fas fa-tint"></i></button>
            </div>
            <div className="match-details">
                <div className="team-details">
                <div className="team-info">
                <p className="batting-icon">{this.props.isBatting === true ? <GiCricketBat />  : null}</p>
                <h4>{this.props.homeName.length > 0 ? this.props.homeName : "Home Team"}</h4>
                </div>
                <div className="versus">
                <p>vs.</p>
                </div>
                <div className="team-info">
                <h4>{this.props.awayName.length > 0 ? this.props.awayName : "Away Team"}</h4>
                <p className="batting-icon">{this.props.isBatting === false ? <GiCricketBat />  : null}</p>
                </div>
                </div>
                <div className="other-details">
                <div className="format">
                    <p>Format: </p>
                    <p>{this.props.format}</p>
                </div>
                <div className="venue">
                    <p>Venue: </p>
                    <p>{this.props.venue}</p>
                </div>
                <div className="toss-winner">
                    <p>Toss won by: </p>
                    <p>{this.props.toss}</p>
                </div>
                </div>
            </div>
            <div className="header-buttons">
                <button className="header-btn" onClick={this.props.handleTeamScreen}>Team News</button>
                <button className="header-btn" onClick={this.toggleThemeMenu}>Theme</button>
                <button className="header-btn" id="scorebook-btn" onClick={this.props.changeScreen}>Scorebook</button>
            </div>
        </div>
        </div>
    )}
}

export default Header
