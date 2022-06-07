import React from 'react';
import '../../components/Buttons.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrementBallsFacedOne, decrementBallsFacedTwo, decrementBatsmanOneRuns, decrementBatsmanTwoRuns, decrementTotalRuns, incrementBallsFacedOne, incrementBallsFacedTwo, incrementBatsmanOneRuns, incrementBatsmanTwoRuns, incrementTotalRuns, resetBatsman, resetBatsmanOneBalls, resetBatsmanOneName, resetBatsmanOneRuns, resetBatsmanTwoBalls, resetBatsmanTwoName, resetBatsmanTwoRuns, resetBattingTeam, resetTotalRuns } from '../../actions/Batting';
import { decrementLastTen, decrementOvers, decrementWickets, incrementOvers, incrementWickets, resetBalls, resetBatsmanAtWicketArray, resetBowler, resetBowlerArray, resetBowlerOne, resetBowlerTwo, resetLastTen, resetMaiden, resetOvers, resetWicketArray, resetWickets } from '../../actions/Bowling';
import { resetByes, resetLegByes, resetNoBalls, resetPenalty, resetTotalExtras, resetWides } from '../../actions/Extras';
import { handleEditBattingToggle, handleEditBowlingToggle, handleEditExtrasToggle, toggleButtonsPage, toggleMobileButtons } from '../../actions/Pages';
import { resetAwayTeam, resetHomeTeam, resetTeamNames } from '../../actions/Team';
import { resetFormat, resetToss, resetVenue } from '../../actions/Match';

export default function EditButtons() {

    const overs = useSelector(state => state.overs);
    const mobileButtons = useSelector(state => state.mobileButtons);
    const dispatch = useDispatch();

    const clearAll = () => {
        dispatch(resetBatsman())
        dispatch(resetBattingTeam())
        dispatch(resetTotalRuns())
        dispatch(resetBatsmanOneName())
        dispatch(resetBatsmanOneBalls())
        dispatch(resetBatsmanOneRuns())
        dispatch(resetBatsmanTwoName())
        dispatch(resetBatsmanTwoBalls())
        dispatch(resetBatsmanTwoRuns())
        dispatch(resetBowlerOne())
        dispatch(resetBowlerTwo())
        dispatch(resetBalls())
        dispatch(resetBowler())
        dispatch(resetBowlerArray())
        dispatch(resetMaiden())
        dispatch(resetOvers())
        dispatch(resetLastTen())
        dispatch(resetWicketArray())
        dispatch(resetBatsmanAtWicketArray())
        dispatch(resetWickets())
        dispatch(resetTotalExtras())
        dispatch(resetWides())
        dispatch(resetNoBalls())
        dispatch(resetByes())
        dispatch(resetLegByes())
        dispatch(resetPenalty())
        dispatch(toggleButtonsPage())
        dispatch(resetAwayTeam())
        dispatch(resetHomeTeam())
        dispatch(resetTeamNames())
        dispatch(resetToss())
        dispatch(resetFormat())
        dispatch(resetVenue())
    }

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

const handleClear = () => {
  clearAll(
  autoCloseMobileButtons()
  )
}

  return (
    <div className='btn-set'>
      <div className='btn-alt-set'>
         <div className="btn-plus-minus">
          <button onClick={() => dispatch(decrementTotalRuns(1))}>-</button>
          <p>Total</p>
          <button onClick={() => dispatch(incrementTotalRuns(1))}>+</button>
          </div>
          <div className="btn-plus-minus">
          <button onClick={() => dispatch(decrementBatsmanOneRuns(1))}>-</button>
          <p>Runs 1</p>
          <button onClick={() => dispatch(incrementBatsmanOneRuns(1))}>+</button>
          </div>
          <div className="btn-plus-minus">
          <button onClick={() => dispatch(decrementBatsmanTwoRuns(1))}>-</button>
          <p>Runs 2</p>
          <button onClick={() => dispatch(incrementBatsmanTwoRuns(1))}>+</button>
          </div>
          <div className="btn-plus-minus">
          <button onClick={() => dispatch(decrementBallsFacedOne(1))}>-</button>
          <p>Balls 1</p>
          <button onClick={() => dispatch(incrementBallsFacedOne(1))}>+</button>
          </div><div className="btn-plus-minus">
          <button onClick={() => dispatch(decrementBallsFacedTwo(1))}>-</button>
          <p>Balls 2</p>
          <button onClick={() => dispatch(incrementBallsFacedTwo(1))}>+</button>
        </div>
          <div className="btn-plus-minus">
          <button onClick={() => dispatch(decrementWickets(1))}>-</button>
          <p>Wickets</p>
          <button onClick={() => dispatch(incrementWickets(1))}>+</button>
          </div>
          <div className="btn-plus-minus">
          <button onClick={overs.toFixed(2) % 1 === 0 ? () => dispatch(decrementOvers(0.5)) : () => dispatch(decrementOvers(0.1))}>-</button>
          <p>Overs</p>
          <button onClick={overs.toFixed(2) % 1 === 0.5 ? () => dispatch(incrementOvers(0.5)) : () => dispatch(incrementOvers(0.1))}>+</button>
          </div>
          </div>
          <div className='btn-alt-set'>
          <button className='btn' onClick={() => {dispatch(decrementLastTen()); autoCloseMobileButtons()}}>Last Ten Minus</button>
          <button className='btn' onClick={() => dispatch(handleEditExtrasToggle())}>Edit Extras</button>
          <button className='btn' onClick={() => dispatch(handleEditBattingToggle())}>Edit Batting</button>
          <button className='btn' onClick={() => dispatch(handleEditBowlingToggle())}>Edit Bowling</button>
          <button className='btn' onClick={handleClear}>Clear</button>
          {window.innerWidth <= 768 ?
          <button className='btn' onClick={handleMobileButtons}>Close</button>
          :
          null
        }
          </div>
    </div>
  )
}
