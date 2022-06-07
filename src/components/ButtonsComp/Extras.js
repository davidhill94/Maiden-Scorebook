import React, { useState } from 'react';
import '../../components/Buttons.css';
import { useSelector, useDispatch } from 'react-redux';
import { incrementBallsFacedOne, incrementBallsFacedTwo, incrementTotalRuns, switchBatsman } from '../../actions/Batting';
import { incrementByes, incrementLegByes, incrementNoBalls, incrementPenalty, incrementTotalExtras, incrementWides } from '../../actions/Extras';
import { addDot, incrementBalls, incrementLastTen, incrementLastTenFull, incrementOvers, minusTally, resetMaiden, switchBowler } from '../../actions/Bowling';
import { toggleMobileButtons } from '../../actions/Pages';

export default function Extras() {
    const [byes, setByes] = useState(false);
    const [legByes, setLegByes] = useState(false);
    const [penalty, setPenalty] = useState(false);

    const lastTen = useSelector(state => state.lastTen);
    const battingTeam = useSelector(state => state.battingTeam);
    const awayTeam = useSelector(state => state.awayTeam);
    const homeTeam = useSelector(state => state.homeTeam);
    const bowler = useSelector(state => state.bowler);
    const batsman = useSelector(state => state.batsman);
    const overs = useSelector(state => state.overs);
    const maiden = useSelector(state => state.maiden);
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

    const addWide = (nr) => {
        if (battingTeam === false) {
            for (let i = 0; i < awayTeam.length; i++) {
                if (bowler === false) {
                    if (awayTeam[i].status === "bowling1") {
                        awayTeam[i].bowlingRuns += nr
                    }
                } else {
                    if (awayTeam[i].status === "bowling2") {
                        awayTeam[i].bowlingRuns += nr
                    }
                }
            }
        } else {
            for (let i = 0; i < homeTeam.length; i++) {
                if (bowler === false) {
                    if (homeTeam[i].status === "bowling1") {
                        homeTeam[i].bowlingRuns += nr
                    }
                } else {
                    if (homeTeam[i].status === "bowling2") {
                        homeTeam[i].bowlingRuns += nr
                    }
                }
            }
        }
        handleLastTen("wd ");
        dispatch(minusTally());
        dispatch(incrementTotalRuns(nr));
        dispatch(incrementWides(nr));
        dispatch(incrementTotalExtras(nr));
        autoCloseMobileButtons();

    }

    //HANDLES ADDING NO BALLS
    const addNoBall = (nr) => {
        //adds to bowling stats
        if (battingTeam === false) {
            for (let i = 0; i < awayTeam.length; i++) {
                if (bowler === false) {
                    if (awayTeam[i].status === "bowling1") {
                        awayTeam[i].bowlingRuns += nr
                    }
                } else {
                    if (awayTeam[i].status === "bowling2") {
                        awayTeam[i].bowlingRuns += nr
                    }
                }
            }
        } else {
            for (let i = 0; i < homeTeam.length; i++) {
                if (bowler === false) {
                    if (homeTeam[i].status === "bowling1") {
                        homeTeam[i].bowlingRuns += nr
                    }
                } else {
                    if (homeTeam[i].status === "bowling2") {
                        homeTeam[i].bowlingRuns += nr
                    }
                }
            }
        }
        //adds ball to batsman
        if (battingTeam === false) {
            for (let i = 0; i < homeTeam.length; i++) {
                if (batsman === false) {
                    if (homeTeam[i].status === "batting1") {
                        homeTeam[i].balls += 1
                        dispatch(incrementBallsFacedOne(1))
                    }
                } else {
                    if (homeTeam[i].status === "batting2") {
                        homeTeam[i].balls += 1
                        dispatch(incrementBallsFacedTwo(1))
                    }
                }
            }
        } else {
            for (let i = 0; i < awayTeam.length; i++) {
                if (batsman === false) {
                    if (awayTeam[i].status === "batting1") {
                        awayTeam[i].balls += 1
                        dispatch(incrementBallsFacedOne(1))
                    }
                } else {
                    if (awayTeam[i].status === "batting2") {
                        awayTeam[i].balls += 1
                        dispatch(incrementBallsFacedTwo(1))
                    }
                }
            }
        }
        dispatch(minusTally());
        handleLastTen("nb ");
        dispatch(incrementTotalRuns(nr));
        dispatch(incrementNoBalls(nr));
        dispatch(incrementTotalExtras(nr));
        autoCloseMobileButtons();
    }

    //Toggles Bye Buttons
    const toggleByes = () => {
        setByes(!byes)
    }

    //Handles Adding Byes
    const addByes = (nr) => {
        toggleByes()
        if((nr % 2) === 1 && overs.toFixed(2) % 1 < .5) {
            dispatch(switchBatsman())
        } else if ((nr % 2) === 0 && overs.toFixed(2) % 1 === .5) {
            dispatch(switchBatsman());
        }
        if (batsman === false && overs.toFixed(2) % 1 === .5) {
            dispatch(incrementTotalExtras(nr));
            dispatch(incrementTotalRuns(nr));
            dispatch(incrementOvers(0.5));
            dispatch(incrementBallsFacedOne(1));
            dispatch(incrementBalls(1));
            dispatch(incrementByes(nr));
            dispatch(switchBowler());
        } else if (batsman === true && overs.toFixed(2) % 1 === .5) {
            dispatch(incrementTotalExtras(nr));
            dispatch(incrementTotalRuns(nr));
            dispatch(incrementOvers(0.5));
            dispatch(incrementBallsFacedTwo(1));
            dispatch(incrementBalls(1));
            dispatch(incrementByes(nr));
            dispatch(switchBowler());
        } else if (batsman === false) {
            dispatch(incrementTotalExtras(nr));
            dispatch(incrementTotalRuns(nr));
            dispatch(incrementOvers(0.1));
            dispatch(incrementBallsFacedOne(1));
            dispatch(incrementBalls(1));
            dispatch(incrementByes(nr));
        } else if (batsman === true) {
            dispatch(incrementTotalExtras(nr));
            dispatch(incrementTotalRuns(nr));
            dispatch(incrementOvers(0.1));
            dispatch(incrementBallsFacedTwo(1));
            dispatch(incrementBalls(1));
            dispatch(incrementByes(nr));
        };

       playerStats()
       addMaiden()
       autoCloseMobileButtons();

        //adds to deliveries array
        switch(nr) {
            case 1:
                return handleLastTen("b ")
            case 2: 
                return handleLastTen("b2 ")
            case 3:
                return handleLastTen("b3 ")
            case 4:
                return handleLastTen("b4 ")
            default:
                return nr
        }
    };

     //Toggles LegBye Buttons
     const toggleLegByes = () => {
        setLegByes(!legByes)
    }

    //Handles Adding Leg Byes
    const addLegByes = (nr) => {
        toggleLegByes()
        if((nr % 2) === 1 && overs.toFixed(2) % 1 < .5) {
            dispatch(switchBatsman())
        } else if ((nr % 2) === 0 && overs.toFixed(2) % 1 === .5) {
            dispatch(switchBatsman());
        }
        if (batsman === false && overs.toFixed(2) % 1 === .5) {
            dispatch(incrementTotalExtras(nr));
            dispatch(incrementTotalRuns(nr));
            dispatch(incrementOvers(0.5));
            dispatch(incrementBallsFacedOne(1));
            dispatch(incrementBalls(1));
            dispatch(incrementLegByes(nr));
            dispatch(switchBowler());
        } else if (batsman === true && overs.toFixed(2) % 1 === .5) {
            dispatch(incrementTotalExtras(nr));
            dispatch(incrementTotalRuns(nr));
            dispatch(incrementOvers(0.5));
            dispatch(incrementBallsFacedTwo(1));
            dispatch(incrementBalls(1));
            dispatch(incrementLegByes(nr));
            dispatch(switchBowler());
        } else if (batsman === false) {
            dispatch(incrementTotalExtras(nr));
            dispatch(incrementTotalRuns(nr));
            dispatch(incrementOvers(0.1));
            dispatch(incrementBallsFacedOne(1));
            dispatch(incrementBalls(1));
            dispatch(incrementLegByes(nr));
        } else if (batsman === true) {
            dispatch(incrementTotalExtras(nr));
            dispatch(incrementTotalRuns(nr));
            dispatch(incrementOvers(0.1));
            dispatch(incrementBallsFacedTwo(1));
            dispatch(incrementBalls(1));
            dispatch(incrementLegByes(nr));
        };
        playerStats()
        addMaiden()
        autoCloseMobileButtons();
        //adds to deliveries array
        switch(nr) {
            case 1:
                return handleLastTen("lb ")
            case 2: 
                return handleLastTen("lb2 ")
            case 3:
                return handleLastTen("lb3 ")
            case 4:
                return handleLastTen("lb4 ")
            default:
                return nr
        }
    };

    //Toggles Penalty buttons
    const togglePenalty = () => {
        setPenalty(!penalty)
    }

    //Handles Adding penalty runs
    const addPenalty = (nr) => {
        dispatch(incrementPenalty(nr));
        dispatch(incrementTotalRuns(nr));
        togglePenalty()
        autoCloseMobileButtons();
    }

    //Add ball to player array
    const playerStats = () => {
        if (battingTeam === false) {
            for (let i = 0; i < homeTeam.length; i++) {
                if (batsman === false) {
                    if (homeTeam[i].status === "batting1") {
                        homeTeam[i].balls += 1
                    }
                } else {
                    if (homeTeam[i].status === "batting2") {
                        homeTeam[i].balls += 1
                    }
                }
            }
        } else {
            for (let i = 0; i < awayTeam.length; i++) {
                if (batsman === false) {
                    if (awayTeam[i].status === "batting1") {
                        awayTeam[i].balls += 1
                    }
                } else {
                    if (awayTeam[i].status === "batting2") {
                        awayTeam[i].balls += 1
                    }
                }
            }
        }

        if (battingTeam === false) {
            for (let i = 0; i < awayTeam.length; i++) {
                if (bowler === false) {
                    if (awayTeam[i].status === "bowling1" && overs.toFixed(2) % 1 < .5) {
                        awayTeam[i].oversBowled += 0.1
                        awayTeam[i].bowlingBalls += 1
                    } else if (awayTeam[i].status === "bowling1" && overs.toFixed(2) % 1 === .5) {
                        awayTeam[i].oversBowled += 0.5
                        awayTeam[i].bowlingBalls += 1
                    }
                } else {
                    if (awayTeam[i].status === "bowling2" && overs.toFixed(2) % 1 < .5) {
                        awayTeam[i].oversBowled += 0.1
                        awayTeam[i].bowlingBalls += 1
                    } else if (awayTeam[i].status === "bowling2" && overs.toFixed(2) % 1 === .5) {
                        awayTeam[i].oversBowled += 0.5
                        awayTeam[i].bowlingBalls += 1
                    }
                }
            }
        } else {
            for (let i = 0; i < homeTeam.length; i++) {
                if (bowler === false) {
                    if (homeTeam[i].status === "bowling1" && overs.toFixed(2) % 1 < .5) {
                        homeTeam[i].oversBowled += 0.1
                        homeTeam[i].bowlingBalls += 1
                    } else if (homeTeam[i].status === "bowling1" && overs.toFixed(2) % 1 === .5) {
                        homeTeam[i].oversBowled += 0.5
                        homeTeam[i].bowlingBalls += 1
                    }
                } else {
                    if (homeTeam[i].status === "bowling2" && overs.toFixed(2) % 1 < .5) {
                        homeTeam[i].oversBowled += 0.1
                        homeTeam[i].bowlingBalls += 1
                    } else if (homeTeam[i].status === "bowling2" && overs.toFixed(2) % 1 === .5) {
                        homeTeam[i].oversBowled += 0.5
                        homeTeam[i].bowlingBalls += 1
                    }
                }
            }
        }
    }

    //Handles Last 10 Deliveries
    const handleLastTen = (nr) => {
        if (lastTen.length < 10) {
            dispatch(incrementLastTen(nr))
        } else if (lastTen.length >= 10) {
            dispatch(incrementLastTenFull(nr))
        }
    }

    //Handles Maiden
    const addMaiden = () => {
        dispatch(addDot());
        if (battingTeam === false) {
            for (let i = 0; i < awayTeam.length; i++) {
                if (awayTeam[i].status === "bowling1" && bowler === false) {
                    if (maiden === 5) {
                        return (
                            awayTeam[i].maidens += 1,
                            dispatch(resetMaiden())
                        )
                    }
                } else if (awayTeam[i].status === "bowling2" && bowler === true) {
                    if (maiden === 5) {
                        return (
                            awayTeam[i].maidens += 1,
                            dispatch(resetMaiden())
                        )
                    }
                }
            }
        } else {
            if (battingTeam === true) {
                for (let i = 0; i < homeTeam.length; i++) {
                    if (homeTeam[i].status === "bowling1" && bowler === false) {
                        if (maiden === 5) {
                            return (
                                homeTeam[i].maidens += 1,
                                dispatch(resetMaiden())
                            )
                        }
                    } else if (homeTeam[i].status === "bowling2" && bowler === true) {
                        if (maiden === 5) {
                            return (
                                homeTeam[i].maidens += 1,
                                dispatch(resetMaiden())
                            )
                        }
                    }
                }
            }
        }
        if (overs.toFixed(2) % 1 === .5) {
            dispatch(resetMaiden());
        }
    }
    return (
        <div className='btn-set'>
            <button className='btn' onClick={() => addWide(1)}>Wide</button>
            <button className='btn' onClick={() => addNoBall(1)}>No Ball</button>
            {byes ?
                <div className='btn-group'>
                    <button className='btn' onClick={() => addByes(1)}>1</button>
                    <button className='btn' onClick={() => addByes(2)}>2</button>
                    <button className='btn' onClick={() => addByes(3)}>3</button>
                    <button className='btn' onClick={() => addByes(4)}>4</button>
                </div>
                :
                <button className='btn' onClick={toggleByes}>Byes</button>
            }
            {legByes ?
                <div className='btn-group'>
                    <button className='btn' onClick={() => addLegByes(1)}>1</button>
                    <button className='btn' onClick={() => addLegByes(2)}>2</button>
                    <button className='btn' onClick={() => addLegByes(3)}>3</button>
                    <button className='btn' onClick={() => addLegByes(4)}>4</button>
                </div>
                :
                <button className='btn' onClick={toggleLegByes}>Leg Byes</button>
            }
            {penalty ?
                <div className='btn-group'>
                    <button className='btn' onClick={() => addPenalty(1)}>1</button>
                    <button className='btn' onClick={() => addPenalty(2)}>2</button>
                    <button className='btn' onClick={() => addPenalty(3)}>3</button>
                    <button className='btn' onClick={() => addPenalty(4)}>4</button>
                </div>
                :
                <button className='btn' onClick={togglePenalty}>Penalty</button>
            }
        </div>
    )
}
