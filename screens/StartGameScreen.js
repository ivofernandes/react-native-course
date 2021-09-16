import React from 'react';
import {View,Text, StyleSheet, Button} from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';

const StartGameScreen = props => {
    return (
        <View style={styles.screen}>
            <Text> Start a new game!</Text>
            <Card style={styles.inputContainer}>
                <Text style={styles.title}>Select a Number</Text>
                <Input style={styles.inputText} blurOnSubmit autoCapitalize='none' keyboardType='number-pad' maxLength={2} />
                <View style={styles.buttonContainer}>
                    <Button title="Reset" color='red' onPress={() => {console.log('will reset')}}></Button>
                    <Button title="Confirm"  color='green' onPress={() => {console.log('will confirm')}}></Button>
                </View>
            </Card>
        </View>
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
  inputContainer:{
    width:300,
    shadowColor: 'red',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,
  }, 
  inputText:{
    textAlign: 'center'
  }
});

export default StartGameScreen;