import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import {useState} from 'react';
import TaskInputField from './components/createNew';
import GetToDo from './components/getAll';
import Delete from './components/deleteTask'

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.heading}>TODOLIST</Text>
      <ScrollView styles={styles.ScrollView}>
        <GetToDo/>
      </ScrollView>
      <TaskInputField/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C'
  },
  heading:{
    color:'#fff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 20,
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  },
});
