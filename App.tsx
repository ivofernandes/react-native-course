import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet } from 'react-native';

import Header from './components/Header';
import { Text, View } from './components/Themed';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const configureNewGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGameHandler = (selectedNumber) =>{
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  };

  const gameOverHandler = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGameHandler}/>;

  if(userNumber && guessRounds <= 0){
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>;
  }else if(guessRounds > 0){
    content = <GameOverScreen 
    roundsNumber={guessRounds} 
    userNumber={userNumber}
    onRestart={configureNewGameHandler}
    />
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess a number'></Header>
      {content}
    </View>
    
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }

});