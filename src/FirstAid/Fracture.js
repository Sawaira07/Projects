import React from 'react';
import {View, StyleSheet, Text, Image,ScrollView,ImageBackground} from 'react-native';


const BulletList = () => {
    const bullet = '\u27A4'; // Unicode character for bullet point
  
    return (
        <ScrollView>
        <Text style={{color: "#F23C5D", fontWeight: 'bold', fontSize: 19, marginTop:10, marginBottom:10,marginLeft:10 }}>
Fractures
</Text>
        <Text style={{color:"black", fontSize:15,marginLeft:10,textAlign: 'justify',marginRight:10}}>

{bullet}It can be difficult to tell if a person has a broken bone or a joint, as opposed to a simple muscular injury. If you're in any doubt, treat the injury as a broken bone.
{'\n'}{'\n'} 
{bullet}If the person is unconscious or is bleeding heavily, these must be dealt with first by controlling the bleeding with direct pressure and performing CPR.
{'\n'}{'\n'} 
{bullet}If the person is conscious, prevent any further pain or damage by keeping the fracture as still as possible until you get them safely to hospital.
{'\n'}{'\n'} 
{bullet}If they're in a lot of pain and in need of strong pain killing medication – call an ambulance and do not move them
{'\n'}{'\n'} 
{bullet}It's obvious they have a broken leg – do not move them, but keep them in the position you found them in and call an ambulance
{'\n'}{'\n'} 
{bullet}You suspect they have injured or broken their back – call an ambulance and do not move them{'\n'}{'\n'} 

</Text>


    
      </ScrollView>
    );
  };
  
  export default BulletList;

