import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/numberContainer';

const StartGameScreen = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const [confirmed, setConfirmed] = useState(false);

  const [selectedNumber, setSelectedNumber] = useState();
  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''));
  }

  const resetInputHandler = () => {
    console.log('reset');
    setEnteredValue('');
    setConfirmed(false);
  };

  const confirmInputHandler = () => {
    console.log('confirm');

    const chosenNumber = parseInt(enteredValue);
    if(!chosenNumber|| chosenNumber <= 0 || chosenNumber > 99){
      Alert.alert('Invalid number!', 'Number has to be between 1 and 99.', [{text:'Okay', style: 'destructive', onPress: resetInputHandler}]);
      return;
    }

    setConfirmed(true);
    setEnteredValue('');
    setSelectedNumber(chosenNumber);
    Keyboard.dismiss();
  };

  let confirmedOutput;
  if(confirmed){
    confirmedOutput = (
    <Card style={styles.summaryContainer}>
      <Text>You selected</Text>
      <NumberContainer>{selectedNumber}</NumberContainer>
      <Button title='START GAME' onPress= {() => props.onStartGame(selectedNumber)}/>
    </Card>
    )
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }}>
      <View style={styles.screen}>
        <Text> Start a new game!</Text>
        <Card style={styles.inputContainer }>
          <Text style={styles.title}>Select a Number</Text>
          <Input style={styles.inputText}
            blurOnSubmit autoCapitalize='none' keyboardType='number-pad' maxLength={2} 
            onChangeText={numberInputHandler}
            value={enteredValue}/>
          <View style={styles.buttonContainer}>
            <Button title="Reset" color='red' onPress={resetInputHandler}></Button>
            <Button title="Confirm" color='green' onPress={confirmInputHandler}></Button>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    shadowColor: 'red',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,
  },
  inputText: {
    textAlign: 'center'
  }, 
  summaryContainer:{
    marginTop: 10,
    alignItems: 'center'
  }
});

export default StartGameScreen;