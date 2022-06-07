import React from 'react';
import { switchBatsman } from '../actions/Batting';
import { useDispatch, useSelector } from 'react-redux';
import './Buttons.css';
import Extras from './ButtonsComp/Extras';
import Runs from './ButtonsComp/Runs';
import Wickets from './ButtonsComp/Wickets';
import { toggleButtonsPage, toggleMobileButtons } from '../actions/Pages';
import EditButtons from './ButtonsComp/EditButtons';
import PlayerSelectBatting from './ButtonsComp/EditBatting/PlayerSelectBatting';
import EditBattingPlayer from './ButtonsComp/EditBatting/EditBattingPlayer';
import EditBowlingPlayer from './ButtonsComp/EditBowling/EditBowlingPlayer';
import PlayerSelectBowling from './ButtonsComp/EditBowling/PlayerSelectBowling';
import EditExtras from './ButtonsComp/EditExtras/EditExtras';

export default function Buttons() {

  const dispatch = useDispatch();
  const buttonToggle = useSelector(state => state.buttonToggle);
  const editBattingPlayer = useSelector(state => state.editBattingPlayer);
  const editBattingToggle = useSelector(state => state.editBattingToggle);
  const editBowlingPlayer = useSelector(state => state.editBowlingPlayer);
  const editBowlingToggle = useSelector(state => state.editBowlingToggle);
  const editExtrasToggle = useSelector(state => state.editExtrasToggle);
  const mobileButtons = useSelector(state => state.mobileButtons);

   //Closes buttons page on mobile
   const handleMobileButtons = () => {
    const buttons = document.querySelector(".buttons-outer-container")
    if(mobileButtons === false) {
        buttons.classList.add("mobile");
        dispatch(toggleMobileButtons())
    } else {
        buttons.classList.remove("mobile");
        dispatch(toggleMobileButtons())
    }
}

const autoCloseMobileButtons = () => {
  if(window.innerWidth <= 768){
      handleMobileButtons()
  }
}

  //Handles batsman Switch
  const handleBatsmanSwitch = () => {
    autoCloseMobileButtons();
    dispatch(switchBatsman())
  }

  return (
    <div className="buttons-outer-container">
      {/* BUTTON CONTAINER */}
      <div>{
        (buttonToggle === false

          ?

          <div className="buttons-container">
            <button className='btn' onClick={() => dispatch(toggleButtonsPage())}>Edit Buttons</button>
            <Runs />
            <Extras />
            <Wickets />
            <button className='btn' onClick={handleBatsmanSwitch}>Change Batsman</button>
            {window.innerWidth <= 768 
            ?
            <button className='btn' onClick={handleMobileButtons}>Close</button>
            :
            null
          }
          </div>

          :

          <div className="buttons-container-alt">
            <button className='btn' onClick={() => dispatch(toggleButtonsPage())}>Home Buttons</button>
            <EditButtons />
          </div>
        )}
      </div>

      {/**** Menu for editing batting team stats - Player Select ****/}
      {editBattingToggle === true ?
        <PlayerSelectBatting />
        :
        null
      }

      {/**** Menu for editing batting team stats - Edit Stats ****/}
      {editBattingPlayer === true ?
        <EditBattingPlayer />
        :
        null
      }


      {/**** Menu for editing bowling team stats - Player Select ****/}
      {editBowlingToggle === true ?
        <PlayerSelectBowling />
        :
        null
      }

      {/**** Menu for editing bowling team stats - Edit Stats ****/}
      {editBowlingPlayer === true ?
        <EditBowlingPlayer />
        :
        null
      }

      {/**** Menu for editing extras ****/}
      {editExtrasToggle === true ?
        <EditExtras />
        :
        null
      }

    </div>

  )
}


