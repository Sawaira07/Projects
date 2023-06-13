import React from 'react';
import {View, StyleSheet, Text, Image,ScrollView,ImageBackground} from 'react-native';


const BulletList = () => {
    const bullet = '\u27A4'; // Unicode character for bullet point
  
    return (
        <ScrollView>
        <Text style={{color: "#F23C5D", fontWeight: 'bold', fontSize: 19, marginTop:10, marginBottom:10,marginLeft:10 }}>
HeartAttacks
</Text>
        <Text style={{color:"black", fontSize:15,marginLeft:10,textAlign: 'justify',marginRight:10}}>
        A Heart Attack is one of the most common life-threatening heart conditions in the World.{'\n'}{'\n'}
If you think someone is having or has had a heart attack, call 1122 and then move them into a comfortable sitting position.{'\n'}{'\n'}

<Text style={{color:"black",fontWeight:"bold", fontSize:17,marginLeft:10,textAlign: 'justify',marginRight:10}}>Symptoms of a heart attack include:
{'\n'} </Text>
{'\n'}
{bullet}Chest pain – the pain is usually located in the centre or left side of the chest and can feel like a sensation of pressure, tightness or squeezing
{'\n'}{'\n'} 
{bullet}Pain in other parts of the body – it can feel as if the pain is travelling from the chest down 1 or both arms, or into the jaw, neck, back or abdomen (tummy)
{'\n'}{'\n'} 
{bullet}Sit the person down and make them comfortable.
{'\n'}{'\n'} 
{bullet}If they can, it's best for them to sit on the floor with their knees bent and their head and shoulders supported. If possible, place cushions behind them or under their knees.
{'\n'}{'\n'} 
{bullet}If they're conscious, reassure them and ask them to take a 300mg aspirin tablet to chew slowly, (unless you know they shouldn't take aspirin, for example if they are under 16 or they say they are allergic to it).
{'\n'}{'\n'} 
{bullet}If the person has any medication for angina, help them to take it.
{'\n'}{'\n'} 
{bullet}Monitor their vital signs, such as their breathing, until help arrives.
{'\n'}{'\n'} 
{bullet}If the person deteriorates and becomes unconscious, open their airway, check their breathing and, if necessary, start CPR.{'\n'}{'\n'} 

</Text>


    
      </ScrollView>
    );
  };
  
  export default BulletList;

