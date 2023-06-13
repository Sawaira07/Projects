import React from 'react';
import {View, StyleSheet, Text, Image,ScrollView,ImageBackground} from 'react-native';


const BulletList = () => {
    const bullet = '\u27A4'; // Unicode character for bullet point
  
    return (
        <ScrollView>
        
        <Text style={{color: "#F23C5D", fontWeight: 'bold', fontSize: 19, marginTop:10, marginBottom:10,marginLeft:10 }}>Burns & Scalds</Text>   
<Text style={{color:"black", fontSize:15,marginLeft:10,textAlign: 'justify',marginRight:10}}> 
        If someone has a burn or scald:{'\n'} 
        {bullet}Cool the burn as quickly as possible with cool running water for at least 20 minutes, or until the pain is relieved.{'\n'}{'\n'}  
        {bullet}Call 1122 or seek medical help, if needed.{'\n'}{'\n'}  
        {bullet}While cooling the burn, and before the area begins to swell, carefully remove any clothing or jewellery, unless it's attached to the skin.{'\n'} {'\n'} 
        {bullet}If you're cooling a large burnt area, particularly in babies, children and elderly people, be aware that it may cause hypothermia (it may be necessary to stop cooling the burn to avoid hypothermia).{'\n'} {'\n'} 
        {bullet}If the burn has cooled, cover it loosely with cling film. If cling film isn't available, use a clean, dry dressing or non-fluffy material. Do not wrap the burn tightly as swelling may lead to further injury.{'\n'} {'\n'} 
        {bullet}Do not apply creams, lotions or sprays to the burn.{'\n'} 
        
</Text>
    

<Text style={{color: "#F23C5D", fontWeight: 'bold', fontSize: 19, marginTop:10, marginBottom:10,marginLeft:10 }}>Chemical Burns</Text>   
<Text style={{color:"black", fontSize:15,marginLeft:10,textAlign: 'justify',marginRight:10}}> 
         For chemical burns, wear protective gloves, remove any affected clothing, and rinse the burn with cool running water for at least 20 minutes to remove the chemical.{'\n'} {'\n'} 
        {bullet}If possible, determine the cause of the injury.{'\n'} {'\n'} 
        {bullet}In certain situations where a chemical is regularly handled, a specific chemical antidote may be available to use.{'\n'} {'\n'} 
        {bullet}Be careful not to contaminate and injure yourself with the chemical, and wear protective clothing if necessary.{'\n'} 
        {'\n'}
</Text>


    
      </ScrollView>
    );
  };
  
  export default BulletList;

