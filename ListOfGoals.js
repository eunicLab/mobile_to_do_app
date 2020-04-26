import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
const ListOfGoals = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.goalList}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default ListOfGoals;
const styles = StyleSheet.create({
  goalList: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#ccc',
    borderWidth: 1,
    borderColor: 'black',
  },
});
