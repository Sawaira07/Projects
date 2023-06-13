import React from 'react';
import {View, StyleSheet, Text, Image,ScrollView,ImageBackground} from 'react-native';


const BulletList = () => {
    const bullet = '\u27A4'; // Unicode character for bullet point
  
    return (
        <ScrollView>
        <Text style={{color: "#F23C5D", fontWeight: 'bold', fontSize: 19, marginTop:10, marginBottom:10,marginLeft:10 }}>
Shock
</Text>
<Text style={{color:"black", fontSize:15,marginLeft:10,textAlign: 'justify',marginRight:10}}>
 In the case of a serious injury or illness, it's important to look out for signs of shock.
{'\n'}{'\n'}Shock is a life-threatening condition that occurs when the circulatory system fails to provide enough oxygenated blood to the body and, as a result, deprives the vital organs of oxygen.
{'\n'}{'\n'} 
{bullet}This is usually the result of severe blood loss, but it can also occur after severe burns, severe vomiting, a heart attack, a bacterial infection, or a severe allergic reaction (anaphylaxis).
{'\n'}{'\n'} 
{bullet}The type of shock described here isn't the same as the emotional response of feeling shocked, which can also occur after an accident.
{'\n'}{'\n'} 
<Text style={{color:"black",fontWeight:"bold", fontSize:17,marginLeft:10,textAlign: 'justify',marginRight:10}}>Signs of shock include:</Text>
{'\n'}{'\n'} 
{bullet}Pale, cold, clammy skin
{'\n'}{'\n'} 
{bullet}Sweating
{'\n'}{'\n'} 
{bullet}Rapid, shallow breathing
{'\n'}{'\n'} 
{bullet}Weakness and dizziness
{'\n'}{'\n'} 
{bullet}Feeling sick and possibly vomiting
{'\n'}{'\n'} 
{bullet}Thirst
{'\n'}{'\n'} 
{bullet}Yawning
{'\n'}{'\n'} 
{bullet}sighing
{'\n'}
<Text style={{color:"black",fontWeight:"bold", fontSize:17,marginLeft:10,textAlign: 'justify',marginRight:10}}>Seek medical help immediately if you notice that someone has any of these signs of shock.
{'\n'}{'\n'}You should:</Text>

{'\n'}{'\n'} 
{bullet}Call 1122 as soon as possible and ask for an ambulance
{'\n'}{'\n'} 
{bullet}Treat any obvious injuries
{'\n'}{'\n'} 
{bullet}Lie the person down if their injuries allow you to and, if possible, raise and support their legs
{'\n'}{'\n'} 
{bullet}Use a coat or blanket to keep them warm
{'\n'}{'\n'} 
{bullet}Do not give them anything to eat or drink
{'\n'}{'\n'} 
{bullet}Give them lots of comfort and reassurance
{'\n'}{'\n'} 
{bullet}Monitor the person – if they stop breathing, start CPR and call 1122 to update them

{'\n'}{'\n'} 
</Text>


    
      </ScrollView>
    );
  };
  
  export default BulletList;

