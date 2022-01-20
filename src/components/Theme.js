import React, { Component } from 'react'
import './Theme.css';

class Theme extends Component {

        setTheme = themeName => {
            document.documentElement.className = themeName;
        }

    render() {
        return (
            <div className="theme-container">
                <ul>
                    <div className="theme-button-column">
                    <li><button className="theme-item" onClick={() => {this.props.toggleThemeMenu(); this.setTheme(""); this.props.setThemeState("standard")}}>Standard</button></li>
                    <li><button className="theme-item" onClick={() => {this.props.toggleThemeMenu(); this.setTheme("australia"); this.props.setThemeState("australia")}}>Australia</button></li>
                    <li><button className="theme-item" onClick={() => {this.props.toggleThemeMenu(); this.setTheme("bangladesh"); this.props.setThemeState("bangladesh")}}>Bangladesh</button></li>
                    <li><button className="theme-item" onClick={() => {this.props.toggleThemeMenu(); this.setTheme("england"); this.props.setThemeState("england")}}>England</button></li>
                    <li><button className="theme-item" onClick={() => {this.props.toggleThemeMenu(); this.setTheme("india"); this.props.setThemeState("india")}}>India</button></li>
                    <li><button className="theme-item" onClick={() => {this.props.toggleThemeMenu(); this.setTheme("ireland"); this.props.setThemeState("ireland")}}>Ireland</button></li>
                    </div>
                    <div className="theme-button-column">
                    <li><button className="theme-item" onClick={() => {this.props.toggleThemeMenu(); this.setTheme("new-zealand"); this.props.setThemeState("new-zealand")}}>New Zealand</button></li>
                    <li><button className="theme-item" onClick={() => {this.props.toggleThemeMenu(); this.setTheme("pakistan"); this.props.setThemeState("pakistan")}}>Pakistan</button></li>
                    <li><button className="theme-item" onClick={() => {this.props.toggleThemeMenu(); this.setTheme("south-africa"); this.props.setThemeState("south-africa")}}>South Africa</button></li>
                    <li><button className="theme-item" onClick={() => {this.props.toggleThemeMenu(); this.setTheme("sri-lanka"); this.props.setThemeState("sri-lanka")}}>Sri Lanka</button></li>
                    <li><button className="theme-item" onClick={() => {this.props.toggleThemeMenu(); this.setTheme("west-indies"); this.props.setThemeState("west-indies")}}>West Indies</button></li>
                    <li><button className="theme-item" onClick={() => {this.props.toggleThemeMenu(); this.setTheme("zimbabwe"); this.props.setThemeState("zimbabwe")}}>Zimbabwe</button></li>
                    </div>
                    </ul>
                    <div>
                    <button className="close-theme" onClick={this.props.toggleThemeMenu}><i class="fas fa-times"></i></button>
                    </div>
            </div>
        )
    }
}


export default Theme
