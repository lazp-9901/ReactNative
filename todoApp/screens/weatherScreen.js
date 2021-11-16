import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Weather from "../components/weather";

const weatherScreen = ()=>{
    return(
            <View style={styles.container}>
                <Weather/>
            </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#1E1A3C',
        color: '#fff'
    }
})
export default weatherScreen;