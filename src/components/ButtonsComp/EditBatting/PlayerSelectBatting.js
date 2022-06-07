import React from 'react';
import '../../../components/Buttons.css';
import { useSelector, useDispatch } from 'react-redux';
import { handleEditBattingToggle, toggleEditBattingPlayer } from '../../../actions/Pages';

export default function PlayerSelectBatting() {
    const battingTeam = useSelector(state => state.battingTeam);
    const homeTeam = useSelector(state => state.homeTeam);
    const awayTeam = useSelector(state => state.awayTeam);
    const dispatch = useDispatch();

    const selectEditBattingPlayer = (event) => {
        if(battingTeam === false) {
          for(let i = 0; i < homeTeam.length; i++) {
            if(homeTeam[i].name === event.target.value) {
                homeTeam[i].edit = "editing"
            }
          }
        } else {
          for(let i = 0; i < awayTeam.length; i++) {
            if(awayTeam[i].name === event.target.value) {
                awayTeam[i].edit = "editing"
            }
          }
        }
      }


    const handlePlayerSelect = (event) => {
        selectEditBattingPlayer(event)
        dispatch(toggleEditBattingPlayer())
        dispatch(handleEditBattingToggle())
    }
  return (
    <div className="edit-batting">
            {battingTeam === false
            ?
            <div className='player-list'>
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
            :
            <div>
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
      }
              <button className='closeConfirm' onClick={() => dispatch(handleEditBattingToggle())}>Close</button>
            </div>
  )
}
