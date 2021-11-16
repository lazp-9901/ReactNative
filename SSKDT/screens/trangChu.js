import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';


function trangChu() {
    return (
      <ScrollView>
      <View style={styles.head}>
          <View style={styles.headIcon}>
          <MaterialIcons name="person" size={40} color='#000' />
          </View>
          <View style={styles.headInfor}>
              <Text style={styles.headHello}>Xin chào,</Text>
              <Text style={styles.headName}>Nguyen Van A</Text>
          </View>
      </View>
      <View style={styles.menuTop}>
        <View style={styles.menuTop1}>
          <View>
            <View><MaterialIcons name="book" size={28} color="#000"/></View>
          </View>
          <Text>Khai báo y tế</Text>
        </View>
        <View>
          <View>
            <View><MaterialIcons name="coronavirus" size={28} color="#000"/></View>
          </View>
          <Text>Chứng nhận tiêm chủng</Text>
        </View>
        <View>
          <View>
            <View><MaterialIcons name="speaker" size={28} color="#000"/></View>
          </View>
          <Text>Khai báo y tế</Text>
        </View>
      </View>
      </ScrollView>
    );
  }
const styles = StyleSheet.create({
  head: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 10,
    height: '15%'
  },
  headInfor: {
    marginLeft: 20
  },
  headIcon: {
    borderWidth: 3,
    borderColor: 'blue',
    borderRadius: 55,
  },
  headHello: {
    fontSize: 15,
    color: "#111"
  },
  headName:{
    fontSize: 20,
    color: "#111"
  },
  menuTop: {
    flex: 3,
    flexDirection: 'row',
    margin: 10,
    marginTop: 30,
    height: '90%'
  },
  menuTop1: {
    height: '100%',
    width: '30%',
    backgroundColor: "blue"
  },

})

export default trangChu;