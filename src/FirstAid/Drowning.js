import React from 'react';
import {View, StyleSheet, Text, Image,ScrollView,ImageBackground} from 'react-native';


const BulletList = () => {
    const bullet = '\u27A4'; // Unicode character for bullet point
  
    return (
        <ScrollView>
        <Text style={{color: "#F23C5D", fontWeight: 'bold', fontSize: 19, marginTop:10, marginBottom:10,marginLeft:10 }}>
Drowning</Text>

<Text style={{color:"black", fontSize:15,marginLeft:10,textAlign: 'justify',marginRight:10}}>
{'\n'} 
{bullet}If someone is in difficulty in water, don't enter the water unless it's safe to do so. Don't put yourself at risk.
{'\n'}{'\n'} 
{bullet}Once the person is on land, you need to check if they're breathing. Ask someone to call 999 for medical help.
{'\n'}{'\n'} 
{bullet}If they're not breathing, open the airway and give 5 initial rescue breaths before starting CPR.
{'\n'}{'\n'} 
{bullet}Electric shock (domestic)
{'\n'}{'\n'} 
{bullet}If someone has had an electric shock, switch off the electrical current at the mains to break the contact between the person and the electrical supply.
{'\n'}{'\n'}

<Text style={{color: "black", fontWeight: 'bold', fontSize: 17, marginTop:10, marginBottom:10,marginLeft:10 }}>If you can't reach the mains supply:</Text>

{'\n'}{'\n'}
 
{bullet}Do not go near or touch the person until you're sure the electrical supply has been switched off.
{'\n'}{'\n'} 
{bullet}Once the power supply has been switched off, and if the person isn't breathing, dial 1122 to for an ambulance.{'\n'}{'\n'} 
</Text>



    
      </ScrollView>
    );
  };
  
  export default BulletList;

