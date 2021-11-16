import { signOut } from '@firebase/auth';
import { useNavigation } from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import TaskInputField from '../components/createNew';
import GetToDo from '../components/getAll';
import { auth } from '../services/firebase';


export default function todoScreen() {

  const navigation = useNavigation()
  const handleSignOut=()=>{
    signOut(auth).then(()=>{
      navigation.replace('Login')
    }).catch(error=>{console.log(error);})
  }
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style = {styles.heading}>TODOLIST</Text>
        <TouchableOpacity
        onPress={handleSignOut}>
          <Text style={styles.signOutButton}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
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
    // width: '70%'
  },
  scrollView: {
    marginBottom: 70,
  },
  taskContainer: {
    marginTop: 20,
  },
  signOutButton: {
    color:'white',
    fontSize: 15,
    fontWeight: '100',
    marginTop: 20,
    // marginBottom: 10,
    marginRight: 10,
    paddingTop: 5,
    width: 100,
    height: 30,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 6,
    textAlign: 'center',
  }
});