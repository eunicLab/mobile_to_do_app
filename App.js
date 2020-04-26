import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
} from 'react-native';
import InputText from './InputText.js';
import ListOfGoals from './ListOfGoals.js';
export default function App() {
  const [Goals, setAddGoal] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    setAddGoal((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };
  const removeGoalHandler = (goalId) => {
    setAddGoal((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setIsAddMode(true)} />
      <InputText
        cancelAdd={cancelGoalAdditionHandler}
        visible={isAddMode}
        handleaddButton={addGoalHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={Goals}
        renderItem={(itemData) => (
          <ListOfGoals
            title={itemData.item.value}
            id={itemData.item.id}
            onDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 },

  goalList: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderColor: 'black',
  },
});
