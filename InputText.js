import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Modal } from 'react-native';

const InputText = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    props.handleaddButton(enteredGoal);
    setEnteredGoal('');
  };
  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.textAndButton}>
        <TextInput
          placeholder='Enter your goal here'
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.twoButtons}>
          <View style={styles.button}>
            <Button title='Cancel' color='red' onPress={props.cancelAdd} />
          </View>
          <View style={styles.button}>
            <Button title='Add' onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default InputText;
const styles = StyleSheet.create({
  textAndButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '80%',
  },
  twoButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  button: {
    width: '40%',
  },
});
