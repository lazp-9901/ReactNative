import React, { useEffect, useState } from "react";
import { View, TextInput, Text, KeyboardAvoidingView, Image, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import moment from 'moment';
import { getWeather } from "../services/weatherServices";


const Weather = ()=>{

    const defaultValue = "--"
    const [local, setLocal] = useState("hanoi")
    const [data, setData] = useState([])
    const [city, setCity] = useState("")
    const [des, setDes] = useState("")
    const [temp, setTemp] = useState("")
    const [icon, setIcon] = useState("")
    const [sunrise, setSunrise] = useState("")
    const [sunset, setSunset] = useState("")
    const [humidity, setHumidity] = useState("")
    const [wind, setWind] = useState("")
    const [country, setCountry] = useState("")

    useEffect(()=>{async function fetchData(){
        try{
            const {data} = await getWeather(local);
            setData({data}.data);
            setCity(data.name)
            setDes(data.weather[0].description)
            setTemp(Math.round(data.main.temp))
            setIcon(data.weather[0].icon)
            setSunrise(moment.unix(data.sys.sunrise).format('H:mm'))
            setSunset(moment.unix(data.sys.sunset).format('H:mm'))
            setHumidity(data.main.humidity)
            setWind((data.wind.speed*3.6).toFixed(2))
            setCountry(data.sys.country)
        }
        catch(error){
            console.log(error);
            setCity(defaultValue)
            setDes(defaultValue)
            setTemp(defaultValue)
            setIcon(defaultValue)
            setSunrise(defaultValue)
            setSunset(defaultValue)
            setHumidity(defaultValue)
            setWind(defaultValue)
            setCountry(defaultValue)
        }
    }
    fetchData();
    },[local])
    console.log(data);

    return(
        <View>
            <KeyboardAvoidingView style={styles.searchbar}> 
                <TextInput 
                    style={{
                        color:'#fff',
                        borderWidth: 1,
                        borderBottomColor: 'white'
                        }}
                    placeholder={"Nhập địa điểm"}
                    placeholderTextColor={'#fff'}
                    value={local}
                    onChangeText={text=>{setLocal(text)}}
                />
                <MaterialIcons name='search' size={28} color={'#fff'} style={{
                        color:'#fff',
                        borderWidth: 1,
                        borderBottomColor: 'white'
                        }}/>
            </KeyboardAvoidingView>
            <View style={styles.mainFeild}>
                <Text style={{color:'white'}}>{city}, {country}</Text>
                <Text style={{color:'white'}}>{des}</Text>
                <Image source={{uri: `http://openweathermap.org/img/wn/${icon}@2x.png`}} style={{width:50, height:50}}></Image>
                <Text style={{color:'white', fontSize:26}}>{temp}C</Text>
            </View>
            <View style={styles.inforFeild}>
                <View style={{marginLeft: '20%',width: '30%'}}>
                    <Text style={{color:'white'}}>Mặt trời mọc</Text>
                    <Text style={{color:'white', marginBottom: 20}}>{sunrise}</Text>
                    <Text style={{color:'white'}}>Độ ẩm</Text>
                    <Text style={{color:'white'}}>{humidity}%</Text>
                </View>
                <View style={{marginLeft: '20%',width: '30%'}} >
                    <Text style={{color:'white'}}>Mặt trời lặn</Text>
                    <Text style={{color:'white', marginBottom: 20}}>{sunset}</Text>
                    <Text style={{color:'white'}}>Gió</Text>
                    <Text style={{color:'white'}}>{wind}Km/h</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    searchbar:{
        flexDirection: 'row',
    },
    mainFeild:{
        textAlign: 'center',
        alignItems: 'center',
        marginTop : 30,
    },
    inforFeild: {
        marginTop: 70,
        flexDirection: 'row',
    }
})
export default Weather;