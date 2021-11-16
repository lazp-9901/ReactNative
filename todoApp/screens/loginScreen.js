import React from "react";
import { View, Text, StyleSheet} from "react-native"
import Login from "../components/login";


const LoginScreen=()=>{
    return(
        <View style={styles.container}>
            <Login/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: 'stretch',
        backgroundColor: '#1E1A3C'
    },
})

export default LoginScreen;