import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import quetQR from './screens/quetQR';
import caNhan from './screens/canhan';
import thongBao from './screens/thongbao';
import trangChu from './screens/trangChu';
import lichHen from './screens/lichHen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Trang chu" component={trangChu}/>
      <Tab.Screen name="Lich hen" component={lichHen} />
      <Tab.Screen name="Quet QR" component={quetQR}/>
      <Tab.Screen name="Ca nhan" component={caNhan}/>
      <Tab.Screen name="Thong bao" component={thongBao}/>

    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
