import React, { useState } from 'react';
import '../../components/Buttons.css';
import { useSelector, useDispatch } from 'react-redux';
import { incrementBatsmanOneRuns, incrementBatsmanTwoRuns, incrementTotalRuns, resetBatsmanOneBalls, resetBatsmanOneRuns, resetBatsmanTwoBalls, resetBatsmanTwoRuns, setBatsmanOneName, setBatsmanTwoName, switchBatsman } from '../../actions/Batting';
import { addDot, incrementBalls, incrementBatsmanAtWicketArray, incrementLastTen, incrementLastTenFull, incrementOvers, incrementWicketArray, incrementWickets, minusTally, resetMaiden, switchBowler } from '../../actions/Bowling';
import { incrementByes, incrementLegByes, incrementTotalExtras } from '../../actions/Extras';
import { toggleMobileButtons } from '../../actions/Pages';

export default function Wickets() {
    const [wicketType, setWicketType] = useState(false);
    const [fielder, setFielder] = useState(false);
    const [runOutRuns, setRunOutRuns] = useState(false);
    const [catcher, setCatcher] = useState(false);

    const dispatch = useDispatch();
    const overs = useSelector(state => state.overs);
    const totalRuns = useSelector(state => state.totalRuns);
    const batsman = useSelector(state => state.batsman);
    const bowler = useSelector(state => state.bowler);
    const lastTen = useSelector(state => state.lastTen);
    const awayTeam = useSelector(state => state.awayTeam);
    const homeTeam = useSelector(state => state.homeTeam);
    const battingTeam = useSelector(state => state.battingTeam);
    const maiden = useSelector(state => state.maiden);
    const wickets = useSelector(state => state.wickets);
    const byes = useSelector(state => state.byes);
    const legByes = useSelector(state => state.legByes);
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


    /* Toggles Wicket Type Select Menu */
    const toggleWicketType = () => {
        setWicketType(!wicketType)
        console.log(wicketType)
    }

    /* Toggles Catcher Menu */
    const toggleCatcherSelect = () => {
        setCatcher(!catcher)
        if (wicketType) {
            setWicketType(false)
        }
    }
    /* Toggles Fielder Menu */
    const toggleFielderSelect = () => {
        setFielder(!fielder)
        if (wicketType) {
            setWicketType(false)
        }
    }

    /* Toggle Runs Menu for Run Out Wicket */
    const toggleRunOutRuns = () => {
        setRunOutRuns(!runOutRuns)
            if (fielder) {
                setFielder(!fielder)
            }
        }


    /**** Handles Add Wicket button ****/
    const addWicket = () => {
        dispatch(incrementWickets(1));
        dispatch(incrementBalls(1));
        addBallToOutgoingBatsman();
        handleBowlerFiguresOnWicket();
        addMaiden();
        if (batsman === false && overs.toFixed(2) % 1 === .5) {
            dispatch(switchBatsman());
            dispatch(resetBatsmanOneRuns());
            dispatch(resetBatsmanOneBalls());
            dispatch(incrementOvers(0.5));
        } else if (batsman === true && overs.toFixed(2) % 1 === .5) {
            dispatch(switchBatsman());
            dispatch(resetBatsmanTwoRuns());
            dispatch(resetBatsmanTwoBalls());
            dispatch(incrementOvers(0.5));
        } else if (batsman === false) {
            dispatch(resetBatsmanOneRuns());
            dispatch(resetBatsmanOneBalls());
            dispatch(incrementOvers(0.1));
        } else if (batsman === true) {
            dispatch(resetBatsmanTwoRuns());
            dispatch(resetBatsmanTwoBalls());
            dispatch(incrementOvers(0.1));
        };
        /* updates recent deliveries array and wickets array */
        if (lastTen.length < 10) {
            dispatch(incrementLastTen("W "));
            dispatch(incrementWicketArray(totalRuns));
        } else if (lastTen.length >= 10) {
            dispatch(incrementLastTenFull("W "));
            dispatch(incrementWicketArray(totalRuns));
        };
    };

    /* adds maiden */
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

    /* updates bowling figures */
    const handleBowlerFiguresOnWicket = () => {
        if (battingTeam === false) {
            for (let i = 0; i < awayTeam.length; i++) {
                if (bowler === false) {
                    if (awayTeam[i].status === "bowling1" && overs.toFixed(2) % 1 < .5) {
                        awayTeam[i].oversBowled += 0.1
                        awayTeam[i].wickets += 1
                        awayTeam[i].bowlingBalls += 1
                    } else if (awayTeam[i].status === "bowling1" && overs.toFixed(2) % 1 === .5) {
                        awayTeam[i].oversBowled += 0.5
                        awayTeam[i].wickets += 1
                        awayTeam[i].bowlingBalls += 1
                    }
                } else {
                    if (awayTeam[i].status === "bowling2" && overs.toFixed(2) % 1 < .5) {
                        awayTeam[i].oversBowled += 0.1
                        awayTeam[i].wickets += 1
                        awayTeam[i].bowlingBalls += 1
                    } else if (awayTeam[i].status === "bowling2" && overs.toFixed(2) % 1 === .5) {
                        awayTeam[i].oversBowled += 0.5
                        awayTeam[i].wickets += 1
                        awayTeam[i].bowlingBalls += 1
                    }
                }
            }
        } else {
            for (let i = 0; i < homeTeam.length; i++) {
                if (bowler === false) {
                    if (homeTeam[i].status === "bowling1" && overs.toFixed(2) % 1 < .5) {
                        homeTeam[i].oversBowled += .1
                        homeTeam[i].wickets += 1
                        homeTeam[i].bowlingBalls += 1
                    } else if (homeTeam[i].status === "bowling1" && overs.toFixed(2) % 1 === .5) {
                        homeTeam[i].oversBowled += .5
                        homeTeam[i].wickets += 1
                        homeTeam[i].bowlingBalls += 1
                    }
                } else {
                    if (homeTeam[i].status === "bowling2" && overs.toFixed(2) % 1 < .5) {
                        homeTeam[i].oversBowled += .1
                        homeTeam[i].wickets += 1
                        homeTeam[i].bowlingBalls += 1
                    } else if (homeTeam[i].status === "bowling1" && overs.toFixed(2) % 1 === .5) {
                        homeTeam[i].oversBowled += .5
                        homeTeam[i].wickets += 1
                        homeTeam[i].bowlingBalls += 1
                    }
                }
            }
        }
    }

    const addBallToOutgoingBatsman = () => {
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
    }

    /**** Handles Wicket Correction button on run out ****/
    /* wicketCorrection = () => {
         if (this.state.isBatting === true) {
             for (let i = 0; i < this.state.awayPlayers.length; i++) {
                 if (this.state.bowler === "ONE") {
                     const bowlingOne = this.state.awayPlayers
                     if (this.state.awayPlayers[i].status === "bowling1") {
                         bowlingOne[i].wickets -= 1
                         this.setState({
                             bowlingOne
                         })
                     }
                 } else {
                     const bowlingTwo = this.state.awayPlayers
                     if (this.state.awayPlayers[i].status === "bowling2") {
                         bowlingTwo[i].wickets -= 1
                         this.setState({
                             bowlingTwo
                         })
                     }
                 }
             }
         } else {
             for (let i = 0; i < this.state.homePlayers.length; i++) {
                 if (this.state.bowler === "ONE") {
                     const bowlingOne = this.state.homePlayers
                     if (this.state.homePlayers[i].status === "bowling1") {
                         bowlingOne[i].wickets -= 1
                         this.setState({
                             bowlingOne
                         })
                     }
                 } else {
                     const bowlingTwo = this.state.homePlayers
                     if (this.state.homePlayers[i].status === "bowling2") {
                         bowlingTwo[i].wickets -= 1
                         this.setState({
                             bowlingTwo
                         })
                     }
                 }
             }
         }
     }
     */

    /**** Runs all relevant functions on wicket ****/
    const handleWicket = (event) => {
        setWicketTaker()
        setWicketBatsmanNumber()
        addWicket()
        handleBowler()
        selectWicketType(event)

        wicketOutgoingBatsmanStatusChange()
        wicketIncomingBatsmanStatusChange()
        setBattingName()
        toggleWicketType()
        autoCloseMobileButtons()
    }

    /**** Runs all relevant functions on 'Caught' wicket ****/
    const handleWicketCatch = (event) => {
        if (battingTeam === false) {
            for (let i = 0; i < homeTeam.length; i++) {
                if (batsman === false && homeTeam[i].status === "batting1") {
                    homeTeam[i].wicketType = "Caught " + event.target.value
                } else if (batsman === true && homeTeam[i].status === "batting2") {
                    homeTeam[i].wicketType = "Caught " + event.target.value
                }
            }
        } else {
            for (let i = 0; i < awayTeam.length; i++) {
                if (batsman === false && awayTeam[i].status === "batting1") {
                    awayTeam[i].wicketType = "Caught " + event.target.value
                } else if (batsman === true && awayTeam[i].status === "batting2") {
                    awayTeam[i].wicketType = "Caught " + event.target.value
                }
            }
        }


        setWicketTaker()
        setWicketBatsmanNumber()
        addWicket()
        handleBowler()

        wicketOutgoingBatsmanStatusChange()
        wicketIncomingBatsmanStatusChange()
        setBattingName()
        toggleCatcherSelect()
        autoCloseMobileButtons()
    }

    /** Switches Bowler at the end of wicket **/
    const handleBowler = () => {
        if (overs.toFixed(2) % 1 === .5) {
            dispatch(switchBowler());
        }
    }

    /**** Selects fielder involved in run out and opens confirm page ****/
    const selectRunOutFielder = (event) => {
        if (battingTeam === false) {
            for (let i = 0; i < homeTeam.length; i++) {
                if (batsman === false && homeTeam[i].status === "batting1") {
                    homeTeam[i].wicketType = "Run Out " + event.target.value
                } else if (batsman === true && homeTeam[i].status === "batting2") {
                    homeTeam[i].wicketType = "Run Out " + event.target.value
                }
            }
        } else {
            for (let i = 0; i < awayTeam.length; i++) {
                if (batsman === false && awayTeam[i].status === "batting1") {
                    awayTeam[i].wicketType = "Run Out " + event.target.value
                } else if (batsman === true && awayTeam[i].status === "batting2") {
                    awayTeam[i].wicketType = "Run Out " + event.target.value
                }
            }
        }
        toggleRunOutRuns();
    }

    /**** Handles adding runs to score with run out wicket button ****/
    const handleRunOutRuns = () => {
        if (battingTeam === false) {
            for (let i = 0; i < homeTeam.length; i++) {
                if (homeTeam[i].status === "batting1" && batsman === false) {
                    homeTeam[i].runs += 1
                    dispatch(incrementTotalRuns(1))
                    dispatch(incrementBatsmanOneRuns(1))
                } else if (homeTeam[i].status === "batting2" && batsman === true) {
                    homeTeam[i].runs += 1
                    dispatch(incrementTotalRuns(1))
                    dispatch(incrementBatsmanTwoRuns(1))
                }
            }
            for (let j = 0; j < awayTeam.length; j++) {
                if (awayTeam[j].status === "bowling1" && bowler === false) {
                    awayTeam[j].bowlingRuns += 1
                    dispatch(minusTally())
                } else if (awayTeam[j].status === "bowling2" && bowler === true) {
                    awayTeam[j].bowlingRuns += 1
                    dispatch(minusTally())
                }
            }
        } else {
            for (let i = 0; i < awayTeam.length; i++) {
                if (awayTeam[i].status === "batting1") {
                    awayTeam[i].runs += 1
                    dispatch(incrementTotalRuns(1))
                    dispatch(incrementBatsmanOneRuns(1))
                } else if (awayTeam[i].status === "batting2") {
                    awayTeam[i].runs += 1
                    dispatch(incrementTotalRuns(1))
                    dispatch(incrementBatsmanTwoRuns(1))
                }
            }
            for (let j = 0; j < homeTeam.length; j++) {
                if (homeTeam[j].status === "bowling1") {
                    homeTeam[j].bowlingRuns += 1
                    dispatch(minusTally())
                } else if (homeTeam[j].status === "bowling2") {
                    homeTeam[j].bowlingRuns += 1
                    dispatch(minusTally())
                }
            }
        }
    }

    /**** Runs all relevant functions on confirming Run Out Wicket ****/
    const confirmRunOut = () => {
        setWicketBatsmanNumber()
        addWicket()
        handleBowler()

        wicketOutgoingBatsmanStatusChange()
        wicketIncomingBatsmanStatusChange()
        setBattingName()
        toggleRunOutRuns()
        autoCloseMobileButtons()
    }


    /**** Selects wicket type and assigns to correct batsman ****/
    const selectWicketType = (event) => {
        if (battingTeam === false) {
            for (let i = 0; i < homeTeam.length; i++) {
                if (batsman === false && homeTeam[i].status === "batting1") {
                    homeTeam[i].wicketType = event.target.value
                } else if (batsman === true && homeTeam[i].status === "batting2") {
                    homeTeam[i].wicketType = event.target.value
                }
            }
        } else {
            for (let i = 0; i < awayTeam.length; i++) {
                if (batsman === false && awayTeam[i].status === "batting1") {
                    awayTeam[i].wicketType = event.target.value
                } else if (batsman === true && awayTeam[i].status === "batting2") {
                    awayTeam[i].wicketType = event.target.value
                }
            }
        }
    };

    /**** Updates outgoing batsman status ****/
    const wicketOutgoingBatsmanStatusChange = () => {
        if (battingTeam === false) {
            for (let i = 0; i < homeTeam.length; i++) {
                if (homeTeam[i].status === "batting1" && batsman === false) {
                    homeTeam[i].status = "out"
                } else if (homeTeam[i].status === "batting2" && batsman === true) {
                    homeTeam[i].status = "out"
                }
            }
        } else {
            for (let i = 0; i < awayTeam.length; i++) {
                if (awayTeam[i].status === "batting1" && batsman === false) {
                    awayTeam[i].status = "out"
                } else if (awayTeam[i].status === "batting2" && batsman === true) {
                    awayTeam[i].status = "out"
                }
            }
        }
    }

    /**** Updates incoming batsman status ****/
    const wicketIncomingBatsmanStatusChange = () => {
        if (battingTeam === false) {
            if (wickets === 0) {
                if (batsman === false) {
                    homeTeam[2].status = "batting1"
                } else {
                    homeTeam[2].status = "batting2"
                }
            } else if (wickets === 1) {
                if (batsman === false) {
                    homeTeam[3].status = "batting1"
                } else {
                    homeTeam[3].status = "batting2"
                }
            } else if (wickets === 2) {
                if (batsman === false) {
                    homeTeam[4].status = "batting1"
                } else {
                    homeTeam[4].status = "batting2"
                }
            } else if (wickets === 3) {
                if (batsman === false) {
                    homeTeam[5].status = "batting1"
                } else {
                    homeTeam[5].status = "batting2"
                }
            } else if (wickets === 4) {
                if (batsman === false) {
                    homeTeam[6].status = "batting1"
                } else {
                    homeTeam[6].status = "batting2"
                }
            } else if (wickets === 5) {
                if (batsman === false) {
                    homeTeam[7].status = "batting1"
                } else {
                    homeTeam[7].status = "batting2"
                }
            } else if (wickets === 6) {
                if (batsman === false) {
                    homeTeam[8].status = "batting1"
                } else {
                    homeTeam[8].status = "batting2"
                }
            } else if (wickets === 7) {
                if (batsman === false) {
                    homeTeam[9].status = "batting1"
                } else {
                    homeTeam[9].status = "batting2"
                }
            } else if (wickets === 8) {
                if (batsman === false) {
                    homeTeam[10].status = "batting1"
                } else {
                    homeTeam[10].status = "batting2"
                }
            }
        } else if (wickets === 0) {
            if (batsman === false) {
                awayTeam[2].status = "batting1"
            } else {
                awayTeam[2].status = "batting2"
            }
        } else if (wickets === 1) {
            if (batsman === false) {
                awayTeam[3].status = "batting1"
            } else {
                awayTeam[3].status = "batting2"
            }
        } else if (wickets === 2) {
            if (batsman === false) {
                awayTeam[4].status = "batting1"
            } else {
                awayTeam[4].status = "batting2"
            }
        } else if (wickets === 3) {
            if (batsman === false) {
                awayTeam[5].status = "batting1"
            } else {
                awayTeam[5].status = "batting2"
            }
        } else if (wickets === 4) {
            if (batsman === false) {
                awayTeam[6].status = "batting1"
            } else {
                awayTeam[6].status = "batting2"
            }
        } else if (wickets === 5) {
            if (batsman === false) {
                awayTeam[7].status = "batting1"
            } else {
                awayTeam[7].status = "batting2"
            }
        } else if (wickets === 6) {
            if (batsman === false) {
                awayTeam[8].status = "batting1"
            } else {
                awayTeam[8].status = "batting2"
            }
        } else if (wickets === 7) {
            if (batsman === false) {
                awayTeam[9].status = "batting1"
            } else {
                awayTeam[9].status = "batting2"
            }
        } else if (wickets === 8) {
            if (batsman === false) {
                awayTeam[10].status = "batting1"
            } else {
                awayTeam[10].status = "batting2"
            }
        }
    }

    /**** Assigns wicket taker to correct batsman ****/
    const setWicketTaker = () => {
        if (battingTeam === false) {
            for (let i = 0; i < homeTeam.length; i++) {
                for (let j = 0; j < awayTeam.length; j++) {
                    if (homeTeam[i].status === "batting1" && batsman === false) {
                        if (awayTeam[j].status === "bowling1" && bowler === false) {
                            homeTeam[i].wicketTaker = awayTeam[j].name
                        } else if (awayTeam[j].status === "bowling2" && bowler === true) {
                            homeTeam[i].wicketTaker = awayTeam[j].name
                        }
                    } else if (homeTeam[i].status === "batting2" && batsman === true) {
                        if (awayTeam[j].status === "bowling1" && bowler === false) {
                            homeTeam[i].wicketTaker = awayTeam[j].name
                        } else if (awayTeam[j].status === "bowling2" && bowler === true) {
                            homeTeam[i].wicketTaker = awayTeam[j].name
                        }
                    }
                }
            }
        } else {
            for (let i = 0; i < awayTeam.length; i++) {
                for (let j = 0; j < homeTeam.length; j++) {
                    if (awayTeam[i].status === "batting1" && batsman === false) {
                        if (homeTeam[j].status === "bowling1" && bowler === false) {
                            awayTeam[i].wicketTaker = homeTeam[j].name
                        } else if (homeTeam[j].status === "bowling2" && bowler === true) {
                            awayTeam[i].wicketTaker = homeTeam[j].name
                        }
                    } else if (awayTeam[i].status === "batting2" && batsman === true) {
                        if (homeTeam[j].status === "bowling1" && bowler === false) {
                            awayTeam[i].wicketTaker = homeTeam[j].name
                        } else if (homeTeam[j].status === "bowling2" && bowler === true) {
                            awayTeam[i].wicketTaker = homeTeam[j].name
                        }
                    }
                }
            }
        }
    }

    /**** Sets batsman name on the scorecard ****/
    const setBattingName = () => {
        if (battingTeam === false) {
            for (let i = 0; i < homeTeam.length; i++) {
                if (homeTeam[i].status === "batting1") {
                    dispatch(setBatsmanOneName(homeTeam[i].name))
                }
                if (homeTeam[i].status === "batting2") {
                    dispatch(setBatsmanTwoName(homeTeam[i].name))
                }
            }
        } else {
            for (let i = 0; i < awayTeam.length; i++) {
                if (awayTeam[i].status === "batting1") {
                    dispatch(setBatsmanOneName(awayTeam[i].name))
                }
                if (awayTeam[i].status === "batting2") {
                    dispatch(setBatsmanTwoName(awayTeam[i].name))
                }
            }
        }
    }

    /**** Sets the batsman number to Fall of Wicket display ****/
    const setWicketBatsmanNumber = () => {
        if (battingTeam === false) {
            for (let i = 0; i < homeTeam.length; i++) {
                if (batsman === false) {
                    if (wickets === 0 && homeTeam[i].status === "batting1") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 1 && homeTeam[i].status === "batting1") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 2 && homeTeam[i].status === "batting1") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 3 && homeTeam[i].status === "batting1") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 4 && homeTeam[i].status === "batting1") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 5 && homeTeam[i].status === "batting1") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 6 && homeTeam[i].status === "batting1") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 7 && homeTeam[i].status === "batting1") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 8 && homeTeam[i].status === "batting1") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 9 && homeTeam[i].status === "batting1") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 10) {
                        return null
                    }
                } else if (batsman === true) {
                    if (wickets === 0 && homeTeam[i].status === "batting2") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 1 && homeTeam[i].status === "batting2") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 2 && homeTeam[i].status === "batting2") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 3 && homeTeam[i].status === "batting2") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 4 && homeTeam[i].status === "batting2") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 5 && homeTeam[i].status === "batting2") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 6 && homeTeam[i].status === "batting2") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 7 && homeTeam[i].status === "batting2") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 8 && homeTeam[i].status === "batting2") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 9 && homeTeam[i].status === "batting2") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 10) {
                        return null
                    }
                }
            }
        } else {
            for (let i = 0; i < awayTeam.length; i++) {
                if (batsman === false) {
                    if (wickets === 0 && awayTeam[i].status === "batting1") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 1 && awayTeam[i].status === "batting1") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 2 && awayTeam[i].status === "batting1") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 3 && awayTeam[i].status === "batting1") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 4 && awayTeam[i].status === "batting1") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 5 && awayTeam[i].status === "batting1") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 6 && awayTeam[i].status === "batting1") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 7 && awayTeam[i].status === "batting1") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 8 && awayTeam[i].status === "batting1") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 9 && awayTeam[i].status === "batting1") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 10) {
                        return null
                    }
                } else if (batsman === true) {
                    if (wickets === 0 && awayTeam[i].status === "batting2") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 1 && awayTeam[i].status === "batting2") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 2 && awayTeam[i].status === "batting2") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 3 && awayTeam[i].status === "batting2") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 4 && awayTeam[i].status === "batting2") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 5 && awayTeam[i].status === "batting2") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 6 && awayTeam[i].status === "batting2") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 7 && awayTeam[i].status === "batting2") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 8 && awayTeam[i].status === "batting2") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 9 && awayTeam[i].status === "batting2") {
                        dispatch(incrementBatsmanAtWicketArray(i + 1))
                    } else if (wickets === 10) {
                        return null
                    }
                }
            }
        }
    }


    return (
            <div className='btn-set'>
                <button className='btn' onClick={toggleWicketType}>Wicket</button>

                {wicketType ?
                    <div className="wicket-type-container">
                        <ul>
                            <li><button onClick={toggleCatcherSelect} value="Caught">Caught</button></li>
                            <li><button onClick={toggleFielderSelect} value="Run Out">Run Out</button></li>
                            <li><button onClick={(event) => handleWicket(event)} value="Bowled">Bowled</button></li>
                            <li><button onClick={(event) => handleWicket(event)} value="LBW">LBW</button></li>
                            <li><button onClick={(event) => handleWicket(event)} value="Stumped">Stumped</button></li>
                            <li><button onClick={(event) => handleWicket(event)} value="Hit Wicket">Hit Wicket</button></li>
                        </ul>
                    </div>
                    :
                    null
                }
                {fielder ?
                     <div className="select-runOut">
                     {battingTeam === false
                         ?
                         <div className='player-list'>
                             <ul>
                                 {awayTeam.map(
                                     person => {
                                         return (
                                             <li key={person.name}><button onClick={(event) => selectRunOutFielder(event)} value={person.name}>{person.name}</button></li>
                                         )
                                     }
                                 )}
                             </ul>
                         </div>
                         :
                         <div className='player-list'>
                             <ul>
                                 {homeTeam.map(
                                     person => {
                                         return (
                                             <li key={person.name}><button onClick={(event) => selectRunOutFielder(event)} value={person.name}>{person.name}</button></li>
                                         )
                                     }
                                 )}
                             </ul>
                         </div>
                     }
                 </div>
                    :
                    null
                }
                {runOutRuns ?
                     <div className="runOut-runs">
                     <div className="current-player-stats">
                         <p>Runs: {totalRuns}</p>
                         <p>Byes: {byes}</p>
                         <p>Leg Byes: {legByes}</p>
                     </div>
                     <ul className='runOut-btn-list'>
                         <li><button onClick={() => handleRunOutRuns()}>Runs +</button></li>
                         <li><button onClick={() => [dispatch(incrementByes(1)), dispatch(incrementTotalExtras(1))]}>Bye +</button></li>
                         <li><button onClick={() => [dispatch(incrementLegByes(1)), dispatch(incrementTotalExtras(1))]}>Leg Bye +</button></li>
                         <li><button className='closeConfirm' onClick={confirmRunOut}>Confirm</button></li>
                     </ul>
                 </div>
                    :
                    null
                }
                {catcher ?
                    <div className="select-catcher">
                        {battingTeam === false ?
                            <div className='player-list'>
                                <ul>
                                    {awayTeam.map(
                                        person => {
                                            return (
                                                <li key={person.name}><button onClick={(event) => handleWicketCatch(event)} value={person.name}>{person.name}</button></li>
                                            )
                                        }
                                    )}
                                </ul>
                            </div>
                            :
                            <div className='player-list'>
                                <ul>
                                    {homeTeam.map(
                                        person => {
                                            return (
                                                <li key={person.name}><button onClick={(event) => handleWicketCatch(event)} value={person.name}>{person.name}</button></li>
                                            )
                                        }
                                    )}
                                </ul>
                            </div>
                        }
                    </div>
                    :
                    null
                }
            </div>

    )
}
