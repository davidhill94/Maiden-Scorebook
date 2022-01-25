import React, { Component } from 'react';
import Buttons from './Buttons';
import Header from './Header';
import Scorebook from './Scorebook';
import Scoreboard from './Scoreboard';
import TeamNews from './TeamNews';

class Functions extends Component {

    appData;

    constructor(props) {
        super(props);
        this.state = {
            totalRuns: 0,
            batsman: "ONE",
            batsmanOne: 0,
            batsmanOneName: "",
            batsmanTwo: 0,
            batsmanTwoName: "",
            wickets: 0,
            balls: 0,
            overs: 0,
            extrasTotal: 0,
            wides: 0,
            noBalls: 0,
            byes: 0,
            legByes: 0,
            penaltyRuns: 0,
            ballsFacedOne: 0,
            ballsFacedTwo: 0,
            recentDeliveries: [""],
            runRate: 0,
            screen: true,
            buttonToggle: true,
            editBowlingToggle: true,
            editBattingToggle: true,
            editExtrasToggle: true,
            wicketArr: ["0"],
            batsmanAtWicket: ["0"],
            wicketActive: "inactive",
            wicketType: ["Bowled", "LBW", "Caught", "Stumped", "Run Out", "Hit Wicket"],
            editingPlayer: "",
            /* Bowling State */
            isBowling: true,
            bowler: "ONE",
            bowlerOne: "Select Bowler", //controls bowler being show on scorecard
            bowlerTwo: "Select Bowler",
            bowlerSelect: "inactive",
            bowlerOneOvers: "",
            bowlerTwoOvers: "",
            bowlerOneMaidens: "",
            bowlerTwoMaidens: "",
            bowlerOneWickets: "",
            bowlerTwoWickets: "",
            bowlerOneRuns: "",
            bowlerTwoRuns: "",
            bowlingArr: [],
            maidensOne: 0,
            maidensTwo: 0,
            /* Team News State */
            homeName: "",
            awayName: "",
            venue: "",
            format: "",
            toss: "",
            isBatting: true, /* true = home team batting */
            teamScreen: true,
            homePlayers: [],
            awayPlayers: []
          };      
      };

      /******** FUNCTIONS ********/
      /*******             *******/

      /**** Switches between scorebook and scoreboard ****/
      changeScreen = () => {
        const innerText = document.getElementById("scorebook-btn")
        if(this.state.screen === false) {
          innerText.innerText = "Scorebook"
          this.setState({
            screen: true
          })
        } else {
          innerText.innerText = "Scoreboard"
          this.setState({
            screen: false
          })
        }
      }

      /**** Switches between button page ****/
      handleButtonToggle = () => {
        if (this.state.buttonToggle === true) {
          this.setState({
            buttonToggle: false
          });
        } else {
          this.setState({
            buttonToggle: true
          });
        };
      };

      /**** Switch between Header and Team News ****/
      handleTeamScreen = () => {
        if (this.state.teamScreen === true) {
            this.setState({
                teamScreen: false
            });
        } else {
            this.setState({
                teamScreen: true
            });
        };
    };
      
      /******* SCOREBOARD RUN FUNCTION *******/
      /*****                             *****/

      /**** Handles No Run button ****/
      noRun = () => {
        if (this.state.batsman === "ONE") {
          if (this.state.overs.toFixed(2) % 1 === .5) { 
            this.setState({
            overs: this.state.overs + .5,
            batsman: "TWO",
            ballsFacedOne: this.state.ballsFacedOne + 1,
            balls: this.state.balls + 1
          })
          } else {
          this.setState({
            ballsFacedOne: this.state.ballsFacedOne + 1,
            batsman: "ONE",
            overs: this.state.overs + 0.1,
            balls: this.state.balls + 1
          })
          }
        } else {
          if (this.state.overs.toFixed(2) % 1 === .5) { 
            this.setState({
            overs: this.state.overs + .5,
            batsman: "ONE",
            ballsFacedTwo: this.state.ballsFacedTwo + 1,
            balls: this.state.balls + 1
          })
          } else {
          this.setState({
            ballsFacedTwo: this.state.ballsFacedTwo + 1,
            batsman: "TWO",
            overs: this.state.overs + 0.1,
            balls: this.state.balls + 1
          })
          }
        };
        /* Adds to recent deliveries array */
        if (this.state.recentDeliveries.length < 10) {
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat([". "])]
            })
        } else if (this.state.recentDeliveries.length >= 10){
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat([". "]).splice([1])]
            })
        }
        /* adds balls to batsman */
        if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.homePlayers.length; i++) {
              if(this.state.batsman === "ONE") {
                  if(this.state.homePlayers[i].status === "batting1") {
                    const battingOne = this.state.homePlayers
                    battingOne[i].balls += 1
                      this.setState({
                          battingOne
                      })
                  }
                } else {
                    if(this.state.homePlayers[i].status === "batting2") {
                        const battingTwo = this.state.homePlayers
                        battingTwo[i].balls += 1
                          this.setState({
                              battingTwo
                          })
                      }
                }
              } 
            } else {
              for (let i = 0; i < this.state.awayPlayers.length; i++) {
                  if(this.state.batsman === "ONE") {
                      if(this.state.awayPlayers[i].status === "batting1") {
                        const battingOne = this.state.awayPlayers
                        battingOne[i].balls += 1
                          this.setState({
                              battingOne
                          })
                      }
                    } else {
                        if(this.state.awayPlayers[i].status === "batting2") {
                            const battingTwo = this.state.awayPlayers
                            battingTwo[i].balls += 1
                              this.setState({
                                  battingTwo
                              })
                          }
                    }
                  } 
      }
      /* Adds balls to bowling statistics */
      if(this.state.isBatting === true) {
        for (let i = 0; i < this.state.awayPlayers.length; i++) {
          if(this.state.bowler === "ONE") {
            const bowlingOne = this.state.awayPlayers
              if(this.state.awayPlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 < .5) {
                bowlingOne[i].oversBowled += 0.1
                bowlingOne[i].bowlingBalls += 1
                  this.setState({
                      bowlingOne
                  })
              } else if (this.state.awayPlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                bowlingOne[i].oversBowled += 0.5
                bowlingOne[i].bowlingBalls += 1
                this.setState({
                    bowlingOne
                })
              }
            } else {
                const bowlingTwo = this.state.awayPlayers
                if(this.state.awayPlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 < .5) {
                    bowlingTwo[i].oversBowled += 0.1
                    bowlingTwo[i].bowlingBalls += 1
                      this.setState({
                        bowlingTwo
                      })
                  } else if (this.state.awayPlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 === .5) {
                    bowlingTwo[i].oversBowled += 0.5
                    bowlingTwo[i].bowlingBalls += 1
                    this.setState({
                        bowlingTwo
                    })
                  }
            }
          } 
        } else {
          for (let i = 0; i < this.state.homePlayers.length; i++) {
            if(this.state.bowler === "ONE") {
              const bowlingOne = this.state.homePlayers
                if(this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 < .5) {
                  bowlingOne[i].oversBowled += 0.1
                  bowlingOne[i].bowlingBalls += 1
                    this.setState({
                        bowlingOne
                    })
                } else if (this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                  bowlingOne[i].oversBowled += 0.5
                  bowlingOne[i].bowlingBalls += 1
                  this.setState({
                      bowlingOne
                  })
                }
              } else {
                  const bowlingTwo = this.state.homePlayers
                  if(this.state.homePlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 < .5) {
                      bowlingTwo[i].oversBowled += 0.1
                      bowlingTwo[i].bowlingBalls += 1
                        this.setState({
                          bowlingTwo
                        })
                    } else if (this.state.homePlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 === .5) {
                      bowlingTwo[i].oversBowled += 0.5
                      bowlingTwo[i].bowlingBalls += 1
                      this.setState({
                          bowlingTwo
                      })
                    }
              }
            }
            }

            console.log(this.state.homePlayers)
          this.addMaiden()
          this.handleBowler()
          this.handleBowlerFigures()
      };

      /**** Handles One Run button ****/
      oneRun = () => {
        if (this.state.batsman === "ONE") {
          if (this.state.overs.toFixed(2) % 1 === .5) { this.setState({
            overs: this.state.overs + .5,
            batsman: "ONE",
            totalRuns: this.state.totalRuns + 1,
            batsmanOne: this.state.batsmanOne + 1,
            ballsFacedOne: this.state.ballsFacedOne + 1,
            balls: this.state.balls + 1,
          })
          } else {
          this.setState({
            totalRuns: this.state.totalRuns + 1,
            batsmanOne: this.state.batsmanOne + 1,
            ballsFacedOne: this.state.ballsFacedOne + 1,
            batsman: "TWO",
            overs: this.state.overs + 0.1,
            balls: this.state.balls + 1,
          })
          }
        } else {
          if (this.state.overs.toFixed(2) % 1 === .5) { this.setState({
            overs: this.state.overs + .5,
            batsman: "TWO",
            totalRuns: this.state.totalRuns + 1,
            batsmanTwo: this.state.batsmanTwo + 1,
            ballsFacedTwo: this.state.ballsFacedTwo + 1,
            balls: this.state.balls + 1,
          })
          } else {
          this.setState({
            totalRuns: this.state.totalRuns + 1,
            batsmanTwo: this.state.batsmanTwo + 1,
            ballsFacedTwo: this.state.ballsFacedTwo + 1,
            batsman: "ONE",
            overs: this.state.overs + 0.1,
            balls: this.state.balls + 1
          })
          }
        };
        if (this.state.recentDeliveries.length < 10) {
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["1 "])]
            })
        } else if (this.state.recentDeliveries.length >= 10){
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["1 "]).splice([1])]
            })
        }
            if(this.state.isBatting === true) {
              for (let i = 0; i < this.state.homePlayers.length; i++) {
                if(this.state.batsman === "ONE") {
                    if(this.state.homePlayers[i].status === "batting1") {
                      const battingOne = this.state.homePlayers
                      battingOne[i].runs += 1
                      battingOne[i].balls += 1
                        this.setState({
                            battingOne
                        })
                    }
                  } else {
                      if(this.state.homePlayers[i].status === "batting2") {
                          const battingTwo = this.state.homePlayers
                          battingTwo[i].runs += 1
                          battingTwo[i].balls += 1
                            this.setState({
                                battingTwo
                            })
                        }
                  }
                } 
              } else {
                for (let i = 0; i < this.state.awayPlayers.length; i++) {
                    if(this.state.batsman === "ONE") {
                        if(this.state.awayPlayers[i].status === "batting1") {
                          const battingOne = this.state.awayPlayers
                          battingOne[i].runs += 1
                          battingOne[i].balls += 1
                            this.setState({
                                battingOne
                            })
                        }
                      } else {
                          if(this.state.awayPlayers[i].status === "batting2") {
                              const battingTwo = this.state.awayPlayers
                              battingTwo[i].runs += 1
                              battingTwo[i].balls += 1
                                this.setState({
                                    battingTwo
                                })
                            }
                      }
                    } 
            }
            if(this.state.isBatting === true) {
                for (let i = 0; i < this.state.awayPlayers.length; i++) {
                  if(this.state.bowler === "ONE") {
                    const bowlingOne = this.state.awayPlayers
                      if(this.state.awayPlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 < .5) {
                        bowlingOne[i].oversBowled += 0.1
                        bowlingOne[i].bowlingRuns += 1
                        bowlingOne[i].bowlingBalls += 1
                          this.setState({
                              bowlingOne
                          })
                      } else if (this.state.awayPlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                        bowlingOne[i].oversBowled += 0.5
                        bowlingOne[i].bowlingRuns += 1
                        bowlingOne[i].bowlingBalls += 1
                        this.setState({
                            bowlingOne
                        })
                      }
                    } else {
                        const bowlingTwo = this.state.awayPlayers
                        if(this.state.awayPlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 < .5) {
                            bowlingTwo[i].oversBowled += 0.1
                            bowlingTwo[i].bowlingRuns += 1
                            bowlingTwo[i].bowlingBalls += 1
                              this.setState({
                                bowlingTwo
                              })
                          } else if (this.state.awayPlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 === .5) {
                            bowlingTwo[i].oversBowled += 0.5
                            bowlingTwo[i].bowlingRuns += 1
                            bowlingTwo[i].bowlingBalls += 1
                            this.setState({
                                bowlingTwo
                            })
                          }
                    }
                  } 
                } else {
                  for (let i = 0; i < this.state.homePlayers.length; i++) {
                    if(this.state.bowler === "ONE") {
                      const bowlingOne = this.state.homePlayers
                        if(this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 < .5) {
                          bowlingOne[i].oversBowled += 0.1
                          bowlingOne[i].bowlingRuns += 1
                          bowlingOne[i].bowlingBalls += 1
                            this.setState({
                                bowlingOne
                            })
                        } else if (this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                          bowlingOne[i].oversBowled += 0.5
                          bowlingOne[i].bowlingRuns += 1
                          bowlingOne[i].bowlingBalls += 1
                          this.setState({
                              bowlingOne
                          })
                        }
                      } else {
                          const bowlingTwo = this.state.homePlayers
                          if(this.state.homePlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 < .5) {
                              bowlingTwo[i].oversBowled += 0.1
                              bowlingTwo[i].bowlingRuns += 1
                              bowlingTwo[i].bowlingBalls += 1
                                this.setState({
                                  bowlingTwo
                                })
                            } else if (this.state.homePlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 === .5) {
                              bowlingTwo[i].oversBowled += 0.5
                              bowlingTwo[i].bowlingRuns += 1
                              bowlingTwo[i].bowlingBalls += 1
                              this.setState({
                                  bowlingTwo
                              })
                            }
                      }
                    } 
                    }
        this.resetMaidenTally()
        this.handleBowler()
        this.handleBowlerFigures()
      };
      
      /**** Handles Two Runs button ****/
      twoRuns = () => {
        if (this.state.batsman === "ONE") {
          if (this.state.overs.toFixed(2) % 1 === .5) { this.setState({
            overs: this.state.overs + .5,
            batsman: "TWO",
            totalRuns: this.state.totalRuns + 2,
            batsmanOne: this.state.batsmanOne + 2,
            ballsFacedOne: this.state.ballsFacedOne + 1,
            balls: this.state.balls + 1
          })
          } else {
          this.setState({
            totalRuns: this.state.totalRuns + 2,
            batsmanOne: this.state.batsmanOne + 2,
            ballsFacedOne: this.state.ballsFacedOne + 1,
            overs: this.state.overs + 0.1,
            balls: this.state.balls + 1
          })
          }
        } else {
          if (this.state.batsman === "TWO") {
          if (this.state.overs.toFixed(2) % 1 === .5) { this.setState({
            overs: this.state.overs + .5,
            batsman: "ONE",
            totalRuns: this.state.totalRuns + 2,
            batsmanTwo: this.state.batsmanTwo + 2,
            ballsFacedTwo: this.state.ballsFacedTwo + 1,
            balls: this.state.balls + 1
          })
        } else {
            this.setState({
            totalRuns: this.state.totalRuns + 2,
            batsmanTwo: this.state.batsmanTwo + 2,
              ballsFacedTwo: this.state.ballsFacedTwo + 1,
            overs: this.state.overs + 0.1,
            balls: this.state.balls + 1
           })
          };
         };
        };
        if (this.state.recentDeliveries.length < 10) {
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["2 "])]
            })
        } else if (this.state.recentDeliveries.length >= 10){
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["2 "]).splice([1])]
            })
        }
        if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.homePlayers.length; i++) {
              if(this.state.batsman === "ONE") {
                  if(this.state.homePlayers[i].status === "batting1") {
                    const battingOne = this.state.homePlayers
                    battingOne[i].runs += 2
                    battingOne[i].balls += 1
                      this.setState({
                          battingOne
                      })
                  }
                } else {
                    if(this.state.homePlayers[i].status === "batting2") {
                        const battingTwo = this.state.homePlayers
                        battingTwo[i].runs += 2
                        battingTwo[i].balls += 1
                          this.setState({
                              battingTwo
                          })
                      }
                }
              } 
            } else {
                for (let i = 0; i < this.state.awayPlayers.length; i++) {
                    if(this.state.batsman === "ONE") {
                        if(this.state.awayPlayers[i].status === "batting1") {
                          const battingOne = this.state.awayPlayers
                          battingOne[i].runs += 2
                          battingOne[i].balls += 1
                            this.setState({
                                battingOne
                            })
                        }
                      } else {
                          if(this.state.awayPlayers[i].status === "batting2") {
                              const battingTwo = this.state.awayPlayers
                              battingTwo[i].runs += 2
                              battingTwo[i].balls += 1
                                this.setState({
                                    battingTwo
                                })
                            }
                      }
                    } 
            }
            this.handleBowler()

            if(this.state.isBatting === true) {
                for (let i = 0; i < this.state.awayPlayers.length; i++) {
                  if(this.state.bowler === "ONE") {
                    const bowlingOne = this.state.awayPlayers
                      if(this.state.awayPlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 < .5) {
                        bowlingOne[i].oversBowled += 0.1
                        bowlingOne[i].bowlingRuns += 2
                        bowlingOne[i].bowlingBalls += 1
                          this.setState({
                              bowlingOne
                          })
                      } else if (this.state.awayPlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                        bowlingOne[i].oversBowled += 0.5
                        bowlingOne[i].bowlingRuns += 2
                        bowlingOne[i].bowlingBalls += 1
                        this.setState({
                            bowlingOne
                        })
                      }
                    } else {
                        const bowlingTwo = this.state.awayPlayers
                        if(this.state.awayPlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 < .5) {
                            bowlingTwo[i].oversBowled += 0.1
                            bowlingTwo[i].bowlingRuns += 2
                            bowlingTwo[i].bowlingBalls += 1
                              this.setState({
                                bowlingTwo
                              })
                          } else if (this.state.awayPlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 === .5) {
                            bowlingTwo[i].oversBowled += 0.5
                            bowlingTwo[i].bowlingRuns += 2
                            bowlingTwo[i].bowlingBalls += 1
                            this.setState({
                                bowlingTwo
                            })
                          }
                    }
                  } 
                } else {
                  for (let i = 0; i < this.state.homePlayers.length; i++) {
                    if(this.state.bowler === "ONE") {
                      const bowlingOne = this.state.homePlayers
                        if(this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 < .5) {
                          bowlingOne[i].oversBowled += 0.1
                          bowlingOne[i].bowlingRuns += 2
                          bowlingOne[i].bowlingBalls += 1
                            this.setState({
                                bowlingOne
                            })
                        } else if (this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                          bowlingOne[i].oversBowled += 0.5
                          bowlingOne[i].bowlingRuns += 2
                          bowlingOne[i].bowlingBalls += 1
                          this.setState({
                              bowlingOne
                          })
                        }
                      } else {
                          const bowlingTwo = this.state.homePlayers
                          if(this.state.homePlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 < .5) {
                              bowlingTwo[i].oversBowled += 0.1
                              bowlingTwo[i].bowlingRuns += 2
                              bowlingTwo[i].bowlingBalls += 1
                                this.setState({
                                  bowlingTwo
                                })
                            } else if (this.state.homePlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 === .5) {
                              bowlingTwo[i].oversBowled += 0.5
                              bowlingTwo[i].bowlingRuns += 2
                              bowlingTwo[i].bowlingBalls += 1
                              this.setState({
                                  bowlingTwo
                              })
                            }
                      }
                    }
                    }
            this.handleBowlerFigures()
            this.resetMaidenTally()
       };
      
      /**** Handles Three Runs button ****/
      threeRuns = () => {
        if (this.state.batsman === "ONE") {
          if (this.state.overs.toFixed(2) % 1 === .5) { this.setState({
            overs: this.state.overs + .5,
            batsman: "ONE",
            totalRuns: this.state.totalRuns + 3,
            batsmanOne: this.state.batsmanOne + 3,
            ballsFacedOne: this.state.ballsFacedOne + 1,
            balls: this.state.balls + 1
          })
          } else {
          this.setState({
            totalRuns: this.state.totalRuns + 3,
            batsmanOne: this.state.batsmanOne + 3,
            ballsFacedOne: this.state.ballsFacedOne + 1,
            batsman: "TWO",
            overs: this.state.overs + 0.1,
            balls: this.state.balls + 1
          })
          }
        } else {
          if (this.state.overs.toFixed(2) % 1 === .5) { this.setState({
            overs: this.state.overs + .5,
            batsman: "TWO",
            totalRuns: this.state.totalRuns + 3,
            batsmanTwo: this.state.batsmanTwo + 3,
            ballsFacedTwo: this.state.ballsFacedTwo + 1,
            balls: this.state.balls + 1
          })
          } else {
          this.setState({
            totalRuns: this.state.totalRuns + 3,
            batsmanTwo: this.state.batsmanTwo + 3,
            ballsFacedTwo: this.state.ballsFacedTwo + 1,
            batsman: "ONE",
            overs: this.state.overs + 0.1,
            balls: this.state.balls + 1
          })
          }
        };
        if (this.state.recentDeliveries.length < 10) {
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["3 "])]
            })
        } else if (this.state.recentDeliveries.length >= 10){
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["3 "]).splice([1])]
            })
        }
        if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.homePlayers.length; i++) {
              if(this.state.batsman === "ONE") {
                  if(this.state.homePlayers[i].status === "batting1") {
                    const battingOne = this.state.homePlayers
                    battingOne[i].runs += 3
                    battingOne[i].balls += 1
                      this.setState({
                          battingOne
                      })
                  }
                } else {
                    if(this.state.homePlayers[i].status === "batting2") {
                        const battingTwo = this.state.homePlayers
                        battingTwo[i].runs += 3
                        battingTwo[i].balls += 1
                          this.setState({
                              battingTwo
                          })
                      }
                }
              } 
            } else {
              for (let i = 0; i < this.state.awayPlayers.length; i++) {
                  if(this.state.batsman === "ONE") {
                      if(this.state.awayPlayers[i].status === "batting1") {
                        const battingOne = this.state.awayPlayers
                        battingOne[i].runs += 3
                        battingOne[i].balls += 1
                          this.setState({
                              battingOne
                          })
                      }
                    } else {
                        if(this.state.awayPlayers[i].status === "batting2") {
                            const battingTwo = this.state.awayPlayers
                            battingTwo[i].runs += 3
                            battingTwo[i].balls += 1
                              this.setState({
                                  battingTwo
                              })
                          }
                    }
                  } 
          }

          if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.awayPlayers.length; i++) {
              if(this.state.bowler === "ONE") {
                const bowlingOne = this.state.awayPlayers
                  if(this.state.awayPlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 < .5) {
                    bowlingOne[i].oversBowled += 0.1
                    bowlingOne[i].bowlingRuns += 3
                    bowlingOne[i].bowlingBalls += 1
                      this.setState({
                          bowlingOne
                      })
                  } else if (this.state.awayPlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                    bowlingOne[i].oversBowled += 0.5
                    bowlingOne[i].bowlingRuns += 3
                    bowlingOne[i].bowlingBalls += 1
                    this.setState({
                        bowlingOne
                    })
                  }
                } else {
                    const bowlingTwo = this.state.awayPlayers
                    if(this.state.awayPlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 < .5) {
                        bowlingTwo[i].oversBowled += 0.1
                        bowlingTwo[i].bowlingRuns += 3
                        bowlingTwo[i].bowlingBalls += 1
                          this.setState({
                            bowlingTwo
                          })
                      } else if (this.state.awayPlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 === .5) {
                        bowlingTwo[i].oversBowled += 0.5
                        bowlingTwo[i].bowlingRuns += 3
                        bowlingTwo[i].bowlingBalls += 1
                        this.setState({
                            bowlingTwo
                        })
                      }
                }
              } 
            } else {
              for (let i = 0; i < this.state.homePlayers.length; i++) {
                if(this.state.bowler === "ONE") {
                  const bowlingOne = this.state.homePlayers
                    if(this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 < .5) {
                      bowlingOne[i].oversBowled += 0.1
                      bowlingOne[i].bowlingRuns += 3
                      bowlingOne[i].bowlingBalls += 1
                        this.setState({
                            bowlingOne
                        })
                    } else if (this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                      bowlingOne[i].oversBowled += 0.5
                      bowlingOne[i].bowlingRuns += 3
                      bowlingOne[i].bowlingBalls += 1
                      this.setState({
                          bowlingOne
                      })
                    }
                  } else {
                      const bowlingTwo = this.state.homePlayers
                      if(this.state.homePlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 < .5) {
                          bowlingTwo[i].oversBowled += 0.1
                          bowlingTwo[i].bowlingRuns += 3
                          bowlingTwo[i].bowlingBalls += 1
                            this.setState({
                              bowlingTwo
                            })
                        } else if (this.state.homePlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 === .5) {
                          bowlingTwo[i].oversBowled += 0.5
                          bowlingTwo[i].bowlingRuns += 3
                          bowlingTwo[i].bowlingBalls += 1
                          this.setState({
                              bowlingTwo
                          })
                        }
                  }
                }
                }
                this.handleBowler()
                this.handleBowlerFigures()
                this.resetMaidenTally()
      };
      
      /**** Handles Four Runs button ****/
      fourRuns = () => {
        if (this.state.batsman === "ONE") {
          if (this.state.overs.toFixed(2) % 1 === .5) { this.setState({
            overs: this.state.overs + .5,
            batsman: "TWO",
            totalRuns: this.state.totalRuns + 4,
            batsmanOne: this.state.batsmanOne + 4,
            ballsFacedOne: this.state.ballsFacedOne + 1,
            balls: this.state.balls + 1
          })
          } else {
          this.setState({
            totalRuns: this.state.totalRuns + 4,
            batsmanOne: this.state.batsmanOne + 4,
            ballsFacedOne: this.state.ballsFacedOne + 1,
            overs: this.state.overs + 0.1,
            balls: this.state.balls + 1
          })
          }
        } else {
          if (this.state.batsman === "TWO") {
          if (this.state.overs.toFixed(2) % 1 === .5) { this.setState({
            overs: this.state.overs + .5,
            batsman: "ONE",
            totalRuns: this.state.totalRuns + 4,
            batsmanTwo: this.state.batsmanTwo + 4,
            ballsFacedTwo: this.state.ballsFacedTwo + 1,
            balls: this.state.balls + 1
          })
        } else {
            this.setState({
            totalRuns: this.state.totalRuns + 4,
            batsmanTwo: this.state.batsmanTwo + 4,
              ballsFacedTwo: this.state.ballsFacedTwo + 1,
            overs: this.state.overs + 0.1,
            balls: this.state.balls + 1
           })
          };
         };
        };
        if (this.state.recentDeliveries.length < 10) {
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["4 "])]
            })
        } else if (this.state.recentDeliveries.length >= 10){
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["4 "]).splice([1])]
            })
        }
        if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.homePlayers.length; i++) {
              if(this.state.batsman === "ONE") {
                  if(this.state.homePlayers[i].status === "batting1") {
                    const battingOne = this.state.homePlayers
                    battingOne[i].runs += 4
                    battingOne[i].balls += 1
                      this.setState({
                          battingOne
                      })
                  }
                } else {
                    if(this.state.homePlayers[i].status === "batting2") {
                        const battingTwo = this.state.homePlayers
                        battingTwo[i].runs += 4
                        battingTwo[i].balls += 1
                          this.setState({
                              battingTwo
                          })
                      }
                }
              } 
            } else {
              for (let i = 0; i < this.state.awayPlayers.length; i++) {
                  if(this.state.batsman === "ONE") {
                      if(this.state.awayPlayers[i].status === "batting1") {
                        const battingOne = this.state.awayPlayers
                        battingOne[i].runs += 4
                        battingOne[i].balls += 1
                          this.setState({
                              battingOne
                          })
                      }
                    } else {
                        if(this.state.awayPlayers[i].status === "batting2") {
                            const battingTwo = this.state.awayPlayers
                            battingTwo[i].runs += 4
                            battingTwo[i].balls += 1
                              this.setState({
                                  battingTwo
                              })
                          }
                    }
                  } 
          }
          if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.awayPlayers.length; i++) {
              if(this.state.bowler === "ONE") {
                const bowlingOne = this.state.awayPlayers
                  if(this.state.awayPlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 < .5) {
                    bowlingOne[i].oversBowled += 0.1
                    bowlingOne[i].bowlingRuns += 4
                    bowlingOne[i].bowlingBalls += 1
                      this.setState({
                          bowlingOne
                      })
                  } else if (this.state.awayPlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                    bowlingOne[i].oversBowled += 0.5
                    bowlingOne[i].bowlingRuns += 4
                    bowlingOne[i].bowlingBalls += 1
                    this.setState({
                        bowlingOne
                    })
                  }
                } else {
                    const bowlingTwo = this.state.awayPlayers
                    if(this.state.awayPlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 < .5) {
                        bowlingTwo[i].oversBowled += 0.1
                        bowlingTwo[i].bowlingRuns += 4
                        bowlingTwo[i].bowlingBalls += 1
                          this.setState({
                            bowlingTwo
                          })
                      } else if (this.state.awayPlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 === .5) {
                        bowlingTwo[i].oversBowled += 0.5
                        bowlingTwo[i].bowlingRuns += 4
                        bowlingTwo[i].bowlingBalls += 1
                        this.setState({
                            bowlingTwo
                        })
                      }
                }
              } 
            } else {
              for (let i = 0; i < this.state.homePlayers.length; i++) {
                if(this.state.bowler === "ONE") {
                  const bowlingOne = this.state.homePlayers
                    if(this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 < .5) {
                      bowlingOne[i].oversBowled += 0.1
                      bowlingOne[i].bowlingRuns += 4
                      bowlingOne[i].bowlingBalls += 1
                        this.setState({
                            bowlingOne
                        })
                    } else if (this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                      bowlingOne[i].oversBowled += 0.5
                      bowlingOne[i].bowlingRuns += 4
                      bowlingOne[i].bowlingBalls += 1
                      this.setState({
                          bowlingOne
                      })
                    }
                  } else {
                      const bowlingTwo = this.state.homePlayers
                      if(this.state.homePlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 < .5) {
                          bowlingTwo[i].oversBowled += 0.1
                          bowlingTwo[i].bowlingRuns += 4
                          bowlingTwo[i].bowlingBalls += 1
                            this.setState({
                              bowlingTwo
                            })
                        } else if (this.state.homePlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 === .5) {
                          bowlingTwo[i].oversBowled += 0.5
                          bowlingTwo[i].bowlingRuns += 4
                          bowlingTwo[i].bowlingBalls += 1
                          this.setState({
                              bowlingTwo
                          })
                        }
                  }
                }  
                }
          this.handleBowler()
          this.handleBowlerFigures()
          this.resetMaidenTally()

       };
      
      /**** Handles Six Runs button ****/
      sixRuns = () => {
        if (this.state.batsman === "ONE") {
          if (this.state.overs.toFixed(2) % 1 === .5) { this.setState({
            overs: this.state.overs + .5,
            batsman: "TWO",
            totalRuns: this.state.totalRuns + 6,
            batsmanOne: this.state.batsmanOne + 6,
            ballsFacedOne: this.state.ballsFacedOne + 1,
            balls: this.state.balls + 1
          })
          } else {
          this.setState({
            totalRuns: this.state.totalRuns + 6,
            batsmanOne: this.state.batsmanOne + 6,
            ballsFacedOne: this.state.ballsFacedOne + 1,
            overs: this.state.overs + 0.1,
            balls: this.state.balls + 1
          })
          }
        } else {
          if (this.state.batsman === "TWO") {
          if (this.state.overs.toFixed(2) % 1 === .5) { this.setState({
            overs: this.state.overs + .5,
            batsman: "ONE",
            totalRuns: this.state.totalRuns + 6,
            batsmanTwo: this.state.batsmanTwo + 6,
            ballsFacedTwo: this.state.ballsFacedTwo + 1,
            balls: this.state.balls + 1
          })
        } else {
            this.setState({
            totalRuns: this.state.totalRuns + 6,
            batsmanTwo: this.state.batsmanTwo + 6,
              ballsFacedTwo: this.state.ballsFacedTwo + 1,
            overs: this.state.overs + 0.1,
            balls: this.state.balls + 1
           })
          };
         };
        };
        if (this.state.recentDeliveries.length < 10) {
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["6 "])]
            })
        } else if (this.state.recentDeliveries.length >= 10){
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["6 "]).splice([1])]
            })
        }
        if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.homePlayers.length; i++) {
              if(this.state.batsman === "ONE") {
                  if(this.state.homePlayers[i].status === "batting1") {
                    const battingOne = this.state.homePlayers
                    battingOne[i].runs += 6
                    battingOne[i].balls += 1
                      this.setState({
                          battingOne
                      })
                  }
                } else {
                    if(this.state.homePlayers[i].status === "batting2") {
                        const battingTwo = this.state.homePlayers
                        battingTwo[i].runs += 6
                        battingTwo[i].balls += 1
                          this.setState({
                              battingTwo
                          })
                      }
                }
              } 
            } else {
              for (let i = 0; i < this.state.awayPlayers.length; i++) {
                  if(this.state.batsman === "ONE") {
                      if(this.state.awayPlayers[i].status === "batting1") {
                        const battingOne = this.state.awayPlayers
                        battingOne[i].runs += 6
                        battingOne[i].balls += 1
                          this.setState({
                              battingOne
                          })
                      }
                    } else {
                        if(this.state.awayPlayers[i].status === "batting2") {
                            const battingTwo = this.state.awayPlayers
                            battingTwo[i].runs += 6
                            battingTwo[i].balls += 1
                              this.setState({
                                  battingTwo
                              })
                          }
                    }
                  } 
          }

          if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.awayPlayers.length; i++) {
              if(this.state.bowler === "ONE") {
                const bowlingOne = this.state.awayPlayers
                  if(this.state.awayPlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 < .5) {
                    bowlingOne[i].oversBowled += 0.1
                    bowlingOne[i].bowlingRuns += 6
                    bowlingOne[i].bowlingBalls += 1
                      this.setState({
                          bowlingOne
                      })
                  } else if (this.state.awayPlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                    bowlingOne[i].oversBowled += 0.5
                    bowlingOne[i].bowlingRuns += 6
                    bowlingOne[i].bowlingBalls += 1
                    this.setState({
                        bowlingOne
                    })
                  }
                } else {
                    const bowlingTwo = this.state.awayPlayers
                    if(this.state.awayPlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 < .5) {
                        bowlingTwo[i].oversBowled += 0.1
                        bowlingTwo[i].bowlingRuns += 6
                        bowlingTwo[i].bowlingBalls += 1
                          this.setState({
                            bowlingTwo
                          })
                      } else if (this.state.awayPlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 === .5) {
                        bowlingTwo[i].oversBowled += 0.5
                        bowlingTwo[i].bowlingRuns += 6
                        bowlingTwo[i].bowlingBalls += 1
                        this.setState({
                            bowlingTwo
                        })
                      }
                }
              } 
            } else {
              for (let i = 0; i < this.state.homePlayers.length; i++) {
                if(this.state.bowler === "ONE") {
                  const bowlingOne = this.state.homePlayers
                    if(this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 < .5) {
                      bowlingOne[i].oversBowled += 0.1
                      bowlingOne[i].bowlingRuns += 6
                      bowlingOne[i].bowlingBalls += 1
                        this.setState({
                            bowlingOne
                        })
                    } else if (this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                      bowlingOne[i].oversBowled += 0.5
                      bowlingOne[i].bowlingRuns += 6
                      bowlingOne[i].bowlingBalls += 1
                      this.setState({
                          bowlingOne
                      })
                    }
                  } else {
                      const bowlingTwo = this.state.homePlayers
                      if(this.state.homePlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 < .5) {
                          bowlingTwo[i].oversBowled += 0.1
                          bowlingTwo[i].bowlingRuns += 6
                          bowlingTwo[i].bowlingBalls += 1
                            this.setState({
                              bowlingTwo
                            })
                        } else if (this.state.homePlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 === .5) {
                          bowlingTwo[i].oversBowled += 0.5
                          bowlingTwo[i].bowlingRuns += 6
                          bowlingTwo[i].bowlingBalls += 1
                          this.setState({
                              bowlingTwo
                          })
                        }
                  }
                } 
                }
                this.handleBowler()
                this.handleBowlerFigures()
                this.resetMaidenTally()
      
       };
      
      /**** Handles Add Wide button ****/
      addWide = () => {
        this.setState({
          totalRuns: this.state.totalRuns + 1,
          wides: this.state.wides + 1,
          extrasTotal: this.state.extrasTotal + 1
        })
        if (this.state.recentDeliveries.length < 10) {
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["wd "])]
            })
        } else if (this.state.recentDeliveries.length >= 10){
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["wd "]).splice([1])]
            })
        }
        if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.awayPlayers.length; i++) {
              if(this.state.bowler === "ONE") {
                const bowlingOne = this.state.awayPlayers
                  if(this.state.awayPlayers[i].status === "bowling1") {
                    bowlingOne[i].bowlingRuns += 1
                      this.setState({
                          bowlingOne
                      })
                  } 
                } else {
                    const bowlingTwo = this.state.awayPlayers
                    if(this.state.awayPlayers[i].status === "bowling2") {
                        bowlingTwo[i].bowlingRuns += 1
                          this.setState({
                            bowlingTwo
                          })
                      }
                }
              } 
            } else {
              for (let i = 0; i < this.state.homePlayers.length; i++) {
                  if(this.state.bowler === "ONE") {
                    const bowlingOne = this.state.homePlayers
                      if(this.state.homePlayers[i].status === "bowling1") {
                        bowlingOne[i].bowlingRuns += 1
                          this.setState({
                            bowlingOne
                          })
                      }
                    } else {
                        const bowlingTwo = this.state.homePlayers
                        if(this.state.homePlayers[i].status === "bowling2") {
                            bowlingTwo[i].bowlingRuns += 1
                              this.setState({
                                bowlingTwo
                              })
                          }
                    }
                  } 
                }
                this.handleBowlerFigures()
                this.handleMaidenTallyWideNoBall()
      
      };
      
      /**** Handles Add No Ball button ****/
      addNoBall = () => {
        this.setState({
          totalRuns: this.state.totalRuns + 1,
          noBalls: this.state.noBalls + 1,
          extrasTotal: this.state.extrasTotal + 1
        })
        if (this.state.recentDeliveries.length < 10) {
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["nb "])]
            })
        } else if (this.state.recentDeliveries.length >= 10){
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["nb "]).splice([1])]
            })
        }
        if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.awayPlayers.length; i++) {
              if(this.state.bowler === "ONE") {
                const bowlingOne = this.state.awayPlayers
                  if(this.state.awayPlayers[i].status === "bowling1") {
                    bowlingOne[i].bowlingRuns += 1
                      this.setState({
                          bowlingOne
                      })
                  } 
                } else {
                    const bowlingTwo = this.state.awayPlayers
                    if(this.state.awayPlayers[i].status === "bowling2") {
                        bowlingTwo[i].bowlingRuns += 1
                          this.setState({
                            bowlingTwo
                          })
                      }
                }
              } 
            } else {
              for (let i = 0; i < this.state.homePlayers.length; i++) {
                  if(this.state.bowler === "ONE") {
                    const bowlingOne = this.state.homePlayers
                      if(this.state.homePlayers[i].status === "bowling1") {
                        bowlingOne[i].bowlingRuns += 1
                          this.setState({
                            bowlingOne
                          })
                      }
                    } else {
                        const bowlingTwo = this.state.homePlayers
                        if(this.state.homePlayers[i].status === "bowling2") {
                            bowlingTwo[i].bowlingRuns += 1
                              this.setState({
                                bowlingTwo
                              })
                          }
                    }
                  } 
                }
                if(this.state.isBatting === true) {
                  for (let i = 0; i < this.state.homePlayers.length; i++) {
                    if(this.state.batsman === "ONE") {
                        if(this.state.homePlayers[i].status === "batting1") {
                          const battingOne = this.state.homePlayers
                          battingOne[i].balls += 1
                            this.setState({
                                battingOne,
                                ballsFacedOne: this.state.ballsFacedOne + 1
                            })
                        }
                      } else {
                          if(this.state.homePlayers[i].status === "batting2") {
                              const battingTwo = this.state.homePlayers
                              battingTwo[i].balls += 1
                                this.setState({
                                    battingTwo,
                                    ballsFacedTwo: this.state.ballsFacedTwo + 1
                                })
                            }
                      }
                    } 
                  } else {
                    for (let i = 0; i < this.state.awayPlayers.length; i++) {
                        if(this.state.batsman === "ONE") {
                            if(this.state.awayPlayers[i].status === "batting1") {
                              const battingOne = this.state.awayPlayers
                              battingOne[i].balls += 1
                                this.setState({
                                    battingOne,
                                    ballsFacedOne: this.state.ballsFacedOne + 1
                                })
                            }
                          } else {
                              if(this.state.awayPlayers[i].status === "batting2") {
                                  const battingTwo = this.state.awayPlayers
                                  battingTwo[i].balls += 1
                                    this.setState({
                                        battingTwo,
                                        ballsFacedTwo: this.state.ballsFacedTwo + 1
                                    })
                                }
                          }
                        } 
                }
        this.handleBowlerFigures()
        this.handleMaidenTallyWideNoBall()

      };
      
      /**** Handles Add One Bye button ****/
      addBye1 = () => {
        if (this.state.batsman === "ONE" && this.state.overs.toFixed(2) % 1 === .5) {
            this.setState({
              batsman: "ONE",
              byes: this.state.byes + 1,
              extrasTotal: this.state.extrasTotal + 1,
              totalRuns: this.state.totalRuns + 1,
              overs: this.state.overs + .5,
              ballsFacedOne: this.state.ballsFacedOne + 1,
              balls: this.state.balls + 1
            })
        } else if (this.state.batsman === "TWO" && this.state.overs.toFixed(2) % 1 === .5) {
          this.setState({
            batsman:"TWO",
            byes: this.state.byes + 1,
            extrasTotal: this.state.extrasTotal + 1,
            totalRuns: this.state.totalRuns + 1,
            overs: this.state.overs + .5,
            ballsFacedTwo: this.state.ballsFacedTwo + 1,
            balls: this.state.balls + 1
          })
        } else if (this.state.batsman === "ONE") {
          this.setState({
            batsman:"TWO",
            byes: this.state.byes + 1,
            extrasTotal: this.state.extrasTotal + 1,
            totalRuns: this.state.totalRuns + 1,
            overs: this.state.overs + .1,
            ballsFacedOne: this.state.ballsFacedOne + 1,
            balls: this.state.balls + 1
          })
        } else if (this.state.batsman === "TWO") {
          this.setState({
            batsman:"ONE",
            byes: this.state.byes + 1,
            extrasTotal: this.state.extrasTotal + 1,
            totalRuns: this.state.totalRuns + 1,
            overs: this.state.overs + .1,
            ballsFacedTwo: this.state.ballsFacedTwo + 1,
            balls: this.state.balls + 1
          })
        };
        if (this.state.recentDeliveries.length < 10) {
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["b "])]
            })
        } else if (this.state.recentDeliveries.length >= 10){
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["b "]).splice([1])]
            })
        }
        if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.homePlayers.length; i++) {
              if(this.state.batsman === "ONE") {
                  if(this.state.homePlayers[i].status === "batting1") {
                    const battingOne = this.state.homePlayers
                    battingOne[i].balls += 1
                      this.setState({
                          battingOne
                      })
                  }
                } else {
                    if(this.state.homePlayers[i].status === "batting2") {
                        const battingTwo = this.state.homePlayers
                        battingTwo[i].balls += 1
                          this.setState({
                              battingTwo
                          })
                      }
                }
              } 
            } else {
              for (let i = 0; i < this.state.awayPlayers.length; i++) {
                  if(this.state.batsman === "ONE") {
                      if(this.state.awayPlayers[i].status === "batting1") {
                        const battingOne = this.state.awayPlayers
                        battingOne[i].balls += 1
                          this.setState({
                              battingOne
                          })
                      }
                    } else {
                        if(this.state.awayPlayers[i].status === "batting2") {
                            const battingTwo = this.state.awayPlayers
                            battingTwo[i].balls += 1
                              this.setState({
                                  battingTwo
                              })
                          }
                    }
                  } 
          }

          if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.awayPlayers.length; i++) {
              if(this.state.bowler === "ONE") {
                const bowlingOne = this.state.awayPlayers
                  if(this.state.awayPlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 < .5) {
                    bowlingOne[i].oversBowled += 0.1
                    bowlingOne[i].bowlingBalls += 1
                      this.setState({
                          bowlingOne
                      })
                  } else if (this.state.awayPlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                    bowlingOne[i].oversBowled += 0.5
                    bowlingOne[i].bowlingBalls += 1
                    this.setState({
                        bowlingOne
                    })
                  }
                } else {
                    const bowlingTwo = this.state.awayPlayers
                    if(this.state.awayPlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 < .5) {
                        bowlingTwo[i].oversBowled += 0.1
                        bowlingTwo[i].bowlingBalls += 1
                          this.setState({
                            bowlingTwo
                          })
                      } else if (this.state.awayPlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 === .5) {
                        bowlingTwo[i].oversBowled += 0.5
                        bowlingTwo[i].bowlingBalls += 1
                        this.setState({
                            bowlingTwo
                        })
                      }
                }
              } 
            } else {
              for (let i = 0; i < this.state.homePlayers.length; i++) {
                if(this.state.bowler === "ONE") {
                  const bowlingOne = this.state.homePlayers
                    if(this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 < .5) {
                      bowlingOne[i].oversBowled += 0.1
                      bowlingOne[i].bowlingBalls += 1
                        this.setState({
                            bowlingOne
                        })
                    } else if (this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                      bowlingOne[i].oversBowled += 0.5
                      bowlingOne[i].bowlingBalls += 1
                      this.setState({
                          bowlingOne
                      })
                    }
                  } else {
                      const bowlingTwo = this.state.homePlayers
                      if(this.state.homePlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 < .5) {
                          bowlingTwo[i].oversBowled += 0.1
                          bowlingTwo[i].bowlingBalls += 1
                            this.setState({
                              bowlingTwo
                            })
                        } else if (this.state.homePlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 === .5) {
                          bowlingTwo[i].oversBowled += 0.5
                          bowlingTwo[i].bowlingBalls += 1
                          this.setState({
                              bowlingTwo
                          })
                        }
                  }
                }
                }
                this.handleBowler()
                this.handleBowlerFigures()
      
      };
      
      /**** Handles Add Two Byes button ****/
      addBye2 = () => {
        if (this.state.batsman === "ONE" && this.state.overs.toFixed(2) % 1 === .5) {
            this.setState({
              batsman: "TWO",
              byes: this.state.byes + 2,
              extrasTotal: this.state.extrasTotal + 2,
              totalRuns: this.state.totalRuns + 2,
              overs: this.state.overs + .5,
              ballsFacedOne: this.state.ballsFacedOne + 1,
              balls: this.state.balls + 1
            })
        } else if (this.state.batsman === "TWO" && this.state.overs.toFixed(2) % 1 === .5) {
          this.setState({
            batsman:"ONE",
            byes: this.state.byes + 2,
              extrasTotal: this.state.extrasTotal + 2,
              totalRuns: this.state.totalRuns + 2,
            overs: this.state.overs + .5,
            ballsFacedTwo: this.state.ballsFacedTwo + 1,
            balls: this.state.balls + 1
          })
        } else if (this.state.batsman === "ONE") {
          this.setState({
            batsman:"ONE",
            byes: this.state.byes + 2,
              extrasTotal: this.state.extrasTotal + 2,
              totalRuns: this.state.totalRuns + 2,
            overs: this.state.overs + .1,
            ballsFacedOne: this.state.ballsFacedOne + 1,
            balls: this.state.balls + 1
          })
        } else if (this.state.batsman === "TWO") {
          this.setState({
            batsman:"TWO",
            byes: this.state.byes + 2,
              extrasTotal: this.state.extrasTotal + 2,
              totalRuns: this.state.totalRuns + 2,
            overs: this.state.overs + .1,
            ballsFacedTwo: this.state.ballsFacedTwo + 1,
            balls: this.state.balls + 1
          })
        };
        if (this.state.recentDeliveries.length < 10) {
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["2b "])]
            })
        } else if (this.state.recentDeliveries.length >= 10){
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["2b "]).splice([1])]
            })
        }
        if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.homePlayers.length; i++) {
              if(this.state.batsman === "ONE") {
                  if(this.state.homePlayers[i].status === "batting1") {
                    const battingOne = this.state.homePlayers
                    battingOne[i].balls += 1
                      this.setState({
                          battingOne
                      })
                  }
                } else {
                    if(this.state.homePlayers[i].status === "batting2") {
                        const battingTwo = this.state.homePlayers
                        battingTwo[i].balls += 1
                          this.setState({
                              battingTwo
                          })
                      }
                }
              } 
            } else {
              for (let i = 0; i < this.state.awayPlayers.length; i++) {
                  if(this.state.batsman === "ONE") {
                      if(this.state.awayPlayers[i].status === "batting1") {
                        const battingOne = this.state.awayPlayers
                        battingOne[i].balls += 1
                          this.setState({
                              battingOne
                          })
                      }
                    } else {
                        if(this.state.awayPlayers[i].status === "batting2") {
                            const battingTwo = this.state.awayPlayers
                            battingTwo[i].balls += 1
                              this.setState({
                                  battingTwo
                              })
                          }
                    }
                  } 
          }
          if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.awayPlayers.length; i++) {
              if(this.state.bowler === "ONE") {
                const bowlingOne = this.state.awayPlayers
                  if(this.state.awayPlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 < .5) {
                    bowlingOne[i].oversBowled += 0.1
                    bowlingOne[i].bowlingBalls += 1
                      this.setState({
                          bowlingOne
                      })
                  } else if (this.state.awayPlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                    bowlingOne[i].oversBowled += 0.5
                    bowlingOne[i].bowlingBalls += 1
                    this.setState({
                        bowlingOne
                    })
                  }
                } else {
                    const bowlingTwo = this.state.awayPlayers
                    if(this.state.awayPlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 < .5) {
                        bowlingTwo[i].oversBowled += 0.1
                        bowlingTwo[i].bowlingBalls += 1
                          this.setState({
                            bowlingTwo
                          })
                      } else if (this.state.awayPlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 === .5) {
                        bowlingTwo[i].oversBowled += 0.5
                        bowlingTwo[i].bowlingBalls += 1
                        this.setState({
                            bowlingTwo
                        })
                      }
                }
              } 
            } else {
              for (let i = 0; i < this.state.homePlayers.length; i++) {
                if(this.state.bowler === "ONE") {
                  const bowlingOne = this.state.homePlayers
                    if(this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 < .5) {
                      bowlingOne[i].oversBowled += 0.1
                      bowlingOne[i].bowlingBalls += 1
                        this.setState({
                            bowlingOne
                        })
                    } else if (this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                      bowlingOne[i].oversBowled += 0.5
                      bowlingOne[i].bowlingBalls += 1
                      this.setState({
                          bowlingOne
                      })
                    }
                  } else {
                      const bowlingTwo = this.state.homePlayers
                      if(this.state.homePlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 < .5) {
                          bowlingTwo[i].oversBowled += 0.1
                          bowlingTwo[i].bowlingBalls += 1
                            this.setState({
                              bowlingTwo
                            })
                        } else if (this.state.homePlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 === .5) {
                          bowlingTwo[i].oversBowled += 0.5
                          bowlingTwo[i].bowlingBalls += 1
                          this.setState({
                              bowlingTwo
                          })
                        }
                  }
                } 
                }
                this.handleBowler()
                this.handleBowlerFigures()
      
      };
      
      /**** Handles Add Three Byes button ****/
      addBye3 = () => {
        if (this.state.batsman === "ONE" && this.state.overs.toFixed(2) % 1 === .5) {
            this.setState({
              batsman: "ONE",
              byes: this.state.byes + 3,
              extrasTotal: this.state.extrasTotal + 3,
              totalRuns: this.state.totalRuns + 3,
              overs: this.state.overs + .5,
              ballsFacedOne: this.state.ballsFacedOne + 1,
              balls: this.state.balls + 1
            })
        } else if (this.state.batsman === "TWO" && this.state.overs.toFixed(2) % 1 === .5) {
          this.setState({
            batsman:"TWO",
            byes: this.state.byes + 3,
              extrasTotal: this.state.extrasTotal + 3,
              totalRuns: this.state.totalRuns + 3,
            overs: this.state.overs + .5,
            ballsFacedTwo: this.state.ballsFacedTwo + 1,
            balls: this.state.balls + 1
          })
        } else if (this.state.batsman === "ONE") {
          this.setState({
            batsman:"TWO",
            byes: this.state.byes + 3,
              extrasTotal: this.state.extrasTotal + 3,
              totalRuns: this.state.totalRuns + 3,
             overs: this.state.overs + .1,
            ballsFacedOne: this.state.ballsFacedOne + 1,
            balls: this.state.balls + 1
          })
        } else if (this.state.batsman === "TWO") {
          this.setState({
            batsman:"ONE",
            byes: this.state.byes + 3,
              extrasTotal: this.state.extrasTotal + 3,
              totalRuns: this.state.totalRuns + 3,
            overs: this.state.overs + .1,
            ballsFacedTwo: this.state.ballsFacedTwo + 1,
            balls: this.state.balls + 1
          })
        };
        if (this.state.recentDeliveries.length < 10) {
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["3b "])]
            })
        } else if (this.state.recentDeliveries.length >= 10){
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["3b "]).splice([1])]
            })
        }
        if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.homePlayers.length; i++) {
              if(this.state.batsman === "ONE") {
                  if(this.state.homePlayers[i].status === "batting1") {
                    const battingOne = this.state.homePlayers
                    battingOne[i].balls += 1
                      this.setState({
                          battingOne
                      })
                  }
                } else {
                    if(this.state.homePlayers[i].status === "batting2") {
                        const battingTwo = this.state.homePlayers
                        battingTwo[i].balls += 1
                          this.setState({
                              battingTwo
                          })
                      }
                }
              } 
            } else {
              for (let i = 0; i < this.state.awayPlayers.length; i++) {
                  if(this.state.batsman === "ONE") {
                      if(this.state.awayPlayers[i].status === "batting1") {
                        const battingOne = this.state.awayPlayers
                        battingOne[i].balls += 1
                          this.setState({
                              battingOne
                          })
                      }
                    } else {
                        if(this.state.awayPlayers[i].status === "batting2") {
                            const battingTwo = this.state.awayPlayers
                            battingTwo[i].balls += 1
                              this.setState({
                                  battingTwo
                              })
                          }
                    }
                  } 
          }

          if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.awayPlayers.length; i++) {
              if(this.state.bowler === "ONE") {
                const bowlingOne = this.state.awayPlayers
                  if(this.state.awayPlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 < .5) {
                    bowlingOne[i].oversBowled += 0.1
                    bowlingOne[i].bowlingBalls += 1
                      this.setState({
                          bowlingOne
                      })
                  } else if (this.state.awayPlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                    bowlingOne[i].oversBowled += 0.5
                    bowlingOne[i].bowlingBalls += 1
                    this.setState({
                        bowlingOne
                    })
                  }
                } else {
                    const bowlingTwo = this.state.awayPlayers
                    if(this.state.awayPlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 < .5) {
                        bowlingTwo[i].oversBowled += 0.1
                        bowlingTwo[i].bowlingBalls += 1
                          this.setState({
                            bowlingTwo
                          })
                      } else if (this.state.awayPlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 === .5) {
                        bowlingTwo[i].oversBowled += 0.5
                        bowlingTwo[i].bowlingBalls += 1
                        this.setState({
                            bowlingTwo
                        })
                      }
                }
              } 
            } else {
              for (let i = 0; i < this.state.homePlayers.length; i++) {
                if(this.state.bowler === "ONE") {
                  const bowlingOne = this.state.homePlayers
                    if(this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 < .5) {
                      bowlingOne[i].oversBowled += 0.1
                      bowlingOne[i].bowlingBalls += 1
                        this.setState({
                            bowlingOne
                        })
                    } else if (this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                      bowlingOne[i].oversBowled += 0.5
                      bowlingOne[i].bowlingBalls += 1
                      this.setState({
                          bowlingOne
                      })
                    }
                  } else {
                      const bowlingTwo = this.state.homePlayers
                      if(this.state.homePlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 < .5) {
                          bowlingTwo[i].oversBowled += 0.1
                          bowlingTwo[i].bowlingBalls += 1
                            this.setState({
                              bowlingTwo
                            })
                        } else if (this.state.homePlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 === .5) {
                          bowlingTwo[i].oversBowled += 0.5
                          bowlingTwo[i].bowlingBalls += 1
                          this.setState({
                              bowlingTwo
                          })
                        }
                  }
                } 
                }
                this.handleBowler()
                this.handleBowlerFigures()
      
      };
      
      /**** Handles Add Four Byes button ****/
      addBye4 = () => {
        if (this.state.batsman === "ONE" && this.state.overs.toFixed(2) % 1 === .5) {
            this.setState({
              batsman: "TWO",
              byes: this.state.byes + 4,
              extrasTotal: this.state.extrasTotal + 4,
              totalRuns: this.state.totalRuns + 4,
              overs: this.state.overs + .5,
              ballsFacedOne: this.state.ballsFacedOne + 1,
              balls: this.state.balls + 1
            })
        } else if (this.state.batsman === "TWO" && this.state.overs.toFixed(2) % 1 === .5) {
          this.setState({
            batsman:"ONE",
            byes: this.state.byes + 4,
              extrasTotal: this.state.extrasTotal + 4,
              totalRuns: this.state.totalRuns + 4,
            overs: this.state.overs + .5,
            ballsFacedTwo: this.state.ballsFacedTwo + 1,
            balls: this.state.balls + 1
          })
        } else if (this.state.batsman === "ONE") {
          this.setState({
            batsman:"ONE",
            byes: this.state.byes + 4,
              extrasTotal: this.state.extrasTotal + 4,
              totalRuns: this.state.totalRuns + 4,
            overs: this.state.overs + .1,
            ballsFacedOne: this.state.ballsFacedOne + 1,
            balls: this.state.balls + 1
          })
        } else if (this.state.batsman === "TWO") {
          this.setState({
            batsman:"TWO",
            byes: this.state.byes + 4,
              extrasTotal: this.state.extrasTotal + 4,
              totalRuns: this.state.totalRuns + 4,
            overs: this.state.overs + .1,
            ballsFacedTwo: this.state.ballsFacedTwo + 1,
            balls: this.state.balls + 1
          })
        };
        if (this.state.recentDeliveries.length < 10) {
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["4b "])]
            })
        } else if (this.state.recentDeliveries.length >= 10){
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["4b "]).splice([1])]
            })
        }
        if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.homePlayers.length; i++) {
              if(this.state.batsman === "ONE") {
                  if(this.state.homePlayers[i].status === "batting1") {
                    const battingOne = this.state.homePlayers
                    battingOne[i].balls += 1
                      this.setState({
                          battingOne
                      })
                  }
                } else {
                    if(this.state.homePlayers[i].status === "batting2") {
                        const battingTwo = this.state.homePlayers
                        battingTwo[i].balls += 1
                          this.setState({
                              battingTwo
                          })
                      }
                }
              } 
            } else {
              for (let i = 0; i < this.state.awayPlayers.length; i++) {
                  if(this.state.batsman === "ONE") {
                      if(this.state.awayPlayers[i].status === "batting1") {
                        const battingOne = this.state.awayPlayers
                        battingOne[i].balls += 1
                          this.setState({
                              battingOne
                          })
                      }
                    } else {
                        if(this.state.awayPlayers[i].status === "batting2") {
                            const battingTwo = this.state.awayPlayers
                            battingTwo[i].balls += 1
                              this.setState({
                                  battingTwo
                              })
                          }
                    }
                  } 
          }

          if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.awayPlayers.length; i++) {
              if(this.state.bowler === "ONE") {
                const bowlingOne = this.state.awayPlayers
                  if(this.state.awayPlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 < .5) {
                    bowlingOne[i].oversBowled += 0.1
                    bowlingOne[i].bowlingBalls += 1
                      this.setState({
                          bowlingOne
                      })
                  } else if (this.state.awayPlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                    bowlingOne[i].oversBowled += 0.5
                    bowlingOne[i].bowlingBalls += 1
                    this.setState({
                        bowlingOne
                    })
                  }
                } else {
                    const bowlingTwo = this.state.awayPlayers
                    if(this.state.awayPlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 < .5) {
                        bowlingTwo[i].oversBowled += 0.1
                        bowlingTwo[i].bowlingBalls += 1
                          this.setState({
                            bowlingTwo
                          })
                      } else if (this.state.awayPlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 === .5) {
                        bowlingTwo[i].oversBowled += 0.5
                        bowlingTwo[i].bowlingBalls += 1
                        this.setState({
                            bowlingTwo
                        })
                      }
                }
              } 
            } else {
              for (let i = 0; i < this.state.homePlayers.length; i++) {
                if(this.state.bowler === "ONE") {
                  const bowlingOne = this.state.homePlayers
                    if(this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 < .5) {
                      bowlingOne[i].oversBowled += 0.1
                      bowlingOne[i].bowlingBalls += 1
                        this.setState({
                            bowlingOne
                        })
                    } else if (this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                      bowlingOne[i].oversBowled += 0.5
                      bowlingOne[i].bowlingBalls += 1
                      this.setState({
                          bowlingOne
                      })
                    }
                  } else {
                      const bowlingTwo = this.state.homePlayers
                      if(this.state.homePlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 < .5) {
                          bowlingTwo[i].oversBowled += 0.1
                          bowlingTwo[i].bowlingBalls += 1
                            this.setState({
                              bowlingTwo
                            })
                        } else if (this.state.homePlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 === .5) {
                          bowlingTwo[i].oversBowled += 0.5
                          bowlingTwo[i].bowlingBalls += 1
                          this.setState({
                              bowlingTwo
                          })
                        }
                  }
                } 
                }
                this.handleBowler()
                this.handleBowlerFigures()
      
      };
      
      /**** Handles Add One Leg Bye button ****/
      addLegBye1 = () => {
        if (this.state.batsman === "ONE" && this.state.overs.toFixed(2) % 1 === .5) {
            this.setState({
              batsman: "ONE",
              legByes: this.state.legByes + 1,
              extrasTotal: this.state.extrasTotal + 1,
              totalRuns: this.state.totalRuns + 1,
              overs: this.state.overs + .5,
              ballsFacedOne: this.state.ballsFacedOne + 1,
              balls: this.state.balls + 1
            })
        } else if (this.state.batsman === "TWO" && this.state.overs.toFixed(2) % 1 === .5) {
          this.setState({
            batsman:"TWO",
            legByes: this.state.legByes + 1,
              extrasTotal: this.state.extrasTotal + 1,
              totalRuns: this.state.totalRuns + 1,
            overs: this.state.overs + .5,
            ballsFacedTwo: this.state.ballsFacedTwo + 1,
            balls: this.state.balls + 1
          })
        } else if (this.state.batsman === "ONE") {
          this.setState({
            batsman:"TWO",
            legByes: this.state.legByes + 1,
              extrasTotal: this.state.extrasTotal + 1,
              totalRuns: this.state.totalRuns + 1,
             overs: this.state.overs + .1,
            ballsFacedOne: this.state.ballsFacedOne + 1,
            balls: this.state.balls + 1
          })
        } else if (this.state.batsman === "TWO") {
          this.setState({
            batsman:"ONE",
            legByes: this.state.legByes + 1,
              extrasTotal: this.state.extrasTotal + 1,
              totalRuns: this.state.totalRuns + 1,
            overs: this.state.overs + .1,
            ballsFacedTwo: this.state.ballsFacedTwo + 1,
            balls: this.state.balls + 1
          })
        };
        if (this.state.recentDeliveries.length < 10) {
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["lb "])]
            })
        } else if (this.state.recentDeliveries.length >= 10){
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["lb "]).splice([1])]
            })
        }
        if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.homePlayers.length; i++) {
              if(this.state.batsman === "ONE") {
                  if(this.state.homePlayers[i].status === "batting1") {
                    const battingOne = this.state.homePlayers
                    battingOne[i].balls += 1
                      this.setState({
                          battingOne
                      })
                  }
                } else {
                    if(this.state.homePlayers[i].status === "batting2") {
                        const battingTwo = this.state.homePlayers
                        battingTwo[i].balls += 1
                          this.setState({
                              battingTwo
                          })
                      }
                }
              } 
            } else {
              for (let i = 0; i < this.state.awayPlayers.length; i++) {
                  if(this.state.batsman === "ONE") {
                      if(this.state.awayPlayers[i].status === "batting1") {
                        const battingOne = this.state.awayPlayers
                        battingOne[i].balls += 1
                          this.setState({
                              battingOne
                          })
                      }
                    } else {
                        if(this.state.awayPlayers[i].status === "batting2") {
                            const battingTwo = this.state.awayPlayers
                            battingTwo[i].balls += 1
                              this.setState({
                                  battingTwo
                              })
                          }
                    }
                  } 
          }

          if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.awayPlayers.length; i++) {
              if(this.state.bowler === "ONE") {
                const bowlingOne = this.state.awayPlayers
                  if(this.state.awayPlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 < .5) {
                    bowlingOne[i].oversBowled += 0.1
                    bowlingOne[i].bowlingBalls += 1
                      this.setState({
                          bowlingOne
                      })
                  } else if (this.state.awayPlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                    bowlingOne[i].oversBowled += 0.5
                    bowlingOne[i].bowlingBalls += 1
                    this.setState({
                        bowlingOne
                    })
                  }
                } else {
                    const bowlingTwo = this.state.awayPlayers
                    if(this.state.awayPlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 < .5) {
                        bowlingTwo[i].oversBowled += 0.1
                        bowlingTwo[i].bowlingBalls += 1
                          this.setState({
                            bowlingTwo
                          })
                      } else if (this.state.awayPlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 === .5) {
                        bowlingTwo[i].oversBowled += 0.5
                        bowlingTwo[i].bowlingBalls += 1
                        this.setState({
                            bowlingTwo
                        })
                      }
                }
              } 
            } else {
              for (let i = 0; i < this.state.homePlayers.length; i++) {
                if(this.state.bowler === "ONE") {
                  const bowlingOne = this.state.homePlayers
                    if(this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 < .5) {
                      bowlingOne[i].oversBowled += 0.1
                      bowlingOne[i].bowlingBalls += 1
                        this.setState({
                            bowlingOne
                        })
                    } else if (this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                      bowlingOne[i].oversBowled += 0.5
                      bowlingOne[i].bowlingBalls += 1
                      this.setState({
                          bowlingOne
                      })
                    }
                  } else {
                      const bowlingTwo = this.state.homePlayers
                      if(this.state.homePlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 < .5) {
                          bowlingTwo[i].oversBowled += 0.1
                          bowlingTwo[i].bowlingBalls += 1
                            this.setState({
                              bowlingTwo
                            })
                        } else if (this.state.homePlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 === .5) {
                          bowlingTwo[i].oversBowled += 0.5
                          bowlingTwo[i].bowlingBalls += 1
                          this.setState({
                              bowlingTwo
                          })
                        }
                  }
                } 
                }
                this.handleBowler()
                this.handleBowlerFigures()
      
      };
      
      /**** Handles Add Two Leg Byes button ****/
      addLegBye2 = () => {
        if (this.state.batsman === "ONE" && this.state.overs.toFixed(2) % 1 === .5) {
            this.setState({
              batsman: "TWO",
              legByes: this.state.legByes + 2,
              extrasTotal: this.state.extrasTotal + 2,
              totalRuns: this.state.totalRuns + 2,
              overs: this.state.overs + .5,
              ballsFacedOne: this.state.ballsFacedOne + 1,
              balls: this.state.balls + 1
            })
        } else if (this.state.batsman === "TWO" && this.state.overs.toFixed(2) % 1 === .5) {
          this.setState({
            batsman:"ONE",
            legByes: this.state.legByes + 2,
              extrasTotal: this.state.extrasTotal + 2,
              totalRuns: this.state.totalRuns + 2,
            overs: this.state.overs + .5,
            ballsFacedTwo: this.state.ballsFacedTwo + 1,
            balls: this.state.balls + 1
          })
        } else if (this.state.batsman === "ONE") {
          this.setState({
            batsman:"ONE",
            legByes: this.state.legByes + 2,
              extrasTotal: this.state.extrasTotal + 2,
              totalRuns: this.state.totalRuns + 2,
            overs: this.state.overs + .1,
            ballsFacedOne: this.state.ballsFacedOne + 1,
            balls: this.state.balls + 1
          })
        } else if (this.state.batsman === "TWO") {
          this.setState({
            batsman:"TWO",
            legByes: this.state.legByes + 2,
              extrasTotal: this.state.extrasTotal + 2,
              totalRuns: this.state.totalRuns + 2,
            overs: this.state.overs + .1,
            ballsFacedTwo: this.state.ballsFacedTwo + 1,
            balls: this.state.balls + 1
          })
        };
        if (this.state.recentDeliveries.length < 10) {
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["2lb "])]
            })
        } else if (this.state.recentDeliveries.length >= 10){
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["2lb "]).splice([1])]
            })
        }
        if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.homePlayers.length; i++) {
              if(this.state.batsman === "ONE") {
                  if(this.state.homePlayers[i].status === "batting1") {
                    const battingOne = this.state.homePlayers
                    battingOne[i].balls += 1
                      this.setState({
                          battingOne
                      })
                  }
                } else {
                    if(this.state.homePlayers[i].status === "batting2") {
                        const battingTwo = this.state.homePlayers
                        battingTwo[i].balls += 1
                          this.setState({
                              battingTwo
                          })
                      }
                }
              } 
            } else {
              for (let i = 0; i < this.state.awayPlayers.length; i++) {
                  if(this.state.batsman === "ONE") {
                      if(this.state.awayPlayers[i].status === "batting1") {
                        const battingOne = this.state.awayPlayers
                        battingOne[i].balls += 1
                          this.setState({
                              battingOne
                          })
                      }
                    } else {
                        if(this.state.awayPlayers[i].status === "batting2") {
                            const battingTwo = this.state.awayPlayers
                            battingTwo[i].balls += 1
                              this.setState({
                                  battingTwo
                              })
                          }
                    }
                  } 
          }

          if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.awayPlayers.length; i++) {
              if(this.state.bowler === "ONE") {
                const bowlingOne = this.state.awayPlayers
                  if(this.state.awayPlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 < .5) {
                    bowlingOne[i].oversBowled += 0.1
                    bowlingOne[i].bowlingBalls += 1
                      this.setState({
                          bowlingOne
                      })
                  } else if (this.state.awayPlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                    bowlingOne[i].oversBowled += 0.5
                    bowlingOne[i].bowlingBalls += 1
                    this.setState({
                        bowlingOne
                    })
                  }
                } else {
                    const bowlingTwo = this.state.awayPlayers
                    if(this.state.awayPlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 < .5) {
                        bowlingTwo[i].oversBowled += 0.1
                        bowlingTwo[i].bowlingBalls += 1
                          this.setState({
                            bowlingTwo
                          })
                      } else if (this.state.awayPlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 === .5) {
                        bowlingTwo[i].oversBowled += 0.5
                        bowlingTwo[i].bowlingBalls += 1
                        this.setState({
                            bowlingTwo
                        })
                      }
                }
              } 
            } else {
              for (let i = 0; i < this.state.homePlayers.length; i++) {
                if(this.state.bowler === "ONE") {
                  const bowlingOne = this.state.homePlayers
                    if(this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 < .5) {
                      bowlingOne[i].oversBowled += 0.1
                      bowlingOne[i].bowlingBalls += 1
                        this.setState({
                            bowlingOne
                        })
                    } else if (this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                      bowlingOne[i].oversBowled += 0.5
                      bowlingOne[i].bowlingBalls += 1
                      this.setState({
                          bowlingOne
                      })
                    }
                  } else {
                      const bowlingTwo = this.state.homePlayers
                      if(this.state.homePlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 < .5) {
                          bowlingTwo[i].oversBowled += 0.1
                          bowlingTwo[i].bowlingBalls += 1
                            this.setState({
                              bowlingTwo
                            })
                        } else if (this.state.homePlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 === .5) {
                          bowlingTwo[i].oversBowled += 0.5
                          bowlingTwo[i].bowlingBalls += 1
                          this.setState({
                              bowlingTwo
                          })
                        }
                  }
                } 
                }
                this.handleBowler()
                this.handleBowlerFigures()
      
      };
      
      /**** Handles Add Three Leg Byes button ****/
      addLegBye3 = () => {
        if (this.state.batsman === "ONE" && this.state.overs.toFixed(2) % 1 === .5) {
            this.setState({
              batsman: "ONE",
              legByes: this.state.legByes + 3,
              extrasTotal: this.state.extrasTotal + 3,
              totalRuns: this.state.totalRuns + 3,
              overs: this.state.overs + .5,
              ballsFacedOne: this.state.ballsFacedOne + 1,
              balls: this.state.balls + 1
            })
        } else if (this.state.batsman === "TWO" && this.state.overs.toFixed(2) % 1 === .5) {
          this.setState({
            batsman:"TWO",
            legByes: this.state.legByes + 3,
              extrasTotal: this.state.extrasTotal + 3,
              totalRuns: this.state.totalRuns + 3,
            overs: this.state.overs + .5,
            ballsFacedTwo: this.state.ballsFacedTwo + 1,
            balls: this.state.balls + 1
          })
        } else if (this.state.batsman === "ONE") {
          this.setState({
            batsman:"TWO",
            legByes: this.state.legByes + 3,
              extrasTotal: this.state.extrasTotal + 3,
              totalRuns: this.state.totalRuns + 3,
             overs: this.state.overs + .1,
            ballsFacedOne: this.state.ballsFacedOne + 1,
            balls: this.state.balls + 1
          })
        } else if (this.state.batsman === "TWO") {
          this.setState({
            batsman:"ONE",
            legByes: this.state.legByes + 3,
              extrasTotal: this.state.extrasTotal + 3,
              totalRuns: this.state.totalRuns + 3,
            overs: this.state.overs + .1,
            ballsFacedTwo: this.state.ballsFacedTwo + 1,
            balls: this.state.balls + 1
          })
        };
        if (this.state.recentDeliveries.length < 10) {
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["3lb "])]
            })
        } else if (this.state.recentDeliveries.length >= 10){
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["3lb "]).splice([1])]
            })
        }
        if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.homePlayers.length; i++) {
              if(this.state.batsman === "ONE") {
                  if(this.state.homePlayers[i].status === "batting1") {
                    const battingOne = this.state.homePlayers
                    battingOne[i].balls += 1
                      this.setState({
                          battingOne
                      })
                  }
                } else {
                    if(this.state.homePlayers[i].status === "batting2") {
                        const battingTwo = this.state.homePlayers
                        battingTwo[i].balls += 1
                          this.setState({
                              battingTwo
                          })
                      }
                }
              } 
            } else {
              for (let i = 0; i < this.state.awayPlayers.length; i++) {
                  if(this.state.batsman === "ONE") {
                      if(this.state.awayPlayers[i].status === "batting1") {
                        const battingOne = this.state.awayPlayers
                        battingOne[i].balls += 1
                          this.setState({
                              battingOne
                          })
                      }
                    } else {
                        if(this.state.awayPlayers[i].status === "batting2") {
                            const battingTwo = this.state.awayPlayers
                            battingTwo[i].balls += 1
                              this.setState({
                                  battingTwo
                              })
                          }
                    }
                  } 
          }

          if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.awayPlayers.length; i++) {
              if(this.state.bowler === "ONE") {
                const bowlingOne = this.state.awayPlayers
                  if(this.state.awayPlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 < .5) {
                    bowlingOne[i].oversBowled += 0.1
                    bowlingOne[i].bowlingBalls += 1
                      this.setState({
                          bowlingOne
                      })
                  } else if (this.state.awayPlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                    bowlingOne[i].oversBowled += 0.5
                    bowlingOne[i].bowlingBalls += 1
                    this.setState({
                        bowlingOne
                    })
                  }
                } else {
                    const bowlingTwo = this.state.awayPlayers
                    if(this.state.awayPlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 < .5) {
                        bowlingTwo[i].oversBowled += 0.1
                        bowlingTwo[i].bowlingBalls += 1
                          this.setState({
                            bowlingTwo
                          })
                      } else if (this.state.awayPlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 === .5) {
                        bowlingTwo[i].oversBowled += 0.5
                        bowlingTwo[i].bowlingBalls += 1
                        this.setState({
                            bowlingTwo
                        })
                      }
                }
              } 
            } else {
              for (let i = 0; i < this.state.homePlayers.length; i++) {
                if(this.state.bowler === "ONE") {
                  const bowlingOne = this.state.homePlayers
                    if(this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 < .5) {
                      bowlingOne[i].oversBowled += 0.1
                      bowlingOne[i].bowlingBalls += 1
                        this.setState({
                            bowlingOne
                        })
                    } else if (this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                      bowlingOne[i].oversBowled += 0.5
                      bowlingOne[i].bowlingBalls += 1
                      this.setState({
                          bowlingOne
                      })
                    }
                  } else {
                      const bowlingTwo = this.state.homePlayers
                      if(this.state.homePlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 < .5) {
                          bowlingTwo[i].oversBowled += 0.1
                          bowlingTwo[i].bowlingBalls += 1
                            this.setState({
                              bowlingTwo
                            })
                        } else if (this.state.homePlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 === .5) {
                          bowlingTwo[i].oversBowled += 0.5
                          bowlingTwo[i].bowlingBalls += 1
                          this.setState({
                              bowlingTwo
                          })
                        }
                  }
                } 
                }
                this.handleBowler()
                this.handleBowlerFigures()
      
      };
      
      /**** Handles Add Four Leg Byes button ****/
      addLegBye4 = () => {
        if (this.state.batsman === "ONE" && this.state.overs.toFixed(2) % 1 === .5) {
            this.setState({
              batsman: "TWO",
              legByes: this.state.legByes + 4,
              extrasTotal: this.state.extrasTotal + 4,
              totalRuns: this.state.totalRuns + 4,
              overs: this.state.overs + .5,
              ballsFacedOne: this.state.ballsFacedOne + 1,
              balls: this.state.balls + 1
            })
        } else if (this.state.batsman === "TWO" && this.state.overs.toFixed(2) % 1 === .5) {
          this.setState({
            batsman:"ONE",
            legByes: this.state.legByes + 4,
              extrasTotal: this.state.extrasTotal + 4,
              totalRuns: this.state.totalRuns + 4,
            overs: this.state.overs + .5,
            ballsFacedTwo: this.state.ballsFacedTwo + 1,
            balls: this.state.balls + 1
          })
        } else if (this.state.batsman === "ONE") {
          this.setState({
            batsman:"ONE",
            legByes: this.state.legByes + 4,
              extrasTotal: this.state.extrasTotal + 4,
              totalRuns: this.state.totalRuns + 4,
            overs: this.state.overs + .1,
            ballsFacedOne: this.state.ballsFacedOne + 1,
            balls: this.state.balls + 1
          })
        } else if (this.state.batsman === "TWO") {
          this.setState({
            batsman:"TWO",
            legByes: this.state.legByes + 4,
              extrasTotal: this.state.extrasTotal + 4,
              totalRuns: this.state.totalRuns + 4,
            overs: this.state.overs + .1,
            ballsFacedTwo: this.state.ballsFacedTwo + 1,
            balls: this.state.balls + 1
          })
        };
        if (this.state.recentDeliveries.length < 10) {
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["4lb "])]
            })
        } else if (this.state.recentDeliveries.length >= 10){
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["4lb "]).splice([1])]
            })
        }
        if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.homePlayers.length; i++) {
              if(this.state.batsman === "ONE") {
                  if(this.state.homePlayers[i].status === "batting1") {
                    const battingOne = this.state.homePlayers
                    battingOne[i].balls += 1
                      this.setState({
                          battingOne
                      })
                  }
                } else {
                    if(this.state.homePlayers[i].status === "batting2") {
                        const battingTwo = this.state.homePlayers
                        battingTwo[i].balls += 1
                          this.setState({
                              battingTwo
                          })
                      }
                }
              } 
            } else {
              for (let i = 0; i < this.state.awayPlayers.length; i++) {
                  if(this.state.batsman === "ONE") {
                      if(this.state.awayPlayers[i].status === "batting1") {
                        const battingOne = this.state.awayPlayers
                        battingOne[i].balls += 1
                          this.setState({
                              battingOne
                          })
                      }
                    } else {
                        if(this.state.awayPlayers[i].status === "batting2") {
                            const battingTwo = this.state.awayPlayers
                            battingTwo[i].balls += 1
                              this.setState({
                                  battingTwo
                              })
                          }
                    }
                  } 
          }

          if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.awayPlayers.length; i++) {
              if(this.state.bowler === "ONE") {
                const bowlingOne = this.state.awayPlayers
                  if(this.state.awayPlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 < .5) {
                    bowlingOne[i].oversBowled += 0.1
                    bowlingOne[i].bowlingBalls += 1
                      this.setState({
                          bowlingOne
                      })
                  } else if (this.state.awayPlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                    bowlingOne[i].oversBowled += 0.5
                    bowlingOne[i].bowlingBalls += 1
                    this.setState({
                        bowlingOne
                    })
                  }
                } else {
                    const bowlingTwo = this.state.awayPlayers
                    if(this.state.awayPlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 < .5) {
                        bowlingTwo[i].oversBowled += 0.1
                        bowlingTwo[i].bowlingBalls += 1
                          this.setState({
                            bowlingTwo
                          })
                      } else if (this.state.awayPlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 === .5) {
                        bowlingTwo[i].oversBowled += 0.5
                        bowlingTwo[i].bowlingBalls += 1
                        this.setState({
                            bowlingTwo
                        })
                      }
                }
              } 
            } else {
              for (let i = 0; i < this.state.homePlayers.length; i++) {
                if(this.state.bowler === "ONE") {
                  const bowlingOne = this.state.homePlayers
                    if(this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 < .5) {
                      bowlingOne[i].oversBowled += 0.1
                      bowlingOne[i].bowlingBalls += 1
                        this.setState({
                            bowlingOne
                        })
                    } else if (this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                      bowlingOne[i].oversBowled += 0.5
                      bowlingOne[i].bowlingBalls += 1
                      this.setState({
                          bowlingOne
                      })
                    }
                  } else {
                      const bowlingTwo = this.state.homePlayers
                      if(this.state.homePlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 < .5) {
                          bowlingTwo[i].oversBowled += 0.1
                          bowlingTwo[i].bowlingBalls += 1
                            this.setState({
                              bowlingTwo
                            })
                        } else if (this.state.homePlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 === .5) {
                          bowlingTwo[i].oversBowled += 0.5
                          bowlingTwo[i].bowlingBalls += 1
                          this.setState({
                              bowlingTwo
                          })
                        }
                  }
                } 
                }
                this.handleBowler()
                this.handleBowlerFigures()
      
      };

      /******* WICKET FUNCTIONS *******/
      /*****                      *****/
      
      /**** Handles Add Wicket button ****/
      addWicket = () => {
        if (this.state.batsman === "ONE" && this.state.overs.toFixed(2) % 1 === .5) {
            this.setState({
              batsman: "TWO",
              overs: this.state.overs + .5,
              wickets: this.state.wickets + 1,
              batsmanOne: 0,
              ballsFacedOne: 0,
              balls: this.state.balls + 1
            })
        } else if (this.state.batsman === "TWO" && this.state.overs.toFixed(2) % 1 === .5) {
          this.setState({
            batsman:"ONE",
            overs: this.state.overs + .5,
            wickets: this.state.wickets + 1,
            batsmanTwo: 0,
            ballsFacedTwo: 0,
            balls: this.state.balls + 1
          })
        } else if (this.state.batsman === "ONE") {
          this.setState({
            batsman:"ONE",
            overs: this.state.overs + .1,
            wickets: this.state.wickets + 1,
            batsmanOne: 0,
            ballsFacedOne: 0,
            balls: this.state.balls + 1
          })
        } else if (this.state.batsman === "TWO") {
          this.setState({
            batsman:"TWO",
            overs: this.state.overs + .1,
            wickets: this.state.wickets + 1,
            batsmanTwo: 0,
            ballsFacedTwo: 0,
            balls: this.state.balls + 1
          })
        };
        /* updates recent deliveries array */
        if (this.state.recentDeliveries.length < 10) {
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["W "])
                ],
                wicketArr: this.state.wicketArr.concat([this.state.totalRuns])
            })
        } else if (this.state.recentDeliveries.length >= 10){
            this.setState({
                recentDeliveries: [...this.state.recentDeliveries.concat(["W "]).splice([1])],
                wicketArr: this.state.wicketArr.concat([this.state.totalRuns])
            })
        };
        /* adds ball to outgoing batsman */
        if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.homePlayers.length; i++) {
              if(this.state.batsman === "ONE") {
                  if(this.state.homePlayers[i].status === "batting1") {
                    const battingOne = this.state.homePlayers
                    battingOne[i].balls += 1
                      this.setState({
                          battingOne
                      })
                  }
                } else {
                    if(this.state.homePlayers[i].status === "batting2") {
                        const battingOne = this.state.homePlayers
                        battingOne[i].balls += 1
                          this.setState({
                              battingOne
                          })
                      }
                }
              } 
            } else {
              for (let i = 0; i < this.state.awayPlayers.length; i++) {
                  if(this.state.batsman === "ONE") {
                      if(this.state.awayPlayers[i].status === "batting1") {
                        const battingOne = this.state.awayPlayers
                        battingOne[i].balls += 1
                          this.setState({
                              battingOne
                          })
                      }
                    } else {
                        if(this.state.awayPlayers[i].status === "batting2") {
                            const battingOne = this.state.awayPlayers
                            battingOne[i].balls += 1
                              this.setState({
                                  battingOne
                              })
                          }
                    }
                  } 
          }
          /* updates bowling figures */
          if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.awayPlayers.length; i++) {
              if(this.state.bowler === "ONE") {
                const bowlingOne = this.state.awayPlayers
                  if(this.state.awayPlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 < .5) {
                    bowlingOne[i].oversBowled += 0.1
                    bowlingOne[i].wickets += 1
                    bowlingOne[i].bowlingBalls += 1
                      this.setState({
                          bowlingOne
                      })
                  } else if (this.state.awayPlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                    bowlingOne[i].oversBowled += 0.5
                    bowlingOne[i].wickets += 1
                    bowlingOne[i].bowlingBalls += 1
                    this.setState({
                        bowlingOne
                    })
                  }
                } else {
                    const bowlingTwo = this.state.awayPlayers
                    if(this.state.awayPlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 < .5) {
                        bowlingTwo[i].oversBowled += 0.1
                        bowlingTwo[i].wickets += 1
                        bowlingTwo[i].bowlingBalls += 1
                          this.setState({
                            bowlingTwo
                          })
                      } else if (this.state.awayPlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 === .5) {
                        bowlingTwo[i].oversBowled += 0.5
                        bowlingTwo[i].wickets += 1
                        bowlingTwo[i].bowlingBalls += 1
                        this.setState({
                            bowlingTwo
                        })
                      }
                }
              } 
            } else {
              for (let i = 0; i < this.state.homePlayers.length; i++) {
                  if(this.state.bowler === "ONE") {
                    const bowlingOne = this.state.homePlayers
                      if(this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 < .5) {
                        bowlingOne[i].oversBowled += .1
                        bowlingOne[i].wickets += 1
                        bowlingOne[i].bowlingBalls += 1
                          this.setState({
                            bowlingOne
                          })
                      } else if (this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                        bowlingOne[i].oversBowled += .5
                        bowlingOne[i].wickets += 1
                        bowlingOne[i].bowlingBalls += 1
                          this.setState({
                            bowlingOne
                          })
                      }
                    } else {
                        const bowlingTwo = this.state.homePlayers
                        if(this.state.homePlayers[i].status === "bowling2" && this.state.overs.toFixed(2) % 1 < .5) {
                            bowlingTwo[i].oversBowled += .1
                            bowlingTwo[i].wickets += 1
                            bowlingTwo[i].bowlingBalls += 1
                              this.setState({
                                bowlingTwo
                              })
                          } else if (this.state.homePlayers[i].status === "bowling1" && this.state.overs.toFixed(2) % 1 === .5) {
                            bowlingTwo[i].oversBowled += .5
                            bowlingTwo[i].wickets += 1
                            bowlingTwo[i].bowlingBalls += 1
                              this.setState({
                                bowlingTwo
                              })
                          }
                    }
                  } 
                }
                this.addMaiden()
      };

      /**** Handles Wicket Correction button on run out ****/
      wicketCorrection = () => {
        if(this.state.isBatting === true) {
          for (let i = 0; i < this.state.awayPlayers.length; i++) {
            if(this.state.bowler === "ONE") {
              const bowlingOne = this.state.awayPlayers
                if(this.state.awayPlayers[i].status === "bowling1") {
                  bowlingOne[i].wickets -= 1
                    this.setState({
                        bowlingOne
                    })
                }
              } else {
                  const bowlingTwo = this.state.awayPlayers
                  if(this.state.awayPlayers[i].status === "bowling2") {
                      bowlingTwo[i].wickets -= 1
                        this.setState({
                          bowlingTwo
                        })
                    }
                  }
                }
          } else {
            for (let i = 0; i < this.state.homePlayers.length; i++) {
                if(this.state.bowler === "ONE") {
                  const bowlingOne = this.state.homePlayers
                    if(this.state.homePlayers[i].status === "bowling1") {
                      bowlingOne[i].wickets -= 1
                        this.setState({
                          bowlingOne
                        })
                    }
                  } else {
                      const bowlingTwo = this.state.homePlayers
                      if(this.state.homePlayers[i].status === "bowling2") {
                          bowlingTwo[i].wickets -= 1
                            this.setState({
                              bowlingTwo
                            })
                        }
                  }
                } 
              }
      }

      /**** Runs all relevant functions on wicket ****/
      handleWicket = (event) => {
        this.setWicketTaker()
        this.setWicketBatsmanNumber()
        this.addWicket()
        this.setBattingName()
        this.handleBowlerFigures()
        this.handleBowler()
        this.selectWicketType(event)

        this.wicketOutgoingBatsmanStatusChange()
        this.wicketIncomingBatsmanStatusChange()
        this.setBattingName()
        this.wicketTypeActive()
      }

      /**** Runs all relevant functions on 'Caught' wicket ****/
      handleWicketCatch = (event) => {
        if(this.state.isBatting === true) {
          for(let i = 0; i < this.state.homePlayers.length; i++) {
            if (this.state.batsman === "ONE" && this.state.homePlayers[i].status === "batting1") {
              const addCatcher = this.state.homePlayers
              addCatcher[i].wicketType = "Caught " + event.target.value
              this.setState({
                addCatcher
              })
            } else if (this.state.batsman === "TWO" && this.state.homePlayers[i].status === "batting2") {
              const addCatcher = this.state.homePlayers
              addCatcher[i].wicketType = "Caught " + event.target.value
              this.setState({
                addCatcher
              })
            }
          }
        } else {
          for(let i = 0; i < this.state.awayPlayers.length; i++) {
            if (this.state.batsman === "ONE" && this.state.awayPlayers[i].status === "batting1") {
              const addCatcher = this.state.awayPlayers
              addCatcher[i].wicketType = "Caught " + event.target.value
              this.setState({
                addCatcher
              })
            } else if (this.state.batsman === "TWO" && this.state.awayPlayers[i].status === "batting2") {
              const addCatcher = this.state.awayPlayers
              addCatcher[i].wicketType = "Caught " + event.target.value
              this.setState({
                addCatcher
              })
            }
          }
        }
        const selectCatcher = document.querySelector(".select-catcher");
        selectCatcher.classList.remove("active");
        const wicketType = document.querySelector(".wicket-type-container");
        wicketType.classList.remove("active");


        this.setWicketTaker()
        this.setWicketBatsmanNumber()
        this.addWicket()
        this.setBattingName()
        this.handleBowlerFigures()
        this.handleBowler()

        this.wicketOutgoingBatsmanStatusChange()
        this.wicketIncomingBatsmanStatusChange()
        this.setBattingName()
        this.selectCatcherMenu(event)
      }

      /**** Handles Run Out wicket buttons ****/
      handleWicketRunOut = (event) => {
        if(this.state.isBatting === true) {
          for(let i = 0; i < this.state.homePlayers.length; i++) {
            if (this.state.batsman === "ONE" && this.state.homePlayers[i].status === "batting1") {
              const addPlayer = this.state.homePlayers
              addPlayer[i].wicketType = "Run Out " + event.target.value
              this.setState({
                addPlayer
              })
            } else if (this.state.batsman === "TWO" && this.state.homePlayers[i].status === "batting2") {
              const addPlayer = this.state.homePlayers
              addPlayer[i].wicketType = "Run Out " + event.target.value
              this.setState({
                addPlayer
              })
            }
          }
        } else {
          for(let i = 0; i < this.state.awayPlayers.length; i++) {
            if (this.state.batsman === "ONE" && this.state.awayPlayers[i].status === "batting1") {
              const addPlayer = this.state.awayPlayers
              addPlayer[i].wicketType = "Run Out " + event.target.value
              this.setState({
                addPlayer
              })
            } else if (this.state.batsman === "TWO" && this.state.awayPlayers[i].status === "batting2") {
              const addPlayer = this.state.awayPlayers
              addPlayer[i].wicketType = "Run Out " + event.target.value
              this.setState({
                addPlayer
              })
            }
          }
        }
        const addRuns = document.querySelector(".runOut-runs");
        addRuns.classList.add("active");
        const selectPlayer = document.querySelector(".select-runOut");
        selectPlayer.classList.remove("active");
        const wicketType = document.querySelector(".wicket-type-container");
        wicketType.classList.remove("active");
      }

      /**** Handles adding runs to score with run out wicket button ****/
      handleRunOutRuns = () => {
        if(this.state.isBatting === true) {
        for(let i = 0; i < this.state.homePlayers.length; i++) {
            if(this.state.homePlayers[i].status === "batting1" && this.state.batsman === "ONE") {
              const addRun = this.state.homePlayers
              addRun[i].runs += 1
              this.setState({
                addRun,
                totalRuns: this.state.totalRuns + 1,
                batsmanOne: this.state.batsmanOne + 1,
              })
            } else if(this.state.homePlayers[i].status === "batting2" && this.state.batsman === "TWO") {
              const addRun = this.state.homePlayers
              addRun[i].runs += 1
              this.setState({
                addRun,
                totalRuns: this.state.totalRuns + 1,
                batsmanTwo: this.state.batsmanTwo + 1
              })
            }
            } 
            for(let j = 0; j < this.state.awayPlayers.length; j++) {
            if(this.state.awayPlayers[j].status === "bowling1" && this.state.bowler === "ONE") {
            const addRun = this.state.awayPlayers[j]
            addRun.bowlingRuns += 1
            this.setState({
              addRun,
              maidensOne: this.state.maidensOne - 1
            })
            } else if(this.state.awayPlayers[j].status === "bowling2" && this.state.bowler === "TWO") {
              const addRun = this.state.awayPlayers[j]
              addRun.bowlingRuns += 1
              this.setState({
                addRun,
                maidensTwo: this.state.maidensTwo - 1
              })
              }
        }
      }  else {
      for(let i = 0; i < this.state.awayPlayers.length; i++) {
          if(this.state.awayPlayers[i].status === "batting1") {
            const addRun = this.state.awayPlayers
            addRun[i].runs += 1
            this.setState({
              addRun,
              totalRuns: this.state.totalRuns + 1,
              batsmanOne: this.state.batsmanOne + 1
            })
          } else if(this.state.awayPlayers[i].status === "batting2") {
            const addRun = this.state.awayPlayers
            addRun[i].runs += 1
            this.setState({
              addRun,
              totalRuns: this.state.totalRuns + 1,
              batsmanTwo: this.state.batsmanTwo + 1
            })
          }
          }
          for(let j = 0; j < this.state.homePlayers.length; j++) {
          if(this.state.homePlayers[j].status === "bowling1") {
          const addRun = this.state.homePlayers
          addRun[j].bowlingRuns += 1
          this.setState({
            addRun,
            maidensOne: this.state.maidensOne - 1
          })
          } else if(this.state.homePlayers[j].status === "bowling2") {
            const addRun = this.state.homePlayers
            addRun[j].bowlingRuns += 1
            this.setState({
              addRun,
              maidensTwo: this.state.maidensTwo - 1
            })
            }
      }
    }
console.log(this.state.awayPlayers)
      }

      /**** Handles adding byes to score with run out wicket button ****/
      handleRunOutByes = () => {
        this.setState({
          byes: this.state.byes + 1,
          totalRuns: this.state.totalRuns + 1,
          extrasTotal: this.state.extrasTotal + 1
        })
      }

      /**** Handles adding leg byes to score with run out wicket button ****/
      handleRunOutLegByes = () => {
        this.setState({
          legByes: this.state.legByes + 1,
          totalRuns: this.state.totalRuns + 1,
          extrasTotal: this.state.extrasTotal + 1
        })
      }

      /**** Runs all relevant functions on confirming Run Out Wicket ****/
      confirmRunOut = () => {
        const addRuns = document.querySelector(".runOut-runs");
        addRuns.classList.remove("active");

        this.setWicketBatsmanNumber()
        this.addWicket()
        this.wicketCorrection()
        this.setBattingName()
        this.handleBowlerFigures()
        this.handleBowler()

        this.wicketOutgoingBatsmanStatusChange()
        this.wicketIncomingBatsmanStatusChange()
        this.setBattingName()
      }

      /**** Opens & Closes the wicket menu ****/
      wicketTypeActive = (event) => {
        const wicketType = document.querySelector(".wicket-type-container")
        if(this.state.wicketActive === "inactive") {
          wicketType.classList.add("active")
          this.setState({
            wicketActive: "active"
          })
        } else if(this.state.wicketActive === "active") {
          wicketType.classList.remove("active")
          this.setState({
            wicketActive: "inactive"
          })
        }
      };

      /**** Selects wicket type and assigns to correct batsman ****/
      selectWicketType = (event) => {
        if(this.state.isBatting === true) {
          for(let i = 0; i < this.state.homePlayers.length; i++) {
            if (this.state.batsman === "ONE" && this.state.homePlayers[i].status === "batting1") {
              const addWicketType = this.state.homePlayers
              addWicketType[i].wicketType = event.target.value
              this.setState({
                addWicketType
              })
            } else if (this.state.batsman === "TWO" && this.state.homePlayers[i].status === "batting2") {
              const addWicketType = this.state.homePlayers
              addWicketType[i].wicketType = event.target.value
              this.setState({
                addWicketType
              })
            }
          }
        } else {
          for(let i = 0; i < this.state.awayPlayers.length; i++) {
            if (this.state.batsman === "ONE" && this.state.awayPlayers[i].status === "batting1") {
              const addWicketType = this.state.awayPlayers
              addWicketType[i].wicketType = event.target.value
              this.setState({
                addWicketType
              })
            } else if (this.state.batsman === "TWO" && this.state.awayPlayers[i].status === "batting2") {
              const addWicketType = this.state.awayPlayers
              addWicketType[i].wicketType = event.target.value
              this.setState({
                addWicketType
              })
            }
          }
        }
        const wicketType = document.querySelector(".wicket-type-container")
        if(this.state.wicketActive === "inactive") {
          wicketType.classList.add("active")
          this.setState({
            wicketActive: "active"
          })
        } else if(this.state.wicketActive === "active") {
          wicketType.classList.remove("active")
          this.setState({
            wicketActive: "inactive"
          })
        }
      };

      /**** Opens & Closes catcher select menu ****/
      selectCatcherMenu = (event) => {
        const selectCatcher = document.querySelector(".select-catcher")
        const wicketType = document.querySelector(".wicket-type-container")
        if(this.state.wicketActive === "active") {
          selectCatcher.classList.add("active")
          wicketType.classList.remove("active")
          this.setState({
            wicketActive: "inactive"
          })
        }
      };

      /**** Opens & Closes run out player select menu ****/
      selectRunOutMenu = (event) => {
        const selectCatcher = document.querySelector(".select-runOut")
        const wicketType = document.querySelector(".wicket-type-container")
          selectCatcher.classList.add("active")
          wicketType.classList.remove("active")
          this.setState({
            wicketActive: "inactive"
          })
      };

      /******* BATTING FUNCTIONS *******/
      /*****                       *****/

      /**** Switches batsman at end of over ****/
      handleOvers = () => {
        if (this.state.overs.toFixed(2) % 1 === .5) {
          if (this.state.batsman === "ONE") {
            this.setState({
              batsman: "TWO"
            })
          }
        } else if (this.state.overs.toFixed(2) % 1 === .5) {
          if (this.state.batsman === "TWO")  {
          this.setState({
            batsman: "ONE"
          })
        }
      };
      };

      /**** Switches between batsman one and two ****/
      changeBatsman = () => {
        if (this.state.batsman === "ONE") {
          this.setState({
            batsman: "TWO"
          })
        } else {
          this.setState({
            batsman: "ONE"
          })
        };
      };

      /**** Updates batsman names on Scoreboard when closing Team News ****/
      updateUI = () => {
        this.setBattingName()
      }

      /**** Updates outgoing batsman status ****/
      wicketOutgoingBatsmanStatusChange = () => {
          if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.homePlayers.length; i++) {
                if(this.state.homePlayers[i].status === "batting1" && this.state.batsman === "ONE") {
                    const homePlayers = this.state.homePlayers;
                    homePlayers[i].status = "out"
                    this.setState({
                        homePlayers
                    })
                } else if (this.state.homePlayers[i].status === "batting2" && this.state.batsman === "TWO") {
                    const homePlayers = this.state.homePlayers;
                    homePlayers[i].status = "out"
                    this.setState({
                        homePlayers
                    })
                }
            }
          } else {
            for (let i = 0; i < this.state.awayPlayers.length; i++) {
                if(this.state.awayPlayers[i].status === "batting1" && this.state.batsman === "ONE") {
                    const awayPlayers = this.state.awayPlayers;
                    awayPlayers[i].status = "out"
                    this.setState({
                        awayPlayers
                    })
                } else if (this.state.awayPlayers[i].status === "batting2" && this.state.batsman === "TWO") {
                    const awayPlayers = this.state.awayPlayers;
                    awayPlayers[i].status = "out"
                    this.setState({
                        awayPlayers
                    })
                }
            }
          }
      }
      
      /**** Updates incoming batsman status ****/
      wicketIncomingBatsmanStatusChange = () => {
          if(this.state.isBatting === true) {
             if(this.state.wickets === 0) {
                if (this.state.batsman === "ONE") {
                    const battingOne = this.state.homePlayers;
                battingOne[2].status = "batting1"
                this.setState({
                    battingOne
                })
                } else {
                    const battingTwo = this.state.homePlayers;
                battingTwo[2].status = "batting2"
                this.setState({
                    battingTwo
                })
                }
             } else if (this.state.wickets === 1) {
                if (this.state.batsman === "ONE") {
                    const battingOne = this.state.homePlayers;
                    battingOne[3].status = "batting1"
                    this.setState({
                        battingOne
                    })
                } else {
                    const battingTwo = this.state.homePlayers;
                    battingTwo[3].status = "batting2"
                    this.setState({
                        battingTwo
                    })
                }
             } else if (this.state.wickets === 2) {
                if (this.state.batsman === "ONE") {
                   const battingOne = this.state.homePlayers;
                   battingOne[4].status = "batting1"
                   this.setState({
                       battingOne
                   })
                } else {
                   const battingTwo = this.state.homePlayers;
                   battingTwo[4].status = "batting2"
                   this.setState({
                       battingTwo
                   })
                }
             } else if (this.state.wickets === 3) {
                if (this.state.batsman === "ONE") {
                   const battingOne = this.state.homePlayers;
                   battingOne[5].status = "batting1"
                   this.setState({
                       battingOne
                   })
                } else {
                   const battingTwo = this.state.homePlayers;
                   battingTwo[5].status = "batting2"
                   this.setState({
                       battingTwo
                   })
                }
             } else if (this.state.wickets === 4) {
                if (this.state.batsman === "ONE") {
                   const battingOne = this.state.homePlayers;
                   battingOne[6].status = "batting1"
                   this.setState({
                       battingOne
                   })
                } else {
                   const battingTwo = this.state.homePlayers;
                   battingTwo[6].status = "batting2"
                   this.setState({
                       battingTwo
                   })
                }
             } else if (this.state.wickets === 5) {
                if (this.state.batsman === "ONE") {
                   const battingOne = this.state.homePlayers;
                   battingOne[7].status = "batting1"
                   this.setState({
                       battingOne
                   })
                } else {
                   const battingTwo = this.state.homePlayers;
                   battingTwo[7].status = "batting2"
                   this.setState({
                       battingTwo
                   })
                }
             } else if (this.state.wickets === 6) {
                if (this.state.batsman === "ONE") {
                   const battingOne = this.state.homePlayers;
                   battingOne[8].status = "batting1"
                   this.setState({
                       battingOne
                   })
                } else {
                   const battingTwo = this.state.homePlayers;
                   battingTwo[8].status = "batting2"
                   this.setState({
                       battingTwo
                   })
                }
             } else if (this.state.wickets === 7) {
                if (this.state.batsman === "ONE") {
                   const battingOne = this.state.homePlayers;
                   battingOne[9].status = "batting1"
                   this.setState({
                       battingOne
                   })
                } else {
                   const battingTwo = this.state.homePlayers;
                   battingTwo[9].status = "batting2"
                   this.setState({
                       battingTwo
                   })
                }
             } else if (this.state.wickets === 8) {
                if (this.state.batsman === "ONE") {
                   const battingOne = this.state.homePlayers;
                   battingOne[10].status = "batting1"
                   this.setState({
                       battingOne
                   })
                } else {
                   const battingTwo = this.state.homePlayers;
                   battingTwo[10].status = "batting2"
                   this.setState({
                       battingTwo
                   })
                }
             } 
          } else if(this.state.wickets === 0) {
            if (this.state.batsman === "ONE") {
                const battingOne = this.state.awayPlayers;
            battingOne[2].status = "batting1"
            this.setState({
                battingOne
            })
            } else {
                const battingTwo = this.state.awayPlayers;
            battingTwo[2].status = "batting2"
            this.setState({
                battingTwo
            })
            }
         } else if (this.state.wickets === 1) {
            if (this.state.batsman === "ONE") {
                const battingOne = this.state.awayPlayers;
                battingOne[3].status = "batting1"
                this.setState({
                    battingOne
                })
            } else {
                const battingTwo = this.state.awayPlayers;
                battingTwo[3].status = "batting2"
                this.setState({
                    battingTwo
                })
            }
         } else if (this.state.wickets === 2) {
            if (this.state.batsman === "ONE") {
               const battingOne = this.state.awayPlayers;
               battingOne[4].status = "batting1"
               this.setState({
                   battingOne
               })
            } else {
               const battingTwo = this.state.awayPlayers;
               battingTwo[4].status = "batting2"
               this.setState({
                   battingTwo
               })
            }
         } else if (this.state.wickets === 3) {
            if (this.state.batsman === "ONE") {
               const battingOne = this.state.awayPlayers;
               battingOne[5].status = "batting1"
               this.setState({
                   battingOne
               })
            } else {
               const battingTwo = this.state.awayPlayers;
               battingTwo[5].status = "batting2"
               this.setState({
                   battingTwo
               })
            }
         } else if (this.state.wickets === 4) {
            if (this.state.batsman === "ONE") {
               const battingOne = this.state.awayPlayers;
               battingOne[6].status = "batting1"
               this.setState({
                   battingOne
               })
            } else {
               const battingTwo = this.state.awayPlayers;
               battingTwo[6].status = "batting2"
               this.setState({
                   battingTwo
               })
            }
         } else if (this.state.wickets === 5) {
            if (this.state.batsman === "ONE") {
               const battingOne = this.state.awayPlayers;
               battingOne[7].status = "batting1"
               this.setState({
                   battingOne
               })
            } else {
               const battingTwo = this.state.awayPlayers;
               battingTwo[7].status = "batting2"
               this.setState({
                   battingTwo
               })
            }
         } else if (this.state.wickets === 6) {
            if (this.state.batsman === "ONE") {
               const battingOne = this.state.awayPlayers;
               battingOne[8].status = "batting1"
               this.setState({
                   battingOne
               })
            } else {
               const battingTwo = this.state.awayPlayers;
               battingTwo[8].status = "batting2"
               this.setState({
                   battingTwo
               })
            }
         } else if (this.state.wickets === 7) {
            if (this.state.batsman === "ONE") {
               const battingOne = this.state.awayPlayers;
               battingOne[9].status = "batting1"
               this.setState({
                   battingOne
               })
            } else {
               const battingTwo = this.state.awayPlayers;
               battingTwo[9].status = "batting2"
               this.setState({
                   battingTwo
               })
            }
         } else if (this.state.wickets === 8) {
            if (this.state.batsman === "ONE") {
               const battingOne = this.state.awayPlayers;
               battingOne[10].status = "batting1"
               this.setState({
                   battingOne
               })
            } else {
               const battingTwo = this.state.awayPlayers;
               battingTwo[10].status = "batting2"
               this.setState({
                   battingTwo
               })
            }
         } 
      }

      /**** Assigns wicket taker to correct batsman ****/
      setWicketTaker = () => {
        if(this.state.isBatting === true) {
          for(let i = 0; i < this.state.homePlayers.length; i++) {
            for(let j = 0; j < this.state.awayPlayers.length; j++) {
              if(this.state.homePlayers[i].status === "batting1" && this.state.batsman === "ONE") {
                if(this.state.awayPlayers[j].status === "bowling1" && this.state.bowler === "ONE") {
                  const addWicketTaker = this.state.homePlayers
                  addWicketTaker[i].wicketTaker = this.state.awayPlayers[j].name
                  this.setState({
                    addWicketTaker
                  })
                } else if (this.state.awayPlayers[j].status === "bowling2" && this.state.bowler === "TWO") {
                  const addWicketTaker = this.state.homePlayers
                  addWicketTaker[i].wicketTaker = this.state.awayPlayers[j].name
                  this.setState({
                    addWicketTaker
                  })
                }
              } else if (this.state.homePlayers[i].status === "batting2" && this.state.batsman === "TWO") {
                if(this.state.awayPlayers[j].status === "bowling1" && this.state.bowler === "ONE") {
                  const addWicketTaker = this.state.homePlayers
                  addWicketTaker[i].wicketTaker = this.state.awayPlayers[j].name
                  this.setState({
                    addWicketTaker
                  })
                } else if (this.state.awayPlayers[j].status === "bowling2" && this.state.bowler === "TWO") {
                  const addWicketTaker = this.state.homePlayers
                  addWicketTaker[i].wicketTaker = this.state.awayPlayers[j].name
                  this.setState({
                    addWicketTaker
                  })
                }
              }
            }
          }
        } else {
          for(let i = 0; i < this.state.awayPlayers.length; i++) {
            for(let j = 0; j < this.state.homePlayers.length; j++) {
              if(this.state.awayPlayers[i].status === "batting1" && this.state.batsman === "ONE") {
                if(this.state.homePlayers[j].status === "bowling1" && this.state.bowler === "ONE") {
                  const addWicketTaker = this.state.awayPlayers
                  addWicketTaker[i].wicketTaker = this.state.homePlayers[j].name
                  this.setState({
                    addWicketTaker
                  })
                } else if (this.state.homePlayers[j].status === "bowling2" && this.state.bowler === "TWO") {
                  const addWicketTaker = this.state.awayPlayers
                  addWicketTaker[i].wicketTaker = this.state.homePlayers[j].name
                  this.setState({
                    addWicketTaker
                  })
                }
              } else if (this.state.awayPlayers[i].status === "batting2" && this.state.batsman === "TWO") {
                if(this.state.homePlayers[j].status === "bowling1" && this.state.bowler === "ONE") {
                  const addWicketTaker = this.state.awayPlayers
                  addWicketTaker[i].wicketTaker = this.state.homePlayers[j].name
                  this.setState({
                    addWicketTaker
                  })
                } else if (this.state.homePlayers[j].status === "bowling2" && this.state.bowler === "TWO") {
                  const addWicketTaker = this.state.awayPlayers
                  addWicketTaker[i].wicketTaker = this.state.homePlayers[j].name
                  this.setState({
                    addWicketTaker
                  })
                }
              }
            }
          }
        }
      }

      /**** Sets batsman name on the scorecard ****/
      setBattingName = () => {
          if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.homePlayers.length; i++) {
                    if(this.state.homePlayers[i].status === "batting1") {
                        this.setState({
                            batsmanOneName: this.state.homePlayers[i].name
                        })
                    }
                    if(this.state.homePlayers[i].status === "batting2") {
                        this.setState({
                            batsmanTwoName: this.state.homePlayers[i].name
                        })
                }
            }
          } else {
            for (let i = 0; i < this.state.awayPlayers.length; i++) {
            if(this.state.awayPlayers[i].status === "batting1") {
                this.setState({
                    batsmanOneName: this.state.awayPlayers[i].name
                })
            }
            if(this.state.awayPlayers[i].status === "batting2") {
                this.setState({
                    batsmanTwoName: this.state.awayPlayers[i].name
                })
            }
      }
    } 
      }

      /**** Sets the batsman number to Fall of Wicket display ****/
      setWicketBatsmanNumber = () => {
        if(this.state.isBatting === true) {
            for(let i = 0; i < this.state.homePlayers.length; i++) {
                if(this.state.batsman === "ONE") {
                    const batsmanAtWicket = this.state.batsmanAtWicket
                    if(this.state.wickets === 0 && this.state.homePlayers[i].status === "batting1") {
                            this.setState({
                                batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                            })
                    } else if(this.state.wickets === 1 && this.state.homePlayers[i].status === "batting1") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 2 && this.state.homePlayers[i].status === "batting1") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 3 && this.state.homePlayers[i].status === "batting1") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 4 && this.state.homePlayers[i].status === "batting1") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 5 && this.state.homePlayers[i].status === "batting1") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 6 && this.state.homePlayers[i].status === "batting1") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 7 && this.state.homePlayers[i].status === "batting1") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 8 && this.state.homePlayers[i].status === "batting1") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 9 && this.state.homePlayers[i].status === "batting1") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 10) {
                        return null
                    } 
                } else if (this.state.batsman === "TWO") {
                    const batsmanAtWicket = this.state.batsmanAtWicket
                    if(this.state.wickets === 0 && this.state.homePlayers[i].status === "batting2") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 1 && this.state.homePlayers[i].status === "batting2") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 2 && this.state.homePlayers[i].status === "batting2") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 3 && this.state.homePlayers[i].status === "batting2") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 4 && this.state.homePlayers[i].status === "batting2") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 5 && this.state.homePlayers[i].status === "batting2") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 6 && this.state.homePlayers[i].status === "batting2") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 7 && this.state.homePlayers[i].status === "batting2") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 8 && this.state.homePlayers[i].status === "batting2") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 9 && this.state.homePlayers[i].status === "batting2") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                       })
                    } else if(this.state.wickets === 10) {
                        return null
                    }
            }
          }
        } else {
            for(let i = 0; i < this.state.awayPlayers.length; i++) {
                if(this.state.batsman === "ONE") {
                    const batsmanAtWicket = this.state.batsmanAtWicket
                    if(this.state.wickets === 0 && this.state.awayPlayers[i].status === "batting1") {
                            this.setState({
                                batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                            })
                    } else if(this.state.wickets === 1 && this.state.awayPlayers[i].status === "batting1") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 2 && this.state.awayPlayers[i].status === "batting1") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 3 && this.state.awayPlayers[i].status === "batting1") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 4 && this.state.awayPlayers[i].status === "batting1") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 5 && this.state.awayPlayers[i].status === "batting1") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 6 && this.state.awayPlayers[i].status === "batting1") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 7 && this.state.awayPlayers[i].status === "batting1") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 8 && this.state.awayPlayers[i].status === "batting1") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 9 && this.state.awayPlayers[i].status === "batting1") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 10) {
                        return null
                    } 
                } else if (this.state.batsman === "TWO") {
                    const batsmanAtWicket = this.state.batsmanAtWicket
                    if(this.state.wickets === 0 && this.state.awayPlayers[i].status === "batting2") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 1 && this.state.awayPlayers[i].status === "batting2") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 2 && this.state.awayPlayers[i].status === "batting2") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 3 && this.state.awayPlayers[i].status === "batting2") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 4 && this.state.awayPlayers[i].status === "batting2") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 5 && this.state.awayPlayers[i].status === "batting2") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 6 && this.state.awayPlayers[i].status === "batting2") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 7 && this.state.awayPlayers[i].status === "batting2") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 8 && this.state.awayPlayers[i].status === "batting2") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                        })
                    } else if(this.state.wickets === 9 && this.state.awayPlayers[i].status === "batting2") {
                        this.setState({
                            batsmanAtWicket: batsmanAtWicket.concat(i + 1)
                       })
                    } else if(this.state.wickets === 10) {
                        return null
                    }
            }
          }
        }
      }

       /**** Batsman correction buttons ****/
       batsmanAddRun = () => {
        if(this.state.isBatting === true) {
          for(let i = 0; i < this.state.homePlayers.length; i++) {
            if(this.state.homePlayers[i].edit === "editing") {
              const addRun = this.state.homePlayers
              addRun[i].runs += 1
              this.setState({
                addRun
              })
            }
          }
        } else {
          for(let i = 0; i < this.state.awayPlayers.length; i++) {
            if(this.state.awayPlayers[i].edit === "editing") {
              const addRun = this.state.awayPlayers
              addRun[i].runs += 1
              this.setState({
                addRun
              })
            }
          }
        }
      }
      batsmanMinusRun = () => {
        if(this.state.isBatting === true) {
          for(let i = 0; i < this.state.homePlayers.length; i++) {
            if(this.state.homePlayers[i].edit === "editing") {
              const addRun = this.state.homePlayers
              addRun[i].runs -= 1
              this.setState({
                addRun
              })
            }
          }
        } else {
          for(let i = 0; i < this.state.awayPlayers.length; i++) {
            if(this.state.awayPlayers[i].edit === "editing") {
              const addRun = this.state.awayPlayers
              addRun[i].runs -= 1
              this.setState({
                addRun
              })
            }
          }
        }
      }
      batsmanAddBall = () => {
        if(this.state.isBatting === true) {
          for(let i = 0; i < this.state.homePlayers.length; i++) {
            if(this.state.homePlayers[i].edit === "editing") {
              const addBall = this.state.homePlayers
              addBall[i].balls += 1
              this.setState({
                addBall
              })
            }
          }
        } else {
          for(let i = 0; i < this.state.awayPlayers.length; i++) {
            if(this.state.awayPlayers[i].edit === "editing") {
              const addBall = this.state.awayPlayers
              addBall[i].balls += 1
              this.setState({
                addBall
              })
            }
          }
        }
      }
      batsmanMinusBall = () => {
        if(this.state.isBatting === true) {
          for(let i = 0; i < this.state.homePlayers.length; i++) {
            if(this.state.homePlayers[i].edit === "editing") {
              const addBall = this.state.homePlayers
              addBall[i].balls -= 1
              this.setState({
                addBall
              })
            }
          }
        } else {
          for(let i = 0; i < this.state.awayPlayers.length; i++) {
            if(this.state.awayPlayers[i].edit === "editing") {
              const addBall = this.state.awayPlayers
              addBall[i].balls -= 1
              this.setState({
                addBall
              })
            }
          }
        }
      }
      handleDismissal = event => {
        if(this.state.isBatting === true) {
          for(let i = 0; i < this.state.homePlayers.length; i++) {
            if(this.state.homePlayers[i].edit === "editing") {
              const addDismissal = this.state.homePlayers
              addDismissal[i].wicketType = event.target.value
              addDismissal[i].status = "out"
              this.setState({addDismissal})
            }
          }
        } else {
          for(let i = 0; i < this.state.awayPlayers.length; i++) {
            if(this.state.awayPlayers[i].edit === "editing") {
              const addDismissal = this.state.awayPlayers
              addDismissal[i].wicketType = event.target.value
              addDismissal[i].status = "out"
              this.setState({addDismissal})
            }
          }
        }
      };
      handleDismissalBowler = event => {
       if(this.state.isBatting === true) {
        for(let i = 0; i < this.state.homePlayers.length; i++) {
          if(this.state.homePlayers[i].edit === "editing") {
            const addWicketTaker = this.state.homePlayers
            addWicketTaker[i].wicketTaker = event.target.value
            addWicketTaker[i].status = "out"
            this.setState({addWicketTaker})
          }
        }
      } else {
        for(let i = 0; i < this.state.awayPlayers.length; i++) {
          if(this.state.awayPlayers[i].edit === "editing") {
            const addWicketTaker = this.state.awayPlayers
            addWicketTaker[i].wicketTaker = event.target.value
            addWicketTaker[i].status = "out"
            this.setState({addWicketTaker})
          }
        }
      }
  };

      /******* BOWLING FUNCTIONS *******/
      /*****                       *****/

      /**** Handles current bowler ****/
      handleBowler = () => {
        if (this.state.bowler === "ONE" && this.state.overs.toFixed(2) % 1 === .5) {
            this.setState({
              bowler: "TWO"
            })
            this.resetMaidenTally()
          } else if (this.state.bowler === "TWO" && this.state.overs.toFixed(2) % 1 === .5){
            this.setState({
              bowler: "ONE"
            })
            this.resetMaidenTally()
          };
          console.log(this.state.bowler)
        };

      /**** Adds Maiden to bowler figures ****/
      addMaiden = () => {
        if(this.state.isBatting === true) {
          for(let i = 0; i < this.state.awayPlayers.length; i++) {
            if (this.state.awayPlayers[i].status === "bowling1" && this.state.bowler === "ONE") {
              this.setState({
                maidensOne: this.state.maidensOne + 1
              })
              if(this.state.maidensOne === 5) {
                const addMaiden = this.state.awayPlayers
                addMaiden[i].maidens += 1
                this.setState({
                  addMaiden,
                  maidensOne: 0
                })
              }
            } else if (this.state.awayPlayers[i].status === "bowling2" && this.state.bowler === "TWO") {
              this.setState({
                maidensTwo: this.state.maidensTwo + 1
              })
              if (this.state.maidensTwo === 5) {
                const addMaiden = this.state.awayPlayers
                addMaiden[i].maidens += 1
                this.setState({
                  addMaiden,
                  maidensTwo: 0
                })
            }
            }
          }
        } else {
          for(let i = 0; i < this.state.homePlayers.length; i++) {
            if (this.state.homePlayers[i].status === "bowling1" && this.state.bowler === "ONE") {
              this.setState({
                maidensOne: this.state.maidensOne + 1
              })
              if(this.state.maidensOne === 5) {
                const addMaiden = this.state.homePlayers
                addMaiden[i].maidens += 1
                this.setState({
                  addMaiden,
                  maidensOne: 0
                })
              }
            } else if (this.state.homePlayers[i].status === "bowling2" && this.state.bowler === "TWO") {
              this.setState({
                maidensTwo: this.state.maidensTwo + 1
              })
              if (this.state.maidensTwo === 5) {
                const addMaiden = this.state.homePlayers
                addMaiden[i].maidens += 1
                this.setState({
                  addMaiden,
                  maidensTwo: 0
                })
            }
           }
          }
        };
      }

      /**** Resets maiden tally when runs scored ****/
      resetMaidenTally = () => {
        this.setState({
          maidensOne: 0,
          maidensTwo: 0
        })
      }

      /**** Removes one from maiden tally during Wide & No ball ****/
      handleMaidenTallyWideNoBall = () => {
        if(this.state.bowler === "ONE") {
          this.setState({
            maidensOne: this.state.maidensOne - 1
          })
        } else {
          this.setState({
            maidensTwo: this.state.maidensTwo - 1
          })
        }
    }

    /**** Reassigns bowlers status and assigns name to scorecard ****/
      setBowlingStatus = (event) => {
      if(this.state.isBatting === true) {
      if(this.state.bowler === "ONE") {
      for(let i = 0; i < this.state.awayPlayers.length; i++) {
        if (this.state.awayPlayers[i].status === "bowling1") {
            const awayPlayers = this.state.awayPlayers;
            awayPlayers[i].status = "none"
            this.setState({
                awayPlayers
            })
          } 
          if(this.state.awayPlayers[i].name === event.target.value) {
            const awayPlayers = this.state.awayPlayers;
            awayPlayers[i].status = "bowling1"
            this.setState({
                awayPlayers,
                bowlerOne: event.target.value
            })
         } 
      }
    } else {
        for(let i = 0; i < this.state.awayPlayers.length; i++) {
            if (this.state.awayPlayers[i].status === "bowling2") {
                const awayPlayers = this.state.awayPlayers;
                awayPlayers[i].status = "none"
                this.setState({
                    awayPlayers
                })
              }
            if(this.state.awayPlayers[i].name === event.target.value) {
              const awayPlayers = this.state.awayPlayers;
              awayPlayers[i].status = "bowling2"
              this.setState({
                  awayPlayers,
                  bowlerTwo: event.target.value
              })
            }  
        }
    }
} else {
    if(this.state.bowler === "ONE") {
        for(let i = 0; i < this.state.homePlayers.length; i++) {
          if (this.state.homePlayers[i].status === "bowling1") {
              const homePlayers = this.state.homePlayers;
              homePlayers[i].status = "none"
              this.setState({
                homePlayers
              })
            } 
            if(this.state.homePlayers[i].name === event.target.value) {
              const homePlayers = this.state.homePlayers;
              homePlayers[i].status = "bowling1"
              this.setState({
                homePlayers,
                bowlerOne: event.target.value
              })
            } 
        }
      } else {
          for(let i = 0; i < this.state.homePlayers.length; i++) {
              if (this.state.homePlayers[i].status === "bowling2") {
                  const homePlayers = this.state.homePlayers;
                  homePlayers[i].status = "none"
                  this.setState({
                    homePlayers
                  })                  
                }
              if(this.state.homePlayers[i].name === event.target.value) {
                const homePlayers = this.state.homePlayers;
                homePlayers[i].status = "bowling2"
                this.setState({
                    homePlayers,
                    bowlerTwo: event.target.value
                })
              } 
          }
      }
}
    console.log(this.state.awayPlayers)
    console.log(this.state.homePlayers)
    this.handleBowlingScorebook()
    this.handleBowlerFigures()
    this.bowlerSelectActive()
    console.log(this.state.bowlingArr)
      }

      /**** Opens/Closes bowler menu ****/
      bowlerSelectActive = (event) => {
          const bowlerSelect = document.querySelector(".bowler-select-container")
          if(this.state.bowlerSelect === "inactive") {
              bowlerSelect.classList.add("active")
              this.setState({
                  bowlerSelect: "active"
              })
          } else {
               bowlerSelect.classList.remove("active")
               this.setState({
                   bowlerSelect: "inactive"
               })
          }
        }

      /**** Updates bowling figures to current bowler and sets bowler to hasBowled ****/
      handleBowlerFigures = () => {
        if(this.state.isBatting === true) {
            for(let i = 0; i < this.state.awayPlayers.length; i++) {
                if(this.state.bowler === "ONE") {
                    if(this.state.awayPlayers[i].status === "bowling1") {
                        const setBowlingStatus = this.state.awayPlayers
                        setBowlingStatus[i].hasBowled = true
                        this.setState({
                            bowlerOneOvers: this.state.awayPlayers[i].oversBowled.toFixed(1),
                            bowlerOneMaidens: this.state.awayPlayers[i].maidens,
                            bowlerOneWickets: this.state.awayPlayers[i].wickets,
                            bowlerOneRuns: this.state.awayPlayers[i].bowlingRuns,
                            setBowlingStatus

                        })
                    }
                } else {
                    if(this.state.awayPlayers[i].status === "bowling2") {
                        const setBowlingStatus = this.state.awayPlayers
                        setBowlingStatus[i].hasBowled = true
                        this.setState({
                            bowlerTwoOvers: this.state.awayPlayers[i].oversBowled.toFixed(1),
                            bowlerTwoMaidens: this.state.awayPlayers[i].maidens,
                            bowlerTwoWickets: this.state.awayPlayers[i].wickets,
                            bowlerTwoRuns: this.state.awayPlayers[i].bowlingRuns,
                            setBowlingStatus
                        })
                    }
                }
            }
        } else {
            for(let i = 0; i < this.state.homePlayers.length; i++) {
                if(this.state.bowler === "ONE") {
                    if(this.state.homePlayers[i].status === "bowling1") {
                      const setBowlingStatus = this.state.homePlayers
                        setBowlingStatus[i].hasBowled = true
                        this.setState({
                            bowlerOneOvers: this.state.homePlayers[i].oversBowled.toFixed(1),
                            bowlerOneMaidens: this.state.homePlayers[i].maidens,
                            bowlerOneWickets: this.state.homePlayers[i].wickets,
                            bowlerOneRuns: this.state.homePlayers[i].bowlingRuns,
                            setBowlingStatus
                        })
                    }
                } else {
                    if(this.state.homePlayers[i].status === "bowling2") {
                      const setBowlingStatus = this.state.homePlayers
                        setBowlingStatus[i].hasBowled = true
                        this.setState({
                            bowlerTwoOvers: this.state.homePlayers[i].oversBowled.toFixed(1),
                            bowlerTwoMaidens: this.state.homePlayers[i].maidens,
                            bowlerTwoWickets: this.state.homePlayers[i].wickets,
                            bowlerTwoRuns: this.state.homePlayers[i].bowlingRuns,
                            setBowlingStatus
                        })
                    }
                }
            }
        }
    }

      /**** Adds new bowlers to scorebook bowling card ****/
      handleBowlingScorebook = (event) => {
          if(this.state.isBatting === true) {
            for (let i = 0; i < this.state.awayPlayers.length; i++) {
                if(this.state.awayPlayers[i].hasBowled === false && this.state.awayPlayers[i].status === "bowling1") {
                    const addPlayer = this.state.awayPlayers[i]
                    const bowlingArr = this.state.bowlingArr
                    this.setState({
                        bowlingArr: [...bowlingArr, addPlayer]
                    })
                } else if (this.state.awayPlayers[i].hasBowled === false && this.state.awayPlayers[i].status === "bowling2") {
                    const addPlayer = this.state.awayPlayers[i]
                    const bowlingArr = this.state.bowlingArr
                    this.setState({
                        bowlingArr: [...bowlingArr, addPlayer]
                    })
                }
            }
        } else {
            for (let i = 0; i < this.state.homePlayers.length; i++) {
                if(this.state.homePlayers[i].hasBowled === false && this.state.homePlayers[i].status === "bowling1") {
                    const addPlayer = this.state.homePlayers[i]
                    const bowlingArr = this.state.bowlingArr
                    this.setState({
                        bowlingArr: [...bowlingArr, addPlayer]
                    })
                } else if (this.state.homePlayers[i].hasBowled === false && this.state.homePlayers[i].status === "bowling2") {
                    const addPlayer = this.state.homePlayers[i]
                    const bowlingArr = this.state.bowlingArr
                    this.setState({
                        bowlingArr: [...bowlingArr, addPlayer]
                    })
                }
            }
        }
         console.log(this.state.bowlingArr)
      }

      /**** Bowling correction buttons ****/
      bowlerAddRun = () => {
        if(this.state.isBatting === true) {
          for(let i = 0; i < this.state.awayPlayers.length; i++) {
            if(this.state.awayPlayers[i].edit === "editing") {
              const addRun = this.state.awayPlayers
              addRun[i].bowlingRuns += 1
              this.setState({
                addRun
              })
            }
          }
        } else {
          for(let i = 0; i < this.state.homePlayers.length; i++) {
            if(this.state.homePlayers[i].edit === "editing") {
              const addRun = this.state.homePlayers
              addRun[i].bowlingRuns += 1
              this.setState({
                addRun
              })
            }
          }
        }
        this.handleBowlerFigures()
      }
      bowlerMinusRun = () => {
        if(this.state.isBatting === true) {
          for(let i = 0; i < this.state.awayPlayers.length; i++) {
            if(this.state.awayPlayers[i].edit === "editing") {
              const addRun = this.state.awayPlayers
              addRun[i].bowlingRuns -= 1
              this.setState({
                addRun
              })
            }
          }
        } else {
          for(let i = 0; i < this.state.homePlayers.length; i++) {
            if(this.state.homePlayers[i].edit === "editing") {
              const addRun = this.state.homePlayers
              addRun[i].bowlingRuns -= 1
              this.setState({
                addRun
              })
            }
          }
        }
        this.handleBowlerFigures()
      }
      bowlerAddBall = () => {
        if(this.state.isBatting === true) {
          for(let i = 0; i < this.state.awayPlayers.length; i++) {
            if(this.state.awayPlayers[i].edit === "editing") {
              const addBall = this.state.awayPlayers
              addBall[i].bowlingBalls += 1
              addBall[i].oversBowled += 0.1
              this.setState({
                addBall
              })
            }
          }
        } else {
          for(let i = 0; i < this.state.homePlayers.length; i++) {
            if(this.state.homePlayers[i].edit === "editing") {
              const addBall = this.state.homePlayers
              addBall[i].bowlingBalls += 1
              addBall[i].oversBowled += 0.1
              this.setState({
                addBall
              })
            }
          }
        }
        this.handleBowlerFigures()
      }
      bowlerMinusBall = () => {
        if(this.state.isBatting === true) {
          for(let i = 0; i < this.state.awayPlayers.length; i++) {
            if(this.state.awayPlayers[i].edit === "editing") {
              const addBall = this.state.awayPlayers
              addBall[i].bowlingBalls -= 1
              addBall[i].oversBowled -= 0.1
              this.setState({
                addBall
              })
            }
          }
        } else {
          for(let i = 0; i < this.state.homePlayers.length; i++) {
            if(this.state.homePlayers[i].edit === "editing") {
              const addBall = this.state.homePlayers
              addBall[i].bowlingBalls -= 1
              addBall[i].oversBowled -= 0.1
              this.setState({
                addBall
              })
            }
          }
        }
        this.handleBowlerFigures()
      }
      bowlerAddMaiden = () => {
        if(this.state.isBatting === true) {
          for(let i = 0; i < this.state.awayPlayers.length; i++) {
            if(this.state.awayPlayers[i].edit === "editing") {
              const addMaiden = this.state.awayPlayers
              addMaiden[i].maidens += 1
              this.setState({
                addMaiden
              })
            }
          }
        } else {
          for(let i = 0; i < this.state.homePlayers.length; i++) {
            if(this.state.homePlayers[i].edit === "editing") {
              const addMaiden = this.state.homePlayers
              addMaiden[i].maidens += 1
              this.setState({
                addMaiden
              })
            }
          }
        }
        this.handleBowlerFigures()
      }
      bowlerMinusMaiden = () => {
        if(this.state.isBatting === true) {
          for(let i = 0; i < this.state.awayPlayers.length; i++) {
            if(this.state.awayPlayers[i].edit === "editing") {
              const addRun = this.state.awayPlayers
              addRun[i].maidens -= 1
              this.setState({
                addRun
              })
            }
          }
        } else {
          for(let i = 0; i < this.state.homePlayers.length; i++) {
            if(this.state.homePlayers[i].edit === "editing") {
              const addRun = this.state.homePlayers
              addRun[i].maidens -= 1
              this.setState({
                addRun
              })
            }
          }
        }
        this.handleBowlerFigures()
      }
      bowlerAddWicket = () => {
        if(this.state.isBatting === true) {
          for(let i = 0; i < this.state.awayPlayers.length; i++) {
            if(this.state.awayPlayers[i].edit === "editing") {
              const addWicket = this.state.awayPlayers
              addWicket[i].wickets += 1
              this.setState({
                addWicket
              })
            }
          }
        } else {
          for(let i = 0; i < this.state.homePlayers.length; i++) {
            if(this.state.homePlayers[i].edit === "editing") {
              const addWicket = this.state.homePlayers
              addWicket[i].wickets += 1
              this.setState({
                addWicket
              })
            }
          }
        }
        this.handleBowlerFigures()
      }
      bowlerMinusWicket = () => {
        if(this.state.isBatting === true) {
          for(let i = 0; i < this.state.awayPlayers.length; i++) {
            if(this.state.awayPlayers[i].edit === "editing") {
              const addWicket = this.state.awayPlayers
              addWicket[i].wickets -= 1
              this.setState({
                addWicket
              })
            }
          }
        } else {
          for(let i = 0; i < this.state.homePlayers.length; i++) {
            if(this.state.homePlayers[i].edit === "editing") {
              const addWicket = this.state.homePlayers
              addWicket[i].wickets -= 1
              this.setState({
                addWicket
              })
            }
          }
        }
        this.handleBowlerFigures()
      }

      /******* MANUAL EDIT FUNCTION *******/
      /*****                          *****/

      /**** handles bowling menu to select bowler to edit ****/
      handleEditBowlingToggle = () => {
        const editBowling = document.querySelector(".edit-bowling")
        if (this.state.editBowlingToggle === true) {
          editBowling.classList.add("active")
          this.setState({
            editBowlingToggle: false
          });
        } else {
          editBowling.classList.remove("active")
          this.setState({
            editBowlingToggle: true
          });
        };
      };

      /**** handles batting menu to select batsman to edit ****/
      handleEditBattingToggle = () => {
        const editBatting = document.querySelector(".edit-batting")
        if (this.state.editBattingToggle === true) {
          editBatting.classList.add("active")
          this.setState({
            editBattingToggle: false
          });
        } else {
          editBatting.classList.remove("active")
          this.setState({
            editBattingToggle: true
          });
        };
      };

      /**** handles extras menu to select extra to edit ****/
      handleEditExtrasToggle = () => {
        const editExtras = document.querySelector(".edit-extras")
        if (this.state.editExtrasToggle === true) {
          editExtras.classList.add("active")
          this.setState({
            editExtrasToggle: false
          });
        } else {
          editExtras.classList.remove("active")
          this.setState({
            editExtrasToggle: true
          });
        };
      };

      /**** loads selected bowler info to edit ****/
      selectEditBowlingPlayer = (event) => {
        const editBowling = document.querySelector(".edit-bowling")
        editBowling.classList.remove("active")
        const playerSelect = document.querySelector(".bowling-edit-menu")
        playerSelect.classList.add("active")

        if(this.state.isBatting === true) {
          for(let i = 0; i < this.state.awayPlayers.length; i++) {
            if(this.state.awayPlayers[i].name === event.target.value) {
              const editingPlayer = this.state.awayPlayers
              editingPlayer[i].edit = "editing"
              this.setState({
                editingPlayer
              })
            }
          }
        } else {
          for(let i = 0; i < this.state.homePlayers.length; i++) {
            if(this.state.homePlayers[i].name === event.target.value) {
              const editPlayer = this.state.homePlayers
              editPlayer[i].edit = "editing"
              this.setState({
                editPlayer
              })
            }
          }
        }
      }

      /**** loads selected batsman info to edit ****/
      selectEditBattingPlayer = (event) => {
        const editBatting = document.querySelector(".edit-batting")
        editBatting.classList.remove("active")
        const playerSelect = document.querySelector(".batting-edit-menu")
        playerSelect.classList.add("active")

        if(this.state.isBatting === true) {
          for(let i = 0; i < this.state.homePlayers.length; i++) {
            if(this.state.homePlayers[i].name === event.target.value) {
              const editingPlayer = this.state.homePlayers
              editingPlayer[i].edit = "editing"
              this.setState({
                editingPlayer
              })
            }
          }
        } else {
          for(let i = 0; i < this.state.awayPlayers.length; i++) {
            if(this.state.awayPlayers[i].name === event.target.value) {
              const editPlayer = this.state.awayPlayers
              editPlayer[i].edit = "editing"
              this.setState({
                editPlayer
              })
            }
          }
        }
      }

      /**** Closes editing screen and removes edit status from player ****/
      confirmEdit = () => {
          for(let i = 0; i < this.state.homePlayers.length; i++) {
            if(this.state.homePlayers[i].edit === "editing") {
              const removeEdit = this.state.homePlayers
              removeEdit[i].edit = ""
              this.setState({
                removeEdit,
                editBattingToggle: true,
                editBowlingToggle: true
              })
            }
          }
          for(let j = 0; j < this.state.awayPlayers.length; j++) {
            if(this.state.awayPlayers[j].edit === "editing") {
              const removeEdit = this.state.awayPlayers
              removeEdit[j].edit = ""
              this.setState({
                removeEdit,
                editBattingToggle: true,
                editBowlingToggle: true
              })
            }
          }
          const closeBattingMenu = document.querySelector(".batting-edit-menu")
          closeBattingMenu.classList.remove("active")
          const closeBowlingMenu = document.querySelector(".bowling-edit-menu")
          closeBowlingMenu.classList.remove("active")
        }

      /*******  SCOREBOARD CORRECTION BUTTONS *******/
      /*****                                    *****/

      // Handles Total Score
      totalScoreAdd = () => {
        this.setState({
          totalRuns: this.state.totalRuns + 1,
        })
      };
      totalScoreMinus = () => {
        this.setState({
          totalRuns: this.state.totalRuns - 1,
        })
      };

      // Handles Batsman One Score
      batsmanOneAdd = () => {
        this.setState({
          totalRuns: this.state.totalRuns + 1,
          batsmanOne: this.state.batsmanOne + 1
        })
      };
      batsmanOneMinus = () => {
        this.setState({
          totalRuns: this.state.totalRuns - 1,
          batsmanOne: this.state.batsmanOne - 1
        })
      };

      // Handles Batsman Two Score
      batsmanTwoAdd = () => {
        this.setState({
          totalRuns: this.state.totalRuns + 1,
          batsmanTwo: this.state.batsmanTwo + 1
        })
      };
      batsmanTwoMinus = () => {
        this.setState({
          totalRuns: this.state.totalRuns - 1,
          batsmanTwo: this.state.batsmanTwo - 1
        })
      };

      // Handles Batsman One Balls
      ballsFacedOneAdd = () => {
        this.setState({
          ballsFacedOne: this.state.ballsFacedOne + 1
        })
        if(this.state.isBatting === true) {
          for(let i = 0; i < this.state.homePlayers.length; i++) {
            if(this.state.homePlayers[i].status === "batting1") {
              const add = this.state.homePlayers
              add[i].balls += 1
            }
          }
          } else {
            for(let i = 0; i < this.state.awayPlayers.length; i++) {
              if(this.state.awayPlayers[i].status === "batting1") {
                const add = this.state.awayPlayers
                add[i].balls += 1
              }
            }
          }
      };
      ballsFacedOneMinus = () => {
        this.setState({
          ballsFacedOne: this.state.ballsFacedOne - 1
        })
        if(this.state.isBatting === true) {
          for(let i = 0; i < this.state.homePlayers.length; i++) {
            if(this.state.homePlayers[i].status === "batting1") {
              const add = this.state.homePlayers
              add[i].balls -= 1
            }
          }
          } else {
            for(let i = 0; i < this.state.awayPlayers.length; i++) {
              if(this.state.awayPlayers[i].status === "batting1") {
                const add = this.state.awayPlayers
                add[i].balls -= 1
              }
            }
          }
      };

      // Handles Batsman Two Balls
      ballsFacedTwoAdd = () => {
        this.setState({
          ballsFacedTwo: this.state.ballsFacedTwo + 1
        })
        if(this.state.isBatting === true) {
          for(let i = 0; i < this.state.homePlayers.length; i++) {
            if(this.state.homePlayers[i].status === "batting2") {
              const add = this.state.homePlayers
              add[i].balls += 1
            }
          }
          } else {
            for(let i = 0; i < this.state.awayPlayers.length; i++) {
              if(this.state.awayPlayers[i].status === "batting2") {
                const add = this.state.awayPlayers
                add[i].balls += 1
              }
            }
          }
      };
      ballsFacedTwoMinus = () => {
        this.setState({
          ballsFacedTwo: this.state.ballsFacedTwo - 1
        })
        if(this.state.isBatting === true) {
          for(let i = 0; i < this.state.homePlayers.length; i++) {
            if(this.state.homePlayers[i].status === "batting2") {
              const add = this.state.homePlayers
              add[i].balls -= 1
            }
          }
          } else {
            for(let i = 0; i < this.state.awayPlayers.length; i++) {
              if(this.state.awayPlayers[i].status === "batting2") {
                const add = this.state.awayPlayers
                add[i].balls -= 1
              }
            }
          }
      };

      // Handles Wickets Edit
      wicketsAdd = () => {
        this.setState({
          wickets: this.state.wickets + 1
        })
      };
      wicketsMinus = () => {
        this.setState({
          wickets: this.state.wickets - 1
        })
      };

      // Handles Overs Edit
      oversAdd = () => {
        if (this.state.overs.toFixed(2) % 1 === .5) {
          this.setState({
            overs: this.state.overs + .5,
            balls: this.state.balls + 1
          })
        } else {
          this.setState({
            overs: this.state.overs + .1,
            balls: this.state.balls + 1
          })
        };
      };
      oversMinus = () => {
        if (this.state.overs.toFixed(2) % 1 === .0) {
          this.setState({
            overs: this.state.overs - .5,
            balls: this.state.balls - 1
          })
        } else {
          this.setState({
            overs: this.state.overs - .1,
            balls: this.state.balls - 1
          })
        };
      };
      
      // Handles Total Extras Edit
      extrasTotalAdd = () => {
        this.setState({
          extrasTotal: this.state.extrasTotal + 1
        })
      };
      extrasTotalMinus = () => {
        this.setState({
          extrasTotal: this.state.extrasTotal - 1
        })
      };

      // Handles Wides Edit
      widesAdd = () => {
        this.setState({
          extrasTotal: this.state.extrasTotal + 1,
          wides: this.state.wides + 1
        })
      };
      widesMinus = () => {
        this.setState({
          extrasTotal: this.state.extrasTotal - 1,
          wides: this.state.wides - 1
        })
      };

      // Handles No Balls Edit
      noBallsAdd = () => {
        this.setState({
          extrasTotal: this.state.extrasTotal + 1,
          noBalls: this.state.noBalls + 1
        })
      };
      noBallsMinus = () => {
        this.setState({
          extrasTotal: this.state.extrasTotal - 1,
          noBalls: this.state.noBalls - 1
        })
      };

      // Handles Byes Edit
      byesAdd = () => {
        this.setState({
          extrasTotal: this.state.extrasTotal + 1,
          byes: this.state.byes + 1
        })
      };
      byesMinus = () => {
        this.setState({
          extrasTotal: this.state.extrasTotal - 1,
          byes: this.state.byes - 1
        })
      };

      // Handles Leg Byes Edit
      legByesAdd = () => {
        this.setState({
          extrasTotal: this.state.extrasTotal + 1,
          legByes: this.state.legByes + 1
        })
      };
      legByesMinus = () => {
        this.setState({
          extrasTotal: this.state.extrasTotal - 1,
          legByes: this.state.legByes - 1
        })
      };

      // Handles Penalty Runs Edit
      penaltyRunsAdd = () => {
        this.setState({
          extrasTotal: this.state.extrasTotal + 1,
          penaltyRuns: this.state.penaltyRuns + 1
        })
      };
      penaltyRunsMinus = () => {
        this.setState({
          extrasTotal: this.state.extrasTotal - 1,
          penaltyRuns: this.state.penaltyRuns - 1
        })
      };

      // Removes last delivery from delivery tally
      lastTenMinus = () => {
        if (this.state.recentDeliveries.length > 0) {
          this.setState({
              recentDeliveries: [...this.state.recentDeliveries.splice(this.state.recentDeliveries, this.state.recentDeliveries.length - 1)]
          })
      } else {
          return null
      }
      }

      /******* TEAM NEWS FUNCTION *******/
      /*****                        *****/

      /**** Switch batting team icon ****/
      handleBatting = () => {
        this.setBattingName()
        if (this.state.isBatting === true) {
        this.setState({
          isBatting: false
        });
        } else {
          this.setState({
            isBatting: true
          });
        }
      };

      /**** Setting Home/Away team name ****/
      handleInputHome = event => {
        this.setState({homeName: event.target.value});
    };
      handleInputAway = event => {
        this.setState({awayName: event.target.value});
    };

      /**** Setting Venue ****/
      handleVenue = event => {
          this.setState({venue: event.target.value})
      };

      /**** Setting Format ****/
       handleFormat = event => {
        this.setState({format: event.target.value})
        console.log(this.state.format)
      };

      /**** Setting Toss Winner ****/
      handleToss = event => {
        this.setState({toss: event.target.value})
      }

      /**** Setting Player Names ****/
      handleHomePlayers = () => {
        const input = document.getElementById("inputHome")
        const homePlayers = this.state.homePlayers;
        if(this.state.homePlayers.length > 1) {
            this.setState({ homePlayers: [...homePlayers, {name: input.value, runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100}] });
            input.value = "";
            input.focus();
        } else if(this.state.homePlayers.length > 0) {
            this.setState({ homePlayers: [...homePlayers, {name: input.value, runs: 0, balls: 0, status: "batting2", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100}] });
            input.value = "";
            input.focus();
        } else {
            this.setState({ homePlayers: [...homePlayers, {name: input.value, runs: 0, balls: 0, status: "batting1", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100}] });
            input.value = "";
            input.focus();
        }
        this.setBattingName()
      };

      handleAwayPlayers = () => {
        const input = document.getElementById("inputAway")
        const awayPlayers = this.state.awayPlayers;
        if(this.state.awayPlayers.length > 1) {
            this.setState({ awayPlayers: [...awayPlayers, {name: input.value, runs: 0, balls: 0, status: "-", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100}] })
            input.value = "";
            input.focus();
        } else if(this.state.awayPlayers.length > 0) {
            this.setState({ awayPlayers: [...awayPlayers, {name: input.value, runs: 0, balls: 0, status: "batting2", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100}] });
            input.value = "";
            input.focus();
        } else {
            this.setState({ awayPlayers: [...awayPlayers, {name: input.value, runs: 0, balls: 0, status: "batting1", wicketTaker: "none", wicketType: "-", oversBowled: 0, maidens: 0, wickets: 0, bowlingRuns: 0, bowlingBalls: 0, hasBowled: false, edit:"", randomID: Math.random() * 100}] });
            input.value = "";
            input.focus();
        }
        this.setBattingName()
      };


/******** Handles storing state to local storage  ********/
/*******                                           *******/
componentDidMount() {
       this.appData = JSON.parse(localStorage.getItem("myData"));

       if(localStorage.getItem("myData")) {
         this.setState({
          totalRuns: this.appData.totalRuns,
          batsman: this.appData.batsman,
          batsmanOne: this.appData.batsmanOne,
          batsmanOneName: this.appData.batsmanOneName,
          batsmanTwo: this.appData.batsmanTwo,
          batsmanTwoName: this.appData.batsmanTwoName,
          wickets: this.appData.wickets,
          balls: this.appData.balls,
          overs: this.appData.overs,
          extrasTotal: this.appData.extrasTotal,
          wides: this.appData.wides,
          noBalls: this.appData.noBalls,
          byes: this.appData.byes,
          legByes: this.appData.legByes,
          penaltyRuns: this.appData.penaltyRuns,
          ballsFacedOne: this.appData.ballsFacedOne,
          ballsFacedTwo: this.appData.ballsFacedTwo,
          recentDeliveries: this.appData.recentDeliveries,
          runRate: this.appData.runRate,
          screen: this.appData.screen,
          buttonToggle: this.appData.buttonToggle,
          editBowlingToggle: this.appData.editBowlingToggle,
          editBattingToggle: this.appData.editBattingToggle,
          editExtrasToggle: this.appData.editExtrasToggle,
          wicketArr: this.appData.wicketArr,
          batsmanAtWicket: this.appData.batsmanAtWicket,
          wicketActive: this.appData.wicketActive,
          wicketType: this.appData.wicketType,
          editingPlayer: this.appData.editingPlayer,
          isBowling: this.appData.isBowling,
            bowler: this.appData.bowler,
            bowlerOne: this.appData.bowlerOne,
            bowlerTwo: this.appData.bowlerTwo,
            bowlerSelect: this.appData.bowlerSelect,
            bowlerOneOvers: this.appData.bowlerOneOvers,
            bowlerTwoOvers: this.appData.bowlerTwoOvers,
            bowlerOneMaidens: this.appData.bowlerOneMaidens,
            bowlerTwoMaidens: this.appData.bowlerTwoMaidens,
            bowlerOneWickets: this.appData.bowlerOneWickets,
            bowlerTwoWickets: this.appData.bowlerTwoWickets,
            bowlerOneRuns: this.appData.bowlerOneRuns,
            bowlerTwoRuns: this.appData.bowlerTwoRuns,
            bowlingArr: this.appData.bowlingArr,
            maidensOne: this.appData.maidensOne,
            maidensTwo: this.appData.maidensTwo,
            homeName: this.appData.homeName,
            awayName: this.appData.awayName,
            venue: this.appData.venue,
            format: this.appData.format,
            toss: this.appData.toss,
            isBatting: this.appData.isBatting,
            teamScreen: this.appData.teamScreen,
            homePlayers: this.appData.homePlayers,
            awayPlayers: this.appData.awayPlayers,
         })
       } else {
         this.setState({
        totalRuns: 0,
        batsman: "ONE",
        batsmanOne: 0,
        batsmanOneName: "",
        batsmanTwo: 0,
        batsmanTwoName: "",
        wickets: 0,
        balls: 0,
        overs: 0,
        extrasTotal: 0,
        wides: 0,
        noBalls: 0,
        byes: 0,
        legByes: 0,
        penaltyRuns: 0,
        ballsFacedOne: 0,
        ballsFacedTwo: 0,
        recentDeliveries: [""],
        runRate: 0,
        screen: true,
        buttonToggle: true,
        editBowlingToggle: true,
        editBattingToggle: true,
        editExtrasToggle: true,
        wicketArr: ["0"],
        batsmanAtWicket: ["0"],
        wicketActive: "inactive",
        wicketType: ["Bowled", "LBW", "Caught", "Stumped", "Run Out", "Hit Wicket"],
        editingPlayer: "",
        isBowling: true,
            bowler: "ONE",
            bowlerOne: "Select Bowler", //controls bowler being show on scorecard
            bowlerTwo: "Select Bowler",
            bowlerSelect: "inactive",
            bowlerOneOvers: "",
            bowlerTwoOvers: "",
            bowlerOneMaidens: "",
            bowlerTwoMaidens: "",
            bowlerOneWickets: "",
            bowlerTwoWickets: "",
            bowlerOneRuns: "",
            bowlerTwoRuns: "",
            bowlingArr: [],
            maidensOne: 0,
            maidensTwo: 0,
            homeName: "",
            awayName: "",
            venue: "",
            format: "",
            toss: "",
            isBatting: true,
            teamScreen: true,
            homePlayers: [],
            awayPlayers: []
       })
       }
      }

    componentWillUpdate(nextProps, nextState) {
      localStorage.setItem("myData", JSON.stringify(nextState))
    }

/******** Resets State ********/
/*******                ********/
    clearAll = () => {
      this.setState({
        totalRuns: 0,
            batsman: "ONE",
            batsmanOne: 0,
            batsmanOneName: "",
            batsmanTwo: 0,
            batsmanTwoName: "",
            wickets: 0,
            balls: 0,
            overs: 0,
            extrasTotal: 0,
            wides: 0,
            noBalls: 0,
            byes: 0,
            legByes: 0,
            penaltyRuns: 0,
            ballsFacedOne: 0,
            ballsFacedTwo: 0,
            recentDeliveries: [""],
            runRate: 0,
            screen: true,
            buttonToggle: true,
            editBowlingToggle: true,
            editBattingToggle: true,
            editExtrasToggle: true,
            wicketArr: ["0"],
            batsmanAtWicket: ["0"],
            wicketActive: "inactive",
            wicketType: ["Bowled", "LBW", "Caught", "Stumped", "Run Out", "Hit Wicket"],
            editingPlayer: "",
            isBowling: true,
            bowler: "ONE",
            bowlerOne: "Select Bowler",
            bowlerTwo: "Select Bowler",
            bowlerSelect: "inactive",
            bowlerOneOvers: "",
            bowlerTwoOvers: "",
            bowlerOneMaidens: "",
            bowlerTwoMaidens: "",
            bowlerOneWickets: "",
            bowlerTwoWickets: "",
            bowlerOneRuns: "",
            bowlerTwoRuns: "",
            bowlingArr: [],
            maidensOne: 0,
            maidensTwo: 0,
            homeName: "",
            awayName: "",
            venue: "",
            isBatting: true,
            teamScreen: true,
            homePlayers: [],
            awayPlayers: []
      })
    }

    /**** RENDERING ****/
    render() {
    return (
        <div>
            {
            (this.state.teamScreen === true
                ?
                <Header
                isBatting={this.state.isBatting}
                handleTeamScreen={this.handleTeamScreen}
                handleBatting={this.handleBatting}
                homeName={this.state.homeName}
                handleInputHome={this.handleInputHome}
                awayName={this.state.awayName}
                handleInputAway={this.handleInputAway}
                venue={this.state.venue}
                handleVenue={this.handleVenue}
                format={this.state.format}
                handleFormat={this.handleFormat}
                toss={this.state.toss}
                handleToss={this.handleToss}
                updateUI={this.updateUI}
                setData={this.setData}
                screen={this.state.screen}
                changeScreen={this.changeScreen}
                />
                :
                <TeamNews
                homeName={this.state.homeName}
                handleInputHome={this.handleInputHome}
                awayName={this.state.awayName}
                handleInputAway={this.handleInputAway}
                handleTeamScreen={this.handleTeamScreen}
                submitTeamNews={this.submitTeamNews}
                homePlayers={this.state.homePlayers}
                handleHomePlayers={this.handleHomePlayers}
                awayPlayers={this.state.awayPlayers}
                handleAwayPlayers={this.handleAwayPlayers}
                setBattingName={this.setBattingName}
                handleRemoveItem={this.handleRemoveItem}
                handleVenue={this.handleVenue}
                venue={this.state.venue}
                handleFormat={this.handleFormat}
                format={this.state.format}
                handleToss={this.handleToss}
                toss={this.state.toss}
                handleBatting={this.handleBatting}
                isBatting={this.state.isBatting}
                updateUI={this.updateUI}
                batsmanOneName={this.state.batsmanOneName}
                batsmanTwoName={this.state.batsmanTwoName}
                />
            )}
            {
            (this.state.screen === false
            ?
            <Scorebook
            totalRuns={this.state.totalRuns}
            batsmanOne={this.state.batsmanOne} 
            batsmanTwo={this.state.batsmanTwo} 
            ballsFacedOne={this.state.ballsFacedOne} 
            ballsFacedTwo={this.state.ballsFacedTwo}
            overs={this.state.overs} 
            wickets={this.state.wickets}
            balls={this.state.balls} 
            recentDeliveries={this.state.recentDeliveries} 
            extrasTotal={this.state.extrasTotal} 
            wides={this.state.wides} 
            noBalls={this.state.noBalls} 
            byes={this.state.byes} 
            legByes={this.state.legByes} 
            penaltyRuns={this.state.penaltyRuns}
            wicketArr={this.state.wicketArr}
            isBatting={this.state.isBatting}
            homePlayers={this.state.homePlayers}
            awayPlayers={this.state.awayPlayers}
            setBatsmanStatus={this.setBatsmanStatus}
            batsmanAtWicket={this.state.batsmanAtWicket}
            setWicketBatsmanNumber={this.state.setWicketBatsmanNumber}
            handleBowlingScorebook={this.handleBowlingScorebook}
            bowlingArr={this.state.bowlingArr}
            handleBowlerSelectClick={this.handleBowlerSelectClick}
            handleBowlingScorebookFigures={this.handleBowlingScorebookFigures}
            wicketType={this.state.wicketType}
            wicketTypeActive={this.wicketTypeActive}
            handleWicket={this.handleWicket}
            screen={this.state.screen}
            changeScreen={this.changeScreen}
            />
            :
            <Scoreboard
            totalRuns={this.state.totalRuns}
            batsman={this.state.batsman}
            batsmanOne={this.state.batsmanOne} 
            batsmanTwo={this.state.batsmanTwo} 
            ballsFacedOne={this.state.ballsFacedOne} 
            ballsFacedTwo={this.state.ballsFacedTwo}
            overs={this.state.overs} 
            wickets={this.state.wickets}
            balls={this.state.balls} 
            recentDeliveries={this.state.recentDeliveries} 
            extrasTotal={this.state.extrasTotal} 
            wides={this.state.wides} 
            noBalls={this.state.noBalls} 
            byes={this.state.byes} 
            legByes={this.state.legByes} 
            penaltyRuns={this.state.penaltyRuns}
            wicketArr={this.state.wicketArr}
            isBatting={this.state.isBatting}
            homePlayers={this.state.homePlayers}
            awayPlayers={this.state.awayPlayers}
            batsmanOneName={this.state.batsmanOneName}
            batsmanTwoName={this.state.batsmanTwoName}
            setBattingName={this.setBattingName}
            awayName={this.state.awayName}
            homeName={this.state.homeName}
            bowlerSelectActive={this.bowlerSelectActive}
            setBowlingStatus={this.setBowlingStatus}
            bowlerSelect={this.state.bowlerSelect}
            bowler={this.state.bowler}
            bowlerOne={this.state.bowlerOne}
            bowlerTwo={this.state.bowlerTwo}
            bowlerOneOvers={this.state.bowlerOneOvers}
            bowlerTwoOvers={this.state.bowlerTwoOvers}
            bowlerOneMaidens={this.state.bowlerOneMaidens}
            bowlerTwoMaidens={this.state.bowlerTwoMaidens}
            bowlerOneWickets={this.state.bowlerOneWickets}
            bowlerTwoWickets={this.state.bowlerTwoWickets}
            bowlerOneRuns={this.state.bowlerOneRuns}
            bowlerTwoRuns={this.state.bowlerTwoRuns}
            handleBowlerFigures={this.handleBowlerFigures}
            handleBowlingScorebook={this.handleBowlingScorebook}
            bowlingArr={this.state.bowlingArr}
            wicketType={this.state.wicketType}
            wicketTypeActive={this.wicketTypeActive}
            handleWicket={this.handleWicket}
            handleTeamScreen={this.handleTeamScreen}
            teamScreen={this.state.teamScreen}
            screen={this.state.screen}
            changeScreen={this.changeScreen}
            handleBatting={this.handleBatting}
            updateUI={this.updateUI}
            />
        )}
            <Buttons
            totalRuns={this.state.totalRuns}
            batsmanOne={this.state.batsmanOne} 
            batsmanTwo={this.state.batsmanTwo} 
            ballsFacedOne={this.state.ballsFacedOne} 
            ballsFacedTwo={this.state.ballsFacedTwo}
            overs={this.state.overs} 
            wickets={this.state.wickets}
            balls={this.state.balls} 
            recentDeliveries={this.state.recentDeliveries} 
            extrasTotal={this.state.extrasTotal} 
            wides={this.state.wides} 
            noBalls={this.state.noBalls} 
            byes={this.state.byes} 
            legByes={this.state.legByes} 
            penaltyRuns={this.state.penaltyRuns}
            wicketArr={this.state.wicketArr}
            buttonToggle={this.state.buttonToggle}
            handleButtonToggle={this.handleButtonToggle}
            editBowlingToggle={this.state.editBowlingToggle}
            handleEditBowlingToggle={this.handleEditBowlingToggle}
            editBattingToggle={this.state.editBattingToggle}
            handleEditBattingToggle={this.handleEditBattingToggle}
            selectEditBowlingPlayer={this.selectEditBowlingPlayer}
            selectEditBattingPlayer={this.selectEditBattingPlayer}
            editingPlayer={this.state.editingPlayer}
            handleEditExtrasToggle={this.handleEditExtrasToggle}
            confirmEdit={this.confirmEdit}
            changeScreen={this.changeScreen}
            handleOvers={this.handleOvers}
            noRun={this.noRun}
            oneRun={this.oneRun}
            twoRuns={this.twoRuns}
            threeRuns={this.threeRuns}
            fourRuns={this.fourRuns}
            sixRuns={this.sixRuns}
            addWide={this.addWide}
            addNoBall={this.addNoBall}
            addBye1={this.addBye1}
            addBye2={this.addBye2}
            addBye3={this.addBye3}
            addBye4={this.addBye4}
            addLegBye1={this.addLegBye1}
            addLegBye2={this.addLegBye2}
            addLegBye3={this.addLegBye3}
            addLegBye4={this.addLegBye4}
            addWicket={this.addWicket}
            changeBatsman={this.changeBatsman}
            totalScoreAdd={this.totalScoreAdd}
            totalScoreMinus={this.totalScoreMinus}
            batsmanOneAdd={this.batsmanOneAdd}
            batsmanOneMinus={this.batsmanOneMinus}
            batsmanTwoAdd={this.batsmanTwoAdd}
            batsmanTwoMinus={this.batsmanTwoMinus}
            ballsFacedOneAdd={this.ballsFacedOneAdd}
            ballsFacedOneMinus={this.ballsFacedOneMinus}
            ballsFacedTwoAdd={this.ballsFacedTwoAdd}
            ballsFacedTwoMinus={this.ballsFacedTwoMinus}
            wicketsAdd={this.wicketsAdd}
            wicketsMinus={this.wicketsMinus}
            oversAdd={this.oversAdd}
            oversMinus={this.oversMinus}
            extrasTotalAdd={this.extrasTotalAdd}
            extrasTotalMinus={this.extrasTotalMinus}
            widesAdd={this.widesAdd}
            widesMinus={this.widesMinus}
            noBallsAdd={this.noBallsAdd}
            noBallsMinus={this.noBallsMinus}
            byesAdd={this.byesAdd}
            byesMinus={this.byesMinus}
            legByesAdd={this.legByesAdd}
            legByesMinus={this.legByesMinus}
            penaltyRunsAdd={this.penaltyRunsAdd}
            penaltyRunsMinus={this.penaltyRunsMinus}
            lastTenMinus={this.lastTenMinus}
            bowlerAddRun={this.bowlerAddRun}
            bowlerMinusRun={this.bowlerMinusRun}
            bowlerAddBall={this.bowlerAddBall}
            bowlerMinusBall={this.bowlerMinusBall}
            bowlerAddMaiden={this.bowlerAddMaiden}
            bowlerMinusMaiden={this.bowlerMinusMaiden}
            bowlerAddWicket={this.bowlerAddWicket}
            bowlerMinusWicket={this.bowlerMinusWicket}
            batsmanAddRun={this.batsmanAddRun}
            batsmanMinusRun={this.batsmanMinusRun}
            batsmanAddBall={this.batsmanAddBall}
            batsmanMinusBall={this.batsmanMinusBall}
            handleDismissal={this.handleDismissal}
            handleDismissalBowler={this.handleDismissalBowler}
            setBattingName={this.setBattingName}
            wicketType={this.state.wicketType}
            wicketTypeActive={this.wicketTypeActive}
            selectWicketType={this.selectWicketType}
            handleWicket={this.handleWicket}
            handleWicketCatch={this.handleWicketCatch}
            handleWicketRunOut={this.handleWicketRunOut}
            handleRunOutRuns={this.handleRunOutRuns}
            handleRunOutByes={this.handleRunOutByes}
            handleRunOutLegByes={this.handleRunOutLegByes}
            selectCatcherMenu={this.selectCatcherMenu}
            selectRunOutMenu={this.selectRunOutMenu}
            confirmRunOut={this.confirmRunOut}
            isBatting={this.state.isBatting}
            homePlayers={this.state.homePlayers}
            awayPlayers={this.state.awayPlayers}
            clearAll={this.clearAll}
            />
        </div>
    )}
}

export default Functions
