import React from 'react';
import {View, StyleSheet, Text, Image,ScrollView,ImageBackground} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen } from './Constants';



const Home = (props) => {
  return (
     
    <ScrollView>
     
      
    <View>
     <Image
      source={require("./assets/rq.jpg")}
        style={{width: 350, height: 230, alignContent: 'center',marginTop: 100}}
      />
    </View>
    <View style={{ marginHorizontal: 5, marginVertical: 100 }}>
    <Btn bgColor={darkGreen} textColor='white' btnLabel="Login" Press={() => props.navigation.navigate("Login")} />
    <Btn bgColor={darkGreen} textColor= 'white' btnLabel="Signup" Press={() => props.navigation.navigate("Signup")} />
    </View>
   
                
  
  </ScrollView>
    
    
  );
}


const styles = StyleSheet.create({
})

export default Home;







