import React from 'react';
import '../../../components/Buttons.css';
import { useSelector, useDispatch } from 'react-redux';
import { handleEditBowlingToggle, toggleEditBowlingPlayer } from '../../../actions/Pages';

export default function PlayerSelectBowling() {
    const awayTeam = useSelector(state => state.awayTeam);
    const homeTeam = useSelector(state => state.homeTeam);
    const battingTeam = useSelector(state => state.battingTeam);
    const dispatch = useDispatch();

    const selectEditBowlingPlayer = (event) => {
        if(battingTeam === false) {
          for(let i = 0; i < awayTeam.length; i++) {
            if(awayTeam[i].name === event.target.value) {
                awayTeam[i].edit = "editing"
            }
          }
        } else {
          for(let i = 0; i < homeTeam.length; i++) {
            if(homeTeam[i].name === event.target.value) {
              homeTeam[i].edit = "editing"
            }
          }
        }
      }
    const handlePlayerSelect = (event) => {
        selectEditBowlingPlayer(event)
        dispatch(toggleEditBowlingPlayer())
        dispatch(handleEditBowlingToggle())
    }

    return (
      <div className="edit-bowling">
              {battingTeam === false
              ?
              <div className='player-list'>
                  <ul>
                      {awayTeam.map(
                          person => {
                              return (
                                  <li key={person.name}><button onClick={(event) => handlePlayerSelect(event)} value={person.name}>{person.name}</button></li>
                              )
                          }
                      )}
                  </ul>
              </div>
              :
              <div>
                  <ul>
                      {homeTeam.map(
                          person => {
                              return (
                                  <li key={person.name}><button onClick={(event) => handlePlayerSelect(event)} value={person.name}>{person.name}</button></li>
                              )
                          }
                      )}
                  </ul>
              </div>
        }
                <button className='closeConfirm' onClick={() => dispatch(handleEditBowlingToggle())}>Close</button>
              </div>
    )
}
