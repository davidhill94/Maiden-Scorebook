import React from 'react';
import '../../../components/Buttons.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleEditBattingPlayer, toggleMobileButtons } from '../../../actions/Pages';

export default function EditBattingPlayer() {
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

  const batsmanAddRun = () => {
    if (battingTeam === false) {
      for (let i = 0; i < homeTeam.length; i++) {
        if (homeTeam[i].edit === "editing") {
          homeTeam[i].runs += 1
        }
      }
    } else {
      for (let i = 0; i < awayTeam.length; i++) {
        if (awayTeam[i].edit === "editing") {
          awayTeam[i].runs += 1
        }
      }
    }
    dispatch(dispatch(toggleEditBattingPlayer()))
    dispatch(dispatch(toggleEditBattingPlayer()))
  }
  
  const batsmanMinusRun = () => {
    if (battingTeam === false) {
      for (let i = 0; i < homeTeam.length; i++) {
        if (homeTeam[i].edit === "editing") {
          homeTeam[i].runs -= 1
        }
      }
    } else {
      for (let i = 0; i < awayTeam.length; i++) {
        if (awayTeam[i].edit === "editing") {
          awayTeam[i].runs -= 1
        }
      }
    }
    dispatch(dispatch(toggleEditBattingPlayer()))
    dispatch(dispatch(toggleEditBattingPlayer()))
  }
  const batsmanAddBall = () => {
    if (battingTeam === false) {
      for (let i = 0; i < homeTeam.length; i++) {
        if (homeTeam[i].edit === "editing") {
          homeTeam[i].balls += 1
        }
      }
    } else {
      for (let i = 0; i < awayTeam.length; i++) {
        if (awayTeam[i].edit === "editing") {
          awayTeam[i].balls += 1
        }
      }
    }
    dispatch(dispatch(toggleEditBattingPlayer()))
    dispatch(dispatch(toggleEditBattingPlayer()))
  }
  const batsmanMinusBall = () => {
    if (battingTeam === false) {
      for (let i = 0; i < homeTeam.length; i++) {
        if (homeTeam[i].edit === "editing") {
          homeTeam[i].balls -= 1
        }
      }
    } else {
      for (let i = 0; i < awayTeam.length; i++) {
        if (awayTeam[i].edit === "editing") {
          awayTeam[i].balls -= 1
        }
      }
    }
    dispatch(dispatch(toggleEditBattingPlayer()))
    dispatch(dispatch(toggleEditBattingPlayer()))
  }
  const handleDismissal = event => {
    if (battingTeam === false) {
      for (let i = 0; i < homeTeam.length; i++) {
        if (homeTeam[i].edit === "editing") {
          homeTeam[i].wicketType = event.target.value
          homeTeam[i].status = "out"
        }
      }
    } else {
      for (let i = 0; i < awayTeam.length; i++) {
        if (awayTeam[i].edit === "editing") {
          awayTeam[i].wicketType = event.target.value
          awayTeam[i].status = "out"
        }
      }
    }
    dispatch(dispatch(toggleEditBattingPlayer()))
    dispatch(dispatch(toggleEditBattingPlayer()))
  };
  const handleDismissalBowler = event => {
    if (battingTeam === false) {
      for (let i = 0; i < homeTeam.length; i++) {
        if (homeTeam[i].edit === "editing") {
          homeTeam[i].wicketTaker = event.target.value
          homeTeam[i].status = "out"
        }
      }
    } else {
      for (let i = 0; i < awayTeam.length; i++) {
        if (awayTeam[i].edit === "editing") {
          awayTeam[i].wicketTaker = event.target.value
          awayTeam[i].status = "out"
        }
      }
    }
    dispatch(dispatch(toggleEditBattingPlayer()))
    dispatch(dispatch(toggleEditBattingPlayer()))
  };
  const resetEditStatusBatting = () => {
    for(let i = 0; i < homeTeam.length; i++) {
      if(homeTeam[i].edit === "editing") {
        homeTeam[i].edit = ""
      }
    }
    for(let j = 0; j < awayTeam.length; j++) {
      if(awayTeam[j].edit === "editing") {
        awayTeam[j].edit = ""
      }
    }
  }
  const confirmEditBatting = () => {
    resetEditStatusBatting()
    dispatch(toggleEditBattingPlayer())
    autoCloseMobileButtons()
  }


  return (
    <div className="batting-edit-menu">
      {battingTeam === false
        ?
        <div>
          {homeTeam.map(
            person => {
              return (
                <div className='current-player-stats'>
                  <h3>{person.edit === "editing" ? person.name : null}</h3>
                  <p>{person.edit === "editing" ? "Runs: " + person.runs : null}</p>
                  <p>{person.edit === "editing" ? "Balls: " + person.balls : null}</p>
                  <p>{person.edit === "editing" ? "Dismissal: " + person.wicketType : null}</p>
                  <p>{person.edit === "editing" ? "Bowler: " + person.wicketTaker : null}</p>
                </div>
              )
            }

          )}
        </div>
        :
        <div>
          {awayTeam.map(
            person => {
              return (
                <div className='current-player-stats'>
                  <h3>{person.edit === "editing" ? person.name : null}</h3>
                  <p>{person.edit === "editing" ? "Runs: " + person.runs : null}</p>
                  <p>{person.edit === "editing" ? "Balls: " + person.balls : null}</p>
                  <p>{person.edit === "editing" ? "Dismissal: " + person.wicketType : null}</p>
                  <p>{person.edit === "editing" ? "Bowler: " + person.wicketTaker : null}</p>
                </div>
              )
            }

          )}
        </div>
      }
      <ul className='edit-list'>
        <div className='edit-row'>
          <li><button onClick={batsmanMinusRun}>-</button></li>
          <h4>Runs</h4>
          <li><button onClick={batsmanAddRun}>+</button></li>
        </div>
        <div className='edit-row'>
          <li><button onClick={batsmanMinusBall}>-</button></li>
          <h4>Balls</h4>
          <li><button onClick={batsmanAddBall}>+</button></li>
        </div>
        <div className='edit-row'>
          <h4>Dismissal</h4>
          <input onChange={(event) => handleDismissal(event)} placeholder="Dismissal"></input>
        </div>
        <div className='edit-row'>
          <h4>Bowler</h4>
          <input onChange={(event) => handleDismissalBowler(event)} placeholder="Bowler"></input>
        </div>
        <div>
          <li><button className='closeConfirm' onClick={() => confirmEditBatting()}>Confirm</button></li>
        </div>
      </ul>
    </div>
  )
}
