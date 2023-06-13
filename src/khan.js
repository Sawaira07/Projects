import React from 'react';
import {View, StyleSheet, Text, Image,ScrollView,ImageBackground} from 'react-native';


const BulletList = () => {
    const bullet = '\u27A4'; // Unicode character for bullet point
  
    return (
        <ScrollView>
<Image
      source={require("./assets/emergencyno.jpg")}
        style={{width: 300, height: 300, borderWidth:2, borderColor: "black", alignContent: 'center',marginBottom: 20,marginLeft:30}}
      />
      <Text style={{color: "black", fontWeight: 'bold', fontSize: 26, marginBottom:0,marginLeft:30 }}>
ISLAMABAD
</Text>
      <Image
      source={require("./assets/Islamabad.jpg")}
        style={{width: 350, height: 220, borderWidth:2, borderColor: "black", alignContent: 'center',marginBottom: 20,marginLeft:5}}
      />
      <Text style={{color: "black", fontWeight: 'bold', fontSize: 26, marginBottom:0,marginLeft:30 }}>
LAHORE
</Text>
      <Image
      source={require("./assets/Lahore.jpg")}
        style={{width: 350, height: 230, borderWidth:2, borderColor: "black", alignContent: 'center',marginBottom: 20,marginLeft:5}}
      />
      <Text style={{color: "black", fontWeight: 'bold', fontSize: 26, marginBottom:0,marginLeft:30 }}>
MULTAN
</Text>
      <Image
      source={require("./assets/Multan.jpg")}
        style={{width: 300, height: 80, borderWidth:2, borderColor: "black", alignContent: 'center',marginBottom: 20,marginLeft:10}}
      />
      <Text style={{color: "black", fontWeight: 'bold', fontSize: 26, marginBottom:0,marginLeft:30 }}>
HYDERABAD
</Text>
      <Image
      source={require("./assets/Hyderabad.jpg")}
        style={{width: 345, height: 80, borderWidth:2, borderColor: "black", alignContent: 'center',marginBottom: 20,marginLeft:5}}
      />
      <Text style={{color: "black", fontWeight: 'bold', fontSize: 26, marginBottom:0,marginLeft:30 }}>
BAHAWALPUR
</Text>
      <Image
      source={require("./assets/BahawalPur.jpg")}
        style={{width: 330, height: 80, borderWidth:2, borderColor: "black", alignContent: 'center',marginBottom: 20,marginLeft:5}}
      />
       
       <Text style={{color: "black", fontWeight: 'bold', fontSize: 26, marginBottom:0,marginLeft:30 }}>
FAISALABAD
</Text>
      <Image
      source={require("./assets/Faisalabad.jpg")}
        style={{width: 300, height: 300, borderWidth:2, borderColor: "black", alignContent: 'center',marginBottom: 20,marginLeft:30}}
      />
      <Text style={{color: "black", fontWeight: 'bold', fontSize: 26, marginBottom:0,marginLeft:30 }}>
NAWABSHAH
</Text>
      <Image
      source={require("./assets/Nawabshah.jpg")}
        style={{width: 300, height: 300, borderWidth:2, borderColor: "black", alignContent: 'center',marginBottom: 20,marginLeft:30}}
      />
      <Text style={{color: "black", fontWeight: 'bold', fontSize: 26, marginBottom:0,marginLeft:30 }}>
PESHAWAR
</Text>
      <Image
      source={require("./assets/Peshawar.jpg")}
        style={{width: 300, height: 300, borderWidth:2, borderColor: "black", alignContent: 'center',marginBottom: 20,marginLeft:30}}
      />
      <Text style={{color: "black", fontWeight: 'bold', fontSize: 26, marginBottom:0,marginLeft:30 }}>
QUETTA
</Text>
      <Image
      source={require("./assets/Quetta.jpg")}
        style={{width: 300, height: 300, borderWidth:2, borderColor: "black", alignContent: 'center',marginBottom: 20,marginLeft:30}}
      />
      <Text style={{color: "black", fontWeight: 'bold', fontSize: 26, marginBottom:0,marginLeft:30 }}>
SUKKUR
</Text>
      <Image
      source={require("./assets/Sukkur.jpg")}
        style={{width: 300, height: 300, borderWidth:2, borderColor: "black", alignContent: 'center',marginBottom: 20,marginLeft:30}}
      />
        </ScrollView>
        );
      };
      
      export default BulletList;
    


      