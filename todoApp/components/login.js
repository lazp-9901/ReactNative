import React, { useState, useEffect } from "react";
import { View, 
    Text, 
    StyleSheet, 
    TouchableOpacity, 
    TextInput} from "react-native"
import { Ionicons } from "@expo/vector-icons";
import { auth, db } from "../services/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { useNavigation } from "@react-navigation/core";

const Login=()=>{
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    const navigation = useNavigation()

    useEffect(() => {
        const unsub = auth.onAuthStateChanged(user=>{
            if(user){
                navigation.replace("Main")
            }
        })
        return unsub
    }, [])

    const handleSignUp = ()=>{
        createUserWithEmailAndPassword(auth ,email ,password)
        .then(userCredentials=>{
            const user = userCredentials.user;
            console.log(user.email);
        })
        .catch(error => alert(error))
    }


    const handleLogin=()=>{
        signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials=>{
            const user = userCredentials.user;
            console.log(user.email)
        })
        .catch(error=>aler(error))
    }

    return(
        <View>
           <View style={styles.up}>
               <Ionicons name='person' size={150} color='white'/>
               <Text style={styles.title}>TodoApp</Text>
           </View>
           <View styles={styles.down}>
                <View style={styles.textInputContainer}>
                    <TextInput 
                    style={{
                        marginTop: 220,
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        borderRadius: 6,
                        width: 280,
                        height: 45,
                        alignItems: 'center',
                        padding: 10}}
                        textContentType='emailAddress'
                        keyboardType='email-address'
                        placeholder='Email'
                        value={email}
                        onChangeText={text=>setEmail(text)}>
                        </TextInput>
                    <TextInput style={styles.textInput}
                        textContentType='emailAddress'
                        keyboardType='email-address'
                        placeholder='Password'
                        secureTextEntry={true}
                        value={password}
                        onChangeText={text=>setPassword(text)}>
                        </TextInput>
                </View>
                <TouchableOpacity style={styles.loginButton}>
                    <Text 
                    style={styles.loginButtonTitle}
                    onPress={handleLogin}> Đăng nhập</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                style={styles.registerButton}
                onPress={handleSignUp}>
                    <Text style={styles.registerButtonTitle}> Đăng kí</Text>
                </TouchableOpacity>
           </View>
           <View style={{height:300}}>
               <Text style={{
                   color: 'white',
                   paddingTop:150, 
                   textAlign: 'center'}}>
                       copyright: 2021@, contact: abc@gmail.com</Text>
           </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'flex-start',
        backgroundColor: '#1E1A3C'
    },
    up: {
        flex:3,
        marginTop: 20,
        alignItems: 'center',
        flexDirection: 'column'
    },
    down: {
        flex:7,
        flexDirection: 'column',
        backgroundColor: 'blue',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    title:{
        color: 'white',
        width: 400,
        fontSize: 35,
        textAlign:'center'
    },
    textInputContainer: {
        paddingHorizontal: 10,
        borderRadius: 6,
        marginTop: 50,
        alignItems: 'center'
    },
    textInput: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 6,
        marginTop: 20,
        width: 280,
        height: 45,
        alignItems: 'center',
        padding: 10
    },
    loginButton: {
        width: 280,
        height:45,
        borderRadius: 6,
        alignItems: 'center',
        backgroundColor: 'rgb(211,97,97)',
        borderRadius: 6,
        marginTop: 20,
        marginLeft: '15%',
        padding: 10,
        textAlign: 'center'
    },
    loginButtonTitle:{
        fontSize: 18,
        color: 'white',
        alignItems: 'center',
        
    },
    registerButton:{
        borderColor: "rgb(211,97,97)",
        borderWidth: 2,
        borderRadius: 6,
        padding:10,
        textAlign: 'center',
        alignItems:'center',
        width: 280,
        height:45,
        marginTop: 20,
        marginLeft: '15%',
        },
    registerButtonTitle: {
        color:"white",
        fontSize: 18,
    },
})

export default Login;