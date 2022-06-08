import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrementByes, decrementLegByes, decrementNoBalls, decrementPenalty, decrementTotalExtras, decrementWides, incrementByes, incrementLegByes, incrementNoBalls, incrementPenalty, incrementTotalExtras, incrementWides } from '../../../actions/Extras';
import { handleEditExtrasToggle, toggleMobileButtons } from '../../../actions/Pages';

export default function EditExtras() {
    const wides = useSelector(state => state.wides);
    const totalExtras = useSelector(state => state.totalExtras);
    const noBalls = useSelector(state => state.noBalls);
    const legByes = useSelector(state => state.legByes);
    const byes = useSelector(state => state.byes);
    const penalty = useSelector(state => state.penalty);
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

    return (
        <div className='edit-extras'>
            <div className='edit-extras-wrapper'>
                <div className="extras-edit-column">
                    <div className='extras-edit-title'>
                        <h4>Total Extras</h4>
                        <h4>{totalExtras}</h4>
                    </div>
                    <div className='extras-edit-btns'>
                        <button onClick={() => dispatch(decrementTotalExtras(1))}>-</button>
                        <button onClick={() => dispatch(incrementTotalExtras(1))}>+</button>
                    </div>
                </div>
                <div className="extras-edit-column">
                    <div className='extras-edit-title'>
                        <h4>Wides</h4>
                        <h4>{wides}</h4>
                    </div>
                    <div className='extras-edit-btns'>
                        <button onClick={() => dispatch(decrementWides(1))}>-</button>
                        <button onClick={() => dispatch(incrementWides(1))}>+</button>
                    </div>
                </div>
                <div className="extras-edit-column">
                    <div className='extras-edit-title'>
                        <h4>No Balls</h4>
                        <h4>{noBalls}</h4>
                    </div>
                    <div className='extras-edit-btns'>
                        <button onClick={() => dispatch(decrementNoBalls(1))}>-</button>
                        <button onClick={() => dispatch(incrementNoBalls(1))}>+</button>
                    </div>
                </div>
                <div className="extras-edit-column">
                    <div className='extras-edit-title'>
                        <h4>Byes</h4>
                        <h4>{byes}</h4>
                    </div>
                    <div className='extras-edit-btns'>
                        <button onClick={() => dispatch(decrementByes(1))}>-</button>
                        <button onClick={() => dispatch(incrementByes(1))}>+</button>
                    </div>
                </div>
                <div className="extras-edit-column">
                    <div className='extras-edit-title'>
                        <h4>Leg Byes</h4>
                        <h4>{legByes}</h4>
                    </div>
                    <div className='extras-edit-btns'>
                        <button onClick={() => dispatch(decrementLegByes(1))}>-</button>
                        <button onClick={() => dispatch(incrementLegByes(1))}>+</button>
                    </div>
                </div>
                <div className="extras-edit-column">
                    <div className='extras-edit-title'>
                        <h4>Penalty</h4>
                        <h4>{penalty}</h4>
                    </div>
                    <div className='extras-edit-btns'>
                        <button onClick={() => dispatch(decrementPenalty(1))}>-</button>
                        <button onClick={() => dispatch(incrementPenalty(1))}>+</button>
                    </div>
                </div>
            </div>
            <button className="closeConfirm" onClick={() => {dispatch(handleEditExtrasToggle()); autoCloseMobileButtons()}}>Close</button>
        </div>

    )
}
