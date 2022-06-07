import React from 'react';
import '../../components/Buttons.css';
import { useSelector, useDispatch } from 'react-redux';
import { incrementTotalRuns, switchBatsman, incrementBatsmanOneRuns, incrementBatsmanTwoRuns, incrementBallsFacedOne, incrementBallsFacedTwo } from '../../actions/Batting';
import { incrementBalls, incrementOvers, switchBowler, resetMaiden } from '../../actions/Bowling';
import { addDot, incrementLastTen, incrementLastTenFull } from '../../actions/Bowling';
import { toggleMobileButtons } from '../../actions/Pages';

export default function Runs() {
    const overs = useSelector(state => state.overs);
    const batsman = useSelector(state => state.batsman);
    const bowler = useSelector(state => state.bowler);
    const lastTen = useSelector(state => state.lastTen);
    const awayTeam = useSelector(state => state.awayTeam);
    const homeTeam = useSelector(state => state.homeTeam);
    const battingTeam = useSelector(state => state.battingTeam);
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

    //HANDLES NO RUN
    const noRun = () => {
        if (batsman === false) {
            if (overs.toFixed(2) % 1 === .5) {
                dispatch(incrementOvers(0.5));
                dispatch(switchBatsman());
                dispatch(incrementBallsFacedOne(1));
                dispatch(incrementBalls(1));
                dispatch(switchBowler());
            } else {
                dispatch(incrementOvers(0.1));
                dispatch(incrementBallsFacedOne(1));
                dispatch(incrementBalls(1));
            }
        } else {
            if (overs.toFixed(2) % 1 === .5) {
                dispatch(incrementOvers(0.5));
                dispatch(switchBatsman());
                dispatch(incrementBallsFacedTwo(1));
                dispatch(incrementBalls(1));
                dispatch(switchBowler());
            } else {
                dispatch(incrementOvers(0.1));
                dispatch(incrementBallsFacedTwo(1));
                dispatch(incrementBalls(1));
            }
        }
        handleLastTen(". ");
        addBattingStats(0, 1);
        addBowlingStats(0);
        addMaiden();
        autoCloseMobileButtons();
    }


    //HANDLES ADDING ONE RUN
    const addOne = () => {
        if (batsman === false) {
            if (overs.toFixed(2) % 1 === .5) {
                dispatch(incrementOvers(0.5));
                dispatch(incrementBatsmanOneRuns(1));
                dispatch(incrementBallsFacedOne(1));
                dispatch(incrementBalls(1));
                dispatch(switchBowler());
            } else {
                dispatch(incrementOvers(0.1));
                dispatch(switchBatsman());
                dispatch(incrementBatsmanOneRuns(1));
                dispatch(incrementBallsFacedOne(1));
                dispatch(incrementBalls(1));
            }
        } else {
            if (overs.toFixed(2) % 1 === .5) {
                dispatch(incrementOvers(0.5));
                dispatch(incrementBatsmanTwoRuns(1));
                dispatch(incrementBallsFacedTwo(1));
                dispatch(incrementBalls(1));
                dispatch(switchBowler());
            } else {
                dispatch(incrementOvers(0.1));
                dispatch(switchBatsman());
                dispatch(incrementBatsmanTwoRuns(1));
                dispatch(incrementBallsFacedTwo(1));
                dispatch(incrementBalls(1));
            }
        }
        dispatch(incrementTotalRuns(1));
        handleLastTen("1 ");
        addBattingStats(1, 1);
        addBowlingStats(1);
        dispatch(resetMaiden());
        autoCloseMobileButtons();
    }


    //HANDLES ADDING THREE RUNS
    const addTwo = () => {
        if (batsman === false) {
            if (overs.toFixed(2) % 1 === .5) {
                dispatch(incrementOvers(0.5));
                dispatch(switchBatsman());
                dispatch(incrementBatsmanOneRuns(2));
                dispatch(incrementBallsFacedOne(1));
                dispatch(incrementBalls(1));
                dispatch(switchBowler());
            } else {
                dispatch(incrementOvers(0.1));
                dispatch(incrementBatsmanOneRuns(2));
                dispatch(incrementBallsFacedOne(1));
                dispatch(incrementBalls(1));
            }
        } else {
            if (overs.toFixed(2) % 1 === .5) {
                dispatch(incrementOvers(0.5));
                dispatch(switchBatsman());
                dispatch(incrementBatsmanTwoRuns(2));
                dispatch(incrementBallsFacedTwo(1));
                dispatch(incrementBalls(1));
                dispatch(switchBowler());
            } else {
                dispatch(incrementOvers(0.1));
                dispatch(incrementBatsmanTwoRuns(2));
                dispatch(incrementBallsFacedTwo(1));
                dispatch(incrementBalls(1));
            }
        }
        dispatch(incrementTotalRuns(2));
        handleLastTen("2 ");
        addBattingStats(2, 1);
        addBowlingStats(2);
        dispatch(resetMaiden());
        autoCloseMobileButtons();
    }

    //HANDLES ADDING THREE RUNS
    const addThree = () => {
        if (batsman === false) {
            if (overs.toFixed(2) % 1 === .5) {
                dispatch(incrementOvers(0.5));
                dispatch(incrementBatsmanOneRuns(3));
                dispatch(incrementBallsFacedOne(1));
                dispatch(incrementBalls(1));
                dispatch(switchBowler());
            } else {
                dispatch(incrementOvers(0.1));
                dispatch(switchBatsman());
                dispatch(incrementBatsmanOneRuns(3));
                dispatch(incrementBallsFacedOne(1));
                dispatch(incrementBalls(1));
            }
        } else {
            if (overs.toFixed(2) % 1 === .5) {
                dispatch(incrementOvers(0.5));
                dispatch(incrementBatsmanTwoRuns(3));
                dispatch(incrementBallsFacedTwo(1));
                dispatch(incrementBalls(1));
                dispatch(switchBowler());
            } else {
                dispatch(incrementOvers(1));
                dispatch(switchBatsman());
                dispatch(incrementBatsmanTwoRuns(3));
                dispatch(incrementBallsFacedTwo(1));
                dispatch(incrementBalls(1));
            }
        }
        dispatch(incrementTotalRuns(3));
        handleLastTen("3 ");
        addBattingStats(3, 1);
        addBowlingStats(3);
        dispatch(resetMaiden());
        autoCloseMobileButtons();
    }

    //HANDLES ADDING FOUR RUNS
    const addFour = () => {
        if (batsman === false) {
            if (overs.toFixed(2) % 1 === .5) {
                dispatch(incrementOvers(0.5));
                dispatch(switchBatsman());
                dispatch(incrementBatsmanOneRuns(4));
                dispatch(incrementBallsFacedOne(1));
                dispatch(incrementBalls(1));
                dispatch(switchBowler());
            } else {
                dispatch(incrementOvers(0.1));
                dispatch(incrementBatsmanOneRuns(4));
                dispatch(incrementBallsFacedOne(1));
                dispatch(incrementBalls(1));
            }
        } else {
            if (overs.toFixed(2) % 1 === .5) {
                dispatch(incrementOvers(0.5));
                dispatch(switchBatsman());
                dispatch(incrementBatsmanTwoRuns(4));
                dispatch(incrementBallsFacedTwo(1));
                dispatch(incrementBalls(1));
                dispatch(switchBowler());
            } else {
                dispatch(incrementOvers(0.1));
                dispatch(incrementBatsmanTwoRuns(4));
                dispatch(incrementBallsFacedTwo(1));
                dispatch(incrementBalls(1));
            }
        }
        dispatch(incrementTotalRuns(4));
        handleLastTen("4 ");
        addBattingStats(4, 1);
        addBowlingStats(4);
        dispatch(resetMaiden());
        autoCloseMobileButtons();
    }


    //HANDLES ADDING SIX RUNS
    const addSix = () => {
        if (batsman === false) {
            if (overs.toFixed(2) % 1 === .5) {
                dispatch(incrementOvers(0.5));
                dispatch(switchBatsman());
                dispatch(incrementBatsmanOneRuns(6));
                dispatch(incrementBallsFacedOne(1));
                dispatch(incrementBalls(1));
                dispatch(switchBowler());
            } else {
                dispatch(incrementOvers(0.1));
                dispatch(incrementBatsmanOneRuns(6));
                dispatch(incrementBallsFacedOne(1));
                dispatch(incrementBalls(1));
            }
        } else {
            if (overs.toFixed(2) % 1 === .5) {
                dispatch(incrementOvers(0.5));
                dispatch(switchBatsman());
                dispatch(incrementBatsmanTwoRuns(6));
                dispatch(incrementBallsFacedTwo(1));
                dispatch(incrementBalls(0.5));
                dispatch(switchBowler());
            } else {
                dispatch(incrementOvers(0.1));
                dispatch(incrementBatsmanTwoRuns(6));
                dispatch(incrementBallsFacedTwo(1));
                dispatch(incrementBalls(0.1));
            }
        }
        dispatch(incrementTotalRuns(6));
        handleLastTen("6 ");
        addBattingStats(6, 1);
        addBowlingStats(6);
        dispatch(resetMaiden());
        autoCloseMobileButtons();
    }

    //ADDS TO THE RECENT DELIVERIES ARRAY
    const handleLastTen = (nr) => {
        if (lastTen.length < 10) {
            dispatch(incrementLastTen(nr))
        } else if (lastTen.length >= 10) {
            dispatch(incrementLastTenFull(nr))
        }
    }

    //ADDING STATS TO CURRENT BATSMAN
    const addBattingStats = (runs, balls) => {
        if (battingTeam === false) {
            for (let i = 0; i < homeTeam.length; i++) {
                if (batsman === false) {
                    if (homeTeam[i].status === "batting1") {
                        return (
                            homeTeam[i].runs += runs,
                            homeTeam[i].balls += balls
                        )
                    }
                } else {
                    if (homeTeam[i].status === "batting2") {
                        return (
                            homeTeam[i].runs += runs,
                            homeTeam[i].balls += balls
                        )
                    }
                }
            }
        } else {
            for (let i = 0; i < awayTeam.length; i++) {
                if (batsman === false) {
                    if (awayTeam[i].status === "batting1") {
                        return (
                            awayTeam[i].runs += runs,
                            awayTeam[i].balls += balls
                        )
                    }
                } else {
                    if (awayTeam[i].status === "batting2") {
                        return (
                            awayTeam[i].runs += runs,
                            awayTeam[i].balls += balls
                        )
                    }
                }
            }
        }
    }


    //ADDS STATS TO THE CURRENT BOWLER
    const addBowlingStats = (runs) => {
        if (battingTeam === false) {
            for (let i = 0; i < awayTeam.length; i++) {
                if (bowler === false) {
                    if (awayTeam[i].status === "bowling1" && overs.toFixed(2) % 1 < .5) {
                        awayTeam[i].oversBowled += 0.1
                        awayTeam[i].bowlingBalls += 1
                        awayTeam[i].bowlingRuns += runs
                    } else if (awayTeam[i].status === "bowling1" && overs.toFixed(2) % 1 === .5) {
                        awayTeam[i].oversBowled += 0.5
                        awayTeam[i].bowlingBalls += 1
                        awayTeam[i].bowlingRuns += runs
                    }
                } else {
                    if (awayTeam[i].status === "bowling2" && overs.toFixed(2) % 1 < .5) {
                        awayTeam[i].oversBowled += 0.1
                        awayTeam[i].bowlingBalls += 1
                        awayTeam[i].bowlingRuns += runs
                    } else if (awayTeam[i].status === "bowling2" && overs.toFixed(2) % 1 === .5) {
                        awayTeam[i].oversBowled += 0.5
                        awayTeam[i].bowlingBalls += 1
                        awayTeam[i].bowlingRuns += runs
                    }
                }
            }
        } else {
            for (let i = 0; i < homeTeam.length; i++) {
                if (bowler === false) {
                    if (homeTeam[i].status === "bowling1" && overs.toFixed(2) % 1 < .5) {
                        homeTeam[i].oversBowled += 0.1
                        homeTeam[i].bowlingBalls += 1
                        homeTeam[i].bowlingRuns += runs
                    } else if (homeTeam[i].status === "bowling1" && overs.toFixed(2) % 1 === .5) {
                        homeTeam[i].oversBowled += 0.5
                        homeTeam[i].bowlingBalls += 1
                        homeTeam[i].bowlingRuns += runs
                    }
                } else {
                    if (homeTeam[i].status === "bowling2" && overs.toFixed(2) % 1 < .5) {
                        homeTeam[i].oversBowled += 0.1
                        homeTeam[i].bowlingBalls += 1
                        homeTeam[i].bowlingRuns += runs
                    } else if (homeTeam[i].status === "bowling2" && overs.toFixed(2) % 1 === .5) {
                        homeTeam[i].oversBowled += 0.5
                        homeTeam[i].bowlingBalls += 1
                        homeTeam[i].bowlingRuns += runs
                    }
                }
            }
        }
    }

    //HANDLES ADDING MAIDEN
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
            <button className='btn' onClick={noRun}>No Run</button>
            <div className='btn-group'>
                <button className='btn' onClick={addOne}>1</button>
                <button className='btn' onClick={addTwo}>2</button>
                <button className='btn' onClick={addThree}>3</button>
            </div>
            <div className='btn-group'>
                <button className='btn' onClick={addFour}>4</button>
                <button className='btn' onClick={addSix}>6</button>
            </div>
        </div>
    )
    }
