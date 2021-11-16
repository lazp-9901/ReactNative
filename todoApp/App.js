import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import todoScreen from './screens/todoScreen';
import weatherScreen from './screens/weatherScreen'
import LoginScreen from './screens/loginScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Todo') {
          iconName = focused
            ? 'book'
            : 'md-book';
        } else if (route.name === 'Thời tiết') {
          iconName = focused ? 'md-rainy' : 'md-sunny';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
    })}
    >
      <Tab.Screen name="Todo" component={todoScreen}/>
      <Tab.Screen name="Thời tiết" component={weatherScreen} />

    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Main" component={MyTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

