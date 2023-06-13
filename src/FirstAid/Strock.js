import React from 'react';
import {View, StyleSheet, Text, Image,ScrollView,ImageBackground} from 'react-native';


const BulletList = () => {
    const bullet = '\u27A4'; // Unicode character for bullet point
  
    return (
        <ScrollView>
        <Text style={{color: "#F23C5D", fontWeight: 'bold', fontSize: 19, marginTop:10, marginBottom:10,marginLeft:10 }}>Stroke{'\n'}</Text>
<Text style={{color:"black", fontSize:15,marginLeft:10,textAlign: 'justify',marginRight:10}}> 
        {bullet}The FAST guide is the most important thing to remember when dealing with people who have had a stroke.{'\n'}{'\n'}
        {bullet}The earlier they receive treatment, the better. Call for emergency medical help straight away.{'\n'}
        <Text style={{color:"black",fontWeight:"bold",fontSize:17,marginLeft:10,textAlign: 'justify',marginRight:10}}>{'\n'}If you think a person has had a Stroke, use the FAST Guide:</Text> {'\n'}
        {'\n'}{bullet}Face: The face may have dropped on 1 side, the person may not be able to smile, or their mouth or eye may have drooped.{'\n'} 
        {'\n'}{bullet}Arms: The person with suspected stroke may not be able to lift both arms and keep them there because of weakness or numbness in 1 arm.{'\n'}  
        {'\n'}{bullet}Speech: Their speech may be slurred or garbled, or the person may not be able to talk at all despite appearing to be awake.{'\n'}  
        {'\n'}{bullet}Time: It's time to dial 1122 immediately if you notice any of these signs or symptoms.{'\n'}  
        {'\n'}
</Text>


    
      </ScrollView>
    );
  };
  
  export default BulletList;

