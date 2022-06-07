import React from 'react';
import '../../../components/Buttons.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleEditBowlingPlayer, toggleMobileButtons } from '../../../actions/Pages';

export default function EditBowlingPlayer() {

  const battingTeam = useSelector(state => state.battingTeam);
  const homeTeam = useSelector(state => state.homeTeam);
  const awayTeam = useSelector(state => state.awayTeam);
  const mobileButtons = useSelector(state => state.mobileButtons);
  const dispatch = useDispatch();

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

  const bowlerAddRun = () => {
    if (battingTeam === false) {
      for (let i = 0; i < awayTeam.length; i++) {
        if (awayTeam[i].edit === "editing") {
          awayTeam[i].bowlingRuns += 1
        }
      }
    } else {
      for (let i = 0; i < homeTeam.length; i++) {
        if (homeTeam[i].edit === "editing") {
          homeTeam[i].bowlingRuns += 1
        }
      }
    }
    dispatch(dispatch(toggleEditBowlingPlayer()))
    dispatch(dispatch(toggleEditBowlingPlayer()))
  }
  const bowlerMinusRun = () => {
    if (battingTeam === false) {
      for (let i = 0; i < awayTeam.length; i++) {
        if (awayTeam[i].edit === "editing") {
          awayTeam[i].bowlingRuns -= 1
        }
      }
    } else {
      for (let i = 0; i < homeTeam.length; i++) {
        if (homeTeam[i].edit === "editing") {
          homeTeam[i].bowlingRuns -= 1
        }
      }
    }
    dispatch(dispatch(toggleEditBowlingPlayer()))
    dispatch(dispatch(toggleEditBowlingPlayer()))
  }
  const bowlerAddBall = () => {
    if (battingTeam === false) {
      for (let i = 0; i < awayTeam.length; i++) {
        if (awayTeam[i].edit === "editing") {
          awayTeam[i].bowlingBalls += 1
          awayTeam[i].oversBowled += 0.1
        }
      }
    } else {
      for (let i = 0; i < homeTeam.length; i++) {
        if (homeTeam[i].edit === "editing") {
          homeTeam[i].bowlingBalls += 1
          homeTeam[i].oversBowled += 0.1
        }
      }
    }
    dispatch(dispatch(toggleEditBowlingPlayer()))
    dispatch(dispatch(toggleEditBowlingPlayer()))
  }
  const bowlerMinusBall = () => {
    if (battingTeam === false) {
      for (let i = 0; i < awayTeam.length; i++) {
        if (awayTeam[i].edit === "editing") {
          awayTeam[i].bowlingBalls -= 1
          awayTeam[i].oversBowled -= 0.1
        }
      }
    } else {
      for (let i = 0; i < homeTeam.length; i++) {
        if (homeTeam[i].edit === "editing") {
          homeTeam[i].bowlingBalls -= 1
          homeTeam[i].oversBowled -= 0.1
        }
      }
    }
    dispatch(dispatch(toggleEditBowlingPlayer()))
    dispatch(dispatch(toggleEditBowlingPlayer()))
  }
  const bowlerAddMaiden = () => {
    if (battingTeam === false) {
      for (let i = 0; i < awayTeam.length; i++) {
        if (awayTeam[i].edit === "editing") {
          awayTeam[i].maidens += 1
        }
      }
    } else {
      for (let i = 0; i < homeTeam.length; i++) {
        if (homeTeam[i].edit === "editing") {
          homeTeam[i].maidens += 1
        }
      }
    }
    dispatch(dispatch(toggleEditBowlingPlayer()))
    dispatch(dispatch(toggleEditBowlingPlayer()))
  }
  const bowlerMinusMaiden = () => {
    if (battingTeam === false) {
      for (let i = 0; i < awayTeam.length; i++) {
        if (awayTeam[i].edit === "editing") {
          awayTeam[i].maidens -= 1
        }
      }
    } else {
      for (let i = 0; i < homeTeam.length; i++) {
        if (homeTeam[i].edit === "editing") {
          homeTeam[i].maidens -= 1
        }
      }
    }
    dispatch(dispatch(toggleEditBowlingPlayer()))
    dispatch(dispatch(toggleEditBowlingPlayer()))
  }
  const bowlerAddWicket = () => {
    if (battingTeam === false) {
      for (let i = 0; i < awayTeam.length; i++) {
        if (awayTeam[i].edit === "editing") {
          awayTeam[i].wickets += 1
        }
      }
    } else {
      for (let i = 0; i < homeTeam.length; i++) {
        if (homeTeam[i].edit === "editing") {
          homeTeam[i].wickets += 1
        }
      }
    }
    dispatch(dispatch(toggleEditBowlingPlayer()))
    dispatch(dispatch(toggleEditBowlingPlayer()))
  }
  const bowlerMinusWicket = () => {
    if (battingTeam === false) {
      for (let i = 0; i < awayTeam.length; i++) {
        if (awayTeam[i].edit === "editing") {
          awayTeam[i].wickets -= 1
        }
      }
    } else {
      for (let i = 0; i < homeTeam.length; i++) {
        if (homeTeam[i].edit === "editing") {
          homeTeam[i].wickets -= 1
        }
      }
    }
    dispatch(dispatch(toggleEditBowlingPlayer()))
    dispatch(dispatch(toggleEditBowlingPlayer()))
  }
  const resetEditStatusBowling = () => {
    for (let i = 0; i < homeTeam.length; i++) {
      if (homeTeam[i].edit === "editing") {
        homeTeam[i].edit = ""
      }
    }
    for (let j = 0; j < awayTeam.length; j++) {
      if (awayTeam[j].edit === "editing") {
        awayTeam[j].edit = ""
      }
    }
  }
  const confirmEditBowling = () => {
    resetEditStatusBowling()
    dispatch(toggleEditBowlingPlayer())
    autoCloseMobileButtons()
  }

  return (
    <div className="bowling-edit-menu">
      {battingTeam === false
        ?
        <div>
          {awayTeam.map(
            person => {
              return (
                <div className='current-player-stats'>
                  <h3>{person.edit === "editing" ? person.name : null}</h3>
                  <p>{person.edit === "editing" ? "Overs: " + person.oversBowled.toFixed(1) : null}</p>
                  <p>{person.edit === "editing" ? "Runs: " + person.bowlingRuns : null}</p>
                  <p>{person.edit === "editing" ? "Maidens: " + person.maidens : null}</p>
                  <p>{person.edit === "editing" ? "Wickets: " + person.wickets : null}</p>
                </div>
              )
            }

          )}
        </div>
        :
        <div>
          {homeTeam.map(
            person => {
              return (
                <div className='current-player-stats'>
                  <h3>{person.edit === "editing" ? person.name : null}</h3>
                  <p>{person.edit === "editing" ? "Overs: " + person.oversBowled.toFixed(1) : null}</p>
                  <p>{person.edit === "editing" ? "Runs: " + person.bowlingRuns : null}</p>
                  <p>{person.edit === "editing" ? "Maidens: " + person.maidens : null}</p>
                  <p>{person.edit === "editing" ? "Wickets: " + person.wickets : null}</p>
                </div>
              )
            }

          )}
        </div>
      }
      <ul className='edit-list'>
        <div className='edit-row'>
          <li><button onClick={bowlerMinusBall}>-</button></li>
          <h4>Balls</h4>
          <li><button onClick={bowlerAddBall}>+</button></li>
        </div>
        <div className='edit-row'>
          <li><button onClick={bowlerMinusRun}>-</button></li>
          <h4>Runs</h4>
          <li><button onClick={bowlerAddRun}>+</button></li>
        </div>
        <div className='edit-row'>
          <li><button  onClick={bowlerMinusMaiden}>-</button></li>
          <h4>Maidens</h4>
          <li><button onClick={bowlerAddMaiden}>+</button></li>
        </div>
        <div className='edit-row'>
          <li><button onClick={bowlerMinusWicket}>-</button></li>
          <h4>Wickets</h4>
          <li><button onClick={bowlerAddWicket}>+</button></li>
        </div>
        <div>
          <li><button className='closeConfirm' onClick={confirmEditBowling}>Confirm</button></li>
        </div>
      </ul>
    </div>
  )
}
