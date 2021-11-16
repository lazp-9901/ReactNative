import React, {useState} from 'react';
import { KeyboardAvoidingView, StyleSheet, View, TextInput, TouchableOpacity, } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 
import { addTask} from '../services/taskServices';

const TaskInputField = (props) => {
    const [task, setTask] = useState();

    async function handleAddTask(value){
        await addTask(value);
        setTask("");
    }

    return (
        <KeyboardAvoidingView 
        style={styles.container}
      >
        <TextInput style={styles.inputField} 
        value={task} 
        onChangeText={text => setTask(text)} 
        placeholder={'Nhập vào việc cần làm'} 
        placeholderTextColor={'#fff'}/>
        <TouchableOpacity onPress={() => handleAddTask({"content":String(task)})}>
          <View style={styles.button}>
              <MaterialIcons name="keyboard-arrow-up" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        borderColor: '#fff',
        backgroundColor: '#3E3364',
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        position: 'absolute',
        bottom: 20,
    },
    inputField: {
        color: '#fff',
        height: 50,
        flex: 1,
    },
    button: {
        height: 30,
        width: 30,
        borderRadius: 5,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
});
export default TaskInputField;