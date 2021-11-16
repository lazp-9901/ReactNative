import React, {useEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet, TextInput, Keyboard } from "react-native";
import { getTasks, deleteTask,updateTask } from '../services/taskServices';
import Delete from './deleteTask'

const getToDo = () =>{
    const [task, setTask] = useState([]);

    useEffect(()=>{ async function fetchData(){
        try {
            const {data} = await getTasks();
            setTask({data}.data)
        } catch (error) {
            console.log(error);
        }
    }
    fetchData();
    });  
    return(
        <ScrollView>
        {
            task.map((tas,index) => {
                return(
                    <View key={index} style={styles.taskContainer}>
                        <Delete index={index+1} task={tas.content} deleteTask={()=>deleteTask(tas._id)}/>
                    </View>
                );
            })
        }
        </ScrollView>
    );

}
const styles = StyleSheet.create({
    taskContainer: {
      marginTop: 20,
    },
});
export default getToDo;
