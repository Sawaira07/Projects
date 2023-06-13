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
       
        </ScrollView>
        );
      };
      
      export default BulletList;
    