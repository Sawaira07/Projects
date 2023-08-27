import React from 'react';
import {View, StyleSheet, Text, Image,ScrollView} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen } from './Constants';



const Main = (props) => {
  return (
     
    <ScrollView>
    <View>
     <Image
      source={require("./assets/image.jpg")}
        style={{width: 350, height: 150, alignContent: 'center', marginTop:20}}
      />
    </View>
    <View style={{ marginHorizontal: 5, marginVertical: 100 }}>
    <Btn bgColor={darkGreen} textColor='white' btnLabel="Turn On Detection" Press={() => props.navigation.navigate("detector")} />
    <Btn bgColor={darkGreen} textColor= 'white' btnLabel="Tracker" Press={() => props.navigation.navigate("Signup")} />
    <Btn bgColor={darkGreen} textColor= 'white' btnLabel="FirstAid Booklet" Press={() => props.navigation.navigate("Guidebook")} />
    <Btn bgColor={darkGreen} textColor= 'white' btnLabel="How it Works?" Press={() => props.navigation.navigate("khan")} />
    <Btn bgColor={darkGreen} textColor= 'white' btnLabel="AboutUs" Press={() => props.navigation.navigate("Aboutus")} />
    <Btn bgColor={darkGreen} textColor= 'white' btnLabel="Emergency" Press={() => props.navigation.navigate("Numbers")} />
    </View>
   
                
  
  </ScrollView>
    
    
  );
}

const styles = StyleSheet.create({
})

export default Main;







