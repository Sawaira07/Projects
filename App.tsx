import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import Signup from './src/Signup';
import Login from './src/Login';
import Main from './src/Main';
import Aboutus from './src/Aboutus';
import Guidebook from './src/Guidebook';
import CPR from './src/FirstAid/CPR';
import Anaphylaxis from './src/FirstAid/Anaphylaxis';
import Bleeding from './src/FirstAid/Bleeding';
import Burn from './src/FirstAid/Burn';
import Choking from './src/FirstAid/Choking';
import Drowning from './src/FirstAid/Drowning';
import Fracture from './src/FirstAid/Fracture';
import HeartAttack from './src/FirstAid/HeartAttack';
import Poisoning from './src/FirstAid/Poisoning';
import Shock from './src/FirstAid/Shock';
import Strock from './src/FirstAid/Strock';
import khan from './src/khan';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} /> 
        <Stack.Screen name="Aboutus" component={Aboutus} />
        <Stack.Screen name="Guidebook" component={Guidebook} />
        <Stack.Screen name="CPR" component={CPR} />
        <Stack.Screen name="Anaphylaxis" component={Anaphylaxis} />
        <Stack.Screen name="Bleeding" component={Bleeding} />
        <Stack.Screen name="Burn" component={Burn} />
        <Stack.Screen name="Choking" component={Choking} />
        <Stack.Screen name="Drowning" component={Drowning} />
        <Stack.Screen name="Fracture" component={Fracture} />
        <Stack.Screen name="HeartAttack" component={HeartAttack} />
        <Stack.Screen name="Poisoning" component={Poisoning} />
        <Stack.Screen name="Shock" component={Shock} />
        <Stack.Screen name="Strock" component={Strock} />
        <Stack.Screen name="khan" component={khan} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;