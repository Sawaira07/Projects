import React from 'react';
import {View, StyleSheet, Text, Image,ScrollView} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import { darkGreen } from './Constants';



const Guidebook = (props) => {
  return (
     
    <ScrollView>
      <Text style={{color: "#F23C5D", fontWeight: 'bold', fontSize: 26, marginTop:30, marginBottom:0,marginLeft:50 }}>
FIRST AID BOOKLET
</Text>
    <View style={{ marginHorizontal: 5, marginVertical: 30 }}>
    <Btn bgColor={darkGreen} textColor='white' btnLabel="CPR" Press={() => props.navigation.navigate("CPR")} />
    <Btn bgColor={darkGreen} textColor='white' btnLabel="Anaphylaxis" Press={() => props.navigation.navigate("Anaphylaxis")} />
    <Btn bgColor={darkGreen} textColor='white' btnLabel="Bleeding" Press={() => props.navigation.navigate("Bleeding")} />
    <Btn bgColor={darkGreen} textColor='white' btnLabel="Burns & Scalds" Press={() => props.navigation.navigate("Burn")} />
    <Btn bgColor={darkGreen} textColor='white' btnLabel="Choking" Press={() => props.navigation.navigate("Choking")} />
    <Btn bgColor={darkGreen} textColor='white' btnLabel="Drowning" Press={() => props.navigation.navigate("Drowning")} />
    <Btn bgColor={darkGreen} textColor='white' btnLabel="Fracture" Press={() => props.navigation.navigate("Fracture")} />
    <Btn bgColor={darkGreen} textColor='white' btnLabel="HeartAttack" Press={() => props.navigation.navigate("HeartAttack")} />
    <Btn bgColor={darkGreen} textColor='white' btnLabel="Poisoning" Press={() => props.navigation.navigate("Poisoning")} />
    <Btn bgColor={darkGreen} textColor='white' btnLabel="Shock" Press={() => props.navigation.navigate("Shock")} />
    <Btn bgColor={darkGreen} textColor='white' btnLabel="Strock" Press={() => props.navigation.navigate("Strock")} />
    </View>
   
                
  
  </ScrollView>
    
    
  );
}

const styles = StyleSheet.create({
})

export default Guidebook;







