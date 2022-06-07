import React from 'react';
import Buttons from './Buttons';
import Header from './Header';
import Scorebook from './Scorebook';
import Scoreboard from './Scoreboard';
import TeamNews from './TeamNews';
import Theme from './Theme';
import { useSelector } from 'react-redux';

export default function Home() {

  const homeScreen = useSelector(state => state.homeScreen);
  const scorebookScreen = useSelector(state => state.scorebookScreen);
  const teamNewsScreen = useSelector(state => state.teamNewsScreen);
  const themeScreen = useSelector(state => state.themeScreen);

  /**** RENDERING ****/
  return (
    <div>
      {
        homeScreen === true
          ?
          <div>
            <Header />
            <Scoreboard />
            <Buttons />
          </div>
          :
          null
      }
      {
        scorebookScreen === true
          ?
          <Scorebook />
          :
          null
      }

      {
        teamNewsScreen === true
          ?
          <TeamNews />
          :
          null
      }

      {
        themeScreen === true
          ?
          <Theme />
          :
          null
      }

    </div>
  )
}