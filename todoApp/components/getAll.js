import React, {useEffect, useState } from 'react';
import { View, ScrollView, Text, StyleSheet, TouchableOpacity} from "react-native";
import {MaterialIcons} from '@expo/vector-icons'
import { getTasks, deleteTask } from '../services/taskServices';

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
    },[]);  
    return(
        <ScrollView>
        {
            task.map((tas,index) => {
                return(
                    <View key={index} style={styles.taskvContainer}>
                        {/* <Delete index={index+1} task={tas.work} deleteTask={()=>deleteTask(tas._id)}/> */}
                        <View style={styles.container}>
                            <View style={styles.indexContainer}>
                                <Text style={styles.index}>{index+1}</Text>
                            </View>
                            <View style={styles.taskContainer}>
                                <Text style={styles.task}>{tas.work}</Text>
                                <TouchableOpacity onPress={() => {
                                    deleteTask(tas._id);
                                }}>
                                    <MaterialIcons style={styles.delete} name="delete" size={18} color='#fff' />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                );
            })
        }
        </ScrollView>
       
    );

}
const styles = StyleSheet.create({
    taskvContainer: {
      marginTop: 20,
    },
    container: {
        flexDirection: 'row',
        marginHorizontal: 20,
    },
    indexContainer: {
        backgroundColor: '#3E3364',
        borderRadius: 12,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
    },
    index: {
        color: '#fff',
        fontSize: 20,
    },
    taskContainer: {
        backgroundColor: '#3E3364',
        borderRadius: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        minHeight: 50,
    },
    task: {
        color: '#fff',
        width: '90%',
        fontSize: 16,
    },
    delete: {
        marginLeft: 10,
    },
    
});
export default getToDo;