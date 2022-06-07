import React from 'react'
import { useDispatch } from 'react-redux';
import { toggleThemeScreen } from '../actions/Pages';
import { setTheme } from '../actions/Theme';
import './Theme.css';

export default function Theme() {

    const dispatch = useDispatch();

     //Sets theme to new 
     const setThemeState = (themeName) => {
        dispatch(setTheme(themeName))
     }

    const changeTheme = themeName => {
        document.documentElement.className = themeName;
    }

        return (
            <div className="theme-container">
                <ul>
                    <div className="theme-button-column">
                    <li><button className="theme-item" onClick={() => {dispatch(toggleThemeScreen()); setThemeState(""); changeTheme("standard")}}>Standard</button></li>
                    <li><button className="theme-item" onClick={() => {dispatch(toggleThemeScreen()); setThemeState("australia"); changeTheme("australia")}}>Australia</button></li>
                    <li><button className="theme-item" onClick={() => {dispatch(toggleThemeScreen()); setThemeState("bangladesh"); changeTheme("bangladesh")}}>Bangladesh</button></li>
                    <li><button className="theme-item" onClick={() => {dispatch(toggleThemeScreen()); setThemeState("england"); changeTheme("england")}}>England</button></li>
                    <li><button className="theme-item" onClick={() => {dispatch(toggleThemeScreen()); setThemeState("india"); changeTheme("india")}}>India</button></li>
                    <li><button className="theme-item" onClick={() => {dispatch(toggleThemeScreen()); setThemeState("ireland"); changeTheme("ireland")}}>Ireland</button></li>
                    </div>
                    <div className="theme-button-column">
                    <li><button className="theme-item" onClick={() => {dispatch(toggleThemeScreen()); setThemeState("new-zealand"); changeTheme("new-zealand")}}>New Zealand</button></li>
                    <li><button className="theme-item" onClick={() => {dispatch(toggleThemeScreen()); setThemeState("pakistan"); changeTheme("pakistan")}}>Pakistan</button></li>
                    <li><button className="theme-item" onClick={() => {dispatch(toggleThemeScreen()); setThemeState("south-africa"); changeTheme("south-africa")}}>South Africa</button></li>
                    <li><button className="theme-item" onClick={() => {dispatch(toggleThemeScreen()); setThemeState("sri-lanka"); changeTheme("sri-lanka")}}>Sri Lanka</button></li>
                    <li><button className="theme-item" onClick={() => {dispatch(toggleThemeScreen()); setThemeState("west-indies"); changeTheme("west-indies")}}>West Indies</button></li>
                    <li><button className="theme-item" onClick={() => {dispatch(toggleThemeScreen()); setThemeState("zimbabwe"); changeTheme("zimbabwe")}}>Zimbabwe</button></li>
                    </div>
                    </ul>
                    <div>
                    <button className="close-theme" onClick={() => dispatch(toggleThemeScreen())}><i class="fas fa-times"></i></button>
                    </div>
            </div>
        )
    }
